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
  const [showHint, setShowHint] = useState(true)
  const activeRef = useRef(0)
  const hoveringRef = useRef(false)
  const lockUntilRef = useRef(0)
  const touchStartXRef = useRef<number | null>(null)
  const touchStartYRef = useRef<number | null>(null)
  const touchHandledRef = useRef(false)

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
      if (next !== cur) {
        setActiveIndex(next)
        setShowHint(false)
      }
    }

    const advance = (dir: number) => {
      const cur = activeRef.current
      const next = Math.max(0, Math.min(N - 1, cur + dir))
      if (next !== cur) {
        setActiveIndex(next)
        setShowHint(false)
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return
      touchStartXRef.current = e.touches[0].clientX
      touchStartYRef.current = e.touches[0].clientY
      touchHandledRef.current = false
    }
    const onTouchMove = (e: TouchEvent) => {
      if (touchHandledRef.current || touchStartXRef.current == null) return
      const dx = e.touches[0].clientX - touchStartXRef.current
      const dy = e.touches[0].clientY - (touchStartYRef.current ?? 0)
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        const cur = activeRef.current
        const dir = dx < 0 ? 1 : -1
        // Allow vertical page scroll at edges
        if ((dir > 0 && cur >= N - 1) || (dir < 0 && cur <= 0)) return
        e.preventDefault()
        touchHandledRef.current = true
        advance(dir)
      }
    }
    const onTouchEnd = () => {
      touchStartXRef.current = null
      touchStartYRef.current = null
      touchHandledRef.current = false
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd)
    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [N])

  useEffect(() => {
    if (activeIndex > 0) setShowHint(false)
  }, [activeIndex])

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
              {/* Animated scroll-mouse icon above step number */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-4 flex flex-col items-start gap-1"
                aria-hidden="true"
              >
                <svg width="34" height="50" viewBox="0 0 34 50" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="30"
                    height="42"
                    rx="15"
                    stroke="#2C325E"
                    strokeWidth="2.5"
                  />
                  <motion.rect
                    x="15"
                    y="9"
                    width="4"
                    height="9"
                    rx="2"
                    fill="#2C325E"
                    animate={{ y: [0, 6, 0], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </svg>
                <motion.svg
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ marginLeft: 7 }}
                >
                  <path
                    d="M2 2 L10 9 L18 2"
                    stroke="#799A96"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.div>

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

          {/* Swipe hint: 3D finger emoji animating right→left */}
          <AnimatePresence>
            {showHint && activeIndex === 0 && (
              <motion.div
                key="swipe-hint"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center gap-2"
                aria-hidden="true"
              >
                <motion.div
                  animate={{ x: [40, -40, 40] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    fontSize: 44,
                    filter:
                      'drop-shadow(0 6px 10px rgba(44,50,94,0.25)) drop-shadow(0 2px 3px rgba(0,0,0,0.15))',
                  }}
                >
                  👆
                </motion.div>
                <span
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: '#799A96' }}
                >
                  Swipe / Scroll
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
