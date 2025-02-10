import{j as a}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{d}from"./Layout-Bte-rkYZ.js";import{i}from"./modals-dsNdOPuk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";const g={title:"Atoms/Modals/Templates",decorators:[d],parameters:{initFunc:{disable:!1,code:i},header:{forced:!0},footer:{forced:!0}},args:{open:!0},argTypes:{open:{name:"Open",control:{type:"boolean"}}}},e=({open:o})=>a.jsxs(a.Fragment,{children:[a.jsx("p",{style:{minHeight:"30vh"},children:o?"Modal is open on page load":"Modal was not triggered to open"}),a.jsx("div",{id:"uds-modal",className:`uds-modal ${o?"open":""}`,children:a.jsxs("div",{className:"uds-modal-container",children:[a.jsxs("button",{id:"closeModalButton",className:"uds-modal-close-btn","data-ga-name":"onclick","data-ga-event":"modal","data-ga-action":"close","data-ga-type":"click","data-ga-region":"main content","data-ga-section":"modal name/title","data-ga":"close cross",children:[a.jsx("i",{className:"fas fa-times"}),a.jsx("span",{className:"visually-hidden",children:"Close"})]}),a.jsx("h1",{children:"Content"}),a.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididuntåç ut labore et dolore magna aliqua eiusmod tempo."}),a.jsx("button",{className:"btn btn-primary",children:"button"})]})})]});e.__docgenInfo={description:"",methods:[],displayName:"ModalComponent"};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  open
}) => <>
      <p style={{
    minHeight: "30vh"
  }}>
        {open ? "Modal is open on page load" : "Modal was not triggered to open"}
      </p>
      <div id="uds-modal" className={\`uds-modal \${open ? "open" : ""}\`}>
        <div className="uds-modal-container">
          <button id="closeModalButton" className="uds-modal-close-btn" data-ga-name="onclick" data-ga-event="modal" data-ga-action="close" data-ga-type="click" data-ga-region="main content" data-ga-section="modal name/title" data-ga="close cross">
            <i className="fas fa-times"></i>
            <span className="visually-hidden">Close</span>
          </button>
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididuntåç ut labore et dolore magna aliqua eiusmod tempo.
          </p>
          <button className="btn btn-primary">button</button>
        </div>
      </div>
    </>`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const h=["ModalComponent"];export{e as ModalComponent,h as __namedExportsOrder,g as default};
