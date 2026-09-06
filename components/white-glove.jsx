import Eyebrow from "./eyebrow"
import ListingCta from "./listing-cta"

const steps = [
  ["A 15-minute call", "We look at your store, your current review setup, and what you've always wanted it to do."],
  ["We install and match your theme", "All in a draft copy of your theme — your live store isn't touched until you approve it. Import, sync, configuration and blocks styled to your design, by a senior Shopify developer."],
  ["Live in days, reversible in an hour", "If the before/after doesn't convince you, we revert everything. Your reviews stay in your Shopify either way."],
];

export default function WhiteGlove() {
  return <section id="white-glove" className="bg-slate-950 bg-linear-to-t to-slate-800 text-white">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <Eyebrow>Done for you</Eyebrow>
        <h2 className="h2 mt-5">The founder sets it up for you.</h2>
        <p className="copy mt-4 max-w-xl text-gray-400">
          FiveOh is deliberately deep - the kind of tool a developer configures, not a wizard. You can
          set it up yourself from the App Store, or book a call if you want a senior Shopify developer
          to handle import, sync, configuration and theme-matched styling. We quote the work on the call.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <img
            src="https://s3.coders.fail/profile/marius-blank-512.jpg"
            alt="Marius, founder"
            className="h-14 w-14 rounded-full object-cover"
            width={56}
            height={56}
          />
          <div>
            <div className="font-bold tracking-tight">Marius Korbmacher</div>
            <div className="text-sm text-gray-400">Founder &middot; senior Shopify developer</div>
          </div>
        </div>

        <ListingCta className="btn mt-8 border-white bg-white text-gray-950 hover:bg-gray-100">Book a setup call</ListingCta>
      </div>

      <div className="flex flex-col">
        {steps.map(([title, description], index) => <div key={title} className="flex gap-4 border-t border-white/10 py-5 last:border-b">
          <div className="font-mono text-sm font-bold text-gray-500">0{index + 1}</div>
          <div>
            <div className="font-bold tracking-tight">{title}</div>
            <div className="mt-1 text-sm text-gray-400">{description}</div>
          </div>
        </div>)}
      </div>
    </div>
  </section>
}
