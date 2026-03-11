import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Download, Network, Server, LayoutDashboard, Terminal } from 'lucide-react';
import FadeIn from '../components/FadeIn';

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
      p1: "Les playbooks YAML décrivent l'état désiré du système. Ils déploient les serveurs, génèrent certificats SSL/TLS, téléchargent l'archive GLPI et injectent les paramètres de base de données.",
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

const Project03 = ({lang, onToggleLanguage }) => {
  const navigate = useNavigate();
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
              <button onClick={() => navigate('/')} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
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

export default Project03;