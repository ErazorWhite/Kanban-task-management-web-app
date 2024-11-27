import { FC } from 'react';
import { Checkbox, CheckboxLabel, HiddenInput } from './CheckboxInput.styled.ts';
import { IconCheck } from '../../icons/IconCheck.tsx';

interface ICheckboxInputProps {
  title: string;
  checked: boolean;
  onChange: (id: string) => void;
  id: string;
}

export const CheckboxInput: FC<ICheckboxInputProps> = ({ title, checked, id, onChange }) => {
  return (
    <>
      <HiddenInput
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => {
          onChange(id);
        }}
      />
      <CheckboxLabel htmlFor={id}>
        <Checkbox>{checked && <IconCheck />}</Checkbox>
        {title}
      </CheckboxLabel>
    </>
  );
};
