import { StyledBoardAddNewColumn } from './BoardAddNewColumn.styled.ts';
import { FC, ReactNode } from 'react';

interface IBoardAddNewColumnProps {
  to: string;
  children: ReactNode;
  state?: { backgroundLocation: { pathname: string } };
}

export const BoardAddNewColumn: FC<IBoardAddNewColumnProps> = ({ to = '/', state, children }) => {
  return (
    <StyledBoardAddNewColumn to={to} state={state}>
      {children}
    </StyledBoardAddNewColumn>
  );
};
