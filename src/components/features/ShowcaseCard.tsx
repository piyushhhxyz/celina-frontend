import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Feature } from './types';

interface ShowcaseCardProps {
  feature: Feature;
}

const ShowcaseCard = ({ feature }: ShowcaseCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const springProps = useSpring({
    scale: isHovered ? 1.05 : 1,
    rotate: isHovered ? 5 : 0,
    config: { tension: 300, friction: 20 }
  });

  return (
    <animated.div
      style={{
        transform: springProps.scale.to(s => `scale(${s})`)
      }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
        rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 
        border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500 
        backdrop-blur-sm overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
          rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon with animation */}
        <animated.div
          style={{
            transform: springProps.rotate.to(r => `rotate(${r}deg)`)
          }}
          className="relative mb-6"
        >
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 
            group-hover:opacity-100 transition-opacity duration-500" />
          <feature.icon className="w-12 h-12 text-cyan-400 relative z-10" />
        </animated.div>

        <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
        <p className="text-slate-400">{feature.description}</p>
      </div>
    </animated.div>
  );
};

export default ShowcaseCard;