export default function CodeSnippet({ filename, children }) {
  if (filename) {
    return <div className="min-w-0 max-w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 shadow-xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-white/15" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-white/15" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-white/15" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-gray-500">{filename}</span>
      </div>
      <pre className="max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden whitespace-pre px-5 py-4 font-mono text-xs leading-relaxed text-gray-200">{children}</pre>
    </div>
  }

  return <pre className="min-w-0 max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden whitespace-pre rounded-xl border border-gray-800 bg-black/40 p-4 font-mono text-xs text-gray-300">{children}</pre>
}
