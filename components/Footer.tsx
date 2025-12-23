
import React from 'react';

interface FooterProps {
  onOpenAudit: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  return (
    <footer className="py-24 px-4 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-20">
          <button 
            onClick={onOpenAudit}
            className="group relative inline-flex items-center justify-center px-10 py-6 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl hover:from-blue-600 hover:to-indigo-600 shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] w-full md:w-auto md:min-w-[450px]"
          >
            <span className="absolute left-8 text-white/30 group-hover:text-white transition-colors">
              <span className="material-icons">arrow_forward_ios</span>
            </span>
            <div className="flex flex-col items-center">
              <span className="tracking-[0.2em] uppercase text-sm mb-1">LETS WORK TOGETHER!</span>
              <span className="text-xs font-normal text-blue-200 tracking-wide opacity-70 group-hover:opacity-100">Schedule Your Free Call Now...</span>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-16 border-b border-gray-800 pb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-black">
                <span className="material-icons text-lg">auto_graph</span>
              </div>
              <span className="font-display font-bold text-lg text-white">ENRICHED <span className="text-primary">CONVERSION</span></span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              We help high-growth companies leverage Artificial Intelligence to scale their systems, save time, and maximize profitability.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Social</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase tracking-widest font-bold">
          <p>© 2024 ENRICHED CONVERSION. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
