import React from "react";

import { htmlRootDecorator } from "../../../../../shared/components/Layout.js";
import {
  Basic,
  DropDownMenus,
  NoNavigation,
  NoNavigationAndWithButtons,
  ScrolledState,
  Partner,
} from "./global-header.templates.jsx";

export default {
  title: "Organisms/Global Header/Examples",
  decorators: [ htmlRootDecorator ],
  parameters: {
    initFunc: {
      disable: false,
    },
    header: {
      disable: true
    },
    controls: { disable: true }
  }
};


const Template = ({children}) => <div id="html-root">{children}</div>

export const BasicExample = Basic.bind({});


export const DropDownMenusExample = DropDownMenus.bind({});
export const NoNavigationExample = NoNavigation.bind({});
export const NoNavigationAndWithButtonsExample = NoNavigationAndWithButtons.bind({});
export const StickyNoNavigationExample = () => <>
    <NoNavigationAndWithButtons/>
    <main>
      <div
        id="skip-to-content"
        className="visually-hidden"
        data-elastic-exclude="data-elastic-exclude"
      ></div>
      <div className="bg-gray-3" style={{ height: "200vh" }}></div>
    </main>
  </>;

export const ScrolledStateExample = ScrolledState.bind({});
export const PartnerExample = Partner.bind({});
