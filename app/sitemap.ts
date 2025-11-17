import { MetadataRoute } from 'next';
import { BASE_URL } from './constants/seo';

/**
 * Sitemap.xml configuration
 * Helps search engines discover and index all pages
 * Includes priority and change frequency for Swedish market SEO
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: BASE_URL,
          sv: BASE_URL,
        },
      },
    },
    {
      url: `${BASE_URL}/WebDev`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${BASE_URL}/WebDev`,
          sv: `${BASE_URL}/WebDev`,
        },
      },
    },
    {
      url: `${BASE_URL}/MobileDev`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${BASE_URL}/MobileDev`,
          sv: `${BASE_URL}/MobileDev`,
        },
      },
    },
    {
      url: `${BASE_URL}/FullstackDev`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${BASE_URL}/FullstackDev`,
          sv: `${BASE_URL}/FullstackDev`,
        },
      },
    },
    {
      url: `${BASE_URL}/ContactPage`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/ContactPage`,
          sv: `${BASE_URL}/ContactPage`,
        },
      },
    },
  ];
}
