import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const paragraph1Text =
  "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";

const paragraph2Text =
  "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";

const highlightWords = ['curiosity', 'meets', 'clarity'];

interface WordProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  isHighlight?: boolean;
  isParagraph2?: boolean;
}

const Word: React.FC<WordProps> = ({
  word,
  range,
  progress,
  isHighlight,
  isParagraph2,
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);

  let textColor = 'text-[hsl(var(--hero-subtitle))]';
  if (isHighlight) {
    textColor = 'text-white font-semibold underline decoration-white/30 underline-offset-8';
  } else if (isParagraph2) {
    textColor = 'text-muted-foreground hover:text-foreground transition-colors';
  }

  return (
    <span className="inline-block relative mr-[0.25em] mb-[0.1em]">
      <motion.span
        style={{ opacity }}
        className={`${textColor} transition-colors duration-200`}
      >
        {word}
      </motion.span>
    </span>
  );
};

export const ScrollWordReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.3'],
  });

  const p1Words = paragraph1Text.split(' ');
  const p2Words = paragraph2Text.split(' ');

  const totalWords = p1Words.length + p2Words.length;

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto px-6 py-8">
      {/* Paragraph 1 */}
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] text-center leading-[1.3] md:leading-[1.25]">
        {p1Words.map((word, i) => {
          const start = i / totalWords;
          const end = (i + 1) / totalWords;
          const cleanWord = word.replace(/[.,—]/g, '').toLowerCase();
          const isHighlight = highlightWords.includes(cleanWord);

          return (
            <Word
              key={`p1-${i}`}
              word={word}
              range={[start, end]}
              progress={scrollYProgress}
              isHighlight={isHighlight}
            />
          );
        })}
      </p>

      {/* Paragraph 2 */}
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mt-12 md:mt-16 text-center max-w-4xl mx-auto leading-[1.4] md:leading-[1.35]">
        {p2Words.map((word, i) => {
          const globalIndex = p1Words.length + i;
          const start = globalIndex / totalWords;
          const end = (globalIndex + 1) / totalWords;

          return (
            <Word
              key={`p2-${i}`}
              word={word}
              range={[start, end]}
              progress={scrollYProgress}
              isParagraph2
            />
          );
        })}
      </p>
    </div>
  );
};
