'use client'

import { Play, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Tanlangan trening
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Korporativ treninglar</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Jamoangizni real biznes case'lar, amaliy mashqlar va zamonaviy metodologiya asosida kuchaytiramiz.
          </p>
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