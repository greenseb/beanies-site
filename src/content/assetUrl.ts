// Content paths start with "/" (e.g. "/images/hero.jpg"). Prefix the Vite base so they
// also work when the site is served from a subpath.
export function assetUrl(path: string): string {
  return path.replace(/^\//, import.meta.env.BASE_URL);
}
