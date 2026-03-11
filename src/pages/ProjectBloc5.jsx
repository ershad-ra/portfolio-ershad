import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Mail, Search, PenTool, Cpu, BookOpen } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const projectBloc5Translations = {
  fr: {
    back: "retour au projet phare",
    nav: { comprendre: "Comprendre", concevoir: "Concevoir", miseenplace: "Mise en place", transmettre: "Transmettre", contact: "Me Contacter" },
    hero: {
      badge: "Bloc 5 - Certification EASI",
      titleStart: "Architecture & ",
      titleHighlight: "Soutenance",
      desc: "Conception, intégration de l'architecture SI et défense du projet de Cloud privé (VMware VCF) devant le jury.",
      by: "Par"
    },
    sec1: {
      title: "Comprendre : État des lieux (A5.1)",
      p1: "La première étape indispensable a été de cartographier la structure existante du SI et d'analyser les orientations stratégiques du commanditaire. Il fallait comprendre les contraintes logistiques et réglementaires (RSE).",
      p2: "Cette analyse approfondie a permis d'élaborer un cahier des charges technique rigoureux, définissant les attentes fonctionnelles et cadrant le périmètre de la nouvelle architecture."
    },
    sec2: {
      title: "Concevoir : L'Architecture Cible (A5.2)",
      p1: "Sur la base du cahier des charges, une architecture SI cible efficiente, hautement disponible (PRA/PCA) et sécurisée a été dessinée. Chaque choix technologique a été comparé aux bonnes pratiques actuelles du marché.",
      p2: "Pour valider ces choix, un scénario de recette a été défini et un PoC (Proof of Concept) a été préparé, permettant d'éprouver la cohérence et l'interopérabilité des équipements proposés."
    },
    sec3: {
      title: "Mise en place : Déploiement & Automatisation (A5.3)",
      p1: "La phase d'intégration a nécessité le déploiement des systèmes et équipements réseaux selon des protocoles justifiés. Une place prépondérante a été donnée à l'automatisation (via scripts et Terraform) pour faciliter les déploiements récurrents.",
      p2: "Suite à l'intégration, une campagne de tests exhaustive (basée sur le cahier de recettes) a été menée. Le compte-rendu de ces tests a démontré la pleine viabilité de la solution."
    },
    sec4: {
      title: "Transmettre : Documentation & Passation (A5.4)",
      p1: "Un projet n'est abouti que s'il est utilisable par les équipes. La dernière phase s'est concentrée sur la rédaction des documentations techniques et des procédures d'exploitation.",
      p2: "Des guides d'utilisation structurés ont été transférés aux administrateurs pour garantir une totale autonomie opérationnelle sur la nouvelle infrastructure Cloudnex."
    },
    dl: {
      title: "Envie d'échanger sur cette soutenance ?",
      desc: "Le support de présentation complet utilisé face au jury contient des données stratégiques. N'hésitez pas à me contacter pour discuter de mon approche architecturale ou d'une éventuelle collaboration.",
      btn: "Me Contacter pour en savoir plus",
      file: ""
    },
    footer: "Projet de Fin d'Études - Master EASI."
  },
  en: {
    back: "back to capstone",
    nav: { comprendre: "Understand", concevoir: "Design", miseenplace: "Implement", transmettre: "Transfer", contact: "Contact Me" },
    hero: {
      badge: "Block 5 - EASI Certification",
      titleStart: "Architecture & ",
      titleHighlight: "Defense",
      desc: "Design, integration of the IS architecture, and defense of the private Cloud project (VMware VCF) before the jury.",
      by: "By"
    },
    sec1: {
      title: "Understand: As-Is Audit (A5.1)",
      p1: "The essential first step was to map the existing IS structure and analyze the sponsor's strategic orientations. It was necessary to understand the logistical and regulatory (CSR) constraints.",
      p2: "This in-depth analysis led to the drafting of a rigorous technical specification document, defining the functional expectations and framing the scope of the new architecture."
    },
    sec2: {
      title: "Design: Target Architecture (A5.2)",
      p1: "Based on the specifications, an efficient, highly available (DRP/BCP), and secure target IS architecture was drawn. Each technological choice was compared to current market best practices.",
      p2: "To validate these choices, a testing scenario was defined, and a PoC (Proof of Concept) was prepared, testing the consistency and interoperability of the proposed equipment."
    },
    sec3: {
      title: "Implement: Deployment & Automation (A5.3)",
      p1: "The integration phase required deploying systems and networking equipment according to justified protocols. A major emphasis was placed on automation (via scripts and Terraform) to facilitate recurring deployments.",
      p2: "Following integration, an exhaustive testing campaign (based on the test plan) was conducted. The resulting test report demonstrated the full viability of the solution."
    },
    sec4: {
      title: "Transfer: Documentation & Handover (A5.4)",
      p1: "A project is only complete when it is usable by the teams. The final phase focused on drafting technical documentation and operational procedures.",
      p2: "Structured user guides were handed over to administrators to ensure complete operational autonomy over the new Cloudnex infrastructure."
    },
    dl: {
      title: "Want to discuss this defense?",
      desc: "The full presentation deck used before the jury contains strategic data. Feel free to contact me to discuss my architectural approach or a potential collaboration.",
      btn: "Contact Me for more info",
      file: ""
    },
    footer: "Master's Capstone Project - EASI Certification."
  }
};

const ProjectBloc5 = ({lang, onToggleLanguage, onContactClick }) => {
  const navigate = useNavigate();
  const pt = projectBloc5Translations[lang] || projectBloc5Translations.fr;

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
              <a href="#comprendre" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.comprendre}</a>
              <a href="#concevoir" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.concevoir}</a>
              <a href="#miseenplace" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.miseenplace}</a>
              <a href="#transmettre" className="text-slate-400 hover:text-white font-medium text-sm transition-colors">{pt.nav.transmettre}</a>
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

      <section className="bg-slate-900 text-white pt-20 pb-24 lg:pt-32 lg:pb-40 px-4 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.95)), url('https://assets.persys.fr/Portfolio/Images/bloc5/premier%20page%20de%20powerpoint.PNG')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-6 border border-amber-500/30">{pt.hero.badge}</span>
          </FadeIn>
          <FadeIn delay={100} direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">{pt.hero.titleStart} <span className="text-amber-400">{pt.hero.titleHighlight}</span></h1>
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
        <section id="comprendre" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc5/A5.1%20comprendre.PNG" alt="Comprendre" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl text-blue-400 mb-6 border border-blue-500/20"><Search className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec1.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec1.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec1.p2}</p>
            </div>
          </FadeIn>
        </section>

        <section id="concevoir" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-xl text-indigo-400 mb-6 border border-indigo-500/20"><PenTool className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec2.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec2.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec2.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc5/A5.2%20concevoir.PNG" alt="Concevoir" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
        </section>

        <section id="miseenplace" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <FadeIn direction="right" className="order-2 lg:order-1 bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 flex justify-center items-center">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc5/A5.3%20mise%20en%20place.PNG" alt="Mise en place" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-xl text-emerald-400 mb-6 border border-emerald-500/20"><Cpu className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec3.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec3.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec3.p2}</p>
            </div>
          </FadeIn>
        </section>

        <section id="transmettre" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-xl text-amber-400 mb-6 border border-amber-500/20"><BookOpen className="h-6 w-6" /></div>
              <h2 className="text-3xl font-bold mb-4 text-white">{pt.sec4.title}</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">{pt.sec4.p1}</p>
              <p className="text-slate-400 leading-relaxed">{pt.sec4.p2}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800">
            <img src="https://assets.persys.fr/Portfolio/Images/bloc5/A5.4%20transmettre.PNG" alt="Transmettre" className="max-w-full h-auto rounded-xl shadow-sm mx-auto block" />
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

export default ProjectBloc5;