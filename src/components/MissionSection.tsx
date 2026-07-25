import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';
import { ScrollWordReveal } from './ScrollWordReveal';

export const MissionSection: React.FC = () => {
  return (
    <section id="philosophy" className="pt-0 pb-32 md:pb-44 max-w-7xl mx-auto px-6">
      {/* Centered Large 800x800 Video */}
      <motion.div {...fadeUp(0.1)} className="flex justify-center mb-16 md:mb-24">
        <div className="relative w-full max-w-[800px] aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl liquid-glass group">
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
        </div>
      </motion.div>

      {/* Scroll-driven Word Reveal Text */}
      <ScrollWordReveal />
    </section>
  );
};
