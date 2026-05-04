import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '../ui/OptimizedImage';
import { IMAGE_QUALITY } from '../../utils/image';
import { HOMEPAGE_SERVICE_CARDS } from '../../constants/content';

type Card = (typeof HOMEPAGE_SERVICE_CARDS)[number];

interface HomepageServiceCardProps {
  card: Card;
}

export const HomepageServiceCard = ({ card }: HomepageServiceCardProps) => {
  const image = (
    <div className={`flex justify-center flex-shrink-0 ${card.image.widthClass}`}>
      <OptimizedImage
        src={card.image.src}
        alt={card.image.alt}
        width={card.image.width}
        height={card.image.height}
        className={`w-full h-auto object-contain ${card.image.rotate ? 'transform -rotate-6' : ''}`}
        quality={IMAGE_QUALITY.HIGH}
        enableBlur
      />
    </div>
  );

  const content = (
    <div className="flex-1 min-w-0 text-left">
      <h2
        className="font-antonio font-bold leading-[1.05] text-[clamp(2rem,4.5vw,4.5rem)] mb-[clamp(1.75rem,2.5vw,2.75rem)]"
        style={{ color: card.accentColor }}
      >
        {card.title}
      </h2>
      <p
        className="leading-relaxed text-[clamp(1rem,0.5vw+0.875rem,1.25rem)] mb-[clamp(2.5rem,4vw,4rem)]"
        style={{ color: card.accentColor }}
      >
        {card.description}
      </p>
      <div className="flex gap-[clamp(0.75rem,1.25vw,1.5rem)]">
        <Link href={card.cta.explore.href}>
          <button
            className={`rounded-full font-semibold px-[clamp(1.5rem,2.5vw,2.75rem)] py-[clamp(0.75rem,1vw,1.125rem)] text-[clamp(0.875rem,0.5vw+0.75rem,1.125rem)] transition-colors duration-200 ${card.hoverFilledClass}`}
            style={{ backgroundColor: card.accentColor, color: card.bgColor }}
          >
            {card.cta.explore.label}
          </button>
        </Link>
        <Link href={card.cta.contact.href}>
          <button
            className={`border rounded-full font-semibold px-[clamp(1.5rem,2.5vw,2.75rem)] py-[clamp(0.75rem,1vw,1.125rem)] text-[clamp(0.875rem,0.5vw+0.75rem,1.125rem)] transition-all duration-200 ${card.hoverOutlinedClass}`}
            style={{ borderColor: card.accentColor, color: card.accentColor }}
          >
            {card.cta.contact.label}
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex-1 bg-[#F5F5F5] px-[clamp(0.5rem,1.5vw,2rem)] py-[clamp(1.5rem,2.5vw,2.5rem)]">
      <div
        className="rounded-2xl p-[clamp(1.5rem,3vw,4rem)] flex items-center min-h-[clamp(20rem,30vw,34rem)]"
        style={{ backgroundColor: card.bgColor }}
      >
        <div className="flex flex-col md:flex-row items-center gap-[clamp(1.5rem,3vw,3rem)] w-full">
          {card.imageOnLeft ? (
            <>
              {image}
              {content}
            </>
          ) : (
            <>
              {content}
              {image}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomepageServiceCard;
