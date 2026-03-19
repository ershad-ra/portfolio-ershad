import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Composants
import ScrollToTop from './components/ScrollToTop';

// Pages - Blocs
import ProjectBloc1 from './pages/ProjectBloc1';
import ProjectBloc2 from './pages/ProjectBloc2';
import ProjectBloc3 from './pages/ProjectBloc3';
import ProjectBloc5 from './pages/ProjectBloc5';

// Pages - Projets 1 à 17
import Home from './pages/Home';
import Project01 from './pages/Project01';
import Project02 from './pages/Project02';
import Project03 from './pages/Project03';
import Project04 from './pages/Project04';
import Project05 from './pages/Project05';
import Project06 from './pages/Project06';
import Project07 from './pages/Project07';
import Project08 from './pages/Project08';
import Project09 from './pages/Project09';
import Project10 from './pages/Project10';
import Project11 from './pages/Project11';
import Project12 from './pages/Project12';
import Project13 from './pages/Project13';
import Project14 from './pages/Project14';
import Project15 from './pages/Project15';
import Project16 from './pages/Project16';
import Project17 from './pages/Project17';

// NOUVELLE PAGE : Détails de l'expérience
import ExperienceDetails from './pages/ExperienceDetails';

// Terraform & CCNP - In process
import TerraformCert from './pages/TerraformCert';
import CcnpCert from './pages/CcnpCert';

const App = () => {
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    document.title = "Ershad Ramezani's Portfolio";
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  return (
    <Router>
      <ScrollToTop />
      {/* Le conteneur principal */}
      <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200 relative">
        
        {/* Background elements */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
          
          <div 
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] rounded-full animate-pulse" 
            style={{ 
              animationDuration: '7s',
              background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(37,99,235,0) 70%)'
            }}
          ></div>
          
          <div 
            className="absolute top-[15%] right-[-10%] w-[40%] h-[40%] rounded-full animate-pulse" 
            style={{ 
              animationDuration: '5s', 
              animationDelay: '1s',
              background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(99,102,241,0) 70%)'
            }}
          ></div>

          <svg className="absolute inset-0 w-full h-full text-blue-400/[0.07] hidden md:block" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="40" cy="40" r="1.5" fill="currentColor" opacity="0.8" />
                <circle cx="0" cy="0" r="1.5" fill="currentColor" opacity="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network-grid)" />
          </svg>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950"></div>
        </div>

        {/* Routage vers chaque page */}
        <Routes>
          <Route path="/" element={<Home lang={lang} onToggleLanguage={toggleLanguage} />} />
          
          <Route path="/project/bloc-1" element={<ProjectBloc1 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/bloc-2" element={<ProjectBloc2 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/bloc-3" element={<ProjectBloc3 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/bloc-5" element={<ProjectBloc5 lang={lang} onToggleLanguage={toggleLanguage} />} />

          <Route path="/project/01" element={<Project01 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/02" element={<Project02 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/03" element={<Project03 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/04" element={<Project04 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/05" element={<Project05 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/06" element={<Project06 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/07" element={<Project07 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/08" element={<Project08 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/09" element={<Project09 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/10" element={<Project10 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/11" element={<Project11 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/12" element={<Project12 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/13" element={<Project13 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/14" element={<Project14 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/15" element={<Project15 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/16" element={<Project16 lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/project/17" element={<Project17 lang={lang} onToggleLanguage={toggleLanguage} />} />
          
          {/* === LA NOUVELLE ROUTE EST ICI === */}
          <Route path="/experience/details" element={<ExperienceDetails lang={lang} />} />

          {/* TERRAFORM et CCNP */}
          <Route path="/certification/terraform" element={<TerraformCert lang={lang} onToggleLanguage={toggleLanguage} />} />
          <Route path="/certification/ccnp" element={<CcnpCert lang={lang} onToggleLanguage={toggleLanguage} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;