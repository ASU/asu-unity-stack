import React from "react";
import { ASUHeader } from "@asu/component-header-footer";
import { ASUFooter } from "@asu/component-header-footer";
import { TabbedPanels, Tab } from "./TabbedPanels";

const basicNavTree = [
  { href: "/", text: "Home", type: "icon-home", selected: true },
  { text: "Link", href: "#" },
  { text: "Link", href: "#" },
  { text: "Link", href: "#" },
];

const TABS = [
  { id: "home",    title: "This is a really long tab",    content: <><h2>Overview</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></> },
  { id: "profile", title: "This is a longer one",          content: <><h2>Academics</h2><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p></> },
  { id: "contact", title: "Here's a tab that's long too",  content: <><h2>Admissions</h2><p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.</p></> },
  { id: "another", title: "Here's an example of a really long tab so we can see what it would look like", content: <><h2>Research</h2><p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p></> },
  { id: "tab-5",  title: "Tab 5",      content: <><h2>Student Life</h2><p>At vero eos et accusamus et iusto odio dignissimos ducimus.</p></> },
  { id: "tab-6",  title: "Tab six",    content: <><h2>Alumni</h2><p>Nam libero tempore, cum soluta nobis est eligendi optio.</p></> },
  { id: "tab-7",  title: "Tab seven",  content: <><h2>News &amp; Events</h2><p>Temporibus autem quibusdam et aut officiis debitis.</p></> },
  { id: "tab-8",  title: "Tab eight",  content: <><h2>Faculty</h2><p>Quis autem vel eum iure reprehenderit qui in ea voluptate.</p></> },
  { id: "tab-9",  title: "Tab nine",   content: <><h2>Giving</h2><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p></> },
  { id: "tab-10", title: "Tab ten",    content: <><h2>About</h2><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p></> },
  { id: "tab-11", title: "Tab eleven", content: <><h2>Contact</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p></> },
  { id: "tab-12", title: "Tab twelve", content: <><h2>Resources</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></> },
  { id: "tab-13", title: "Tab thirteen", content: <><h2>Directory</h2><p>Itaque earum rerum hic tenetur a sapiente delectus.</p></> },
  { id: "tab-14", title: "Tab fourteen", content: <><h2>Maps</h2><p>Ut aut reiciendis voluptatibus maiores alias consequatur.</p></> },
  { id: "tab-15", title: "Tab fifteen",  content: <><h2>Support</h2><p>Quis autem vel eum iure reprehenderit qui in ea voluptate.</p></> },
];

const numberOfTabsArgType = {
  control: { type: "select" },
  options: TABS.map((_, i) => i + 1),
  description: "Number of tabs to display.",
};

const renderTabs = (n: number) =>
  TABS.slice(0, n).map(tab => (
    <Tab key={tab.id} id={tab.id} title={tab.title}>
      {tab.content}
    </Tab>
  ));

export default {
  title: "Components/TabbedPanels",
  component: TabbedPanels,
  argTypes: {
    numberOfTabs: numberOfTabsArgType,
  },
};

export const Default = ({ numberOfTabs = 6 }: { numberOfTabs?: number }) => (
  <div className="row no-gutters">
    <div className="col uds-full-width">
      <TabbedPanels>
        {renderTabs(numberOfTabs)}
      </TabbedPanels>
    </div>
  </div>
);
Default.args = { numberOfTabs: 6 };

export const WithOverflowTabs = ({ numberOfTabs = 12 }: { numberOfTabs?: number }) => (
  <div className="row no-gutters">
    <div className="col uds-full-width">
      <TabbedPanels>
        {renderTabs(numberOfTabs)}
      </TabbedPanels>
    </div>
  </div>
);
WithOverflowTabs.args = { numberOfTabs: 12 };

export const ResponsiveBehavior = ({ numberOfTabs = 8 }: { numberOfTabs?: number }) => (
  <div className="row no-gutters">
    <div className="col uds-full-width">
      <div style={{ width: "320px" }}>
        <TabbedPanels>
          {renderTabs(numberOfTabs)}
        </TabbedPanels>
      </div>
    </div>
  </div>
);
ResponsiveBehavior.args = { numberOfTabs: 8 };

export const DarkBackgroundOverflow = ({ numberOfTabs = 10 }: { numberOfTabs?: number }) => (
  <div className="row no-gutters">
    <div className="col uds-full-width bg-dark p-3">
      <div style={{ width: "320px" }}>
        <TabbedPanels bgColor="bg-dark">
          {renderTabs(numberOfTabs)}
        </TabbedPanels>
      </div>
    </div>
  </div>
);
DarkBackgroundOverflow.args = { numberOfTabs: 10 };

export const ManyOverflowTabs = ({ numberOfTabs = 15 }: { numberOfTabs?: number }) => (
  <div className="row no-gutters">
    <div className="col uds-full-width">
      <div style={{ width: "320px" }}>
        <TabbedPanels>
          {renderTabs(numberOfTabs)}
        </TabbedPanels>
      </div>
    </div>
  </div>
);
ManyOverflowTabs.args = { numberOfTabs: 15 };

export const FullPage = ({ maxWidth = "100%", numberOfTabs = 12 }: { maxWidth?: string; numberOfTabs?: number }) => (
  <>
    <ASUHeader
      {...({
        loggedIn: false,
        userName: "",
        navTree: basicNavTree,
        title: "Subdomain name",
        breakpoint: "Lg",
        searchUrl: "https://search.asu.edu/search",
        site: "subdomain",
      } as any)}
    />
    <div style={{ marginTop: "140px" }}>
      <div className="container">
        <div className="row">
          <div>
            <h1 className="uds-headline">TabbedPanels in page context</h1>
            <p className="uds-body-copy" style={{ marginBottom: "2rem" }}>
              This story shows TabbedPanels embedded in a full page layout with
              the ASU header and footer.
            </p>
            <div style={{ width: maxWidth }}>
              <TabbedPanels>
                {renderTabs(numberOfTabs)}
              </TabbedPanels>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ASUFooter
      contact={{
        title: "Subdomain name",
        contactLink: "https://www.asu.edu/about/contact",
        contributionLink: "https://www.asu.edu/give",
      }}
      social={{
        logoUrl: "https://www.asu.edu",
        mediaLinks: {
          facebook: "https://www.facebook.com/asuonline",
          twitter: "https://twitter.com/ASUOnline",
          instagram: "https://www.instagram.com/asu",
          linkedIn: "https://www.linkedin.com/school/arizona-state-university",
          youtube: "https://www.youtube.com/user/asuofficial",
        },
      } as any}
    />
  </>
);

FullPage.args = { maxWidth: "100%", numberOfTabs: 12 };
FullPage.argTypes = {
  maxWidth: {
    control: { type: "select" },
    options: ["100%", "900px", "700px", "500px", "400px", "320px"],
    description: "Width of the container to test responsive overflow behaviour.",
  },
};
