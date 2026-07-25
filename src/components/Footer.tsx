import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-8 md:px-28 border-t border-border/20 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <p className="text-muted-foreground text-sm">
          © 2026 Mindloop. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="#privacy"
            onClick={(e) => e.preventDefault()}
            className="text-muted-foreground text-sm hover:text-foreground transition-colors"
          >
            Privacy
          </a>
          <a
            href="#terms"
            onClick={(e) => e.preventDefault()}
            className="text-muted-foreground text-sm hover:text-foreground transition-colors"
          >
            Terms
          </a>
          <a
            href="#contact"
            onClick={(e) => e.preventDefault()}
            className="text-muted-foreground text-sm hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
