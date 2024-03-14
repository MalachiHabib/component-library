import React, { useContext } from 'react';
import clsx from 'clsx';
import { ThemeContext } from 'components/theme/ThemeProvider';
import { Theme } from 'types/themes';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof Theme['colors'];
  className?: string;
  theme?: Theme;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className,
  theme: propTheme,
}) => {
  const contextTheme = useContext(ThemeContext);
  const theme = propTheme || contextTheme;

  const badgeClasses = clsx(
    'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold',
    theme.colors[variant],
    className
  );

  return <span className={badgeClasses}>{children}</span>;
};
