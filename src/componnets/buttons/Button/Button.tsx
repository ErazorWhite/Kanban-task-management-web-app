import { ButtonLink, StyledButton } from './Button.styled.ts';
import { FC, MouseEventHandler, ReactNode } from 'react';
import { buttonVariantsColor, buttonVariantsSize } from '../../../global/utilities/constants.ts';
import { To } from 'react-router-dom';

interface IButton {
  children?: ReactNode;
  variantSize?: buttonVariantsSize;
  variantColor?: buttonVariantsColor;
  isLink?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  to?: To;
  type?: 'button' | 'submit' | 'reset';
  state?: { backgroundLocation: { pathname: string } };
}

export const Button: FC<IButton> = ({
  variantSize = buttonVariantsSize.MAIN,
  variantColor = buttonVariantsColor.PRIMARY,
  disabled = false,
  children,
  isLink = false,
  type = 'submit',
  to = '',
  state,
  onClick,
  ...props
}) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> = (e) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (onClick) onClick(e);
  };
  return isLink ? (
    <ButtonLink
      variantSize={variantSize}
      variantColor={variantColor}
      disabled={disabled}
      to={to}
      state={state}
      onClick={handleClick}
      {...props}
    >
      {children}
    </ButtonLink>
  ) : (
    <StyledButton
      variantSize={variantSize}
      variantColor={variantColor}
      disabled={disabled}
      type={type}
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
