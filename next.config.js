module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://beerlot-core-api-lopbi5pmwq-du.a.run.app/api/:path*",
      },
      {
        source: "/:path*",
        destination: "/:path*",
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
