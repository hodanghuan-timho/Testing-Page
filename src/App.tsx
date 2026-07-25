import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SearchHasChangedSection } from './components/SearchHasChangedSection';
import { MissionSection } from './components/MissionSection';
import { SolutionSection } from './components/SolutionSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { SubscribeModal } from './components/SubscribeModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'subscribe' | 'writer'>('subscribe');

  const handleOpenModal = (mode: 'subscribe' | 'writer' = 'subscribe') => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-foreground font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* Fixed Navbar */}
      <Navbar onOpenSubscribe={() => handleOpenModal('subscribe')} />

      {/* Page Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onSuccess={() => handleOpenModal('subscribe')} />

        {/* 2. Search Has Changed Section */}
        <SearchHasChangedSection />

        {/* 3. Mission Section */}
        <MissionSection />

        {/* 4. Solution Section */}
        <SolutionSection />

        {/* 5. CTA Section */}
        <CtaSection onOpenSubscribe={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Subscribe & Creator Application Modal */}
      <SubscribeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
      />
    </div>
  );
}
