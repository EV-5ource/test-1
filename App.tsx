
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import CaseStudySection from './components/CaseStudySection';
import ClientLogos from './components/ClientLogos';
import PainSection from './components/PainSection';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';

const App: React.FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background-dark overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-black text-white text-[10px] sm:text-xs py-2 text-center font-semibold tracking-wide border-b border-gray-800 z-50">
        <span className="opacity-70 uppercase">Automate your growth with AI - </span>
        <button 
          onClick={() => setIsAuditModalOpen(true)}
          className="text-primary hover:text-white transition-colors underline decoration-primary underline-offset-4"
        >
          BOOK A FREE STRATEGY CALL
        </button>
        <span className="opacity-70 uppercase"> Limited spots available</span>
      </div>

      <Navbar />
      
      <main>
        <Hero onOpenAudit={() => setIsAuditModalOpen(true)} />
        <TrustBanner />
        <CaseStudySection />
        <ClientLogos />
        <PainSection />
      </main>

      <Footer onOpenAudit={() => setIsAuditModalOpen(true)} />
      
      {/* Scroll to Top */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-surface-dark border border-gray-800 p-3 rounded-full shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all text-gray-400 hover:text-primary"
        >
          <span className="material-icons text-xl">keyboard_arrow_up</span>
        </button>
      </div>

      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </div>
  );
};

export default App;
