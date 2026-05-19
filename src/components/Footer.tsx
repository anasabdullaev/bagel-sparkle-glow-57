'use client'

import logoFineSkills from '../assets/logo-fineskills.jpg'

export function Footer() {
  const directions = [
    'Moliya & Corporate finance',
    'Bank ishi & Risk management',
    'MHXS / IFRS',
    'Compliance & AML',
    'Data Analytics & Power BI',
    'AI vositalari',
    'Marketing & PR',
    'Soft skills',
    'ACCA · CFA · FRM'
  ]

  return (
    <footer className="relative py-20 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-4">
            <div>
              <img
                src={logoFineSkills}
                alt="Fine Skills Academy"
                className="h-14 w-auto bg-white rounded-xl px-4 py-2 mb-5 shadow-sm"
              />
              <p className="text-background/70 leading-relaxed mb-6">
                Korporativ jamoalar uchun zamonaviy kasbiy ta'lim. Banklar, kompaniyalar va institutlar uchun amaliy treninglar.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center space-x-6">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/fine_skills_academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:scale-110 gentle-animation cursor-pointer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#833AB4"/>
                        <stop offset="50%" stopColor="#E1306C"/>
                        <stop offset="100%" stopColor="#F56040"/>
                      </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/fine_skills_academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="hover:scale-110 gentle-animation cursor-pointer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#229ED9">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>

              </div>

              {/* Contacts */}
              <div className="mt-6 space-y-2">
                <a href="mailto:support@fineskills.uz" className="block text-background/80 hover:text-background gentle-animation text-sm">
                  support@fineskills.uz
                </a>
                <a href="tel:+998947777227" className="block text-background/80 hover:text-background gentle-animation text-sm">
                  +998 94 777 72 27
                </a>
                <a
                  href="https://t.me/fineskills_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 rounded-full bg-background text-foreground text-sm font-semibold hover:opacity-90 gentle-animation"
                >
                  Support (Telegram)
                </a>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="col-span-12 md:col-span-8">
            <div>
              <h4 className="font-black text-2xl text-background mb-4">YO'NALISHLAR</h4>
              
              <p className="text-background/70 text-base mb-8 leading-relaxed">
                Banklar, kompaniyalar va institutlar uchun moliya, IFRS, risk management, data analytics, AI vositalari, marketing, PR va soft skills bo'yicha amaliy korporativ treninglar.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {directions.map((item) => (
                  <div
                    key={item}
                    className="text-background/80 hover:text-background gentle-animation text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-background/70 mb-4 md:mb-0">
              © 2025 Fine Skills Academy. Barcha huquqlar himoyalangan.
            </div>
            <div className="text-sm text-background/70">
              Toshkent, O'zbekiston
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}