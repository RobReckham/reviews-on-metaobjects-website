import Link from "next/link"
import ListingCta from "./listing-cta"

export default function FounderSection() {
  return (
    <section className="bg-white py-16 sm:py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img
              src="https://s3.coders.fail/profile/marius-blank-512.jpg"
              alt={process.env.NEXT_PUBLIC_AUTHOR_NAME}
              className="h-20 w-20 rounded-full shrink-0"
              width={96}
              height={96}
            />
            <div>
              <p className="font-bold text-lg">{process.env.NEXT_PUBLIC_AUTHOR_NAME}</p>
              <p className="text-gray-500 text-sm">Founder & Senior Shopify developer for 5+ years<br />worked on stores for ProSiebenSat.1, Artdeco, New Balance and many more</p>
            </div>
          </div>
          <p className="text-gray-700">
            After years of Shopify dev work I kept hitting the same two walls with review apps: third-party scripts quietly contributing to slower pages, and widgets rendered in iframes that your CSS can't reach - making it very hard and sometimes impossible to match a client's design. Shopify already has a native data type for reviews that sidesteps both. I built the tooling around it.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ListingCta href={process.env.NEXT_PUBLIC_CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a free call</ListingCta>
            <Link href="/about" className="text-sm underline underline-offset-2 text-gray-500 hover:text-gray-900 transition-colors">Read the full story</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
