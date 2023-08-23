import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default {
  ...createComponent("Global Header", "Organisms", "Examples"),
  parameters: {
    uds: {
      header: {
        disable: true
      },
      template: {
        include: ["x"]
      }
    }
  }
};


import {
  Basic,
  DropDownMenus,
  NoNavigation,
  NoNavigationAndWithButtons,
  ScrolledState,
  Partner,
} from "./global-header.templates.stories.js";
import { initGlobalHeader as initFunc } from "@asu/unity-bootstrap-theme/js/global-header.js";
const options = {
  initFunc,
}
export const BasicExample = createStory(Basic, options);


export const DropDownMenusExample = createStory(DropDownMenus, options);
export const NoNavigationExample = createStory(NoNavigation, options);
export const NoNavigationAndWithButtonsExample = createStory(
  NoNavigationAndWithButtons,
  options
);
export const StickyNoNavigationExample = createStory(
  <>
    {NoNavigationAndWithButtons}
    <main>
      <div
        id="skip-to-content"
        className="visually-hidden"
        data-elastic-exclude="data-elastic-exclude"
      ></div>
      <div className="bg-gray-3" style={{ height: "200vh" }}></div>
    </main>
  </>,
  options
);

export const ScrolledStateExample = createStory(ScrolledState, options);
export const PartnerExample = createStory(Partner, options);
