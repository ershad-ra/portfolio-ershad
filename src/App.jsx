import React, { useState, useEffect } from 'react';
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
  Cpu
} from 'lucide-react';

// --- DATA & TRANSLATIONS ---

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      profile: "Profil",
      experience: "Parcours",
      projects: "Projets",
      resume: "CV",
      resumeLink: "https://persys.fr/wp-content/uploads/2026/03/CV_fr_Ershad_Ramezani_Ingenieur_Systemes_Reseaux_fevrier_2026.pdf",
      language: "EN"
    },
    hero: {
      greeting: "SYS_ADMIN // CLOUD_ARCHITECT",
      role: "Ingénieur Systèmes & Réseaux",
      description: "Administrateur Infrastructures IT (4 ans+ d'exp.). Spécialisé en Build & Run, Support L2/L3 et Maintien en Condition Opérationnelle (MCO). Garant de la continuité d'activité (PCA/PRA).",
      certifications: "Certifications Officielles",
      viewProjects: "Explorer les projets",
      status: "Systèmes opérationnels"
    },
    aboutSection: {
      title: "Profil Système & Stack",
      subtitle: "Spécifications techniques et capacités opérationnelles.",
      profileTitle: "Informations d'exécution",
      languagesTitle: "Langues",
      skillsTitle: "Modules Techniques chargés"
    },
    timelineSection: {
      title: "Logs d'Exécution",
      subtitle: "Historique des déploiements professionnels et académiques.",
      expTitle: "Expériences Professionnelles",
      eduTitle: "Parcours Académique"
    },
    projectsSection: {
      title: "Architecture & Réalisations",
      subtitle: "Catalogue des déploiements et intégrations d'infrastructures."
    },
    projectDetail: {
      back: "Retour à l'index",
      descriptionTitle: "Détails de l'implémentation",
      technologies: "Stack Technique",
      viewPdf: "Consulter la documentation (PDF)"
    },
    contact: {
      title: "Initialiser une connexion",
      subtitle: "Pour toute opportunité ou question, contactez-moi directement via les canaux sécurisés ci-dessous.",
      email: "Courriel",
      linkedin: "Réseau Professionnel",
      github: "Dépôts de Code"
    },
    footer: "Ershad RAMEZANI. Tous droits réservés. Construit avec précision."
  },
  en: {
    nav: {
      home: "Home",
      profile: "Profile",
      experience: "Timeline",
      projects: "Projects",
      resume: "Resume",
      resumeLink: "https://persys.fr/wp-content/uploads/2026/03/Resume_EN_Ershad_Ramezani_Systems_Network_Engineer_Feb_2026.pdf",
      language: "FR"
    },
    hero: {
      greeting: "SYS_ADMIN // CLOUD_ARCHITECT",
      role: "Systems & Network Engineer",
      description: "IT Infrastructure Administrator (4+ years exp.). Specializing in Build & Run, L2/L3 Support, and Operational Maintenance. Guaranteeing Business Continuity (BCP/DRP).",
      certifications: "Official Certifications",
      viewProjects: "Explore projects",
      status: "Systems operational"
    },
    aboutSection: {
      title: "System Profile & Stack",
      subtitle: "Technical specifications and operational capabilities.",
      profileTitle: "Execution Information",
      languagesTitle: "Languages",
      skillsTitle: "Loaded Technical Modules"
    },
    timelineSection: {
      title: "Execution Logs",
      subtitle: "History of professional and academic deployments.",
      expTitle: "Professional Experience",
      eduTitle: "Education History"
    },
    projectsSection: {
      title: "Architecture & Implementations",
      subtitle: "Catalog of infrastructure deployments and integrations."
    },
    projectDetail: {
      back: "Return to index",
      descriptionTitle: "Implementation Details",
      technologies: "Tech Stack",
      viewPdf: "View Full Documentation (PDF)"
    },
    contact: {
      title: "Initialize Connection",
      subtitle: "For any opportunity or inquiry, reach out directly via the channels below.",
      email: "Email",
      linkedin: "Professional Network",
      github: "Code Repositories"
    },
    footer: "Ershad RAMEZANI. All rights reserved. Built with precision."
  }
};

const profileData = {
  languages: {
    fr: [
      { name: "Français", level: "Bilangue" },
      { name: "Anglais", level: "Bilangue" },
      { name: "Persan (Farsi)", level: "Langue maternelle" }
    ],
    en: [
      { name: "French", level: "Bilingual" },
      { name: "English", level: "Bilingual" },
      { name: "Persian (Farsi)", level: "Native" }
    ]
  },
  skills: [
    { id: "net", category: "Network", tools: "Cisco, Aruba, D-Link | OSPF, BGP, VLANs, HA, LAN/WAN/WLAN, Wireshark" },
    { id: "sec", category: "Security", tools: "Fortinet, Cisco ASA, SonicWall | VPN (IPsec/SSL), ACLs, RADIUS, MFA" },
    { id: "cloud", category: "Cloud & Virt", tools: "Azure, AWS | VMware (vSphere, NSX), Hyper-V, Infra Hybride" },
    { id: "sys", category: "Systems & Auto", tools: "Windows, Linux | Ansible, Terraform, PowerShell, Bash" },
    { id: "bcp", category: "Resilience", tools: "Veeam Backup & Replication, Gestion PCA/PRA" }
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
        "Point de contact principal pour les clients via système de permanence (on-call).",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/cropped-ASA-failover.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/projet-failover-ASA.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/cropped-ansible_cisco_ios_new.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/projet-ansible-cisco-sample-1.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/cropped-ansible_glpi2_new.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/projet-ansible-1.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/cropped-IDSSIEMAtack.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/05/Projet-IDSSIEM_final.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/aruba_ansible.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/automatisation_sw_aruba_ansible_sample.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/cropped-MDM-miradore1.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/projet-MDM-sample.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/cropped-powershell.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/projet-powershell-sample-4.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/05/graylog_de_A_a_Z.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/05/projet-graylog-sample.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/radius-nps.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/projet-radius-sample-1.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/openvpn_project.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/openvpn_project_sample-1.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/squid-proxy1.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/projet-proxy-sample.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/vpn_ipsec_asa.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/IPsec-over-ASAs.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/cropped-CheckMK.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/projet-supervision-checkmk-sample.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/projet_dmz_pfsense.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/projet-DMZ-sur-pfsense_sample.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/projet_glpi_actifs.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/projet_glpi_actifs.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/restructuration-du-reseau.jpg",
    documentUrl: "https://persys.fr/wp-content/uploads/2023/04/restructuration_du_reseau.pdf",
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
    imageUrl: "https://persys.fr/wp-content/uploads/2023/04/vcenter_project.jpg",
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

// --- COMPONENTS ---

const App = () => {
  const [lang, setLang] = useState('fr');
  const [view, setView] = useState('home'); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [savedScroll, setSavedScroll] = useState(0); // Nouvel état pour sauvegarder la position

  // Handle scroll for nav styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  const handleProjectClick = (project) => {
    setSavedScroll(window.scrollY); // On sauvegarde la position actuelle
    setSelectedProject(project);
    setView('project');
    window.scrollTo(0, 0); // On remonte en haut pour lire le projet
  };

  const handleBack = () => {
    if (view === 'home') {
      // Si on est déjà sur l'accueil, on force le retour en haut de page avec une animation fluide
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Si on est sur un projet, on retourne à l'accueil
      setView('home');
      setSelectedProject(null);
      // On restaure instantanément la position de défilement précédente
      setTimeout(() => {
        window.scrollTo(0, savedScroll);
      }, 0);
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-teal-500/30 selection:text-teal-200 relative overflow-x-hidden">
      
      {/* Background Dot Grid Effect */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
          backgroundSize: '32px 32px' 
        }}
      ></div>

      {/* Floating Glass Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-full max-w-[90%] sm:max-w-fit">
        <div className="flex items-center justify-center gap-1 sm:gap-2 px-4 py-3 rounded-full bg-zinc-900/70 backdrop-blur-xl border border-white/10 shadow-2xl shadow-teal-900/20 overflow-x-auto">
          <button onClick={handleBack} className="px-3 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">
            {t.nav.home}
          </button>
          {view === 'home' && (
            <>
              <a href="#about" className="px-3 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-white/10 hover:text-white transition-colors hidden md:block whitespace-nowrap">
                {t.nav.profile}
              </a>
              <a href="#experience" className="px-3 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-white/10 hover:text-white transition-colors hidden md:block whitespace-nowrap">
                {t.nav.experience}
              </a>
              <a href="#projects" className="px-3 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">
                {t.nav.projects}
              </a>
            </>
          )}
          <a 
            href={t.nav.resumeLink}
            target="_blank" rel="noopener noreferrer"
            className="px-3 py-2 rounded-full text-xs sm:text-sm font-medium bg-teal-500/10 text-teal-400 hover:bg-teal-500 hover:text-black transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <FileText size={16} />
            <span className="hidden sm:inline">{t.nav.resume}</span>
          </a>
          <div className="w-px h-6 bg-white/20 mx-2 flex-shrink-0"></div>
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-xs font-bold text-white tracking-widest flex-shrink-0"
          >
            {t.nav.language}
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 pb-32">
        {view === 'home' ? (
          <>
            {/* HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center pt-10">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="flex flex-col justify-center">
                  
                  {/* Text Content */}
                  <div className="space-y-8 relative z-10 max-w-4xl">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-white/5 backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                      <span className="text-xs font-mono text-zinc-400 tracking-wider uppercase">{t.hero.status}</span>
                    </div>
                    
                    <div>
                      <h2 className="text-teal-400 font-mono tracking-widest uppercase text-sm mb-4">
                        {t.hero.greeting}
                      </h2>
                      <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
                        ERSHAD<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                          RAMEZANI
                        </span>
                      </h1>
                      <p className="text-xl sm:text-2xl text-zinc-300 font-light tracking-wide border-l-2 border-teal-500 pl-4 mb-6">
                        {t.hero.role}
                      </p>
                      <p className="text-base sm:text-lg text-zinc-500 font-mono max-w-xl leading-relaxed">
                        <span className="text-teal-500 mr-2">{'>'}</span> 
                        {t.hero.description}
                      </p>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4">
                      {/* Clickable Certifications to Credly */}
                      <a 
                        href="https://www.credly.com/badges/8a9c0877-0c28-4b90-977b-3a3963753091" 
                        target="_blank" rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 hover:border-teal-500/50 rounded-lg px-5 py-3 shadow-lg transition-all"
                      >
                        <Award className="text-orange-400 group-hover:scale-110 transition-transform" size={24} />
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono mb-0.5">Cert</p>
                          <p className="font-bold text-white text-sm flex items-center gap-1">
                            AWS Architect <ArrowUpRight size={12} className="text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </p>
                        </div>
                      </a>
                      <a 
                        href="https://www.credly.com/badges/cc18fb0c-6597-485b-ac93-903aed039c4d"
                        target="_blank" rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 hover:border-teal-500/50 rounded-lg px-5 py-3 shadow-lg transition-all"
                      >
                        <Award className="text-cyan-400 group-hover:scale-110 transition-transform" size={24} />
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono mb-0.5">Cert</p>
                          <p className="font-bold text-white text-sm flex items-center gap-1">
                            Cisco CCNA <ArrowUpRight size={12} className="text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* PROFILE & SKILLS SECTION */}
            <section id="about" className="py-24 border-t border-white/5 bg-zinc-950/80">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-16">
                  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">{t.aboutSection.title}</h2>
                  <p className="text-zinc-400 font-mono text-sm">{t.aboutSection.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  
                  {/* Left: Languages & Info */}
                  <div className="lg:col-span-4 space-y-8">
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-sm">
                      <h3 className="text-xs font-mono tracking-widest uppercase text-teal-400 mb-6 flex items-center gap-2">
                        <Terminal size={14} /> {t.aboutSection.languagesTitle}
                      </h3>
                      <ul className="space-y-4">
                        {profileData.languages[lang].map((l, i) => (
                          <li key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-white text-sm font-medium">{l.name}</span>
                            <span className="text-zinc-500 font-mono text-xs">{l.level}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Technical Stack */}
                  <div className="lg:col-span-8">
                    <div className="bg-zinc-900/30 backdrop-blur-sm border border-white/5 p-6 sm:p-8 rounded-sm h-full">
                      <h3 className="text-xs font-mono tracking-widest uppercase text-teal-400 mb-8 flex items-center gap-2">
                        <Cpu size={14} /> {t.aboutSection.skillsTitle}
                      </h3>
                      <div className="space-y-6 font-mono text-sm">
                        {profileData.skills.map(skill => (
                          <div key={skill.id} className="group">
                            <div className="text-zinc-500 mb-1 flex items-center gap-2">
                              <span className="text-teal-500/50">[{skill.id}]</span> 
                              <span className="uppercase tracking-wider">{skill.category}:</span>
                            </div>
                            <div className="text-zinc-300 pl-4 sm:pl-8 border-l border-white/5 group-hover:border-teal-500/50 transition-colors py-1">
                              {skill.tools}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* TIMELINE: EXPERIENCE & EDUCATION */}
            <section id="experience" className="py-24 border-t border-white/5">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-16">
                  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">{t.timelineSection.title}</h2>
                  <p className="text-zinc-400 font-mono text-sm">{t.timelineSection.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  
                  {/* Experience Column */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
                      <Briefcase className="text-teal-500" size={20} />
                      {t.timelineSection.expTitle}
                    </h3>
                    <div className="space-y-12 pl-4 border-l border-white/10">
                      {experienceData[lang].map((exp, i) => (
                        <div key={i} className="relative pl-6">
                          <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-teal-500 ring-4 ring-black"></div>
                          <span className="text-xs font-mono text-teal-400 tracking-wider mb-2 block">{exp.year}</span>
                          <h4 className="text-lg font-bold text-white mb-1">{exp.role}</h4>
                          <span className="text-sm font-mono text-zinc-500 mb-4 block uppercase tracking-wide">{exp.company}</span>
                          <p className="text-sm text-zinc-300 mb-4 leading-relaxed font-light">{exp.description}</p>
                          <ul className="space-y-2">
                            {exp.details.map((detail, j) => (
                              <li key={j} className="text-xs text-zinc-400 flex items-start gap-2">
                                <span className="text-teal-500 mt-1">{'>'}</span>
                                <span className="leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education Column */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
                      <GraduationCap className="text-teal-500" size={20} />
                      {t.timelineSection.eduTitle}
                    </h3>
                    <div className="space-y-10 pl-4 border-l border-white/10">
                      {educationData[lang].map((edu, i) => (
                        <div key={i} className="relative pl-6">
                          <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-600 ring-4 ring-black"></div>
                          <span className="text-xs font-mono text-zinc-400 tracking-wider mb-2 block">{edu.year}</span>
                          <h4 className="text-base font-bold text-white mb-1">{edu.degree}</h4>
                          <span className="text-sm font-mono text-zinc-500 block">{edu.school}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* PROJECTS SECTION - MASONRY/BENTO FEEL */}
            <section id="projects" className="py-24 relative border-t border-white/5 bg-zinc-950/50">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">{t.projectsSection.title}</h2>
                    <p className="text-zinc-400 font-mono text-sm max-w-xl">{t.projectsSection.subtitle}</p>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-teal-500 font-mono text-sm">
                    <Code size={16} />
                    <span>{projectsData.length} modules</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectsData.map((project) => (
                    <div 
                      key={project.id}
                      onClick={() => handleProjectClick(project)}
                      className="group cursor-pointer flex flex-col bg-zinc-900/40 backdrop-blur-sm border border-white/5 hover:border-teal-500/40 hover:bg-zinc-900/80 transition-all duration-500 overflow-hidden"
                    >
                      <div className="relative aspect-[700/474] overflow-hidden border-b border-white/5">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <img 
                          src={project.imageUrl} 
                          alt={project[lang].title} 
                          className="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md p-2 rounded-sm border border-white/10">
                          <project.icon size={20} className="text-teal-400" />
                        </div>
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-teal-300 transition-colors">
                            {project[lang].title}
                          </h3>
                          <p className="text-sm text-zinc-400 line-clamp-2 mb-6">
                            {project[lang].subtitle}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="px-2 py-1 text-[10px] font-mono tracking-wider uppercase bg-black/50 text-zinc-300 border border-white/10 rounded-sm">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-2 py-1 text-[10px] font-mono tracking-wider uppercase text-teal-500">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CONTACT SECTION - MINIMALIST TERMINAL STYLE */}
            <section id="contact" className="py-32 border-t border-white/5">
              <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 p-8 sm:p-12 text-center">
                  <div className="inline-flex p-4 bg-teal-500/10 rounded-sm mb-6">
                    <Mail className="h-8 w-8 text-teal-400" />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-2">{t.contact.title}</h2>
                  <p className="text-zinc-400 font-mono text-sm mb-12">{t.contact.subtitle}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <a 
                      href="mailto:ershad.ra@gmail.com"
                      className="flex flex-col items-center justify-center gap-4 p-8 bg-black/50 border border-zinc-800 hover:border-teal-500 transition-colors group cursor-pointer"
                    >
                      <Mail className="text-zinc-500 group-hover:text-teal-400 transition-colors" size={32} />
                      <span className="font-mono text-sm text-white">ershad.ra@gmail.com</span>
                      <span className="text-xs font-bold text-teal-500 uppercase tracking-widest mt-2 flex items-center gap-2">
                        {t.contact.email} <ArrowUpRight size={14} />
                      </span>
                    </a>

                    <a 
                      href="https://www.linkedin.com/in/ershad-ramezani/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-4 p-8 bg-black/50 border border-zinc-800 hover:border-teal-500 transition-colors group cursor-pointer"
                    >
                      <Linkedin className="text-zinc-500 group-hover:text-teal-400 transition-colors" size={32} />
                      <span className="font-mono text-sm text-white text-center">linkedin.com/in/ershad-ramezani</span>
                      <span className="text-xs font-bold text-teal-500 uppercase tracking-widest mt-2 flex items-center gap-2">
                        {t.contact.linkedin} <ArrowUpRight size={14} />
                      </span>
                    </a>

                    <a 
                      href="https://github.com/ershad-ra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-4 p-8 bg-black/50 border border-zinc-800 hover:border-teal-500 transition-colors group cursor-pointer"
                    >
                      <Github className="text-zinc-500 group-hover:text-teal-400 transition-colors" size={32} />
                      <span className="font-mono text-sm text-white text-center">github.com/ershad-ra</span>
                      <span className="text-xs font-bold text-teal-500 uppercase tracking-widest mt-2 flex items-center gap-2">
                        {t.contact.github} <ArrowUpRight size={14} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* PROJECT DETAIL VIEW - EDITORIAL / TECH LOG STYLE */
          <div className="min-h-screen pt-24 pb-32">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <button 
                onClick={handleBack}
                className="group flex items-center gap-3 text-sm font-mono tracking-widest uppercase text-zinc-500 hover:text-white transition-colors mb-12"
              >
                <ChevronLeft size={16} className="text-teal-500 group-hover:-translate-x-1 transition-transform" />
                {t.projectDetail.back}
              </button>

              {selectedProject && (
                <article className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <header className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                      <selectedProject.icon size={40} className="text-teal-500" />
                      <div className="h-px bg-white/10 flex-grow"></div>
                      <span className="font-mono text-xs text-zinc-500">ID: {selectedProject.id.toString().padStart(3, '0')}</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
                      {selectedProject[lang].title}
                    </h1>
                    <p className="text-xl md:text-2xl text-teal-400 font-light border-l-2 border-white/10 pl-4">
                      {selectedProject[lang].subtitle}
                    </p>
                  </header>

                  {/* Cinematic Image Hero */}
                  <div className="relative aspect-[21/9] w-full mb-16 overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl shadow-black">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject[lang].title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Main Description */}
                    <div className="lg:col-span-8 space-y-8">
                      <div>
                        <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-6 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                          {t.projectDetail.descriptionTitle}
                        </h2>
                        <p className="text-zinc-300 text-lg leading-relaxed font-light">
                          {selectedProject[lang].description}
                        </p>
                      </div>
                    </div>

                    {/* Sidebar Details */}
                    <div className="lg:col-span-4">
                      <div className="sticky top-32">
                        {selectedProject.documentUrl && (
                          <a 
                            href={selectedProject.documentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold uppercase tracking-widest text-xs sm:text-sm transition-all mb-8 shadow-lg shadow-teal-500/20 rounded-sm"
                          >
                            <FileText size={18} />
                            <span className="text-center">{t.projectDetail.viewPdf}</span>
                            <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                          </a>
                        )}
                        <div className="p-8 bg-zinc-900/50 backdrop-blur-md border border-white/5">
                          <h3 className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-6">
                            {t.projectDetail.technologies}
                          </h3>
                          <div className="flex flex-col gap-3">
                            {selectedProject.tags.map((tag, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <Code size={14} className="text-teal-500" />
                                <span className="text-sm font-mono text-white">
                                  {tag}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </article>
              )}
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 bg-black py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold tracking-tighter text-white">
              E<span className="text-teal-500">.</span>R
            </span>
          </div>
          <p className="text-zinc-600 font-mono text-xs uppercase tracking-wider text-center">
            &copy; {new Date().getFullYear()} {t.footer}
          </p>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/ershad-ramezani/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/ershad-ra" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;