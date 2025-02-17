import { ASUHeader, NavTreeProps, HeaderProps } from "@asu/component-header-footer";
import desktopLogo from "../images/arizona-state-university-logo-vertical.png";
import mobileLogo from "../images/arizona-state-university-logo.png";
import useGetNavBar from "../hooks/useGetNavBar";


function Navbar() {
  const navBar: NavTreeProps[] = useGetNavBar();

  // @ts-expect-error-missing-props
  const headerProps: HeaderProps = {
    logo: {
      alt: "logo",
      src: desktopLogo,
      mobileSrc: mobileLogo,
    },
    logoutLink: "https://weblogin.asu.edu/cas/logout",
    navTree: navBar,
    title: "Unity Design System",
    searchUrl: "https://search.asu.edu/search",
  };

  return (
    <div style={{ position: "sticky", zIndex: "31" }}>
      <ASUHeader {...headerProps} />
    </div>
  );
}

export default Navbar;
