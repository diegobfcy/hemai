import Image from "next/image";
export default function Footer() {
  const cols = [
    { title: 'Platform', links: ['How It Works', 'Features', 'Security', 'Integrations'] },
    { title: 'Company',  links: ['About HemAI', 'Our Mission', 'Press', 'Contact'] },
    { title: 'Legal',    links: ['Terms of Use', 'Privacy Policy', 'Cookies', 'Compliance'] },
  ]

  return (
    <footer className="bg-[#0d1b2a] text-white/40 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">

            <Image src="/images/logo-white.png" alt="HemAI" width={200} height={60} />


            <p className="text-xs font-light leading-relaxed max-w-[180px] mt-5">
              Portable AI diagnostics for rural healthcare in LATAM.
            </p>
            <div className="flex gap-3 mt-5">
              {['LinkedIn', 'X'].map(s => (
                <a key={s} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">{s}</a>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div className="text-[10px] font-medium uppercase tracking-widest text-white/25 mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-xs font-light hover:text-white/70 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-light">
          <span>© {new Date().getFullYear()} HemAI. All rights reserved.</span>
          <span className="text-white/25">Access · Equity · Healthcare in LATAM and beyond.</span>
        </div>
      </div>
    </footer>
  )
}