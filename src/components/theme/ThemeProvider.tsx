// ThemeProvider.tsx
import { createContext, ReactNode } from 'react';
import React from 'react';

export type ThemeChoice = 'light' | 'dark';

export const defaultThemeChoice: ThemeChoice = 'dark';

export interface Theme {
  choice: ThemeChoice;
}

export const defaultTheme: Theme = {
  choice: defaultThemeChoice,
};

export const ThemeContext = createContext<Theme>(defaultTheme);

export interface ThemeProviderProps {
  theme?: ThemeChoice;
  children: ReactNode;
}

export function ThemeProvider({
  theme = defaultThemeChoice,
  children,
}: ThemeProviderProps) {
  const selectedTheme: Theme = {
    choice: theme,
  };

  return (
    <ThemeContext.Provider value={selectedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}
