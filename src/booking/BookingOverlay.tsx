import { Suspense, lazy, useEffect, useId } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useSeatSelection } from '../hooks/useSeatSelection';
import { useShiftHeld } from '../hooks/useShiftHeld';
import { BookingSidePanel } from './BookingSidePanel';
import { SeatGridFallback } from './SeatGridFallback';

const CoworkingScene = lazy(() =>
  import('./CoworkingScene').then((module) => ({ default: module.CoworkingScene })),
);

type BookingOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function BookingOverlay({ open, onClose }: BookingOverlayProps) {
  const titleId = useId();
  const shiftHeld = useShiftHeld();
  const reducedMotion = usePrefersReducedMotion();
  const { selected, selectedSet, toggleSeat, clearSelection } = useSeatSelection(shiftHeld);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const panelOpen = selected.length > 0;

  return (
    <div
      id="booking-overlay-root"
      className="booking-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      data-active="true"
    >
      <div className="booking-overlay__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="booking-overlay__frame">
        <header className="booking-overlay__header">
          <div>
            <h2 id={titleId} className="booking-overlay__title">
              DeveLup Coworking — Raumwahl
            </h2>
            <p className="booking-overlay__lede">
              Drehe den Raum mit der Maus. Freie Plätze leuchten cyan; belegte Plätze 3, 4 und 8
              sind nicht wählbar.
            </p>
          </div>
          <button type="button" className="booking-overlay__close legal-modal__close" onClick={onClose}>
            <span aria-hidden="true">×</span> Schließen
          </button>
        </header>
        <div className="booking-overlay__body">
          <div className="booking-overlay__stage">
            {reducedMotion ? (
              <SeatGridFallback selectedSet={selectedSet} onToggleSeat={toggleSeat} />
            ) : (
              <Suspense fallback={<p className="booking-overlay__loading">Lade 3D-Raum …</p>}>
                <CoworkingScene selectedSet={selectedSet} onToggleSeat={toggleSeat} />
              </Suspense>
            )}
          </div>
          <BookingSidePanel
            open={panelOpen}
            selectedSeats={selected}
            shiftHeld={shiftHeld}
            onClearSelection={clearSelection}
          />
        </div>
      </div>
    </div>
  );
}
