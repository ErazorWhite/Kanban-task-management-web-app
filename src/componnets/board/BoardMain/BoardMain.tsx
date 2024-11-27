import { FilledBoardContainer } from './BoardMain.styled.ts';
import { Outlet, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { BoardColumn } from '../BoardColumn/BoardColumn.tsx';
import { getBoardByIdSelector } from '../../../state/selectors/selectors.ts';
import { EmptyBoard } from '../EmptyBoard/EmptyBoard.tsx';
import { BoardAddNewColumn } from '../BoardAddNewColumn/BoardAddNewColumn.tsx';
import { BASENAME } from '../../../global/utilities/constants.ts';

export const BoardMain = () => {
  const { boardId = '' } = useParams<{ boardId: string }>();
  const currentBoard = useRecoilValue(getBoardByIdSelector(boardId));

  return !currentBoard ? (
    <EmptyBoard
      message="BoardMain not found. Create a new board or select another one."
      buttonSign="+ Add New BoardMain"
      to="/create-board"
    />
  ) : !currentBoard?.columns || (currentBoard?.columns && currentBoard?.columns?.length <= 0) ? (
    <EmptyBoard
      message="This board is empty. Create a new column to get started."
      buttonSign="+ Add New Column"
    />
  ) : (
    <FilledBoardContainer>
      {currentBoard &&
        currentBoard?.columns?.map(({ id, name, tasks = [] }) => (
          <BoardColumn key={id} title={name} tasks={tasks} />
        ))}
      <BoardAddNewColumn
        to="edit"
        state={{
          backgroundLocation: {
            pathname: location.pathname.replace(BASENAME, '/'),
          },
        }}
      >
        + New Column
      </BoardAddNewColumn>
      <Outlet />
    </FilledBoardContainer>
  );
};
