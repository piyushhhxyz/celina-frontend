import React from 'react';
import { ArrowRight, Sparkles, Globe2, Zap, Clock } from 'lucide-react';
import InteractiveBlob from './InteractiveBlob';
import GlowingGrid from './GlowingGrid';
import FloatingParticles from './FloatingParticles';
import StatsCounter from './StatsCounter';
import FeatureHighlight from './FeatureHighlight';
import WaveDecoration from './WaveDecoration';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <GlowingGrid />
      <FloatingParticles />
      <WaveDecoration />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Floating badge with enhanced animation */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
          bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 
          border border-cyan-500/20 mb-12 hover:border-cyan-400/50 transition-colors duration-500
          animate-float backdrop-blur-sm group cursor-pointer">
          <div className="relative">
            <Sparkles className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 
              group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <span className="text-cyan-400 font-medium bg-gradient-to-r from-cyan-400 to-blue-500 
            bg-clip-text text-transparent">AI-Powered Sales Revolution</span>
        </div>

        {/* Enhanced heading with animated gradient and glow */}
        <div className="relative mb-12">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 
            to-purple-500/20 blur-3xl opacity-50 animate-pulse-slow" />
          <h1 className="relative text-7xl md:text-8xl lg:text-9xl font-bold leading-tight">
            Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r 
              from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
              Sales Game
            </span>
            With AI
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed
          animate-fade-in">
          Deploy an unstoppable army of AI sales agents that work 24/7, 
          speak multiple languages, and close deals while you sleep.
        </p>

        {/* Enhanced feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {[
            { icon: Globe2, text: "100+ Languages" },
            { icon: Zap, text: "Instant Setup" },
            { icon: Clock, text: "24/7 Operation" }
          ].map((feature, i) => (
            <FeatureHighlight key={i} {...feature} />
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 
            text-white font-medium transition-all duration-500 
            flex items-center gap-3 hover:gap-4">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-xl 
              opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">Start Free Trial</span>
            <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-500" />
          </button>
          
          <div className="flex items-center gap-4 px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50
            hover:border-cyan-500/50 transition-colors duration-500 backdrop-blur-sm">
            <span className="text-slate-400">No credit card required</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 animate-pulse" />
            <span className="text-cyan-400 font-medium">BYOK</span>
          </div>
        </div>

        {/* Interactive blob with enhanced glow */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-blue-500/10 
            blur-3xl opacity-50" />
          <InteractiveBlob />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <StatsCounter />
      </div>
    </section>
  );
};

export default HeroSection;