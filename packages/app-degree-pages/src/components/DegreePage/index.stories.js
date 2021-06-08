/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

import { DegreePage } from ".";

/**
 * @typedef {import('../../core/models/app-props').AppProps} AppProps
 */

export default {
  component: DegreePage,
  title: "Degree Page",
};

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
const Template = ({ introContent, degreeList }) => (
  <DegreePage introContent={introContent} degreeList={degreeList} />
);

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
export const UndergraduateDegreePage = Template.bind({});

/**
 * @type {AppProps}
 */
UndergraduateDegreePage.args = {
  hero: {
    image: {
      url: "https://source.unsplash.com/random/800x400?a=1",
      altText: "Undergraduate Degree Title",
      size: "small",
    },
    title: {
      text: "Undergraduate Degree Title",
    },
    contents: [
      {
        text: "Undergraduate Degrees",
      },
    ],
  },
  introContent: {
    type: "text",
    title: {
      text: "This is introductory marketing copy. Lorem ipsum dolor sit amet",
      // component: "h2", default h2
    },
    contents: [
      {
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`,
      },
    ],
  },
  degreeList: {
    dataSource: "/api/mocks/degree-search",
  },
};

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
export const AreaStudyDgreePage1 = Template.bind({});

/**
 * @type {AppProps}
 */
AreaStudyDgreePage1.args = {
  hero: {
    image: {
      url: "https://source.unsplash.com/random/800x400?a=1",
    },
    contents: [
      {
        text: "Area of study degrees",
      },
    ],
  },
  introContent: {
    type: "text-photo-grid",
    title: {
      text: "This is introductory marketing copy. Lorem ipsum dolor sit amet",
      component: "h3",
    },
    contents: [
      {
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`,
      },
    ],
    photoGrid: {
      images: [
        {
          url: "https://source.unsplash.com/random/800x400?a=1",
        },
        {
          url: "https://source.unsplash.com/random/800x400?a=1",
        },
        {
          url: "https://source.unsplash.com/random/800x400?a=1",
        },
        {
          url: "https://source.unsplash.com/random/800x400?a=1",
        },
      ],
    },
  },
  degreeList: {
    dataSource: "/api/mocks/degree-search",
  },
};

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
export const AreaStudyDgreePage2 = Template.bind({});

/**
 * @type {AppProps}
 */
AreaStudyDgreePage2.args = {
  hero: {
    image: {
      url: "https://source.unsplash.com/random/800x400?a=1",
    },
    contents: [
      {
        text: "[Subdomain] degrees in [area of study]",
      },
    ],
  },
  introContent: {
    type: "text-image-overlay",
    header: {
      text: "Intro Content Image Overlay",
      component: "h2",
    },
    title: {
      text: "This is the contents that goes in the box",
      component: "h3",
    },
    contents: [
      {
        text: `Instagram tour operator travel sailing flying package.
         Territory New York City group discount active lifestyle creditcard
         insurance wellness kayak guide overnight rural lonely planet.`,
      },
      {
        text: `Train luxury Paris recommendations nature France sight seeing.
         Flexibility Amsterdam maps.
         Pacific lonely planet private jet national insurance taxi tourist attractions.
         Budget Pacific guide caravan Barcelona place to stay maps gateway diary tour operator money`,
      },
    ],
    image: {
      url: "https://source.unsplash.com/random/800x400?a=1",
    },
  },
  degreeList: {
    dataSource: "/api/mocks/degree-search",
  },
};
