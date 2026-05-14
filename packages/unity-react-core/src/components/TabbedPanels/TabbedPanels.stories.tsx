import React from "react";
import { ASUHeader } from "@asu/component-header-footer";
import { ASUFooter } from "@asu/component-header-footer";

const basicNavTree = [
  { href: "/", text: "Home", type: "icon-home", selected: true },
  { text: "Link", href: "#" },
  { text: "Link", href: "#" },
  { text: "Link", href: "#" },
];

import { TabbedPanels, Tab } from "./TabbedPanels";

export default {
  title: "Components/TabbedPanels",
  component: TabbedPanels,
};

const Template = () => {
  return (
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
  );
};

export const Default = Template.bind({});

export const WithOverflowTabs = () => {
  return (
      <div className="row no-gutters">
        <div className="col uds-full-width">
          <TabbedPanels>
            <Tab id="home" title="This is a really long tab"><div>1</div></Tab>
            <Tab id="profile" title="This is a longer one"><div>2</div></Tab>
            <Tab id="contact" title="Here's a tab that's long too"><div>3</div></Tab>
            <Tab id="another" title="Here's an example of a really long tab so we can see what it would look like"><div>4</div></Tab>
            <Tab id="tab-5" title="Tab 5"><div>5</div></Tab>
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
  );
};

export const ResponsiveBehavior = () => {
  return (
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
  );
};

export const DarkBackgroundOverflow = () => {
  return (
      <div className="row no-gutters">
        <div className="col uds-full-width bg-dark p-3">
          <div style={{ width: "320px" }}>
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
      </div>
  );
};

export const ManyOverflowTabs = () => {
  return (
      <div className="row no-gutters">
        <div className="col uds-full-width">
          <div style={{ width: "320px" }}>
            <TabbedPanels>
              <Tab id="tab-1" title="Tab one"><div>1</div></Tab>
              <Tab id="tab-2" title="Tab two"><div>2</div></Tab>
              <Tab id="tab-3" title="Tab three"><div>3</div></Tab>
              <Tab id="tab-4" title="Tab four"><div>4</div></Tab>
              <Tab id="tab-5" title="Tab five"><div>5</div></Tab>
              <Tab id="tab-6" title="Tab six"><div>6</div></Tab>
              <Tab id="tab-7" title="Tab seven"><div>7</div></Tab>
              <Tab id="tab-8" title="Tab eight"><div>8</div></Tab>
              <Tab id="tab-9" title="Tab nine"><div>9</div></Tab>
              <Tab id="tab-10" title="Tab ten"><div>10</div></Tab>
              <Tab id="tab-11" title="Tab eleven"><div>11</div></Tab>
              <Tab id="tab-12" title="Tab twelve"><div>12</div></Tab>
              <Tab id="tab-13" title="Tab thirteen"><div>13</div></Tab>
              <Tab id="tab-14" title="Tab fourteen"><div>14</div></Tab>
              <Tab id="tab-15" title="Tab fifteen"><div>15</div></Tab>
            </TabbedPanels>
          </div>
        </div>
      </div>
  );
};

export const FullPage = () => (
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
          <div className="col uds-full-width">
            <h1 className="uds-headline">TabbedPanels in page context</h1>
            <p className="uds-body-copy" style={{ marginBottom: "2rem" }}>
              This story shows TabbedPanels embedded in a full page layout with
              the ASU header and footer. Resize the window to see overflow
              behaviour.
            </p>
            <TabbedPanels>
              <Tab id="home" title="This is a really long tab">
                <h2>Overview</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul>
                  <li>First item with some additional detail about this particular list entry</li>
                  <li>Second item describing another important concept worth noting here</li>
                  <li>Third item providing more context about the subject matter at hand</li>
                  <li>Fourth item rounding out the list with a final relevant point</li>
                </ul>
              </Tab>
              <Tab id="profile" title="This is a longer one">
                <h2>Academics</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <blockquote style={{ borderLeft: "4px solid #8c1d40", paddingLeft: "1rem", margin: "1rem 0" }}>
                  <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi."</p>
                </blockquote>
              </Tab>
              <Tab id="contact" title="Here's a tab that's long too">
                <h2>Admissions</h2>
                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#8c1d40", color: "#fff" }}>
                      <th style={{ padding: "0.5rem 1rem", textAlign: "left" }}>Requirement</th>
                      <th style={{ padding: "0.5rem 1rem", textAlign: "left" }}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #ccc" }}>
                      <td style={{ padding: "0.5rem 1rem" }}>GPA</td>
                      <td style={{ padding: "0.5rem 1rem" }}>3.0 minimum cumulative</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #ccc" }}>
                      <td style={{ padding: "0.5rem 1rem" }}>Test Scores</td>
                      <td style={{ padding: "0.5rem 1rem" }}>SAT 1200+ or ACT 24+</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "0.5rem 1rem" }}>Application</td>
                      <td style={{ padding: "0.5rem 1rem" }}>Submit by December 1</td>
                    </tr>
                  </tbody>
                </table>
              </Tab>
              <Tab id="another" title="Here's an example of a really long tab so we can see what it would look like">
                <h2>Research</h2>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
              </Tab>
              <Tab id="tab-5" title="Tab 5">
                <h2>Student Life</h2>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
              </Tab>
              <Tab id="tab-6" title="Tab six">
                <h2>Alumni</h2>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>
              </Tab>
              <Tab id="tab-7" title="Tab seven">
                <h2>News &amp; Events</h2>
                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
              </Tab>
              <Tab id="tab-8" title="Tab eight">
                <h2>Faculty</h2>
                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
              </Tab>
              <Tab id="tab-9" title="Tab nine">
                <h2>Giving</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
              </Tab>
              <Tab id="tab-10" title="Tab ten">
                <h2>About</h2>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              </Tab>
              <Tab id="tab-11" title="Tab eleven">
                <h2>Contact</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              </Tab>
              <Tab id="tab-12" title="Tab twelve">
                <h2>Resources</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
              </Tab>
            </TabbedPanels>
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
