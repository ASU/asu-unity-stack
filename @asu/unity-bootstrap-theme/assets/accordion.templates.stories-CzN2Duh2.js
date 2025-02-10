import{j as a}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{d as u}from"./Layout-Bte-rkYZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";const y={title:"Atoms/Accordions/Templates",decorators:[u]},i=({accordionID:n="",linkID:r="",bodyID:d=""})=>a.jsx("div",{className:"accordion",children:a.jsxs("div",{className:"accordion-item mt-3",children:[a.jsx("div",{className:"accordion-header",children:a.jsx("h3",{children:a.jsxs("button",{id:`${r}`,"data-bs-toggle":"collapse",className:"collapsed",href:d?`#${d}`:"",role:"button","aria-expanded":"false","aria-controls":`${d}`,"data-ga":"This card unfolds","data-ga-name":"onclick","data-ga-event":"collapse","data-ga-type":"click","data-ga-region":"main content","data-ga-section":"default",children:["This card unfolds.",a.jsx("span",{className:"fas fa-chevron-up"})]})})}),a.jsx("div",{id:`${d}`,className:"collapse","aria-labelledby":`${r}`,"data-bs-parent":n?`#${n}`:"",children:a.jsxs("div",{className:"accordion-body",children:[a.jsx("h4",{children:"This is a quaternary headline"}),a.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"}),a.jsx("h5",{children:"This is a level five headline. There's a fancy word for that too."}),a.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"}),a.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"})]})})]})}),o=i.bind({});o.args={linkID:"card",bodyID:"cardBody"};const e=()=>a.jsxs("div",{className:"accordion",id:"accordionExample",children:[a.jsx(i,{accordionID:"accordionExample",linkID:"cardOne",bodyID:"cardBodyOne"}),a.jsx(i,{accordionID:"accordionExample",linkID:"cardTwo",bodyID:"cardBodyTwo"}),a.jsx(i,{accordionID:"accordionExample",linkID:"cardThree",bodyID:"cardBodyThree"})]});e.parameters={controls:{disable:!0}};e.__docgenInfo={description:"",methods:[],displayName:"Accordion"};var s,c,t;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`({
  accordionID = "",
  linkID = "",
  bodyID = ""
}) => <div className="accordion">
    <div className="accordion-item mt-3">
      <div className="accordion-header">
        <h3>
          <button id={\`\${linkID}\`} data-bs-toggle="collapse" className="collapsed" href={bodyID ? \`#\${bodyID}\` : ""} role="button" aria-expanded="false" aria-controls={\`\${bodyID}\`} data-ga="This card unfolds" data-ga-name="onclick" data-ga-event="collapse" data-ga-type="click" data-ga-region="main content" data-ga-section="default">
            This card unfolds.
            <span className="fas fa-chevron-up"></span>
          </button>
        </h3>
      </div>
      <div id={\`\${bodyID}\`} className="collapse" aria-labelledby={\`\${linkID}\`} data-bs-parent={accordionID ? \`#\${accordionID}\` : ""}>
        <div className="accordion-body">
          <h4>This is a quaternary headline</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <h5>
            This is a level five headline. There's a fancy word for that too.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
    </div>
  </div>`,...(t=(c=o.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var l,m,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => <div className="accordion" id="accordionExample">
    <Template accordionID="accordionExample" linkID="cardOne" bodyID="cardBodyOne" />
    <Template accordionID="accordionExample" linkID="cardTwo" bodyID="cardBodyTwo" />
    <Template accordionID="accordionExample" linkID="cardThree" bodyID="cardBodyThree" />
  </div>`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const D=["FoldableCard","Accordion"];export{e as Accordion,o as FoldableCard,D as __namedExportsOrder,y as default};
