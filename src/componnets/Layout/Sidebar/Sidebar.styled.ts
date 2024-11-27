import styled from 'styled-components';
import { typography } from '../../../global/utilities/typography.ts';
import { MOBILE_BP, TABLET_BP } from '../../../global/utilities/breakpoints.ts';

export const SidebarContainer = styled.aside`
  @media screen and ${MOBILE_BP} {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media screen and ${TABLET_BP} {
    position: static;
    width: 260px;
    background: var(--color-primary-body-bg);
    border-right: 1px solid var(--color-border);
  }
`;

export const SidebarContent = styled.div`
  background-color: var(--color-primary-body-bg);
  color: var(--color-medium-grey);

  @media screen and ${MOBILE_BP} {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 260px;
    padding: 16px 0 16px 0;
    border-radius: 8px;
  }

  @media screen and ${TABLET_BP} {
    display: flex;
    flex-direction: column;
    position: static;
    height: 100%;
  }
`;

export const MediaFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: space-between;
`;

export const NavigationTitle = styled.h2`
  ${typography.heading_s};
  letter-spacing: 2px;
  padding: 0 0 0 24px;
  margin: 0 0 19px 0;

  @media screen and ${TABLET_BP} {
    ${typography.heading_m};
    padding: 31px 0 0 24px;
  }
`;
export const NavigationDetails = styled.div`
  padding-right: 16px;
  overflow-y: auto;
  max-height: calc(100vh - 80px - 50px - 180px);
  flex: 1;
`;

export const BottomBlock = styled.div`
  place-items: center;
  flex-shrink: 0;
`;
