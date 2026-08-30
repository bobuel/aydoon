const siteOrigin = import.meta.env.VITE_SITE_ORIGIN;

export function siteAsset(path: string) {
  const relativePath = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${relativePath}`;
}

export function siteUrl(path = '') {
  const relativePath = path.replace(/^\//, '');
  return relativePath ? `${siteOrigin}/${relativePath}` : `${siteOrigin}/`;
}
