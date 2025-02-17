import React from "react";

import { Container, Column, LoremContent } from "../../../../../shared/components/Layout.js";
import { SidebarComponent } from "./sidebar.templates.js";

export default {
  title: "Atoms/Sidebar/Examples",
  component: SidebarComponent,
  args: {
  simplify: false,
},
  argTypes: {
  simplify: {
    type: "boolean"
  }}
};

const Template = ({simplify, args}) => <Container id="html-root">
    {!simplify && <Column col="12"><h1>Take a look at the sidebar</h1></Column>}
    <Column col="3">
      <SidebarComponent {...args}/>
    </Column>
    <Column col="9">
      {!simplify && <>
        <p>This story isn't about the page content itself. Rather, you should focus your attention on the sidebar navigation element to the left.</p>
        <p>Foldable cards can be mixed in with static navigation links to create a section of content which behaves like an accordion and reveals navigation items which are nested two levels deep.</p>
        <LoremContent/></>
      }
    </Column>
  </Container>;
export const Sidebar = Template.bind({});
export const SidebarOnly = Template.bind({});
SidebarOnly.args = {
  simplify:true,
};
