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
  {
    id: "home",
    title: "This is a really long tab",
    content: (
      <>
        <h2>Overview</h2>
        <p>
          Arizona State University is a comprehensive public research university
          measured not by whom it excludes, but by whom it includes and how they
          succeed. ASU pursues research that contributes to the public good and
          assumes fundamental responsibility for the economic, social, cultural,
          and overall health of the communities it serves.
        </p>
        <p>
          With more than 180,000 students enrolled across its campuses and
          online, ASU is one of the largest public universities in the United
          States. The university offers more than 800 degree programs and
          certificates through 17 colleges and schools, making it possible for
          students to find the perfect program to match their goals.
        </p>
      </>
    ),
  },
  {
    id: "profile",
    title: "This is a longer one",
    content: (
      <>
        <h2>Academics</h2>
        <p>
          ASU offers a broad range of academic programs designed to challenge
          students and prepare them for leadership in a rapidly changing world.
          From engineering and business to the arts and humanities, students
          benefit from innovative, interdisciplinary approaches that reflect
          real-world complexity.
        </p>
        <p>
          The university's faculty include Nobel laureates, National Academy
          members, and Pulitzer Prize winners. Small class sizes and
          mentorship-focused programs ensure every student has access to
          world-class instruction and personalized support throughout their
          academic journey.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Here's a tab that's long too",
    content: (
      <>
        <h2>Admissions</h2>
        <p>
          ASU welcomes students from all backgrounds and is committed to making
          higher education accessible and affordable. The university's holistic
          admissions process considers academic achievement, personal
          accomplishments, and the potential each student brings to the ASU
          community.
        </p>
        <p>
          Prospective students can apply for fall, spring, or summer enrollment.
          ASU offers a range of scholarship opportunities, financial aid
          packages, and payment plans to help students and their families manage
          the cost of a college education.
        </p>
      </>
    ),
  },
  {
    id: "another",
    title:
      "Here's an example of a really long tab so we can see what it would look like",
    content: (
      <>
        <h2>Research</h2>
        <p>
          ASU is a top research university, generating more than $1 billion in
          annual research expenditures. Researchers at ASU tackle some of the
          most pressing challenges facing humanity, including climate change,
          public health, sustainable energy, and equitable access to technology.
        </p>
        <p>
          Students at every level — from undergraduates to doctoral candidates —
          have the opportunity to contribute to cutting-edge research alongside
          nationally and internationally recognized faculty members. ASU's
          research enterprise spans more than 100 research centers and
          institutes.
        </p>
      </>
    ),
  },
  {
    id: "tab-5",
    title: "Tab 5",
    content: (
      <>
        <h2>Student Life</h2>
        <p>
          Life at ASU extends well beyond the classroom. With hundreds of
          student organizations, club sports, cultural events, and service
          opportunities, students find countless ways to get involved, build
          connections, and make the most of their university experience.
        </p>
        <p>
          From the vibrant energy of Tempe's Mill Avenue to the scenic desert
          landscape of the Polytechnic campus, each ASU campus offers a unique
          environment while sharing the same commitment to student success,
          community, and Sun Devil pride.
        </p>
      </>
    ),
  },
  {
    id: "tab-6",
    title: "Tab six",
    content: (
      <>
        <h2>Alumni</h2>
        <p>
          ASU's global alumni network spans more than 700,000 graduates living
          and working in virtually every country around the world. Sun Devil
          alumni are leaders in business, government, science, the arts, and
          public service — making a measurable difference in communities
          everywhere.
        </p>
        <p>
          Through the ASU Alumni Association, graduates stay connected to their
          university through networking events, mentorship programs, career
          resources, and lifelong learning opportunities that extend well beyond
          graduation day.
        </p>
      </>
    ),
  },
  {
    id: "tab-7",
    title: "Tab seven",
    content: (
      <>
        <h2>News &amp; Events</h2>
        <p>
          Stay up to date with the latest news, discoveries, and achievements
          from across the ASU community. From groundbreaking research
          announcements to student and faculty honors, ASU News covers the
          stories that shape the university and the world beyond it.
        </p>
        <p>
          ASU hosts hundreds of public events each year, including lectures,
          performances, exhibitions, athletics, and community programs. Many
          events are free and open to the public, reflecting ASU's commitment to
          serving the broader community.
        </p>
      </>
    ),
  },
  {
    id: "tab-8",
    title: "Tab eight",
    content: (
      <>
        <h2>Faculty</h2>
        <p>
          ASU's faculty are among the most accomplished scholars and educators
          in their fields. The university recruits and supports exceptional
          teachers and researchers who are committed to student success,
          innovative inquiry, and meaningful engagement with society.
        </p>
        <p>
          Faculty at ASU benefit from a culture that values collaboration across
          disciplines and encourages bold, unconventional thinking. Resources
          for research, teaching innovation, and professional development help
          ASU's educators thrive throughout their careers.
        </p>
      </>
    ),
  },
  {
    id: "tab-9",
    title: "Tab nine",
    content: (
      <>
        <h2>Giving</h2>
        <p>
          Philanthropy plays a vital role in advancing ASU's mission. Gifts from
          donors — whether individuals, foundations, or corporations — fund
          scholarships, endow faculty chairs, build state-of-the-art facilities,
          and support transformative programs that would otherwise not be
          possible.
        </p>
        <p>
          Every contribution, large or small, makes a difference. By investing
          in ASU, donors help ensure that the university can continue to provide
          an exceptional education to students from all walks of life while
          pushing the boundaries of human knowledge.
        </p>
      </>
    ),
  },
  {
    id: "tab-10",
    title: "Tab ten",
    content: (
      <>
        <h2>About</h2>
        <p>
          Founded in 1885, Arizona State University has grown from a small
          territorial normal school into one of the most innovative and
          impactful universities in the world. ASU's charter commits the
          institution to access, excellence, and impact — values that guide
          everything the university does.
        </p>
        <p>
          ASU operates four campuses in the Phoenix metropolitan area — Tempe,
          West, Polytechnic, and Downtown Phoenix — as well as a location in
          Lake Havasu City and a robust online presence through ASU Online,
          which serves students in all 50 states and more than 150 countries.
        </p>
      </>
    ),
  },
  {
    id: "tab-11",
    title: "Tab eleven",
    content: (
      <>
        <h2>Contact</h2>
        <p>
          Have a question or need assistance? ASU's network of support offices
          is here to help. Whether you're a prospective student seeking
          admissions information, a current student needing academic advising,
          or a community member looking to connect with the university, we're
          ready to help you find the right resource.
        </p>
        <p>
          You can reach ASU by phone, email, or in person at any of our campus
          locations. Visit the ASU website's contact directory to find the
          specific department or office best equipped to assist you with your
          inquiry.
        </p>
      </>
    ),
  },
  {
    id: "tab-12",
    title: "Tab twelve",
    content: (
      <>
        <h2>Resources</h2>
        <p>
          ASU provides an extensive range of resources to support student
          success inside and outside the classroom. From tutoring centers,
          writing labs, and library services to counseling, health care, and
          career coaching, the university invests heavily in the tools students
          need to thrive.
        </p>
        <p>
          Technology resources — including free software licenses, high-speed
          Wi-Fi across all campuses, and 24/7 IT support — ensure that every
          student has the digital infrastructure required to succeed in today's
          connected learning environment.
        </p>
      </>
    ),
  },
  {
    id: "tab-13",
    title: "Tab thirteen",
    content: (
      <>
        <h2>Directory</h2>
        <p>
          The ASU directory is your guide to the people, departments, and
          offices that make up the university community. Search for faculty and
          staff by name, department, or area of expertise to find the right
          contact quickly and easily.
        </p>
        <p>
          Administrative offices, academic departments, student services, and
          research centers all maintain updated listings in the directory,
          helping students, faculty, and the public connect with the right
          people across ASU's expansive organization.
        </p>
      </>
    ),
  },
  {
    id: "tab-14",
    title: "Tab fourteen",
    content: (
      <>
        <h2>Maps &amp; Locations</h2>
        <p>
          ASU's campuses span the Phoenix metropolitan area, each with its own
          distinctive character and set of facilities. Interactive campus maps
          are available online and through the ASU mobile app to help you
          navigate buildings, parking areas, dining locations, and points of
          interest on each campus.
        </p>
        <p>
          Whether you're visiting for a campus tour, attending an event, or
          navigating to a class for the first time, ASU's mapping tools and
          wayfinding signage make it easy to get where you need to go quickly
          and confidently.
        </p>
      </>
    ),
  },
  {
    id: "tab-15",
    title: "Tab fifteen",
    content: (
      <>
        <h2>Support Services</h2>
        <p>
          ASU is deeply committed to the well-being of every student. A broad
          network of support services — including mental health counseling,
          disability accommodations, food and housing assistance, and veteran
          services — ensures that students facing challenges have access to the
          help they need to stay on track.
        </p>
        <p>
          Dedicated advisors and case managers work proactively with students to
          identify obstacles early and connect them with appropriate resources.
          At ASU, no student should have to navigate difficulty alone — support
          is always available.
        </p>
      </>
    ),
  },
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
