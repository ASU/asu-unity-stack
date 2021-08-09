// @ts-check

function getCurrentScriptPath() {
  // @ts-ignore
  const match = (document.currentScript.src || "").match(/(.*\/)/);
  return match.length > 0 ? match[0].substr(0, match[0].length - 1) : "/";
}

function getStoryBookBaseUrl() {
  const { origin, pathname } = window.location;
  const baseUrl = origin + pathname.replace("iframe.html", "");

  return baseUrl || "/";
}

export { getCurrentScriptPath, getStoryBookBaseUrl };
