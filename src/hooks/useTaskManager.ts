import { useRecoilCallback } from 'recoil';
import { boardsState } from '../state/atoms/boardsState';
import { ITask, ISubtask } from '../global/types/types';
import { nanoid } from 'nanoid';

interface IAddTaskParams {
  boardId: string;
  title: string;
  description?: string;
  status: string;
  subtasks?: { name: string }[];
}

interface IUpdateSubtaskParams {
  id: string | null;
  title: string;
  isCompleted: boolean;
}

interface IUpdateTaskParams {
  taskId: string;
  updates: Partial<{
    title: string;
    description: string;
    status: string;
    subtasks: IUpdateSubtaskParams[];
  }>;
}

interface IDeleteTaskParams {
  taskId: string;
}

interface IMoveTaskParams {
  taskId: string;
  newStatus: string;
}

export const useTaskManager = () => {
  const addTask = useRecoilCallback(
    ({ set }) =>
      ({ boardId, title, description, status, subtasks }: IAddTaskParams) => {
        const newTask: ITask = {
          id: title + '_' + nanoid(),
          title,
          description: description || '',
          status,
          subtasks:
            subtasks
              ?.filter((subtask) => subtask.name.trim() !== '')
              .map((subtask) => ({
                id: subtask.name + '_' + nanoid(),
                title: subtask.name,
                isCompleted: false,
              })) || [],
        };

        set(boardsState, (prevData) => {
          if (!prevData || !prevData.boards) return prevData;

          const updatedBoards = prevData.boards.map((board) => {
            if (board.id !== boardId) return board;

            const updatedColumns = board.columns?.map((column) => {
              if (column.name === status) {
                const newTasks = column.tasks ? [...column.tasks, newTask] : [newTask];
                return {
                  ...column,
                  tasks: newTasks,
                };
              }
              return column;
            });

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

  const updateTask = useRecoilCallback(
    ({ set }) =>
      ({ taskId, updates }: IUpdateTaskParams) => {
        set(boardsState, (prevData) => {
          if (!prevData || !prevData.boards) return prevData;

          const updatedBoards = prevData.boards.map((board) => {
            let taskFound = false;
            let taskToUpdate: ITask | null = null;

            const updatedColumns = board.columns?.map((column) => {
              const tasks = column.tasks || [];
              const taskIndex = tasks.findIndex((task) => task.id === taskId);

              if (taskIndex !== -1) {
                taskFound = true;
                const task = tasks[taskIndex];

                let updatedSubtasks: ISubtask[];

                if (updates.subtasks) {
                  updatedSubtasks = updates.subtasks
                    .filter((subtask) => subtask.title.trim() !== '')
                    .map((subtask) => ({
                      id: subtask.id || subtask.title + '_' + nanoid(),
                      title: subtask.title,
                      isCompleted: subtask.isCompleted || false,
                    }));
                } else {
                  updatedSubtasks = task.subtasks || [];
                }

                taskToUpdate = {
                  ...task,
                  ...updates,
                  subtasks: updatedSubtasks,
                };

                const newTasks = [...tasks];
                newTasks.splice(taskIndex, 1);

                return {
                  ...column,
                  tasks: newTasks.length > 0 ? newTasks : undefined,
                };
              }

              return column;
            });

            if (taskFound && taskToUpdate) {
              const newColumnName = updates.status;

              const updatedColumnsWithTask = updatedColumns?.map((column) => {
                if (column.name === newColumnName) {
                  const tasks = column.tasks || [];
                  return {
                    ...column,
                    tasks: [...tasks, taskToUpdate!],
                  };
                }
                return column;
              });

              return {
                ...board,
                columns: updatedColumnsWithTask,
              };
            }

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

  const deleteTask = useRecoilCallback(
    ({ set }) =>
      ({ taskId }: IDeleteTaskParams) => {
        set(boardsState, (prevData) => {
          if (!prevData || !prevData.boards) return prevData;

          const updatedBoards = prevData.boards.map((board) => {
            let taskFound = false;

            const updatedColumns = board.columns?.map((column) => {
              if (taskFound) return column;

              const tasks = column.tasks || [];
              const taskIndex = tasks.findIndex((task) => task.id === taskId);

              if (taskIndex !== -1) {
                taskFound = true;
                const newTasks = [...tasks];
                newTasks.splice(taskIndex, 1);

                return {
                  ...column,
                  tasks: newTasks.length > 0 ? newTasks : undefined,
                };
              }

              return column;
            });

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

  const moveTask = useRecoilCallback(
    ({ set }) =>
      ({ taskId, newStatus }: IMoveTaskParams) => {
        set(boardsState, (prevData) => {
          if (!prevData || !prevData.boards) return prevData;

          let taskToMove: ITask | null = null;

          const updatedBoards = prevData.boards.map((board) => {
            if (taskToMove) return board;

            const updatedColumns = board.columns?.map((column) => {
              const tasks = column.tasks || [];
              const taskIndex = tasks.findIndex((task) => task.id === taskId);

              if (taskIndex !== -1) {
                taskToMove = { ...tasks[taskIndex], status: newStatus };
                const newTasks = [...tasks];
                newTasks.splice(taskIndex, 1);

                return {
                  ...column,
                  tasks: newTasks.length > 0 ? newTasks : undefined,
                };
              }

              return column;
            });

            if (taskToMove) {
              const updatedColumnsWithTask = updatedColumns?.map((column) => {
                if (column.name === newStatus) {
                  const tasks = column.tasks || [];
                  return {
                    ...column,
                    tasks: [...tasks, taskToMove!],
                  };
                }
                return column;
              });

              return {
                ...board,
                columns: updatedColumnsWithTask,
              };
            }

            return {
              ...board,
              columns: updatedColumns,
            };
          });

          if (taskToMove) {
            return {
              ...prevData,
              boards: updatedBoards,
            };
          } else {
            console.warn(`Task with id "${taskId}" not found.`);
            return prevData;
          }
        });
      },
    []
  );

  return { addTask, updateTask, deleteTask, moveTask };
};
