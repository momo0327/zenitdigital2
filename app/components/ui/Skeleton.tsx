import React from 'react';

export interface SkeletonProps {
  /**
   * Width of the skeleton
   * @default '100%'
   */
  width?: string | number;

  /**
   * Height of the skeleton
   * @default '1rem'
   */
  height?: string | number;

  /**
   * Border radius
   * @default '0.25rem'
   */
  radius?: string | number;

  /**
   * Whether to animate the skeleton
   * @default true
   */
  animate?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Variant for different skeleton styles
   * @default 'default'
   */
  variant?: 'default' | 'circular' | 'rectangular' | 'text';
}

/**
 * Base skeleton component for loading states
 *
 * @example
 * ```tsx
 * // Text skeleton
 * <Skeleton variant="text" width="80%" />
 *
 * // Avatar skeleton
 * <Skeleton variant="circular" width={40} height={40} />
 *
 * // Image skeleton
 * <Skeleton variant="rectangular" width="100%" height={200} />
 * ```
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '1rem',
  radius = '0.25rem',
  animate = true,
  className = '',
  variant = 'default',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'circular':
        return { borderRadius: '50%' };
      case 'rectangular':
        return { borderRadius: '0.5rem' };
      case 'text':
        return { borderRadius: '0.25rem', height: '1em' };
      default:
        return { borderRadius: radius };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <div
      className={`bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] ${
        animate ? 'animate-shimmer' : ''
      } ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        ...variantStyles,
      }}
      aria-label="Loading..."
      role="status"
    />
  );
};

/**
 * Skeleton for text lines
 */
export const SkeletonText: React.FC<{
  lines?: number;
  className?: string;
}> = ({ lines = 3, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          width={i === lines - 1 ? '70%' : '100%'}
          variant="text"
        />
      ))}
    </div>
  );
};

/**
 * Skeleton for cards
 */
export const SkeletonCard: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <Skeleton variant="rectangular" height={200} />
      <div className="space-y-2">
        <Skeleton width="60%" height={24} />
        <SkeletonText lines={2} />
      </div>
    </div>
  );
};

/**
 * Skeleton for avatar with text
 */
export const SkeletonAvatar: React.FC<{
  withText?: boolean;
  className?: string;
}> = ({ withText = true, className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Skeleton variant="circular" width={48} height={48} />
      {withText && (
        <div className="flex-1 space-y-2">
          <Skeleton width="40%" height={16} />
          <Skeleton width="60%" height={14} />
        </div>
      )}
    </div>
  );
};
