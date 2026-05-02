export function Section({ children, className = "" }) {
  return (
    <section className={`py-12 sm:py-20 ${className}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-8">{children}</div>
    </section>
  )
}

export function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-blue-700 hover:text-blue-900 transition-colors">
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
    <div className="border-l-4 border-blue-500 bg-blue-50 rounded-r-xl px-5 py-4 my-6 text-sm text-gray-700 leading-relaxed">
      {children}
    </div>
  )
}

export function H2({ children, id }) {
  return (
    <h2 id={id} className="text-2xl sm:text-4xl font-black tracking-tight mt-16 mb-4 text-gray-900">
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
              className="text-sm text-blue-700 hover:text-blue-900 underline underline-offset-2 transition-colors"
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
        <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-4">{tag}</p>
        <h1 className="text-3xl sm:text-6xl font-black tracking-tight mb-6 text-gray-900">{title}</h1>
        <P>{description}</P>
        <P className="text-gray-500 text-sm sm:text-base">
          Audience: developers, technical merchants, Shopify agencies. Reading time: {readingTime}.
        </P>
      </div>
    </section>
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
