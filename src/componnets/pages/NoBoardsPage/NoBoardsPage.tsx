import { Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { boardsState } from '../../../state/atoms/boardsState.ts';
import { EmptyBoard } from '../../board/EmptyBoard/EmptyBoard.tsx';

export const NoBoardsPage = () => {
  const [firstBoard, setFirstBoard] = useState<string | null>(null);
  const data = useRecoilValue(boardsState);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      if (data && data.boards && data.boards.length > 0) {
        const firstBoardId = data.boards[0].id;
        setFirstBoard(`/board/${encodeURIComponent(firstBoardId)}`);
      }
    }
  }, [data, location.pathname]);
  return firstBoard ? (
    <Navigate to={firstBoard} />
  ) : (
    <EmptyBoard
      message="There are no boards. Please create a new one."
      buttonSign="+ Create New BoardMain"
      to={`/create-board`}
    />
  );
};
