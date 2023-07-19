// @ts-check
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
// core
import { ASUHeader } from "@asu/component-header/dist/asuHeader.es";

import desktopLogo from "../../../assets/img/arizona-state-university-logo-vertical.png";
import mobileLogo from "../../../assets/img/arizona-state-university-logo.png";
import routes from "../../routes"
// Some customization, only if necessary, it is not mandatory
const HeaderSection = styled.div`
  header {
    position: sticky;

    // this align the "Create" button
    .content-container {
      font-size: 1rem;
      border: 0;
      margin: 0;
      height: fit-content;
      align-items: start;
      flex-direction: row;
    }

    a {
      cursor: pointer;
    }
  }
`;

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState("");

  return (
    <HeaderSection>
      <ASUHeader
        logo={{
          alt: "logo",
          src: desktopLogo,
          mobileSrc: mobileLogo,
        }}
        loggedIn={isAuthenticated}
        userName={user}
        onLoginClick={() => {
          setUser("dummy-user@asu.com");
          setAuthenticated(true);
        }}
        onLogoutClick={() => {
          setAuthenticated(false);
        }}
        navTree={[
          {
            onClick: () => navigate(routes.HOME),
            text: "Home",
            type: "icon-home",
            selected: routes.HOME == location.pathname,
          },
          {
            onClick: () => navigate(routes.LIST),
            text: "My List",
            selected: routes.LIST == location.pathname,
          },
          {
            onClick: () => navigate(routes.SEARCH),
            text: "ASU Search",
            selected: routes.SEARCH == location.pathname,
          },
        ]}
        title="ASU Web App"
        buttons={[
          {
            onClick: () => navigate(routes.CREATE),
            text: "Create",
            color: "gold",
          },
        ]}
      />
    </HeaderSection>
  );
}

export { Navbar };
