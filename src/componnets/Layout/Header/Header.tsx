import { memo } from 'react';
import { LogoMobile } from '../../icons/LogoMobile.tsx';

const Header = () => {
  return (
    <header>
      <LogoMobile />
    </header>
  );
};

export const MemoHeader = memo(Header);
