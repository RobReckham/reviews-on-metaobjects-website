import AnimatedBackground from "../../../components/animated-background"
import ListingCta from "../../../components/listing-cta"
import Pricing from "../../../components/pricing"
import FinalCta from "../../../components/final-cta"
import Faqs from "../../../components/faqs"

export const metadata = {
  title: "Judge.me Alternative: Shopify Reviews via Metaobjects, No JavaScript Widget",
  description: `Migrate from Judge.me to ${process.env.NEXT_PUBLIC_APP_NAME}. Keep all your reviews, eliminate the JavaScript widget, and store review data directly in Shopify Metaobjects - server-side rendering, better Lighthouse scores, star ratings in Google.`,
  alternates: {
    canonical: "/judge-me-alternative",
  },
}

const switchReasons = [
  {
    title: "Your reviews still load via JavaScript",
    description: "Judge.me displays reviews through a client-side widget that fetches content from their servers after the page loads. That adds network round-trips, causes layout shift, and hurts your Core Web Vitals. Our reviews render in Liquid - server-side, in your HTML from the first byte.",
  },
  {
    title: "Review data lives on their servers, not in Shopify",
    description: "Judge.me stores your review content on their infrastructure. Cancel your subscription and the widget stops working - your review data doesn't follow you. With us, every review lives in Shopify's standard metaobjects. They're yours permanently, even after uninstalling.",
  },
  {
    title: "Google can't index what loads via JavaScript",
    description: "Structured data in a JavaScript widget is unreliable for crawlers. Our reviews output JSON-LD and star ratings in your HTML from the first byte - the kind search engines use for rich snippets and product ratings directly in search results.",
  },
  {
    title: "Your reviews in Liquid, not a black-box widget",
    description: "Because your reviews are Shopify metaobjects, you can query and render them in any Liquid template - product pages, collection pages, homepage sections. No widget configuration, no external dependency, no black box. Just your data in your theme.",
  },
]

const migrationSteps = [
  {
    title: "Install the app and connect Judge.me",
    description: "Install from the Shopify App Store and connect your Judge.me account. Your existing reviews sync across automatically - no CSV exports, no manual uploads.",
  },
  {
    title: "Add the display blocks to your theme",
    description: "Drop our ready-made app blocks into your theme editor. No coding required for a standard setup.",
  },
  {
    title: "Cancel Judge.me whenever you're ready",
    description: "Once everything looks good, cancel Judge.me. Your reviews stay in your Shopify store permanently - they're not going anywhere.",
  },
]

const faqs = [
  {
    question: "Judge.me is free. Why would I pay for your app?",
    answer: "Judge.me is excellent value and a great choice for most stores. If price is your main concern, it's hard to beat. Our app is for merchants who specifically want their review data stored inside Shopify - not on an external server - so reviews render server-side in Liquid, survive an uninstall, and get indexed by Google from the first byte of the page. That architectural difference is what you're paying for.",
  },
  {
    question: "Will I lose my reviews when I switch from Judge.me?",
    answer: "No. Connect your Judge.me account and your existing reviews sync across automatically. All reviews, ratings, and media are preserved - no exports, no uploads.",
  },
  {
    question: "Why does it matter that reviews render server-side?",
    answer: "Client-side widgets fetch and render review content after the page loads. This delays your Largest Contentful Paint (LCP), causes layout shift, and prevents search engines from indexing your reviews at crawl time. Server-side rendering via Shopify Metaobjects means reviews are in your HTML from the first byte - faster for visitors, better for rankings.",
  },
  {
    question: "What happens to my reviews if I later cancel your app?",
    answer: "Nothing changes. Your reviews are stored in Shopify's standard product review metaobjects - a data type built into every Shopify store. They stay there after uninstalling our app. You can access them with any compatible tool or your own Liquid code.",
  },
  {
    question: "Is switching technical?",
    answer: "No. Connect Judge.me in the app, wait for the sync, add the display blocks in the theme editor. Our support team helps if you get stuck.",
  },
  {
    question: "Can I access my reviews in Liquid templates?",
    answer: "Yes - that's one of the core advantages. Because reviews are stored as Shopify metaobjects, you can render them anywhere in your theme using standard Liquid. Display review counts on collection pages, pull star ratings into your homepage, or build entirely custom review layouts - all without touching an external widget API.",
  },
]

export default function JudgeMeAlternativePage() {
  return <>
    <main className="bg-white min-h-screen text-gray-900">

      {/* Hero */}
      <section className="pt-24 pb-32 relative">
        <div className="absolute inset-4 rounded-4xl overflow-hidden">
          <AnimatedBackground />
        </div>
        <div className="px-8 py-4 text-center relative z-10">
          <p className="h4">The Judge.me alternative built on Shopify itself</p>
          <h1 className="h1 mt-4 mb-8 max-w-5xl mx-auto">Reviews that render in Liquid, live in your store, and last forever.</h1>
          <div className="max-w-2xl mx-auto">
            <p className="mb-8 text-lg">
              Judge.me is one of the best review apps available. But it still stores your reviews on their servers and loads them via JavaScript. If you want your review data to live inside Shopify - server-rendered, SEO-ready, permanent - there's a better fit.
            </p>
          </div>
          <div className="inline-flex justify-center items-center gap-4 relative">
            <ListingCta className="btn btn-primary">Switch from Judge.me today</ListingCta>
            <div className="text-right absolute -right-6 -top-2 z-10">
              <img src="/shopify_glyph.svg" alt="Shopify Logo" className="h-14" width="49" height="56" />
            </div>
          </div>
        </div>
      </section>

      {/* Why switch from Judge.me */}
      <section className="bg-white pt-16 sm:pt-32 px-4">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="h2 mb-4 text-gray-900 text-center">Why merchants switch from Judge.me</h2>
          <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Judge.me is a great app. These are the things it can't do - because of how it's built, not what it costs.</p>
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

      {/* Pricing */}
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="h2 mb-4">Transparent pricing. No surprises.</h2>
          <p className="text-gray-500 mb-12">Judge.me starts free - so do we, for your first 100 reviews. The difference isn't price. It's where your reviews live and how they render.</p>
          <Pricing />
          <div className="mt-12">
            <ListingCta className="btn btn-primary inline-flex">Sync your Judge.me reviews</ListingCta>
          </div>
        </div>
      </section>

      {/* Migration steps */}
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="relative max-w-2xl mx-auto">
          <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
            <AnimatedBackground baseColor="oklch(82.7% 0.119 306.383)" />
            <h2 className="h2 text-white text-shadow-sm relative z-10 mb-2 text-center">Switch from Judge.me in minutes</h2>
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

      <FinalCta title="Ready to move your reviews into Shopify?" subtitle="Connect Judge.me, sync your reviews, add the blocks. Done." ctaLabel="Move your reviews to Shopify" />

      {/* FAQ */}
      <section className="py-16 sm:py-32 relative">
        <AnimatedBackground baseColor="oklch(92.8% 0.006 264.531)" />
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <h2 className="h2 text-right">Switching from Judge.me - FAQ</h2>
          <Faqs faqs={faqs} pageUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/judge-me-alternative`} />
          <p className="text-right mt-8 text-sm text-gray-500">
            <a href="/" className="underline underline-offset-2 hover:text-gray-900 transition-colors">More information about {process.env.NEXT_PUBLIC_APP_NAME} →</a>
          </p>
        </div>
      </section>

    </main>
  </>
}
