import { MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SiteHeaderProps {
  onOpenChat?: () => void;
}

export default function SiteHeader({ onOpenChat }: SiteHeaderProps) {
  const { pathname } = useLocation();
  const homePrefix = pathname === '/' ? '' : '/';

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Alex Aidun home">
        <span className="brand-mark" aria-hidden="true">A</span>
        <span>Alex Aidun</span>
      </Link>
      <nav className="header-links" aria-label="Primary navigation">
        <a href={`${homePrefix}#case-studies`}>Case studies</a>
        <a href={`${homePrefix}#builds`}>Selected builds</a>
        {onOpenChat && (
          <button className="header-chat" type="button" onClick={onOpenChat}>
            <MessageCircle aria-hidden="true" size={16} /> Ask AI
          </button>
        )}
        <a className="header-cta" href="mailto:bobuel@gmail.com">Let’s talk</a>
      </nav>
    </header>
  );
}

