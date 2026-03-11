import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Download, Network, ShieldCheck, Database, Terminal } from 'lucide-react';
import FadeIn from '../components/FadeIn';

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

const Project04 = ({lang, onToggleLanguage }) => {
  const navigate = useNavigate();
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
              <button onClick={() => navigate('/')} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
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

export default Project04;