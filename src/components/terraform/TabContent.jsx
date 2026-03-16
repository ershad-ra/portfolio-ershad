import React from 'react';
import FadeIn from '../FadeIn';

const TabContent = ({ activeTabData }) => {
  if (!activeTabData) return null;

  // Nouvelle fonction pour détecter le code (`) ET le gras (**)
  const renderFormattedText = (text) => {
    // 1. On sépare d'abord par les backticks pour le code
    const codeParts = text.split('`');
    
    return codeParts.map((codePart, codeIndex) => {
      // Index impair = c'est du code en ligne
      if (codeIndex % 2 !== 0) {
        return (
          <code 
            key={`code-${codeIndex}`} 
            className="px-1.5 py-0.5 mx-0.5 bg-slate-800/80 text-purple-300 font-mono text-[13px] rounded border border-slate-700/50"
          >
            {codePart}
          </code>
        );
      }

      // 2. Si ce n'est pas du code, on cherche les doubles astérisques (**) pour le gras
      const boldParts = codePart.split('**');
      return boldParts.map((boldPart, boldIndex) => {
        // Index impair = c'est du gras
        if (boldIndex % 2 !== 0) {
          return (
            <strong key={`bold-${codeIndex}-${boldIndex}`} className="text-white font-bold">
              {boldPart}
            </strong>
          );
        }
        return boldPart; // Texte normal
      });
    });
  };

  const renderContent = (content) => {
    const parts = content.split('```');
    
    return parts.map((part, index) => {
      // Les index impairs (1, 3, 5...) sont les gros blocs de code
      if (index % 2 !== 0) {
        const codeContent = part.replace(/^(hcl|bash|json)\n/i, '').trim();
        return (
          <div key={index} className="bg-[#0d1117] border border-slate-800 rounded-xl p-4 my-6 overflow-x-auto shadow-inner">
            <pre className="text-purple-400 font-mono text-[13px] leading-relaxed whitespace-pre">
              <code>{codeContent}</code>
            </pre>
          </div>
        );
      }
      
      // Le reste est du texte normal
      return part.split('\n').map((paragraph, pIdx) => {
        const trimmed = paragraph.trim();
        if (trimmed === '') return <br key={pIdx} />;
        
        // Listes à puces
        if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
          return (
            <div key={pIdx} className="flex gap-2 pl-4">
              <span className="text-purple-500">•</span>
              <span>{renderFormattedText(trimmed.substring(1).trim())}</span>
            </div>
          );
        }
        
        // Paragraphe standard
        return <p key={pIdx}>{renderFormattedText(trimmed)}</p>;
      });
    });
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6 lg:p-10 shadow-xl">
      <FadeIn key={activeTabData.id} direction="up">
        <div className="space-y-12">
          {activeTabData.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 id={`section-${idx}`} className="text-2xl font-bold text-slate-200 border-b border-slate-800 pb-2 scroll-mt-28">
                {section.heading}
              </h2>
              <div className="text-slate-400 leading-relaxed space-y-4 text-[15px]">
                {renderContent(section.content)}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export default TabContent;