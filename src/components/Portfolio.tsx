'use client'

import aboutImage from '@/assets/about-academy.jpg'

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
                <span className="text-primary">Academy</span>
              </h2>
            </div>

            <div className="space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Fine Skills Academy 2016-yilda tashkil etilgan bo'lib, bugungi kunda O'zbekistondagi banklar, korporatsiyalar va xalqaro institutlar uchun amaliy treninglar olib boradigan yetakchi platformaga aylangan. Biz 50+ kurs va 10 ta yo'nalishni — moliya, IFRS, data analytics, AI va soft skills'ni — bir joyga jamlaganmiz.
              </p>
              <p>
                7 yil ichida 25 000+ mutaxassis bizning treninglarimizdan o'tdi. CFA, ACCA va FRM sertifikatiga ega 150+ trener jamoasi har bir dasturni real biznes case'lar va kompaniya maqsadlariga moslab tuzadi.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              <div className="border-l-2 border-primary/30 pl-4">
                <div className="text-3xl font-bold text-secondary">7+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Yillik tajriba</div>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <div className="text-3xl font-bold text-secondary">25k+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Bitiruvchilar</div>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <div className="text-3xl font-bold text-secondary">150+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Trenerlar</div>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Kurslar</div>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative">
            {/* Cinematic glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Main image wrapper */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/50">
              <img
                src={aboutImage}
                alt="Fine Skills Academy korporativ trening"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-[2000ms] hover:scale-105"
              />

              {/* Subtle grain overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                }}
              />

              {/* Glass card 1 */}
              <div className="absolute top-8 -left-6 md:-left-12 p-5 rounded-2xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl hidden md:block max-w-[200px]">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="text-secondary font-bold text-sm">Innovatsion</div>
                <div className="text-xs text-secondary/70 mt-1">Zamonaviy o'qitish metodikalari</div>
              </div>

              {/* Glass card 2 */}
              <div className="absolute bottom-8 -right-4 md:-right-6 p-5 rounded-2xl backdrop-blur-xl bg-secondary/85 border border-white/10 shadow-xl text-white max-w-[180px]">
                <div className="text-2xl font-bold mb-1">CFA · ACCA</div>
                <div className="text-[10px] uppercase tracking-widest opacity-80 leading-tight">
                  Sertifikatlangan trenerlar
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-primary/10 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
