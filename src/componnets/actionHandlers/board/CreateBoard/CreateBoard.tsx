import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBoardManager } from '../../../../hooks/useBoardManager.ts';

import { BoardEditorModal } from '../../../modals/BoardEditorModal/BoardEditorModal.tsx';

interface IBoardEditorFormValues {
  name: string;
  columns: { name: string }[];
}

const initialValues: IBoardEditorFormValues = {
  name: '',
  columns: [{ name: '' }, { name: '' }],
};

export const CreateBoard: FC = () => {
  const navigate = useNavigate();
  const { addBoard } = useBoardManager();

  const handleSubmit = useCallback((values: IBoardEditorFormValues) => {
    const newBoardId = addBoard({
      name: values.name,
      columns: values.columns,
    });
    navigate(`/board/${encodeURIComponent(newBoardId)}`);
  }, []);

  return (
    <BoardEditorModal initialValues={initialValues} onSubmit={handleSubmit} isEditing={false} />
  );
};
