const { PHASE_DEVELOPMENT_SERVER } = require("next/dist/shared/lib/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: false,
      env: {
        markdownPath: "",
      },
    };
  }

  return {
    reactStrictMode: false,
    env: {
      markdownPath: "",
    },
  };
};

module.exports = nextConfig;
