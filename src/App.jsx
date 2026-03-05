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
  ArrowUp
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

// --- DATA & TRANSLATIONS ---

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      profile: "Expertise",
      experience: "Parcours",
      projects: "Projets",
      contact: "Contact",
      resume: "Consulter mon CV",
      resumeLink: "https://persys.fr/wp-content/uploads/2026/03/CV_fr_Ershad_Ramezani_Ingenieur_Systemes_Reseaux_fevrier_2026.pdf",
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
      projects: "Projects",
      contact: "Contact",
      resume: "View Resume",
      resumeLink: "https://persys.fr/wp-content/uploads/2026/03/Resume_EN_Ershad_Ramezani_Systems_Network_Engineer_Feb_2026.pdf",
      language: "FR"
    },
    hero: {
      greeting: "Ershad RAMEZANI",
      role: "Systems, Network & Cloud Engineer",
      description: "IT Infrastructure Administrator with 4+ years of experience. Specializing in Build & Run, L2/L3 Support, and Operational Maintenance. Guaranteeing resilience and Business Continuity (BCP/DRP).",
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

// --- MAIN APP COMPONENT ---

const App = () => {
  const [lang, setLang] = useState('fr');
  const [view, setView] = useState('home'); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [savedScroll, setSavedScroll] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Set Document Title and Favicon on Load
  useEffect(() => {
    document.title = "Ershad Ramezani's Portfolio";
    
    // Create a dynamic SVG Favicon (Server Icon)
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
    setView('project');
    window.scrollTo(0, 0); 
  };

  const handleBack = () => {
    if (view === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setView('home');
      setSelectedProject(null);
      setTimeout(() => {
        window.scrollTo(0, savedScroll);
      }, 0);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200">

      {/* Infrastructure / Cloud Grid Background */}
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

      {/* Top Corporate Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-1' : 'bg-transparent py-3'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleBack}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
                ER
              </div>
              <span className="text-lg font-semibold tracking-tight text-white hidden sm:block">
                Ershad Ramezani
              </span>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6">
              {view === 'home' && (
                <div className="hidden md:flex items-center gap-6">
                  <a href="#about" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">{t.nav.profile}</a>
                  <a href="#experience" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">{t.nav.experience}</a>
                  <a href="#projects" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">{t.nav.projects}</a>
                  <a href="#contact" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">{t.nav.contact}</a>
                </div>
              )}
              
              <div className="flex items-center gap-3 sm:gap-4 md:border-l md:border-slate-800 md:pl-6 md:ml-2">
                <a 
                  href={t.nav.resumeLink}
                  target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-sm font-semibold bg-white text-slate-900 hover:bg-slate-200 transition-colors flex items-center gap-2"
                >
                  <FileText size={16} />
                  <span className="hidden sm:inline">{t.nav.resume}</span>
                </a>
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-sm font-bold text-white transition-colors border border-slate-700/50"
                >
                  {t.nav.language}
                </button>
                {/* Mobile Menu Button */}
                {view === 'home' && (
                  <button 
                    className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {view === 'home' && isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute top-full left-0 w-full shadow-xl">
            <div className="px-6 py-4 flex flex-col gap-2">
              <a href="#about" onClick={closeMobileMenu} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors py-2">{t.nav.profile}</a>
              <a href="#experience" onClick={closeMobileMenu} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors py-2">{t.nav.experience}</a>
              <a href="#projects" onClick={closeMobileMenu} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors py-2">{t.nav.projects}</a>
              <a href="#contact" onClick={closeMobileMenu} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors py-2">{t.nav.contact}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 pt-20 pb-32">
        {view === 'home' ? (
          <>
            {/* HERO SECTION */}
            <section className="relative min-h-[85vh] flex flex-col pt-8 lg:pt-0">
              {/* On ajoute une bordure basse pour créer une ligne de "sol" (floor) */}
              <div className="flex-1 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row justify-between pt-12 pb-0 gap-8 border-b border-slate-800/40">
                
                {/* Colonne de Gauche : Texte */}
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
                    {/* On s'assure qu'il n'y a pas d'espace (margin/padding) en dessous des badges */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 mb-0">
                      {/* Credly Badges styled professionally */}
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

                {/* Colonne de Droite : Photo Professionnelle */}
                <div className="flex-1 relative flex justify-center lg:justify-end items-end w-full lg:pl-10 mt-8 lg:mt-0">
                  {/* Image réduite et ancrée parfaitement sur la même ligne horizontale */}
                  <FadeIn delay={200} direction="left" className="relative z-10 w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[340px] flex justify-center items-end mt-auto h-full">
                    {/* Halo lumineux subtil derrière la silhouette */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-blue-600/20 to-indigo-500/20 blur-[60px] rounded-full -z-10"></div>
                    <img 
                      src="https://persys.fr/wp-content/uploads/2026/03/Ershad_Ramezani.png" 
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
                  {/* Languages Card */}
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

                  {/* Technical Stack Card */}
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

            {/* TIMELINE: EXPERIENCE & EDUCATION */}
            <section id="experience" className="py-24 border-t border-slate-800/50">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <FadeIn direction="up">
                  <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-3">{t.timelineSection.title}</h2>
                    <p className="text-slate-400">{t.timelineSection.subtitle}</p>
                  </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  
                  {/* Experience Column */}
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

                  {/* Education Column */}
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
                      <a 
                        href="mailto:ershad.ra@gmail.com"
                        className="flex flex-col items-center p-6 bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 rounded-2xl transition-all group"
                      >
                        <Mail className="text-slate-400 group-hover:text-blue-400 mb-3 transition-colors" size={28} />
                        <span className="text-sm font-semibold text-slate-200 mb-1">{t.contact.email}</span>
                        <span className="text-xs text-slate-500">ershad.ra@gmail.com</span>
                      </a>

                      <a 
                        href="https://www.linkedin.com/in/ershad-ramezani/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-6 bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 rounded-2xl transition-all group"
                      >
                        <Linkedin className="text-slate-400 group-hover:text-blue-400 mb-3 transition-colors" size={28} />
                        <span className="text-sm font-semibold text-slate-200 mb-1">{t.contact.linkedin}</span>
                        <span className="text-xs text-slate-500">ershad-ramezani</span>
                      </a>

                      <a 
                        href="https://github.com/ershad-ra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-6 bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 rounded-2xl transition-all group"
                      >
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
          /* PROJECT DETAIL VIEW */
          <div className="min-h-screen pt-8 pb-32">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <button 
                onClick={handleBack}
                className="group flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors mb-10 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full w-fit"
              >
                <ChevronLeft size={16} className="text-blue-400 group-hover:-translate-x-1 transition-transform" />
                {t.projectDetail.back}
              </button>

              {selectedProject && (
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
                    
                    {/* Main Description */}
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

                    {/* Sidebar Details */}
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

                  {/* Bottom Back Button */}
                  <FadeIn delay={600} direction="up" className="mt-16 pt-8 border-t border-slate-800/80 flex justify-center sm:justify-start">
                    <button 
                      onClick={handleBack}
                      className="group flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-5 py-2.5 rounded-full w-fit shadow-md"
                    >
                      <ChevronLeft size={16} className="text-blue-400 group-hover:-translate-x-1 transition-transform" />
                      {t.projectDetail.back}
                    </button>
                  </FadeIn>

                </article>
              )}
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-[10px]">ER</div>
          </div>
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} {t.footer}
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/ershad-ramezani/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/ershad-ra" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <Github size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-900/50 hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Retour en haut"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default App;