import {
  BoardColumnLabelContainer,
  BoardColumnTitle,
  ColoredCircle,
} from './BoardColumnLabel.styled.ts';
import { FC, ReactNode } from 'react';
import { getRandomColor } from '../../../global/utilities/colorRandomizer.ts';

interface IBoardColumnLabelProps {
  count: number;
  children: ReactNode;
}

export const BoardColumnLabel: FC<IBoardColumnLabelProps> = ({ count, children }) => {
  return (
    <BoardColumnLabelContainer>
      <ColoredCircle backgroundColor={getRandomColor()} />
      <BoardColumnTitle>
        {children} ({count})
      </BoardColumnTitle>
    </BoardColumnLabelContainer>
  );
};
