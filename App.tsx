import { useLayoutEffect, useRef } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import HybridPortfolio from './components/HybridPortfolio';

export function RouteScrollReset() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (previousPath.current !== pathname) {
      document.getElementById('main')?.focus({ preventScroll: true });
    }
    previousPath.current = pathname;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <RouteScrollReset />
      <HybridPortfolio />
    </BrowserRouter>
  );
}
