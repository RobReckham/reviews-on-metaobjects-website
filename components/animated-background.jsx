function parseOklch(str) {
  const m = str.trim().match(/^oklch\(\s*([\d.]+)%\s+([\d.]+)\s+([\d.]+)\s*\)$/)
  return m ? { l: parseFloat(m[1]) / 100, c: parseFloat(m[2]), h: parseFloat(m[3]) } : null
}

function ok(l, c, h) {
  return `oklch(${(Math.max(0, Math.min(1, l)) * 100).toFixed(1)}% ${Math.max(0, c).toFixed(3)} ${h.toFixed(1)})`
}

// Static gradient background. The previous version animated large blurred blobs,
// which repaint every frame and pin the GPU on low-power machines. Same props/API.
export default function AnimatedBackground({ baseColor = "oklch(90.5% 0.182 98.111)", className = "" }) {
  const parsed = parseOklch(baseColor)
  const light = parsed ? ok(parsed.l + 0.06, parsed.c * 0.55, parsed.h + 4) : baseColor
  const dark = parsed ? ok(parsed.l - 0.09, parsed.c * 1.05, parsed.h - 16) : baseColor

  return (
    <div
      className={`${className} absolute inset-0 overflow-hidden pointer-events-none z-0`}
      style={{ background: `linear-gradient(155deg, ${light} 0%, ${baseColor} 52%, ${dark} 100%)` }}
      aria-hidden="true"
    >
      <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.1)" }} />
    </div>
  )
}
