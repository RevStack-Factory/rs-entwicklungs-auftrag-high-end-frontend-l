export type SeatDefinition = {
  id: number;
  position: [number, number, number];
};

export const bookingConfig = {
  basePricePerSeat: 149,
  occupiedSeats: [3, 4, 8] as const,
  checkoutBase: '/checkout',
  storageKey: 'develup-seat-selection-v1',
  seats: [
    { id: 1, position: [-4, 0, -3] },
    { id: 2, position: [-2, 0, -3] },
    { id: 3, position: [0, 0, -3] },
    { id: 4, position: [2, 0, -3] },
    { id: 5, position: [4, 0, -3] },
    { id: 6, position: [-4, 0, 1] },
    { id: 7, position: [-2, 0, 1] },
    { id: 8, position: [0, 0, 1] },
    { id: 9, position: [2, 0, 1] },
    { id: 10, position: [4, 0, 1] },
  ] satisfies SeatDefinition[],
} as const;

export const occupiedSeatSet = new Set<number>(bookingConfig.occupiedSeats);

export const panelBenefits = [
  'Highspeed-WLAN',
  'Kaffeeflat',
  'Smart-Lock',
  '2× Chibi-Systeme (Individual-Schnittstelle)',
  '2× Pro-Agent-Systeme (Enterprise-Schnittstelle)',
  'Event-Zugang',
] as const;

export const seatStorageNotice =
  'Deine Sitzplatz-Auswahl wird lokal im Browser (LocalStorage) zwischengespeichert, damit du die Buchung ohne Datenverlust fortsetzen kannst. Es werden keine personenbezogenen Kontodaten gespeichert — nur die gewählten Platz-IDs. Details findest du unter Datenschutz im Footer.';
