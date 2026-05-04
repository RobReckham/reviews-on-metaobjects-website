import { Section, ExternalLink, InternalLink, CodeBlock, Callout, H2, H3, P, Ul, TableOfContents, BlogNav, BlogCta, ArticleJsonLd, InlineCta, ArticleAuthor } from "../../../../components/blog"

export const metadata = {
  title: "Shopify Metafields vs. Metaobjects: What's the Difference?",
  shortTitle: "Shopify metafields vs. metaobjects",
  description: "A clear technical explanation of Shopify Metafields and Metaobjects - what each is, how they differ, when to use which, and how they work together in Liquid and GraphQL.",
  alternates: { canonical: "/blog/shopify-metafields-vs-metaobjects" },
  openGraph: { type: "article", publishedTime: "2026-04-28" },
  slug: "shopify-metafields-vs-metaobjects",
  date: "2026-04-28",
}

const tocItems = [
  { id: "what-are-metafields", label: "What are Metafields?" },
  { id: "what-are-metaobjects", label: "What are Metaobjects?" },
  { id: "the-key-difference", label: "The key conceptual difference" },
  { id: "field-types", label: "Field types: what data can they hold?" },
  { id: "liquid-access", label: "Accessing both in Liquid" },
  { id: "graphql-access", label: "Accessing both via GraphQL" },
  { id: "when-to-use-which", label: "When to use which" },
  { id: "product-reviews-example", label: "Example: product reviews use both" },
]

export default function ShopifyMetafieldsVsMetaobjectsPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <ArticleJsonLd title={metadata.title} description={metadata.description} datePublished={metadata.date} slug={metadata.slug} />

      <section className="pt-24 pb-12 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <BlogNav />
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-4">Shopify custom data</p>
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight mb-6 text-gray-900">
            Shopify Metafields vs. Metaobjects: what's the difference?
          </h1>
          <P>
            Metafields and Metaobjects are both part of Shopify's custom data layer, but they serve different
            purposes and are often confused with each other. This article explains what each one is, how they
            differ architecturally, and when to reach for one versus the other - with Liquid and GraphQL examples
            for both.
          </P>
          <P className="text-gray-500 text-sm sm:text-base">
            Audience: Shopify developers, technical merchants, theme developers. Reading time: ~8 minutes.
          </P>
          <TableOfContents items={tocItems} />
        </div>
      </section>

      <Section id="what-are-metafields">
        <H2 id="what-are-metafields">1. What are Metafields?</H2>
        <P>
          <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metafields">
            Metafields
          </ExternalLink>{" "}
          extend existing Shopify resource types - products, variants, collections, customers, orders, pages, and
          more - with additional custom properties. They are key/value pairs attached to a specific resource
          instance.
        </P>
        <P>For example:</P>
        <Ul>
          <li>A product can have a Metafield for <code className="bg-gray-200 px-1 rounded text-sm">care_instructions</code> (a text field)</li>
          <li>A product variant can have a Metafield for <code className="bg-gray-200 px-1 rounded text-sm">weight_kg</code> (a number field)</li>
          <li>A customer can have a Metafield for <code className="bg-gray-200 px-1 rounded text-sm">loyalty_tier</code> (a text field)</li>
        </Ul>
        <P>
          Metafields are namespaced: each one belongs to a <code className="bg-gray-200 px-1 rounded text-sm">namespace</code> and has a{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">key</code>. The full address of a Metafield on a product is{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">product.metafields.namespace.key</code>. They extend an existing thing -
          they do not create new things.
        </P>
      </Section>

      <Section className="bg-gray-50" id="what-are-metaobjects">
        <H2 id="what-are-metaobjects">2. What are Metaobjects?</H2>
        <P>
          <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metaobjects">
            Metaobjects
          </ExternalLink>{" "}
          are standalone custom data types that you define and instantiate independently of Shopify's built-in
          resource types. They are not attached to a product or customer - they exist as their own entities in your
          store.
        </P>
        <P>
          You define a Metaobject <strong>type</strong> (called a definition) with named, typed fields. Then you
          create as many <strong>instances</strong> of that type as you need. Each instance is a Metaobject record
          with its own handle identifier and field values.
        </P>
        <P>Examples of things you would model as Metaobjects (not Metafields):</P>
        <Ul>
          <li>Product reviews (each review is its own record: rating, body, author, date)</li>
          <li>Team members (name, role, photo, bio)</li>
          <li>FAQ entries (question, answer)</li>
          <li>Testimonials (quote, attribution, company)</li>
          <li>Store locations (name, address, hours)</li>
        </Ul>
        <P>
          Metaobjects are queried globally - not as properties of a specific resource. They have their own
          API endpoints and their own Liquid access patterns.
        </P>
      </Section>

      <Section id="the-key-difference">
        <H2 id="the-key-difference">3. The key conceptual difference</H2>
        <P>
          The clearest way to distinguish them:
        </P>
        <Ul>
          <li>
            <strong>Metafield:</strong> adds a property to something that already exists.
            "This <em>product</em> has a care instructions field."
          </li>
          <li>
            <strong>Metaobject:</strong> creates a new thing entirely.
            "A <em>product review</em> is an entity in my store, linked to a product."
          </li>
        </Ul>
        <P>
          A product review cannot be a Metafield because a store has many reviews per product, and Metafields hold
          a single value per key. A Metaobject is the correct structure because it is an independent record that
          can reference a product via a <code className="bg-gray-200 px-1 rounded text-sm">product_reference</code> field.
        </P>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Property</th>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Metafield</th>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Metaobject</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Attached to", "An existing resource (product, customer, etc.)", "Nothing - standalone record"],
                ["Cardinality", "One value per key per resource", "Many instances per definition"],
                ["Identity", "namespace + key + owner resource", "type + handle"],
                ["Primary use", "Extend a resource with extra properties", "Create new data entities"],
                ["Liquid access", "resource.metafields.namespace.key", "metaobjects[\"type\"].handle or list"],
                ["GraphQL", "metafield(namespace, key) on the resource", "metaobjects(type:) query"],
              ].map(([prop, mf, mo], index) => (
                <tr key={prop} className={index % 2 === 0 ? "" : "bg-gray-50/50"}>
                  <td className="p-3 font-medium text-gray-700">{prop}</td>
                  <td className="p-3 text-gray-600 text-sm">{mf}</td>
                  <td className="p-3 text-gray-600 text-sm">{mo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <InlineCta message={`Product reviews are a textbook Metaobject use case - ${process.env.NEXT_PUBLIC_APP_NAME} uses Shopify's standard shopify--product-review definition so your data is portable and queryable.`} />
      </Section>

      <Section id="field-types">
        <H2 id="field-types">4. Field types: what data can they hold?</H2>
        <P>
          Both Metafields and Metaobject fields share the same underlying type system. Shopify supports{" "}
          <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metafields/types">
            a wide range of field types
          </ExternalLink>
          , including:
        </P>
        <Ul>
          <li><code className="bg-gray-200 px-1 rounded text-sm">single_line_text_field</code>, <code className="bg-gray-200 px-1 rounded text-sm">multi_line_text_field</code></li>
          <li><code className="bg-gray-200 px-1 rounded text-sm">integer</code>, <code className="bg-gray-200 px-1 rounded text-sm">decimal</code></li>
          <li><code className="bg-gray-200 px-1 rounded text-sm">boolean</code></li>
          <li><code className="bg-gray-200 px-1 rounded text-sm">date</code>, <code className="bg-gray-200 px-1 rounded text-sm">date_time</code></li>
          <li><code className="bg-gray-200 px-1 rounded text-sm">url</code>, <code className="bg-gray-200 px-1 rounded text-sm">json</code>, <code className="bg-gray-200 px-1 rounded text-sm">color</code>, <code className="bg-gray-200 px-1 rounded text-sm">rating</code>, <code className="bg-gray-200 px-1 rounded text-sm">dimension</code></li>
          <li><code className="bg-gray-200 px-1 rounded text-sm">file_reference</code> (images, video, generic files)</li>
          <li>Reference types: <code className="bg-gray-200 px-1 rounded text-sm">product_reference</code>, <code className="bg-gray-200 px-1 rounded text-sm">collection_reference</code>, <code className="bg-gray-200 px-1 rounded text-sm">metaobject_reference</code></li>
          <li>List variants: <code className="bg-gray-200 px-1 rounded text-sm">list.product_reference</code>, <code className="bg-gray-200 px-1 rounded text-sm">list.metaobject_reference</code>, etc.</li>
        </Ul>
        <P>
          The <code className="bg-gray-200 px-1 rounded text-sm">metaobject_reference</code> type is particularly powerful: a Metafield of this
          type on a product can point to one or many Metaobject instances - which is exactly how a product's list
          of reviews is modelled.
        </P>
      </Section>

      <Section className="bg-gray-50" id="liquid-access">
        <H2 id="liquid-access">5. Accessing both in Liquid</H2>

        <H3>Accessing a Metafield</H3>
        <CodeBlock>{`
{% comment %} A text Metafield on a product {% endcomment %}
{{ product.metafields.my_namespace.care_instructions.value }}

{% comment %} A rating Metafield {% endcomment %}
{{ product.metafields.reviews.rating.value | round: 1 }}
        `}</CodeBlock>

        <H3>Accessing a Metaobject by handle</H3>
        <CodeBlock>{`
{% comment %} Access a single Metaobject instance by its handle {% endcomment %}
{% assign team_member = metaobjects["team_member"]["jane-smith"] %}
{{ team_member.fields.name.value }}
{{ team_member.fields.role.value }}
        `}</CodeBlock>

        <H3>Accessing Metaobjects via a Metafield reference on a product</H3>
        <CodeBlock>{`
{% comment %}
  product.metafields.reviews.product_reviews is a
  list.metaobject_reference Metafield - it returns
  a list of shopify--product-review Metaobject instances.
{% endcomment %}
{% assign reviews = product.metafields.reviews.product_reviews.value %}
{% for review in reviews %}
  <p>{{ review.fields.author.value }} - {{ review.fields.rating.value }}/5</p>
  <p>{{ review.fields.body.value }}</p>
{% endfor %}
        `}</CodeBlock>
        <P>
          See the{" "}
          <ExternalLink href="https://shopify.dev/docs/api/liquid/objects/metaobject">
            Liquid <code>metaobject</code> object documentation
          </ExternalLink>{" "}
          for the full reference.
        </P>
      </Section>

      <Section id="graphql-access">
        <H2 id="graphql-access">6. Accessing both via GraphQL</H2>

        <H3>Querying a product Metafield</H3>
        <CodeBlock>{`
query {
  product(id: "gid://shopify/Product/123") {
    metafield(namespace: "reviews", key: "rating") {
      value
      type
    }
  }
}
        `}</CodeBlock>

        <H3>Querying Metaobjects by type</H3>
        <CodeBlock>{`
query {
  metaobjects(type: "shopify--product-review", first: 20) {
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
          Both queries work on the{" "}
          <ExternalLink href="https://shopify.dev/docs/api/admin-graphql">Admin GraphQL API</ExternalLink> and the{" "}
          <ExternalLink href="https://shopify.dev/docs/api/storefront">Storefront GraphQL API</ExternalLink> (the
          Storefront API requires the fields to be marked as storefront-accessible in the definition).
        </P>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} writes reviews as standard Shopify Metaobjects - query them with GraphQL, render them in Liquid, or export them any time you want.`} />
      </Section>

      <Section className="bg-gray-50" id="when-to-use-which">
        <H2 id="when-to-use-which">7. When to use which</H2>
        <P>A practical decision guide:</P>
        <Ul>
          <li>
            <strong>Use a Metafield</strong> when you need to add one (or a short list) of extra properties to an
            existing Shopify resource - a product, variant, customer, order, etc. Examples: care label, sizing
            guide URL, custom badge text, loyalty points balance.
          </li>
          <li>
            <strong>Use a Metaobject</strong> when you need to create records of a new type that exist
            independently, can have many instances, and may reference other resources. Examples: product reviews,
            team bios, testimonials, FAQs, store locations.
          </li>
          <li>
            <strong>Use both together</strong> when you need to link Metaobject instances back to a resource. A
            product Metafield of type <code className="bg-gray-200 px-1 rounded text-sm">list.metaobject_reference</code> creates the join
            between "this product" and "these review Metaobject records".
          </li>
        </Ul>
        <Callout>
          Shopify maintains a set of{" "}
          <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-standard-definitions">
            standard definitions
          </ExternalLink>{" "}
          - official Metafield and Metaobject types that Shopify's own platform features and integrations (the Shop
          app, Google Shopping, Meta Shops) recognise. Using a standard definition where one exists is always
          preferable to creating a custom one.
        </Callout>
      </Section>

      <Section id="product-reviews-example">
        <H2 id="product-reviews-example">8. Example: product reviews use both</H2>
        <P>
          Shopify's standard product review system is the best illustration of both working together:
        </P>
        <Ul>
          <li>
            Each individual review is a <strong>Metaobject</strong> of type{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">shopify--product-review</code>, with fields for rating, body, author,
            date, and a product reference.
          </li>
          <li>
            The aggregate rating (average stars) is a <strong>Metafield</strong> of type{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">rating</code> at{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">product.metafields.reviews.rating</code> - a summary value stored directly
            on the product for fast access.
          </li>
          <li>
            The review count is another <strong>Metafield</strong> at{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">product.metafields.reviews.rating_count</code>.
          </li>
          <li>
            The list of all reviews for a product is a <strong>Metafield</strong> of type{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">list.metaobject_reference</code> at{" "}
            <code className="bg-gray-200 px-1 rounded text-sm">product.metafields.reviews.product_reviews</code>, which is a list of
            references to individual review Metaobject instances.
          </li>
        </Ul>
        <P>
          This design is efficient: the aggregate Metafields give fast access to summary data (for display in
          product listings), while the Metaobject list gives access to the full review content (for display on
          the product page).
        </P>

        <ArticleAuthor />
        <div className="mt-6 border-t border-gray-200 pt-6">
          <P className="text-gray-500 text-sm">
            <strong>Further reading:</strong>{" "}
            <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metafields">Shopify Metafields documentation</ExternalLink>
            {" · "}
            <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metaobjects">Shopify Metaobjects documentation</ExternalLink>
            {" · "}
            <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metafields/types">Metafield types reference</ExternalLink>
            {" · "}
            <ExternalLink href="https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-standard-definitions">Standard definitions list</ExternalLink>
          </P>
          <P className="text-gray-500 text-sm mt-2">
            <InternalLink href="/blog/how-shopify-product-reviews-work">How Shopify product reviews work →</InternalLink>
            {" · "}
            <InternalLink href="/blog/shopify-liquid-json-ld-structured-data">Adding JSON-LD structured data in Liquid →</InternalLink>
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
