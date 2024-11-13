import { StyledButton } from './Button.styled.ts';
import { FC, ReactNode } from 'react';
import { buttonVariantsColor, buttonVariantsSize } from '../../../global/constants.ts';

interface IButton {
  children?: ReactNode;
  variantSize?: buttonVariantsSize;
  variantColor?: buttonVariantsColor;
  disabled?: boolean;
}

export const Button: FC<IButton> = ({
  variantSize = buttonVariantsSize.MAIN,
  variantColor = buttonVariantsColor.PRIMARY,
  disabled,
  children,
}) => {
  return (
    <StyledButton variantSize={variantSize} variantColor={variantColor} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
