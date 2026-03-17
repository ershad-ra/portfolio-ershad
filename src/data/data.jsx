import { Network, ShieldCheck, Server, Terminal, Database, Plane, Bike, Mountain } from 'lucide-react';

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      profile: "Expertise",
      experience: "Parcours",
      capstone: "Projet de fin d'études",
      projects: "Projets",
      contact: "Contact",
      resume: "Consulter mon CV",
      resumeLink: "/cv/cv-fr.html",
      language: "EN"
    },
    hero: {
      greeting: "Ershad RAMEZANI",
      role: "Ingénieur Systèmes, Réseaux & Cloud",
      description: "Garant de la stabilité et de l'évolution de vos infrastructures IT. Fort de plus de 4 ans d'expérience en Build & Run et support avancé (N2/N3), je conçois des architectures cloud robustes et assure le maintien en condition opérationnelle (MCO) de vos environnements critiques (PCA/PRA).",
      certifications: "Certifications",
      viewProjects: "Découvrir mes projets",
      status: "Disponibilité: Haute"
    },
    aboutSection: {
      badge: "Profil Technique",
      titleStart: "Mes Domaines d'",
      titleHighlight: "Expertise",
      subtitle: "Technologies et infrastructures que je conçois, déploie et maintiens au quotidien.",
      languagesTitle: "Langues",
      skillsTitle: "Stack Technologique",
      softSkillsTitle: "Atouts",
      hobbiesTitle: "Centres d'intérêt"
    },
      timelineSection: {
      badge: "Mon Parcours",
      titleStart: "Mon Parcours & ",
      titleHighlight: "Expériences",
      subtitle: "Les étapes clés de mon évolution professionnelle et académique.",
      expTitle: "Expériences Professionnelles",
      eduTitle: "Formation"
    },
    capstone: {
      badge: "Projet de Fin d'Études",
      title: "Modernisation des Datacenters Cloudnex",
      subtitle: "Déploiement d'une plateforme VMware Cloud Foundation (VCF)",
      story1: "Durant mes deux années de Master, j'ai découvert progressivement la puissance de la virtualisation de calcul avec VMware vSphere, puis la virtualisation réseau avec VMware NSX. Cette expérience m'a amené à explorer en profondeur l'écosystème VMware, en particulier VMware Cloud Foundation (VCF), une plateforme intégrée pour construire un cloud privé moderne.",
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
      resumeLink: "/cv/cv-en.html",
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
      badge: "Technical Profile",
      titleStart: "My Core ",
      titleHighlight: "Expertise",
      subtitle: "Technologies and infrastructures I design, build, and maintain daily.",
      languagesTitle: "Languages",
      skillsTitle: "Technology Stack",
      softSkillsTitle: "Strengths",
      hobbiesTitle: "Interests"
    },
      timelineSection: {
      badge: "Career Path",
      titleStart: "My Career & ",
      titleHighlight: "Experience",
      subtitle: "The key milestones of my professional and academic journey.",
      expTitle: "Professional Experience",
      eduTitle: "Education"
    },
    capstone: {
      badge: "Master's Capstone Project",
      title: "Cloudnex Datacenters Modernization",
      subtitle: "Deploying a VMware Cloud Foundation (VCF) platform",
      story1: "During my two-year Master’s program, I progressively discovered the power of compute virtualization with VMware vSphere, then network virtualization with VMware NSX. This led me to deeply explore the VMware ecosystem, specifically VMware Cloud Foundation (VCF), an integrated platform for building a modern private cloud.",
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

export const profileData = {
  languages: {
    fr: [
      { name: "Français", level: "Bilingue", code: "FR", cert: null },
      { name: "Anglais", level: "Bilingue", code: "EN", cert: "C1" },
      { name: "Persan", level: "Langue maternelle", code: "FA", cert: null }
    ],
    en: [
      { name: "French", level: "Bilingual", code: "FR", cert: null },
      { name: "English", level: "Bilingual", code: "EN", cert: "C1" },
      { name: "Persian", level: "Native", code: "FA", cert: null }
    ]
  },
  softSkills: {
    fr: [
      { name: "Polyvalent", level: 5 },
      { name: "Esprit d’équipe", level: 5 },
      { name: "Autonome", level: 4 },
      { name: "Rigoureux", level: 5 }
    ],
    en: [
      { name: "Versatile", level: 5 },
      { name: "Team Player", level: 5 },
      { name: "Autonomous", level: 4 },
      { name: "Rigorous", level: 5 }
    ]
  },
  hobbies: {
    fr: [
      { label: "Voyages", desc: "Europe & Asie", icon: Plane },
      { label: "Sport", desc: "VTT & Outdoor", icon: Bike },
      { label: "Randonnée", desc: "Pyrénées", icon: Mountain }
    ],
    en: [
      { label: "Travels", desc: "Europe & Asia", icon: Plane },
      { label: "Sports", desc: "MTB & Outdoor", icon: Bike },
      { label: "Hiking", desc: "Pyrenees", icon: Mountain }
    ]
  },
  skills: [
    { 
      id: "net", 
      icon: Network, 
      color: "from-blue-500 to-cyan-400",
      fr: {
        category: "Réseaux",
        subtitle: "Architecture Multi-sites",
        tools: ["Cisco", "Aruba", "D-Link", "Meraki", "OSPF", "BGP", "LAN", "WAN", "WLAN", "VLAN", "Gestion des flux", "Link Aggregation", "LACP", "Failover"]
      },
      en: {
        category: "Network",
        subtitle: "Multi-site Architecture",
        tools: ["Cisco", "Aruba", "D-Link", "Meraki", "OSPF", "BGP", "LAN", "WAN", "WLAN", "VLAN", "Traffic Management", "Link Aggregation", "LACP", "Failover"]
      }
    },
    { 
      id: "cloud", 
      icon: Server, 
      color: "from-indigo-500 to-purple-400",
      fr: {
        category: "Cloud & Virt.",
        subtitle: "Infrastructures Hybrides",
        tools: ["VMware vSphere", "VCF", "NSX", "Hyper-V", "AWS", "Azure", "Docker", "Kubernetes", "IaaS", "SaaS"]
      },
      en: {
        category: "Cloud & Virt.",
        subtitle: "Hybrid Infrastructures",
        tools: ["VMware vSphere", "VCF", "NSX", "Hyper-V", "AWS", "Azure", "Docker", "Kubernetes", "IaaS", "SaaS"]
      }
    },
    { 
      id: "sec", 
      icon: ShieldCheck, 
      color: "from-emerald-500 to-green-400",
      fr: {
        category: "Sécurité",
        subtitle: "Sécurité Périmétrique",
        tools: ["SonicWall", "Fortinet", "Cisco ASA", "VPN IPsec", "VPN SSL", "Hardening", "Audit", "Certificats TLS", "EDR", "IDS/IPS", "Radius", "MFA", "IAM"]
      },
      en: {
        category: "Security",
        subtitle: "Perimeter Security",
        tools: ["SonicWall", "Fortinet", "Cisco ASA", "VPN IPsec", "VPN SSL", "Hardening", "Audit", "TLS Certificates", "EDR", "IDS/IPS", "Radius", "MFA", "IAM"]
      }
    },
    { 
      id: "ops", 
      icon: Terminal, 
      color: "from-amber-500 to-orange-400",
      fr: {
        category: "Gouvernance & Ops",
        subtitle: "Automation & Pilotage",
        tools: ["Windows", "Linux", "PowerShell", "Bash", "Veeam", "PRA/PCA", "Ansible", "Terraform", "ITIL", "Jira"]
      },
      en: {
        category: "Governance & Ops",
        subtitle: "Automation & Steering",
        tools: ["Windows", "Linux", "PowerShell", "Bash", "Veeam", "DRP/BCP", "Ansible", "Terraform", "ITIL", "Jira"]
      }
    }
  ]

};

export const experienceData = {
  fr: [
    {
      year: "2022 — 2025",
      role: "Administrateur Systèmes et Réseaux (Alternance)",
      company: "MISMO Informatique, Toulouse",
      description: "Référent technique en infogérance dédiée pour un client et ingénierie d’infrastructure pour un portefeuille de PME.",
      details: [
        "Audit & Ingénierie : Cartographie, matrices de flux, refonte LAN multisites et déploiement d'équipements réseau.",
        "Sécurité & Identité : Administration des pare-feux, politiques ACL, durcissement et gestion des annuaires/accès.",
        "Cloud & Virtualisation : Migrations Cloud (IaaS/SaaS) et administration des clusters HA.",
        "MCO & Résilience : Support technique N2/N3, supervision proactive, gestion de parc, PRA et automatisation.",
        "Conseil Client : Accompagnement en avant-vente, conseil technique et déploiement de solutions sur site.",
        "Environnement : Cisco, Aruba, Meraki, Fortinet, SonicWall, Azure, M365, vSphere, Hyper-V, Veeam, Ansible, PowerShell."
      ]
    },
    {
      year: "Août 2021",
      role: "Technicien Systèmes & Réseaux (Stage)",
      company: "Data Expertise, Toulouse",
      description: "Support technique N1/N2 et maintien en condition opérationnelle des infrastructures clients.",
      details: [
        "Relation Client : Point de contact pour les clients via un système de permanence (on-call).",
        "Gestion d'Incidents : Qualification et résolution des demandes techniques via l'outil GLPI.",
        "Maintenance Réseau : Mise à jour matérielle (firmware) et sauvegarde des configurations sur switchs et routeurs.",
        "Environnement : GLPI, Networking HP & D-Link, environnements Windows."
      ]
    },
    {
      year: "2016 — 2019",
      role: "Technicien Systèmes & Réseaux (CDI)",
      company: "Mairie de Téhéran, Téhéran, Iran",
      description: "Support et gestion de parc informatique pour les services municipaux du secteur public.",
      details: [
        "Déploiement à grande échelle : Gestion des déploiements massifs de postes de travail.",
        "Support de proximité : Assistance technique N1/N2 et dépannage sur site pour garantir la continuité des services.",
        "Maintenance du parc : Réalisation de la maintenance préventive et mises à jour logicielles.",
        "Connectivité Réseau : Garantie de la stabilité du LAN, brassage des baies de serveurs.",
        "Environnement : Windows Server, Active Directory, Câblage LAN, Support Desktop."
      ]
    }
  ],
  en: [
    {
      year: "2022 — 2025",
      role: "Systems & Network Administrator (Work-Study)",
      company: "MISMO Informatique, Toulouse",
      description: "Technical referent in dedicated managed services for a client and infrastructure engineering for a portfolio of SMBs.",
      details: [
        "Audit & Engineering : Mapping, traffic matrices, multi-site LAN redesign, and network equipment deployment.",
        "Security & Identity : Firewall administration, ACL policies, hardening, and directory/access management.",
        "Cloud & Virtualization : Cloud migrations (IaaS/SaaS) and HA cluster administration.",
        "Operations & Resilience : L2/L3 technical support, proactive monitoring, asset management, DRP, and automation.",
        "Client Consulting : Pre-sales support, technical consulting, and on-site solution deployment.",
        "Environment : Cisco, Aruba, Meraki, Fortinet, SonicWall, Azure, M365, vSphere, Hyper-V, Veeam, Ansible, PowerShell."
      ]
    },
    {
      year: "August 2021",
      role: "Systems & Network Technician (Internship)",
      company: "Data Expertise, Toulouse",
      description: "L1/L2 technical support and operational maintenance of client infrastructures.",
      details: [
        "Client Relations : Point of contact for clients via an on-call system.",
        "Incident Management : Qualification and resolution of technical requests using the GLPI tool.",
        "Network Maintenance : Hardware updates (firmware) and configuration backups on switches and routers.",
        "Environment : GLPI, HP & D-Link Networking, Windows environments."
      ]
    },
    {
      year: "2016 — 2019",
      role: "Systems & Network Technician (Permanent)",
      company: "Tehran Municipality, Tehran, Iran",
      description: "IT asset management and support for public sector municipal services.",
      details: [
        "Large-scale Deployment : Management of massive workstation deployments.",
        "On-site Support : L1/L2 technical assistance and on-site troubleshooting to ensure service continuity.",
        "Asset Maintenance : Preventive maintenance and software updates.",
        "Network Connectivity : Ensuring LAN stability, patching and cabling of server racks.",
        "Environment : Windows Server, Active Directory, LAN Cabling, Desktop Support."
      ]
    }
  ]
};

export const educationData = {
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

export const projectsData = [
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
    documentUrl: "https://assets.persys.fr/Portfolio/Projects/15. Gestion des actifs GLPI et FusionInventory.pdf",
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