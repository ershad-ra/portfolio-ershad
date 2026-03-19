import React, { useRef } from 'react';
import { Crosshair, Zap } from 'lucide-react';
import FadeIn from './FadeIn';

const TargetRoles = ({ lang }) => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const roles = [
    "Ingénieur Systèmes & Réseaux",
    "Architecte Infrastructure IT",
    "Ingénieur Réseaux & Sécurité",
    "Ingénieur Cloud",
    "DevOps / DevSecOps"
  ];

  // On multiplie les éléments pour créer l'illusion d'une boucle infinie
  const tickerItems = [...roles, ...roles, ...roles];

  // Gestion du Drag-to-Scroll (Maintien du curseur standard, pas de main "grab")
  const onMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const onMouseLeaveOrUp = () => {
    isDown = false;
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Ajuster la vitesse de glissement ici
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative z-20 mt-8 md:-mt-6 mb-10 max-w-7xl mx-auto px-6 lg:px-8">
      <FadeIn direction="up" delay={200}>
        
        <div className="w-full max-w-4xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-xl shadow-blue-900/20 overflow-hidden flex flex-col md:flex-row items-stretch">
          
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 md:py-2.5 flex items-center justify-center md:justify-start gap-2 shadow-[0_4px_10px_rgba(0,0,0,0.2)] md:shadow-[8px_0_12px_-3px_rgba(0,0,0,0.3)] z-10 shrink-0">
            <Crosshair className="text-white animate-pulse" size={14} />
            <span className="text-white font-bold text-xs tracking-widest uppercase whitespace-nowrap">
              {lang === 'fr' ? 'Missions ciblées' : 'Target Roles'}
            </span>
          </div>

          <div className="flex-1 overflow-hidden relative flex items-center bg-slate-950/50 ticker-container">
            
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-950 to-transparent z-10 hidden md:block pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-950 to-transparent z-10 hidden md:block pointer-events-none"></div>

            <style>{`
              @keyframes slide-infinite {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.3333%); }
              }
              .animate-slide-infinite {
                display: flex;
                width: max-content;
                animation: slide-infinite 25s linear infinite;
              }
              /* Pause au survol ou pendant le drag */
              .ticker-container:hover .animate-slide-infinite,
              .ticker-container:active .animate-slide-infinite {
                animation-play-state: paused;
              }
              /* Masquer la scrollbar */
              .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>

            {/* Conteneur gérant le défilement CSS et le Drag JS */}
            <div 
              ref={scrollRef}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeaveOrUp}
              onMouseUp={onMouseLeaveOrUp}
              onMouseMove={onMouseMove}
              className="flex items-center px-6 py-2 md:py-0 overflow-x-auto no-scrollbar w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="animate-slide-infinite items-center gap-6 pr-6">
                {tickerItems.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <span className="text-slate-300 font-semibold tracking-wide text-xs md:text-sm whitespace-nowrap transition-colors duration-300 group-hover:text-blue-400 cursor-default select-none">
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