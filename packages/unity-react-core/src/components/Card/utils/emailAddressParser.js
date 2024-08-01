// this is a little workaround to be able to use email addresses instead of regular links

const validEmail = email => {
  // regexp for valid email addresses
  const emailRegexp = /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegexp.test(email);
};

export const emailAddressParser = url => {
  if (!url.startsWith("https://") && !url.startsWith("http://")) {
    if (validEmail(url)) {
      return `mailto:${url}`;
    }
  }
  return url;
};
