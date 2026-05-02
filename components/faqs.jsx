'use client'

import { useState } from "react"

function jsxToPlainText(node) {
  if (node == null || node === false) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(jsxToPlainText).join(" ").replace(/\s+/g, " ").trim();
  return node?.props?.children != null ? jsxToPlainText(node.props.children) : "";
}

export default function Faqs({ faqs, pageUrl }) {
  const [activeFaq, setActiveFaq] = useState(0);

  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: pageUrl,
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: jsxToPlainText(item.answer),
            },
          })),
        }),
      }}
    />
    <ul className="space-y-8 mt-16">
      {faqs.map((faq, index) => <li key={index} className="bg-white rounded-2xl">
        <button
          type="button"
          className="flex justify-between items-center w-full text-left p-8 cursor-pointer gap-4"
          onClick={() => setActiveFaq(index === activeFaq ? null : index)}
          aria-expanded={activeFaq === index}
          aria-controls={`faq-panel-${index}`}
          id={`faq-trigger-${index}`}
        >
          <h3 className="h3 cursor-pointer">{faq.question}</h3>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-4 sm:w-6 text-black transition-transform duration-300 ${activeFaq === index ? "rotate-180" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </button>
        <div
          className="grid transition-all duration-300 ease-in-out"
          style={{ gridTemplateRows: activeFaq === index ? "1fr" : "0fr" }}
          id={`faq-panel-${index}`}
          role="region"
          aria-labelledby={`faq-trigger-${index}`}
        >
          <div className="overflow-hidden">
            <div className="p-8 pt-0 flex flex-col gap-4">{faq.answer}</div>
          </div>
        </div>
      </li>)}
    </ul>
  </>
}
