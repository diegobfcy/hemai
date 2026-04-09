const stats = [
  { val: '94 %',  label: 'de precisión diagnóstica en pruebas piloto',         accent: false },
  { val: '3×',    label: 'más rápido en generar reportes clínicos',             accent: true  },
  { val: '68 %',  label: 'reducción de tiempo en revisión de resultados',       accent: false },
  { val: '<48 h', label: 'para completar la integración inicial en tu clínica', accent: true  },
]

const testimonials = [
  {
    quote:  'HemAI cambió completamente cómo gestionamos el volumen de pacientes. Nuestro equipo ahora se enfoca en lo que realmente importa.',
    name:   'Dra. Carolina Vega',
    role:   'Directora Médica, Clínica Las Condes',
    initials: 'CV',
  },
  {
    quote:  'La integración fue sorprendentemente rápida. En dos días ya usábamos el sistema y los médicos lo adoptaron sin ninguna resistencia.',
    name:   'Dr. Andrés Morales',
    role:   'Jefe de Tecnología, RedSalud',
    initials: 'AM',
  },
]

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 px-6 overflow-hidden bg-[#113368]">

      {/* Decoración */}
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-white/60
                           bg-white/10 px-3 py-1 rounded-full mb-4">
            Resultados
          </span>
          <h2 className="font-light text-white leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
            Números que<br />
            <em className="text-white/60">hablan por sí solos</em>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden mb-20">
          {stats.map((s, i) => (
            <div key={i}
                 className={`p-8 lg:p-10 border-white/10 hover:bg-white/5 transition-colors
                   ${i < 3 ? 'border-r' : ''}
                   ${i < 2 ? 'border-b lg:border-b-0' : ''}
                 `}>
              <div className="font-light leading-none mb-3"
                   style={{
                     fontFamily: "'Cormorant Garamond', serif",
                     fontSize: 'clamp(40px, 4.5vw, 60px)',
                     color: s.accent ? '#fca5a5' : 'white'
                   }}>
                {s.val}
              </div>
              <p className="text-xs text-white/50 font-light leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Divisor */}
        <div className="border-t border-white/10 mb-16" />

        {/* Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="font-light italic text-white/80 leading-relaxed mb-7"
                 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19 }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center
                                text-xs font-medium text-white shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-white/40 mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}