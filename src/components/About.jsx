import React from 'react';
import FadeIn from './FadeIn';
import { Globe, UserCheck, Compass } from 'lucide-react';

const About = ({ t, lang, profileData }) => {
  return (
    <section id="about" className="py-24 bg-slate-900/30 border-t border-slate-800/50">
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

        <FadeIn delay={200} direction="up">
          <div className="w-full flex items-center justify-center my-14 opacity-40">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent w-full max-w-4xl"></div>
          </div>
        </FadeIn>

        {/* PERSONAL PROFILE (Languages, Atouts, Hobbies) */}
        <FadeIn delay={300} direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* 1. Carte Langues */}
            <div className="h-fit bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl hover:bg-slate-900/60 hover:border-slate-700/60 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Globe size={20} className="text-blue-400" />
                <h3 className="text-base font-bold text-white tracking-wide">{t.aboutSection.languagesTitle}</h3>
              </div>
              <div className="space-y-5">
                {profileData.languages[lang].map((l, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-200">{l.name}</span>
                        {l.cert && (
                          <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] font-bold rounded border border-blue-500/30">
                            {l.cert}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">{l.code}</span>
                    </div>
                    <span className="text-xs text-slate-400">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Carte Atouts */}
            <div className="h-fit bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl hover:bg-slate-900/60 hover:border-slate-700/60 transition-all duration-300 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <UserCheck size={20} className="text-emerald-400" />
                <h3 className="text-base font-bold text-white tracking-wide">{t.aboutSection.softSkillsTitle}</h3>
              </div>
              <div className="space-y-4 relative z-10">
                {profileData.softSkills[lang].map((skill, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-3.5 h-1.5 rounded-sm transform skew-x-[-15deg] transition-colors duration-500 ${
                            i < skill.level ? 'bg-emerald-400' : 'bg-slate-800'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Carte Hobbies */}
            <div className="h-fit bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl hover:bg-slate-900/60 hover:border-slate-700/60 transition-all duration-300 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[50px] rounded-full pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <Compass size={20} className="text-amber-400" />
                <h3 className="text-base font-bold text-white tracking-wide">{t.aboutSection.hobbiesTitle}</h3>
              </div>
              <div className="space-y-5 relative z-10">
                {profileData.hobbies[lang].map((hobby, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="p-2 bg-slate-800/50 rounded-lg text-amber-400 border border-slate-700/50">
                      <hobby.icon size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-200">{hobby.label}</span>
                      <span className="text-xs text-slate-400 mt-0.5">{hobby.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default About;