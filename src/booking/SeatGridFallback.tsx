import { bookingConfig, occupiedSeatSet } from '../config/booking';

type SeatGridFallbackProps = {
  selectedSet: Set<number>;
  onToggleSeat: (seatId: number) => void;
};

export function SeatGridFallback({ selectedSet, onToggleSeat }: SeatGridFallbackProps) {
  return (
    <div className="booking-fallback" aria-label="Sitzplan ohne 3D-Animation">
      <p className="booking-fallback__hint">
        Reduzierte Bewegung aktiv: Wähle Plätze direkt im Plan. Halte <kbd>Shift</kbd> für
        Mehrfachauswahl.
      </p>
      <ul className="booking-fallback__grid" role="list">
        {bookingConfig.seats.map((seat) => {
          const occupied = occupiedSeatSet.has(seat.id);
          const selected = selectedSet.has(seat.id);
          let stateClass = 'seat-chip--free';
          if (occupied) {
            stateClass = 'seat-chip--occupied';
          } else if (selected) {
            stateClass = 'seat-chip--selected';
          }
          return (
            <li key={seat.id}>
              <button
                type="button"
                className={`seat-chip interactive-surface ${stateClass}`}
                disabled={occupied}
                aria-pressed={selected}
                aria-label={
                  occupied
                    ? `Platz ${seat.id}, belegt`
                    : `Platz ${seat.id}${selected ? ', ausgewählt' : ''}`
                }
                onClick={() => onToggleSeat(seat.id)}
              >
                Platz {seat.id}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
