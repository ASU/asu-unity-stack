import React from "react";

import { TabbedPanels, Tab } from ".";

export default {
  title: "UDS/TabbedPanels",
  component: TabbedPanels,
};

const Template = () => {
  return (
    <div className="row no-gutters">
      <div className="col uds-full-width">
        <TabbedPanels>
          <Tab id="home" title="Home long tab">
            <div>
              Home long tab - This is an ordinary paragraph that is long enough
              to to to wrap to multiple lines so that you can see how spacing
              eos et accusam et justo duo dolores et ea rebu.
              <br />
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
            </div>
          </Tab>
          <Tab id="profile" title="Profile long tab">
            <div>
              Home long tab - This is an ordinary paragraph that is long enough
              to to to wrap to multiple lines so that you can see how spacing
              eos et accusam et justo duo dolores et ea rebu.
              <br />
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
            </div>
          </Tab>
          <Tab id="contact" title="Contact us is a long tab">
            <div>
              Home long tab - This is an ordinary paragraph that is long enough
              to to to wrap to multiple lines so that you can see how spacing
              eos et accusam et justo duo dolores et ea rebu.
              <br />
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
            </div>
          </Tab>
          <Tab id="another" title="Another tab, long tab">
            <div>
              Home long tab - This is an ordinary paragraph that is long enough
              to to to wrap to multiple lines so that you can see how spacing
              eos et accusam et justo duo dolores et ea rebu.
              <br />
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
            </div>
          </Tab>
          <Tab id="another-2" title="Another tab, long tab">
            <div>
              Home long tab - This is an ordinary paragraph that is long enough
              to to to wrap to multiple lines so that you can see how spacing
              eos et accusam et justo duo dolores et ea rebu.
              <br />
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
            </div>
          </Tab>
          <Tab id="another-3" title="Another tab, long tab">
            <div>
              Home long tab - This is an ordinary paragraph that is long enough
              to to to wrap to multiple lines so that you can see how spacing
              eos et accusam et justo duo dolores et ea rebu.
              <br />
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
            </div>
          </Tab>
        </TabbedPanels>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
