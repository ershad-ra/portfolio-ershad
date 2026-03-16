import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, ArrowUp } from 'lucide-react'; // <-- ArrowUp est de retour !
import FadeIn from '../components/FadeIn';
import TabSidebar from '../components/terraform/TabSidebar';
import TabContent from '../components/terraform/TabContent';
import { terraformData } from '../data/terraform/index';

const TerraformCert = ({ lang }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(terraformData[0].id);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Remonter en haut de page à l'ouverture du composant
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Détecter le défilement pour afficher le bouton "Retour en haut"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const activeTabData = terraformData.find(tab => tab.id === activeTab);

  return (
    <>
      <div className="min-h-screen bg-slate-950 pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <FadeIn direction="up">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-purple-400 transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              {lang === 'fr' ? 'Retour au Portfolio' : 'Back to Portfolio'}
            </button>

            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                <Award className="text-purple-400" size={32} />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Terraform Associate <span className="text-purple-400">Preparation</span>
                </h1>
                <p className="text-slate-400 mt-2">
                  {lang === 'fr' ? 'Mes notes de cours et mon évolution vers la certification.' : 'My course notes and journey towards the certification.'}
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row gap-10 items-start relative">
            
            {/* GAUCHE : Contenu principal */}
            <div className="flex-1 w-full min-w-0 order-2 lg:order-1">
              <TabContent activeTabData={activeTabData} />
            </div>

            {/* DROITE : Menu Flottant */}
            <div className="w-full lg:w-80 shrink-0 order-1 lg:order-2 lg:sticky lg:top-28 max-h-[40vh] lg:max-h-[calc(100vh-8rem)] overflow-y-auto pb-4 lg:pb-10 pr-2 bg-slate-950/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none z-10 rounded-b-xl lg:rounded-none border-b border-slate-800 lg:border-none
              [&::-webkit-scrollbar]:w-1.5 
              [&::-webkit-scrollbar-track]:bg-transparent 
              [&::-webkit-scrollbar-thumb]:bg-purple-500/20 
              hover:[&::-webkit-scrollbar-thumb]:bg-purple-500/50 
              [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              <TabSidebar 
                tabs={terraformData} 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                lang={lang} 
              />
            </div>

          </div>

        </div>
      </div>

      {/* BOUTON RETOUR EN HAUT (De retour et aligné au design principal) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default TerraformCert;