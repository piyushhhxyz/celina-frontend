import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Star } from 'lucide-react';
import { Testimonial } from './testimonialData';

interface TestimonialCardProps {
  testimonial: Testimonial;
  offset: number;
  isActive: boolean;
}

const TestimonialCard = ({ testimonial, offset, isActive }: TestimonialCardProps) => {
  const { transform, opacity, scale } = useSpring({
    transform: `translateX(${offset * 100}%) translateZ(${isActive ? 0 : -100}px) rotateY(${offset * -15}deg)`,
    scale: isActive ? 1 : 0.9,
    opacity: isActive ? 1 : 0.5,
    config: { tension: 280, friction: 60 }
  });

  return (
    <animated.div
      style={{ transform, opacity, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full max-w-2xl">
        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 
          border border-slate-700/50 backdrop-blur-sm overflow-hidden group">
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

          {/* Quote and rating */}
          <div className="relative mb-8">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
              ))}
            </div>
            <p className="text-xl text-slate-300 italic">"{testimonial.quote}"</p>
          </div>

          {/* Stats grid */}
          {testimonial.stats && (
            <div className="grid grid-cols-2 gap-4 mb-8">
              {testimonial.stats.map((stat, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Author info */}
          <div className="flex items-center gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full ring-2 ring-cyan-500/20"
            />
            <div>
              <div className="font-semibold text-white">{testimonial.name}</div>
              <div className="text-sm text-slate-400">
                {testimonial.role}, {testimonial.company}
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};