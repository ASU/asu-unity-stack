import React from "react";
import "@asu/unity-bootstrap-theme";
// The above import statement is equivalent to the following:
// import "@asu/unity-bootstrap-theme/dist/unity-bootstrap-theme.bundle.css";
import "~/App.css";
import Page from "~/components/Page";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App(): React.JSX.Element {
  return (
    <Page>
      <ScrollRestoration />
      <Outlet />
    </Page>
  );
}

export default App;
