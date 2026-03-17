import React, { useState, useEffect } from 'react'; // <-- AJOUT DE useState ICI
import { useNavigate } from 'react-router-dom';
// Ajout des icônes manquantes : Activity, LifeBuoy, Target, RefreshCw, ArrowUp
import { ChevronLeft, Mail, Activity, LifeBuoy, Target, RefreshCw, ArrowUp } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const projectBloc3Translations = {
  fr: {
    back: "retour au projet phare",
    nav: { tools: "Outils de MCO", itsm: "ITSM Jira", incident: "Résolution Incident", pra: "Test PRA", contact: "Me Contacter" },
    hero: {
      badge: "Bloc 3 - Certification EASI",
      titleStart: "Maintien en Condition ",
      titleHighlight: "Opérationnelle",
      desc: "Déploiement des outils de supervision, ITSM, automatisation et validation du plan de reprise d'activité (PRA).",
      by: "Par"
    },
    sec1: {
      title: "Mise en place des Outils de MCO (A3.1)",
      p1: "Pour assurer la résilience de Cloudnex, une suite complète d'outils de MCO a été déployée. VMware Aria Operations et Log Insight assurent une supervision proactive (monitoring) de l'infrastructure physique et virtuelle.",
      p2: "En parallèle, VMware Aria Automation permet de standardiser et d'accélérer la fourniture de ressources IT via des portails de self-service, réduisant les erreurs humaines et le Shadow IT."
    },
    sec2: {
      title: "Gestion des Services IT - Jira JSM",
      p1: "La centralisation des demandes s'est faite via Jira Service Management (JSM). Un projet ITSM complet a été configuré avec des workflows personnalisés pour catégoriser efficacement les incidents et les demandes de service.",
      p2: "Ce portail client sur-mesure offre aux utilisateurs de Cloudnex un point d'entrée unique, garantissant des temps de réponse (SLA) maîtrisés et un suivi transparent des tickets."
    },
    sec3: {
      title: "Résolution d'Incidents Complexes (A3.2)",
      p1: "Ce bloc démontre la capacité d'intervention face à une crise. Un cas concret de défaillance réseau a été documenté : la perte de connectivité des tunnels TEP (Tunnel Endpoint) dans l'environnement NSX.",
      p2: "La démarche de troubleshooting, allant de l'analyse des logs dans Aria à la vérification des tables de routage BGP, a permis d'isoler l'origine du problème (MTU mismatch) et de restaurer le flux de données critique."
    },
    sec4: {
      title: "Validation du Plan de Reprise (PRA)",
      p1: "Maintenir le SI en condition opérationnelle implique d'être préparé au pire. Un test réel de basculement (Failover) a été orchestré pour valider le Plan de Reprise d'Activité (PRA).",
      p2: "L'exercice a consisté à simuler la perte totale du site principal et à vérifier le redémarrage automatisé des machines virtuelles (VMs) critiques sur le site de secours, confirmant l'atteinte des objectifs RTO/RPO."
    },
    dl: {
      title: "Envie de lire le dossier complet ?",
      desc: "Pour des raisons de confidentialité et de propriété intellectuelle, le dossier complet n'est pas en libre accès. N'hésitez pas à me contacter directement pour échanger sur les méthodes de MCO appliquées à ce projet.",
      btn: "Me Contacter pour en savoir plus",
      file: ""
    },
    footer: "Projet de Fin d'Études - Master EASI."
  },
  en: {
    back: "back to capstone",
    nav: { tools: "MCO Tools", itsm: "Jira ITSM", incident: "Incident Resolution", pra: "DRP Testing", contact: "Contact Me" },
    hero: {
      badge: "Block 3 - EASI Certification",
      titleStart: "Maintaining IT ",
      titleHighlight: "Operations",
      desc: "Deploying monitoring tools, ITSM, automation, and validating the Disaster Recovery Plan (DRP).",
      by: "By"
    },
    sec1: {
      title: "Implementing Operations Tools (A3.1)",
      p1: "To ensure Cloudnex's resilience, a comprehensive suite of operations management tools was deployed. VMware Aria Operations and Log Insight provide proactive monitoring of the physical and virtual infrastructure.",
      p2: "In parallel, VMware Aria Automation standardizes and accelerates IT resource provisioning via self-service portals, reducing human errors and Shadow IT."
    },
    sec2: {
      title: "IT Service Management - Jira JSM",
      p1: "Request centralization was achieved using Jira Service Management (JSM). A complete ITSM project was configured with custom workflows to effectively categorize incidents and service requests.",
      p2: "This tailored client portal provides Cloudnex users with a single point of entry, ensuring controlled response times (SLAs) and transparent ticket tracking."
    },
    sec3: {
      title: "Complex Incident Resolution (A3.2)",
      p1: "This block demonstrates crisis intervention capabilities. A concrete case of network failure was documented: the loss of TEP (Tunnel Endpoint) connectivity in the NSX environment.",
      p2: "The troubleshooting process, from log analysis in Aria to checking BGP routing tables, isolated the root cause (MTU mismatch) and restored the critical data flow."
    },
    sec4: {
      title: "Disaster Recovery Validation (DRP)",
      p1: "Maintaining IT operations implies being prepared for the worst. A real failover test was orchestrated to validate the Disaster Recovery Plan (DRP).",
      p2: "The exercise involved simulating the total loss of the main site and verifying the automated restart of critical Virtual Machines (VMs) on the disaster recovery site, confirming the achievement of RTO/RPO objectives."
    },
    dl: {
      title: "Want to read the full report?",
      desc: "For confidentiality and intellectual property reasons, the full document is not publicly available. Feel free to contact me directly to discuss the operations management methodologies applied to this project.",
      btn: "Contact Me for more info",
      file: ""
    },
    footer: "Master's Capstone Project - EASI Certification."
  }
};

const ProjectBloc3 = ({lang, onToggleLanguage }) => {
  const navigate = useNavigate();
  const pt = projectBloc3Translations[lang] || projectBloc3Translations.fr;
  
  // AJOUT DE L'ÉTAT ICI
  const [showScrollTop, setShowScrollTop] = useState(false);

  // FUSION DES Useeffects
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300">
      <nav className="bg-slate-950/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            <div className="flex items-center space-x-4">
              <button onClick={() => navigate('/#capstone')} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
                <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">{pt.back}</span>
              </button>
            </div>

            <div className="hidden lg:flex space-x-8">
              <a href="#hld" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.tools}</a>
              <a href="#sdn" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.itsm}</a>
              <a href="#pra" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.incident}</a>
              <a href="#rse" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.pra}</a>
            </div>

            <div className="flex items-center">
              <button onClick={() => navigate('/#contact')} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-500 transition flex items-center space-x-2 shadow-sm shadow-blue-900/30">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">{pt.nav.contact}</span>
              </button>
              <button onClick={onToggleLanguage} className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-sm font-bold text-white transition-colors border border-slate-700/50 ml-3">
                {lang === 'fr' ? 'EN' : 'FR'}
              </button>
            </div>

          </div>
        </div>
      </nav>

      <section className="bg-slate-900 text-white pt-20 pb-24 lg:pt-32 lg:pb-40 px-4 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.95)), url('https://assets.persys.fr/Portfolio/Images/bloc3/aria%20suite%20comme%20la%20supervision.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold mb-6 border border-emerald-500/30">{pt.hero.badge}</span>
          </FadeIn>
          <FadeIn delay={100} direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">{pt.hero.titleStart} <span className="text-emerald-400">{pt.hero.titleHighlight}</span></h1>
          </FadeIn>
          <FadeIn delay={200} direction="up">
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">{pt.hero.desc}</p>
          </FadeIn>
          <FadeIn delay={300} direction="up">
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div className="text-slate-400">{pt.hero.by} <span className="text-white font-medium">Ershad RAMEZANI</span></div>
            </div>
          </FadeIn>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <section id="hld" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 flex flex-col gap-4">
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
              <img src="https://assets.persys.fr/Portfolio/Images/bloc3/tableau%20de%20bord%20personalis%C3%A9e.png" alt="Aria Dashboard" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
              <img src="https://assets.persys.fr/Portfolio/Images/bloc3/aria%20automation.png" alt="Aria Automation" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-xl text-emerald-400 mb-6 border border-emerald-500/20"><Activity className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec1.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec1.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec1.p2}</p>
            </div>
          </FadeIn>
        </section>

        <section id="sdn" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl text-blue-400 mb-6 border border-blue-500/20"><LifeBuoy className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec2.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec2.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec2.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="flex flex-col gap-4">
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
              <img src="https://assets.persys.fr/Portfolio/Images/bloc3/support%20client%20CloudNex%20sur%20jira%20jsm.png" alt="Jira Client Portal" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
              <img src="https://assets.persys.fr/Portfolio/Images/bloc3/workflow%20personalis%C3%A9%20dans%20jira%20jsm.png" alt="Jira Workflow" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
          </FadeIn>
        </section>

        <section id="pra" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc3/rappel%20du%20context%20de%20l'incident%20concernant%20reseau%20teps%20dans%20nsx.png" alt="NSX TEP Incident" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-red-500/10 rounded-xl text-red-400 mb-6 border border-red-500/20"><Target className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec3.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec3.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec3.p2}</p>
            </div>
          </FadeIn>
        </section>

        <section id="rse" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-xl text-amber-400 mb-6 border border-amber-500/20"><RefreshCw className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec4.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec4.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec4.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc3/test%20du%20plan%20de%20reprise%20d'activit%C3%A9%20pra.png" alt="PRA / DRP Test" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
        </section>
      </main>

      <section id="download" className="bg-slate-900 border-y border-slate-800/80 py-20 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{pt.dl.title}</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">{pt.dl.desc}</p>
            <button onClick={() => navigate('/#contact')} className="inline-flex bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 items-center space-x-3 mx-auto">
              <Mail className="h-6 w-6" />
              <span>{pt.dl.btn}</span>
            </button>
            {pt.dl.file && <p className="text-sm text-slate-500 mt-4">{pt.dl.file}</p>}
          </FadeIn>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-8 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Ershad RAMEZANI. Tous droits réservés.</p>
          <p className="text-sm mt-2 opacity-60">{pt.footer}</p>
        </div>
      </footer>
      
      {/* AJOUT DU BOUTON ICI */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default ProjectBloc3;