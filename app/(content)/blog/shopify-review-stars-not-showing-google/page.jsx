import { Section, ExternalLink, InternalLink, CodeBlock, Callout, H2, H3, P, Ul, TableOfContents, BlogNav, BlogCta, ArticleJsonLd, InlineCta, ArticleAuthor, BlogFaqs } from "../../../../components/blog"

export const metadata = {
  title: "Shopify Review Stars Missing from Google? Causes and Fixes",
  shortTitle: "Shopify review stars not showing in Google",
  description: "Missing star ratings in Google Search results? This guide explains exactly why review rich snippets fail on Shopify stores - and how to fix it with server-side structured data.",
  alternates: { canonical: "/blog/shopify-review-stars-not-showing-google" },
  openGraph: { type: "article", publishedTime: "2026-04-14", images: ["https://assets.reviewsonmetaobjects.com/the-shopify-reviews-blog.jpg"] },
  slug: "shopify-review-stars-not-showing-google",
  date: "2026-04-14",
}

const tocItems = [
  { id: "what-are-rich-snippets", label: "What review rich snippets are" },
  { id: "how-google-decides", label: "How Google decides to show star ratings" },
  { id: "two-failure-modes", label: "The failure modes" },
  { id: "audit-your-store", label: "How to audit your store right now" },
  { id: "the-fix", label: "The fix: server-side structured data" },
  { id: "individual-review-markup", label: "Individual Review markup: the missing piece" },
  { id: "liquid-implementation", label: "What the structured data looks like" },
  { id: "after-the-fix", label: "After the fix: what to expect" },
]

const faqs = [
  {
    question: "Why are my Shopify review stars not showing in Google?",
    answer: "The most common cause is that your structured data is injected by JavaScript after the page loads, making it unreliable for Googlebot to read at crawl time. Other causes include missing or malformed AggregateRating schema, or review content that does not match the structured data on the page.",
  },
  {
    question: "How long does it take for review stars to appear in Google after fixing structured data?",
    answer: "After deploying correct server-side structured data, Google typically picks it up within one to four weeks depending on how frequently your pages are crawled. You can speed this up by submitting URLs for re-indexing via Google Search Console. Check the Rich Results Test tool first to confirm your markup is valid.",
  },
  {
    question: "Does Shopify automatically add structured data for reviews?",
    answer: "Not automatically. Some Shopify themes include basic Product schema, but AggregateRating markup - the specific structured data needed for star ratings in Google - must be added explicitly. Apps that store reviews in Shopify Metaobjects can output this data server-side via Liquid.",
  },
  {
    question: "Will switching to a different review app fix my missing stars in Google?",
    answer: "Only if the new app outputs AggregateRating structured data server-side in your HTML, not via a JavaScript widget. Check by viewing your page source and searching for 'aggregateRating' - if it is not in the raw HTML, Google cannot reliably read it at crawl time.",
  },
  {
    question: "How do I validate my Shopify structured data for review stars?",
    answer: "Use Google's Rich Results Test at search.google.com/test/rich-results - paste your product page URL and it will show whether your AggregateRating markup is detected and valid. If valid markup is detected but stars still do not appear in search, check Search Console's Rich Results report for manual actions or eligibility issues. Always test with a product that has at least one published review.",
  },
  {
    question: "What is the difference between AggregateRating and Review schema for Shopify?",
    answer: "AggregateRating is a summary - it tells Google the overall average score and total review count for a product. Review schema represents individual reviews, each with its own rating, author, and body text. Google requires AggregateRating for the star rating display in search results. Including individual Review schema as well strengthens the structured data signal and can improve rich result eligibility.",
  },
  {
    question: "Do Google AI Overviews show star ratings and review data from Shopify stores?",
    answer: "Google AI Overviews can surface review information when generating product-related answers, but they depend on structured data being present in the raw HTML at crawl time. Stores with server-side AggregateRating and Review markup are more likely to have their review data included in AI Overview responses. JavaScript-injected structured data is not reliably processed by the AI Overview system.",
  },
  {
    question: "Can review stars differ between product variants in Google Search?",
    answer: "Google currently shows one AggregateRating per product URL, not per variant. If your variants share a URL (the standard Shopify approach), they share one rating. If variants have separate URLs, each can have its own structured data. The standard Shopify reviews.rating Metafield is product-level, not variant-level, which aligns with how Google processes the schema.",
  },
]

export default function ShopifyReviewStarsNotShowingGooglePage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <ArticleJsonLd title={metadata.title} description={metadata.description} datePublished={metadata.date} slug={metadata.slug} />

      <section className="pt-24 pb-12 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <BlogNav />
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-4">SEO debugging</p>
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight mb-6 text-gray-900">
            Why your Shopify product review stars don't show in Google Search
          </h1>
          <P>
            Star ratings in Google Search results - the yellow stars visible directly under a product listing -
            dramatically increase click-through rates. If your store has reviews but no stars in Google, the problem
            is almost always in how your review data reaches (or fails to reach) Googlebot. This article walks
            through the exact failure modes and how to fix them.
          </P>
          <P className="text-gray-500 text-sm sm:text-base">
            Reading time: ~7 minutes.
          </P>
          <TableOfContents items={tocItems} />
        </div>
      </section>

      <Section id="what-are-rich-snippets">
        <H2 id="what-are-rich-snippets">1. What review rich snippets are</H2>
        <P>
          <ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/product">
            Product rich results
          </ExternalLink>{" "}
          are enhanced search listings that show star ratings, review counts, price, and availability directly in the
          SERP - before a user ever clicks your link. They are powered by{" "}
          <ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data">
            structured data
          </ExternalLink>{" "}
          embedded in your page: a machine-readable description of your product and its aggregate review score.
        </P>
        <P>
          Google does not invent this data. It reads it directly from your HTML - specifically from a{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">&lt;script type="application/ld+json"&gt;</code> block
          containing{" "}
          <ExternalLink href="https://schema.org/Product">schema.org/Product</ExternalLink> markup with a nested{" "}
          <ExternalLink href="https://schema.org/AggregateRating">AggregateRating</ExternalLink> property. If that
          markup is absent, malformed, or not visible at crawl time, no stars appear.
        </P>
        <Callout>
          Rich snippets are not guaranteed - Google decides whether to show them based on data quality, page trust,
          and policy eligibility. But having correct structured data is the prerequisite. Without it, they cannot
          appear at all.
        </Callout>
      </Section>

      <Section className="bg-gray-50" id="how-google-decides">
        <H2 id="how-google-decides">2. How Google decides to show star ratings</H2>
        <P>
          Google's{" "}
          <ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/product#product-rich-result-guidelines">
            Product rich result guidelines
          </ExternalLink>{" "}
          require the following to be true before stars can appear:
        </P>
        <Ul>
          <li>
            The page contains a valid <code className="bg-gray-200 px-1 rounded text-sm">Product</code> schema with
            an <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> property that includes both{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">ratingValue</code> and{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">reviewCount</code> (or{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">ratingCount</code>)
          </li>
          <li>The <code className="bg-gray-200 px-1 rounded text-sm">ratingValue</code> must be within the stated <code className="bg-gray-200 px-1 rounded text-sm">bestRating</code> / <code className="bg-gray-200 px-1 rounded text-sm">worstRating</code> range</li>
          <li>The structured data is readable by Googlebot at crawl time - not injected by client-side JavaScript after the initial HTML is parsed</li>
          <li>The page content visibly matches the structured data (Google cross-references both)</li>
        </Ul>
        <P>
          The third point is where the vast majority of Shopify stores fail.
        </P>
      </Section>

      <Section id="two-failure-modes">
        <H2 id="two-failure-modes">3. The failure modes</H2>

        <H3>Failure mode 1: No structured data at all</H3>
        <P>
          Many Shopify themes ship without any <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code>{" "}
          markup. The theme renders a visual star rating on the page, but outputs no machine-readable equivalent. From
          Google's perspective, the stars do not exist - it sees text or SVG icons, not data.
        </P>
        <P>
          This is common with themes that pre-date Online Store 2.0, or themes that have a built-in "review section"
          powered by a custom app that does not emit structured data.
        </P>

        <H3>Failure mode 2: Structured data rendered by JavaScript</H3>
        <P>
          Most established review apps (Loox, Judge.me, Stamped, Yotpo, reviews.io) do output{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> structured data - so the data
          is technically there. The problem is timing and reliability. These apps inject a JavaScript widget that
          fetches review data from an external server after the HTML has loaded. The structured data is generated and
          injected into the DOM by that JavaScript.
        </P>
        <P>
          Googlebot does process JavaScript - but{" "}
          <ExternalLink href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics">
            not always, not immediately, and not reliably for third-party origins.
          </ExternalLink>{" "}
          The rendering queue for JavaScript pages is separate from the HTML crawl queue. In practice:
        </P>
        <Ul>
          <li>New and recently updated pages may sit in the JS rendering queue for days before Googlebot processes their JavaScript</li>
          <li>Requests to third-party CDN domains (the review widget's API endpoint) may be blocked or rate-limited during Googlebot's render</li>
          <li>Even when JS rendering succeeds, the structured data lands in Google's index later than your product's other content</li>
          <li>Any gap in structured data visibility means a gap in rich snippet eligibility</li>
        </Ul>

        <H3>Failure mode 3: No individual Review markup</H3>
        <P>
          This is the failure almost no one talks about. Google's Product schema supports not just{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> but also a{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">review</code> array containing individual{" "}
          <ExternalLink href="https://schema.org/Review">Review</ExternalLink> objects - each with author, date,
          title, body, and individual star rating. Virtually no JS-based review app outputs this.
        </P>
        <P>
          The reason is structural: the individual review data lives on the vendor's servers. Injecting dozens of
          full review objects via JavaScript on every page load is impractical from a payload and performance
          standpoint. So apps skip it entirely and only output the aggregate.
        </P>
        <Callout>
          Google Search Console's URL Inspection tool will often show "Page cannot be rendered" or show the page
          without review data in the rendered HTML - even when the review widget appears fine in a real browser. This
          is the tell for failure mode 2. For failure mode 3, the Rich Results Test will show a valid{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">aggregateRating</code> but no{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">review</code> array.
        </Callout>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} renders structured data server-side in Liquid - your AggregateRating is in the initial HTML, not injected by JavaScript after page load.`} />
      </Section>

      <Section className="bg-gray-50" id="audit-your-store">
        <H2 id="audit-your-store">4. How to audit your store right now</H2>

        <H3>Step 1: Google's Rich Results Test</H3>
        <P>
          Go to{" "}
          <ExternalLink href="https://search.google.com/test/rich-results">
            search.google.com/test/rich-results
          </ExternalLink>
          , enter a product URL, and run the test. Look for a "Products" result. Check for two things: whether{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> is present, and whether a{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">review</code> array is present. Most stores using
          JS-based apps will have <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> but
          no individual reviews.
        </P>
        <P>
          To see what a passing result looks like, run the test against a product page on the{" "}
          <ExternalLink href="https://reviewsonmetaobjects.myshopify.com/products/the-complete-snowboard">
            demo store
          </ExternalLink>{" "}
          (password: demo) - it outputs both <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> and individual{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">Review</code> items server-side.
        </P>
        <P>
          Run the test both with and without JavaScript. If{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> appears in the JS-rendered
          version but not in the raw HTML version, you have failure mode 2. If neither version shows a{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">review</code> array, you have failure mode 3.
        </P>

        <H3>Step 2: Google Search Console URL Inspection</H3>
        <P>
          In{" "}
          <ExternalLink href="https://search.google.com/search-console">Google Search Console</ExternalLink>, use
          "URL Inspection" on a product page and click "View crawled page". Switch to the "More info" tab and check
          "Detected structured data". Look for both{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">Product → aggregateRating</code> and{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">Product → review</code>. If the latter is absent,
          Google has no individual review content to work with.
        </P>

        <H3>Step 3: View page source</H3>
        <P>
          In your browser, go to a product page and press <code className="bg-gray-200 px-1 rounded text-sm">Ctrl+U</code> (or{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">Cmd+U</code>) to view the raw HTML source - not the
          DevTools DOM which reflects JavaScript execution. Search for{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> and then for{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">"@type": "Review"</code>. If neither appears in the
          raw source, everything is being generated by JavaScript. If only{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> is in the raw source but no
          individual reviews, you are halfway there.
        </P>
      </Section>

      <Section id="the-fix">
        <H2 id="the-fix">5. The fix: server-side structured data</H2>
        <P>
          The reliable fix is to output both <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code>{" "}
          and individual <code className="bg-gray-200 px-1 rounded text-sm">Review</code> items server-side -
          directly in the HTML that Shopify sends on the first byte - rather than generating them in a JavaScript widget.
        </P>
        <P>
          This is only possible when your review data is stored in Shopify itself, accessible to Liquid during
          the server-side render. Shopify's standard product review Metaobjects provide exactly this: the{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">reviews.rating</code> and{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">reviews.rating_count</code> Metafields feed{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code>, and the individual{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">product_review</code> Metaobjects can be looped over
          to output each <code className="bg-gray-200 px-1 rounded text-sm">Review</code> item - all without any
          API call.
        </P>
        <P>
          When you use a review app that stores data on third-party servers, neither path is available. The aggregate
          rating does not exist inside Shopify, and neither do the individual review records. Liquid cannot access
          what is not there. The only option is the JavaScript widget, which handles the aggregate at best and skips
          individual reviews entirely.
        </P>
      </Section>

      <Section className="bg-gray-50" id="individual-review-markup">
        <H2 id="individual-review-markup">6. Individual Review markup: the missing piece</H2>
        <P>
          Once <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> is solid, adding individual{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">Review</code> objects to your Product schema is the
          next meaningful upgrade. Google can use this data for richer result displays, and it strengthens the
          overall structured data signal in several ways:
        </P>
        <Ul>
          <li>
            <strong>Long-tail search visibility.</strong> Individual review bodies contain natural language that
            matches the way real buyers search. "Product name durable" or "Product name runs small" are phrases
            that appear in review text - and if that text is in your structured data, Googlebot reads it on first
            crawl.
          </li>
          <li>
            <strong>Data quality signal.</strong> Providing full individual reviews alongside an aggregate
            demonstrates genuine user-generated content, which can improve trust and structured data eligibility
            over time.
          </li>
          <li>
            <strong>Google's own recommendation.</strong>{" "}
            <ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/product">
              Google's Product structured data documentation
            </ExternalLink>{" "}
            explicitly supports nesting <code className="bg-gray-100 px-1 rounded text-sm">Review</code> items
            alongside <code className="bg-gray-100 px-1 rounded text-sm">aggregateRating</code> - the individual
            reviews add depth to the aggregate.
          </li>
        </Ul>
        <P>
          The practical limit: you do not need to mark up every review if you have hundreds. A representative
          sample of 5-10 recent reviews is sufficient and keeps page weight manageable. Google's requirement is
          that marked-up content matches what is visibly rendered on the page.
        </P>
        <P>
          This is where the Metaobject architecture has a structural advantage. Because individual review records
          live inside Shopify as standard <code className="bg-gray-200 px-1 rounded text-sm">product_review</code>{" "}
          Metaobjects, Liquid can loop over them directly at render time - no external API call, no JavaScript
          injection. Each review's fields (<code className="bg-gray-200 px-1 rounded text-sm">title</code>,{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">body</code>,{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">rating</code>,{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">author_display_name</code>,{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">submitted_at</code>) are available server-side.
          A JS-based app storing reviews externally cannot do this - the data simply is not accessible to Liquid.
        </P>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} outputs individual Review structured data for each product server-side - the markup most review apps skip entirely.`} />
      </Section>

      <Section id="liquid-implementation">
        <H2 id="liquid-implementation">7. What the structured data looks like</H2>
        <P>
          When review data is stored as Shopify Metaobjects, this is what Googlebot reads in the raw HTML of a
          product page - no JavaScript execution, no external requests, present on the very first crawl:
        </P>
        <CodeBlock>{`
{%- if product.metafields.reviews.rating.value != blank -%}
{%- assign product_reviews = product.metaobjects['product_review'].values -%}
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": {{ product.title | json }},
  "image": {{ product.featured_image | image_url: width: 800 | prepend: 'https:' | json }},
  "description": {{ product.description | strip_html | json }},
  "sku": {{ product.selected_or_first_available_variant.sku | json }},
  "offers": {
    "@type": "Offer",
    "priceCurrency": {{ cart.currency.iso_code | json }},
    "price": {{ product.selected_or_first_available_variant.price | divided_by: 100.0 }},
    "availability": "https://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{ product.metafields.reviews.rating.value }}",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "{{ product.metafields.reviews.rating_count.value }}"
  }
  {%- if product_reviews.size > 0 -%}
  ,"review": [
    {%- for review in product_reviews limit: 5 -%}
    {
      "@type": "Review",
      "name": {{ review['title'] | json }},
      "reviewBody": {{ review['body'] | json }},
      "datePublished": "{{ review['submitted_at'] | date: '%Y-%m-%d' }}",
      "author": { "@type": "Person", "name": {{ review['author_display_name'] | json }} },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "{{ review['rating'].value }}",
        "bestRating": "5",
        "worstRating": "1"
      }
    }{% unless forloop.last %},{% endunless %}
    {%- endfor -%}
  ]
  {%- endif -%}
}
</script>
{%- endif -%}
        `}</CodeBlock>
        <P>
          The aggregate comes from the <code className="bg-gray-200 px-1 rounded text-sm">reviews.rating</code> and{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">reviews.rating_count</code> product Metafields.
          The individual reviews are looped directly from the{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">product_review</code> Metaobjects linked to the
          product - limited to 5 to keep the payload lean. Both are available to Liquid at render time because
          they live inside Shopify, not on a third-party server.
        </P>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} handles all of this automatically - aggregateRating, individual Review markup, Metaobject storage, and server-side rendering included out of the box.`} />
      </Section>

      <Section id="after-the-fix">
        <H2 id="after-the-fix">8. After the fix: what to expect</H2>
        <P>
          Once server-side structured data is in place, the timeline to seeing results typically looks like:
        </P>
        <Ul>
          <li><strong>Days 1–3:</strong> Google re-crawls the page and picks up both <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> and individual <code className="bg-gray-200 px-1 rounded text-sm">Review</code> items in the first HTML pass - no rendering queue</li>
          <li><strong>Days 3–14:</strong> Rich Results Test and Search Console URL Inspection start reporting the full Product schema as detected, including the review array</li>
          <li><strong>Weeks 2–6:</strong> Star ratings begin appearing in search results for pages that Google has re-indexed</li>
          <li><strong>Ongoing:</strong> Individual review content feeds long-tail query visibility as Google indexes the review text alongside your product pages</li>
        </Ul>
        <P>
          The timeline depends on how frequently Google crawls your store. High-traffic stores with fresh content are
          re-crawled more often. You can request re-indexing for individual URLs via Google Search Console's URL
          Inspection tool to speed this up.
        </P>
        <P>
          The star ratings are the visible win - typically a 10–30% increase in organic click-through rate on
          product listings. The individual review markup works more quietly in the background, strengthening
          long-tail rankings for query patterns that match real customer language in your review text.
        </P>

        <ArticleAuthor />
        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Further reading</p>
          <div className="space-y-1.5 text-sm">
            <div><ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/product">Google Product structured data spec</ExternalLink></div>
            <div><ExternalLink href="https://search.google.com/test/rich-results">Rich Results Test tool</ExternalLink></div>
            <div><ExternalLink href="https://schema.org/AggregateRating">schema.org/AggregateRating</ExternalLink></div>
            <div><ExternalLink href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics">Google JavaScript SEO basics</ExternalLink></div>
            <div><ExternalLink href="https://shopify.dev/docs/apps/build/metaobjects/standard-review-metaobject">Shopify standard product review Metaobject</ExternalLink></div>
          </div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 mt-5">Related articles</p>
          <div className="space-y-1.5 text-sm">
            <div><InternalLink href="/blog/how-shopify-product-reviews-work">How Shopify product reviews work →</InternalLink></div>
            <div><InternalLink href="/blog/shopify-liquid-json-ld-structured-data">Full JSON-LD guide for Shopify →</InternalLink></div>
            <div><InternalLink href="/blog/shopify-social-proof-best-practices">Shopify social proof best practices →</InternalLink></div>
            <div><InternalLink href="/blog/social-proof-shopify-product-pages">Social proof on Shopify product pages →</InternalLink></div>
            <div><InternalLink href="/">About {process.env.NEXT_PUBLIC_APP_NAME} →</InternalLink></div>
            <div><ExternalLink href="https://reviewsonmetaobjects.myshopify.com/products/the-complete-snowboard">Demo store - test structured data live (password: demo) →</ExternalLink></div>
          </div>
          <BlogNav className="mt-6" />
        </div>
      </Section>

      <BlogFaqs faqs={faqs} />

      <BlogCta />
    </main>
  )
}
