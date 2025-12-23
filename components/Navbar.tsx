
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-6 px-6 lg:px-12 flex justify-between items-center relative z-20 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-black font-bold text-xl shadow-neon group-hover:scale-110 transition-transform">
          <span className="material-icons">auto_graph</span>
        </div>
        <div className="flex flex-col">
          <span className="font-display font-bold text-xl tracking-tight leading-none text-white">ENRICHED</span>
          <span className="text-[10px] tracking-[0.2em] font-medium text-primary uppercase">Conversion</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a className="text-gray-400 hover:text-primary transition-colors" href="#services">Services</a>
        <a className="text-gray-400 hover:text-primary transition-colors" href="#case-studies">Case Studies</a>
        <a className="text-gray-400 hover:text-primary transition-colors" href="#about">About Us</a>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:block text-right">
          <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Need help?</p>
          <a className="text-sm font-bold text-primary flex items-center gap-1 hover:text-white transition-colors" href="tel:+15550123456">
            <span className="material-icons text-sm">phone</span>
            555-012-3456
          </a>
        </div>
        <button className="bg-transparent border border-gray-700 hover:border-primary px-5 py-2 rounded-pill font-semibold text-sm transition-all duration-300 hidden sm:block text-gray-300 hover:text-primary">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
