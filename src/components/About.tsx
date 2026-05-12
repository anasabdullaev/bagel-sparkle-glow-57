'use client'

export function About() {
  const processSteps = [
    {
      number: "01",
      title: "EHTIYOJNI ANIQLAYMIZ",
      description: "Kompaniya maqsadi, bo'lim vazifalari va xodimlar darajasi chuqur o'rganiladi. Qaysi ko'nikmalar kerakligi aniqlanadi.",
    },
    {
      number: "02",
      title: "DASTUR TUZAMIZ",
      description: "Kompaniyaga moslashtirilgan trening rejasi ishlab chiqiladi. Mavzular, davomiylik, format va amaliy mashqlar belgilanadi.",
    },
    {
      number: "03",
      title: "TRENING O'TKAZAMIZ",
      description: "Darslar real biznes case'lar, guruh ishlari, amaliy topshiriqlar va muhokamalar asosida olib boriladi.",
    },
    {
      number: "04",
      title: "NATIJANI BAHOLAYMIZ",
      description: "Test, topshiriq yoki yakuniy loyiha orqali har bir xodimning o'zlashtirish darajasi tekshiriladi.",
    },
    {
      number: "05",
      title: "HISOBOT BERAMIZ",
      description: "Kompaniya uchun umumiy natijalar, xodimlar bo'yicha tavsiyalar va keyingi rivojlanish yo'nalishlari taqdim etiladi.",
    },
  ]

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        {/* Header */}
        <div className="mb-20">
          <span
            className="block text-sm font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: '#799A96' }}
          >
            Jarayon
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05]"
            style={{ color: '#2C325E' }}
          >
            Trening qanday tashkil etiladi
          </h2>
        </div>

        {/* Steps */}
        <div>
          {processSteps.map((step, index) => {
            const textLeft = index % 2 === 0
            const isLast = index === processSteps.length - 1
            return (
              <div key={step.number}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24 ${
                    textLeft ? '' : ''
                  }`}
                >
                  {/* Text */}
                  <div className={`relative ${textLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div
                      className="font-black leading-none mb-4"
                      style={{
                        fontSize: '72px',
                        color: '#799A96',
                        opacity: 0.4,
                      }}
                    >
                      {step.number}
                    </div>
                    <h3
                      className="font-bold uppercase mb-4 tracking-tight"
                      style={{ color: '#2C325E', fontSize: '22px' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: '#6B7280',
                        fontSize: '16px',
                        lineHeight: 1.7,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Image placeholder */}
                  <div className={textLeft ? 'lg:order-2' : 'lg:order-1'}>
                    <div
                      className="w-full rounded-2xl bg-gray-100"
                      style={{
                        aspectRatio: '4 / 3',
                        boxShadow:
                          'inset 0 2px 8px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(0,0,0,0.04)',
                      }}
                      aria-label={`${step.title} image placeholder`}
                    />
                  </div>
                </div>
                {!isLast && (
                  <div
                    className="w-full h-px mb-24"
                    style={{ backgroundColor: '#e5e7eb' }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
