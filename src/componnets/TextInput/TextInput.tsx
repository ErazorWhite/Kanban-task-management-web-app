import { ChangeEvent, ElementType, FC, useId } from 'react';
import {
  InputErrorThumb,
  StyledError,
  StyledTextarea,
  StyledTextInput,
  TextInputContainer,
  TextInputLabel,
} from './TextInput.styled.ts';
import { PLACEHOLDER_TASK_TEXT } from '../../global/utilities/constants.ts';

interface ITextInputProps {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  isMultiline?: boolean;
}

export const TextInput: FC<ITextInputProps> = ({
  label,
  name,
  isMultiline = false,
  placeholder = PLACEHOLDER_TASK_TEXT,
  onChange,
  onBlur,
  error,
  ...props
}) => {
  const id = useId();
  const InputComponent: ElementType = isMultiline ? StyledTextarea : StyledTextInput;

  return (
    <TextInputContainer>
      {label && <TextInputLabel htmlFor={id}>{label}</TextInputLabel>}
      <InputErrorThumb>
        <InputComponent
          id={id}
          name={name}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          isErrored={!!error}
          {...props}
        />
        {error && <StyledError>{error}</StyledError>}
      </InputErrorThumb>
    </TextInputContainer>
  );
};
