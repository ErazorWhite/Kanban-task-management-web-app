import { IconCross } from '../../icons/IconCross.tsx';
import { StyledCrossButton } from './CrossButton.styled.ts';
import { FC } from 'react';

interface ICrossButtonProps {
  onClick?: () => void;
}

export const CrossButton: FC<ICrossButtonProps> = ({ onClick }) => {
  return (
    <StyledCrossButton onClick={onClick} type="button">
      <IconCross />
    </StyledCrossButton>
  );
};
