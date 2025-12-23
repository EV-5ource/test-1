
import React from 'react';

const TrustBanner: React.FC = () => {
  const partners = [
    { name: 'ApexLabs', icon: 'diamond' },
    { name: 'RapidScale', icon: 'bolt' },
    { name: 'InfinityLoop', icon: 'all_inclusive' },
    { name: 'StackFlow', icon: 'layers' },
  ];

  return (
    <div className="relative z-10 py-10 flex flex-col items-center bg-background-dark/50">
      <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8 font-bold">Trusted by industry leaders</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
        {partners.map((p) => (
          <div key={p.name} className="flex items-center gap-3 text-xl font-bold font-display text-white">
            <span className="material-icons text-2xl text-primary">{p.icon}</span>
            <span className="tracking-tight">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBanner;
