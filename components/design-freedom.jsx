import Eyebrow from "./eyebrow"
import CodeSnippet from "./code-snippet"
import StarRating from "./star-rating"

export default function DesignFreedom() {
  return <section id="design-freedom" className="">
    <div className="mx-auto max-w-7xl px-6 py-24 grid items-center gap-12 *:min-w-0 lg:grid-cols-2">
      <div>
        <Eyebrow>Design freedom</Eyebrow>
        <h2 className="h2 mt-5">If you can design it, we render it.</h2>
        <p className="copy mt-4 max-w-xl">
          Use our app blocks, or build your own. Every review lives in <b>your theme&rsquo;s Liquid</b>
          &mdash; yours to structure, class and style. Designers and developers both get exactly what
          they want.
        </p>
      </div>

      <div>
        <CodeSnippet filename="sections/reviews.liquid">
          <span className="text-[#fde047]">{"{% for"}</span>{" review "}<span className="text-[#fde047]">{"in"}</span>{" product.metafields.fiveoh.newest.value "}<span className="text-[#fde047]">{"%}"}</span>{"\n"}
          <span className="text-gray-500">{"<"}</span><span className="text-[#7fb7ff]">{"div"}</span>{" class="}<span className="text-[#8fe3a9]">{'"review"'}</span><span className="text-gray-500">{">"}</span>{"\n"}
          {"  "}<span className="text-gray-500">{"<"}</span><span className="text-[#7fb7ff]">{"fo-stars"}</span>{" value="}<span className="text-[#8fe3a9]">{'"{{ review.rating.value }}"'}</span>{" "}<span className="text-gray-500">{"/>"}</span>{"\n"}
          {"  "}<span className="text-[#fde047]">{"{{"}</span>{" review.body "}<span className="text-[#fde047]">{"}}"}</span>{"\n"}
          {"  "}<span className="text-[#fde047]">{"{{"}</span>{" review.author_display_name "}<span className="text-[#fde047]">{"}}"}</span>{"\n"}
          {"  "}<span className="text-gray-500">{"<"}</span><span className="text-[#7fb7ff]">{"fo-verified-badge"}</span>{" value="}<span className="text-[#8fe3a9]">{'"{{ review.app_verification_status }}"'}</span><span className="text-gray-500">{" />"}</span>{"\n"}
          <span className="text-gray-500">{"</"}</span><span className="text-[#7fb7ff]">{"div"}</span><span className="text-gray-500">{">"}</span>{"\n"}
          <span className="text-[#fde047]">{"{% endfor %}"}</span>
        </CodeSnippet>

        <div className="mt-3 text-center font-mono text-sm text-gray-400">&darr;&nbsp;&nbsp;renders to</div>

        <div className="mt-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <StarRating className="text-lg" />
            <span className="font-semibold">5.0</span>
          </div>
          <p className="mt-2 text-gray-700">&ldquo;Arrived in two days, fits like the photos.&rdquo;</p>
          <div className="mt-2 flex items-center gap-2 text-sm font-semibold">
            Jonas R. <span className="text-emerald-600">&#10003; Verified</span>
          </div>
        </div>
      </div>
    </div>
  </section>
}
