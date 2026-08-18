const apps = [
  "/logo-judgeme.jpg",
  "/logo-loox.svg", 
  "/logo-stamped.svg",
  "/logo-yotpo.svg",
  "/logo-trustpilot.svg",
  "/logo-reviewsio.jpg",
];

export default function WorksWith() {
  return <section id="works-with" className="border-y border-gray-100 bg-gray-50/60 px-6 sm:px-8 py-12">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        Keep the reviews app you already have.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {apps.map((app) => <img key={app} src={`/review-apps/${app}`} alt={app} className="h-4 w-auto black" />)}
        <span className="">... and more</span>
      </div>
      <p className="footnote">&hellip;or collect with FiveOh. It works standalone, too.</p>
    </div>
  </section>
}
