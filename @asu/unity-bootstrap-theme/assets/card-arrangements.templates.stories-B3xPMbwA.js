import{j as e}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{d as g}from"./Layout-Bte-rkYZ.js";import{cardNoTemplates as v}from"./cards.templates.stories-6KcY21pW.js";import{h as b}from"./cardVariations-KSg27se7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./cards-image-BPXBy_xd.js";const D={title:"Organisms/Content Sections/Card Arrangements/Templates",decorators:[g],argTypes:{numCards:{name:"Columns",control:{type:"range",min:1,max:6,step:1}},vertical:{name:"Vertical",control:{type:"boolean"}},autoArrangement:{name:"Auto Arrangement",control:{type:"boolean"}},cardType:{name:"Card Type",options:["default","degree","event","story"],mapping:{Default:""},control:{type:"radio"}}},args:{cardType:"story",autoArrangement:!1,vertical:!1,numCards:2}},a=({cardType:s,autoArrangement:t,vertical:n,numCards:i})=>{const o=Array.from(Array(i)).map(()=>v({cardHeader:"image",event:!1,link:!0,tags:!0,numButtons:1}));return e.jsxs("div",{className:`uds-card-arrangement ${n?"uds-card-arrangement-vertical":""}`,children:[e.jsxs("div",{className:"uds-card-arrangement-content-container",children:[e.jsx("h2",{children:"Lorem ipsum dolor sit amet"}),n&&e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),e.jsx("button",{className:"btn btn-dark",children:"Default button"})]}),e.jsx("div",{className:`uds-card-arrangement-card-container  ${t?"auto-arrangement":""}`,children:o})]})};a.args={numCards:2};a.argTypes={cardType:{table:{disable:!0}}};const r=({cardType:s,autoArrangement:t,vertical:n,numCards:i})=>{const o=Array.from(Array(i)).map(x=>b(s));return e.jsxs("div",{className:`uds-card-arrangement ${n?"uds-card-arrangement-vertical":""}`,children:[e.jsxs("div",{className:"uds-card-arrangement-content-container",children:[e.jsx("h2",{children:"Lorem ipsum dolor sit amet"}),n&&e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),e.jsx("button",{className:"btn btn-dark",children:"Default button"})]}),e.jsx("div",{className:`uds-card-arrangement-card-container  ${t?"auto-arrangement":""}`,children:o})]})};r.args={numCards:2};a.__docgenInfo={description:"",methods:[],displayName:"CardArrangement"};r.__docgenInfo={description:"",methods:[],displayName:"CardArrangementHorizontal"};var u,d,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`({
  cardType,
  autoArrangement,
  vertical,
  numCards
}) => {
  const cards = Array.from(Array(numCards)).map(() => {
    return Card({
      cardHeader: "image",
      event: false,
      link: true,
      tags: true,
      numButtons: 1
    });
  });
  return <div className={\`uds-card-arrangement \${vertical ? "uds-card-arrangement-vertical" : ""}\`}>
        <div className="uds-card-arrangement-content-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          {vertical && <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>}
          <button className="btn btn-dark">Default button</button>
        </div>
        <div className={\`uds-card-arrangement-card-container  \${autoArrangement ? "auto-arrangement" : ""}\`}>
          {cards}
        </div>
      </div>;
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,c,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`({
  cardType,
  autoArrangement,
  vertical,
  numCards
}) => {
  const cards = Array.from(Array(numCards)).map(x => {
    return horizontalCard(cardType);
  });
  return <div className={\`uds-card-arrangement \${vertical ? "uds-card-arrangement-vertical" : ""}\`}>
        <div className="uds-card-arrangement-content-container">
          <h2>Lorem ipsum dolor sit amet</h2>
          {vertical && <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>}
          <button className="btn btn-dark">Default button</button>
        </div>
        <div className={\`uds-card-arrangement-card-container  \${autoArrangement ? "auto-arrangement" : ""}\`}>
      {cards}
        </div>
      </div>;
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const L=["CardArrangement","CardArrangementHorizontal"];export{a as CardArrangement,r as CardArrangementHorizontal,L as __namedExportsOrder,D as default};
