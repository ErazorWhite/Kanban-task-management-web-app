import React, { memo } from 'react';
import { BoardName, ChevronBox, Controls, Nav, StyledHeader } from './Header.styled.ts';
import { Logo } from '../../Logo/Logo.tsx';

import { Button } from '../../buttons/Button/Button.tsx';
import { IconAddTaskMobile } from '../../icons/IconAddTaskMobile.tsx';
import { DropdownMenuButton } from '../../buttons/DropdownMenuButton/DropdownMenuButton.tsx';
import { buttonVariantsSize, sizes } from '../../../global/constants.ts';
import { IconChevronDown } from '../../icons/IconChevronDown.tsx';
import { MobileNavigationModal } from '../../modals/MobileNavigationModal/MobileNavigationModal.tsx';

const Header = () => {
  const isNavOpen = false;
  return (
    <>
      <StyledHeader>
        <Nav>
          <Logo />
          <BoardName>Platform Launch</BoardName>
          <ChevronBox>
            <IconChevronDown />
          </ChevronBox>
        </Nav>
        <Controls>
          <Button variantSize={buttonVariantsSize.HEADER} disabled>
            <IconAddTaskMobile />
          </Button>
          <DropdownMenuButton size={sizes.SMALL} />
        </Controls>
      </StyledHeader>
      {isNavOpen && <MobileNavigationModal />}
    </>
  );
};

export const MemoHeader = memo(Header);
