import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useTaskManager } from '../../../../hooks/useTaskManager.ts';
import {
  dataByTaskIdSelector,
  getBoardByIdSelector,
} from '../../../../state/selectors/selectors.ts';
import { FC, useCallback, useMemo } from 'react';
import { TaskEditorModal } from '../../../modals/TaskEditorModal/TaskEditorModal.tsx';

interface ITaskEditorFormValues {
  title: string;
  description?: string;
  subtasks: { id?: string | null; name: string; isCompleted?: boolean }[];
  status: string;
}

export const EditTask: FC = () => {
  const navigate = useNavigate();
  const { boardId, taskId } = useParams<{ boardId: string; taskId: string }>();
  const { updateTask } = useTaskManager();
  const board = useRecoilValue(getBoardByIdSelector(boardId));
  const taskData = useRecoilValue(dataByTaskIdSelector(taskId || ''));

  if (!taskData) {
    console.error('Task not found');
    return null;
  }

  if (!board) {
    console.error('Board not found');
    return null;
  }

  const columnNames = board.columns?.map((column) => column.name) || [];

  const initialValues: ITaskEditorFormValues = useMemo(
    () => ({
      title: taskData.task.title,
      description: taskData.task.description,
      subtasks:
        taskData.task.subtasks?.map((subtask) => ({
          id: subtask.id || null,
          name: subtask.title,
          isCompleted: subtask.isCompleted,
        })) || [],
      status: taskData.task.status,
    }),
    [taskId]
  );

  const handleSubmit = useCallback(
    (values: ITaskEditorFormValues) => {
      updateTask({
        taskId: taskId!,
        updates: {
          title: values.title,
          description: values.description,
          status: values.status,
          subtasks: values.subtasks.map((subtask) => ({
            id: subtask.id || null,
            title: subtask.name,
            isCompleted: subtask.isCompleted || false,
          })),
        },
      });

      navigate(`/board/${boardId}`, { replace: true });
    },
    [taskId]
  );

  return (
    <TaskEditorModal
      initialValues={initialValues}
      onSubmit={handleSubmit}
      isEditing={true}
      columnNames={columnNames}
    />
  );
};
