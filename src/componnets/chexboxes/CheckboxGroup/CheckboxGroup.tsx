import { FC } from 'react';
import { CheckBoxGroupFieldset, CheckBoxGroupLegend, Ul } from './CheckboxGroup.styled.ts';
import { CheckboxInput } from '../CheckboxInput/CheckboxInput.tsx';
import { ISubtask } from '../../../global/types/types.ts';

interface ICheckboxGroupProps {
  tasks: ISubtask[];
  onChange: (subtaskId: string) => void;
}

export const CheckboxGroup: FC<ICheckboxGroupProps> = ({ tasks = [], onChange }) => {
  return (
    <CheckBoxGroupFieldset>
      <CheckBoxGroupLegend>
        Subtasks ({tasks.reduce((acc, element) => acc + (element.isCompleted ? 1 : 0), 0)} of{' '}
        {tasks.length})
      </CheckBoxGroupLegend>
      <Ul>
        {tasks &&
          tasks.map((task) => (
            <li key={task.id}>
              <CheckboxInput
                title={task.title}
                checked={task.isCompleted}
                id={task.id}
                onChange={onChange}
              />
            </li>
          ))}
      </Ul>
    </CheckBoxGroupFieldset>
  );
};
