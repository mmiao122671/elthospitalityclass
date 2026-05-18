import { Helmet } from 'react-helmet-async';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../config/seo';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  /** Route path, e.g. `/program` or `` for home */
  path?: string;
  noIndex?: boolean;
};

export default function SEO({
  title,
  description,
  keywords,
  path = '',
  noIndex = false,
}: SEOProps) {
  const canonicalPath = path === '/' ? '' : path;
  const url = `${SITE_URL}${canonicalPath}`;
  const ogImage = `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={url} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
