const team = [
  {
    name:     'Halley',
    role:     'Medical Researcher',
    bio:      'Leads clinical validation and medical research. Ensures HemAI\'s diagnostic protocols meet real-world healthcare standards in rural LATAM communities.',
    initials: 'H',
    photo:    '/images/halley.png',
  },
  {
    name:     'Juan Diego',
    role:     'AI Specialist',
    bio:      'Builds and trains the computer vision models that power HemAI\'s blood disease detection. Expert in deep learning for medical imaging.',
    initials: 'D',
    photo:    '/images/diego.png',
  },
  {
    name:     'José',
    role:     'Legal & Innovation',
    bio:      'Leads regulatory strategy, institutional partnerships and innovation frameworks — ensuring HemAI scales responsibly across healthcare systems.',
    initials: 'J',
    photo:    '/images/manchego.png',
  },
]
import Image from "next/image";
export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14 max-w-lg">
          <span className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-[#113368]
                           bg-[rgba(17,51,104,0.07)] px-3 py-1 rounded-full mb-4">
            The Team
          </span>
          <h2 className="font-light text-[#113368] leading-tight mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(34px, 4vw, 52px)' }}>
            Medicine, AI<br />
            <em className="text-[#7e0a0a]">and purpose.</em>
          </h2>
          <p className="text-sm text-[#3d4f63] font-light leading-relaxed">
            A multidisciplinary team combining deep clinical knowledge, AI expertise
            and the legal and institutional know-how to navigate healthcare systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group">

              {/* Photo
                  ── To use real photos:
                  1. Save photos to /public/images/team-halley.jpg etc.
                  2. Replace the placeholder div below with:
                     <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-[#f1f5f9]">
                       <Image src={member.photo} alt={member.name} fill style={{objectFit:'cover'}} />
                     </div>
              */}
                     <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-[#f1f5f9]">
                       <Image src={member.photo} alt={member.name} fill style={{objectFit:'cover'}} />
                     </div>

              <h3 className="font-medium text-[#0d1b2a] mb-0.5"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22 }}>
                {member.name}
              </h3>
              <div className="text-xs font-medium text-[#7e0a0a] uppercase tracking-widest mb-3">
                {member.role}
              </div>
              <p className="text-sm text-[#3d4f63] font-light leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}