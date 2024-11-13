import {
  BoardColumn,
  EmptyBoardContainer,
  EmptyBoardDescription,
  FilledBoardContainer,
} from './Board.styled.ts';
import { Button } from '../buttons/Button/Button.tsx';
import { BoardColumnLabel } from '../BoardColumnLabel/BoardColumnLabel.tsx';
import { BoardTask } from '../BoardTask/BoardTask.tsx';

export const Board = () => {
  const isEmpty = false;
  return isEmpty ? (
    <EmptyBoardContainer>
      <EmptyBoardDescription>
        This board is empty. Create a new column to get started.
      </EmptyBoardDescription>
      <Button>+ Add New Column</Button>
    </EmptyBoardContainer>
  ) : (
    <FilledBoardContainer>
      {['TODO', 'DOING', 'DONE'].map((column, i) => (
        <BoardColumn key={column}>
          <BoardColumnLabel count={i}>{column}</BoardColumnLabel>
          <BoardTask
            name="Build UI for onboarding flow"
            completedSubtasksCount={0}
            totalSubtasksCount={4}
          />
          <BoardTask name="Deal with it" completedSubtasksCount={0} totalSubtasksCount={4} />
          <BoardTask name="Deal with it" completedSubtasksCount={0} totalSubtasksCount={4} />
          <BoardTask name="Deal with it" completedSubtasksCount={0} totalSubtasksCount={4} />
          <BoardTask name="Deal with it" completedSubtasksCount={0} totalSubtasksCount={4} />
        </BoardColumn>
      ))}
    </FilledBoardContainer>
  );
};
