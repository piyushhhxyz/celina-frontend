import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import FlowCard from './FlowCard';
import { Feature } from './types';

interface FeatureFlowProps {
  features: Feature[];
}

const FeatureFlow = ({ features }: FeatureFlowProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const flowAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0px)' : 'translateY(50px)' },
    config: { tension: 120, friction: 14 }
  });

  return (
    <div ref={ref} className="relative mb-32">
      {/* Connecting lines */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20" />
      
      <animated.div style={flowAnimation} className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FlowCard
            key={index}
            feature={feature}
            index={index}
            total={features.length}
          />
        ))}
      </animated.div>
    </div>
  );
};

export default FeatureFlow;