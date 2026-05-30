import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: NextConfig = {
  distDir: "dist/public",
  trailingSlash: true,
  compress: true,
  allowedDevOrigins: ["*.replit.dev", "*.kirk.replit.dev"],
  webpack: (webpackConfig) => {
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      "@assets": path.resolve(__dirname, "../../attached_assets"),
    };
    return webpackConfig;
  },
};

export default config;
