'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import process01 from '@/assets/process-01.jpg'
import process02 from '@/assets/process-02.jpg'
import process03 from '@/assets/process-03.jpg'
import process04 from '@/assets/process-04.jpg'
import process05 from '@/assets/process-05.jpg'

const processSteps = [
  {
    number: '01',
    title: 'EHTIYOJNI ANIQLAYMIZ',
    description:
      "Kompaniya maqsadi, bo'lim vazifalari va xodimlar darajasi chuqur o'rganiladi.",
    image: process01,
  },
  {
    number: '02',
    title: 'DASTUR TUZAMIZ',
    description: 'Kompaniyaga moslashtirilgan trening rejasi ishlab chiqiladi.',
    image: process02,
  },
  {
    number: '03',
    title: "TRENING O'TKAZAMIZ",
    description:
      "Darslar real biznes case'lar, guruh ishlari va amaliy topshiriqlar bilan olib boriladi.",
    image: process03,
  },
  {
    number: '04',
    title: 'NATIJANI BAHOLAYMIZ',
    description: "Test yoki yakuniy loyiha orqali o'zlashtirish darajasi tekshiriladi.",
    image: process04,
  },
  {
    number: '05',
    title: 'HISOBOT BERAMIZ',
    description:
      "Kompaniya uchun natijalar, tavsiyalar va keyingi yo'nalishlar taqdim etiladi.",
    image: process05,
  },
]

export function About() {
  const boxRef = useRef<HTMLDivElement>(null)
  const N = processSteps.length
  const [activeIndex, setActiveIndex] = useState(0)
  const activeRef = useRef(0)
  const hoveringRef = useRef(false)
  const lockUntilRef = useRef(0)

  useEffect(() => {
    activeRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    const el = boxRef.current
    if (!el) return

    const onEnter = () => {
      hoveringRef.current = true
    }
    const onLeave = () => {
      hoveringRef.current = false
    }

    const onWheel = (e: WheelEvent) => {
      if (!hoveringRef.current) return
      const dir = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0
      if (dir === 0) return
      const cur = activeRef.current
      // At the edges (last step scrolling down OR first step scrolling up),
      // let the page scroll normally to escape the box.
      if ((dir > 0 && cur >= N - 1) || (dir < 0 && cur <= 0)) return

      e.preventDefault()
      const now = performance.now()
      if (now < lockUntilRef.current) return
      lockUntilRef.current = now + 600 // debounce: one step per ~0.6s

      const next = Math.max(0, Math.min(N - 1, cur + dir))
      if (next !== cur) setActiveIndex(next)
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('wheel', onWheel)
    }
  }, [N])

  const step = processSteps[activeIndex]

  return (
    <section id="about" className="relative bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        {/* Header */}
        <div className="mb-10">
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

        {/* Interactive box: hijacks wheel only when hovered */}
        <div
          ref={boxRef}
          className="relative rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 lg:p-14"
          style={{ boxShadow: '0 10px 40px -20px rgba(44,50,94,0.18)' }}
        >
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
                  className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-100"
                  style={{
                    boxShadow:
                      'inset 0 2px 8px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(0,0,0,0.04)',
                  }}
                >
                  <img
                    src={step.image}
                    alt={`${step.title} bosqichi`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dot indicators (clickable) */}
          <div className="flex items-center gap-3 mt-10">
            {processSteps.map((s, i) => (
              <button
                key={s.number}
                onClick={() => setActiveIndex(i)}
                aria-label={`Bosqich ${s.number}`}
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
