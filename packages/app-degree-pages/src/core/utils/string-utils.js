// @ts-check

function toTitleCase(str) {
  return str?.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

function isHtml(text) {
  return /<\/?[a-z][\s\S]*>/i.test(text);
}

export { toTitleCase, isHtml };
