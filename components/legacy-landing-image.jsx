import Image from "next/image"

export default function LegacyLandingImage() {
  return <section className="px-10 mt-4 sm:-mt-8 z-10 relative">
    <div className="bg-white rounded-xl overflow-hidden text-white mx-auto max-w-3xl">
      <Image
        src="https://assets.reviewsonmetaobjects.com/landing-01.jpg"
        alt="Reviews built on Shopify Metaobjects"
        className="h-auto w-full"
        width={1600}
        height={700}
        priority
        sizes="(max-width: 1024px) 100vw, 1024px"
      />
    </div>
  </section>
}
