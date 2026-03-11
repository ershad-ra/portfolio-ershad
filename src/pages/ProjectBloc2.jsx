import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Mail, Calendar, BarChart, Target, Scale } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const projectBloc2Translations = {
  fr: {
    back: "retour au projet phare",
    nav: { cadrage: "Planification", gantt: "Gantt", avancement: "Jalons", arbitrage: "Arbitrage", contact: "Me Contacter" },
    hero: {
      badge: "Bloc 2 - Certification EASI",
      titleStart: "Gérer un ",
      titleHighlight: "Projet Informatique",
      desc: "Cadrage, planification, pilotage par jalons et arbitrage stratégique pour le déploiement de la plateforme VCF.",
      by: "Par"
    },
    sec1: {
      title: "Cadrage & Planification Initiale (A2.1)",
      p1: "La réussite de la modernisation du datacenter repose sur un cadrage rigoureux. Cette phase a permis de formaliser les attendus, le périmètre fonctionnel et le dimensionnement global du projet selon le triangle QCD (Qualité, Coût, Délai).",
      p2: "Une planification détaillée a été établie, divisant le déploiement de VMware Cloud Foundation en phases logiques (Audit, Design, Build, Run), permettant une visibilité claire sur le chemin critique du projet."
    },
    sec2: {
      title: "Diagramme de Gantt & Suivi (A2.2)",
      p1: "Pour orchestrer les différentes équipes et garantir le respect des délais, un diagramme de Gantt complet a été élaboré. Il illustre les dépendances entre les tâches techniques complexes de l'intégration réseau (NSX) et calcul (vSphere).",
      p2: "Ce suivi temporel permet l'allocation optimale des ressources (ingénieurs, architectes, prestataires) tout en prévoyant des marges de manœuvre pour l'absorption des risques."
    },
    sec3: {
      title: "Rapports de Jalons & Avancement (A2.3)",
      p1: "Le pilotage opérationnel s'effectue via des indicateurs clés de performance (KPI) et des tableaux de bord d'avancement. À chaque étape critique du projet, un rapport de jalon est généré.",
      p2: "Ces rapports permettent de mesurer l'état d'avancement réel par rapport au prévisionnel, de valider la qualité des livrables (ex: HLD validé) et d'assurer une communication transparente avec le comité de pilotage (COPIL)."
    },
    sec4: {
      title: "Analyse des Écarts & Arbitrage",
      p1: "Face aux aléas inhérents à tout projet d'infrastructure majeur, des processus de gestion des risques ont été documentés. La présentation d'un cas d'arbitrage réel montre l'identification d'un écart (dérapage budgétaire ou retard technique).",
      p2: "L'analyse des écarts a conduit à des prises de décision stratégiques, nécessitant des compromis évalués et validés par la direction pour remettre le projet sur les rails sans compromettre la sécurité globale."
    },
    dl: {
      title: "Envie de lire le dossier complet ?",
      desc: "Pour des raisons de confidentialité et de propriété intellectuelle, le dossier complet n'est pas en libre accès. N'hésitez pas à me contacter directement pour échanger sur les méthodes de gestion appliquées à ce projet.",
      btn: "Me Contacter pour en savoir plus",
      file: ""
    },
    footer: "Projet de Fin d'Études - Master EASI."
  },
  en: {
    back: "back to capstone",
    nav: { cadrage: "Planning", gantt: "Gantt", avancement: "Milestones", arbitrage: "Trade-offs", contact: "Contact Me" },
    hero: {
      badge: "Block 2 - EASI Certification",
      titleStart: "Managing an ",
      titleHighlight: "IT Project",
      desc: "Scoping, scheduling, milestone-based steering, and strategic trade-offs for the VCF platform deployment.",
      by: "By"
    },
    sec1: {
      title: "Project Scoping & Initial Planning (A2.1)",
      p1: "The success of the datacenter modernization relies on rigorous scoping. This phase formalized the deliverables, functional scope, and overall project sizing according to the QCD triangle (Quality, Cost, Deadline).",
      p2: "A detailed schedule was established, dividing the VMware Cloud Foundation deployment into logical phases (Audit, Design, Build, Run), providing clear visibility on the project's critical path."
    },
    sec2: {
      title: "Gantt Chart & Tracking (A2.2)",
      p1: "To orchestrate the various teams and ensure deadlines are met, a comprehensive Gantt chart was developed. It illustrates the dependencies between complex technical tasks of network (NSX) and compute (vSphere).",
      p2: "This timeline tracking enables optimal resource allocation (engineers, architects, contractors) while providing buffer times for risk absorption."
    },
    sec3: {
      title: "Milestone Reports & Progress (A2.3)",
      p1: "Operational steering is carried out via Key Performance Indicators (KPIs) and progress dashboards. At each critical stage of the project, a milestone report is generated.",
      p2: "These reports help measure actual progress against forecasts, validate the quality of deliverables (e.g., approved HLD), and ensure transparent communication with the steering committee (SteerCo)."
    },
    sec4: {
      title: "Gap Analysis & Strategic Trade-offs",
      p1: "Faced with the uncertainties inherent in any major infrastructure project, risk management processes were documented. The presentation of an arbitration case highlights the identification of a gap (budget overrun or technical delay).",
      p2: "The gap analysis led to strategic decision-making, requiring compromises evaluated and validated by management to get the project back on track without compromising overall security."
    },
    dl: {
      title: "Want to read the full report?",
      desc: "For confidentiality and intellectual property reasons, the full document is not publicly available. Feel free to contact me directly to discuss the management methodologies applied to this project.",
      btn: "Contact Me for more info",
      file: ""
    },
    footer: "Master's Capstone Project - EASI Certification."
  }
};

const ProjectBloc2 = ({lang, onToggleLanguage, onContactClick }) => {
  const navigate = useNavigate();
  const pt = projectBloc2Translations[lang] || projectBloc2Translations.fr;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300">
      <nav className="bg-slate-950/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <button onClick={() => navigate('/')} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
                <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">{pt.back}</span>
              </button>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a href="#cadrage" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.cadrage}</a>
              <a href="#gantt" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.gantt}</a>
              <a href="#avancement" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.avancement}</a>
              <a href="#arbitrage" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.arbitrage}</a>
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

      <section className="bg-slate-900 text-white pt-20 pb-24 lg:pt-32 lg:pb-40 px-4 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.95)), url('https://assets.persys.fr/Portfolio/Images/bloc2/diagramme%20gantt.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6 border border-indigo-500/30">{pt.hero.badge}</span>
          </FadeIn>
          <FadeIn delay={100} direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">{pt.hero.titleStart} <span className="text-indigo-400">{pt.hero.titleHighlight}</span></h1>
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
        <section id="cadrage" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 flex flex-col gap-4">
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
              <img src="https://assets.persys.fr/Portfolio/Images/bloc2/planning%20du%20projet.png" alt="Planning du projet" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
              <img src="https://assets.persys.fr/Portfolio/Images/bloc2/planning%20du%20projet%202.png" alt="Planning détaillé" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-xl text-indigo-400 mb-6 border border-indigo-500/20"><Calendar className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec1.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec1.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec1.p2}</p>
            </div>
          </FadeIn>
        </section>

        <section id="gantt" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-xl text-emerald-400 mb-6 border border-emerald-500/20"><BarChart className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec2.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec2.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec2.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc2/diagramme%20gantt.png" alt="Diagramme de Gantt" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
        </section>

        <section id="avancement" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 flex flex-col gap-4">
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
              <img src="https://assets.persys.fr/Portfolio/Images/bloc2/rapport%20de%20jalon.png" alt="Rapport de jalon" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block bg-white" />
            </div>
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
              <img src="https://assets.persys.fr/Portfolio/Images/bloc2/avancement.png" alt="Avancement" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl text-blue-400 mb-6 border border-blue-500/20"><Target className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec3.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec3.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec3.p2}</p>
            </div>
          </FadeIn>
        </section>

        <section id="arbitrage" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-xl text-amber-400 mb-6 border border-amber-500/20"><Scale className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec4.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec4.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec4.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc2/presentation%20d'un%20cas%20d'arbitrage%20-%20analyse%20des%20%C3%A9carts.png" alt="Analyse des écarts" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
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
    </div>
  );
};

export default ProjectBloc2;