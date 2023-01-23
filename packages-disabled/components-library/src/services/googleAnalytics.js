/**
 * @param {{
 *  event: string
 *  action: string
 *  name: string
 *  type: string
 *  section: string
 *  text: string
 *  component: string
 * }} args
 */
const trackGAEvent = ({
  event = "link",
  action = "click",
  name = "onclick",
  type = "internal link",
  section = "main navbar",
  text = "",
  component,
}) => {
  const { dataLayer } = window;
  const e = {
    event: event.toLowerCase(),
    action: action.toLowerCase(),
    name: name.toLowerCase(),
    type: type.toLowerCase(),
    region: "navbar",
    section: section.toLowerCase(),
    text: text.toLowerCase(),
    ...(component && { component: component.toLowerCase() }),
  };
  if (dataLayer) dataLayer.push(e);
};

export { trackGAEvent };
