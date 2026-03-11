import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { translations, profileData, experienceData, educationData, projectsData } from '../data/data';
import { 
  Menu, X, FileText, Globe, Cpu, Briefcase, GraduationCap, Target, ArrowRight, Settings, Layers, Mail, Linkedin, Github, Award, ExternalLink, ArrowUp, UserCheck, Compass 
} from 'lucide-react';

const Home = ({ lang, onToggleLanguage }) => {
  const t = translations[lang];
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Gérer le scroll lors du retour sur la page avec une ancre (ex: /#contact)
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

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Nouvelle logique de navigation avec le Routeur
const handleProjectNavigation = (project) => {
    // Cette ligne convertit l'ID (ex: 5) en chaîne avec un zéro devant (ex: "05")
    const idStr = project.id.toString().padStart(2, '0');
    navigate(`/project/${idStr}`);
  };

  const NavLink = ({ href, children }) => (
    <a 
      href={href} 
      className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
      onClick={(e) => {
        // Si on clique sur un lien du menu, on scroll de manière fluide
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href); // Met à jour l'URL sans recharger
        }
        closeMobileMenu();
      }}
    >
      {children}
    </a>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-1' : 'bg-transparent py-3'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">ER</div>
              <span className="text-lg font-semibold tracking-tight text-white hidden sm:block">Ershad Ramezani</span>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="hidden md:flex items-center gap-6">
                <NavLink href="#about">{t.nav.profile}</NavLink>
                <NavLink href="#experience">{t.nav.experience}</NavLink>
                <NavLink href="#capstone">{t.nav.capstone}</NavLink>
                <NavLink href="#projects">{t.nav.projects}</NavLink>
                <NavLink href="#contact">{t.nav.contact}</NavLink>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 md:border-l md:border-slate-800 md:pl-6 md:ml-2">
                <a href={t.nav.resumeLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg text-sm font-semibold bg-white text-slate-900 hover:bg-slate-200 transition-colors flex items-center gap-2">
                  <FileText size={16} />
                  <span className="hidden sm:inline">{t.nav.resume}</span>
                </a>
                <button onClick={onToggleLanguage} className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-sm font-bold text-white transition-colors border border-slate-700/50">
                  {t.nav.language}
                </button>
                <button className="md:hidden p-2 text-slate-400 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute top-full left-0 w-full shadow-xl">
            <div className="px-6 py-4 flex flex-col gap-2">
              <NavLink href="#about">{t.nav.profile}</NavLink>
              <NavLink href="#experience">{t.nav.experience}</NavLink>
              <NavLink href="#capstone">{t.nav.capstone}</NavLink>
              <NavLink href="#projects">{t.nav.projects}</NavLink>
              <NavLink href="#contact">{t.nav.contact}</NavLink>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-20 pb-32">
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex flex-col pt-8 lg:pt-0">
          <div className="flex-1 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row justify-between pt-12 pb-0 gap-8 border-b border-slate-800/40">
            <div className="flex-1 max-w-3xl flex flex-col justify-center pb-8 lg:pb-16">
              <FadeIn delay={100} direction="up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 mt-4 lg:mt-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider">{t.hero.status}</span>
                </div>
              </FadeIn>
              
              <FadeIn delay={200} direction="up">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  {t.hero.greeting}
                </h1>
              </FadeIn>
              
              <FadeIn delay={300} direction="up">
                <h2 className="text-2xl sm:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-6">
                  {t.hero.role}
                </h2>
              </FadeIn>
              
              <FadeIn delay={400} direction="up">
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-10">
                  {t.hero.description}
                </p>
              </FadeIn>

              <FadeIn delay={500} direction="up">
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 mb-0">
                  <a 
                    href="https://www.credly.com/badges/8a9c0877-0c28-4b90-977b-3a3963753091" 
                    target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all w-full sm:w-auto"
                  >
                    <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                      <Award className="text-amber-500" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-slate-500 font-semibold mb-0.5">{t.hero.certifications}</p>
                      <p className="font-semibold text-slate-200 text-sm flex items-center gap-1">
                        AWS Solutions Architect <ExternalLink size={12} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.credly.com/badges/cc18fb0c-6597-485b-ac93-903aed039c4d"
                    target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all w-full sm:w-auto"
                  >
                    <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                      <Award className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-slate-500 font-semibold mb-0.5">{t.hero.certifications}</p>
                      <p className="font-semibold text-slate-200 text-sm flex items-center gap-1">
                        Cisco CCNA <ExternalLink size={12} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                      </p>
                    </div>
                  </a>
                </div>
              </FadeIn>
            </div>

            <div className="flex-1 relative flex justify-center lg:justify-end items-end w-full lg:pl-10 mt-8 lg:mt-0">
              <FadeIn delay={200} direction="left" className="relative z-10 w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[340px] flex justify-center items-end mt-auto h-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-blue-600/20 to-indigo-500/20 blur-[60px] rounded-full -z-10"></div>
                <img 
                  src="https://assets.persys.fr/Portfolio/Resumes - CVs/Ershad_Ramezani.png" 
                  alt="Ershad Ramezani" 
                  className="w-full h-auto object-bottom object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] block"
                  style={{ marginBottom: "-1px" }}
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* PROFILE & SKILLS SECTION */}
                <section id="about" className="py-24 bg-slate-900/30 border-t border-slate-800/50">
                  <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    
                    <FadeIn direction="up">
                      <div className="mb-12">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
                          {t.aboutSection.badge}
                        </span>
                        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
                          {t.aboutSection.titleStart}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                            {t.aboutSection.titleHighlight}
                          </span>
                        </h2>
                        <p className="text-base text-slate-400 max-w-2xl">{t.aboutSection.subtitle}</p>
                      </div>
                    </FadeIn>

                    {/* TECH STACK GRID (2x2) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14">
                      {profileData.skills.map((skill, i) => (
                        <FadeIn key={skill.id} delay={i * 100} direction="up" className="h-full">
                          <div className="group flex flex-col p-6 sm:p-7 bg-slate-900/40 border border-slate-800/60 rounded-2xl hover:bg-slate-900/80 hover:border-slate-700/80 transition-all duration-300 h-full">
                            
                            {/* Card Header */}
                            <div className="flex items-center gap-4 mb-6">
                              <div className={`p-2.5 rounded-xl bg-slate-800/50 ${skill.color} group-hover:scale-105 transition-transform duration-300`}>
                                <skill.icon size={22} strokeWidth={2} />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-slate-200 tracking-tight leading-tight">{skill[lang].category}</h3>
                                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">{skill[lang].subtitle}</p>
                              </div>
                            </div>

                            {/* Tool Pills */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {skill[lang].tools.map((tool, index) => (
                                <span 
                                  key={index} 
                                  className="px-2.5 py-1 text-[11px] sm:text-xs font-medium text-slate-300 bg-slate-800/30 border border-slate-700/40 rounded-md hover:text-white hover:bg-slate-800 transition-colors duration-200 cursor-default"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </FadeIn>
                      ))}
                    </div>

                    {/* PERSONAL PROFILE (Languages, Atouts, Hobbies) */}
                    {/* LIGNE DE SÉPARATION HORIZONTALE */}
                    <FadeIn delay={200} direction="up">
                      <div className="w-full flex items-center justify-center my-14 opacity-40">
                        <div className="h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent w-full max-w-4xl"></div>
                      </div>
                    </FadeIn>

                    {/* PERSONAL PROFILE (Languages, Atouts, Hobbies) */}
                    <FadeIn delay={300} direction="up">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        {/* 1. Carte Langues */}
                        <div className="h-fit bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl hover:bg-slate-900/60 hover:border-slate-700/60 transition-all duration-300 shadow-lg">
                          <div className="flex items-center gap-3 mb-6">
                            <Globe size={20} className="text-blue-400" />
                            <h3 className="text-base font-bold text-white tracking-wide">{t.aboutSection.languagesTitle}</h3>
                          </div>
                          <div className="space-y-5">
                            {profileData.languages[lang].map((l, idx) => (
                              <div key={idx} className="flex flex-col gap-1">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-slate-200">{l.name}</span>
                                    {/* Badge C1 conditionnel */}
                                    {l.cert && (
                                      <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] font-bold rounded border border-blue-500/30">
                                        {l.cert}
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">{l.code}</span>
                                </div>
                                <span className="text-xs text-slate-400">{l.level}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 2. Carte Atouts (Avec barres de progression tech) */}
                        <div className="h-fit bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl hover:bg-slate-900/60 hover:border-slate-700/60 transition-all duration-300 shadow-lg relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full pointer-events-none"></div>
                          <div className="flex items-center gap-3 mb-6 relative z-10">
                            <UserCheck size={20} className="text-emerald-400" />
                            <h3 className="text-base font-bold text-white tracking-wide">{t.aboutSection.softSkillsTitle}</h3>
                          </div>
                          <div className="space-y-4 relative z-10">
                            {profileData.softSkills[lang].map((skill, idx) => (
                              <div key={idx} className="flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                                {/* Jauge visuelle (5 tirets inclinés) */}
                                <div className="flex gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <div 
                                      key={i} 
                                      className={`w-3.5 h-1.5 rounded-sm transform skew-x-[-15deg] transition-colors duration-500 ${
                                        i < skill.level ? 'bg-emerald-400' : 'bg-slate-800'
                                      }`}
                                    ></div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 3. Carte Hobbies */}
                        <div className="h-fit bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl hover:bg-slate-900/60 hover:border-slate-700/60 transition-all duration-300 shadow-lg relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[50px] rounded-full pointer-events-none"></div>
                          <div className="flex items-center gap-3 mb-6 relative z-10">
                            <Compass size={20} className="text-amber-400" />
                            <h3 className="text-base font-bold text-white tracking-wide">{t.aboutSection.hobbiesTitle}</h3>
                          </div>
                          <div className="space-y-5 relative z-10">
                            {profileData.hobbies[lang].map((hobby, idx) => (
                              <div key={idx} className="flex items-center gap-4">
                                <div className="p-2 bg-slate-800/50 rounded-lg text-amber-400 border border-slate-700/50">
                                  <hobby.icon size={16} />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold text-slate-200">{hobby.label}</span>
                                  <span className="text-xs text-slate-400 mt-0.5">{hobby.desc}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </FadeIn>

                  </div>
                </section>

        {/* TIMELINE SECTION */}
        <section id="experience" className="py-24 border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn direction="up">
              <div className="mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-wider mb-4 border border-indigo-500/20">
                  {t.timelineSection.badge}
                </span>
                <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
                  {t.timelineSection.titleStart}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    {t.timelineSection.titleHighlight}
                  </span>
                </h2>
                <p className="text-base text-slate-400 max-w-2xl">{t.timelineSection.subtitle}</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <FadeIn direction="up">
                  <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                      <Briefcase size={20} />
                    </div>
                    {t.timelineSection.expTitle}
                  </h3>
                </FadeIn>
                <div className="space-y-10 pl-4 border-l-2 border-slate-800 ml-3">
                  {experienceData[lang].map((exp, i) => (
                    <FadeIn key={i} delay={i * 150} direction="up">
                      <div className="relative pl-6">
                        <div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-slate-950 border-4 border-blue-500"></div>
                        <span className="text-sm font-semibold text-blue-400 mb-1 block">{exp.year}</span>
                        <h4 className="text-lg font-bold text-slate-200">{exp.role}</h4>
                        <span className="text-sm text-slate-500 mb-4 block">{exp.company}</span>
                        <p className="text-slate-400 mb-4 leading-relaxed text-sm">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.details.map((detail, j) => {
                            const parts = detail.split(' : ');
                            const isEnvironment = parts[0] === 'Environnement' || parts[0] === 'Environment';

                            // Si c'est la ligne "Environnement", on crée un design de badges
                            if (isEnvironment) {
                              // On sépare les outils par la virgule et on retire le point final éventuel
                              const tools = parts.slice(1).join(' : ').replace('.', '').split(', ');
                              
                              return (
                                <li key={j} className="pt-4 mt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                                    {parts[0]}
                                  </span>
                                  {tools.map((tool, idx) => (
                                    <span 
                                      key={idx} 
                                      className="px-2 py-1 text-[10px] font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-md"
                                    >
                                      {tool.trim()}
                                    </span>
                                  ))}
                                </li>
                              );
                            }

                            // Design classique pour les autres lignes
                            return (
                              <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                                <span className="text-blue-500/50 mt-0.5">•</span>
                                <span>
                                  {parts.length > 1 ? (
                                    <>
                                      <strong className="text-slate-200 font-semibold">{parts[0]} : </strong>
                                      {parts.slice(1).join(' : ')}
                                    </>
                                  ) : (
                                    detail
                                  )}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

              <div>
                <FadeIn direction="up">
                  <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                      <GraduationCap size={20} />
                    </div>
                    {t.timelineSection.eduTitle}
                  </h3>
                </FadeIn>
                <div className="space-y-10 pl-4 border-l-2 border-slate-800 ml-3">
                  {educationData[lang].map((edu, i) => (
                    <FadeIn key={i} delay={i * 150} direction="up">
                      <div className="relative pl-6">
                        <div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-slate-950 border-4 border-slate-600"></div>
                        <span className="text-sm font-semibold text-slate-500 mb-1 block">{edu.year}</span>
                        <h4 className="text-base font-bold text-slate-200">{edu.degree}</h4>
                        <span className="text-sm text-slate-400 block">{edu.school}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAPSTONE PROJECT SECTION */}
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

                    {/* Blocs utilisant navigate */}
                    <div 
                      onClick={() => navigate('/project/bloc-1')}
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

                    <div 
                      onClick={() => navigate('/project/bloc-2')}
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

                    <div 
                      onClick={() => navigate('/project/bloc-3')}
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

                    <div 
                      onClick={() => navigate('/project/bloc-5')}
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

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 bg-slate-900/30 border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <FadeIn direction="up">
              <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-lg">
                <div className="inline-flex p-4 bg-blue-500/10 rounded-2xl mb-6">
                  <Mail className="h-8 w-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
                <p className="text-slate-400 mb-10 max-w-2xl mx-auto">{t.contact.subtitle}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a href="mailto:ershad.ra@gmail.com" className="flex flex-col items-center p-6 bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 rounded-2xl transition-all group">
                    <Mail className="text-slate-400 group-hover:text-blue-400 mb-3 transition-colors" size={28} />
                    <span className="text-sm font-semibold text-slate-200 mb-1">{t.contact.email}</span>
                    <span className="text-xs text-slate-500">ershad.ra@gmail.com</span>
                  </a>

                  <a href="https://www.linkedin.com/in/ershad-ramezani/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 rounded-2xl transition-all group">
                    <Linkedin className="text-slate-400 group-hover:text-blue-400 mb-3 transition-colors" size={28} />
                    <span className="text-sm font-semibold text-slate-200 mb-1">{t.contact.linkedin}</span>
                    <span className="text-xs text-slate-500">ershad-ramezani</span>
                  </a>

                  <a href="https://github.com/ershad-ra" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 rounded-2xl transition-all group">
                    <Github className="text-slate-400 group-hover:text-blue-400 mb-3 transition-colors" size={28} />
                    <span className="text-sm font-semibold text-slate-200 mb-1">{t.contact.github}</span>
                    <span className="text-xs text-slate-500">ershad-ra</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
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