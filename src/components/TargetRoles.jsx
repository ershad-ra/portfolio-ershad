import React, { useRef, useEffect, useCallback } from 'react';
import { Crosshair, Zap } from 'lucide-react';
import FadeIn from './FadeIn';

const TargetRoles = ({ lang }) => {
  const trackRef = useRef(null);
  const blockRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const animationRef = useRef(null);

  const roles = [
    "Ingénieur Systèmes & Réseaux",
    "Architecte Infrastructure IT",
    "Ingénieur Réseaux & Sécurité",
    "Ingénieur Cloud",
    "DevOps / DevSecOps"
  ];

  const repeatedRoles = [...roles, ...roles, ...roles, ...roles];

  const animate = useCallback(() => {
    if (!isDragging.current && blockRef.current && trackRef.current) {
      currentX.current -= 0.5; 
      
      const loopWidth = blockRef.current.offsetWidth;
      
      if (currentX.current <= -loopWidth) {
        currentX.current += loopWidth;
      }
      if (currentX.current > 0) {
        currentX.current -= loopWidth;
      }

      trackRef.current.style.transform = `translateX(${currentX.current}px)`;
    }
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    
    const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const walk = pageX - startX.current;
    
    startX.current = pageX; 
    currentX.current += walk;
    
    const loopWidth = blockRef.current?.offsetWidth || 1000;
    
    if (currentX.current <= -loopWidth) currentX.current += loopWidth;
    if (currentX.current > 0) currentX.current -= loopWidth;
    
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentX.current}px)`;
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('touchmove', handleMouseMove);
    window.removeEventListener('touchend', handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleMouseMove, { passive: false });
    window.addEventListener('touchend', handleMouseUp);
  };

  const RolesGroup = React.forwardRef((props, ref) => (
    <div ref={ref} className="flex items-center gap-6 pr-6 w-max shrink-0">
      {repeatedRoles.map((role, idx) => (
        <div key={idx} className="flex items-center gap-6 group pointer-events-none">
          <span className="text-slate-300 font-semibold tracking-wide text-xs md:text-sm whitespace-nowrap transition-colors duration-300 group-hover:text-blue-400">
            {role}
          </span>
          <Zap className="text-blue-500/50" size={12} />
        </div>
      ))}
    </div>
  ));

  return (
    <section className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 h-0">
      {/* ✅ ONLY CHANGE HERE */}
      <div className="relative -translate-y-1/2 w-full lg:w-[83%] xl:w-[75%]">
        <FadeIn direction="up" delay={200}>
          
          <div className="w-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-xl shadow-blue-900/20 overflow-hidden flex flex-col md:flex-row items-stretch">
            
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
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                className="overflow-hidden w-full cursor-default select-none touch-pan-y py-2 md:py-0"
              >
                <div ref={trackRef} className="flex items-center w-max will-change-transform">
                  <RolesGroup ref={blockRef} />
                  <RolesGroup />
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TargetRoles;