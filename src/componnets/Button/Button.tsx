import { StyledButton } from './Button.styled.ts';
import { FC, ReactNode } from 'react';

interface IButton {
  children?: ReactNode;
}

export const Button: FC<IButton> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
