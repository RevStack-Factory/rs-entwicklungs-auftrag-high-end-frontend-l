import { useId } from 'react';
import { siteConfig } from '../config/site';

export function SiteHeader() {
  const authInputId = useId();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-brand">
          <p className="site-brand__title">{siteConfig.brandName}</p>
          <p className="site-brand__domain">{siteConfig.domain}</p>
        </div>
        <div className="auth-code-field interactive-surface focus-depth">
          <label htmlFor={authInputId}>auth-code</label>
          <input
            id={authInputId}
            name="auth-code"
            type="password"
            autoComplete="off"
            spellCheck={false}
            aria-label="Admin Zugangscode"
          />
        </div>
      </div>
    </header>
  );
}
