import React from 'react';
import { createContext, ReactNode } from 'react';
import { Theme, ThemeName } from 'types/themes';
import { getThemeByName } from 'utils/getThemeByName';
import { defaultTheme } from 'utils/predefinedThemes';

interface ThemeProviderProps {
  theme?: Theme;
  themeName?: ThemeName;
  children: ReactNode;
}
export const ThemeContext = createContext<Theme>(defaultTheme);

export function ThemeProvider({
  themeName = 'default',
  children,
}: ThemeProviderProps) {
  const selectedTheme = getThemeByName(themeName);

  return (
    <ThemeContext.Provider value={selectedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}
