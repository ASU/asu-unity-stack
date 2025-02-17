export default trackReactComponent;
/**
 * - Function to track React component data and store it in a global object.
 */
export type trackReactComponentType = Function;
/**
 * Function to track React component data and store it in a global object.
 * @typedef {Function} trackReactComponentType - Function to track React component data and store it in a global object.
 *   @param {string} component - The name of the React component.
 *   @param {string} packageName - The name of the package the component comes from.
 *   @param {string} type - The component variation (e.g., "NA" if it does not apply).
 *   @param {Object} configuration - Configuration data for the component.
 */
/** @type {trackReactComponentType} trackReactComponent */
declare function trackReactComponent({ packageName, component, type, configuration }: {
    packageName?: string;
    component?: string;
    type?: string;
    configuration?: {};
}): void;
