export const getBaseUrl = () => {

  if (typeof window === 'undefined') return '/';

  const pathname = window.location.pathname;

  const segments = pathname.split('/').filter(Boolean);
  return segments.length > 0 ? `/${segments[0]}` : '/';

};

export const getRelativePath = (path: string): string => {
  const baseUrl = getBaseUrl();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const fullPath = `${baseUrl}${normalizedPath}`;

  return fullPath.replace(/\/{2,}/g, '/');
};
