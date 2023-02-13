/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "/bblock-admin",
  async redirects() {
    return [
      {
          source: '/',
          destination: '/bblock-admin',
          basePath: false,
          permanent: false
      }
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig