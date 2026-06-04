'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Lang = 'uz' | 'en' | 'ru'

type LanguageContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: (uz: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

// Russian translations keyed by the Uzbek source string used in t('uz', 'en').
// Professional, natural Russian — not literal Google-style translation.
const RU: Record<string, string> = {
  // About / process
  'EHTIYOJNI ANIQLAYMIZ': 'ОПРЕДЕЛЯЕМ ПОТРЕБНОСТЬ',
  "Kompaniya maqsadi, bo'lim vazifalari va xodimlar darajasi chuqur o'rganiladi.":
    'Мы детально изучаем цели компании, задачи подразделений и уровень подготовки сотрудников.',
  'DASTUR TUZAMIZ': 'РАЗРАБАТЫВАЕМ ПРОГРАММУ',
  'Kompaniyaga moslashtirilgan trening rejasi ishlab chiqiladi.':
    'Разрабатываем программу обучения, адаптированную под вашу компанию.',
  "TRENING O'TKAZAMIZ": 'ПРОВОДИМ ТРЕНИНГ',
  "Darslar real biznes case'lar, guruh ishlari va amaliy topshiriqlar bilan olib boriladi.":
    'Занятия проходят на реальных бизнес-кейсах, в групповом формате и с практическими заданиями.',
  'NATIJANI BAHOLAYMIZ': 'ОЦЕНИВАЕМ РЕЗУЛЬТАТ',
  "Test yoki yakuniy loyiha orqali o'zlashtirish darajasi tekshiriladi.":
    'Уровень усвоения материала измеряется через итоговый тест или дипломный проект.',
  'HISOBOT BERAMIZ': 'ПРЕДОСТАВЛЯЕМ ОТЧЁТ',
  "Kompaniya uchun natijalar, tavsiyalar va keyingi yo'nalishlar taqdim etiladi.":
    'Вы получаете подробный отчёт с результатами, рекомендациями и дальнейшими шагами.',
  Jarayon: 'Процесс',
  'Trening qanday tashkil etiladi': 'Как выстраивается программа обучения',
  bosqichi: 'этап',
  Bosqich: 'Этап',
  'Scroll →': 'Прокрутка →',

  // Audience
  'Tijoriy banklar': 'Коммерческие банки',
  "Sug'urta kompaniyalari": 'Страховые компании',
  'Davlat tashkilotlari': 'Государственные учреждения',
  'Xususiy korporatsiyalar': 'Частные корпорации',
  'Moliya va buxgalteriya': 'Финансы и бухгалтерия',
  'Marketing va PR jamoalari': 'Команды маркетинга и PR',
  "HR va L&D bo'limlari": 'Отделы HR и L&D',
  "Kichik va o'rta bizneslar": 'Малый и средний бизнес',
  'Kimlar uchun mos': 'Для кого подходит',
  '· KIMLAR UCHUN ·': '· ДЛЯ КОГО ·',
  Qaysi: 'Каким',
  tashkilotlar: 'организациям',
  'uchun mos?': 'подходит?',
  'Treninglarimiz turli sohalardagi jamoalar uchun moslashtirilgan — kichik bizneslardan tortib yirik moliyaviy institutlargacha.':
    'Наши программы адаптированы под команды из разных отраслей — от малого бизнеса до крупных финансовых институтов.',

  // Awards / formats
  'Korporativ offline trening': 'Корпоративный офлайн-тренинг',
  'Jamoa bilan yuzma-yuz ishlash, real mashqlar va interaktiv muhokamalar uchun eng samarali format.':
    'Самый эффективный формат для очной работы с командой, практических упражнений и интерактивных дискуссий.',
  'Offline · Jamoa': 'Офлайн · Команда',
  'Online trening': 'Онлайн-тренинг',
  'Hududiy filiallar yoki masofadan ishlovchi xodimlar uchun qulay yechim.':
    'Удобное решение для региональных филиалов и удалённых сотрудников.',
  'Online · Masofaviy': 'Онлайн · Удалённо',
  'Hybrid trening': 'Гибридный тренинг',
  "Asosiy trening offline, qo'shimcha darslar va materiallar online formatda beriladi.":
    'Основной тренинг проходит офлайн, дополнительные занятия и материалы — онлайн.',
  'Intensiv workshop': 'Интенсивный воркшоп',
  "Muayyan ko'nikmani tez va amaliy shaklda o'zlashtirish uchun 1–3 kunlik dastur.":
    '1–3-дневная программа для быстрого и практического освоения конкретного навыка.',
  '1–3 kun': '1–3 дня',
  'Uzoq muddatli dastur': 'Долгосрочная программа',
  'Xodimlar kompetensiyasini bosqichma-bosqich rivojlantirish uchun 1–3 oylik tizimli dastur.':
    'Системная программа на 1–3 месяца для поэтапного развития компетенций сотрудников.',
  '1–3 oy': '1–3 месяца',
  'Executive sessiya': 'Сессия для руководителей',
  "Rahbarlar uchun strategik qarorlar, moliyaviy tahlil va risk bo'yicha maxsus sessiyalar.":
    'Закрытые сессии для топ-руководителей по стратегическим решениям, финансовому анализу и управлению рисками.',
  Barchasi: 'Все',
  Mutaxassislar: 'Тренеры',
  Trening: 'Тренинг',
  formatlari: 'форматы',
  "Har bir tashkilotning vaqti, maqsadi va xodimlar darajasiga qarab mos format tanlanadi.":
    'Формат подбирается под время, цели и уровень сотрудников каждой организации.',
  'Trening formatlari filtri': 'Фильтр форматов обучения',
  "Bu filtr bo'yicha format topilmadi.": 'По выбранному фильтру форматов не найдено.',

  // Certificates
  Sertifikatlar: 'Сертификаты',
  "Professorlarimizning sertifikatlari": 'Сертификаты наших профессоров',

  // Contact
  "Iltimos, barcha maydonlarni to'ldiring": 'Пожалуйста, заполните все поля',
  'Konfiguratsiya xatosi': 'Ошибка конфигурации',
  "Telegram bot sozlamalari topilmadi. Iltimos, administrator bilan bog'laning.":
    'Настройки Telegram-бота не найдены. Пожалуйста, свяжитесь с администратором.',
  Xatolik: 'Ошибка',
  "So'rovni yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring yoki to'g'ridan-to'g'ri bog'laning.":
    'При отправке запроса произошла ошибка. Пожалуйста, попробуйте ещё раз или свяжитесь с нами напрямую.',
  Aloqa: 'Контакты',
  'Jamoangiz uchun trening buyurtma qiling': 'Закажите тренинг для вашей команды',
  'Kompaniyangiz haqida qisqacha yozing — biz siz uchun moslashtirilgan trening dasturi taklifini taqdim etamiz.':
    'Кратко расскажите о вашей компании — и мы подготовим персональное предложение по программе обучения.',
  'Xabar yuborildi!': 'Сообщение отправлено!',
  "So'rovingiz qabul qilindi. 24 soat ichida siz bilan bog'lanamiz.":
    'Ваш запрос принят. Мы свяжемся с вами в течение 24 часов.',
  'Yana xabar yuborish': 'Отправить ещё одно сообщение',
  'Maslahat olish': 'Получить консультацию',
  "Formani to'ldiring — 24 soat ichida siz bilan bog'lanamiz":
    'Заполните форму — мы свяжемся с вами в течение 24 часов',
  'Hozir mavjud': 'Сейчас на связи',
  'Ism va familiya / Kompaniya': 'Имя и фамилия / Компания',
  'Ismingiz va kompaniya nomi': 'Ваше имя и название компании',
  'Email yoki telefon': 'Email или телефон',
  'email@kompaniya.uz yoki +998...': 'email@company.com или +998...',
  "Qiziqayotgan yo'nalish, xodimlar soni va izoh":
    'Интересующее направление, количество сотрудников и комментарий',
  "Masalan: IFRS bo'yicha 25 nafar xodim uchun korporativ trening...":
    'Например: корпоративный тренинг по IFRS для 25 сотрудников...',
  'Yuborilmoqda...': 'Отправляется...',
  'Taklif olish': 'Получить предложение',
  'Support (Telegram)': 'Поддержка (Telegram)',
  "Ehtiyojni o'rganamiz": 'Изучаем потребности',
  'Kompaniya maqsadi va xodimlar darajasini aniqlaymiz':
    'Определяем цели компании и уровень подготовки сотрудников',
  'Moslashtirilgan dastur': 'Индивидуальная программа',
  'Sizga maxsus tuzilgan trening rejasi va materiallar':
    'Программа обучения и материалы, разработанные специально для вас',
  'Natija va hisobot': 'Результаты и отчётность',
  'Baholash, hisobot va keyingi bosqich uchun tavsiyalar':
    'Оценка, отчёт и рекомендации по дальнейшим шагам',

  // Footer
  'Moliya & Corporate finance': 'Финансы и корпоративные финансы',
  'Bank ishi & Risk management': 'Банковское дело и риск-менеджмент',
  'Compliance & AML': 'Комплаенс и AML',
  'AI vositalari': 'Инструменты AI',
  'Soft skills': 'Soft skills',
  "Korporativ jamoalar uchun zamonaviy kasbiy ta'lim. Banklar, kompaniyalar va institutlar uchun amaliy treninglar.":
    'Современное профессиональное обучение для корпоративных команд. Практические тренинги для банков, компаний и институтов.',
  "YO'NALISHLAR": 'НАПРАВЛЕНИЯ',
  "Banklar, kompaniyalar va institutlar uchun moliya, IFRS, risk management, data analytics, AI vositalari, marketing, PR va soft skills bo'yicha amaliy korporativ treninglar.":
    'Практические корпоративные тренинги по финансам, IFRS, риск-менеджменту, data analytics, AI-инструментам, маркетингу, PR и soft skills для банков, компаний и институтов.',
  '© 2025 Fine Skills Academy. Barcha huquqlar himoyalangan.':
    '© 2025 Fine Skills Academy. Все права защищены.',
  "Toshkent, O'zbekiston": 'Ташкент, Узбекистан',

  // Hero / nav
  'Korporativ trening va mentorlik': 'Корпоративное обучение и менторинг',
  "Yo'nalishlar": 'Направления',
  'Biz haqimizda': 'О нас',
  'Menyuni yopish': 'Закрыть меню',
  'Menyuni ochish': 'Открыть меню',
  'Fine Skills Academy — kompaniyalar, banklar va institutlar uchun amaliy korporativ treninglar.':
    'Fine Skills Academy — практические корпоративные тренинги для компаний, банков и институтов.',

  // Portfolio / About company
  "Fine Skills Academy 2026-yilda tashkil etilgan bo'lib, bugungi kunda O'zbekistondagi banklar, korporatsiyalar va xalqaro institutlar uchun amaliy treninglar olib boradigan yetakchi platformaga aylangan. Biz 10+ yo'nalishni — moliya, IFRS, data analytics, AI va soft skills'ni — bir joyga jamlaganmiz.":
    'Fine Skills Academy основана в 2026 году и сегодня является ведущей платформой практического обучения для банков, корпораций и международных институтов в Узбекистане. Мы объединили более 10 направлений — финансы, IFRS, data analytics, AI и soft skills — на одной площадке.',

  // Services
  'Moliya va korporativ finance': 'Финансы и корпоративные финансы',
  "Korporativ moliya, byudjetlashtirish va investitsiya qarorlarini amaliyotda qo'llash bo'yicha chuqur dastur.":
    'Глубокая программа по применению корпоративных финансов, бюджетирования и инвестиционных решений на практике.',
  Marketing: 'Маркетинг',
  "Bank sektori uchun komplayens, MHXS/IFRS hisobot va risklarni boshqarish bo'yicha kompleks dastur.":
    'Комплексная программа по комплаенсу, отчётности МСФО/IFRS и риск-менеджменту для банковского сектора.',
  'Komplayens tizimi': 'Система комплаенса',
  'Risklarni boshqarish': 'Управление рисками',
  'Data Analytics va avtomatlashtirish': 'Data Analytics и автоматизация',
  "Ma'lumotlar bilan ishlash, tahlil va hisobotlarni avtomatlashtirish uchun zamonaviy vositalar.":
    'Современные инструменты для работы с данными, аналитики и автоматизации отчётности.',
  'AI va zamonaviy ish vositalari': 'AI и современные рабочие инструменты',
  "Sun'iy intellekt va avtomatlashtirish vositalarini biznes jarayonlarda samarali qo'llash.":
    'Эффективное применение искусственного интеллекта и инструментов автоматизации в бизнес-процессах.',
  'Soft skills va kommunikatsiya': 'Soft skills и коммуникации',
  "Tanqidiy fikrlash, ommaviy nutq va biznes muzokaralari bo'yicha amaliy treninglar.":
    'Практические тренинги по критическому мышлению, публичным выступлениям и деловым переговорам.',
  'Tanqidiy fikrlash': 'Критическое мышление',
  "Ommaviy nutq san'ati": 'Искусство публичных выступлений',
  'Biznes muzokaralari': 'Деловые переговоры',
  'Xalqaro sertifikatlar': 'Международные сертификаты',
  "Xalqaro darajadagi professional sertifikatlarga tayyorgarlik dasturlari — to'liq imtihon yo'l xaritasi bilan.":
    'Программы подготовки к международным профессиональным сертификациям — с полной дорожной картой экзаменов.',
  'Xalqaro darajadagi': 'Международного уровня',
  sohalar: 'направлений',
  "Tijoriy banklar, moliya va soft skills yo\\'nalishlarida amaliy treninglar —":
    'Практические тренинги для коммерческих банков, финансов и soft skills —',
  'xalqaro sertifikatlariga tayyorgarlik dasturlari bilan birga.':
    'вместе с программами подготовки к международным сертификациям.',
  Batafsil: 'Подробнее',

  // Team
  'Marketing Consultant, Business Trainer & Lecturer':
    'Маркетинг-консультант, бизнес-тренер и преподаватель',
  "Xalqaro tajribaga ega marketing konsultanti va biznes trener. 2015 yildan beri yirik kompaniyalar uchun korporativ treninglar olib boradi.":
    'Маркетинг-консультант и бизнес-тренер с международным опытом. С 2015 года ведёт корпоративные тренинги для ведущих компаний.',
  "20+ yillik marketing va o'qituvchilik tajribasi":
    '20+ лет опыта в маркетинге и преподавании',
  'Marketing Consultant — Uztelecom, ARTEL, Almalyk MMC':
    'Маркетинг-консультант — Узтелеком, ARTEL, АГМК',
  'Webster University Tashkent — MBA Lecturer (2020–)':
    'Webster University Tashkent — преподаватель MBA (с 2020)',
  'MDIS Tashkent — korporativ trener (2010–)':
    'MDIS Tashkent — корпоративный тренер (с 2010)',
  'Westminster International University — lektor (2009–2023)':
    'Westminster International University — лектор (2009–2023)',
  'MA Economics — University of Illinois at Chicago':
    'MA Economics — University of Illinois at Chicago',
  'BBA Marketing — Emory University (Goizueta)':
    'BBA Marketing — Emory University (Goizueta)',
  'ESMT Berlin — Top managers certificate':
    'ESMT Berlin — сертификат для топ-менеджеров',
  'Data Analytics & IT Trainer': 'Тренер по Data Analytics и IT',
  "Webster University va University of Digital Economics and Agrotechnologies'da Python va Software Design bo'yicha o'qituvchi. MDIS Tashkent'da banklar uchun Data Analytics treninglarini olib borgan.":
    'Преподаватель Python и Software Design в Webster University и Университете цифровой экономики и агротехнологий. Проводил тренинги по Data Analytics для банков в MDIS Tashkent.',
  '15+ yillik IT tajribasi': '15+ лет опыта в IT',
  "Webster University — Python va Software Design o'qituvchisi":
    'Webster University — преподаватель Python и Software Design',
  'MDIS Tashkent — banklar uchun Data Analytics treninglari':
    'MDIS Tashkent — тренинги по Data Analytics для банков',
  'Korporativ jamoalar uchun Power BI va SQL workshoplari':
    'Воркшопы по Power BI и SQL для корпоративных команд',
  'University of Science and Technology (Janubiy Koreya) — M.E.':
    'University of Science and Technology (Южная Корея) — M.E.',
  'ACCA & Financial Accounting Trainer':
    'Тренер по ACCA и финансовому учёту',
  "MDIST va FBA Academy'da ACCA tutor sifatida ishlaydi. ACCA Financial Accounting bo'yicha jahon miqyosida 8-o'rinni egallagan, talabalari FA, FR va FM imtihonlarida yuqori natijalarga erishgan.":
    'Тьютор ACCA в MDIST и FBA Academy. 8-е место в мире по ACCA Financial Accounting; её студенты стабильно показывают высокие результаты на экзаменах FA, FR и FM.',
  "8+ yillik o'qituvchilik tajribasi": '8+ лет преподавательского опыта',
  "ACCA Financial Accounting — jahon bo'yicha 8-o'rin":
    'ACCA Financial Accounting — 8-е место в мире',
  'MDIST va FBA Academy — ACCA tutor':
    'MDIST и FBA Academy — тьютор ACCA',
  'FA, FR, FM imtihonlarida yuqori pass rate':
    'Высокий процент сдачи на экзаменах FA, FR и FM',
  'Tashkent State University of Economics':
    'Ташкентский государственный экономический университет',
  'ACCA Affiliate · IELTS 7.5+': 'ACCA Affiliate · IELTS 7.5+',
  'Soft Skills & Leadership Trainer':
    'Тренер по soft skills и лидерству',
  "30+ yillik xalqaro tajribaga ega trener. Global Training for Transformation'ning O'zbekistondagi vakili; leadership, jamoa qurish va kross-madaniy kommunikatsiya bo'yicha treninglar olib boradi.":
    'Тренер с более чем 30-летним международным опытом. Представитель Global Training for Transformation в Узбекистане; проводит тренинги по лидерству, командообразованию и кросс-культурной коммуникации.',
  '30+ yillik xalqaro tajriba': '30+ лет международного опыта',
  "Global Training for Transformation — O'zbekiston vakili":
    'Global Training for Transformation — представитель в Узбекистане',
  "Leadership va jamoa qurish bo'yicha treningslar":
    'Тренинги по лидерству и командообразованию',
  'Kross-madaniy kommunikatsiya eksperti':
    'Эксперт по кросс-культурной коммуникации',
  'Fuller Graduate Schools — MA Intercultural Studies':
    'Fuller Graduate Schools — MA Intercultural Studies',
  'Texas A&M University': 'Texas A&M University',
  'Bizning professorlarimiz': 'Наши профессора',
  'Hech qanday mutaxassis topilmadi.': 'Тренеры не найдены.',
  "Batafsil ma'lumot": 'Подробнее о тренере',
  'Oldingi mutaxassis': 'Предыдущий тренер',
  'Keyingi mutaxassis': 'Следующий тренер',
  Yopish: 'Закрыть',
  'Mutaxassis profili': 'Профиль тренера',
  Yutuqlar: 'Достижения',
  "Ta'lim & Sertifikatlar": 'Образование и сертификаты',
  Galereya: 'Галерея',
  Orqaga: 'Назад',

  // New trainer: Azizjon Rikhsiboyev
  'English, IELTS & IT Senior Lecturer':
    'Старший преподаватель английского, IELTS и IT',
  "MDIST Senior Lecturer; 8+ yillik ingliz tili, IELTS va IT yo'nalishlarida o'qituvchilik tajribasiga ega. Foundation va bakalavr talabalariga Fundamentals of IT, akademik ingliz tili va matematika fanlarini olib boradi.":
    'Старший преподаватель MDIST с более чем 8-летним опытом преподавания английского языка, IELTS и IT. Ведёт курсы Fundamentals of IT, академический английский и математику для студентов Foundation и бакалавриата.',
  "8+ yillik o'qituvchilik va IT tajribasi":
    '8+ лет опыта преподавания и работы в IT',
  'MDIST — Fundamentals of IT, English Plus va Mathematics bo‘yicha Senior Lecturer':
    'MDIST — старший преподаватель курсов Fundamentals of IT, English Plus и Mathematics',
  'Cambridge LC — IELTS instruktori (2020–2025)':
    'Cambridge LC — преподаватель IELTS (2020–2025)',
  'IELTS 8.0 (Listening 9.0, Reading 8.5) · C2 Proficient':
    'IELTS 8.0 (Listening 9.0, Reading 8.5) · C2 Proficient',
  'Sobiq iOS dasturchi — DataSite Technologies (Swift, Objective-C)':
    'Бывший iOS-разработчик — DataSite Technologies (Swift, Objective-C)',
  'MA Education with TESOL — Teesside University, UK (2025)':
    'MA Education with TESOL — Teesside University, Великобритания (2025)',
  'BSc Computer Engineering — Politecnico di Torino, Tashkent (2016)':
    'BSc Computer Engineering — Politecnico di Torino, Ташкент (2016)',
  'AI Literacy Certificate — Ministry of Higher Education (2026)':
    'Сертификат AI Literacy — Министерство высшего образования (2026)',

  // Telegram banner
  "Telegram kanalimizga qo'shiling": 'Присоединяйтесь к нашему Telegram-каналу',
  "kanalimizga qo'shiling": 'канал — присоединяйтесь',
  'Fine Skills Academy kanalida treninglar, foydali materiallar va maxsus takliflar haqida birinchilardan bo\'lib xabardor bo\'ling.':
    'Первыми узнавайте о новых тренингах, полезных материалах и специальных предложениях на канале Fine Skills Academy.',
  "Obuna bo'lish": 'Подписаться',
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('uz')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('fs_lang') as Lang | null
      if (saved === 'uz' || saved === 'en' || saved === 'ru') setLangState(saved)
    } catch {}
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('fs_lang', l)
    } catch {}
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l
    }
  }

  const toggle = () => setLang(lang === 'uz' ? 'en' : lang === 'en' ? 'ru' : 'uz')

  const t = (uz: string, en: string) => {
    if (lang === 'ru') return RU[uz] ?? en
    if (lang === 'en') return en
    return uz
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
