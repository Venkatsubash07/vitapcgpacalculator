import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

// 1. Define your domain (Vercel production URL)
const DOMAIN = 'https://vitapcgpacalculator.vercel.app';

// 2. Define your static routes manually
// (If you have dynamic routes, you can fetch them from an API here)
const routes = [
  '/',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/faq'
  // Add all your accessible routes here
];

// 3. Generate the XML structure
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

// 4. Write the file to the 'public' folder
// Vite copies everything from 'public' to 'dist' automatically
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const publicDir = resolve(__dirname, 'public');

// Ensure public directory exists (usually does in Vite apps)
try {
    writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap);
    console.log('✅ Sitemap generated successfully in public/sitemap.xml');
} catch (e) {
    console.error('❌ Error generating sitemap:', e);
}
