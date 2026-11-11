import { useEffect, useRef } from 'react';

export type LegalModalTopic = 'impressum' | 'datenschutz';

const modalTitles: Record<LegalModalTopic, string> = {
  impressum: 'Impressum',
  datenschutz: 'Datenschutz',
};

type LegalModalProps = {
  topic: LegalModalTopic | null;
  onClose: () => void;
};

export function LegalModal({ topic, onClose }: LegalModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!topic) {
      return;
    }
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [topic, onClose]);

  const open = topic !== null;

  return (
    <div
      id="legal-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={open ? 'legal-modal-title' : undefined}
      hidden={!open}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {open ? (
        <article className="legal-modal__panel interactive-surface">
          <button
            ref={closeRef}
            type="button"
            className="legal-modal__close"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span> Schließen
          </button>
          <h2 id="legal-modal-title" className="legal-modal__title">
            {modalTitles[topic]}
          </h2>
        </article>
      ) : null}
    </div>
  );
}
