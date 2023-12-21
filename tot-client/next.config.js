/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_nextImgbbKey: "c0cf1ed50cca9e0380dbdb1d20ccc68c",
    NEXT_PUBLIC_apiKey: "AIzaSyD3PeAxcD1YAej7xv9RgOIB31lt-1qnvw0",
    NEXT_PUBLIC_authDomain: "time-on-task.firebaseapp.com",
    NEXT_PUBLIC_projectId: "time-on-task",
    NEXT_PUBLIC_storageBucket: "time-on-task.appspot.com",
    NEXT_PUBLIC_messagingSenderId: "643492325800",
    NEXT_PUBLIC_appId: "1:643492325800:web:9058d0b7035ee25c3cd59d",
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
