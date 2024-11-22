import { FC, useCallback, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBoardManager } from '../../../../hooks/useBoardManager.ts';
import { useRecoilValue } from 'recoil';
import { getBoardByIdSelector } from '../../../../state/selectors/selectors.ts';
import { BoardEditorModal } from '../../../modals/BoardEditorModal/BoardEditorModal.tsx';

interface IBoardEditorFormValues {
  name: string;
  columns: { id?: string | null; name: string }[];
}

export const EditBoard: FC = () => {
  const navigate = useNavigate();
  const { boardId } = useParams<{ boardId: string }>();
  const { updateBoard } = useBoardManager();
  const board = useRecoilValue(getBoardByIdSelector(boardId));

  if (!board || !boardId) {
    console.error('Board not found');
    return null;
  }

  const initialValues: IBoardEditorFormValues = useMemo(
    () => ({
      name: board.name,
      columns: board.columns.map((col) => ({ id: col.id, name: col.name })),
    }),
    [boardId]
  );

  const handleSubmit = useCallback(
    (values: IBoardEditorFormValues) => {
      updateBoard({
        id: boardId,
        updates: {
          name: values.name,
          columns: values.columns.map((column) => ({
            id: column.id || null,
            name: column.name,
          })),
        },
      });
      navigate(`/board/${boardId}`, { replace: true });
    },
    [boardId]
  );

  return (
    <BoardEditorModal initialValues={initialValues} onSubmit={handleSubmit} isEditing={true} />
  );
};
