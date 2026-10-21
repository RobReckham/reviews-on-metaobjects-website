import nextra from "nextra";

const withNextra = nextra({ defaultShowCopyCode: true });

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.reviewsonmetaobjects.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s3.coders.fail",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://us-assets.i.posthog.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: "<https://assets.reviewsonmetaobjects.com>; rel=preconnect; crossorigin",
          },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
  async rewrites() {
    // Every docs page as Markdown for AI tools: append .md to its URL.
    return [
      { source: "/docs.md", destination: "/api/docs-md" },
      { source: "/docs/:path(.+)\\.md", destination: "/api/docs-md/:path" },
    ]
  },
  async redirects() {
    // The five signal blocks share one page; the app links to their old pages.
    const signals = ["bestseller", "sold-count", "last-purchased", "returning-customers", "rating-share"]
    return [
      ...signals.map((signal) => ({
        source: `/docs/:folder(app-blocks|displaying-reviews)/${signal}`,
        destination: `/docs/displaying-reviews/trust-signals#${signal}`,
        permanent: true,
      })),
      {
        source: "/docs/:folder(app-blocks|displaying-reviews)/customising-app-blocks",
        destination: "/docs/displaying-reviews/customising-blocks",
        permanent: true,
      },
      {
        source: "/docs/app-blocks/:path*",
        destination: "/docs/displaying-reviews/:path*",
        permanent: true,
      },
      {
        source: "/docs/app-blocks",
        destination: "/docs/displaying-reviews",
        permanent: true,
      },
    ];
  },
};

export default withNextra(nextConfig);
