// import { createButton } from "./button";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
// component metadata
export default {
  title: "Atoms/Button/Templates",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

/* Template declarations */

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const TemplateForButton = ({ label, classes, disabled }) => {
  return `<button class="${classes} ${disabled}" type="submit" data-ga="${label}" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content">${label}</button>`;
};

const TemplateForLink = ({ label, classes, disabled }) => {
  return `<a href="#" role="button" class="${classes} ${disabled}" type="submit" data-ga="${label}" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content">${label}</a>`;
};

const TemplateForButtonWithIcon = ({
  label,
  classes,
  disabled = "",
  size = "",
}) => {
  return `<a href="#" class="${classes} ${size} ${disabled}" role="button" data-ga="${label}" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content"><span class="fas fa-rocket"></span>${label}</a>`;
};

const TemplateForButtonTag = ({ label }) => {
  return `<a href="#" class="" data-ga="${label}" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content">${label}</a>`;
};

/* Bind templates to stories */

export const BasicButton = TemplateForButton.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
BasicButton.args = {
  label: "Button Label",
  classes: "btn btn-maroon",
};

export const ButtonAsLink = TemplateForLink.bind({});
ButtonAsLink.args = {
  label: "Button as link",
  classes: "btn btn-gold",
};

export const ButtonWithIcon = TemplateForButtonWithIcon.bind({});
ButtonWithIcon.args = {
  label: "Button with icon",
  classes: "btn btn-gold",
};

export const ButtonTag = TemplateForButtonTag.bind({});
ButtonTag.args = {
  label: "This is a default link",
};
