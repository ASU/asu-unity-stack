import React from "react";
export default {
  title: "Organisms/Global Header/Examples",
  parameters: {
    header: {
      disable: true
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
} from "./global-header.templates.js";


const Template = ({children}) => <div id="html-root">{children}</div>

export const BasicExample = Template.bind({});
BasicExample.args = {
  children: <Basic />,
};


export const DropDownMenusExample = Template.bind({});
DropDownMenusExample.args = {
  children: <DropDownMenus />,
};
export const NoNavigationExample = Template.bind({});
NoNavigationExample.args = {
  children: <NoNavigation />,
};
export const NoNavigationAndWithButtonsExample = Template.bind({});
NoNavigationAndWithButtonsExample.args = {
  children: <NoNavigationAndWithButtons />,
};
export const StickyNoNavigationExample = Template.bind({});
StickyNoNavigationExample.args = {
  children: <>
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
};

export const ScrolledStateExample = Template.bind({});
ScrolledStateExample.args = {
  children: <ScrolledState />,
};
export const PartnerExample = Template.bind({});
PartnerExample.args = {
  children: <Partner />,
};
