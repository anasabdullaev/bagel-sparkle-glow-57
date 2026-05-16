'use client'

import aboutImage from '@/assets/logo-fineskills.jpg'

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                Biz haqimizda
              </span>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-secondary">
                Fine Skills <br />
                <span className="text-primary">FINE SKILLS</span>
              </h2>
            </div>

            <div className="space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Fine Skills Academy 2026-yilda tashkil etilgan bo'lib, bugungi kunda O'zbekistondagi banklar, korporatsiyalar va xalqaro institutlar uchun amaliy treninglar olib boradigan yetakchi platformaga aylangan. Biz 10+ yo'nalishni — moliya, IFRS, data analytics, AI va soft skills'ni — bir joyga jamlaganmiz.
              </p>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative flex justify-center">
            {/* Ambient glows */}
            <div className="absolute -top-24 -right-16 w-72 h-72 bg-primary/25 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute -bottom-24 -left-16 w-64 h-64 bg-secondary/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />

            {/* Gradient ring frame */}
            <div
              className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-[2rem] p-[2px]"
              style={{
                background:
                  'linear-gradient(135deg, #799A96 0%, rgba(121,154,150,0.2) 35%, rgba(44,50,94,0.2) 65%, #2C325E 100%)',
                boxShadow:
                  '0 30px 80px -30px rgba(44,50,94,0.35), 0 10px 30px -15px rgba(121,154,150,0.4)',
              }}
            >
              <div className="relative w-full h-full rounded-[1.9rem] overflow-hidden bg-white flex items-center justify-center p-10 sm:p-14 lg:p-16 group">
                {/* Soft inner gradient wash */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 20%, rgba(121,154,150,0.10), transparent 60%), radial-gradient(circle at 70% 90%, rgba(44,50,94,0.08), transparent 55%)',
                  }}
                />

                {/* Corner accents */}
                <span className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
                <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
                <span className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
                <span className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />

                <img
                  src={aboutImage}
                  alt="Fine Skills Academy logo"
                  width={800}
                  height={800}
                  loading="lazy"
                  className="relative z-10 w-full h-full object-contain transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                />

                {/* Shine sweep on hover */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms]"
                  style={{
                    background:
                      'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
                  }}
                />

                {/* Subtle grain overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                  }}
                />
              </div>
            </div>

            {/* Decorative rings */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-primary/10 rounded-full pointer-events-none" />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] border border-secondary/10 rounded-full pointer-events-none" />

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 px-5 py-2 rounded-full bg-white border border-primary/20 shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary">Since 2016</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
