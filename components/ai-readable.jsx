import Eyebrow from "./eyebrow"
import CodeSnippet from "./code-snippet"

export default function AiReadable() {
  return <section id="ai-readable" className="px-6 py-24">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 bg-linear-to-t to-slate-800 p-8 text-gray-200 sm:p-14">
      <Eyebrow>AI readability</Eyebrow>
      <h2 className="h2 mt-5 text-white">Stop hiding your best marketing copy from AI.</h2>
      <p className="copy mt-4 max-w-2xl text-gray-400">
        AI doesn&rsquo;t wait for JavaScript to load &mdash; it can&rsquo;t read your most authentic,
        credible content when it&rsquo;s hidden inside a third-party widget.
      </p>

      <div className="mt-8 grid min-w-0 items-start gap-6 [&>*]:min-w-0 lg:grid-cols-2">
        <div>
          <CodeSnippet filename="a typical review widget">
            <span className="text-gray-500">{"<"}</span><span className="text-[#7fb7ff]">{"div"}</span>{" id="}<span className="text-[#8fe3a9]">{'"review-list"'}</span><span className="text-gray-500">{"></"}</span><span className="text-[#7fb7ff]">{"div"}</span><span className="text-gray-500">{">"}</span>{"\n"}
            <span className="text-gray-500">{"<"}</span><span className="text-[#7fb7ff]">{"script"}</span>{" src="}<span className="text-[#8fe3a9]">{'"reviews-widget.js"'}</span><span className="text-gray-500">{"></"}</span><span className="text-[#7fb7ff]">{"script"}</span><span className="text-gray-500">{">"}</span>
          </CodeSnippet>
          <p className="mt-3 text-sm font-medium text-red-400">A crawler sees an empty div &mdash; nothing to read.</p>
        </div>

        <div>
          <CodeSnippet filename="with FiveOh">
            <span className="text-gray-500">{"<"}</span><span className="text-[#7fb7ff]">{"section"}</span>{" class="}<span className="text-[#8fe3a9]">{'"review-list"'}</span><span className="text-gray-500">{">"}</span>{"\n"}
            {"  "}<span className="text-gray-500">{"<"}</span><span className="text-[#7fb7ff]">{"h2"}</span><span className="text-gray-500">{">"}</span>{"4.9 ★ · 233 reviews"}<span className="text-gray-500">{"</"}</span><span className="text-[#7fb7ff]">{"h2"}</span><span className="text-gray-500">{">"}</span>{"\n"}
            {"  "}<span className="text-gray-500">{"<"}</span><span className="text-[#7fb7ff]">{"p"}</span>{" class="}<span className="text-[#8fe3a9]">{'"ai-summary"'}</span><span className="text-gray-500">{">"}</span>{"Buyers love the fit and soft merino."}<span className="text-gray-500">{"</"}</span><span className="text-[#7fb7ff]">{"p"}</span><span className="text-gray-500">{">"}</span>{"\n"}
            {"  "}<span className="text-gray-500">{"<"}</span><span className="text-[#7fb7ff]">{"article"}</span><span className="text-gray-500">{">"}</span>{'"Runs large — size down to M."'}<span className="text-gray-500">{"</"}</span><span className="text-[#7fb7ff]">{"article"}</span><span className="text-gray-500">{">"}</span>{"\n"}
            {"  "}<span className="text-gray-500">{"<"}</span><span className="text-[#7fb7ff]">{"article"}</span><span className="text-gray-500">{">"}</span>{'"The merino shrugged off light rain."'}<span className="text-gray-500">{"</"}</span><span className="text-[#7fb7ff]">{"article"}</span><span className="text-gray-500">{">"}</span>{"\n"}
            <span className="text-gray-500">{"</"}</span><span className="text-[#7fb7ff]">{"section"}</span><span className="text-gray-500">{">"}</span>
          </CodeSnippet>
          <p className="mt-3 text-sm font-medium text-emerald-400">AI and Google read the real review text &mdash; with real context.</p>
        </div>
      </div>
    </div>
  </section>
}
