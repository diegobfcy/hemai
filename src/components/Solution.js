const pillars = [
  {
    icon: '◈',
    title: 'Low-cost optical device',
    desc:  'A compact attachment turns any smartphone into a portable microscope. No specialized hardware. No lab infrastructure needed.',
  },
  {
    icon: '◎',
    title: 'Deep learning diagnostics',
    desc:  'Computer vision analyzes blood smear images, detects disease-related patterns and returns results in under 5 minutes.',
  },
  {
    icon: '◫',
    title: 'Offline-first platform',
    desc:  'Designed to operate with low or no connectivity. Images are processed and synced when a connection is available.',
  },
  {
    icon: '◬',
    title: 'Rural health database',
    desc:  'Every diagnosis contributes to the first longitudinal rural health database in LATAM — enabling predictive analytics and early alerts.',
  },
  {
    icon: '◉',
    title: 'Resource optimization',
    desc:  'Health authorities get aggregated data to allocate medical resources where they\'re needed most, before outbreaks escalate.',
  },
  {
    icon: '◑',
    title: 'Scalable across LATAM',
    desc:  'Built for the constraints of our region: affordable, portable, minimal training required, and adaptable to multiple diseases.',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="py-24 px-6 bg-[#f1f5f9]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-[#113368]
                             bg-[rgba(17,51,104,0.07)] px-3 py-1 rounded-full mb-4">
              Our Solution
            </span>
            <h2 className="font-light text-[#113368] leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(34px, 4vw, 52px)' }}>
              We turn smartphones<br />
              <em className="text-[#7e0a0a]">into portable microscopes.</em>
            </h2>
          </div>
          <div>
            <p className="text-sm text-[#3d4f63] font-light leading-relaxed">
              HemAI is the first platform to combine portable microscopy with AI specifically
              designed for rural healthcare contexts in LATAM. We don't just diagnose —
              we're building the infrastructure that rural health systems have never had.
            </p>
          </div>
        </div>

        <div className="mb-16 rounded-2xl overflow-hidden aspect-video relative border border-[#dde3ea] bg-[#113368]/5">
        <video
            src={`${BASE_PATH} /videos/solution.mp4`}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        </div>


        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#eef1f5] rounded-2xl overflow-hidden bg-[#eef1f5] gap-px">
          {pillars.map((p, i) => (
            <div key={i} className="bg-white p-8 hover:bg-[#f8fafd] transition-colors">
              <div className="w-9 h-9 flex items-center justify-center rounded bg-[rgba(17,51,104,0.07)]
                              mb-5 text-[#113368] text-lg">
                {p.icon}
              </div>
              <h3 className="font-medium text-[#0d1b2a] mb-2 leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19 }}>
                {p.title}
              </h3>
              <p className="text-sm text-[#3d4f63] font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Diseases detected */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-xs text-[#6b7e94] font-light">Currently detecting:</span>
          {['Anemia', 'Malaria', 'Filariasis', '+ more in development'].map(d => (
            <span key={d} className="text-xs font-medium text-[#113368] bg-[rgba(17,51,104,0.07)]
                                     border border-[rgba(17,51,104,0.1)] px-3 py-1 rounded-full">
              {d}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}