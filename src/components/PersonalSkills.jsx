import React from 'react';
import { Languages, Compass, Globe2, Bike, Mountain, Sparkles, CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';

const PersonalSkills = ({ lang }) => {
  const data = {
    languages: {
      title: { fr: "Langues", en: "Languages" },
      icon: <Languages className="text-blue-400" size={20} />,
      items: [
        { 
          code: "FR", 
          name: { fr: "Français", en: "French" }, 
          level: { fr: "Bilingue", en: "Bilingual" },
          levelColor: "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]",
          width: "w-full" // Plein à 100% dès le départ
        },
        { 
          code: "EN", 
          name: { fr: "Anglais", en: "English" }, 
          level: { fr: "C1 (Professionnel)", en: "C1 (Professional)" },
          levelColor: "bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.6)]",
          width: "w-[85%]" // Plein à 85% dès le départ
        },
        { 
          code: "FA", 
          name: { fr: "Persan", en: "Persian (Farsi)" }, 
          level: { fr: "Langue maternelle", en: "Native speaker" },
          levelColor: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]",
          width: "w-full" // Plein à 100% dès le départ
        }
      ]
    },
    strengths: {
      title: { fr: "Atouts", en: "Soft Skills" },
      icon: <Sparkles className="text-indigo-400" size={20} />,
      items: [
        { fr: "Polyvalent", en: "Versatile" },
        { fr: "Esprit d'équipe", en: "Team Player" },
        { fr: "Autonome", en: "Autonomous" },
        { fr: "Rigoureux", en: "Rigorous & Precise" }
      ]
    },
    interests: {
      title: { fr: "Centres d'intérêt", en: "Interests" },
      icon: <Compass className="text-emerald-400" size={20} />,
      items: [
        { 
          icon: <Globe2 size={18} className="text-blue-400" />, 
          name: { fr: "Voyages", en: "Traveling" }, 
          desc: { fr: "Europe & Asie", en: "Europe & Asia" }
        },
        { 
          icon: <Bike size={18} className="text-indigo-400" />, 
          name: { fr: "Sport", en: "Sports" }, 
          desc: { fr: "VTT & Outdoor", en: "MTB & Outdoor" }
        },
        { 
          icon: <Mountain size={18} className="text-emerald-400" />, 
          name: { fr: "Randonnée", en: "Hiking" }, 
          desc: { fr: "Pyrénées", en: "Pyrenees Mountains" }
        }
      ]
    }
  };

  return (
    <section className="pb-24 bg-slate-900/30 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Grille sur une seule ligne (3 colonnes) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* CARTE 1 : LANGUES */}
          <FadeIn direction="up" delay={100} className="h-full">
            <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6 h-full hover:bg-slate-900/60 transition-colors group relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2.5 bg-slate-800/50 rounded-xl border border-slate-700/50 shadow-inner">
                  {data.languages.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{data.languages.title[lang]}</h3>
              </div>

              <div className="flex flex-col gap-4 relative z-10">
                {data.languages.items.map((langItem, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5 group/lang">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-md bg-slate-950 flex items-center justify-center font-bold text-slate-300 border border-slate-800 text-xs shadow-inner">
                          {langItem.code}
                        </div>
                        <span className="font-semibold text-slate-200 text-sm">{langItem.name[lang]}</span>
                      </div>
                      <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{langItem.level[lang]}</span>
                    </div>
                    {/* Barre statique, toujours pleine, qui s'illumine juste au survol */}
                    <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                      <div className={`h-full ${langItem.width} ${langItem.levelColor} rounded-full opacity-80 group-hover/lang:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CARTE 2 : ATOUTS */}
          <FadeIn direction="up" delay={200} className="h-full">
            <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6 h-full hover:bg-slate-900/60 transition-colors group relative overflow-hidden flex flex-col">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-500"></div>

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2.5 bg-slate-800/50 rounded-xl border border-slate-700/50 shadow-inner">
                  {data.strengths.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{data.strengths.title[lang]}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5 relative z-10 mt-auto mb-auto">
                {data.strengths.items.map((strength, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 px-3.5 py-2 bg-slate-950/50 border border-slate-800 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 hover:border-indigo-500/40 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_12px_rgba(99,102,241,0.15)] hover:-translate-y-0.5"
                  >
                    <CheckCircle2 size={14} className="text-indigo-500/70" />
                    {strength[lang]}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CARTE 3 : CENTRES D'INTÉRÊT */}
          <FadeIn direction="up" delay={300} className="h-full">
            <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6 h-full hover:bg-slate-900/60 transition-colors group relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-500"></div>

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2.5 bg-slate-800/50 rounded-xl border border-slate-700/50 shadow-inner">
                  {data.interests.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{data.interests.title[lang]}</h3>
              </div>

              <div className="flex flex-col gap-4 relative z-10">
                {data.interests.items.map((interest, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 group-hover/item:border-slate-600 transition-colors shadow-inner shrink-0">
                      {interest.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 group-hover/item:text-white transition-colors text-sm">{interest.name[lang]}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{interest.desc[lang]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default PersonalSkills;