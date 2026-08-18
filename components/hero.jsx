import ListingCta from "./listing-cta";
import StarRating from "./star-rating";

const LISTING_URL = process.env.NEXT_PUBLIC_LISTING_URL || "https://apps.shopify.com/reviews-on-metaobjects";

export default function Hero() {
  return <section id="hero" className="mx-auto grid max-w-(--nextra-content-width) items-center gap-12 px-6 py-24 md:grid-cols-[1fr_420px]">
    {/* Copy */}
    <div className="max-w-3xl">
      <div className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        Native metaobjects &middot; pixel-perfect &middot; AI-readable
      </div>

      <h1 className="h1 mt-5">
        Social proof, as <span className="mark-hl">native</span> as your products.
      </h1>

      <p className="copy mt-6 max-w-xl">
        The Shopify-native display layer for your reviews. Keep the app you already have &mdash; FiveOh
        syncs it into native Shopify data and renders it server-side: styled to the pixel, and readable
        by AI and Google.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a href={LISTING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Install on Shopify
        </a>
        <ListingCta className="btn btn-inverted">Book a setup call</ListingCta>
      </div>

      <p className="footnote mt-6">
        Free plan &middot; 14-day trial on paid
      </p>
    </div>

    {/* Product card */}
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-xl justify-self-end max-w-md">
      <div className="relative mb-5 flex h-52 items-end overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 p-4">
        <svg viewBox="0 0 200 200" className="absolute inset-0 m-auto h-56 w-56" aria-hidden="true">
          <path d="M70,44 L48,36 L18,62 L34,90 L58,78 L58,170 L142,170 L142,78 L166,90 L182,62 L152,36 L130,44 C118,58 82,58 70,44 Z" fill="#c4c9d3" />
        </svg>
        <span className="relative inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-semibold text-gray-800 shadow-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          Bought 22&times; in the last 24 hrs
        </span>
      </div>

      <h2 className="text-xl font-bold tracking-tight">Merino Overshirt</h2>
      <p className="text-gray-500">&euro;148,00</p>

      <div className="mt-3 flex items-center gap-2">
        <StarRating className="text-lg" />
        <span className="font-semibold">4.9</span>
        <span className="text-gray-500">233 reviews</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <div className="inline-flex self-start items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
          94% five-star
        </div>
        <div className="inline-flex self-start items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-700">
          Last bought 12 hrs ago
        </div>
        <div className="inline-flex self-start items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-700">
          #2 best-selling
        </div>
      </div>

      <figure className="mt-5 border-t border-gray-100 pt-5">
        <blockquote className="text-gray-700">
          &ldquo;Exactly the fit the size guide promised.&rdquo;
        </blockquote>
        <figcaption className="mt-2 flex items-center gap-2 text-sm font-semibold">
          Katharina M. <span className="text-emerald-600">&#10003; Verified buyer</span>
        </figcaption>
      </figure>
    </div>
  </section>
}
