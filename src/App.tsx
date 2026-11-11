import { useCallback, useRef, useState } from 'react';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { LegalModal, type LegalModalTopic } from './components/LegalModal';
import { LandingSections } from './components/LandingSections';

export default function App() {
  const [legalTopic, setLegalTopic] = useState<LegalModalTopic | null>(null);
  const bookingMountRef = useRef<HTMLDivElement>(null);

  const openLegal = useCallback((topic: LegalModalTopic) => {
    setLegalTopic(topic);
  }, []);

  const closeLegal = useCallback(() => {
    setLegalTopic(null);
  }, []);

  const openBooking = useCallback(() => {
    const mount = bookingMountRef.current;
    if (mount) {
      mount.dataset.active = 'true';
    }
    window.dispatchEvent(new CustomEvent('develup:open-booking'));
  }, []);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="site-main" id="hauptinhalt" tabIndex={-1} aria-labelledby="page-landmark-label">
        <p id="page-landmark-label" className="sr-only">
          DeveLup Premium-Infrastruktur Ludwigslust — Inhaltsbereich
        </p>
        <LandingSections onOpenBooking={openBooking} />
      </main>
      <div
        ref={bookingMountRef}
        id="booking-overlay-root"
        className="booking-overlay-mount"
        data-active="false"
        aria-live="polite"
      />
      <SiteFooter onLegalOpen={openLegal} />
      <LegalModal topic={legalTopic} onClose={closeLegal} />
    </div>
  );
}
