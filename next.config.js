module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/v1/files/:path*",
        destination:
          "https://beerlot-core-api-lopbi5pmwq-du.a.run.app/api/v1/files/:path*",
      },
      {
        source: "/api/v1/members/:path*",
        destination:
          "https://beerlot-core-api-lopbi5pmwq-du.a.run.app/api/v1/members/:path*",
      },
      {
        source: "/api/v1/beers/:path*",
        destination:
          "https://beerlot-core-api-lopbi5pmwq-du.a.run.app/api/v1/beers/:path*",
      },
      {
        source: "/api/v1/reviews/:path*",
        destination:
          "https://beerlot-core-api-lopbi5pmwq-du.a.run.app/api/v1/reviews/:path*",
      },
      {
        source: "/api/v1/policies/:path*",
        destination:
          "https://beerlot-core-api-lopbi5pmwq-du.a.run.app/api/v1/policies/:path*",
      },
      {
        source: "/api/v1/auth/signup",
        destination:
          "https://beerlot-core-api-lopbi5pmwq-du.a.run.app/api/v1/auth/signup",
      },
      {
        source: "/api/v1/auth/authorize/:path*",
        destination:
          "https://beerlot-core-api-lopbi5pmwq-du.a.run.app/api/v1/auth/authorize/:path*",
      },
      {
        source: "/api/v1/auth/refresh",
        destination:
          "https://beerlot-core-api-lopbi5pmwq-du.a.run.app/api/v1/auth/refresh",
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
