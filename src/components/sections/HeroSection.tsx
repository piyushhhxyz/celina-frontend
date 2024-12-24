import React from 'react';
import { ArrowRight, Zap, Globe2 } from 'lucide-react';
import HeroBlob from '../HeroBlob';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-8">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400">AI-Powered Sales Revolution</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Turn Your Product Into A
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
            Sales Machine
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12">
          Deploy an army of AI sales agents that work 24/7, speak 100+ languages, 
          and close deals while you sleep. No more cold calls, just hot leads.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium
            hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center gap-2
            shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 group">
            Start Selling Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-4">
            <Globe2 className="w-5 h-5 text-cyan-400" />
            <span className="text-slate-400">100+ Languages Supported</span>
          </div>
        </div>

        <HeroBlob />
      </div>
    </section>
  );
};

export default HeroSection;