import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUp, ChevronDown, List } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import TabSidebar from '../components/cert-in-prep/TabSidebar';
import TabContent from '../components/cert-in-prep/TabContent';
import { vcpDcvData } from '../data/vcp-dcv/index';

const VcpDcvCert = ({ lang }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(vcpDcvData[0].id);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const activeTabData = vcpDcvData.find(tab => tab.id === activeTab);
  const displayTitle = activeTabData?.title?.[lang] || activeTabData?.title?.en || '';

  return (
    <>
      <div className="min-h-screen bg-slate-950 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <FadeIn direction="up">
            <button 
              onClick={() => navigate('/#current-learning')}
              className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-emerald-400 transition-colors mb-8 mt-4 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              {lang === 'fr' ? 'Retour aux Projets en cours' : 'Back to Current Projects'}
            </button>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl w-fit flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                {/* INTÉGRATION DU LOGO ICI */}
                <img src="/images/vcp-dcv.png" alt="VMware VCP-DCV" className="w-10 h-10 object-contain drop-shadow-md" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  VMware VCP-DCV <span className="text-emerald-400">Preparation</span>
                </h1>
                <p className="text-slate-400 mt-2">
                  {lang === 'fr' ? 'Mes notes et architectures de laboratoires vSphere.' : 'My study notes and vSphere lab architectures.'}
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row gap-10 items-start relative">
            <div className="w-full lg:hidden sticky top-20 z-40 bg-slate-950/90 backdrop-blur-md pt-2 pb-4 border-b border-slate-800 shadow-xl">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <List size={20} className="text-slate-400" />
                  <span className="font-bold text-white text-sm">{displayTitle}</span>
                </div>
                <ChevronDown className={`text-slate-400 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[60vh] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="bg-slate-900/90 border border-slate-700 rounded-xl p-2 max-h-[60vh] overflow-y-auto shadow-2xl [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-emerald-500/30 hover:[&::-webkit-scrollbar-thumb]:bg-emerald-500/50 [&::-webkit-scrollbar-thumb]:rounded-full">
                  <TabSidebar tabs={vcpDcvData} activeTab={activeTab} setActiveTab={setActiveTab} onSubmenuClick={() => setIsMobileMenuOpen(false)} color="emerald" />
                </div>
              </div>
            </div>

            <div className="flex-1 w-full min-w-0">
              <TabContent activeTabData={activeTabData} color="emerald" />
            </div>

            <div className="hidden lg:block w-80 shrink-0 sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pb-10 pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-emerald-500/30 hover:[&::-webkit-scrollbar-thumb]:bg-emerald-500/50 [&::-webkit-scrollbar-thumb]:rounded-full">
              <TabSidebar tabs={vcpDcvData} activeTab={activeTab} setActiveTab={setActiveTab} color="emerald" />
            </div>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 z-[100] p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-1">
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default VcpDcvCert;