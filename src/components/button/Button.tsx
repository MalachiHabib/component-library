import React from 'react';
import { SpinnerIcon } from 'components/icons/SpinnerIcon';
import { ButtonHTMLAttributes, MouseEvent, ReactNode, useMemo } from 'react';
import './Button.css';

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
}

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
  ...props
}: ButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  const buttonStyles = useMemo(() => {
    const variantStyles = `btn-${variant}`;
    const sizeStyles = `btn-${size}`;
    const loadingStyles = loading ? 'btn-loading' : 'btn-hover';

    return `btn ${variantStyles} ${sizeStyles} ${loadingStyles} ${className}`;
  }, [variant, size, loading, className]);

  const spinnerStyles = `animate-spin spinner-${size} ${loadingClassName}`;

  return (
    <button
      className={buttonStyles}
      disabled={disabled || loading}
      type={type}
      onClick={handleClick}
      {...props}
    >
      {loading ? <SpinnerIcon className={spinnerStyles} /> : <>{children}</>}
    </button>
  );
}
