import Pricing from "./pricing"
import ListingCta from "./listing-cta"

export default function LegacyPricing() {
  return <section className="bg-white py-16 sm:py-32 px-4" id="pricing">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="h2 mb-4">Pricing that doesn't punish growth</h2>
      <p className="text-gray-500 mb-12">Start free with up to 100 reviews. Paid plans are flat with a hard cap - no per-order fees, no volume tiers, no surprise bills as your store scales. We can keep it this low because reviews live in Shopify's infrastructure, not ours. Switching from a usage-based competitor often saves you a few thousand dollars a year.</p>
      <Pricing />
      <div className="inline-flex justify-center items-center gap-8 relative mt-12">
        <div className="relative">
          <a href="https://demo.reviewsonmetaobjects.com/products/chambray-work-shirt" target="_blank" rel="noopener" className="btn btn-inverted">See demo store</a>
          <div className="text-right absolute -right-6 -top-2 z-10">
            <img src="/shopify_glyph.svg" alt="Shopify Logo" className="h-14" width="49" height="56" />
          </div>
          <p className="text-sm text-gray-600 mt-2">password: demo</p>
        </div>
        <div className="relative">
          <ListingCta className="btn btn-primary">Claim early access!</ListingCta>
          <p className="text-sm text-gray-600 mt-2">14-day free trial on all paid plans</p>
        </div>
      </div>
    </div>
  </section>
}
