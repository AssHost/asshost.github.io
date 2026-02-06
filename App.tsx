
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import DiscordSection from './components/DiscordSection';
import Team from './components/Team';
import Legal from './components/Legal';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <DiscordSection />
        <Team />
        <Legal />
      </main>
      <Footer />
    </div>
  );
};

export default App;
