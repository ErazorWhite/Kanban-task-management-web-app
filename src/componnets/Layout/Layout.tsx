import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MemoHeader } from './Header/Header.tsx';

export const Layout = () => {
  return (
    <>
      <MemoHeader />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
