module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://beerlot-core-obtg3qwuhq-an.a.run.app/:path*",
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
