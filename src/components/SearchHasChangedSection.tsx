import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

export const SearchHasChangedSection: React.FC = () => {
  const cards = [
    {
      icon: 'icon-chatgpt.png',
      name: 'ChatGPT Search',
      description:
        'Conversational queries replace traditional link directories. Real-time synthesized summaries curate authoritative knowledge directly.',
      delay: 0.2,
    },
    {
      icon: 'icon-perplexity.png',
      name: 'Perplexity AI',
      description:
        'Citation-backed answer engines prioritize depth, primary sources, and direct knowledge summaries over SEO manipulation.',
      delay: 0.3,
    },
    {
      icon: 'icon-google.png',
      name: 'Google AI Overviews',
      description:
        'Generative search snapshots redefining organic discovery, placing newsletter authority directly inside top-of-funnel answers.',
      delay: 0.4,
    },
  ];

  return (
    <section id="how-it-works" className="pt-52 md:pt-64 pb-6 md:pb-9 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <motion.h2
        {...fadeUp(0.1)}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-center text-foreground max-w-5xl mx-auto leading-[1.08]"
      >
        Search has <span className="font-serif italic font-normal">changed.</span> Have you?
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.2)}
        className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-24 mt-6 leading-relaxed"
      >
        As AI synthesis replaces traditional blue links, high-signal newsletters are becoming the
        primary authority channel for curious minds.
      </motion.p>

      {/* 3 Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20 max-w-6xl mx-auto">
        {cards.map((card) => (
          <motion.div
            key={card.name}
            {...fadeUp(card.delay)}
            className="flex flex-col items-center text-center p-8 rounded-3xl border border-white/10 bg-zinc-950/40 liquid-glass hover:border-white/25 transition-all duration-300 group"
          >
            <div className="w-[200px] h-[200px] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
              <img
                src={card.icon}
                alt={card.name}
                className="w-[200px] h-[200px] object-contain drop-shadow-2xl"
              />
            </div>
            <h3 className="font-semibold text-base text-foreground mb-3 tracking-tight">
              {card.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Tagline */}
      <motion.p
        {...fadeUp(0.5)}
        className="text-muted-foreground text-sm text-center tracking-wide font-medium"
      >
        If you don't answer the questions, someone else will.
      </motion.p>
    </section>
  );
};
