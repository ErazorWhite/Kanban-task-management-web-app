import { FC } from 'react';
import { Checkbox, CheckboxLabel, HiddenInput } from './CheckboxInput.styled.ts';
import { IconCheck } from '../../icons/IconCheck.tsx';

interface ICheckboxInputProps {
  title: string;
  isCompleted: boolean;
}

// TODO
// Complete logic part about onChange, id, htmlFor, etc...

export const CheckboxInput: FC<ICheckboxInputProps> = ({ title, isCompleted }) => {
  return (
    <>
      <HiddenInput id="" type="checkbox" checked={isCompleted} />
      <CheckboxLabel htmlFor="">
        <Checkbox>{isCompleted && <IconCheck />}</Checkbox>
        {title}
      </CheckboxLabel>
    </>
  );
};
