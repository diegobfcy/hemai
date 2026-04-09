const features = [
  {
    icon: '◈',
    title: 'Análisis clínico asistido por IA',
    desc:  'Procesa resultados de laboratorio, historial y síntomas en segundos. Sugiere hipótesis diagnósticas con respaldo de evidencia científica actualizada.',
  },
  {
    icon: '◎',
    title: 'Alertas tempranas inteligentes',
    desc:  'Detecta patrones de riesgo antes de que escalen. El modelo aprende el comportamiento basal de cada paciente y avisa ante desviaciones.',
  },
  {
    icon: '◫',
    title: 'Integración sin fricciones',
    desc:  'Compatible con los principales sistemas de HCE vía HL7 FHIR. Sin migrar datos ni cambiar el flujo de tu equipo.',
  },
  {
    icon: '◬',
    title: 'Reportes automáticos',
    desc:  'Genera documentos clínicos estructurados listos para firmar y enviar. Reduce el tiempo de documentación hasta en un 60 %.',
  },
  {
    icon: '◉',
    title: 'Seguridad de nivel hospitalario',
    desc:  'Cifrado AES-256 en reposo y TLS 1.3 en tránsito. Cumplimiento con HIPAA, ISO 27001 y normativas locales del MINSAL.',
  },
  {
    icon: '◑',
    title: 'Panel de métricas institucionales',
    desc:  'Tiempo de atención, diagnósticos frecuentes, carga de trabajo por especialista. Todo en un dashboard ejecutivo en tiempo real.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <span className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-[#113368]
                           bg-[rgba(17,51,104,0.07)] px-3 py-1 rounded-full mb-4">
            La plataforma
          </span>
          <h2 className="font-light text-[#113368] leading-tight mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(34px, 4vw, 52px)' }}>
            Todo lo que tu equipo<br />
            <em className="text-[#7e0a0a]">necesita en un solo lugar</em>
          </h2>
          <p className="text-[#3d4f63] font-light text-sm leading-relaxed">
            Diseñado junto a médicos y especialistas para encajar naturalmente en la práctica clínica diaria.
          </p>
        </div>

        {/* Grid con divisores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#eef1f5] rounded-2xl overflow-hidden divide-y divide-[#eef1f5] sm:divide-y-0"
             style={{ boxShadow: '0 1px 3px rgba(17,51,104,0.05)' }}>
          {features.map((f, i) => (
            <div key={i}
                 className={`p-9 group hover:bg-[#f8fafd] transition-colors duration-200
                   ${i < 3 ? 'sm:border-b sm:border-[#eef1f5]' : ''}
                   ${i % 3 !== 2 ? 'lg:border-r lg:border-[#eef1f5]' : ''}
                   ${i % 2 === 0 ? 'sm:border-r sm:border-[#eef1f5] lg:border-r-0' : ''}
                   ${i % 2 === 0 && i % 3 !== 2 ? 'lg:border-r lg:border-[#eef1f5]' : ''}
                 `}>
              <div className="w-9 h-9 flex items-center justify-center rounded bg-[rgba(17,51,104,0.07)] mb-5 text-[#113368] text-lg">
                {f.icon}
              </div>
              <h3 className="font-medium text-[#0d1b2a] mb-2 leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20 }}>
                {f.title}
              </h3>
              <p className="text-sm text-[#3d4f63] font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}