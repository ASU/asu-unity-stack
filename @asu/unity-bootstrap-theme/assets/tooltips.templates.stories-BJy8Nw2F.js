import{j as s}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{d as r}from"./Layout-Bte-rkYZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";const m={title:"Atoms/Tooltips/Templates",decorators:[r],args:{color:"Gray"},argTypes:{color:{name:"Color",options:["White","Base Gray","Gray","Dark"],mapping:{White:"white","Base Gray":"base-gray",Gray:"gray",Dark:"dark"},control:{type:"radio"}}}},a=({color:o})=>s.jsx("div",{className:`uds-tooltip-bg-${o}`,children:s.jsxs("div",{className:"uds-tooltip-container",children:[s.jsxs("button",{tabIndex:"0",className:`uds-tooltip uds-tooltip-${o==="base-gray"?"gray-1":o}`,"aria-describedby":"tooltip-desc-1",children:[s.jsxs("span",{className:"fa-stack",children:[s.jsx("i",{className:"fas fa-circle fa-stack-2x"}),s.jsx("i",{className:"fas fa-info fa-stack-1x"})]}),s.jsx("span",{className:"uds-tooltip-visually-hidden",children:"Notifications"})]}),s.jsxs("div",{role:"tooltip",className:"uds-tooltip-description",id:"tooltip-desc-1",children:[s.jsx("span",{className:"uds-tooltip-heading",children:"Lorem ipsum dolor sit amet"}),"Other content"]})]})});a.__docgenInfo={description:"",methods:[],displayName:"Tooltips"};var t,i,e;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`({
  color
}) => {
  return <div className={\`uds-tooltip-bg-\${color}\`}>
      <div className="uds-tooltip-container">
        <button tabIndex="0" className={\`uds-tooltip uds-tooltip-\${color === "base-gray" ? "gray-1" : color}\`} aria-describedby="tooltip-desc-1">
          <span className="fa-stack">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-info fa-stack-1x"></i>
          </span>
          <span className="uds-tooltip-visually-hidden">Notifications</span>
        </button>
        <div role="tooltip" className="uds-tooltip-description" id="tooltip-desc-1">
          <span className="uds-tooltip-heading">Lorem ipsum dolor sit amet</span>
          Other content
        </div>
      </div>
    </div>;
}`,...(e=(i=a.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const u=["Tooltips"];export{a as Tooltips,u as __namedExportsOrder,m as default};
