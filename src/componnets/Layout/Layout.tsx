import { Suspense, useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MemoHeader } from './Header/Header.tsx';
import { LayoutContainer, Main } from './Layout.styled.ts';
import { MemoSidebar } from './Sidebar/Sidebar.tsx';
import { ToggleSidebarButton } from '../buttons/ToggleSidebarButton/ToggleSidebarButton.tsx';
import { TABLET_BP } from '../../global/utilities/breakpoints.ts';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.tsx';

const spinner = <LoadingSpinner isLoading={true} />;

export const Layout = () => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(() => {
    return window.matchMedia(TABLET_BP).matches;
  });
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsSpinnerVisible(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleDropdownToggle = useCallback(() => {
    setIsDropdownOpened((prevState) => !prevState);
  }, []);

  return (
    <Suspense fallback={spinner}>
      {isSpinnerVisible && <LoadingSpinner isLoading={true} />}
      <MemoHeader isDropdownOpened={isDropdownOpened} onDropDownOpen={handleDropdownToggle} />
      <LayoutContainer>
        {isDropdownOpened ? (
          <MemoSidebar onClick={handleDropdownToggle} />
        ) : (
          <ToggleSidebarButton isSidebarVisible={false} onClick={handleDropdownToggle} />
        )}
        <Main>
          <Outlet />
        </Main>
      </LayoutContainer>
    </Suspense>
  );
};
