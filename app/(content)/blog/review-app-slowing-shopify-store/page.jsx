import { Section, ExternalLink, InternalLink, CodeBlock, Callout, H2, H3, P, Ul, TableOfContents, BlogNav, BlogCta, ArticleJsonLd, InlineCta, ArticleAuthor } from "../../../../components/blog"

export const metadata = {
  title: "Is Your Review App Slowing Down Your Shopify Store? How to Measure It",
  shortTitle: "Review app slowing down Shopify store",
  description: "A practical guide to measuring the performance impact of third-party review widgets on your Shopify store using Lighthouse, PageSpeed Insights, and Chrome DevTools.",
  alternates: { canonical: "/blog/review-app-slowing-shopify-store" },
  openGraph: { type: "article", publishedTime: "2026-04-19" },
  slug: "review-app-slowing-shopify-store",
  date: "2026-04-19",
}

const tocItems = [
  { id: "why-review-apps-slow-stores", label: "Why review apps slow Shopify stores" },
  { id: "lighthouse-audit", label: "Running a Lighthouse audit" },
  { id: "reading-lighthouse-results", label: "Reading the results: what to look for" },
  { id: "devtools-network", label: "Isolating the widget with DevTools Network" },
  { id: "real-numbers", label: "Real numbers: what a typical widget costs" },
  { id: "the-architectural-fix", label: "The architectural fix" },
]

export default function ReviewAppSlowingShopifyStorePage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <ArticleJsonLd title={metadata.title} description={metadata.description} datePublished={metadata.date} slug={metadata.slug} />

      <section className="pt-24 pb-12 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <BlogNav />
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-4">Performance</p>
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight mb-6 text-gray-900">
            Is your review app slowing down your Shopify store? How to measure it
          </h1>
          <P>
            Review widgets are some of the heaviest third-party scripts on Shopify stores. They fetch external
            data after page load, block the main thread, and cause layout shifts. This guide shows you exactly how
            to measure the performance cost with Lighthouse and Chrome DevTools - so you have concrete numbers, not
            suspicions.
          </P>
          <P className="text-gray-500 text-sm sm:text-base">
            Audience: merchants, developers, anyone running Lighthouse audits. Reading time: ~8 minutes.
          </P>
          <TableOfContents items={tocItems} />
        </div>
      </section>

      <Section id="why-review-apps-slow-stores">
        <H2 id="why-review-apps-slow-stores">1. Why review apps slow Shopify stores</H2>
        <P>
          Standard review apps (Loox, Judge.me, Stamped, Yotpo) follow the same pattern: they inject a JavaScript
          bundle into your theme that, on page load, fires a request to their external API server. The review data
          arrives after the page has already started rendering, and the JavaScript inserts it into the DOM.
        </P>
        <P>This creates three distinct performance problems:</P>
        <Ul>
          <li>
            <strong>Additional network requests to an external origin.</strong> Your page now depends on a server you
            don't control. Every millisecond of latency on that server directly delays your review content from
            appearing.
          </li>
          <li>
            <strong>JavaScript execution on the main thread.</strong> Parsing, compiling, and executing the review
            widget's JS bundle blocks other work. On lower-end mobile devices, this creates long tasks that delay
            user interaction.
          </li>
          <li>
            <strong>Layout shift on injection.</strong> When review cards are inserted into the DOM after initial
            paint, they push existing content downward. This is a direct source of Cumulative Layout Shift (CLS),
            one of Google's Core Web Vitals.
          </li>
        </Ul>
      </Section>

      <Section className="bg-gray-50" id="lighthouse-audit">
        <H2 id="lighthouse-audit">2. Running a Lighthouse audit</H2>

        <H3>Option A: PageSpeed Insights (no setup required)</H3>
        <P>
          Go to{" "}
          <ExternalLink href="https://pagespeed.web.dev">pagespeed.web.dev</ExternalLink> and enter the URL of a
          product page. This runs a Lighthouse audit against your live site from Google's servers under simulated
          mobile conditions - the same conditions Google uses when assessing Core Web Vitals for ranking.
        </P>
        <P>
          Run it on a product page that has reviews, not your homepage. That's where the widget loads.
        </P>

        <H3>Option B: Chrome DevTools Lighthouse (more control)</H3>
        <P>
          Open Chrome, go to your product page, open DevTools (<code className="bg-gray-200 px-1 rounded text-sm">F12</code>), and select
          the Lighthouse tab. Choose "Mobile" device emulation, check "Performance", and click "Analyze page load".
        </P>
        <P>
          For the most meaningful results, run the audit in a Chrome incognito window with no extensions active -
          extensions can interfere with timing measurements.
        </P>
        <Callout>
          Run the audit twice: once on a product page <em>with</em> reviews and once on a product page <em>without</em>{" "}
          reviews (or temporarily disable the review widget). The delta between the two scores is the widget's
          isolated cost.
        </Callout>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} has zero JavaScript widget - your reviews are rendered server-side in Liquid with no external network request, no render-blocking scripts.`} />
      </Section>

      <Section id="reading-lighthouse-results">
        <H2 id="reading-lighthouse-results">3. Reading the results: what to look for</H2>

        <H3>Opportunities: "Eliminate render-blocking resources"</H3>
        <P>
          If the review widget's script tag has no <code className="bg-gray-200 px-1 rounded text-sm">async</code> or{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">defer</code> attribute, it blocks HTML parsing entirely.
          Lighthouse will flag it here with an estimated savings in milliseconds.
        </P>

        <H3>Opportunities: "Reduce the impact of third-party code"</H3>
        <P>
          This section lists every third-party origin and its main-thread blocking time. Look for your review app's
          domain (typically something like <code className="bg-gray-200 px-1 rounded text-sm">cdn.loox.app</code>,{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">stamped.io</code>,{" "}
          <code className="bg-gray-200 px-1 rounded text-sm">yotpo.com</code>). The "Main-thread blocking time"
          column shows how many milliseconds the script blocked user interaction.
        </P>

        <H3>Diagnostics: "Avoid large layout shifts"</H3>
        <P>
          This section lists the DOM elements responsible for CLS. If review cards appear here, the widget is
          injecting them after initial paint without reserving space.
        </P>

        <H3>Metrics to record</H3>
        <P>Note these numbers before and after any changes:</P>
        <Ul>
          <li><strong>LCP (Largest Contentful Paint)</strong> - target under 2.5 s</li>
          <li><strong>CLS (Cumulative Layout Shift)</strong> - target under 0.1</li>
          <li><strong>TBT (Total Blocking Time)</strong> - proxy for INP; target under 200 ms</li>
          <li><strong>Performance score</strong> - weighted composite; useful for tracking trend</li>
        </Ul>
      </Section>

      <Section className="bg-gray-50" id="devtools-network">
        <H2 id="devtools-network">4. Isolating the widget with DevTools Network</H2>
        <P>
          Lighthouse gives you aggregate scores. DevTools Network shows you exactly what each request costs in time.
        </P>
        <P>
          Open DevTools, go to the Network tab, check "Disable cache", reload the page, and wait for everything to
          settle. Then filter by the review app's domain (type it in the filter box). You will see:
        </P>
        <Ul>
          <li>The JS bundle request - look at its size and transfer time</li>
          <li>The API data request - look at its TTFB (time to first byte) and transfer time</li>
          <li>Any image CDN requests for review photos</li>
        </Ul>
        <P>
          In the Waterfall column, note where these requests start relative to the initial HTML response (the first
          request in the waterfall). The gap between the HTML response and when review content becomes visible is the
          latency the widget is adding.
        </P>
        <Callout>
          Switch the Network tab throttling to "Slow 3G" to simulate a real mobile user on a poor connection. What
          felt like an acceptable 400 ms delay on fast Wi-Fi often becomes 3+ seconds on Slow 3G - which is the
          condition Lighthouse's mobile audit simulates.
        </Callout>
      </Section>

      <Section id="real-numbers">
        <H2 id="real-numbers">5. Real numbers: what a typical widget costs</H2>
        <P>
          Based on publicly documented audits and Lighthouse data for common Shopify review apps, typical costs are:
        </P>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Metric</th>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Typical JS widget</th>
                <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Server-side (Metaobjects)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["JS bundle size", "50–200 kB (gzipped)", "0 kB"],
                ["External API requests", "1–3 (data, fonts, images)", "0"],
                ["Main-thread blocking time added", "100–600 ms", "0 ms"],
                ["LCP delay added", "0.5–4 s (connection-dependent)", "0 s"],
                ["CLS from injection", "0.05–0.3 shift score", "0"],
              ].map(([metric, widget, native], index) => (
                <tr key={metric} className={index % 2 === 0 ? "" : "bg-gray-50/50"}>
                  <td className="p-3 font-medium text-gray-700">{metric}</td>
                  <td className="p-3 text-red-700">{widget}</td>
                  <td className="p-3 text-green-700">{native}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <P>
          These ranges are wide because they depend on the specific app, your CDN setup, the user's connection speed,
          and how many reviews are loaded. The point is not the exact number - it is that the server-side number is
          always zero, because no external request ever happens.
        </P>
        <InlineCta message={`${process.env.NEXT_PUBLIC_APP_NAME} is the server-side alternative - reviews load with the page HTML, no external API, and your Lighthouse score stays clean.`} />
      </Section>

      <Section className="bg-gray-50" id="the-architectural-fix">
        <H2 id="the-architectural-fix">6. The architectural fix</H2>
        <P>
          The only way to eliminate the performance cost of a review widget is to stop using one. This means storing
          review data inside Shopify itself - as Metaobjects - where it is accessible to Liquid during the
          server-side render. Reviews then become part of the initial HTML response, at zero extra cost in network
          requests or JS execution.
        </P>
        <P>
          Shopify's standard product review Metaobject definition (<code className="bg-gray-200 px-1 rounded text-sm">shopify--product-review</code>)
          is the official data structure for this. Review apps that write to this format store data in your Shopify
          store, not on their own servers - enabling Liquid-based rendering and eliminating the widget dependency
          entirely.
        </P>

        <ArticleAuthor />
        <div className="mt-6 border-t border-gray-200 pt-6">
          <P className="text-gray-500 text-sm">
            <strong>Further reading:</strong>{" "}
            <ExternalLink href="https://pagespeed.web.dev">PageSpeed Insights</ExternalLink>
            {" · "}
            <ExternalLink href="https://web.dev/articles/vitals">Core Web Vitals - web.dev</ExternalLink>
            {" · "}
            <ExternalLink href="https://web.dev/articles/lcp">Largest Contentful Paint</ExternalLink>
            {" · "}
            <ExternalLink href="https://web.dev/articles/cls">Cumulative Layout Shift</ExternalLink>
            {" · "}
            <ExternalLink href="https://developers.google.com/search/docs/appearance/core-web-vitals">CWV and Google ranking</ExternalLink>
          </P>
          <P className="text-gray-500 text-sm mt-2">
            <InternalLink href="/blog/how-shopify-product-reviews-work">How Shopify Metaobject reviews work →</InternalLink>
            {" · "}
            <InternalLink href="/blog/shopify-review-stars-not-showing-google">Fix missing review stars in Google →</InternalLink>
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
