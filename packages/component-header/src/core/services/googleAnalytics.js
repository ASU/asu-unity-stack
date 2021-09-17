/**
 * @param {string} eventText
 */
const trackGAEvent = (eventText = "") => {
  const text = eventText.toLowerCase();
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
