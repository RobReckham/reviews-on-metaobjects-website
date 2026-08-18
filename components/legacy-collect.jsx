import AnimatedBackground from "./animated-background"

const feature1 = {
  title: "Collect reviews intelligently",
  baseColor: "oklch(84.5% 0.143 164.978)",
  baseColor: "oklch(90.5% 0.093 164.15)",
  baseColor: "oklch(82.7% 0.119 306.383)",
  baseColor: "oklch(21% 0.034 264.665)",
  items: [
    {
      title: "Forms on product pages",
      description: "Let anyone leave reviews quickly.",
    },
    {
      title: "Post-purchase emails",
      description: "Automatically request reviews after purchase. Reward reviewers with a discount code - percentage or fixed - sent automatically once the review is submitted.",
    },
    {
      title: "Import & sync",
      description: "Migrate from other review services like Judge.me, reviews.io and more.",
    },
    {
      title: "Media support",
      description: "Allow images and videos to make reviews more engaging.",
    },
    {
      title: "Variant-specific reviews",
      description: "Show relevant reviews for the selected size, color or option.",
    },
    {
      title: "Automatic deduplication",
      description: "Prevents abuse and accidental imports.",
    },
  ]
}

export default function LegacyCollect() {
  return <section className="bg-white py-8 sm:py-16 px-4">
    <div className="relative max-w-7xl mx-auto">
      <h2 className="h2 mb-4 text-gray-900 text-center">{feature1.title}</h2>
      <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
        <AnimatedBackground baseColor={feature1.baseColor} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
          {feature1.items.map((feature, index) => <div key={index} className={`bg-white backdrop-blur-sm rounded-xl p-6 text-gray-800`}>
            <h3 className="font-bold">{feature.title}</h3>
            <p className="mt-2">{feature.description}</p>
          </div>)}
        </div>
      </div>
    </div>
  </section>
}
