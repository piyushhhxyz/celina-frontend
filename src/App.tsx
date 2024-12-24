import React from 'react';
import { Bot } from 'lucide-react';
import Background from './components/Background';
import GlowingParticles from './components/animations/GlowingParticles';
import HeroSection from './components/sections/HeroSection';
import FeaturesGrid from './components/sections/FeaturesGrid';
import TestimonialSection from './components/sections/TestimonialSection';
import PricingSection from './components/sections/PricingSection';
import WaitlistButton from './components/WaitlistButton';

export default function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <Background />
      <GlowingParticles />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Celina
            </span>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <WaitlistButton />
          </div>
        </div>
      </nav>

      <HeroSection />
      <FeaturesGrid />
      <TestimonialSection />
      <PricingSection />

      {/* Limited Access Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-sm border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <p className="text-slate-300">
            <span className="text-cyan-400 font-semibold">Limited Access:</span>
            {" "}Join the waitlist to get early access to our revolutionary AI sales platform
          </p>
          <WaitlistButton />
        </div>
      </div>
    </div>
  );
}