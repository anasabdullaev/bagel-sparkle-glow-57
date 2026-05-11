'use client'

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import {
  Users,
  Monitor,
  Layers,
  Zap,
  CalendarDays,
  Briefcase,
  type LucideIcon,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import formatOffline from '../assets/format-offline.jpg'
import formatOnline from '../assets/format-online.jpg'
import formatHybrid from '../assets/format-hybrid.jpg'
import formatWorkshop from '../assets/format-workshop.jpg'
import formatProgram from '../assets/format-program.jpg'
import formatExecutive from '../assets/format-executive.jpg'

type FilterKey =
  | 'all'
  | 'offline'
  | 'online'
  | 'hybrid'
  | 'short'
  | 'long'
  | 'executive'

interface TrainingFormat {
  title: string
  description: string
  icon: LucideIcon
  meta: string
  image: string
  categories: FilterKey[]
}

const formats: TrainingFormat[] = [
  {
    title: "Korporativ offline trening",
    description:
      "Jamoa bilan yuzma-yuz ishlash, real mashqlar va interaktiv muhokamalar uchun eng samarali format.",
    icon: Users,
    meta: "Offline · Jamoa",
    image: formatOffline,
    categories: ['offline'],
  },
  {
    title: "Online trening",
    description:
      "Hududiy filiallar yoki masofadan ishlovchi xodimlar uchun qulay yechim.",
    icon: Monitor,
    meta: "Online · Masofaviy",
    image: formatOnline,
    categories: ['online'],
  },
  {
    title: "Hybrid trening",
    description:
      "Asosiy trening offline, qo'shimcha darslar va materiallar online formatda beriladi.",
    icon: Layers,
    meta: "Offline + Online",
    image: formatHybrid,
    categories: ['hybrid', 'offline', 'online'],
  },
  {
    title: "Intensiv workshop",
    description:
      "Muayyan ko'nikmani tez va amaliy shaklda o'zlashtirish uchun 1–3 kunlik dastur.",
    icon: Zap,
    meta: "1–3 kun",
    image: formatWorkshop,
    categories: ['short'],
  },
  {
    title: "Uzoq muddatli dastur",
    description:
      "Xodimlar kompetensiyasini bosqichma-bosqich rivojlantirish uchun 1–3 oylik tizimli dastur.",
    icon: CalendarDays,
    meta: "1–3 oy",
    image: formatProgram,
    categories: ['long'],
  },
  {
    title: "Executive sessiya",
    description:
      "Rahbarlar uchun strategik qarorlar, moliyaviy tahlil va risk bo'yicha maxsus sessiyalar.",
    icon: Briefcase,
    meta: "C-level",
    image: formatExecutive,
    categories: ['executive'],
  },
]

const filters: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'Barchasi' },
  { key: 'offline', label: 'Offline' },
  { key: 'online', label: 'Online' },
  { key: 'hybrid', label: 'Hybrid' },
  { key: 'short', label: '1–3 kun' },
  { key: 'long', label: '1–3 oy' },
  { key: 'executive', label: 'C-level' },
]

export function Awards() {
  return (
    <div
      className="relative py-24 overflow-hidden"
      style={{ background: '#0B0D1A' }}
    >
      {/* Soft ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-secondary/20 blur-3xl" />
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

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
            Trening <span className="text-primary">formatlari</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
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
                className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 overflow-hidden hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.4)] hover:border-primary/40 hover:bg-white/[0.07] transition-all duration-700"
              >
                {/* Image header */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-5 bg-black/40">
                  <img
                    src={format.image}
                    alt={format.title}
                    loading="lazy"
                    width={768}
                    height={432}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Number badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-white text-xs font-medium tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon badge */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-primary/90 backdrop-blur flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Meta tag */}
                <div className="relative inline-flex items-center gap-2 mb-2 text-[10px] tracking-[0.2em] uppercase text-primary/90 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {format.meta}
                </div>

                {/* Title */}
                <h3 className="relative text-lg sm:text-xl font-semibold tracking-tight text-white mb-2 leading-snug">
                  {format.title}
                </h3>

                {/* Description */}
                <p className="relative text-sm text-white/70 leading-relaxed">
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
