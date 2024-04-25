import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Organisms/Grid Links/Templates",
  args: {
    numColumns: "two-columns",
    bgColor: "None",
    textColor: "None",
  },
  argTypes: {
    numColumns: {
      name: "Number of columns",
      options: ["two-columns", "three-columns", "four-columns"],
      control: {
        type: "radio",
      },
    },
    bgColor: {
      name: "BackGround Color",
      options: ["None", "bg-gray-1", "bg-gray-7"],
      mapping: {
        None: null,
        "bg-gray-1": "bg-gray-1",
        "bg-gray-7": "bg-gray-7",
      },
      control: {
        type: "radio",
      },
    },
    textColor: {
      name: "Text color",
      options: ["None", "text-gold", "text-white"],
      mapping: {
        None: null,
        "text-gold": "text-gold",
        "text-white": "text-white",
      },
      control: {
        type: "radio",
      },
    },
  },
  decorators: [defaultDecorator],
};

export const BackgroundWhiteStory = ({bgColor, numColumns, textColor}) => {
  return (
    <section className={bgColor}>
      <div className={['uds-grid-links', numColumns, textColor].join(' ')}>
        <a href="#">
          <span className="fa fa-fw fa-university"></span>First-year student
        </a>
        <a href="#">
          <span className="fa fa-fw fa-desktop"></span>Online student
        </a>
        <a href="#">
          <span className="fa fa-fw fa-lightbulb"></span>Transfer student
        </a>
        <a href="#">
          <span className="fa fa-fw fa-user-graduate"></span>Veteran student
        </a>
        <a href="#">
          <span className="fa fa-fw fa-graduation-cap"></span>Graduate student
        </a>
        <a href="#">
          <span className="fa fa-fw fa-rocket"></span>Universal Learner
        </a>
        <a href="#">
          <span className="fa fa-fw fa-globe-americas"></span>International student
        </a>
        <a href="#">
          <span className="fa fa-fw fa-users"></span>Non-degree student
        </a>
      </div>
    </section>
  );
};
BackgroundWhiteStory.args = {
  numColumns: "two-columns",
};
