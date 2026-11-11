# SPEC — DeveLup Premium-Landingpage (smartcoworking-ludwigslust.de)

## Geschäftsmodell

**Wen es trifft:** Geschäftsführer, Inhaber, Vorstände, etablierte Premium-Freelancer und Pendler (ca. 35–60+ Jahre) im Raum Ludwigslust, die Homeoffice-Isolierung und fehlende Produktivitäts-Infrastruktur spüren und gleichzeitig B2B-Netzwerk sowie Zugang zu DeveLup-Ressourcen (Arbeitsplätze, KI-Werkstatt, Förderwege) suchen.

**Was sich ändert:** Statt generischer Coworking-Werbung erleben Entscheider eine als technologische Infrastruktur geführte Seite: verständliche Premium-Positionierung, direkte Sitzplatzauswahl im Raum, transparente Mengen- und B2B-Preislogik, optional Event-Add-on (KI-Werkstatt-Tag) und Weiterleitung zur Bezahlung — ohne Unterbrechung des High-End-Flows durch harte Seitenwechsel bei Rechtstexten.

**Skalierung:** Copy und Sektionen sind modular; Sitzliste, belegte Plätze, Basispreise und Checkout-Basis-URL sind konfigurierbar. Promo-Parameter und Deeplink-Schema tragen Partner-Kampagnen. Admin-Zugang trennt öffentliche Landingpage von internen Steuerungs- und Soll-/Ist-Ansichten. Rechtstexte und Firmendaten lassen sich ohne Layout-Bruch pflegen.

## Plan

### Seiten

- Eine scrollbare **Haupt-Landingpage** (Hero, vier Infrastktur-Zertifikate, KI-Werkstatt-Tag-Sektion, Footer mit Impressum/Datenschutz).
- **Vollbild-Overlay** für 3D-Buchung (nach Hero-CTA): Three.js-Raum, Side-Panel-Checkout.
- **Modale Rechts-Layer** (#legal-modal) für Impressum und Datenschutz.
- **Admin-Ansicht** (nach Auth-Code), ersetzt die öffentliche Seite im Viewport.

### Funktionen

- Visuelles System: Rich Slate Black (#0d1117), Space-Charcoal, Akzente Neon-Cyan (#00f0ff) und Neon-Grün (#39ff14); Hover/Focus mit Inertia-Smoothing, optionalem WebGL-Refraction an Kanten interaktiver Elemente, Fokus-Tiefenwirkung (translateZ) an Containern.
- Hero mit vorgegebener H1/P; vier Zertifikat-Blöcke mit exaktem Briefing-HTML/Text.
- KI-Werkstatt-Sektion inkl. Förderhinweis (Landkreis Ludwigslust-Parchim, z. B. TBI MV, 50 %); CTA **Sichere dir deinen Platz bei der KI-Werkstatt** → `/checkout?event=ki-werkstatt&version=mature`; sekundärer Enterprise-Text ohne eigene Payment-URL im Brief.
- 3D-Raum: minimalistisches Glasmodell, OrbitControls, Plätze anklickbar; Plätze **3, 4, 8** dauerhaft belegt (dunkelrot, nicht wählbar); freie Plätze cyan; Shift-Mehrfachauswahl.
- Side-Panel: Leistungs-Spiegel, Staffelrabatt (1–2 Basis, 3–5 → 10 %, 6+ → 20 %, live), optional USt-IdNr. mit Formatcheck DE… und Umschaltung Brutto/Netto-Anzeige, Event-Checkbox, Kalender (Tagespass / Monats-Resident / Jahres-Kontingent + Aktivierungsdatum), CTA **Kontingent beanspruchen** mit Redirect gemäß Brief.
- LocalStorage für Sitzwahl-Zustand (DSGVO-Text); Query `?promo=ihk` oder `?promo=demo` → Promo-Leiste.
- Header: dezentes Feld `auth-code`; bei Eingabe `RSF_ADMIN_2026` → Admin-Dashboard mit WebSocket-Trigger **SYNCHRONEN WERKSTATT-TAG STARTEN** und Umsatz-Tabelle (60/40, UG-Zeile exakt wie im Brief).

### Nicht dabei

- Eigenes Stripe-/Apple-Pay-Backend oder Buchungsbestätigung nach Zahlung (nur Frontend-Deeplink zu `/checkout?…`).
- Live-Synchronisation belegter Plätze über Backend (Initialzustand laut Brief: 3, 4, 8 fix).
- Externe USt-IdNr.-Validierung über EU-VIES (nur Formatprüfung im Frontend).
- Content-Management-System / Mehrsprachigkeit.
- SEO-Blog, Mitgliederbereich, E-Mail-Marketing.

## Spec

**Stack (Vorschlag Factory):** React (z. B. Vite oder Next.js App Router), TypeScript, Tailwind oder CSS-Module für Design-Tokens, Three.js + @react-three/fiber + drei (OrbitControls), leichtgewichtiger WebGL- oder CSS-Fallback für Refraction-Hover, Playwright für E2E.

**Konfiguration (Env/Config-Datei):** `BASE_PRICE_PER_SEAT`, Sitz-IDs und 3D-Positionen, `OCCUPIED_SEATS=[3,4,8]`, `CHECKOUT_BASE=/checkout`, Admin-`WS_URL` (Platzhalter bis Timo/Martin liefern).

**Datenfluss Checkout:**
`/checkout?seats=${join(',')}&plan=${chosenPlan}&date=${activationDate}&vat_id=${vatIdInputStatus}&event_addon=${eventCheckboxStatus}&version=mature`

**Recht:** Impressum UG i.G., Vertretung Benjamin, James, Martin; Geschäftssitz DeveLup Ludwigslust — vollständige Anschrift [[BRAUCHE: Firmendaten]]. Datenschutz laut Brief (LocalStorage, IP, Stripe-Übergabe).

**Barrierefreiheit/Performance:** Reduced-Motion respektieren (Shader/Animation abschaltbar); 3D lazy laden; LCP für Hero ohne Blockade durch WebGL.

**Akzeptanz (funktional):** Alle Brief-Texte und Button-Labels sichtbar; Farben und Rabattstufen korrekt; Redirect-URLs exakt; Legal-Modal ohne Route-Wechsel; Promo und Admin wie spezifiziert.