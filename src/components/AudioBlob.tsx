import React, { useState } from 'react';
import { Mic } from 'lucide-react';

const AudioBlob = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="relative group cursor-pointer" onClick={() => setIsRecording(!isRecording)}>
      {/* Animated blob */}
      <div className={`absolute inset-0 rounded-full bg-cyan-500/30 animate-pulse group-hover:bg-cyan-400/40 transition-all duration-500 ${isRecording ? 'scale-150' : 'scale-100'}`} />
      
      {/* Main circle */}
      <div className="relative w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center group-hover:bg-cyan-400 transition-colors duration-300">
        <Mic className={`w-6 h-6 text-white ${isRecording ? 'animate-pulse' : ''}`} />
      </div>
      
      <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-cyan-400 font-medium">
        {isRecording ? 'Listening...' : 'Click to try Celina'}
      </p>
    </div>
  );
};

export default AudioBlob;