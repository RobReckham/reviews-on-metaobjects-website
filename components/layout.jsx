import { Footer as NextraFooter, Layout as NextraLayout, Navbar as NextraNavbar } from "nextra-theme-docs";
import Link from "next/link";
import NavbarLinks from "./navbar-links";

const Logo = (
  <div className="flex items-center gap-2 font-bold leading-tight">
    <img
      src="https://assets.reviewsonmetaobjects.com/logo-300.jpg"
      alt={process.env.NEXT_PUBLIC_APP_NAME}
      className="h-10 w-10 rounded-md"
      width={40}
      height={40}
    />
    <div>FiveOh Reviews<br />on Metaobjects</div>
  </div>
);

const Footer = function() {
  const linkClasses = "text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors";
  return (
    <NextraFooter>
      <div className="w-full flex flex-wrap justify-between items-center gap-x-4 gap-y-2">
        <div className="text-sm text-gray-600 dark:text-gray-400">{process.env.NEXT_PUBLIC_APP_NAME} {new Date().getFullYear()} © All rights reserved.</div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link href="/" className={linkClasses}>Home</Link>
          <Link href="/docs" className={linkClasses}>Docs</Link>
          <Link href="/privacy-policy" className={linkClasses}>Privacy policy</Link>
          <Link href="/legal-information" className={linkClasses}>Legal information</Link>
        </div>
      </div>
    </NextraFooter>
  );
};

const Navbar = (
  <NextraNavbar logo={Logo} logoLink="/" align="right">
    <NavbarLinks />
  </NextraNavbar>
);

export default function Layout({ children, pageMap, showHeader = true, showFooter = true }) {
  return (
    <NextraLayout
      navbar={showHeader ? Navbar : null}
      pageMap={pageMap}
      editLink={null}
      feedback={{ content: null }}
      footer={showFooter ? <Footer /> : null}
    >
      <div id="main-content" tabIndex={-1}>
        {children}
      </div>
    </NextraLayout>
  );
}
