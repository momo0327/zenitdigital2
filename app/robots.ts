import { MetadataRoute } from 'next';
import { BASE_URL } from './constants/seo';

/**
 * Robots.txt: everything is crawlable, search engines and AI crawlers alike.
 * Never disallow /_next/ — crawlers need the CSS and JS to render the pages.
 * Which AI training crawlers get through is set in Cloudflare, not here.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
