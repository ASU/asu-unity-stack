// import "./button.css";

export const createButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  btn.className = [
    // "storybook-button",
    // `storybook-button--${size}`,
    "btn",
    "btn-primary",
    mode,
  ].join(" ");

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
