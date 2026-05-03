"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLinks() {
  const pathname = usePathname();
  const linkClasses = 'text-sm whitespace-nowrap text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200 transition-colors';

  return (
    <div className="site-nav-items flex gap-4">
      <Link
        href="/for-shopify-agencies"
        className={`${linkClasses} ${pathname === "/for-shopify-agencies" ? "font-bold text-black! dark:text-white!" : ""}`}
      >For agencies</Link>
      <Link
        href="/blog"
        className={`${linkClasses} ${pathname.startsWith("/blog") ? "font-bold text-black! dark:text-white!" : ""}`}
      >Blog</Link>
      <Link
        href="/docs"
        className={`${linkClasses} ${/^\/docs(?:\/|$)/.test(pathname) ? "font-bold text-black! dark:text-white!" : ""}`}
      >Docs</Link>
    </div>
  );
}
