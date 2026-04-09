/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/hemai',       // nombre de tu repo
  assetPrefix: '/hemai/',
};

export default nextConfig;
