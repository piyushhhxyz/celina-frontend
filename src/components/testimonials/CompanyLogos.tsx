import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const CompanyLogos = () => {
  const companies = [
    'TechCorp', 'Growth Dynamics', 'Scale Solutions', 'InnovateCo', 'FutureScale'
  ];

  return (
    <div className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 z-10" />
      
      <div className="flex space-x-12 animate-scroll">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex-none py-4 px-8 rounded-xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 
              border border-slate-700/30 backdrop-blur-sm"
          >
            <span className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 
              text-transparent bg-clip-text">
              {company}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};