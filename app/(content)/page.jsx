import plans from "../../utils/plans"
import Hero from "../../components/hero"
import Problems from "../../components/problems"
import Architecture from "../../components/architecture"
import WorksWith from "../../components/works-with"
import DesignFreedom from "../../components/design-freedom"
import Blocks from "../../components/blocks"
import AiReadable from "../../components/ai-readable"
import Performance from "../../components/performance"
import RealData from "../../components/real-data"
import Workflow from "../../components/workflow"
import CaseStudy from "../../components/case-study"
import WhiteGlove from "../../components/white-glove"
import PricingSection from "../../components/pricing-section"
import FaqSection from "../../components/faq-section"
import CtaBand from "../../components/cta-band"
import LegacyMoreInfo from "../../components/legacy-more-info"
import LegacyBenefits from "../../components/legacy-benefits"
import LegacyLandingImage from "../../components/legacy-landing-image"
import LegacyTagline from "../../components/legacy-tagline"
import LegacyCollect from "../../components/legacy-collect"
import LegacyManage from "../../components/legacy-manage"
import LegacyDisplay from "../../components/legacy-display"
import LegacyDemoStore from "../../components/legacy-demo-store"
import LegacyHowItWorks from "../../components/legacy-how-it-works"
import LegacyFounder from "../../components/legacy-founder"
import LegacyPricing from "../../components/legacy-pricing"
import LegacyFinalCta from "../../components/legacy-final-cta"
import LegacyFaqs from "../../components/legacy-faqs"

export const metadata = {
  title: `Shopify reviews on native metaobjects - pixel-perfect & AI-readable | ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: "The Shopify-native display layer for product reviews. Keep your review app or collect natively - reviews render server-side in Liquid: pixel-perfect, faster pages, and readable by Google and AI. Native metaobjects, no iframe, no lock-in.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: process.env.NEXT_PUBLIC_APP_NAME,
        description: "The Shopify app that provides all tools to manage Shopify's standard product review Metaobjects.",
        image: "https://assets.reviewsonmetaobjects.com/logo-300.jpg",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: plans.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          price: plan.price,
          priceCurrency: plan.priceCurrency,
          description: plan.description,
          availability: "https://schema.org/InStock",
          url: process.env.NEXT_PUBLIC_LISTING_URL || undefined,
        })),
      }) }}
    />
    <main className="bg-white min-h-screen text-gray-900">
      <Hero />
      {true && <WorksWith />}
      {false && <Problems />}
      <Architecture />
      <Blocks />
      <DesignFreedom />
      <AiReadable />
      <Performance />
      {false && <RealData />}
      <Workflow />
      <CaseStudy />
      <WhiteGlove />
      {false && <LegacyMoreInfo />}
      {false && <LegacyBenefits />}
      {false && <LegacyLandingImage />}
      {false && <LegacyTagline />}
      {false && <LegacyCollect />}
      {false && <LegacyManage />}
      {false && <LegacyDisplay />}
      {false && <LegacyDemoStore />}
      {false && <LegacyHowItWorks />}
      {false && <LegacyFounder />}
      {false && <LegacyPricing />}
      {false && <LegacyFinalCta />}
      {false && <LegacyFaqs />}
      <PricingSection />
      <FaqSection />
      <CtaBand />
    </main>
  </>
}
