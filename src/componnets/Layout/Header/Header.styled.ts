import styled from 'styled-components';
import { typography } from '../../../global/typography.ts';

export const StyledHeader = styled.header`
  position: relative;
  z-index: 1500;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  ${typography.heading_l};
  display: block;
  place-content: center;
`;

export const ChevronBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
`;
