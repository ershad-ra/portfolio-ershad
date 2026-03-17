import React from 'react';
import FadeIn from './FadeIn';
import { Target, ArrowRight, Briefcase, Settings, Layers } from 'lucide-react';

const Capstone = ({ t, navigate }) => {
  return (
    <section id="capstone" className="py-24 border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-blue-500/20 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-blue-900/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              <div>
                <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/30">
                  {t.capstone.badge}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                  {t.capstone.title}
                </h2>
                <p className="text-xl text-blue-400 mb-8 font-medium">
                  {t.capstone.subtitle}
                </p>
                
                <div className="space-y-4 text-slate-300 leading-relaxed mb-10">
                  <p>{t.capstone.story1}</p>
                  <p>{t.capstone.story2}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1 sm:col-span-2 mb-2">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    {t.capstone.blocksTitle}
                  </h3>
                </div>

                {/* BLOC 1 */}
                <div 
                  onClick={() => {
                    window.history.replaceState(null, '', '/#capstone');
                    navigate('/project/bloc-1');
                  }}
                  className="bg-slate-950/50 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 hover:bg-slate-900 transition-all group cursor-pointer relative"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    <Target size={20} />
                  </div>
                  <h4 className="text-white font-bold mb-2">{t.capstone.b1Title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{t.capstone.b1Desc}</p>
                  <div className="flex items-center text-blue-400 text-xs font-semibold uppercase tracking-wider group-hover:text-blue-300">
                    {t.capstone.viewDetails} <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* BLOC 2 */}
                <div 
                  onClick={() => {
                    window.history.replaceState(null, '', '/#capstone');
                    navigate('/project/bloc-2');
                  }}
                  className="bg-slate-950/50 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 hover:bg-slate-900 transition-all group cursor-pointer relative"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase size={20} />
                  </div>
                  <h4 className="text-white font-bold mb-2">{t.capstone.b2Title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{t.capstone.b2Desc}</p>
                  <div className="flex items-center text-indigo-400 text-xs font-semibold uppercase tracking-wider group-hover:text-indigo-300">
                    {t.capstone.viewDetails} <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* BLOC 3 */}
                <div 
                  onClick={() => {
                    window.history.replaceState(null, '', '/#capstone');
                    navigate('/project/bloc-3');
                  }}
                  className="bg-slate-950/50 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/50 hover:bg-slate-900 transition-all group cursor-pointer relative"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                    <Settings size={20} />
                  </div>
                  <h4 className="text-white font-bold mb-2">{t.capstone.b3Title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{t.capstone.b3Desc}</p>
                  <div className="flex items-center text-emerald-400 text-xs font-semibold uppercase tracking-wider group-hover:text-emerald-300">
                    {t.capstone.viewDetails} <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* BLOC 5 */}
                <div 
                  onClick={() => {
                    window.history.replaceState(null, '', '/#capstone');
                    navigate('/project/bloc-5');
                  }}
                  className="bg-slate-950/50 border border-slate-800 p-6 rounded-2xl hover:border-amber-500/50 hover:bg-slate-900 transition-all group cursor-pointer relative"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                    <Layers size={20} />
                  </div>
                  <h4 className="text-white font-bold mb-2">{t.capstone.b5Title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{t.capstone.b5Desc}</p>
                  <div className="flex items-center text-amber-400 text-xs font-semibold uppercase tracking-wider group-hover:text-amber-300">
                    {t.capstone.viewDetails} <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Capstone;