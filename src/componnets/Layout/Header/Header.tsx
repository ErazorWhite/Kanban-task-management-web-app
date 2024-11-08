import { memo } from 'react';
import { BoardName, Controls, Nav, StyledHeader } from './Header.styled.ts';
import { Logo } from '../../Logo/Logo.tsx';
import { ChevronMenuButton } from '../../ChevronMenuButton/ChevronMenuButton.tsx';
import { Button } from '../../Button/Button.tsx';
import { IconAddTaskMobile } from '../../icons/IconAddTaskMobile.tsx';
import { DropdownMenuButton } from '../../DropdownMenuButton/DropdownMenuButton.tsx';

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo />
        <BoardName>Platform Launch</BoardName>
        <ChevronMenuButton />
      </Nav>
      <Controls>
        <Button>
          <IconAddTaskMobile />
        </Button>
        <DropdownMenuButton />
      </Controls>
    </StyledHeader>
  );
};

export const MemoHeader = memo(Header);
