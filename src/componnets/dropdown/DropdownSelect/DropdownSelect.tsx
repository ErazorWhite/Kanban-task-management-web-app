import { FC, useRef, useState } from 'react';
import {
  DropdownContainer,
  DropdownContent,
  DropdownError,
  DropdownHeader,
  DropdownItem,
  DropdownSpan,
} from './DropdownSelect.styled.ts';
import { IconChevronDown } from '../../icons/IconChevronDown.tsx';
import { IconChevronUp } from '../../icons/IconChevronUp.tsx';
import { useClickOutside } from '../../../hooks/useClickOutside.ts';

interface IDropdownProps {
  title?: string;
  value: string;
  options?: string[];
  onChange: (value: string) => void;
  onBlur?: (e: FocusEvent) => void;
  error?: string;
}

export const DropdownSelect: FC<IDropdownProps> = ({ title, value, options, onChange, error }) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsActive(false));

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsActive(false);
  };

  return (
    <>
      <DropdownContainer ref={dropdownRef}>
        {title && <DropdownSpan>{title}</DropdownSpan>}
        <DropdownHeader onClick={() => setIsActive(!isActive)}>
          <span>{value || 'Select an option'}</span>
          {isActive ? <IconChevronUp /> : <IconChevronDown />}
        </DropdownHeader>
        {options && options.length >= 1 && isActive && (
          <DropdownContent>
            {options.map((option) => (
              <DropdownItem key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </DropdownItem>
            ))}
          </DropdownContent>
        )}
        {error && <DropdownError>{error}</DropdownError>}
      </DropdownContainer>
    </>
  );
};
