/** @type {import('next').NextConfig} */

const isProd = true;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: false,
  },
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
}

export default nextConfig 