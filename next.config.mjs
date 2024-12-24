/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Nécessaire pour GitHub Pages [comme vu ici](https://wallis.dev/blog/next-js-basepath-and-assetprefix)
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
}

export default nextConfig 