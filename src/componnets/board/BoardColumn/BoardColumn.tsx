import { BoardColumContent, StyledBoardContainer } from './Column.styled.ts';
import { ITask } from '../../../global/types/types.ts';
import { BoardTask } from '../BoardTask/BoardTask.tsx';
import { FC } from 'react';
import { BoardColumnLabel } from '../BoardColumnLabel/BoardColumnLabel.tsx';
import { useTaskManager } from '../../../hooks/useTaskManager.ts';
import { useDrop } from 'react-dnd';

interface IColumnProps {
  title: string;
  tasks: ITask[];
}

export const BoardColumn: FC<IColumnProps> = ({ title, tasks }) => {
  const { moveTask } = useTaskManager();

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'TASK',
      drop: (item: { id: string; status: string }) => {
        if (item.status !== title) {
          moveTask({ taskId: item.id, newStatus: title });
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [title]
  );

  return (
    <StyledBoardContainer ref={drop} isOver={isOver}>
      <BoardColumnLabel count={tasks?.length}>{title}</BoardColumnLabel>
      <BoardColumContent>
        {tasks?.length > 0 && tasks.map((task) => <BoardTask key={task.id} task={task} />)}
      </BoardColumContent>
    </StyledBoardContainer>
  );
};
