const previewOrigin = 'https://bobuel.github.io/aydoon';

export function siteAsset(path: string) {
  const relativePath = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${relativePath}`;
}

export function siteUrl(path = '') {
  const relativePath = path.replace(/^\//, '');
  return relativePath ? `${previewOrigin}/${relativePath}` : `${previewOrigin}/`;
}
