import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CaseStudyPage from '../components/CaseStudyPage';

describe('CaseStudyPage', () => {
  it('loads a case study directly and keeps Dremio product and learning evidence distinct', () => {
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://bobuel.github.io/aydoon/';
    document.head.append(canonical);
    const { unmount } = render(
      <MemoryRouter initialEntries={['/case-studies/ai-product-leadership-dremio']}>
        <Routes>
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('AI products at Dremio');
    expect(screen.getByRole('link', { name: 'All case studies' })).toHaveAttribute('href', '/#work');
    expect(screen.getByRole('heading', { name: /Adoption evidence—kept distinct/i })).toBeInTheDocument();
    expect(screen.getByText(/Dremio University, not to the AI products/i)).toBeInTheDocument();
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://bobuel.github.io/aydoon/case-studies/ai-product-leadership-dremio',
    );
    unmount();
    canonical.remove();
  });
});
