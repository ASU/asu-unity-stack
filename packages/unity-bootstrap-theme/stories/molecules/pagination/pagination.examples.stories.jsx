import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Molecules/Pagination/Examples",
  decorators: [ defaultDecorator ],
  parameters: { controls: { disable: true } },
};
export const DisabledAndActiveStatesComponent = () => (
  <nav aria-label="pagination">
    <ul className="pagination">
      <li className="page-item disabled">
        <a
          className="page-link page-link-icon"
          href="#"
          aria-disabled="true"
          aria-label="Previous page"
        />
      </li>
      <li className="page-item active">
        <a
          aria-label="Page 1"
          aria-current="page"
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
        <a aria-label="Next page" className="page-link page-link-icon" href="#" />
      </li>
    </ul>
  </nav>
);

export const LargeNumbersComponent = () => (
  <nav aria-label="pagination">
    <ul className="pagination">
      <li className="page-item">
        <a
          aria-label="previous page"
          className="page-link page-link-icon"
          href="#"
        />
      </li>
      <li className="page-item">
        <a aria-label="Page 1" className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item elipses">
        <span className="page-link">...</span>
      </li>
      <li className="page-item">
        <a
          aria-label="Page 40"
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
      <li className="page-item active">
        <a
          aria-label="Page 41"
          aria-current="page"
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
          aria-label="Page 42"
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
      <li className="page-item">
        <a aria-label="Page 50" className="page-link" href="#">
          50
        </a>
      </li>
      <li className="page-item">
        <a aria-label="next page" className="page-link page-link-icon" href="#" />
      </li>
    </ul>
  </nav>
  );
