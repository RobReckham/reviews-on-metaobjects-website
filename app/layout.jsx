import Link from "next/link";
import { Footer as NextraFooter, Layout, Navbar as NextraNavbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";

export const metadata = {
  title: "Shopify reviews powering metaobjects | Reviews on Metaobjects",
  description: "The Shopify app that provides all tools to manage all your store's customer reviews in a native and convenient way.",
};

const Logo = <b>Reviews on Metaobjects</b>;
const Footer = <NextraFooter>Reviews on Metaobjects {new Date().getFullYear()} © All rights reserved.</NextraFooter>;

const Navbar = <NextraNavbar logo={Logo} logoLink="/" align="right">
  <Link href="/docs">Docs</Link>
</NextraNavbar>;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={Navbar}
          pageMap={await getPageMap("/docs")}
          docsRepositoryBase="https://github.com/your-org/your-repo"
          footer={Footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
