/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    path:"/",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;