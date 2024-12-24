import React from 'react';

const stats = [
  { label: 'Calls per Minute', value: '15,000+' },
  { label: 'Languages Supported', value: '100+' },
  { label: 'Lead Conversion Rate', value: '32%' },
  { label: 'Customer Satisfaction', value: '98%' }
];

const Stats = () => {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-cyan-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;