import {
  ShowSidebarButtonContainer,
  HideSidebarButtonContainer,
} from './ToggleSidebarButton.styled.ts';
import { IconHideSidebar } from '../../icons/IconHideSidebar.tsx';
import { FC } from 'react';
import { IconShowSidebar } from '../../icons/IconShowSidebar.tsx';

interface IHideSidebarButton {
  isSidebarVisible: boolean;
  onClick: () => void;
}

export const ToggleSidebarButton: FC<IHideSidebarButton> = ({
  isSidebarVisible = false,
  onClick,
}) => {
  return isSidebarVisible ? (
    <HideSidebarButtonContainer onClick={onClick}>
      <IconHideSidebar />
      Hide Sidebar
    </HideSidebarButtonContainer>
  ) : (
    <ShowSidebarButtonContainer onClick={onClick}>
      <IconShowSidebar />
    </ShowSidebarButtonContainer>
  );
};
