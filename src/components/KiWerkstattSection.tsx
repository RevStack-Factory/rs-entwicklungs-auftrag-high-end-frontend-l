import { kiWerkstattContent } from '../content/landing';

export function KiWerkstattSection() {
  return (
    <section
      className="landing-section landing-ki-werkstatt"
      aria-labelledby="ki-werkstatt-heading"
    >
      <div className="landing-ki-werkstatt__panel interactive-surface focus-depth">
        <h2 id="ki-werkstatt-heading" className="landing-ki-werkstatt__heading">
          {kiWerkstattContent.heading}
        </h2>
        <p className="landing-ki-werkstatt__lead">{kiWerkstattContent.verkaufstext}</p>
        <aside className="landing-ki-werkstatt__foerder" role="note">
          <p>{kiWerkstattContent.foerderhinweis}</p>
        </aside>
        <p className="landing-ki-werkstatt__enterprise">{kiWerkstattContent.enterpriseText}</p>
        <div className="landing-ki-werkstatt__cta-row">
          <a
            className="btn btn--primary btn--cyan interactive-surface"
            href={kiWerkstattContent.eventCheckoutPath}
          >
            {kiWerkstattContent.eventCtaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
