import AnimatedBackground from "../../../components/animated-background"
import ListingCta from "../../../components/listing-cta"
import Pricing from "../../../components/pricing"
import PricingCalculator from "../../../components/pricing-calculator-reviews-io"
import FinalCta from "../../../components/final-cta"
import Faqs from "../../../components/faqs"

export const metadata = {
  title: "REVIEWS.io Alternative: Shopify Reviews via Metaobjects, No JavaScript Widget",
  description: `Migrate from REVIEWS.io to ${process.env.NEXT_PUBLIC_APP_NAME}. Reviews stored natively in Shopify Metaobjects and rendered server-side in Liquid - no external script, better Core Web Vitals, star ratings in Google search results.`,
  alternates: {
    canonical: "/reviews-io-alternative",
  },
}

const switchReasons = [
  {
    title: "Your reviews still load via JavaScript",
    description: "REVIEWS.io displays reviews through a client-side widget that fetches content from their servers after the page loads. That adds network round-trips, causes layout shift, and hurts your Core Web Vitals. Our reviews render in Liquid - server-side, in your HTML from the first byte.",
  },
  {
    title: "Review data lives on their servers, not in Shopify",
    description: "REVIEWS.io lets you export your data, which is good. But the data still lives on their infrastructure - not inside Shopify. That means it can't render server-side in Liquid, can't be queried natively in your theme, and depends on their uptime to show up on your store.",
  },
  {
    title: "Google can't index what loads via JavaScript",
    description: "Structured data injected by a JavaScript widget is unreliable for crawlers. Our reviews output JSON-LD and star ratings in your HTML from the first byte - the kind of markup search engines use for rich snippets and product ratings in results.",
  },
  {
    title: "Pricing jumps fast at every tier",
    description: "REVIEWS.io goes from $29/mo (300 invites) to $99/mo (1,500 invites) to $299/mo (5,000 invites) to $499/mo (10,000 invites). Features like auto-translate are locked behind the Plus plan at $499/mo. We stay flat from the start.",
  },
]

const comparisonRows = [
  { feature: "Reviews render server-side (no JS widget)", us: true, them: false },
  { feature: "Review data stored in your Shopify store", us: true, them: false },
  { feature: "Data survives app uninstall", us: true, them: false },
  { feature: "Auto-translate into store languages (all plans)", us: true, them: false, competitorNote: "Plus plan only ($499+/mo)" },
  { feature: "Photo & video reviews", us: true, them: true },
  { feature: "Post-purchase email review requests", us: true, them: true },
  { feature: "On-store review submission form", us: true, them: true },
  { feature: "Variant-specific reviews", us: true, them: false },
  { feature: "Continuous sync from REVIEWS.io", us: true, them: null },
  { feature: "Free plan included", us: true, them: true, competitorNote: "25 invites/mo only" },
  { feature: "Works with any OS 2.0 theme", us: true, them: true },
]

const migrationSteps = [
  {
    title: "Install the app and connect REVIEWS.io",
    description: "Install from the Shopify App Store and connect your REVIEWS.io account. Your existing reviews sync across automatically - no CSV exports, no manual uploads.",
  },
  {
    title: "Add the display blocks to your theme",
    description: "Drop our ready-made app blocks into your theme editor. No coding required for a standard setup.",
  },
  {
    title: "Cancel REVIEWS.io whenever you're ready",
    description: "Once everything looks good, cancel REVIEWS.io. Your reviews stay in your Shopify store permanently - they're not going anywhere.",
  },
]

const faqs = [
  {
    question: "Will I lose my reviews when I switch from REVIEWS.io?",
    answer: "No. Connect your REVIEWS.io account and your existing reviews sync across automatically. All reviews, ratings, and media are preserved - no exports, no uploads.",
  },
  {
    question: "REVIEWS.io says I own my data. Why should I switch?",
    answer: "Owning your data and having your data in Shopify are two different things. REVIEWS.io lets you export - that's good. But your reviews still live on their servers, which means they can't render server-side in Liquid, depend on their infrastructure to display, and don't benefit from Shopify's native structured data output. With us, your reviews are stored in Shopify's standard metaobjects - no external dependency, ever.",
  },
  {
    question: "Why does it matter that reviews render server-side?",
    answer: "Client-side widgets fetch and render review content after the page loads. This delays your Largest Contentful Paint (LCP), causes layout shift, and prevents search engines from indexing your reviews at crawl time. Server-side rendering via Shopify Metaobjects means reviews are in your HTML from the first byte - faster for visitors, better for rankings.",
  },
  {
    question: "Do I need to pay for both apps during the switch?",
    answer: "Only briefly. Connect REVIEWS.io, let the sync run, add the display blocks - then cancel REVIEWS.io. The whole process takes under an hour.",
  },
  {
    question: "What happens to my reviews if I later cancel your app?",
    answer: "Nothing changes. Your reviews are stored in Shopify's standard product review metaobjects - a data type built into every Shopify store. They stay there after uninstalling our app. You can access them with any compatible tool or your own Liquid code.",
  },
  {
    question: "Is switching technical?",
    answer: "No. Connect REVIEWS.io in the app, wait for the sync, add the display blocks in the theme editor. Our support team helps if you get stuck.",
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
    <span className="text-gray-500 text-sm">-</span>
  )
}

export default function ReviewsIoAlternativePage() {
  return <>
    <main className="bg-white min-h-screen text-gray-900">

      {/* Hero */}
      <section className="pt-24 pb-32 relative">
        <div className="absolute inset-4 rounded-4xl overflow-hidden">
          <AnimatedBackground />
        </div>
        <div className="px-8 py-4 text-center relative z-10">
          <p className="h4">The REVIEWS.io alternative built on Shopify itself</p>
          <h1 className="h1 mt-4 mb-8 max-w-5xl mx-auto">Faster reviews. Better SEO. Your data lives in your store.</h1>
          <div className="max-w-2xl mx-auto">
            <p className="mb-8 text-lg">
              REVIEWS.io is a capable platform. But it stores your reviews on their servers and loads them via JavaScript - hurting page speed, weakening SEO, and making you dependent on their uptime. There's a better way.
            </p>
          </div>
          <div className="inline-flex justify-center items-center gap-4 relative">
            <ListingCta className="btn btn-primary">Switch from REVIEWS.io today</ListingCta>
            <div className="text-right absolute -right-6 -top-2 z-10">
              <img src="/shopify_glyph.svg" alt="Shopify Logo" className="h-14" width="49" height="56" />
            </div>
          </div>
        </div>
      </section>

      {/* Why switch from REVIEWS.io */}
      <section className="bg-white pt-16 sm:pt-32 px-4">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="h2 mb-4 text-gray-900 text-center">Why merchants switch from REVIEWS.io</h2>
          <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">REVIEWS.io works well for many stores. But there are reasons Shopify merchants outgrow it.</p>
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
                  <th className="p-4 font-semibold text-gray-500 text-center whitespace-nowrap">REVIEWS.io</th>
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
                      {row.them === true && <CheckIcon />}
                      {row.them === false && <CrossIcon />}
                      {row.them === null && <NaIcon />}
                      {row.competitorNote && <span className="text-xs text-gray-500 leading-tight">{row.competitorNote}</span>}
                    </div>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="h2 mb-4">Transparent pricing. No invite caps.</h2>
          <p className="text-gray-500 mb-12">REVIEWS.io goes from $29/mo to $99/mo to $299/mo as your order volume grows. Auto-translate is locked behind their $499/mo Plus plan. We charge per total reviews stored - one flat rate, no surprises.</p>
          <Pricing />
          <PricingCalculator />
          <div className="mt-12">
            <ListingCta className="btn btn-primary inline-flex">Sync your REVIEWS.io reviews</ListingCta>
          </div>
        </div>
      </section>

      {/* Migration steps */}
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="relative max-w-2xl mx-auto">
          <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
            <AnimatedBackground baseColor="oklch(82.7% 0.119 306.383)" />
            <h2 className="h2 text-white text-shadow-sm relative z-10 mb-2 text-center">Switch from REVIEWS.io in minutes</h2>
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

      <FinalCta title="Ready to move your reviews into Shopify?" subtitle="Connect REVIEWS.io, sync your reviews, add the blocks. Done." ctaLabel="Move your reviews to Shopify" />

      {/* FAQ */}
      <section className="py-16 sm:py-32 relative">
        <AnimatedBackground baseColor="oklch(92.8% 0.006 264.531)" />
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <h2 className="h2 text-right">Switching from REVIEWS.io - FAQ</h2>
          <Faqs faqs={faqs} pageUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/reviews-io-alternative`} />
          <p className="text-right mt-8 text-sm text-gray-500">
            <a href="/" className="underline underline-offset-2 hover:text-gray-900 transition-colors">More information about {process.env.NEXT_PUBLIC_APP_NAME} →</a>
          </p>
        </div>
      </section>

    </main>
  </>
}
