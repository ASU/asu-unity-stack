// @ts-check

function getStoryBookBaseUrl() {
  const { origin, pathname } = window.location;
  const baseUrl = origin + pathname.replace("iframe.html", "");

  return baseUrl || "/";
}

export { getStoryBookBaseUrl };
