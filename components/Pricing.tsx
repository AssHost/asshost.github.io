
import React from 'react';

const Pricing: React.FC = () => {
  const discordLink = "https://discord.gg/qpzhexB28F";
  
  const plans = [
    {
      name: "Free Entry",
      price: "$0",
      period: "/forever",
      description: "Ideal for development and small projects.",
      hardware: "AMD EPYC™ Shared",
      features: [
        "4GB DDR4 RAM", 
        "200% AMD CPU Share", 
        "10GB NVMe SSD", 
        "1 Backup Slot", 
        "24/7 Support Hub"
      ],
      cta: "Claim Slot",
      popular: false
    },
    {
      name: "Elite Performance",
      price: "NEGOTIABLE",
      period: "/custom",
      description: "Scale to the stratosphere with dedicated resources.",
      hardware: "AMD EPYC™ Dedicated",
      features: [
        "Unlimited RAM Allocation", 
        "Dedicated EPYC™ Cores", 
        "Custom NVMe Solutions", 
        "10+ Backup Slots", 
        "VIP Support Channel"
      ],
      cta: "Negotiate Price",
      popular: true
    }
  ];

  return (
    <section id="plans" className="py-40 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black oswald tracking-tighter mb-4 italic uppercase">
            THE <span className="text-violet-500">LINEUP</span>
          </h2>
          <p className="text-gray-500 font-bold tracking-[0.4em] uppercase text-xs">High-end infrastructure. No compromises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative glass p-12 md:p-16 rounded-[60px] flex flex-col group ${plan.popular ? 'border-violet-500/40 bg-white/[0.02]' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-6 right-16 bg-gradient-to-r from-violet-600 to-pink-600 text-white px-8 py-2.5 rounded-full text-[10px] font-black tracking-[0.4em] uppercase shadow-lg">
                  Most Requested
                </div>
              )}
              
              <div className="mb-14">
                <div className="hardware-badge inline-block mb-6">{plan.hardware}</div>
                <h3 className="text-4xl md:text-5xl font-black oswald tracking-tight uppercase mb-4 text-white italic">{plan.name}</h3>
                <p className="text-gray-500 text-sm font-semibold leading-relaxed max-w-xs">{plan.description}</p>
              </div>

              <div className="flex items-baseline mb-14">
                <span className="text-7xl font-black tracking-tighter text-white">{plan.price}</span>
                <span className="text-gray-600 ml-5 text-sm font-black uppercase tracking-[0.3em]">{plan.period}</span>
              </div>

              <div className="space-y-7 mb-16 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center text-sm font-bold text-gray-300">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center mr-6 border border-white/5 group-hover:border-violet-500/50 transition-all">
                      <i className="fa-solid fa-microchip text-[12px] text-violet-400"></i>
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <a 
                href={discordLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-7 rounded-[24px] font-black text-xs tracking-[0.4em] uppercase text-center transition-all ${
                  plan.popular 
                    ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-2xl shadow-violet-600/20 transform hover:-translate-y-1' 
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
