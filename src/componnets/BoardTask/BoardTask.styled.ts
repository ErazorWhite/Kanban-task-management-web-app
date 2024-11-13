import styled from 'styled-components';
import { typography } from '../../global/typography.ts';

export const BoardTaskContainer = styled.div`
  ${typography.body_m};
  color: var(--color-secondary-fg);
  padding: 23px 16px;
  background-color: var(--color-primary-body-bg);
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
