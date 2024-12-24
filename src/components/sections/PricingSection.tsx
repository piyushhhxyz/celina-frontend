import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "Starter",
    price: "499",
    description: "Perfect for small businesses",
    features: [
      "1 AI Agent",
      "5,000 Minutes/Month",
      "10 Languages",
      "Basic Analytics",
      "Email Support"
    ]
  },
  {
    name: "Growth",
    price: "999",
    description: "For growing teams",
    features: [
      "3 AI Agents",
      "15,000 Minutes/Month",
      "50 Languages",
      "Advanced Analytics",
      "Priority Support",
      "Custom Voice Cloning"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited AI Agents",
      "Unlimited Minutes",
      "100+ Languages",
      "Enterprise Analytics",
      "24/7 Support",
      "Custom Integration",
      "Dedicated Account Manager"
    ]
  }
];

const PricingSection = () => {
  return (
    <section className="relative py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {" "}Transparent{" "}
            </span>
            Pricing
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`
                p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border
                transition-all duration-300 relative
                ${tier.popular 
                  ? 'border-cyan-500 shadow-lg shadow-cyan-500/25' 
                  : 'border-slate-700/50 hover:border-cyan-500/50'}
              `}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-2xl font-bold text-white mb-2">{tier.name}</div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${tier.price}</span>
                {tier.price !== "Custom" && <span className="text-slate-400">/month</span>}
              </div>
              <p className="text-slate-400 mb-6">{tier.description}</p>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`
                w-full px-6 py-3 rounded-lg font-medium transition-all duration-300
                ${tier.popular
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400'
                  : 'bg-slate-700/50 text-white hover:bg-slate-700'}
              `}>
                {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;