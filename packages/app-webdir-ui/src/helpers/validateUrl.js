function validateAndCleanURL(url) {
  try {
      let urlObj = new URL(url);
      let pathname = urlObj.pathname.replace(/\/+/g, '/');
      let cleanedURL = new URL(urlObj.protocol + '//' + urlObj.host + pathname + urlObj.search);
      return cleanedURL;
  } catch (e) {
      throw new Error('Invalid URL', e.message);
  }
}

export { validateAndCleanURL };
