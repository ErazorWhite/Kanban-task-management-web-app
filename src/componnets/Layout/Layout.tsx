import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MemoHeader } from './Header/Header.tsx';
import { ExpandWrapper, LayoutContainer, Main } from './Layout.styled.ts';
import { TaskEditorModal } from '../modals/TaskEditorModal/TaskEditorModal.tsx';
import { BoardEditorModal } from '../modals/BoardEditorModal/BoardEditorModal.tsx';
import { ViewTaskModal } from '../modals/ViewTaskModal/ViewTaskModal.tsx';
import { DestructiveModal } from '../modals/DestructiveModal/DestructiveModal.tsx';
import { Backdrop } from '../Backdrop/Backdrop.tsx';
import { MobileNavigationModal } from '../modals/MobileNavigationModal/MobileNavigationModal.tsx';
import { Sidebar } from '../Sidebar/Sidebar.tsx';

export const Layout = () => {
  return (
    <Suspense>
      {/*<ExpandWrapper>*/}
      {/*<Sidebar />*/}
      <LayoutContainer>
        <MemoHeader />
        <Main>
          <Outlet />
        </Main>
      </LayoutContainer>
      {/*</ExpandWrapper>*/}
    </Suspense>
  );
};

{
  /*<BoardEditorModal />*/
}
{
  /*<TaskEditorModal />*/
}
{
  /*<ViewTaskModal />*/
}
