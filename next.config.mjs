/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Nécessaire pour GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
}

export default nextConfig 