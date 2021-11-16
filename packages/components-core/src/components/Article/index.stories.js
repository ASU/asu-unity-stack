/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";

import { Article } from ".";

export default {
  title: "UDS/Article",
  component: Article,
  parameters: {
    docs: {
      description: {
        component: `The Article component can be used to generate UDS-compliant news and event articles.

## Usage

By default, the Article component will output the news layout.  When "event" is passed to the "type" prop, Article will generate the event layout.

The following props are only rendered for the event layout:
        • calendarUrl
        • eventTime
        • eventLocation
        • registrationUrl
        • zoomUrl

The following prop is only rendered for the news layout:
        • headerImageUrl

View component examples and source code below.
        `,
      },
    },
  },
  argTypes: {
    type: {
      type: "inline-radio",
      options: ["event", "news"],
    },
  },
};

const Template = args => <Article {...args} />;

export const News = Template.bind({});
News.args = {
  type: "news",
  articleUrl: "https://example.com",
  headerImageUrl: "https://source.unsplash.com/WLUHO9A_xik/1920x512",
  title:
    "Clarisse Machanguana takes her skill set to the next level at ASU Thunderbird",
  publicationDate: "March 18, 2021",
  authorName: "Jimena Garrison",
  authorTitle: "Media Relations and Strategic Communications",
  authorEmail: "jgarris6@asu.edu",
  authorPhone: "480-727-4058",
  breadcrumbs: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Second nav item",
      url: "/events",
    },
    {
      title: "Current page",
      url: "/events/current-article",
      active: true,
    },
  ],
  body: "<p>After 34 years in the game of basketball, Clarisse Machanguana retired. Her eponymous philanthropic foundation remains her only connection to the sport, although the effect of the global game has left imprints in many aspects of her life.</p><p>Playing basketball took her to Portugal and then the U.S., where she attended Old Dominion University in Virginia to study criminal justice. When she realized that sports could be a microcosm of life and values, she decided to create a way to coach sports while teaching life skills in her home country of Mozambique. She started the <a href='http://machanguanafoundation.rf.gd/'>Clarisse Machanguana Foundation</a> in 2014 with the goal of empowering Mozambican youth through health, education and sports programs.</p><p>Now she’s taking her leadership game to the next level at ASU’s Thunderbird School of Global Management, earning her Master of Global Management degree with a nonprofit management concentration. Machanguana is honing her skills as a global professional in and out of the classroom to propel her foundation even further.</p><p>Here she reflects on the experiences that brought her to Thunderbird and ASU.</p><p><strong>Question: Why basketball?</strong></p><p><strong>Answer:</strong> I started at age 6, and because it was popular in my area and I was tall — now 6-feet-5-inches tall, to be exact — people kept telling me I should play. Basketball took me everywhere. I had a scholarship to play in Portugal and the U.S., and later on in Spain, France, Brazil, South Korea and Italy. Basketball became a passport and a school for me, and a source of amazing friendships. I played from age 6 to 40. My foundation now partners with the Department of Education. We collaborate with teachers and teach them to coach life skills and basketball.</p><p>I advocate social causes that are challenging for youth and transform them into opportunities, giving them tools to lift themselves out of the poverty they see. They use the skills like respecting your opponent and perseverance that can be applied in life as well as sports. When you wake up and all you see is poverty, you start to believe that mindset of limitations and scarcity. We give young people something else to believe in, a vision of a better life.</p>",
};

export const Event = Template.bind({});
Event.args = {
  type: "event",
  articleUrl: "https://example.com",
  title:
    "ASU Book Group: 'There's No Crying in Newsrooms' by Kristin Grady Gilger and Julia Wallace",
  publicationDate: "March 18, 2021",
  authorName: "Jackie Young",
  authorTitle: "ASU Library",
  authorEmail: "jacqueline.young@asu.edu",
  authorPhone: "480-727-4058",
  breadcrumbs: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Second nav item",
      url: "/events",
    },
    {
      title: "Current page",
      url: "/events/current-article",
      active: true,
    },
  ],
  eventTime: "November 33, 2030,<br />12:00 p.m. - 1:30 p.m.",
  eventLocation:
    "Vault Gallery, Downtown Phoenix campus Library<br />411 N Central Ave, Phoenix AZ 85004",
  registrationUrl: "https://www.aventri.com/",
  zoomUrl: "https://zoom.com",
  calendarUrl: "#",
  body: "<p>After 34 years in the game of basketball, Clarisse Machanguana retired. Her eponymous philanthropic foundation remains her only connection to the sport, although the effect of the global game has left imprints in many aspects of her life.</p><p>Playing basketball took her to Portugal and then the U.S., where she attended Old Dominion University in Virginia to study criminal justice. When she realized that sports could be a microcosm of life and values, she decided to create a way to coach sports while teaching life skills in her home country of Mozambique. She started the <a href='http://machanguanafoundation.rf.gd/'>Clarisse Machanguana Foundation</a> in 2014 with the goal of empowering Mozambican youth through health, education and sports programs.</p><p>Now she’s taking her leadership game to the next level at ASU’s Thunderbird School of Global Management, earning her Master of Global Management degree with a nonprofit management concentration. Machanguana is honing her skills as a global professional in and out of the classroom to propel her foundation even further.</p><p>Here she reflects on the experiences that brought her to Thunderbird and ASU.</p><p><strong>Question: Why basketball?</strong></p><p><strong>Answer:</strong> I started at age 6, and because it was popular in my area and I was tall — now 6-feet-5-inches tall, to be exact — people kept telling me I should play. Basketball took me everywhere. I had a scholarship to play in Portugal and the U.S., and later on in Spain, France, Brazil, South Korea and Italy. Basketball became a passport and a school for me, and a source of amazing friendships. I played from age 6 to 40. My foundation now partners with the Department of Education. We collaborate with teachers and teach them to coach life skills and basketball.</p><p>I advocate social causes that are challenging for youth and transform them into opportunities, giving them tools to lift themselves out of the poverty they see. They use the skills like respecting your opponent and perseverance that can be applied in life as well as sports. When you wake up and all you see is poverty, you start to believe that mindset of limitations and scarcity. We give young people something else to believe in, a vision of a better life.</p>",
};
Event.parameters = {
  docs: {
    description: {
      story: `
        <Article
          articleUrl="https://example.com"
          authorEmail="jacqueline.young@asu.edu"
          authorName="Jackie Young"
          authorPhone="480-727-4058"
          authorTitle="ASU Library"
          body="<p>Body content</p>"
          calendarUrl="#"
          eventLocation="Vault Gallery, Downtown Phoenix campus Library<br />411 N Central Ave, Phoenix AZ 85004"
          eventTime="November 33, 2030,<br />12:00 p.m. - 1:30 p.m."
          publicationDate="March 18, 2021"
          registrationUrl="https://www.aventri.com/"
          title="ASU Book Group: 'There's No Crying in Newsrooms' by Kristin Grady Gilger and Julia Wallace"
          type="event"
          zoomUrl="https://zoom.com"
        />`,
    },
  },
};
