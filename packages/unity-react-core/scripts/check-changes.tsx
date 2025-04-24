import React from "react";
import { AnchorMenu } from "../src/components/AnchorMenu/AnchorMenu";
import { getBootstrapHTML } from '../src/components/GaEventWrapper/useBaseSpecificFramework.js';

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



const html = getBootstrapHTML(<AnchorMenu items={items} firstElementId={"first-container"} />);
console.log(html);
