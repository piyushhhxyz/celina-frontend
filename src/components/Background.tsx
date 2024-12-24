import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#0f1033] to-[#0a0a1f]">
        {/* Animated orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0066ff] rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-float" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#00ffff] rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-float-delayed" />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
};

export default Background;