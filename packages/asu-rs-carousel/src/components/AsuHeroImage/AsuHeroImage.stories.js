import React from "react";
import { storiesOf } from "@storybook/react";
import { AsuHeroImage, AsuBgHeroImage } from "./index.js";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

let item = {
  src:
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  altText: "Hero Number One",
  tagline: "Some tagline information here",
  title: "Hero One Title",
  buttons: [
    { text: "button 1", url: "https://asu.edu", color: "primary" },
    { text: "button 2", url: "https://asu.edu", color: "secondary" }
  ],
  titleLink: "https://asu.edu"
};

const altButtons = [
  { text: "button 1", url: "https://asu.edu", color: "info" },
  { text: "button 2", url: "https://asu.edu", color: "secondary" }
];



storiesOf("AsuHeroImage", module)
  .add("basic", () => (
    <AsuHeroImage
      title={text("title", item.title)}
      altText={text("altText", item.altText)}
      src={text("src", item.src)}
      tagline={text("tagline", item.tagline)}
      titleLink={text("titleLink", item.titleLink)}
      buttons={item.buttons}
    />
  ))
  .add("alternate button colors", () => (
    <AsuHeroImage
      title={text("title", item.title)}
      altText={text("altText", item.altText)}
      src={text("src", item.src)}
      tagline={text("tagline", item.tagline)}
      titleLink={text("titleLink", item.titleLink)}
      buttons={altButtons}
    />
  ))
  .addDecorator(withKnobs, withA11y);

storiesOf("AsuBgHeroImage", module)
  .add("default height", () => (
    <AsuBgHeroImage
      title={text("title", item.title)}
      altText={text("altText", item.altText)}
      src={text("src", item.src)}
      tagline={text("tagline", item.tagline)}
      titleLink={text("titleLink", item.titleLink)}
      buttons={item.buttons}
      maxHeight={number("maxHeight", 380)}
    />
  ))
  .add("max height of 700 (jumbo)", () => (
    <AsuBgHeroImage
      title={text("title", item.title)}
      altText={text("altText", item.altText)}
      src={text("src", item.src)}
      tagline={text("tagline", item.tagline)}
      titleLink={text("titleLink", item.titleLink)}
      buttons={item.buttons}
      maxHeight={number("maxHeight", 700)}
    />
  ))
  .addDecorator(withKnobs, withA11y);
