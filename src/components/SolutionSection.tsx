import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

export const SolutionSection: React.FC = () => {
  const features = [
    {
      title: 'Curated Feed',
      description:
        'Algorithmic noise filtered out in favor of editorially verified, high-signal newsletters and thought pieces.',
    },
    {
      title: 'Writer Tools',
      description:
        'Distraction-free publishing canvas with deep reader analytics, subscriber CRM, and instant monetization.',
    },
    {
      title: 'Community',
      description:
        'Direct subscriber dialogue, threaded discussion loops, and interactive Q&A directly inside issues.',
    },
    {
      title: 'Distribution',
      description:
        'Seamless cross-pollination with AI-native search engines and discovery algorithms for organic growth.',
    },
  ];

  return (
    <section id="solution" className="py-32 md:py-44 border-t border-border/30 max-w-7xl mx-auto px-6">
      {/* Label */}
      <motion.p
        {...fadeUp(0.1)}
        className="text-xs tracking-[3px] uppercase text-muted-foreground text-center mb-4 font-mono font-semibold"
      >
        SOLUTION
      </motion.p>

      {/* Heading */}
      <motion.h2
        {...fadeUp(0.2)}
        className="text-4xl sm:text-5xl md:text-6xl text-center font-medium tracking-[-1px] text-foreground mb-16"
      >
        The platform for <span className="font-serif italic font-normal">meaningful</span> content
      </motion.h2>

      {/* Aspect 3/1 Video */}
      <motion.div {...fadeUp(0.3)} className="mb-16">
        <div className="relative w-full max-w-6xl mx-auto aspect-[3/1] rounded-2xl overflow-hidden border border-white/10 shadow-2xl liquid-glass">
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </motion.div>

      {/* 4-column feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            {...fadeUp(0.4 + idx * 0.1)}
            className="p-6 rounded-2xl border border-white/5 bg-zinc-950/40 liquid-glass hover:border-white/20 transition-all duration-300"
          >
            <h3 className="font-semibold text-base text-foreground mb-3 tracking-tight">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
