const steps = [
  {
    num:   '01',
    title: 'Attach. Capture.',
    desc:  'A health worker clips the low-cost optical device onto their smartphone and photographs the blood smear. No specialized training needed — the process takes under a minute.',
    note:  'Works with any Android or iOS smartphone',
  },
  {
    num:   '02',
    title: 'AI analyzes the sample',
    desc:  'The image is sent to our platform where computer vision models scan for disease markers — malaria parasites, anemia patterns, filariasis — processing in real time.',
    note:  'Works offline; syncs when connectivity is available',
  },
  {
    num:   '03',
    title: 'Results in under 3 minutes',
    desc:  'The health worker receives a structured diagnostic result with confidence scores directly on their phone. Data is stored in our rural health database for epidemiological tracking.',
    note:  '96%+ accuracy validated in Peru pilot',
  },
]
import Image from 'next/image'
import BASE_PATH from "@/lib/basePath";
export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6 bg-[#f1f5f9]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        <div className="lg:sticky lg:top-24">
          <span className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-[#113368]
                           bg-[rgba(17,51,104,0.07)] px-3 py-1 rounded-full mb-5">
            How it works
          </span>
          <h2 className="font-light text-[#113368] leading-tight mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
            Clip. Capture.<br />
            <em className="text-[#7e0a0a]">Diagnose.</em>
          </h2>
          <p className="text-sm text-[#3d4f63] font-light leading-relaxed mb-10 max-w-sm">
            Three steps from blood sample to clinical result.
            No lab. No specialist. No waiting days.
          </p>

              <div className="rounded-2xl overflow-hidden border border-[#dde3ea] aspect-[4/3] relative">
                <Image src={`${BASE_PATH}/images/device-in-use.png `}
                       alt="Health worker using HemAI"
                       fill style={{ objectFit: 'cover' }} />
              </div>
        </div>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={i} className={`flex gap-7 py-10 ${i !== steps.length - 1 ? 'border-b border-[#eef1f5]' : ''}`}>
              <div className="font-light text-[#113368] opacity-20 shrink-0 leading-none"
                   style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 52 }}>
                {step.num}
              </div>
              <div className="pt-2">
                <h3 className="font-medium text-[#0d1b2a] mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22 }}>
                  {step.title}
                </h3>
                <p className="text-sm text-[#3d4f63] font-light leading-relaxed mb-4">{step.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#113368] bg-[rgba(17,51,104,0.07)] px-3 py-1.5 rounded-full">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1"/>
                    <path d="M5 4.5v2.5M5 3.5h.01" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                  {step.note}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}