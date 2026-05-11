'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Monitor,
  Layers,
  Zap,
  CalendarDays,
  Briefcase,
  type LucideIcon,
} from 'lucide-react'

interface TrainingFormat {
  title: string
  description: string
  icon: LucideIcon
  meta: string
}

const formats: TrainingFormat[] = [
  {
    title: "Korporativ offline trening",
    description:
      "Jamoa bilan yuzma-yuz ishlash, real mashqlar va interaktiv muhokamalar uchun eng samarali format.",
    icon: Users,
    meta: "Offline · Jamoa",
  },
  {
    title: "Online trening",
    description:
      "Hududiy filiallar yoki masofadan ishlovchi xodimlar uchun qulay yechim.",
    icon: Monitor,
    meta: "Online · Masofaviy",
  },
  {
    title: "Hybrid trening",
    description:
      "Asosiy trening offline, qo'shimcha darslar va materiallar online formatda beriladi.",
    icon: Layers,
    meta: "Offline + Online",
  },
  {
    title: "Intensiv workshop",
    description:
      "Muayyan ko'nikmani tez va amaliy shaklda o'zlashtirish uchun 1–3 kunlik dastur.",
    icon: Zap,
    meta: "1–3 kun",
  },
  {
    title: "Uzoq muddatli dastur",
    description:
      "Xodimlar kompetensiyasini bosqichma-bosqich rivojlantirish uchun 1–3 oylik tizimli dastur.",
    icon: CalendarDays,
    meta: "1–3 oy",
  },
  {
    title: "Executive sessiya",
    description:
      "Rahbarlar uchun strategik qarorlar, moliyaviy tahlil va risk bo'yicha maxsus sessiyalar.",
    icon: Briefcase,
    meta: "C-level",
  },
]

export function Awards() {
  return (
    <div className="relative py-24 bg-background overflow-hidden">
      {/* Soft ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-primary/60" />
            <span className="text-primary text-sm tracking-[0.3em] font-medium">
              · FORMATLAR ·
            </span>
            <span className="h-px w-10 bg-primary/60" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bagel text-secondary-foreground leading-tight">
            Trening <span className="text-primary">formatlari</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Har bir tashkilotning vaqti, maqsadi va xodimlar darajasiga qarab
            mos format tanlanadi.
          </p>
        </motion.div>

        {/* Format grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {formats.map((format, index) => {
            const Icon = format.icon
            return (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative h-full rounded-3xl border border-border bg-white/70 backdrop-blur-xl p-7 overflow-hidden shadow-[0_8px_30px_-12px_rgba(44,50,94,0.12)] hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.35)] hover:border-primary/40 transition-all duration-700"
              >
                {/* Decorative gradient corner */}
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Number */}
                <div className="absolute top-6 right-6 font-bagel text-5xl text-primary/10 group-hover:text-primary/20 transition-colors duration-700">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-700">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Meta tag */}
                <div className="relative inline-flex items-center gap-2 mb-3 text-xs tracking-[0.2em] uppercase text-primary/80 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {format.meta}
                </div>

                {/* Title */}
                <h3 className="relative text-xl sm:text-2xl font-bagel text-secondary-foreground mb-3 leading-snug">
                  {format.title}
                </h3>

                {/* Description */}
                <p className="relative text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {format.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-1000" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
