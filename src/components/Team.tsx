'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Instagram,
  Send,
  Globe,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { useLanguage } from '../contexts/LanguageContext'

import trainer1 from '../assets/trainer-1.jpg'
import trainer2 from '../assets/trainer-2.jpg'
import trainer3 from '../assets/trainer-3.jpg'
import trainer4 from '../assets/trainer-4.jpg'
import trainer5 from '../assets/trainer-5.jpg'
import trainer6 from '../assets/trainer-6.jpg'

type Specialty = 'marketing' | 'finance' | 'data' | 'acca' | 'soft-skills' | 'law'

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

const specialtyLabels: Record<Specialty, string> = {
  marketing: 'Marketing',
  finance: 'Finance',
  data: 'Data',
  acca: 'ACCA',
  'soft-skills': 'Soft Skills',
  law: 'Law',
}

// (Unused but kept for future) SocialLinks component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _SocialLinks({ socials, size = 'sm' }: { socials: Social; size?: 'sm' | 'md' }) {
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
  const { t } = useLanguage()

  const trainers: Trainer[] = useMemo(
    () => [
      {
        name: 'MAMURJON M. RAHIMOV',
        role: t(
          'Marketing Consultant, Business Trainer & Lecturer',
          'Marketing Consultant, Business Trainer & Lecturer'
        ),
        bio: t(
          'Xalqaro tajribaga ega marketing konsultanti va biznes trener. 2015 yildan beri yirik kompaniyalar uchun korporativ treninglar olib boradi.',
          'An internationally experienced marketing consultant and business trainer. Has delivered corporate training for leading companies since 2015.'
        ),
        image: trainer2,
        specialties: ['marketing'],
        experience: t(
          "20+ yillik marketing va o'qituvchilik tajribasi",
          '20+ years of marketing and teaching experience'
        ),
        highlights: [
          t(
            'Marketing Consultant — Uztelecom, ARTEL, Almalyk MMC',
            'Marketing Consultant — Uztelecom, ARTEL, Almalyk MMC'
          ),
          t(
            'Webster University Tashkent — MBA Lecturer (2020–)',
            'Webster University Tashkent — MBA Lecturer (2020–present)'
          ),
          t('MDIS Tashkent — korporativ trener (2010–)', 'MDIS Tashkent — corporate trainer (2010–present)'),
          t(
            'Westminster International University — lektor (2009–2023)',
            'Westminster International University — Lecturer (2009–2023)'
          ),
        ],
        education: [
          t('MA Economics — University of Illinois at Chicago', 'MA Economics — University of Illinois at Chicago'),
          t('BBA Marketing — Emory University (Goizueta)', 'BBA Marketing — Emory University (Goizueta)'),
          t('ESMT Berlin — Top managers certificate', 'ESMT Berlin — Top Managers Certificate'),
        ],
        gallery: [trainer1],
        socials: { linkedin: 'https://www.linkedin.com/', telegram: 'https://t.me/' },
      },
      {
        name: 'SANJAR BEKOV',
        role: t('Data Analytics & IT Trainer', 'Data Analytics & IT Trainer'),
        bio: t(
          "Webster University va University of Digital Economics and Agrotechnologies'da Python va Software Design bo'yicha o'qituvchi. MDIS Tashkent'da banklar uchun Data Analytics treninglarini olib borgan.",
          'Lecturer in Python and Software Design at Webster University and the University of Digital Economics and Agrotechnologies. Has delivered Data Analytics training for banks at MDIS Tashkent.'
        ),
        image: trainer1,
        specialties: ['data'],
        experience: t('15+ yillik IT tajribasi', '15+ years of IT experience'),
        highlights: [
          t(
            "Webster University — Python va Software Design o'qituvchisi",
            'Webster University — Python and Software Design lecturer'
          ),
          t(
            'MDIS Tashkent — banklar uchun Data Analytics treninglari',
            'MDIS Tashkent — Data Analytics training for banks'
          ),
          t(
            'Korporativ jamoalar uchun Power BI va SQL workshoplari',
            'Power BI and SQL workshops for corporate teams'
          ),
        ],
        education: [
          t(
            'University of Science and Technology (Janubiy Koreya) — M.E.',
            'University of Science and Technology (South Korea) — M.E.'
          ),
        ],
        gallery: [trainer2],
        socials: { linkedin: 'https://www.linkedin.com/', website: 'https://example.com' },
      },
      {
        name: 'SHOIRAKHON BOLIEVA',
        role: t('ACCA & Financial Accounting Trainer', 'ACCA & Financial Accounting Trainer'),
        bio: t(
          "MDIST va FBA Academy'da ACCA tutor sifatida ishlaydi. ACCA Financial Accounting bo'yicha jahon miqyosida 8-o'rinni egallagan, talabalari FA, FR va FM imtihonlarida yuqori natijalarga erishgan.",
          'ACCA tutor at MDIST and FBA Academy. Ranked 8th worldwide in ACCA Financial Accounting; her students consistently achieve high pass rates in the FA, FR and FM exams.'
        ),
        image: trainer3,
        specialties: ['acca', 'finance'],
        experience: t("8+ yillik o'qituvchilik tajribasi", '8+ years of teaching experience'),
        highlights: [
          t(
            "ACCA Financial Accounting — jahon bo'yicha 8-o'rin",
            'ACCA Financial Accounting — 8th place worldwide'
          ),
          t('MDIST va FBA Academy — ACCA tutor', 'MDIST and FBA Academy — ACCA tutor'),
          t(
            'FA, FR, FM imtihonlarida yuqori pass rate',
            'High pass rates in the FA, FR and FM exams'
          ),
        ],
        education: [
          t('Tashkent State University of Economics', 'Tashkent State University of Economics'),
          t('ACCA Affiliate · IELTS 7.5+', 'ACCA Affiliate · IELTS 7.5+'),
        ],
        gallery: [trainer3],
        socials: {
          linkedin: 'https://www.linkedin.com/',
          instagram: 'https://www.instagram.com/',
          telegram: 'https://t.me/',
        },
      },
      {
        name: 'TED ELDER',
        role: t('Soft Skills & Leadership Trainer', 'Soft Skills & Leadership Trainer'),
        bio: t(
          "30+ yillik xalqaro tajribaga ega trener. Global Training for Transformation'ning O'zbekistondagi vakili; leadership, jamoa qurish va kross-madaniy kommunikatsiya bo'yicha treninglar olib boradi.",
          'A trainer with 30+ years of international experience. Representative of Global Training for Transformation in Uzbekistan, delivering training in leadership, team building and cross-cultural communication.'
        ),
        image: trainer4,
        specialties: ['soft-skills'],
        experience: t('30+ yillik xalqaro tajriba', '30+ years of international experience'),
        highlights: [
          t(
            "Global Training for Transformation — O'zbekiston vakili",
            'Global Training for Transformation — Uzbekistan representative'
          ),
          t(
            "Leadership va jamoa qurish bo'yicha treningslar",
            'Training in leadership and team building'
          ),
          t(
            'Kross-madaniy kommunikatsiya eksperti',
            'Cross-cultural communication expert'
          ),
        ],
        education: [
          t(
            'Fuller Graduate Schools — MA Intercultural Studies',
            'Fuller Graduate Schools — MA Intercultural Studies'
          ),
          t('Texas A&M University', 'Texas A&M University'),
        ],
        gallery: [trainer4],
        socials: { linkedin: 'https://www.linkedin.com/', email: 'mailto:info@fineskills.uz' },
      },
      {
        name: 'AZIZJON RIKHSIBOYEV',
        role: t(
          'English, IELTS & IT Senior Lecturer',
          'English, IELTS & IT Senior Lecturer'
        ),
        bio: t(
          "MDIST Senior Lecturer; 8+ yillik ingliz tili, IELTS va IT yo'nalishlarida o'qituvchilik tajribasiga ega. Foundation va bakalavr talabalariga Fundamentals of IT, akademik ingliz tili va matematika fanlarini olib boradi.",
          'Senior Lecturer at MDIST with 8+ years of teaching experience across English, IELTS and IT. Delivers Fundamentals of IT, academic English and mathematics tutorials to Foundation and undergraduate students.'
        ),
        image: trainer5,
        specialties: ['data', 'soft-skills'],
        experience: t(
          "8+ yillik o'qituvchilik va IT tajribasi",
          '8+ years of teaching and IT experience'
        ),
        highlights: [
          t(
            'MDIST — Fundamentals of IT, English Plus va Mathematics bo‘yicha Senior Lecturer',
            'MDIST — Senior Lecturer in Fundamentals of IT, English Plus and Mathematics'
          ),
          t(
            'Cambridge LC — IELTS instruktori (2020–2025)',
            'Cambridge LC — IELTS Instructor (2020–2025)'
          ),
          t(
            'IELTS 8.0 (Listening 9.0, Reading 8.5) · C2 Proficient',
            'IELTS 8.0 (Listening 9.0, Reading 8.5) · C2 Proficient'
          ),
          t(
            'Sobiq iOS dasturchi — DataSite Technologies (Swift, Objective-C)',
            'Former iOS developer — DataSite Technologies (Swift, Objective-C)'
          ),
        ],
        education: [
          t(
            'MA Education with TESOL — Teesside University, UK (2025)',
            'MA Education with TESOL — Teesside University, UK (2025)'
          ),
          t(
            'BSc Computer Engineering — Politecnico di Torino, Tashkent (2016)',
            'BSc Computer Engineering — Politecnico di Torino, Tashkent (2016)'
          ),
          t(
            'AI Literacy Certificate — Ministry of Higher Education (2026)',
            'AI Literacy Certificate — Ministry of Higher Education (2026)'
          ),
        ],
        gallery: [trainer5],
        socials: {
          email: 'mailto:abdulazizrikhsiboyev@gmail.com',
          telegram: 'https://t.me/',
          linkedin: 'https://www.linkedin.com/',
        },
      },
      {
        name: 'KHAMDAMBEK ATAJANOV',
        role: t(
          'Corporate & Business Law Lecturer (PhD)',
          'Corporate & Business Law Lecturer (PhD)'
        ),
        bio: t(
          "Korporativ huquq, biznes huquqi va kapital bozorlari huquqi bo'yicha yuridik fanlar doktori (PhD). TSUL va MDIST Tashkent'da o'qituvchi, qonunchilik loyihalarini ishlab chiqish va parlament tadqiqotlarida tajribaga ega amaliyotchi yurist.",
          'PhD in Law specializing in Corporate Law, Business Law and Capital Markets Law. Lecturer at TSUL and MDIS Tashkent and practicing lawyer with a strong background in legislative drafting and parliamentary research.'
        ),
        image: trainer6,
        specialties: ['law'],
        experience: t(
          "15+ yillik huquqshunoslik va o'qituvchilik tajribasi",
          '15+ years of legal and teaching experience'
        ),
        highlights: [
          t(
            "TSUL — Biznes huquqi kafedrasi o'qituvchisi (2023–)",
            'TSUL — Lecturer at the Business Law Department (2023–present)'
          ),
          t(
            "MDIS Tashkent — yuridik fanlar bo'yicha o'qituvchi",
            'MDIS Tashkent — Lecturer in law'
          ),
          t(
            "Oliy Majlis qoshidagi Qonunchilik va Parlament tadqiqotlari instituti — Iqtisodiy qonunchilik bo'limi boshlig'i (2018–2020)",
            'Head of the Economic Legislation Department — Legislation and Parliamentary Research Institute under the Oliy Majlis (2018–2020)'
          ),
          t(
            "UNDP loyihasi — \"Hunarmandchilik to'g'risida\" qonun loyihasini RIA bo'yicha jamoa rahbari (2019–2020)",
            'UNDP Project — Team Leader for the Regulatory Impact Assessment of the draft Law “On Craftsmanship” (2019–2020)'
          ),
        ],
        education: [
          t(
            "PhD huquqshunoslik — Tashkent State University of Law (2025)",
            'PhD in Law — Tashkent State University of Law (2025)'
          ),
          t(
            'Magistratura — Tashkent State University of Law (2016)',
            "Master’s Degree — Tashkent State University of Law (2016)"
          ),
          t(
            'Bakalavr — University of World Economy and Diplomacy (2006)',
            "Bachelor’s Degree — University of World Economy and Diplomacy (2006)"
          ),
        ],
        gallery: [trainer6],
        socials: {
          email: 'mailto:hamdambek@gmail.com',
          linkedin: 'https://www.linkedin.com/in/khamdambek-atajanov-b60426142/',
        },
      },
    ],
    [t]
  )

  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [activeFilter] = useState<'all' | Specialty>('all')
  const [query] = useState('')
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

    const scrollY = window.scrollY
    requestAnimationFrame(() => {
      if (modalRef.current) modalRef.current.scrollTop = 0
      modalRef.current?.focus({ preventScroll: true })
      window.scrollTo(0, scrollY)
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
  }, [activeFilter, query, trainers])

  const safeIndex = filtered.length === 0 ? 0 : Math.min(index, filtered.length - 1)
  const current = filtered[safeIndex]

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

  const hasPrev = safeIndex > 0
  const hasNext = safeIndex < filtered.length - 1

  return (
    <div
      className="relative w-full text-white overflow-hidden"
      style={{ minHeight: '80vh', background: '#0B0D1A' }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/50">
            {t('Mutaxassislar', 'Trainers')}
          </span>
        </div>

        <h2 className="max-w-5xl text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.1] mb-10 lg:mb-12 text-white">
          {t('Bizning professorlarimiz', 'Our professors')}
        </h2>

        <div className="relative min-h-[400px]">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-white/50">
              {t('Hech qanday mutaxassis topilmadi.', 'No trainers found.')}
            </div>
          ) : (
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.name}
                custom={direction}
                initial={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -80 : 80, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center"
              >
                <div className="lg:col-span-7 lg:order-1">
                  <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase leading-[1.05] mb-4 lg:mb-6 text-white">
                    {current.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                    {current.specialties.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full border border-white/25 text-xs font-semibold uppercase tracking-wider text-white/80"
                      >
                        {specialtyLabels[s]}
                      </span>
                    ))}
                  </div>

                  <p className="text-base lg:text-lg text-white/75 leading-relaxed max-w-2xl mb-6 lg:mb-8">
                    {current.bio}
                  </p>

                  <button
                    onClick={() => setExpanded(current)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors"
                  >
                    {t("Batafsil ma'lumot", 'View full profile')}
                    <ChevronRight className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>

                <div className="lg:col-span-5 lg:order-2">
                  <div
                    className="relative w-full h-auto lg:aspect-square mx-auto rounded-2xl p-[2px] cursor-pointer group transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(121,154,150,0.55)]"
                    style={{
                      maxWidth: '424px',
                      background:
                        'linear-gradient(135deg, #799A96 0%, #A8C5C1 45%, #2C325E 100%)',
                      boxShadow: '0 10px 30px -10px rgba(44,50,94,0.35)',
                    }}
                    onClick={() => setExpanded(current)}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
                      <ImageWithFallback
                        src={current.image}
                        alt={current.name}
                        className="block w-full h-auto lg:h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        style={{ objectPosition: 'center top', borderRadius: '16px' }}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40" />
                    </div>
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
        aria-label={t('Oldingi mutaxassis', 'Previous trainer')}
        aria-disabled={!hasPrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
      </button>

      <button
        onClick={next}
        disabled={!hasNext}
        aria-label={t('Keyingi mutaxassis', 'Next trainer')}
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

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/70 backdrop-blur-sm lg:p-6"
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
              className="relative w-[90vw] md:w-[60vw] lg:w-full max-w-5xl h-[70vh] lg:h-auto max-h-[70vh] lg:max-h-[calc(100dvh-3rem)] overflow-y-auto rounded-[20px] lg:rounded-[24px] bg-neutral-950 border border-white/10 text-white outline-none p-5 lg:p-0 shadow-2xl"
            >
              <button
                onClick={() => setExpanded(null)}
                aria-label={t('Yopish', 'Close')}
                className="sticky top-3 float-right lg:fixed lg:top-4 lg:right-4 z-[10000] w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white text-black shadow-lg hover:bg-white/90 border border-black/10 flex items-center justify-center"
              >
                <X className="w-5 h-5" strokeWidth={2.2} />
              </button>

              <div className="flex flex-col lg:flex-row lg:items-stretch">
                <div className="hidden lg:block lg:w-[42%] lg:shrink-0 bg-[#799A96] relative lg:self-stretch lg:h-auto overflow-hidden">
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src={expanded.image}
                      alt={expanded.name}
                      className="block w-full h-full object-cover"
                      style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '100%' }}
                    />
                  </div>
                </div>

                <div className="flex-1 lg:p-10">
                  <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/50">
                    {t('Mutaxassis profili', 'Trainer profile')}
                  </span>
                  <h3
                    id="trainer-modal-title"
                    className="mt-2 text-3xl sm:text-4xl font-black uppercase leading-[1.05] mb-3"
                  >
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
                      {t('Yutuqlar', 'Achievements')}
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
                      {t("Ta'lim & Sertifikatlar", 'Education & Certifications')}
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
                        {t('Galereya', 'Gallery')}
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {expanded.gallery.map((g, i) => (
                          <div key={i} className="aspect-square rounded-lg overflow-hidden bg-white/5">
                            <ImageWithFallback
                              src={g}
                              alt={`${expanded.name} ${i + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setExpanded(null)}
                    className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" strokeWidth={2} />
                    {t('Orqaga', 'Back')}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
