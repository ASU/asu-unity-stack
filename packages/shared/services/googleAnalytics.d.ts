export const gaEventPropTypes: PropTypes.Requireable<PropTypes.InferProps<{
    event: PropTypes.Requireable<string>;
    action: PropTypes.Requireable<string>;
    name: PropTypes.Requireable<string>;
    region: PropTypes.Requireable<string>;
    section: PropTypes.Requireable<string>;
    component: PropTypes.Requireable<string>;
    type: PropTypes.Requireable<string>;
    text: PropTypes.Requireable<string>;
}>>;
export type GAEventObject = {
    event?: string;
    action?: string;
    name?: string;
    type?: string;
    section?: string;
    text?: string;
    region?: string;
    component?: string;
};
import PropTypes from "prop-types";
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
 * }} GAEventObject
 */
/**
 * @param {GAEventObject} args
 */
export function trackGAEvent({ event, action, name, type, section, text, region, component, }: GAEventObject): void;
