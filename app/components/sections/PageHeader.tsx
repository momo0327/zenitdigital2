/**
 * PageHeader Component
 *
 * Unified page header for service pages
 * Replaces WebDevPageComponents/Header, MobiledevPageComponents/Header, and FullstackDevPageComponents/Header
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceType, getServiceTheme } from '../../constants/theme';
import { SERVICES, CTA } from '../../constants/content';

interface PageHeaderProps {
  service: ServiceType;
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  service,
  title,
  subtitle,
  imageSrc = '/Group 6-3.png',
  imageAlt,
  primaryButtonText = CTA.getStarted,
  primaryButtonLink = '/ContactPage',
  secondaryButtonText = CTA.learnMore,
  secondaryButtonLink = '#features',
  className = '',
}) => {
  const theme = getServiceTheme(service);
  const serviceContent = SERVICES[service];

  const displayTitle = title || serviceContent.title;
  const displaySubtitle = subtitle || serviceContent.subtitle;
  const displayImageAlt = imageAlt || `${displayTitle} showcase - ${serviceContent.description}`;

  return (
    <div className={`px-2 md:px-12 lg:px-8 bg-white lg:py-20 py-17 ${className}`}>
      <div
        className="rounded-lg px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-10 min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center"
        style={{ backgroundColor: theme.background }}
      >
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl">
          {/* Left Content */}
          <div className="text-white flex flex-col justify-center items-center lg:items-start max-w-8xl">
            <h1
              className="text-6xl text-center lg:text-left md:text-6xl lg:text-8xl xl:text-8xl font-antonio font-bold mb-6"
              style={{ color: theme.color }}
            >
              {displayTitle.split(' ').map((word, index, array) => (
                <React.Fragment key={index}>
                  {word}
                  {index === array.length - 2 && <br />}
                  {index < array.length - 1 && ' '}
                </React.Fragment>
              ))}
            </h1>

            <p
              className="text-center lg:text-left text-lg md:text-xl lg:text-2xl mb-8 max-w-lg"
              style={{ color: theme.color }}
            >
              {displaySubtitle}
            </p>

            <div className="flex justify-center lg:justify-start flex-row gap-4">
              <Link href={primaryButtonLink}>
                <button
                  type="button"
                  className="font-semibold px-4 py-3 text-sm md:px-6 md:py-3 rounded-full md:text-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{
                    backgroundColor: theme.color,
                    color: theme.background,
                  }}
                  aria-label={primaryButtonText}
                >
                  {primaryButtonText}
                </button>
              </Link>
              <Link href={secondaryButtonLink}>
                <button
                  type="button"
                  className="font-semibold md:px-6 md:py-3 rounded-full text-md px-4 py-3 text-sm transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                  style={{
                    borderColor: theme.color,
                    color: theme.color,
                    borderWidth: '1px',
                  }}
                  aria-label={secondaryButtonText}
                >
                  {secondaryButtonText}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src={imageSrc}
              alt={displayImageAlt}
              width={600}
              height={700}
              className="w-80 md:w-96 lg:w-[500px] xl:w-[550px] 2xl:w-[600px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
