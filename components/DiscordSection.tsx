
import React from 'react';

const DiscordSection: React.FC = () => {
  return (
    <section id="discord" className="py-32 bg-[#080808]/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black oswald tracking-tighter mb-8 italic uppercase">COMMUNITY <span className="text-indigo-500">FIRST</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium">
              Join thousands of other creators and developers in our vibrant community. Get instant support, share your progress, and stay updated with our latest hardware upgrades.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: "fa-comments", title: "Live Support", desc: "Our staff is available round the clock to help with any technical issues." },
                { icon: "fa-rocket", title: "Instant Access", desc: "Gain access to early bird features and testing slots for new nodes." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-xl text-indigo-400 group-hover:scale-110 transition-transform">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="font-black text-sm tracking-widest uppercase mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a 
                href="https://discord.gg/qpzhexB28F" 
                target="_blank"
                className="inline-flex items-center gap-4 bg-[#5865F2] hover:bg-[#4752c4] text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase transition-all"
              >
                <i className="fa-brands fa-discord text-lg"></i>
                Join the Discord
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-indigo-500/10 blur-[100px] rounded-full"></div>
            <div className="relative glass p-4 rounded-[40px] shadow-2xl overflow-hidden animate-float">
              <iframe 
                src="https://discord.com/widget?id=1376206023819268116&theme=dark" 
                width="100%" 
                height="500" 
                allowTransparency={true} 
                frameBorder="0" 
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                className="rounded-[30px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
