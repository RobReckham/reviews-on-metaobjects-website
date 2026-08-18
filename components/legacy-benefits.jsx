import AnimatedBackground from "./animated-background"

// TODO(marketing): Session-aware reviews - logged-in customers are linked via app-proxy session + author prefill. Differentiator vs typical review apps. Add to benefits/copy (also noted in CLAUDE.md).
const benefits = {
  title: "Why reviews should live directly in Shopify",
  subtitle: "Third-party review apps slow your store and lock you in. There’s a better way.",
  baseColor: "oklch(88.2% 0.059 254.128)",
  baseColor: "oklch(21% 0.034 264.665)",
  items: [
    {
      title: "Faster pages",
      Icon: function Icon({ className }) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
      </svg>},
      description: "Other apps load reviews with JavaScript after the page is already painted. We render them server-side in Liquid - so they appear with the rest of the page. Better Core Web Vitals, social proof visible from the first frame.",
    },
    {
      title: "Better SEO",
      Icon: function Icon({ className }) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clipRule="evenodd" />
      </svg>},
      description: "Other apps hide review texts from Google, ChatGPT, and Perplexity. We expose the full content - so your reviews get indexed, rank for long-tail searches, and help AI tools answer specific questions about your products.",
    },
    {
      title: "Full design freedom",
      Icon: function Icon({ className }) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.143 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
      </svg>},
      description: "No iframes, no locked-down widget. Reviews are plain Shopify data - access them directly in Liquid and build exactly what your brand needs. Use the ready-made app blocks or write your own sections from scratch.",
    },
    {
      title: "Complete control",
      Icon: function Icon({ className }) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
      </svg>},
      description: "Your reviews live in Shopify. No vendor lock-in. Keep them even after uninstalling our app. Import, export, customize! Syncs automatically to the Shop app.",
    },
    // {
    //   title: "Fair pricing",
    //   Icon: function Icon({ className }) { return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    //     <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
    //     <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
    //     <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
    //   </svg>},
    //   description: "We leverage Shopify’s infrastructure, so we can offer a free plan and low-cost paid tiers especially for larger stores.",
    // },
  ],
}

export default function LegacyBenefits() {
  return <section className="bg-white pt-16 sm:pt-32 px-4">
    <div className="relative max-w-7xl mx-auto">
      <div className="relative p-6 sm:p-16 rounded-4xl overflow-hidden">
        <AnimatedBackground baseColor={benefits.baseColor} />
        <h2 className="h2 text-white text-shadow-sm mb-4 text-center relative sm:mb-8">{benefits.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
          {benefits.items.map((benefit, index) => <div key={index} className={`bg-white/10 rounded-2xl p-6 border border-white/20`}>
            <div className="flex justify-between items-center gap-1 text-white">
              <h3 className="font-bold">{benefit.title}</h3>
              {benefit.Icon && <benefit.Icon className="w-5 h-5" />}
            </div>
            <p className="mt-2 text-white/80">{benefit.description}</p>
          </div>)}
        </div>
      </div>
    </div>
  </section>
}
