import React from 'react';
import { Skeleton, SkeletonCard, SkeletonText } from './Skeleton';

/**
 * Skeleton for homepage loading state
 */
export const HomePageSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <Skeleton width="60%" height={60} className="mb-6" />
          <SkeletonText lines={2} className="max-w-2xl" />
        </div>
      </div>

      {/* Two Column Section */}
      <div className="flex flex-col lg:flex-row gap-8 px-6 py-12">
        <div className="flex-1">
          <Skeleton height={400} variant="rectangular" />
        </div>
        <div className="flex-1">
          <Skeleton height={400} variant="rectangular" />
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Skeleton width="40%" height={40} className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Skeleton width="50%" height={48} className="mb-6" />
          <SkeletonText lines={3} className="max-w-3xl" />
        </div>
      </div>
    </div>
  );
};

/**
 * Skeleton for service pages (WebDev, MobileDev, FullstackDev)
 */
export const ServicePageSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <Skeleton width="70%" height={72} className="mb-6" />
          <SkeletonText lines={2} className="max-w-2xl mb-8" />
          <Skeleton width={200} height={48} radius="9999px" />
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Skeleton width="40%" height={40} className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton variant="circular" width={64} height={64} />
                <Skeleton width="80%" height={24} />
                <SkeletonText lines={3} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Skeleton width="35%" height={40} className="mb-8" />
          <div className="space-y-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-6">
                <Skeleton variant="circular" width={48} height={48} />
                <div className="flex-1 space-y-3">
                  <Skeleton width="60%" height={24} />
                  <SkeletonText lines={2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-16 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton width="60%" height={48} className="mb-6 mx-auto" />
          <Skeleton width={200} height={48} radius="9999px" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

/**
 * Skeleton for contact page
 */
export const ContactPageSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Skeleton width="50%" height={48} className="mb-4" />
          <SkeletonText lines={2} className="mb-12" />

          {/* Form Fields */}
          <div className="space-y-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i}>
                <Skeleton width="30%" height={16} className="mb-2" />
                <Skeleton
                  height={i === 4 ? 120 : 48}
                  variant="rectangular"
                  radius="0.5rem"
                />
              </div>
            ))}
            <Skeleton width={200} height={48} radius="9999px" />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Skeleton for component-level loading (e.g., dynamic sections)
 */
export const ComponentSkeleton: React.FC<{
  type?: 'card' | 'list' | 'grid';
  count?: number;
}> = ({ type = 'card', count = 3 }) => {
  if (type === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (type === 'list') {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex gap-4 p-4 border rounded-lg">
            <Skeleton variant="circular" width={60} height={60} />
            <div className="flex-1 space-y-2">
              <Skeleton width="70%" height={20} />
              <SkeletonText lines={2} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};
