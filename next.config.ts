import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 如果你的 GitHub Pages 有子目錄，請取消註解並修改以下設定
  // basePath: '/你的repo名稱',
  // assetPrefix: '/你的repo名稱/',
};

export default nextConfig;
