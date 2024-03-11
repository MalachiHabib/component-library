import clsx from 'clsx';
import { ThemeChoice } from '../components/theme/ThemeProvider';

export type VariantStyles = Record<string, Record<string, string>>;

export function getVariantStyles(
  baseStyles: string,
  variantStyles: VariantStyles,
  theme: ThemeChoice,
  variant: string
): string {
  return clsx(baseStyles, variantStyles[theme][variant]);
}
