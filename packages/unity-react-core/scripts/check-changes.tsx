import React from "react";
import { AnchorMenu } from "../src/components/AnchorMenu/AnchorMenu";
import { Article } from "../src/components/Article/Article.jsx";
import { Accordion } from "../src/components/Accordion/Accordion.jsx";
import { Card } from "../src/components/Card/Card.jsx";
import { Pagination } from "../src/components/Pagination/Pagination.jsx"
import { getBootstrapHTML } from '../src/components/GaEventWrapper/useBaseSpecificFramework.js';

const fs = require('fs');
const path = require('path');

// const items = [
//   {
//     text: "Title Case is Required",
//     targetIdName: "first-container",
//     icon: ["fas", "link"],
//   },
//   { text: "Second Container", targetIdName: "second-container" },
//   { text: "Third Container", targetIdName: "third-container" },
//   {
//     text: "This is the Last",
//     targetIdName: "fourth-container",
//     icon: ["fas", "link"],
//   },
// ];

// const defaultArgs = {
//   type: "news",
//   articleUrl: "https://example.com",
//   headerImageUrl: "../src/componenets/Article/screenshot.png",
//   title:
//     "Clarisse Machanguana takes her skill set to the next level at ASU Thunderbird",
//   publicationDate: "March 18, 2021",
//   authorName: "Jimena Garrison",
//   authorTitle: "Media Relations and Strategic Communications",
//   authorEmail: "jgarris6@asu.edu",
//   authorPhone: "480-727-4058",
//   breadcrumbs: [
//     {
//       title: "Home",
//       url: "/",
//     },
//     {
//       title: "Second nav item",
//       url: "/events",
//     },
//     {
//       title: "Current page",
//       url: "/events/current-article",
//       active: true,
//     },
//   ],
//   body: "<p>After 34 years in the game of basketball, Clarisse Machanguana retired. Her eponymous philanthropic foundation remains her only connection to the sport, although the effect of the global game has left imprints in many aspects of her life.</p><p>Playing basketball took her to Portugal and then the U.S., where she attended Old Dominion University in Virginia to study criminal justice. When she realized that sports could be a microcosm of life and values, she decided to create a way to coach sports while teaching life skills in her home country of Mozambique. She started the <a href='http://machanguanafoundation.rf.gd/'>Clarisse Machanguana Foundation</a> in 2014 with the goal of empowering Mozambican youth through health, education and sports programs.</p><p>Now she’s taking her leadership game to the next level at ASU’s Thunderbird School of Global Management, earning her Master of Global Management degree with a nonprofit management concentration. Machanguana is honing her skills as a global professional in and out of the classroom to propel her foundation even further.</p><p>Here she reflects on the experiences that brought her to Thunderbird and ASU.</p><p><strong>Question: Why basketball?</strong></p><p><strong>Answer:</strong> I started at age 6, and because it was popular in my area and I was tall — now 6-feet-5-inches tall, to be exact — people kept telling me I should play. Basketball took me everywhere. I had a scholarship to play in Portugal and the U.S., and later on in Spain, France, Brazil, South Korea and Italy. Basketball became a passport and a school for me, and a source of amazing friendships. I played from age 6 to 40. My foundation now partners with the Department of Education. We collaborate with teachers and teach them to coach life skills and basketball.</p><p>I advocate social causes that are challenging for youth and transform them into opportunities, giving them tools to lift themselves out of the poverty they see. They use the skills like respecting your opponent and perseverance that can be applied in life as well as sports. When you wake up and all you see is poverty, you start to believe that mindset of limitations and scarcity. We give young people something else to believe in, a vision of a better life.</p>",
// };

//  const defaultArgs = {
//   cards: [
//     {
//       content: {
//         header: "Accordion Card 1",
//         body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
//       },
//     },
//     {
//       content: {
//         header: "Accordion Card 2",
//         body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
//       },
//     },
//     {
//       content: {
//         header: "Accordion Card 3, opened card",
//         body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
//       },
//     },
//   ],
//   openedCard: 3,
// };

// const defaultArgs = {
//   type: "default",
//   horizontal: false,
//   image: img1,
//   imageAltText: "An example image",
//   title: "Default title",
//   body: "<span style='font-weight: bold;'>(Bold!) Body copy goes here.</span> Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
//   buttons: [
//     {
//       color: "maroon",
//       size: "default",
//       label: "CTA button",
//     },
//     {
//       color: "gold",
//       size: "small",
//       label: "Link Button",
//       href: "/",
//       target: "_top",
//     },
//   ],
//   tags: [
//     { color: "gray", label: "tag1", href: "/#example-link" },
//     { color: "gray", label: "tag2", href: "/#example-link" },
//     { color: "gray", label: "tag3", href: "/#example-link" },
//   ],
//   showBorders: true,
// };

const defaultArgs = {
  type: "default",
  background: "white",
  totalPages: 4,
  onChange: ()=>null
};



//const html = getBootstrapHTML(<AnchorMenu items={items} firstElementId={"first-container"} />);
//const html = getBootstrapHTML(<Article {...defaultArgs}/>)
//const html = getBootstrapHTML(<Accordion {...defaultArgs}/>)
//const html = getBootstrapHTML(<Card {...defaultArgs}/>)

function convertToHTML(OLD_DATE){const html = getBootstrapHTML(<Pagination {...defaultArgs}/>)
console.log(html);

// const curr = new Date();
// const month = String(curr.getMonth()+1);
// const day = String(curr.getDate());
// const year = curr.getFullYear();

let componentName = ' ';

if (html.includes('pagination')) {
  componentName = 'Pagination';
} else if (html.includes('accordion')) {
  componentName = 'Accordion';
} else if (html.includes('article')) {
  componentName = 'Article';
} else if (html.includes('uds-anchor-menu')) {
  componentName = 'AnchorMenu';
} else if (html.includes('uds-card')) {
  componentName = 'Card';
}

const fileName = `${componentName}-${OLD_DATE}.html`;
const filePath = path.join(__dirname, fileName);

fs.writeFileSync(filePath, html, 'utf8');}
const args = process.argv.slice(2);
console.log(args)
export {convertToHTML}
