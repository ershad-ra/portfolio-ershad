import React from 'react';
import { useNavigate } from 'react-router-dom';
import FadeIn from './FadeIn';
import { Layers, ArrowRight } from 'lucide-react';

const About = ({ t, lang, profileData }) => {
  const navigate = useNavigate();

  return (
    <section id="about" className="pt-16 pb-12 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <FadeIn direction="up">
          <div className="mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
              {t.aboutSection.badge}
            </span>
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
              {t.aboutSection.titleStart}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                {t.aboutSection.titleHighlight}
              </span>
            </h2>
            <p className="text-base text-slate-400 max-w-2xl">{t.aboutSection.subtitle}</p>
          </div>
        </FadeIn>

        {/* TECH STACK GRID (2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14">
          {profileData.skills.map((skill, i) => (
            <FadeIn key={skill.id} delay={i * 100} direction="up" className="h-full">
              <div className="group flex flex-col p-6 sm:p-7 bg-slate-900/40 border border-slate-800/60 rounded-2xl hover:bg-slate-900/80 hover:border-slate-700/80 transition-all duration-300 h-full">
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-2.5 rounded-xl bg-slate-800/50 ${skill.color} group-hover:scale-105 transition-transform duration-300`}>
                    <skill.icon size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200 tracking-tight leading-tight">{skill[lang].category}</h3>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">{skill[lang].subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill[lang].tools.map((tool, index) => (
                    <span 
                      key={index} 
                      className="px-2.5 py-1 text-[11px] sm:text-xs font-medium text-slate-300 bg-slate-800/30 border border-slate-700/40 rounded-md hover:text-white hover:bg-slate-800 transition-colors duration-200 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* BOUTON : DOSSIER DE COMPÉTENCES */}
        <FadeIn direction="up" delay={400}>
          <div className="flex justify-center lg:justify-start">
            <button 
              onClick={() => navigate('/experience/details')} 
              className="group relative inline-flex items-center justify-between gap-4 p-4 pr-6 bg-slate-900/80 backdrop-blur-md border border-slate-700 hover:border-blue-500/80 rounded-2xl text-slate-300 hover:text-white transition-all duration-300 shadow-xl overflow-hidden w-full sm:w-auto min-w-[300px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-blue-500/20 text-blue-400 transition-colors">
                  <Layers size={20} />
                </div>
                <div className="text-left">
                  <span className="block font-semibold text-sm">
                    {lang === 'fr' ? 'Dossier de Compétences' : 'Detailed Skills Matrix'}
                  </span>
                  <span className="block text-xs text-slate-500 mt-0.5 group-hover:text-blue-300/70 transition-colors">
                    {lang === 'fr' ? 'Explorer toutes les missions & technos' : 'Explore all missions & tech stack'}
                  </span>
                </div>
              </div>
              <ArrowRight size={20} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all relative z-10" />
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default About;