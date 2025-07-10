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

export const BreadcrumbsAgainstGrayscale7Background = () => (
  <nav aria-label="breadcrumbs">
    <ol className="breadcrumb bg-grayscale-7">
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

export const BreadcrumbsAgainstGrayscale6Background = () => (
  <nav aria-label="breadcrumbs">
    <ol className="breadcrumb bg-grayscale-6">
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

export const FullWidthBreadcrumbsAgainstGrayscale1Background = () => (
  <section className="bg-grayscale-1">
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
