import { FC, memo, useMemo } from 'react';
import { BoardName, DropdownButton, Controls, Nav, StyledHeader } from './Header.styled.ts';
import { Logo } from '../../Logo/Logo.tsx';
import { Button } from '../../buttons/Button/Button.tsx';
import { IconAddTaskMobile } from '../../icons/IconAddTaskMobile.tsx';
import { BASENAME, buttonVariantsSize, sizes } from '../../../global/utilities/constants.ts';
import { IconChevronDown } from '../../icons/IconChevronDown.tsx';
import { IconChevronUp } from '../../icons/IconChevronUp.tsx';
import {
  DesktopOrTabletOnly,
  MobileOnly,
} from '../../shared/ResponsiveElements/ResponsiveElements.ts';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { boardsState } from '../../../state/atoms/boardsState.ts';
import { DropdownAction } from '../../dropdown/DropdownAction/DropdownAction.tsx';

interface IHeaderProps {
  isDropdownOpened: boolean;
  onDropDownOpen: () => void;
}

const Header: FC<IHeaderProps> = ({ isDropdownOpened, onDropDownOpen }) => {
  const { boardId = '' } = useParams<{ boardId: string }>();
  const data = useRecoilValue(boardsState);
  const currentBoard = data?.boards?.find((b) => b.id === boardId) || null;

  const dropdownActionList = useMemo(
    () => [
      {
        title: 'Edit Board',
        link: `${location.pathname.replace(BASENAME, '/')}/edit`,
        state: { backgroundLocation: { pathname: `/board/${boardId}` } },
      },
      {
        title: 'Delete Board',
        link: `${location.pathname.replace(BASENAME, '/')}/delete`,
        state: { backgroundLocation: { pathname: `/board/${boardId}` } },
      },
    ],
    [boardId]
  );

  return (
    <>
      <StyledHeader>
        <Nav>
          <Logo isTextProvided />
          {currentBoard && <BoardName>{currentBoard?.name}</BoardName>}
          <DropdownButton onClick={onDropDownOpen}>
            {isDropdownOpened ? <IconChevronUp /> : <IconChevronDown />}
          </DropdownButton>
        </Nav>
        <Controls>
          <Button
            to={`/board/${encodeURIComponent(boardId)}/create-task`}
            variantSize={buttonVariantsSize.HEADER}
            disabled={!currentBoard}
            state={{
              backgroundLocation: {
                pathname: location.pathname.replace(BASENAME, '/'),
              },
            }}
            isLink
          >
            <MobileOnly>
              <IconAddTaskMobile />
            </MobileOnly>
            <DesktopOrTabletOnly>+ Add New Task</DesktopOrTabletOnly>
          </Button>
          <DropdownAction actionList={dropdownActionList} size={sizes.MEDIUM} />
        </Controls>
      </StyledHeader>
    </>
  );
};

export const MemoHeader = memo(Header);
