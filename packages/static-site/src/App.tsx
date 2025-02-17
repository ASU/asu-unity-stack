import '@asu/unity-bootstrap-theme';
import "~/App.css";
import Page from '~/components/Page';
import { Outlet, ScrollRestoration } from "react-router-dom";

function App(): JSX.Element {
  return (
    <Page>
      <ScrollRestoration />
      <Outlet />
    </Page>
);
}

export default App;
