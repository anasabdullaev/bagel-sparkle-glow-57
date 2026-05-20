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
                Treninglar
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

          {/* Visual Column — concentric squircle frames */}
          <div className="relative flex justify-center items-center min-h-[520px]">
            {/* Soft ambient halo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[80%] h-[80%] rounded-[40%] bg-primary/15 blur-3xl" />
            </div>

            {/* Concentric squircle rings */}
            {[
              { size: 480, opacity: 0.15 },
              { size: 420, opacity: 0.22 },
              { size: 360, opacity: 0.32 },
              { size: 300, opacity: 0.45 },
              { size: 240, opacity: 0.6 },
            ].map((ring, i) => (
              <div
                key={i}
                className="absolute rounded-[28%] border pointer-events-none"
                style={{
                  width: `${ring.size}px`,
                  height: `${ring.size}px`,
                  borderColor: `rgba(121,154,150,${ring.opacity})`,
                  borderWidth: '1.5px',
                  boxShadow: `inset 0 0 40px rgba(121,154,150,${ring.opacity * 0.25})`,
                }}
              />
            ))}

            {/* Center logo tile */}
            <div
              className="relative z-10 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-[28%] flex items-center justify-center group"
              style={{
                background:
                  'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.85), rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.35) 100%)',
                backdropFilter: 'blur(8px)',
                boxShadow:
                  '0 20px 60px -20px rgba(121,154,150,0.55), 0 8px 24px -10px rgba(44,50,94,0.25), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 0 0 1px rgba(121,154,150,0.25)',
              }}
            >
              <img
                src={aboutImage}
                alt="Fine Skills Academy logo"
                width={400}
                height={400}
                loading="lazy"
                className="w-[75%] h-[75%] object-contain transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
