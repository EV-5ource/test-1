
import React from 'react';

const PainSection: React.FC = () => {
  const pains = [
    { title: "Manual Outreach", desc: "Spending hours on LinkedIn and email with zero consistency." },
    { title: "Lead Leakage", desc: "Valuable prospects falling through the cracks of your messy CRM." },
    { title: "No Follow-up", desc: "Missing deals because you're too busy to keep in touch manually." },
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs text-gray-500 tracking-[0.4em] uppercase mb-4 font-bold">
          This sound familiar to you?
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
          Finally break free from the pain
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pains.map((p, idx) => (
          <div key={idx} className="bg-surface-dark border border-gray-800 p-8 rounded-xl hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
              <span className="material-icons text-red-400">warning</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{p.title}</h4>
            <p className="text-gray-400 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PainSection;
