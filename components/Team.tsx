
import React from 'react';

const Team: React.FC = () => {
  const staff = [
    { 
      name: "Orschiki.dev", 
      role: "CEO & Founder", 
      img: "https://cdn.discordapp.com/avatars/1421053008464187421/31ad4286789417728a59a69abba350fc.png"
    },
    { 
      name: "Tyler", 
      role: "CTO & Founder", 
      img: "https://cdn.discordapp.com/avatars/1186216678732861531/d2f30f6c866ae43b81c267408ee238f5.png"
    }
  ];

  return (
    <section id="team" className="py-40 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-8xl font-black oswald tracking-tighter mb-4 italic uppercase">THE <span className="text-violet-500">FOUNDERS</span></h2>
          <p className="text-gray-500 font-bold tracking-[0.4em] uppercase text-xs">Pioneering a new standard in hosting.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-16 max-w-5xl mx-auto">
          {staff.map((member, idx) => (
            <div key={idx} className="group relative w-full sm:w-[400px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 to-pink-600/30 rounded-[50px] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative glass p-12 rounded-[50px] text-center overflow-hidden flex flex-col items-center">
                <div className="relative mb-10 w-48 h-48 group-hover:scale-110 transition-transform duration-700">
                  <div className="absolute inset-0 bg-violet-600/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100"></div>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="relative z-10 w-full h-full rounded-full border-4 border-white/5 group-hover:border-violet-500/80 transition-all duration-700 object-cover shadow-2xl"
                  />
                </div>
                
                <h3 className="text-4xl font-black oswald tracking-tight uppercase mb-3 italic">{member.name}</h3>
                <p className="text-indigo-400 text-[11px] font-black tracking-[0.5em] uppercase italic mb-10">{member.role}</p>
                
                <a 
                  href="https://discord.gg/qpzhexB28F" 
                  className="w-full py-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-violet-500/50 text-[10px] font-black tracking-[0.3em] uppercase transition-all"
                >
                  Contact Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
