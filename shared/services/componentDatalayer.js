/**
 * Function to track React component data and store it in a global object.
 * @typedef {Function} trackReactComponentType - Function to track React component data and store it in a global object.
 *   @param {string} component - The name of the React component.
 *   @param {string} packageName - The name of the package the component comes from.
 *   @param {string} type - The component variation (e.g., "NA" if it does not apply).
 *   @param {Object} configuration - Configuration data for the component.
 */

/** @type {trackReactComponentType} trackReactComponent */
function trackReactComponent({
  packageName = "",
  component = "",
  type = "",
  configuration = {}
}) {
  if (!packageName || !component) {
      console.error("trackReactComponent: Missing required arguments.");
      return;
  };

  /*
  Initialize or retrieve the global object to store component data.
   Follows the pattern:
    window.uds = {
        package: {
            [packageName, ex: app-degree-pages]: {
                component: [component ex: DegreeDetailPage],
                type: [type],
                configuration: [configuration]
            }
        }
   */
  window.uds = window.uds || {};
  window.uds.package = window.uds.package || {};

  // Store component data in the global object using the provided componentName.
  window.uds.package[packageName] = {
      component: component,
      type: type,
      configuration: configuration
  };
 };

export default trackReactComponent;
