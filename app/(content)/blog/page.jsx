import Link from "next/link"
import Eyebrow from "../../../components/eyebrow"
import { metadata as post1 } from "./shopify-native-product-reviews/page"
import { metadata as post2 } from "./real-cost-shopify-review-apps/page"
import { metadata as post3 } from "./shopify-review-stars-not-showing-google/page"
import { metadata as post4 } from "./review-app-slowing-shopify-store/page"
import { metadata as post5 } from "./shopify-liquid-json-ld-structured-data/page"
import { metadata as post6 } from "./shopify-metafields-vs-metaobjects/page"
import { metadata as post7 } from "./how-shopify-product-reviews-work/page"
import { metadata as post8 } from "./social-proof-shopify-landing-pages/page"
import { metadata as post9 } from "./social-proof-shopify-homepage/page"
import { metadata as post10 } from "./social-proof-shopify-collection-pages/page"
import { metadata as post11 } from "./social-proof-shopify-product-pages/page"
import { metadata as post12 } from "./shopify-social-proof-best-practices/page"

export const metadata = {
  title: "Blog - Shopify Reviews, Performance & SEO",
  description: "Technical articles about Shopify product reviews, Core Web Vitals, structured data, Metaobjects, and store performance.",
  alternates: {
    canonical: "/blog",
  },
}

const posts = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11, post12].reverse()

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
          <div className="mb-5"><Eyebrow>Blog</Eyebrow></div>
          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight mb-4">Shopify reviews, performance & SEO</h1>
          <p className="text-gray-500 text-lg">Technical articles for developers, agencies, and performance-minded merchants.</p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <ul className="space-y-10">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-gray-100 pb-10 last:border-0">
                <time className="text-sm text-gray-500 mb-2 block">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors mb-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 leading-relaxed mb-3">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-gray-900 underline underline-offset-2 decoration-2 decoration-gray-300 hover:decoration-[#fde047] transition-colors">
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
