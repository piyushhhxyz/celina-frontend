import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from './featureData';

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-center mb-16 text-white">
        Supercharge Your Sales with AI
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;