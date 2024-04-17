import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/Breadcrumbs/Examples",
  decorators: [ defaultDecorator ],
  parameters: { controls: { disable: true } },
};

export const BreadcrumbsAgainstWhiteBackground = () => (
  <nav aria-label="breadcrumbs">
    <ol className="breadcrumb bg-white">
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

export const BreadcrumbsAgainstGray1Background = () => (
  <nav aria-label="breadcrumbs">
    <ol className="breadcrumb bg-gray-1">
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

export const BreadcrumbsAgainstGray2Background = () => (
  <nav aria-label="breadcrumbs">
    <ol className="breadcrumb bg-gray-2">
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

export const FullWidthBreadcrumbsAgainstGray7Background = () => (
  <section className="bg-gray-7">
    <nav className="uds-content-align" aria-label="breadcrumbs">
      <ol className="breadcrumb">
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
  </section>
);
