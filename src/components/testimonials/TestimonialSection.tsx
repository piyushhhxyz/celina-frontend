import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import { testimonials } from './testimonialData';
import CompanyLogos from './CompanyLogos';

const TestimonialSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {" "}Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            See how companies are transforming their sales process with our AI agents
          </p>
        </div>

        <TestimonialCarousel testimonials={testimonials} />
        <CompanyLogos />
      </div>
    </section>
  );
};