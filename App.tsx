import React, { useState } from 'react';
import { 
  Globe, 
  Palette, 
  Smartphone, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  FileText,
  XCircle,
  ChevronRight,
  Download
} from 'lucide-react';
import { TERMS_DATA } from './constants';
import { ServiceType } from './types';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceType>(ServiceType.WEB);

  const currentTerms = TERMS_DATA[selectedService];

  const renderIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'Globe': return <Globe size={size} />;
      case 'Palette': return <Palette size={size} />;
      case 'Smartphone': return <Smartphone size={size} />;
      default: return <Globe size={size} />;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-pink-500/30">
      <style>
        {`
          @media print {
            body { background: white !important; color: black !important; }
            .no-print { display: none !important; }
            .print-container { 
              background: white !important; 
              color: black !important; 
              border: none !important; 
              box-shadow: none !important;
              padding: 0 !important;
              margin: 0 !important;
              max-width: 100% !important;
            }
            .print-text-dark { color: black !important; }
            .print-border-black { border-color: #ddd !important; }
            /* Hide gradient line on print for cleaner look */
            .print-hide-decoration { display: none !important; }
            /* Ensure lists are visible */
            li { color: black !important; }
          }
        `}
      </style>

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-zinc-800 no-print">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">e</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white brand-font">eyeroniq</span>
          </div>
          <div className="text-xs text-zinc-500 uppercase tracking-widest hidden sm:block">
            Portal Legal Interactivo
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-24 pb-12 px-4 md:px-8 max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="mb-12 text-center max-w-2xl mx-auto no-print">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight brand-font">
            Términos y Condiciones del Servicio
          </h1>
          <p className="text-zinc-400 text-lg">
            Al contratar servicios de <span className="text-pink-400 font-semibold">eyeroniq</span>, aceptas automáticamente los acuerdos descritos a continuación para cada especialidad.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 no-print">
          {Object.values(TERMS_DATA).map((term) => (
            <button
              key={term.id}
              onClick={() => setSelectedService(term.id)}
              className={`
                relative overflow-hidden group p-6 rounded-2xl border text-left transition-all duration-300
                ${selectedService === term.id 
                  ? 'bg-zinc-900 border-pink-500/50 shadow-[0_0_30px_-10px_rgba(219,39,119,0.3)]' 
                  : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50'
                }
              `}
            >
              <div className={`
                w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-colors
                ${selectedService === term.id ? 'bg-pink-600 text-white' : 'bg-zinc-900 text-zinc-500 group-hover:text-zinc-300'}
              `}>
                {renderIcon(term.icon)}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${selectedService === term.id ? 'text-white' : 'text-zinc-300'}`}>
                {term.name}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {term.description}
              </p>
              
              {selectedService === term.id && (
                <div className="absolute top-4 right-4 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Terms Content Area */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-10 backdrop-blur-sm relative overflow-hidden print-container print-border-black">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 print-hide-decoration"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <span className="text-pink-400 text-sm font-semibold tracking-wider uppercase mb-1 block print-text-dark">Documento Legal</span>
              <h2 className="text-3xl font-bold text-white flex items-center gap-3 print-text-dark">
                {currentTerms.name} <span className="text-zinc-600 font-light text-2xl print-text-dark">| Acuerdo v2.4</span>
              </h2>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors no-print border border-zinc-700"
              >
                <Download className="w-4 h-4" />
                Exportar PDF
              </button>
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full no-print">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-xs font-semibold uppercase tracking-wide">Vigente</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Responsibilities Column */}
            <div className="space-y-8">
              <section className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zinc-800 rounded-lg text-pink-400 group-hover:text-pink-300 transition-colors print-border-black print-text-dark">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white print-text-dark">{currentTerms.responsibilities.title}</h3>
                </div>
                <ul className="space-y-3 pl-2 border-l border-zinc-800 print-border-black">
                  {currentTerms.responsibilities.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 pl-4 text-zinc-400 text-sm leading-relaxed print-text-dark">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0 print-border-black"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zinc-800 rounded-lg text-amber-400 group-hover:text-amber-300 transition-colors print-border-black">
                    <AlertCircle className="w-5 h-5 print-text-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-white print-text-dark">{currentTerms.revisions.title}</h3>
                </div>
                <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-5 print-border-black print-container">
                  <ul className="space-y-3">
                    {currentTerms.revisions.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed print-text-dark">
                        <ChevronRight className="w-4 h-4 text-amber-500/50 flex-shrink-0 mt-0.5 print-text-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>

            {/* Inclusions/Exclusions Column */}
            <div className="space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zinc-800 rounded-lg text-emerald-400 print-border-black">
                    <CheckCircle2 className="w-5 h-5 print-text-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-white print-text-dark">{currentTerms.inclusions.title}</h3>
                </div>
                <ul className="grid grid-cols-1 gap-3">
                  {currentTerms.inclusions.items.map((item, idx) => (
                    <li key={idx} className="bg-emerald-900/10 border border-emerald-900/20 rounded-lg p-3 text-zinc-300 text-sm flex items-start gap-3 print-border-black print-text-dark">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0 print-text-dark" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zinc-800 rounded-lg text-red-400 print-border-black">
                    <XCircle className="w-5 h-5 print-text-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-white print-text-dark">{currentTerms.exclusions.title}</h3>
                </div>
                <ul className="grid grid-cols-1 gap-3">
                  {currentTerms.exclusions.items.map((item, idx) => (
                    <li key={idx} className="bg-red-900/10 border border-red-900/20 rounded-lg p-3 text-zinc-400 text-sm flex items-start gap-3 opacity-80 print-border-black print-text-dark">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0 print-text-dark" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

          </div>

          {/* Sticky Acceptance Footer */}
          <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 print-border-black">
            <p className="text-zinc-500 text-sm text-center md:text-left print-text-dark">
              Al realizar el primer pago o anticipo de la cotización enviada para <strong className="text-zinc-300 print-text-dark">{currentTerms.name}</strong>, <br className="hidden md:block"/>
              el cliente acepta estos términos.
            </p>
            <a 
              href="https://www.eyeroniq.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors font-medium text-sm flex items-center gap-2 group print-text-dark"
            >
              www.eyeroniq.com
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 bg-zinc-950 no-print">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Eyeroniq Agency. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* AI Assistant */}
      <div className="no-print">
        <AIChat service={currentTerms} />
      </div>
    </div>
  );
};

export default App;