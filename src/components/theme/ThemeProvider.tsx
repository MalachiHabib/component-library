import { createContext, ReactNode } from 'react';
import React from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export const defaultTheme = Theme.Light;

export const ThemeContext = createContext<Theme>(defaultTheme);

export interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

export function ThemeProvider({
  theme = defaultTheme,
  children,
}: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
