import {
  SidebarContainer,
  NavigationTitle,
  BottomBlock,
  SidebarContent,
  MediaFlexWrapper,
  NavigationDetails,
} from './Sidebar.styled.ts';
import { FC, memo } from 'react';
import { NavigationToBoardItem } from '../../NavigationToBoardItem/NavigationToBoardItem.tsx';
import { ThemeSwitcher } from '../../ThemeSwitcher/ThemeSwitcher.tsx';
import { ToggleSidebarButton } from '../../buttons/ToggleSidebarButton/ToggleSidebarButton.tsx';
import { useRecoilValue } from 'recoil';
import { boardsState } from '../../../state/atoms/boardsState.ts';
import { useParams } from 'react-router-dom';
import { BASENAME } from '../../../global/utilities/constants.ts';

interface ISidebarProps {
  onClick: () => void;
}

export const Sidebar: FC<ISidebarProps> = ({ onClick }) => {
  const data = useRecoilValue(boardsState);
  const { boardId } = useParams();

  return (
    <SidebarContainer onClick={onClick}>
      <SidebarContent onClick={(e) => e.stopPropagation()}>
        <NavigationTitle>ALL BOARDS ({data?.boards?.length || 0})</NavigationTitle>

        <MediaFlexWrapper>
          <NavigationDetails>
            {data?.boards?.map(({ id, name }) => (
              <NavigationToBoardItem key={id} to={`/board/${id}`} isActive={boardId === id}>
                {name}
              </NavigationToBoardItem>
            ))}
            <NavigationToBoardItem
              to={'create-board'}
              state={{
                backgroundLocation: {
                  pathname: location.pathname.replace(BASENAME, '/'),
                },
              }}
            >
              + Create New Board
            </NavigationToBoardItem>
          </NavigationDetails>
          <BottomBlock>
            <ThemeSwitcher />
            <ToggleSidebarButton isSidebarVisible={true} onClick={onClick} />
          </BottomBlock>
        </MediaFlexWrapper>
      </SidebarContent>
    </SidebarContainer>
  );
};

export const MemoSidebar = memo(Sidebar);
