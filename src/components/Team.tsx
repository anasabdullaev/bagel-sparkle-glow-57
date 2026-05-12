'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Search, Linkedin, Instagram, Send, Globe, Mail, Award, Briefcase, GraduationCap, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { ImageWithFallback } from './figma/ImageWithFallback'
import trainerRahimov from '../assets/trainer-rahimov.jpg'
import trainer1 from '../assets/trainer-1.jpg'
import trainer2 from '../assets/trainer-2.jpg'
import trainer3 from '../assets/trainer-3.jpg'
import trainer4 from '../assets/trainer-4.jpg'

type Specialty = 'marketing' | 'finance' | 'data' | 'acca' | 'soft-skills'

type Social = {
  telegram?: string
  linkedin?: string
  instagram?: string
  website?: string
  email?: string
}

type Trainer = {
  name: string
  role: string
  bio: string
  image: string
  specialties: Specialty[]
  experience: string
  highlights: string[]
  education: string[]
  gallery: string[]
  socials: Social
}

const trainers: Trainer[] = [
  {
    name: "MAMURJON RAHIMOV",
    role: "Marketing Consultant & Business Trainer",
    bio: "Marketing, biznes strategiya va korporativ boshqaruv bo'yicha xalqaro tajribaga ega mutaxassis. Webster University, MDIST va Westminster International University’da dars bergan; O'zbekiston banklari va yirik korporatsiyalar uchun amaliy treninglar olib boradi.",
    image: trainerRahimov,
    specialties: ['marketing'],
    experience: "15+ yillik tajriba",
    highlights: [
      "Webster University, MDIST va WIUT’da o'qituvchi",
      "O'zbekiston banklari uchun korporativ treninglar",
      "Marketing strategiya va brending bo'yicha maslahatchi",
    ],
    education: [
      "Emory University — BBA",
      "University of Illinois at Chicago — MA Economics",
    ],
    gallery: [trainerRahimov],
    socials: {
      linkedin: "https://www.linkedin.com/",
      telegram: "https://t.me/",
      email: "mailto:info@fineskills.uz",
    },
  },
  {
    name: "INOM GOFUROV",
    role: "Finance & Risk Management Trainer · CFA, ACCA, FRM",
    bio: "EBRD’da Energy Eurasia bo'yicha analitik, $340m+ portfelni boshqaradi. Asklepiy Group’da Finance Director va Internal Audit rahbari bo'lgan. Korporativ moliya, financial modelling va risk boshqaruvi bo'yicha treninglar olib boradi.",
    image: trainer1,
    specialties: ['finance', 'acca'],
    experience: "12+ yillik moliya tajribasi",
    highlights: [
      "EBRD — Energy Eurasia analitik, $340m+ portfel",
      "Asklepiy Group — Finance Director va Internal Audit rahbari",
      "MDIS Tashkent — CFA Quantitative Methods o'qituvchisi",
    ],
    education: [
      "CFA Charterholder",
      "ACCA Member",
      "FRM Certified",
    ],
    gallery: [trainer1],
    socials: {
      linkedin: "https://www.linkedin.com/",
      telegram: "https://t.me/",
    },
  },
  {
    name: "SANJAR BEKOV",
    role: "Data Analytics & IT Trainer",
    bio: "Webster University va University of Digital Economics and Agrotechnologies’da Python va Software Design bo'yicha o'qituvchi. MDIS Tashkent’da banklar uchun Data Analytics treninglarini olib borgan.",
    image: trainer2,
    specialties: ['data'],
    experience: "15+ yillik IT tajribasi",
    highlights: [
      "Webster University — Python va Software Design o'qituvchisi",
      "MDIS Tashkent — banklar uchun Data Analytics treninglari",
      "Korporativ jamoalar uchun Power BI va SQL workshoplari",
    ],
    education: [
      "University of Science and Technology (Janubiy Koreya) — M.E.",
    ],
    gallery: [trainer2],
    socials: {
      linkedin: "https://www.linkedin.com/",
      website: "https://example.com",
    },
  },
  {
    name: "SHOIRAKHON BOLIEVA",
    role: "ACCA & Financial Accounting Trainer",
    bio: "MDIST va FBA Academy’da ACCA tutor sifatida ishlaydi. ACCA Financial Accounting bo'yicha jahon miqyosida 8-o'rinni egallagan, talabalari FA, FR va FM imtihonlarida yuqori natijalarga erishgan.",
    image: trainer3,
    specialties: ['acca', 'finance'],
    experience: "8+ yillik o'qituvchilik tajribasi",
    highlights: [
      "ACCA Financial Accounting — jahon bo'yicha 8-o'rin",
      "MDIST va FBA Academy — ACCA tutor",
      "FA, FR, FM imtihonlarida yuqori pass rate",
    ],
    education: [
      "Tashkent State University of Economics",
      "ACCA Affiliate · IELTS 7.5+",
    ],
    gallery: [trainer3],
    socials: {
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
      telegram: "https://t.me/",
    },
  },
  {
    name: "TED ELDER",
    role: "Soft Skills & Leadership Trainer",
    bio: "30+ yillik xalqaro tajribaga ega trener. Global Training for Transformation’ning O'zbekistondagi vakili; leadership, jamoa qurish va kross-madaniy kommunikatsiya bo'yicha treninglar olib boradi.",
    image: trainer4,
    specialties: ['soft-skills'],
    experience: "30+ yillik xalqaro tajriba",
    highlights: [
      "Global Training for Transformation — O'zbekiston vakili",
      "Leadership va jamoa qurish bo'yicha treningslar",
      "Kross-madaniy kommunikatsiya eksperti",
    ],
    education: [
      "Fuller Graduate Schools — MA Intercultural Studies",
      "Texas A&M University",
    ],
    gallery: [trainer4],
    socials: {
      linkedin: "https://www.linkedin.com/",
      email: "mailto:info@fineskills.uz",
    },
  },
]

const specialtyLabels: Record<Specialty, string> = {
  marketing: 'Marketing',
  finance: 'Finance',
  data: 'Data',
  acca: 'ACCA',
  'soft-skills': 'Soft Skills',
}

function SocialLinks({ socials, size = 'sm' }: { socials: Social; size?: 'sm' | 'md' }) {
  const dim = size === 'md' ? 'w-11 h-11' : 'w-9 h-9'
  const icon = size === 'md' ? 'w-5 h-5' : 'w-4 h-4'
  const items: { href?: string; Icon: typeof Send; label: string }[] = [
    { href: socials.telegram, Icon: Send, label: 'Telegram' },
    { href: socials.linkedin, Icon: Linkedin, label: 'LinkedIn' },
    { href: socials.instagram, Icon: Instagram, label: 'Instagram' },
    { href: socials.website, Icon: Globe, label: 'Website' },
    { href: socials.email, Icon: Mail, label: 'Email' },
  ].filter((i) => !!i.href) as { href: string; Icon: typeof Send; label: string }[]

  if (items.length === 0) return null
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          className={`${dim} rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors`}
        >
          <Icon className={icon} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  )
}

export function Team() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [activeFilter, setActiveFilter] = useState<'all' | Specialty>('all')
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState<Trainer | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const lastFocusedRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!expanded) return

    lastFocusedRef.current = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const getFocusable = (): HTMLElement[] => {
      if (!modalRef.current) return []
      return Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute('aria-hidden'))
    }

    // Initial focus
    requestAnimationFrame(() => {
      const focusables = getFocusable()
      ;(focusables[0] ?? modalRef.current)?.focus()
    })

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setExpanded(null)
        return
      }
      if (e.key !== 'Tab') return
      const focusables = getFocusable()
      if (focusables.length === 0) {
        e.preventDefault()
        modalRef.current?.focus()
        return
      }
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement as HTMLElement | null
      if (e.shiftKey) {
        if (active === first || !modalRef.current?.contains(active)) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (active === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
      lastFocusedRef.current?.focus?.()
    }
  }, [expanded])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return trainers.filter((tr) => {
      const matchesFilter = activeFilter === 'all' || tr.specialties.includes(activeFilter)
      const matchesQuery = !q || tr.name.toLowerCase().includes(q)
      return matchesFilter && matchesQuery
    })
  }, [activeFilter, query])

  const safeIndex = filtered.length === 0 ? 0 : Math.min(index, filtered.length - 1)
  const t = filtered[safeIndex]

  const next = () => {
    if (safeIndex < filtered.length - 1) {
      setDirection(1)
      setIndex(safeIndex + 1)
    }
  }
  const prev = () => {
    if (safeIndex > 0) {
      setDirection(-1)
      setIndex(safeIndex - 1)
    }
  }

  const handleFilter = (id: 'all' | Specialty) => {
    setActiveFilter(id)
    setIndex(0)
    setDirection(1)
  }

  const handleQuery = (v: string) => {
    setQuery(v)
    setIndex(0)
    setDirection(1)
  }

  const hasPrev = safeIndex > 0
  const hasNext = safeIndex < filtered.length - 1

  return (
    <div className="relative w-full bg-black text-white overflow-hidden" style={{ minHeight: '80vh' }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/50">
            Mutaxassislar
          </span>
        </div>

        <h2 className="max-w-5xl text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.1] mb-10 lg:mb-12 text-white">
          {"\n"}
        </h2>

        <div className="relative min-h-[400px]">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-white/50">
              Hech qanday mutaxassis topilmadi.
            </div>
          ) : (
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.name}
                custom={direction}
                initial={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -80 : 80, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05] mb-6 text-white">
                    {t.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {t.specialties.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full border border-white/25 text-xs font-semibold uppercase tracking-wider text-white/80"
                      >
                        {specialtyLabels[s]}
                      </span>
                    ))}
                  </div>

                  <p className="text-base lg:text-lg text-white/75 leading-relaxed max-w-2xl mb-8">
                    {t.bio}
                  </p>

                  <button
                    onClick={() => setExpanded(t)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors"
                  >
                    Batafsil ma'lumot
                    <ChevronRight className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>

                <div className="lg:col-span-5 order-1 lg:order-2">
                  <div
                    className="relative w-full aspect-square rounded-[24px] overflow-hidden cursor-pointer group"
                    style={{ backgroundColor: '#799A96' }}
                    onClick={() => setExpanded(t)}
                  >
                    <ImageWithFallback
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>

      <button
        onClick={prev}
        disabled={!hasPrev}
        aria-label="Oldingi mutaxassis"
        aria-disabled={!hasPrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
      </button>

      <button
        onClick={next}
        disabled={!hasNext}
        aria-label="Keyingi mutaxassis"
        aria-disabled={!hasNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
      >
        <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
      </button>

      <div className="absolute bottom-6 right-6 text-xs tracking-widest text-white/50 font-mono">
        {filtered.length === 0
          ? '00 / 00'
          : `${String(safeIndex + 1).padStart(2, '0')} / ${String(filtered.length).padStart(2, '0')}`}
      </div>

      {/* Expanded modal */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setExpanded(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="trainer-modal-title"
          >
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[24px] bg-neutral-950 border border-white/10 text-white outline-none"
            >
              <button
                onClick={() => setExpanded(null)}
                aria-label="Yopish"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative">
                  <div className="aspect-square md:aspect-auto md:h-full bg-[#799A96]">
                    <ImageWithFallback
                      src={expanded.image}
                      alt={expanded.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-7 p-6 sm:p-8 lg:p-10">
                  <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/50">
                    Mutaxassis profili
                  </span>
                  <h3 id="trainer-modal-title" className="mt-2 text-3xl sm:text-4xl font-black uppercase leading-[1.05] mb-3">
                    {expanded.name}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-white mb-4">
                    {expanded.role}
                  </p>

                  <div className="flex items-center gap-2 mb-6 text-sm text-white/70">
                    <Briefcase className="w-4 h-4" strokeWidth={1.8} />
                    <span>{expanded.experience}</span>
                  </div>

                  <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-7">
                    {expanded.bio}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
                      <Award className="w-4 h-4" strokeWidth={1.8} />
                      Yutuqlar
                    </div>
                    <ul className="space-y-2">
                      {expanded.highlights.map((h) => (
                        <li key={h} className="text-sm text-white/80 flex gap-2">
                          <span className="text-white/40">—</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-7">
                    <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
                      <GraduationCap className="w-4 h-4" strokeWidth={1.8} />
                      Ta'lim & Sertifikatlar
                    </div>
                    <ul className="space-y-2">
                      {expanded.education.map((e) => (
                        <li key={e} className="text-sm text-white/80 flex gap-2">
                          <span className="text-white/40">—</span>
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {expanded.gallery.length > 1 && (
                    <div className="mb-7">
                      <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-3">
                        Galereya
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {expanded.gallery.map((g, i) => (
                          <div key={i} className="aspect-square rounded-lg overflow-hidden bg-white/5">
                            <ImageWithFallback src={g} alt={`${expanded.name} ${i + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-3">
                      Aloqa
                    </div>
                    <SocialLinks socials={expanded.socials} size="md" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
