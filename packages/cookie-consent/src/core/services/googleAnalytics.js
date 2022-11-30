/**
 * @param {{
 *  event?: string
 *  action?: string
 *  name?: string
 *  type?: string
 *  section?: string
 *  text?: string
 *  region?:string
 *  component?: string
 * }} args
 */
const trackGAEvent = ({
  event = "",
  action = "",
  name = "",
  type = "",
  section = "",
  text = "",
  region = "",
  component = "",
}) => {
  const { dataLayer } = window;
  const e = {
    event: event.toLowerCase(),
    action: action.toLowerCase(),
    name: name.toLowerCase(),
    type: type.toLowerCase(),
    region: region.toLowerCase(),
    section: section.toLowerCase(),
    text: text.toLowerCase(),
    component: component.toLowerCase(),
  };
  if (dataLayer) dataLayer.push(e);
};

export { trackGAEvent };
