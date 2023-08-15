import { createComponent, createStory } from "../../../helpers/wrapper.js";
import { googleAnalytics as initFunc } from "@asu/unity-bootstrap-theme/js/data-layer.js";

const extraOptions = {
  bgColor: {
    name: "Background (With Border Only)",
    options: [null, "uds-bg-gray", "uds-bg-dark"],
    defaultValue: null,
    control: {
      type: "radio",
      labels: {
        "null": "None",
        "uds-bg-gray": "uds-bg-gray",
        "uds-bg-dark": "uds-bg-dark",
      },
    },
  },
  border: {
    name: "Border",
    control: { type: "boolean" },
    defaultValue: false,
  },
};

export default createComponent(
  "Pagination",
  "Molecules",
  "Templates",
  extraOptions
);

export const Basic = createStory(
  args => {
    return (
      <nav aria-label="Page navigation example">
        <ul
          className={`pagination ${
            args.border ? "justify-content-center border p-2" : ""
          } ${args.bgColor}`}
        >
          <li className="page-item disabled">
            <a
              aria-label="Previous"
              aria-disabled
              className="page-link page-link-icon"
              href="#"
            />
          </li>
          <li className="page-item active">
            <a
              aria-current="page"
              aria-label="Page 1"
              className="page-link"
              href="#"
              data-ga-event="select"
              data-ga-action="click"
              data-ga-name="onclick"
              data-ga-type="pagination"
              data-ga-region="main content"
              data-ga-section="pagination title"
              data-ga="page 1"
            >
              1
            </a>
            <span className="visually-hidden">(current)</span>
          </li>
          <li className="page-item">
            <a
              aria-label="Page 2"
              className="page-link"
              href="#"
              data-ga-event="select"
              data-ga-action="click"
              data-ga-name="onclick"
              data-ga-type="pagination"
              data-ga-region="main content"
              data-ga-section="pagination title"
              data-ga="page 2"
            >
              2
            </a>
          </li>
          <li className="page-item">
            <a
              aria-label="Page 3"
              className="page-link"
              href="#"
              data-ga-event="select"
              data-ga-action="click"
              data-ga-name="onclick"
              data-ga-type="pagination"
              data-ga-region="main content"
              data-ga-section="pagination title"
              data-ga="page 3"
            >
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link page-link-icon" href="#" />
          </li>
        </ul>
      </nav>
    );
  },
  { initFunc }
);
Basic.args = {
  template: 1,
};
