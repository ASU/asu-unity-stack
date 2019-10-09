import React from 'react';
import { storiesOf } from '@storybook/react';
import AsuDropdownNav from './index.js';

const items = [
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

storiesOf('AsuDropdownNav', module)
  .add('basic', () => (
    <AsuDropdownNav {...{text: 'ASU Home', href:'https://asu.edu', target: '_blank', items: items}}/>
  ));
