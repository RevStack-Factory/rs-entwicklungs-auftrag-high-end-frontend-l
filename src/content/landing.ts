export const heroContent = {
  headline:
    'Schluss mit Homeoffice-Isolierung. Erlebe 100% Fokus und Produktivität in Ludwigslust.',
  subheadline:
    'Ergonomische Premium-Arbeitsplätze, Highspeed-Infrastruktur, ein stabiles B2B-Netzwerk vor Ort und das bewährte Betreiberkonzept des DeveLup. Beseitige das Gefühl der Einsamkeit – Menschen ziehen Menschen an. Arbeite in einem hochproduktiven Umfeld mit Gleichgesinnten.',
  primaryCtaLabel: 'Arbeitsplatz im Raum auswählen',
} as const;

export type CertificateBlock = {
  id: string;
  title: string;
  body: string;
};

export const certificateBlocks: CertificateBlock[] = [
  {
    id: 'zertifikat-1',
    title: 'Strukturierte Arbeitspsychologie',
    body: 'Der menschliche Fokus benötigt räumliche Trennung. Diese Architektur fungiert als kognitiver Anker: Beim Betreten schaltet das Nervensystem unmittelbar in den Zustand maximaler Peak-Performance. Die visuelle Dynamik einer operierenden Macher-Struktur eliminiert jede Form digitaler Ablenkung vollkommen.',
  },
  {
    id: 'zertifikat-2',
    title: 'Das ökosystemische Kollektiv',
    body: 'Dies ist keine klassische Büro-Vermietung, sondern eine strategische Allianz. Hier agiert eine geschlossene Struktur von Unternehmern, die bei komplexen Problemen wie eine Familie synergetisch ineinandergreift, um finanzielle Unabhängigkeit und System-Souveränität zu realisieren.',
  },
  {
    id: 'zertifikat-3',
    title: 'Skalierbare Software-Ressourcen',
    body: 'Die Autorisierung sichert Ihnen den redundanten Zugriff auf je zwei vollumfängliche Chibi- (Individual-Schnittstelle) und Pro-Agent-Systeme (Enterprise-Schnittstelle) im No-Code-Framework. Entwickelte Werkzeuge können mit einer Eigentums-Quote von 70 % direkt im regionalen Industrie-Store platziert werden.',
  },
  {
    id: 'zertifikat-4',
    title: 'Strategisches Kooperations-Management & Deep Insight',
    body: 'Als gesetztes Team innerhalb der Struktur des DeveLup steuern und filtrieren wir für validierte, technologische Geschäftsmodelle den direkten, exklusiven Draht zu regionalen Landesfördernetzwerken und institutionellen Entscheidungsträgern. Diese enge Kooperation ist für die Entwicklung deines eigenen Vorhabens hochgradig praktisch und beschleunigt deinen Fortschritt. Gleichzeitig vertiefen wir für dich den exklusiven Einblick in die internen Phasen, Entwicklungsstufen und das technologische Fundament des gesamten DeveLup-Hauses.',
  },
];

export const kiWerkstattContent = {
  heading: 'Die digitale Analyse: Der regionale KI-Werkstatt-Tag',
  verkaufstext:
    'Bringen Sie die realen Prozesse Ihres eigenen Betriebs oder Unternehmens auf den Prüfstand. Verantwortungsbewusste Geschäftsführer schicken ihre Auszubildenden und Angestellten zu uns, um gemeinsam im Kollektiv die digitalen Engpässe, Ineffizienzen und Zeitfresser der eigenen Firma zu analysieren. Zusammen mit unserem gesetzten Team erarbeiten die Teilnehmer handfeste, softwarebasierte Lösungsansätze zur gezielten Skalierung und langfristigen administrativen Entlastung des Unternehmens. Das Erfolgs-Incentive: Das Team, das die am stärksten dokumentierte Problem-Analyse und den effizientesten Lösungsansatz liefert, erhält eine direkte Erfolgsprämie von 50,00 € bar auf die Hand.',
  enterpriseText:
    'Sie möchten keine Mitarbeiter entsenden, sondern Ihre digitalen Kernprozesse unmittelbar auf Enterprise-Ebene optimieren? Auf Anfrage bei unserem gesetzten Team können Sie direkt ein umfassendes, mündliches Analysegespräch buchen, um mit uns ein maßgeschneidertes Großprojekt zu starten – inklusive vollständiger Integration staatlicher Fördermittel für eine hocheffiziente Zusammenarbeit.',
  foerderhinweis:
    'Dieses Qualifizierungs-Event für KMUs im Landkreis Ludwigslust-Parchim kann über die regionale KI-Förderrichtlinie (z. B. TBI MV) zu 50 % staatlich bezuschusst und gefördert werden.',
  eventCtaLabel: 'Sichere dir deinen Platz bei der KI-Werkstatt',
  eventCheckoutPath: '/checkout?event=ki-werkstatt&version=mature',
} as const;
