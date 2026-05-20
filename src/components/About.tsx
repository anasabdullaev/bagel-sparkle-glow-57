'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import process01 from '@/assets/process-01.jpg'
import process02 from '@/assets/process-02.jpg'
import process03 from '@/assets/process-03.jpg'
import process04 from '@/assets/process-04.jpg'
import process05 from '@/assets/process-05.jpg'
import { useLanguage } from '../contexts/LanguageContext'

export function About() {
  const { t } = useLanguage()
  const boxRef = useRef<HTMLDivElement>(null)

  const processSteps = useMemo(
    () => [
      {
        number: '01',
        title: t('EHTIYOJNI ANIQLAYMIZ', 'IDENTIFY THE NEED'),
        description: t(
          "Kompaniya maqsadi, bo'lim vazifalari va xodimlar darajasi chuqur o'rganiladi.",
          'We carefully study your company goals, departmental tasks and employee skill levels.'
        ),
        image: process01,
      },
      {
        number: '02',
        title: t('DASTUR TUZAMIZ', 'DESIGN THE PROGRAM'),
        description: t(
          'Kompaniyaga moslashtirilgan trening rejasi ishlab chiqiladi.',
          'A training plan tailored to your company is developed.'
        ),
        image: process02,
      },
      {
        number: '03',
        title: t("TRENING O'TKAZAMIZ", 'DELIVER THE TRAINING'),
        description: t(
          "Darslar real biznes case'lar, guruh ishlari va amaliy topshiriqlar bilan olib boriladi.",
          'Sessions are delivered with real business cases, group work and hands-on assignments.'
        ),
        image: process03,
      },
      {
        number: '04',
        title: t('NATIJANI BAHOLAYMIZ', 'EVALUATE THE RESULTS'),
        description: t(
          "Test yoki yakuniy loyiha orqali o'zlashtirish darajasi tekshiriladi.",
          'Mastery is measured through a final test or capstone project.'
        ),
        image: process04,
      },
      {
        number: '05',
        title: t('HISOBOT BERAMIZ', 'DELIVER THE REPORT'),
        description: t(
          "Kompaniya uchun natijalar, tavsiyalar va keyingi yo'nalishlar taqdim etiladi.",
          'You receive a clear report with outcomes, recommendations and next steps.'
        ),
        image: process05,
      },
    ],
    [t]
  )

  const N = processSteps.length
  const [activeIndex, setActiveIndex] = useState(0)
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % N)
      setShowHint(false)
    }, 5000)
    return () => clearInterval(id)
  }, [N])

  useEffect(() => {
    const el = boxRef.current
    if (!el) return
    let lock = false
    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX
      const goingForward = delta > 0
      const atStart = activeIndex === 0 && !goingForward
      const atEnd = activeIndex === N - 1 && goingForward
      if (atStart || atEnd) return
      e.preventDefault()
      if (lock) return
      if (Math.abs(delta) < 8) return
      lock = true
      setShowHint(false)
      setActiveIndex((prev) => Math.min(N - 1, Math.max(0, prev + (goingForward ? 1 : -1))))
      setTimeout(() => {
        lock = false
      }, 550)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [activeIndex, N])

  useEffect(() => {
    if (activeIndex > 0) setShowHint(false)
  }, [activeIndex])

  const step = processSteps[activeIndex]

  return (
    <section id="about" className="relative py-20 sm:py-28" style={{ backgroundColor: '#F2F5F4' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="mb-10">
          <span
            className="block text-sm font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: '#799A96' }}
          >
            {t('Jarayon', 'Process')}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.05]"
            style={{ color: '#2C325E' }}
          >
            {t('Trening qanday tashkil etiladi', 'How a training program is built')}
          </h2>
        </div>

        <div
          ref={boxRef}
          className="relative rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 lg:p-14"
          style={{ boxShadow: '0 10px 40px -20px rgba(44,50,94,0.18)', overscrollBehavior: 'contain' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[420px]">
            <div className="relative">
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="-mt-10 mb-6 flex items-center gap-2"
                aria-hidden="true"
              >
                <svg width="50" height="34" viewBox="0 0 50 34" fill="none">
                  <rect x="2" y="2" width="42" height="30" rx="15" stroke="#2C325E" strokeWidth="2.5" />
                  <motion.rect
                    x="9" y="15" width="9" height="4" rx="2" fill="#2C325E"
                    animate={{ x: [0, 6, 0], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </svg>
                <motion.svg
                  width="14" height="22" viewBox="0 0 12 20" fill="none"
                  animate={{ x: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path d="M2 2 L9 10 L2 18" stroke="#799A96" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step.number}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="font-black leading-none mb-4" style={{ fontSize: '72px', color: '#799A96', opacity: 0.4 }}>
                    {step.number}
                  </div>
                  <h3 className="font-bold uppercase mb-4 tracking-tight" style={{ color: '#2C325E', fontSize: '22px' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: 1.7 }}>
                    {step.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative w-full" style={{ aspectRatio: '4 / 3' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-100"
                  style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(0,0,0,0.04)' }}
                >
                  <img
                    src={step.image}
                    alt={`${step.title} ${t('bosqichi', 'step')}`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-10">
            {processSteps.map((s, i) => (
              <button
                key={s.number}
                onClick={() => setActiveIndex(i)}
                aria-label={`${t('Bosqich', 'Step')} ${s.number}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? 28 : 8,
                  backgroundColor: i <= activeIndex ? '#799A96' : '#e5e7eb',
                }}
              />
            ))}
          </div>

          <AnimatePresence>
            {showHint && activeIndex === 0 && (
              <motion.div
                key="scroll-hint"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center gap-2"
                aria-hidden="true"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#799A96' }}>
                  {t('Scroll →', 'Scroll →')}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
