/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export served from Cloudflare Workers static assets (see wrangler.jsonc).
  output: 'export',
  // The Next image optimizer needs a Node server; export must ship images as-is.
  images: { unoptimized: true },
}

module.exports = nextConfig
