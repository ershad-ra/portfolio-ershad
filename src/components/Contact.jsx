import React from 'react';
import FadeIn from './FadeIn';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = ({ t }) => {
  return (
    <section id="contact" className="py-24 border-t border-slate-800/50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-lg">
            <div className="inline-flex p-4 bg-blue-500/10 rounded-2xl mb-6">
              <Mail className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto">{t.contact.subtitle}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="mailto:ershad.ra@gmail.com" className="flex flex-col items-center p-6 bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 rounded-2xl transition-all group">
                <Mail className="text-slate-400 group-hover:text-blue-400 mb-3 transition-colors" size={28} />
                <span className="text-sm font-semibold text-slate-200 mb-1">{t.contact.email}</span>
                <span className="text-xs text-slate-500">ershad.ra@gmail.com</span>
              </a>

              <a href="https://www.linkedin.com/in/ershad-ramezani/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 rounded-2xl transition-all group">
                <Linkedin className="text-slate-400 group-hover:text-blue-400 mb-3 transition-colors" size={28} />
                <span className="text-sm font-semibold text-slate-200 mb-1">{t.contact.linkedin}</span>
                <span className="text-xs text-slate-500">ershad-ramezani</span>
              </a>

              <a href="https://github.com/ershad-ra" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 rounded-2xl transition-all group">
                <Github className="text-slate-400 group-hover:text-blue-400 mb-3 transition-colors" size={28} />
                <span className="text-sm font-semibold text-slate-200 mb-1">{t.contact.github}</span>
                <span className="text-xs text-slate-500">ershad-ra</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;