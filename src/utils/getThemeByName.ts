import { lightTheme, darkTheme, defaultTheme } from 'utils/predefinedThemes';
import { Theme, ThemeName } from 'types/themes';

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
