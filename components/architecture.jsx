import Eyebrow from "./eyebrow"

const layers = [
  {
    label: "Collect",
    items: [
      { name: "FiveOh", highlight: true },
      { name: "Judge.me" },
      { name: "Loox" },
      { name: "Stamped" },
      { name: "REVIEWS.io" },
      { name: "Trustpilot" },
      { name: "Yotpo" },
      { name: "…" },
    ],
  },
  {
    label: "Sync",
    items: [
      { name: "metaobjects", highlight: true },
      { name: "metafields", highlight: true },
    ],
  },
  {
    label: "Display",
    items: [
      { name: "App blocks", highlight: true },
      { name: "Custom Liquid" },
    ],
  },
];

export default function Architecture() {

  return <section id="architecture" className="bg-slate-950 bg-linear-to-t to-slate-800 text-white">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
      <div>
        <Eyebrow>The architecture</Eyebrow>
        <h2 className="h2 mt-5">Three layers. You own all three.</h2>
        <p className="copy mt-4 text-gray-400">
          Collect anywhere. FiveOh syncs it into your Shopify store as native data. Display it any way
          you like &mdash; our blocks, or your own Liquid.
        </p>
      </div>

      <div className="flex flex-col gap-3 pt-6">
        {layers.map((layer, index) => <div key={layer.label} className="-mt-6">
          <div className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-gray-500">
            {layer.label}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-wrap justify-center gap-2.5">
              {layer.items.map((item) => <span key={item.name} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${item.highlight ? "border-[#fde047]/60 text-[#fde047]" : "border-white/10 bg-white/5 text-gray-200"}`}>
                {item.highlight && <img src="https://assets.reviewsonmetaobjects.com/logo-300.jpg" alt="" className="h-4 w-4 rounded" />}
                {item.name}
              </span>)}
            </div>
          </div>
          {index < layers.length - 1 && <div className="py-1 text-center text-lg text-gray-600">&darr;</div>}
        </div>)}
      </div>
    </div>
  </section>
}
