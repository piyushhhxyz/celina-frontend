import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import { Testimonial } from './testimonialData';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-5xl mx-auto mb-24">
      <div className="relative h-[600px] perspective-1000">
        {testimonials.map((testimonial, index) => {
          const offset = (index - activeIndex) % testimonials.length;
          const isActive = index === activeIndex;
          
          return (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              offset={offset}
              isActive={isActive}
            />
          );
        })}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto p-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
            border border-cyan-500/20 backdrop-blur-sm transition-all duration-300
            hover:border-cyan-500/50 hover:scale-110 group"
        >
          <ChevronLeft className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto p-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
            border border-cyan-500/20 backdrop-blur-sm transition-all duration-300
            hover:border-cyan-500/50 hover:scale-110 group"
        >
          <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
        </button>
      </div>
    </div>
  );
};