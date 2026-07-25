import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Mail, ArrowRight, PenTool } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'subscribe' | 'writer';
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  mode = 'subscribe',
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after success
    }, 2000);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setEmail('');
    setName('');
    setTopic('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-md liquid-glass bg-black/90 p-8 rounded-3xl border border-white/20 shadow-2xl z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight mb-2">
                  {mode === 'subscribe' ? "You're on the list" : 'Application Received'}
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto leading-relaxed">
                  {mode === 'subscribe'
                    ? 'Welcome to Mindloop. We sent a verification note to your inbox.'
                    : 'Our editorial team will review your writer credentials within 24 hours.'}
                </p>
                <button
                  onClick={resetAndClose}
                  className="mt-8 w-full bg-white text-black font-semibold rounded-full py-3 hover:bg-white/90 transition-colors text-sm"
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center liquid-glass">
                    {mode === 'subscribe' ? (
                      <Mail className="w-5 h-5 text-white" />
                    ) : (
                      <PenTool className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">
                      {mode === 'subscribe' ? 'Subscribe to Mindloop' : 'Start Writing on Mindloop'}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {mode === 'subscribe'
                        ? 'High-signal weekly digest. No noise.'
                        : 'Join curated creators reaching 7,000+ readers.'}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5 tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5 tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  {mode === 'writer' && (
                    <div>
                      <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5 tracking-wider">
                        Publication Focus / Topic
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="AI Architecture, Philosophy, Tech Ethics..."
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-2 bg-white text-black font-semibold rounded-xl py-3.5 flex items-center justify-center gap-2 hover:bg-zinc-100 transition-colors text-sm shadow-xl"
                  >
                    <span>{mode === 'subscribe' ? 'Confirm Subscription' : 'Apply for Publisher Key'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>

                <p className="text-[11px] text-zinc-500 text-center mt-4">
                  By submitting, you agree to Mindloop's Terms of Service and Privacy Policy.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
