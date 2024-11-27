import styled from 'styled-components';
import { typography } from '../../../global/utilities/typography.ts';
import { StyledButton } from '../../buttons/Button/Button.styled.ts';

export const DropdownContainer = styled.div`
  margin: 24px 0 0 0;
  position: relative;
  user-select: none;

  & + ${StyledButton} {
    margin-top: 24px;
  }
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--color-primary-fg);
  padding: 9px 16px;
  border: 1px solid var(--color-medium-grey-opacity-25);
  border-radius: 4px;

  transition: var(--animation-ease-in);

  &:hover,
  &:focus {
    border-color: var(--color-accent-bg);
  }
`;

export const DropdownSpan = styled.span`
  display: block;
  margin: 0 0 8px 0;
`;

export const DropdownContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  z-index: 2000;
  background-color: var(--color-primary-body-bg);
  width: 100%;
  margin: 10px 0 0 0;
  border-radius: 0 0 4px 4px;
`;

export const DropdownItem = styled.div`
  padding: 8px 16px;
  transition: var(--animation-ease-in);

  &:hover {
    background-color: var(--color-light-grey-bg);
  }
`;

export const DropdownError = styled.span`
  ${typography.body_l};
  display: block;
  color: var(--color-red);
`;
