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
 * @returns {array}
 */
export const tryAddActivePage = (navTree = []) => {
  // Do not alter navTree if selected property is found
  if (hasActivePage(navTree)) {
    return navTree;
  }
  let currentPath = "";
  if (window?.location) {
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
