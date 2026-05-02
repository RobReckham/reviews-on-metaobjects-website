import AnimatedBackground from "../../../components/animated-background"
import ListingCta from "../../../components/listing-cta"
import Pricing from "../../../components/pricing"
import PricingCalculator from "../../../components/pricing-calculator-loox"
import FinalCta from "../../../components/final-cta"
import Faqs from "../../../components/faqs"

export const metadata = {
  title: "Loox Alternative: Native Shopify Reviews without JavaScript Widgets",
  description: "Switch from Loox to a faster, SEO-friendly review app built on Shopify Metaobjects. Your existing Loox reviews sync automatically. Own your data forever, no lock-in.",
  alternates: {
    canonical: "/loox-alternative",
  },
}

const switchReasons = [
  {
    title: "Your reviews belong in your store",
    description: "Loox stores your review data on their own servers. If you cancel, your reviews are gone. With us, every review lives in Shopify's standard metaobjects - they're yours forever, even if you uninstall our app.",
  },
  {
    title: "A JavaScript widget is slowing you down",
    description: "Loox injects a client-side script that fetches and renders reviews after the page loads. That means extra round-trips, layout shift, and a hit to your Lighthouse score. Our reviews render in Liquid - server-side, zero external requests.",
  },
  {
    title: "Google can't index what loads via JavaScript",
    description: "Structured data in a JavaScript widget is unreliable for crawlers. Our reviews output JSON-LD and star ratings in your HTML from the first byte - the kind search engines love for rich snippets.",
  },
  {
    title: "Loox gets expensive fast",
    description: "Loox's Beginner plan costs $9.99/mo but caps you at 100 monthly orders. Scale starts at $39.99/mo and adds $40 for every 300 additional orders - a store doing 1,200 orders/mo pays $159.99. The pricing scales with your success, not theirs.",
  },
]

const comparisonRows = [
  { feature: "Reviews render server-side (no JS widget)", us: true, loox: false },
  { feature: "Review data stored in your Shopify store", us: true, loox: false },
  { feature: "Data survives app uninstall", us: true, loox: false },
  { feature: "Auto-translate into store languages (all plans)", us: true, loox: false, looxNote: "Convert plan only ($49.99+/mo)" },
  { feature: "Photo & video reviews", us: true, loox: true },
  { feature: "Post-purchase email review requests", us: true, loox: true },
  { feature: "On-store review submission form", us: true, loox: true },
  { feature: "Variant-specific reviews", us: true, loox: true },
  { feature: "Continuous sync from Loox", us: true, loox: null },
  { feature: "Free plan included", us: true, loox: false },
  { feature: "Works with any OS 2.0 theme", us: true, loox: true },
]

const migrationSteps = [
  {
    title: "Install the app and connect Loox",
    description: "Install from the Shopify App Store and connect your Loox account. Your existing reviews sync across automatically - no CSV exports, no manual uploads.",
  },
  {
    title: "Add the display blocks to your theme",
    description: "Drop our ready-made app blocks into your theme editor. No coding required for a standard setup.",
  },
  {
    title: "Cancel Loox whenever you're ready",
    description: "Once everything looks good, cancel Loox. Your reviews stay in your Shopify store permanently - they're not going anywhere.",
  },
]

const faqs = [
  {
    question: "Will I lose my reviews when I switch from Loox?",
    answer: "No. Connect your Loox account and your existing reviews sync across automatically. All reviews, ratings, and media are preserved - no exports, no uploads.",
  },
  {
    question: "Why does it matter that reviews render server-side?",
    answer: "Client-side widgets fetch and render review content after the page loads. This delays your Largest Contentful Paint (LCP), causes layout shift, and prevents search engines from indexing your reviews at crawl time. Server-side rendering via Shopify Metaobjects means reviews are in your HTML from the first byte - faster for visitors, better for rankings.",
  },
  {
    question: "Do I need to pay for both apps during the switch?",
    answer: "Only briefly. Connect Loox, let the sync run, add the display blocks - then cancel Loox. The whole process takes under an hour. Some merchants keep Loox on their cheapest tier for trust badges, but the review data lives in your store with us.",
  },
  {
    question: "What happens to my reviews if I later cancel your app?",
    answer: "Nothing changes. Your reviews are stored in Shopify's standard product review metaobjects - a data type built into every Shopify store. They stay there after uninstalling our app. You can access them with any compatible tool or your own Liquid code.",
  },
  {
    question: "Is switching technical?",
    answer: "No. Connect Loox in the app, wait for the sync, add the display blocks in the theme editor. Our support team helps if you get stuck.",
  },
  {
    question: "Do I need to change my theme?",
    answer: "No major changes. Just add our app block to your product page in the Shopify theme editor. It works out of the box with all Online Store 2.0 themes.",
  },
]

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-600 shrink-0">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-300 shrink-0">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  )
}

function NaIcon() {
  return (
    <span className="text-gray-400 text-sm">-</span>
  )
}

export default function LooxAlternativePage() {
  return <>
    <main className="bg-white min-h-screen text-gray-900">

      {/* Hero */}
      <section className="pt-24 pb-32 relative">
        <div className="absolute inset-4 rounded-4xl overflow-hidden">
          <AnimatedBackground />
        </div>
        <div className="px-8 py-4 text-center relative z-10">
          <p className="h4">The Loox alternative built on Shopify itself</p>
          <h1 className="h1 mt-4 mb-8 max-w-5xl mx-auto">Faster reviews. Better SEO. Your data stays in your store.</h1>
          <div className="max-w-2xl mx-auto">
            <p className="mb-8 text-lg">
              Loox is a good app. But it stores your reviews on their servers and loads them via JavaScript - which hurts your page speed, weakens your SEO, and means your data leaves the moment you cancel. There's a better way.
            </p>
          </div>
          <div className="inline-flex justify-center items-center gap-4 relative">
            <ListingCta href={process.env.NEXT_PUBLIC_LISTING_URL} className="btn btn-primary">Switch from Loox today</ListingCta>
            <div className="text-right absolute -right-6 -top-2 z-10">
              <img src="/shopify_glyph.svg" alt="Shopify Logo" className="h-14" width="49" height="56" />
            </div>
          </div>
        </div>
      </section>

      {/* Why switch from Loox */}
      <section className="bg-white pt-16 sm:pt-32 px-4">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="h2 mb-4 text-gray-900 text-center">Why merchants switch from Loox</h2>
          <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Loox works well for getting started. These are the reasons stores outgrow it.</p>
          <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
            <AnimatedBackground baseColor="oklch(88.2% 0.059 254.128)" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              {switchReasons.map((reason, index) => <div key={index} className="bg-white rounded-xl p-6 text-gray-800">
                <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                <p>{reason.description}</p>
              </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="h2 text-center mb-12">Feature by feature</h2>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left p-4 font-semibold text-gray-700 w-full">Feature</th>
                  <th className="p-4 font-semibold text-gray-900 text-center whitespace-nowrap">{process.env.NEXT_PUBLIC_APP_NAME}</th>
                  <th className="p-4 font-semibold text-gray-500 text-center whitespace-nowrap">Loox</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => <tr key={index} className={`border-b border-gray-100 last:border-0 ${index % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                  <td className="p-4 text-gray-700">{row.feature}</td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      {row.us ? <CheckIcon /> : <CrossIcon />}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center flex-col items-center gap-1">
                      {row.loox === true && <CheckIcon />}
                      {row.loox === false && <CrossIcon />}
                      {row.loox === null && <NaIcon />}
                      {row.looxNote && <span className="text-xs text-gray-400 leading-tight">{row.looxNote}</span>}
                    </div>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="h2 mb-4">Transparent pricing. No lock-in.</h2>
          <p className="text-gray-500 mb-12">Loox starts at $9.99/mo but caps you at 100 monthly orders. Scale costs $39.99/mo for 300 orders - then adds $40 for every 300 more. A store with 1,200 orders/mo pays $159.99. We start free and stay flat.</p>
          <Pricing />
          <PricingCalculator />
          <div className="mt-12">
            <ListingCta href={process.env.NEXT_PUBLIC_LISTING_URL} className="btn btn-primary inline-flex">Sync your Loox reviews</ListingCta>
          </div>
        </div>
      </section>

      {/* Migration steps */}
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="relative max-w-2xl mx-auto">
          <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
            <AnimatedBackground baseColor="oklch(82.7% 0.119 306.383)" />
            <h2 className="h2 text-white text-shadow-sm relative z-10 mb-2 text-center">Switch from Loox in minutes</h2>
            <p className="text-white/80 text-center relative z-10 mb-8">No downtime. No data loss. No developer needed.</p>
            <div className="grid grid-cols-1 gap-4 relative">
              {migrationSteps.map((migrationStep, index) => <div key={index} className="bg-black/10 text-white text-shadow-sm rounded-xl p-4 border border-white/40" style={{ boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.02)" }}>
                <h3 className="font-bold">{index + 1}. {migrationStep.title}</h3>
                <p className="mt-1">{migrationStep.description}</p>
              </div>)}
            </div>
          </div>
        </div>
      </section>

      <FinalCta title="Ready to move your reviews into Shopify?" subtitle="Connect Loox, sync your reviews, add the blocks. Done." ctaLabel="Move your reviews to Shopify" />

      {/* FAQ */}
      <section className="py-16 sm:py-32 relative">
        <AnimatedBackground baseColor="oklch(92.8% 0.006 264.531)" />
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <h2 className="h2 text-right">Switching from Loox - FAQ</h2>
          <Faqs faqs={faqs} pageUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/loox-alternative`} />
          <p className="text-right mt-8 text-sm text-gray-500">
            <a href="/" className="underline underline-offset-2 hover:text-gray-900 transition-colors">More information about {process.env.NEXT_PUBLIC_APP_NAME} →</a>
          </p>
        </div>
      </section>

    </main>
  </>
}
