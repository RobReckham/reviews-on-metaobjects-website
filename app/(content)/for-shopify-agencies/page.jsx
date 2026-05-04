import AnimatedBackground from "../../../components/animated-background"
import ListingCta from "../../../components/listing-cta"
import FinalCta from "../../../components/final-cta"
import Faqs from "../../../components/faqs"
import Pricing from "../../../components/pricing"

export const metadata = {
  title: "Shopify Review App for Agencies - No JavaScript Widget, Client Data Stored in Shopify",
  description: `Stop recommending review apps that tank your client's Lighthouse scores. ${process.env.NEXT_PUBLIC_APP_NAME} renders reviews server-side in Liquid via native Shopify Metaobjects - no widget, no lock-in, no performance hit.`,
  alternates: {
    canonical: "/for-shopify-agencies",
  },
}

const painPoints = [
  {
    title: "Every JS widget is technical debt you didn't ask for",
    description: "Standard review apps inject client-side scripts that fetch and render reviews after page load. LCP drops, CLS spikes, Lighthouse flags it. Then your client asks why their score tanked after your last install.",
  },
  {
    title: "Your recommendation is the lock-in",
    description: "When reviews live on the app's servers, your client can't actually leave. Cancel, lose the reviews or work around by exporting and importing. That's not a dynamic you want sitting between your client and a tool you picked for them.",
  },
  {
    title: "Widgets that fight the theme you wrote",
    description: "Many review widgets render inside an iframe or use shadow DOM - your CSS can't reach them at all. Matching a client's Figma design means hours of reverse-engineering someone else's markup, only for the next app update to break it. Sometimes pixel-perfect is simply not possible.",
  },
  {
    title: "Stuck in a ticket queue while your client is on the phone",
    description: "When something breaks on a client site, you can't afford a chatbot and a 48-hour SLA. You need a human who understands the stack and answers within the hour.",
  },
]

const benefits = [
  {
    title: "No JavaScript widgets",
    description: "Reviews render server-side in Liquid with the rest of the page. No external script, no extra round-trip, no layout shift. Your client's Lighthouse score stays exactly where you left it.",
  },
  {
    title: "Built on Shopify's standard product review spec",
    description: "Not a proprietary schema. The data model is Shopify's own Metaobject definition. Queryable from Admin GraphQL, Storefront API, and Liquid. Compatible with any tool that reads the same standard. Nothing custom to work around later.",
  },
  {
    title: "Full Liquid customization",
    description: "Our app blocks are configurable and individually styleable with regular CSS. But the real power is underneath: query review data directly in your own Liquid files and build any custom display from scratch - your markup, your classes, your design. Figma to code with no compromises.",
  },
  {
    title: "Client data stays in Shopify. Forever.",
    description: "Every review is a standard Shopify Metaobject - in the client's own store, visible in the admin, accessible via Liquid and the Storefront API. Cancel the app, the data stays. You deliver a lock-in-free solution.",
  },
  {
    title: "Priority support for agencies",
    description: "When a client site has an issue, we prioritize agency requests. Direct line, fast response, no ticket queue - because your client's timeline is our timeline.",
  },
  {
    title: "Automated review collection out of the box",
    description: "Post-purchase review request emails are included. No dev work, no third-party integration, no extra cost. Your client starts collecting reviews from day one without any manual setup.",
  },
]

const steps = [
  {
    title: "Book a 20-minute call",
    description: "We talk through your client portfolio together and figure out which store is the best fit to start with. No commitment, no need to share anything in advance. Just a conversation.",
  },
  {
    title: "We do the work in your name",
    description: "Once you give us the green light, we handle everything end-to-end - app install, theme block placement, brand-matched styling, post-purchase email setup, review migration. All under your agency. Your client sees you delivered a clean review system.",
  },
  {
    title: "We sync the existing reviews",
    description: "Continuous sync from Judge.me, Loox, or REVIEWS.io. CSV import from anywhere else. Variants, images, and replies preserved. Zero data loss, zero downtime on the storefront.",
  },
  {
    title: "You take credit for a system that outlasts the subscription",
    description: "Reviews live as standard Metaobjects in the client's store. They survive an app cancellation, a theme migration, and even a future agency switch. The only thing the client can't do is lose the data - and you're the one who set that up.",
  },
]

const faqs = [
  {
    question: "What exactly is included in the free setup?",
    answer: "Everything from app install through to a live, brand-matched review system on the client's store. Theme integration on product and collection pages, app block configuration, display styling matched to the existing theme, post-purchase email setup, review migration. All of it done under your agency, so your client sees your team delivering it. If they need something more bespoke beyond that, we scope it together.",
  },
  {
    question: "What does priority support mean in practice?",
    answer: "Direct line to the developer who built the app. Agency tickets jump the queue. Replies in hours, not days. No Tier-1 agent reading you a checklist - you talk to someone who can actually open the codebase.",
  },
  {
    question: "Can I customise the display design for each client?",
    answer: "The app blocks are highly configurable and individually styleable via their settings. Beyond that, since all review data lives in Shopify's standard Metaobjects, you can access it directly in your own theme Liquid files and build any custom display from scratch - completely independent of our blocks.",
  },
  {
    question: "What happens to a client's reviews if they cancel the app?",
    answer: "Nothing happens. Reviews are stored in Shopify's standard product review Metaobjects - a native data type in every Shopify store. They remain there permanently, accessible via Liquid and the Shopify APIs, even after the app is uninstalled.",
  },
  {
    question: "Does this affect my client's Lighthouse score?",
    answer: "Yes - in the right direction. There's no client-side script for review rendering. Reviews are part of the initial HTML response, served with the rest of the page via Liquid. Zero additional network requests, no render-blocking JS, no layout shift on review load. If you're migrating from a widget-based app, expect a measurable LCP and CLS improvement on every product page.",
  },
  {
    question: "Is there agency pricing or a volume discount?",
    answer: "Not a formal agency tier right now - but reach out directly. If you're managing multiple client stores, we'll find something that works. And as a baseline: our pricing is flat with a hard cap, so clients never face an unexpectedly large bill as they grow.",
  },
  {
    question: "Can I migrate my client's existing reviews from another app?",
    answer: "Yes. We support continuous sync from Judge.me, Loox, and REVIEWS.io, plus CSV imports from any other source. During early access, we handle the migration as part of the setup.",
  },
]

export default function ForShopifyAgenciesPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">

      {/* Hero */}
      <section className="py-12 sm:py-24 relative">
        <div className="absolute inset-4 rounded-4xl overflow-hidden">
          <AnimatedBackground />
        </div>
        <div className="px-8 py-4 text-center relative z-10">
          <p className="h4">Built by a Shopify dev, on Shopify's standard product review Metaobject</p>
          <h1 className="h1 mt-4 mb-6 max-w-4xl mx-auto">The review app you'd build if you had the time</h1>
          <div className="max-w-2xl mx-auto">
            <p className="mb-8 text-lg">
              Zero client-side JavaScript. Reviews stored as standard Shopify Metaobjects, queryable from any Liquid file. Flat pricing with a hard cap. No Lighthouse regression. No vendor lock-in. No surprise bills as your client scales.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex justify-center items-center gap-4 relative">
              <ListingCta href={process.env.NEXT_PUBLIC_CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a free demo call</ListingCta>
              <div className="text-right absolute -right-6 -top-2 z-10">
                <img src="/shopify_glyph.svg" alt="Shopify Logo" className="h-14" width="49" height="56" />
              </div>
            </div>
            <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="underline">...or send us an email</a>
          </div>
        </div>
      </section>


      {/* Pain points */}
      <section className="bg-white pt-16 sm:pt-32 px-4">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="h2 mb-4 text-gray-900 text-center">You've already had this conversation with a client</h2>
          <p className="text-center text-gray-500 mb-8 max-w-4xl mx-auto">Most review apps are designed by people who never have to maintain them. You do.</p>
          <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
            <AnimatedBackground baseColor="oklch(21% 0.034 264.665)" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              {painPoints.map((point, index) => (
                <div key={index} className="bg-white backdrop-blur-sm rounded-xl p-6 text-gray-800">
                  <h3 className="font-bold text-lg mb-2">{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="relative max-w-7xl mx-auto">
          <h2 className="h2 mb-4 text-gray-900 text-center">Built on Shopify primitives, priced for the long term</h2>
          <p className="text-center text-gray-500 mb-8 max-w-4xl mx-auto">Every technical decision favors the agency that recommends it and the client who lives with it for years.</p>
          <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
            <AnimatedBackground baseColor="oklch(21% 0.034 264.665)" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white backdrop-blur-sm rounded-xl p-6 text-gray-800">
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Code snippet - direct Liquid access */}
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="h2 mb-4">Your reviews. Your Liquid. Your rules.</h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">Reviews are standard Shopify Metaobjects - which means you can query them directly in any Liquid file. No wrapper, no proprietary API call, no dependency on our app blocks.</p>
          <pre className="bg-gray-950 text-left text-green-400 rounded-2xl p-8 overflow-x-auto text-sm font-mono leading-relaxed"><code>{`{% for review in product.metafields.reviews.list.value %}
  <div class="review">
    <span class="rating">{{ review.rating.value }}/5</span>
    <h3>{{ review.title.value }}</h3>
    <p>{{ review.body.value }}</p>
    <small>{{ review.author_display_name.value }}</small>
  </div>
{% endfor %}`}</code></pre>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="relative max-w-2xl mx-auto">
          <h2 className="h2 mb-4 text-gray-900 text-center">How it works for agencies</h2>
          <p className="text-center text-gray-500 mb-8 max-w-4xl mx-auto">From a 15-minute call to a fully integrated client store. You stay the agency. We stay invisible.</p>
          <div className="grid grid-cols-1 gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-gray-800 border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-lg mb-2">{index + 1}. {step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free setup - personal section */}
      <section className="bg-white py-16 sm:py-32 px-4 flex justify-center gap-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 sm:p-16 rounded-4xl overflow-hidden">
            <AnimatedBackground baseColor="oklch(27.8% 0.033 256.848)" />
            <div className="relative z-10">
              <h2 className="h2 text-white text-shadow-sm mb-4 text-center">I'll do the entire setup in your name</h2>
              <p className="text-white/80 text-center mb-10">
                During early access I'm onboarding agency clients hands-on. Book a quick call and we'll figure out together if our app is a good fit for your clients. From there, I personally handle the full integration - install, theme blocks, brand-matched styling, review migration - all branded as your work. Zero implementation hours on your side. Zero handoff to junior support.
              </p>
              <div className="space-y-4 bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <img
                    src="https://s3.coders.fail/profile/marius-blank-512.jpg"
                    alt={process.env.NEXT_PUBLIC_AUTHOR_NAME}
                    className="h-20 w-20 rounded-full shrink-0"
                    width={80}
                    height={80}
                  />
                  <div>
                    <p className="font-bold text-white text-lg">{process.env.NEXT_PUBLIC_AUTHOR_NAME}</p>
                    <p className="text-white/70 text-sm mb-3">Founder & Senior Shopify developer for 5+ years<br />worked on stores for ProSiebenSat.1, Artdeco, New Balance and many more</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">"I've done the agency work. I know what it's like to explain a Lighthouse regression to a client, or spend hours trying to match a Figma file inside an iframe you can't style. Every setup I do is clean, correct, and built to last."</p>
                <p className="text-white/70 text-sm text-right"><a href="/about" className="underline underline-offset-2 hover:text-white transition-colors">Read the full story</a></p>
              </div>
              <div className="mt-8 text-center flex flex-col items-center gap-4">
                <ListingCta href={process.env.NEXT_PUBLIC_CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-inverted opacity-100!">Book a free demo call</ListingCta>
                <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="text-white underline">...or send us an email</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="bg-white py-16 sm:py-32 px-4" id="pricing">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="h2 mb-4">A price your clients will never complain about</h2>
          <p className="text-gray-500 mb-12">Flat pricing with a hard cap - because we don't run our own review infrastructure. Shopify does. Depending on what your client pays today, switching can easily save them a few thousand dollars a year.</p>
          <Pricing />
        </div>
      </section>

      <FinalCta
        title="Your clients deserve a review app that won't slow them down."
        subtitle="No JS widget. Liquid-accessible data. No lock-in. Client reviews stay in Shopify."
        ctaLabel="Book a free demo call"
      />

      {/* FAQ */}
      <section className="py-16 sm:py-32 relative">
        <AnimatedBackground baseColor="oklch(92.8% 0.006 264.531)" />
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <h2 className="h2 text-right">Agency FAQ</h2>
          <Faqs faqs={faqs} pageUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/for-shopify-agencies`} />
          <p className="text-right mt-8 text-sm text-gray-500">
            <a href="/" className="underline underline-offset-2 hover:text-gray-900 transition-colors">More about {process.env.NEXT_PUBLIC_APP_NAME} →</a>
          </p>
        </div>
      </section>

    </main>
  )
}
