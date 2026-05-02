import AnimatedBackground from "./animated-background"
import ListingCta from "./listing-cta"

export default function FinalCta({ title, subtitle, ctaLabel }) {
  return (
    <section className="py-16 sm:py-32 px-8 mb-16 relative">
      <div className="absolute inset-4 rounded-4xl overflow-hidden">
        <AnimatedBackground baseColor="oklch(27.8% 0.033 256.848)" />
      </div>
      <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="h2 text-white text-shadow-sm relative z-10 mb-4">{title}</h2>
          <p className="text-white text-xl text-shadow-sm relative z-10">{subtitle}</p>
        </div>
        <div className="inline-flex justify-center items-center gap-4 relative">
          <ListingCta className="btn btn-primary btn-inverted opacity-100!">{ctaLabel}</ListingCta>
          <div className="text-right absolute -right-6 -top-2 z-10">
            <img src="/shopify_glyph.svg" alt="Shopify Logo" className="h-14" width="49" height="56" />
          </div>
        </div>
      </div>
    </section>
  )
}
