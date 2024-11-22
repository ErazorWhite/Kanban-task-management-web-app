import { selectorFamily } from 'recoil';
import { boardsState } from '../atoms/boardsState.ts';
import { IBoard, IColumn, ITask } from '../../global/types/types.ts';

export const isBoardExistsSelector = selectorFamily<boolean, string>({
  key: 'boardExistsSelector',
  get:
    (boardId: string) =>
    ({ get }) => {
      const data = get(boardsState);
      if (!data || !data.boards) return false;
      return data.boards?.some((board) => board?.id === boardId);
    },
});

export const getBoardByIdSelector = selectorFamily<IBoard | null, string | undefined>({
  key: 'currentBoardSelector',
  get:
    (boardId) =>
    ({ get }) => {
      const data = get(boardsState);
      if (!data || !data.boards || data.boards.length === 0) return null;
      if (!boardId) return null;
      return data.boards.find((b) => b.id === boardId) || null;
    },
});

export const dataByTaskIdSelector = selectorFamily<
  { task: ITask; board: IBoard; column: IColumn } | null,
  string
>({
  key: 'taskByIdSelector',
  get:
    (taskId: string) =>
    ({ get }) => {
      if (!taskId) return null;
      const data = get(boardsState);
      if (!data || !data.boards) return null;
      for (const board of data.boards) {
        if (!board.columns) return null;
        for (const column of board.columns) {
          const tasks = column.tasks || [];
          const task = tasks.find((task) => task.id === taskId);
          if (task) {
            return {
              task,
              board,
              column,
            };
          }
        }
      }
      return null;
    },
});

export const toggleSubtaskCompletionSelector = selectorFamily<void, string>({
  key: 'toggleSubtaskCompletionSelector',
  get: () => () => {},
  set:
    (subtaskId: string) =>
    ({ get, set }) => {
      const prevData = get(boardsState);

      if (!prevData?.boards) return;

      let subtaskFound = false;

      const updatedBoards = prevData.boards.map((board) => {
        if (subtaskFound) return board;

        const updatedColumns = board.columns?.map((column) => {
          if (subtaskFound) return column;

          const updatedTasks = column.tasks?.map((task) => {
            if (subtaskFound) return task;

            const updatedSubtasks = task.subtasks?.map((subtask) => {
              if (subtask.id === subtaskId) {
                subtaskFound = true;
                return {
                  ...subtask,
                  isCompleted: !subtask.isCompleted,
                };
              }
              return subtask;
            });

            if (subtaskFound) {
              return {
                ...task,
                subtasks: updatedSubtasks,
              };
            }

            return task;
          });

          if (subtaskFound) {
            return {
              ...column,
              tasks: updatedTasks,
            };
          }

          return column;
        });

        if (subtaskFound) {
          return {
            ...board,
            columns: updatedColumns,
          };
        }

        return board;
      });

      if (subtaskFound) {
        set(boardsState, {
          ...prevData,
          boards: updatedBoards,
        });
      }
    },
});
