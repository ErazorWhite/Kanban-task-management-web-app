import styled from 'styled-components';
import { TABLET_BP } from '../../../global/utilities/breakpoints.ts';

export const MobileOnly = styled.div`
  @media screen and ${TABLET_BP} {
    display: none;
  }
`;

export const DesktopOrTabletOnly = styled.div`
  display: none;
  @media screen and ${TABLET_BP} {
    display: block;
  }
`;
