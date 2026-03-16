import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import FadeIn from './FadeIn';

const learningData = [
  {
    id: 'terraform',
    title: 'Terraform Associate',
    category: 'Infrastructure as Code',
    image: '/images/terraform.svg',
    theme: {
      text: 'text-purple-400',
      bg: 'bg-purple-600',
      border: 'border-purple-500/30',
      tabActive: 'bg-purple-500/10 border-purple-500/50',
    },
    description: {
      en: 'Consolidating my expertise in automated infrastructure deployment, state management, and multi-cloud provisioning to obtain the official HashiCorp certification.',
      fr: "Consolidation de mon expertise en déploiement d'infrastructure automatisé, gestion des états et provisionnement multi-cloud pour l'obtention de la certification HashiCorp."
    },
    progressText: { en: 'Certification prep - Chapter 7', fr: 'Prépa. Certification - Chapitre 7' },
    link: '/certification/terraform'
  },
  {
    id: 'ccnp',
    title: 'Cisco CCNP Enterprise',
    category: 'Advanced Networking',
    image: '/images/CCNA-ENCOR.png',
    theme: {
      text: 'text-blue-400',
      bg: 'bg-blue-600',
      border: 'border-blue-500/30',
      tabActive: 'bg-blue-500/10 border-blue-500/50',
    },
    description: {
      en: 'Validating my advanced skills in enterprise routing, switching architecture, and complex network troubleshooting through the CCNP certification track.',
      fr: "Validation de mes compétences avancées en routage d'entreprise, architecture de commutation et dépannage réseau complexe via le parcours de certification CCNP."
    },
    progressText: { en: 'Certification goal', fr: 'Objectif de certification' },
    link: '/certification/ccnp'
  }
];

const CurrentLearning = ({ lang }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeItem = learningData[currentIndex];

  // CHANGEMENT AUTOMATIQUE SIMPLE (10 SECONDES)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-24 border-t border-b border-slate-800/40 bg-slate-900/20 relative">
      <FadeIn direction="up">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-200 uppercase tracking-wider">
              {lang === 'fr' ? 'Projets & Certifications en cours' : 'Current Projects & Certifications'}
            </h2>
          </div>

          {/* RECTANGLE À TAILLE FIXE (h-[500px] et md:h-[450px]) */}
          <div className="bg-slate-950/40 border border-slate-800/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[520px] sm:h-[480px] md:h-[450px]">
            
            <div className="flex flex-col md:flex-row p-8 md:p-12 gap-8 md:gap-16 flex-1 items-center overflow-hidden">
              
              <div className="flex-1 flex flex-col justify-center h-full min-w-0">
                <div key={activeItem.id} className="animate-fade-in-up">
                  <p className={`text-sm font-bold tracking-widest uppercase mb-3 ${activeItem.theme.text}`}>
                    {activeItem.category}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight truncate">
                    {activeItem.title}
                  </h3>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl line-clamp-3">
                    {activeItem.description[lang]}
                  </p>
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  <button
                    onClick={() => navigate(activeItem.link)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-1 ${activeItem.theme.bg} hover:brightness-110 shadow-lg`}
                  >
                    <FileText size={18} />
                    {lang === 'fr' ? 'Voir mes travaux' : 'View my work'}
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                  <span className="text-sm font-medium text-slate-500 border border-slate-700/50 bg-slate-800/80 px-3 py-1.5 rounded-lg whitespace-nowrap">
                    {activeItem.progressText[lang]}
                  </span>
                </div>
              </div>

              {/* IMAGE FIXE */}
              <div className="w-40 h-40 md:w-64 md:h-64 flex items-center justify-center relative shrink-0">
                <div className={`absolute inset-0 rounded-full blur-[80px] opacity-20 transition-colors duration-1000 ${activeItem.theme.bg}`}></div>
                <img 
                  key={`img-${activeItem.id}`}
                  src={activeItem.image} 
                  alt={activeItem.title}
                  className="w-full h-full object-contain relative z-10 animate-fade-in-up drop-shadow-2xl"
                />
              </div>
            </div>

            {/* ONGLETS SANS BARRE DE PROGRESSION */}
            <div className="grid grid-cols-2 bg-slate-900/40 border-t border-slate-800">
              {learningData.map((item, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative p-5 text-center transition-colors duration-500 ${
                      isActive ? item.theme.tabActive : 'text-slate-500 hover:bg-slate-800/30'
                    } ${idx === 0 ? 'border-r border-slate-800' : ''}`}
                  >
                    <p className={`font-bold text-sm md:text-base ${isActive ? 'text-white' : 'text-slate-500'}`}>
                      {item.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default CurrentLearning;