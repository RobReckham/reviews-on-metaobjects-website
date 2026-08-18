import Eyebrow from "./eyebrow"
import StarRating from "./star-rating"

export default function CaseStudy() {
  return <section id="case-study" className="px-6 sm:px-8 py-20 sm:py-28">
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow>Proof</Eyebrow>
      <blockquote className="mt-6 text-2xl font-medium leading-relaxed tracking-tight text-gray-900 sm:text-3xl">
        &ldquo;We came from Trustpilot and wanted the reviews in the shop itself, not stuck in a
        widget. Import worked, and it keeps syncing reliably. What sold us: the data is ours
        (metaobjects), and the frontend is not locked.&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center justify-center gap-2 text-gray-500">
        <StarRating />
        <span>&mdash; <a href="https://apps.shopify.com/reviews/2320875" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">TISSO Naturprodukte</a>, Germany</span>
      </div>
    </div>
  </section>
}
