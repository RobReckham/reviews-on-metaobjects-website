import { Footer as NextraFooter, Layout as NextraLayout, Navbar as NextraNavbar } from "nextra-theme-docs";
import Link from "next/link";
import NavbarLinks from "./navbar-links";
import { metadata as post1 } from "../app/(content)/blog/shopify-native-product-reviews/page"
import { metadata as post2 } from "../app/(content)/blog/real-cost-shopify-review-apps/page"
import { metadata as post3 } from "../app/(content)/blog/shopify-review-stars-not-showing-google/page"
import { metadata as post4 } from "../app/(content)/blog/review-app-slowing-shopify-store/page"
import { metadata as post5 } from "../app/(content)/blog/how-shopify-product-reviews-work/page"

const Logo = (
  <div className="flex items-center gap-2 font-bold leading-tight">
    <img
      src="https://assets.reviewsonmetaobjects.com/logo-300.jpg"
      alt={process.env.NEXT_PUBLIC_APP_NAME}
      className="h-10 w-10 rounded-md"
      width={40}
      height={40}
    />
    <div className="whitespace-nowrap text-sm sm:text-base">FiveOh Reviews<br />on Metaobjects</div>
  </div>
);


const footerLinks = [
  {
    label: "Product",
    items: [
      {
        label: "For merchants",
        href: "/",
      },
      {
        label: "For agencies",
        href: "/for-shopify-agencies",
      },
      {
        label: "Compare to Judge.me",
        href: "/judge-me-alternative",
      },
      {
        label: "Compare to Loox",
        href: "/loox-alternative",
      },
      {
        label: "Compare to Reviews.io",
        href: "/reviews-io-alternative",
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    items: [
      {
        label: post1.shortTitle,
        href: `/blog/${post1.slug}`,
      },
      {
        label: post2.shortTitle,
        href: `/blog/${post2.slug}`,
      },
      {
        label: post3.shortTitle,
        href: `/blog/${post3.slug}`,
      },
      {
        label: post4.shortTitle,
        href: `/blog/${post4.slug}`,
      },
      {
        label: post5.shortTitle,
        href: `/blog/${post5.slug}`,
      },
    ],
  },
  {
    label: "Docs",
    href: "/docs",
    items: [
      {
        label: "Getting started",
        href: "/docs",
      },
      {
        label: "Collecting reviews",
        href: "/docs/collecting-reviews",
      },
      {
        label: "App blocks",
        href: "/docs/app-blocks",
      },
      {
        label: "Troubleshooting",
        href: "/docs/troubleshooting",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        label: "Story",
        href: "/about",
      },
      {
        label: "Privacy policy",
        href: "/privacy-policy",
      },
      {
        label: "Legal information",
        href: "/legal-information",
      },
    ],
  },
]

const Footer = function() {
  const linkClasses = "text-sm hover:underline text-gray-600 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors";
  return (
    <NextraFooter>
      <div className="w-full flex flex-col gap-4 sm:gap-16">
        <div className="w-full flex flex-wrap flex-col md:flex-row justify-between gap-x-4 gap-y-8">
          {footerLinks.map((link) => (
            <div key={link.label} className="">
              <h3 className="text-sm font-bold text-gray-600 dark:text-gray-500">
                {link.href && <Link href={link.href} className={linkClasses}>{link.label}</Link>}
                {!link.href && link.label}
              </h3>
              <ul className="list-none p-0 m-0">
                {link.items.map((item) => <li key={item.label}>
                  <Link href={item.href} className={linkClasses}>{item.label}</Link>
                </li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full text-left">
          <div className="text-sm text-gray-600 dark:text-gray-500">{process.env.NEXT_PUBLIC_APP_NAME} {new Date().getFullYear()} © All rights reserved.</div>
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
