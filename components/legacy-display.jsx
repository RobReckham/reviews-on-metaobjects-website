import AnimatedBackground from "./animated-background"

const feature3 = {
  title: "Display reviews confidently",
  baseColor: "oklch(81% 0.117 11.638)",
  baseColor: "oklch(82.7% 0.119 306.383)",
  baseColor: "oklch(21% 0.034 264.665)",
  items: [
    {
      title: "Flexible placement",
      description: "Product ratings on product & collection pages, full review lists anywhere.",
    },
    {
      title: "Advanced filtering & search",
      description: "Let customers find the most relevant reviews easily.",
    },
    {
      title: "Language-aware",
      description: "Display reviews in the visitor’s language automatically.",
    },
    {
      title: "Fully customizable blocks",
      description: "Pre-built customizable app blocks work out of the box, but you can also build your own using the Metaobjects data directly.",
    },
  ]
}

export default function LegacyDisplay() {
  return <section className="bg-white py-8 sm:py-16 px-4">
    <div className="relative max-w-7xl mx-auto">
      <h2 className="h2 mb-4 text-gray-900 text-center">{feature3.title}</h2>
      <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
        <AnimatedBackground baseColor={feature3.baseColor} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
          {feature3.items.map((feature, index) => <div key={index} className={`bg-white backdrop-blur-sm rounded-xl p-6 text-gray-800`}>
            <h3 className="font-bold">{feature.title}</h3>
            <p className="mt-2">{feature.description}</p>
          </div>)}
        </div>
      </div>
    </div>
  </section>
}
