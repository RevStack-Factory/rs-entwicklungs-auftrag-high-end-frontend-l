import { certificateBlocks } from '../content/landing';

export function CertificatesSection() {
  return (
    <section
      className="landing-section landing-certificates"
      aria-label="Infrastruktur-Zertifikate"
    >
      <ul className="certificate-grid" role="list">
        {certificateBlocks.map((block, index) => (
          <li key={block.id}>
            <article
              className="certificate-card interactive-surface focus-depth"
              aria-labelledby={`${block.id}-title`}
            >
              <span className="certificate-card__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 id={`${block.id}-title`} className="certificate-card__title">
                {block.title}
              </h3>
              <p className="certificate-card__body">{block.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
