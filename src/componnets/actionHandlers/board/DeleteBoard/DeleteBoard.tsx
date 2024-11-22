import { useNavigate, useParams } from 'react-router-dom';
import { useBoardManager } from '../../../../hooks/useBoardManager.ts';
import { useRecoilValue } from 'recoil';
import { getBoardByIdSelector } from '../../../../state/selectors/selectors.ts';
import { useCallback, useMemo } from 'react';
import { DestructiveModal } from '../../../modals/DestructiveModal/DestructiveModal.tsx';

interface IDeleteBoardFormValues {
  title: string;
  message: string;
}

export const DeleteBoard = () => {
  const navigate = useNavigate();
  const { boardId } = useParams<{ boardId: string; taskId: string }>();
  const { deleteBoard } = useBoardManager();
  const board = useRecoilValue(getBoardByIdSelector(boardId || ''));

  if (!board) {
    console.error('Board not found');
    return null;
  }

  const initialValues: IDeleteBoardFormValues = useMemo(
    () => ({
      title: 'Delete this board?',
      message: `Are you sure you want to delete the ${board.name} board? This action will remove all columns and tasks and cannot be reversed.`,
    }),
    [boardId]
  );

  const handleSubmit = useCallback(() => {
    deleteBoard({ id: boardId || '' });

    navigate(`/`, { replace: true });
  }, [boardId]);

  const handleCansel = useCallback(() => {
    navigate(`/board/${boardId}`, { replace: true });
  }, [boardId]);

  return (
    <DestructiveModal
      initialValues={initialValues}
      onSubmit={handleSubmit}
      onCancel={handleCansel}
    />
  );
};
