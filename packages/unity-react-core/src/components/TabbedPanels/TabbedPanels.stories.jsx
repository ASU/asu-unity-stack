// @ts-nocheck
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { TabbedPanels, Tab } from "./TabbedPanels";

export default {
  title: "Components/TabbedPanels",
  component: TabbedPanels,
};

const Template = () => {
  return (
    <MemoryRouter>
      <div className="row no-gutters">
        <div className="col uds-full-width">
          <TabbedPanels>
            <Tab id="home" title="Home long tab">
              <div>
                1 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="profile" title="Profile long tab">
              <div>
                2 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="contact" title="Contact us is a long tab">
              <div>
                3 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="another" title="Another tab, long tab">
              <div>
                4 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="another-2" title="Another tab, long tab">
              <div>
                5 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
            <Tab id="another-3" title="Another tab, long tab">
              <div>
                6 - Home long tab - This is an ordinary paragraph that is long
                enough to to to wrap to multiple lines so that you can see how
                spacing eos et accusam et justo duo dolores et ea rebu.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
              </div>
            </Tab>
          </TabbedPanels>
        </div>
      </div>
    </MemoryRouter>
  );
};

export const Default = Template.bind({});

export const WithOverflowTabs = () => {
  return (
    <MemoryRouter>
      <div className="row no-gutters">
        <div className="col uds-full-width">
          <TabbedPanels>
            {/* Existing tabs */}
            <Tab id="home" title="This is a really long tab"><div>1</div></Tab>
            <Tab id="profile" title="This is a longer one"><div>2</div></Tab>
            <Tab id="contact" title="Here’s a tab that’s long too"><div>3</div></Tab>
            <Tab id="another" title="Here’s an example of a really long tab so we can see what it would look like"><div>4</div></Tab>
            <Tab id="tab-5" title="More"><div>5</div></Tab>
            <Tab id="tab-6" title="Tab six"><div>6</div></Tab>
            <Tab id="tab-7" title="Tab seven"><div>7</div></Tab>
            <Tab id="tab-8" title="Tab eight"><div>8</div></Tab>
            <Tab id="tab-9" title="Tab nine"><div>9</div></Tab>
            <Tab id="tab-10" title="Tab ten"><div>10</div></Tab>
            <Tab id="tab-11" title="Tab eleven"><div>11</div></Tab>
            <Tab id="tab-12" title="Tab twelve"><div>12</div></Tab>
          </TabbedPanels>
        </div>
      </div>
    </MemoryRouter>
  );
};

export const ResponsiveBehavior = () => {
  return (
    <MemoryRouter>
      <div className="row no-gutters">
        <div className="col uds-full-width">
          <div style={{ width: "320px" }}>
            <TabbedPanels>
              <Tab id="home" title="Home long tab"><div>1</div></Tab>
              <Tab id="profile" title="Profile long tab"><div>2</div></Tab>
              <Tab id="contact" title="Contact us is a long tab"><div>3</div></Tab>
              <Tab id="another" title="Another tab, long tab"><div>4</div></Tab>
              <Tab id="another-2" title="Another tab, long tab"><div>5</div></Tab>
              <Tab id="another-3" title="Another tab, long tab"><div>6</div></Tab>
              <Tab id="tab-7" title="Extra Tab 7"><div>7</div></Tab>
              <Tab id="tab-8" title="Extra Tab 8"><div>8</div></Tab>
            </TabbedPanels>
          </div>
        </div>
      </div>
    </MemoryRouter>
  );
};

export const DarkBackgroundOverflow = () => {
  return (
    <MemoryRouter>
      <div className="row no-gutters">
        <div className="col uds-full-width bg-dark p-3">
          <TabbedPanels bgColor="bg-dark">
            <Tab id="home" title="Home long tab"><div>1</div></Tab>
            <Tab id="profile" title="Profile long tab"><div>2</div></Tab>
            <Tab id="contact" title="Contact us is a long tab"><div>3</div></Tab>
            <Tab id="another" title="Another tab, long tab"><div>4</div></Tab>
            <Tab id="another-2" title="Another tab, long tab"><div>5</div></Tab>
            <Tab id="another-3" title="Another tab, long tab"><div>6</div></Tab>
            <Tab id="tab-7" title="Tab 7"><div>7</div></Tab>
            <Tab id="tab-8" title="Tab 8"><div>8</div></Tab>
            <Tab id="tab-9" title="Tab 9"><div>9</div></Tab>
            <Tab id="tab-10" title="Tab 10"><div>10</div></Tab>
          </TabbedPanels>
        </div>
      </div>
    </MemoryRouter>
  );
};
