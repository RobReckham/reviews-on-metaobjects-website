import { Fragment } from "react"
import Eyebrow from "./eyebrow"

const gauges = [
  { score: 84, label: "JS review widget", color: "#FFAA32", textColor: '#C33200', background: '#FFF6EC' },
  { score: 92, label: "FiveOh", color: "#00CC66", textColor: '#008800', background: '#ECFAF0' },
];

export default function Performance() {
  return <section id="performance" className="px-6 py-24">
    <div className="mx-auto max-w-7xl text-center">
      <Eyebrow>Performance</Eyebrow>
      <h2 className="h2 mt-5">Social proof without the speed cost.</h2>
      <p className="copy mx-auto mt-4 max-w-2xl">
        Reviews render server-side in Liquid, so the browser gets finished HTML on first byte &mdash;{` `}
        <b>no render-blocking script, no layout shift, no loading spinner.</b>
      </p>

      <div className="mt-12 flex items-center justify-center gap-4">
        {gauges.map((gauge, index) => <Fragment key={gauge.label}>
          {index > 0 && <span className="text-3xl text-gray-300 -mt-8" aria-hidden="true">&rarr;</span>}
          <div>
            <div className="relative mx-auto grid h-26 w-26 place-items-center rounded-full" style={{ background: `conic-gradient(${gauge.color} ${gauge.score}%, ${gauge.background} 0)` }}>
              <div className="absolute inset-1.5 rounded-full" style={{ background: gauge.background }} />
              <span className="relative text-4xl tracking-tight font-mono" style={{ color: gauge.textColor }}>{gauge.score}</span>
            </div>
            <div className="mt-4 text-sm text-gray-500">{gauge.label}</div>
          </div>
        </Fragment>)}
      </div>

      <p className="footnote mt-10">
        Illustrative mobile Lighthouse example &mdash; results vary by theme and catalog.
      </p>
    </div>
  </section>
}
