import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, Twitter, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSubscribe: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSubscribe }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Use Cases', href: '#solution' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-28 py-4 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/5 py-3' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Logo & Links Group */}
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            {/* Concentric Circles Icon */}
            <div className="w-7 h-7 rounded-full border-2 border-foreground/60 flex items-center justify-center group-hover:border-foreground transition-colors">
              <div className="w-3 h-3 rounded-full border border-foreground/60 group-hover:border-foreground transition-colors" />
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tight text-foreground">
              Mindloop
            </span>
          </a>

          {/* Center-Left Nav Links with dots */}
          <div className="hidden md:flex items-center gap-3 text-sm">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.name}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer text-sm font-medium"
                >
                  {link.name}
                </button>
                {idx < navLinks.length - 1 && (
                  <span className="text-muted-foreground/40 text-xs select-none">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right: Social Icons & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Social Icons in Liquid Glass Circles */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-foreground hover:scale-105 transition-transform"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-foreground hover:scale-105 transition-transform"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-foreground hover:scale-105 transition-transform"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onOpenSubscribe}
            className="hidden lg:block bg-white text-black text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-white/90 transition-all ml-2"
          >
            GET ACCESS
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-foreground"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-6 liquid-glass rounded-2xl bg-black/95 border border-white/10 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-muted-foreground hover:text-white py-1.5 text-base font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full liquid-glass flex items-center justify-center"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full liquid-glass flex items-center justify-center"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full liquid-glass flex items-center justify-center"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubscribe();
              }}
              className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
