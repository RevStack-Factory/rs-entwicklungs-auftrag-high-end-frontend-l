import { heroContent } from '../content/landing';

type HeroSectionProps = {
  onOpenBooking: () => void;
};

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="landing-section landing-hero" aria-labelledby="hero-headline">
      <div className="landing-hero__copy">
        <h1 id="hero-headline" className="landing-hero__headline">
          {heroContent.headline}
        </h1>
        <p className="landing-hero__subheadline">{heroContent.subheadline}</p>
        <div className="landing-hero__actions focus-depth">
          <button
            type="button"
            className="btn btn--primary btn--green interactive-surface"
            onClick={onOpenBooking}
          >
            {heroContent.primaryCtaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
