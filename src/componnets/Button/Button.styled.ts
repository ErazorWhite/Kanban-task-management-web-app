import styled from 'styled-components';
import { typography } from '../../global/typography.ts';

export const StyledButton = styled.button`
  ${typography.heading_m}
  background-color: var(--color-accent-bg);
  color: var(--color-white);
  border: none;
  margin: 16px 0;
  border-radius: 24px;
  min-height: 32px;
  min-width: 48px;
`;
