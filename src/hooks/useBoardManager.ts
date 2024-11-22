import { useRecoilCallback } from 'recoil';
import { boardsState } from '../state/atoms/boardsState';
import { IBoard, IColumn } from '../global/types/types';
import { nanoid } from 'nanoid';

interface IAddBoardParams {
  name: string;
  columns: { name: string }[];
}

export interface IUpdateColumnParams {
  id: string | null;
  name: string;
}

interface IUpdateBoardParams {
  id: string;
  updates: Partial<{
    name: string;
    columns: IUpdateColumnParams[];
  }>;
}

interface IDeleteBoardParams {
  id: string;
}

export const useBoardManager = () => {
  const addBoard = useRecoilCallback(
    ({ set }) =>
      ({ name, columns }: IAddBoardParams) => {
        const newBoardId = name + '_' + nanoid();
        const newBoard: IBoard = {
          id: newBoardId,
          name,
          columns: columns?.map((col) => ({
            id: col.name + '_' + nanoid(),
            name: col.name,
            tasks: [],
          })),
        };

        set(boardsState, (prevData) => {
          if (!prevData) return { boards: [newBoard] };
          return {
            ...prevData,
            boards: [...(prevData.boards || []), newBoard],
          };
        });
        return newBoardId;
      },
    []
  );

  const updateBoard = useRecoilCallback(
    ({ set }) =>
      ({ id, updates }: IUpdateBoardParams) => {
        set(boardsState, (prevData) => {
          if (!prevData || !prevData.boards) return prevData;

          const updatedBoards = prevData.boards.map((board) => {
            if (board.id !== id) return board;

            let updatedColumns: IColumn[] = board.columns;

            if (updates.columns) {
              updatedColumns = updateColumns(board.columns, updates.columns);
            }

            return {
              ...board,
              name: updates.name ?? board.name,
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

  const deleteBoard = useRecoilCallback(
    ({ set }) =>
      ({ id }: IDeleteBoardParams) => {
        set(boardsState, (prevData) => {
          if (!prevData || !prevData.boards) return prevData;

          const updatedBoards = prevData.boards.filter((board) => board.id !== id);

          return {
            ...prevData,
            boards: updatedBoards,
          };
        });
      },
    []
  );

  return { addBoard, updateBoard, deleteBoard };
};

const updateColumns = (
  existingColumns: IColumn[],
  updatedColumnsParams: IUpdateColumnParams[]
): IColumn[] => {
  const updatedColumnsMap = new Map<string, IColumn>();

  updatedColumnsParams.forEach((colUpdate) => {
    if (colUpdate.id) {
      const existingColumn = existingColumns.find((col) => col.id === colUpdate.id);
      if (existingColumn) {
        updatedColumnsMap.set(colUpdate.id, {
          ...existingColumn,
          name: colUpdate.name,
        });
      } else {
        console.warn(`Column with id "${colUpdate.id}" not found.`);
      }
    } else {
      const newColumn: IColumn = {
        id: `${colUpdate.name}_${nanoid()}`,
        name: colUpdate.name,
        tasks: [],
      };
      updatedColumnsMap.set(newColumn.id, newColumn);
    }
  });

  return Array.from(updatedColumnsMap.values());
};
