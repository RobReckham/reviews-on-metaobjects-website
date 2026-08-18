import ListingCta from "../../../components/listing-cta"
import DemoStore from "../../../components/demo-store"
import Eyebrow from "../../../components/eyebrow"

const LISTING_URL = process.env.NEXT_PUBLIC_LISTING_URL || "https://apps.shopify.com/reviews-on-metaobjects"

export const metadata = {
  title: `Marius Korbmacher - Shopify Developer Behind ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: `Shopify developer with 5+ years building high-traffic stores. Built ${process.env.NEXT_PUBLIC_APP_NAME} because no review app was doing it right.`,
  alternates: {
    canonical: "/about",
  },
}

const brands = [
  "ProSiebenSat.1",
  "Artdeco",
  "Bugatti Fashion",
  "New Balance",
  "Wildling Shoes",
  "Giesswein",
  "Gloryfy Unbreakable",
  "VOSSEN",
  "ORTLIEB",
  "BURG-WÄCHTER",
  "Luisa Cerano",
  "MAC Jeans",
  "Wattstunde",
  "Francotyp",
  "Nitro Snowboards",
  "Solarkontor",
  "Swidro",
  "lavera Naturkosmetik",
  "TISSO Naturprodukte",
  "... and many more",
]

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">

      {/* Hero */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow>The developer behind {process.env.NEXT_PUBLIC_APP_NAME}</Eyebrow>
          </div>
          <h1 className="h1 mt-5 mb-6">Hi, I'm Marius</h1>
          <p className="copy mx-auto max-w-2xl">
            Fullstack developer from Germany. Ten years writing software, the last five spent almost exclusively inside the Shopify ecosystem. This app is the thing I built because I couldn't find a version of it that was done right.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 sm:py-32 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="prose prose-gray space-y-4">
            <div className="flex flex-col sm:flex-row items-start gap-10">
              <img
                src="https://s3.coders.fail/profile/marius-blank-512.jpg"
                alt={process.env.NEXT_PUBLIC_AUTHOR_NAME}
                className="h-32 w-32 rounded-full shrink-0"
                width={128}
                height={128}
              />
              <p>
                I work as a freelance Shopify developer, mostly for agencies in Germany but also internationally. Over five years I've worked on stores for brands like {brands.slice(0, 5).join(", ")}, and dozens more. Most of them serious, high-traffic stores where performance actually costs money.
              </p>
            </div>
            <p>
              The same problem came up on almost every store I touched. The client would complain that their store felt slow. I'd run a Lighthouse audit. And there it was - a third-party review app, injecting a JavaScript widget that fired after page load, fetching reviews from some external server, causing layout shift, dragging down LCP. Every. Single. Time.
            </p>
            <p>
              And when performance wasn't the immediate complaint, styling was. Review widgets are often rendered inside iframes or use shadow DOM - your CSS simply can't reach them. Matching a client's Figma design meant hours of patching around someone else's markup with workarounds that broke on the next app update. Sometimes it wasn't possible at all. You'd end up explaining to the client why their review section looks different from everything else on the page.
            </p>
            <p>
              The frustrating part is that Shopify already has a native, built-in data type for product reviews - the standard product review metaobject. It's been part of the platform for years. Reviews stored there render in Liquid the same way product titles do. No JavaScript. No external round-trip. No layout shift. Faster pages, structured data Google can actually index, star ratings in search results.
            </p>
            <p>
              The tools to manage that data properly just didn't exist. Most review apps ignore the standard entirely and run their own proprietary database - because it makes migration harder and lock-in stronger. So I built {process.env.NEXT_PUBLIC_APP_NAME}: an app that actually uses Shopify's own standard, does all the review collection and management work on top of it, and gets out of the way when it comes to rendering.
            </p>
            <p>
              The result: faster product pages, better Core Web Vitals, star ratings in Google, and reviews your client owns permanently - regardless of which app they're using to manage them.
            </p>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-white pb-16 sm:pb-32 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6"><Eyebrow>Stores I've worked on</Eyebrow></div>
          <div className="flex flex-wrap gap-3">
            {brands.map((brand) => (
              <span key={brand} className="bg-gray-100 text-gray-700 rounded-lg px-4 py-2 text-sm font-medium">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-16 sm:pb-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-4xl bg-slate-950 bg-linear-to-t to-slate-800 p-8 text-center sm:p-16">
            <h2 className="h2 text-white mb-4">Want to talk through your store?</h2>
            <p className="mx-auto max-w-xl text-gray-400 mb-8">
              I onboard stores hands-on. Book a quick call and I'll tell you exactly what impact switching would have on your specific setup.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={LISTING_URL} target="_blank" rel="noopener noreferrer" className="btn border-white bg-white text-gray-950 hover:bg-gray-100">Install on Shopify</a>
              <ListingCta href={process.env.NEXT_PUBLIC_CALENDLY_LINK} className="btn border-white/25 bg-transparent text-white hover:bg-white/10">Book a free call</ListingCta>
            </div>
            <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="mt-4 inline-block text-sm text-gray-400 underline hover:text-white">...or send me an email</a>
          </div>
        </div>
      </section>
    </main>
  )
}
