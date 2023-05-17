import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default createComponent("Breadcrumbs", "Atoms", "Examples");

export const BreadcrumbsAgainstWhiteBackground = createStory(
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
BreadcrumbsAgainstWhiteBackground.args = {
  template: 1,
};

export const BreadcrumbsAgainstGray1Background = createStory(
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

export const BreadcrumbsAgainstGray2Background = createStory(
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

export const FullWidthBreadcrumbsAgainstGray7Background = createStory(
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
