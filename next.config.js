/* eslint-disable import/no-extraneous-dependencies */
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  eslint: {
    dirs: ["."],
  },
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  basePath: "",
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
