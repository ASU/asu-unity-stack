/**
 * Function to track React component data and store it in a global object.
 * @param {Object} args - An object containing the following named arguments:
 *   @param {string} componentName - The name of the React component.
 *   @param {string} package - The name of the package the component comes from.
 *   @param {string} component - The initialized component's name.
 *   @param {string} type - The component variation (e.g., "NA" if it does not apply).
 *   @param {Object} configuration - Configuration data for the component.
 */
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

  // Initialize or retrieve the global object to store component data.
  window.uds = window.uds || {};

  // Store component data in the global object using the provided componentName.
  window.uds[packageName] = {
      component: component,
      type: type,
      configuration: configuration
  };
  console.log("trackReactComponent: ", window)
 };

export default trackReactComponent;
