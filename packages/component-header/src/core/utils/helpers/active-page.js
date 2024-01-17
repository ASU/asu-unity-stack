const getHrefMatchIndex = (navTree, path) =>
  navTree?.findIndex(
    item =>
      item.href === path || item.items?.flat().find(({ href }) => href === path)
  );

const hasActivePage = navTree =>
  navTree?.find(
    x => x.selected || x.items?.flat().find(({ selected }) => selected)
  );

/**
 * @param {array} navTree navTree Header property
 * @param {string?} path Href to match, will default to using window.location.pathname + window.location.search
 * @returns {array}
 */
export const tryAddActivePage = (navTree = [], path) => {
  if (hasActivePage(navTree)) {
    return navTree;
  }
  let currentPath = "";
  if (path && typeof path !== "string") {
    currentPath = path;
  } else if (window?.location) {
    currentPath = window.location.pathname + window.location.search;
  }

  if (!currentPath) {
    return navTree;
  }

  const index = getHrefMatchIndex(navTree, currentPath);
  if (index === -1) {
    return navTree;
  }
  const newTree = [...navTree];
  newTree[index].selected = true;
  return newTree;
};
