import styled from 'styled-components';
import { typography } from '../../../global/typography.ts';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: var(--color-white);
  min-height: 64px;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Controls = styled.div`
  display: flex;
`;

export const BoardName = styled.span`
  ${typography.heading_l}
  padding: 20px 0 20px 0;
`;
