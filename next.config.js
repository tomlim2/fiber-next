/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  experimental: {
    urlImports: [
      "https://framer.com/m/",
      "https://framerusercontent.com/",
      "https://ga.jspm.io/",
      "https://jspm.dev/",
    ],
  },
};

config.module.rules.push({
  test: /\.(glsl|vs|fs|vert|frag)$/,
  exclude: /node_modules/,
  use: ["raw-loader", "glslify-loader"],
});

module.exports = nextConfig;
