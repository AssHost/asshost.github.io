
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-xl rounded-full border border-white/10 max-w-5xl px-8 shadow-2xl' : ''}`}>
        <a href="#" className="flex items-center group">
          <span className="text-2xl font-black tracking-tighter oswald uppercase italic group-hover:scale-105 transition-transform">
            ASS<span className="text-indigo-500">HOSTING</span>
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase">
          <a href="#plans" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
          <a href="#discord" className="text-gray-400 hover:text-white transition-colors">Community</a>
          <a href="#team" className="text-gray-400 hover:text-white transition-colors">Staff</a>
          <a href="#legal" className="text-gray-400 hover:text-white transition-colors">Legal</a>
        </div>

        <a 
          href="https://panel.asshost.qzz.io" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group overflow-hidden bg-white text-black px-7 py-2.5 rounded-full text-[10px] font-black tracking-widest uppercase transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          <span className="relative z-10">Client Panel</span>
          <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
