import { FC, useRef, useState } from 'react';
import { DropdownMenuButton } from '../../buttons/DropdownMenuButton/DropdownMenuButton.tsx';
import {
  DropdownActionContainer,
  DropdownActionMenuContent,
  StyledLink,
} from './DropdownAction.styled.ts';
import { useClickOutside } from '../../../hooks/useClickOutside.ts';
import { sizes } from '../../../global/utilities/constants.ts';

export interface IDropdownAction {
  title: string;
  link: string;
  state?: { backgroundLocation: { pathname: string } };
}

interface IDropdownActionProps {
  size?: sizes;
  actionList: IDropdownAction[];
}

export const DropdownAction: FC<IDropdownActionProps> = ({
  actionList = [],
  size = sizes.MEDIUM,
}) => {
  const [isDropdownMenuOpened, setIsDropdownMenuOpened] = useState(false);
  const actionRef = useRef<HTMLDivElement>(null);
  useClickOutside(actionRef, () => setIsDropdownMenuOpened(false));

  const handleDropdownMenuToggle = () => {
    setIsDropdownMenuOpened(!isDropdownMenuOpened);
  };

  return (
    <DropdownActionContainer ref={actionRef}>
      <DropdownMenuButton onClick={handleDropdownMenuToggle} size={size} />
      {isDropdownMenuOpened && actionList && (
        <DropdownActionMenuContent>
          {actionList?.map(({ title, link, state }) => (
            <StyledLink key={title} to={link} state={state}>
              {title}
            </StyledLink>
          ))}
        </DropdownActionMenuContent>
      )}
    </DropdownActionContainer>
  );
};
