export const youtubeURLParser = (type, url) => {
  if (type !== "youtube") {
    return url;
  }

  // Taken from https://stackoverflow.com/a/8260383 if I'm being honest.
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11
    ? `https://www.youtube.com/embed/${match[7]}`
    : false;
};
