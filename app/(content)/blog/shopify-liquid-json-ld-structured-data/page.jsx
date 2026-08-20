import { Section, ExternalLink, InternalLink, CodeBlock, Callout, H2, H3, P, Ul, TableOfContents, BlogNav, BlogCta, ArticleJsonLd, InlineCta, ArticleAuthor, BlogFaqs } from "../../../../components/blog"

export const metadata = {
  title: "JSON-LD Structured Data in Shopify Liquid (With Code Examples)",
  shortTitle: "Add JSON-LD structured data in Shopify Liquid",
  description: "Copy-paste Liquid code for Product schema, AggregateRating, Review markup, and BreadcrumbList - all server-side so Google reads it on the first crawl.",
  alternates: { canonical: "/blog/shopify-liquid-json-ld-structured-data" },
  openGraph: { type: "article", publishedTime: "2026-04-24", images: ["https://assets.reviewsonmetaobjects.com/the-shopify-reviews-blog.jpg"] },
  slug: "shopify-liquid-json-ld-structured-data",
  date: "2026-04-24",
}

const tocItems = [
  { id: "what-is-json-ld", label: "What JSON-LD is and where it belongs" },
  { id: "product-schema", label: "Product schema" },
  { id: "aggregate-rating", label: "Adding aggregateRating from Metafields" },
  { id: "individual-reviews", label: "Individual Review markup" },
  { id: "breadcrumb-schema", label: "BreadcrumbList schema" },
  { id: "validation", label: "Validating with Google's Rich Results Test" },
  { id: "common-mistakes", label: "Common mistakes" },
]

const faqs = [
  {
    question: "Where does JSON-LD go in a Shopify Liquid theme?",
    answer: "JSON-LD should be placed in the head of your page or at the end of the body. In Shopify Liquid, the cleanest approach is to add it to your theme.liquid layout file or to the specific section or template file for the page type it applies to - for example, product.liquid for Product schema.",
  },
  {
    question: "Does Shopify automatically add JSON-LD structured data?",
    answer: "Some Shopify themes include basic JSON-LD for Product and BreadcrumbList. However, AggregateRating markup for reviews - which enables star ratings in Google - is rarely included by default and must be added manually or via a compliant review app that outputs it server-side.",
  },
  {
    question: "What is the difference between JSON-LD and microdata for Shopify structured data?",
    answer: "JSON-LD is a separate script block that describes your page entities in structured JSON. Microdata is markup embedded directly into your HTML using attributes like itemscope and itemprop. Google supports both, but recommends JSON-LD as it is easier to maintain, does not interfere with your HTML structure, and can be cleanly templated in Liquid.",
  },
  {
    question: "Why is my JSON-LD structured data valid but not showing rich results in Google?",
    answer: "Valid structured data is necessary but not sufficient for rich results. Google also requires the page to meet eligibility guidelines, the structured data to match the visible page content, and - crucially - the markup to be present in the raw HTML at crawl time, not injected by JavaScript after the page loads.",
  },
  {
    question: "How do I validate my JSON-LD structured data in Shopify?",
    answer: "Use Google's Rich Results Test at search.google.com/test/rich-results with your live product page URL. It shows which structured data types are detected, whether they are valid, and whether they qualify for rich results. For development, you can paste raw HTML directly. Schema.org's validator at validator.schema.org also checks markup against the spec.",
  },
  {
    question: "Can I have multiple JSON-LD script blocks on one Shopify page?",
    answer: "Yes. Google supports multiple JSON-LD blocks on a single page and will read all of them. A common pattern is a Product block in the main product template, an AggregateRating block added by a review section, and a BreadcrumbList block in the layout file - all independently valid and parsed together.",
  },
  {
    question: "Which structured data types does Google support for Shopify product pages?",
    answer: "For product pages, Google supports: Product (required), Offer (price, availability), AggregateRating (average star score and review count), Review (individual reviews), and BreadcrumbList (navigation path). Of these, AggregateRating is the one that enables star ratings in search results and has the most visible impact on click-through rates.",
  },
  {
    question: "Does JSON-LD structured data help with Google AI Overviews and AI search engines?",
    answer: "Yes, and this is becoming increasingly important. AI search engines like Google AI Overviews, Perplexity, and ChatGPT Browse read structured data to understand your pages accurately. JSON-LD in your HTML tells these systems precisely what your product is, its price, its rating, and who reviewed it - in a machine-readable format they can cite with confidence. Server-side JSON-LD is far more reliably processed by AI crawlers than JavaScript-injected markup.",
  },
]

export default function ShopifyLiquidJsonLdStructuredDataPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <ArticleJsonLd title={metadata.title} description={metadata.description} datePublished={metadata.date} slug={metadata.slug} />

      <section className="pt-24 pb-12 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <BlogNav />
          <p className="inline-block rounded bg-[#fde047] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-gray-900 mb-5">SEO tutorial</p>
          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">
            How to add JSON-LD structured data in Shopify Liquid: products, reviews, and breadcrumbs
          </h1>
          <P>
            Structured data tells Google exactly what your page contains - product name, price, availability, star
            ratings, breadcrumb trail. When implemented correctly in Liquid, it is part of your HTML on the first byte,
            Googlebot reads it on the first crawl, and you become eligible for rich snippets in search results. This
            guide covers the three most impactful schemas for Shopify stores, with copy-paste Liquid code for each.
          </P>
          <P className="text-gray-500 text-sm sm:text-base">
            Reading time: ~10 minutes.
          </P>
          <TableOfContents items={tocItems} />
        </div>
      </section>

      <Section id="what-is-json-ld">
        <H2 id="what-is-json-ld">1. What JSON-LD is and where it belongs</H2>
        <P>
          <ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data">
            Structured data
          </ExternalLink>{" "}
          is machine-readable markup that describes the content of a page to search engines. Google supports three
          formats (JSON-LD, Microdata, RDFa), but{" "}
          <ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/sd-policies">
            recommends JSON-LD
          </ExternalLink>{" "}
          as the preferred format for all new implementations.
        </P>
        <P>
          JSON-LD is a <code className="bg-gray-200 px-1 rounded text-sm">&lt;script type="application/ld+json"&gt;</code> block containing a
          JSON object that follows{" "}
          <ExternalLink href="https://schema.org">schema.org</ExternalLink> vocabulary. Unlike Microdata, it does not
          require you to annotate individual HTML elements - it lives separately from your visible markup.
        </P>
        <P>
          Google accepts JSON-LD anywhere in the page - <code className="bg-gray-200 px-1 rounded text-sm">&lt;head&gt;</code> or{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">&lt;body&gt;</code>. This means there is no reason to centralise all structured
          data in <code className="bg-gray-200 px-1 rounded text-sm">layout/theme.liquid</code> with conditional template checks. The cleaner
          approach is to put each schema where it contextually belongs: product markup inside the product template or
          section, breadcrumb markup inside the relevant layout, and so on. Each file is self-contained and the
          structured data lives next to the content it describes.
        </P>
        <Callout>
          JSON-LD is <em>not</em> visible content. It does not affect your page's visual design. It is read only by
          crawlers and tools like the Rich Results Test. Adding it has zero impact on page performance.
        </Callout>
      </Section>

      <Section className="bg-gray-50" id="product-schema">
        <H2 id="product-schema">2. Product schema</H2>
        <P>
          The{" "}
          <ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/product">
            Product rich result
          </ExternalLink>{" "}
          requires at minimum: <code className="bg-gray-200 px-1 rounded text-sm">name</code>, an{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">Offer</code> with <code className="bg-gray-200 px-1 rounded text-sm">price</code> and{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">priceCurrency</code>, and either <code className="bg-gray-200 px-1 rounded text-sm">review</code> or{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> (for star ratings). Here is a complete base
          implementation:
        </P>
        <CodeBlock>{`
{%- comment -%}
  sections/main-product.liquid
{%- endcomment -%}

<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": {{ product.title | json }},
  "image": [
    {{ product.featured_image | image_url: width: 1200 | prepend: 'https:' | json }}
  ],
  "description": {{ product.description | strip_html | truncate: 500 | json }},
  "sku": {{ product.selected_or_first_available_variant.sku | json }},
  "brand": {
    "@type": "Brand",
    "name": {{ shop.name | json }}
  },
  "offers": {
    "@type": "Offer",
    "url": {{ canonical_url | json }},
    "priceCurrency": {{ cart.currency.iso_code | json }},
    "price": {{ product.selected_or_first_available_variant.price | divided_by: 100.0 }},
    "availability": "https://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}",
    "itemCondition": "https://schema.org/NewCondition"
  }
}
</script>
        `}</CodeBlock>
        <P>
          Note the <code className="bg-gray-200 px-1 rounded text-sm">divided_by: 100.0</code> on the price - Shopify stores prices in
          cents as integers, so <code className="bg-gray-200 px-1 rounded text-sm">1999</code> represents $19.99. Dividing by{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">100.0</code> (not <code className="bg-gray-200 px-1 rounded text-sm">100</code>) forces
          a decimal result.
        </P>
      </Section>

      <Section id="aggregate-rating">
        <H2 id="aggregate-rating">3. Adding aggregateRating from Metafields</H2>
        <P>
          Extend the Product schema above with an <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> property.
          When review data is stored in Shopify as standard Metaobjects, the aggregate rating is available in Liquid
          via <code className="bg-gray-200 px-1 rounded text-sm">product.metafields.reviews.rating</code>:
        </P>
        <CodeBlock>{`
{%- assign rating = product.metafields.reviews.rating.value -%}
{%- assign rating_count = product.metafields.reviews.rating_count.value -%}

<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": {{ product.title | json }},
  "image": [
    {{ product.featured_image | image_url: width: 1200 | prepend: 'https:' | json }}
  ],
  "description": {{ product.description | strip_html | truncate: 500 | json }},
  "offers": {
    "@type": "Offer",
    "url": {{ canonical_url | json }},
    "priceCurrency": {{ cart.currency.iso_code | json }},
    "price": {{ product.selected_or_first_available_variant.price | divided_by: 100.0 }},
    "availability": "https://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}"
  }
  {%- if rating != blank -%}
  ,"aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{ rating }}",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "{{ rating_count }}"
  }
  {%- endif -%}
}
</script>
        `}</CodeBlock>
        <P>
          The <code className="bg-gray-200 px-1 rounded text-sm">if rating != blank</code> guard ensures the{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> property is only output when review data actually
          exists - a product with no reviews outputs valid Product schema without any rating properties, which is
          correct per Google's spec.
        </P>
        <Callout>
          <strong>This only works when your review app stores data in Shopify's standard Metaobjects.</strong> If your
          review app stores data on its own server, <code className="bg-gray-200 px-1 rounded text-sm">product.metafields.reviews.rating</code>{" "}
          will be blank in Liquid. The aggregate rating only exists on an external API, meaning structured data must
          be generated by JavaScript - with the crawlability problems that entails.
        </Callout>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} stores ratings in Shopify's standard Metaobjects - so your aggregateRating JSON-LD is rendered in Liquid, readable by Googlebot on first crawl.`} />
      </Section>

      <Section className="bg-gray-50" id="individual-reviews">
        <H2 id="individual-reviews">4. Individual Review markup</H2>
        <P>
          Google can display individual review snippets in search results when{" "}
          <ExternalLink href="https://schema.org/Review">schema.org/Review</ExternalLink> objects are nested inside
          the Product schema. These are separate from the aggregate rating and give Google richer context about your
          review content.
        </P>
        <CodeBlock>{`
{%- assign reviews = product.metafields.reviews.product_reviews.value -%}

{%- if reviews != blank -%}
  ,"review": [
    {%- for review in reviews limit: 5 -%}
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "{{ review.fields.rating.value }}",
          "bestRating": "5",
          "worstRating": "1"
        },
        "name": {{ review.fields.body.value | truncate: 100 | json }},
        "reviewBody": {{ review.fields.body.value | json }},
        "author": {
          "@type": "Person",
          "name": {{ review.fields.author.value | json }}
        },
        "datePublished": "{{ review.fields.date.value | date: '%Y-%m-%d' }}"
      }{% unless forloop.last %},{% endunless %}
    {%- endfor -%}
  ]
{%- endif -%}
        `}</CodeBlock>
        <P>
          Include this inside the Product JSON-LD object, after the <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code>{" "}
          block. The <code className="bg-gray-200 px-1 rounded text-sm">limit: 5</code> keeps the JSON-LD block to a reasonable size -
          Google does not require all reviews to be in the structured data, and a smaller block reduces page weight.
        </P>
      </Section>

      <Section id="breadcrumb-schema">
        <H2 id="breadcrumb-schema">5. BreadcrumbList schema</H2>
        <P>
          <ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/breadcrumb">
            BreadcrumbList
          </ExternalLink>{" "}
          structured data enables the breadcrumb trail to appear in your Google Search listing - replacing or
          supplementing the URL display. It is especially valuable for product pages reached via a collection.
        </P>
        <CodeBlock>{`
{%- comment -%}
  snippets/structured-data-breadcrumb.liquid
  Render this when a collection context is available (e.g. on product pages
  linked from a collection, or on collection pages).
{%- endcomment -%}

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": {{ shop.name | json }},
      "item": {{ shop.url | json }}
    }
    {%- if collection -%}
    ,{
      "@type": "ListItem",
      "position": 2,
      "name": {{ collection.title | json }},
      "item": {{ shop.url | append: collection.url | json }}
    }
    ,{
      "@type": "ListItem",
      "position": 3,
      "name": {{ product.title | json }},
      "item": {{ shop.url | append: product.url | json }}
    }
    {%- else -%}
    ,{
      "@type": "ListItem",
      "position": 2,
      "name": {{ product.title | json }},
      "item": {{ shop.url | append: product.url | json }}
    }
    {%- endif -%}
  ]
}
</script>
        `}</CodeBlock>
        <P>
          The <code className="bg-gray-200 px-1 rounded text-sm">collection</code> object is available in Liquid when a product is
          browsed in the context of a collection (via a{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">/collections/my-collection/products/my-product</code> URL). It will be
          blank when the product is accessed directly via <code className="bg-gray-200 px-1 rounded text-sm">/products/my-product</code>.
        </P>
        <InlineCta message={`This breadcrumb markup, like all structured data in ${process.env.NEXT_PUBLIC_APP_NAME}, is output server-side - Googlebot picks it up immediately without needing to execute JavaScript.`} />
      </Section>

      <Section className="bg-gray-50" id="validation">
        <H2 id="validation">6. Validating with Google's Rich Results Test</H2>
        <P>
          After implementing structured data, validate it before expecting results in Search:
        </P>
        <Ul>
          <li>
            <strong><ExternalLink href="https://search.google.com/test/rich-results">Rich Results Test</ExternalLink>:</strong>{" "}
            Enter your product URL. Shows detected schemas, warnings, and errors. Use this to confirm
            <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code> is present and valid.
          </li>
          <li>
            <strong><ExternalLink href="https://validator.schema.org">Schema.org Validator</ExternalLink>:</strong>{" "}
            Paste your raw JSON-LD to check against the schema.org spec directly - useful for catching type
            mismatches before deploying.
          </li>
          <li>
            <strong>Google Search Console - Rich results status:</strong>{" "}
            After Google re-crawls your pages, the "Rich results" report in Search Console shows which URLs have
            valid structured data and which have errors.
          </li>
        </Ul>
        <P>
          After deploying, use{" "}
          <ExternalLink href="https://search.google.com/search-console">Search Console's URL Inspection</ExternalLink>{" "}
          to request re-indexing for key product pages. Stars typically start appearing in search results within
          2–6 weeks of Google processing the updated structured data.
        </P>
      </Section>

      <Section id="common-mistakes">
        <H2 id="common-mistakes">7. Common mistakes</H2>
        <Ul>
          <li>
            <strong>Duplicate <code className="bg-gray-200 px-1 rounded text-sm">Product</code> schemas on one page.</strong> Many themes
            already include Product JSON-LD. Adding a second block with different data confuses Google. Check your
            theme's <code className="bg-gray-200 px-1 rounded text-sm">snippets/</code> directory for existing structured data before
            adding new blocks.
          </li>
          <li>
            <strong>Price without currency.</strong> <code className="bg-gray-200 px-1 rounded text-sm">priceCurrency</code> is required
            alongside <code className="bg-gray-200 px-1 rounded text-sm">price</code> in the Offer. Omitting it causes a validation error.
          </li>
          <li>
            <strong>Rating outside the stated range.</strong> If <code className="bg-gray-200 px-1 rounded text-sm">bestRating</code> is 5
            but <code className="bg-gray-200 px-1 rounded text-sm">ratingValue</code> is 4.7, that is valid. If{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">ratingValue</code> exceeds <code className="bg-gray-200 px-1 rounded text-sm">bestRating</code>,
            Google rejects the schema.
          </li>
          <li>
            <strong>Generating structured data in JavaScript.</strong> If the JSON-LD block is injected by a
            client-side script, Googlebot reads it in its second-pass rendering queue - potentially delayed by days.
            Always output structured data in Liquid, not JavaScript.
          </li>
          <li>
            <strong>Using <code className="bg-gray-200 px-1 rounded text-sm">reviewCount: 0</code>.</strong> An <code className="bg-gray-200 px-1 rounded text-sm">aggregateRating</code>{" "}
            with zero reviews is invalid per Google's spec. Always guard with{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">if rating != blank</code> before outputting the block.
          </li>
        </Ul>

        <ArticleAuthor />
        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Further reading</p>
          <div className="space-y-1.5 text-sm">
            <div><ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/product">Google Product structured data spec</ExternalLink></div>
            <div><ExternalLink href="https://schema.org/Product">schema.org/Product</ExternalLink></div>
            <div><ExternalLink href="https://schema.org/AggregateRating">schema.org/AggregateRating</ExternalLink></div>
            <div><ExternalLink href="https://search.google.com/test/rich-results">Rich Results Test</ExternalLink></div>
            <div><ExternalLink href="https://shopify.dev/docs/api/liquid/objects/metafield">Liquid Metafield object</ExternalLink></div>
            <div><ExternalLink href="https://shopify.dev/docs/apps/build/metaobjects/standard-review-metaobject">Shopify standard product review Metaobject</ExternalLink></div>
          </div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 mt-5">Related articles</p>
          <div className="space-y-1.5 text-sm">
            <div><InternalLink href="/blog/shopify-review-stars-not-showing-google">Why review stars don't show in Google →</InternalLink></div>
            <div><InternalLink href="/blog/how-shopify-product-reviews-work">How Shopify Metaobject reviews work →</InternalLink></div>
            <div><InternalLink href="/blog/shopify-social-proof-best-practices">Shopify social proof best practices →</InternalLink></div>
            <div><InternalLink href="/">About {process.env.NEXT_PUBLIC_APP_NAME} →</InternalLink></div>
            <div><ExternalLink href="https://reviewsonmetaobjects.myshopify.com/products/chambray-work-shirt">Demo store - inspect the structured data live (password: demo) →</ExternalLink></div>
          </div>
          <BlogNav className="mt-6" />
        </div>
      </Section>

      <BlogCta />

      <BlogFaqs faqs={faqs} />
    </main>
  )
}
