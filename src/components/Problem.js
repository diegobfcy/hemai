const stats = [
  {
    region: 'Africa',
    disease: 'Malaria',
    figure: '200M',
    label: 'cases per year',
    note: 'Detectable with a blood smear',
    accent: false,
  },
  {
    region: 'Asia',
    disease: 'Filariasis',
    figure: '40M',
    label: 'cases per year',
    note: 'Detectable with a blood smear',
    accent: false,
  },
  {
    region: 'LATAM',
    disease: 'Anemia',
    figure: 'Large portion',
    label: 'of rural population',
    note: 'Detectable with a blood smear',
    accent: true,
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-[#7e0a0a]
                             bg-[rgba(126,10,10,0.06)] px-3 py-1 rounded-full mb-4">
              The Problem
            </span>
            <h2 className="font-light text-[#113368] leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(34px, 4vw, 52px)' }}>
              Over 100 miles of travel<br />
              <em className="text-[#7e0a0a]">for a blood test result.</em>
            </h2>
          </div>
          <div>
            <p className="text-sm text-[#3d4f63] font-light leading-relaxed">
              In rural areas, time isn't measured in minutes or hours — it's measured in distance.
              Hundreds of millions of people live with diseases that could be detected with
              a simple blood smear, but have no access to the equipment needed for an early diagnosis.
              The critical bottleneck isn't medicine. It's <strong className="font-medium text-[#113368]">infrastructure.</strong>
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#eef1f5] rounded-2xl overflow-hidden border border-[#eef1f5]">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-10 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#6b7e94]">{s.region}</span>
                <span className="w-1 h-1 rounded-full bg-[#dde3ea]" />
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#6b7e94]">{s.disease}</span>
              </div>
              <div className="font-light leading-none text-[#113368]"
                   style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: s.figure.length > 4 ? 36 : 56 }}>
                {s.figure}
              </div>
              <div className="text-sm text-[#3d4f63] font-light">{s.label}</div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#113368] bg-[rgba(17,51,104,0.06)] px-3 py-1.5 rounded-full w-fit">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1"/>
                  <path d="M5 4.5v2M5 3.5h.01" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
                {s.note}
              </div>
            </div>
          ))}
        </div>

        {/* The gap */}
        <div className="mt-12 bg-[#f1f5f9] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3">
            <div className="font-light text-[#7e0a0a] mb-2"
                 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42 }}>
              The gap
            </div>
            <p className="text-sm text-[#6b7e94] font-light">
              Between what exists and what's needed
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { label: 'Existing solutions (e.g. HemoCue)', items: ['Expensive hardware', 'Requires specialists', 'No AI layer', 'Not designed for rural use'] },
              { label: 'What rural communities need', items: ['Affordable & portable', 'Minimal training required', 'Works offline', 'Fast, actionable results'] },
            ].map((col, i) => (
              <div key={i}>
                <div className={`text-xs font-medium mb-3 ${i === 0 ? 'text-[#6b7e94]' : 'text-[#113368]'}`}>
                  {col.label}
                </div>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-light text-[#3d4f63]">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === 0 ? 'bg-[#dde3ea]' : 'bg-[#113368]'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}