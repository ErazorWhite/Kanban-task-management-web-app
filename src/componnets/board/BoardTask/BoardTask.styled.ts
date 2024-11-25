import styled from 'styled-components';
import { typography } from '../../../global/utilities/typography.ts';
import { Link } from 'react-router-dom';

interface IBoardTaskContainerProps {
  isDragging: boolean;
}
export const BoardTaskContainer = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== 'isDragging',
})<IBoardTaskContainerProps>`
  ${typography.body_m};
  display: block;
  text-decoration: none;
  color: var(--color-secondary-fg);
  padding: 23px 16px;
  background-color: var(--color-primary-body-bg);
  opacity: ${({ isDragging }) => (isDragging ? '0.5' : '1')};
  box-shadow: 0 4px 6px rgba(22, 77, 186, 0.1);
  border-radius: 8px;
  margin: 0 0 24px 0;
  cursor: pointer;

  &:last-child {
    margin: 0;
  }
`;

export const BoardTaskTitle = styled.h3`
  ${typography.heading_m};
  color: var(--color-primary-fg);
  margin: 0 0 8px 0;
`;
