/**
 * @param {string} text
 */
const trackGAEvent = (text = "") => {
  const { dataLayer } = window;
  const event = {
    event: "link",
    action: "click",
    name: "onclick",
    type: "internal link",
    region: "navbar",
    section: "main navbar",
    text,
  };
  if (dataLayer) dataLayer.push(event);
};

export { trackGAEvent };
