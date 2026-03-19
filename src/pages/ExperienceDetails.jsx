import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Shield, Server, Network, Cloud, Activity, 
  Terminal, CheckCircle, Search, Laptop, MonitorSmartphone, 
  ShieldCheck, Star
} from 'lucide-react';
import FadeIn from '../components/FadeIn';

const ExperienceDetails = ({ lang }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- MATRICE DES COMPÉTENCES (Avec le système d'étoiles du CV) ---
  const skillCategories = [
    {
      id: "sys-virt",
      title: "Systèmes, Cloud & Virtualisation",
      icon: <Server size={24} className="text-indigo-400" />,
      colorClass: "bg-indigo-500",
      bgLight: "bg-indigo-500/10",
      borderLight: "border-indigo-500/30",
      subSkills: [
        {
          name: "Windows Server & Hyper-V",
          score: 4,
          desc: "Administration AD DS, AD CS, DHCP, DNS, RDS, WSUS, WDS. Maîtrise d'Hyper-V : commutateurs virtuels, réplication, migration de VM et mise en place de stratégies PRA/PCA.",
          tags: ["Windows Server", "Hyper-V", "Active Directory", "AD CS", "RDS"]
        },
        {
          name: "VMware vSphere & NSX",
          score: 4,
          desc: "Déploiement et gestion de clusters vSphere. Virtualisation réseau et micro-segmentation avec NSX (Edge nodes, DFW, VDS, Tier0/Tier1) pour Hosted Private Cloud.",
          tags: ["vSphere", "NSX", "Micro-segmentation", "Cloud Director"]
        },
        {
          name: "Cloud Public (AWS & Azure)",
          score: 4,
          desc: "Migration On-Premise vers Azure, gestion des identités (Entra ID). Provisionnement d'instances EC2 sur AWS, gestion S3 et création de VPC.",
          tags: ["Azure", "AWS", "Entra ID", "EC2", "S3"]
        },
        {
          name: "Linux, Docker & Kubernetes",
          score: 3,
          desc: "Administration système Linux (Debian, Ubuntu), gestion des paquets et services. Conteneurisation d'applications et orchestration de base.",
          tags: ["Linux", "Debian", "Docker", "Kubernetes"]
        },
        {
          name: "VMware VCF (Cloud Foundation)",
          score: 3,
          desc: "Notions avancées sur l'architecture SDDC (Software-Defined Data Center) et le déploiement automatisé.",
          tags: ["VCF", "SDDC"]
        }
      ]
    },
    {
      id: "network",
      title: "Architecture Réseaux",
      icon: <Network size={24} className="text-blue-400" />,
      colorClass: "bg-blue-500",
      bgLight: "bg-blue-500/10",
      borderLight: "border-blue-500/30",
      subSkills: [
        {
          name: "Routing, Switching & Core Network",
          score: 4,
          desc: "Déploiement sur équipements Cisco, Aruba et D-Link. Configuration de VLANs, STP/RSTP, routage (Statique, OSPF, BGP), agrégation de liens (LACP) et sécurisation stricte des ports.",
          tags: ["Cisco", "Aruba", "OSPF/BGP", "STP/RSTP", "LACP"]
        },
        {
          name: "Architecture Multi-sites",
          score: 4,
          desc: "Mise en place de réseaux multi-sites, conception de tunnels VPN IPsec et SSL, redondance de liens et haute disponibilité (HA).",
          tags: ["VPN IPsec", "VPN SSL", "Haute Disponibilité (HA)", "WAN"]
        },
        {
          name: "Wi-Fi, Mobilité & NAC",
          score: 4,
          desc: "Déploiement de réseaux Wi-Fi (Meraki, Aruba), gestion des contrôleurs WLC et implémentation de l'authentification sécurisée RADIUS (802.1X).",
          tags: ["Meraki", "Aruba Wi-Fi", "802.1X", "RADIUS", "WLC"]
        }
      ]
    },
    {
      id: "security",
      title: "Sécurité & Contrôle d'Accès",
      icon: <ShieldCheck size={24} className="text-emerald-400" />,
      colorClass: "bg-emerald-500",
      bgLight: "bg-emerald-500/10",
      borderLight: "border-emerald-500/30",
      subSkills: [
        {
          name: "Sécurité Périmétrique",
          score: 4,
          desc: "Administration de pare-feux (FortiGate, SonicWall, Cisco ASA) en clusters HA. Configuration de règles de filtrage applicatif (L7) et tunnels VPN.",
          tags: ["FortiGate", "SonicWall", "Cisco ASA", "HA", "L7 Filtering"]
        },
        {
          name: "Sécurité des Systèmes & Réseaux",
          score: 3,
          desc: "Segmentation fine du réseau (VLANs, ACLs, VDOM sur Fortinet). Durcissement (Hardening) des OS Windows/Linux, déploiement d'agents de sécurité (EDR, FortiClient).",
          tags: ["VDOM", "ACLs", "Hardening", "EDR"]
        },
        {
          name: "Détection, Analyse & Accès",
          score: 3,
          desc: "Configuration IDS/IPS pour la prévention d'intrusions. Centralisation et analyse légale des logs avec Graylog. Gestion des politiques d'accès sécurisés (MFA).",
          tags: ["IDS/IPS", "Graylog", "MFA", "Analyse de Logs"]
        }
      ]
    },
    {
      id: "ops",
      title: "Automatisation, Ops & Gouvernance",
      icon: <Terminal size={24} className="text-amber-400" />,
      colorClass: "bg-amber-500",
      bgLight: "bg-amber-500/10",
      borderLight: "border-amber-500/30",
      subSkills: [
        {
          name: "PowerShell & Scripting",
          score: 4,
          desc: "Développement de scripts PowerShell pour l'automatisation d'Active Directory, la gestion des droits NTFS, les partages et les tâches planifiées.",
          tags: ["PowerShell", "Automatisation AD", "Bash"]
        },
        {
          name: "Ansible & Automatisation",
          score: 4,
          desc: "Automatisation et provisionnement des configurations réseaux (Cisco, Aruba) pour garantir la conformité du parc.",
          tags: ["Ansible", "Automatisation Réseau"]
        },
        {
          name: "Veeam B&R (Sauvegarde & PRA)",
          score: 4,
          desc: "Mise en place de stratégies de sauvegarde, de réplication de machines virtuelles et élaboration de plans de reprise d'activité (PRA/PCA).",
          tags: ["Veeam B&R", "PRA/PCA", "Réplication"]
        },
        {
          name: "Supervision (CheckMK & Zabbix)",
          score: 3,
          desc: "Déploiement de monitoring hybride : auto-découverte, configuration de templates, gestion des alertes et tableaux de bord.",
          tags: ["CheckMK", "Zabbix", "SNMP"]
        },
        {
          name: "Terraform & Gouvernance (ITIL)",
          score: 3,
          desc: "Infrastructure as Code pour le déploiement Cloud. Gestion des tickets, suivi de projets (Agile/Jira) et respect des processus de services ITIL.",
          tags: ["Terraform", "IaC", "ITIL", "Jira"]
        }
      ]
    }
  ];

  const languages = [
    { name: "Français", desc: "Bilingue", score: 5 },
    { name: "Anglais", desc: "C1 (Professionnel)", score: 4 },
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
      icon: <ShieldCheck size={24} className="text-red-400" />,
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
      
      {/* HEADER NAVBAR */}
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

        {/* --- SECTION 1 : CATALOGUE D'ARCHITECTURE AVEC ÉTOILES --- */}
        <FadeIn direction="up" delay={100}>
          <div className="mb-24">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Catalogue d'Architectures & Technologies</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-slate-800/60 rounded-2xl overflow-hidden flex flex-col h-full shadow-lg">
                  
                  {/* En-tête de la carte */}
                  <div className="bg-slate-900/80 p-6 border-b border-slate-800/80 flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${category.bgLight} border ${category.borderLight}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 tracking-tight">{category.title}</h3>
                  </div>

                  {/* Corps : Sous-catégories avec étoiles */}
                  <div className="p-6 flex-1 flex flex-col gap-8">
                    {category.subSkills.map((sub, sIdx) => (
                      <div key={sIdx} className="relative">
                        {/* Point décoratif */}
                        <div className={`absolute -left-2 top-2 w-1.5 h-1.5 rounded-full ${category.colorClass}`}></div>
                        
                        <div className="pl-4">
                          <h4 className="text-base font-bold text-slate-200 mb-2">{sub.name}</h4>
                          <p className="text-sm text-slate-400 leading-relaxed mb-3 text-justify">
                            {sub.desc}
                          </p>

                          {/* LES ÉTOILES (Identiques à la photo) */}
                          <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                size={15} 
                                className={`${
                                  star <= sub.score 
                                    ? 'text-amber-500 fill-amber-500' // Étoile active (Orange)
                                    : 'text-slate-700 fill-slate-800/50' // Étoile inactive (Gris)
                                }`} 
                              />
                            ))}
                          </div>
                          
                          {/* Mots-clés en badges */}
                          <div className="flex flex-wrap gap-2">
                            {sub.tags.map((tag, tIdx) => (
                              <span key={tIdx} className={`px-2.5 py-1 text-[11px] font-semibold text-slate-300 ${category.bgLight} border ${category.borderLight} rounded-md`}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Langues */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {languages.map((langItem, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl">
                  <div>
                    <h4 className="font-bold text-slate-300 text-sm mb-1">{langItem.name}</h4>
                    <span className="text-xs font-medium text-blue-400/80">{langItem.desc}</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={14} 
                        className={`${
                          star <= langItem.score 
                            ? 'text-blue-500 fill-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]' 
                            : 'text-slate-700 fill-slate-800/50'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* --- SECTION 2 : MISSIONS OPÉRATIONNELLES --- */}
        <FadeIn direction="up" delay={200}>
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Détail des Missions Opérationnelles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missions.map((mission, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl hover:border-blue-500/30 hover:bg-slate-900/80 transition-all duration-300 group shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {mission.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 mb-3 leading-tight">{mission.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed text-justify">{mission.text}</p>
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