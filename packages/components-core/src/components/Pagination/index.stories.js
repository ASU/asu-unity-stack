/* eslint react/jsx-props-no-spreading: "off" */
import classNames from "classnames";
import React from "react";

import { Pagination } from ".";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export default {
  title: "UDS/Pagination",
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
  <div className={UdsStyles["container"]}>
    <div
      className={classNames(
        UdsStyles["row"],
        UdsStyles["row-spaced"],
        UdsStyles["pt-2"],
        UdsStyles["pb-2"]
      )}
    >
      <div
        className={classNames(
          UdsStyles["col"],
          UdsStyles["col-12"],
          UdsStyles["col-md-12"],
          UdsStyles["col-lg-12"]
        )}
      >
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

export const Gray1Background = Template.bind({});
Gray1Background.args = { type: "default", background: "gray1", currentPage: 7 };

export const Gray2Background = Template.bind({});
Gray2Background.args = {
  type: "default",
  background: "gray2",
  currentPage: 5,
  totalNumbers: 5,
};

export const Gray7Background = Template.bind({});
Gray7Background.args = { type: "default", background: "gray7" };
