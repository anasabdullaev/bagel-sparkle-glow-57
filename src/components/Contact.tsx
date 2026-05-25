import { useState } from 'react'
import { Phone, Mail, Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { useLanguage } from '@/contexts/LanguageContext'

export function Contact() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: t("Iltimos, barcha maydonlarni to'ldiring", 'Please fill in all the fields'),
        variant: 'destructive',
      })
      return
    }

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      toast({
        title: t('Konfiguratsiya xatosi', 'Configuration error'),
        description: t(
          "Telegram bot sozlamalari topilmadi. Iltimos, administrator bilan bog'laning.",
          'Telegram bot settings were not found. Please contact the administrator.'
        ),
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)

    const escapeHtml = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

    const text =
      `🔔 <b>Yangi ariza — fineskills.uz</b>\n\n` +
      `👤 <b>Ism / Kompaniya:</b>\n${escapeHtml(formData.name)}\n\n` +
      `📞 <b>Email yoki telefon:</b>\n${escapeHtml(formData.email)}\n\n` +
      `💬 <b>Xabar:</b>\n${escapeHtml(formData.message)}\n\n` +
      `🕒 <i>${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}</i>`

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: 'HTML',
            disable_web_page_preview: true,
          }),
        },
      )

      const data = await response.json()
      if (!response.ok || !data.ok) {
        throw new Error(data.description || 'Telegram API xatosi')
      }

      toast({
        title: t('Rahmat!', 'Thank you!'),
        description: t(
          "So'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz.",
          'Your request has been received. We will get in touch with you shortly.'
        ),
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Telegram yuborishda xatolik:', error)
      toast({
        title: t('Xatolik', 'Error'),
        description: t(
          "So'rovni yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring yoki to'g'ridan-to'g'ri bog'laning.",
          'Something went wrong while sending your request. Please try again or contact us directly.'
        ),
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              {t('Aloqa', 'Contact')}
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">
              {t('Jamoangiz uchun trening buyurtma qiling', 'Request a training program for your team')}
            </span>
          </h2>

          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t(
              'Kompaniyangiz haqida qisqacha yozing — biz siz uchun moslashtirilgan trening dasturi taklifini taqdim etamiz.',
              'Tell us a little about your company and we will put together a tailored training program proposal for you.'
            )}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-background clean-border rounded-3xl overflow-hidden elevated-shadow">
            <div className="bg-card/50 px-8 py-6 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-foreground mb-1">
                    {t('Maslahat olish', 'Request consultation')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(
                      "Formani to'ldiring — 24 soat ichida siz bilan bog'lanamiz",
                      'Fill out the form — we will get back to you within 24 hours'
                    )}
                  </p>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent-emerald rounded-full" />
                  <span className="text-sm text-muted-foreground font-medium">
                    {t('Hozir mavjud', 'Available now')}
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    {t('Ism va familiya / Kompaniya', 'Full name / Company')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/60 placeholder:blur-[0.5px] focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:placeholder:blur-0 focus:placeholder:opacity-100 transition-all"
                    placeholder={t('Ismingiz va kompaniya nomi', 'Your name and company')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    {t('Email yoki telefon', 'Email or phone')}
                  </label>
                  <input
                    id="email"
                    type="text"
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/60 placeholder:blur-[0.5px] focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:placeholder:blur-0 focus:placeholder:opacity-100 transition-all"
                    placeholder={t('email@kompaniya.uz yoki +998...', 'email@company.com or +998...')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  {t(
                    "Qiziqayotgan yo'nalish, xodimlar soni va izoh",
                    'Topic of interest, number of employees and any notes'
                  )}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/60 placeholder:blur-[0.5px] focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:placeholder:blur-0 focus:placeholder:opacity-100 transition-all resize-none"
                  placeholder={t(
                    "Masalan: IFRS bo'yicha 25 nafar xodim uchun korporativ trening...",
                    'For example: IFRS corporate training for 25 employees...'
                  )}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-foreground text-background font-black text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting
                  ? t('Yuborilmoqda...', 'Sending...')
                  : t('Taklif olish', 'Get a proposal')}
              </button>
            </form>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:+998947777227"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-background border border-border text-foreground font-semibold text-sm hover:border-foreground/40 hover:shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" strokeWidth={2.2} />
              +998 94 777 72 27
            </a>
            <a
              href="mailto:support@fineskills.uz"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-background border border-border text-foreground font-semibold text-sm hover:border-foreground/40 hover:shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" strokeWidth={2.2} />
              support@fineskills.uz
            </a>
            <a
              href="https://t.me/fineskills_support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white hover:opacity-95 transition-opacity shadow-md hover:shadow-lg"
              style={{ backgroundColor: '#229ED9' }}
            >
              <Send className="w-4 h-4 fill-white" strokeWidth={2.2} />
              {t('Support (Telegram)', 'Support (Telegram)')}
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-blue rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">
                {t("Ehtiyojni o'rganamiz", 'We study your needs')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t(
                  'Kompaniya maqsadi va xodimlar darajasini aniqlaymiz',
                  'We identify your company goals and employee skill levels'
                )}
              </p>
            </div>

            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-emerald rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">
                {t('Moslashtirilgan dastur', 'Tailored program')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t(
                  'Sizga maxsus tuzilgan trening rejasi va materiallar',
                  'A training plan and materials built specifically for you'
                )}
              </p>
            </div>

            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-purple rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">
                {t('Natija va hisobot', 'Results & reporting')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t(
                  'Baholash, hisobot va keyingi bosqich uchun tavsiyalar',
                  'Evaluation, reporting and recommendations for next steps'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
