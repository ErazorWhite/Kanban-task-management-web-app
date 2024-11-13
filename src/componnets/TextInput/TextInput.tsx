import { ElementType, FC, useId } from 'react';
import {
  StyledTextarea,
  StyledTextInput,
  TextInputContainer,
  TextInputLabel,
} from './TextInput.styled.ts';
import { PLACEHOLDER_TASK_TEXT } from '../../global/constants.ts';

interface ITextInputProps {
  label?: string;
  placeholder?: string;
  isMultiline?: boolean;
}

export const TextInput: FC<ITextInputProps> = ({
  label,
  isMultiline = false,
  placeholder = PLACEHOLDER_TASK_TEXT,
  ...props
}) => {
  const id = useId();
  const InputComponent: ElementType = isMultiline ? StyledTextarea : StyledTextInput;

  return (
    <TextInputContainer>
      {label && <TextInputLabel htmlFor={id}>{label}</TextInputLabel>}
      <InputComponent id={id} type="text" placeholder={placeholder} {...props} />
    </TextInputContainer>
  );
};
