/** @jsx h */
/* eslint-disable react/prop-types */
import { h, hydrate, render} from "preact";
// test comment

const HydratePreact = (component, props, target, children) => {

  return hydrate(h(component, props), target);
}

const RenderPreact = (component, props, target, children) => {

  return render(h(component, props), target);
}

export {HydratePreact, RenderPreact};
