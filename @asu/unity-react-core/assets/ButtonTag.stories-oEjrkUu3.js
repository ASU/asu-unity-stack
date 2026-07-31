import{h as r,a8 as e}from"./iframe-D4eNE8vC.js";import{B as T,L as v}from"./index-BwaYY4ND.js";import"./preload-helper-Dp1pzeXC.js";const x={title:"Components/ButtonTag",component:r,parameters:{docs:{description:{component:"The ButtonTag component can be used to generate UDS-compliant `<button>`\n        and button-styled `<a>` links. If you are working with third-party React link components,\n        such as react-router's Link, this ButtonTag component will accept those components and style\n        them in UDS.\n\n## Usage\n\nBy default, the ButtonTag component will output `<button>` or `<a>` tags, based on whether a URL\nstring is provided via the `href` prop or an event handler function is provided via the `onClick`\nprop. The `href` prop will cause the ButtonTag component to render as a button-styled `<a>` link.\nWithout the `href` prop, the ButtonTag will render as a `<button>`.\n\nTo use the React Router Link in the ButtonTag component, pass an instance of `<Link>` to the `element`\nprop and any additional props required by Link, e.g. `to` prop required for the destination URL.\nThe rendered link will leverage all features of React Router, and be visually styled for UDS.\n\nView component examples and source code below.\n        "}}}},f=t=>{t.preventDefault()},h=t=>e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"col col-sm-12 p-3",children:e.jsx(r,{...t})})}),a=h.bind({});a.args={label:"Tag Button",color:"gray",onClick:f};const o=h.bind({});o.args={label:"Tag Link",color:"white",href:"/#example-link"};const k=t=>e.jsx(T,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"col col-sm-12 p-3",children:e.jsx(r,{...t})})})}),n=k.bind({});n.args={color:"white",label:"React Router Link",element:v,to:"/#example-link"};var s,i,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <ButtonTag {...args} />
      </div>
    </div>;
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <ButtonTag {...args} />
      </div>
    </div>;
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,m,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => <Router>
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <ButtonTag {...args} />
      </div>
    </div>
  </Router>`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const L=["TagButton","TagLink","ReactRouterLinkTag"];export{n as ReactRouterLinkTag,a as TagButton,o as TagLink,L as __namedExportsOrder,x as default};
