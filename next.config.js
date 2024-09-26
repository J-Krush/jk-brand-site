/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/index.html',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig
