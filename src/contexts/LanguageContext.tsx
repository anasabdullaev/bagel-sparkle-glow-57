'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Lang = 'uz' | 'en'

type LanguageContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: (uz: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('uz')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('fs_lang') as Lang | null
      if (saved === 'uz' || saved === 'en') setLangState(saved)
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

  const toggle = () => setLang(lang === 'uz' ? 'en' : 'uz')

  const t = (uz: string, en: string) => (lang === 'en' ? en : uz)

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
