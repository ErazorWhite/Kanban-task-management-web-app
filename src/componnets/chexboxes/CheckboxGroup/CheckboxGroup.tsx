import { FC } from 'react';
import { CheckBoxGroupFieldset, CheckBoxGroupLegend, Ul } from './CheckboxGroup.styled.ts';
import { CheckboxInput } from '../CheckboxInput/CheckboxInput.tsx';

type Subtask = {
  title: string;
  isCompleted: boolean;
};

interface ICheckboxGroupProps {
  tasks: Subtask[];
  completedSubtasksCount: number;
  totalSubtasksCount: number;
}

export const CheckboxGroup: FC<ICheckboxGroupProps> = ({
  tasks = [],
  completedSubtasksCount = 0,
  totalSubtasksCount = 0,
}) => {
  return (
    <CheckBoxGroupFieldset>
      <CheckBoxGroupLegend>
        Subtasks ({completedSubtasksCount} of {totalSubtasksCount})
      </CheckBoxGroupLegend>
      <Ul>
        {tasks &&
          tasks.map((task) => (
            <li key={task.title}>
              <CheckboxInput title={task.title} isCompleted={task.isCompleted} />
            </li>
          ))}
      </Ul>
    </CheckBoxGroupFieldset>
  );
};
