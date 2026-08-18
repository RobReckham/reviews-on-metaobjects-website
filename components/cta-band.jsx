import ListingCta from "./listing-cta"

const LISTING_URL = process.env.NEXT_PUBLIC_LISTING_URL || "https://apps.shopify.com/reviews-on-metaobjects";
const DEMO_URL = "https://reviewsonmetaobjects.myshopify.com/products/the-collection-snowboard-oxygen";

export default function CtaBand() {
  return <div id="cta" className="sticky bottom-0 z-40 border-t border-white/10 bg-slate-900 py-4 text-white">
    <div className="mx-auto flex max-w-7xl px-6 flex-wrap justify-between gap-3">
      <div className="">
        <div className="font-bold tracking-tight">Ready when your store is.</div>
        <div className="text-sm text-gray-400">Free plan · 14-day trial · we set it up for you, free — limited spots.</div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:block text-sm font-semibold text-gray-300 hover:text-white">
          See the demo store &rarr;
        </a>
        <ListingCta className="btn btn-sm border-white/25 bg-transparent text-white hover:bg-white/10">Book a <span className="hidden sm:inline">setup </span>call</ListingCta>
        <a href={LISTING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-sm border-white bg-white text-gray-950 hover:bg-gray-100">
          Install on Shopify
        </a>
      </div>
    </div>
  </div>
}
