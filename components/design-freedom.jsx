"use client"

import { useState } from "react"
import Eyebrow from "./eyebrow"
import CodeSnippet from "./code-snippet"

const agg = { rating: "4.9", ratingDecimal: "4.9", max: "5", count: "233" }
const single = { rating: "5", max: "5", body: "Arrived in two days, fits like the photos.", author: "Jonas R.", date: "2 days ago" }
const reviews = [
  { body: "Exactly the fit the size guide promised. Third order, won’t be the last.", author: "Mara K." },
  { body: "Arrived in two days, fits like the photos.", author: "Jonas R." },
]
const breakdown = [["5", 92], ["4", 5], ["3", 2], ["2", 1], ["1", 0]]

/* --- highlighter: app {tokens} + the merchant's own HTML, matching site snippet colors --- */

const COLOR = {
  yellow: "text-[#fde047]",
  blue: "text-[#7fb7ff]",
  green: "text-[#8fe3a9]",
  bracket: "text-gray-500",
}

function tokenizeHtml(text) {
  const out = []
  const re = /(<\/?)([a-zA-Z][\w-]*)|(\/?>)|("[^"]*")/g
  let last = 0, m
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push([text.slice(last, m.index), null])
    if (m[1] !== undefined) { out.push([m[1], "bracket"]); out.push([m[2], "blue"]) }
    else if (m[3] !== undefined) out.push([m[3], "bracket"])
    else if (m[4] !== undefined) out.push([m[4], "green"])
    last = m.index + m[0].length
  }
  if (last < text.length) out.push([text.slice(last), null])
  return out
}

function highlight(code) {
  const segs = []
  const re = /\{[a-z_]+\}/g // app structure tokens, e.g. {stars} {rating_decimal} {reviews}
  let last = 0, m
  while ((m = re.exec(code)) !== null) {
    if (m.index > last) segs.push(...tokenizeHtml(code.slice(last, m.index)))
    segs.push([m[0], "yellow"])
    last = m.index + m[0].length
  }
  if (last < code.length) segs.push(...tokenizeHtml(code.slice(last)))
  return segs.map(([t, c], i) => c
    ? <span key={i} className={COLOR[c]}>{t}</span>
    : <span key={i}>{t}</span>)
}

/* --- skins: pure visual tokens only, so every skin is safe on every block --- */

const skins = [
  { name: "Classic", accent: "#e7a427", radius: 16, shadow: "0 1px 2px rgba(0,0,0,.06)", border: "1px solid #e5e7eb", bg: "#ffffff", text: "#111827", muted: "#6b7280", font: "system-ui, sans-serif", pad: "1.25rem", weight: 700 },
  { name: "Indigo Bold", accent: "#4f46e5", radius: 10, shadow: "0 20px 40px -14px rgba(79,70,229,.35)", border: "none", bg: "#ffffff", text: "#0f172a", muted: "#64748b", font: "system-ui, sans-serif", pad: "1.5rem", weight: 800 },
  { name: "Minimal", accent: "#111827", radius: 2, shadow: "none", border: "1px solid #e5e7eb", bg: "#ffffff", text: "#111827", muted: "#9ca3af", font: "system-ui, sans-serif", pad: "1.25rem", weight: 600 },
  { name: "Pink Soft", accent: "#db2777", radius: 22, shadow: "0 12px 30px -12px rgba(219,39,119,.3)", border: "none", bg: "#fdf2f8", text: "#500724", muted: "#9d5b7f", font: "system-ui, sans-serif", pad: "1.5rem", weight: 700 },
  { name: "Midnight", accent: "#fde047", radius: 16, shadow: "0 12px 30px -12px rgba(0,0,0,.5)", border: "1px solid #1f2937", bg: "#0b0f19", text: "#e5e7eb", muted: "#94a3b8", font: "system-ui, sans-serif", pad: "1.35rem", weight: 700 },
  { name: "Editorial", accent: "#059669", radius: 4, shadow: "0 1px 2px rgba(0,0,0,.06)", border: "1px solid #e5e7eb", bg: "#ffffff", text: "#111827", muted: "#6b7280", font: "Georgia, 'Times New Roman', serif", pad: "1.5rem", weight: 700 },
]

const TRACK = "rgba(128,128,128,.2)"

function readableOn(hex) {
  const n = parseInt(hex.slice(1), 16)
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6 ? "#111827" : "#ffffff"
}

function Stars({ skin, size = 15, count = 5 }) {
  return <span aria-hidden="true" style={{ color: skin.accent, fontSize: size, letterSpacing: "-0.5px", lineHeight: 1 }}>{"★".repeat(count)}</span>
}

function Status({ skin }) {
  return <span style={{ color: skin.accent, fontWeight: 600, fontSize: 12 }}>&#10003; Verified</span>
}

function Button({ skin, children }) {
  return <span style={{ display: "inline-block", background: skin.accent, color: readableOn(skin.accent), fontWeight: 700, fontSize: 13, padding: "8px 14px", borderRadius: Math.min(skin.radius, 12) }}>{children}</span>
}

function Signal({ skin, children }) {
  return shell(skin, <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
    <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: 9999, background: skin.accent, flexShrink: 0 }} />
    <span style={{ fontSize: 15 }}>{children}</span>
  </div>)
}

function shell(skin, children) {
  return <div style={{
    borderRadius: skin.radius, boxShadow: skin.shadow, border: skin.border,
    background: skin.bg, color: skin.text, fontFamily: skin.font, padding: skin.pad,
    transition: "background .25s ease, border-radius .25s ease, box-shadow .25s ease, color .25s ease",
  }}>{children}</div>
}

/* --- blocks: real app blocks, each with its actual token Structure + a matching render --- */

const blocks = [
  {
    name: "Review List",
    file: "Review List · Structure",
    code: `<div class="fo-review-list__header">
  <div class="fo-product-rating">{rating_decimal} {stars}</div>
  <span>{count} {pluralised_reviews}</span>
  <a href="#write-review">Write a review</a>
</div>
{reviews}`,
    render: (skin) => shell(skin, <div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
        <span style={{ fontSize: 22, fontWeight: skin.weight }}>{agg.ratingDecimal}</span>
        <Stars skin={skin} size={16} />
        <span style={{ fontSize: 13, color: skin.muted }}>{agg.count} reviews</span>
        <span style={{ marginLeft: "auto" }}><Button skin={skin}>Write a review</Button></span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {reviews.map((r, i) => <div key={i} style={{ borderTop: `1px solid ${TRACK}`, paddingTop: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Stars skin={skin} size={13} />
            <span style={{ fontWeight: skin.weight, fontSize: 13 }}>{r.author}</span>
          </div>
          <p style={{ marginTop: 4, fontSize: 13 }}>&ldquo;{r.body}&rdquo;</p>
        </div>)}
      </div>
    </div>),
  },
  {
    name: "Review Item",
    file: "Review Item · Structure",
    code: `<div class="fo-review-item__header">
  <div class="fo-product-rating">{stars} {rating}/{max}</div>
  {status}
</div>
{body}
<div class="fo-review-item__meta">{author} · {date}</div>`,
    render: (skin) => shell(skin, <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Stars skin={skin} size={18} />
          <span style={{ fontWeight: skin.weight }}>{single.rating}/{single.max}</span>
        </div>
        <Status skin={skin} />
      </div>
      <p style={{ marginTop: 10 }}>&ldquo;{single.body}&rdquo;</p>
      <div style={{ marginTop: 10, fontSize: 13, color: skin.muted }}>{single.author} · {single.date}</div>
    </>),
  },
  {
    name: "Rating Bar",
    file: "Rating Bar · Structure",
    code: `<div class="fo-rating-bar__inner">
  <div class="fo-rating-bar__stars">{stars}</div>
  <div class="fo-rating-bar__text"><strong>{rating}</strong> based on <strong>{count}</strong> {pluralised_reviews}</div>
</div>`,
    render: (skin) => shell(skin, <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
      <Stars skin={skin} size={20} />
      <div style={{ fontSize: 15 }}>
        <strong style={{ fontWeight: skin.weight }}>{agg.rating}</strong> based on <strong style={{ fontWeight: skin.weight }}>{agg.count}</strong> reviews
      </div>
    </div>),
  },
  {
    name: "Floating Badge",
    file: "Floating Badge · Structure",
    code: `<div class="fo-floating-badge__body">
  <div class="fo-floating-badge__stars">{stars}</div>
  <div class="fo-floating-badge__rating"><strong>{rating_decimal}</strong> out of {max}</div>
  <div class="fo-floating-badge__count"><strong>{count}</strong> {pluralised_reviews}</div>
</div>`,
    render: (skin) => shell(skin, <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 4, textAlign: "center" }}>
      <Stars skin={skin} size={20} />
      <div style={{ fontSize: 15 }}><strong style={{ fontWeight: skin.weight }}>{agg.ratingDecimal}</strong> out of {agg.max}</div>
      <div style={{ fontSize: 13, color: skin.muted }}><strong style={{ fontWeight: skin.weight, color: skin.text }}>{agg.count}</strong> reviews</div>
    </div>),
  },
  {
    name: "Product Rating",
    file: "Product Rating · Structure",
    code: `<div class="fo-product-rating">
  <div>{stars}</div>
  <div>{rating}/{max} ({count} {pluralised_reviews})</div>
</div>`,
    render: (skin) => shell(skin, <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
      <Stars skin={skin} size={20} />
      <span style={{ fontWeight: skin.weight }}>{agg.rating}/{agg.max}</span>
      <span style={{ fontSize: 13, color: skin.muted }}>({agg.count} reviews)</span>
    </div>),
  },
  {
    name: "Product Card Ratings",
    file: "Product Card Ratings · Structure",
    code: `<div class="fo-product-rating">
  <div>{star}</div>
  <div>{rating}/{max} ({count})</div>
</div>`,
    render: (skin) => shell(skin, <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14 }}>
      <Stars skin={skin} size={16} count={1} />
      <span style={{ fontWeight: skin.weight }}>{agg.rating}/{agg.max}</span>
      <span style={{ color: skin.muted }}>({agg.count})</span>
    </div>),
  },
  {
    name: "Rating Summary",
    file: "Review List · Structure",
    code: `<div class="fo-review-list__header">
  <div class="fo-product-rating">{rating_decimal} {stars}</div>
  <span>{count} {pluralised_reviews}</span>
</div>
{distribution}`,
    render: (skin) => shell(skin, <div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <span style={{ fontSize: 22, fontWeight: skin.weight }}>{agg.ratingDecimal}</span>
        <Stars skin={skin} size={16} />
        <span style={{ fontSize: 13, color: skin.muted }}>{agg.count} reviews</span>
      </div>
      <div>
        {breakdown.map(([s, p]) => <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, marginBottom: 6 }}>
          <span style={{ width: 10, color: skin.muted }}>{s}</span>
          <span style={{ flex: 1, height: 8, borderRadius: 99, background: TRACK, overflow: "hidden" }}>
            <span style={{ display: "block", height: "100%", width: `${p}%`, background: skin.accent, borderRadius: 99 }} />
          </span>
          <span style={{ width: 32, textAlign: "right", color: skin.muted }}>{p}%</span>
        </div>)}
      </div>
    </div>),
  },
  {
    name: "Sold Count",
    file: "Sold Count · Text",
    code: `{sold_count}+ sold in the last 7 days`,
    render: (skin) => <Signal skin={skin}><strong style={{ fontWeight: skin.weight }}>1,204+</strong> sold in the last 7 days</Signal>,
  },
  {
    name: "Bestseller",
    file: "Bestseller · Text",
    code: `#{sold_rank} best-selling in the last 30 days`,
    render: (skin) => <Signal skin={skin}><strong style={{ fontWeight: skin.weight }}>#2</strong> best-selling in the last 30 days</Signal>,
  },
  {
    name: "Last Purchased",
    file: "Last Purchased · Text",
    code: `Last purchased {last_purchased_at_relative}`,
    render: (skin) => <Signal skin={skin}>Last purchased <strong style={{ fontWeight: skin.weight }}>6 hours ago</strong></Signal>,
  },
  {
    name: "Return Customers",
    file: "Return Customers · Text",
    code: `{return_rate}% are returning customers`,
    render: (skin) => <Signal skin={skin}><strong style={{ fontWeight: skin.weight }}>38%</strong> are returning customers</Signal>,
  },
]

export default function DesignFreedom() {
  const [{ b, k }, setCombo] = useState({ b: 0, k: 0 })

  function shuffle() {
    setCombo((prev) => {
      let nb, nk
      do {
        nb = Math.floor(Math.random() * blocks.length)
        nk = Math.floor(Math.random() * skins.length)
      } while (nb === prev.b && nk === prev.k)
      return { b: nb, k: nk }
    })
  }

  const block = blocks[b]
  const skin = skins[k]

  return <section id="design-freedom" className="">
    <div className="mx-auto max-w-7xl px-6 py-24 grid items-start gap-12 *:min-w-0 lg:grid-cols-2">
      <div>
        <Eyebrow>Design freedom</Eyebrow>
        <h2 className="h2 mt-5">If you can design it, we render it.</h2>
        <p className="copy mt-4 max-w-xl">
          Use our app blocks, or build your own. Every block &mdash; from a single review to the full
          list &mdash; lives in <b>your theme&rsquo;s Liquid</b>, yours to structure, class and style.
          Designers and developers both get exactly what they want.
        </p>

        <button
          type="button"
          onClick={shuffle}
          aria-label="Shuffle the block design"
          className="btn btn-primary btn-sm mt-6 active:scale-[.98]"
        >
          Shuffle design <span aria-hidden="true">&rarr;</span>
        </button>
      </div>

      <div>
        <CodeSnippet filename={block.file}>{highlight(block.code)}</CodeSnippet>

        <div className="my-4 text-center font-mono text-sm text-gray-400">&darr;&nbsp;&nbsp;renders to</div>

        <div className="flex items-center">
          <div className="w-full">{block.render(skin)}</div>
        </div>
      </div>
    </div>
  </section>
}
