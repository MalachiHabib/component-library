export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
  };
}

export type ThemeName = 'default' | 'light' | 'dark';
