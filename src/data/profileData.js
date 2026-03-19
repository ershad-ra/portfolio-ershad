import { Plane, Bike, Mountain, Network, Server, ShieldCheck, Terminal } from 'lucide-react';

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