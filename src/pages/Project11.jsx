import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { translations, projectsData } from '../data/data';
import { ChevronLeft, FileText, ArrowUpRight, Code } from 'lucide-react';

const Project11 = ({ lang }) => {
  const navigate = useNavigate();
  const t = translations[lang];
  const project = projectsData.find(p => p.id === 11);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!project) return null;

  return (
    <div className="min-h-screen pt-8 pb-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <button onClick={() => navigate('/')} className="group flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors mb-10 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full w-fit relative z-20">
          <ChevronLeft size={16} className="text-blue-400 group-hover:-translate-x-1 transition-transform" />
          {t.projectDetail.back}
        </button>

        <article>
          <FadeIn direction="up">
            <header className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl w-fit">
                  <project.icon size={28} className="text-blue-400" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">{project[lang].title}</h1>
              </div>
              <p className="text-lg md:text-xl text-slate-400 border-l-4 border-blue-500 pl-4 py-1">{project[lang].subtitle}</p>
            </header>
          </FadeIn>

          <FadeIn delay={150} direction="up" className="flex justify-center">
            <div className="relative aspect-[700/474] w-full max-w-3xl mb-12 rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900/50">
              <img src={project.imageUrl} alt={project[lang].title} className="w-full h-full object-contain" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <FadeIn delay={300} direction="up">
                <h2 className="text-xl font-bold text-white flex items-center gap-2 pb-4 border-b border-slate-800/80">
                  <FileText size={20} className="text-blue-400" /> {t.projectDetail.descriptionTitle}
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">{project[lang].description}</p>
              </FadeIn>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {project.documentUrl && (
                  <FadeIn delay={400} direction="up">
                    <a href={project.documentUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center gap-2 p-6 bg-blue-600 hover:bg-blue-500 rounded-2xl text-white transition-all shadow-lg shadow-blue-900/20 text-center">
                      <FileText size={28} className="mb-1" />
                      <span className="font-bold text-sm">{t.projectDetail.viewPdf}</span>
                      <span className="text-blue-200 text-xs flex items-center gap-1 mt-1 group-hover:text-white transition-colors">
                        Ouvrir l'onglet <ArrowUpRight size={14} />
                      </span>
                    </a>
                  </FadeIn>
                )}

                <FadeIn delay={500} direction="up">
                  <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                      <Code size={16} className="text-slate-400" /> {t.projectDetail.technologies}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1.5 text-xs font-semibold bg-slate-800 text-slate-300 rounded-lg border border-slate-700/50">{tag}</span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Project11;