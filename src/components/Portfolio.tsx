'use client'


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
            <span className="text-foreground">AMALIY KORPORATIV TRENINGLAR </span>
            <span className="text-muted-foreground/50">MOLIYA VA INSTITUTSIONAL O‘SISHNING YANGI DAVRI UCHUN </span>
            <span className="text-foreground">O‘ZBEKISTONDA</span>
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

      </div>
    </section>
  )
}