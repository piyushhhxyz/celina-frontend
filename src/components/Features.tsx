import React from 'react';
import { Bot, Globe2, Phone, Calendar, UserCheck, Settings } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Customizable AI Personality',
    description: 'Mold your AI agent's personality, tone, and language to perfectly match your brand voice.'
  },
  {
    icon: Phone,
    title: 'Mass Calling Capability',
    description: 'Reach thousands of potential customers simultaneously with one-click mass calling.'
  },
  {
    icon: Globe2,
    title: 'Multilingual Support',
    description: 'Connect with customers in their preferred language with natural, fluent conversations.'
  },
  {
    icon: Calendar,
    title: 'Smart Follow-ups',
    description: 'Automated scheduling and follow-ups to nurture leads and close deals.'
  },
  {
    icon: UserCheck,
    title: 'Seamless Human Handoff',
    description: 'Instant transfer to human agents when leads are ready to convert.'
  },
  {
    icon: Settings,
    title: 'Advanced Customization',
    description: 'Fine-tune every aspect of your AI agent for optimal performance.'
  }
];

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-center mb-16 text-white">
        Supercharge Your Sales with AI
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
          >
            <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;