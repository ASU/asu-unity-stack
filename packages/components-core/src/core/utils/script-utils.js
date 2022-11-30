// @ts-check

function getCurrentScriptPath() {
  // @ts-ignore
  const match = (
    (document.currentScript && document.currentScript.src) ||
    ""
  ).match(/(.*\/)/);
  return match && match.length > 0
    ? match[0].substr(0, match[0].length - 1)
    : "/";
}

export { getCurrentScriptPath };
