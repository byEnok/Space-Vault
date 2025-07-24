/** @type {import('next').NextConfig} */

const localDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  images: {
    loader: localDev ? 'default' : 'custom',
    loaderFile: localDev ? undefined : './loader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.enoksenn.no', // Your image optimization service
        pathname: '/**', // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'preview.redd.it', // The external image source
        pathname: '/**', // Allow all paths
      },
    ],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
}

export default nextConfig
