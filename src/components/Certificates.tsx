import cert1 from '@/assets/cert-1.png'
import cert2 from '@/assets/cert-2.png'
import cert3 from '@/assets/cert-3.png'
import cert4 from '@/assets/cert-4.jpeg'
import cert5 from '@/assets/cert-5.png'
import cert6 from '@/assets/cert-6.png'
import cert7 from '@/assets/cert-7.png'
import cert8 from '@/assets/cert-8.png'
import cert9 from '@/assets/cert-9.png'
import cert10 from '@/assets/cert-10.png'
import cert11 from '@/assets/cert-11.png'

const certificates = [
  { src: cert1, alt: 'ACCA Certificate of Achievement' },
  { src: cert2, alt: 'ACCA Provisional Result' },
  { src: cert3, alt: 'ACCA Financial Reporting Award' },
  { src: cert4, alt: 'Fuller Graduate Schools Diploma' },
  { src: cert5, alt: 'Emory Goizueta Business School' },
  { src: cert6, alt: 'University of Illinois Diploma' },
  { src: cert7, alt: 'Emory Goizueta Marketing Certificate' },
  { src: cert8, alt: 'University of Illinois Teaching of Economics' },
  { src: cert9, alt: 'Handong Global University Certificate of Completion' },
  { src: cert10, alt: 'ESMT Berlin Corporate Governance Certificate' },
  { src: cert11, alt: 'JICA Japan Trainers Training Certificate' },
]

export function Certificates() {
  const loop = [...certificates, ...certificates]

  return (
    <section
      id="certificates"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: '#F2F5F4' }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl mb-12">
        <div className="text-center">
          <span
            className="block text-sm font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: '#799A96' }}
          >
            Sertifikatlar
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.05]"
            style={{ color: '#2C325E' }}
          >
            Trenerlarimizning sertifikatlari
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#F2F5F4] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#F2F5F4] to-transparent" />

        <div className="flex gap-6 cert-marquee w-max">
          {loop.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[180px] sm:w-[220px] h-[240px] sm:h-[290px] bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex items-center justify-center p-3"
            >
              <img
                src={c.src}
                alt={c.alt}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes cert-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .cert-marquee {
          animation: cert-scroll 60s linear infinite;
        }
        .cert-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
