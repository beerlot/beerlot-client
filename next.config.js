module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: "/api/auth/:path*",
      },
      {
        source: "/:path*",
        destination: "https://beerlot-core-api-lopbi5pmwq-du.a.run.app/:path*",
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
