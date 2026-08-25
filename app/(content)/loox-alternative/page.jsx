import CtaBand from "../../../components/cta-band"
import PricingSection from "../../../components/pricing-section"
import DemoStore from "../../../components/demo-store"
import Eyebrow from "../../../components/eyebrow"

const LISTING_URL = process.env.NEXT_PUBLIC_LISTING_URL || "https://apps.shopify.com/reviews-on-metaobjects"
const DEMO_URL = "https://demo.reviewsonmetaobjects.com/products/chambray-work-shirt"
const FIVEOH_LOGO = "https://assets.reviewsonmetaobjects.com/logo-300.jpg"

export const metadata = {
  title: "Loox Alternative for Shopify: Keep Loox, Own the Display",
  description: `You don't have to leave Loox. ${process.env.NEXT_PUBLIC_APP_NAME} syncs your Loox reviews - photos included - into Shopify's native metaobjects and renders them server-side in Liquid: pixel-perfect, faster pages, and readable by Google and AI. Keep collecting in Loox; own the display.`,
  alternates: {
    canonical: "/loox-alternative",
  },
}

const layers = [
  {
    label: "Collect",
    items: [
      { name: "Loox", highlight: true, logo: "/review-apps/logo-loox.svg" },
      { name: "…or FiveOh" },
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
      { name: "FiveOh app blocks", highlight: true, logo: FIVEOH_LOGO },
      { name: "Custom Liquid" },
    ],
  },
]

const additions = [
  {
    title: "Styled like the rest of your theme",
    description: "No iframe, no shadow DOM. Because reviews are metaobjects, you render galleries and star ratings with your own markup and classes — matched to your design, not patched around Loox's widget.",
  },
  {
    title: "Readable by Google and AI",
    description: "Google, ChatGPT and Perplexity read HTML, not widgets. With reviews server-rendered, your full review text and AggregateRating are in the page — indexed for rich snippets and citable by AI tools.",
  },
  {
    title: "Reviews render server-side",
    description: "Loox injects a client-side script that fetches and renders reviews after your page loads — adding round-trips and layout shift. FiveOh renders the same reviews in Liquid, in your HTML from the first byte. Faster pages, cleaner Core Web Vitals.",
  },
  {
    title: "Your photos, in your store",
    description: "Synced reviews — photo and video media included — are written to Shopify's standard product review metaobjects. Your data, on Shopify's CDN, queryable in Liquid and yours to keep for good.",
  },
]

const steps = [
  {
    title: "Keep collecting in Loox",
    description: "Nothing changes about how you gather reviews. Post-purchase emails, photo and video requests — Loox does exactly what it does today.",
  },
  {
    title: "FiveOh syncs them into Shopify",
    description: "Connect your Loox account and your reviews — media included — sync into Shopify's native metaobjects, continuously, with no CSV exports and no manual uploads.",
  },
  {
    title: "Display natively in your theme",
    description: "Drop in the ready-made app blocks, or build your own sections in Liquid. Reviews and photo galleries now render server-side, right in your HTML.",
  },
]

const faqs = [
  {
    question: "Do I have to leave Loox?",
    answer: "No — that's the whole point. Loox keeps collecting your reviews; FiveOh syncs them into Shopify and takes over the display. Keep Loox on the tier that suits you, or move collection to FiveOh later — your choice.",
  },
  {
    question: "Will my Loox photos and videos come across?",
    answer: "Yes. Connect your Loox account and your existing reviews — ratings, text, photos and videos — sync into Shopify automatically. Media is stored as Shopify file references and served from Shopify's CDN. No exports, no uploads.",
  },
  {
    question: "If I keep Loox, am I still paying its per-order fees?",
    answer: "If you keep Loox for collection, yes — its pricing scales with your order volume. Many stores keep Loox for its photo-request flow and simply fix the display with FiveOh; others move collection to FiveOh entirely to drop the per-order fees. Either way, the display is native and the data is in your store.",
  },
  {
    question: "Why render server-side instead of using Loox's widget?",
    answer: "A client-side widget fetches reviews after the page loads, delaying LCP, causing layout shift, and hiding the content from crawlers. Server-side rendering via Shopify metaobjects puts reviews in your HTML from the first byte — faster for shoppers, visible to Google and AI.",
  },
  {
    question: "Can I eventually collect with FiveOh too?",
    answer: "Yes. FiveOh collects reviews natively through post-purchase emails and on-store forms — with photo and video support — writing straight into your metaobjects. Keep Loox, run both, or move collection over entirely.",
  },
  {
    question: "Is it technical to set up?",
    answer: "No. Connect Loox, let the sync run, add the app blocks in the theme editor. During onboarding the founder sets it all up for you, free of charge.",
  },
]

export default function LooxAlternativePage() {
  return <main className="bg-white min-h-screen text-gray-900">

    {/* Hero */}
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <Eyebrow>Works with Loox</Eyebrow>
        </div>
        <h1 className="h1 mt-5 mb-6">
          Keep Loox. Render its reviews <span className="mark-hl">natively</span>.
        </h1>
        <p className="copy mx-auto max-w-2xl">
          Loox is loved for its photo and video reviews. But they load through a JavaScript widget, from Loox&rsquo;s
          servers &mdash; slowing your pages and hiding the content from Google. FiveOh keeps Loox collecting and takes
          over the display, syncing your reviews (photos included) into Shopify&rsquo;s native metaobjects so they
          render server-side, in your theme.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={LISTING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Install on Shopify</a>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-inverted">See demo store</a>
        </div>
        <p className="footnote mt-3">14-day free trial &middot; keep Loox for collection &middot; demo password: demo</p>
      </div>
    </section>

    {/* Companion model */}
    <section className="bg-slate-950 bg-linear-to-t to-slate-800 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <Eyebrow>The companion model</Eyebrow>
          <h2 className="h2 mt-5">Loox collects. FiveOh displays.</h2>
          <p className="copy mt-4 text-gray-400">
            You don&rsquo;t replace anything. Loox keeps collecting reviews exactly as it does today. FiveOh syncs
            them &mdash; photos and all &mdash; into your store as native Shopify data and renders them server-side:
            in your theme&rsquo;s Liquid, in your HTML, readable by Google and AI.
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
                  {item.logo && <img src={item.logo} alt="" className="h-4 w-4 rounded" />}
                  {item.name}
                </span>)}
              </div>
            </div>
            {index < layers.length - 1 && <div className="py-1 text-center text-lg text-gray-600">&darr;</div>}
          </div>)}
        </div>
      </div>
    </section>

    {/* What FiveOh adds */}
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>On top of Loox</Eyebrow>
        <h2 className="h2 mt-5">What FiveOh adds to your Loox reviews.</h2>
        <p className="copy mt-4 max-w-2xl">
          Loox stays your collection tool. FiveOh gives those reviews a native home &mdash; and everything that comes
          with it.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {additions.map((item) => <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>)}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="h2 mt-5">Add the display layer in minutes.</h2>
        <p className="copy mt-4">No migration. No downtime. No cancelling Loox.</p>
        <div className="mt-10 flex flex-col gap-4">
          {steps.map((step, index) => <div key={step.title} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#fde047] font-bold text-gray-900">{index + 1}</span>
            <div>
              <h3 className="font-bold tracking-tight">{step.title}</h3>
              <p className="mt-1 text-gray-600">{step.description}</p>
            </div>
          </div>)}
        </div>
      </div>
    </section>

    {/* Demo store */}
    <section className="px-4 py-24">
      <DemoStore />
    </section>

    {/* Pricing */}
    <PricingSection />

    {/* FAQ */}
    <section className="px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/loox-alternative`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }) }}
      />
      <div className="mx-auto max-w-3xl">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="h2 mt-5">Keeping Loox, answered.</h2>
        <div className="mt-10 border-t border-gray-200">
          {faqs.map((faq) => <details key={faq.question} className="group border-b border-gray-200 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span className="text-xl text-gray-400 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-gray-600">{faq.answer}</p>
          </details>)}
        </div>
      </div>
    </section>

    <CtaBand />

  </main>
}
