import { LogoMobile } from '../icons/LogoMobile.tsx';
import { LogoBox, LogoText } from './Logo.styled.ts';
import { FC } from 'react';

interface ILogoProps {
  isTextProvided?: boolean;
}

export const Logo: FC<ILogoProps> = ({ isTextProvided = false }) => {
  return (
    <LogoBox to={`/`}>
      <LogoMobile />
      {isTextProvided && <LogoText>kanban</LogoText>}
    </LogoBox>
  );
};
