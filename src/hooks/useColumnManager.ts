import { useRecoilCallback } from 'recoil';
import { boardsState } from '../state/atoms/boardsState';
import { IColumn } from '../global/types/types';
import { nanoid } from 'nanoid';

interface IAddColumnParams {
  boardId: string;
  name: string;
}

interface IDeleteColumnParams {
  boardId: string;
  columnId: string;
}

export const useColumnManager = () => {
  const addColumn = useRecoilCallback(
    ({ set }) =>
      ({ boardId, name }: IAddColumnParams) => {
        const newColumn: IColumn = {
          id: `${name}_${nanoid()}`,
          name,
          tasks: [],
        };

        set(boardsState, (prevData) => {
          if (!prevData || !prevData.boards) return prevData;

          const updatedBoards = prevData.boards.map((board) => {
            if (board.id !== boardId) return board;

            return {
              ...board,
              columns: [...(board.columns || []), newColumn],
            };
          });

          return {
            ...prevData,
            boards: updatedBoards,
          };
        });
      },
    []
  );

  const deleteColumn = useRecoilCallback(
    ({ set }) =>
      ({ boardId, columnId }: IDeleteColumnParams) => {
        set(boardsState, (prevData) => {
          if (!prevData || !prevData.boards) return prevData;

          const updatedBoards = prevData.boards.map((board) => {
            if (board.id !== boardId) return board;

            const updatedColumns = board.columns?.filter((column) => column.id !== columnId);

            return {
              ...board,
              columns: updatedColumns,
            };
          });

          return {
            ...prevData,
            boards: updatedBoards,
          };
        });
      },
    []
  );

  return { addColumn, deleteColumn };
};
