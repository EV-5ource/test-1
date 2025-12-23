
import React from 'react';

interface HeroProps {
  onOpenAudit: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-10 pb-16 lg:pt-16 lg:pb-24 px-4 bg-gradient-dark overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 mb-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-bold tracking-wider uppercase text-white shadow-[0_0_15px_rgba(0,230,118,0.15)] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>Attention: Agencies, SaaS Founders & Coaches</span>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-4 mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1] text-white">
          Scale Your Revenue With <br className="hidden md:block" />
          <span className="text-gradient animate-glow">Intelligent Automation</span>
          <span className="text-gray-500 font-normal italic mx-2">&amp;</span>
          <br className="md:hidden" />
          Predictable
          <span className="relative inline-block ml-2">
            <span className="relative z-10 text-white">AI Systems</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/60 -skew-x-12 -z-0"></span>
          </span>
        </h1>
      </div>

      <p className="relative z-10 text-center text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
        Stop trading time for money. We build custom AI infrastructures that automate your lead generation, sales follow-up, and client onboarding—adding 
        <span className="text-primary font-semibold ml-1">30+ hours back to your week.</span>
      </p>

      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4">
        <button 
          onClick={onOpenAudit}
          className="group relative px-8 py-4 bg-primary text-black font-bold text-lg rounded-full shadow-neon hover:shadow-neon-hover transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-2"
        >
          Get Your Free Audit
          <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        <button className="px-8 py-4 bg-transparent border border-gray-700 text-white font-medium text-lg rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2">
          <span className="material-icons text-primary">play_circle_outline</span>
          See How It Works
        </button>
      </div>
    </section>
  );
};

export default Hero;
