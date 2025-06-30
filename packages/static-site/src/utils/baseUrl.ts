import { PagePaths } from "../routes/config";

export const getBaseUrl = () => {
  const pages = Object.values(PagePaths)
    .filter(page => page !== "/")
    .map(page => page.replace(/\//g, ""));

  if (typeof window === "undefined") return "/";

  const pathname = window.location.pathname;

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter(segment => !pages.includes(segment))
    .filter(segment => segment.indexOf(".") === -1);

  return `/${segments.join("/")}`;
};

export const getRelativePath = (path: string): string => {
  const baseUrl = getBaseUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const fullPath = `${baseUrl}${normalizedPath}`;

  return fullPath.replace(/\/{2,}/g, "/");
};
