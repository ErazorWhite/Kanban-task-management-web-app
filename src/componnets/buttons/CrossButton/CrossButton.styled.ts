import styled from 'styled-components';

export const StyledCrossButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 16px;
  fill: var(--color-medium-grey);
  transition: var(--animation-ease-in);
  cursor: pointer;

  &:hover,
  &:focus {
    fill: var(--color-red);
  }
`;
