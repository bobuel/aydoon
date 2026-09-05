import { useLayoutEffect, useRef } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import BuildLabPage from './components/BuildLabPage';
import CaseStudyPage from './components/CaseStudyPage';
import EmployerPortfolio from './components/EmployerPortfolio';
import NotFound from './components/NotFound';

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
      <Routes>
        <Route path="/" element={<EmployerPortfolio />} />
        <Route path="/work" element={<Navigate to="/" replace />} />
        <Route path="/builds" element={<BuildLabPage />} />
        <Route path="/games" element={<Navigate to="/builds" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
