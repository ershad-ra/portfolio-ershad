import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Shield, Server, Network, Cloud, Activity, 
  Terminal, CheckCircle, Search, Laptop, MonitorSmartphone, 
  ShieldCheck, Star, Download
} from 'lucide-react';
import FadeIn from '../components/FadeIn';

const ExperienceDetails = ({ lang, onToggleLanguage }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  // --- MATRICE DES COMPÉTENCES (BILINGUE) ---
  const skillCategories = [
    {
      id: "sys-virt",
      title: { fr: "Systèmes, Cloud & Virtualisation", en: "Systems, Cloud & Virtualization" },
      icon: <Server size={24} className="text-indigo-400" />,
      subSkills: [
        {
          name: { fr: "Windows Server & Hyper-V", en: "Windows Server & Hyper-V" },
          score: 5,
          desc: {
            fr: "Administration AD DS, AD CS, DHCP, DNS, RDS, WSUS, WDS. Maîtrise d'Hyper-V : commutateurs virtuels, réplication, migration de VM et mise en place de stratégies PRA/PCA.",
            en: "Administration of AD DS, AD CS, DHCP, DNS, RDS, WSUS, WDS. Hyper-V mastery: virtual switches, replication, VM migration, and DRP/BCP strategy implementation."
          },
          tags: {
            fr: ["Windows Server", "Hyper-V", "Active Directory", "AD CS", "RDS"],
            en: ["Windows Server", "Hyper-V", "Active Directory", "AD CS", "RDS"]
          }
        },
        {
          name: { fr: "VMware vSphere & NSX", en: "VMware vSphere & NSX" },
          score: 4,
          desc: {
            fr: "Déploiement et gestion de clusters vSphere. Virtualisation réseau et micro-segmentation avec NSX (Edge nodes, DFW, VDS, Tier0/Tier1) pour Hosted Private Cloud.",
            en: "Deployment and management of vSphere clusters. Network virtualization and micro-segmentation with NSX (Edge nodes, DFW, VDS, Tier0/Tier1) for Hosted Private Cloud."
          },
          tags: {
            fr: ["vSphere", "NSX", "Micro-segmentation", "Cloud Director"],
            en: ["vSphere", "NSX", "Micro-segmentation", "Cloud Director"]
          }
        },
        {
          name: { fr: "Cloud Public (AWS & Azure)", en: "Public Cloud (AWS & Azure)" },
          score: 4,
          desc: {
            fr: "Migration On-Premise vers Azure, gestion des identités (Entra ID). Provisionnement d'instances EC2 sur AWS, gestion S3 et création de VPC.",
            en: "On-Premise migration to Azure, identity management (Entra ID). Provisioning EC2 instances on AWS, S3 management, and VPC creation."
          },
          tags: {
            fr: ["Azure", "AWS", "Entra ID", "EC2", "S3"],
            en: ["Azure", "AWS", "Entra ID", "EC2", "S3"]
          }
        },
        {
          name: { fr: "Linux, Docker & Kubernetes", en: "Linux, Docker & Kubernetes" },
          score: 3,
          desc: {
            fr: "Administration système Linux (Debian, Ubuntu), gestion des paquets et services. Conteneurisation d'applications et orchestration de base.",
            en: "Linux system administration (Debian, Ubuntu), package and services management. Application containerization and basic orchestration."
          },
          tags: {
            fr: ["Linux", "Debian", "Docker", "Kubernetes"],
            en: ["Linux", "Debian", "Docker", "Kubernetes"]
          }
        },
        {
          name: { fr: "VMware VCF (Cloud Foundation)", en: "VMware VCF (Cloud Foundation)" },
          score: 3,
          desc: {
            fr: "Notions avancées sur l'architecture SDDC (Software-Defined Data Center) et le déploiement automatisé.",
            en: "Advanced knowledge of SDDC (Software-Defined Data Center) architecture and automated deployment."
          },
          tags: {
            fr: ["VCF", "SDDC"],
            en: ["VCF", "SDDC"]
          }
        }
      ]
    },
    {
      id: "network",
      title: { fr: "Architecture Réseaux", en: "Network Architecture" },
      icon: <Network size={24} className="text-blue-400" />,
      subSkills: [
        {
          name: { fr: "Routing, Switching & Core Network", en: "Routing, Switching & Core Network" },
          score: 5,
          desc: {
            fr: "Déploiement sur équipements Cisco, Aruba et D-Link. Configuration de VLANs, STP/RSTP, routage (Statique, OSPF, BGP), agrégation de liens (LACP) et sécurisation stricte des ports.",
            en: "Deployment on Cisco, Aruba, and D-Link equipment. Configuration of VLANs, STP/RSTP, routing (Static, OSPF, BGP), link aggregation (LACP), and strict port security."
          },
          tags: {
            fr: ["Cisco", "Aruba", "OSPF/BGP", "STP/RSTP", "LACP"],
            en: ["Cisco", "Aruba", "OSPF/BGP", "STP/RSTP", "LACP"]
          }
        },
        {
          name: { fr: "Architecture Multi-sites", en: "Multi-site Architecture" },
          score: 5,
          desc: {
            fr: "Mise en place de réseaux multi-sites, conception de tunnels VPN IPsec et SSL, redondance de liens et haute disponibilité (HA).",
            en: "Implementation of multi-site networks, design of IPsec and SSL VPN tunnels, link redundancy, and high availability (HA)."
          },
          tags: {
            fr: ["VPN IPsec", "VPN SSL", "Haute Disponibilité (HA)", "WAN"],
            en: ["IPsec VPN", "SSL VPN", "High Availability (HA)", "WAN"]
          }
        },
        {
          name: { fr: "Wi-Fi, Mobilité & NAC", en: "Wi-Fi, Mobility & NAC" },
          score: 5,
          desc: {
            fr: "Déploiement de réseaux Wi-Fi (Meraki, Aruba), gestion des contrôleurs WLC et implémentation de l'authentification sécurisée RADIUS (802.1X).",
            en: "Deployment of Wi-Fi networks (Meraki, Aruba), WLC controller management, and implementation of secure RADIUS authentication (802.1X)."
          },
          tags: {
            fr: ["Meraki", "Aruba Wi-Fi", "802.1X", "RADIUS", "WLC"],
            en: ["Meraki", "Aruba Wi-Fi", "802.1X", "RADIUS", "WLC"]
          }
        }
      ]
    },
    {
      id: "security",
      title: { fr: "Sécurité & Contrôle d'Accès", en: "Security & Access Control" },
      icon: <ShieldCheck size={24} className="text-emerald-400" />,
      subSkills: [
        {
          name: { fr: "Sécurité Périmétrique", en: "Perimeter Security" },
          score: 5,
          desc: {
            fr: "Administration de pare-feux (FortiGate, SonicWall, Cisco ASA) en clusters HA. Configuration de règles de filtrage applicatif (L7) et tunnels VPN.",
            en: "Firewall administration (FortiGate, SonicWall, Cisco ASA) in HA clusters. Configuration of application filtering rules (L7) and VPN tunnels."
          },
          tags: {
            fr: ["FortiGate", "SonicWall", "Cisco ASA", "HA", "Filtrage L7"],
            en: ["FortiGate", "SonicWall", "Cisco ASA", "HA", "L7 Filtering"]
          }
        },
        {
          name: { fr: "Sécurité des Systèmes & Réseaux", en: "Systems & Network Security" },
          score: 5,
          desc: {
            fr: "Segmentation fine du réseau (VLANs, ACLs, VDOM sur Fortinet). Durcissement (Hardening) des OS Windows/Linux, déploiement d'agents de sécurité (EDR, FortiClient).",
            en: "Fine-grained network segmentation (VLANs, ACLs, VDOM on Fortinet). OS Hardening (Windows/Linux), deployment of security agents (EDR, FortiClient)."
          },
          tags: {
            fr: ["VDOM", "ACLs", "Hardening", "EDR"],
            en: ["VDOM", "ACLs", "Hardening", "EDR"]
          }
        },
        {
          name: { fr: "Détection, Analyse & Accès", en: "Detection, Analysis & Access" },
          score: 4,
          desc: {
            fr: "Configuration IDS/IPS pour la prévention d'intrusions. Centralisation et analyse légale des logs avec Graylog. Gestion des politiques d'accès sécurisés (MFA).",
            en: "IDS/IPS configuration for intrusion prevention. Centralization and forensic analysis of logs with Graylog. Secure access policies management (MFA)."
          },
          tags: {
            fr: ["IDS/IPS", "Graylog", "MFA", "Analyse de Logs"],
            en: ["IDS/IPS", "Graylog", "MFA", "Log Analysis"]
          }
        }
      ]
    },
    {
      id: "ops",
      title: { fr: "Automatisation, Ops & Gouvernance", en: "Automation, Ops & Governance" },
      icon: <Terminal size={24} className="text-amber-400" />,
      subSkills: [
        {
          name: { fr: "Ansible & Automatisation", en: "Ansible & Automation" },
          score: 4,
          desc: {
            fr: "Automatisation et provisionnement des configurations réseaux (Cisco, Aruba) pour garantir la conformité du parc et réduire les tâches répétitives.",
            en: "Automation and provisioning of network configurations (Cisco, Aruba) to ensure fleet compliance and reduce repetitive tasks."
          },
          tags: {
            fr: ["Ansible", "Automatisation Réseau"],
            en: ["Ansible", "Network Automation"]
          }
        },
        {
          name: { fr: "Terraform & IaC", en: "Terraform & IaC" },
          score: 4,
          desc: {
            fr: "Provisionnement d'infrastructures Cloud (AWS) via Terraform pour un déploiement standardisé, versionné et reproductible (Infrastructure as Code).",
            en: "Cloud infrastructure provisioning (AWS) via Terraform for standardized, versioned, and reproducible deployment (Infrastructure as Code)."
          },
          tags: {
            fr: ["Terraform", "IaC", "AWS"],
            en: ["Terraform", "IaC", "AWS"]
          }
        },
        {
          name: { fr: "PowerShell & Scripting", en: "PowerShell & Scripting" },
          score: 4,
          desc: {
            fr: "Développement de scripts PowerShell pour l'automatisation d'Active Directory, la gestion des droits NTFS, les partages et les tâches planifiées.",
            en: "PowerShell script development for Active Directory automation, NTFS rights management, shares, and scheduled tasks."
          },
          tags: {
            fr: ["PowerShell", "Automatisation AD", "Bash"],
            en: ["PowerShell", "AD Automation", "Bash"]
          }
        },
        {
          name: { fr: "Veeam B&R (Sauvegarde & PRA)", en: "Veeam B&R (Backup & DRP)" },
          score: 5,
          desc: {
            fr: "Mise en place de stratégies de sauvegarde, de réplication de machines virtuelles et élaboration de plans de reprise d'activité (PRA/PCA).",
            en: "Implementation of backup strategies, virtual machine replication, and development of Disaster Recovery Plans (DRP/BCP)."
          },
          tags: {
            fr: ["Veeam B&R", "PRA/PCA", "Réplication"],
            en: ["Veeam B&R", "DRP/BCP", "Replication"]
          }
        },
        {
          name: { fr: "Supervision (CheckMK & Zabbix)", en: "Supervision (CheckMK & Zabbix)" },
          score: 4,
          desc: {
            fr: "Déploiement de monitoring hybride : auto-découverte, configuration de templates, gestion des alertes et tableaux de bord.",
            en: "Hybrid monitoring deployment: auto-discovery, template configuration, alert management, and dashboards."
          },
          tags: {
            fr: ["CheckMK", "Zabbix", "SNMP"],
            en: ["CheckMK", "Zabbix", "SNMP"]
          }
        },
        {
          name: { fr: "Gouvernance IT & ITSM", en: "IT Governance & ITSM" },
          score: 4,
          desc: {
            fr: "Gestion des incidents et du parc (GLPI), suivi de projets (Agile/Jira) et respect des processus de services ITIL pour assurer le MCO.",
            en: "Incident and asset management (GLPI), project tracking (Agile/Jira), and compliance with ITIL service processes to ensure IT operations."
          },
          tags: {
            fr: ["ITIL", "Jira", "GLPI", "ITSM"],
            en: ["ITIL", "Jira", "GLPI", "ITSM"]
          }
        }
      ]
    }
  ];

  const languagesList = [
    { 
      name: { fr: "Français", en: "French" }, 
      desc: { fr: "Bilingue", en: "Bilingual" }, 
      score: 5 
    },
    { 
      name: { fr: "Anglais", en: "English" }, 
      desc: { fr: "C1 (Professionnel)", en: "C1 (Professional)" }, 
      score: 4 
    },
    { 
      name: { fr: "Persan (Farsi)", en: "Persian (Farsi)" }, 
      desc: { fr: "Langue Maternelle", en: "Native Speaker" }, 
      score: 5 
    }
  ];

  const missions = [
    {
      icon: <Shield size={24} className="text-emerald-400" />,
      title: { fr: "Contrôle d'Accès (NAC) & Endpoints", en: "Access Control (NAC) & Endpoints" },
      text: {
        fr: "Refonte du serveur RADIUS (Windows NPS / 802.1X) pour sécuriser les accès Wi-Fi et filaires. Création de stratégies réseau (Network Policies) pour authentifier, identifier et isoler dynamiquement les appareils (via groupes AD ou adresses MAC pour l'IoT) dans des VLANs dédiés.",
        en: "Redesign of the RADIUS server (Windows NPS / 802.1X) to secure Wi-Fi and wired access. Creation of Network Policies to dynamically authenticate, identify, and isolate devices (via AD groups or MAC addresses for IoT) in dedicated VLANs."
      }
    },
    {
      icon: <Network size={24} className="text-blue-400" />,
      title: { fr: "Hardening Réseau (Sécurité L2/L3)", en: "Network Hardening (L2/L3 Security)" },
      text: {
        fr: "Déploiement global de mesures de sécurité sur la couche d'accès : DHCP Snooping, Dynamic ARP Inspection (DAI) et Port Security sur les ports RJ45 multisites. Implémentation de certificats TLS pour l'administration sécurisée des pares-feux et switchs.",
        en: "Global deployment of security measures on the access layer: DHCP Snooping, Dynamic ARP Inspection (DAI), and Port Security on multi-site RJ45 ports. Implementation of TLS certificates for secure administration of firewalls and switches."
      }
    },
    {
      icon: <Server size={24} className="text-amber-400" />,
      title: { fr: "Haute Disponibilité (Core Network)", en: "High Availability (Core Network)" },
      text: {
        fr: "Design et déploiement d'un cœur de réseau L3 (Aruba) en cluster réparti sur 3 bâtiments (fibre monomode 10G) avec redondance des liens d'accès/distribution et prévention des boucles (Spanning Tree).",
        en: "Design and deployment of an L3 core network (Aruba) in a cluster distributed across 3 buildings (10G single-mode fiber) with access/distribution link redundancy and loop prevention (Spanning Tree)."
      }
    },
    {
      icon: <ShieldCheck size={24} className="text-red-400" />,
      title: { fr: "Administration Pare-feu", en: "Firewall Administration" },
      text: {
        fr: "Gestion de clusters Fortinet en Haute Disponibilité (HA), configuration de tunnels inter-sites, règles de filtrage L3/L7, Mise en place des pares-feux sur site (Fortinet / SonicWall).",
        en: "Management of Fortinet clusters in High Availability (HA), configuration of inter-site tunnels, L3/L7 filtering rules, On-site firewall deployment (Fortinet / SonicWall)."
      }
    },
    {
      icon: <Cloud size={24} className="text-indigo-400" />,
      title: { fr: "SDN & Infrastructures Hybrides", en: "SDN & Hybrid Infrastructures" },
      text: {
        fr: "Migration d'infrastructures On-Premise vers Azure (IaaS). Environnements hybrides (Entra ID, Exchange Online, MFA). Maîtrise VMware NSX & VCF acquise lors de mon projet de fin d'études.",
        en: "Migration of On-Premise infrastructures to Azure (IaaS). Hybrid environments (Entra ID, Exchange Online, MFA). Mastery of VMware NSX & VCF acquired during my capstone project."
      }
    },
    {
      icon: <Activity size={24} className="text-emerald-500" />,
      title: { fr: "MCO & Support Expert N2/N3", en: "IT Ops & L2/L3 Expert Support" },
      text: {
        fr: "Résolution d'incidents complexes (routage inter-sites, filtrage applicatif, pannes de clusters vSphere/Hyper-V) avec pour objectif un impact 'zéro coupure'. Gestion quotidienne des clusters.",
        en: "Resolution of complex incidents (inter-site routing, application filtering, vSphere/Hyper-V cluster failures) aiming for a 'zero downtime' impact. Daily cluster management."
      }
    },
    {
      icon: <CheckCircle size={24} className="text-green-400" />,
      title: { fr: "Audit et Refonte PRA/PCA", en: "DRP/BCP Audit & Redesign" },
      text: {
        fr: "Audit complet de l'architecture de sauvegarde et implémentation stricte de la règle 3-2-1-0 via Veeam (sauvegardes immuables, air-gapped et externalisées).",
        en: "Complete audit of the backup architecture and strict implementation of the 3-2-1-0 rule via Veeam (immutable, air-gapped, and off-site backups)."
      }
    },
    {
      icon: <Search size={24} className="text-cyan-400" />,
      title: { fr: "Supervision & Log Management", en: "Supervision & Log Management" },
      text: {
        fr: "Sécurisation de la supervision (migration vers CheckMK SNMPv3) et déploiement de Graylog pour la centralisation, le filtrage et l'analyse légale des logs (pare-feux, switchs, serveurs).",
        en: "Securing supervision (migration to CheckMK SNMPv3) and deployment of Graylog for centralization, filtering, and forensic analysis of logs (firewalls, switches, servers)."
      }
    },
    {
      icon: <Terminal size={24} className="text-purple-400" />,
      title: { fr: "Automatisation (IaC)", en: "Automation (IaC)" },
      text: {
        fr: "Mise en place d'un serveur Ansible pour scripter et automatiser le provisionnement des équipements réseaux (création de VLANs, tag/untag, adressage IP en masse, etc).",
        en: "Setup of an Ansible server to script and automate the provisioning of network equipment (VLAN creation, tag/untag, bulk IP addressing, etc.)."
      }
    },
    {
      icon: <Laptop size={24} className="text-slate-300" />,
      title: { fr: "Avant-Vente & Lab (POC)", en: "Pre-Sales & Lab (POC)" },
      text: {
        fr: "Étude de l'existant, sizing (CPU, RAM, Stockage, BP), chiffrage et création d'un environnement Lab en atelier pour valider techniquement les solutions avant déploiement.",
        en: "Study of existing systems, sizing (CPU, RAM, Storage, Bandwidth), costing, and creation of a Lab environment in the workshop to technically validate solutions before deployment."
      }
    },
    {
      icon: <MonitorSmartphone size={24} className="text-pink-400" />,
      title: { fr: "VDI & Gestion de Parc (ITAM)", en: "VDI & Asset Management (ITAM)" },
      text: {
        fr: "Administration VMware Horizon (VDI). Déploiement du module GLPI. Cartographie en temps réel des équipements réseau pour visualiser dynamiquement la configuration des VLANs et l'état des interfaces.",
        en: "VMware Horizon (VDI) administration. GLPI module deployment. Real-time mapping of network equipment to dynamically visualize VLAN configurations and interface status."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* --- CSS D'IMPRESSION --- */}
      <style>{`
        @media print {
          @page { margin: 1cm; }
          * {
            background: transparent !important;
            background-color: transparent !important;
            background-image: none !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body, html, main { background-color: white !important; }
          h1, h2, h3, h4, p, span, div { color: black !important; }
          .border, .border-b, .border-t { border-color: #e5e7eb !important; }
          .text-amber-500 { color: #f59e0b !important; }
          .fill-amber-500 { fill: #f59e0b !important; }
          .text-blue-500 { color: #3b82f6 !important; }
          .fill-blue-500 { fill: #3b82f6 !important; }
          .text-indigo-400 { color: #818cf8 !important; }
          .text-blue-400 { color: #60a5fa !important; }
          .text-emerald-400 { color: #34d399 !important; }
          .text-amber-400 { color: #fbbf24 !important; }
          .text-red-400 { color: #f87171 !important; }
          .text-emerald-500 { color: #10b981 !important; }
          .text-cyan-400 { color: #22d3ee !important; }
          .text-purple-400 { color: #c084fc !important; }
          .text-pink-400 { color: #f472b6 !important; }
          .text-green-400 { color: #4ade80 !important; }
          .fill-slate-800\\/50 {
            fill: transparent !important;
            stroke: #94a3b8 !important;
          }
          .print\\:break-inside-avoid { break-inside: avoid !important; page-break-inside: avoid !important; }
          .print\\:hidden { display: none !important; }
          .opacity-0 { opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      {/* HEADER NAVBAR */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-4 px-6 lg:px-8 flex items-center justify-between print:hidden">
        
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-slate-800 border border-slate-800 transition-colors">
            <ArrowLeft size={18} />
          </div>
          <span className="font-medium">{lang === 'fr' ? 'Retour au profil' : 'Back to profile'}</span>
        </button>

        <div className="flex items-center gap-3 sm:gap-6">
          {/* BOUTON LANGUE ÉPURÉ */}
          <button 
            onClick={onToggleLanguage}
            className="text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-wider uppercase"
            title={lang === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>

          {/* BOUTON PDF */}
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300"
          >
            <Download size={18} />
            <span className="hidden sm:inline">
              {lang === 'fr' ? 'Exporter en PDF' : 'Download PDF'}
            </span>
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
        
        <FadeIn direction="up">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {lang === 'fr' ? 'Missions & ' : 'Missions & '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 print:text-black print:bg-none">
              {lang === 'fr' ? 'Compétences Détaillées' : 'Detailed Skills'}
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-16 max-w-3xl">
            {lang === 'fr' 
              ? "Vue d'ensemble de mon stack technique et des projets de fond menés en infrastructure, réseau et automatisation." 
              : "Overview of my technical stack and core projects conducted in infrastructure, networking, and automation."}
          </p>
        </FadeIn>

        {/* --- SECTION 1 : CATALOGUE D'ARCHITECTURE --- */}
        <FadeIn direction="up" delay={100}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
              {lang === 'fr' ? "Catalogue d'Architectures & Technologies" : "Architecture & Technologies Catalog"}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-slate-800/60 rounded-2xl overflow-hidden flex flex-col h-full shadow-lg print:break-inside-avoid">
                  
                  <div className="bg-slate-900/80 p-6 border-b border-slate-800/80 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 tracking-tight">{category.title[lang]}</h3>
                  </div>

                  <div className="p-6 flex-1 flex flex-col gap-8">
                    {category.subSkills.map((sub, sIdx) => (
                      <div key={sIdx} className="relative">
                        <div className="pl-4 print:pl-0">
                          <h4 className="text-base font-bold text-slate-200 mb-2">{sub.name[lang]}</h4>
                          <p className="text-sm text-slate-400 leading-relaxed mb-3 text-justify">
                            {sub.desc[lang]}
                          </p>

                          <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                size={15} 
                                className={`${
                                  star <= sub.score 
                                    ? 'text-amber-500 fill-amber-500' 
                                    : 'text-slate-700 fill-slate-800/50'
                                }`} 
                              />
                            ))}
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {sub.tags[lang].map((tag, tIdx) => (
                              <span key={tIdx} className="px-2.5 py-1 text-[11px] font-semibold text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded-md">
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

            {/* TITRE LANGUES */}
            <h2 className="text-2xl font-bold text-white mb-8 mt-16 border-b border-slate-800 pb-4">
              {lang === 'fr' ? 'Langues' : 'Languages'}
            </h2>
            
            {/* CARTES LANGUES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:break-inside-avoid">
              {languagesList.map((langItem, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl">
                  <div>
                    <h4 className="font-bold text-slate-300 text-sm mb-1">{langItem.name[lang]}</h4>
                    <span className="text-xs font-medium text-slate-400">{langItem.desc[lang]}</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={14} 
                        className={`${
                          star <= langItem.score 
                            ? 'text-blue-500 fill-blue-500' 
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
          <div className="mb-20 mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
              {lang === 'fr' ? 'Détail des Missions Opérationnelles' : 'Operational Missions Detail'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missions.map((mission, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl group shadow-lg print:break-inside-avoid">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center mb-5">
                    {mission.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 mb-3 leading-tight">{mission.title[lang]}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed text-justify">{mission.text[lang]}</p>
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