"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLinks() {
  const pathname = usePathname();
  const base = "text-sm whitespace-nowrap text-gray-600 hover:text-black dark:text-gray-500 dark:hover:text-gray-200 transition-colors";
  const active = "font-bold text-black! dark:text-white!";

  return (
    <div className="site-nav-items flex items-center gap-4 sm:gap-5">
      <Link
        href="/blog"
        className={`${base} ${pathname.startsWith("/blog") ? active : ""}`}
      >Blog</Link>
      <Link
        href="/about"
        className={`${base} hidden sm:block ${pathname === "/about" ? active : ""}`}
      >Story</Link>
      <Link
        href="/docs"
        className={`${base} ${/^\/docs(?:\/|$)/.test(pathname) ? active : ""}`}
      >Docs</Link>
    </div>
  );
}
