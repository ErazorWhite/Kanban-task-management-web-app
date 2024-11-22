import { typography } from '../../global/utilities/typography.ts';
import styled, { css } from 'styled-components';

export const TextInputContainer = styled.div`
  width: 100%;
  & + & {
    margin-top: 24px;
  }
`;
export const TextInputLabel = styled.label`
  ${typography.body_m};
  display: block;
  margin: 0 0 8px 0;
  color: var(--color-secondary-fg);
`;

interface ICommonStyles {
  isErrored: boolean;
}

const commonStyles = css<ICommonStyles>`
  ${typography.body_l};
  width: 100%;
  padding: 8px 16px;
  color: var(--color-primary-fg);
  background-color: var(--color-primary-body-bg);
  border: ${({ isErrored }) =>
    isErrored ? '1px solid var(--color-red)' : `1px solid var(--color-border)`};
  border-radius: 4px;
`;

export const StyledTextInput = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== 'isErrored',
})<ICommonStyles>`
  ${commonStyles};
`;

export const StyledTextarea = styled.textarea.withConfig({
  shouldForwardProp: (prop) => prop !== 'isErrored',
})<ICommonStyles>`
  ${commonStyles};
  resize: none;
  min-height: 120px;
`;

export const InputErrorThumb = styled.div`
  position: relative;
`;

export const StyledError = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  color: var(--color-red);
`;
