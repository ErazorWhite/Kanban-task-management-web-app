import styled from 'styled-components';
import { typography } from '../../../global/utilities/typography.ts';
import { visuallyHidden } from '../../../global/utilities/mixins.ts';

export const CheckboxLabel = styled.label`
  ${typography.body_m};
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 13px 12px;
  border-radius: 4px;
  color: var(--color-primary-fg);
  background-color: var(--color-secondary-body-bg);
  user-select: none;
`;

export const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  background-color: var(--color-white);
  border-radius: 2px;
  border: 1px solid var(--color-medium-grey);
`;

export const HiddenInput = styled.input`
  ${visuallyHidden}
  &:checked ~ ${CheckboxLabel} > ${Checkbox} {
    background-color: var(--color-accent-bg);
    border: none;
  }

  &:checked ~ ${CheckboxLabel} {
    text-decoration: line-through;
    color: var(--color-primary-body-bg-checked);
  }
`;
