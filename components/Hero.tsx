
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full glass border-white/10 mb-10 animate-fade-in">
            <span className="hardware-badge">AMD EPYC™</span>
            <span className="text-[10px] font-black tracking-[0.3em] text-indigo-300 uppercase italic">Enterprise Dedicated Power</span>
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-black oswald leading-[0.85] tracking-tighter uppercase mb-6 italic">
            HOSTING <span className="text-gradient">EVOLVED</span>
          </h1>
          
          <h2 className="text-gray-500 text-lg md:text-2xl font-medium tracking-tight mb-12 italic opacity-80">
            "Infrastructure without responsibility."
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-14 font-medium">
            Deploy your dream project on the world's most capable hardware. AMD EPYC processors combined with ultra-fast NVMe storage to ensure your performance never dips.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="https://discord.gg/qpzhexB28F" 
              className="w-full sm:w-auto bg-violet-600 hover:bg-violet-500 text-white px-14 py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase transition-all transform hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(124,58,237,0.4)] shadow-xl"
            >
              Start Your Journey
            </a>
            <a 
              href="https://discord.gg/qpzhexB28F" 
              target="_blank"
              className="w-full sm:w-auto glass text-white px-14 py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase transition-all hover:bg-white/5 border border-white/10 flex items-center justify-center gap-3"
            >
              <i className="fa-brands fa-discord text-lg"></i>
              Community Hub
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-violet-600/10 blur-[150px] rounded-full -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
