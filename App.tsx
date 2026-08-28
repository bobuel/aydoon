import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CaseStudyPage from './components/CaseStudyPage';
import EmployerPortfolio from './components/EmployerPortfolio';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployerPortfolio />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

