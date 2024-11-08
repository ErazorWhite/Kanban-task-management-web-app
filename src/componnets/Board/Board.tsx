import { EmptyBoard } from './Board.styled.ts';
import { Button } from '../Button/Button.tsx';

export const Board = () => {
  return (
    <div>
      <EmptyBoard>This board is empty. Create a new column to get started.</EmptyBoard>
      <Button>+ Add New Column</Button>
    </div>
  );
};
