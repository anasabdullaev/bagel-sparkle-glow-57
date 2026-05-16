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
            {/* Cinematic glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Main image wrapper */}
            <div className="relative z-10 w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white flex items-center justify-center aspect-square p-8 sm:p-12 lg:p-16">
              <img
                src={aboutImage}
                alt="Fine Skills Academy logo"
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-[2000ms] hover:scale-105"
              />

              {/* Subtle grain overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                }}
              />

            </div>

            {/* Decorative ring */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-primary/10 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
