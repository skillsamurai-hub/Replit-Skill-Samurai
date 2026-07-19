import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── Branded redirect destinations ───────────────────────────────────────────
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=e7ece3a77793605b&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8605wnWs5IbLwgiP_q8dWk6m0JOTMO2aec34Imu71qLg7-lOaAy83wCGtxt3v4dM5_rF6fzOJjwBaiGIi6pjM0prLqkifa8XuxARoSocoLGeQh5uroJOq92OkTTR_NmwT_YnmLyqrOa_jcN502e5Xa9eO5z74vRPY7jWn4sRPNzG2yA7w%3D%3D&q=Skill+Samurai+-+Coding,+Robotics+%26+STEM+Academy+%28Coding+For+Kids+in+Winnipeg%29+Reviews&sa=X&ved=2ahUKEwiZltnJ3JeOAxX4KVkFHc4MA18Q0bkNegQILxAE&biw=2133&bih=1012&dpr=0.9#mpd=~8442050446591582271/customers/reviews";
// ─────────────────────────────────────────────────────────────────────────────

const config: NextConfig = {
  trailingSlash: true,
  compress: true,
  allowedDevOrigins: ["*.replit.dev", "*.kirk.replit.dev"],
  async redirects() {
    return [
      // /reviews and /reviews/ both redirect to Google Reviews (301 permanent)
      { source: "/reviews", destination: GOOGLE_REVIEWS_URL, permanent: true },
      { source: "/reviews/", destination: GOOGLE_REVIEWS_URL, permanent: true },
    ];
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      "@assets": path.resolve(__dirname, "../../attached_assets"),
    };
    return webpackConfig;
  },
};

export default config;
