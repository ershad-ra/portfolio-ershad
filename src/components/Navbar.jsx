import React, { useRef, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Navbar = ({ scrolled, scrollToTop, t, lang, onToggleLanguage, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  // 1. We create a reference to attach to our navigation container
  const navRef = useRef(null);

  // 2. We add an effect to listen for clicks outside of that reference
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open AND the click happened outside the 'navRef' element
      if (isMobileMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Listen for mouse clicks
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  const NavLink = ({ href, children }) => (
    <a 
      href={href} 
      className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
      onClick={(e) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
        setIsMobileMenuOpen(false);
      }}
    >
      {children}
    </a>
  );

  return (
    // 3. We attach the navRef to the main <nav> element
    <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-1' : 'bg-transparent py-3'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO & NOM */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              window.history.pushState(null, '', '/'); 
              setIsMobileMenuOpen(false); // Also close menu if logo is clicked on mobile
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">ER</div>
            <span className="text-lg font-semibold tracking-tight text-white hidden sm:block whitespace-nowrap group-hover:text-blue-400 transition-colors">
              Ershad RAMEZANI
            </span>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* MENU DESKTOP */}
            <div className="hidden md:flex items-center gap-5 lg:gap-6">
              <NavLink href="#about">{t.nav?.about || 'Expertise'}</NavLink>
              <NavLink href="#experience">{t.nav?.experience || (lang === 'fr' ? 'Parcours' : 'Experience')}</NavLink>
              <NavLink href="#current-learning">{t.nav?.learning || 'Certifications'}</NavLink>
              <NavLink href="#capstone">{t.nav?.capstone || 'Capstone'}</NavLink>
              <NavLink href="#projects">{t.nav?.projects || (lang === 'fr' ? 'Réalisations' : 'Projects')}</NavLink>
              <NavLink href="#contact">{t.nav?.contact || 'Contact'}</NavLink>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 md:border-l md:border-slate-800 md:pl-6 md:ml-2">
              <a href={t.nav?.resumeLink || "#"} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg text-sm font-semibold bg-white text-slate-900 hover:bg-slate-200 transition-colors flex items-center gap-2">
                <FileText size={16} />
                <span className="hidden sm:inline">{t.nav?.resume || 'CV'}</span>
              </a>
              <button onClick={() => {
                onToggleLanguage();
                setIsMobileMenuOpen(false); // Close menu when changing language
              }} className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-sm font-bold text-white transition-colors border border-slate-700/50">
                {t.nav?.language || (lang === 'fr' ? 'EN' : 'FR')}
              </button>
              <button className="md:hidden p-2 text-slate-400 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute top-full left-0 w-full shadow-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            <NavLink href="#about">{t.nav?.about || 'Expertise'}</NavLink>
            <NavLink href="#experience">{t.nav?.experience || (lang === 'fr' ? 'Parcours' : 'Experience')}</NavLink>
            <NavLink href="#current-learning">{t.nav?.learning || 'Certifications'}</NavLink>
            <NavLink href="#capstone">{t.nav?.capstone || 'Capstone'}</NavLink>
            <NavLink href="#projects">{t.nav?.projects || (lang === 'fr' ? 'Réalisations' : 'Projects')}</NavLink>
            <NavLink href="#contact">{t.nav?.contact || 'Contact'}</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;