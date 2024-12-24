import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureHighlightProps {
  icon: LucideIcon;
  text: string;
}

const FeatureHighlight = ({ icon: Icon, text }: FeatureHighlightProps) => {
  return (
    <div className="group relative">
      {/* Glowing background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card content */}
      <div className="relative p-6 rounded-xl backdrop-blur-sm border border-slate-700/50
        bg-gradient-to-br from-slate-800/50 to-slate-900/50 group-hover:border-cyan-500/50
        transition-all duration-500 overflow-hidden">
        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent
          group-hover:border-cyan-500/50 transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent
          group-hover:border-cyan-500/50 transition-all duration-500" />
        
        {/* Icon with glow effect */}
        <div className="relative mb-3">
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 
            group-hover:opacity-100 transition-opacity duration-500" />
          <Icon className="w-8 h-8 text-cyan-400 relative z-10 transform group-hover:scale-110 
            transition-transform duration-500" />
        </div>
        
        <span className="text-lg text-slate-300 font-medium">{text}</span>
      </div>
    </div>
  );
};

export default FeatureHighlight;