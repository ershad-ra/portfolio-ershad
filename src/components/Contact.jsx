import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';

const Contact = ({ t }) => {
  const [copiedItem, setCopiedItem] = useState(null);

  // Fonction pour copier le texte dans le presse-papier sans ouvrir le lien
  const handleCopy = (e, text, id) => {
    e.preventDefault(); // Empêche d'ouvrir le lien (mailto ou nouvel onglet)
    e.stopPropagation(); // Arrête la propagation du clic à la carte parente
    
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    
    // Remet l'icône de copie normale après 2 secondes
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
            
            {/* Effet lumineux de fond */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="inline-flex p-4 bg-blue-500/10 rounded-2xl mb-6 relative z-10">
              <Mail className="h-8 w-8 text-blue-400" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">{t.contact.title}</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">{t.contact.subtitle}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
              
              {/* CARTE EMAIL */}
              <a 
                href="mailto:ershad.ra@gmail.com" 
                className="relative flex flex-col items-center p-6 bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 rounded-2xl transition-all group shadow-sm hover:shadow-md"
              >
                {/* Bouton Copier */}
                <button
                  onClick={(e) => handleCopy(e, 'ershad.ra@gmail.com', 'email')}
                  className="absolute top-3 right-3 p-2 bg-slate-900/60 border border-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 z-20"
                  title="Copier l'email"
                >
                  {copiedItem === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>

                <Mail className="text-slate-400 group-hover:text-blue-400 mb-3 transition-colors" size={28} />
                <span className="text-sm font-semibold text-slate-200 mb-1">{t.contact.email}</span>
                <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">ershad.ra@gmail.com</span>
              </a>

              {/* CARTE LINKEDIN */}
              <a 
                href="https://www.linkedin.com/in/ershad-ramezani/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative flex flex-col items-center p-6 bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 rounded-2xl transition-all group shadow-sm hover:shadow-md"
              >
                {/* Bouton Copier */}
                <button
                  onClick={(e) => handleCopy(e, 'https://www.linkedin.com/in/ershad-ramezani/', 'linkedin')}
                  className="absolute top-3 right-3 p-2 bg-slate-900/60 border border-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 z-20"
                  title="Copier le lien LinkedIn"
                >
                  {copiedItem === 'linkedin' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>

                <Linkedin className="text-slate-400 group-hover:text-blue-400 mb-3 transition-colors" size={28} />
                <span className="text-sm font-semibold text-slate-200 mb-1">{t.contact.linkedin}</span>
                <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">ershad-ramezani</span>
              </a>

              {/* CARTE GITHUB */}
              <a 
                href="https://github.com/ershad-ra" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative flex flex-col items-center p-6 bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 rounded-2xl transition-all group shadow-sm hover:shadow-md"
              >
                {/* Bouton Copier */}
                <button
                  onClick={(e) => handleCopy(e, 'https://github.com/ershad-ra', 'github')}
                  className="absolute top-3 right-3 p-2 bg-slate-900/60 border border-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 z-20"
                  title="Copier le lien GitHub"
                >
                  {copiedItem === 'github' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>

                <Github className="text-slate-400 group-hover:text-blue-400 mb-3 transition-colors" size={28} />
                <span className="text-sm font-semibold text-slate-200 mb-1">{t.contact.github}</span>
                <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">ershad-ra</span>
              </a>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;