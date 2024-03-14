import { Theme, ThemeName } from 'types/themes';
import { darkTheme, defaultTheme, lightTheme } from 'utils/predefinedThemes';

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
