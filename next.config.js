/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['tmdb.org', 'themoviedb.org', 'image.tmdb.org'],
  },
  env: {
    TOKEN:'f32e2ba295e71e6ff1bfc7fe7de13588',
    API_URL:'https://api.themoviedb.org/3/movie/',
    SEARCH_URL:'https://api.themoviedb.org/3/search/movie/',
    IMG_URL:'https://image.tmdb.org/t/p/w500/'
    
  }
}

module.exports = nextConfig
