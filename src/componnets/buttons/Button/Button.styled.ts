import styled, { css } from 'styled-components';
import { typography } from '../../../global/utilities/typography.ts';
import { buttonVariantsColor, buttonVariantsSize } from '../../../global/utilities/constants.ts';
import { Link } from 'react-router-dom';
import { TABLET_BP } from '../../../global/utilities/breakpoints.ts';

const variantSizes = {
  [buttonVariantsSize.HEADER]: {
    padding: '10px 18px',
    paddingTablet: '15px 25px',
    fontSize: '15px',
    lineHeight: 'auto',
    width: 'auto',
  },
  [buttonVariantsSize.MAIN]: {
    padding: '15px 18px',
    paddingTablet: '15px 18px',
    fontSize: '15px',
    lineHeight: 'auto',
    width: 'auto',
  },
  [buttonVariantsSize.MODAL]: {
    padding: '9px 0',
    paddingTablet: '9px 0',
    fontSize: '13px',
    lineHeight: 1.8,
    width: '100%',
  },
};

const variantColors = {
  [buttonVariantsColor.PRIMARY]: {
    backgroundColor: 'var(--color-accent-bg)',
    hoverBackgroundColor: 'var(--color-main-purple-hover)',
    color: 'var(--color-white)',
  },
  [buttonVariantsColor.SECONDARY]: {
    backgroundColor: 'var(--color-light-accent-bg)',
    hoverBackgroundColor: 'var(--color-light-accent-bg-hover)',
    color: 'var(--color-accent-bg)',
  },
  [buttonVariantsColor.DESTRUCTIVE]: {
    backgroundColor: 'var(--color-red)',
    hoverBackgroundColor: 'var(--color-red-hover)',
    color: 'var(--color-white)',
  },
};

interface IStyledButton {
  variantSize?: buttonVariantsSize;
  variantColor?: buttonVariantsColor;
  disabled?: boolean;
}

export const BaseButtonStyles = css<IStyledButton>`
  ${typography.heading_m}
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  background-color: ${({ disabled = false, variantColor = buttonVariantsColor.PRIMARY }) =>
    disabled ? 'var(--color-accent-bg-disabled)' : variantColors[variantColor].backgroundColor};
  color: ${({ disabled = false, variantColor = buttonVariantsColor.PRIMARY }) =>
    disabled ? 'var(--color-accent-fg-disabled)' : variantColors[variantColor].color};
  fill: ${({ disabled = false, variantColor = buttonVariantsColor.PRIMARY }) =>
    disabled ? 'var(--color-accent-fg-disabled)' : variantColors[variantColor].color};
  padding: ${({ variantSize = buttonVariantsSize.MAIN }) => variantSizes[variantSize].padding};
  font-size: ${({ variantSize = buttonVariantsSize.MAIN }) => variantSizes[variantSize].fontSize};
  line-height: ${({ variantSize = buttonVariantsSize.MAIN }) =>
    variantSizes[variantSize].lineHeight};
  border: none;
  border-radius: 24px;
  min-height: 32px;
  width: ${({ variantSize = buttonVariantsSize.MAIN }) => variantSizes[variantSize].width};
  min-width: 48px;
  text-decoration: none;
  transition: var(--animation-ease-in);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ disabled, variantColor = buttonVariantsColor.PRIMARY }) =>
      !disabled && variantColors[variantColor].hoverBackgroundColor};
  }

  @media screen and ${TABLET_BP} {
    padding: ${({ variantSize = buttonVariantsSize.MAIN }) =>
      variantSizes[variantSize].paddingTablet};
  }
`;

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['variantColor', 'variantSize'].includes(prop),
})<IStyledButton>`
  ${BaseButtonStyles}
`;

export const ButtonLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => !['variantColor', 'variantSize'].includes(prop),
})<IStyledButton>`
  ${BaseButtonStyles}
`;
