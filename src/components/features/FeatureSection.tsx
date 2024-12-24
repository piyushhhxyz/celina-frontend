import React from 'react';
import FeatureFlow from './FeatureFlow';
import FeatureShowcase from './FeatureShowcase';
import { features } from './featureData';

const FeatureSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {" "}Future of Sales
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Our AI-powered platform revolutionizes how businesses connect with customers,
            automate sales processes, and drive growth.
          </p>
        </div>

        <FeatureFlow features={features.slice(0, 3)} />
        <FeatureShowcase features={features.slice(3)} />
      </div>
    </section>
  );
};

export default FeatureSection;