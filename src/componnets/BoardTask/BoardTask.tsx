import { BoardTaskContainer, BoardTaskTitle } from './BoardTask.styled.ts';
import { FC } from 'react';

interface IBoardTaskProps {
  name: string;
  completedSubtasksCount: number;
  totalSubtasksCount: number;
}

export const BoardTask: FC<IBoardTaskProps> = ({
  name = 'To do something',
  completedSubtasksCount = 0,
  totalSubtasksCount = 0,
}) => {
  return (
    <BoardTaskContainer>
      <BoardTaskTitle>{name}</BoardTaskTitle>
      <span>
        {completedSubtasksCount} of {totalSubtasksCount} subtasks
      </span>
    </BoardTaskContainer>
  );
};
