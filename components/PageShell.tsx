import type { ReactNode } from 'react';
import SkipLink from './SkipLink';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <SkipLink />
      <SiteHeader />
      <main id="main" tabIndex={-1}>{children}</main>
      <SiteFooter />
    </div>
  );
}
