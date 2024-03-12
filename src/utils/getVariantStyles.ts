import clsx from 'clsx';

export function getVariantStyles(
  baseStyles: string,
  variantStyles: Record<string, string>,
  variant: string
): string {
  return clsx(baseStyles, variantStyles[variant]);
}
