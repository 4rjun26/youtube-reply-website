/** @type {import('next').NextConfig} */
const withPWA= require('next-pwa')({
    dest:"public",
    register:true,
    skipWaiting:true,
    disable:process.env.NODE_ENV==='development',
});

module.exports = withPWA({
    // next.js config
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
      reactStrictMode:true,
      images: {
        domains: ["avatars.githubusercontent.com"],
      },
});
