// src/components/theme/ThemeProvider.tsx
import { createContext, ReactNode } from 'react';
import { Theme } from '../../types/themes';
import {
  defaultTheme,
  darkTheme,
  lightTheme,
} from '../../types/predefinedThemes';
import React from 'react';

export type ThemeName = 'default' | 'light' | 'dark' | 'custom';

export const ThemeContext = createContext<Theme>(defaultTheme);

export interface ThemeProviderProps {
  theme?: Theme;
  themeName?: ThemeName;
  children: ReactNode;
}

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

export function getThemeByName(themeName: ThemeName): Theme {
  switch (themeName) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      return defaultTheme;
  }
}
