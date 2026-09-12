import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

const PAGE_FILES = new Set(["page.jsx", "page.tsx", "page.mdx"])

/**
 * @param {string} dir
 * @param {string} appRoot
 * @returns {{ pathname: string, lastModified: Date }[]}
 */
function collectRoutes(dir, appRoot) {
  /** @type {{ pathname: string, lastModified: Date }[]} */
  const routes = []
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return routes
  }
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === "api" || e.name.startsWith("_")) continue
      routes.push(...collectRoutes(full, appRoot))
    } else if (PAGE_FILES.has(e.name)) {
      const rel = path.relative(appRoot, path.dirname(full))
      const segments = rel
        .split(path.sep)
        .filter(Boolean)
        .filter((seg) => !/^\([^)]+\)$/.test(seg))
        .filter((seg) => !seg.startsWith("["))
      const pathname = segments.length ? `/${segments.join("/")}` : "/"

      let lastModified = new Date()
      try {
        const out = execSync(`git log -1 --format="%aI" -- "${full}"`, {
          encoding: "utf8",
          stdio: ["ignore", "pipe", "ignore"],
        }).trim()
        if (out) lastModified = new Date(out)
      } catch {
        // git not available (unlikely); fall back to fs mtime
        try { lastModified = fs.statSync(full).mtime } catch {}
      }

      routes.push({ pathname, lastModified })
    }
  }
  return routes
}

/** @returns {import("next").MetadataRoute.Sitemap} */
export default function sitemap() {
  const appRoot = path.join(process.cwd(), "app")
  const seen = new Set()
  const routes = collectRoutes(appRoot, appRoot).filter(({ pathname }) => {
    if (seen.has(pathname)) return false
    seen.add(pathname)
    return true
  }).sort((a, b) => a.pathname.localeCompare(b.pathname, "en"))

  return routes.map(({ pathname, lastModified }) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`,
    lastModified,
    changeFrequency: pathname === "/" ? "weekly" : "monthly",
    priority: pathname === "/" ? 1 : 0.7,
  }))
}
