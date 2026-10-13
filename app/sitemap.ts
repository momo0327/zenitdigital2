import { MetadataRoute } from 'next';
import { BASE_URL } from './constants/seo';

/**
 * Sitemap.xml: every indexable page.
 *
 * No lastModified: on Cloudflare this route runs per request, so new Date()
 * stamped every page with the time of the fetch. Google ignores lastmod once it
 * proves inaccurate; leaving it out is valid. Add real dates only if they are
 * kept up to date when a page's content changes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/WebDev`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/MobileDev`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/FullstackDev`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/AIDev`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/work`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/portal`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
