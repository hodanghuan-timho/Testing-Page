import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';
import { HlsVideo } from './HlsVideo';

interface CtaSectionProps {
  onOpenSubscribe: (mode: 'subscribe' | 'writer') => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenSubscribe }) => {
  return (
    <section className="py-32 md:py-44 border-t border-border/30 relative overflow-hidden flex items-center justify-center min-h-[520px]">
      {/* Background HLS Video */}
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/55 backdrop-blur-[2px] z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center px-6 max-w-3xl mx-auto">
        {/* Concentric circles logo icon */}
        <motion.div
          {...fadeUp(0.1)}
          className="w-12 h-12 rounded-full border-2 border-foreground/80 flex items-center justify-center mb-6 shadow-xl"
        >
          <div className="w-6 h-6 rounded-full border border-foreground/80" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          {...fadeUp(0.2)}
          className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-1px] text-foreground mb-4"
        >
          Start Your <span className="font-serif italic font-normal">Journey</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-muted-foreground text-lg mb-10 max-w-lg leading-relaxed font-normal"
        >
          Join thousands of readers and writers shaping the future of high-signal independent
          publishing.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => onOpenSubscribe('subscribe')}
            className="w-full sm:w-auto bg-foreground text-background font-semibold rounded-lg px-8 py-3.5 text-sm hover:bg-white/90 transition-colors shadow-lg cursor-pointer"
          >
            Subscribe Now
          </button>
          <button
            onClick={() => onOpenSubscribe('writer')}
            className="w-full sm:w-auto liquid-glass text-foreground font-semibold rounded-lg px-8 py-3.5 text-sm hover:bg-white/10 transition-colors border border-white/20 cursor-pointer"
          >
            Start Writing
          </button>
        </motion.div>
      </div>
    </section>
  );
};
