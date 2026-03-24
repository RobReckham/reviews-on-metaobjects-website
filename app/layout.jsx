import { Head } from "nextra/components";
import "./globals.css";
import Layout from "../components/layout";
import { getPageMap } from "nextra/page-map";

export const metadata = {
  title: `Shopify reviews powering metaobjects | ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: "The Shopify app that provides all tools to manage all your store's customer reviews in a native and convenient way.",
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
