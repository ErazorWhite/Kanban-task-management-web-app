import { IconVerticalEllipsis } from '../../icons/IconVerticalEllipsis.tsx';
import { DropdownMenuButtonBox } from './DropdownMenuButton.styled.ts';
import { FC } from 'react';
import { sizes } from '../../../global/constants.ts';

interface IDropdownMenuButtonProps {
  onClick?: () => void;
  size?: sizes;
}

export const DropdownMenuButton: FC<IDropdownMenuButtonProps> = ({
  onClick,
  size = sizes.SMALL,
}) => {
  return (
    <DropdownMenuButtonBox onClick={onClick}>
      <IconVerticalEllipsis size={size} />
    </DropdownMenuButtonBox>
  );
};
