import { Section, ExternalLink, InternalLink, Callout, H2, H3, P, Ul, TableOfContents, BlogNav, BlogCta, ArticleJsonLd, InlineCta, ArticleAuthor, BlogFaqs } from "../../../../components/blog"

export const metadata = {
  title: "Shopify Social Proof Best Practices: The Complete Guide",
  shortTitle: "Shopify social proof best practices",
  description: "Which social proof elements work on product pages, collection pages, homepage, and landing pages - and how to implement each server-side without JavaScript slowing your store.",
  alternates: { canonical: "/blog/shopify-social-proof-best-practices" },
  openGraph: { type: "article", publishedTime: "2026-05-27", images: ["https://assets.reviewsonmetaobjects.com/the-shopify-reviews-blog.jpg"] },
  slug: "shopify-social-proof-best-practices",
  date: "2026-05-27",
}

const tocItems = [
  { id: "what-is-social-proof", label: "What social proof is (and what it isn't)" },
  { id: "product-pages", label: "Product pages" },
  { id: "collection-pages", label: "Collection pages" },
  { id: "homepage", label: "Homepage" },
  { id: "landing-pages", label: "Landing and campaign pages" },
  { id: "structured-data", label: "Structured data, rich snippets, and GEO" },
  { id: "performance-principles", label: "Performance principles" },
  { id: "shopify-architecture", label: "Choosing the right review app setup" },
  { id: "collecting-reviews", label: "Collecting the reviews that power it all" },
]

const faqs = [
  {
    question: "What is social proof in e-commerce?",
    answer: "Social proof is evidence that other people have bought from you, trust you, or found your product valuable. In e-commerce this includes star ratings, review counts, individual reviews, customer photos, and testimonials. It reduces purchase anxiety by showing that others have taken the same risk and found it worthwhile.",
  },
  {
    question: "Does social proof actually increase conversion rates?",
    answer: "Yes, consistently. Star ratings on product pages typically lift conversion rates by 10-30% depending on the product category and baseline review count. The effect is strongest when social proof is placed close to the decision point - near the add-to-cart button - and when reviews are specific rather than generic.",
  },
  {
    question: "Where should I put social proof on my Shopify store?",
    answer: "The highest-value placements are: below the product title on product pages (star rating and review count), on product cards in collection grids (mini star row), on the homepage above the fold (aggregate trust bar or testimonials), and near the CTA on landing pages. Each placement serves a different stage of the purchase journey.",
  },
  {
    question: "How many reviews do I need before showing social proof?",
    answer: "For aggregate ratings, five or more reviews is enough to show a credible score. Below that, displaying a rating can actually hurt trust. For review sections, showing three to five reviews is better than showing none - even a small number of specific, detailed reviews builds more confidence than empty space.",
  },
  {
    question: "What is the difference between social proof and trust signals?",
    answer: "Social proof is peer-based validation - other customers saying your product is good. Trust signals are institutional validation - security badges, return policies, payment logos, certifications. Both reduce purchase anxiety but in different ways. Social proof answers 'will I like this product?' Trust signals answer 'is it safe to buy here?' High-performing stores use both, with social proof closer to the product and trust signals closer to the checkout.",
  },
  {
    question: "Should I show negative reviews on my Shopify store?",
    answer: "Yes. Hiding negative reviews reduces trust rather than increasing it - shoppers are suspicious of a store with only 5-star reviews. A realistic rating distribution (mostly 4-5 stars with some 3-star reviews) is significantly more credible than a suspiciously perfect score. Responding to critical reviews professionally also demonstrates customer service quality.",
  },
  {
    question: "Does the type of social proof that works best vary by product category?",
    answer: "Yes, significantly. High-consideration purchases (electronics, furniture, skincare) benefit most from detailed reviews that address specific concerns. Impulse purchases benefit more from review counts and aggregate ratings that quickly establish credibility. Products with visible results (fitness, beauty, food) perform well with customer photos. Fashion and apparel benefit from fit-specific reviews that reduce size uncertainty.",
  },
  {
    question: "Does social proof content help my Shopify store appear in AI search results?",
    answer: "Yes, and this matters more as AI-driven search grows. AI search engines like Perplexity, Google AI Overviews, and ChatGPT Browse read your page content to answer user questions. Server-side review text, star ratings, and testimonials give AI crawlers concrete evidence about your products that they can cite in answers. Stores with rich, accessible review content are more likely to be recommended when users ask AI assistants about products in your category.",
  },
]

export default function ShopifySocialProofBestPracticesPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <ArticleJsonLd title={metadata.title} description={metadata.description} datePublished={metadata.date} slug={metadata.slug} />

      <section className="pt-24 pb-12 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <BlogNav />
          <p className="inline-block rounded bg-[#fde047] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-gray-900 mb-5">Conversion optimisation</p>
          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">
            Shopify social proof best practices: the complete guide
          </h1>
          <P>
            Social proof - star ratings, customer reviews, testimonials, and user-generated photos - is the
            most effective conversion lever available to Shopify merchants. Products with reviews convert at
            3-4x the rate of products without. After running dozens of A/B tests across Shopify stores, we
            wrote this guide to share what actually moved the needle: what to show on each page type, where
            to place it, how to get it indexed by Google, and the performance mistakes that quietly cancel
            out the conversion gains.
          </P>
          <P className="text-gray-500 text-sm sm:text-base">
            Reading time: ~10 minutes.
          </P>
          <TableOfContents items={tocItems} />
        </div>
      </section>

      <Section id="what-is-social-proof">
        <H2 id="what-is-social-proof">1. What social proof is (and what it isn't)</H2>
        <P>
          Social proof is evidence that other people have bought, used, and been satisfied with your product.
          In an ecommerce context it takes several forms:
        </P>
        <Ul>
          <li><strong>Star ratings and aggregate scores</strong> - rapid, at-a-glance trust signals</li>
          <li><strong>Written reviews</strong> - detailed, specific accounts from verified buyers</li>
          <li><strong>Customer photos and videos (UGC)</strong> - authentic visual evidence of the product in use</li>
          <li><strong>Review counts</strong> - volume signals that reinforce the scale of a product's user base</li>
          <li><strong>Third-party platform ratings</strong> - Google Reviews, Trustpilot, and similar external validation</li>
          <li><strong>Press mentions</strong> - editorial endorsement from recognised publications</li>
        </Ul>
        <P>
          What social proof is <em>not</em>: fabricated testimonials, inflated ratings, or pop-up
          notifications that fake purchase activity. These patterns are recognised by experienced shoppers,
          create legal risk in many markets, and damage trust rather than build it. The most effective
          social proof is authentic, specific, and well-placed.
        </P>
      </Section>

      <Section className="bg-gray-50" id="product-pages">
        <H2 id="product-pages">2. Product pages</H2>
        <P>
          The product detail page is where purchase decisions are made and where social proof has the
          highest individual impact.
        </P>

        <H3>Above the fold: star rating widget</H3>
        <P>
          A compact star rating widget - visual stars, numeric rating, and review count as a clickable
          anchor link - belongs directly beneath the product title, before the add-to-cart button. In our
          tests, display only when the product has 10 or more reviews; fewer creates doubt rather than
          confidence. Or even better, show stars but hide the count until you hit 10.
        </P>

        <H3>Below the fold: full review list</H3>
        <P>
          The full review list belongs at the bottom of the page content. Show 5–10 reviews before
          pagination, sorted by most recent, with reviewer name, date, star rating, and body text. Include
          a rating breakdown (5-star, 4-star, etc.) at the top of the section so shoppers can assess the
          distribution at a glance.
        </P>

        <H3>Photo reviews</H3>
        <P>
          For visual product categories, a horizontal photo strip of customer images at the top of the
          review section is highly effective. Lazy-load all images and link each to the individual review.
        </P>
        <P>
          See the{" "}
          <InternalLink href="/blog/social-proof-shopify-product-pages">full product page social proof guide</InternalLink>{" "}
          for placement detail, A/B test results, and structured data guidance.
        </P>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} ships App Blocks for star ratings, review lists, and review submission forms - drop them into any OS2.0 theme from the theme editor, no code required.`} />
      </Section>

      <Section id="collection-pages">
        <H2 id="collection-pages">3. Collection pages</H2>
        <P>
          Collection pages are where shoppers compare. Social proof here should be compact and immediate -
          the goal is to influence which product card gets clicked, not to close a sale.
        </P>

        <H3>Star ratings on product cards</H3>
        <P>
          A compact star rating and review count on each product card is the single most impactful addition.
          Position it below the product title, above the price. Suppress it on products with fewer than
          10 reviews - in our tests, showing a count below that threshold hurt click-through more than
          hiding it. Use your review app's collection page block or card widget; avoid per-card JavaScript
          widgets that fetch ratings one product at a time.
        </P>

        <H3>Rating-based filtering and sorting</H3>
        <P>
          If your review app stores reviews as{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">product_review</code> Metaobjects and syncs
          the aggregate back to the{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">reviews.rating</code> product Metafield,
          Shopify's native storefront filtering in OS2.0 themes can expose rating as a filterable attribute.
          Most review apps do neither - they keep reviews on external servers - so the Metafield is never
          populated and native filtering is impossible. When it is populated, shoppers who use it convert
          at roughly 2x the collection average in our tests.
        </P>
        <P>
          See the{" "}
          <InternalLink href="/blog/social-proof-shopify-collection-pages">full collection page social proof guide</InternalLink>{" "}
          for setup, performance considerations, and collection-level trust signals.
        </P>
      </Section>

      <Section className="bg-gray-50" id="homepage">
        <H2 id="homepage">4. Homepage</H2>
        <P>
          Homepage social proof builds brand-level trust. The goal is to answer "is this store legitimate?"
          before a visitor has seen a single product.
        </P>

        <H3>Aggregate trust bar</H3>
        <P>
          A single-line trust bar positioned below the hero - "★ 4.7 · 4,800+ verified reviews" - is the
          highest-impact, lowest-friction homepage social proof element. Above the fold on desktop;
          space-efficient single line on mobile.
        </P>

        <H3>Curated testimonial section</H3>
        <P>
          3-5 hand-picked review pull-quotes with reviewer name, star rating, and product reference
          outperform any automated review feed we have tested. Most review apps keep reviews on external
          servers, so you copy-paste into static text fields. An app that stores{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">product_review</code> Metaobjects in Shopify
          lets you select specific reviews in the theme editor block settings instead.
        </P>

        <H3>UGC photo gallery</H3>
        <P>
          For visual product categories, a horizontal gallery of customer photos converts well as a
          homepage section. Link each photo to the relevant product page and lazy-load everything outside
          the initial viewport.
        </P>
        <P>
          See the{" "}
          <InternalLink href="/blog/social-proof-shopify-homepage">full homepage social proof guide</InternalLink>{" "}
          for placement strategy, section implementation, and performance rules.
        </P>
      </Section>

      <Section id="landing-pages">
        <H2 id="landing-pages">5. Landing and campaign pages</H2>
        <P>
          Landing pages - paid ad destinations, campaign pages, editorial content - often receive cold
          traffic with zero prior familiarity with your brand. Social proof density should be{" "}
          <em>higher</em> here than on standard store pages, not lower.
        </P>

        <H3>Above-the-fold trust signal</H3>
        <P>
          Every landing page receiving cold traffic needs at least one immediate trust signal above the
          fold - an aggregate rating bar, a headline testimonial in the hero, or a trust badge row. The
          visitor who bounces before scrolling has seen none of your below-fold social proof.
        </P>

        <H3>CTA-adjacent testimonials</H3>
        <P>
          Place 1–2 objection-resolving testimonials directly adjacent to or immediately above the primary
          CTA. This is where hesitation peaks. Choose reviews that address the specific doubt a visitor is
          most likely to have at the decision point - value, fit, trust, delivery, returns.
        </P>
        <P>
          See the{" "}
          <InternalLink href="/blog/social-proof-shopify-landing-pages">full landing page social proof guide</InternalLink>{" "}
          for testimonial placement strategy, UGC grids, and theme editor setup.
        </P>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} lets you pick specific reviews for landing page sections from the theme editor - no code, no manual copy-pasting.`} />
      </Section>

      <Section className="bg-gray-50" id="structured-data">
        <H2 id="structured-data">6. Structured data, rich snippets, and GEO</H2>
        <P>
          Star ratings in Google organic results require{" "}
          <ExternalLink href="https://schema.org/AggregateRating">
            <code>schema.org/AggregateRating</code>
          </ExternalLink>{" "}
          markup in the initial HTML - not injected by JavaScript after page load. Googlebot processes
          JavaScript in a separate rendering queue, often with a delay of days. If your review app loads
          ratings via a JS widget, structured data may not get indexed for weeks, or at all.
        </P>
        <P>
          What to look for: structured data baked into the page HTML on first load, kept in sync with
          your visible review count. This requires an app that does the full chain -{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">product_review</code> Metaobjects for the
          individual reviews, plus the aggregate synced back to the{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">reviews.rating</code> Metafield on each
          product. That Metafield is what the structured data block reads from. Most review apps do
          neither step - reviews live on external servers and structured data is injected via JavaScript -
          which is why we see stores with 400 reviewed products but stars on only a handful in Google.
        </P>

        <H3>GEO: AI search (ChatGPT, Perplexity, Gemini)</H3>
        <P>
          Generative Engine Optimisation (GEO) is the emerging practice of making content accessible to
          AI-powered search. ChatGPT, Perplexity, and Google's AI Overviews are increasingly used for
          product research and are beginning to surface recommendations with review data. The key point:
          AI crawlers like GPTBot and PerplexityBot typically do not execute JavaScript - they read raw
          HTML. A product page where reviews are in the initial HTML is fully readable by AI crawlers; a
          page where reviews are injected by a JS widget is largely invisible to them.
        </P>
        <Callout>
          The same setup that keeps your page fast also improves visibility in AI-generated product
          recommendations. One architectural choice, three wins: performance, SEO, and AI search.
        </Callout>
        <P>
          See{" "}
          <InternalLink href="/blog/shopify-liquid-json-ld-structured-data">our full guide to JSON-LD structured data in Shopify</InternalLink>{" "}
          and{" "}
          <InternalLink href="/blog/shopify-review-stars-not-showing-google">why review stars sometimes don't show in Google</InternalLink>.
        </P>
      </Section>

      <Section id="performance-principles">
        <H2 id="performance-principles">7. Performance principles</H2>
        <P>
          The most common way social proof destroys its own conversion benefit is by degrading page
          performance. A review widget that adds 2 seconds to your LCP costs more in bounce rate than it
          gains in trust-building. The non-negotiable rules:
        </P>

        <H3>No JavaScript widgets fetching from external APIs</H3>
        <P>
          Review content loaded via an external API after page load delays LCP, causes CLS, and degrades
          INP. We have measured this repeatedly: swapping a JS-widget review app for one that renders
          reviews in the initial HTML typically cuts LCP by 1-2 seconds on mobile product pages. The
          conversion gain from social proof disappears if the page is slow enough to bounce.
        </P>

        <H3>Lazy-load all review photos</H3>
        <P>
          Any review image not visible in the initial viewport must use{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">loading="lazy"</code>. Customer photo
          galleries are a frequent cause of excessive page weight when this is skipped.
        </P>

        <H3>No synchronous review scripts</H3>
        <P>
          Any JavaScript file for review functionality must include{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">async</code> or{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">defer</code>. A synchronous script tag
          blocks HTML parsing and directly delays First Contentful Paint.
        </P>

        <H3>Pre-allocate space for dynamic sections</H3>
        <P>
          If any review element loads or reveals after initial paint, its container must have a minimum
          height set in CSS to prevent content below it from shifting. See{" "}
          <InternalLink href="/blog/review-app-slowing-shopify-store">how to audit whether your review app is slowing your Shopify store</InternalLink>{" "}
          for a step-by-step Lighthouse and DevTools process.
        </P>
      </Section>

      <Section className="bg-gray-50" id="shopify-architecture">
        <H2 id="shopify-architecture">8. Choosing the right review app setup</H2>
        <P>
          The review app you choose determines whether social proof helps or hurts conversions. The
          split we see in practice:
        </P>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200 w-1/3">Concern</th>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200 w-1/3">External JS widget app</th>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200 w-1/3">Shopify-native review app</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Render timing", "After JS + external API response", "On initial HTML response"],
                ["LCP impact", "Delayed", "None"],
                ["CLS impact", "Layout shift on injection", "No shift"],
                ["Structured data indexing", "Delayed (JS rendering queue)", "Immediate (HTML-embedded)"],
                ["Data ownership", "Third-party server", "Your Shopify store"],
                ["Rich snippets reliability", "Unreliable", "Reliable"],
              ].map(([concern, js, meta]) => (
                <tr key={concern}>
                  <td className="p-3 font-medium text-gray-700">{concern}</td>
                  <td className="p-3 text-red-700">{js}</td>
                  <td className="p-3 text-green-700">{meta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <P>
          The setup we recommend: a review app that stores reviews as{" "}
          <ExternalLink href="https://shopify.dev/docs/apps/build/metaobjects/standard-review-metaobject">
            Shopify Metaobjects
          </ExternalLink>{" "}
          <em>and</em> syncs the aggregate back to the{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">reviews.rating</code> and{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">reviews.rating_count</code> product Metafields.
          Most review apps do neither - they store reviews on external servers and serve them via JavaScript
          widgets. An app that does both steps enables server-side rendering, native Shopify filtering,
          and structured data in the initial HTML. Reviews stored as Metaobjects live in your store,
          not on a third-party server, and are yours to keep if you ever switch apps. Pair that with{" "}
          <ExternalLink href="https://shopify.dev/docs/storefronts/themes/architecture/blocks/app-blocks">App Blocks</ExternalLink>{" "}
          you drop into your theme from the editor and you have the full setup without writing a line of code.
          See{" "}
          <InternalLink href="/blog/how-shopify-product-reviews-work">how Shopify Metaobject reviews work</InternalLink>{" "}
          and{" "}
          <InternalLink href="/blog/real-cost-shopify-review-apps">the hidden cost of JS-based review apps</InternalLink>{" "}
          for the full picture.
        </P>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} stores every review as a Shopify Metaobject - server-side rendering, structured data in HTML, reviews that are yours to keep.`} />
      </Section>

      <Section id="collecting-reviews">
        <H2 id="collecting-reviews">9. Collecting the reviews that power it all</H2>
        <P>
          The best social proof strategy delivers nothing without a steady stream of real reviews. The most
          effective collection methods:
        </P>

        <H3>Post-purchase email</H3>
        <P>
          An automated review request sent 7–14 days after fulfilment is the highest-volume collection
          method for most stores. Too early (before the product arrives) gets low response; too late loses
          the post-purchase enthusiasm window. See{" "}
          <InternalLink href="/docs/collecting-reviews/post-purchase-email">how to set up post-purchase review request emails</InternalLink>.
        </P>

        <H3>On-site review submission</H3>
        <P>
          A submission form on the product page catches customers who return after purchase - common for
          products with sizing, ingredients, or specs worth re-reading. Lower volume than email but
          requires zero additional outreach.
        </P>

        <H3>Importing from other platforms</H3>
        <P>
          If switching apps or migrating from a marketplace, importing existing reviews fast-tracks initial
          volume. See{" "}
          <InternalLink href="/docs/collecting-reviews/file-import">file import</InternalLink>
          ,{" "}
          <InternalLink href="/docs/collecting-reviews/judgeme">migrating from Judge.me</InternalLink>
          , and{" "}
          <InternalLink href="/docs/collecting-reviews/loox">migrating from Loox</InternalLink>.
        </P>

        <H3>Incentivising reviews</H3>
        <P>
          Offering a discount on the next order for leaving a review works - it lifts submission volume,
          especially early in a product's life. A few rules that matter:
        </P>
        <Ul>
          <li><strong>Incentivise submissions, not ratings.</strong> Tying a reward to a 5-star rating specifically violates Google's guidelines and FTC endorsement rules. A general "leave any honest review, get 10% off" is fine.</li>
          <li><strong>Incentives attract low-effort reviews.</strong> If you offer a discount, consider requiring a photo or video to claim it - this pushes submitters toward higher-value content instead of one-liners.</li>
          <li><strong>Timing matters as much as incentive size.</strong> A request sent 3–5 days after confirmed delivery outperforms a larger discount offered at the wrong moment.</li>
        </Ul>

        <Callout>
          Social proof compounds over time. A store that consistently collects reviews accumulates a trust
          advantage that competitors cannot replicate quickly. The sooner you start, the wider that
          advantage becomes.
        </Callout>

        <ArticleAuthor />
        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Further reading</p>
          <div className="space-y-1.5 text-sm">
            <div><ExternalLink href="https://shopify.dev/docs/apps/build/metaobjects/standard-review-metaobject">Shopify standard product review Metaobject</ExternalLink></div>
            <div><ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/product">Google Product structured data documentation</ExternalLink></div>
            <div><ExternalLink href="https://web.dev/articles/vitals">Core Web Vitals - web.dev</ExternalLink></div>
            <div><ExternalLink href="https://shopify.dev/docs/storefronts/themes/architecture/blocks/app-blocks">Shopify App Blocks documentation</ExternalLink></div>
          </div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 mt-5">Detailed guides by page type</p>
          <div className="space-y-1.5 text-sm">
            <div><InternalLink href="/blog/social-proof-shopify-product-pages">Social proof on Shopify product pages →</InternalLink></div>
            <div><InternalLink href="/blog/social-proof-shopify-collection-pages">Social proof on Shopify collection pages →</InternalLink></div>
            <div><InternalLink href="/blog/social-proof-shopify-homepage">Social proof on the Shopify homepage →</InternalLink></div>
            <div><InternalLink href="/blog/social-proof-shopify-landing-pages">Social proof on Shopify landing pages →</InternalLink></div>
          </div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 mt-5">Related articles</p>
          <div className="space-y-1.5 text-sm">
            <div><InternalLink href="/blog/how-shopify-product-reviews-work">How Shopify Metaobject reviews work →</InternalLink></div>
            <div><InternalLink href="/blog/real-cost-shopify-review-apps">The hidden cost of Shopify review apps →</InternalLink></div>
            <div><InternalLink href="/blog/shopify-liquid-json-ld-structured-data">JSON-LD structured data in Shopify Liquid →</InternalLink></div>
            <div><InternalLink href="/blog/shopify-review-stars-not-showing-google">Fix missing review stars in Google →</InternalLink></div>
            <div><InternalLink href="/blog/review-app-slowing-shopify-store">Is your review app slowing your store? →</InternalLink></div>
            <div><InternalLink href="/">About {process.env.NEXT_PUBLIC_APP_NAME} →</InternalLink></div>
          </div>
          <BlogNav className="mt-6" />
        </div>
      </Section>

      <BlogCta />

      <BlogFaqs faqs={faqs} />
    </main>
  )
}
