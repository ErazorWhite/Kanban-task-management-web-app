import styled from 'styled-components';
import { typography } from '../../global/typography.ts';

export const LogoBox = styled.a`
  ${typography.heading_xl};
  display: flex;
  gap: 16px;
  align-items: center;
  text-decoration: none;
  color: var(--color-primary-fg);
  padding: 20px 16px;
`;
