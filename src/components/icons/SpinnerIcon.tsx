import React from 'react';
import clsx from 'clsx';
import { Tooltip } from 'react-tooltip';
import { classNotPresent } from 'utils/classNotPresent';
import { generateTooltipId } from 'utils/generateTooltipId';

interface IconProps {
  className?: string;
  size?: keyof typeof ICON_SIZES;
  title?: string;
}

export const ICON_SIZES = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
} as const;

export function SpinnerIcon({ className, title, size = 'md' }: IconProps) {
  const tooltipId = generateTooltipId();
  return (
    <>
      <svg
        className={clsx(
          className,
          classNotPresent('[wh]-', className) && ICON_SIZES[size],
          'animate-spin-fast'
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        data-tooltip-id={tooltipId}
        data-tooltip-content={title}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <Tooltip id={tooltipId} />
    </>
  );
}
