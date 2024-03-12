// src/components/Badge/Badge.tsx
import React, { useContext } from 'react';
import clsx from 'clsx';
import { Theme } from '../..';
import { ThemeContext } from '../theme/ThemeProvider';

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
  const theme = propTheme || useContext(ThemeContext);
  console.log(theme);
  const badgeClasses = clsx(
    'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold',
    theme.colors[variant],
    className
  );

  return <span className={badgeClasses}>{children}</span>;
};
