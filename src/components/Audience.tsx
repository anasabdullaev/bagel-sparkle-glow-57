'use client'

import { motion } from 'framer-motion'
import {
  Landmark,
  ShieldCheck,
  Building2,
  Briefcase,
  Calculator,
  Megaphone,
  Users2,
  Store,
  type LucideIcon,
} from 'lucide-react'

interface Audience {
  title: string
  icon: LucideIcon
  tag: string
}

const audiences: Audience[] = [
  { title: "Tijoriy banklar", icon: Landmark, tag: "Banking" },
  { title: "Sug'urta kompaniyalari", icon: ShieldCheck, tag: "Insurance" },
  { title: "Davlat tashkilotlari", icon: Building2, tag: "Public sector" },
  { title: "Xususiy korporatsiyalar", icon: Briefcase, tag: "Corporate" },
  { title: "Moliya va buxgalteriya", icon: Calculator, tag: "Finance" },
  { title: "Marketing va PR jamoalari", icon: Megaphone, tag: "Marketing" },
  { title: "HR va L&D bo'limlari", icon: Users2, tag: "People" },
  { title: "Kichik va o'rta bizneslar", icon: Store, tag: "SMB" },
]

export function Audience() {
  return (
    <section
      id="audience"
      aria-label="Kimlar uchun mos"
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Dotted grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(var(--secondary) / 0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Soft ambient glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-primary/60" />
              <span className="text-primary text-sm tracking-[0.3em] font-medium">
                · KIMLAR UCHUN ·
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bagel text-secondary-foreground leading-[1.05]">
              Qaysi <span className="text-primary">tashkilotlar</span>
              <br />
              uchun mos?
            </h2>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-md">
              Treninglarimiz turli sohalardagi jamoalar uchun moslashtirilgan —
              kichik bizneslardan tortib yirik moliyaviy institutlargacha.
            </p>

            {/* Counter strip */}
            <div className="mt-10 flex items-center gap-6">
              <div className="font-bagel text-5xl text-secondary">
                {audiences.length.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground leading-snug max-w-[14rem]">
                tanlangan tashkilot turi
                <br />
                <span className="text-secondary-foreground/80">
                  uchun amaliy yondashuv
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — Staircase grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {audiences.map((a, i) => {
                const Icon = a.icon
                // Asymmetric staircase: every odd column item shifts down
                const offset = i % 2 === 1 ? 'sm:mt-10' : ''
                return (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.08 }}
                    whileHover={{ y: -6 }}
                    className={`${offset} group relative rounded-2xl border border-border bg-white/70 backdrop-blur-xl p-5 sm:p-6 overflow-hidden hover:border-primary/40 hover:shadow-[0_18px_45px_-20px_hsl(var(--primary)/0.35)] transition-all duration-700`}
                  >
                    {/* Number */}
                    <div className="absolute top-3 right-4 font-bagel text-xs text-secondary/30 tracking-widest">
                      0{i + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-700">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-700" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-semibold text-secondary-foreground leading-snug mb-2">
                      {a.title}
                    </h3>

                    {/* Tag */}
                    <div className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {a.tag}
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-1000" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
