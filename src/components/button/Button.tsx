import clsx from 'clsx';
import {
  ButtonHTMLAttributes,
  ReactNode,
  useContext,
  MouseEvent,
  useMemo,
} from 'react';
import { ThemeContext } from '../theme/ThemeProvider';
import { SpinnerIcon } from '../icons/SpinnerIcon';
import React from 'react';
import { Theme } from '../..';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingClassName?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  theme?: Theme;
}

const coreStyles =
  'rounded-lg font-medium transition ease-in-out duration-300 focus:outline-none focus:ring focus:ring-opacity-50';

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  children,
  className = '',
  disabled = false,
  loading = false,
  loadingClassName = '',
  onClick,
  size = 'md',
  type = 'button',
  variant = 'primary',
  theme: propTheme,
  ...props
}: ButtonProps) {
  const theme = propTheme || useContext(ThemeContext);

  const variantClassName = `${theme.colors[variant]} border border-${variant}-500 shadow hover:shadow-lg focus:ring-${variant}-500 focus:ring-opacity-50`;

  const styles = useMemo(() => {
    const baseStyles = className || variantClassName;
    const sizeStyles = sizes[size];
    const disabledOrLoadingStyles = 'opacity-50 cursor-not-allowed';
    const hoverStyles =
      'hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-200';

    const conditionalStyles = [];

    if (disabled || loading) {
      conditionalStyles.push(disabledOrLoadingStyles);
    } else {
      conditionalStyles.push(hoverStyles);
    }

    return clsx(coreStyles, baseStyles, sizeStyles, ...conditionalStyles);
  }, [variantClassName, size, disabled, loading, className]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  const loadingStyles = clsx(
    'animate-spin',
    {
      'h-4 w-4': size === 'sm',
      'h-5 w-5': size === 'md',
      'h-6 w-6': size === 'lg',
    },
    loadingClassName
  );

  return (
    <button
      className={styles}
      disabled={disabled || loading}
      type={type}
      onClick={handleClick}
      {...props}
    >
      {loading ? <SpinnerIcon className={loadingStyles} /> : <>{children}</>}
    </button>
  );
}
