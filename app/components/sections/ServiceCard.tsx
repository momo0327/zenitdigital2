/**
 * ServiceCard Component
 *
 * Unified, reusable service card component that replaces 7 different header components
 * Supports different service types, layouts, and styling
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ServiceType, getServiceTheme } from '../../constants/theme';
import { SERVICES, CTA } from '../../constants/content';

interface ServiceCardProps {
  service: ServiceType;
  title?: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  demoLink: string;
  contactLink?: string;
  className?: string;
  imageClassName?: string;
  containerHeight?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  demoLink,
  contactLink = '/ContactPage',
  className = '',
  imageClassName = '',
  containerHeight = 'lg:h-[442px]',
}) => {
  const theme = getServiceTheme(service);
  const serviceContent = SERVICES[service];

  const displayTitle = title || serviceContent.title;
  const displaySubtitle = subtitle || serviceContent.subtitle;

  // Content section
  const ContentSection = () => (
    <div className="flex-1 text-left">
      <h2
        className="text-4xl md:text-5xl font-antonio font-bold leading-tight mb-6"
        style={{ color: theme.color }}
      >
        {displayTitle}
      </h2>
      <p
        className="text-base md:text-lg mb-6 leading-relaxed"
        style={{ color: theme.color }}
      >
        {displaySubtitle}
      </p>
      <div className="flex gap-4">
        <Link href={demoLink}>
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-full font-semibold transition-colors duration-200"
            style={{
              backgroundColor: theme.color,
              color: theme.background,
            }}
            aria-label={`View ${displayTitle} demo`}
          >
            {CTA.demo}
          </button>
        </Link>
        <Link href={contactLink}>
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-full font-semibold transition-all duration-200"
            style={{
              borderColor: theme.color,
              color: theme.color,
              borderWidth: '1px',
            }}
            aria-label="Contact us about this service"
          >
            {CTA.contact}
          </button>
        </Link>
      </div>
    </div>
  );

  // Image section
  const ImageSection = () => (
    <div className="flex-1 flex justify-center">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={384}
        height={400}
        className={`w-80 md:w-92 lg:w-96 h-auto object-contain ${imageClassName}`}
        priority={false}
      />
    </div>
  );

  return (
    <div className={`px-3 bg-white py-12 ${className}`}>
      <div
        className={`rounded-xl px-10 py-12 max-w-3xl mx-auto ${containerHeight}`}
        style={{ backgroundColor: theme.background }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          {imagePosition === 'left' ? (
            <>
              <ImageSection />
              <ContentSection />
            </>
          ) : (
            <>
              <ContentSection />
              <ImageSection />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
