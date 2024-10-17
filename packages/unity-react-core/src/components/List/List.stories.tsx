import type { StoryFn, StoryContext } from '@storybook/react';
import React from "react";
import { List, ListProps } from "./List";
import { ItemListStyleColor, ListBackgroundColor, ListComponentType, ListElementType } from "./ListConstants.js";
import { item, item2, lorem } from './list.helper.js';

const decorator = (story:StoryFn, context: StoryContext) =>
  <div className="container"><div className="row">{story(context.args, context)}</div></div>;

export default {
  title: "Components/List",
  component: List,
  decorators: [decorator]
};

const listTemplate = (args: ListProps) => {
  return <List {...args} />
};

export const UnorderedList = {
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.UNORDERED,
    items: [
      item,
      item,
      {
        ...item,
        nestedItems: [
          item,
          item,
          {
            ...item,
            nestedItems: [
              item,
              item,
              {
                ...item,
                nestedItems: [
                  item,
                  item,
                  item,
                ],
              },
              item,
            ],
          },
          item,
        ],
      },
      item,
    ],
  }
};


export const OrderedList = {
  render: listTemplate.bind({}),
  args: {
    ...UnorderedList.args,
    listType: ListComponentType.ORDERED,
  }
};



export const IconList = {
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.ICON,
    items: [
      {
        content: lorem,
        icon: ["fas", "rocket"],
      },
      {
        content: lorem,
        icon: ["fas","bus"],
      },
      {
        content: lorem,
        icon: ["fas", "car"],
      },
      {
        content: <>We hide icons from assistive technology in these examples, but whether to hide using aria-hidden="true" or not should be determined by the developer based on whether the icons are intended as decoration only or are intended to convey meaning. See <a href="https://fontawesome.com/v4.7.0/accessibility/">Font Awesome Accessibility</a> for guidelines.</>,
        icon: ["fas", "bicycle"],
      },
    ],
  }
};


export const StepList = {
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.STEP,
    backgroundColor: ListBackgroundColor.MEDIUM,
    listItemStyleColor: ItemListStyleColor.SECONDARY,
    items: [
      item2,
      item2,
      item2,
      item2,
    ],
  }
};


export const DisplayList = {
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.DISPLAY,
    items: [
      item2,
      item2,
      item2,
      item2,
      item2,
      item2,
    ],
  }
};
