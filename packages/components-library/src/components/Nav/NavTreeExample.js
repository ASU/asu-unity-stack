const BasicNavTree = [
  {
    href: "/",
    text: "Home",
    type: "icon-home",
    selected: true,
    class: "test-class",
  },
  {
    text: "Degree programs",
    href: "#",
    items: [
      [
        {
          href: "https://www.asu.edu/?feature=newsevents",
          text: "Mauris viverra, sem nec",
        },
        {
          href: "https://www.asu.edu/?feature=academics",
          text: "Academics",
        },
        {
          href: "https://www.asu.edu/?feature=research",
          text: "Research",
        },
        {
          href: "https://www.asu.edu/?feature=athletics",
          text: "Athletics",
        },
        {
          href: "https://www.asu.edu/?feature=alumni",
          text: "Alumni",
        },
        {
          href: "https://www.asu.edu/?feature=giving",
          text: "Giving",
        },
        {
          href: "https://www.asu.edu/?feature=president",
          text: "President",
        },
        {
          href: "https://www.asu.edu/about",
          text: "About ASU",
        },
      ],
    ],
  },

  {
    text: "People",
    href: "#",
    items: [
      [
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "Map",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "Tempe",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "West",
        },
        {
          href: "https://campus.asu.edu/polytechnic/",
          text: "Polytechnic",
        },
        {
          href: "https://asuonline.asu.edu/",
          text: "Online and Extended",
        },
        {
          href: "https://havasu.asu.edu/",
          text: "Mauris viverra, sem nec",
        },
      ],
    ],
  },
  {
    text: "My ASU",
    href: "#",
  },
  {
    text: "Research",
    href: "#",
  },
  {
    text: "About us",
    href: "#",
  },
  {
    text: "Contact us",
    href: "#",
  },
];

const NavTreeWithButtons = [
  {
    href: "/",
    text: "Home",
    type: "icon",
    class: "home",
  },
  {
    text: "Degree programs",
    href: "#",
    items: [
      [
        {
          href: "https://www.asu.edu/?feature=newsevents",
          text: "Mauris viverra, sem nec",
        },
        {
          href: "https://www.asu.edu/?feature=academics",
          text: "Academics",
        },
        {
          href: "https://www.asu.edu/?feature=research",
          text: "Research",
        },
        {
          href: "https://www.asu.edu/?feature=athletics",
          text: "Athletics",
        },
        {
          href: "https://www.asu.edu/?feature=alumni",
          text: "Alumni",
        },
        {
          href: "https://www.asu.edu/?feature=giving",
          text: "Giving",
        },
        {
          href: "https://www.asu.edu/?feature=president",
          text: "President",
        },
        {
          href: "https://www.asu.edu/about",
          text: "About ASU",
        },
      ],
    ],
  },
  {
    text: "My ASU",
    href: "#",
    selected: true
  },
  {
    text: "People",
    href: "#",
    items: [
      [
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "Duis molestie commodo",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "Mauris viverra, sem nec",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "Massa nunc dictum nam venenatis",
        },
        {
          href: "https://campus.asu.edu/polytechnic/",
          text: "Polytechnic",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          text: "Downtown Phoenix",
        },
        {
          href: "https://asuonline.asu.edu/",
          text: "Online and Extended",
        },
      ],
    ],
  },
  {
    text: "Research",
    href: "#",
  },
];

const NavTreeMega = [
  {
    href: "/",
    text: "Home",
    type: "icon",
    class: "home",
  },
  {
    text: "One Column",
    href: "/",
    selected: true,
    items: [
      [
        {
          href: "https://www.asu.edu/",
          text: "A test navigation item",
        },
        {
          href: "https://www.asu.edu/",
          text: "Mauris viverra, sem nec",
        },
        {
          href: "https://www.asu.edu/?feature=athletics",
          text: "Massa nunc dictum nam venenatis",
        },
        {
          href: "https://www.asu.edu/?feature=alumni",
          text: "Alumni",
        },
        {
          href: "https://www.asu.edu/?feature=giving",
          text: "Giving",
        },
        {
          href: "https://www.asu.edu/?feature=president",
          text: "President",
        },
        {
          href: "https://www.asu.edu/about",
          text: "About ASU",
        },
      ],
    ],
  },
  {
    text: "Two Column",
    href: "/",
    items: [
      [
        {
          type: "heading",
          text: "Column 1",
        },
        {
          href: "https://www.asu.edu/",
          text: "Pellentesque ornare",
        },
        {
          href: "https://www.asu.edu/",
          text: "Curabitur viverra arcu nisl",
        },
        {
          href: "https://www.asu.edu/?feature=athletics",
          text: "Aenean pharetra",
        },
        {
          href: "https://www.asu.edu/?feature=alumni",
          text: "Pellentesque",
        },
        {
          href: "https://www.asu.edu/?feature=giving",
          text: "Donec sagittis nulla",
        },
        {
          href: "https://www.asu.edu/?feature=president",
          text: "Quisque fringilla",
        },
        {
          href: "https://www.asu.edu/about",
          text: "Integer vel gravida lectus",
        },
      ],
      [
        {
          href: "https://www.asu.edu/?feature=newsevents",
          type: "heading",
          text: "Ut quis",
        },
        {
          href: "https://www.asu.edu/?feature=academics",
          text: "Nunc in libero odio",
        },
        {
          href: "https://www.asu.edu/?feature=research",
          text: "Maecenas quam elit",
        },
        {
          href: "https://www.asu.edu/?feature=academics",
          text: "Ut at vehicula neque",
        },
        {
          href: "https://www.asu.edu/?feature=athletics",
          type: "button",
          text: "Sed molestie",
        },
      ],
    ],
  },
  {
    text: "Mega Menu (3 Col)",
    href: "#",
    items: [
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Maecenas lacinia",
        },
        {
          href: "https://havasu.asu.edu/",
          text: "Curabitur viverra arcu nisl",
        },
        {
          href:
            "https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",
          classes: "border",
          text: "Thunderbird",
        },
        {
          href: "https://skysong.asu.edu/",
          text: "Skysong",
        },
        {
          href: "https://asuresearchpark.com/",
          text: "Research Park",
        },
        {
          href: "https://washingtoncenter.asu.edu/",
          text: "Washington D.C.",
        },
        {
          href: "https://wpcarey.asu.edu/mba/china-program/english/",
          text: "China",
        },
      ],
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column 2",
        },
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "Phasellus egestas nec est ",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "Pellentesque et mollis",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "Cras congue",
        },
        {
          href: "https://campus.asu.edu/polytechnic/",
          text: "Cras ut malesuada nisl",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          type: "button",
          text: "Downtown Phoenix",
        },
      ],
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column 3 Heading",
        },
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "Map",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "Tempe",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "West",
        },
        {
          href: "https://campus.asu.edu/polytechnic/",
          text: "Polytechnic",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          type: "button",
          text: "Downtown Phoenix",
        },
      ],
    ],
  },
  {
    text: "Mega Menu (4 Col)",
    href: "#",
    items: [
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Header Column 1",
        },
        {
          href: "https://havasu.asu.edu/",
          text: "Lake Havasu",
        },
        {
          href:
            "https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",
          classes: "border",
          text: "Thunderbird",
        },
        {
          href: "https://skysong.asu.edu/",
          text: "Skysong",
        },
        {
          href: "https://asuresearchpark.com/",
          text: "Research Park",
        },
        {
          href: "https://washingtoncenter.asu.edu/",
          text: "Washington D.C.",
        },
        {
          href: "https://wpcarey.asu.edu/mba/china-program/english/",
          text: "China",
        },
      ],
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column 2",
        },
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "Faculty and Staff Directory",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "The Tempe Campus",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "Sun Devils and Things",
        },
        {
          href: "https://campus.asu.edu/polytechnic/",
          text: "Another nav link",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          type: "button",
          text: "Action",
        },
      ],
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column 3",
        },
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "University Technology Office",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "Sun Devil Football",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "The School of Something",
        },
        {
          href: "https://campus.asu.edu/polytechnic/",
          text: "Polytechnic",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          type: "button",
          text: "Another Button",
        },
      ],
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column 4",
        },
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "Maps and Directions",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "Office of the technology",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "Office of the business",
        },
        {
          href: "https://campus.asu.edu/polytechnic/",
          text: "Some longer text office of longtext",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          type: "button",
          text: "Downtown Phoenix",
        },
      ],
    ],
  },
  {
    text: "Mega Menu (5 Col)",
    href: "#",
    buttons: [
      {
        text: "CTA One",
        href: "https://asu.edu",
        color: "maroon",
      },
      {
        text: "CTA Two",
        href: "https://asu.edu",
        color: "gold",
      },
    ],
    items: [
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column One Heading Text",
        },
        {
          href: "https://havasu.asu.edu/",
          text: "The Lake Havasu Campus",
        },
        {
          href:
            "https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",
          classes: "border",
          text: "Thunderbird",
        },
        {
          href: "https://skysong.asu.edu/",
          text: "Skysong",
        },
        {
          href: "https://asuresearchpark.com/",
          text: "Research Park",
        },
        {
          href: "https://washingtoncenter.asu.edu/",
          text: "Washington D.C.",
        },
        {
          href: "https://wpcarey.asu.edu/mba/china-program/english/",
          text: "China",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          type: "button",
          text: "Call to Action",
        },
      ],
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column 2",
        },
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "Faculty and Staff Directory",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "The Tempe Campus",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "Sun Devils and Things",
        },
        {
          href: "https://campus.asu.edu/polytechnic/",
          text: "Another nav link",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          type: "button",
          text: "Action Button",
        },
      ],
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column 3",
        },
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "University Technology Office",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "Sun Devil Football",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "The School of Something",
        },
        {
          href: "https://campus.asu.edu/polytechnic/",
          text: "Polytechnic",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          type: "button",
          text: "Another Button",
        },
      ],
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column 4",
        },
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "Maps and Directions",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "Office of the technology",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "Office of the business",
        },
        {
          href: "https://campus.asu.edu/polytechnic/",
          text: "Some longer text office of longtext",
        },
        {
          href: "https://campus.asu.edu/downtown/",
          type: "button",
          text: "Downtown Phoenix",
        },
      ],
      [
        {
          href: "https://asuonline.asu.edu/",
          type: "heading",
          text: "Column Five",
        },
        {
          classes: "border first",
          href: "https://www.asu.edu/map/",
          text: "Buildings and directory",
        },
        {
          href: "https://campus.asu.edu/tempe/",
          text: "Some good news",
        },
        {
          href: "https://campus.asu.edu/west/",
          text: "Directory Admin Tools",
        },
      ],
    ],
  },
];

export { BasicNavTree, NavTreeWithButtons, NavTreeMega };
