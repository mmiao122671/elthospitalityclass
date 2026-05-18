# SEO setup for elthospitalityclass.com

This project includes on-site SEO basics. Complete these steps after each deploy.

## Already in the project

| Item | Location |
|------|----------|
| `robots.txt` | `public/robots.txt` → `https://elthospitalityclass.com/robots.txt` |
| `sitemap.xml` | `public/sitemap.xml` → `https://elthospitalityclass.com/sitemap.xml` |
| Per-page titles & descriptions | `src/components/SEO.tsx` on each page |
| Canonical URLs & Open Graph | `src/components/SEO.tsx` |
| Site URL constant | `src/config/seo.ts` |

## 1. Verify files are live

After deployment, open in a browser:

- https://elthospitalityclass.com/robots.txt
- https://elthospitalityclass.com/sitemap.xml

Both should return 200 (not your SPA’s index.html). If they 404, configure your host to serve static files from `public/` before the SPA fallback.

## 2. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property: **URL prefix** → `https://elthospitalityclass.com`
3. Verify ownership (HTML file upload, DNS TXT, or meta tag — follow Google’s instructions).
4. **Sitemaps** → Submit: `https://elthospitalityclass.com/sitemap.xml`
5. Use **URL inspection** to request indexing for `/`, `/program`, `/contact`, etc.

## 3. Bing Webmaster Tools (optional)

1. [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site and verify.
3. Submit the same sitemap URL.

## 4. Update sitemap when pages change

Edit `public/sitemap.xml`:

- Set `<lastmod>` to the publish date (YYYY-MM-DD).
- Add new `<url>` blocks for any new routes in `src/App.tsx`.

Keep `src/config/seo.ts` `SITEMAP_ROUTES` in sync if you add routes (for documentation).

## 5. On-page checks (each major update)

- Unique `<title>` and meta description per page (via `<SEO />`).
- One clear `<h1>` per page.
- Descriptive `alt` text on images.
- Internal links between Program, Certifications, Journey, and Contact.

## 6. Performance & mobile

- Run [PageSpeed Insights](https://pagespeed.web.dev/) for mobile and desktop.
- Confirm [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) passes.

## 7. Local / program SEO (ongoing)

- List accurate NAP (name, address, phone) on Contact — match Google Business Profile if you use one.
- Use consistent wording: “ELT Hospitality Class”, “Charlottetown”, “Prince Edward Island”.

## 8. HTTPS & redirects

- Enforce HTTPS on the host.
- Redirect `www.elthospitalityclass.com` → `elthospitalityclass.com` (or the reverse) — pick one canonical host and stick to it; update `SITE_URL` in `src/config/seo.ts` if you choose `www`.

## 9. Social preview

Share `https://elthospitalityclass.com/` on Facebook/LinkedIn or use [opengraph.xyz](https://www.opengraph.xyz/) to confirm title, description, and image (`/image/1.jpg`).

## 10. Monitor

- Search Console: impressions, clicks, coverage errors.
- Fix crawl errors and broken links promptly.
- Re-submit sitemap after adding new public pages.
