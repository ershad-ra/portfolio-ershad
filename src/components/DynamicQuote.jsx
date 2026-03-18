import React, { useState, useEffect, useMemo } from 'react';

const DynamicQuote = ({ lang, isMobile = false }) => {
  const prefixes = useMemo(() => lang === 'fr' ? ["Madame,", "Monsieur,"] : ["Madam,", "Sir,"], [lang]);
  
  const suffixText = useMemo(() => {
    if (isMobile) {
      return lang === 'fr' ? " bienvenue sur mon portfolio." : " welcome to my portfolio.";
    }
    return lang === 'fr' ? "\nbienvenue sur\nmon portfolio." : "\nwelcome to\nmy portfolio.";
  }, [lang, isMobile]);

  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState('type-prefix-initial');

  // LE CORRECTIF EST ICI : Dès que 'lang' change, on remet la machine à zéro !
  useEffect(() => {
    setPrefix('');
    setSuffix('');
    setWordIndex(0);
    setPhase('type-prefix-initial');
  }, [lang]);

  useEffect(() => {
    const targetPrefix = prefixes[wordIndex];
    let timer;
    
    const typeSpeed = Math.floor(Math.random() * 50) + 40; 
    const deleteSpeed = 25; 

    switch (phase) {
      case 'type-prefix-initial':
        if (prefix.length < targetPrefix.length) {
          timer = setTimeout(() => setPrefix(targetPrefix.slice(0, prefix.length + 1)), typeSpeed);
        } else {
          timer = setTimeout(() => setPhase('type-suffix'), 200);
        }
        break;

      case 'type-suffix':
        if (suffix.length < suffixText.length) {
          timer = setTimeout(() => setSuffix(suffixText.slice(0, suffix.length + 1)), typeSpeed);
        } else {
          timer = setTimeout(() => setPhase('pause'), 3000); 
        }
        break;

      case 'pause':
        timer = setTimeout(() => setPhase('delete-prefix'), 50);
        break;

      case 'delete-prefix':
        if (prefix.length > 0) {
          timer = setTimeout(() => setPrefix(prefix.slice(0, -1)), deleteSpeed);
        } else {
          setWordIndex((prev) => (prev + 1) % prefixes.length);
          setPhase('wait'); 
        }
        break;

      case 'wait':
        timer = setTimeout(() => setPhase('type-prefix'), 500);
        break;

      case 'type-prefix':
        if (prefix.length < targetPrefix.length) {
          timer = setTimeout(() => setPrefix(targetPrefix.slice(0, prefix.length + 1)), typeSpeed);
        } else {
          timer = setTimeout(() => setPhase('pause'), 3000); 
        }
        break;

      default:
        break;
    }

    return () => clearTimeout(timer);
  }, [phase, prefix, suffix, wordIndex, prefixes, suffixText]);

  const isEditingPrefix = ['type-prefix-initial', 'delete-prefix', 'type-prefix', 'wait', 'pause'].includes(phase);
  
  const fullText = prefix + (isEditingPrefix ? "█" : "") + suffix + (!isEditingPrefix ? "█" : "");
  const lines = isMobile ? [fullText] : fullText.split('\n');

  return (
    <div className={`${isMobile ? 'w-full mb-1' : 'w-[180px] sm:w-[220px]'} drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>
      <div className={`font-mono ${isMobile ? 'text-[10px] uppercase tracking-widest' : 'text-sm sm:text-base'} text-slate-300 leading-relaxed font-semibold text-left`}>
        {lines.map((line, i) => {
          const hasCursor = line.includes("█");
          const cleanLine = line.replace("█", "");

          return (
            <div key={i} className={isMobile ? "inline-block" : "min-h-[1.5em]"}>
              <span className="text-blue-500 font-bold mr-2">{'>'}</span>
              {cleanLine}
              {hasCursor && (
                <span className="inline-block w-2 h-[1em] ml-1 bg-blue-500 animate-pulse align-middle shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DynamicQuote;