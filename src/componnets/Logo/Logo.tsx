import { LogoMobile } from '../icons/LogoMobile.tsx';
import { LogoBox } from './Logo.styled.ts';

export const Logo = () => {
  return (
    <LogoBox href="/">
      <LogoMobile />
    </LogoBox>
  );
};
