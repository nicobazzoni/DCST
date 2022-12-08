/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    
   
  
  }, 
  
}

const withImages = require("next-images");
        const withTM = require("next-transpile-modules")(["@madzadev/audio-player"]);

        module.exports = withImages(withTM());



        module.exports = nextConfig
