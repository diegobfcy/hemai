'use client'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Connect your sending logic here: Resend, Formspree, Supabase, etc.
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#f1f5f9]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <div className="lg:pt-2">
          <span className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-[#113368]
                           bg-[rgba(17,51,104,0.07)] px-3 py-1 rounded-full mb-5">
            Get In Touch
          </span>
          <h2 className="font-light text-[#113368] leading-tight mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
            Bring diagnostics<br />
            <em className="text-[#7e0a0a]">where they don't reach.</em>
          </h2>
          <p className="text-sm text-[#3d4f63] font-light leading-relaxed mb-10 max-w-sm">
            Whether you're a public health institution, an NGO, or a regional hospital —
            we want to hear about your community's needs and show you how HemAI can help.
          </p>
          <div className="space-y-4">
            {[
              'Personalized 30-min demo',
              'No upfront hardware cost',
              'Implementation support included',
              'Works in low-connectivity environments',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[rgba(17,51,104,0.08)] flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5 4-4" stroke="#113368" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm text-[#3d4f63] font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#eef1f5] rounded-2xl p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[rgba(17,51,104,0.08)] flex items-center justify-center text-[#113368] text-xl">✓</div>
              <h3 className="font-medium text-[#113368]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24 }}>
                We'll be in touch soon
              </h3>
              <p className="text-sm text-[#6b7e94] font-light">Our team will contact you within 24 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#6b7e94] mb-1.5 font-medium uppercase tracking-wider">Full name</label>
                  <input type="text" required placeholder="Dr. Ana Flores"
                    className="w-full bg-[#f8fafd] border border-[#dde3ea] rounded px-3 py-2.5 text-sm text-[#0d1b2a] placeholder:text-[#c4cdd6] outline-none focus:border-[#113368] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-[#6b7e94] mb-1.5 font-medium uppercase tracking-wider">Email</label>
                  <input type="email" required placeholder="ana@minsa.gob.pe"
                    className="w-full bg-[#f8fafd] border border-[#dde3ea] rounded px-3 py-2.5 text-sm text-[#0d1b2a] placeholder:text-[#c4cdd6] outline-none focus:border-[#113368] transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#6b7e94] mb-1.5 font-medium uppercase tracking-wider">Organization</label>
                  <input type="text" required placeholder="Hospital / NGO / Ministry"
                    className="w-full bg-[#f8fafd] border border-[#dde3ea] rounded px-3 py-2.5 text-sm text-[#0d1b2a] placeholder:text-[#c4cdd6] outline-none focus:border-[#113368] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-[#6b7e94] mb-1.5 font-medium uppercase tracking-wider">Organization type</label>
                  <select required defaultValue=""
                    className="w-full bg-[#f8fafd] border border-[#dde3ea] rounded px-3 py-2.5 text-sm text-[#0d1b2a] outline-none focus:border-[#113368] transition-colors appearance-none">
                    <option value="" disabled>Select...</option>
                    <option>Public health institution</option>
                    <option>NGO / Non-profit</option>
                    <option>Regional / rural hospital</option>
                    <option>Ministry of Health</option>
                    <option>Research institution</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#6b7e94] mb-1.5 font-medium uppercase tracking-wider">What health challenge are you facing?</label>
                <textarea rows={4} placeholder="Tell us about your community's diagnostic needs..."
                  className="w-full bg-[#f8fafd] border border-[#dde3ea] rounded px-3 py-2.5 text-sm text-[#0d1b2a] placeholder:text-[#c4cdd6] outline-none focus:border-[#113368] transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#113368] text-white text-sm font-medium py-3.5 rounded hover:bg-[#1a4a94] transition-all hover:-translate-y-px hover:shadow-lg">
                Send message
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <p className="text-xs text-[#6b7e94] text-center font-light">By submitting you agree to our privacy policy. No spam.</p>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}