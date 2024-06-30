// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://adlet-ibraimov.vercel.app',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
  },
  // Exclude specific paths
  exclude: ['/studio/*', '/studio']
}
