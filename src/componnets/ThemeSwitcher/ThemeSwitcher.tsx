import {
  ToggleContainer,
  ToggleMainBlock,
  ToggleOption,
  ToggleThumb,
} from './ThemeSwitcher.styled';
import { FC, useCallback, useState } from 'react';
import { IconLightTheme } from '../icons/IconLightTheme.tsx';
import { IconDarkTheme } from '../icons/IconDarkTheme.tsx';
import { Theme, useTheme } from '../../hooks/useTheme.ts';

export const ThemeSwitcher: FC = () => {
  const [currentStoredTheme, setCurrentStoredTheme] = useTheme();
  const [isChecked, setIsChecked] = useState(
    currentStoredTheme ? currentStoredTheme === Theme.Dark : true
  ); // make dark as default

  const handleToggle = useCallback(() => {
    setCurrentStoredTheme(currentStoredTheme === Theme.Light ? Theme.Dark : Theme.Light);
    setIsChecked((prevState) => !prevState);
  }, [currentStoredTheme]);

  return (
    <ToggleMainBlock onClick={handleToggle} type="button" aria-pressed={isChecked}>
      <ToggleOption active={!isChecked}>
        <IconLightTheme />
      </ToggleOption>
      <ToggleContainer>
        <ToggleThumb isChecked={isChecked} />
      </ToggleContainer>
      <ToggleOption active={isChecked}>
        <IconDarkTheme />
      </ToggleOption>
    </ToggleMainBlock>
  );
};
