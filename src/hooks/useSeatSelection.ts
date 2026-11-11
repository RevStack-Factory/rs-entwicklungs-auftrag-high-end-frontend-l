import { useCallback, useEffect, useMemo, useState } from 'react';
import { bookingConfig, occupiedSeatSet } from '../config/booking';

function readStoredSeats(): number[] {
  try {
    const raw = localStorage.getItem(bookingConfig.storageKey);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed
      .filter((id): id is number => typeof id === 'number' && Number.isInteger(id))
      .filter((id) => !occupiedSeatSet.has(id))
      .filter((id) => bookingConfig.seats.some((seat) => seat.id === id));
  } catch {
    return [];
  }
}

function writeStoredSeats(seats: number[]): void {
  localStorage.setItem(bookingConfig.storageKey, JSON.stringify(seats));
}

export function useSeatSelection(shiftHeld: boolean) {
  const [selected, setSelected] = useState<number[]>(() => readStoredSeats());

  useEffect(() => {
    writeStoredSeats(selected);
  }, [selected]);

  const selectedSet = useMemo(() => new Set(selected), [selected]);

  const toggleSeat = useCallback(
    (seatId: number) => {
      if (occupiedSeatSet.has(seatId)) {
        return;
      }
      setSelected((prev) => {
        if (shiftHeld) {
          if (prev.includes(seatId)) {
            return prev.filter((id) => id !== seatId);
          }
          return [...prev, seatId].sort((a, b) => a - b);
        }
        if (prev.length === 1 && prev[0] === seatId) {
          return [];
        }
        return [seatId];
      });
    },
    [shiftHeld],
  );

  const clearSelection = useCallback(() => {
    setSelected([]);
  }, []);

  return { selected, selectedSet, toggleSeat, clearSelection };
}
