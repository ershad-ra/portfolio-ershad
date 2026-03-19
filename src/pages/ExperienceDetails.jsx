import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Shield, Server, Network, Cloud, Activity, 
  Terminal, CheckCircle, Search, Laptop, MonitorSmartphone, 
  ShieldCheck 
} from 'lucide-react';
import FadeIn from '../components/FadeIn';

const ExperienceDetails = ({ lang }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- MATRICE DES COMPÉTENCES (Catégorisées & Corrigées) ---
  const skillCategories = [
    {
      id: "network",
      title: "Réseaux & Multi-sites",
      icon: <Network size={24} className="text-blue-400" />,
      colorClass: "bg-blue-500",
      bgLight: "bg-blue-500/10",
      tools: [
        { name: "Cisco (Catalyst / Nexus)", score: 4.5 },
        { name: "Aruba", score: 4.5 },
        { name: "Meraki", score: 4.5 },
        { name: "D-Link", score: 4.5 }
      ],
      concepts: ["OSPF", "BGP", "LAN / WAN / WLAN", "VLAN", "Gestion des flux", "Link Aggregation", "LACP", "Failover"]
    },
    {
      id: "cloud",
      title: "Cloud & Virtualisation",
      icon: <Cloud size={24} className="text-indigo-400" />,
      colorClass: "bg-indigo-500",
      bgLight: "bg-indigo-500/10",
      tools: [
        { name: "VMware vSphere", score: 4 },
        { name: "VMware NSX", score: 4 },
        { name: "VMware VCF", score: 3 },
        { name: "Hyper-V", score: 4.5 },
        { name: "Azure & AWS", score: 4.5 },
        { name: "Docker & Kubernetes", score: 3.5 }
      ],
      concepts: ["Infrastructures Hybrides", "IaaS", "SaaS"]
    },
    {
      id: "security",
      title: "Sécurité & Identité",
      icon: <ShieldCheck size={24} className="text-emerald-400" />,
      colorClass: "bg-emerald-500",
      bgLight: "bg-emerald-500/10",
      tools: [
        { name: "Fortinet", score: 4 },
        { name: "SonicWall", score: 4.5 },
        { name: "Cisco ASA", score: 4.5 },
        { name: "Radius & MFA", score: 4.5 }
      ],
      concepts: ["VPN IPsec & SSL", "Hardening", "Audit", "Certificats TLS", "EDR", "IDS/IPS", "IAM", "802.1X"]
    },
    {
      id: "ops",
      title: "Gouvernance & Automation",
      icon: <Terminal size={24} className="text-amber-400" />,
      colorClass: "bg-amber-500",
      bgLight: "bg-amber-500/10",
      tools: [
        { name: "Windows Server & Linux", score: 4.5 },
        { name: "PowerShell & Bash", score: 4.5 },
        { name: "Veeam B&R", score: 4.5 },
        { name: "Ansible", score: 4 },
        { name: "Terraform", score: 4 }
      ],
      concepts: ["PRA / PCA", "ITIL", "Jira", "GLPI", "CheckMK", "WDS / WSUS", "Exchange Online"]
    }
  ];

  const languages = [
    { name: "Français", desc: "Bilingue", score: 5 },
    { name: "Anglais", desc: "C1 (Professionnel)", score: 4.5 },
    { name: "Persan (Farsi)", desc: "Langue Maternelle", score: 5 }
  ];

  const missions = [
    {
      icon: <Shield size={24} className="text-emerald-400" />,
      title: "Contrôle d'Accès (NAC) & Endpoints",
      text: "Refonte du serveur RADIUS (Windows NPS / 802.1X) pour sécuriser les accès Wi-Fi et filaires. Création de stratégies réseau (Network Policies) pour authentifier, identifier et isoler dynamiquement les appareils (via groupes AD ou adresses MAC pour l'IoT) dans des VLANs dédiés."
    },
    {
      icon: <Network size={24} className="text-blue-400" />,
      title: "Hardening Réseau (Sécurité L2/L3)",
      text: "Déploiement global de mesures de sécurité sur la couche d'accès : DHCP Snooping, Dynamic ARP Inspection (DAI) et Port Security sur les ports RJ45 multisites. Implémentation de certificats TLS pour l'administration sécurisée des pares-feux et switchs."
    },
    {
      icon: <Server size={24} className="text-amber-400" />,
      title: "Haute Disponibilité (Core Network)",
      text: "Design et déploiement d'un cœur de réseau L3 (Aruba) en cluster réparti sur 3 bâtiments (fibre monomode 10G) avec redondance des liens d'accès/distribution et prévention des boucles (Spanning Tree)."
    },
    {
      icon: <Shield size={24} className="text-red-400" />,
      title: "Administration Pare-feu",
      text: "Gestion de clusters Fortinet en Haute Disponibilité (HA), configuration de tunnels inter-sites, règles de filtrage L3/L7, Mise en place des pares-feux sur site (Fortinet / SonicWall)."
    },
    {
      icon: <Cloud size={24} className="text-indigo-400" />,
      title: "SDN & Infrastructures Hybrides",
      text: "Migration d'infrastructures On-Premise vers Azure (IaaS). Environnements hybrides (Entra ID, Exchange Online, MFA). Maîtrise VMware NSX & VCF acquise lors de mon projet de fin d'études."
    },
    {
      icon: <Activity size={24} className="text-emerald-500" />,
      title: "MCO & Support Expert N2/N3",
      text: "Résolution d'incidents complexes (routage inter-sites, filtrage applicatif, pannes de clusters vSphere/Hyper-V) avec pour objectif un impact 'zéro coupure'. Gestion quotidienne des clusters."
    },
    {
      icon: <CheckCircle size={24} className="text-green-400" />,
      title: "Audit et Refonte PRA/PCA",
      text: "Audit complet de l'architecture de sauvegarde et implémentation stricte de la règle 3-2-1-0 via Veeam (sauvegardes immuables, air-gapped et externalisées)."
    },
    {
      icon: <Search size={24} className="text-cyan-400" />,
      title: "Supervision & Log Management",
      text: "Sécurisation de la supervision (migration vers CheckMK SNMPv3) et déploiement de Graylog pour la centralisation, le filtrage et l'analyse légale des logs (pare-feux, switchs, serveurs)."
    },
    {
      icon: <Terminal size={24} className="text-purple-400" />,
      title: "Automatisation (IaC)",
      text: "Mise en place d'un serveur Ansible pour scripter et automatiser le provisionnement des équipements réseaux (création de VLANs, tag/untag, adressage IP en masse, etc)."
    },
    {
      icon: <Laptop size={24} className="text-slate-300" />,
      title: "Avant-Vente & Lab (POC)",
      text: "Étude de l'existant, sizing (CPU, RAM, Stockage, BP), chiffrage et création d'un environnement Lab en atelier pour valider techniquement les solutions avant déploiement."
    },
    {
      icon: <MonitorSmartphone size={24} className="text-pink-400" />,
      title: "VDI & Gestion de Parc (ITAM)",
      text: "Administration VMware Horizon (VDI). Déploiement du module GLPI. Cartographie en temps réel des équipements réseau pour visualiser dynamiquement la configuration des VLANs et l'état des interfaces."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-4 px-6 lg:px-8 flex items-center">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-slate-800 border border-slate-800 transition-colors">
            <ArrowLeft size={18} />
          </div>
          <span className="font-medium">{lang === 'fr' ? 'Retour au profil' : 'Back to profile'}</span>
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
        
        <FadeIn direction="up">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Missions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Compétences Détaillées</span>
          </h1>
          <p className="text-slate-400 text-lg mb-16 max-w-3xl">
            Vue d'ensemble de mon stack technique et des projets de fond menés en infrastructure, réseau et automatisation.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={100}>
          <div className="mb-24">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Matrice d'Expertise Technique</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-slate-800/60 rounded-2xl overflow-hidden flex flex-col h-full">
                  
                  <div className={`bg-slate-900/80 p-5 border-b border-slate-800/80 flex items-center gap-4`}>
                    <div className={`p-2.5 rounded-xl ${category.bgLight}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-200">{category.title}</h3>
                  </div>

                  <div className="p-6 space-y-5 flex-1">
                    {category.tools.map((tool, tIdx) => (
                      <div key={tIdx}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-slate-300 text-sm">{tool.name}</span>
                          <span className="text-xs font-mono text-slate-500">{tool.score}/5</span>
                        </div>
                        <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800/50">
                          <div 
                            className={`h-full ${category.colorClass} rounded-full`} 
                            style={{ width: `${(tool.score / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 bg-slate-950/30 border-t border-slate-800/40 mt-auto">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Protocoles & Concepts</p>
                    <div className="flex flex-wrap gap-2">
                      {category.concepts.map((concept, cIdx) => (
                        <span key={cIdx} className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-400 text-xs rounded-md">
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {languages.map((langItem, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl">
                  <div>
                    <h4 className="font-bold text-slate-300 text-sm mb-1">{langItem.name}</h4>
                    <span className="text-xs font-medium text-blue-400/80">{langItem.desc}</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className={`w-2.5 h-2.5 rounded-full ${star <= langItem.score ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : star - 0.5 === langItem.score ? 'bg-blue-500/50' : 'bg-slate-800'}`}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={200}>
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Détail des Missions Opérationnelles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missions.map((mission, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl hover:border-blue-500/30 hover:bg-slate-900/80 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {mission.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 mb-3 leading-tight">{mission.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{mission.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </main>
    </div>
  );
};

export default ExperienceDetails;