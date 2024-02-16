import { createComponent, createStory } from "../../../helpers/wrapper.js";

const extraOptions = {
  color: {
    name: "Color",
    options: ["white", "base-gray", "gray", "dark"],
    defaultValue: "gray",
    control: {
      type: "radio",
      labels: {
        "white": "White",
        "base-gray": "Base Gray",
        "gray": "Gray",
        "dark": "Dark",
      },
    },
  },
};

export default {
  title: "Atoms/Tooltips/Templates",
  argTypes: extraOptions,
};

export const Tooltips = createStory(args => {
  return (
    <div className={`uds-tooltip-bg-${args.color}`}>
      <div className="uds-tooltip-container">
        <button
          tabIndex="0"
          className={`uds-tooltip uds-tooltip-${
            args.color === "base-gray" ? "gray-1" : args.color
          }`}
          aria-describedby="tooltip-desc-1"
        >
          <span className="fa-stack">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-info fa-stack-1x"></i>
          </span>
          <span className="uds-tooltip-visually-hidden">Notifications</span>
        </button>
        <div role="tooltip" className="uds-tooltip-description" id="tooltip-desc-1">
          <span className="uds-tooltip-heading">Lorem ipsum dolor sit amet</span>
          Other content
        </div>
      </div>
    </div>
  );
});
Tooltips.args = {
  template: 1,
};
