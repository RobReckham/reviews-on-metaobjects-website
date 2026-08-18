import AnimatedBackground from "./animated-background"

const feature2 = {
  title: "Manage reviews easily",
  baseColor: "oklch(82.7% 0.119 306.383)",
  baseColor: "oklch(21% 0.034 264.665)",
  items: [
    {
      title: "Approve or auto-publish",
      description: "Filter reviews by rating, content, or media attachments.",
    },
    {
      title: "Reply quickly",
      description: "Respond to reviews to build trust and improve customer satisfaction.",
    },
    {
      title: "Auto-translate",
      description: "All reviews are translated into your storefront’s languages automatically.",
    },
    {
      title: "Bulk actions",
      description: "Publish, unpublish, or delete multiple reviews at once from the dashboard.",
    },
  ]
}

export default function LegacyManage() {
  return <section className="bg-white py-8 sm:py-16 px-4">
    <div className="relative max-w-7xl mx-auto">
      <h2 className="h2 mb-4 text-gray-900 text-center">{feature2.title}</h2>
      <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
        <AnimatedBackground baseColor={feature2.baseColor} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
          {feature2.items.map((feature, index) => <div key={index} className={`bg-white backdrop-blur-sm rounded-xl p-6 text-gray-800`}>
            <h3 className="font-bold">{feature.title}</h3>
            <p className="mt-2">{feature.description}</p>
          </div>)}
        </div>
      </div>
    </div>
  </section>
}
