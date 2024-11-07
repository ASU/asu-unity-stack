export const getBaseUrl = () => {

  const host = window.location.host;
  const pathname = window.location.pathname;

  let basename = "/";
  if(host === "asu.github.io") {
    basename = "/asu-unity-stack";
  } else if(pathname.indexOf("/build/") > -1) {
    basename = window.location.pathname.replace(/(.*?\/build\/).*/, "$1");
  }

  return basename;
}

export const getRelativePath = (path: string): string => {
  return `${getBaseUrl()}${path}`.replace(/\/\//g, "/");
}
