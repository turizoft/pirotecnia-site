import type { CSSProperties } from 'react';

import { cn } from '@/lib/utils';

type CornerOrnamentProps = {
  className?: string;
  inset?: string;
  size?: string;
  thickness?: string;
  variant?: 'simple' | 'intricate';
};

/**
 * Renders four corner strokes without relying on global CSS.
 * Values accept any valid CSS length (px, rem, etc).
 */
export function CornerOrnament({
  className,
  inset = '0.75rem',
  size = '1.5rem',
  thickness = '2px',
  variant = 'simple',
}: CornerOrnamentProps) {
  const style = {
    '--corner-inset': inset,
    '--corner-size': size,
    '--corner-thickness': thickness,
  } as CSSProperties;

  if (variant === 'intricate') {
    return (
      <div
        className={cn('pointer-events-none absolute inset-0', className)}
        style={style}
        aria-hidden
      >
        {/* Top Left - Greek key pattern */}
        <span className='absolute top-[var(--corner-inset)] left-[var(--corner-inset)] h-[var(--corner-size)] w-[var(--corner-size)]'>
          <span className='absolute top-0 left-0 h-full w-[var(--corner-thickness)] bg-current' />
          <span className='absolute top-0 left-0 w-full h-[var(--corner-thickness)] bg-current' />
          <span className='absolute top-[25%] left-[25%] h-[50%] w-[var(--corner-thickness)] bg-current' />
          <span className='absolute top-[25%] left-[25%] w-[50%] h-[var(--corner-thickness)] bg-current' />
          <span className='absolute top-[50%] left-[50%] h-[25%] w-[var(--corner-thickness)] bg-current' />
          <span className='absolute top-[50%] left-[50%] w-[25%] h-[var(--corner-thickness)] bg-current' />
        </span>

        {/* Top Right - Greek key pattern */}
        <span className='absolute top-[var(--corner-inset)] right-[var(--corner-inset)] h-[var(--corner-size)] w-[var(--corner-size)]'>
          <span className='absolute top-0 right-0 h-full w-[var(--corner-thickness)] bg-current' />
          <span className='absolute top-0 right-0 w-full h-[var(--corner-thickness)] bg-current' />
          <span className='absolute top-[25%] right-[25%] h-[50%] w-[var(--corner-thickness)] bg-current' />
          <span className='absolute top-[25%] right-[25%] w-[50%] h-[var(--corner-thickness)] bg-current' />
          <span className='absolute top-[50%] right-[50%] h-[25%] w-[var(--corner-thickness)] bg-current' />
          <span className='absolute top-[50%] right-[50%] w-[25%] h-[var(--corner-thickness)] bg-current' />
        </span>

        {/* Bottom Left - Greek key pattern */}
        <span className='absolute bottom-[var(--corner-inset)] left-[var(--corner-inset)] h-[var(--corner-size)] w-[var(--corner-size)]'>
          <span className='absolute bottom-0 left-0 h-full w-[var(--corner-thickness)] bg-current' />
          <span className='absolute bottom-0 left-0 w-full h-[var(--corner-thickness)] bg-current' />
          <span className='absolute bottom-[25%] left-[25%] h-[50%] w-[var(--corner-thickness)] bg-current' />
          <span className='absolute bottom-[25%] left-[25%] w-[50%] h-[var(--corner-thickness)] bg-current' />
          <span className='absolute bottom-[50%] left-[50%] h-[25%] w-[var(--corner-thickness)] bg-current' />
          <span className='absolute bottom-[50%] left-[50%] w-[25%] h-[var(--corner-thickness)] bg-current' />
        </span>

        {/* Bottom Right - Greek key pattern */}
        <span className='absolute bottom-[var(--corner-inset)] right-[var(--corner-inset)] h-[var(--corner-size)] w-[var(--corner-size)]'>
          <span className='absolute bottom-0 right-0 h-full w-[var(--corner-thickness)] bg-current' />
          <span className='absolute bottom-0 right-0 w-full h-[var(--corner-thickness)] bg-current' />
          <span className='absolute bottom-[25%] right-[25%] h-[50%] w-[var(--corner-thickness)] bg-current' />
          <span className='absolute bottom-[25%] right-[25%] w-[50%] h-[var(--corner-thickness)] bg-current' />
          <span className='absolute bottom-[50%] right-[50%] h-[25%] w-[var(--corner-thickness)] bg-current' />
          <span className='absolute bottom-[50%] right-[50%] w-[25%] h-[var(--corner-thickness)] bg-current' />
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn('pointer-events-none absolute inset-0', className)}
      style={style}
      aria-hidden
    >
      <span className='absolute top-[var(--corner-inset)] left-[var(--corner-inset)] h-[var(--corner-size)] w-[var(--corner-size)] border-t-[var(--corner-thickness)] border-l-[var(--corner-thickness)] border-current' />
      <span className='absolute top-[var(--corner-inset)] right-[var(--corner-inset)] h-[var(--corner-size)] w-[var(--corner-size)] border-t-[var(--corner-thickness)] border-r-[var(--corner-thickness)] border-current' />
      <span className='absolute bottom-[var(--corner-inset)] left-[var(--corner-inset)] h-[var(--corner-size)] w-[var(--corner-size)] border-b-[var(--corner-thickness)] border-l-[var(--corner-thickness)] border-current' />
      <span className='absolute bottom-[var(--corner-inset)] right-[var(--corner-inset)] h-[var(--corner-size)] w-[var(--corner-size)] border-b-[var(--corner-thickness)] border-r-[var(--corner-thickness)] border-current' />
    </div>
  );
}
