import Eyebrow from "./eyebrow"
import StarRating from "./star-rating"

const breakdown = [["5", 92], ["4", 5], ["3", 2], ["2", 1], ["1", 0]];

const signals = [
  { label: "92% five-star", gold: true },
  { label: "Bought 22×", sub: "in the last 24 hours" },
  { label: "#2 best-selling", sub: "this month" },
  { label: "Last bought 6 hrs ago" },
  { label: "Product rating", sub: "★★★★★ 4.9 · 233" },
];

const pills = ["Card ratings", "Review sliders", "Review forms", "Rating bars", "…"];

export default function Blocks() {
  return <section id="blocks" className="bg-gray-50">
    <div className="mx-auto max-w-7xl  px-6 py-24">
      <Eyebrow>The block library</Eyebrow>
      <h2 className="h2 mt-5">Every section your app said no to.</h2>
      <p className="copy mt-4 max-w-2xl">
        The most capable review list on Shopify &mdash; plus live purchase signals from
        <b> real-time store data</b>. Every block your store needs, ready-made or built yourself in your theme&rsquo;s Liquid.
      </p>

      <div className="mt-10 grid items-start gap-6 lg:grid-cols-[3fr_2fr]">
        {/* Review list */}
        <div className="flex flex-col gap-3">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Product review list</div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold tracking-tight">4.9</span>
                  <StarRating className="text-lg" />
                </div>
                <div className="mt-1 text-sm text-gray-500">233 reviews</div>
              </div>
              <span className="rounded-lg bg-[#fde047] px-4 py-2 text-sm font-bold text-gray-900">Write a review</span>
            </div>

            <p className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
              Buyers love the true-to-size fit and soft merino &mdash; warm without bulk and great for
              layering. Most praise the color accuracy and how well it holds up after washing. A few note
              the sleeves run long.
              <span className="ml-2 inline-flex items-center gap-1 align-middle text-[11px] font-bold uppercase tracking-wide text-gray-400">
                <span className="text-[#e7a427]">&#10022;</span> AI summary
              </span>
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-wide text-gray-400">Rating breakdown</div>
                {breakdown.map(([stars, percent]) => <div key={stars} className="mb-2 flex items-center gap-2 text-xs font-semibold text-gray-600 last:mb-0">
                  <span className="w-3">{stars}</span>
                  <span className="h-2 flex-1 overflow-hidden rounded bg-gray-100">
                    <span className="block h-full rounded bg-[#e7a427]" style={{ width: `${percent}%` }} />
                  </span>
                  <span className="w-8 text-right tabular-nums">{percent}%</span>
                </div>)}
              </div>
              <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-wide text-gray-400">Rating over time</div>
                <svg viewBox="0 0 180 96" className="mt-auto w-full" aria-hidden="true">
                  <g fill="#e3e6eb">
                    <rect x="4" y="78" width="12" height="14" rx="2" />
                    <rect x="23" y="72" width="12" height="20" rx="2" />
                    <rect x="42" y="75" width="12" height="17" rx="2" />
                    <rect x="61" y="66" width="12" height="26" rx="2" />
                    <rect x="80" y="70" width="12" height="22" rx="2" />
                    <rect x="99" y="60" width="12" height="32" rx="2" />
                    <rect x="118" y="64" width="12" height="28" rx="2" />
                    <rect x="137" y="52" width="12" height="40" rx="2" />
                    <rect x="156" y="56" width="12" height="36" rx="2" />
                  </g>
                  <polyline points="10,52 29,48 48,50 67,42 86,44 105,34 124,36 143,26 162,20" fill="none" stroke="#e7a427" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400">Search reviews</div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-500">Sort</div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-500">Filter</div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <div className="rounded-xl border border-[#fde047] bg-[#fde047]/10 p-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <StarRating /> 5.0
                  <span className="ml-auto rounded bg-[#fde047] px-2 py-0.5 text-[11px] font-bold uppercase text-gray-900">Pinned</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">&ldquo;Exactly the fit the size guide promised. Third order, won&rsquo;t be the last.&rdquo;</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-3">
                <div className="flex items-center gap-2 text-sm font-semibold"><StarRating /> 5.0</div>
                <p className="mt-1 text-sm text-gray-600">&ldquo;Arrived in two days, fits like the photos.&rdquo;</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-sm font-semibold text-gray-500">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-gray-200">&lsaquo;</span>
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gray-900 text-white">1</span>
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-gray-200">2</span>
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-gray-200">3</span>
              <span className="px-1 text-gray-400">…</span>
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-gray-200">12</span>
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-gray-200">&rsaquo;</span>
            </div>
          </div>
        </div>

        {/* Signals + block list */}
        <div className="flex flex-col gap-3">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Endless possibilities</div>
          {signals.map((signal) => <div key={signal.label} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <span className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${signal.gold ? "bg-[#e7a427]" : "bg-emerald-500"}`} aria-hidden="true" />
            <div>
              <div className="font-bold tracking-tight">{signal.label}</div>
              {signal.sub && <div className="text-xs text-gray-500">{signal.sub}</div>}
            </div>
          </div>)}
          <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <span className="text-[#e7a427]">★</span>
            <span className="text-sm font-semibold text-gray-600">4.9/5 from 2,184 reviews</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {pills.map((pill) => <span key={pill} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600">{pill}</span>)}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        <p className="footnote">All parts can be switched on or off individually.</p>
      </div>
    </div>
  </section>
}
