'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

const processSteps = [
  {
    number: '01',
    title: 'EHTIYOJNI ANIQLAYMIZ',
    description:
      "Kompaniya maqsadi, bo'lim vazifalari va xodimlar darajasi chuqur o'rganiladi.",
  },
  {
    number: '02',
    title: 'DASTUR TUZAMIZ',
    description: 'Kompaniyaga moslashtirilgan trening rejasi ishlab chiqiladi.',
  },
  {
    number: '03',
    title: "TRENING O'TKAZAMIZ",
    description:
      "Darslar real biznes case'lar, guruh ishlari va amaliy topshiriqlar bilan olib boriladi.",
  },
  {
    number: '04',
    title: 'NATIJANI BAHOLAYMIZ',
    description: "Test yoki yakuniy loyiha orqali o'zlashtirish darajasi tekshiriladi.",
  },
  {
    number: '05',
    title: 'HISOBOT BERAMIZ',
    description:
      "Kompaniya uchun natijalar, tavsiyalar va keyingi yo'nalishlar taqdim etiladi.",
  },
]

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(
      processSteps.length - 1,
      Math.max(0, Math.floor(v * processSteps.length - 0.0001)),
    )
    const safe = Math.min(processSteps.length - 1, Math.max(0, idx))
    if (safe !== activeIndex) setActiveIndex(safe)
  })

  const step = processSteps[activeIndex]

  return (
    <section id="about" ref={containerRef} className="relative bg-white" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl relative">
          {/* Header */}
          <div className="mb-12">
            <span
              className="block text-sm font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: '#799A96' }}
            >
              Jarayon
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.05]"
              style={{ color: '#2C325E' }}
            >
              Trening qanday tashkil etiladi
            </h2>
          </div>

          {/* Progress bar (vertical, left of content) */}
          <div className="absolute left-0 sm:left-2 top-44 bottom-8 w-[2px] bg-gray-200 rounded-full overflow-hidden hidden sm:block">
            <motion.div
              className="w-full"
              style={{ height: progressHeight, backgroundColor: '#799A96' }}
            />
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[420px]">
            {/* Text */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.number}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div
                    className="font-black leading-none mb-4"
                    style={{ fontSize: '72px', color: '#799A96', opacity: 0.4 }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="font-bold uppercase mb-4 tracking-tight"
                    style={{ color: '#2C325E', fontSize: '22px' }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: 1.7 }}>
                    {step.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image */}
            <div className="relative w-full" style={{ aspectRatio: '4 / 3' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-2xl bg-gray-100"
                  style={{
                    boxShadow:
                      'inset 0 2px 8px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(0,0,0,0.04)',
                  }}
                  aria-label={`${step.title} image placeholder`}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-3 mt-10">
            {processSteps.map((s, i) => (
              <div
                key={s.number}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? 28 : 8,
                  backgroundColor: i <= activeIndex ? '#799A96' : '#e5e7eb',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
