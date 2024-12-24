import React, { useEffect, useRef, useState } from 'react';
import { Mic } from 'lucide-react';

const InteractiveBlob = () => {
  const [isListening, setIsListening] = useState(false);
  const blobRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setRotation(prev => (prev + 1) % 360);
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative w-[600px] h-[600px] mx-auto">
      {/* Outer glow rings */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full opacity-30 animate-pulse-slow"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.3), transparent)`,
            animation: `pulse ${2 + i}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
            transform: `scale(${1.2 + i * 0.2})`,
          }}
        />
      ))}

      {/* Rotating outer ring with gradient */}
      <div 
        className="absolute inset-0 bg-[conic-gradient(from_0deg,#06b6d4,#3b82f6,#06b6d4)] rounded-full opacity-20 blur-xl"
        style={{ 
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.05s linear'
        }}
      />
      
      {/* Main blob */}
      <div 
        ref={blobRef}
        onClick={() => setIsListening(!isListening)}
        className={`
          absolute inset-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500
          rounded-full flex items-center justify-center cursor-pointer transform-gpu
          transition-all duration-300 hover:scale-105 group
          ${isListening ? 'scale-110 animate-pulse' : 'scale-100'}
        `}
      >
        {/* Voice visualization spikes */}
        {isListening && (
          <div className="absolute inset-0">
            {[...Array(48)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 bg-white/30 origin-bottom"
                style={{
                  height: `${Math.random() * 50 + 20}%`,
                  left: '50%',
                  top: '0',
                  transform: `rotate(${i * (360 / 48)}deg)`,
                  animation: 'spike 0.3s ease-in-out infinite',
                  animationDelay: `${i * (1 / 48)}s`
                }}
              />
            ))}
          </div>
        )}
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 2 + 1}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <Mic className={`
          w-20 h-20 text-white transition-all duration-300 
          group-hover:scale-110 group-hover:rotate-12
          ${isListening ? 'scale-110 animate-pulse' : 'scale-100'}
        `} />
      </div>
    </div>
  );
};

export default InteractiveBlob;