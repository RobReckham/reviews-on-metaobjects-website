import { Head } from "nextra/components";
import "./globals.css";
import Layout from "../components/layout";
import { getPageMap } from "nextra/page-map";

const title = `Shopify reviews powering metaobjects | ${process.env.NEXT_PUBLIC_APP_NAME}`;
const description = "The Shopify app that provides all tools to manage Shopify's standard product review Metaobjects.";
const ogImage = "https://assets.reviews-on-metaobjects.coders.fail/landing-01.jpg";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
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
        <Layout pageMap={await getPageMap("/")} showHeader={false} showFooter={false}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
