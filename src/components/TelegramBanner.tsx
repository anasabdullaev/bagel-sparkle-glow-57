import { Send } from "lucide-react";

const TELEGRAM_GRADIENT = "linear-gradient(135deg, #2AABEE 0%, #229ED9 100%)";

const TG_ANIMATIONS = `
@keyframes tg-glow-pulse {
  0%, 100% { opacity: 0.18; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.32; transform: translate(-50%, -50%) scale(1.08); }
}
@keyframes tg-gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
@keyframes tg-fade-up {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes tg-badge-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.tg-glow { animation: tg-glow-pulse 10s ease-in-out infinite; }
.tg-shift {
  background-size: 200% 200%;
  animation: tg-gradient-shift 14s ease-in-out infinite;
}
.tg-fade-up { animation: tg-fade-up 1.6s ease-out both; }
.tg-badge-float { animation: tg-badge-float 8s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .tg-glow, .tg-shift, .tg-fade-up, .tg-badge-float { animation: none !important; }
}
`;

export function TelegramBanner() {
  return (
    <section
      aria-label="Telegram kanalimizga qo'shiling"
      className="relative w-full overflow-hidden py-28 md:py-36"
      style={{ backgroundColor: "#2C325E" }}
    >
      <style>{TG_ANIMATIONS}</style>
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

      {/* Soft Telegram-blue glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: TELEGRAM_GRADIENT }}
      />

      {/* Decorative empty circle, top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full border border-white/25 md:h-80 md:w-80"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Frosted glass card */}
        <div
          className="relative rounded-2xl border px-8 py-12 backdrop-blur-xl md:px-12 md:py-14"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            borderColor: "rgba(42,171,238,0.25)",
          }}
        >
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
            <div className="max-w-2xl">
              <h3
                className="mb-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl"
                style={{
                  fontFamily:
                    "'Manrope', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                <span
                  style={{
                    background: TELEGRAM_GRADIENT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Telegram
                </span>{" "}
                kanalimizga qo'shiling
              </h3>
              <p
                className="text-base leading-relaxed text-white/85 md:text-lg"
                style={{
                  fontFamily:
                    "'Manrope', 'Inter', system-ui, -apple-system, sans-serif",
                }}
              >
                Fine Skills Academy kanalida treninglar, foydali materiallar va maxsus takliflar haqida birinchilardan bo'lib xabardor bo'ling.
              </p>
            </div>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.04] hover:shadow-xl md:text-base"
              style={{
                background: TELEGRAM_GRADIENT,
                boxShadow: "0 12px 32px -8px rgba(42,171,238,0.6)",
                fontFamily:
                  "'Manrope', 'Inter', system-ui, -apple-system, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              <Send
                className="h-4 w-4 -translate-x-0.5 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
                fill="white"
              />
              Obuna bo'lish
            </a>
          </div>
        </div>

        {/* Smaller Telegram badge below-right */}
        <div
          aria-hidden
          className="absolute -bottom-8 right-6 z-20 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl md:right-24 md:h-20 md:w-20"
          style={{
            background: TELEGRAM_GRADIENT,
            boxShadow:
              "0 16px 40px -8px rgba(42,171,238,0.55), 0 0 0 5px rgba(255,255,255,0.05)",
          }}
        >
          <Send
            className="h-7 w-7 -translate-x-0.5 text-white md:h-8 md:w-8"
            strokeWidth={1.8}
            fill="white"
          />
        </div>
      </div>
    </section>
  );
}

export default TelegramBanner;
