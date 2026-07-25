import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

interface HeroSectionProps {
  onSuccess: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    onSuccess();
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden bg-black text-foreground"
    >
      {/* Background Video */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none"
      />

      {/* Dark Overlay for optimal text legibility */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      {/* Bottom Gradient Fade */}
      <div className="h-64 bg-gradient-to-t from-background via-background/80 to-transparent absolute bottom-0 left-0 right-0 pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 md:pt-36 pb-24 text-center flex flex-col items-center">
        {/* Avatar Row */}
        <motion.div {...fadeUp(0.1)} className="flex items-center justify-center gap-3 mb-8">
          <div className="flex -space-x-2">
            <img
              src="/avatar-1.png"
              alt="Subscriber 1"
              className="w-8 h-8 rounded-full border-2 border-background object-cover"
            />
            <img
              src="/avatar-2.png"
              alt="Subscriber 2"
              className="w-8 h-8 rounded-full border-2 border-background object-cover"
            />
            <img
              src="/avatar-3.png"
              alt="Subscriber 3"
              className="w-8 h-8 rounded-full border-2 border-background object-cover"
            />
          </div>
          <span className="text-muted-foreground text-sm font-medium tracking-wide">
            7,000+ people already subscribed
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.05] text-foreground mb-8"
        >
          Get <span className="font-serif italic font-normal">Inspired</span> with Us
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg md:text-xl text-[hsl(var(--hero-subtitle))] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Join our feed for meaningful updates, news around technology and a shared journey toward
          depth and direction.
        </motion.p>

        {/* Email Form */}
        <motion.div {...fadeUp(0.4)} className="w-full max-w-lg mx-auto">
          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="liquid-glass rounded-full px-6 py-4 text-sm font-medium text-white border border-white/20 flex items-center justify-center gap-2"
            >
              <span>✓ Welcome to Mindloop. Verification sent!</span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="liquid-glass rounded-full p-2 w-full flex items-center justify-between gap-2 border border-white/10 shadow-2xl"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="bg-transparent text-foreground placeholder:text-muted-foreground/80 px-5 py-2.5 focus:outline-none flex-1 text-sm md:text-base border-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-foreground text-background font-semibold rounded-full px-8 py-3.5 text-xs tracking-wider uppercase whitespace-nowrap hover:bg-white/90 transition-colors shadow-lg cursor-pointer"
              >
                SUBSCRIBE
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
