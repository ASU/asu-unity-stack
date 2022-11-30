// @ts-check
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// core
import { ASUHeader } from "@asu-design-system/component-header/dist/asuHeader.es";

import desktopLogo from "../../../assets/img/arizona-state-university-logo-vertical.png";
import mobileLogo from "../../../assets/img/arizona-state-university-logo.png";

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

const routerUrl = {
  HOME: "/",
  SEARCH: "/search",
  LIST: "/list",
  CREATE: "/create",
};

function Navbar() {
  const history = useHistory();
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
            onClick: () => history.push(routerUrl.HOME),
            text: "Home",
            type: "icon-home",
            selected: true,
          },
          {
            onClick: () => history.push(routerUrl.LIST),
            text: "My List",
          },
          {
            onClick: () => history.push(routerUrl.SEARCH),
            text: "ASU Search",
          },
        ]}
        title="ASU Web App"
        buttons={[
          {
            onClick: () => history.push(routerUrl.CREATE),
            text: "Create",
            color: "gold",
          },
        ]}
      />
    </HeaderSection>
  );
}

export { Navbar };
