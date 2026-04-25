function parseOklch(str) {
  const m = str.trim().match(/^oklch\(\s*([\d.]+)%\s+([\d.]+)\s+([\d.]+)\s*\)$/)
  return m ? { l: parseFloat(m[1]) / 100, c: parseFloat(m[2]), h: parseFloat(m[3]) } : null
}

function ok(l, c, h) {
  return `oklch(${(Math.max(0, Math.min(1, l)) * 100).toFixed(1)}% ${Math.max(0, c).toFixed(3)} ${h.toFixed(1)})`
}

export default function AnimatedBackground({ baseColor = "oklch(90.5% 0.182 98.111)", className = "" }) {
  const parsed = parseOklch(baseColor)
  const vars = parsed ? {
    "--ab-0": ok(parsed.l + 0.09, parsed.c * 0.30, parsed.h),
    "--ab-1": ok(parsed.l + 0.05, parsed.c * 0.60, parsed.h),
    "--ab-2": ok(parsed.l + 0.01, parsed.c * 0.85, parsed.h),
    "--ab-3": baseColor,
    "--ab-4": ok(parsed.l - 0.10, parsed.c * 1.08, parsed.h - 10),
    "--ab-5": ok(parsed.l - 0.20, parsed.c * 1.15, parsed.h - 28),
    "--ab-6": ok(parsed.l - 0.30, parsed.c * 1.20, parsed.h - 48),
    "--ab-7": ok(1, 0, 0),
  } : {}

  return (
    <div className={`${className} animated-background absolute inset-0 overflow-hidden pointer-events-none z-0`} style={vars} aria-hidden="true">
      <div className="absolute inset-0" style={{ background: "var(--ab-3)" }} />
      <div className="animated-blob animated-blob-1" />
      <div className="animated-blob animated-blob-2" />
      <div className="animated-blob animated-blob-3" />
      <div className="animated-blob animated-blob-4" />
      <div className="animated-blob animated-blob-5" />
      <div className="animated-blob animated-blob-6" />
      <div className="animated-rectangle animated-rectangle-1" />
      <div className="animated-rectangle animated-rectangle-2" />
      <div className="animated-triangle animated-triangle-1" />
      <div className="animated-triangle animated-triangle-2" />
      <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.1)" }} />
    </div>
  )
}
