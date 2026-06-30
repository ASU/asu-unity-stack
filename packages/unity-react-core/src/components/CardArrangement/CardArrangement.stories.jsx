import { imageAny } from "@asu/shared";
import React from "react";

import { CardArrangement } from "./CardArrangement";

const img1 = imageAny();

export default {
  title: "Components/Card Arrangement",
  component: CardArrangement,
  argTypes: {
    cards: {
      description:
        'Array of card objects to render. Each object should contain props for the Card, Image or RankingCard component. Cards will wrap naturally based on their intrinsic min/max widths. When using the Card component, cards can supply a type of "default", "degree", "event" or "story"',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `The CardArrangement component renders multiple cards that wrap naturally based on their intrinsic sizing.

## Usage

CardArrangement component receives Array of card objects to render. Each object should contain props for the Card, Image or RankingCard component. Cards will wrap naturally based on their intrinsic min/max widths. When using the Card component, cards can supply a type of "default", "degree", "event" or "story"

The parent container determines the overall width - this component simply handles laying out the cards
with appropriate spacing and letting them wrap naturally.

This design works seamlessly with Drupal and other CMS environments where the container width is controlled externally.

View component examples and source code below.
        `,
      },
    },
  },
};

const sampleCards = [
  {
    type: "default",
    image: img1,
    imageAltText: "Sample image 1",
    title: "Card Title One",
    body: "This is the body content for the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttons: [
      {
        color: "maroon",
        size: "default",
        label: "Learn more",
        href: "#",
      },
    ],
  },
  {
    type: "default",
    image: img1,
    imageAltText: "Sample image 2",
    title: "Card Title Two",
    body: "This is the body content for the second card. Sed do eiusmod tempor incididunt ut labore.",
    buttons: [
      {
        color: "gold",
        size: "default",
        label: "Explore",
        href: "#",
      },
    ],
  },
  {
    type: "default",
    image: img1,
    imageAltText: "Sample image 3",
    title: "Card Title Three",
    body: "This is the body content for the third card. Ut enim ad minim veniam, quis nostrud exercitation.",
    tags: [
      { color: "gray", label: "tag1", href: "#" },
      { color: "gray", label: "tag2", href: "#" },
    ],
  },
];

const eventCards = [
  {
    type: "event",
    image: img1,
    imageAltText: "Event image 1",
    title:
      "Innovation Summit 2024 with a very long title that should wrap to multiple lines and test the card height consistency across cards in the same row",
    body: "Join us for a day of innovation and collaboration with industry leaders. Also a long body text to test height consistency across cards in the same row.",
    eventFormat: "stack",
    eventTime: "Wed, March 15, 2024<br />9:00 a.m - 5:00 p.m.",
    eventLocation: "Tempe campus",
    buttons: [
      {
        color: "maroon",
        size: "default",
        label: "Register",
        href: "#",
      },
    ],
  },
  {
    type: "event",
    image: img1,
    imageAltText: "Event image 2",
    title: "Research Symposium",
    body: "Discover cutting-edge research from ASU scholars and students.",
    eventFormat: "stack",
    eventTime: "Fri, April 20, 2024<br />10:00 a.m - 2:00 p.m.",
    eventLocation: "West campus",
    buttons: [
      {
        color: "maroon",
        size: "default",
        label: "Learn more",
        href: "#",
      },
    ],
  },
];

const storyCards = [
  {
    type: "story",
    image: img1,
    imageAltText: "Story image 1",
    title: "Student Success Story",
    body: "Read about how our programs are transforming lives and careers.",
    linkLabel: "Read full story",
    linkUrl: "#",
    tags: [
      { color: "gray", label: "Students", href: "#" },
      { color: "gray", label: "Success", href: "#" },
    ],
  },
  {
    type: "story",
    image: img1,
    imageAltText: "Story image 2",
    title: "Research Breakthrough",
    body: "ASU researchers make significant advances in renewable energy technology.",
    linkLabel: "Learn more",
    linkUrl: "#",
    tags: [
      { color: "gray", label: "Research", href: "#" },
      { color: "gray", label: "Innovation", href: "#" },
    ],
  },
  {
    type: "story",
    image: img1,
    imageAltText: "Story image 3",
    title: "Community Impact",
    body: "How ASU is making a difference in local communities through service.",
    linkLabel: "Read more",
    linkUrl: "#",
    tags: [
      { color: "gray", label: "Community", href: "#" },
      { color: "gray", label: "Service", href: "#" },
    ],
  },
];

const degreeCards = [
  {
    type: "degree",
    image: img1,
    imageAltText: "Degree program 1",
    title: "Computer Science, BS",
    body: "Learn programming, algorithms, and software development from industry experts.",
  },
  {
    type: "degree",
    image: img1,
    imageAltText: "Degree program 2",
    title: "Business Administration, MBA",
    body: "Advance your career with strategic thinking and leadership skills.",
  },
  {
    type: "degree",
    image: img1,
    imageAltText: "Degree program 3",
    title: "Biomedical Engineering, MS",
    body: "Innovate at the intersection of medicine and technology.",
  },
  {
    type: "degree",
    image: img1,
    imageAltText: "Degree program 4",
    title: "Psychology, BA",
    body: "Understand human behavior and mental processes through scientific inquiry.",
  },
];

const imageCards = [
  {
    type: "image",
    src: img1,
    alt: "Image card 1",
    captionTitle: "Image Card One",
    caption:
      "This is the body content for the first image card with dropshadow and with cardLink prop provided. Card acts as anchor/link",
    border: true,
    dropShadow: true,
    cardLink: "https://example.com",
    title: "example",
  },
  {
    type: "image",
    src: img1,
    alt: "Image card 2",
    captionTitle: "Image Card Two",
    caption:
      "This is the body content for the second image card with no border",
  },
  {
    type: "image",
    src: img1,
    alt: "Image card 3",
    captionTitle: "Image Card Three",
    caption:
      "This is the body content for the third image card with no drop shadow.",
    border: true,
    dropShadow: false,
  },
];

const Template = args => (
  <div className="container">
    <CardArrangement {...args} />
  </div>
);

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  cards: sampleCards,
  columns: 3,
};
ThreeColumns.storyName = "Three cards example";
ThreeColumns.parameters = {
  docs: {
    description: {
      story: `
Example with three cards that will wrap naturally based on container width.

\`\`\`jsx
<CardArrangement
  cards={cards}
/>
\`\`\`
      `,
    },
  },
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  cards: eventCards,
  columns: 2,
};
TwoColumns.storyName = "Two cards example";
TwoColumns.parameters = {
  docs: {
    description: {
      story: `
Example with two event cards that will wrap naturally.

\`\`\`jsx
<CardArrangement
  cards={eventCards}
/>
\`\`\`
      `,
    },
  },
};

export const FourColumns = Template.bind({});
FourColumns.args = {
  cards: degreeCards,
  columns: 4,
};
FourColumns.storyName = "Four cards example";
FourColumns.parameters = {
  docs: {
    description: {
      story: `
Example with four degree cards that will wrap based on available space.

\`\`\`jsx
<CardArrangement
  cards={degreeCards}
/>
\`\`\`
      `,
    },
  },
};

export const HorizontalCards = Template.bind({});
HorizontalCards.args = {
  cards: [
    {
      type: "default",
      title: "Horizontal",
      body: "Body",
      horizontal: true,
    },
    {
      type: "default",
      title: "Horizontal",
      body: "Body",
      horizontal: true,
    },
  ],
};
HorizontalCards.storyName = "Horizontal cards example";
HorizontalCards.parameters = {
  docs: {
    description: {
      story: `
Example with horizontal cards. Each card is set to horizontal layout.

\`\`\`jsx
<CardArrangement
  cards={horizontalCards}
/>
\`\`\`
      `,
    },
  },
};

export const SingleColumn = Template.bind({});
SingleColumn.args = {
  cards: storyCards,
  columns: 1,
};
SingleColumn.storyName = "Multiple story cards";
SingleColumn.parameters = {
  docs: {
    description: {
      story: `
Example with multiple story cards.

\`\`\`jsx
<CardArrangement
  cards={storyCards}
/>
\`\`\`
      `,
    },
  },
};

export const MixedCardTypesNoColProvided = Template.bind({});
MixedCardTypesNoColProvided.args = {
  cards: [
    {
      type: "default",
      image: img1,
      imageAltText: "Default card",
      title: "Default Card",
      body: "This is a default card with a button.",
      buttons: [
        {
          color: "maroon",
          size: "default",
          label: "Action",
          href: "#",
        },
      ],
    },
    {
      type: "event",
      image: img1,
      imageAltText: "Event card",
      title: "Upcoming Event",
      body: "Join us for this exciting event.",
      eventFormat: "inline",
      eventTime: "March 15, 2024",
      eventLocation: "Tempe campus",
    },
    {
      type: "story",
      image: img1,
      imageAltText: "Story card",
      title: "Featured Story",
      body: "Read about this amazing story.",
      linkLabel: "Read more",
      linkUrl: "#",
      tags: [{ color: "gray", label: "Featured", href: "#" }],
    },
    {
      type: "degree",
      image: img1,
      imageAltText: "Degree card",
      title: "Degree Program",
      body: "Explore our degree offerings.",
    },
  ],
};
MixedCardTypesNoColProvided.storyName =
  "Mixed card types (no columns specified)";
MixedCardTypesNoColProvided.parameters = {
  docs: {
    description: {
      story: `
Example showing different card types in the same arrangement.
The CardArrangement component works with any card type (default, event, story, degree).

\`\`\`jsx
<CardArrangement
  cards={mixedCardsNoColProvided}
/>
\`\`\`
      `,
    },
  },
};

export const WithoutImages = Template.bind({});
WithoutImages.args = {
  cards: [
    {
      type: "default",
      icon: ["fas", "newspaper"],
      title: "News Update",
      body: "Stay informed with the latest news from ASU.",
      buttons: [
        {
          color: "maroon",
          size: "default",
          label: "Read more",
          href: "#",
        },
      ],
    },
    {
      type: "default",
      icon: ["fas", "calendar"],
      title: "Event Calendar",
      body: "Discover upcoming events and activities.",
      buttons: [
        {
          color: "gold",
          size: "default",
          label: "View calendar",
          href: "#",
        },
      ],
    },
    {
      type: "default",
      icon: ["fas", "graduation-cap"],
      title: "Academic Programs",
      body: "Explore our wide range of degree programs.",
      buttons: [
        {
          color: "maroon",
          size: "default",
          label: "Explore",
          href: "#",
        },
      ],
    },
  ],
  columns: 2,
};
WithoutImages.storyName = "Cards with icons";
WithoutImages.parameters = {
  docs: {
    description: {
      story: `
Cards can use icons instead of images for a cleaner, icon-based layout.

\`\`\`jsx
<CardArrangement
  cards={cardsWithIcons}
/>
\`\`\`
      `,
    },
  },
};

const rankingCardsLarge = [
  {
    imageSize: "large",
    image: img1,
    imageAlt: "Ranking image 1",
    heading: "Top Research University",
    body: "ASU ranks among the top research universities in innovation and impact.",
    readMoreLink: "#",
  },
  {
    imageSize: "large",
    image: img1,
    imageAlt: "Ranking image 2",
    heading: "Innovation Leader",
    body: "Recognized as the most innovative school in the nation for multiple consecutive years.",
    readMoreLink: "#",
  },
  {
    imageSize: "large",
    image: img1,
    imageAlt: "Ranking image 3",
    heading: "Sustainability Excellence",
    body: "Leading the way in sustainable practices and environmental initiatives.",
    readMoreLink: "#",
  },
  {
    imageSize: "large",
    image: img1,
    imageAlt: "Ranking image 1",
    heading: "Top Research University",
    body: "ASU ranks among the top research universities in innovation and impact.",
    readMoreLink: "#",
  },
  {
    imageSize: "large",
    image: img1,
    imageAlt: "Ranking image 2",
    heading: "Innovation Leader",
    body: "Recognized as the most innovative school in the nation for multiple consecutive years.",
    readMoreLink: "#",
  },
  {
    imageSize: "large",
    image: img1,
    imageAlt: "Ranking image 3",
    heading: "Sustainability Excellence",
    body: "Leading the way in sustainable practices and environmental initiatives.",
    readMoreLink: "#",
  },
];

const rankingCardsSmall = [
  {
    imageSize: "small",
    image: img1,
    imageAlt: "Ranking image 1",
    heading: "Best Value University",
    body: "Delivering exceptional education at an affordable cost.",
    citation: "U.S. News & World Report 2024",
  },
  {
    imageSize: "small",
    image: img1,
    imageAlt: "Ranking image 2",
    heading: "Top Online Programs",
    body: "Ranked #1 for online bachelor's programs nationwide.",
    citation: "U.S. News & World Report 2024",
  },
  {
    imageSize: "small",
    image: img1,
    imageAlt: "Ranking image 3",
    heading: "Research Impact",
    body: "Highest research activity classification from Carnegie.",
    citation: "Carnegie Classification 2024",
  },
  {
    imageSize: "small",
    image: img1,
    imageAlt: "Ranking image 4",
    heading: "Graduate Employability",
    body: "Top 10 in the U.S. for graduate employment outcomes.",
    citation: "QS World Rankings 2024",
  },
];

export const RankingCardsLarge = Template.bind({});
RankingCardsLarge.args = {
  cards: rankingCardsLarge,
  cardType: "ranking",
  columns: 4,
};
RankingCardsLarge.storyName = "Ranking cards (large)";
RankingCardsLarge.parameters = {
  docs: {
    description: {
      story: `
Example with large ranking cards that display an expandable info layer overlay.

\`\`\`jsx
<CardArrangement
  cards={rankingCardsLarge}
  cardType="ranking"
/>
\`\`\`
      `,
    },
  },
};

export const RankingCardsSmall = Template.bind({});
RankingCardsSmall.args = {
  cards: rankingCardsSmall,
  cardType: "ranking",
  columns: 2,
};
RankingCardsSmall.storyName = "Ranking cards (small)";
RankingCardsSmall.parameters = {
  docs: {
    description: {
      story: `
Example with small ranking cards that include citations and compact layout.

\`\`\`jsx
<CardArrangement
  cards={rankingCardsSmall}
  cardType="ranking"
/>
\`\`\`
      `,
    },
  },
};

export const ImageCards = Template.bind({});
ImageCards.args = {
  cards: imageCards,
  cardType: "image",
  columns: 3,
};
ImageCards.storyName = "Image cards";
ImageCards.parameters = {
  docs: {
    description: {
      story: `
Example with image cards that display a visual representation along with heading and body text.

\`\`\`jsx
<CardArrangement
  cards={imageCards}
  cardType="image"
/>
\`\`\`
      `,
    },
  },
};
