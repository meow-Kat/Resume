import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 只在 GitHub Pages 部署時使用 basePath 和 assetPrefix
  ...(isProduction && isGitHubPages ? { 
    basePath: '/Resume',
    assetPrefix: '/Resume'
  } : {}),
};

export default nextConfig;
