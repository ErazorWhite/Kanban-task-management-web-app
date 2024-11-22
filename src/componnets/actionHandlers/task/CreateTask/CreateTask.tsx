import { FC, useCallback } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useTaskManager } from '../../../../hooks/useTaskManager.ts';
import { getBoardByIdSelector } from '../../../../state/selectors/selectors.ts';
import { TaskEditorModal } from '../../../modals/TaskEditorModal/TaskEditorModal.tsx';

interface ITaskEditorFormValues {
  title: string;
  description?: string;
  subtasks: { name: string }[];
  status: string;
}

export const CreateTask: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { boardId } = useParams<{ boardId: string }>();
  const board = useRecoilValue(getBoardByIdSelector(boardId));
  const { addTask } = useTaskManager();

  if (!board) {
    console.error('Board not found');
    return null;
  }

  const columnNames = board.columns?.map((column) => column.name) || [];

  const initialValues: ITaskEditorFormValues = {
    title: '',
    description: '',
    subtasks: [{ name: '' }, { name: '' }],
    status: '',
  };

  const handleSubmit = useCallback(
    (values: ITaskEditorFormValues) => {
      addTask({
        boardId: boardId!,
        title: values.title,
        description: values.description,
        status: values.status,
        subtasks: values.subtasks,
      });

      navigate(location.state?.backgroundLocation || '/', { replace: true });
    },
    [boardId]
  );

  return (
    <TaskEditorModal
      initialValues={initialValues}
      onSubmit={handleSubmit}
      isEditing={false}
      columnNames={columnNames}
    />
  );
};
