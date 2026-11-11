import type { LegalModalTopic } from './LegalModal';
import { siteConfig } from '../config/site';

type SiteFooterProps = {
  onLegalOpen: (topic: LegalModalTopic) => void;
};

const legalTitles: Record<LegalModalTopic, string> = {
  impressum: 'Impressum',
  datenschutz: 'Datenschutz',
};

export function SiteFooter({ onLegalOpen }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__meta">
          © {year} {siteConfig.brandName} · {siteConfig.domain}
        </p>
        <ul className="site-footer__legal" role="list">
          {(Object.keys(legalTitles) as LegalModalTopic[]).map((topic) => (
            <li key={topic}>
              <button
                type="button"
                className="legal-link"
                onClick={() => onLegalOpen(topic)}
              >
                {legalTitles[topic]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
