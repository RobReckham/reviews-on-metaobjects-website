import fs from "node:fs"
import path from "node:path"

const PAGE_FILES = new Set(["page.jsx", "page.tsx", "page.mdx"])

/**
 * @param {string} dir
 * @param {string} appRoot
 * @returns {string[]}
 */
function collectRoutes(dir, appRoot) {
  /** @type {string[]} */
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
      routes.push(pathname)
    }
  }
  return routes
}

/** @returns {import("next").MetadataRoute.Sitemap} */
export default function sitemap() {
  const appRoot = path.join(process.cwd(), "app")
  const paths = [...new Set(collectRoutes(appRoot, appRoot))].sort((a, b) =>
    a.localeCompare(b, "en"),
  )
  return paths.map((pathname) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`,
    lastModified: new Date(),
    changeFrequency: pathname === "/" ? "weekly" : "monthly",
    priority: pathname === "/" ? 1 : 0.7,
  }))
}
