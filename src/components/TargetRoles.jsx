import React, { useRef, useEffect } from 'react';
import { Crosshair, Zap } from 'lucide-react';
import FadeIn from './FadeIn';

const TargetRoles = ({ lang }) => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const roles = [
    "Ingénieur Systèmes & Réseaux",
    "Architecte Infrastructure IT",
    "Ingénieur Réseaux & Sécurité",
    "Ingénieur Cloud",
    "DevOps / DevSecOps"
  ];

  // On quadruple le tableau pour garantir que le défilement infini JS ait assez de matière
  const tickerItems = [...roles, ...roles, ...roles, ...roles];

  // Moteur de défilement automatique en JavaScript
  useEffect(() => {
    const slider = scrollRef.current;
    let animationId;

    const animate = () => {
      if (!isDragging.current && slider) {
        slider.scrollLeft += 0.5; // Vitesse du défilement automatique
        
        // Boucle infinie : quand on arrive à la moitié du scroll total, on revient au début sans que ça se voie
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // --- Gestion de la souris ---
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Vitesse de glissement manuel
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // --- Gestion du tactile (Smartphones/Tablettes) ---
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    // Remise en place du -mt-8 pour que ça remonte bien sur la photo en mobile et desktop !
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
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeaveOrUp}
              onMouseUp={handleMouseLeaveOrUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}
              // Curseur normal (cursor-default) et pas de scrollbar
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