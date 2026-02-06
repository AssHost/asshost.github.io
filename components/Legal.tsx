
import React from 'react';

const Legal: React.FC = () => {
  return (
    <section id="legal" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black oswald tracking-tighter mb-4 italic uppercase">LEGAL <span className="text-indigo-500">RESOURCES</span></h2>
          <p className="text-gray-500 font-bold tracking-[0.2em] uppercase text-xs">Compliance and protection for your data.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "PRIVACY POLICY",
              desc: "How we handle your information when using our hosting nodes, panels, and community tools.",
              icon: "fa-shield-halved"
            },
            {
              title: "TERMS OF SERVICE",
              desc: "The rules of engagement for account creation, resource usage, and acceptable behavior.",
              icon: "fa-gavel"
            }
          ].map((item, idx) => (
            <div key={idx} className="glass p-12 rounded-[40px] border-t-2 border-indigo-500/20">
              <div className="w-16 h-16 rounded-3xl bg-indigo-500/10 flex items-center justify-center mb-8 border border-indigo-500/10">
                <i className={`fa-solid ${item.icon} text-2xl text-indigo-400`}></i>
              </div>
              <h3 className="text-2xl font-black oswald mb-4 tracking-widest uppercase italic">{item.title}</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed mb-10">
                {item.desc}
              </p>
              <a href="https://discord.gg/qpzhexB28F" className="inline-flex items-center gap-3 text-[10px] font-black tracking-widest uppercase text-indigo-400 hover:text-white transition-colors group">
                Review Document
                <i className="fa-solid fa-arrow-right text-[8px] transition-transform group-hover:translate-x-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legal;
