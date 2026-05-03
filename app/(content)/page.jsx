import Faqs from "../../components/faqs"
import FinalCta from "../../components/final-cta"
import Pricing from "../../components/pricing"
import ListingCta from "../../components/listing-cta"
import plans from "../../utils/plans"
import AnimatedBackground from "../../components/animated-background"
import SkelletonReview from "../../components/skelleton-review"
import Image from "next/image"

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

const colors = ["bg-[#C7D0FF]", "bg-[#FFD5D5]", "bg-[#BFF9EA]", "bg-[#FFD8AA]"]
const hero = [
  {
    // me
    title: "Product reviews right in Shopify",
    subtitle: "The only app you need to manage Shopify's standard review Metaobjects",
    paragraph: "Stop slowing down your store with heavy review widgets. Import existing reviews from any provider and collect new ones through post-purchase emails and on-store forms. All reviews are stored in Metaobjects for server-side display - delivering faster page loads, improved Core Web Vitals, and strong on-page SEO through native structured data. Plus, you will own your data. No lock-in with a specific app.",
    bullets: ["Faster store", "Better SEO", "Full control", "Fair pricing"],
    ctaText: "Install the app for free!",
  },
  {
    // grok
    title: "Native Product Reviews for Shopify",
    subtitle: "Store reviews in Shopify’s standard metaobjects",
    paragraph: "Store your reviews directly in Shopify’s standard product review metaobjects. Collect new reviews with post-purchase emails and forms, import existing ones, and display them natively with Liquid - delivering faster page loads, better Core Web Vitals, and stronger search visibility.",
    bullets: ["Faster store", "Better SEO", "Full control", "Fair pricing"],
    ctaText: "Install the app for free!",
  },
  {
    // chatgpt
    title: "Product reviews right in Shopify",
    subtitle: "Collect, manage, and display reviews directly in Shopify - powered by Shopify Metaobjects. Fast, flexible, and fully under your control",
    paragraph: "Say goodbye to slow, third-party review apps. Our Shopify-native solution stores reviews directly in your store using Metaobjects, boosting page speed, improving SEO with server-side structured data, and giving you full control over your review content. Free for up to 100 reviews, with scalable paid plans for growing stores and agencies.",
    bullets: ["Fast server-side rendering", "No JavaScript widgets", "Full control"],
    ctaText: "Install the app for free!",
  },
  {
    // best
    title: "Product reviews stored and rendered natively in Shopify",
    subtitle: "Built on Shopify’s standard product review metaobjects",
    paragraph: "Your reviews render directly in your theme via Liquid - no JavaScript widget, no external server request. Collect new reviews via post-purchase emails and on-store forms, import from Judge.me, Loox, or a CSV, and watch your Lighthouse score climb.",
    bullets: ["Faster store", "Better SEO", "No lock-in", "Fair pricing"],
    ctaText: "Claim early access!",
  },
][3]

const oneLiners = [
  <>Every other review app stores your data on their servers. We store it directly in yours.</>,
  <>Faster pages convert better. Star ratings in Google bring more clicks. Same store, more sales.</>,
  <>Reviews that load instantly - because they belong in Shopify.</>,
  <>Your shop, your data, your reviews. You are not locked in with us. Use a different service for the same data at any time.</>,
  <>From collection to display - all inside Shopify. Your shop, your data, your reviews.</>,
  'Stop slowing down your store with heavy review widgets.',
  'Native reviews. No JavaScript. No compromises.',
  'Your reviews. Your data. Your rules.',
  'Faster pages. Better SEO. Real control.',
  'Render reviews server-side. Convert more customers.',
  'Own your reviews instead of renting them.',
  'No more external scripts killing your speed.',
  'The fastest, cleanest way to show authentic reviews.',
  'Ditch the widgets. Embrace native performance.',
  'Translation included. Performance guaranteed.',
  'Built for speed. Designed for trust.',
  'Finally, reviews that don’t hurt your store.',
]

const benefits = [
  {
    // me
    title: "Why you should save your reviews right in your store",
    subtitle: "Saving reviews in third-party databases ruins your conversion",
    items: [
      {
        title: "Faster store",
        description: "Other services load your reviews with Javascript. We load the data server-side right in your theme using Shopifys native standards. This reduces loading time, improves your web vitals and boosts your conversion.",
      },
      {
        title: "Better SEO",
        description: "Loading reviews later with Javascript disallows outputting structured data - the backbone for high quality SEO. We render it right in your theme server-side. Resulting in higher rankings in search engines and more visitors.",
      },
      {
        title: "Full control",
        description: "Other services store the data on their servers and do whatever you signed in their terms of service. You should own your data. You should decide where it is saved and what is done with it. There is no lock-in with us. You can keep your data anytime and switch the provider. Hell, you can even build your own sections and directly access the data. Because it is all saved right in your store.",
      },
      {
        title: "Fair pricing",
        description: "We are considerably cheaper than others, because we don’t require that heavy infrastructure. Shopify itself does the heavy-lifting. We just provide the tools for you to collect, manage, sync and display your reviews.",
      },
    ],
  },
  {
    // grok
    title: "Why you should store reviews directly in Shopify",
    subtitle: "Third-party review apps slow your store and lock you in. There’s a better way.",
    items: [
      {
        title: "Faster store",
        description: "Other services load reviews with JavaScript. We store them in Shopify’s standard metaobjects and render them natively with Liquid. Result: faster pages and better Core Web Vitals.",
      },
      {
        title: "Better SEO",
        description: "Native structured data from metaobjects improves rich snippets and search rankings. No more hidden reviews behind JS.",
      },
      {
        title: "Full control",
        description: "Your reviews belong to you. They stay in your Shopify store. Export them anytime. Build custom sections if you want. No vendor lock-in.",
      },
      {
        title: "Fair pricing",
        description: "We keep costs low because Shopify does the heavy lifting. No expensive infrastructure required.",
      },
    ],
  },
  {
    // chatgpt
    title: "Keep Reviews Inside Your Store, Not Someone Else’s",
    subtitle: "Third-party review apps store your data externally, slowing your store and limiting your control.",
    items: [
      {
        title: "Faster store",
        description: "Reviews load server-side directly in your theme using Shopify’s native Metaobjects. Faster pages mean higher conversions and higher revenue.",
      },
      {
        title: "Better SEO",
        description: "Server-side rendering outputs structured data that search engines love. More visibility, more visitors.",
      },
      {
        title: "Full control",
        description: "Your reviews live in Shopify. No vendor lock-in. You can export, customize, or even build your own sections directly on the data.",
      },
      {
        title: "Fair pricing",
        description: "We leverage Shopify’s infrastructure, so we can offer a free plan and low-cost paid tiers.",
      },
    ],
  },
  {
    // best
    title: "Why reviews should live directly in Shopify",
    subtitle: "Third-party review apps slow your store and lock you in. There’s a better way.",
    baseColor: "oklch(88.2% 0.059 254.128)",
    items: [
      {
        title: "Faster pages",
        Icon: function Icon({ className }) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
        </svg>},
        description: "Other apps load reviews with JavaScript after the page is already painted. We render them server-side in Liquid - so they appear with the rest of the page. Better Core Web Vitals, social proof visible from the first frame.",
      },
      {
        title: "Better SEO",
        Icon: function Icon({ className }) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clipRule="evenodd" />
        </svg>},      
        description: "JavaScript-loaded reviews are invisible to most search crawlers. Native metaobjects output structured data Google indexes immediately - so star ratings show up in search results, click-through rates climb, and free organic traffic grows.",
      },
      {
        title: "Higher compatibility",
        Icon: function Icon({ className }) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
          <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
        </svg>},
        description: "Reviews stored as standard Shopify metaobjects sync automatically to the Shop app, Google Shopping, and Meta Shops. Many themes include review sections that work out of the box - no custom code needed.",
      },
      {
        title: "Complete control",
        Icon: function Icon({ className }) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
        </svg>},
        description: "Your reviews live in Shopify. No vendor lock-in. Keep them even after uninstalling our app. Import, export, customize! Or even build your own sections accessing them right in your theme.",
      },
      // {
      //   title: "Fair pricing",
      //   Icon: function Icon({ className }) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      //     <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
      //     <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
      //     <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
      //   </svg>},
      //   description: "We leverage Shopify’s infrastructure, so we can offer a free plan and low-cost paid tiers especially for larger stores.",
      // },
    ],
  },
][3]

const feature1 = [
  {
    // me
    title: "Collect your reviews",
    items: [
      "Forms on product pages: Allow anyone to leave reviews.",
      "Post-purchase emails: Send your customers emails to leave reviews. Those will be the most valuable reviews. Incentivise them with individually created discount codes on their next purchase further increasing your order value per customer.",
      "Import reviews from import files or sync from other providers. We support an increasing list of other review services like [judge.me](http://judge.me) and reviews.io. ",
      "Allow adding images and videos.",
      "Product variant specific.",
      "Automated deduplication prevents abuse and accidental imports.",
    ]
  },
  {
    // grok
    title: "Collect reviews the smart way",
    items: [
      "Post-purchase emails with personalized discount codes",
      "On-store submission forms on product pages",
      "Import from other providers or CSV files",
      "Support for variants, images and videos",
      "Automated deduplication to prevent abuse",
    ]
  },
  {
    // chatgpt
    title: "Collect Your Reviews",
    items: [
      "Forms on product pages - let anyone leave reviews quickly.",
      "Post-purchase emails - automatically request reviews and incentivize with discount codes to increase repeat purchases.",
      "Import & sync - migrate from other review services like Judge.me",
      "Media support - allow images and videos to make reviews more engaging.",
      "Variant-specific reviews - show relevant reviews for the selected size, color or option.",
      "Automatic deduplication - prevents abuse and accidental imports.",
    ]
  },
  {
    // best
    title: "Collect reviews intelligently",
    baseColor: "oklch(84.5% 0.143 164.978)",
    baseColor: "oklch(90.5% 0.093 164.15)",
    baseColor: "oklch(82.7% 0.119 306.383)",
    items: [
      {
        title: "Forms on product pages",
        description: "Let anyone leave reviews quickly.",
      },
      {
        title: "Post-purchase emails",
        description: "Automatically request reviews after purchase. Reward reviewers with a discount code - percentage or fixed - sent automatically once the review is submitted.",
      },
      {
        title: "Import & sync",
        description: "Migrate from other review services like Judge.me, reviews.io and more.",
      },
      {
        title: "Media support",
        description: "Allow images and videos to make reviews more engaging.",
      },
      {
        title: "Variant-specific reviews",
        description: "Show relevant reviews for the selected size, color or option.",
      },
      {
        title: "Automatic deduplication",
        description: "Prevents abuse and accidental imports.",
      },
    ]
  },
][3]

const feature2 = [
  {
    // me
    title: "Manage your reviews",
    features: [
      "Decide which reviews to publish. Configure auto-publish for reviews based on minimum rating, media attachments or content.",
      "Reply to reviews as soon as possible. This further increases trust and can turn negative reviews into positive ones.",
      "Auto-translate all reviews right after creation into all of your store languages.",
    ]
  },
  {
    // grok
    title: "Manage reviews with ease",
    features: [
      "Moderate and auto-publish based on rules",
      "Reply directly to reviews",
      "Automatic translation into all your store languages",
    ]
  },
  {
    // chatgpt
    title: "Manage Your Reviews",
    features: [
      "Approve or auto-publish - filter reviews by rating, content, or media attachments.",
      "Reply quickly - respond to reviews to build trust and improve customer satisfaction.",
      "Auto-translate - all reviews can be translated into your storefront’s languages.",
    ]
  },
  {
    // best
    title: "Manage reviews easily",
    baseColor: "oklch(82.7% 0.119 306.383)",
    items: [
      {
        title: "Approve or auto-publish",
        description: "Filter reviews by rating, content, or media attachments.",
      },
      {
        title: "Reply quickly",
        description: "Respond to reviews to build trust and improve customer satisfaction.",
      },
      {
        title: "Auto-translate",
        description: "All reviews are translated into your storefront’s languages automatically.",
      },
      {
        title: "Bulk actions",
        description: "Publish, unpublish, or delete multiple reviews at once from the dashboard.",
      },
    ]
  },
][3]

const feature3 = [
  {
    // me
    title: "Display your reviews",
    features: [
      "Add reviews and ratings in all popular places: Product rating on product and collection pages or review lists on all pages.",
      "Let customers filter, search and sort reviews to find their most relevant reviews and make your products shine.",
      "Display translated reviews in the language of your current storefront.",
      "Our app blocks work right out of the box, but are fully customisable. But you can even write your own app blocks as we save all data right in your store.",
    ]
  },
  {
    // grok
    title: "Display reviews natively",
    features: [
      "Ready-made app blocks for product and collection pages",
      "Fully customizable with Liquid",
      "Variant-specific review filtering",
      "Translated reviews shown automatically per storefront",
    ]
  },
  {
    // chatgpt
    title: "Display Your Reviews",
    features: [
      "Flexible placement - product ratings on product & collection pages, full review lists anywhere.",
      "Advanced filtering & search - let customers find the most relevant reviews easily.",
      "Language-aware - display reviews in the visitor’s language automatically.",
      "Fully customizable blocks - pre-built app blocks work out of the box, but you can also build your own using the Metaobjects data directly.",
    ]
  },
  {
    // best
    title: "Display reviews confidently",
    baseColor: "oklch(81% 0.117 11.638)",
    baseColor: "oklch(82.7% 0.119 306.383)",
    items: [
      {
        title: "Flexible placement",
        description: "Product ratings on product & collection pages, full review lists anywhere.",
      },
      {
        title: "Advanced filtering & search",
        description: "Let customers find the most relevant reviews easily.",
      },
      {
        title: "Language-aware",
        description: "Display reviews in the visitor’s language automatically.",
      },
      {
        title: "Fully customizable blocks",
        description: "Pre-built customizable app blocks work out of the box, but you can also build your own using the Metaobjects data directly.",
      },
    ]
  },
][3]

const howItWorks = [
  {
    // me
    title: "How it works",
    steps: [
      "Install the app",
      "Collect or import reviews",
      "Add the ready-made sections to your store",
      "See your speed, SEO and conversion improve",
    ]
  },
  {
    // grok
    title: "Get started in minutes",
    steps: [
      "Install the app",
      "Collect or import your reviews",
      "Add the ready-made blocks to your theme",
      "Watch your speed, SEO, and conversions improve",
    ]
  },
  {
    // chatgpt
    title: "How it works",
    steps: [
      "Install the app from the Shopify App Store.",
      "Collect or import reviews from your store or other services.",
      "Add ready-made sections to your storefront.",
      "See faster pages, better SEO, and improved conversions immediately.",
    ]
  },
  {
    // best
    title: "How it works",
    baseColor: "oklch(81.1% 0.111 293.571)",
    baseColor: "oklch(90.5% 0.093 164.15)",
    baseColor: "oklch(88.2% 0.059 254.128)",
    steps: [
      "1. Install the app from the Shopify App Store.",
      "Optional: Import or sync existing reviews from existing services like Judge.me, Loox, reviews.io, or a CSV.",
      "2. Add ready-made sections to your storefront to collect and display reviews.",
      "3. Watch your pages load faster, rankings improve, and conversions climb.",
    ]
  },
][3]

const finalCta = [
  "Ready for faster, native reviews?", // me
  "Ready for faster, native reviews?", // grok
  "Ready for Faster, Native Reviews?", // chatgpt
  {
    title: "Ready for faster, native reviews?",
    baseColor: "oklch(27.8% 0.033 256.848)",
    description: "No more slow, third-party review apps. Take control of your reviews today.",
    ctaText: "Claim early access!",
  }
][3]

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
    question: 'Why does it matter that my reviews are stored in Shopify instead of a third-party database?',
    answer: <>
      <p>When reviews are stored on a third-party server, your browser has to fetch them via JavaScript after your page loads. This delays rendering, increases your Largest Contentful Paint (LCP), and prevents search engines from indexing your review content and structured data.</p>
      <p>Metaobjects are queried server-side during Liquid rendering - just like product titles or prices. The reviews are part of your HTML from the first byte. No extra round-trip, no layout shift, no dependency on an external service staying online.</p>
    </>,
  },
  {
    question: 'How do I get started?',
    answer: <>
      <p>Install the app from the Shopify App Store. The free tier activates immediately (up to 100 reviews). Connect your review source, import by uploading a CSV file or start collecting via forms and emails. Add some ready-made app blocks to your store - no coding required for basic setup.</p>
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
      <p>Yes. Many of our merchants continue using other services for their trust badges while switching the actual product review display to our native metaobject solution. You can often downgrade your existing review app to their cheapest plan (or even free tier in some cases) and still keep the badge rights. This frequently results in significant cost savings while dramatically improving your store's speed and SEO.</p>
    </>,
  },
  {
    question: 'Does the app require JavaScript Snippets to display reviews?',
    answer: <>
      <p>No. Reviews render natively with Liquid in your theme - fully server-side. This eliminates JavaScript widgets, improves page speed, Core Web Vitals, and supports better SEO through native structured data.</p>
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
      <p>Our app supports unlimited reviews depending on {process.env.NEXT_PUBLIC_LISTING_URL ? <a href={process.env.NEXT_PUBLIC_LISTING_URL} target="_blank" rel="noopener noreferrer" className="underline">the plan you choose</a> : <span>the plan you choose</span>}.</p>
    </>,
  },
  {
    question: 'How does it compare to traditional review widgets?',
    answer: <>
      <p>Traditional widgets load reviews with JavaScript, which slows down your store. This app uses native metaobjects for server-side rendering, resulting in faster pages, better SEO, and improved Core Web Vitals while still supporting photo/video reviews.</p>
    </>,
  },
  {
    question: "Does the app affect my store's performance?",
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
        image: "https://assets.reviewsonmetaobjects.com/logo-300.jpg",
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
      <section className="pt-24 pb-48 mb-24 relative">
        <div className="absolute inset-4 rounded-4xl overflow-hidden">
          <AnimatedBackground />
        </div>
        <div className="px-8 sm:px-8 py-4 text-center relative z-10">
          <p className="h4">{hero.subtitle}</p>
          <h1 className="h1 mt-4 mb-8 max-w-6xl mx-auto">{hero.title}</h1>
          <div className="max-w-3xl mx-auto p">
            <p className="mb-4 leading-relaxed">
              {hero.bullets.map((benefit, index) => <span className={`${colors[index]} px-3 rounded py-1`} key={index}>{benefit}</span>)}
            </p>
            <p className="mb-4">{hero.paragraph}</p>
          </div>
          <div className="inline-flex justify-center items-center gap-4 relative">
            <ListingCta className="btn btn-primary">{hero.ctaText}</ListingCta>
            <div className="text-right absolute -right-6 -top-2 z-10">
              <img src="/shopify_glyph.svg" alt="Shopify Logo" className="h-14" width="49" height="56" />
            </div>
          </div>
        </div>
        <div className="relative -mb-64 w-full py-8 overflow-hidden">
          <div className="flex w-max animate-[skelletonReviewsScroll_42s_linear_infinite]">
            {[0, 1].map((duplicateGroupIndex) => <div key={duplicateGroupIndex} className="flex gap-8 px-4">
              {Array.from({ length: 8 }, (_, index) => index).map((skelletonReviewIndex) => <div className="shrink-0 self-end" key={`${duplicateGroupIndex}-${skelletonReviewIndex}`}>
                <SkelletonReview index={skelletonReviewIndex} />
              </div>)}
            </div>)}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-32" id="more-info">
        <div className="container max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="h2 mb-6">{oneLiners[0]}</h2>
          <p className="text-gray-600 text-lg">Shopify has its own native data type for product reviews - the standard product review metaobject. Most review apps ignore it and run their own database. We built our entire product around it. Your reviews render in your theme the same way product titles do, with no external scripts and no API calls at page load. And they stay in your store forever, even after you uninstall the app.</p>
        </div>
      </section>
      <section className="bg-white pt-16 sm:pt-32 px-4">
        <div className="relative max-w-7xl mx-auto">
          <h2 className={`h2 mb-4 text-gray-900 text-center`}>{benefits.title}</h2>
          <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
            <AnimatedBackground baseColor={benefits.baseColor} />
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
              {benefits.items.map((benefit, index) => <div key={index} className={`bg-white rounded-xl p-4 text-gray-800`}>
                <div className="flex justify-between items-center gap-1">
                  <h3 className="font-bold">{benefit.title}</h3>
                  {benefit.Icon && <benefit.Icon className="w-5 h-5" />}
                </div>
                <p className="mt-2">{benefit.description}</p>
              </div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="px-10 mt-4 sm:-mt-8 z-10 relative">
        <div className="bg-white rounded-xl overflow-hidden text-white mx-auto max-w-3xl">
          <Image
            src="https://assets.reviewsonmetaobjects.com/landing-01.jpg"
            alt="Reviews built on Shopify Metaobjects"
            className="h-auto w-full"
            width={1600}
            height={700}
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </section>
      <section className="bg-white pb-16 pt-32 sm:pb-32 sm:pt-48">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="h2">{oneLiners[1]}</h2>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="relative max-w-7xl mx-auto">
          <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
            <AnimatedBackground baseColor={feature1.baseColor} />
            <h2 className={`h2 text-white text-shadow-sm relative z-10 mb-8 text-center`}>{feature1.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
              {feature1.items.map((feature, index) => <div key={index} className={`bg-black/15 text-white text-shadow-sm rounded-xl p-4 border border-white/60`} style={{ boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.02)" }}>
                <h3 className="font-bold">{feature.title}</h3>
                <p className="mt-2">{feature.description}</p>
              </div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="relative max-w-7xl mx-auto">
          <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
            <AnimatedBackground baseColor={feature2.baseColor} />
            <h2 className={`h2 text-white text-shadow-sm relative z-10 mb-8 text-center`}>{feature2.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              {feature2.items.map((feature, index) => <div key={index} className={`bg-black/10 text-white text-shadow-sm rounded-xl p-4 border border-white/40`} style={{ boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.03)" }}>
                <h3 className="font-bold">{feature.title}</h3>
                <p className="mt-2">{feature.description}</p>
              </div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="relative max-w-7xl mx-auto">
          <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
            <AnimatedBackground baseColor={feature3.baseColor} />
            <h2 className={`h2 text-white text-shadow-sm relative z-10 mb-8 text-center`}>{feature3.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              {feature3.items.map((feature, index) => <div key={index} className={`bg-black/10 text-white text-shadow-sm rounded-xl p-4 border border-white/40`} style={{ boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.03)" }}>
                <h3 className="font-bold">{feature.title}</h3>
                <p className="mt-2">{feature.description}</p>
              </div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-32">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="h2">{oneLiners[2]}</h2>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="relative max-w-2xl mx-auto">
          <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
            <AnimatedBackground baseColor={howItWorks.baseColor} />
            <h2 className={`h2 text-white text-shadow-sm relative z-10 mb-8 text-center`}>{howItWorks.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 relative">
              {howItWorks.steps.map((step, index) => <div key={index} className={`bg-white text-gray-900 rounded-xl p-4`} style={{ boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.03)" }}>
                <h3 className="font-bold">{step}</h3>
              </div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-32 px-4" id="pricing">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="h2 mb-4">Pricing that doesn't punish growth</h2>
          <p className="text-gray-500 mb-12">Start free with up to 100 reviews. Paid plans are flat with a hard cap - no per-order fees, no volume tiers, no surprise bills as your store scales. We can keep it this low because reviews live in Shopify's infrastructure, not ours. Switching from a usage-based competitor often saves you a few thousand dollars a year.</p>
          <Pricing />
          <ListingCta className="btn btn-primary mt-12 inline-flex">Claim early access!</ListingCta>
        </div>
      </section>
      <FinalCta title={finalCta.title} subtitle={finalCta.description} ctaLabel={finalCta.ctaText} />
      <section className="py-16 sm:py-32 relative">
        <AnimatedBackground baseColor="oklch(92.8% 0.006 264.531)" />
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <h2 className="h2 text-right">What. The. FAQ?</h2>
          <Faqs faqs={faqs} pageUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/`} />
        </div>
      </section>
    </main>
  </>
}
