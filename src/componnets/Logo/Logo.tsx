import { LogoMobile } from '../icons/LogoMobile.tsx';
import { LogoBox } from './Logo.styled.ts';
import { FC } from 'react';

interface ILogoProps {
  isTextProvided?: boolean;
}

export const Logo: FC<ILogoProps> = ({ isTextProvided = false }) => {
  return (
    <LogoBox href="/">
      <LogoMobile />
      {isTextProvided && 'kanban'}
    </LogoBox>
  );
};
