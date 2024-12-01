module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        // destination: "https://beerlot-core-obtg3qwuhq-an.a.run.app/:path*",
        destination: 'https://beerlot-core-api-lopbi5pmwq-du.a.run.app/:path*',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/privacy',
        destination:
          'https://beerlot.notion.site/f4dfd6c17dca44d8b6e53e2443eaa0b3',
        permanent: true,
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
