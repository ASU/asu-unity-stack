import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/List/Templates",
  decorators: [ defaultDecorator ],
  argTypes: {
    bulletColor: {
      name: "Bullet Color",
      options: ["Default", "Maroon", "Gold"],
      mapping: {
        "Default": null,
        "Maroon": "maroon",
        "Gold": "gold",
      },
      control: {
        type: "radio",
      },
    },
    backgroundColor: {
      name: "Background Color",
      options: ["Default", "Smoke mode", "Light Smoke mode", "Dark mode"],
      mapping: {
        "Default": null,
        "Smoke mode": "smokemode",
        "Light Smoke mode": "light-smokemode",
        "Dark mode": "darkmode",
      },
      control: {
        type: "radio",
      },
    },
  },
  args: {
    bulletColor: "Default",
    backgroundColor: "Default",
  },
};

export const UnorderedList = ({bulletColor, backgroundColor}) => {
  return (
    <ul className={`uds-list ${bulletColor} ${backgroundColor}`}>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Consectetur adipiscing lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </li>
      <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
    </ul>
  );
};

export const OrderedList = ({bulletColor, backgroundColor}) => {
  return (
    <ol className={`uds-list ${bulletColor} ${backgroundColor}`}>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Consectetur adipiscing lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </li>
      <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </li>
      <li>Ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>Dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Consectetur adipiscing lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </li>
      <li>Ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Sed do eiusmod tempor incididunt ut lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </li>
      <li>Ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>
        Adipiscing lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>Dolor sit amet, consectetur adipiscing elit.</li>
    </ol>
  );
};

export const IconList = ({bulletColor, backgroundColor}) => {
  return (
    <ul className={`uds-list fa-ul ${bulletColor} ${backgroundColor}`}>
      <li>
        <span className="fa-li fas fa-rocket"></span>Lorem ipsum dolor sit amet
      </li>
      <li>
        <span className="fa-li fas fa-bus"></span>Consectetur adipiscing lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </li>
      <li>
        <span className="fa-li fas fa-car"></span>Ipsum dolor sit amet, consectetur
        adipiscing elit.
      </li>
      <li>
        <span className="fa-li fas fa-bicycle"></span>We hide icons from assistive
        technology in these examples, but whether to hide using
        aria-hidden="true" or not should be determined by the developer based on
        whether the icons are intended as decoration only or are intended to
        convey meaning. See{" "}
        <a href="https://fontawesome.com/v4.7.0/accessibility/">
          Font Awesome Accessibility
        </a>{" "}
        for guidelines.
      </li>
    </ul>
  );
};

export const StepList = ({bulletColor, backgroundColor}) => {
  return (
    <ol
      className={`uds-list uds-steplist ${
        bulletColor !== "" ? "uds-steplist-" + bulletColor : ""
      } ${backgroundColor}`}
    >
      <li>
        This is a quintenary headline
        <br />
        <span>
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </span>
      </li>
      <li>
        This is a quintenary headline
        <br />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt.
        </span>
      </li>
      <li>
        This is a quintenary headline
        <br />
        <span>
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </span>
      </li>
    </ol>
  );
};

export const DisplayList = ({bulletColor, backgroundColor}) => {
  return (
    <ul
      className={`uds-list uds-display-list ${bulletColor} ${backgroundColor}`}
    >
      <li>
        Lorem ipsum dolor sit amet
        <span>Lorem ipsum dolor sit amet</span>
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <span>Lorem ipsum dolor sit amet</span>
      </li>
      <li>
        Lorem ipsum dolor sit amet, adipiscing elit.
        <span>Lorem ipsum dolor sit amet</span>
      </li>
      <li>
        Lorem ipsum dolor sit amet
        <span>Lorem ipsum dolor sit amet</span>
      </li>
    </ul>
  );
};
