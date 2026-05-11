'use client'

import { useState } from 'react'
import { Mail, Phone, GraduationCap, Briefcase, X } from 'lucide-react'
import { Dialog, DialogContent } from './ui/dialog'
import { ImageWithFallback } from './figma/ImageWithFallback'
import trainer1 from '../assets/trainer-1.jpg'
import trainer2 from '../assets/trainer-2.jpg'
import trainer3 from '../assets/trainer-3.jpg'
import trainer4 from '../assets/trainer-4.jpg'

type Trainer = {
  name: string
  role: string
  experience: string
  shortBio: string
  bio: string
  directions: string[]
  email: string
  phone: string
  image: string
}

const trainers: Trainer[] = [
  {
    name: "Moliya Mutaxassisi",
    role: "Korporativ moliya · Investitsiya tahlili",
    experience: "15+ yil tajriba",
    shortBio: "Bank va investitsiya kompaniyalarida real loyihalar tajribasiga ega trener.",
    bio: "Korporativ moliya, investitsiya tahlili va kapital bozorlari bo'yicha 15 yildan ortiq amaliy tajribaga ega. O'zbekiston va xorijdagi yetakchi banklar, investitsiya kompaniyalari hamda korporatsiyalar uchun moliyaviy modellashtirish, byudjetlashtirish va strategik moliyaviy boshqaruv bo'yicha treninglar tashkil etgan.",
    directions: ["Korporativ moliya", "Investitsiya tahlili", "Moliyaviy modellashtirish", "Byudjetlashtirish", "Kapital bozorlari"],
    email: "moliya@fineskills.uz",
    phone: "+998 90 123 45 67",
    image: trainer1,
  },
  {
    name: "Biznes va Marketing Trener",
    role: "Marketing · Biznes strategiya · PR",
    experience: "12+ yil tajriba",
    shortBio: "Brend boshqaruvi va korporativ kommunikatsiya bo'yicha amaliy keys-larga asoslangan treninglar.",
    bio: "Marketing strategiyasi, brend boshqaruvi va korporativ kommunikatsiya yo'nalishlarida 12 yildan ortiq amaliy tajriba. Yirik FMCG, retail va xizmat ko'rsatish kompaniyalarida marketing direktori sifatida ishlagan, hozirda korporativ mijozlar uchun amaliy treninglar olib boradi.",
    directions: ["Marketing strategiya", "Brend boshqaruvi", "PR va kommunikatsiya", "Digital marketing", "Sotuvlar"],
    email: "marketing@fineskills.uz",
    phone: "+998 90 123 45 68",
    image: trainer2,
  },
  {
    name: "Data Analytics Trener",
    role: "Data Analytics · IT vositalar · AI",
    experience: "10+ yil tajriba",
    shortBio: "Excel, Power BI, SQL va AI vositalari yordamida ma'lumotlarni tahlil qilish bo'yicha trener.",
    bio: "Ma'lumotlar tahlili va biznes intellekti yo'nalishida 10 yildan ortiq amaliy tajriba. Banklar va yirik korporatsiyalarda data-driven qarorlar qabul qilish tizimlarini joriy etgan. Sun'iy intellekt vositalaridan amaliyotda foydalanish bo'yicha mutaxassis.",
    directions: ["Excel (Advanced)", "Power BI", "SQL", "Python for Analytics", "AI vositalari"],
    email: "data@fineskills.uz",
    phone: "+998 90 123 45 69",
    image: trainer3,
  },
  {
    name: "Xalqaro Ekspert",
    role: "IFRS · Soft Skills · Business English",
    experience: "20+ yil tajriba",
    shortBio: "Xalqaro moliyaviy hisobot standartlari va biznes ingliz tili bo'yicha xalqaro tajribaga ega trener.",
    bio: "20 yildan ortiq xalqaro tajriba. Big4 audit kompaniyalarida ishlagan, IFRS va korporativ boshqaruv bo'yicha xalqaro sertifikatlar egasi. Biznes ingliz tili va soft skills yo'nalishlarida ko'plab korporativ dasturlar tashkil etgan.",
    directions: ["IFRS", "Korporativ boshqaruv", "Audit", "Business English", "Soft Skills"],
    email: "international@fineskills.uz",
    phone: "+998 90 123 45 70",
    image: trainer4,
  },
]

export function Team() {
  const [active, setActive] = useState<Trainer | null>(null)

  return (
    <div className="relative py-32 w-full" style={{ background: '#0B0D1A' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              Bizning mutaxassislar
            </span>
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-8 text-secondary-foreground">
            <span className="block">Treninglarni</span>
            <span className="block text-primary">amaliy tajribaga ega</span>
            <span className="block">MUTAXASSISLAR olib boradi</span>
          </h2>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Har bir mavzu real biznes vaziyatlari va korporativ muhitga mos amaliy misollar asosida tushuntiriladi.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((t) => (
            <button
              key={t.name}
              onClick={() => setActive(t)}
              className="group text-left bg-card border border-border rounded-3xl p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(var(--secondary-foreground)/0.25)] hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-2xl bg-primary/10">
                <ImageWithFallback
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-background/90 backdrop-blur px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[11px] font-bold tracking-wider uppercase text-secondary-foreground">
                    {t.experience}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-black leading-tight mb-2 text-secondary-foreground">
                {t.name}
              </h3>
              <p className="text-sm font-semibold text-primary mb-3">
                {t.role}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {t.shortBio}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-secondary-foreground border-b-2 border-primary pb-0.5 transition-all group-hover:gap-3">
                Batafsil ko'rish
                <span aria-hidden>→</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Trainer Modal */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border border-border rounded-3xl [&>button]:hidden duration-700 data-[state=open]:slide-in-from-bottom-8 data-[state=closed]:slide-out-to-bottom-8 data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100">
          {active && (
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Image side */}
              <div className="md:col-span-2 relative bg-primary/10 p-6 md:p-8 flex items-center justify-center">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-card flex items-center justify-center">
                  <ImageWithFallback
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content side */}
              <div className="md:col-span-3 p-6 md:p-10 relative">
                <button
                  onClick={() => setActive(null)}
                  aria-label="Yopish"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-primary mb-3">
                  {active.experience}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-secondary-foreground leading-tight mb-2">
                  {active.name}
                </h3>
                <p className="text-base font-semibold text-primary mb-6">
                  {active.role}
                </p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-foreground">Bio</h4>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {active.bio}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-foreground">O'tilgan yo'nalishlar</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.directions.map((d) => (
                      <span
                        key={d}
                        className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-secondary-foreground border border-primary/20"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-border">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-foreground mb-3">Kontakt</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`mailto:${active.email}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      {active.email}
                    </a>
                    <a
                      href={`tel:${active.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      {active.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
