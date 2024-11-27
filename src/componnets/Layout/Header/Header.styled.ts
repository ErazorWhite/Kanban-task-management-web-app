import styled from 'styled-components';
import { typography } from '../../../global/utilities/typography.ts';
import { DESKTOP_BP, TABLET_BP } from '../../../global/utilities/breakpoints.ts';

export const StyledHeader = styled.header`
  position: relative;
  z-index: 1500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--color-primary-body-bg);
  color: var(--color-primary-fg);
  min-height: 64px;
  @media screen and ${DESKTOP_BP} {
    min-height: 90px;
  }
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

  @media screen and ${TABLET_BP} {
    font-size: 20px;
    margin: 0 0 0 24px;
  }
  @media screen and ${DESKTOP_BP} {
    ${typography.heading_xl};
  }
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 8px;

  @media screen and ${TABLET_BP} {
    display: none;
  }
`;
