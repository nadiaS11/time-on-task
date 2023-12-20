/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_nextImgbbKey: "c0cf1ed50cca9e0380dbdb1d20ccc68c",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
module.exports = nextConfig;
