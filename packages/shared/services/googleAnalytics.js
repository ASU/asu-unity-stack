import PropTypes from "prop-types";
// @ts-check

export const gaEventPropTypes = PropTypes.shape({
  event: PropTypes.string,
  action: PropTypes.string,
  name: PropTypes.string,
  region: PropTypes.string,
  section: PropTypes.string,
  component: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
});

/**
 * @typedef {{
 *  event?: string
 *  action?: string
 *  name?: string
 *  type?: string
 *  section?: string
 *  text?: string
 *  region?:string
 *  component?: string
 *  eventCallback?: () => void
 *  eventTimeout?: number
 * }} GAEventObject
 */

/**
 * @param {GAEventObject} args
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
  eventCallback,
  eventTimeout,
}) => {
  // @ts-ignore
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
  if (eventCallback) e.eventCallback = eventCallback;
  if (eventTimeout) e.eventTimeout = eventTimeout;
  if (dataLayer) {
    dataLayer.push(e);
  } else if (eventCallback) {
    eventCallback();
  }
};

export { trackGAEvent };
