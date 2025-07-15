import React from "react";
import { defaultDecorator } from "@asu/shared";

export default {
  title: "Atoms/Breadcrumbs/Templates",
  args: { type: "bg-white" },
  argTypes: {
    type: {
      name: "Type",
      options: [
        "bg-white",
        "bg-grayscale-7",
        "bg-grayscale-6",
        "bg-grayscale-1",
      ],
      control: {
        type: "radio",
      },
    },
  },
  decorators: [defaultDecorator],
};

export const BreadcrumbsAgainstWhiteBackground = ({ type }) => {
  return (
    <nav aria-label="breadcrumbs">
      <ol className={`breadcrumb ${type}`}>
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Second Nav Item</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <a href="#">Current Page</a>
        </li>
      </ol>
    </nav>
  );
};
