// @ts-check

function getCurrentScriptPath() {
  const match = (
    // @ts-ignore
    (document.currentScript && document.currentScript.src) ||
    ""
  ).match(/(.*\/)/);
  return match && match.length > 0
    ? match[0].substr(0, match[0].length - 1)
    : "/";
}

export { getCurrentScriptPath };
