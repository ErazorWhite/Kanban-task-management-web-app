import { FC, useState } from 'react';
import {
  DropdownContainer,
  DropdownContent,
  DropdownHeader,
  DropdownItem,
  DropdownSpan,
} from './Dropdown.styled.ts';
import { IconChevronDown } from '../icons/IconChevronDown.tsx';
import { IconChevronUp } from '../icons/IconChevronUp.tsx';

interface IDropdownProps {
  title?: string;
  selectedOption: string;
  options: string[];
}

// TODO
// Provide setSelect to choose an selectedOption

export const Dropdown: FC<IDropdownProps> = ({ title, selectedOption, options }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <DropdownContainer>
        {title && <DropdownSpan>{title}</DropdownSpan>}
        <DropdownHeader onClick={() => setIsActive(!isActive)}>
          <span>{selectedOption}</span>
          {isActive ? <IconChevronUp /> : <IconChevronDown />}
        </DropdownHeader>
        {options && isActive && (
          <DropdownContent>
            {options.map((option) => (
              <DropdownItem>{option}</DropdownItem>
            ))}
          </DropdownContent>
        )}
      </DropdownContainer>
    </>
  );
};
