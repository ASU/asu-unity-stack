import React from 'react';
import { storiesOf } from '@storybook/react';
import AsuNav from './index.js';

const siteNav = [
  {
    title: "ASU Home",
    text: "ASU Home",
    href: "https://www.asu.edu/",
    items: [
      {
        href: "https://www.asu.edu/?feature=newsevents",
        target: "_top",
        title: "News and Events",
        text: "News/Events"
      },
      {
        href: "https://www.asu.edu/?feature=academics",
        target: "_top",
        title: "Academics",
        text: "Academics"
      },
      {
        href: "https://www.asu.edu/?feature=research",
        target: "_top",
        title: "Research",
        text: "Research"
      },
      {
        href: "https://www.asu.edu/?feature=athletics",
        target: "_top",
        title: "Athletics",
        text: "Athletics"
      },
      {
        href: "https://www.asu.edu/?feature=alumni",
        target: "_top",
        title: "Alumni",
        text: "Alumni"
      },
      {
        href: "https://www.asu.edu/?feature=giving",
        target: "_top",
        title: "Giving",
        text: "Giving"
      },
      {
        href: "https://www.asu.edu/?feature=president",
        target: "_top",
        title: "President",
        text: "President"
      },
      {
        href: "https://www.asu.edu/about",
        target: "_top",
        title: "About ASU",
        text: "About ASU"
      }
    ]
  },
  {
    title: "My ASU",
    text: "My ASU",
    href: "https://my.asu.edu/",
    target: "_top"
  },
  {
    title: "Map and Locations",
    text: "Map and Locations",
    href: "https://www.asu.edu/map/",
    target: "_top",
    items: [
      {
        classes: "border first",
        href: "https://www.asu.edu/map/",
        target: "_top",
        title: "Map",
        text: "Map"
      },
      {
        href: "https://campus.asu.edu/tempe/",
        target: "_top",
        title: "Tempe campus",
        text: "Tempe"
      },
      {
        href: "https://campus.asu.edu/west/",
        target: "_top",
        title: "West campus",
        text: "West"
      },
      {
        href: "https://campus.asu.edu/polytechnic/",
        target: "_top",
        title: "Polytechnic campus",
        text: "Polytechnic"
      },
      {
        href: "https://campus.asu.edu/downtown/",
        target: "_top",
        title: "Downtown Phoenix campus",
        text: "Downtown Phoenix"
      },
      {
        href: "https://asuonline.asu.edu/",
        target: "_top",
        title: "Online and Extended campus",
        text: "Online and Extended"
      },
      {
        href: "https://havasu.asu.edu/",
        target: "_top",
        title: "",
        text: "Lake Havasu"
      },
      {
        href:
          "https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",
        target: "_top",
        classes: "border",
        title: "",
        text: "Thunderbird"
      },
      {
        href: "https://skysong.asu.edu/",
        target: "_top",
        title: "",
        text: "Skysong"
      },
      {
        href: "https://asuresearchpark.com/",
        target: "_top",
        title: "",
        text: "Research Park"
      },
      {
        href: "https://washingtoncenter.asu.edu/",
        target: "_top",
        title: "",
        text: "Washington D.C."
      },
      {
        href: "https://wpcarey.asu.edu/mba/china-program/english/",
        target: "_top",
        title: "",
        text: "China"
      }
    ]
  },
  {
    title: "Directory, Index and other info",
    text: "Directory",
    href: "https://isearch.asu.edu/",
    target: "_top"
  }
];

storiesOf('AsuNav', module)
  .add('basic w/out local nav', () => (
    <AsuNav/>
  ));
