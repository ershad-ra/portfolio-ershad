import React from 'react';
import FadeIn from './FadeIn';

const ProjectsGrid = ({ t, lang, projectsData, handleProjectNavigation }) => {
  return (
    <section id="projects" className="py-24 relative">      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">{t.projectsSection.title}</h2>
            <p className="text-slate-400">{t.projectsSection.subtitle}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, i) => (
            <FadeIn key={project.id} delay={(i % 3) * 150} direction="up" className="h-full">
              <div 
                onClick={() => handleProjectNavigation(project)}
                className="group flex flex-col bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 cursor-pointer overflow-hidden h-full"
              >
                <div className="relative aspect-[700/474] overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project[lang].title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-sm p-2 rounded-lg border border-slate-700 shadow-sm">
                    <project.icon size={20} className="text-blue-400" />
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {project[lang].title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-6 line-clamp-2">
                    {project[lang].subtitle}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-slate-800 text-slate-300 rounded-md">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase text-blue-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;