/**
 * Find match on top level navigation item 'href' or within submenu `items`
 * @param {array} navTree
 * @param {string} path
 * @returns {number}
 */
const getHrefMatchIndex = (navTree, path) =>
  navTree?.findIndex(
    item =>
      item?.href === path ||
      // !Some applications might send invalid items props as an empty string
      (Array.isArray(item.items) &&
        item.items?.flat().find(({ href }) => href === path))
  );
/**
 * Check if selected prop already exists
 * selected prop is only supported on the top level navigation item
 * @param {array} navTree
 * @returns {boolean}
 */
const hasActivePage = navTree => navTree?.find(x => x.selected);

/**
 * @param {array} navTree navTree Header property
 * @returns {array} Same navTree or modified navTree with selected item
 */
export const tryAddActivePage = navTree => {
  if (!Array.isArray(navTree) || navTree.length === 0) {
    return navTree;
  }
  if (hasActivePage(navTree)) {
    // Do not alter navTree if selected property is found
    return navTree;
  }
  let currentPath = "";
  if (window?.location) {
    currentPath = window.location.pathname + window.location.search;
  }

  if (!currentPath) {
    // Environments where window location is undefined
    return navTree;
  }

  const index = getHrefMatchIndex(navTree, currentPath);
  if (index === -1) {
    // No match found, return original array
    return navTree;
  }
  // Add selected prop to top level navigation item
  const newTree = [...navTree];
  newTree[index].selected = true;
  return newTree;
};
