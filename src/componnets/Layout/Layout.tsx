import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MemoHeader } from './Header/Header.tsx';
import { Main } from './Layout.styled.ts';

export const Layout = () => {
  return (
    <>
      <MemoHeader />
      <Suspense>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </>
  );
};
