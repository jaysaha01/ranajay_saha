import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ranajay-saha.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://ranajay-saha.vercel.app/blog/best-practices-for-modern-frontend-development-in-2025',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://ranajay-saha.vercel.app/blog/the-future-of-frontend-development-trends-and-innovations',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
        url: 'https://ranajay-saha.vercel.app/blog/the-future-of-web-development-trends-and-innovations-in-2025',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
  ]
}