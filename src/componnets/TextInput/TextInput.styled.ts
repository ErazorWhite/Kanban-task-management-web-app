import { typography } from '../../global/typography.ts';
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

const commonStyles = css`
  ${typography.body_l};
  width: 100%;
  padding: 8px 16px;
  color: var(--color-primary-fg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
`;

export const StyledTextInput = styled.input`
  ${commonStyles};
`;

export const StyledTextarea = styled.textarea`
  ${commonStyles};
  resize: none;
  min-height: 120px;
`;
