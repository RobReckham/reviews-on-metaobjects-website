'use client'

import { useState } from "react"

const faqs = [
  {
    question: 'What is the standard product review metaobject?',
    answer: <>
      <p>Shopify's standard product review metaobject is the official, built-in way to store product reviews. It powers syndication to the Shop app, Google Shopping, and Meta shops, and allows native server-side display in your theme using Liquid.</p>
    </>,
  },
  {
    question: 'What is a metaobject?',
    answer: <>
      <p>Metaobjects allow you to store data in a structured way right in Shopify. It is a way to store data in a way that is easy and fast to query in Shopify's markup language Liquid. It is thus a native and efficient way to store data and display reviews in your theme.</p>
    </>,
  },
  {
    question: 'How do I get started?',
    answer: <>
      <p>Install the app from the Shopify App Store. The free tier activates immediately (up to 100 reviews). Connect your review source, import by uploading a CSV file or start collecting via forms and emails. Add some ready-made app blocks to your store — no coding required for basic setup.</p>
    </>,
  },
  {
    question: 'How does the app collect new reviews?',
    answer: <>
      <p>New reviews are collected automatically through post-purchase emails and customizable on-store submission forms. All collected reviews are stored directly in Shopify's standard product review metaobjects for native display.</p>
    </>,
  },
  {
    question: 'Can I import reviews from other providers?',
    answer: <>
      <p>Yes. The app supports importing existing reviews from providers such as Judge.me, reviews.io, and other sources (CSV file import) into the standard product review metaobjects.</p>
    </>,
  },
  {
    question: 'What providers are supported for import?',
    answer: <>
      <p>The app supports importing and syncing reviews from Judge.me, reviews.io and more. You can also import reviews from other sources by uploading a CSV file. More providers are added regularly to the sync feature based on demand.</p>
    </>,
  },
  {
    question: 'Can I keep trust badges from other services?',
    answer: <>
      <p>Yes. Many of our merchants continue using other services for their trust badges while switching the actual product review display to our native metaobject solution. You can often downgrade your existing review app to their cheapest plan (or even free tier in some cases) and still keep the badge rights. This frequently results in significant cost savings while dramatically improving your store’s speed and SEO.</p>
    </>,
  },
  {
    question: 'Does the app require JavaScript Snippets to display reviews?',
    answer: <>
      <p>No. Reviews render natively with Liquid in your theme — fully server-side. This eliminates JavaScript widgets, improves page speed, Core Web Vitals, and supports better SEO through native structured data.</p>
    </>,
  },
  {
    question: 'How does automatic translation work?',
    answer: <>
      <p>The app automatically translates review title and body into your store's published languages. Translations are stored in the metaobjects and displayed correctly based on the shopper's locale.</p>
    </>,
  },
  {
    question: 'Is variant-specific review display supported?',
    answer: <>
      <p>Yes. When reviews contain variant information, the app filters and displays them for the currently selected product variant on the product page.</p>
    </>,
  },
  {
    question: 'What happens to my product rating aggregates?',
    answer: <>
      <p>The app automatically maintains accurate rating aggregates (average rating and review count) in Shopify metafields. These are updated in real time and can be used on collection pages and search results.</p>
    </>,
  },
  {
    question: 'How many reviews can I store and display?',
    answer: <>
      <p>Shopify itself supports up to 1,000,000 product review metaobjects per store.</p>
      <p>Our app supports unlimited reviews depending on {process.env.NEXT_PUBLIC_LISTING_URL ? <a href={process.env.NEXT_PUBLIC_LISTING_URL} target="_blank" rel="noopener noreferrer" className="underline">the plan you choose</a> : <span className="underline">the plan you choose</span>}.</p>
    </>,
  },
  {
    question: 'How does it compare to traditional review widgets?',
    answer: <>
      <p>Traditional widgets load reviews with JavaScript, which slows down your store. This app uses native metaobjects for server-side rendering, resulting in faster pages, better SEO, and improved Core Web Vitals while still supporting photo/video reviews.</p>
    </>,
  },
  {
    question: 'Does the app affect my store\'s performance?',
    answer: <>
      <p>Yes, but most likely in a good way. Native Liquid rendering from metaobjects is server-side and usually improves page speed compared to JavaScript-based widgets, which depend on external requests and third-party scripts.</p>
      <p>This improves Core Web Vitals like Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS), which are important for SEO and user experience.</p>
    </>,
  },
  // {
  //   question: 'Is the app GDPR compliant?',
  //   answer: <>
  //     <p>Yes. The app follows Shopify's privacy and data protection standards. No personal data is stored outside Shopify, and all processing complies with GDPR requirements.</p>
  //   </>,
  // },
  {
    question: 'Do I need to change my theme?',
    answer: <>
      <p>No major changes required. Just add the ready-made display block to your product or collection pages in the theme editor. It works with all Online Store 2.0 themes.</p>
    </>,
  },
  // {
  //   question: 'Are photo and video reviews supported?',
  //   answer: <>
  //     <p>Yes. Photo and video URLs from imported or collected reviews are stored in the metaobjects and displayed natively in your theme.</p>
  //   </>,
  // },
  {
    question: 'What kind of support do you offer?',
    answer: <>
      <p>Free tier: community support.</p>
      <p>Paid plans: email support with response times under 24 hours.</p>
    </>,
  },
  {
    question: 'Is there a free trial for paid plans?',
    answer: <>
      <p>No, but the free plan comes with all features and 100 reviews included for an unlimited period. You can upgrade to a paid plan at any time.</p>
    </>,
  },
  {
    question: 'Can I cancel anytime?',
    answer: <>
      <p>Yes. All plans have a monthly subscription. Cancel anytime from your Shopify admin. Your review data remains in your Shopify metaobjects after uninstall.</p>
    </>,
  },
  {
    question: 'What happens when I uninstall the app?',
    answer: <>
      <p>The app removes its own data like app blocks cleanly. Your reviews remain in Shopify's standard product review metaobjects, and you can continue using them with any other tool or your own Liquid blocks.</p>
    </>,
  },
];

function jsxToPlainText(node) {
  if (node == null || node === false) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(jsxToPlainText).join(" ").replace(/\s+/g, " ").trim();
  return node?.props?.children != null ? jsxToPlainText(node.props.children) : "";
}

export default function Faqs() {
  const [activeFaq, setActiveFaq] = useState(0);

  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: jsxToPlainText(item.answer),
            },
          })),
        }),
      }}
    />
    <ul className="space-y-8 mt-16">
      {faqs.map((faq, index) => <li key={index} className="bg-white rounded-2xl">
        <button
          type="button"
          className="flex justify-between items-center w-full text-left p-8 cursor-pointer gap-4"
          onClick={() => setActiveFaq(index === activeFaq ? null : index)}
          aria-expanded={activeFaq === index}
          aria-controls={`faq-panel-${index}`}
          id={`faq-trigger-${index}`}
        >
          <h3 className="h3 cursor-pointer">{faq.question}</h3>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-4 sm:w-6 text-black transition-transform duration-300 ${activeFaq === index ? "rotate-180" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </button>
        <div
          className="grid transition-all duration-300 ease-in-out"
          style={{ gridTemplateRows: activeFaq === index ? "1fr" : "0fr" }}
          id={`faq-panel-${index}`}
          role="region"
          aria-labelledby={`faq-trigger-${index}`}
        >
          <div className="overflow-hidden">
            <div className="p-8 pt-0 flex flex-col gap-4">{faq.answer}</div>
          </div>
        </div>
      </li>)}
    </ul>
  </>
}
