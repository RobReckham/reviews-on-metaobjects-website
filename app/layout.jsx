import { GoogleAnalytics } from "@next/third-parties/google";
import { Head } from "nextra/components";
import "./globals.css";
import Layout from "../components/layout";
import { getPageMap } from "nextra/page-map";

const title = `Shopify reviews powering metaobjects | ${process.env.NEXT_PUBLIC_APP_NAME}`;
const description = "The Shopify app that provides all tools to manage Shopify's standard product review Metaobjects.";
const ogImage = "https://assets.reviews-on-metaobjects.coders.fail/landing-01.jpg";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "FiveOh",
  },
  title,
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    title,
    description,
    images: [
      {
        url: ogImage,
        alt: "Reviews built on Shopify Metaobjects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Layout pageMap={await getPageMap("/")} showHeader={false} showFooter={false}>
          {children}
        </Layout>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
