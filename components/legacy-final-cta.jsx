import FinalCta from "./final-cta"

const finalCta = {
  title: "Ready for faster, native reviews?",
  baseColor: "oklch(27.8% 0.033 256.848)",
  description: "No more slow, third-party review apps. Take control of your reviews today.",
  ctaText: "Claim early access!",
}

export default function LegacyFinalCta() {
  return <FinalCta title={finalCta.title} subtitle={finalCta.description} ctaLabel={finalCta.ctaText} />
}
