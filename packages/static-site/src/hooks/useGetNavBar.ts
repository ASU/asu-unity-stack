import { NavTreeProps } from "@asu/component-header-footer";
import { useLocation } from "react-router-dom";
import { configRoutes } from "~/routes/config";
import { getRelativePath } from "../utils/baseUrl";

function useGetNavBar(): NavTreeProps[] {
  const location = useLocation();

  const navTree:NavTreeProps[] = [];
  configRoutes.forEach(({data}) => {
    navTree.push({
      id: navTree.length,
      href: getRelativePath(`${data?.path}index.html`),
      text: data?.navLabel,
      // useLocation().pathname is the current path does not include the base URL
      selected: (location.pathname === (data?.path) ||
        location.pathname === (`${data?.path}index.html`)),
      type: data?.type,
    });
  })
  return navTree;
}

export default useGetNavBar;
