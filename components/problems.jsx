import Eyebrow from "./eyebrow"

const quotes = [
  { text: "My designer gave up on the reviews section.", classes: "self-start" },
  { text: "Our ratings load a second after page load.", classes: "self-end sm:mr-[8%]" },
  { text: "Our best trust signal is invisible to AI.", classes: "self-center" },
  { text: "Years of reviews, trapped in someone else's app.", classes: "self-start sm:ml-[14%]" },
];

export default function Problems() {
  return <section className="px-6 py-24">
    <div className="mx-auto max-w-(--nextra-content-width)">
      <Eyebrow>Sound familiar?</Eyebrow>
      <div className="mt-12 flex flex-col gap-10">
        {quotes.map((quote) => <p key={quote.text} className={`max-w-xl text-2xl italic text-gray-400 text-center ${quote.classes}`}>&ldquo;{quote.text}&rdquo;</p>)}
      </div>
    </div>
  </section>
}
