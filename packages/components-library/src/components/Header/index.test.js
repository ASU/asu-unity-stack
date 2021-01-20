// Tells babel to use h for JSX. It's better to configure this globally.
// See https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#usage
// In tsconfig you can specify this with the jsxFactory
/** @jsx h */

import expect  from "expect";
// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen, waitFor } from "@testing-library/preact";
import { BasicNavTree, NavTreeMega } from "../Nav/NavTreeExample";
import { Header } from "./";
import { matchers } from "@emotion/jest";

// Add the custom matchers provided by '@emotion/jest'
expect.extend(matchers);

describe("Header", () => {


  /*test("Snapshot test", () => {
    const title = "University Technology Office";

    const { container } = render(
      <Header title={title} navTree={NavTreeMega} />
    );

    expect(container).toMatchSnapshot();
  });

  test("should display proper data", () => {
    const title = "University Technology Office";

    const { container } = render(
      <Header title={title} navTree={BasicNavTree} />
    );
    expect(container.textContent).toMatch(title);
    expect(container.textContent).toMatch("Degree programs");
  });*/

  /*test("should dropdown on click", async () => {
    const title = "Ira A. Fulton School Of Engineering";
    const {
      container,
      queryByText,
      getByLabelText,
      getByText,
      getByRole,
      findByText
    } = render(<Header title={title} navTree={BasicNavTree} />);

    fireEvent.click(screen.getByText("Degree programs"));
    await waitFor(() => {
      //expect(container.textContent).toMatch("Academics");
      expect(getByText("Athletics", {selector: ".open a"})).toBeInTheDocument();
      //expect(container).toHaveClass("open");
    });
  });*/
});
