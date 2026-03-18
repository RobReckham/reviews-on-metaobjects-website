import { Footer as NextraFooter, Layout, Navbar as NextraNavbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Link from "next/link";
import NavbarLinks from "../components/navbar-links";
import "./globals.css";

export const metadata = {
  title: "Shopify reviews powering metaobjects | Reviews on Metaobjects",
  description: "The Shopify app that provides all tools to manage all your store's customer reviews in a native and convenient way.",
};

const Logo = <b>Reviews on Metaobjects</b>;
const Footer = function() {
  const linkClasses = "text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors";
  return (
    <NextraFooter>
      <div className="w-full flex flex-wrap justify-between items-center gap-x-4 gap-y-2">
        <div className="text-sm text-gray-600 dark:text-gray-400">Reviews on Metaobjects {new Date().getFullYear()} © All rights reserved.</div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link href="/privacy-policy" className={linkClasses}>Privacy policy</Link>
          <Link href="/legal-information" className={linkClasses}>Legal information</Link>
        </div>
      </div>
    </NextraFooter>
  );
};

const Navbar = <NextraNavbar logo={Logo} logoLink="/" align="right"><NavbarLinks /></NextraNavbar>;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={Navbar}
          pageMap={await getPageMap()}
          editLink={null}
          feedback={{ content: null }}
          footer={<Footer />}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
