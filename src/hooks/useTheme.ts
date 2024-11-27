import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export enum Theme {
  Light = 'light-theme',
  Dark = 'dark-theme',
}

type UseThemeReturnType = [Theme, Dispatch<SetStateAction<Theme>>];

export const useTheme = (): UseThemeReturnType => {
  const [currentStoredTheme, setCurrentStoredTheme] = useState<Theme>(
    localStorage.getItem('theme') as Theme
  );

  useEffect(() => {
    const currentTheme = Object.values(Theme).includes(currentStoredTheme)
      ? currentStoredTheme
      : Theme.Dark;

    const bodyClassList = document.body.classList;
    localStorage.setItem('theme', currentTheme);
    if (currentTheme === Theme.Light) {
      bodyClassList.remove(Theme.Dark);
    } else {
      bodyClassList.add(Theme.Dark);
    }
  }, [currentStoredTheme]);

  return [currentStoredTheme, setCurrentStoredTheme];
};
