import React, { useEffect, useRef, useState } from 'react';
import { Mic } from 'lucide-react';

const HeroBlob = () => {
  const [isListening, setIsListening] = useState(false);
  const blobRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setRotation(prev => (prev + 0.5) % 360);
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative w-[500px] h-[500px] mx-auto">
      {/* Rotating outer ring */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-2xl"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      
      {/* Main blob */}
      <div 
        ref={blobRef}
        className={`
          absolute inset-8 bg-gradient-to-br from-cyan-400 to-blue-500
          rounded-full flex items-center justify-center transform-gpu
          transition-all duration-500 cursor-pointer
          ${isListening ? 'scale-110 animate-pulse' : 'scale-100'}
        `}
        onClick={() => setIsListening(!isListening)}
      >
        {/* Voice visualization spikes */}
        {isListening && (
          <div className="absolute inset-0">
            {[...Array(32)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 bg-white/30 origin-bottom"
                style={{
                  height: `${Math.random() * 50 + 20}%`,
                  left: '50%',
                  top: '0',
                  transform: `rotate(${i * (360 / 32)}deg)`,
                  animation: 'spike 0.5s ease-in-out infinite',
                  animationDelay: `${i * (1 / 32)}s`
                }}
              />
            ))}
          </div>
        )}
        
        <Mic className={`w-16 h-16 text-white transition-transform ${isListening ? 'scale-110' : 'scale-100'}`} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBlob;