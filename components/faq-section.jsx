import Eyebrow from "./eyebrow"

const faqs = [
  {
    question: "Do I have to leave my current review app?",
    answer: "No — most of our stores don't. Judge.me, Loox or REVIEWS.io keep collecting; FiveOh syncs their reviews into your Shopify and takes over the display. Many keep their old app on its cheapest (or free) tier just for the trust badge. You can also collect with FiveOh directly.",
  },
  {
    question: "What is a metaobject — and Shopify's standard product review metaobject?",
    answer: "A metaobject is Shopify's native, structured way to store data, queryable in Liquid just like a product or a price. The standard product review metaobject is the official built-in type for reviews — it powers syndication to the Shop app, Google Shopping and Meta, and native server-side display in your theme.",
  },
  {
    question: "Why does it matter that reviews live in Shopify instead of a third-party database?",
    answer: "Third-party reviews are fetched by JavaScript after your page loads — delaying rendering, raising your LCP, and hiding the content from search and AI. Metaobjects are read server-side during Liquid rendering, so reviews are in your HTML from the first byte: no round-trip, no layout shift, no dependency on an outside service staying online.",
  },
  {
    question: "Who sets it up?",
    answer: "Install from the App Store, connect your source or import a CSV, and drop in the app blocks. No code needed for a basic setup. Want a developer to do import, configuration, sync and theme-matched styling? Book a call and we'll quote it.",
  },
  {
    question: "Does it use a JavaScript widget on my storefront?",
    answer: "No. Reviews render natively in Liquid, fully server-side — no widget, no external requests. That means faster pages, better Core Web Vitals, and native structured data for SEO, while still supporting photo and video reviews.",
  },
  {
    question: "Will my reviews show up in Google and AI?",
    answer: "Yes. Your full review text plus AggregateRating and Review structured data are in the HTML from the first byte — so Google indexes them (star ratings included) and tools like ChatGPT and Perplexity can read and cite them. Widget reviews, loaded after the crawl, are invisible to all of them.",
  },
  {
    question: "How does FiveOh collect new reviews?",
    answer: "Automatically, through post-purchase emails and customisable on-store forms. Everything collected is written straight into Shopify's standard review metaobjects.",
  },
  {
    question: "Can I import reviews from other providers?",
    answer: "Yes — from Judge.me, REVIEWS.io and more, or from any source via CSV. More sync providers are added regularly based on demand.",
  },
  {
    question: "How does auto-translation work?",
    answer: "Review titles and bodies are translated into your store's published languages, stored in the metaobjects, and shown based on the shopper's locale.",
  },
  {
    question: "Are variant-specific reviews supported?",
    answer: "Yes. When a review carries variant information, it's filtered to the selected variant on the product page.",
  },
  {
    question: "What happens to my product rating aggregates?",
    answer: "FiveOh keeps the average rating and review count in Shopify metafields, updated in real time — ready for collection pages, search, and structured data.",
  },
  {
    question: "What happens to my reviews if I uninstall?",
    answer: "They stay. Reviews live in your Shopify as native metaobjects — your data, not ours. Cancel anytime from your Shopify admin; the app removes its own blocks cleanly and the reviews remain, usable with any tool or your own Liquid.",
  },
  {
    question: "Do I need to change my theme?",
    answer: "No major changes. Add the ready-made blocks in the theme editor of any Online Store 2.0 theme, or build your own sections in Liquid.",
  },
  {
    question: "How many reviews can it handle?",
    answer: "Shopify supports up to 1,000,000 review metaobjects per store, and plans scale to unlimited reviews.",
  },
  {
    question: "Is there a free trial?",
    answer: "Every paid plan includes a 14-day free trial, and the free plan (up to 100 reviews) stays free for as long as you need.",
  },
  {
    question: "What support do you get?",
    answer: "Free plan: community support. Paid plans: email support, typically answered within 24 hours.",
  },
  {
    question: "Can I see it on a live store?",
    answer: "Yes — our demo store has every block installed. Open it (password: demo), run your own speed and SEO audits, or view source to see the reviews right in the HTML.",
  },
];

export default function FaqSection() {
  return <section id="faq" className="px-6 py-24">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }) }}
    />
    <div className="mx-auto max-w-3xl">
      <Eyebrow>FAQ</Eyebrow>
      <h2 className="h2 mt-5">Questions, answered.</h2>
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
}
