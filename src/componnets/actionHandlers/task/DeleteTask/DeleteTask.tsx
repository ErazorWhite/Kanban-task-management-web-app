import { FC, useCallback, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTaskManager } from '../../../../hooks/useTaskManager.ts';
import { useRecoilValue } from 'recoil';
import { dataByTaskIdSelector } from '../../../../state/selectors/selectors.ts';
import { DestructiveModal } from '../../../modals/DestructiveModal/DestructiveModal.tsx';

interface IDeleteTaskFormValues {
  title: string;
  message: string;
}

export const DeleteTask: FC = () => {
  const navigate = useNavigate();
  const { boardId, taskId } = useParams<{ boardId: string; taskId: string }>();
  const { deleteTask } = useTaskManager();
  const taskData = useRecoilValue(dataByTaskIdSelector(taskId || ''));

  if (!taskData) {
    console.error('Task not found');
    return null;
  }

  const initialValues: IDeleteTaskFormValues = useMemo(
    () => ({
      title: `Delete this task?`,
      message: `Are you sure you want to delete the ‘${taskData.task.title}’ task and its subtasks? This action cannot be reversed.`,
    }),
    [taskId]
  );

  const handleSubmit = useCallback(() => {
    deleteTask({ taskId: taskId || '' });

    navigate(`/board/${boardId}`, { replace: true });
  }, [taskId]);

  const handleCansel = useCallback(() => {
    navigate(`/board/${boardId}`, { replace: true });
  }, [taskId]);

  return (
    <DestructiveModal
      initialValues={initialValues}
      onSubmit={handleSubmit}
      onCancel={handleCansel}
    />
  );
};
