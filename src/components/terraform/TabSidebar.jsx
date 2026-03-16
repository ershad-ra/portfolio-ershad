import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const TabSidebar = ({ tabs, activeTab, setActiveTab }) => {
  const [expandedMenu, setExpandedMenu] = useState(activeTab);

  useEffect(() => {
    setExpandedMenu(activeTab);
  }, [activeTab]);

  const handleChapterClick = (id) => {
    if (activeTab === id) {
      setExpandedMenu(expandedMenu === id ? null : id);
    } else {
      setActiveTab(id);
      setExpandedMenu(id);
    }
  };

  const scrollToSection = (idx) => {
    const element = document.getElementById(`section-${idx}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">
        Chapters
      </h3>
      
      {tabs.map((tab) => {
        const isExpanded = expandedMenu === tab.id;
        const isActive = activeTab === tab.id;

        return (
          <div key={tab.id} className="flex flex-col">
            {/* NIVEAU 1 : Le Chapitre */}
            <button
              onClick={() => handleChapterClick(tab.id)}
              className={`flex items-center justify-between w-full text-left px-4 py-4 rounded-xl transition-all duration-300 z-10 ${
                isActive
                  ? 'bg-purple-500/10 border-purple-500/50 text-purple-400 border shadow-sm'
                  : 'bg-slate-900/50 border-slate-800/50 text-slate-400 border hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <tab.icon size={20} className={isActive ? 'text-purple-400' : 'text-slate-500'} />
                <span className="font-semibold text-sm leading-tight">
                  {tab.title.en}
                </span>
              </div>
              <ChevronRight 
                size={16} 
                className={`shrink-0 transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-90' : 'rotate-0'}`} 
              />
            </button>

            {/* NIVEAU 2 : Les sous-titres avec Scrollbar personnalisée */}
            <div 
              className={`grid transition-all duration-300 ease-in-out ${
                isExpanded ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'
              }`}
            >
              <div className="overflow-hidden">
                {/* Ajout de:
                  - max-h-[40vh] (limite la hauteur à 40% de l'écran)
                  - overflow-y-auto (active le scroll vertical)
                  - Sélecteurs webkit pour colorer la scrollbar en violet/slate
                */}
                <div className="ml-4 pl-4 border-l border-slate-800/60 flex flex-col gap-1.5 py-2 pr-2 max-h-[40vh] overflow-y-auto
                  [&::-webkit-scrollbar]:w-1.5 
                  [&::-webkit-scrollbar-track]:bg-transparent 
                  [&::-webkit-scrollbar-thumb]:bg-purple-500/20 
                  hover:[&::-webkit-scrollbar-thumb]:bg-purple-500/50 
                  [&::-webkit-scrollbar-thumb]:rounded-full"
                >
                  {tab.sections.map((section, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(idx)}
                      className="text-left text-[13px] font-medium text-slate-400 hover:text-purple-400 transition-colors py-1.5 pr-2 leading-tight"
                    >
                      {section.heading}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default TabSidebar;