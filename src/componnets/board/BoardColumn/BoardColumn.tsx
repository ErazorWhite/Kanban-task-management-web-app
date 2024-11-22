import { BoardColumContainer } from './Column.styled.ts';
import { ITask } from '../../../global/types/types.ts';
import { BoardTask } from '../BoardTask/BoardTask.tsx';
import { FC } from 'react';
import { BoardColumnLabel } from '../BoardColumnLabel/BoardColumnLabel.tsx';

interface IColumnProps {
  title: string;
  tasks: ITask[];
}

export const BoardColumn: FC<IColumnProps> = ({ title, tasks }) => {
  return (
    <div>
      <BoardColumnLabel count={tasks?.length}>{title}</BoardColumnLabel>
      <BoardColumContainer>
        {tasks?.length > 0 && tasks.map((task) => <BoardTask key={task.id} task={task} />)}
      </BoardColumContainer>
    </div>
  );
};
