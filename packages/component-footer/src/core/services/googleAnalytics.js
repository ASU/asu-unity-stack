// @ts-check
/**
 * @param {{
 *  type: string
 *  section: string
 *  text: string
 * }} args
 */
const trackGAEvent = ({ type = "", section = "", text = "" }) => {
  // @ts-ignore
  const { dataLayer } = window;
  const event = {
    event: "link",
    action: "click",
    name: "onclick",
    type: type.toLowerCase(),
    region: "footer",
    section: section.toLowerCase(),
    text: text.toLowerCase(),
  };
  if (dataLayer) dataLayer.push(event);
};

export { trackGAEvent };
