
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#010101] pt-40 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-12">
              <span className="text-5xl font-black tracking-tighter oswald uppercase italic transition-transform hover:scale-105 inline-block">
                ASS<span className="text-indigo-500">HOSTING</span>
              </span>
            </a>
            <p className="text-gray-500 text-lg leading-relaxed max-w-sm font-semibold italic mb-8">
              "Infrastructure without responsibility."
            </p>
            <p className="text-gray-600 text-sm max-w-sm leading-relaxed font-medium">
              We empower communities by providing top-tier AMD EPYC™ hardware. Low latency, high uptime, and the support you deserve.
            </p>
          </div>
          
          <div>
            <h4 className="text-[11px] font-black tracking-[0.5em] uppercase text-indigo-400 mb-12">Navigation</h4>
            <ul className="space-y-6 text-[11px] font-bold tracking-[0.3em] uppercase text-gray-500">
              <li><a href="#plans" className="hover:text-white transition-colors">Pricing & Nodes</a></li>
              <li><a href="#discord" className="hover:text-white transition-colors">Community Hub</a></li>
              <li><a href="https://panel.asshost.qzz.io" className="hover:text-white transition-colors">Billing Control</a></li>
              <li><a href="#legal" className="hover:text-white transition-colors">Legal Documents</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] font-black tracking-[0.5em] uppercase text-indigo-400 mb-12">Connect</h4>
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-8">support@asshost.qzz.io</p>
            <div className="flex gap-6">
              <a href="https://discord.gg/qpzhexB28F" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500/50 transition-all">
                <i className="fa-brands fa-discord text-xl"></i>
              </a>
              <a href="https://discord.gg/qpzhexB28F" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500/50 transition-all">
                <i className="fa-brands fa-x-twitter text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5">
          <p className="text-[10px] text-gray-600 font-black tracking-[0.6em] uppercase text-center mb-12 opacity-50">
            NOT APPROVED BY OR ASSOCIATED OR AFFILIATED WITH MOJANG OR MICROSOFT OR THEIR SUBSIDIARIES OR PRODUCTS.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[12px] font-black tracking-[0.2em] uppercase text-gray-500">
              &copy; 2025-2026 Ass Hosting. <span className="text-gray-800 mx-3">/</span> Optimized for Reality.
            </p>
            <div className="flex gap-12 text-[10px] font-black tracking-[0.3em] uppercase text-gray-600">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">EULA</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
