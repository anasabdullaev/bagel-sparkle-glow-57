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
import { useMemo } from 'react'
import audienceBank from '../assets/audience-bank.jpg'
import audienceInsurance from '../assets/audience-insurance.jpg'
import audienceGovernment from '../assets/audience-government.jpg'
import audienceCorporate from '../assets/audience-corporate.jpg'
import audienceFinance from '../assets/audience-finance.jpg'
import audienceMarketing from '../assets/audience-marketing.jpg'
import audienceHR from '../assets/audience-hr.jpg'
import audienceSMB from '../assets/audience-smb.jpg'
import { useLanguage } from '../contexts/LanguageContext'

interface AudienceItem {
  title: string
  tag: string
  icon: LucideIcon
  image: string
}

export function Audience() {
  const { t } = useLanguage()

  const audiences: AudienceItem[] = useMemo(
    () => [
      { title: t('Tijoriy banklar', 'Commercial banks'), tag: 'Banking', icon: Landmark, image: audienceBank },
      { title: t("Sug'urta kompaniyalari", 'Insurance companies'), tag: 'Insurance', icon: ShieldCheck, image: audienceInsurance },
      { title: t('Davlat tashkilotlari', 'Government institutions'), tag: 'Public sector', icon: Building2, image: audienceGovernment },
      { title: t('Xususiy korporatsiyalar', 'Private corporations'), tag: 'Corporate', icon: Briefcase, image: audienceCorporate },
      { title: t('Moliya va buxgalteriya', 'Finance & accounting teams'), tag: 'Finance', icon: Calculator, image: audienceFinance },
      { title: t('Marketing va PR jamoalari', 'Marketing & PR teams'), tag: 'Marketing', icon: Megaphone, image: audienceMarketing },
      { title: t("HR va L&D bo'limlari", 'HR & L&D departments'), tag: 'People', icon: Users2, image: audienceHR },
      { title: t("Kichik va o'rta bizneslar", 'Small & medium businesses'), tag: 'SMB', icon: Store, image: audienceSMB },
    ],
    [t]
  )

  return (
    <section
      id="audience"
      aria-label={t('Kimlar uchun mos', 'Who it is for')}
      className="relative py-24 overflow-hidden"
      style={{ background: '#0B0D1A' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
              {t('· KIMLAR UCHUN ·', '· WHO IT IS FOR ·')}
            </span>
            <span className="h-px w-10 bg-primary/60" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
            {t('Qaysi', 'Which')} <span className="text-primary">{t('tashkilotlar', 'organizations')}</span> {t('uchun mos?', 'is it for?')}
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            {t(
              'Treninglarimiz turli sohalardagi jamoalar uchun moslashtirilgan — kichik bizneslardan tortib yirik moliyaviy institutlargacha.',
              'Our training is tailored for teams across many industries — from small businesses to large financial institutions.'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {audiences.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 overflow-hidden hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.4)] hover:border-primary/40 hover:bg-white/[0.07] transition-all duration-700"
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-white text-xs font-medium tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-primary/90 backdrop-blur flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="relative inline-flex items-center gap-2 mb-2 text-[10px] tracking-[0.2em] uppercase text-primary/90 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item.tag}
                </div>

                <h3 className="relative text-base sm:text-lg font-semibold tracking-tight text-white leading-snug">
                  {item.title}
                </h3>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-1000" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
