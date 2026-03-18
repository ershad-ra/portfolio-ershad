import React from 'react';
import FadeIn from './FadeIn';
import { Award, ExternalLink, Activity } from 'lucide-react';
import DynamicQuote from './DynamicQuote'; 

const Hero = ({ t, lang }) => {
  
  // FONCTION CORRIGÉE : Vise précisément le slider et centre l'écran
  const scrollToTab = (tabId) => {
    // 1. Déclenche le changement d'onglet (ce qui reset le chrono automatiquement)
    window.dispatchEvent(new CustomEvent('changeLearningTab', { detail: tabId }));
    
    // 2. Trouve le bloc spécifique "En cours" plutôt que le haut de la section
    const element = document.getElementById('in-progress-slider');
    if (element) {
      // Le paramètre block: 'center' garantit qu'on atterrit parfaitement sur la box !
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.history.pushState(null, '', '#current-learning');
    }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col pt-8 lg:pt-0">
      <div className="flex-1 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row justify-between pt-12 pb-0 gap-8 border-b border-slate-800/40">
        
        {/* COLONNE GAUCHE */}
        <div className="flex-1 max-w-3xl flex flex-col justify-center pb-8 lg:pb-16 relative z-20">
          <FadeIn delay={100} direction="up">
            <div className="sm:hidden">
              <DynamicQuote lang={lang} isMobile={true} />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 mt-4 lg:mt-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider">{t.hero.status}</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} direction="up">
            <h1 className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-6xl font-extrabold text-white tracking-tighter leading-tight mb-6 whitespace-nowrap">
              {t.hero.greeting}
            </h1>
          </FadeIn>
          
          <FadeIn delay={300} direction="up">
            <h2 className="text-2xl sm:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-6">
              {t.hero.role}
            </h2>
          </FadeIn>
          
          <FadeIn delay={400} direction="up">
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-10">
              {t.hero.description}
            </p>
          </FadeIn>

          <FadeIn delay={500} direction="up">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mb-0 w-full lg:max-w-[600px]">
              
              <a href="https://ynov.mycertif.app/certification/parchemin/1f0d0537-1c81-6a86-a84d-b9240b704ee0" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all w-full min-h-[72px]">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-emerald-500/10 transition-colors shrink-0">
                  <Award className="text-emerald-400" size={24} />
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-[10px] uppercase text-slate-500 font-semibold mb-0.5">{t.hero.certifications}</p>
                  <p className="font-semibold text-slate-200 text-sm leading-tight flex items-center gap-1">Expert Architecture SI <ExternalLink size={12} className="text-slate-500 group-hover:text-emerald-400 shrink-0" /></p>
                </div>
              </a>

              <a href="https://www.credly.com/badges/8a9c0877-0c28-4b90-977b-3a3963753091" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all w-full min-h-[72px]">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-500/10 transition-colors shrink-0">
                  <Award className="text-amber-500" size={24} />
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-[10px] uppercase text-slate-500 font-semibold mb-0.5">{t.hero.certifications}</p>
                  <p className="font-semibold text-slate-200 text-sm leading-tight flex items-center gap-1">AWS Solutions Architect <ExternalLink size={12} className="text-slate-500 group-hover:text-blue-400 shrink-0" /></p>
                </div>
              </a>

              <a href="https://www.credly.com/badges/cc18fb0c-6597-485b-ac93-903aed039c4d" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all w-full min-h-[72px]">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-500/10 transition-colors shrink-0">
                  <Award className="text-blue-400" size={24} />
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-[10px] uppercase text-slate-500 font-semibold mb-0.5">{t.hero.certifications}</p>
                  <p className="font-semibold text-slate-200 text-sm leading-tight flex items-center gap-1">Cisco CCNA <ExternalLink size={12} className="text-slate-500 group-hover:text-blue-400 shrink-0" /></p>
                </div>
              </a>

              <div onClick={() => scrollToTab('ccnp')} className="group flex items-center gap-4 bg-slate-900/30 border border-slate-700 border-dashed hover:border-blue-500/50 rounded-xl px-5 py-3 shadow-sm transition-all w-full min-h-[72px] opacity-60 grayscale hover:grayscale-0 hover:opacity-100 cursor-pointer" title={lang === 'fr' ? "Voir les détails" : "View details"}>
                <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-blue-500/10 transition-colors shrink-0">
                  <Award className="text-blue-400" size={24} />
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-[10px] uppercase text-blue-400/80 font-bold mb-0.5 tracking-wider">{lang === 'fr' ? 'En préparation' : 'In Progress'}</p>
                  <p className="font-semibold text-slate-400 group-hover:text-slate-200 transition-colors text-sm leading-tight flex items-center gap-1">Cisco CCNP <Activity size={12} className="text-blue-500 animate-pulse shrink-0" /></p>
                </div>
              </div>

              <div onClick={() => scrollToTab('terraform')} className="group flex items-center gap-4 bg-slate-900/30 border border-slate-700 border-dashed hover:border-purple-500/50 rounded-xl px-5 py-3 shadow-sm transition-all w-full min-h-[72px] opacity-60 grayscale hover:grayscale-0 hover:opacity-100 cursor-pointer" title={lang === 'fr' ? "Voir les détails" : "View details"}>
                <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-purple-500/10 transition-colors shrink-0">
                  <Award className="text-purple-400" size={24} />
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-[10px] uppercase text-purple-400/80 font-bold mb-0.5 tracking-wider">{lang === 'fr' ? 'En préparation' : 'In Progress'}</p>
                  <p className="font-semibold text-slate-400 group-hover:text-slate-200 transition-colors text-sm leading-tight flex items-center gap-1">Terraform Associate <Activity size={12} className="text-purple-500 animate-pulse shrink-0" /></p>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>

        {/* COLONNE DROITE */}
        <div className="flex-1 relative flex justify-center lg:justify-end items-end w-full lg:pl-10 mt-8 lg:mt-0">
          <FadeIn delay={200} direction="left" className="relative z-10 w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[340px] flex justify-center items-end mt-auto h-full">
            <div className="absolute top-[42%] lg:top-[45%] right-[62%] md:right-[68%] lg:right-[72%] z-[100] text-left pointer-events-none hidden sm:block w-[280px]">
              <FadeIn delay={800} direction="right">
                <DynamicQuote lang={lang} isMobile={false} />
              </FadeIn>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-blue-600/20 to-indigo-500/20 blur-[60px] rounded-full -z-10"></div>
            <img 
              src="https://assets.persys.fr/Portfolio/Resumes%20-%20CVs/Ershad_Ramezani.png" 
              alt="Ershad Ramezani" 
              className="w-full h-auto object-bottom object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] block"
              style={{ marginBottom: "-1px" }}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;