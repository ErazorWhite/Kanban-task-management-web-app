import styled from 'styled-components';
import { TABLET_BP } from '../../../global/utilities/breakpoints.ts';
import { typography } from '../../../global/utilities/typography.ts';

export const HideSidebarButtonContainer = styled.button`
  display: none;

  @media screen and ${TABLET_BP} {
    ${typography.heading_m};
    display: flex;
    gap: 10px;
    color: var(--color-secondary-fg);
    fill: var(--color-secondary-fg);
    padding: 15px 24px;
    width: 90%;
    margin: 0 0 32px 0;
    place-self: start;
    border-radius: 0 100px 100px 0;
    transition: var(--animation-ease-in);
    &:hover,
    &:focus {
      background-color: var(--color-light-accent-bg-hover);
      color: var(--color-main-purple);
      fill: var(--color-main-purple);
    }
  }
`;

export const ShowSidebarButtonContainer = styled.button`
  display: none;

  @media screen and ${TABLET_BP} {
    display: block;
    position: fixed;
    bottom: 32px;
    background-color: var(--color-main-purple);
    fill: var(--color-white);
    padding: 19px 22px;
    border-radius: 0 100px 100px 0;
    transition: var(--animation-ease-in);

    &:hover,
    &:focus {
      background-color: var(--color-main-purple-hover);
      fill: var(--color-white);
    }
  }
`;
