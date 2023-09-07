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
  componentName = "",
  package = "",
  component = "",
  type = "",
  configuration = {}
}) {
  if (!componentName || !package || !component || !configuration) {
      console.error("trackReactComponent: Missing required arguments.");
      return;
  }

  // Initialize or retrieve the global object to store component data.
  window.udsComponent = window.udsComponent || {};

  // Store component data in the global object using the provided componentName.
  window.udsComponent[componentName] = {
      package: package,
      component: component,
      type: type,
      configuration: configuration
  };
}
