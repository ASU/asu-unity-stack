import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Molecules/Pagination/Templates",
  decorators: [ defaultDecorator ],
  argTypes: {
    bgColor: {
      name: "Background (With Border Only)",
      options: ["None", "uds-bg-gray", "uds-bg-dark"],
      mapping: {
        "None": ""
      },
      control: {
        type: "radio",
      },
    },
    border: {
      name: "Border",
      control: { type: "boolean" },
    },
  },
  args:{
    bgColor: "None",
    border: false,
  }
};

export const Basic = ({border, bgColor}) => {
    return (
      <nav aria-label="Page navigation example">
        <ul
          className={`pagination ${
            border ? "justify-content-center border p-2" : ""
          } ${bgColor}`}
        >
          <li className="page-item disabled">
            <a
              aria-label="Previous page"
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
            <a aria-label="Next page" className="page-link page-link-icon" href="#" />
          </li>
        </ul>
      </nav>
    );
  };
