import React, { useState } from 'react';
import FadeIn from './FadeIn';

const ProjectsGrid = ({ t, lang, projectsData, handleProjectNavigation }) => {
  // 1. État local pour mémoriser le filtre actuellement sélectionné
  const [activeFilter, setActiveFilter] = useState('all');

  // 2. Définition des filtres intelligents
  const filters = [
    { id: 'all', label: { fr: 'Tous les projets', en: 'All Projects' } },
    { 
      id: 'network', 
      label: { fr: 'Réseau', en: 'Network' }, 
      keywords: ['Network', 'Routing', 'VLAN', 'VPN', 'Cisco', 'Aruba', 'Subnetting', 'Architecture'] 
    },
    { 
      id: 'security', 
      label: { fr: 'Sécurité', en: 'Security' }, 
      keywords: ['Security', 'Cybersecurity', 'Firewall', 'IDS/IPS', '802.1X', 'Cryptography', 'DMZ', 'Proxy'] 
    },
    { 
      id: 'cloud', 
      label: { fr: 'Cloud & Virt.', en: 'Cloud & Virt.' }, 
      keywords: ['Cloud', 'VMware', 'Virtualization', 'vSphere', 'vCenter', 'AWS', 'Azure', 'Mobility'] 
    },
    { 
      id: 'ops', 
      label: { fr: 'Ops & Auto.', en: 'Ops & Auto.' }, 
      keywords: ['Automation', 'Ansible', 'Terraform', 'PowerShell', 'Monitoring', 'Linux', 'System Admin', 'IaC', 'GLPI', 'ITIL', 'Logs'] 
    }
  ];

  // 3. Logique de filtrage des projets
  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'all') return true;
    
    const filterConfig = filters.find(f => f.id === activeFilter);
    if (!filterConfig) return true;

    // Vérifie si au moins un 'tag' du projet contient l'un des mots-clés
    return project.tags.some(tag => 
      filterConfig.keywords.some(keyword => 
        tag.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* EN-TÊTE DE SECTION */}
        <FadeIn direction="up">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">
              {t?.projectsSection?.title || (lang === 'fr' ? 'Projets & Architectures' : 'Projects & Architectures')}
            </h2>
            <p className="text-slate-400">
              {t?.projectsSection?.subtitle || (lang === 'fr' ? 'Sélection d\'implémentations et de refontes d\'infrastructures.' : 'Selected infrastructure implementations and redesigns.')}
            </p>
          </div>
        </FadeIn>

        {/* --- LA BARRE DE FILTRES --- */}
        <FadeIn direction="up" delay={100}>
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((filter) => {
              // Calculer le nombre de projets pour ce filtre spécifique
              const count = filter.id === 'all' 
                ? projectsData.length 
                : projectsData.filter(p => p.tags.some(tag => filter.keywords.some(k => tag.toLowerCase().includes(k.toLowerCase())))).length;

              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : 'bg-slate-900/50 text-slate-400 border-slate-700/50 hover:bg-slate-800 hover:text-slate-200 hover:border-slate-600'
                  }`}
                >
                  {filter.label[lang]}
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    activeFilter === filter.id ? 'bg-blue-800 text-blue-100' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* --- LA GRILLE DES PROJETS --- */}
        <div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <FadeIn key={project.id} delay={(i % 3) * 100} direction="up" className="h-full">
              <div 
                // On conserve votre fonction d'origine pour ouvrir la page du projet
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
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-slate-800 text-slate-300 rounded-md">
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

        {/* Message d'erreur si un filtre ne retourne rien (Ex: Sécurité visuelle) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 border border-dashed border-slate-700 rounded-2xl mt-8">
            <p className="text-slate-500 text-lg">
              {lang === 'fr' ? 'Aucun projet trouvé pour cette catégorie.' : 'No projects found for this category.'}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsGrid;