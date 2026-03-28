import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, FileText, Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';

const achievedCerts = [
  {
    id: 'easi',
    title: 'Expert Architecture SI',
    subtitle: {
      fr: 'Titre RNCP Niveau 7',
      en: "RNCP Level 7"
    },
    issuer: 'Ynov Campus',
    dateIssued: { fr: 'Émis le : 21 Oct. 2025', en: 'Issued: Oct 21, 2025' },
    dateExpires: { fr: 'Valable à vie', en: 'Lifetime validity' },
    iconColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'group-hover:border-emerald-500/50',
    link: 'https://ynov.mycertif.app/certification/parchemin/1f0d0537-1c81-6a86-a84d-b9240b704ee0'
  },
  {
    id: 'aws',
    title: 'AWS Solutions Architect',
    subtitle: {
      fr: 'Associate (SAA-C03)',
      en: 'Associate (SAA-C03)'
    },
    issuer: 'Amazon Web Services',
    dateIssued: { fr: 'Émis le : 16 Oct. 2025', en: 'Issued: Oct 16, 2025' },
    dateExpires: { fr: 'Expire le : 16 Oct. 2028', en: 'Expires: Oct 16, 2028' },
    iconColor: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'group-hover:border-amber-500/50',
    link: 'https://www.credly.com/badges/8a9c0877-0c28-4b90-977b-3a3963753091'
  },
  {
    id: 'ccna',
    title: 'Cisco CCNA',
    subtitle: {
      fr: 'Cisco Certified Network Associate',
      en: 'Cisco Certified Network Associate'
    },
    issuer: 'Cisco',
    dateIssued: { fr: 'Émis le : 02 Août 2023', en: 'Issued: Aug 02, 2023' },
    dateExpires: { fr: 'Expire le : 02 Août 2026', en: 'Expires: Aug 02, 2026' },
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'group-hover:border-blue-500/50',
    link: 'https://www.credly.com/badges/cc18fb0c-6597-485b-ac93-903aed039c4d'
  }
];

const learningData = [
  {
    id: 'terraform',
    title: 'Terraform Associate',
    category: 'Infrastructure as Code',
    image: '/images/terraform.svg',
    theme: {
      text: 'text-purple-400',
      bg: 'bg-purple-600',
      border: 'border-purple-500/30',
      tabActive: 'bg-purple-500/10 border-purple-500/50',
    },
    description: {
      en: 'Consolidating my expertise in automated infrastructure deployment, state management, and multi-cloud provisioning to obtain the official HashiCorp certification.',
      fr: "Consolidation de mon expertise en déploiement d'infrastructure automatisé, gestion des états et provisionnement multi-cloud pour l'obtention de la certification HashiCorp."
    },
    progressText: { en: 'Certification prep - Chapter 7', fr: 'Prépa. Certification - Chapitre 7' },
    link: '/certification/terraform'
  },
  {
    id: 'ccnp',
    title: 'Cisco CCNP Enterprise',
    category: 'Advanced Networking',
    image: '/images/CCNA-ENCOR.png',
    theme: {
      text: 'text-blue-400',
      bg: 'bg-blue-600',
      border: 'border-blue-500/30',
      tabActive: 'bg-blue-500/10 border-blue-500/50',
    },
    description: {
      en: 'Validating my advanced skills in enterprise routing, switching architecture, and complex network troubleshooting through the CCNP certification track.',
      fr: "Validation de mes compétences avancées en routage d'entreprise, architecture de commutation et dépannage réseau complexe via le parcours de certification CCNP."
    },
    progressText: { en: 'Certification goal', fr: 'Objectif de certification' },
    link: '/certification/ccnp'
  },
  {
    id: 'vcp-dcv',
    title: 'VMware VCP-DCV',
    category: 'Data Center Virtualization',
    image: '/images/vcp-dcv.png',
    theme: {
      text: 'text-emerald-400',
      bg: 'bg-emerald-600',
      border: 'border-emerald-500/30',
      tabActive: 'bg-emerald-500/10 border-emerald-500/50',
    },
    description: {
      en: 'Deepening my knowledge of vSphere 8 architecture, implementing high availability (HA/DRS), and optimizing data center resources.',
      fr: "Approfondissement de mes connaissances sur l'architecture vSphere 8, la mise en œuvre de la haute disponibilité (HA/DRS) et l'optimisation des ressources du datacenter."
    },
    progressText: { en: 'Certification goal', fr: 'Objectif de certification' },
    link: '/certification/vcp-dcv'
  },
  {
    id: 'vcp-nv',
    title: 'VMware VCP-NV',
    category: 'Network Virtualization',
    image: '/images/vcp-nv.png',
    theme: {
      text: 'text-teal-400',
      bg: 'bg-teal-600',
      border: 'border-teal-500/30',
      tabActive: 'bg-teal-500/10 border-teal-500/50',
    },
    description: {
      en: 'Mastering software-defined networking with VMware NSX, focusing on overlay networks, distributed routing, and zero-trust micro-segmentation.',
      fr: "Maîtrise du réseau défini par logiciel avec VMware NSX, avec un focus sur les réseaux overlay, le routage distribué et la micro-segmentation zero-trust."
    },
    progressText: { en: 'Certification goal', fr: 'Objectif de certification' },
    link: '/certification/vcp-nv'
  },
  {
    id: 'az-104',
    title: 'Azure AZ-104',
    category: 'Cloud Administration',
    image: '/images/az-104.png',
    theme: {
      text: 'text-sky-400',
      bg: 'bg-sky-600',
      border: 'border-sky-500/30',
      tabActive: 'bg-sky-500/10 border-sky-500/50',
    },
    description: {
      en: 'Validating my capabilities in managing Azure identities, networking, compute, and storage resources in enterprise environments.',
      fr: "Validation de mes capacités à gérer les identités, le réseau, le calcul et les ressources de stockage Azure dans des environnements d'entreprise."
    },
    progressText: { en: 'Certification goal', fr: 'Objectif de certification' },
    link: '/certification/az-104'
  }
];

const CurrentLearning = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeItem = learningData[currentIndex];

  useEffect(() => {
    const handleTabChange = (e) => {
      const tabId = e.detail;
      const index = learningData.findIndex(item => item.id === tabId);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    };
    window.addEventListener('changeLearningTab', handleTabChange);
    return () => window.removeEventListener('changeLearningTab', handleTabChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === learningData.length - 1 ? 0 : prevIndex + 1));
    }, 10000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section id="current-learning" className="py-20 md:py-24 border-t border-b border-slate-800/40 bg-slate-900/20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              {lang === 'fr' ? 'Certifications & Expertise' : 'Certifications & Expertise'}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              {lang === 'fr' 
                ? "Validation continue de mes compétences à travers les standards de l'industrie, des fondamentaux aux architectures avancées." 
                : "Continuous validation of my skills through industry standards, from fundamentals to advanced architectures."}
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={100}>
          <div className="mb-8 flex items-center gap-3">
            <CheckCircle2 className="text-emerald-500" size={24} />
            <h3 className="text-xl font-bold text-slate-200 uppercase tracking-wider">
              {lang === 'fr' ? 'Certifications Validées' : 'Achieved Certifications'}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {achievedCerts.map((cert) => (
              <a 
                key={cert.id}
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group flex items-start gap-4 bg-slate-950/50 border border-slate-800 rounded-2xl p-6 shadow-lg transition-all hover:-translate-y-1 ${cert.borderColor}`}
              >
                <div className={`p-3 rounded-xl shrink-0 transition-colors mt-1 ${cert.bgColor}`}>
                  <Award className={cert.iconColor} size={28} />
                </div>
                <div className="flex flex-col flex-1 h-full">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{cert.issuer}</p>
                  <h4 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors leading-tight mb-1.5">
                    {cert.title}
                  </h4>
                  <p className="text-sm font-medium text-blue-400/80 mb-4 leading-snug">
                    {cert.subtitle[lang]}
                  </p>
                  
                  <div className="flex items-end justify-between mt-auto pt-3 border-t border-slate-800/60">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11px] font-medium text-slate-300">
                        {cert.dateIssued[lang]}
                      </span>
                      <span className="text-[10px] font-medium text-slate-500">
                        {cert.dateExpires[lang]}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-blue-400 transition-colors pb-0.5">
                      {lang === 'fr' ? 'Vérifier' : 'Verify'} <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={200}>
          <div className="mb-8 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <h3 className="text-xl font-bold text-slate-200 uppercase tracking-wider ml-1">
              {lang === 'fr' ? 'En préparation' : 'In Progress'}
            </h3>
          </div>

          <div id="in-progress-slider" className="scroll-mt-24 bg-slate-950/40 border border-slate-800/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[580px] sm:min-h-[500px] md:h-[450px]">
            <div className="flex flex-col md:flex-row p-6 md:p-12 gap-6 md:gap-16 flex-1 items-center">
              
              <div key={`img-${activeItem.id}`} className="w-28 h-28 sm:w-40 sm:h-40 md:w-64 md:h-64 flex items-center justify-center relative shrink-0 animate-fade-in">
                <div className={`absolute inset-0 rounded-full blur-[40px] md:blur-[80px] opacity-20 transition-colors duration-1000 ${activeItem.theme.bg}`}></div>
                <img 
                  src={activeItem.image} 
                  alt={activeItem.title}
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl shrink-0" 
                />
              </div>

              <div className="flex-1 flex flex-col justify-center min-w-0 w-full text-center md:text-left">
                <div key={`text-${activeItem.id}`} className="animate-fade-in">
                  <p className={`text-xs md:text-sm font-bold tracking-widest uppercase mb-2 ${activeItem.theme.text}`}>
                    {activeItem.category}
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                    {activeItem.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-lg leading-relaxed mb-6 max-w-2xl line-clamp-4 md:line-clamp-3">
                    {activeItem.description[lang]}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-auto">
                  <Link
                    to={activeItem.link}
                    onClick={() => window.history.replaceState(null, '', '/#current-learning')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-1 ${activeItem.theme.bg} shadow-lg w-full sm:w-auto justify-center`}
                  >
                    <FileText size={18} />
                    {lang === 'fr' ? 'Voir mes travaux' : 'View my work'}
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                  <span className="text-xs font-medium text-slate-500 border border-slate-700/50 bg-slate-800/80 px-3 py-1.5 rounded-lg whitespace-nowrap">
                    {activeItem.progressText[lang]}
                  </span>
                </div>
              </div>

            </div>

            {/* Ajustement à grid-cols-2 md:grid-cols-5 pour les 5 onglets */}
            <div className="grid grid-cols-2 md:grid-cols-5 bg-slate-900/40 border-t border-slate-800">
              {learningData.map((item, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative p-4 md:p-5 text-center transition-colors duration-300 ${
                      isActive ? item.theme.tabActive : 'text-slate-500 hover:bg-slate-800/30'
                    } ${idx !== 0 ? 'border-l border-slate-800/50' : ''} ${idx > 1 ? 'border-t md:border-t-0 border-slate-800/50' : ''}`}
                  >
                    <p className={`font-bold text-xs md:text-sm ${isActive ? 'text-white' : 'text-slate-500'}`}>
                      {item.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CurrentLearning;