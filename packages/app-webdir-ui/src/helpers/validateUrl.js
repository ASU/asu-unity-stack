function validateAndCleanURL(url) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname.replace(/\/+/g, "/");
    const cleanedURL = new URL(
      `${urlObj.protocol}//${urlObj.host}${pathname}${urlObj.search}`
    );
    return cleanedURL;
  } catch (e) {
    throw new Error("Invalid URL", e.message);
  }
}

export { validateAndCleanURL };
