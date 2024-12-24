import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import ShowcaseCard from './ShowcaseCard';
import { Feature } from './types';

interface FeatureShowcaseProps {
  features: Feature[];
}

const FeatureShowcase = ({ features }: FeatureShowcaseProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const showcaseAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0px)' : 'translateY(50px)' },
    config: { tension: 120, friction: 14 }
  });

  return (
    <animated.div ref={ref} style={showcaseAnimation} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <ShowcaseCard key={index} feature={feature} />
      ))}
    </animated.div>
  );
};

export default FeatureShowcase;