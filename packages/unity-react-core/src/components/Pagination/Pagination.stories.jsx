/* eslint react/jsx-props-no-spreading: "off" */
import classNames from "classnames";
import React from "react";

import { Pagination } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: `The Pagintaion component can be used to generate pagination.
## Usage

All props are valid options for all pagination types.
Pagination users are responsible to meet all UDS design guidelines with their Pagination,
including rules on the use of Call-to-Action buttons and tags.

View component examples and source code below.
`,
      },
    },
  },
};

const Template = args => (
  <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12", "col-md-12", "col-lg-12")}>
        <Pagination {...args} />
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "default",
  background: "white",
  totalPages: 4,
};

export const Bordered = Template.bind({});
Bordered.args = {
  type: "bordered",
  background: "white",
  totalPages: 45,
  showFirstButton: true,
  showLastButton: true,
};

export const AsuGray7Background = Template.bind({});
AsuGray7Background.args = {
  type: "default",
  background: "faint",
  currentPage: 7,
};

export const AsuGray6Background = Template.bind({});
AsuGray6Background.args = {
  type: "default",
  background: "light",
  currentPage: 5,
  totalNumbers: 5,
};

export const AsuGray1Background = Template.bind({});
AsuGray1Background.args = { type: "default", background: "dark" };
