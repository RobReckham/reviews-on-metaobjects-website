import { Section, ExternalLink, InternalLink, CodeBlock, Callout, H2, H3, P, Ul, TableOfContents, BlogNav, BlogCta, ArticleJsonLd, InlineCta, ArticleAuthor } from "../../../../components/blog"

export const metadata = {
  title: "How Shopify Product Reviews Work: Metaobjects, Liquid Rendering, and SEO",
  shortTitle: "How Shopify product reviews work",
  description: "A technical deep-dive into Shopify's standard product review Metaobject - server-side Liquid rendering, Core Web Vitals, JSON-LD structured data, and data ownership explained.",
  alternates: { canonical: "/blog/how-shopify-product-reviews-work" },
  openGraph: { type: "article", publishedTime: "2026-05-01" },
  slug: "how-shopify-product-reviews-work",
  date: "2026-05-01",
}

const tocItems = [
  { id: "how-js-review-apps-work", label: "How most review apps actually work" },
  { id: "what-are-metaobjects", label: "What are Shopify Metaobjects?" },
  { id: "standard-review-metaobject", label: "The standard product review Metaobject" },
  { id: "core-web-vitals", label: "Core Web Vitals: what changes with server-side rendering" },
  { id: "seo-structured-data", label: "SEO and structured data" },
  { id: "liquid-rendering", label: "Rendering reviews with Liquid" },
  { id: "data-ownership", label: "Data ownership and portability" },
  { id: "syndication", label: "Syndication to Shop, Google, and Meta" },
  { id: "summary", label: "Summary" },
]

export default function HowShopifyProductReviewsWorkPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <ArticleJsonLd title={metadata.title} description={metadata.description} datePublished={metadata.date} slug={metadata.slug} />
      <section className="pt-24 pb-12 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <BlogNav />
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-4">Technical deep-dive</p>
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight mb-6 text-gray-900">
            How Shopify product reviews work: Metaobjects, server-side rendering, and SEO
          </h1>
          <P>
            Most review apps store your data on their own servers and inject it back into your storefront via a JavaScript
            widget. This architectural choice - convenient for the vendor - has measurable consequences for your page
            speed, your search rankings, and your ability to own your own content. This article explains exactly what
            Shopify's standard product review Metaobject is, how it works under the hood, and why it is the technically
            superior approach for any store that cares about performance and SEO.
          </P>
          <P className="text-gray-500 text-sm sm:text-base">
            Audience: developers, technical merchants, Shopify agencies. Reading time: ~10 minutes.
          </P>
          <TableOfContents items={tocItems} />
        </div>
      </section>

      {/* 1. How JS review apps work */}
      <Section id="how-js-review-apps-work">
        <H2 id="how-js-review-apps-work">1. How most review apps actually work</H2>
        <P>
          The majority of Shopify review apps (Loox, Judge.me, Stamped, Yotpo, reviews.io) share the same fundamental
          architecture: reviews are stored in the vendor's own database, and a JavaScript snippet is injected into your
          theme to fetch and render that data at runtime in the browser.
        </P>
        <P>The typical request chain looks like this:</P>
        <CodeBlock>{`
Browser requests your product page
→ Shopify renders HTML (Liquid) and sends it
→ Browser parses HTML, discovers <script> tag from review app
→ Browser downloads review app JS bundle (often 50–200 kB)
→ JS executes, fires API request to vendor's CDN/server
→ Vendor server responds with review JSON
→ JS parses JSON, generates DOM nodes, injects into page
→ Review content becomes visible
        `}</CodeBlock>
        <P>
          This chain adds at least two round-trips (the JS bundle and the API request) after the initial HTML is
          delivered. On a median mobile connection, each round-trip to an external origin typically costs 300–600 ms.
          Every one of these steps happens <em>after</em> your Largest Contentful Paint candidate has already been
          determined. If that candidate is your review section (a common layout pattern), your LCP score suffers
          directly.
        </P>
        <Callout>
          <strong>The core problem is not the JavaScript itself - it is the external data dependency.</strong> Even with
          a perfectly optimised JS bundle, you cannot render review content until the vendor's API has responded. That
          server is not Shopify. You have no control over its latency, availability, or caching behaviour.
        </Callout>
        <P>
          See Google's{" "}
          <ExternalLink href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics">
            JavaScript SEO basics
          </ExternalLink>{" "}
          for how Googlebot handles deferred JS-rendered content, and{" "}
          <ExternalLink href="https://web.dev/articles/lcp">
            web.dev on Largest Contentful Paint
          </ExternalLink>{" "}
          for the full technical definition of LCP.
        </P>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} stores your reviews directly in Shopify - no external API call, no JavaScript widget injecting content after page load.`} />
      </Section>

      {/* 2. What are metaobjects */}
      <Section className="bg-gray-50" id="what-are-metaobjects">
        <H2 id="what-are-metaobjects">2. What are Shopify Metaobjects?</H2>
        <P>
          <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metaobjects">
            Metaobjects
          </ExternalLink>{" "}
          are Shopify's native structured custom data layer. They let you define your own object types - with typed
          fields - and store instances of those types directly inside your Shopify store. Think of them as
          lightweight, schema-validated database records that live inside Shopify's infrastructure, not on a
          third-party server.
        </P>
        <P>Each Metaobject type is defined by a <strong>definition</strong> that specifies:</P>
        <Ul>
          <li>A unique <code className="bg-gray-200 px-1 rounded text-sm">type</code> identifier (e.g. <code className="bg-gray-200 px-1 rounded text-sm">shopify--product-review</code>)</li>
          <li>Named <strong>fields</strong> with strict types: <code className="bg-gray-200 px-1 rounded text-sm">single_line_text_field</code>, <code className="bg-gray-200 px-1 rounded text-sm">rating</code>, <code className="bg-gray-200 px-1 rounded text-sm">product_reference</code>, <code className="bg-gray-200 px-1 rounded text-sm">date_time</code>, etc.</li>
          <li>Access controls (storefront-readable vs. admin-only)</li>
          <li>Display name and description for the Shopify Admin UI</li>
        </Ul>
        <P>
          Metaobject instances are queryable in three ways: via the{" "}
          <ExternalLink href="https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject">
            Admin GraphQL API
          </ExternalLink>
          , via the{" "}
          <ExternalLink href="https://shopify.dev/docs/api/storefront/latest/objects/Metaobject">
            Storefront GraphQL API
          </ExternalLink>
          , and - most importantly for server-side theme rendering -{" "}
          <strong>directly in Liquid</strong> via the{" "}
          <ExternalLink href="https://shopify.dev/docs/api/liquid/objects/metaobject">
            <code>metaobject</code> Liquid object
          </ExternalLink>
          .
        </P>
        <P>
          Because Metaobjects live inside Shopify, they benefit from Shopify's own infrastructure: globally
          distributed CDN, automatic caching, and zero external network dependency at render time. When Liquid
          accesses a Metaobject, the data is resolved server-side before the HTML response leaves Shopify's edge
          network.
        </P>
        <Callout>
          Metaobjects were{" "}
          <ExternalLink href="https://changelog.shopify.com/posts/metaobjects-ga">
            released as generally available in 2023
          </ExternalLink>{" "}
          and are now a first-class feature of Online Store 2.0. They are not an app-specific data layer - they are
          part of the Shopify platform itself.
        </Callout>
      </Section>

      {/* 3. Standard review metaobject */}
      <Section id="standard-review-metaobject">
        <H2 id="standard-review-metaobject">3. The standard product review Metaobject</H2>
        <P>
          Shopify maintains an <strong>official, standardised Metaobject definition</strong> specifically for product
          reviews:{" "}
          <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-standard-definitions#product-rating-count">
            the standard product review Metaobject
          </ExternalLink>
          . Its type handle is <code className="bg-gray-200 px-1 rounded text-sm">shopify--product-review</code>.
        </P>
        <P>The definition ships with the following standard fields:</P>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Field key</th>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Type</th>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["rating", "rating", "Star rating (decimal, typically 1–5)"],
                ["body", "multi_line_text_field", "The review text body"],
                ["author", "single_line_text_field", "Display name of the reviewer"],
                ["date", "date_time", "Submission timestamp"],
                ["product", "product_reference", "Reference to the reviewed product"],
                ["status", "single_line_text_field", "Moderation state (e.g. published)"],
              ].map(([key, type, desc]) => (
                <tr key={key} className="hover:bg-gray-50">
                  <td className="p-3 font-mono text-xs text-blue-800">{key}</td>
                  <td className="p-3 font-mono text-xs text-gray-500">{type}</td>
                  <td className="p-3 text-gray-700">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <P>
          Products reference their reviews via two standard Metafields (namespace <code className="bg-gray-200 px-1 rounded text-sm">reviews</code>):
        </P>
        <Ul>
          <li>
            <code className="bg-gray-200 px-1 rounded text-sm">reviews.rating</code> - a <code className="bg-gray-200 px-1 rounded text-sm">rating</code>-type
            Metafield storing the pre-computed aggregate star rating
          </li>
          <li>
            <code className="bg-gray-200 px-1 rounded text-sm">reviews.rating_count</code> - an integer Metafield
            storing the total number of reviews
          </li>
        </Ul>
        <P>
          Using a standard definition (rather than a custom one) is important because Shopify and third-party platforms
          recognise the <code className="bg-gray-200 px-1 rounded text-sm">shopify--product-review</code> type by convention. This is what
          enables the native syndication behaviour described in section 8.
        </P>
        <Callout>
          The standard definition is installed automatically when you install a compliant review app. You can inspect
          it under <strong>Settings → Custom data → Metaobjects</strong> in your Shopify Admin.
        </Callout>
      </Section>

      {/* 4. Core Web Vitals */}
      <Section className="bg-gray-50" id="core-web-vitals">
        <H2 id="core-web-vitals">4. Core Web Vitals: what changes with server-side rendering</H2>
        <P>
          Google's{" "}
          <ExternalLink href="https://web.dev/articles/vitals">Core Web Vitals</ExternalLink> (CWV) are page
          experience signals that directly influence search rankings. Three metrics are most affected by review
          rendering strategy:
        </P>

        <H3>Largest Contentful Paint (LCP)</H3>
        <P>
          <ExternalLink href="https://web.dev/articles/lcp">LCP</ExternalLink> measures how long it takes for the
          largest visible element in the viewport to render. On product pages, the review section frequently qualifies
          as the LCP element because it sits in the above-the-fold area on desktop, or because it is large enough
          (many review cards) to outweigh the product image.
        </P>
        <P>
          With a JS widget, the LCP element is not in the initial HTML - it is injected after the script fetches data
          from an external server. The browser cannot paint it until both the JS bundle and the API response have
          arrived. This typically delays LCP by 1–4 seconds on real-world connections.
        </P>
        <P>
          With Liquid/Metaobject rendering, review content is in the HTML on the first byte. LCP can be resolved as
          soon as the browser parses and paints that HTML - no script execution required.
        </P>

        <H3>Cumulative Layout Shift (CLS)</H3>
        <P>
          <ExternalLink href="https://web.dev/articles/cls">CLS</ExternalLink> measures unexpected layout shifts.
          When a JS widget eventually injects review cards into the DOM, it pushes content below it downward. This is
          a direct source of layout shift. Unless the app reserves exact pixel-perfect space before content loads
          (uncommon and brittle), CLS will be impacted.
        </P>
        <P>
          Server-side rendered reviews occupy the correct space from initial paint. There is no insertion event, and
          therefore no shift.
        </P>

        <H3>Interaction to Next Paint (INP)</H3>
        <P>
          <ExternalLink href="https://web.dev/articles/inp">INP</ExternalLink> replaced First Input Delay as a CWV
          metric in March 2024. It measures the full responsiveness delay of user interactions. JavaScript-heavy review
          widgets add to the main thread's task queue during page initialisation. Long tasks from third-party scripts
          are a known source of poor INP scores. Server-rendered reviews involve no such background JS execution.
        </P>

        <Callout>
          Lighthouse and Chrome User Experience Report (CrUX) data are how Google measures CWV in practice. A store
          moving from a JS-based review widget to a server-side Metaobject implementation typically sees meaningful
          improvements in all three CWV metrics.{" "}
          <ExternalLink href="https://developers.google.com/search/docs/appearance/core-web-vitals">
            Read Google's guidance on CWV and ranking.
          </ExternalLink>
        </Callout>
      </Section>

      {/* 5. SEO and structured data */}
      <Section id="seo-structured-data">
        <H2 id="seo-structured-data">5. SEO and structured data</H2>
        <P>
          Product rich snippets in Google Search - the star ratings that appear directly in organic results - require{" "}
          <ExternalLink href="https://schema.org/AggregateRating">
            <code>schema.org/AggregateRating</code>
          </ExternalLink>{" "}
          markup to be present in the page's HTML or in a{" "}
          <ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data">
            JSON-LD script block
          </ExternalLink>
          . Shopify themes can output this in Liquid from the product's aggregate rating Metafield.
        </P>

        <H3>Why JavaScript-rendered structured data is unreliable</H3>
        <P>
          Google states explicitly that it{" "}
          <ExternalLink href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics#understand-your-javascript-usage">
            can process JavaScript
          </ExternalLink>
          , but the practical reality is more nuanced:
        </P>
        <Ul>
          <li>
            Googlebot queues JavaScript rendering separately from HTML crawling - often with a delay of days.
          </li>
          <li>
            Structured data injected by JavaScript is processed in a second rendering wave, meaning there is a window
            where your product page has no rich snippet eligibility.
          </li>
          <li>
            Crawl budget is finite. JS-heavy pages consume more crawl budget per URL, reducing the depth of indexing
            for large catalogues.
          </li>
          <li>
            Third-party CDN domains (review widget API endpoints) may be rate-limited or outright blocked by
            Googlebot, causing structured data to never render at all during crawling.
          </li>
        </Ul>

        <H3>What server-side structured data looks like</H3>
        <P>
          When reviews are stored in Metaobjects, Liquid can output a JSON-LD block directly in the{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">&lt;head&gt;</code> on every page render:
        </P>
        <CodeBlock>{`
{%- if product.metafields.reviews.rating.value != blank -%}
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": {{ product.title | json }},
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{ product.metafields.reviews.rating.value }}",
    "reviewCount": "{{ product.metafields.reviews.rating_count.value }}"
  }
}
</script>
{%- endif -%}
        `}</CodeBlock>
        <P>
          This JSON-LD block is part of the initial HTML response - Googlebot reads it on the first crawl, in the
          same rendering pass as product title and price. No JavaScript execution required.
        </P>
        <P>
          See{" "}
          <ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/product">
            Google's Product structured data documentation
          </ExternalLink>{" "}
          for the full specification and review requirements for rich snippet eligibility.
        </P>

        <H3>Individual review schema</H3>
        <P>
          Beyond aggregate ratings, Google can display individual review snippets from{" "}
          <ExternalLink href="https://schema.org/Review">
            <code>schema.org/Review</code>
          </ExternalLink>{" "}
          markup. Iterating over Metaobject review references in Liquid and outputting per-review JSON-LD is
          straightforward and produces HTML-embedded structured data that Google indexes immediately on first crawl.
        </P>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} outputs AggregateRating and Review JSON-LD server-side on every product page - Googlebot reads it on first crawl, no JavaScript required.`} />
      </Section>

      {/* 6. Liquid rendering */}
      <Section className="bg-gray-50" id="liquid-rendering">
        <H2 id="liquid-rendering">6. Rendering reviews with Liquid</H2>
        <P>
          Shopify's templating language{" "}
          <ExternalLink href="https://shopify.dev/docs/api/liquid">Liquid</ExternalLink> has native support for
          accessing Metaobjects via the{" "}
          <ExternalLink href="https://shopify.dev/docs/api/liquid/objects/metaobject">
            <code>metaobject</code> object
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink href="https://shopify.dev/docs/api/liquid/objects/metafield">
            Metafield references
          </ExternalLink>
          . No API call, no async fetch - the data is resolved as part of the synchronous Liquid render on Shopify's
          servers.
        </P>

        <H3>Accessing the aggregate rating on a product page</H3>
        <CodeBlock>{`
{% assign rating = product.metafields.reviews.rating.value %}
{% assign rating_count = product.metafields.reviews.rating_count.value %}

{% if rating != blank %}
  <div class="product-rating">
    <span>{{ rating | round: 1 }} / 5</span>
    <span>({{ rating_count }} reviews)</span>
  </div>
{% endif %}
        `}</CodeBlock>

        <H3>Iterating over individual reviews</H3>
        <P>
          The{" "}
          <ExternalLink href="https://shopify.dev/docs/storefronts/themes/product-merchandising/product-reviews">
            standard product review Metaobject
          </ExternalLink>{" "}
          instances can be iterated by querying{" "}
          <ExternalLink href="https://shopify.dev/docs/api/liquid/objects/all_products">
            metaobject references
          </ExternalLink>{" "}
          on the product:
        </P>
        <CodeBlock>{`
{% assign reviews = product.metafields.reviews.product_reviews.value %}

{% for review in reviews %}
  <article class="review-card">
    <p class="review-author">{{ review.fields.author.value }}</p>
    <p class="review-rating">{{ review.fields.rating.value }} / 5</p>
    <p class="review-body">{{ review.fields.body.value }}</p>
    <time>{{ review.fields.date.value | date: "%B %e, %Y" }}</time>
  </article>
{% endfor %}
        `}</CodeBlock>
        <P>
          All of this executes on Shopify's edge infrastructure during the initial page render. The browser receives
          fully-formed HTML - no JS execution, no external fetch, no waiting.
        </P>

        <H3>App Blocks vs. custom Liquid sections</H3>
        <P>
          Shopify's{" "}
          <ExternalLink href="https://shopify.dev/docs/storefronts/themes/architecture/sections/app-blocks">
            App Blocks
          </ExternalLink>{" "}
          allow apps to inject Liquid sections into Online Store 2.0 themes through the theme editor without modifying
          theme files. This is the recommended approach for most stores - it means review display sections are
          merchant-configurable, no-code, and follow the theme's existing design tokens.
        </P>
        <P>
          For developers who want full control, the review data is directly accessible in custom Liquid sections, since
          it lives in the same Shopify store. You are not locked into using any app's rendering layer.
        </P>
        <Callout>
          <InternalLink href="/docs/app-blocks">Read the App Blocks documentation →</InternalLink>
        </Callout>
      </Section>

      {/* 7. Data ownership */}
      <Section id="data-ownership">
        <H2 id="data-ownership">7. Data ownership and portability</H2>
        <P>
          When your reviews are stored on a third-party server, that vendor controls the data. Typical implications:
        </P>
        <Ul>
          <li>Cancelling the subscription may revoke access to your review data</li>
          <li>Export functionality is often gated behind higher-tier plans</li>
          <li>The vendor's terms of service govern what they can do with your data (analytics, benchmarking, training, etc.)</li>
          <li>API rate limits and availability windows are set by the vendor, not by Shopify</li>
        </Ul>
        <P>
          Metaobjects are owned by your Shopify store. They are accessible via the Admin GraphQL API with any
          authorised integration, independent of any specific app. If you uninstall a review app, the Metaobjects
          your reviews were stored in remain in your store. The data does not leave with the app.
        </P>

        <H3>Programmatic access</H3>
        <P>You can query your review Metaobjects directly with any GraphQL client:</P>
        <CodeBlock>{`
# Admin GraphQL - list product reviews
query {
  metaobjects(type: "shopify--product-review", first: 50) {
    edges {
      node {
        handle
        fields {
          key
          value
        }
      }
    }
  }
}
        `}</CodeBlock>
        <P>
          This means your review data is accessible for analytics pipelines, data warehousing, headless storefronts,
          custom dashboards, and migrations - without any dependency on a specific app vendor's API.
        </P>
        <P>
          See the{" "}
          <ExternalLink href="https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects">
            Admin GraphQL <code>metaobjects</code> query documentation
          </ExternalLink>{" "}
          for the full query spec.
        </P>
        <InlineCta message={`With ${process.env.NEXT_PUBLIC_APP_NAME}, your reviews live in Shopify's Metaobjects - fully accessible via GraphQL and Liquid, yours to keep even after uninstalling.`} />
      </Section>

      {/* 8. Syndication */}
      <Section className="bg-gray-50" id="syndication">
        <H2 id="syndication">8. Syndication to Shop, Google Shopping, and Meta</H2>
        <P>
          Because the standard{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">shopify--product-review</code> definition is a
          platform-level convention, Shopify's own integrations recognise it:
        </P>

        <H3>Shop app</H3>
        <P>
          The{" "}
          <ExternalLink href="https://www.shopify.com/shop">Shop app</ExternalLink>{" "}
          (Shopify's buyer-facing app) reads product reviews from the standard Metaobject definition directly. Reviews
          stored there appear in the Shop app without any additional integration or configuration. Reviews stored on a
          third-party server do not.
        </P>

        <H3>Google Merchant Center / Google Shopping</H3>
        <P>
          Shopify's{" "}
          <ExternalLink href="https://help.shopify.com/en/manual/promoting-marketing/seo/google">
            Google &amp; YouTube channel
          </ExternalLink>{" "}
          can syndicate product reviews to Google Merchant Center when they are stored in the standard Metaobject
          format. This enables seller ratings and product review snippets in Google Shopping - without requiring a
          separate review syndication feed or a Google-approved review aggregator integration.
        </P>

        <H3>Meta Shops</H3>
        <P>
          Similarly, the{" "}
          <ExternalLink href="https://help.shopify.com/en/manual/promoting-marketing/social-media/facebook">
            Facebook &amp; Instagram channel
          </ExternalLink>{" "}
          can surface product ratings from the standard Metafield (<code className="bg-gray-200 px-1 rounded text-sm">reviews.rating</code>) in
          Meta Shops product listings.
        </P>

        <Callout>
          Syndication from standard Metaobjects is an emerging capability. The specifics depend on your Shopify plan
          and channel configuration. Check{" "}
          <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-standard-definitions">
            Shopify's list of standard definitions
          </ExternalLink>{" "}
          for the latest on which integrations consume standard Metaobject types.
        </Callout>
      </Section>

      {/* 9. Summary */}
      <Section id="summary">
        <H2 id="summary">9. Summary</H2>
        <P>
          The case for Metaobject-based review storage is architectural, not cosmetic. The following table summarises
          the technical differences:
        </P>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200 w-1/3">Concern</th>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200 w-1/3">JS widget approach</th>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200 w-1/3">Metaobject approach</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
              {[
                ["Data location", "Third-party server", "Your Shopify store"],
                ["Render timing", "After JS bundle + API response", "On initial HTML response"],
                ["LCP impact", "Delayed (external dependency)", "None (in HTML on first byte)"],
                ["CLS impact", "Layout shift on injection", "No shift (content pre-allocated)"],
                ["Structured data indexing", "Second rendering wave (delayed)", "Immediate (HTML-embedded)"],
                ["Rich snippets", "Unreliable, may not appear", "Reliable, crawled immediately"],
                ["Data on app uninstall", "Lost / restricted", "Remains in your store"],
                ["Programmatic data access", "Via vendor API only", "Shopify Admin & Storefront GraphQL"],
                ["Shop app syndication", "Not supported", "Native"],
                ["Google Shopping syndication", "Requires separate feed", "Native channel support"],
              ].map(([concern, js, meta], index) => (
                <tr key={concern} className={index % 2 === 0 ? "" : "bg-gray-50/50"}>
                  <td className="p-3 font-medium text-gray-700">{concern}</td>
                  <td className="p-3 text-red-700">{js}</td>
                  <td className="p-3 text-green-700">{meta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <P>
          If you are building or maintaining a Shopify store and care about Lighthouse scores, search visibility, or
          long-term data independence, the architecture matters. Storing reviews as standard Metaobjects eliminates the
          external dependency entirely - reviews render at the same time as your product title and price, output
          structured data on the first byte, and remain in your store regardless of which tooling you use to manage
          them.
        </P>

        <ArticleAuthor />
        <div className="mt-6 border-t border-gray-200 pt-6">
          <P className="text-gray-500 text-sm">
            <strong>Further reading:</strong>{" "}
            <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metaobjects">Shopify Metaobjects developer docs</ExternalLink>
            {" · "}
            <ExternalLink href="https://shopify.dev/docs/storefronts/themes/product-merchandising/product-reviews">Product reviews in Shopify themes</ExternalLink>
            {" · "}
            <ExternalLink href="https://web.dev/articles/vitals">Core Web Vitals - web.dev</ExternalLink>
            {" · "}
            <ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/product">Google Product structured data spec</ExternalLink>
            {" · "}
            <ExternalLink href="https://schema.org/AggregateRating">schema.org/AggregateRating</ExternalLink>
            {" · "}
            <ExternalLink href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics">Google JavaScript SEO basics</ExternalLink>
          </P>
          <P className="text-gray-500 text-sm mt-2">
            <InternalLink href="/docs">Read the app documentation →</InternalLink>
            {" · "}
            <InternalLink href="/">About {process.env.NEXT_PUBLIC_APP_NAME} →</InternalLink>
          </P>
          <BlogNav className="mt-6" />
        </div>
      </Section>

      <BlogCta />
    </main>
  )
}
