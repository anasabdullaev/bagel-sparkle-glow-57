import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: 'Iltimos, barcha maydonlarni to\'ldiring', variant: 'destructive' })
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      toast({ title: 'Rahmat!', description: "So'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz." })
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="contact" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Aloqaga chiqing
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Jamoangiz uchun trening buyurtma qiling</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Kompaniyangiz haqida qisqacha yozing — biz siz uchun moslashtirilgan trening dasturi taklifini taqdim etamiz.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-background clean-border rounded-3xl overflow-hidden elevated-shadow">
            <div className="bg-card/50 px-8 py-6 border-b border-border group/header">
              <div className="flex items-center justify-between">
                <div className="opacity-60 blur-[0.4px] transition-all duration-500 hover:opacity-100 hover:blur-0 group-hover/header:opacity-100 group-hover/header:blur-0">
                  <h3 className="text-xl font-black text-foreground mb-1">
                    Maslahat olish
                  </h3>
                  <p className="text-muted-foreground">
                    Formani to'ldiring — 24 soat ichida siz bilan bog'lanamiz
                  </p>
                </div>
                <div className="hidden sm:flex items-center space-x-2 opacity-60 blur-[0.4px] transition-all duration-500 hover:opacity-100 hover:blur-0">
                  <div className="w-3 h-3 bg-accent-emerald rounded-full" />
                  <span className="text-sm text-muted-foreground font-medium">Hozir mavjud</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2 opacity-55 blur-[0.4px] transition-all duration-500 hover:opacity-100 hover:blur-0 focus-within:opacity-100 focus-within:blur-0">Ism va familiya / Kompaniya</label>
                  <input
                    id="name"
                    type="text"
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all"
                    placeholder="Ismingiz va kompaniya nomi"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2 opacity-55 blur-[0.4px] transition-all duration-500 hover:opacity-100 hover:blur-0 focus-within:opacity-100 focus-within:blur-0">Email yoki telefon</label>
                  <input
                    id="email"
                    type="text"
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all"
                    placeholder="email@kompaniya.uz yoki +998..."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground/60 mb-2">Qiziqayotgan yo'nalish, xodimlar soni va izoh</label>
                <textarea
                  id="message"
                  rows={5}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all resize-none"
                  placeholder="Masalan: IFRS bo'yicha 25 nafar xodim uchun korporativ trening..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-foreground text-background font-black text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? 'Yuborilmoqda...' : 'Taklif olish'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-blue rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">Ehtiyojni o'rganamiz</h4>
              <p className="text-muted-foreground text-sm">
                Kompaniya maqsadi va xodimlar darajasini aniqlaymiz
              </p>
            </div>
            
            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-emerald rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">Moslashtirilgan dastur</h4>
              <p className="text-muted-foreground text-sm">
                Sizga maxsus tuzilgan trening rejasi va materiallar
              </p>
            </div>
            
            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-purple rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">Natija va hisobot</h4>
              <p className="text-muted-foreground text-sm">
                Baholash, hisobot va keyingi bosqich uchun tavsiyalar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}