import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Download, Network, Database, Cpu, Terminal } from 'lucide-react';
import FadeIn from '../components/FadeIn';

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

const Project02 = ({lang, onToggleLanguage }) => {
  const navigate = useNavigate();
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
              <button onClick={() => navigate('/#projects')} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
                <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Retour aux projets</span>
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

export default Project02;