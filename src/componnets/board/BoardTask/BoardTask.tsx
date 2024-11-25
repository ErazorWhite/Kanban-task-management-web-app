import { BoardTaskContainer, BoardTaskTitle } from './BoardTask.styled.ts';
import { FC, useMemo } from 'react';
import { ITask } from '../../../global/types/types.ts';
import { BASENAME } from '../../../global/utilities/constants.ts';
import { useDrag } from 'react-dnd';

interface IBoardTaskProps {
  task: ITask;
}

export const BoardTask: FC<IBoardTaskProps> = ({ task }) => {
  const completedSubtaskCount = useMemo(
    () => task?.subtasks?.reduce((acc, subtask) => acc + (subtask.isCompleted ? 1 : 0), 0),
    [task?.subtasks]
  );
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'TASK',
      item: { id: task.id, status: task.status },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [task]
  );

  return (
    <BoardTaskContainer
      ref={drag}
      isDragging={isDragging}
      to={`${task.id}`}
      state={{
        backgroundLocation: {
          pathname: location.pathname.replace(BASENAME, '/'),
        },
      }}
    >
      <BoardTaskTitle>{task.title}</BoardTaskTitle>
      <span>
        {completedSubtaskCount} of {task?.subtasks?.length || 0} subtasks
      </span>
    </BoardTaskContainer>
  );
};
