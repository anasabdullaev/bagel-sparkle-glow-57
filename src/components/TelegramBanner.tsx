import { Send } from "lucide-react";

export function TelegramBanner() {
  return (
    <section
      aria-label="Telegram kanalimizga qo'shiling"
      className="relative w-full overflow-hidden py-28 md:py-36"
      style={{ backgroundColor: "#6B7280" }}
    >
      {/* Dot/grain texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

      {/* Decorative empty circle, top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full border border-white/25 md:h-80 md:w-80"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Large Telegram badge above-left */}
        <div
          aria-hidden
          className="absolute -top-10 left-6 z-20 flex h-24 w-24 items-center justify-center rounded-full shadow-2xl md:left-24 md:h-28 md:w-28"
          style={{ backgroundColor: "#2a2a2a" }}
        >
          <Send className="h-10 w-10 -translate-x-0.5 text-white md:h-12 md:w-12" strokeWidth={1.5} />
        </div>

        {/* Frosted glass card */}
        <div
          className="relative rounded-2xl border px-8 py-10 backdrop-blur-xl md:px-12 md:py-12"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            borderColor: "rgba(255,255,255,0.15)",
          }}
        >
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
            <p className="max-w-2xl text-base leading-relaxed text-white md:text-lg">
              Telegram kanalimizga qo'shiling. Fine Skills Academy kanalida treninglar,
              foydali materiallar va maxsus takliflar haqida birinchilardan bo'lib xabardor bo'ling.
            </p>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              Obuna bo'lish
            </a>
          </div>
        </div>

        {/* Smaller Telegram badge below-right */}
        <div
          aria-hidden
          className="absolute -bottom-8 right-6 z-20 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl md:right-24 md:h-20 md:w-20"
          style={{ backgroundColor: "#2a2a2a" }}
        >
          <Send className="h-7 w-7 -translate-x-0.5 text-white md:h-8 md:w-8" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}

export default TelegramBanner;
