import { createComponent, createStory } from "../../../helpers/wrapper.js";

const extraOptions = {
  type: {
    name: "Type",
    options: ["bg-white", "bg-gray-1", "bg-gray-2", "bg-gray-7"],
    defaultValue: "bg-white",
    control: {
      type: "radio",
      labels: {
        "bg-white": "bg-white",
        "bg-gray-1": "bg-gray-1",
        "bg-gray-2": "bg-gray-2",
        "bg-gray-7": "bg-gray-7",
      },
    },
  },
};

export default {
  title: "Atoms/Breadcrumbs/Templates",
};

export const BreadcrumbsAgainstWhiteBackground = createStory(args => {
  return (
    <nav aria-label="breadcrumbs">
      <ol className={`breadcrumb ${args.type}`}>
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
});
