export default function Traction() {
  return (
    <section id="traction" className="relative py-24 px-6 overflow-hidden bg-[#113368]">

      {/* Background decoration */}
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-white/50
                           bg-white/10 px-3 py-1 rounded-full mb-4">
            Traction
          </span>
          <h2 className="font-light text-white leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
            Already in the field.<br />
            <em className="text-white/55">Real results, real communities.</em>
          </h2>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 mb-16">
          {[
            {
              icon: '◉',
              title: 'Peru Pilot — UCSM',
              body:  '50 people screened at Universidad Catolica de Santa Maria to validate software\'s ability to identify anemia and deliver rapid diagnoses. Confirmed real-world accuracy of our AI models.',
              tag:   'Completed',
              tagColor: 'bg-emerald-500/20 text-emerald-300',
              image: '/images/ucsm.jpeg' // Cambia esto por tu imagen real
            },
            {
              icon: '◈',
              title: 'Cerro Verde Mining',
              body:  'Conversations and purchase intent established with the Social Responsibility area of Cerro Verde mining company, confirming institutional demand for an affordable, portable diagnostic solution.',
              tag:   'In progress',
              tagColor: 'bg-yellow-500/20 text-yellow-300',
              image: '/images/cerro-verde.jpeg' // Cambia esto por tu imagen real
            },
            {
              icon: '◫',
              title: 'Technical validation',
              body:  'Currently running optical device tests and technical validation for data analysis and storage pipelines. Product refinement ongoing with health worker feedback.',
              tag:   'Current stage',
              tagColor: 'bg-blue-400/20 text-blue-300',
              image: '/images/tech.jpeg' // Cambia esto por tu imagen real
            },
          ].map((m, i) => (
            <div key={i} className="group relative bg-[#113368] overflow-hidden flex flex-col">
              
              {/* Default background (matches the original bg-white/5) */}
              <div className="absolute inset-0 bg-white/5 transition-opacity duration-500 group-hover:opacity-0 z-0" />

              {/* Hover Image Background with Aesthetic Filters */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                <img 
                  src={m.image} 
                  alt={m.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-40"
                />
                {/* Dark gradient overlay to ensure text remains readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#113368] via-[#113368]/80 to-[#113368]/20" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-9 flex flex-col gap-4 h-full">
                <div className="w-9 h-9 flex items-center justify-center rounded bg-white/10 text-white/70 text-lg shadow-sm backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/20">
                  {m.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white mb-2 transition-transform duration-500"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20 }}>
                    {m.title}
                  </h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {m.body}
                  </p>
                </div>
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full w-fit mt-auto ${m.tagColor} backdrop-blur-sm`}>
                  {m.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap strip */}
        <div className="border-t border-white/10 pt-12">
          <div className="text-xs text-white/40 uppercase tracking-widest mb-8 font-medium">Roadmap</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { phase: 'Now',       text: 'Optical testing & AI validation' },
              { phase: 'Q3 2025',   text: 'Expanded pilots across LATAM' },
              { phase: 'Q1 2026',   text: 'Strategic health institution partnerships' },
              { phase: 'Q3 2026',   text: 'Scale to other countries & diseases' },
            ].map((r, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className={`text-xs font-medium px-2.5 py-1 rounded-full w-fit
                  ${i === 0
                    ? 'bg-white/15 text-white'
                    : 'bg-white/6 text-white/40'}`}>
                  {r.phase}
                </div>
                <p className="text-xs text-white/50 font-light leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}