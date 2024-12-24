import React from 'react';

const WaveDecoration = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated waves */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[200%] h-[200%] opacity-20"
          style={{
            top: `${i * 10}%`,
            left: '-50%',
            animation: `wave ${15 + i * 5}s linear infinite`,
            background: `radial-gradient(ellipse at center, transparent 0%, ${
              ['rgba(6, 182, 212, 0.1)', 'rgba(59, 130, 246, 0.1)', 'rgba(139, 92, 246, 0.1)'][i]
            } 50%, transparent 100%)`,
            transform: `rotate(${30 * i}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default WaveDecoration;