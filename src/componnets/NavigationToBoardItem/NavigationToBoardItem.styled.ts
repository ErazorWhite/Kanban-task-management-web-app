import styled from 'styled-components';
import { typography } from '../../global/utilities/typography.ts';
import { NavLink } from 'react-router-dom';

interface INavigationItemContainerProps {
  isActive?: boolean;
}

export const NavigationItemContainerLink = styled(NavLink).withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<INavigationItemContainerProps>`
  display: flex;
  align-items: center;
  padding: 0 0 0 24px;
  gap: 12px;
  background-color: ${({ isActive = false }) =>
    isActive ? 'var(--color-accent-bg)' : 'var(--color-primary-bg)'};
  color: ${({ isActive = false }) =>
    isActive ? 'var(--color-white)' : 'var(--color-secondary-fg)'};
  fill: ${({ isActive = false }) =>
    isActive ? 'var(--color-white)' : 'var(--color-secondary-fg)'};
  border-radius: 0 100px 100px 0;
  transition: var(--animation-ease-in);
  cursor: pointer;
  user-select: none;
  text-decoration: none;

  &:last-of-type {
    color: var(--color-main-purple);
    fill: var(--color-main-purple);
  }

  &:hover {
    background-color: var(--color-light-accent-bg-hover);
    color: var(--color-main-purple);
    fill: var(--color-main-purple);
  }
`;

export const NavigationText = styled.span`
  ${typography.heading_m};
  display: block;
  padding: 15px 0 15px 0;
`;
