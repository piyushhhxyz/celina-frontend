import React from 'react';

const GlowingGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-full h-full">
        {/* Animated grid lines */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
            mask: 'radial-gradient(circle at center, transparent 0%, black 100%)'
          }}
        />
        
        {/* Floating orbs */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl opacity-30"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              background: `radial-gradient(circle at center, ${
                ['#06b6d4', '#3b82f6', '#8b5cf6'][Math.floor(Math.random() * 3)]
              }, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * -10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GlowingGrid;