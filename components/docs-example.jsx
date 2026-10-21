import { Children } from "react"
import { Tabs } from "nextra/components"
import "./fo-base.css"

// A docs example: the first child is the preview (the example's HTML with sample data), then a ```liquid and an
// optional ```css block. The preview is styled with that same CSS, so it looks exactly like the copied code.
export default function Example({ children }) {
  const [preview, ...blocks] = Children.toArray(children)
  const css = blocks.find((block) => block.props?.["data-language"] === "css")
  const code = blocks.filter((block) => block !== css)
  return <div className="mt-6">
    <div className="rounded-t-xl border border-b-0 border-gray-200 bg-white p-6 text-sm text-gray-900 dark:border-neutral-800">
      {css && <style>{textOf(css)}</style>}
      {preview}
    </div>
    <div className="[&_pre]:!mt-0 [&>div]:!mt-0 [&_pre]:!rounded-t-none">
      {css ? <Tabs items={["Liquid", "CSS"]}><Tabs.Tab>{code}</Tabs.Tab><Tabs.Tab>{css}</Tabs.Tab></Tabs> : code}
    </div>
    <p className="mt-2 text-xs text-gray-500">
      The texts are in English to keep the code short. <a href="/docs/developers/languages" className="underline">Other languages</a>
    </p>
  </div>
}

// The plain text of a highlighted code block.
function textOf(node) {
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(textOf).join("")
  return node?.props ? textOf(node.props.children) : ""
}
