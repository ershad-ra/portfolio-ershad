import React, { useRef, useEffect } from 'react';
import { Crosshair, Zap } from 'lucide-react';
import FadeIn from './FadeIn';

const TargetRoles = ({ lang }) => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const exactScroll = useRef(0); // <-- La solution miracle pour les mobiles !

  const roles = [
    "Ingénieur Systèmes & Réseaux",
    "Architecte Infrastructure IT",
    "Ingénieur Réseaux & Sécurité",
    "Ingénieur Cloud",
    "DevOps / DevSecOps"
  ];

  const tickerItems = [...roles, ...roles, ...roles, ...roles];

  useEffect(() => {
    const slider = scrollRef.current;
    let animationId;

    const animate = () => {
      if (!isDragging.current && slider) {
        // On accumule les demi-pixels dans la mémoire exacte
        exactScroll.current += 0.5; 
        
        if (exactScroll.current >= slider.scrollWidth / 2) {
          exactScroll.current = 0;
        }
        
        // On applique seulement l'entier au navigateur pour ne pas bloquer les mobiles
        slider.scrollLeft = Math.floor(exactScroll.current);
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // --- Fonctions unifiées pour Souris & Doigt ---
  const handleStart = (pageX) => {
    isDragging.current = true;
    startX.current = pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  const handleMove = (pageX, preventDefault = false, e) => {
    if (!isDragging.current) return;
    if (preventDefault && e) e.preventDefault();
    
    const x = pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
    
    // On synchronise la mémoire avec la position manuelle
    exactScroll.current = scrollRef.current.scrollLeft;
  };

  return (
    <section className="relative z-20 -mt-8 mb-10 max-w-7xl mx-auto px-6 lg:px-8">
      <FadeIn direction="up" delay={200}>
        
        <div className="w-full max-w-4xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-xl shadow-blue-900/20 overflow-hidden flex flex-col md:flex-row items-stretch">
          
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 md:py-2.5 flex items-center justify-center md:justify-start gap-2 shadow-[0_4px_10px_rgba(0,0,0,0.2)] md:shadow-[8px_0_12px_-3px_rgba(0,0,0,0.3)] z-10 shrink-0">
            <Crosshair className="text-white animate-pulse" size={14} />
            <span className="text-white font-bold text-xs tracking-widest uppercase whitespace-nowrap">
              {lang === 'fr' ? 'Missions ciblées' : 'Target Roles'}
            </span>
          </div>

          <div className="flex-1 overflow-hidden relative flex items-center bg-slate-950/50">
            
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none hidden md:block"></div>

            <div 
              ref={scrollRef}
              // Souris
              onMouseDown={(e) => handleStart(e.pageX)}
              onMouseLeave={handleEnd}
              onMouseUp={handleEnd}
              onMouseMove={(e) => handleMove(e.pageX, true, e)}
              // Tactile
              onTouchStart={(e) => handleStart(e.touches[0].pageX)}
              onTouchEnd={handleEnd}
              onTouchMove={(e) => handleMove(e.touches[0].pageX, false)}
              
              className="flex items-center px-6 py-2 md:py-0 overflow-x-auto scroll-smooth cursor-default select-none no-scrollbar w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
              
              <div className="flex items-center gap-6 pr-6 w-max">
                {tickerItems.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <span className="text-slate-300 font-semibold tracking-wide text-xs md:text-sm whitespace-nowrap transition-colors duration-300 group-hover:text-blue-400">
                      {role}
                    </span>
                    <Zap className="text-blue-500/50" size={12} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default TargetRoles;