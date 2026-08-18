import Eyebrow from "./eyebrow"

const features = [
  ["Post-purchase requests", "auto-sent, customisable, translatable"],
  ["Verified-buyer forms", "everyone, logged-in, or verified buyers — your rule"],
  ["Photo & video reviews", "visual proof, straight from customers"],
  ["Auto-translate", "every review, into your store's languages"],
  ["Moderate & reply", "approve, feature, hide — and reply"],
  ["Discount rewards", "thank reviewers with a code"],
  ["Multi-criteria ratings", "sub-scores: fit, quality, value & more"],
  ["No cookie banner", "zero external scripts — GDPR-friendly"],
];

export default function Workflow() {
  return <section id="workflow" className="px-6 py-24">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <div>
        <Eyebrow>Everything else</Eyebrow>
        <h2 className="h2 mt-5">Everything else, handled.</h2>
        <p className="copy mt-4 max-w-xl">
          Everything a review app should do &mdash; collect, moderate, translate, reward &mdash; built on
          native Shopify data, not a widget.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {features.map(([title, description]) => <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            <h3 className="font-bold tracking-tight">{title}</h3>
          </div>
          <p className="mt-2 pl-4 text-sm text-gray-600">{description}</p>
        </div>)}
        <div className="text-right text-sm font-semibold uppercase tracking-widest text-gray-400 sm:col-span-2">
          … and much more
        </div>
      </div>
    </div>
  </section>
}
