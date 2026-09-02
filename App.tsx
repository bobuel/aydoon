import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import BuildLabPage from './components/BuildLabPage';
import CaseStudyPage from './components/CaseStudyPage';
import EmployerPortfolio from './components/EmployerPortfolio';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
