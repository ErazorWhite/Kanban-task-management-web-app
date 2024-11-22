import styled from 'styled-components';
import { typography } from '../../../global/utilities/typography.ts';
import { Link } from 'react-router-dom';

export const DropdownActionContainer = styled.div`
  position: relative;
`;

export const DropdownActionMenuContent = styled.div`
  ${typography.body_l};
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
  top: 60px;
  transform: translateX(-80%);
  min-width: 192px;
  padding: 16px;
  background-color: var(--color-primary-body-bg);
  color: var(--color-secondary-fg);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(22, 77, 186, 0.1);
`;

export const StyledLink = styled(Link)`
  color: var(--color-secondary-fg);
  &:last-child {
    color: var(--color-red);
  }
`;
