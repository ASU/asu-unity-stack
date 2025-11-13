import React from "react";
import { AnchorMenu } from "../src/components/AnchorMenu/AnchorMenu.jsx";
import { Article } from "../src/components/Article/Article.jsx";
import { Accordion } from "../src/components/Accordion/Accordion.jsx";
import { Card } from "../src/components/Card/Card.jsx";
import { Pagination } from "../src/components/Pagination/Pagination.jsx";
import { Breadcrumbs } from "../src/components/Breadcrumbs/Breadcrumbs";
import { Button } from "../src/components/Button/Button.jsx";
import { ButtonIconOnly } from "../src/components/ButtonIconOnly/ButtonIconOnly.jsx";
import { ButtonTag } from "../src/components/ButtonTag/ButtonTag.jsx";
import { Checkboxes } from "../src/components/Checkbox/Checkbox";
import { Divider } from "../src/components/Divider/Divider";
import { Form } from "../src/components/Form/Form";
import { GridLinks } from "../src/components/GridLinks/GridLinks";
import { Hero } from "../src/components/Hero/Hero.jsx";
import { Image } from "../src/components/Image/Image.jsx";
import { ImageBasedCard } from "../src/components/ImageBasedCard/ImageBasedCard";
import { List } from "../src/components/List/List";
import { Modal } from "../src/components/Modal/Modal";
import { NotificationBanner } from "../src/components/NotificationBanner/NotificationBanner";
import { TextInput } from "../src/components/TextInput/TextInput";
import { Textarea } from "../src/components/Textarea/Textarea";
import { TabbedPanels, Tab } from "../src/components/TabbedPanels/TabbedPanels";
import { Select } from "../src/components/Select/Select";
import { Testimonial } from "../src/components/Testimonial/Testimonial";
import { RankingCard } from "../src/components/RankingCard/RankingCard";
import { Radios } from "../src/components/Radio/Radio";
import { Tooltip } from "../src/components/Tooltip/Tooltip";
import { Video } from "../src/components/Video/Video";
import { SidebarMenu } from "../src/components/SidebarMenu/SidebarMenu";
import { SystemAlert } from "../src/components/SystemAlert/SystemAlert";
import { Table } from "../src/components/Tables/Tables";
import { Loader } from "../src/components/Loader/Loader";
import { getBootstrapHTML } from "../src/components/GaEventWrapper/useBaseSpecificFramework.js";
import { initializeServerEnvironment, cleanupServerEnvironment } from "./server-utils.js";
import fs from "fs";
import path from "path";

interface ComponentConfig {
  reactComponent: React.ComponentType<any>;
  props: Record<string, any>;
}

interface ComponentMap {
  [key: string]: ComponentConfig;
}

async function convertToHTML(OLD_DATE: string): Promise<void> {
  // Initialize JSDOM for server-side rendering
  console.log('Initializing server environment for component rendering...');
  try {
    await initializeServerEnvironment();
  } catch (error) {
    console.error('Failed to initialize server environment:', error);
    process.exit(1);
  }

  const componentMap: ComponentMap = {
    Accordion: {
      reactComponent: Accordion,
      props: {
        cards: [
          {
            content: {
              header: "Accordion Card 1",
              body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
            },
          },
          {
            content: {
              header: "Accordion Card 2",
              body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
            },
          },
          {
            content: {
              header: "Accordion Card 3, opened card",
              body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
            },
          },
        ],
        openedCard: 3,
      },
    },
    AnchorMenu: {
      reactComponent: AnchorMenu,
      props: {
        items: [
          {
            text: "Title Case is Required",
            targetIdName: "first-container",
            icon: ["fas", "link"],
          },
          { text: "Second Container", targetIdName: "second-container" },
          { text: "Third Container", targetIdName: "third-container" },
          {
            text: "This is the Last",
            targetIdName: "fourth-container",
            icon: ["fas", "link"],
          },
        ],
      },
    },
    Article: {
      reactComponent: Article,
      props: {
        defaultArgs: {
          type: "news",
          articleUrl: "https://example.com",
          headerImageUrl: "",
          title:
            "Clarisse Machanguana takes her skill set to the next level at ASU Thunderbird",
          publicationDate: "March 18, 2021",
          authorName: "Jimena Garrison",
          authorTitle: "Media Relations and Strategic Communications",
          authorEmail: "jgarris6@asu.edu",
          authorPhone: "480-727-4058",
          breadcrumbs: [
            {
              title: "Home",
              url: "/",
            },
            {
              title: "Second nav item",
              url: "/events",
            },
            {
              title: "Current page",
              url: "/events/current-article",
              active: true,
            },
          ],
          body: "<p>After 34 years in the game of basketball, Clarisse Machanguana retired. Her eponymous philanthropic foundation remains her only connection to the sport, although the effect of the global game has left imprints in many aspects of her life.</p><p>Playing basketball took her to Portugal and then the U.S., where she attended Old Dominion University in Virginia to study criminal justice. When she realized that sports could be a microcosm of life and values, she decided to create a way to coach sports while teaching life skills in her home country of Mozambique. She started the <a href='http://machanguanafoundation.rf.gd/'>Clarisse Machanguana Foundation</a> in 2014 with the goal of empowering Mozambican youth through health, education and sports programs.</p><p>Now she’s taking her leadership game to the next level at ASU’s Thunderbird School of Global Management, earning her Master of Global Management degree with a nonprofit management concentration. Machanguana is honing her skills as a global professional in and out of the classroom to propel her foundation even further.</p><p>Here she reflects on the experiences that brought her to Thunderbird and ASU.</p><p><strong>Question: Why basketball?</strong></p><p><strong>Answer:</strong> I started at age 6, and because it was popular in my area and I was tall — now 6-feet-5-inches tall, to be exact — people kept telling me I should play. Basketball took me everywhere. I had a scholarship to play in Portugal and the U.S., and later on in Spain, France, Brazil, South Korea and Italy. Basketball became a passport and a school for me, and a source of amazing friendships. I played from age 6 to 40. My foundation now partners with the Department of Education. We collaborate with teachers and teach them to coach life skills and basketball.</p><p>I advocate social causes that are challenging for youth and transform them into opportunities, giving them tools to lift themselves out of the poverty they see. They use the skills like respecting your opponent and perseverance that can be applied in life as well as sports. When you wake up and all you see is poverty, you start to believe that mindset of limitations and scarcity. We give young people something else to believe in, a vision of a better life.</p>",
        },
      },
    },
    Breadcrumbs: {
      reactComponent: Breadcrumbs,
      props: {
        linkItems: [
          {
            label: "Home",
            active: false,
            href: "#",
          },
          {
            label: "Library",
            active: false,
            href: "#",
          },
          {
            label: "Data",
            active: true,
            href: "#",
          },
        ],
      },
    },
    Card: {
      reactComponent: Card,
      props: {
        type: "default",
        horizontal: false,
        clickable: false,
        image: "https://picsum.photos/300/200",
        imageAltText: "An example image",
        title: "Default title",
        body: "<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
        buttons: [
          {
            color: "maroon",
            size: "default",
            label: "CTA button",
          },
          {
            color: "gold",
            size: "small",
            label: "Link Button",
            href: "/",
            target: "_top",
          },
        ],
        tags: [
          { color: "gray", label: "tag1", href: "/#example-link" },
          { color: "gray", label: "tag2", href: "/#example-link" },
          { color: "gray", label: "tag3", href: "/#example-link" },
        ],
        linkUrl: "/#",
        linkLabel: "Link",
      },
    },
    Pagination: {
      reactComponent: Pagination,
      props: {
        type: "default",
        background: "white",
        totalPages: 4,
      },
    },
    Button: {
      reactComponent: Button,
      props: {
        label: "Default Button",
        onClick: () => {},
      },
    },
    ButtonIconOnly: {
      reactComponent: ButtonIconOnly,
      props: {
        color: "white",
        icon: ["fas", "times"],
        onClick: () => {},
      },
    },
    ButtonTag: {
      reactComponent: ButtonTag,
      props: {
        label: "Tag Button",
        color: "gray",
        onClick: () => {},
      },
    },
    Checkboxes: {
      reactComponent: Checkboxes,
      props: {},
    },
    Divider: {
      reactComponent: Divider,
      props: {},
    },
    Form: {
      reactComponent: Form,
      props: {
        children: "Form content",
        background: "uds-form-gray1",
      },
    },
    GridLinks: {
      reactComponent: GridLinks,
      props: {
        numColumns: 2,
        textColor: "none",
        gridLinkItems: [
          {
            label: "First-year student",
            icon: "fa-university",
            href: "https://example.com",
          },
          {
            label: "Online student",
            icon: "fa-desktop",
            href: "https://example.com",
          },
          {
            label: "Transfer student",
            icon: "fa-lightbulb",
            href: "https://example.com",
          },
          {
            label: "Veteran student",
            icon: "fa-user-graduate",
            href: "https://example.com",
          },
        ],
      },
    },
    Hero: {
      reactComponent: Hero,
      props: {
        image: {
          url: "https://picsum.photos/800/400",
          altText: "Hero image",
          size: "medium",
        },
        title: {
          text: "Hero Heading",
          highlightColor: "gold",
        },
        contentsColor: "white",
        contents: [
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ],
      },
    },
    Image: {
      reactComponent: Image,
      props: {
        src: "https://picsum.photos/300/200",
        alt: "Placeholder image",
        border: true,
      },
    },
    ImageBasedCard: {
      reactComponent: ImageBasedCard,
      props: {
        image: "https://picsum.photos/300/200",
        title: "Example Card Title",
        buttonText: "Learn More",
        buttonHref: "https://example.com",
        orientation: "portrait",
        size: "md",
      },
    },
    List: {
      reactComponent: List,
      props: {
        listType: "unordered",
        items: [
          {
            content: "First list item",
          },
          {
            content: "Second list item",
          },
          {
            content: "Third list item",
          },
        ],
      },
    },
    Modal: {
      reactComponent: Modal,
      props: {
        open: false,
      },
    },
    NotificationBanner: {
      reactComponent: NotificationBanner,
      props: {
        title: "Stay up-to-date on what's new at ASU",
        color: "orange",
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        buttons: [
          {
            href: "https://provost.asu.edu/sync/students",
            label: "Info. on teaching and learning remotely",
          },
        ],
      },
    },
    TextInput: {
      reactComponent: TextInput,
      props: {
        id: "input-id",
        label: "Input Label",
        placeholder: "Input Placeholder",
        required: false,
      },
    },
    Textarea: {
      reactComponent: Textarea,
      props: {
        id: "textarea-id",
        label: "Textarea Label",
        placeholder: "Textarea Placeholder",
        required: false,
      },
    },
    TabbedPanels: {
      reactComponent: TabbedPanels,
      props: {
        children: [
          React.createElement(Tab, { id: "home", title: "Home", key: "home" } as any, "Home content"),
          React.createElement(Tab, { id: "profile", title: "Profile", key: "profile" } as any, "Profile content"),
          React.createElement(Tab, { id: "contact", title: "Contact", key: "contact" } as any, "Contact content"),
        ],
      },
    },
    Select: {
      reactComponent: Select,
      props: {
        id: "select-id",
        label: "Select Label",
        options: [
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ],
        required: false,
      },
    },
    Testimonial: {
      reactComponent: Testimonial,
      props: {
        quote: {
          content: "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.",
          cite: {
            name: "Thomas Jefferson",
            description: "The Declaration of Independence",
          },
        },
      },
    },
    RankingCard: {
      reactComponent: RankingCard,
      props: {
        imageSize: "large",
        image: "https://picsum.photos/300/200",
        imageAlt: "Image alt text",
        heading: "Ranking title goes here, under the photo",
        body: "ASU has topped U.S. News & World Report's Most Innovative Schools list since the inception of the category in 2016. ASU again placed ahead of Stanford and MIT on the list, based on a survey of peers.",
        readMoreLink: "https://www.asu.edu/",
      },
    },
    Radios: {
      reactComponent: Radios,
      props: {},
    },
    Tooltip: {
      reactComponent: Tooltip,
      props: {
        title: "Header",
        content: "Content",
        triggerElement: React.createElement("span", {}, "Tooltip trigger"),
      },
    },
    Video: {
      reactComponent: Video,
      props: {
        type: "youtube",
        url: "https://www.youtube.com/embed/YW2p0ctzK9c",
        caption: "Sample video",
      },
    },
    SidebarMenu: {
      reactComponent: SidebarMenu,
      props: {
        title: "Header",
        links: [
          {
            href: "https://example.com",
            text: "Active Link",
            isActive: true,
          },
          {
            text: "Link 2 dropdown",
            items: [
              {
                href: "https://example.com",
                text: "Link 2.1",
              },
              {
                href: "https://example.com",
                text: "Link 2.2",
              },
            ],
          },
          {
            href: "https://example.com",
            text: "Link 4",
          },
        ],
      },
    },
    SystemAlert: {
      reactComponent: SystemAlert,
      props: {
        type: "warning",
        children: "Warning: This is a warning alert to alert, confirm or notify.",
        dismissable: true,
      },
    },
    Table: {
      reactComponent: Table,
      props: {
        columns: 5,
        fixed: false,
      },
    },
    Loader: {
      reactComponent: Loader,
      props: {},
    },
  };

  function generateAllComponents(): Record<string, { html: string | null; size: number }> {
    const emptyObjectToWriteTo: Record<string, { html: string | null; size: number }> = {};

    for (const [key, value] of Object.entries(componentMap)) {
      try {
        const html = getBootstrapHTML(
          React.createElement(value.reactComponent as any, value.props)
        );
        emptyObjectToWriteTo[key] = {
          html: html,
          size: html.length,
        };
      } catch (error) {
        console.error(`Error rendering component ${key}:`, error);
        emptyObjectToWriteTo[key] = {
          html: null,
          size: 0,
        };
      }
    }
    return emptyObjectToWriteTo;
  }

  const fileName = `components-${OLD_DATE}.json`;
  const filePath = path.join(__dirname, fileName);
  const result = generateAllComponents();

  fs.writeFileSync(filePath, JSON.stringify(result, null, 2), "utf8");

  // Clean up server environment
  cleanupServerEnvironment();
  console.log(`✅ Component HTML generated and saved to: ${fileName}`);
}
const args = process.argv.slice(0);
if (args[2]) {
  convertToHTML(args[2]).catch(error => {
    console.error('Error converting to HTML:', error);
    process.exit(1);
  });
}
