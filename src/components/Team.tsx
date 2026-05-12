'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { ImageWithFallback } from './figma/ImageWithFallback'
import trainer1 from '../assets/trainer-1.jpg'
import trainer2 from '../assets/trainer-2.jpg'
import trainer3 from '../assets/trainer-3.jpg'

type Trainer = {
  name: string
  role: string
  bio: string
  image: string
}

const trainers: Trainer[] = [
  {
    name: "MUTAXASSIS ISMI",
    role: "Finance & Risk Management Trainer",
    bio: "Moliya va risk boshqaruvi sohasida korporativ tajribaga ega mutaxassis. IFRS, financial modelling va bank risklari bo'yicha treninglar olib boradi.",
    image: trainer1,
  },
  {
    name: "MUTAXASSIS ISMI",
    role: "Data Analytics Trainer",
    bio: "Excel, Power BI va Python sohasida amaliy tajribaga ega. Korporativ jamoalarga hisobot avtomatlashtirish va data storytelling bo'yicha o'qitadi.",
    image: trainer2,
  },
  {
    name: "MUTAXASSIS ISMI",
    role: "Soft Skills & Communications Trainer",
    bio: "Biznes muzokaralari, ommaviy nutq va leadership kommunikatsiyasi bo'yicha treninglar olib boradi.",
    image: trainer3,
  },
]

export function Team() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = () => {
    if (index < trainers.length - 1) {
      setDirection(1)
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index > 0) {
      setDirection(-1)
      setIndex(index - 1)
    }
  }

  const t = trainers[index]
  const hasPrev = index > 0
  const hasNext = index < trainers.length - 1

  return (
    <div className="relative w-full bg-black text-white overflow-hidden" style={{ minHeight: '80vh' }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        {/* Top label */}
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/50">
            Mutaxassislar
          </span>
        </div>

        {/* Section title */}
        <h2 className="max-w-5xl text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.1] mb-16 lg:mb-20 text-white">
          Treninglarni amaliy tajribaga ega mutaxassislar olib boradi
        </h2>

        {/* Trainer content */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -80 : 80, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              {/* Left: text */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05] mb-6 text-white">
                  {t.name}
                </h3>
                <p className="text-lg lg:text-xl font-semibold text-white mb-4">
                  {t.role}
                </p>
                <p className="text-base lg:text-lg text-white/75 leading-relaxed max-w-2xl">
                  {t.bio}
                </p>
              </div>

              {/* Right: photo card */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div
                  className="relative w-full aspect-square rounded-[24px] overflow-hidden"
                  style={{ backgroundColor: '#799A96' }}
                >
                  <ImageWithFallback
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        disabled={!hasPrev}
        aria-label="Oldingi mutaxassis"
        aria-disabled={!hasPrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
      </button>

      {/* Next button */}
      <button
        onClick={next}
        disabled={!hasNext}
        aria-label="Keyingi mutaxassis"
        aria-disabled={!hasNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
      >
        <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
      </button>


      {/* Counter */}
      <div className="absolute bottom-6 right-6 text-xs tracking-widest text-white/50 font-mono">
        {String(index + 1).padStart(2, '0')} / {String(trainers.length).padStart(2, '0')}
      </div>
    </div>
  )
}
