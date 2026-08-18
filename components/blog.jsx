import Eyebrow from "./eyebrow"

const LISTING_URL = process.env.NEXT_PUBLIC_LISTING_URL || "https://apps.shopify.com/reviews-on-metaobjects";

// { title, description, datePublished, slug }
export function ArticleJsonLd({ title, description, datePublished, slug }) {
  const articleUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${articleUrl}#article`,
        "headline": title,
        "description": description,
        "datePublished": datePublished,
        "dateModified": datePublished,
        "url": articleUrl,
        "mainEntityOfPage": { "@type": "WebPage", "@id": articleUrl },
        "author": {
          "@type": "Person",
          "name": process.env.NEXT_PUBLIC_AUTHOR_NAME,
          "image": "https://s3.coders.fail/profile/marius-blank-512.jpg",
          "url": process.env.NEXT_PUBLIC_SITE_URL,
        },
        "publisher": {
          "@type": "Organization",
          "name": process.env.NEXT_PUBLIC_APP_NAME,
          "url": process.env.NEXT_PUBLIC_SITE_URL,
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://assets.reviewsonmetaobjects.com/the-shopify-reviews-blog.jpg",
          "width": 1200,
          "height": 630,
        },
        "isPartOf": {
          "@type": "Blog",
          "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/blog#blog`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Blog",
            "item": `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": title,
            "item": articleUrl,
          },
        ],
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// message: contextual pitch text for this placement
export function InlineCta({ message, buttonLabel }) {
  buttonLabel = buttonLabel || `Get more information →`
  return (
    <div className="mt-8 flex flex-col gap-3 rounded-2xl border-l-4 border-[#fde047] bg-gray-50 p-5">
      <p className="flex-1 font-medium text-gray-900 leading-snug">{message}</p>
      <a href={LISTING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm w-full">{buttonLabel}</a>
    </div>
  )
}

export function ArticleAuthor() {
  return (
    <div className="flex items-center gap-4 mt-10 pt-8 border-t border-gray-200">
      <img
        src="https://s3.coders.fail/profile/marius-blank-512.jpg"
        alt={process.env.NEXT_PUBLIC_AUTHOR_NAME}
        className="h-12 w-12 rounded-full shrink-0"
        width={48}
        height={48}
      />
      <div>
        <p className="text-sm font-semibold text-gray-900">Written by {process.env.NEXT_PUBLIC_AUTHOR_NAME}</p>
        <p className="text-sm text-gray-500">{process.env.NEXT_PUBLIC_AUTHOR_POSITION} at {process.env.NEXT_PUBLIC_APP_NAME}</p>
      </div>
    </div>
  )
}

export function BlogNav({ className = "mb-8" }) {
  return (
    <div className={className}>
      <a
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
          <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
        </svg>
        All articles
      </a>
    </div>
  )
}

export function BlogCta() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto overflow-hidden rounded-4xl bg-slate-950 bg-linear-to-t to-slate-800 px-6 py-14 text-center sm:px-8">
        <div className="flex justify-center">
          <Eyebrow>{process.env.NEXT_PUBLIC_APP_NAME}</Eyebrow>
        </div>
        <h2 className="mt-5 text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
          Reviews stored in Shopify. Rendered in Liquid. Yours to keep.
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          The review app that writes to Shopify&rsquo;s standard product review Metaobjects &mdash; server-side rendering, no JavaScript widget, no external dependency, no vendor lock-in.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={LISTING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-inverted opacity-100!">Install on Shopify</a>
          <a href="/" className="text-sm text-gray-400 hover:text-white underline underline-offset-2 transition-colors">Learn more &rarr;</a>
        </div>
      </div>
    </section>
  )
}

export function Section({ children, className = "" }) {
  return (
    <section className={`py-12 sm:py-20 ${className}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-8">{children}</div>
    </section>
  )
}

export function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-900 underline underline-offset-2 decoration-2 decoration-gray-300 hover:decoration-[#fde047] transition-colors">
      {children}
    </a>
  )
}

export function InternalLink({ href, children }) {
  return (
    <a href={href} className="underline underline-offset-2 hover:text-gray-600 transition-colors">
      {children}
    </a>
  )
}

export function CodeBlock({ children }) {
  return (
    <pre className="bg-gray-950 text-gray-100 rounded-xl p-5 overflow-x-auto text-sm leading-relaxed my-6">
      <code>{children.trim()}</code>
    </pre>
  )
}

export function Callout({ children }) {
  return (
    <div className="border-l-4 border-[#fde047] bg-[#fde047]/10 rounded-r-xl px-5 py-4 my-6 text-sm text-gray-700 leading-relaxed">
      {children}
    </div>
  )
}

export function H2({ children, id }) {
  return (
    <h2 id={id} className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-16 mb-4 text-gray-900">
      {children}
    </h2>
  )
}

export function H3({ children }) {
  return (
    <h3 className="text-lg sm:text-2xl font-bold tracking-tight mt-10 mb-3 text-gray-900">
      {children}
    </h3>
  )
}

export function P({ children, className = "" }) {
  return (
    <p className={`text-gray-700 leading-relaxed text-base sm:text-lg mb-4 ${className}`}>
      {children}
    </p>
  )
}

export function Ul({ children }) {
  return (
    <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-base sm:text-lg mb-6">
      {children}
    </ul>
  )
}

export function Ol({ children }) {
  return (
    <ol className="list-decimal list-outside pl-5 space-y-2 text-gray-700 text-base sm:text-lg mb-6">
      {children}
    </ol>
  )
}

// items: Array<{ id: string, label: string }>
export function TableOfContents({ items }) {
  return (
    <nav aria-label="Table of contents" className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
      <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">On this page</p>
      <ol className="space-y-1">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-gray-700 underline underline-offset-2 decoration-gray-300 hover:decoration-[#fde047] hover:text-gray-900 transition-colors"
            >
              {index + 1}. {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function ArticleHero({ tag = "Technical deep-dive", title, description, readingTime = "~10 minutes" }) {
  return (
    <section className="pt-24 pb-12 border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <div className="mb-5"><Eyebrow>{tag}</Eyebrow></div>
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">{title}</h1>
        <P>{description}</P>
        <P className="text-gray-500 text-sm sm:text-base">
          Reading time: {readingTime}.
        </P>
      </div>
    </section>
  )
}

export function BlogFaqs({ faqs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }

  return (
    <Section className="bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-8">Frequently asked questions</h2>
      <div className="space-y-3">
        {faqs.map(({ question, answer }) => (
          <details key={question} className="group bg-white rounded-xl overflow-hidden">
            <summary className="flex justify-between items-center gap-4 p-6 cursor-pointer list-none font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
              {question}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>
            <p className="px-6 pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

export function ArticleFooter({ furtherReading = [], internalLinks = [] }) {
  return (
    <div className="mt-10 pt-8 border-t border-gray-200">
      {furtherReading.length > 0 && (
        <P className="text-gray-500 text-sm">
          <strong>Further reading:</strong>{" "}
          {furtherReading.map((link, index) => (
            <span key={link.href}>
              <ExternalLink href={link.href}>{link.label}</ExternalLink>
              {index < furtherReading.length - 1 ? " · " : ""}
            </span>
          ))}
        </P>
      )}
      {internalLinks.length > 0 && (
        <P className="text-gray-500 text-sm mt-2">
          {internalLinks.map((link, index) => (
            <span key={link.href}>
              <InternalLink href={link.href}>{link.label}</InternalLink>
              {index < internalLinks.length - 1 ? " · " : ""}
            </span>
          ))}
        </P>
      )}
    </div>
  )
}
