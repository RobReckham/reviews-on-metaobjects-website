import { Section, ExternalLink, InternalLink, CodeBlock, Callout, H2, H3, P, Ul, TableOfContents, BlogNav, BlogCta, ArticleJsonLd, InlineCta } from "../../../../components/blog"

export const metadata = {
  title: "Can Shopify Display Product Reviews Natively Without a Third-Party App?",
  description: "Shopify deprecated its built-in Product Reviews app in 2023. Here's what actually ships natively today, what still requires an app, and what 'native' really means for review storage.",
  alternates: {
    canonical: "/blog/shopify-native-product-reviews",
  },
}

const tocItems = [
  { id: "the-short-answer", label: "The short answer" },
  { id: "the-old-product-reviews-app", label: "Shopify's old Product Reviews app" },
  { id: "what-shopify-ships-today", label: "What Shopify ships natively today" },
  { id: "what-still-needs-an-app", label: "What still requires an app" },
  { id: "what-native-really-means", label: "What 'native' really means" },
  { id: "the-data-stays", label: "The data stays regardless of the app" },
]

export default function ShopifyNativeProductReviewsPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <ArticleJsonLd title={metadata.title} description={metadata.description} datePublished="2026-05-02" slug="shopify-native-product-reviews" />

      <section className="pt-24 pb-12 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <BlogNav />
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-4">Shopify fundamentals</p>
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight mb-6 text-gray-900">
            Can Shopify display product reviews natively without a third-party app?
          </h1>
          <P>
            Many merchants setting up a new Shopify store ask whether product reviews are built in - a reasonable
            assumption given how central social proof is to e-commerce. The answer is nuanced and has changed
            significantly since 2023. This article explains exactly what Shopify provides natively, what it
            deprecated, what still needs an app, and what "natively stored" actually means for your data.
          </P>
          <P className="text-gray-500 text-sm sm:text-base">
            Audience: merchants evaluating Shopify, developers onboarding new stores. Reading time: ~7 minutes.
          </P>
          <TableOfContents items={tocItems} />
        </div>
      </section>

      <Section id="the-short-answer">
        <H2 id="the-short-answer">1. The short answer</H2>
        <P>
          Shopify does not ship a complete, ready-to-use review collection and display system out of the box in
          {new Date().getFullYear()}. What it <em>does</em> ship is the <strong>data infrastructure</strong> for reviews: a standardised
          Metaobject definition that any compliant app can write to, and that Liquid can render directly from.
        </P>
        <P>
          For collection (email requests, submission forms, moderation, translation), you still need an app. But
          the data those reviews are stored in - the Metaobjects - lives inside Shopify itself, not on the app
          vendor's server.
        </P>
        <P>
          This distinction matters more than it might appear. It means your reviews are not held hostage by any
          specific app's pricing or uptime. The app is a tool for managing data that belongs to your store.
        </P>
      </Section>

      <Section className="bg-gray-50" id="the-old-product-reviews-app">
        <H2 id="the-old-product-reviews-app">2. Shopify's old Product Reviews app</H2>
        <P>
          Until 2023, Shopify maintained a first-party app called "Product Reviews" - a free, simple app that
          provided basic review collection via on-store forms and display via Liquid theme integration. It was
          minimal but functional: no email review requests, no moderation UI, no translation, but zero cost and
          no third-party dependency.
        </P>
        <P>
          Shopify{" "}
          <ExternalLink href="https://help.shopify.com/en/manual/products/product-reviews">
            deprecated the Product Reviews app in May 2024
          </ExternalLink>{" "}
          and removed it from active development. It remains technically installable for existing users but is no
          longer recommended and will eventually be retired.
        </P>
        <P>
          The reason Shopify deprecated it was not that they abandoned reviews - it was that they replaced the
          ad-hoc app approach with a more architectural solution: the standard product review Metaobject definition.
        </P>
        <Callout>
          If you are currently using the legacy Product Reviews app, your data is stored in a format that is not
          compatible with the standard Metaobject definition. Migrating to a compliant app involves exporting your
          existing reviews (via CSV) and re-importing them into the standard format.
        </Callout>
      </Section>

      <Section id="what-shopify-ships-today">
        <H2 id="what-shopify-ships-today">3. What Shopify ships natively today</H2>
        <P>
          Shopify's native contribution to product reviews in {new Date().getFullYear()} is the{" "}
          <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-standard-definitions">
            standard product review Metaobject definition
          </ExternalLink>
          . This is a standardised schema - a formal specification for how review data should be structured -
          that is recognised platform-wide.
        </P>
        <P>Specifically, Shopify defines and maintains:</P>
        <Ul>
          <li>
            The <code className="bg-gray-200 px-1 rounded text-sm">shopify--product-review</code> Metaobject type, with standard fields
            for rating, body text, author, date, and product reference
          </li>
          <li>
            The <code className="bg-gray-200 px-1 rounded text-sm">reviews.rating</code> standard Metafield on products - a computed
            aggregate rating, automatically maintained
          </li>
          <li>
            The <code className="bg-gray-200 px-1 rounded text-sm">reviews.rating_count</code> standard Metafield - the total review
            count per product
          </li>
        </Ul>
        <P>
          These are recognised by Shopify's own integrations. Reviews stored in this format automatically surface
          in the Shop app, and can be syndicated to Google Shopping and Meta Shops via Shopify's native channel
          integrations.
        </P>

        <H3>Theme support</H3>
        <P>
          Several of Shopify's free themes (Dawn and its successors) include native sections that read from the
          standard Metaobject format. If your theme ships with a "Product reviews" section, it likely already reads
          from <code className="bg-gray-200 px-1 rounded text-sm">product.metafields.reviews.product_reviews</code> and{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">product.metafields.reviews.rating</code> in Liquid. Check your theme's
          sections directory for a file like <code className="bg-gray-200 px-1 rounded text-sm">main-product.liquid</code> or
          <code className="bg-gray-200 px-1 rounded text-sm">product-reviews.liquid</code>.
        </P>
        <Callout>
          If your theme already has a native review section, it will display reviews from any compliant app
          automatically - because the data format is standardised. You are not required to use the app's own
          display blocks.
        </Callout>
      </Section>

      <Section className="bg-gray-50" id="what-still-needs-an-app">
        <H2 id="what-still-needs-an-app">4. What still requires an app</H2>
        <P>
          Shopify's native infrastructure handles data storage and display infrastructure. It does not ship:
        </P>
        <Ul>
          <li>
            <strong>Post-purchase review request emails.</strong> Triggering an email to a customer after their
            order is fulfilled, with a personalised review link, requires app infrastructure - email sending,
            template management, scheduling, and optionally discount code generation for incentives.
          </li>
          <li>
            <strong>Review submission forms.</strong> The on-store form that customers fill in to submit a review
            (and the backend that validates and saves the submission) requires an app. Themes do not ship this
            logic natively.
          </li>
          <li>
            <strong>Moderation interface.</strong> Reviewing, approving, rejecting, and replying to reviews through
            an admin UI is app territory. Shopify Admin's Metaobjects UI can edit individual records, but it is
            not a moderation workflow.
          </li>
          <li>
            <strong>Translation.</strong> Automatically translating review text into your store's published
            languages requires an integration with a translation API. This is not a Shopify-native feature.
          </li>
          <li>
            <strong>Import and migration.</strong> Ingesting reviews from other platforms (Judge.me, Loox,
            reviews.io, CSV files) in bulk requires an app to handle the format conversion and Metaobject creation.
          </li>
        </Ul>
        <P>
          In short: Shopify ships the data layer. An app provides the operational layer - collection, management,
          and optionally display. The two are now decoupled, which is an improvement over the old model where the
          app controlled both.
        </P>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} is the operational layer built for this new model - it writes to Shopify's standard Metaobject definition, keeping your data fully within Shopify.`} />
      </Section>

      <Section id="what-native-really-means">
        <H2 id="what-native-really-means">5. What "native" really means</H2>
        <P>
          When merchants ask "can Shopify do reviews natively?", they usually mean one of two different things:
        </P>
        <Ul>
          <li>
            <strong>"Without paying for an app"</strong> - the answer here is mostly no, unless your needs are
            very basic (manually creating review Metaobjects via the Admin UI, which is technically possible but
            not practical for more than a handful of reviews).
          </li>
          <li>
            <strong>"Without depending on a third-party server for my review data"</strong> - the answer here is
            yes. This is what the standard Metaobject format enables. The data lives in Shopify. The app is a
            workflow tool, not a data custodian.
          </li>
        </Ul>
        <P>
          The second interpretation is the more important one from an architectural standpoint. A store whose
          reviews are stored in Shopify's Metaobjects has native data - it renders server-side in Liquid, outputs
          structured data in the first HTML byte, and survives any change in which app is managing the workflow.
        </P>
        <P>
          A store whose reviews are stored on a third-party server does not have native data, regardless of how
          seamlessly the widget integrates visually.
        </P>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} stores reviews in Shopify's native Metaobject layer - the data is in your store, not on an external server, making it truly native.`} />
      </Section>

      <Section className="bg-gray-50" id="the-data-stays">
        <H2 id="the-data-stays">6. The data stays regardless of the app</H2>
        <P>
          The most consequential property of the Metaobject-based approach is persistence: the Metaobject records
          created in your store do not leave when an app is uninstalled. They are part of your store's data, not
          the app vendor's.
        </P>
        <P>
          In practice, this means:
        </P>
        <Ul>
          <li>You can switch apps without losing reviews - install the new app, point it at the existing Metaobjects</li>
          <li>You can uninstall an app during a pricing dispute without losing years of accumulated social proof</li>
          <li>You can write custom Liquid sections that read directly from the Metaobjects, bypassing any app's display layer entirely</li>
          <li>You can query your review data directly via the Shopify Admin GraphQL API for analytics or migrations</li>
        </Ul>
        <CodeBlock>{`
# Query your reviews directly - no app API required
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
          This is the practical definition of "native" that matters for long-term store health: data that is yours
          to keep, read, and move - independent of any specific vendor relationship.
        </P>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <P className="text-gray-500 text-sm">
            <strong>Further reading:</strong>{" "}
            <ExternalLink href="https://help.shopify.com/en/manual/products/product-reviews">Shopify Product Reviews help documentation</ExternalLink>
            {" · "}
            <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metaobjects">Shopify Metaobjects developer docs</ExternalLink>
            {" · "}
            <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-standard-definitions">Standard Metafield and Metaobject definitions</ExternalLink>
          </P>
          <P className="text-gray-500 text-sm mt-2">
            <InternalLink href="/blog/how-shopify-product-reviews-work">Deep-dive: how Shopify Metaobject reviews work →</InternalLink>
            {" · "}
            <InternalLink href="/blog/real-cost-shopify-review-apps">The hidden cost of review apps →</InternalLink>
            {" · "}
            <InternalLink href="/blog/shopify-metafields-vs-metaobjects">Metafields vs. Metaobjects explained →</InternalLink>
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
