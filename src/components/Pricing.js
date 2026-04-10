'use client'
import { useState } from 'react'

const plans = [
  {
    name:     'Pilot',
    desc:     'For NGOs and small health programs running community screenings.',
    monthly:  430,
    annual:   350,
    featured: false,
    hardware: '3 optical devices included',
    features: [
      'Up to 500 diagnoses / month',
      'Anemia & malaria detection',
      'Offline-first mobile app',
      'Basic analytics dashboard',
      'Email support',
      '5 device license',
    ],
    cta:     'Start Free Trial',
    ctaHref: '#contact',
  },
  {
    name:     'Field',
    desc:     'For regional hospitals, health centers and public health programs.',
    monthly:  860,
    annual:   690,
    featured: true,
    badge:    'Most popular',
    hardware: '10 optical devices included',
    features: [
      'Unlimited diagnoses',
      'Full disease panel (anemia, malaria, filariasis)',
      'Offline-first + auto-sync',
      'Advanced analytics & early alerts',
      'Rural health database access',
      'Up to 15 device licenses',
      'Priority support & training',
      'API integration available',
    ],
    cta:     'Start Free Trial',
    ctaHref: '#contact',
  },
  {
    name:     'Government',
    desc:     'For regional health authorities, ministries and large-scale programs.',
    monthly:  null,
    annual:   null,
    featured: false,
    hardware: 'Custom device deployment',
    features: [
      'Unlimited diagnoses & devices',
      'Custom AI model training',
      'Full rural health database',
      'Predictive analytics & outbreak alerts',
      'Unlimited licenses',
      'Dedicated support 24/7',
      'Custom integrations & reporting',
      'SLA & compliance agreements',
    ],
    cta:     'Talk to Our Team',
    ctaHref: '#contact',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-24 px-6 bg-[#f1f5f9]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-lg">
            <span className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-[#113368]
                             bg-[rgba(17,51,104,0.07)] px-3 py-1 rounded-full mb-4">
              Pricing
            </span>
            <h2 className="font-light text-[#113368] leading-tight mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(34px, 4vw, 52px)' }}>
              Hardware + software,<br />
              <em className="text-[#7e0a0a]">one simple subscription.</em>
            </h2>
            <p className="text-sm text-[#3d4f63] font-light">
              The optical device is included in every plan. No upfront hardware costs. 14-day free trial.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <span className={`text-sm ${!annual ? 'text-[#113368] font-medium' : 'text-[#6b7e94]'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${annual ? 'bg-[#113368]' : 'bg-[#dde3ea]'}`}>
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${annual ? 'translate-x-5' : ''}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-[#113368] font-medium' : 'text-[#6b7e94]'}`}>
              Annual
              <span className="ml-1.5 text-[10px] font-medium bg-[rgba(17,51,104,0.1)] text-[#113368] px-1.5 py-0.5 rounded-full">
                −20%
              </span>
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div key={i}
                 className={`relative rounded-2xl border p-9 transition-shadow duration-200
                   ${plan.featured
                     ? 'bg-[#113368] border-[#113368] shadow-2xl'
                     : 'bg-white border-[#dde3ea] hover:shadow-lg'}`}>

              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-medium uppercase
                                 tracking-widest bg-[#7e0a0a] text-white px-4 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <div className="mb-2">
                <h3 className="font-medium mb-1.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24,
                             color: plan.featured ? 'white' : '#0d1b2a' }}>
                  {plan.name}
                </h3>
                <p className={`text-xs font-light leading-relaxed ${plan.featured ? 'text-white/55' : 'text-[#6b7e94]'}`}>
                  {plan.desc}
                </p>
              </div>

              {/* Hardware badge */}
              <div className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full mb-5 font-medium
                ${plan.featured
                  ? 'bg-white/10 text-white/70'
                  : 'bg-[rgba(17,51,104,0.07)] text-[#113368]'}`}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <rect x="1" y="2" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1"/>
                  <path d="M4 5h2M5 4v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
                {plan.hardware}
              </div>

              {/* Price */}
              <div className={`flex items-baseline gap-1 pb-7 mb-7 border-b
                ${plan.featured ? 'border-white/15' : 'border-[#eef1f5]'}`}>
                {plan.monthly !== null ? (
                  <>
                    <span className={`text-xs mt-1.5 self-start ${plan.featured ? 'text-white/50' : 'text-[#6b7e94]'}`}>USD</span>
                    <span className="font-light leading-none"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 56,
                                   color: plan.featured ? 'white' : '#113368' }}>
                      {annual ? plan.annual : plan.monthly}
                    </span>
                    <span className={`text-sm font-light ${plan.featured ? 'text-white/50' : 'text-[#6b7e94]'}`}>/mo</span>
                  </>
                ) : (
                  <span className="font-light leading-none"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36,
                                 color: plan.featured ? 'white' : '#113368' }}>
                    Custom
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-9">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <svg className={`mt-0.5 shrink-0 ${plan.featured ? 'text-[#93c5fd]' : 'text-[#113368]'}`}
                         width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 6.5l3 3 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={`text-sm font-light leading-snug ${plan.featured ? 'text-white/75' : 'text-[#3d4f63]'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a href={plan.ctaHref}
                 className={`block text-center text-sm font-medium py-3 rounded transition-all duration-200
                   ${plan.featured
                     ? 'bg-white text-[#113368] hover:bg-[#f1f5f9] hover:-translate-y-px hover:shadow-md'
                     : 'border border-[#113368] text-[#113368] hover:bg-[#113368] hover:text-white'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#6b7e94] font-light mt-10">
          Need a custom setup?{' '}
          <a href="#contact" className="text-[#113368] underline underline-offset-2">
            Let's talk
          </a>
        </p>

      </div>
    </section>
  )
}