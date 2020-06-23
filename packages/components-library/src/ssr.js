import render from "preact-render-to-string";
import { h } from "preact";
import Header from "./components/Header";
import { renderStylesToString } from 'emotion-server'

let HeaderTemplate;

try {
  HeaderTemplate = renderStylesToString(render(
    <Header dangerouslyGenerateStub={true} />
  ));
} catch (error) {
  // handle error
  console.error(error);
} finally {

}

export { HeaderTemplate };
