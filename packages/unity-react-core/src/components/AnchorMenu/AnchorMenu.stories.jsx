/* eslint react/jsx-props-no-spreading: "off" */
import classNames from "classnames";
import React from "react";

import {
  getLoremSentences,
  titleCaseDefinition,
} from "../../../../../shared/constants/strings";
import { Basic as Header } from "../../../../unity-bootstrap-theme/stories/organisms/global-header/global-header.templates";
import { Divider } from "../Divider/Divider";
import { useBaseSpecificFramework } from "../GaEventWrapper/useBaseSpecificFramework";
import { AnchorMenu } from "./AnchorMenu";

const titleCaseTitle =
  "Anchor Menus Should Always be Formatted with Title Case";
export default {
  title: "Components/AnchorMenu",
  component: AnchorMenu,
  excludeStories: ["Containers"],
  parameters: {
    docs: {
      description: {
        component: `The Anchor Menu component can be used to generate a
responsive anchor menu.
## Usage

Anchor menu users are responsible to meet all UDS design guidelines with their
menu, including rules on the use of Call-to-Action buttons and tags.

View component examples and source code below.

This story includes another components for demostration purposes.

## ${titleCaseTitle}
**Definition:** ${titleCaseDefinition}
        `,
      },
    },
  },
};
const items = [
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
];

export const Containers = () => {
  return (
    <>
      {items &&
        items.map((item, index) => {
          const lastStyle =
            index === items.length - 1 ? { marginBottom: "100vh" } : undefined;
          return (
            <div
              id={item.targetIdName}
              key={item.targetIdName}
              style={lastStyle}
            >
              <h2>{item.text}</h2>
              {/* use titleCaseDefinition for the first item */}
              {index === 0 && (
                <>
                  <h3>{titleCaseTitle}</h3>
                  <p>
                    <strong>Definition: </strong>
                    {titleCaseDefinition}
                  </p>
                  <Divider type="copy" />
                </>
              )}
              <p>
                {
                  getLoremSentences(
                    40,
                    index * 3
                  ) /* 40 sentences, index * 3 offset just creates some variety */
                }
              </p>
            </div>
          );
        })}
    </>
  );
};

const Template = args => {
  const { isBootstrap } = useBaseSpecificFramework();

  return (
    <>
      {/* Bootstrap version of anchor menu depends on the header component */}
      {isBootstrap && <Header />}

      <div className={classNames("container")}>
        <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
          <div
            className={classNames("col", "col-12", "col-md-12", "col-lg-12")}
          >
            {/* Component */}
            <AnchorMenu {...args} />
            {/* Demostration purposes containers */}
            <Containers />
          </div>
        </div>
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  items,
  firstElementId: "first-container",
};
