import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Download, LayoutDashboard, ShieldCheck, Network, CheckCircle, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const project1Translations = {
  fr: {
    back: "retour au portfolio",
    nav: { arch: "Architecture", failover: "ASA Failover", switches: "Core Switches", validation: "Validation", pdf: "PDF Complet" },
    hero: {
      badge: "Projet d'Ingénierie Réseau",
      titleStart: "Redondance d'une ",
      titleHighlight: "Infrastructure 2 Tiers",
      desc: "Mise en place d'une haute disponibilité via Active/Standby Failover sur les pare-feux Cisco ASA 5506X et agrégation de liens LACP.",
      by: "Par"
    },
    sec1: {
      title: "Architecture Réseau (2 & 3 Tiers)",
      p1: "Une infrastructure redondée est essentielle pour assurer la continuité des services en cas de panne matérielle. Ce projet explore le passage d'un modèle traditionnel en 3 tiers vers un modèle en 2 tiers (Collapsed Core Architecture).",
      p2: "En combinant les couches centrale (Core) et de distribution, nous réduisons la complexité et les coûts tout en maintenant une haute fiabilité grâce à la mise en pile de commutateurs et au failover actif/passif.",
      l1: "Basculement au niveau des appareils (ASA)",
      l2: "Mise en pile des commutateurs Catalyst 3750"
    },
    sec2: {
      title: "Le Basculement sur les ASA 5506X",
      p1: "Le cœur de la sécurité de notre infrastructure repose sur deux pare-feux Cisco ASA 5506X configurés en mode Active/Standby Failover.",
      p2: "L'unité active gère le trafic, tandis que l'unité standby surveille son état. En cas de défaillance (matérielle ou de lien), le basculement est automatique. La réplication \"Stateful\" assure que les connexions en cours ne sont pas interrompues.",
      link: "Voir les étapes de configuration"
    },
    sec3: {
      title: "Switches Cœurs & Multi-Chassis EtherChannel",
      p1: "Pour assurer une liaison robuste entre les pare-feux et le réseau interne, nous avons utilisé des commutateurs Catalyst 3750 mis en pile (Stacking).",
      p2: "Cette configuration nous permet de créer un Multi-Chassis EtherChannel en utilisant le protocole LACP. Même si l'un des commutateurs cœurs tombe en panne, le trafic continue de transiter de manière fluide vers le commutateur restant."
    },
    sec4: {
      title: "Validation & Tests de Résilience",
      p1: "La fiabilité de l'infrastructure a été vérifiée par de multiples tests en conditions réelles, illustrant la robustesse du failover aux niveaux matériel et interface.",
      p2: "Nous avons simulé des pannes sur les liaisons LACP (`Fa1/0/1`, `Fa2/0/1`), vérifié le maintien du ping continu, et testé le Static Route Tracking vers le routeur FAI de secours. L'infrastructure redirige automatiquement le trafic, confirmant une tolérance aux pannes optimale sans interruption de service."
    },
    dl: {
      title: "Envie d'aller plus loin ?",
      desc: "Le document complet inclut les commandes détaillées (CLI), la configuration du \"Static Route Tracking\" pour les liens FAI, et toutes les étapes de dépannage (troubleshooting).",
      btn: "Télécharger le PDF Complet",
      file: "Fichier: 01. Cluster Failover ASA 5506x.pdf (34 pages)"
    },
    footer: "Projet d'Infrastructure Réseau et Haute Disponibilité."
  },
  en: {
    back: "back to portfolio",
    nav: { arch: "Architecture", failover: "ASA Failover", switches: "Core Switches", validation: "Validation", pdf: "Full PDF" },
    hero: {
      badge: "Network Engineering Project",
      titleStart: "Redundancy of a ",
      titleHighlight: "2-Tier Infrastructure",
      desc: "Implementing high availability via Active/Standby Failover on Cisco ASA 5506X firewalls and LACP link aggregation.",
      by: "By"
    },
    sec1: {
      title: "Network Architecture (2 & 3 Tiers)",
      p1: "A redundant infrastructure is essential to ensure service continuity in the event of a hardware failure. This project explores the transition from a traditional 3-tier model to a 2-tier model (Collapsed Core Architecture).",
      p2: "By combining the core and distribution layers, we reduce complexity and costs while maintaining high reliability through switch stacking and active/passive failover.",
      l1: "Device-level failover (ASA)",
      l2: "Catalyst 3750 switch stacking"
    },
    sec2: {
      title: "Failover on ASA 5506X",
      p1: "The core of our infrastructure's security relies on two Cisco ASA 5506X firewalls configured in Active/Standby Failover mode.",
      p2: "The active unit handles traffic, while the standby unit monitors its status. In case of failure (hardware or link), the failover is automatic. Stateful replication ensures that ongoing connections are not interrupted.",
      link: "View configuration steps"
    },
    sec3: {
      title: "Core Switches & Multi-Chassis EtherChannel",
      p1: "To ensure a robust connection between the firewalls and the internal network, we used stacked Catalyst 3750 switches (Stacking).",
      p2: "This configuration allows us to create a Multi-Chassis EtherChannel using the LACP protocol. Even if one of the core switches fails, traffic continues to flow smoothly to the remaining switch."
    },
    sec4: {
      title: "Validation & Resilience Testing",
      p1: "The reliability of the infrastructure was verified by multiple tests in real conditions, illustrating the robustness of the failover at the hardware and interface levels.",
      p2: "We simulated failures on the LACP links (`Fa1/0/1`, `Fa2/0/1`), verified continuous ping maintenance, and tested Static Route Tracking to the backup ISP router. The infrastructure automatically redirects traffic, confirming optimal fault tolerance with no service interruption."
    },
    dl: {
      title: "Want to go further?",
      desc: "The full document includes detailed commands (CLI), \"Static Route Tracking\" configuration for ISP links, and all troubleshooting steps.",
      btn: "Download Full PDF",
      file: "File: 01. Cluster Failover ASA 5506x.pdf (34 pages)"
    },
    footer: "Network Infrastructure and High Availability Project."
  }
};

const Project01 = ({lang, onToggleLanguage }) => {
  const navigate = useNavigate();
  const pt = project1Translations[lang] || project1Translations.fr;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300">
      <nav className="bg-slate-950/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <button onClick={() => navigate('/#projects')} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
                <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Retour aux projets</span>
              </button>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a href="#architecture" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.arch}</a>
              <a href="#failover" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.failover}</a>
              <a href="#switches" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.switches}</a>
              <a href="#validation" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.validation}</a>
            </div>
            <div className="flex items-center">
              <a href="https://assets.persys.fr/Portfolio/Projects/01. Cluster Failover ASA 5506x.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-500 transition flex items-center space-x-2 shadow-sm shadow-blue-900/30">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">{pt.nav.pdf}</span>
              </a>
              <button onClick={onToggleLanguage} className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-sm font-bold text-white transition-colors border border-slate-700/50 ml-3">
                {lang === 'fr' ? 'EN' : 'FR'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-slate-900 text-white pt-20 pb-24 lg:pt-32 lg:pb-40 px-4 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.95)), url('https://assets.persys.fr/Portfolio/Images/01.%20Cluster%20Failover%20ASA%205506x.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30">{pt.hero.badge}</span>
          </FadeIn>
          <FadeIn delay={100} direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">{pt.hero.titleStart} <span className="text-blue-400">{pt.hero.titleHighlight}</span></h1>
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
        <section id="architecture" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl text-blue-400 mb-6 border border-blue-500/20"><LayoutDashboard className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec1.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec1.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec1.p2}</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-slate-300"><ShieldCheck className="h-5 w-5 text-emerald-400 mr-3" />{pt.sec1.l1}</li>
                <li className="flex items-center text-slate-300"><ShieldCheck className="h-5 w-5 text-emerald-400 mr-3" />{pt.sec1.l2}</li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/project01/tier%202%20vs%20tier%203.PNG" alt="Architecture" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
        </section>

        <section id="failover" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/project01/le%20schema%20du%20reseau%202%20tiers.png" alt="Failover" className="max-w-full h-auto rounded-xl shadow-sm bg-white mx-auto block" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-xl text-indigo-400 mb-6 border border-indigo-500/20"><ShieldCheck className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec2.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec2.p1}</p>
              <p className="text-slate-400 mb-6 leading-relaxed">{pt.sec2.p2}</p>
              <a href="#download" className="text-blue-400 font-medium hover:text-blue-300 flex items-center transition-colors">{pt.sec2.link} <ArrowRight className="h-4 w-4 ml-1" /></a>
            </div>
          </FadeIn>
        </section>

        <section id="switches" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-xl text-emerald-400 mb-6 border border-emerald-500/20"><Network className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec3.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec3.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec3.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/project01/switch%20stacking.PNG" alt="Switches" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
        </section>

        <section id="validation" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/project01/validation.PNG" alt="Validation" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-xl text-amber-400 mb-6 border border-amber-500/20"><CheckCircle className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec4.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec4.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec4.p2}</p>
            </div>
          </FadeIn>
        </section>
      </main>

      <section id="download" className="bg-slate-900 border-y border-slate-800/80 py-20 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{pt.dl.title}</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">{pt.dl.desc}</p>
            <a href="https://assets.persys.fr/Portfolio/Projects/01. Cluster Failover ASA 5506x.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 items-center space-x-3 mx-auto">
              <Download className="h-6 w-6" />
              <span>{pt.dl.btn}</span>
            </a>
            <p className="text-sm text-slate-500 mt-4">{pt.dl.file}</p>
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

export default Project01;