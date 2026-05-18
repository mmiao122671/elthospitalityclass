export const SITE_URL = 'https://elthospitalityclass.com';
export const SITE_NAME = 'ELT & Hospitality Class';
export const DEFAULT_OG_IMAGE = '/image/1.jpg';

export const SITEMAP_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/program', changefreq: 'monthly', priority: '0.9' },
  { path: '/certifications', changefreq: 'monthly', priority: '0.8' },
  { path: '/journey', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' },
] as const;
