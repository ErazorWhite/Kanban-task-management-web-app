import { FC } from 'react';
import {
  buttonVariantsColor,
  buttonVariantsSize,
  PLACEHOLDER_TEXT_SUBTASK_1,
  PLACEHOLDER_TEXT_SUBTASK_2,
} from '../../global/utilities/constants.ts';
import {
  DynamicInputContainer,
  DynamicInputError,
  DynamicInputListContainer,
  DynamicInputListLegend,
} from './DynamicInputList.styled.ts';
import { Button } from '../buttons/Button/Button.tsx';
import { TextInput } from '../TextInput/TextInput.tsx';
import { CrossButton } from '../buttons/CrossButton/CrossButton.tsx';

interface IDynamicInputListProps {
  legend: string;
  fieldName: string;
  values: { name: string }[];
  errors?: Array<{ name?: string } | undefined> | string;
  touched?: Array<{ name?: boolean }>;
  placeholder?: string | string[];
  addButtonText: string;
  onAdd: () => void;
  onRemove: (index: number) => void;
  onChange: (index: number, value: string) => void;
  onBlur: (index: number) => void;
}

export const DynamicInputList: FC<IDynamicInputListProps> = ({
  legend = 'Subtasks',
  fieldName,
  values = [{ name: '' }, { name: '' }],
  placeholder = [PLACEHOLDER_TEXT_SUBTASK_1, PLACEHOLDER_TEXT_SUBTASK_2],
  addButtonText = '+ Add New SubTask',
  onAdd,
  onRemove,
  errors,
  touched,
  onChange,
  onBlur,
}) => {
  return (
    <DynamicInputListContainer>
      <DynamicInputListLegend>{legend}</DynamicInputListLegend>
      <fieldset>
        {values.map((value, index) => (
          <DynamicInputContainer key={index}>
            <TextInput
              name={`${fieldName}[${index}].name`}
              value={value.name}
              onChange={(e) => onChange(index, e.target.value)}
              onBlur={() => onBlur(index)}
              error={
                touched &&
                touched[index]?.name &&
                errors &&
                Array.isArray(errors) &&
                errors[index]?.name
                  ? errors[index].name
                  : undefined
              }
              placeholder={Array.isArray(placeholder) ? placeholder[index] || '' : placeholder}
            />
            <CrossButton onClick={() => onRemove(index)} />
          </DynamicInputContainer>
        ))}
      </fieldset>
      {errors && typeof errors === 'string' && <DynamicInputError>{errors}</DynamicInputError>}
      <Button
        type="button"
        variantSize={buttonVariantsSize.MODAL}
        variantColor={buttonVariantsColor.SECONDARY}
        onClick={onAdd}
      >
        {addButtonText}
      </Button>
    </DynamicInputListContainer>
  );
};
