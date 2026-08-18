import plans from "../utils/plans"
import Eyebrow from "./eyebrow"

const LISTING_URL = process.env.NEXT_PUBLIC_LISTING_URL || "https://apps.shopify.com/reviews-on-metaobjects";

export default function PricingSection() {
  return <section id="pricing" className="px-6 py-24">
    <div className="mx-auto max-w-7xl text-center">
      <Eyebrow>Pricing</Eyebrow>
      <h2 className="h2 mt-5">Flat pricing that doesn&rsquo;t punish growth.</h2>
      <p className="copy mx-auto mt-4 max-w-2xl">
        Priced by reviews stored &mdash; never by orders or invites. Every paid plan gets every
        feature; you only pay for scale.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {plans.map((plan) => {
          const featured = plan.name === "Pro";
          return <div key={plan.name} className={`rounded-2xl border p-6 text-left ${featured ? "border-gray-900 shadow-xl" : "border-gray-200"}`}>
            <div className="flex items-center justify-between">
              <div className="font-bold tracking-tight">{plan.name}</div>
              {featured && <span className="rounded bg-[#fde047] px-2 py-0.5 text-[11px] font-bold uppercase text-gray-900">Popular</span>}
            </div>
            <div className="mt-3 text-3xl font-extrabold tracking-tight">
              {plan.price === 0 ? "Free" : `$${plan.price}`}
              {plan.price !== 0 && <span className="text-base font-medium text-gray-500"> /mo</span>}
            </div>
            <div className="mt-1 text-sm text-gray-500">{plan.description}</div>
            {plan.price !== 0 && <div className="mt-1 text-xs text-gray-400">or ${plan.yearlyPrice}/yr</div>}
          </div>
        })}
      </div>

      <p className="footnote mx-auto mt-8 max-w-2xl">
        Every plan includes auto-translate, continuous sync, white-labeling and full Liquid access.
        14-day free trial on paid plans.
      </p>

      <a href={LISTING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8 inline-block">
        Install on Shopify
      </a>
    </div>
  </section>
}
