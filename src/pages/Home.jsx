import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

import { translations, profileData, experienceData, educationData, projectsData } from '../data/data';

// Import de vos composants
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TargetRoles from '../components/TargetRoles'; // <-- IMPORT AJOUTÉ ICI
import About from '../components/About';
import Timeline from '../components/Timeline';
import CurrentLearning from '../components/CurrentLearning';
import Capstone from '../components/Capstone';
import ProjectsGrid from '../components/ProjectsGrid';
import Contact from '../components/Contact';

const Home = ({ lang, onToggleLanguage }) => {
  const t = translations[lang];
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Gestion du scroll
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Navigation dynamique des projets avec sauvegarde de l'historique
  const handleProjectNavigation = (project) => {
    // On sauvegarde l'ancre #projects dans l'historique avant de naviguer
    window.history.replaceState(null, '', '/#projects');
    
    const idStr = project.id.toString().padStart(2, '0');
    navigate(`/project/${idStr}`);
  };

  return (
    <>
      <Navbar 
        scrolled={scrolled} 
        scrollToTop={scrollToTop} 
        t={t} 
        lang={lang} // J'ai rajouté "lang={lang}" car le Navbar en a besoin pour afficher 'EN' ou 'FR'
        onToggleLanguage={onToggleLanguage} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      <main className="relative z-10 pt-20 pb-32">
        <Hero t={t} lang={lang} />
        
        {/* NOUVELLE SECTION PLACÉE ICI */}
        <TargetRoles lang={lang} />
        
        <About t={t} lang={lang} profileData={profileData} />
        <Timeline t={t} lang={lang} experienceData={experienceData} educationData={educationData} />
        
        {/* Projets et Certifications en cours */}
        <CurrentLearning lang={lang} />
        
        <Capstone t={t} navigate={navigate} />
        
        {/* On s'assure que ProjectsGrid reçoit bien la fonction mise à jour */}
        <ProjectsGrid t={t} lang={lang} projectsData={projectsData} handleProjectNavigation={handleProjectNavigation} />
        
        <Contact t={t} />
      </main>

      <footer className="bg-slate-950 py-8 border-t border-slate-800/50 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-500 font-bold text-xs mb-4 border border-slate-800">ER</div>
          <p className="text-slate-500 text-sm">{t.footer}</p>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Home;