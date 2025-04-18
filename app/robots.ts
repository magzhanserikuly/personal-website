import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: ''
    },
    sitemap: 'https://magzhan-serikuly.vercel.app/sitemap.xml',
  }
}
