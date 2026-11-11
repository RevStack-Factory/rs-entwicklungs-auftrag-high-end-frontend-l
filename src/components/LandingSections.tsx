import { CertificatesSection } from './CertificatesSection';
import { HeroSection } from './HeroSection';
import { KiWerkstattSection } from './KiWerkstattSection';

type LandingSectionsProps = {
  onOpenBooking: () => void;
};

export function LandingSections({ onOpenBooking }: LandingSectionsProps) {
  return (
    <>
      <HeroSection onOpenBooking={onOpenBooking} />
      <CertificatesSection />
      <KiWerkstattSection />
    </>
  );
}
