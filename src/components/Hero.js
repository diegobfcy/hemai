"use client";

import { useState, useRef, useEffect } from 'react';
import BASE_PATH from "@/lib/basePath";

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const videos = [
    'hemai/videos/anemico-vid.mov',
    'hemai/videos/healthy-vid.mov'
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Autoplay prevent mode:", err));
    }
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden bg-[#f1f5f9]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(17,51,104,0.055) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(126,10,10,0.04) 0%, transparent 70%)' }} />
        <div className="absolute inset-0"
             style={{ backgroundImage: 'linear-gradient(rgba(17,51,104,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(17,51,104,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Columna de Texto (Sin cambios) */}
          <div>
            <div className="afu inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#113368]
                            bg-[rgba(17,51,104,0.07)] border border-[rgba(17,51,104,0.1)] px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7e0a0a]"
                    style={{ animation: 'pulseDot 2s ease infinite' }} />
              AI-powered rural diagnostics
            </div>

            <h1 className="afu d1 font-light text-[#113368] leading-[1.07] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(48px, 6.5vw, 84px)' }}>
              Your smartphone.<br />
              A portable<br />
              <em className="text-[#7e0a0a]">microscope.</em>
            </h1>

            <p className="afu d2 text-[#3d4f63] font-light leading-relaxed mb-9 max-w-md"
               style={{ fontSize: 'clamp(15px, 1.8vw, 17px)' }}>
              HemAI combines a low-cost optical device with deep learning to detect malaria,
              filariasis, anemia and other blood diseases — in minutes, anywhere, with limited resources.
            </p>

            <div className="afu d3 flex flex-wrap gap-4 items-center mb-10">
              <a href="#contact"
                 className="inline-flex items-center gap-2 bg-[#113368] text-white text-sm font-medium px-6 py-3 rounded
                            hover:bg-[#1a4a94] hover:-translate-y-px hover:shadow-lg transition-all duration-200">
                Request early access
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#how" className="text-sm text-[#3d4f63] font-light border-b border-[#dde3ea] pb-px hover:text-[#113368] hover:border-[#113368] transition-all">
                See how it works →
              </a>
            </div>

            <div className="afu d4 flex flex-wrap gap-8">
              {[
                { val: '40M',  label: 'filariasis cases/year\nin Asia' },
                { val: '200M', label: 'malaria cases/year\nin Africa' },
                { val: '50+',  label: 'students screened\nin Peru pilot' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-light text-[#113368]"
                       style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30 }}>
                    {s.val}
                  </div>
                  <div className="text-[11px] text-[#6b7e94] leading-tight whitespace-pre-line">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna del Teléfono (Actualizada) */}
          <div className="afu d5 relative flex justify-center w-full">
            
            {/* Contenedor que dicta la forma del teléfono. Ajusta w-[280px] o w-[320px] según el tamaño deseado */}
            <div className="relative w-[280px] sm:w-[300px] aspect-[9/19.5]">
              <div className="absolute inset-0 rounded-[3rem] blur-3xl opacity-20 bg-[#113368]" />
              
              {/* Chasis exterior del dispositivo */}
              <div className="relative w-full h-full bg-[#0d1b2a] rounded-[2.5rem] p-2.5 shadow-2xl border border-white/10 flex flex-col">
                
                {/* Pantalla interior donde vive el video */}
                <div className="relative w-full h-full bg-black rounded-[2rem] overflow-hidden pointer-events-none">
                  
                  {/* Pequeña pestaña "Notch" arriba para dar realismo de que es un smartphone */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#0d1b2a] rounded-full z-20 flex items-center justify-center shadow-sm">
                    <div className="w-8 h-1 rounded-full bg-white/10" />
                  </div>

                  {/* Video ocupando toda la pantalla */}
                  <video
                    ref={videoRef}
                    src={videos[currentVideoIndex]}
                    onEnded={handleVideoEnd}
                    autoPlay
                    muted
                    playsInline
                    /* object-cover asegura que el video se escale para cubrir todo el alto/ancho de la pantalla. Si un video es más grande, se recorta el excedente automáticamente. */
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  
                </div>
              </div>
              

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}