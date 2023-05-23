import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default createComponent("Pagination", "Molecules", "Examples");
import { googleAnalytics as initFunc } from "@asu/unity-bootstrap-theme/js/data-layer.js";

export const DisabledAndActiveStatesComponent = createStory(
  <nav aria-label="...">
    <ul className="pagination">
      <li className="page-item disabled">
        <a
          className="page-link page-link-icon"
          href="#"
          tabIndex="-1"
          aria-disabled="true"
        />
      </li>
      <li className="page-item active" aria-current="page">
        <a
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
          1<span className="visually-hidden">(current)</span>
        </a>
      </li>
      <li className="page-item">
        <a
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
        <a aria-label="next" className="page-link page-link-icon" href="#" />
      </li>
    </ul>
  </nav>,
  { initFunc }
);

export const LargeNumbersComponent = createStory(
  <nav aria-label="...">
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link page-link-icon" href="#" />
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item elipses">
        <span className="page-link">...</span>
      </li>
      <li className="page-item">
        <a
          className="page-link"
          href="#"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="pagination"
          data-ga-region="main content"
          data-ga-section="pagination title"
          data-ga="page 40"
        >
          40
        </a>
      </li>
      <li className="page-item active" aria-current="page">
        <a
          className="page-link"
          href="#"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="pagination"
          data-ga-region="main content"
          data-ga-section="pagination title"
          data-ga="page 41"
        >
          41
          <span className="visually-hidden">(current)</span>
        </a>
      </li>
      <li className="page-item">
        <a
          className="page-link"
          href="#"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="pagination"
          data-ga-region="main content"
          data-ga-section="pagination title"
          data-ga="page 42"
        >
          42
        </a>
      </li>
      <li className="page-item">
        <span className="page-link elipses">...</span>
      </li>
      <li className="page-item elipses">
        <a className="page-link" href="#">
          50
        </a>
      </li>
      <li className="page-item">
        <a className="page-link page-link-icon" href="#" />
      </li>
    </ul>
  </nav>,
  { initFunc }
);
