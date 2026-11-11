import { panelBenefits, seatStorageNotice } from '../config/booking';

type BookingSidePanelProps = {
  open: boolean;
  selectedSeats: number[];
  shiftHeld: boolean;
  onClearSelection: () => void;
};

export function BookingSidePanel({
  open,
  selectedSeats,
  shiftHeld,
  onClearSelection,
}: BookingSidePanelProps) {
  return (
    <aside
      className="booking-side-panel interactive-surface"
      data-open={open ? 'true' : 'false'}
      aria-hidden={open ? 'false' : 'true'}
      aria-labelledby="booking-panel-title"
    >
      <div className="booking-side-panel__inner focus-depth">
        <h2 id="booking-panel-title" className="booking-side-panel__title">
          Ausgewählte Arbeitsplätze
        </h2>
        <p className="booking-side-panel__shift-hint">
          {shiftHeld
            ? 'Shift gedrückt — Mehrfachauswahl aktiv.'
            : 'Halte Shift, um mehrere Plätze im Raum zu markieren.'}
        </p>
        {selectedSeats.length === 0 ? (
          <p className="booking-side-panel__empty">
            Klicke im Raum auf freie Plätze (cyan). Belegte Plätze 3, 4 und 8 sind gesperrt.
          </p>
        ) : (
          <>
            <p className="booking-side-panel__seats" aria-live="polite">
              Plätze: {selectedSeats.join(', ')}
            </p>
            <button type="button" className="booking-side-panel__clear legal-link" onClick={onClearSelection}>
              Auswahl zurücksetzen
            </button>
          </>
        )}
        <section className="booking-side-panel__benefits" aria-labelledby="benefits-heading">
          <h3 id="benefits-heading" className="booking-side-panel__subtitle">
            Leistungs-Spiegel
          </h3>
          <ul role="list">
            {panelBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <p className="booking-side-panel__storage">{seatStorageNotice}</p>
      </div>
    </aside>
  );
}
