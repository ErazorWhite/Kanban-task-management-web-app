import { EmptyBoardContainer, EmptyBoardDescription } from './EmptyBoard.styled.ts';
import { Button } from '../../buttons/Button/Button.tsx';
import { Outlet } from 'react-router-dom';
import { FC } from 'react';

interface IEmptyBoardProps {
  message: string;
  buttonSign: string;
  to?: string;
}

export const EmptyBoard: FC<IEmptyBoardProps> = ({ message, buttonSign, to = '/' }) => {
  return (
    <EmptyBoardContainer>
      <EmptyBoardDescription>{message}</EmptyBoardDescription>
      <Button to={to} isLink>
        {buttonSign}
      </Button>
      <Outlet />
    </EmptyBoardContainer>
  );
};
