import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  
  // GitHub Pages 部署相關設定
  basePath: process.env.NODE_ENV === 'production' ? '/Resume' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Resume' : '',
  
  turbopack: {
    // Turbopack 配置 (Turbopack 現在已穩定)
  },
  images: {
    // 圖片優化配置 - 靜態部署需要禁用優化
    unoptimized: true,
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },
  // 確保靜態資源正確處理
  transpilePackages: ['lucide-react'],
  
  // 靜態部署設定
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
