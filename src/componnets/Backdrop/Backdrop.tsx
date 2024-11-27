import { BackdropContainer } from './Backdrop.styled';
import { FC, ReactNode } from 'react';

interface IBackdropProps {
  isMobile?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export const Backdrop: FC<IBackdropProps> = ({ onClick, isMobile = false, children }) => (
  <BackdropContainer onClick={onClick} isMobile={isMobile}>
    {children}
  </BackdropContainer>
);
