// @ts-check

function getCurrnetScriptPath() {
  // @ts-ignore
  const match = (document.currentScript.src || "").match(/(.*\/)/);
  return match.length > 0 ? match[0] : "/";
}

export { getCurrnetScriptPath };
