import { NavigationItemContainerLink, NavigationText } from './NavigationToBoardItem.styled.ts';
import { IconBoard } from '../icons/IconBoard.tsx';
import { FC, ReactNode } from 'react';

interface INavigationToBoardItemProps {
  to?: string;
  children: ReactNode;
  isActive?: boolean;
  state?: { backgroundLocation: { pathname: string } };
}

export const NavigationToBoardItem: FC<INavigationToBoardItemProps> = ({
  isActive = false,
  to = '/',
  state,
  children,
}) => {
  return (
    <NavigationItemContainerLink to={to} state={state} isActive={isActive}>
      <IconBoard />
      <NavigationText>{children}</NavigationText>
    </NavigationItemContainerLink>
  );
};
