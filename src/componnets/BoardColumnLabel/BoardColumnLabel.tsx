import {
  BoardColumnLabelContainer,
  BoardColumnTitle,
  ColoredCircle,
} from './BoardColumnLabel.styled.ts';
import { FC, ReactNode } from 'react';

interface IBoardColumnLabelProps {
  count: number;
  children: ReactNode;
}

export const BoardColumnLabel: FC<IBoardColumnLabelProps> = ({ count, children }) => {
  return (
    <BoardColumnLabelContainer>
      <ColoredCircle />
      <BoardColumnTitle>
        {children} ({count})
      </BoardColumnTitle>
    </BoardColumnLabelContainer>
  );
};
