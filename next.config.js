/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }]
  },
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR'
  }
}

module.exports = nextConfig
