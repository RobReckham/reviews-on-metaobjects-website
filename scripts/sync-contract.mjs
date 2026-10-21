// Builds the docs pages that show the storefront contract from ../app/CONTRACT.md (the single source of truth).
// Each template in contract-pages/ is a normal MDX page; a line {/* contract: Section */} is replaced by that
// "## Section" of CONTRACT.md, {/* contract-body: Section */} by the same without its heading (when the page title
// already names it), {/* contract-body: Examples > Review list */} by one "### " part of a section without its heading.
// It also copies the app's fo-base.css for the docs previews. Run after the contract changed: pnpm docs:sync-contract
import fs from "node:fs"
import path from "node:path"

const root = path.resolve(import.meta.dirname, "..")
const contractPath = path.resolve(root, "../app/CONTRACT.md")
const templatesDir = path.join(root, "contract-pages")
const docsDir = path.join(root, "app/(content)/docs")
const ALIAS = "{%- assign fiveoh = product.metafields['app--324569563137'] -%}"

const contract = fs.readFileSync(contractPath, "utf8")

// "## Title" sections of the contract, each with its heading.
const sections = new Map()
for (const part of contract.split(/^(?=## )/m).slice(1)) {
  sections.set(part.match(/^## (.+)$/m)[1].trim(), part.trim())
}

const slug = (text) => text.toLowerCase().replace(/`/g, "").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-")

// Templates: contract-pages/reference/json-shapes.mdx → docs/reference/json-shapes/page.mdx
const templates = fs.readdirSync(templatesDir, { recursive: true })
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => ({ file, route: "/docs/" + file.replace(/\.mdx$/, "").replace(/\/index$/, "").replace(/^index$/, "") }))

// Anchors like (#json-shapes) point to the page that now holds that heading; a dropped heading is the page itself.
const anchorRoutes = new Map()

const pages = templates.map(({ file, route }) => {
  route = route.replace(/\/$/, "")
  const source = fs.readFileSync(path.join(templatesDir, file), "utf8")
  const body = source.replace(/^\{\/\* contract(-body)?: (.+?) \*\/\}$/gm, (_, bodyOnly, name) => {
    const [sectionName, partName] = name.split(" > ")
    if (!sections.has(sectionName)) throw new Error(`${file}: CONTRACT.md has no section "## ${sectionName}"`)
    if (partName) return escapeMdx(withAlias(part(sections.get(sectionName), partName, file)))
    if (!bodyOnly) return escapeMdx(sections.get(sectionName))
    anchorRoutes.set(slug(sectionName), route)
    return escapeMdx(sections.get(sectionName).replace(/^## .+\n+/, ""))
  })
  return { file, route, body }
})

for (const page of pages) {
  for (const [, heading] of page.body.matchAll(/^#{2,4} (.+)$/gm)) anchorRoutes.set(slug(heading), `${page.route}#${slug(heading)}`)
}
for (const page of pages) {
  const ownAnchors = new Set([...page.body.matchAll(/^#{2,4} (.+)$/gm)].map(([, heading]) => slug(heading)))
  page.body = page.body.replace(/\]\(#([\w-]+)\)/g, (match, anchor) => {
    const target = anchorRoutes.get(anchor)
    return target && !ownAnchors.has(anchor) && target !== page.route ? `](${target})` : match
  })
  const out = path.join(docsDir, page.route.replace(/^\/docs\/?/, ""), "page.mdx")
  fs.mkdirSync(path.dirname(out), { recursive: true })
  const notice = `{/* Generated from app/CONTRACT.md by pnpm docs:sync-contract. Edit contract-pages/${page.file} or the contract, not this file. */}\n`
  fs.writeFileSync(out, page.body.replace(/^(---\n[\s\S]*?\n---\n)/, `$1\n${notice}`))
  console.log("wrote", path.relative(root, out))
}

fs.writeFileSync(
  path.join(root, "components/fo-base.css"),
  "/* Copied from app/extensions/theme-extension/assets/fo-base.css by pnpm docs:sync-contract, for the docs previews. */\n"
    + fs.readFileSync(path.resolve(root, "../app/extensions/theme-extension/assets/fo-base.css"), "utf8"),
)
console.log("wrote components/fo-base.css")

// "### Name" part of a section, without its heading.
function part(section, name, file) {
  const found = section.split(/^(?=### )/m).find((p) => p.startsWith(`### ${name}\n`))
  if (!found) throw new Error(`${file}: CONTRACT.md has no "### ${name}"`)
  return found.replace(/^### .+\n+/, "").trim()
}

// The contract's examples share one alias line; a copied example gets it back so it works on its own.
function withAlias(markdown) {
  return markdown.replace(/```liquid\n(?![\s\S]*?assign fiveoh =)([\s\S]*?\bfiveoh\.[\s\S]*?)```/, (_, code) => `\`\`\`liquid\n${ALIAS}\n${code}\`\`\``)
}

// Markdown → MDX: outside code, braces and "<" would be read as JSX.
function escapeMdx(markdown) {
  return markdown.split(/(```[\s\S]*?```)/).map((block, index) => index % 2
    ? block
    : block.split(/(`[^`\n]*`)/).map((part, i) => i % 2
      ? part
      : part.replace(/[{}]/g, (c) => `\\${c}`).replace(/<(?=[A-Za-z/!])/g, "&lt;")).join("")).join("")
}
