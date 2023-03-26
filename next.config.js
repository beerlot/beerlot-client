module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: "/api/auth/:path*",
      },
      {
        source: "/:path*",
        // destination: "https://beerlot-core-obtg3qwuhq-an.a.run.app/:path*",
        destination: "https://beerlot-api-ecxukq6suq-du.a.run.app/:path*",
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
