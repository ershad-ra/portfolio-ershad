import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  FileText, 
  Award, 
  Mail, 
  ChevronLeft, 
  Server, 
  ShieldCheck, 
  Terminal, 
  Database, 
  Network,
  Linkedin,
  Github,
  ArrowUpRight,
  Code,
  Briefcase,
  GraduationCap,
  Cpu,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  ArrowUp,
  Download,
  LayoutDashboard,
  CheckCircle,
  ArrowRight,
  Target,
  Settings,
  Layers,
  Calendar,
  BarChart,
  Scale,
  RefreshCw,
  Activity,
  LifeBuoy,
  Search,
  PenTool,
  BookOpen
} from 'lucide-react';

// --- ANIMATION COMPONENTS ---
const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '50px' });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const getDirectionClasses = () => {
    if (direction === 'up') return 'translate-y-12';
    if (direction === 'down') return '-translate-y-12';
    if (direction === 'left') return '-translate-x-12';
    if (direction === 'right') return 'translate-x-12';
    return '';
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${getDirectionClasses()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


// --- PROJECT TRANSLATIONS & COMPONENTS ---

// Project 1
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

const Project01 = ({ onBack, lang, onToggleLanguage }) => {
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
              <button onClick={onBack} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
                <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">{pt.back}</span>
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


// Project 2
const project2Translations = {
  fr: {
    back: "retour au portfolio",
    nav: { topo: "Topologie", inventory: "Inventaire", modules: "Modules", playbooks: "Playbooks", pdf: "PDF Complet" },
    hero: {
      badge: "Projet d'Automatisation (IaC)",
      titleStart: "Automatisation ",
      titleHighlight: "Cisco avec Ansible",
      desc: "Déploiement, configuration automatisée et gestion des sauvegardes des équipements Cisco via des playbooks Ansible.",
      by: "Par"
    },
    sec1: {
      title: "Topologie de l'Infrastructure",
      p1: "L'architecture réseau est composée de routeurs (Cisco 1921) et de commutateurs Catalyst (couches Core et Access). Le but est de gérer l'intégralité des configurations depuis un serveur Ansible centralisé.",
      p2: "L'environnement inclut également des serveurs TFTP pour la sauvegarde des images IOS et des outils de supervision comme CheckMK pour la surveillance du protocole SNMP déployé."
    },
    sec2: {
      title: "Inventaire & Configuration",
      p1: "L'inventaire Ansible est structuré en fichiers INI et répertoires YAML (group_vars, host_vars). Les hôtes sont organisés en groupes logiques (router, core, access) permettant un ciblage précis.",
      p2: "Cette hiérarchie permet de séparer les données sensibles (identifiants, mots de passe de privilège) du code d'automatisation, tout en configurant efficacement le module de connexion 'network_cli'."
    },
    sec3: {
      title: "Modules, Plugins et Collections",
      p1: "L'automatisation repose sur la robustesse des collections officielles 'cisco.ios' et 'ansible.netcommon'.",
      p2: "Ces collections fournissent des modules puissants tels que 'ios_facts' pour la récupération de données dynamiques, 'ios_command' pour exécuter des commandes CLI, et 'ios_config' pour appliquer des configurations de manière idempotente."
    },
    sec4: {
      title: "Développement des Playbooks",
      p1: "Les playbooks YAML exécutent des tâches complexes et conditionnelles. Par exemple, la vérification de la version de l'image IOS avant de procéder à une mise à jour automatisée via TFTP.",
      p2: "D'autres playbooks gèrent la création et l'attribution massives de VLANs ou configurent automatiquement les utilisateurs et clés de cryptage SNMPv3 sur l'ensemble du parc matériel."
    },
    dl: {
      title: "Envie d'aller plus loin ?",
      desc: "Le document complet de 30 pages détaille le processus d'installation d'Ansible, la gestion des connexions SSH avec les équipements Cisco, et inclut le code source complet de tous les playbooks.",
      btn: "Télécharger le PDF Complet",
      file: "Fichier: 02. Automatisation Cisco avec Ansible.pdf (30 pages)"
    },
    footer: "Projet d'Automatisation Réseau (Infrastructure as Code)."
  },
  en: {
    back: "back to portfolio",
    nav: { topo: "Topology", inventory: "Inventory", modules: "Modules", playbooks: "Playbooks", pdf: "Full PDF" },
    hero: {
      badge: "Automation Project (IaC)",
      titleStart: "Cisco Automation ",
      titleHighlight: "with Ansible",
      desc: "Deployment, automated configuration, and backup management of Cisco equipment via Ansible playbooks.",
      by: "By"
    },
    sec1: {
      title: "Infrastructure Topology",
      p1: "The network architecture consists of Cisco routers (1921) and Catalyst switches (Core and Access layers). The goal is to manage all configurations from a centralized Ansible server.",
      p2: "The environment also includes TFTP servers for IOS image backups and monitoring tools like CheckMK to monitor the deployed SNMP protocol."
    },
    sec2: {
      title: "Inventory & Configuration",
      p1: "The Ansible inventory is structured in INI files and YAML directories (group_vars, host_vars). Hosts are organized into logical groups (router, core, access) allowing precise targeting.",
      p2: "This hierarchy separates sensitive data (credentials, privilege passwords) from the automation code, while efficiently configuring the 'network_cli' connection module."
    },
    sec3: {
      title: "Modules, Plugins and Collections",
      p1: "The automation relies on the robustness of official collections like 'cisco.ios' and 'ansible.netcommon'.",
      p2: "These collections provide powerful modules such as 'ios_facts' for dynamic data retrieval, 'ios_command' to execute CLI commands, and 'ios_config' to apply configurations idempotently."
    },
    sec4: {
      title: "Playbook Development",
      p1: "YAML playbooks execute complex and conditional tasks. For example, checking the IOS image version before performing an automated upgrade via TFTP.",
      p2: "Other playbooks handle the massive creation and assignment of VLANs or automatically configure users and SNMPv3 encryption keys across the entire hardware fleet."
    },
    dl: {
      title: "Want to go further?",
      desc: "The full 30-page document details the Ansible installation process, managing SSH connections with Cisco equipment, and includes the complete source code for all playbooks.",
      btn: "Download Full PDF",
      file: "File: 02. Automatisation Cisco avec Ansible.pdf (30 pages)"
    },
    footer: "Network Automation Project (Infrastructure as Code)."
  }
};

const Project02 = ({ onBack, lang, onToggleLanguage }) => {
  const pt = project2Translations[lang] || project2Translations.fr;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300">
      <nav className="bg-slate-950/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
                <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">{pt.back}</span>
              </button>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a href="#topology" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.topo}</a>
              <a href="#inventory" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.inventory}</a>
              <a href="#modules" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.modules}</a>
              <a href="#playbooks" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.playbooks}</a>
            </div>
            <div className="flex items-center">
              <a href="https://assets.persys.fr/Portfolio/Projects/02. Automatisation Cisco avec Ansible.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-500 transition flex items-center space-x-2 shadow-sm shadow-blue-900/30">
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

      <section className="bg-slate-900 text-white pt-20 pb-24 lg:pt-32 lg:pb-40 px-4 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.95)), url('https://assets.persys.fr/Portfolio/Images/02.%20Automatisation%20Cisco%20avec%20Ansible.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
        <section id="topology" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl text-blue-400 mb-6 border border-blue-500/20"><Network className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec1.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec1.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec1.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/project02/topologie.png" alt="Topology" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
        </section>

        <section id="inventory" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/project02/inventory.PNG" alt="Inventory" className="max-w-full h-auto rounded-xl shadow-sm bg-white mx-auto block" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-xl text-indigo-400 mb-6 border border-indigo-500/20"><Database className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec2.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec2.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec2.p2}</p>
            </div>
          </FadeIn>
        </section>

        <section id="modules" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-xl text-emerald-400 mb-6 border border-emerald-500/20"><Cpu className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec3.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec3.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec3.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex flex-col justify-center items-center">
            <img src="https://assets.persys.fr/Portfolio/Images/project02/module%2C%20plugins%20and%20collections.png" alt="Modules" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
        </section>

        <section id="playbooks" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 flex flex-col gap-4">
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
              <img src="https://assets.persys.fr/Portfolio/Images/project02/Back%20up%20running%20configuration%20with%20ios_command%20playbook.png" alt="Playbook" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
              <img src="https://assets.persys.fr/Portfolio/Images/project02/result%20of%20running%20playbook%20-%20Back%20up%20running%20configuration%20with%20ios_command%20playbook.PNG" alt="Result" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-xl text-amber-400 mb-6 border border-amber-500/20"><Terminal className="h-6 w-6" /></div>
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
            <a href="https://assets.persys.fr/Portfolio/Projects/02. Automatisation Cisco avec Ansible.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 items-center space-x-3 mx-auto">
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


// Project 3
const project3Translations = {
  fr: {
    back: "retour au portfolio",
    nav: { topo: "Topologie", lamp: "Stack LAMP", org: "Organisation", playbook: "Playbooks", pdf: "PDF Complet" },
    hero: {
      badge: "Déploiement Web Automatisé",
      titleStart: "Déploiement LAMP/GLPi ",
      titleHighlight: "avec Ansible",
      desc: "Automatisation de l'installation et de la configuration complète d'une stack LAMP, de GLPI, FusionInventory et Fail2ban avec Ansible.",
      by: "Par"
    },
    sec1: {
      title: "Architecture & Topologie",
      p1: "Le projet repose sur une machine de contrôle Ansible (Control Node) qui déploie les configurations vers des serveurs cibles via VirtualBox.",
      p2: "La topologie inclut un accès via SSH avec une authentification par clés (password-less) et une élévation de privilèges (sudo) automatisée pour garantir la sécurité et l'efficacité des déploiements."
    },
    sec2: {
      title: "La Stack LAMP",
      p1: "La solution GLPI s'appuie sur une pile logicielle standard : Linux, Apache, MySQL, et PHP. Le but du projet est de transformer le déploiement de ces éléments en Infrastructure as Code.",
      p2: "Chaque composant fait l'objet d'une automatisation Ansible précise, garantissant des versions spécifiques, la création de bases de données, et l'application des bonnes pratiques de sécurité (HTTPS, TLS)."
    },
    sec3: {
      title: "Organisation du Projet",
      p1: "Pour gérer la complexité, le projet Ansible est structuré de manière rigoureuse avec des Rôles distincts (apache, mysql, php, fail2ban).",
      p2: "L'inventaire, les variables globales (group_vars), les templates (Jinja2) et un fichier principal `master.yml` orchestrent l'ensemble du déploiement de façon modulaire."
    },
    sec4: {
      title: "Anatomie des Playbooks",
      p1: "Les playbooks YAML décrivent l'état désiré du système. Ils déploient les serveurs, génèrent les certificats SSL/TLS, téléchargent l'archive GLPI et injectent les paramètres de base de données.",
      p2: "Des tâches conditionnelles configurées dans Ansible permettent également d'installer le plugin FusionInventory et de configurer automatiquement les filtres et jails Fail2ban pour bloquer les attaques."
    },
    dl: {
      title: "Envie d'aller plus loin ?",
      desc: "Le document complet de 42 pages détaille le fonctionnement des rôles Ansible, l'intégration de la gestion Windows avec WinRM, et les configurations avancées de sécurité HTTP.",
      btn: "Télécharger le PDF Complet",
      file: "Fichier: 03. Deploiement LAMP-GLPi avec Ansible - sample.pdf (42 pages)"
    },
    footer: "Projet d'Automatisation de Services Cloud et Sécurité."
  },
  en: {
    back: "back to portfolio",
    nav: { topo: "Topology", lamp: "LAMP Stack", org: "Organization", playbook: "Playbooks", pdf: "Full PDF" },
    hero: {
      badge: "Automated Web Deployment",
      titleStart: "LAMP/GLPi Deployment ",
      titleHighlight: "with Ansible",
      desc: "Automation of the complete installation and configuration of a LAMP stack, GLPI, FusionInventory, and Fail2ban using Ansible.",
      by: "By"
    },
    sec1: {
      title: "Architecture & Topology",
      p1: "The project relies on an Ansible Control Node that pushes configurations to target servers hosted on VirtualBox.",
      p2: "The topology involves SSH access configured with key-based authentication (password-less) and automated privilege escalation (sudo) to ensure secure and efficient deployments."
    },
    sec2: {
      title: "The LAMP Stack",
      p1: "The GLPI solution is built on a standard software stack: Linux, Apache, MySQL, and PHP. The project aims to transform the deployment of these elements into Infrastructure as Code.",
      p2: "Each component is handled by precise Ansible automation, ensuring specific versions, database creation, and security best practices application (HTTPS, TLS)."
    },
    sec3: {
      title: "Project Organization",
      p1: "To handle complexity, the Ansible project is rigorously structured into distinct Roles (apache, mysql, php, fail2ban).",
      p2: "Inventory files, global variables (group_vars), templates (Jinja2), and a main `master.yml` file orchestrate the entire modular deployment."
    },
    sec4: {
      title: "Playbook Anatomy",
      p1: "YAML playbooks define the desired system state. They deploy servers, generate SSL/TLS certificates, fetch the GLPI archive, and inject database parameters.",
      p2: "Conditional tasks in Ansible also allow the automated installation of the FusionInventory plugin and the dynamic configuration of Fail2ban filters and jails to block attacks."
    },
    dl: {
      title: "Want to go further?",
      desc: "The full 42-page document details the inner workings of Ansible roles, Windows management integration with WinRM, and advanced HTTP security configurations.",
      btn: "Download Full PDF",
      file: "File: 03. Deploiement LAMP-GLPi avec Ansible - sample.pdf (42 pages)"
    },
    footer: "Cloud Services Automation and Security Project."
  }
};

const Project03 = ({ onBack, lang, onToggleLanguage }) => {
  const pt = project3Translations[lang] || project3Translations.fr;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300">
      <nav className="bg-slate-950/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
                <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">{pt.back}</span>
              </button>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a href="#topology" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.topo}</a>
              <a href="#lamp" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.lamp}</a>
              <a href="#organization" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.org}</a>
              <a href="#playbooks" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.playbook}</a>
            </div>
            <div className="flex items-center">
              <a href="https://assets.persys.fr/Portfolio/Projects/03.%20Deploiement%20LAMP-GLPi%20avec%20Ansible%20-%20sample.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-500 transition flex items-center space-x-2 shadow-sm shadow-blue-900/30">
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

      <section className="bg-slate-900 text-white pt-20 pb-24 lg:pt-32 lg:pb-40 px-4 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.95)), url('https://assets.persys.fr/Portfolio/Images/03.%20Deploiement%20LAMP-GLPi%20avec%20Ansible.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
        <section id="topology" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl text-blue-400 mb-6 border border-blue-500/20"><Network className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec1.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec1.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec1.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/project03/topologie%20in%20project's%20overview.PNG" alt="Topology" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
        </section>

        <section id="lamp" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
            <img src="https://assets.persys.fr/Portfolio/Images/project03/lamp%20stack.png" alt="LAMP Stack" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block bg-white p-4" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-xl text-indigo-400 mb-6 border border-indigo-500/20"><Server className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec2.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec2.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec2.p2}</p>
            </div>
          </FadeIn>
        </section>

        <section id="organization" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-xl text-emerald-400 mb-6 border border-emerald-500/20"><LayoutDashboard className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec3.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec3.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec3.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="order-2 lg:order-1 flex flex-col gap-4">
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex flex-col justify-center items-center">
              <img src="https://assets.persys.fr/Portfolio/Images/project03/organizing%20our%20glpi%20project.png" alt="Organization" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex flex-col justify-center items-center">
              <img src="https://assets.persys.fr/Portfolio/Images/project03/tree%20command%20on%20the%20etc%20ansible%20directory.png" alt="Tree" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
          </FadeIn>
        </section>

        <section id="playbooks" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 flex flex-col gap-4">
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
              <img src="https://assets.persys.fr/Portfolio/Images/project03/anatomy%20of%20the%20playbook.png" alt="Anatomy" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block bg-white" />
            </div>
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
              <img src="https://assets.persys.fr/Portfolio/Images/project03/apache%20role%20files%20and%20directories.png" alt="Roles" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
              <img src="https://assets.persys.fr/Portfolio/Images/project03/verifying%20the%20webserver.png" alt="Verify" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-xl text-amber-400 mb-6 border border-amber-500/20"><Terminal className="h-6 w-6" /></div>
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
            <a href="https://assets.persys.fr/Portfolio/Projects/03.%20Deploiement%20LAMP-GLPi%20avec%20Ansible%20-%20sample.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 items-center space-x-3 mx-auto">
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


// Project 4
const project4Translations = {
  fr: {
    back: "retour au portfolio",
    nav: { topo: "Topologie", snort: "Snort IDS", graylog: "SIEM Graylog", attacks: "Attaques", pdf: "PDF Complet" },
    hero: {
      badge: "Cybersécurité & Supervision",
      titleStart: "Déploiement d'IDS/IPS ",
      titleHighlight: "et SIEM",
      desc: "Mise en place de Snort et Graylog pour la détection d'intrusions, la centralisation des logs et la simulation d'attaques réseau.",
      by: "Par"
    },
    sec1: {
      title: "Topologie de l'Infrastructure",
      p1: "L'architecture s'articule autour d'un pare-feu pfSense configuré en tant que NIDS (Network Intrusion Detection System) grâce au paquet Snort.",
      p2: "Il est couplé à un serveur Graylog (SIEM) chargé de collecter, parser et analyser les logs générés. Cet environnement isolé permet de simuler et d'observer des attaques complexes en toute sécurité."
    },
    sec2: {
      title: "Déploiement de Snort (IDS/IPS)",
      p1: "Snort analyse en temps réel le trafic traversant le pare-feu. Nous l'avons configuré avec des règles personnalisées et communautaires pour détecter les signatures malveillantes (exploits CVE, scans Nmap).",
      p2: "En mode IPS, il est capable de bloquer activement les trames suspectes, offrant une première ligne de défense proactive contre les intrusions."
    },
    sec3: {
      title: "Centralisation & SIEM (Graylog)",
      p1: "Le serveur Graylog centralise les alertes de sécurité de l'infrastructure. Des extracteurs (Grok patterns) sont configurés pour structurer les logs bruts provenant de Snort.",
      p2: "La création de tableaux de bord interactifs et la configuration d'alertes automatisées par e-mail (Grace Period) permettent une réactivité immédiate de l'équipe de sécurité (SOC)."
    },
    sec4: {
      title: "Simulation d'Attaques & Détection",
      p1: "Pour valider l'efficacité de nos règles, plusieurs attaques réelles ont été orchestrées : DDoS (SYN Flood, HTTP Flood), Mac Flooding, et exploitation de failles (EternalBlue, VSFTPD Backdoor).",
      p2: "L'analyse granulaire des trames (via Wireshark) corrélée aux alertes remontées dans le SIEM confirme le déclenchement précis des mesures de protection."
    },
    dl: {
      title: "Envie d'aller plus loin ?",
      desc: "Le document détaillé plonge dans l'anatomie des règles Snort, la configuration de Graylog, et l'analyse technique (Wireshark) de 8 attaques distinctes.",
      btn: "Télécharger le PDF Complet",
      file: "Fichier: 04. Deploiement d'IDS-IPS et SIEM.pdf"
    },
    footer: "Projet de Cybersécurité et SOC (Security Operations Center)."
  },
  en: {
    back: "back to portfolio",
    nav: { topo: "Topology", snort: "Snort IDS", graylog: "Graylog SIEM", attacks: "Attacks", pdf: "Full PDF" },
    hero: {
      badge: "Cybersecurity & Monitoring",
      titleStart: "IDS/IPS & SIEM ",
      titleHighlight: "Deployment",
      desc: "Implementing Snort and Graylog for intrusion detection, log centralization, and network attack simulation.",
      by: "By"
    },
    sec1: {
      title: "Infrastructure Topology",
      p1: "The architecture revolves around a pfSense firewall configured as a NIDS (Network Intrusion Detection System) using the Snort package.",
      p2: "It is coupled with a Graylog server (SIEM) responsible for collecting, parsing, and analyzing the generated logs. This isolated environment allows for the safe simulation and observation of complex attacks."
    },
    sec2: {
      title: "Snort Deployment (IDS/IPS)",
      p1: "Snort analyzes real-time traffic crossing the firewall. We configured it with custom and community rules to detect malicious signatures (CVE exploits, Nmap scans).",
      p2: "In IPS mode, it can actively block suspicious frames, providing a proactive first line of defense against intrusions."
    },
    sec3: {
      title: "Centralization & SIEM (Graylog)",
      p1: "The Graylog server centralizes security alerts from the infrastructure. Extractors (Grok patterns) are configured to structure raw logs coming from Snort.",
      p2: "The creation of interactive dashboards and the configuration of automated email alerts (Grace Period) ensure immediate responsiveness from the security team (SOC)."
    },
    sec4: {
      title: "Attack Simulation & Detection",
      p1: "To validate the effectiveness of our rules, several real attacks were orchestrated: DDoS (SYN Flood, HTTP Flood), Mac Flooding, and vulnerability exploitation (EternalBlue, VSFTPD Backdoor).",
      p2: "The granular analysis of frames (via Wireshark) correlated with the alerts triggered in the SIEM confirms the precise activation of the protection measures."
    },
    dl: {
      title: "Want to go further?",
      desc: "The detailed document explores the anatomy of Snort rules, Graylog configuration, and the technical analysis (Wireshark) of 8 distinct attacks.",
      btn: "Download Full PDF",
      file: "File: 04. Deploiement d'IDS-IPS et SIEM.pdf"
    },
    footer: "Cybersecurity and SOC (Security Operations Center) Project."
  }
};

const Project04 = ({ onBack, lang, onToggleLanguage }) => {
  const pt = project4Translations[lang] || project4Translations.fr;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300">
      <nav className="bg-slate-950/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
                <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">{pt.back}</span>
              </button>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a href="#topology" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.topo}</a>
              <a href="#snort" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.snort}</a>
              <a href="#graylog" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.graylog}</a>
              <a href="#attacks" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.attacks}</a>
            </div>
            <div className="flex items-center">
              <a href="https://assets.persys.fr/Portfolio/Projects/04. Deploiement d'IDS-IPS et SIEM.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-500 transition flex items-center space-x-2 shadow-sm shadow-blue-900/30">
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

      <section className="bg-slate-900 text-white pt-20 pb-24 lg:pt-32 lg:pb-40 px-4 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.95)), url('https://assets.persys.fr/Portfolio/Images/04.%20Deploiement%20d%27IDS-IPS%20et%20SIEM.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
        <section id="topology" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl text-blue-400 mb-6 border border-blue-500/20"><Network className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec1.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec1.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec1.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/project04/topology%20of%20the%20project.png" alt="Topology" className="max-w-full h-auto rounded-xl shadow-sm bg-white mx-auto block" />
          </FadeIn>
        </section>

        <section id="snort" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
            <img src="https://assets.persys.fr/Portfolio/Images/project04/CVE%20structure.PNG" alt="Snort Rules" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-xl text-indigo-400 mb-6 border border-indigo-500/20"><ShieldCheck className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec2.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec2.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec2.p2}</p>
            </div>
          </FadeIn>
        </section>

        <section id="graylog" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-xl text-emerald-400 mb-6 border border-emerald-500/20"><Database className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec3.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec3.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec3.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex flex-col justify-center items-center">
            <img src="https://assets.persys.fr/Portfolio/Images/project04/alerts%20in%20the%20idsips.png" alt="Graylog SIEM" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
        </section>

        <section id="attacks" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 flex flex-col gap-4">
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
              <img src="https://assets.persys.fr/Portfolio/Images/project04/syn%20flood%201.png" alt="SYN Flood Attack" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
            <div className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
              <img src="https://assets.persys.fr/Portfolio/Images/project04/frame%20analyse%20in%20wireshark.png" alt="Wireshark Analysis" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
            </div>
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-xl text-amber-400 mb-6 border border-amber-500/20"><Terminal className="h-6 w-6" /></div>
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
            <a href="https://assets.persys.fr/Portfolio/Projects/04. Deploiement d'IDS-IPS et SIEM.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 items-center space-x-3 mx-auto">
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


// --- PROJECT BLOC 1 (CAPSTONE) ---
const projectBloc1Translations = {
  fr: {
    back: "retour au projet phare",
    nav: { hld: "Stratégie & HLD", sdn: "Évolution SDN", pra: "Continuité (PRA)", rse: "Veille & RSE", contact: "Me Contacter" },
    hero: {
      badge: "Bloc 1 - Certification EASI",
      titleStart: "Élaboration de la ",
      titleHighlight: "Stratégie du SI",
      desc: "Analyse des besoins, définition de l'architecture cible (HLD) et planification stratégique pour la modernisation vers VMware Cloud Foundation.",
      by: "Par"
    },
    sec1: {
      title: "Analyse du Besoin & Stratégie (A1.1 / A1.2)",
      p1: "La première étape du projet a consisté à analyser en profondeur les besoins du commanditaire (Cloudnex) pour proposer une stratégie de modernisation cohérente. Le choix de VMware Cloud Foundation (VCF) s'est imposé pour répondre aux enjeux de scalabilité et de multi-tenant.",
      p2: "Nous avons conçu un High-Level Design (HLD) post-audit, illustrant la nouvelle architecture logique. Ce schéma directeur structure les différents clusters (Management, Compute) et prépare le terrain pour l'intégration globale du calcul, du stockage et du réseau."
    },
    sec2: {
      title: "Plan d'Évolution & Virtualisation Réseau (A1.3)",
      p1: "L'élaboration du plan d'évolution du Système d'Information requiert une refonte de l'infrastructure réseau sous-jacente. L'intégration de VMware NSX transforme le réseau physique en un Software-Defined Network (SDN).",
      p2: "Cette cartographie logique met en évidence la flexibilité apportée par le SDN : micro-segmentation, routage distribué (Tier-0/Tier-1) et automatisation du provisionnement réseau pour les différents locataires (tenants) de l'infrastructure Cloudnex."
    },
    sec3: {
      title: "Continuité d'Activité & Résilience",
      p1: "La stratégie du SI ne peut faire l'impasse sur la sécurité et la disponibilité des données. Une cartographie globale du Plan de Reprise d'Activité (PRA) a été définie pour garantir la résilience des datacenters.",
      p2: "Le document illustre les mécanismes de réplication, la gestion des sauvegardes et le basculement (Failover) inter-sites, garantissant ainsi un RTO et un RPO alignés avec les exigences critiques (SLA) de l'entreprise."
    },
    sec4: {
      title: "Veille, Planification & Démarche RSE (A1.4 / A1.5)",
      p1: "La modernisation s'accompagne d'une planification rigoureuse (Plan indicatif) et d'une démarche RSE (Responsabilité Sociétale et Environnementale). Le passage au cloud privé via VCF favorise la consolidation matérielle (Green IT), réduisant ainsi l'empreinte carbone et la consommation énergétique globale.",
      p2: "En parallèle, une veille technologique et réglementaire (RGPD, normes de sécurité) a été formalisée pour assurer que l'évolution de l'infrastructure reste pérenne, conforme et technologiquement à l'avant-garde."
    },
    dl: {
      title: "Envie de lire le dossier complet ?",
      desc: "Pour des raisons de confidentialité et de propriété intellectuelle, le dossier complet n'est pas en libre accès. N'hésitez pas à me contacter directement pour échanger sur les détails de cette architecture.",
      btn: "Me Contacter pour en savoir plus",
      file: ""
    },
    footer: "Projet de Fin d'Études - Master EASI."
  },
  en: {
    back: "back to capstone",
    nav: { hld: "Strategy & HLD", sdn: "SDN Evolution", pra: "Continuity (DRP)", rse: "Watch & CSR", contact: "Contact Me" },
    hero: {
      badge: "Block 1 - EASI Certification",
      titleStart: "Elaborating the ",
      titleHighlight: "IT Strategy",
      desc: "Needs analysis, target architecture definition (HLD), and strategic planning for the modernization towards VMware Cloud Foundation.",
      by: "By"
    },
    sec1: {
      title: "Needs Analysis & Strategy (A1.1 / A1.2)",
      p1: "The first step of the project involved deeply analyzing the sponsor's (Cloudnex) needs to propose a coherent modernization strategy. VMware Cloud Foundation (VCF) was chosen to address scalability and multi-tenant challenges.",
      p2: "We designed a post-audit High-Level Design (HLD), illustrating the new logical architecture. This master plan structures the different clusters (Management, Compute) and paves the way for the global integration of compute, storage, and network."
    },
    sec2: {
      title: "Evolution Plan & Network Virtualization (A1.3)",
      p1: "Developing the Information System evolution plan requires an overhaul of the underlying network infrastructure. The integration of VMware NSX transforms the physical network into a Software-Defined Network (SDN).",
      p2: "This logical mapping highlights the flexibility brought by SDN: micro-segmentation, distributed routing (Tier-0/Tier-1), and automated network provisioning for the different tenants of the Cloudnex infrastructure."
    },
    sec3: {
      title: "Business Continuity & Resilience",
      p1: "The IT strategy must not overlook data security and availability. A comprehensive map of the Disaster Recovery Plan (DRP) was defined to ensure datacenter resilience.",
      p2: "The document illustrates replication mechanisms, backup management, and inter-site failover, thereby guaranteeing an RTO and RPO aligned with the company's critical requirements (SLAs)."
    },
    sec4: {
      title: "Tech Watch, Planning & CSR (A1.4 / A1.5)",
      p1: "The modernization is accompanied by rigorous planning (Indicative Plan) and a CSR (Corporate Social Responsibility) approach. Moving to a private cloud via VCF promotes hardware consolidation (Green IT), thereby reducing the carbon footprint and overall energy consumption.",
      p2: "In parallel, a technological and regulatory watch (GDPR, security standards) was formalized to ensure the infrastructure's evolution remains sustainable, compliant, and technologically at the forefront."
    },
    dl: {
      title: "Want to read the full report?",
      desc: "For confidentiality and intellectual property reasons, the full document is not publicly available. Feel free to contact me directly to discuss the details of this architecture.",
      btn: "Contact Me for more info",
      file: ""
    },
    footer: "Master's Capstone Project - EASI Certification."
  }
};

const ProjectBloc1 = ({ onBack, lang, onToggleLanguage, onContactClick }) => {
  const pt = projectBloc1Translations[lang] || projectBloc1Translations.fr;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300">
      <nav className="bg-slate-950/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
                <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">{pt.back}</span>
              </button>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a href="#hld" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.hld}</a>
              <a href="#sdn" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.sdn}</a>
              <a href="#pra" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.pra}</a>
              <a href="#rse" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.rse}</a>
            </div>
            <div className="flex items-center">
              <button onClick={onContactClick} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-500 transition flex items-center space-x-2 shadow-sm shadow-blue-900/30">
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

      <section className="bg-slate-900 text-white pt-20 pb-24 lg:pt-32 lg:pb-40 px-4 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.95)), url('https://assets.persys.fr/Portfolio/Images/bloc1/hld-detaille-post-audit.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
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
        <section id="hld" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc1/hld-detaille-post-audit.png" alt="High Level Design" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl text-blue-400 mb-6 border border-blue-500/20"><Target className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec1.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec1.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec1.p2}</p>
            </div>
          </FadeIn>
        </section>

        <section id="sdn" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-xl text-indigo-400 mb-6 border border-indigo-500/20"><Network className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec2.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec2.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec2.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc1/cartographie%20logique%20fonctionnement%20sdn.png" alt="SDN Logical Mapping" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block bg-white" />
          </FadeIn>
        </section>

        <section id="pra" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc1/cartographi%20global%20de%20si%20plan%20pra.png" alt="PRA / DRP Mapping" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block bg-white p-2" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-xl text-emerald-400 mb-6 border border-emerald-500/20"><ShieldCheck className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec3.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec3.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec3.p2}</p>
            </div>
          </FadeIn>
        </section>

        <section id="rse" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-xl text-amber-400 mb-6 border border-amber-500/20"><LayoutDashboard className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec4.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec4.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec4.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc1/plan%20indicatif.png" alt="Indicative Plan" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
        </section>
      </main>

      <section id="download" className="bg-slate-900 border-y border-slate-800/80 py-20 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{pt.dl.title}</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">{pt.dl.desc}</p>
            <button onClick={onContactClick} className="inline-flex bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 items-center space-x-3 mx-auto">
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


// --- PROJECT BLOC 2 (CAPSTONE) ---
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
      p1: "To orchestrate the various teams and ensure deadlines are met, a comprehensive Gantt chart was developed. It illustrates the dependencies between complex technical tasks of network (NSX) and compute (vSphere) integration.",
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

const ProjectBloc2 = ({ onBack, lang, onToggleLanguage, onContactClick }) => {
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
              <button onClick={onBack} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
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
              <button onClick={onContactClick} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-500 transition flex items-center space-x-2 shadow-sm shadow-blue-900/30">
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
            <button onClick={onContactClick} className="inline-flex bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 items-center space-x-3 mx-auto">
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


// --- PROJECT BLOC 3 (CAPSTONE) ---
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

const ProjectBloc3 = ({ onBack, lang, onToggleLanguage, onContactClick }) => {
  const pt = projectBloc3Translations[lang] || projectBloc3Translations.fr;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300">
      <nav className="bg-slate-950/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
                <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">{pt.back}</span>
              </button>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a href="#tools" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.tools}</a>
              <a href="#itsm" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.itsm}</a>
              <a href="#incident" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.incident}</a>
              <a href="#pra" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.pra}</a>
            </div>
            <div className="flex items-center">
              <button onClick={onContactClick} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-500 transition flex items-center space-x-2 shadow-sm shadow-blue-900/30">
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
        <section id="tools" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
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

        <section id="itsm" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

        <section id="incident" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
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

        <section id="pra" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            <button onClick={onContactClick} className="inline-flex bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 items-center space-x-3 mx-auto">
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


// --- PROJECT BLOC 5 (CAPSTONE) ---
const projectBloc5Translations = {
  fr: {
    back: "retour au projet phare",
    nav: { comprendre: "Comprendre", concevoir: "Concevoir", miseenplace: "Mise en place", transmettre: "Transmettre", contact: "Me Contacter" },
    hero: {
      badge: "Bloc 5 - Certification EASI",
      titleStart: "Architecture & ",
      titleHighlight: "Soutenance",
      desc: "Conception, intégration de l'architecture SI et défense du projet de Cloud privé (VMware VCF) devant le jury.",
      by: "Par"
    },
    sec1: {
      title: "Comprendre : État des lieux (A5.1)",
      p1: "La première étape indispensable a été de cartographier la structure existante du SI et d'analyser les orientations stratégiques du commanditaire. Il fallait comprendre les contraintes logistiques et réglementaires (RSE).",
      p2: "Cette analyse approfondie a permis d'élaborer un cahier des charges technique rigoureux, définissant les attentes fonctionnelles et cadrant le périmètre de la nouvelle architecture."
    },
    sec2: {
      title: "Concevoir : L'Architecture Cible (A5.2)",
      p1: "Sur la base du cahier des charges, une architecture SI cible efficiente, hautement disponible (PRA/PCA) et sécurisée a été dessinée. Chaque choix technologique a été comparé aux bonnes pratiques actuelles du marché.",
      p2: "Pour valider ces choix, un scénario de recette a été défini et un PoC (Proof of Concept) a été préparé, permettant d'éprouver la cohérence et l'interopérabilité des équipements proposés."
    },
    sec3: {
      title: "Mise en place : Déploiement & Automatisation (A5.3)",
      p1: "La phase d'intégration a nécessité le déploiement des systèmes et équipements réseaux selon des protocoles justifiés. Une place prépondérante a été donnée à l'automatisation (via scripts et Terraform) pour faciliter les déploiements récurrents.",
      p2: "Suite à l'intégration, une campagne de tests exhaustive (basée sur le cahier de recettes) a été menée. Le compte-rendu de ces tests a démontré la pleine viabilité de la solution."
    },
    sec4: {
      title: "Transmettre : Documentation & Passation (A5.4)",
      p1: "Un projet n'est abouti que s'il est utilisable par les équipes. La dernière phase s'est concentrée sur la rédaction des documentations techniques et des procédures d'exploitation.",
      p2: "Des guides d'utilisation structurés ont été transférés aux administrateurs pour garantir une totale autonomie opérationnelle sur la nouvelle infrastructure Cloudnex."
    },
    dl: {
      title: "Envie d'échanger sur cette soutenance ?",
      desc: "Le support de présentation complet utilisé face au jury contient des données stratégiques. N'hésitez pas à me contacter pour discuter de mon approche architecturale ou d'une éventuelle collaboration.",
      btn: "Me Contacter pour en savoir plus",
      file: ""
    },
    footer: "Projet de Fin d'Études - Master EASI."
  },
  en: {
    back: "back to capstone",
    nav: { comprendre: "Understand", concevoir: "Design", miseenplace: "Implement", transmettre: "Transfer", contact: "Contact Me" },
    hero: {
      badge: "Block 5 - EASI Certification",
      titleStart: "Architecture & ",
      titleHighlight: "Defense",
      desc: "Design, integration of the IS architecture, and defense of the private Cloud project (VMware VCF) before the jury.",
      by: "By"
    },
    sec1: {
      title: "Understand: As-Is Audit (A5.1)",
      p1: "The essential first step was to map the existing IS structure and analyze the sponsor's strategic orientations. It was necessary to understand the logistical and regulatory (CSR) constraints.",
      p2: "This in-depth analysis led to the drafting of a rigorous technical specification document, defining the functional expectations and framing the scope of the new architecture."
    },
    sec2: {
      title: "Design: Target Architecture (A5.2)",
      p1: "Based on the specifications, an efficient, highly available (DRP/BCP), and secure target IS architecture was drawn. Each technological choice was compared to current market best practices.",
      p2: "To validate these choices, a testing scenario was defined, and a PoC (Proof of Concept) was prepared, testing the consistency and interoperability of the proposed equipment."
    },
    sec3: {
      title: "Implement: Deployment & Automation (A5.3)",
      p1: "The integration phase required deploying systems and networking equipment according to justified protocols. A major emphasis was placed on automation (via scripts and Terraform) to facilitate recurring deployments.",
      p2: "Following integration, an exhaustive testing campaign (based on the test plan) was conducted. The resulting test report demonstrated the full viability of the solution."
    },
    sec4: {
      title: "Transfer: Documentation & Handover (A5.4)",
      p1: "A project is only complete when it is usable by the teams. The final phase focused on drafting technical documentation and operational procedures.",
      p2: "Structured user guides were handed over to administrators to ensure complete operational autonomy over the new Cloudnex infrastructure."
    },
    dl: {
      title: "Want to discuss this defense?",
      desc: "The full presentation deck used before the jury contains strategic data. Feel free to contact me to discuss my architectural approach or a potential collaboration.",
      btn: "Contact Me for more info",
      file: ""
    },
    footer: "Master's Capstone Project - EASI Certification."
  }
};

const ProjectBloc5 = ({ onBack, lang, onToggleLanguage, onContactClick }) => {
  const pt = projectBloc5Translations[lang] || projectBloc5Translations.fr;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300">
      <nav className="bg-slate-950/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
                <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">{pt.back}</span>
              </button>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a href="#comprendre" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.comprendre}</a>
              <a href="#concevoir" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.concevoir}</a>
              <a href="#miseenplace" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.miseenplace}</a>
              <a href="#transmettre" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.transmettre}</a>
            </div>
            <div className="flex items-center">
              <button onClick={onContactClick} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-500 transition flex items-center space-x-2 shadow-sm shadow-blue-900/30">
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

      <section className="bg-slate-900 text-white pt-20 pb-24 lg:pt-32 lg:pb-40 px-4 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.95)), url('https://assets.persys.fr/Portfolio/Images/bloc5/premier%20page%20de%20powerpoint.PNG')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-6 border border-amber-500/30">{pt.hero.badge}</span>
          </FadeIn>
          <FadeIn delay={100} direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">{pt.hero.titleStart} <span className="text-amber-400">{pt.hero.titleHighlight}</span></h1>
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
        <section id="comprendre" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc5/A5.1%20comprendre.PNG" alt="Comprendre" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl text-blue-400 mb-6 border border-blue-500/20"><Search className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec1.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec1.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec1.p2}</p>
            </div>
          </FadeIn>
        </section>

        <section id="concevoir" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-xl text-indigo-400 mb-6 border border-indigo-500/20"><PenTool className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec2.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec2.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec2.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc5/A5.2%20concevoir.PNG" alt="Concevoir" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
        </section>

        <section id="miseenplace" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc5/A5.3%20mise%20en%20place.PNG" alt="Mise en place" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-xl text-emerald-400 mb-6 border border-emerald-500/20"><Cpu className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec3.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec3.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec3.p2}</p>
            </div>
          </FadeIn>
        </section>

        <section id="transmettre" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-xl text-amber-400 mb-6 border border-amber-500/20"><BookOpen className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec4.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec4.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec4.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc5/A5.4%20transmettre.PNG" alt="Transmettre" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
        </section>
      </main>

      <section id="download" className="bg-slate-900 border-y border-slate-800/80 py-20 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{pt.dl.title}</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">{pt.dl.desc}</p>
            <button onClick={onContactClick} className="inline-flex bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition shadow-lg shadow-blue-900/20 items-center space-x-3 mx-auto">
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


// --- MAIN DATA ---
const translations = {
  fr: {
    nav: {
      home: "Accueil",
      profile: "Expertise",
      experience: "Parcours",
      capstone: "Projet de fin d'études",
      projects: "Projets",
      contact: "Contact",
      resume: "Consulter mon CV",
      resumeLink: "https://assets.persys.fr/Portfolio/Resumes - CVs/CV_fr_Ershad_Ramezani_Ingénieur_Systèmes_Réseaux_fevrier_2026.pdf",
      language: "EN"
    },
    hero: {
      greeting: "Ershad RAMEZANI",
      role: "Ingénieur Systèmes, Réseaux & Cloud",
      description: "Administrateur d'infrastructures IT avec plus de 4 ans d'expérience. Spécialisé en Build & Run, Support L2/L3 et Maintien en Condition Opérationnelle (MCO). Garant de la résilience et de la continuité d'activité (PCA/PRA).",
      certifications: "Certifications",
      viewProjects: "Découvrir mes projets",
      status: "Disponibilité: Haute"
    },
    aboutSection: {
      title: "Domaines d'Expertise",
      subtitle: "Compétences techniques et environnements maîtrisés.",
      languagesTitle: "Langues",
      skillsTitle: "Stack Technologique"
    },
    timelineSection: {
      title: "Parcours & Expérience",
      subtitle: "Évolution professionnelle et académique.",
      expTitle: "Expériences Professionnelles",
      eduTitle: "Formation"
    },
    capstone: {
      badge: "Projet de Fin d'Études",
      title: "Modernisation des Datacenters Cloudnex",
      subtitle: "Déploiement d'une plateforme VMware Cloud Foundation (VCF)",
      story1: "Durant les deux années de Master, j'ai découvert progressivement la puissance de la virtualisation de calcul avec VMware vSphere, puis la virtualisation réseau avec VMware NSX. Cette expérience m'a amené à explorer en profondeur l'écosystème VMware, en particulier VMware Cloud Foundation (VCF), une plateforme intégrée pour construire un cloud privé moderne.",
      story2: "Pour mon projet de fin d'études et la validation de ma certification EASI (Expert en architecture des systèmes d'information), j'ai choisi de réaliser un cas fictif complet. Ce projet personnel renforce mes connaissances sur l'ensemble du portfolio VMware et illustre de manière concrète les 4 grands blocs de compétences techniques et managériales de la certification.",
      blocksTitle: "Structuration du Projet (Référentiel RNCP)",
      b1Title: "Bloc 1 : Stratégie du SI",
      b1Desc: "Analyse du besoin, élaboration de la stratégie informatique, plan d'évolution, RSE et veille technologique.",
      b2Title: "Bloc 2 : Gestion de Projet",
      b2Desc: "Pilotage de projet informatique, budgétisation, gestion des ressources et des risques.",
      b3Title: "Bloc 3 : MCO du SI",
      b3Desc: "Maintien en condition opérationnelle du SI, supervision globale et tolérance aux pannes.",
      b5Title: "Bloc 5 : Architecture du SI",
      b5Desc: "(Spécialité Systèmes & Réseaux) Conception et mise en œuvre de l'architecture technique.",
      viewDetails: "En savoir plus",
    },
    projectsSection: {
      title: "Projets & Architectures",
      subtitle: "Sélection d'implémentations et de refontes d'infrastructures."
    },
    projectDetail: {
      back: "Retour aux projets",
      descriptionTitle: "Contexte & Réalisation",
      technologies: "Technologies Utilisées",
      viewPdf: "Télécharger l'étude technique complète (PDF)"
    },
    contact: {
      title: "Me Contacter",
      subtitle: "Pour toute opportunité professionnelle ou question technique, n'hésitez pas à me joindre via les plateformes ci-dessous.",
      email: "Adresse Email",
      linkedin: "Profil LinkedIn",
      github: "Projets GitHub"
    },
    footer: "Ershad RAMEZANI. Tous droits réservés. Architecturé avec soin."
  },
  en: {
    nav: {
      home: "Home",
      profile: "Expertise",
      experience: "Experience",
      capstone: "Capstone Project",
      projects: "Projects",
      contact: "Contact",
      resume: "View Resume",
      resumeLink: "https://assets.persys.fr/Portfolio/Resumes - CVs/Resume_EN_Ershad_Ramezani_Systems_Network_Engineer_Feb_2026.pdf",
      language: "FR"
    },
    hero: {
      greeting: "Ershad RAMEZANI",
      role: "Systems, Network & Cloud Engineer",
      description: "IT Infrastructure Administrator with 4+ experience. Specializing in Build & Run, L2/L3 Support, and Operational Maintenance. Guaranteeing resilience and Business Continuity (BCP/DRP).",
      certifications: "Certifications",
      viewProjects: "View my projects",
      status: "Availability: High"
    },
    aboutSection: {
      title: "Areas of Expertise",
      subtitle: "Technical skills and mastered environments.",
      languagesTitle: "Languages",
      skillsTitle: "Technology Stack"
    },
    timelineSection: {
      title: "Career & Experience",
      subtitle: "Professional and academic progression.",
      expTitle: "Professional Experience",
      eduTitle: "Education"
    },
    capstone: {
      badge: "Master's Capstone Project",
      title: "Cloudnex Datacenters Modernization",
      subtitle: "Deploying a VMware Cloud Foundation (VCF) platform",
      story1: "During the past two years, I progressively discovered the power of compute virtualization with VMware vSphere, then network virtualization with VMware NSX. This led me to deeply explore the VMware ecosystem, specifically VMware Cloud Foundation (VCF), an integrated platform for building a modern private cloud.",
      story2: "To validate my EASI certification (IT Architecture Expert), I designed this comprehensive fictional case study. This personal project reinforces my knowledge of the entire VMware portfolio and concretely illustrates the 4 main technical and managerial competency blocks of the certification.",
      blocksTitle: "Project Structure (RNCP Framework)",
      b1Title: "Block 1: IT Strategy",
      b1Desc: "Needs analysis, IT strategy development, evolution plan, CSR, and technology watch.",
      b2Title: "Block 2: Project Management",
      b2Desc: "IT project steering, budgeting, resource and risk management.",
      b3Title: "Block 3: IT Operations (MCO)",
      b3Desc: "Maintaining the Information System in operational condition, overall monitoring, and fault tolerance.",
      b5Title: "Block 5: IT Architecture",
      b5Desc: "(Systems & Networks Specialty) Design and technical implementation of the architecture.",
      viewDetails: "View Details",
    },
    projectsSection: {
      title: "Projects & Architectures",
      subtitle: "Selected infrastructure implementations and redesigns."
    },
    projectDetail: {
      back: "Back to projects",
      descriptionTitle: "Context & Implementation",
      technologies: "Technologies Used",
      viewPdf: "Download full technical study (PDF)"
    },
    contact: {
      title: "Contact Me",
      subtitle: "For any professional opportunity or technical inquiry, please feel free to reach out via the platforms below.",
      email: "Email Address",
      linkedin: "LinkedIn Profile",
      github: "GitHub Projects"
    },
    footer: "Ershad RAMEZANI. All rights reserved. Architected with care."
  }
};

const profileData = {
  languages: {
    fr: [
      { name: "Français", level: "Bilingue" },
      { name: "Anglais", level: "Bilingue" },
      { name: "Persan (Farsi)", level: "Langue maternelle" }
    ],
    en: [
      { name: "French", level: "Bilingual" },
      { name: "English", level: "Bilingual" },
      { name: "Persian (Farsi)", level: "Native" }
    ]
  },
  skills: [
    { id: "net", icon: Network, category: "Network", tools: "Cisco, Aruba, D-Link, OSPF, BGP, VLANs, HA, LAN/WAN/WLAN, Wireshark" },
    { id: "sec", icon: ShieldCheck, category: "Security", tools: "Fortinet, Cisco ASA, SonicWall, VPN (IPsec/SSL), ACLs, RADIUS, MFA" },
    { id: "cloud", icon: Server, category: "Cloud & Virt", tools: "Azure, AWS, VMware (vSphere, NSX), Hyper-V, Infra Hybride" },
    { id: "sys", icon: Terminal, category: "Systems & Auto", tools: "Windows, Linux, Ansible, Terraform, PowerShell, Bash" },
    { id: "bcp", icon: Database, category: "Resilience", tools: "Veeam Backup & Replication, Gestion PCA/PRA" }
  ]
};

const experienceData = {
  fr: [
    {
      year: "2022 — 2025",
      role: "Administrateur Systèmes & Réseaux (Alternance)",
      company: "PME",
      description: "Gestion d'infrastructures hybrides pour un parc de PME avec une double approche Build & Run. Responsable du support technique L2/L3, du MCO et de l'implémentation de projets d'infrastructure de A à Z.",
      details: [
        "Réseau & Sécurité : Audits et refontes LAN multi-sites (Cisco, Aruba, Meraki), gestion sécurité périmétrique (SonicWall, Fortinet).",
        "Cloud & Virtualisation : Migrations Azure/M365 (IaaS), maintien clusters virtualisés (VMware vSphere, Hyper-V).",
        "Opérations & MCO : Support L2/L3, gestion des sauvegardes/restaurations (Veeam) pour garantir PCA/PRA.",
        "Automatisation : Ansible et PowerShell pour l'administration redondante et les mises à jour."
      ]
    },
    {
      year: "Août 2021",
      role: "Technicien Systèmes & Réseaux (Stage)",
      company: "Support Client",
      description: "Support technique L1/L2 et maintien en condition opérationnelle des infrastructures clients.",
      details: [
        "Point de contact principal pour clients via système de permanence (on-call).",
        "Qualification et résolution des demandes techniques via GLPI.",
        "Mise à jour matérielle (firmware) et sauvegarde configurations sur switchs/routeurs HP et D-Link."
      ]
    },
    {
      year: "2016 — 2019",
      role: "Technicien Systèmes & Réseaux",
      company: "Secteur Public",
      description: "Support infrastructure et gestion de parc informatique pour les services municipaux.",
      details: [
        "Gestion des déploiements massifs de postes de travail et renouvellement matériel.",
        "Assistance technique L1/L2 et dépannage sur site pour continuité des services.",
        "Garantie de la stabilité du réseau local, brassage et câblage des baies de serveurs."
      ]
    }
  ],
  en: [
    {
      year: "2022 — 2025",
      role: "Systems & Network Administrator (Work-Study)",
      company: "SMB Sector",
      description: "Management of hybrid infrastructures for SMBs with a dual Build & Run approach. Responsible for L2/L3 technical support, operational maintenance, and end-to-end infrastructure project implementation.",
      details: [
        "Network & Security: Multi-site LAN audits and redesigns (Cisco, Aruba, Meraki), perimeter security management (SonicWall, Fortinet).",
        "Cloud & Virtualization: Azure/M365 (IaaS) migrations, maintaining virtualized clusters (VMware vSphere, Hyper-V).",
        "Operations & Maintenance: L2/L3 support, backup/restore management (Veeam) to ensure BCP/DRP.",
        "Automation: Ansible and PowerShell for redundant administration tasks and updates."
      ]
    },
    {
      year: "August 2021",
      role: "Systems & Network Technician (Internship)",
      company: "Client Support",
      description: "L1/L2 technical support and operational maintenance of client infrastructures.",
      details: [
        "Main point of contact for clients via an on-call system.",
        "Qualification and resolution of technical requests using GLPI ticketing tool.",
        "Hardware updates (firmware) and configuration backups on HP and D-Link switches/routers."
      ]
    },
    {
      year: "2016 — 2019",
      role: "Systems & Network Technician",
      company: "Public Sector",
      description: "Infrastructure support and IT asset management for municipal services.",
      details: [
        "Management of massive workstation deployments and hardware renewals.",
        "L1/L2 technical assistance and on-site troubleshooting for digital service continuity.",
        "Ensuring local network stability, patching, and cabling of server racks."
      ]
    }
  ]
};

const educationData = {
  fr: [
    { year: "2025", degree: "Master 2 - Expert Cloud, Sécurité & Infrastructure", school: "L’école YNOV, Toulouse" },
    { year: "2023", degree: "Licence - Administrateur Infrastructures Sécurisées (AIS)", school: "ADRAR Formation, Toulouse" },
    { year: "2022", degree: "BTS - Technicien Supérieur Systèmes et Réseaux (TSSR)", school: "ADRAR Formation, Toulouse" }
  ],
  en: [
    { year: "2025", degree: "Master's Degree - Cloud, Security & Infrastructure Expert", school: "YNOV School, Toulouse" },
    { year: "2023", degree: "Bachelor's Degree - Secure Infrastructure Administrator", school: "ADRAR Formation, Toulouse" },
    { year: "2022", degree: "Higher National Diploma - Systems and Networks Technician", school: "ADRAR Formation, Toulouse" }
  ]
};

const projectsData = [
  {
    id: 1,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/01. Cluster Failover ASA 5506x.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/01. Cluster Failover ASA 5506x.pdf",
    icon: Network,
    fr: {
      title: "Cluster Failover ASA 5506x",
      subtitle: "Redondance d'infrastructure 2 Tiers via Active/Standby Failover sur ASAs 5506X",
      description: "Mise en œuvre d'une architecture haute disponibilité en configurant un cluster failover de pare-feux Cisco ASA 5506X. L'objectif était de garantir une continuité de service transparente (Active/Standby) pour une infrastructure réseau à deux niveaux, minimisant ainsi les temps d'arrêt en cas de défaillance matérielle."
    },
    en: {
      title: "ASA 5506x Cluster Failover",
      subtitle: "2-Tier Infrastructure Redundancy via Active/Standby Failover on ASAs 5506X",
      description: "Implemented a high-availability architecture by configuring a failover cluster of Cisco ASA 5506X firewalls. The goal was to ensure seamless service continuity (Active/Standby) for a two-tier network infrastructure, minimizing downtime in the event of hardware failure."
    },
    tags: ["Cisco ASA", "High Availability", "Failover", "Network"]
  },
  {
    id: 2,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/02. Automatisation Cisco avec Ansible.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/02. Automatisation Cisco avec Ansible.pdf",
    icon: Terminal,
    fr: {
      title: "Automatisation Cisco avec Ansible",
      subtitle: "Déploiement et configuration automatisés des switches Cisco Catalyst",
      description: "Utilisation d'Ansible pour standardiser et automatiser le déploiement des configurations sur un parc de commutateurs Cisco Catalyst. Création de playbooks pour la gestion des VLANs, des interfaces et des protocoles de routage, réduisant drastiquement les erreurs humaines et le temps d'administration."
    },
    en: {
      title: "Cisco Automation with Ansible",
      subtitle: "Automated deployment and configuration of Cisco Catalyst switches",
      description: "Used Ansible to standardize and automate configuration deployment across a fleet of Cisco Catalyst switches. Created playbooks for managing VLANs, interfaces, and routing protocols, drastically reducing human error and administration time."
    },
    tags: ["Ansible", "Cisco Catalyst", "Automation", "IaC"]
  },
  {
    id: 3,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/03. Deploiement LAMP-GLPi avec Ansible.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/03. Deploiement LAMP-GLPi avec Ansible - sample.pdf",
    icon: Database,
    fr: {
      title: "Déploiement LAMP/GLPi avec Ansible",
      subtitle: "Automatisation de GLPi avec FusionInventory et Fail2ban",
      description: "Développement de scripts d'automatisation Ansible pour déployer une stack LAMP complète, suivie de l'installation de GLPi pour la gestion de parc informatique. Intégration de FusionInventory pour l'inventaire automatique et de Fail2ban pour sécuriser le serveur contre les attaques par force brute."
    },
    en: {
      title: "LAMP/GLPi Deployment with Ansible",
      subtitle: "Automating GLPi with FusionInventory and Fail2ban",
      description: "Developed Ansible automation scripts to deploy a full LAMP stack, followed by the installation of GLPi for IT asset management. Integrated FusionInventory for automatic inventorying and Fail2ban to secure the server against brute-force attacks."
    },
    tags: ["Ansible", "Linux", "GLPi", "LAMP", "Security"]
  },
  {
    id: 4,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/04.%20Deploiement%20d'IDS-IPS%20et%20SIEM.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/04. Deploiement d'IDS-IPS et SIEM.pdf",
    icon: ShieldCheck,
    fr: {
      title: "Déploiement d'IDS/IPS et SIEM",
      subtitle: "Déploiement de Snort, Graylog et simulation d'attaques",
      description: "Mise en place d'une infrastructure de détection et de prévention des intrusions avec Snort, couplée à un SIEM (Graylog) pour la centralisation et l'analyse des logs. Réalisation de simulations d'attaques pour valider les règles de détection et configurer les alertes de sécurité."
    },
    en: {
      title: "IDS/IPS & SIEM Deployment",
      subtitle: "Deploying Snort, Graylog, and simulating attacks",
      description: "Set up an intrusion detection and prevention infrastructure using Snort, coupled with a SIEM (Graylog) for log centralization and analysis. Conducted attack simulations to validate detection rules and configure security alerts."
    },
    tags: ["Snort", "Graylog", "IDS/IPS", "SIEM", "Cybersecurity"]
  },
  {
    id: 5,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/05. Automatisation des switches Aruba.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/05. Automatisation des switches Aruba - sample.pdf",
    icon: Terminal,
    fr: {
      title: "Automatisation des switches Aruba",
      subtitle: "Gestion centralisée par Ansible",
      description: "Écriture de playbooks Ansible spécifiques pour la gamme d'équipements Aruba. Automatisation des tâches de provisionnement, de sauvegarde des configurations et d'application des politiques de sécurité sur l'ensemble du parc réseau."
    },
    en: {
      title: "Aruba Switches Automation",
      subtitle: "Centralized management via Ansible",
      description: "Wrote specific Ansible playbooks for Aruba networking equipment. Automated provisioning tasks, configuration backups, and the application of security policies across the entire network fleet."
    },
    tags: ["Ansible", "Aruba", "Network Automation"]
  },
  {
    id: 6,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/06. Mobile Device Management - MDM.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/06. Mobile Device Management - MDM - sample.pdf",
    icon: Server,
    fr: {
      title: "Mobile Device Management (MDM)",
      subtitle: "Implémentation de Miradore MDM en Cloud",
      description: "Déploiement de la solution cloud Miradore pour gérer une flotte d'appareils mobiles professionnels. Configuration des profils de sécurité, déploiement d'applications à distance et mise en place de politiques de verrouillage/effacement à distance pour protéger les données d'entreprise."
    },
    en: {
      title: "Mobile Device Management (MDM)",
      subtitle: "Implementing Miradore cloud-based MDM",
      description: "Deployed the Miradore cloud solution to manage a fleet of corporate mobile devices. Configured security profiles, pushed applications remotely, and established remote lock/wipe policies to protect corporate data."
    },
    tags: ["MDM", "Miradore", "Cloud", "Mobility"]
  },
  {
    id: 7,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/07. Administration Windows Server & PowerShell.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/07. Administration Windows Server & PowerShell - sample.pdf",
    icon: Terminal,
    fr: {
      title: "Administration Windows Server & PowerShell",
      subtitle: "Automatisation AD, partages, NTFS et audit",
      description: "Création de scripts PowerShell avancés pour automatiser les tâches d'administration quotidiennes sous Windows Server. Gestion massive des utilisateurs Active Directory, configuration des permissions NTFS/Partages, et mise en place de scripts d'audit des accès."
    },
    en: {
      title: "Windows Server Admin & PowerShell",
      subtitle: "Automating AD, Shares, NTFS, and auditing",
      description: "Created advanced PowerShell scripts to automate daily administration tasks on Windows Server. Handled bulk Active Directory user management, NTFS/Share permissions configuration, and implemented access auditing scripts."
    },
    tags: ["Windows Server", "PowerShell", "Active Directory", "System Admin"]
  },
  {
    id: 8,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/08. Mise en place de Graylog de A a Z.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/08. Mise en place de Graylog de A a Z - sample.pdf",
    icon: Database,
    fr: {
      title: "Mise en place de Graylog de A à Z",
      subtitle: "Configuration complète de la solution de centralisation de logs",
      description: "Architecture et déploiement complet d'un cluster Graylog (Elasticsearch, MongoDB, Graylog Server). Création d'inputs, d'extracteurs personnalisés (Grok patterns), de dashboards interactifs et d'alertes pour la supervision proactive de l'infrastructure."
    },
    en: {
      title: "End-to-End Graylog Setup",
      subtitle: "Complete configuration of the log centralization solution",
      description: "Architected and fully deployed a Graylog cluster (Elasticsearch, MongoDB, Graylog Server). Created inputs, custom extractors (Grok patterns), interactive dashboards, and alerts for proactive infrastructure monitoring."
    },
    tags: ["Graylog", "Elasticsearch", "Monitoring", "Logs"]
  },
  {
    id: 9,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/09. Serveur Radius Microsoft NPS.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/09. Serveur Radius Microsoft NPS - sample.pdf",
    icon: ShieldCheck,
    fr: {
      title: "Serveur Radius Microsoft NPS",
      subtitle: "Sécurisation des accès Wi-Fi (802.1X)",
      description: "Déploiement du rôle Network Policy Server (NPS) sous Windows Server pour authentifier les utilisateurs Wi-Fi via le protocole RADIUS (802.1X PEAP-MSCHAPv2). Intégration avec Active Directory pour une gestion centralisée des accès sans fil."
    },
    en: {
      title: "Microsoft NPS Radius Server",
      subtitle: "Securing Wi-Fi access (802.1X)",
      description: "Deployed the Network Policy Server (NPS) role on Windows Server to authenticate Wi-Fi users via the RADIUS protocol (802.1X PEAP-MSCHAPv2). Integrated with Active Directory for centralized wireless access management."
    },
    tags: ["Windows Server", "NPS", "RADIUS", "802.1X", "Wi-Fi Security"]
  },
  {
    id: 10,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/10. Mise en place du serveur OpenVPN.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/10. Mise en place du serveur OpenVPN - sample.pdf",
    icon: Network,
    fr: {
      title: "Mise en place du serveur OpenVPN",
      subtitle: "Sécurisation des accès distants",
      description: "Installation et configuration complète d'un serveur OpenVPN sous Linux. Génération de certificats PKI (Easy-RSA), configuration des règles de routage et de pare-feu, et création de profils clients sécurisés pour le télétravail."
    },
    en: {
      title: "OpenVPN Server Implementation",
      subtitle: "Securing remote access",
      description: "Complete installation and configuration of an OpenVPN server on Linux. Generated PKI certificates (Easy-RSA), configured routing and firewall rules, and created secure client profiles for remote work."
    },
    tags: ["OpenVPN", "VPN", "Linux", "Remote Access"]
  },
  {
    id: 11,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/11. Deploiement de Squid et SquidGuard.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/11. Deploiement de Squid et SquidGuard - sample.pdf",
    icon: ShieldCheck,
    fr: {
      title: "Déploiement de Squid & SquidGuard",
      subtitle: "Sécurisation et filtrage Internet sur pfSense",
      description: "Configuration du proxy Squid et du module de filtrage SquidGuard sur un routeur pfSense. Mise en place d'une politique de filtrage URL stricte, interception SSL (bump) et mise en cache pour optimiser la bande passante et sécuriser la navigation des utilisateurs."
    },
    en: {
      title: "Squid & SquidGuard Deployment",
      subtitle: "Internet security and filtering on pfSense",
      description: "Configured the Squid proxy and SquidGuard filtering module on a pfSense router. Implemented a strict URL filtering policy, SSL interception (bump), and caching to optimize bandwidth and secure user browsing."
    },
    tags: ["pfSense", "Squid", "Proxy", "Web Filtering"]
  },
  {
    id: 12,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/12. Mise en place de VPN IPSec.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/12. Mise en place de VPN IPSec.pdf",
    icon: Network,
    fr: {
      title: "Mise en place de VPN IPSec",
      subtitle: "Déploiement VPN Site-à-Site avec Cisco ASA et NAT",
      description: "Conception et déploiement de tunnels VPN IPSec Site-à-Site entre des firewalls Cisco ASA 5506W-X. Gestion complexe des règles de NAT-Traversal (NAT-T) et des Access Control Lists (ACLs) pour permettre la communication sécurisée entre sites distants."
    },
    en: {
      title: "IPSec VPN Implementation",
      subtitle: "Site-to-Site VPN deployment with Cisco ASA behind NAT",
      description: "Designed and deployed Site-to-Site IPSec VPN tunnels between Cisco ASA 5506W-X firewalls. Handled complex NAT-Traversal (NAT-T) rules and Access Control Lists (ACLs) to allow secure communication between remote sites."
    },
    tags: ["Cisco ASA", "IPSec", "VPN", "Cryptography", "Routing"]
  },
  {
    id: 13,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/13. Supervision avec CheckMK.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/13. Supervision avec CheckMK - sample.pdf",
    icon: Server,
    fr: {
      title: "Supervision avec CheckMK",
      subtitle: "Déploiement et configuration du monitoring",
      description: "Installation de la plateforme de supervision CheckMK. Déploiement d'agents sur les serveurs Linux/Windows, configuration SNMP pour les équipements réseaux, et création de vues personnalisées pour le suivi en temps réel de la santé de l'infrastructure."
    },
    en: {
      title: "CheckMK Monitoring",
      subtitle: "Deployment and configuration of IT supervision",
      description: "Installed the CheckMK monitoring platform. Deployed agents on Linux/Windows servers, configured SNMP for network devices, and created custom views for real-time tracking of infrastructure health."
    },
    tags: ["CheckMK", "Monitoring", "SNMP", "ITSM"]
  },
  {
    id: 14,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/14. Deploiement d'une DMZ sur pfSense.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/14. Deploiement d'une DMZ sur pfSense.pdf",
    icon: ShieldCheck,
    fr: {
      title: "Déploiement d'une DMZ sur pfSense",
      subtitle: "Isolation réseau et création de règles ACLs",
      description: "Conception d'une zone démilitarisée (DMZ) sur un pare-feu pfSense pour héberger des services exposés sur Internet (serveurs web, messagerie). Création et vérification méthodique de règles de pare-feu (ACLs) pour assurer l'étanchéité avec le réseau local (LAN)."
    },
    en: {
      title: "pfSense DMZ Deployment",
      subtitle: "Network isolation and ACL rules creation",
      description: "Designed a Demilitarized Zone (DMZ) on a pfSense firewall to host internet-facing services (web servers, email). Methodically created and verified firewall rules (ACLs) to ensure strict isolation from the local area network (LAN)."
    },
    tags: ["pfSense", "DMZ", "Firewall", "Network Security"]
  },
  {
    id: 15,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/15. Gestion des actifs GLPI et FusionInventory.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/15. Gestion des actifs GLPI et FusionInventory.jpg",
    icon: Database,
    fr: {
      title: "Gestion des actifs : GLPI & FusionInventory",
      subtitle: "Inventaire et gestion du parc informatique",
      description: "Déploiement couplé de GLPI et FusionInventory. Découverte automatique du réseau, remontée automatique des caractéristiques matérielles/logicielles des postes clients, et mise en place d'un système de ticketing (Helpdesk) pour le support utilisateur."
    },
    en: {
      title: "Asset Management: GLPI & FusionInventory",
      subtitle: "IT inventory and fleet management",
      description: "Coupled deployment of GLPI and FusionInventory. Configured automated network discovery, automatic retrieval of hardware/software specs from client machines, and set up a ticketing system (Helpdesk) for user support."
    },
    tags: ["GLPI", "FusionInventory", "ITIL", "Asset Management"]
  },
  {
    id: 16,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/16. Restructuration Globale d'un Reseau.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/16. Restructuration Globale d'un Reseau.pdf",
    icon: Network,
    fr: {
      title: "Restructuration Globale d'un Réseau",
      subtitle: "VLANs, ACLs, Subnetting et Services",
      description: "Audit et refonte complète de l'architecture réseau d'une entreprise. Redécoupage du plan d'adressage IP (Subnetting), création de VLANs dédiés par département, mise en place de routage inter-VLAN et renforcement de la sécurité interne via ACLs."
    },
    en: {
      title: "Global Network Restructuring",
      subtitle: "VLANs, ACLs, Subnetting, and Services",
      description: "Audited and completely overhauled a company's network architecture. Redesigned the IP addressing plan (subnetting), created dedicated VLANs per department, implemented inter-VLAN routing, and strengthened internal security via ACLs."
    },
    tags: ["VLAN", "Routing", "Subnetting", "Architecture"]
  },
  {
    id: 17,
    imageUrl: "https://assets.persys.fr/Portfolio/Images/17. Deploiement d'un Serveur vCenter.jpg",
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/17. Deploiement d'un Serveur vCenter.pdf",
    icon: Server,
    fr: {
      title: "Déploiement d'un Serveur vCenter",
      subtitle: "Initiation à VMware vSphere et virtualisation",
      description: "Installation et configuration de l'hyperviseur VMware ESXi et déploiement de l'appliance vCenter Server (vCSA). Création de datacenters virtuels, gestion du stockage partagé, et configuration de la haute disponibilité des machines virtuelles (vSphere HA)."
    },
    en: {
      title: "vCenter Server Deployment",
      subtitle: "Introduction to VMware vSphere and virtualization",
      description: "Installed and configured the VMware ESXi hypervisor and deployed the vCenter Server Appliance (vCSA). Created virtual datacenters, managed shared storage, and configured high availability for virtual machines (vSphere HA)."
    },
    tags: ["VMware", "vCenter", "vSphere", "Virtualization"]
  }
];

// --- MAIN APP COMPONENT ---

const App = () => {
  const [lang, setLang] = useState('fr');
  const [view, setView] = useState('home'); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [savedScroll, setSavedScroll] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.title = "Ershad Ramezani's Portfolio";
    const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%233b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`;
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = `data:image/svg+xml,${svgIcon}`;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  const toggleLanguage = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr';
    setLang(newLang);
  };

  const handleProjectClick = (project) => {
    setSavedScroll(window.scrollY); 
    setSelectedProject(project);
    
    if (project.id === 1) setView('project-1');
    else if (project.id === 2) setView('project-2');
    else if (project.id === 3) setView('project-3');
    else if (project.id === 4) setView('project-4');
    else setView('project');
    
    window.scrollTo(0, 0); 
  };

  const handleBloc1Click = () => {
    setSavedScroll(window.scrollY);
    setView('project-bloc-1');
    window.scrollTo(0, 0);
  };

  const handleBloc2Click = () => {
    setSavedScroll(window.scrollY);
    setView('project-bloc-2');
    window.scrollTo(0, 0);
  };

  const handleBloc3Click = () => {
    setSavedScroll(window.scrollY);
    setView('project-bloc-3');
    window.scrollTo(0, 0);
  };

  const handleBloc5Click = () => {
    setSavedScroll(window.scrollY);
    setView('project-bloc-5');
    window.scrollTo(0, 0);
  };

  const handleContactRedirect = () => {
    setView('home');
    setSelectedProject(null);
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleBack = () => {
    if (view === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setView('home');
      setSelectedProject(null);
      setTimeout(() => window.scrollTo(0, savedScroll), 0);
    }
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Main navigation link helper
  const NavLink = ({ href, children }) => (
    <a 
      href={href} 
      className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
      onClick={(e) => {
        if (view !== 'home') {
          e.preventDefault();
          handleBack();
          setTimeout(() => {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }}
    >
      {children}
    </a>
  );

  // EARLY RETURN FOR CUSTOM PROJECT PAGES
  if (view === 'project-1') return <Project01 onBack={handleBack} lang={lang} onToggleLanguage={toggleLanguage} />;
  if (view === 'project-2') return <Project02 onBack={handleBack} lang={lang} onToggleLanguage={toggleLanguage} />;
  if (view === 'project-3') return <Project03 onBack={handleBack} lang={lang} onToggleLanguage={toggleLanguage} />;
  if (view === 'project-4') return <Project04 onBack={handleBack} lang={lang} onToggleLanguage={toggleLanguage} />;
  if (view === 'project-bloc-1') return <ProjectBloc1 onBack={handleBack} lang={lang} onToggleLanguage={toggleLanguage} onContactClick={handleContactRedirect} />;
  if (view === 'project-bloc-2') return <ProjectBloc2 onBack={handleBack} lang={lang} onToggleLanguage={toggleLanguage} onContactClick={handleContactRedirect} />;
  if (view === 'project-bloc-3') return <ProjectBloc3 onBack={handleBack} lang={lang} onToggleLanguage={toggleLanguage} onContactClick={handleContactRedirect} />;
  if (view === 'project-bloc-5') return <ProjectBloc5 onBack={handleBack} lang={lang} onToggleLanguage={toggleLanguage} onContactClick={handleContactRedirect} />;


  // --- GENERIC VIEW RENDERER ---
  const renderGenericProjectView = () => {
    if (!selectedProject) return null;

    return (
      <div className="min-h-screen pt-8 pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <button 
            onClick={handleBack}
            className="group flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors mb-10 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full w-fit relative z-20"
          >
            <ChevronLeft size={16} className="text-blue-400 group-hover:-translate-x-1 transition-transform" />
            {t.projectDetail.back}
          </button>

          <article>
            <FadeIn direction="up">
              <header className="mb-12">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl w-fit">
                    <selectedProject.icon size={28} className="text-blue-400" />
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                    {selectedProject[lang].title}
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-slate-400 border-l-4 border-blue-500 pl-4 py-1">
                  {selectedProject[lang].subtitle}
                </p>
              </header>
            </FadeIn>

            <FadeIn delay={150} direction="up" className="flex justify-center">
              <div className="relative aspect-[700/474] w-full max-w-3xl mb-12 rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900/50">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject[lang].title} 
                  className="w-full h-full object-contain"
                />
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <FadeIn delay={300} direction="up">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2 pb-4 border-b border-slate-800/80">
                    <FileText size={20} className="text-blue-400" />
                    {t.projectDetail.descriptionTitle}
                  </h2>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {selectedProject[lang].description}
                  </p>
                </FadeIn>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  {selectedProject.documentUrl && (
                    <FadeIn delay={400} direction="up">
                      <a 
                        href={selectedProject.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center gap-2 p-6 bg-blue-600 hover:bg-blue-500 rounded-2xl text-white transition-all shadow-lg shadow-blue-900/20 text-center"
                      >
                        <FileText size={28} className="mb-1" />
                        <span className="font-bold text-sm">{t.projectDetail.viewPdf}</span>
                        <span className="text-blue-200 text-xs flex items-center gap-1 mt-1 group-hover:text-white transition-colors">
                          Ouvrir l'onglet <ArrowUpRight size={14} />
                        </span>
                      </a>
                    </FadeIn>
                  )}

                  <FadeIn delay={500} direction="up">
                    <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                        <Code size={16} className="text-slate-400" />
                        {t.projectDetail.technologies}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1.5 text-xs font-semibold bg-slate-800 text-slate-300 rounded-lg border border-slate-700/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>

            <FadeIn delay={600} direction="up" className="mt-16 pt-8 border-t border-slate-800/80 flex justify-center sm:justify-start">
              <button 
                onClick={handleBack}
                className="group flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-5 py-2.5 rounded-full w-fit shadow-md relative z-20"
              >
                <ChevronLeft size={16} className="text-blue-400 group-hover:-translate-x-1 transition-transform" />
                {t.projectDetail.back}
              </button>
            </FadeIn>
          </article>
        </div>
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden relative">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] rounded-full bg-blue-600/15 blur-[120px] animate-pulse" style={{ animationDuration: '7s' }}></div>
        <div className="absolute top-[15%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        <svg className="absolute inset-0 w-full h-full text-blue-400/[0.07]" xmlns="http://www.w3.org/2000/svg">
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

      {/* Main Navigation - ONLY visible on the home page */}
      {view === 'home' && (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-1' : 'bg-transparent py-3'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2 cursor-pointer" onClick={handleBack}>
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
                  <button onClick={toggleLanguage} className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-sm font-bold text-white transition-colors border border-slate-700/50">
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
                <a href="#about" onClick={closeMobileMenu} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors py-2">{t.nav.profile}</a>
                <a href="#experience" onClick={closeMobileMenu} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors py-2">{t.nav.experience}</a>
                <a href="#capstone" onClick={closeMobileMenu} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors py-2">{t.nav.capstone}</a>
                <a href="#projects" onClick={closeMobileMenu} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors py-2">{t.nav.projects}</a>
                <a href="#contact" onClick={closeMobileMenu} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors py-2">{t.nav.contact}</a>
              </div>
            </div>
          )}
        </nav>
      )}

      {/* Content Rendering */}
      <main className="relative z-10 pt-20 pb-32">
        {view === 'home' ? (
          <>
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
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <FadeIn direction="up">
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-3">{t.aboutSection.title}</h2>
                    <p className="text-slate-400">{t.aboutSection.subtitle}</p>
                  </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <FadeIn delay={100} direction="up" className="h-full">
                    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-sm h-full">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6 flex items-center gap-2">
                        <Globe size={16} /> {t.aboutSection.languagesTitle}
                      </h3>
                      <div className="space-y-4">
                        {profileData.languages[lang].map((l, i) => (
                          <div key={i} className="flex justify-between items-center pb-3 border-b border-slate-800/50 last:border-0">
                            <span className="text-slate-200 font-medium">{l.name}</span>
                            <span className="text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">{l.level}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={200} direction="up" className="lg:col-span-2 h-full">
                    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-sm h-full">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6 flex items-center gap-2">
                        <Cpu size={16} /> {t.aboutSection.skillsTitle}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {profileData.skills.map(skill => (
                          <div key={skill.id} className="flex items-start gap-4">
                            <div className="p-2.5 bg-slate-800 rounded-lg text-blue-400 shrink-0">
                              <skill.icon size={20} />
                            </div>
                            <div>
                              <h4 className="text-slate-200 font-semibold mb-1">{skill.category}</h4>
                              <p className="text-sm text-slate-400 leading-relaxed">{skill.tools}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </section>

            {/* TIMELINE SECTION */}
            <section id="experience" className="py-24 border-t border-slate-800/50">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <FadeIn direction="up">
                  <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-3">{t.timelineSection.title}</h2>
                    <p className="text-slate-400">{t.timelineSection.subtitle}</p>
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
                              {exp.details.map((detail, j) => (
                                <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                                  <span className="text-slate-600 mt-0.5">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
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
                      
                      {/* Left: Story & Info */}
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

                      {/* Right: Blocks Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="col-span-1 sm:col-span-2 mb-2">
                          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            {t.capstone.blocksTitle}
                          </h3>
                        </div>

                        {/* Block 1 */}
                        <div 
                          onClick={handleBloc1Click}
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

                        {/* Block 2 */}
                        <div 
                          onClick={handleBloc2Click}
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

                        {/* Block 3 */}
                        <div 
                          onClick={handleBloc3Click}
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

                        {/* Block 5 */}
                        <div 
                          onClick={handleBloc5Click}
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
                        onClick={() => handleProjectClick(project)}
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
          </>
        ) : (
          renderGenericProjectView()
        )}
      </main>

      {/* Footer (only on home view as project views have their own) */}
      {view === 'home' && (
        <footer className="bg-slate-950 py-8 border-t border-slate-800/50 text-center relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-500 font-bold text-xs mb-4 border border-slate-800">ER</div>
            <p className="text-slate-500 text-sm">{t.footer}</p>
          </div>
        </footer>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default App;