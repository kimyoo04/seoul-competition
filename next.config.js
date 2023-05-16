/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  images: {
    loader: "custom",
    loaderFile: "./src/util/localImageLoader.ts",
  },
};

module.exports = nextConfig;
