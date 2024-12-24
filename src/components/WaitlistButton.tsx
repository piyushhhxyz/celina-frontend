import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const WaitlistButton = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="relative group">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-cyan-500 outline-none text-white placeholder:text-slate-400 w-64"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium
              hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center gap-2
              shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50"
          >
            <Sparkles className="w-4 h-4" />
            Join Waitlist
          </button>
        </form>
      ) : (
        <div className="text-cyan-400 font-medium animate-fade-in">
          🎉 Thanks! We'll notify you when access is available.
        </div>
      )}
    </div>
  );
};

export default WaitlistButton;