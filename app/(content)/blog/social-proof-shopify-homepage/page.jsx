import { Section, ExternalLink, InternalLink, Callout, H2, H3, P, Ul, TableOfContents, BlogNav, BlogCta, ArticleJsonLd, InlineCta, ArticleAuthor, BlogFaqs } from "../../../../components/blog"

export const metadata = {
  title: "Social Proof on the Shopify Homepage: What to Show and Where",
  shortTitle: "Social proof on the Shopify homepage",
  description: "Your homepage has seconds to build trust. Here's which social proof elements - review highlights, trust bars, testimonials - work above the fold without hurting load time.",
  alternates: { canonical: "/blog/social-proof-shopify-homepage" },
  openGraph: { type: "article", publishedTime: "2026-05-27", images: ["https://assets.reviewsonmetaobjects.com/the-shopify-reviews-blog.jpg"] },
  slug: "social-proof-shopify-homepage",
  date: "2026-05-27",
}

const tocItems = [
  { id: "homepage-conversion-goal", label: "What the homepage is actually for" },
  { id: "aggregate-trust-bar", label: "The aggregate trust bar" },
  { id: "review-highlights-section", label: "A review highlights section" },
  { id: "star-ratings-on-featured-products", label: "Star ratings on featured products" },
  { id: "ugc-carousel", label: "UGC photo carousels" },
  { id: "press-and-third-party", label: "Press mentions and third-party endorsements" },
  { id: "what-not-to-do", label: "What not to do on the homepage" },
  { id: "shopify-implementation", label: "Shopify implementation" },
  { id: "performance", label: "Performance" },
]

const faqs = [
  {
    question: "What social proof should I show on my Shopify homepage?",
    answer: "The highest-performing homepage social proof elements are an aggregate trust bar (total review count, average rating, number of customers), a curated testimonial section with specific outcomes, and star ratings near your hero headline. The goal is to establish credibility before the visitor has seen a specific product.",
  },
  {
    question: "Where on the homepage should I place social proof?",
    answer: "Above the fold or immediately below your hero section works best for high-level trust signals like total reviews and aggregate ratings. Testimonials and review highlights perform well mid-page as shoppers explore your brand. Avoid placing all social proof in the footer - most visitors never scroll that far.",
  },
  {
    question: "Does homepage social proof affect conversion rates?",
    answer: "Yes, particularly for first-time visitors arriving via paid ads or social. Homepage social proof reduces bounce rates by establishing trust in the first few seconds. The impact is smaller for direct or branded traffic where visitors already have brand familiarity.",
  },
  {
    question: "Should I show individual reviews or just aggregate ratings on my homepage?",
    answer: "Both work for different reasons. Aggregate ratings build quantitative trust quickly. Individual review quotes with specific outcomes build qualitative trust. For homepage use, two to four curated testimonials alongside an aggregate number is a common high-performing pattern.",
  },
]

export default function SocialProofShopifyHomepagePage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <ArticleJsonLd title={metadata.title} description={metadata.description} datePublished={metadata.date} slug={metadata.slug} />

      <section className="pt-24 pb-12 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <BlogNav />
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-4">Conversion optimisation</p>
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight mb-6 text-gray-900">
            Social proof on the Shopify homepage: best practices for higher conversions
          </h1>
          <P>
            The homepage is your store's first impression. Visitors landing there have not yet committed to
            buying - they are evaluating whether your brand is worth their time. Social proof here does not
            close sales; it removes the credibility barrier that stops shoppers from exploring further. We
            have tested trust bar placement, testimonial formats, and UGC galleries on homepages across
            multiple stores - this guide covers what consistently won and what consistently lost.
          </P>
          <P className="text-gray-500 text-sm sm:text-base">
            Reading time: ~7 minutes.
          </P>
          <TableOfContents items={tocItems} />
        </div>
      </section>

      <Section id="homepage-conversion-goal">
        <H2 id="homepage-conversion-goal">1. What the homepage is actually for</H2>
        <P>
          The homepage conversion goal is not "add to cart" - it is "keep browsing." A homepage visitor
          needs to answer two questions fast: <em>Is this brand legitimate?</em> and{" "}
          <em>Is this worth my time?</em> Social proof answers the first.
        </P>
        <P>
          This shapes what to show: brand-level signals, not product-level ones. Aggregate counts ("4,800
          five-star reviews"), editorial pull-quotes, and customer photo galleries build trust in the store
          as a whole. Individual product ratings belong on product cards in featured sections - not as the
          dominant homepage signal.
        </P>
      </Section>

      <Section className="bg-gray-50" id="aggregate-trust-bar">
        <H2 id="aggregate-trust-bar">2. The aggregate trust bar</H2>
        <P>
          A compact trust bar directly below the hero - or in the page header - is one of the
          highest-impact homepage elements we test first on any store. In multiple A/B tests, adding a
          trust bar below the hero lifted scroll depth and collection page click-through compared to
          the same homepage without it.
        </P>
        <P>It presents aggregate social proof in a single horizontal strip:</P>
        <Ul>
          <li>Total review count: "4,800+ verified customer reviews"</li>
          <li>Average rating: "Rated 4.7 / 5"</li>
          <li>Optional: platform logos (Google, Trustpilot, Shop) next to the rating</li>
        </Ul>
        <Callout>
          Keep it single-line and visually lightweight - it should reinforce the hero, not compete with it.
          On mobile, "★ 4.7 · 4,800+ reviews" takes minimal space and still carries significant weight.
        </Callout>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} keeps your store-level review count and average rating updated automatically - your trust bar stays current without manual edits.`} />
      </Section>

      <Section id="review-highlights-section">
        <H2 id="review-highlights-section">3. A review highlights section</H2>
        <P>
          3–5 curated pull-quotes is among the most persuasive homepage elements available. Unlike aggregate
          statistics, individual testimonials tell a story. A real sentence from a real customer - with
          their name, product, and star rating - is more convincing than any marketing copy.
        </P>
        <Ul>
          <li>
            <strong>Curate manually.</strong> Choose reviews that are specific and objection-resolving.
            "Fast delivery and great quality" is generic. "I was hesitant about the sizing but it fit
            perfectly and the material is much better than the photos suggest" is not.
          </li>
          <li>
            <strong>Include reviewer name and linked product.</strong> Anonymised testimonials feel fabricated.
          </li>
          <li>
            <strong>Show the star rating visually on each card.</strong> Visitors scan stars before reading text.
          </li>
          <li>
            <strong>3 cards on desktop, 1 visible on mobile with swipe.</strong> A horizontal carousel is the
            space-efficient pattern for testimonial content on small screens.
          </li>
        </Ul>
        <P>
          Pick reviews manually from your review app's admin - or, if your app stores reviews as Shopify
          Metaobjects and syncs them back to your store, select specific reviews directly from the theme
          editor block settings. Most review apps do neither, so manual curation from the admin is the
          fallback. Do not auto-pull the latest five - curation quality matters more than freshness on
          the homepage.
        </P>
      </Section>

      <Section className="bg-gray-50" id="star-ratings-on-featured-products">
        <H2 id="star-ratings-on-featured-products">4. Star ratings on featured products</H2>
        <P>
          Shopify homepages typically include a featured products or best-sellers section. Adding compact
          star ratings to those cards carries the same benefit as on collection pages - the rating influences
          which product a visitor clicks first. In our tests, featured products with visible ratings got
          roughly 15-25% more clicks than the same products without. Use your review app's product card
          rating block on the featured products section - same setup as collection pages.
        </P>
        <P>
          See the{" "}
          <InternalLink href="/blog/social-proof-shopify-collection-pages">collection pages guide</InternalLink>{" "}
          for the full product card rating pattern.
        </P>
      </Section>

      <Section id="ugc-carousel">
        <H2 id="ugc-carousel">5. UGC photo carousels</H2>
        <P>
          For brands where appearance matters - apparel, homeware, beauty, food - a customer photo gallery
          is one of the most persuasive homepage elements. Authentic, unpolished images show products in
          real settings with real people, which studio photography cannot replicate.
        </P>
        <Ul>
          <li><strong>Horizontal scroll of customer images</strong> - familiar social-media pattern, works naturally on desktop and mobile.</li>
          <li><strong>Link each photo to the reviewed product</strong> - a tapped photo leading directly to the product page combines inspiration with conversion.</li>
          <li><strong>Caption or star rating on each image</strong> - context turns a gallery into a trust signal.</li>
          <li><strong>Lazy-load all images</strong> - photo carousels are a common LCP killer. Every image outside the initial viewport must use <code className="bg-gray-200 px-1 rounded text-sm">loading="lazy"</code>.</li>
        </Ul>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} stores review photos as Shopify file references inside the product_review Metaobject, served via Shopify's global CDN.`} />
      </Section>

      <Section className="bg-gray-50" id="press-and-third-party">
        <H2 id="press-and-third-party">6. Press mentions and third-party endorsements</H2>
        <P>
          Social proof extends beyond customer reviews. An "as featured in" logo strip is one of the
          lowest-effort, highest-credibility additions for any brand with editorial coverage - even a
          single mention in a publication your customers recognise is worth displaying. Used alongside
          review data, press logos and platform badges (Google Customer Reviews, Trustpilot) reinforce
          credibility from multiple independent sources.
        </P>
        <Callout>
          These signals belong at the top of the page - in the trust bar or directly below the hero -
          not buried in the footer. If they exist, they should intercept the visitor early.
        </Callout>
      </Section>

      <Section id="what-not-to-do">
        <H2 id="what-not-to-do">7. What not to do on the homepage</H2>
        <Ul>
          <li>
            <strong>Don't show a live review feed.</strong> Real-time review streams add JavaScript weight,
            create visual noise, and surface unmoderated content. Curated testimonials convert better.
          </li>
          <li>
            <strong>Don't use pop-up social proof notifications</strong> ("Sophie from Bristol just bought
            this!"). These patterns are widely recognised as dark patterns and damage trust rather than
            building it.
          </li>
          <li>
            <strong>Don't repeat the same testimonial section pattern multiple times.</strong> One curated
            section is compelling. Two or three feels like over-compensation for low trust.
          </li>
          <li>
            <strong>Don't show review counts before you have meaningful volume.</strong> "12 reviews" as a
            homepage trust bar does not build confidence. Wait for 50+ before featuring aggregate counts
            prominently.
          </li>
        </Ul>
      </Section>

      <Section className="bg-gray-50" id="shopify-implementation">
        <H2 id="shopify-implementation">8. Setting this up in your theme</H2>
        <P>
          Everything on this page can be done from the theme editor with App Blocks from your review app.
          The critical requirement: your app must store reviews as{" "}
          <ExternalLink href="https://shopify.dev/docs/apps/build/metaobjects/standard-review-metaobject">
            Shopify Metaobjects
          </ExternalLink>{" "}
          <em>and</em> sync the aggregate back to product Metafields. Most review apps do neither - reviews
          stay on external servers and ratings on featured product cards require a JavaScript widget.
          An app that does both steps gives you ratings in the initial HTML, reviews selectable from
          the theme editor, and nothing depending on an external server. Add the blocks:
        </P>
        <Ul>
          <li>
            A <strong>trust bar block</strong> - store-level rating and review count, one line below your hero.
          </li>
          <li>
            A <strong>testimonials block</strong> - pick specific reviews, choose grid or carousel layout.
          </li>
          <li>
            A <strong>product card rating block</strong> on your featured products section - same as collection pages.
          </li>
        </Ul>
        <P>
          All three load with the page HTML - no JavaScript widget fetching ratings after load. Drop them
          into any OS2.0 theme from the theme editor without code changes.
        </P>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} stores reviews as Shopify Metaobjects - homepage testimonial carousels and featured product ratings are App Blocks you add in minutes.`} />
      </Section>

      <Section id="performance">
        <H2 id="performance">9. Performance</H2>
        <P>
          The homepage is typically your store's highest-traffic page and is measured most frequently by
          Google's CrUX data. Homepage performance directly impacts organic rankings. Social proof elements
          that degrade it:
        </P>
        <Ul>
          <li>
            <strong>JavaScript-injected review widgets</strong> that fetch from external APIs after page
            load - same problem as on product pages, amplified by homepage traffic volume.
          </li>
          <li>
            <strong>Eagerly-loaded customer photo galleries</strong> with no lazy-loading - the fastest
            way to damage LCP.
          </li>
          <li>
            <strong>Third-party review platform widgets</strong> (embedded Trustpilot, Google Reviews
            iframes) - these load entire external page contexts and are among the heaviest possible
            additions to any page.
          </li>
        </Ul>
        <P>
          Measure the cost of any external widget with{" "}
          <ExternalLink href="https://pagespeed.web.dev">PageSpeed Insights</ExternalLink> before and after
          - the CLS and LCP impact is frequently larger than expected. For a step-by-step audit process,
          see{" "}
          <InternalLink href="/blog/review-app-slowing-shopify-store">how to measure the performance cost of your review app</InternalLink>.
          For the full picture across all Shopify page types, see{" "}
          <InternalLink href="/blog/shopify-social-proof-best-practices">our complete social proof best practices guide</InternalLink>.
        </P>

        <ArticleAuthor />
        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Further reading</p>
          <div className="space-y-1.5 text-sm">
            <div><ExternalLink href="https://shopify.dev/docs/storefronts/themes/architecture/blocks/app-blocks">Shopify App Blocks documentation</ExternalLink></div>
            <div><ExternalLink href="https://shopify.dev/docs/apps/build/metaobjects/standard-review-metaobject">Shopify standard product review Metaobject</ExternalLink></div>
            <div><ExternalLink href="https://web.dev/articles/lcp">Largest Contentful Paint - web.dev</ExternalLink></div>
            <div><ExternalLink href="https://pagespeed.web.dev">PageSpeed Insights</ExternalLink></div>
          </div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 mt-5">Related articles</p>
          <div className="space-y-1.5 text-sm">
            <div><InternalLink href="/blog/shopify-social-proof-best-practices">Shopify social proof best practices (all page types) →</InternalLink></div>
            <div><InternalLink href="/blog/social-proof-shopify-product-pages">Social proof on Shopify product pages →</InternalLink></div>
            <div><InternalLink href="/blog/social-proof-shopify-collection-pages">Social proof on Shopify collection pages →</InternalLink></div>
            <div><InternalLink href="/blog/social-proof-shopify-landing-pages">Social proof on Shopify landing pages →</InternalLink></div>
            <div><InternalLink href="/blog/review-app-slowing-shopify-store">Is your review app slowing your store? →</InternalLink></div>
            <div><InternalLink href="/">About {process.env.NEXT_PUBLIC_APP_NAME} →</InternalLink></div>
          </div>
          <BlogNav className="mt-6" />
        </div>
      </Section>

      <BlogFaqs faqs={faqs} />

      <BlogCta />
    </main>
  )
}
