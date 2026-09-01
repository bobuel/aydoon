import { siteAsset, siteUrl } from '../sitePaths';

describe('static site paths', () => {
  it('keeps local assets under the active Vite base path', () => {
    expect(siteAsset('/og-image.png')).toBe('/og-image.png');
  });

  it('creates canonical GitHub Pages URLs', () => {
    expect(siteUrl('case-studies/ai-product-leadership-dremio')).toBe(
      'https://bobuel.github.io/aydoon/case-studies/ai-product-leadership-dremio',
    );
  });
});
