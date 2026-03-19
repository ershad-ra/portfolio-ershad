import React from 'react';
import { useNavigate } from 'react-router-dom';
import FadeIn from './FadeIn';
import { Briefcase, GraduationCap, Layers, ArrowRight } from 'lucide-react';

const Timeline = ({ t, lang, experienceData, educationData }) => {
  const navigate = useNavigate();

  return (
    <section id="experience" className="py-24 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <FadeIn direction="up">
          <div className="mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-wider mb-4 border border-indigo-500/20">
              {t.timelineSection.badge}
            </span>
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
              {t.timelineSection.titleStart}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {t.timelineSection.titleHighlight}
              </span>
            </h2>
            <p className="text-base text-slate-400 max-w-2xl">{t.timelineSection.subtitle}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <FadeIn direction="up">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Briefcase size={20} />
                </div>
                {t.timelineSection.expTitle}
              </h3>
            </FadeIn>
            
            <div className="space-y-10 pl-4 border-l-2 border-slate-800 ml-3">
              {experienceData[lang].map((exp, i) => (
                <FadeIn key={i} delay={i * 150} direction="up">
                  <div className="relative pl-6">
                    <div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-slate-950 border-4 border-blue-500"></div>
                    <span className="text-sm font-semibold text-blue-400 mb-1 block">{exp.year}</span>
                    <h4 className="text-lg font-bold text-slate-200">{exp.role}</h4>
                    <span className="text-sm text-slate-500 mb-4 block">{exp.company}</span>
                    <p className="text-slate-400 mb-4 leading-relaxed text-sm">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.details.map((detail, j) => {
                        const parts = detail.split(' : ');
                        const isEnvironment = parts[0] === 'Environnement' || parts[0] === 'Environment';

                        if (isEnvironment) {
                          const tools = parts.slice(1).join(' : ').replace('.', '').split(', ');
                          return (
                            <li key={j} className="pt-4 mt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                                {parts[0]}
                              </span>
                              {tools.map((tool, idx) => (
                                <span 
                                  key={idx} 
                                  className="px-2 py-1 text-[10px] font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-md"
                                >
                                  {tool.trim()}
                                </span>
                              ))}
                            </li>
                          );
                        }

                        return (
                          <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                            <span className="text-blue-500/50 mt-0.5">•</span>
                            <span>
                              {parts.length > 1 ? (
                                <>
                                  <strong className="text-slate-200 font-semibold">{parts[0]} : </strong>
                                  {parts.slice(1).join(' : ')}
                                </>
                              ) : (
                                detail
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </FadeIn>
              ))}

              {/* === NOUVEAU BOUTON : VOIR EN DÉTAIL (Design Identique) === */}
              <FadeIn direction="up" delay={experienceData[lang].length * 150}>
                <div className="relative pl-6 mt-12">
                  <div className="absolute -left-[23px] top-6 w-2 h-2 rounded-full bg-blue-500/50 ring-4 ring-slate-950"></div>
                  
                  <button 
                    onClick={() => navigate('/experience/details')} 
                    className="group relative inline-flex items-center justify-between gap-4 p-4 pr-6 bg-slate-900/80 backdrop-blur-md border border-slate-700 hover:border-blue-500/80 rounded-2xl text-slate-300 hover:text-white transition-all duration-300 shadow-xl overflow-hidden w-full"
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
          </div>

          <div>
            <FadeIn direction="up">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <GraduationCap size={20} />
                </div>
                {t.timelineSection.eduTitle}
              </h3>
            </FadeIn>
            <div className="space-y-10 pl-4 border-l-2 border-slate-800 ml-3">
              {educationData[lang].map((edu, i) => (
                <FadeIn key={i} delay={i * 150} direction="up">
                  <div className="relative pl-6">
                    <div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-slate-950 border-4 border-slate-600"></div>
                    <span className="text-sm font-semibold text-slate-500 mb-1 block">{edu.year}</span>
                    <h4 className="text-base font-bold text-slate-200">{edu.degree}</h4>
                    <span className="text-sm text-slate-400 block">{edu.school}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;