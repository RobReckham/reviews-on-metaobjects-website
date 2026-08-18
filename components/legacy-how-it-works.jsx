const howItWorks = {
  title: "How it works",
  baseColor: "oklch(81.1% 0.111 293.571)",
  baseColor: "oklch(90.5% 0.093 164.15)",
  baseColor: "oklch(88.2% 0.059 254.128)",
  steps: [
    "1. Install the app from the Shopify App Store.",
    "Optional: Import or sync existing reviews from existing services like Judge.me, Loox, reviews.io, or a CSV.",
    "2. Add ready-made sections to your storefront to collect and display reviews.",
    "3. Your data stays yours, your rankings climb, your pages load faster, and your conversions follow.",
  ]
}

export default function LegacyHowItWorks() {
  return <section className="bg-white py-16 sm:py-32 px-4">
    <div className="relative max-w-2xl mx-auto">
      <h2 className="h2 mb-4 text-gray-900 text-center">{howItWorks.title}</h2>
      <div className="grid grid-cols-1 gap-4 relative">
        {howItWorks.steps.map((step, index) => (
          <div key={index} className="text-gray-800 border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-lg">{step}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
}
