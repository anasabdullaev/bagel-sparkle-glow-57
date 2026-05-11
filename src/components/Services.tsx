'use client'

import { useState } from 'react'
import {
  TrendingUp,
  Landmark,
  FileSpreadsheet,
  BarChart3,
  Sparkles,
  Megaphone,
  ArrowUpRight,
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import serviceFinance from '../assets/service-finance.jpg'
import serviceBanking from '../assets/service-banking.jpg'
import serviceIfrs from '../assets/service-ifrs.jpg'
import serviceData from '../assets/service-data.jpg'
import serviceAi from '../assets/service-ai.jpg'
import serviceSoftskills from '../assets/service-softskills.jpg'

type Service = {
  id: string
  title: string
  description: string
  topics: string[]
  icon: React.ComponentType<{ className?: string }>
  number: string
  image: string
}

const services: Service[] = [
  {
    id: 'finance',
    number: '01',
    title: "Moliya va korporativ finance",
    description: "Korporativ moliya, byudjetlashtirish va investitsiya qarorlarini amaliyotda qo'llash bo'yicha chuqur dastur.",
    topics: ['Financial Modelling', 'Budgeting', 'Corporate Finance', 'Investment Analysis'],
    icon: TrendingUp,
    image: serviceFinance,
  },
  {
    id: 'banking',
    number: '02',
    title: "Bank ishi va risk management",
    description: "Bank sektori uchun risklarni boshqarish, kredit va bozor risklari hamda Basel tamoyillari.",
    topics: ['Risk Management', 'Credit Risk', 'Market Risk', 'Basel Concepts'],
    icon: Landmark,
    image: serviceBanking,
  },
  {
    id: 'ifrs',
    number: '03',
    title: "MHXS / IFRS va hisobot",
    description: "Xalqaro moliyaviy hisobot standartlari va hisobotlarni to'g'ri talqin qilish bo'yicha amaliy trening.",
    topics: ['IFRS', 'Financial Reporting', 'Accounting Interpretation'],
    icon: FileSpreadsheet,
    image: serviceIfrs,
  },
  {
    id: 'data',
    number: '04',
    title: "Data Analytics va avtomatlashtirish",
    description: "Ma'lumotlar bilan ishlash, tahlil va hisobotlarni avtomatlashtirish uchun zamonaviy vositalar.",
    topics: ['Excel (Advanced)', 'Power BI', 'Python', 'Report Automation'],
    icon: BarChart3,
    image: serviceData,
  },
  {
    id: 'ai',
    number: '05',
    title: "AI va zamonaviy ish vositalari",
    description: "Sun'iy intellekt va avtomatlashtirish vositalarini biznes jarayonlarda samarali qo'llash.",
    topics: ['ChatGPT for Business', 'AI Tools', 'Workflow Automation'],
    icon: Sparkles,
    image: serviceAi,
  },
  {
    id: 'softskills',
    number: '06',
    title: "Marketing, PR va Soft skills",
    description: "Marketing strategiyasi, kommunikatsiya va shaxsiy samaradorlik ko'nikmalari bo'yicha treninglar.",
    topics: ['Digital Marketing', 'PR Strategy', 'Public Speaking', 'Negotiation', 'Presentation'],
    icon: Megaphone,
    image: serviceSoftskills,
  },
]

export function Services() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="services" className="relative py-32 bg-background w-full">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              Trening yo'nalishlari
            </span>
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-8 text-secondary-foreground">
            <span className="block">Yo'nalishlarimiz</span>
          </h2>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Compliance, AML, Internal control va xalqaro sertifikatlar
            <span className="text-primary font-semibold"> (ACCA, CFA, FRM) </span>
            bo'yicha alohida dasturlar ham mavjud.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            const isActive = hovered === service.id
            return (
              <article
                key={service.id}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative bg-card border border-border rounded-3xl p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(var(--secondary-foreground)/0.25)] hover:border-primary/40 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full mb-6 overflow-hidden rounded-2xl bg-primary/10">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                  {/* Number badge */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-background/90 backdrop-blur px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-secondary-foreground">
                      {service.number} / 06
                    </span>
                  </div>
                  {/* Icon badge */}
                  <div className="absolute bottom-3 right-3 w-12 h-12 rounded-2xl bg-background/95 backdrop-blur border border-border flex items-center justify-center transition-all duration-700 group-hover:bg-primary group-hover:border-primary">
                    <Icon className="w-6 h-6 text-primary transition-colors duration-700 group-hover:text-primary-foreground" />
                  </div>
                </div>

                <div className="relative px-2 flex-1 flex flex-col">

                  {/* Title */}
                  <h3 className="text-2xl font-black leading-tight mb-3 text-secondary-foreground">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-secondary-foreground border border-primary/20 transition-colors duration-700 group-hover:bg-primary/15 group-hover:border-primary/40"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <span className="text-xs font-bold tracking-widest uppercase text-primary">
                      {service.number} / 06
                    </span>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary transition-all duration-700 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
