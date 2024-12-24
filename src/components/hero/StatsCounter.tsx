import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const stats = [
  { value: 15000, label: 'Calls/Minute', prefix: '', suffix: '+' },
  { value: 100, label: 'Languages', prefix: '', suffix: '+' },
  { value: 32, label: 'Conversion Rate', prefix: '', suffix: '%' },
  { value: 98, label: 'Success Rate', prefix: '', suffix: '%' }
];

const StatsCounter = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <animated.div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-2">
            {useSpring({
              from: { number: 0 },
              to: { number: inView ? stat.value : 0 },
              delay: index * 100,
              config: { duration: 1000 }
            }).number.to(n => `${stat.prefix}${Math.floor(n)}${stat.suffix}`)}
          </animated.div>
          <div className="text-slate-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;