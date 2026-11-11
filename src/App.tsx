import { useCallback, useState } from 'react';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { LegalModal, type LegalModalTopic } from './components/LegalModal';

export default function App() {
  const [legalTopic, setLegalTopic] = useState<LegalModalTopic | null>(null);

  const openLegal = useCallback((topic: LegalModalTopic) => {
    setLegalTopic(topic);
  }, []);

  const closeLegal = useCallback(() => {
    setLegalTopic(null);
  }, []);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="site-main" id="hauptinhalt" tabIndex={-1} aria-labelledby="page-landmark-label">
        <p id="page-landmark-label" className="sr-only">
          DeveLup Premium-Infrastruktur Ludwigslust — Inhaltsbereich
        </p>
      </main>
      <SiteFooter onLegalOpen={openLegal} />
      <LegalModal topic={legalTopic} onClose={closeLegal} />
    </div>
  );
}
