import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Feature } from './types';

interface FlowCardProps {
  feature: Feature;
  index: number;
  total: number;
}

const FlowCard = ({ feature, index, total }: FlowCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const springProps = useSpring({
    scale: isHovered ? 1.05 : 1,
    shadow: isHovered ? 20 : 5,
    config: { tension: 300, friction: 20 }
  });

  return (
    <animated.div
      style={{
        transform: springProps.scale.to(s => `scale(${s})`),
        boxShadow: springProps.shadow.to(s => `0 ${s}px ${s * 2}px rgba(6, 182, 212, 0.1)`)
      }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl blur-xl 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card content */}
      <div className="relative p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 
        border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500
        backdrop-blur-sm overflow-hidden">
        {/* Step indicator */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r 
          from-cyan-500 to-blue-500 flex items-center justify-center text-white font-medium">
          {index + 1}
        </div>

        {/* Icon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 
            group-hover:opacity-100 transition-opacity duration-500" />
          <feature.icon className="w-12 h-12 text-cyan-400 relative z-10 transform 
            group-hover:scale-110 transition-transform duration-500" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
        <p className="text-slate-400">{feature.description}</p>

        {/* Connection line to next card */}
        {index < total - 1 && (
          <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 
            bg-gradient-to-r from-cyan-500/50 to-transparent" />
        )}
      </div>
    </animated.div>
  );
};

export default FlowCard;