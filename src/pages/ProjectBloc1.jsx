import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Mail, Target, Network, ShieldCheck, LayoutDashboard } from 'lucide-react';
import FadeIn from '../components/FadeIn';

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

const ProjectBloc1 = ({lang, onToggleLanguage, onContactClick }) => {
  const navigate = useNavigate();
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
              <button onClick={() => navigate('/')} className="group flex items-center text-slate-400 hover:text-white transition-colors font-medium text-sm">
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

export default ProjectBloc1;