// Every docs page as plain Markdown, for AI tools: /docs/installation.md → this route (rewrite in next.config.mjs).
// Built once at build time from the pages' MDX source.
import fs from "node:fs"
import path from "node:path"

export const dynamic = "force-static"

const DOCS_DIR = path.join(process.cwd(), "app/(content)/docs")
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://reviewsonmetaobjects.com"

export function generateStaticParams() {
  return fs.readdirSync(DOCS_DIR, { recursive: true })
    .filter((file) => file.endsWith("page.mdx"))
    .map((file) => ({ slug: path.dirname(file) === "." ? [] : path.dirname(file).split(path.sep) }))
}

export async function GET(_request, { params }) {
  const { slug = [] } = await params
  const file = path.join(DOCS_DIR, ...slug, "page.mdx")
  if (!fs.existsSync(file)) return new Response("Not found", { status: 404 })
  return new Response(toMarkdown(fs.readFileSync(file, "utf8")), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}

// MDX → Markdown: frontmatter description as intro, links absolute, JSX links and escapes resolved.
function toMarkdown(mdx) {
  const description = mdx.match(/^---\n[\s\S]*?^description: (.+)$/m)?.[1]
  return mdx
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .replace(/\{\/\*[\s\S]*?\*\/\}\n?/g, "")
    .replace(/<Example>\n[\s\S]*?\n\n/g, "")
    .replace(/<\/Example>\n?/g, "")
    .replace(/^(# .+)$/m, description ? `$1\n\n> ${description}` : "$1")
    .replace(/<a href=\{`\$\{process\.env\.(\w+)\}([^`]*)`\}[^>]*>([^<]*)<\/a>/g, (_, env, rest, text) => `[${text}](${(process.env[env] || "") + rest})`)
    .replace(/<a href="([^"]+)"[^>]*>([^<]*)<\/a>/g, "[$2]($1)")
    .replace(/\]\(\/docs([^)#]*)(#[^)]*)?\)/g, (_, route, hash = "") => `](${SITE_URL}/docs${route}.md${hash})`)
    .replace(/\\([{}])/g, "$1")
    .replace(/&lt;/g, "<")
    .trim() + "\n"
}
