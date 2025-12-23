
import React from 'react';

const CaseStudySection: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="relative bg-surface-dark/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_100%]"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-5/12 text-left">
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="material-icons text-yellow-400 text-sm">star</span>
              ))}
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
              "Revenue up 3.7X in 90 days."
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              See how our AI integration helped FinTech startup <span className="text-white font-medium">FluxFlow</span> automate their entire SDR pipeline, resulting in a record-breaking quarter with zero additional headcount.
            </p>
            <a className="text-primary text-sm font-bold hover:gap-3 transition-all flex items-center gap-2 group/link" href="#">
              Read the full case study 
              <span className="material-icons text-xs group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          
          <div className="w-full md:w-7/12 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl">
            <img 
              alt="Team meeting discussing AI strategy" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" 
              src="https://picsum.photos/seed/agency/1200/800"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-transparent to-transparent"></div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg border border-white/10">
                <p className="text-[10px] text-primary font-bold uppercase tracking-wider mb-1">Efficiency Gain</p>
                <p className="text-2xl font-bold text-white">+84%</p>
              </div>
              <div className="bg-primary text-black p-4 rounded-lg font-bold">
                ROI 12.5x
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
