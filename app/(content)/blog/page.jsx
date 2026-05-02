import Link from "next/link"

export const metadata = {
  title: "Blog - Shopify Reviews, Performance & SEO",
  description: "Technical articles about Shopify product reviews, Core Web Vitals, structured data, Metaobjects, and store performance.",
  alternates: {
    canonical: "/blog",
  },
}

const posts = [
  {
    slug: "shopify-native-product-reviews",
    title: "Can Shopify display product reviews natively without a third-party app?",
    description: "Shopify deprecated its built-in Product Reviews app in 2024. Here's what actually ships natively today, what still requires an app, and what 'native' really means for review storage.",
    date: "2026-05-02",
    tags: ["shopify", "reviews"],
  },
  {
    slug: "real-cost-shopify-review-apps",
    title: "The hidden cost of Shopify review apps: speed, SEO, and data you don't own",
    description: "An honest analysis of what standard Shopify review apps cost beyond the monthly fee - page speed, SEO reliability, crawl budget, and what happens to your data when you leave.",
    date: "2026-05-02",
    tags: ["performance", "seo", "data"],
  },
  {
    slug: "shopify-review-stars-not-showing-google",
    title: "Why your Shopify product review stars don't show in Google Search",
    description: "Missing star ratings in Google Search results? This guide explains exactly why review rich snippets fail on Shopify stores - and how to fix it with server-side structured data.",
    date: "2026-05-02",
    tags: ["seo", "structured-data"],
  },
  {
    slug: "review-app-slowing-shopify-store",
    title: "Is your review app slowing down your Shopify store? How to measure it",
    description: "A practical guide to measuring the performance impact of third-party review widgets on your Shopify store using Lighthouse, PageSpeed Insights, and Chrome DevTools.",
    date: "2026-05-02",
    tags: ["performance", "lighthouse"],
  },
  {
    slug: "shopify-liquid-json-ld-structured-data",
    title: "How to add JSON-LD structured data in Shopify Liquid: products, reviews, and breadcrumbs",
    description: "A complete guide to implementing JSON-LD structured data in Shopify Liquid - covering Product schema, AggregateRating from Metafields, Review markup, and BreadcrumbList.",
    date: "2026-05-02",
    tags: ["seo", "liquid", "tutorial"],
  },
  {
    slug: "shopify-metafields-vs-metaobjects",
    title: "Shopify Metafields vs. Metaobjects: what's the difference?",
    description: "A clear technical explanation of Shopify Metafields and Metaobjects - what each is, how they differ, when to use which, and how they work together in Liquid and GraphQL.",
    date: "2026-05-02",
    tags: ["metaobjects", "liquid", "graphql"],
  },
  {
    slug: "how-shopify-product-reviews-work",
    title: "How Shopify product reviews work: Metaobjects, server-side rendering, and SEO",
    description: "A technical deep-dive into Shopify's standard product review Metaobject - why server-side Liquid rendering beats JavaScript widgets for speed, SEO, and data ownership.",
    date: "2026-05-02",
    tags: ["metaobjects", "performance", "seo"],
  },
]

export default function BlogIndexPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/blog#blog`,
    "name": "Shopify Reviews, Performance & SEO",
    "description": metadata.description,
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": process.env.NEXT_PUBLIC_APP_NAME,
      "url": process.env.NEXT_PUBLIC_SITE_URL,
    },
    "blogPost": posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}#article`,
      "headline": post.title,
      "description": post.description,
      "datePublished": post.date,
      "url": `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
    })),
  }

  return (
    <main className="bg-white min-h-screen text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <section className="pt-24 pb-16 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight mb-4">Shopify reviews, performance & SEO</h1>
          <p className="text-gray-500 text-lg">Technical articles for developers, agencies, and performance-minded merchants.</p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <ul className="space-y-10">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-gray-100 pb-10 last:border-0">
                <time className="text-sm text-gray-400 mb-2 block">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 leading-relaxed mb-3">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="text-sm text-blue-700 underline underline-offset-2 hover:text-blue-900 transition-colors">
                  Read article →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
