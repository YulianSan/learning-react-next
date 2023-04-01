/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['tmdb.org', 'themoviedb.org', 'image.tmdb.org'],
  },
}

module.exports = nextConfig
