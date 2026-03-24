import Faqs from "../components/faqs"
import ListingCta from "../components/listing-cta"
import plans from "../utils/plans"

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

const benefits = [
  {
    title: "Lightning-fast pages",
    description: "No external scripts or iframes. Better Core Web Vitals, lower bounce rate.",
    backgroundColor: "bg-[#FFD8AA]",
  },
  {
    title: "True on-page SEO",
    description: "Native structured data = rich snippets, higher click-through in Google.",
    backgroundColor: "bg-[#BFF9EA]",
  },
  {
    title: "No vendor lock-in",
    description: "Works with your existing review provider (import from Reviews.io, Judge.me, Loox & more).",
    backgroundColor: "bg-[#C7D0FF]",
  },
  {
    title: "Multilingual ready",
    description: "Automatic translation of review content for global stores.",
    backgroundColor: "bg-[#FFD5D5]",
  },
]

export default function HomePage() {
  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: process.env.NEXT_PUBLIC_APP_NAME,
        description: "The Shopify app that provides all tools to manage Shopify's standard product review Metaobjects.",
        image: "https://assets.reviews-on-metaobjects.coders.fail/logo-300.jpg",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: plans.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          price: plan.price,
          priceCurrency: plan.priceCurrency,
          description: plan.description,
          availability: "https://schema.org/InStock",
          url: process.env.NEXT_PUBLIC_LISTING_URL || undefined,
        })),
      }) }}
    />
    <main className="bg-white min-h-screen text-gray-900">
      <section className="bg-[#FFFD63] pt-24 pb-48">
        <div className="px-4 sm:px-8 py-4 text-center">
          <h1 className="h4">The only app you need to manage Shopify's standard review Metaobjects</h1>
          <h2 className="h1 mt-4 mb-8 max-w-6xl mx-auto">Reviews built on<br />Shopify Metaobjects</h2>
          <div className="max-w-3xl mx-auto p">
            <p className="mb-4 leading-relaxed">
              <span className="bg-[#C7D0FF] px-3 rounded py-1">Renders Server Side Right In Liquid</span>
              <span className="bg-[#FFD5D5] px-3 rounded py-1">Data Saved In Shopify</span>
              <span className="bg-[#BFF9EA] px-3 rounded py-1">Ready-Made Fully-Customisable App Blocks</span>
              <span className="bg-[#FFD8AA] px-3 rounded py-1">Easy Import From Many Other Services Or Manually</span>
            </p>
            <p className="mb-4">Stop slowing down your store with heavy review widgets. Use Shopify’s standard product review Metaobjects instead. Import existing reviews from any provider and collect new ones through post-purchase emails and on-store forms. All reviews are stored in Metaobjects for server-side display — delivering faster page loads, improved Core Web Vitals, and strong on-page SEO through native structured data. Plus, you will own your data. No lock-in with a specific app.</p>
          </div>
          <div className="inline-flex justify-center items-center gap-4 relative">
            <ListingCta href={process.env.NEXT_PUBLIC_LISTING_URL} className="btn btn-primary">Visit Shopify App Store</ListingCta>
            <div className="text-right absolute -right-6 -top-2 z-10">
              <img src="/shopify_glyph.svg" alt="Shopify" className="h-14" width="49" height="56" />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 -mt-32">
        <div className="bg-white rounded-xl overflow-hidden text-white mx-auto max-w-5xl">
          <picture>
            <source type="image/webp" srcSet="https://assets.reviews-on-metaobjects.coders.fail/landing-01.webp" />
            <img
              src="https://assets.reviews-on-metaobjects.coders.fail/landing-01.jpg"
              alt="Reviews built on Shopify Metaobjects"
              className="h-auto w-full"
              fetchPriority="high"
              width="1600"
              height="700"
            />
          </picture>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-32">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="h2">First 100 reviews are free. <ListingCta href={process.env.NEXT_PUBLIC_LISTING_URL} className="underline">Just try it out</ListingCta>.</h2>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="relative container max-w-6xl mx-auto sm:gap-64">
          <div className={`bg-[#FFD5D5] rounded-[3rem] sm:rounded-[5rem] p-8 sm:p-24 text-gray-800 text-xl`}>
            <h2 className={`h2 mb-4 text-gray-900 opacity-100`}>JavaScript-heavy review widgets are silently killing your conversions</h2>
            <p className="mt-4">Most review apps load reviews with slow JavaScript widgets and external requests. That adds 300–800 ms to page load time, hurts Core Web Vitals, increases bounce rate and directly reduces sales.</p>
            <p className="mt-4">We don't: All reviews are stored in Shopify's standard product review metaobjects and rendered natively with Liquid — server-side, zero JavaScript, maximum speed and full SEO power.</p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-32">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="h2">Your reviews, your shop, your data. You are not locked in with us. Use a different service for the same data at any time.</h2>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="relative">
          <h2 className={`h2 mb-4 text-gray-900 opacity-100`}>Why metaobjects are the best choice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => <div key={index} className={`${benefit.backgroundColor} rounded-[2rem] p-8 text-gray-800 text-xl`}>
              <h3 className="h3 mb-4">{benefit.title}</h3>
              <p className="mt-4">{benefit.description}</p>
            </div>)}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-32">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="h2">Transparent and fair pricing. No hidden fees. Features are mostly the same, mainly the max number of reviews is different. {process.env.NEXT_PUBLIC_LISTING_URL && <a href={process.env.NEXT_PUBLIC_LISTING_URL} target="_blank" rel="noopener noreferrer" className="underline">See plans</a>}</h2>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="relative container max-w-6xl mx-auto sm:gap-64">
          <div className={`bg-[#BFF9EA] rounded-[3rem] sm:rounded-[5rem] p-8 sm:p-24 text-gray-800 text-xl`}>
            <h2 className={`h2 mb-4 text-gray-900 opacity-100`}>All you need to collect, manage & display reviews natively</h2>
            <ul className="flex flex-col gap-4">
              <li><strong>Post-purchase emails & forms</strong><br className="sm:hidden" /> Automated emails after fulfillment + beautiful on-store submission forms</li>
              <li><strong>Import from anywhere</strong><br className="sm:hidden" /> Bring existing reviews from Reviews.io, Judge.me, Trusted Shops, CSV & more</li>
              <li><strong>Native Liquid display</strong><br className="sm:hidden" /> Server-side rendering in your theme — no slow widgets, no performance hit</li>
              <li><strong>Variant-specific reviews</strong><br className="sm:hidden" /> Show relevant reviews for the selected size, color or option</li>
              <li><strong>Automatic translation</strong><br className="sm:hidden" /> Reviews translated on-the-fly for every language your store supports</li>
              <li><strong>SEO & aggregates</strong><br className="sm:hidden" /> Automatic product rating metafields for collection pages & search results</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16 sm:py-32">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8">
          <h2 className="h1 text-right">What. The. FAQ?</h2>
          <Faqs />
        </div>
      </section>
    </main>
    <footer className="bg-gray-900 py-16 sm:py-32 relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-8 flex flex-col text-left sm:text-center">
        <h2 className="h1 text-gray-200 mb-8">Ready for faster, native reviews?</h2>
        <ul className="mb-8 flex flex-col sm:flex-row sm:items-center justify-center gap-4 text-gray-300 list-none text-lg whitespace-nowrap flex-wrap">
          <li>Free for up to 100 reviews</li>
          <li className="hidden sm:block">|</li>
          <li>No hidden fees</li>
          <li className="hidden sm:block">|</li>
          <li>Cancel anytime</li>
          <li className="hidden sm:block">|</li>
          <li>Uninstall anytime without losing your reviews</li>
        </ul>
        <ListingCta
          href={process.env.NEXT_PUBLIC_LISTING_URL}
          className="btn btn-primary btn-inverted w-full sm:w-auto"
        >Visit the Shopify App Store now</ListingCta>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-32 sm:-mb-16 w-full text-sm">
          <p className="text-gray-400">{process.env.NEXT_PUBLIC_APP_NAME} {new Date().getFullYear()} © All rights reserved.</p>
          <ul className="flex items-center gap-4 text-gray-300 list-none">
            <li><a href="/" className="text-gray-400 hover:text-gray-300">Home</a></li>
            <li><a href="/docs" className="text-gray-400 hover:text-gray-300">Docs</a></li>
            <li><a href="/privacy-policy" className="text-gray-400 hover:text-gray-300">Privacy policy</a></li>
            <li><a href="/legal-information" className="text-gray-400 hover:text-gray-300">Legal information</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </>
}
