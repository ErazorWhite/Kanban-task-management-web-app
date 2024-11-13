import { FC } from 'react';
import {
  buttonVariantsColor,
  buttonVariantsSize,
  PLACEHOLDER_TEXT_SUBTASK_1,
  PLACEHOLDER_TEXT_SUBTASK_2,
} from '../../global/constants.ts';
import {
  DynamicInputContainer,
  DynamicInputListContainer,
  DynamicInputListLegend,
} from './DynamicInputList.styled.ts';
import { Button } from '../buttons/Button/Button.tsx';
import { TextInput } from '../TextInput/TextInput.tsx';
import { CrossButton } from '../buttons/CrossButton/CrossButton.tsx';
import { Dropdown } from '../Dropdown/Dropdown.tsx';

interface IDynamicInputListProps {
  legend: string;
  values?: string[];
  placeholder: string[] | string;
  addButtonText: string;
  onChange: (values: string[]) => void;
}

export const DynamicInputList: FC<IDynamicInputListProps> = ({
  legend = 'Subtasks',
  values,
  placeholder = [PLACEHOLDER_TEXT_SUBTASK_1, PLACEHOLDER_TEXT_SUBTASK_2],
  addButtonText = '+ Add New SubTask',
  onChange,
}) => {
  return (
    <DynamicInputListContainer>
      <DynamicInputListLegend>{legend}</DynamicInputListLegend>
      <fieldset>
        <DynamicInputContainer>
          <TextInput placeholder={placeholder[0]} /> <CrossButton />
        </DynamicInputContainer>
        <DynamicInputContainer>
          <TextInput placeholder={placeholder[1]} /> <CrossButton />
        </DynamicInputContainer>
      </fieldset>
      <Button variantSize={buttonVariantsSize.MODAL} variantColor={buttonVariantsColor.SECONDARY}>
        {addButtonText}
      </Button>
    </DynamicInputListContainer>
  );
};
