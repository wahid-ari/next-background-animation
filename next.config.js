/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REPO_URL: "https://github.com/wahid-ari/next-background-animation",
    // API_URL: "http://localhost:3000",
    // API_URL: "https://next-13-pages.vercel.app",
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com", "ui-avatars.com"],
  },
};

module.exports = nextConfig;