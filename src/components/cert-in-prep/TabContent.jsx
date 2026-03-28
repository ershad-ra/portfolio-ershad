import React from 'react';

const TabContent = ({ activeTabData, color = 'purple' }) => {
  if (!activeTabData) return null;

  // Dictionnaire de couleurs enrichi
  const themes = {
    purple: { code: 'text-purple-300', bullet: 'text-purple-500', pre: 'text-purple-400' },
    blue: { code: 'text-blue-300', bullet: 'text-blue-500', pre: 'text-blue-400' },
    emerald: { code: 'text-emerald-300', bullet: 'text-emerald-500', pre: 'text-emerald-400' },
    teal: { code: 'text-teal-300', bullet: 'text-teal-500', pre: 'text-teal-400' },
    sky: { code: 'text-sky-300', bullet: 'text-sky-500', pre: 'text-sky-400' }
  };

  // Sécurité anti-crash si la couleur n'existe pas
  const theme = themes[color] || themes.blue;

  const renderFormattedText = (text) => {
    const codeParts = text.split('`');
    return codeParts.map((codePart, codeIndex) => {
      if (codeIndex % 2 !== 0) {
        return (
          <code key={`code-${codeIndex}`} className={`px-1.5 py-0.5 mx-0.5 bg-slate-800/80 ${theme.code} font-mono text-[13px] rounded border border-slate-700/50`}>
            {codePart}
          </code>
        );
      }
      const boldParts = codePart.split('**');
      return boldParts.map((boldPart, boldIndex) => {
        if (boldIndex % 2 !== 0) {
          return <strong key={`bold-${codeIndex}-${boldIndex}`} className="text-white font-bold">{boldPart}</strong>;
        }
        return boldPart;
      });
    });
  };

  const renderContent = (content) => {
    const parts = content.split('```');
    return parts.map((part, index) => {
      if (index % 2 !== 0) {
        const codeContent = part.replace(/^(hcl|bash|json)\n/i, '').trim();
        return (
          <div key={index} className="bg-[#0d1117] border border-slate-800 rounded-xl p-4 my-6 overflow-x-auto shadow-inner">
            <pre className={`${theme.pre} font-mono text-[13px] leading-relaxed whitespace-pre`}>
              <code>{codeContent}</code>
            </pre>
          </div>
        );
      }
      return part.split('\n').map((paragraph, pIdx) => {
        const trimmed = paragraph.trim();
        if (trimmed === '') return <br key={pIdx} />;
        if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
          return (
            <div key={pIdx} className="flex gap-2 pl-4">
              <span className={theme.bullet}>•</span>
              <span>{renderFormattedText(trimmed.substring(1).trim())}</span>
            </div>
          );
        }
        return <p key={pIdx}>{renderFormattedText(trimmed)}</p>;
      });
    });
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6 lg:p-10 shadow-xl">
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
    </div>
  );
};

export default TabContent;