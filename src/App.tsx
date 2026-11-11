import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { LegalModal, type LegalModalTopic } from './components/LegalModal';
import { LandingSections } from './components/LandingSections';

const BookingOverlay = lazy(() => import('./booking/BookingOverlay'));

export default function App() {
  const [legalTopic, setLegalTopic] = useState<LegalModalTopic | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const openLegal = useCallback((topic: LegalModalTopic) => {
    setLegalTopic(topic);
  }, []);

  const closeLegal = useCallback(() => {
    setLegalTopic(null);
  }, []);

  const openBooking = useCallback(() => {
    setBookingOpen(true);
    window.dispatchEvent(new CustomEvent('develup:open-booking'));
  }, []);

  const closeBooking = useCallback(() => {
    setBookingOpen(false);
  }, []);

  useEffect(() => {
    const onExternalOpen = () => setBookingOpen(true);
    window.addEventListener('develup:open-booking', onExternalOpen);
    return () => window.removeEventListener('develup:open-booking', onExternalOpen);
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
      <Suspense fallback={null}>
        <BookingOverlay open={bookingOpen} onClose={closeBooking} />
      </Suspense>
      <SiteFooter onLegalOpen={openLegal} />
      <LegalModal topic={legalTopic} onClose={closeLegal} />
    </div>
  );
}
