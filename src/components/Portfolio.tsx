'use client'

import { Play, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header — Who We Are */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase text-foreground">
              Fine Skills Academy — biz haqimizda
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-16 max-w-6xl">
            <span className="text-foreground">PRACTICAL CORPORATE TRAINING </span>
            <span className="text-muted-foreground/50">FOR THE NEW ERA OF FINANCE &amp; INSTITUTIONAL GROWTH </span>
            <span className="text-foreground">IN UZBEKISTAN</span>
            <span className="inline-block w-3 h-3 lg:w-5 lg:h-5 ml-3 align-middle rounded-full bg-primary" />
          </h2>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-20 max-w-6xl">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Fine Skills Academy 2016-yilda tashkil etilgan bo'lib, bugungi kunda O'zbekistondagi banklar, korporatsiyalar va xalqaro institutlar uchun amaliy treninglar olib boradigan yetakchi platformaga aylangan. Biz 50+ kurs va 10 ta yo'nalishni — moliya, IFRS, data analytics, AI va soft skills'ni — bir joyga jamlaganmiz.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              7 yil ichida 25 000+ mutaxassis bizning treninglarimizdan o'tdi. CFA, ACCA va FRM sertifikatiga ega 150+ trener jamoasi har bir dasturni real biznes case'lar va kompaniya maqsadlariga moslab tuzadi — natijada xodimlar ko'nikmasi emas, biznes ko'rsatkichlari o'sadi.
            </p>
          </div>
        </div>

        {/* Featured Video */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-card clean-border rounded-3xl overflow-hidden elevated-shadow">
            {/* Video Embed */}
            <div className="relative">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/fIbDWDh6aYw?rel=0&showinfo=0&modestbranding=1"
                  title="Hampton Commercial - The Lonely Journey"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-t-3xl"
                />
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute top-6 right-6">
                <span className="glass-effect rounded-xl px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  Premium trening
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-accent-purple/10 text-accent-purple px-3 py-1 rounded-full text-sm font-medium">
                    Korporativ
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Mijozlar: Banklar · Korporatsiyalar · Institutlar
                  </span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Amaliy biznes ta'limi
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Har bir trening real biznes vazifalari, case study va amaliy mashqlar asosida olib boriladi. Kompaniya maqsadi va xodimlar darajasiga to'liq moslashtirilgan dastur — moliya va IFRS'dan tortib, data analytics, AI vositalar va soft skills'gacha.
                </p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block">Format</span>
                    <span className="font-medium">Korporativ trening</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Yondashuv</span>
                    <span className="font-medium">100% amaliy</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Materiallar</span>
                    <span className="font-medium">Real case study</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Natija</span>
                    <span className="font-medium">Hisobot va baholash</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}