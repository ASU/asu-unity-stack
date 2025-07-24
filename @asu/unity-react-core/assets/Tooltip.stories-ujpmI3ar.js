import{j as e}from"./jsx-runtime-Dmx1myWC.js";import{T as s}from"./Tooltip-DiA7Yo8z.js";import{B as h}from"./ButtonIconOnly-DD6gCCx0.js";import"./index-mEo-t6td.js";import"./_commonjsHelpers-B3tUAs5q.js";import"./Layout-DbH9YcL9.js";import"./index-DbSsuYgj.js";import"./shared-prop-types-utQzYEaw.js";import"./GaEventWrapper-4gADGBRO.js";const P={title:"Components/Tooltip",component:s,parameters:{docs:{description:{component:`TODO
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role
Keyboard interactions [Escape] should close the tooltip

alignment of tooltip assumes the trigger is icon button

probably limit the triggers to something with a visual inidicator (like button or link)`}}}},i={title:"Header",content:"Content"},T=n=>e.jsx(s,{...n}),t={render:T.bind({}),args:{...i,triggerElement:e.jsx(h,{icon:["fas","info"]})}},r={render:n=>e.jsxs("div",{children:["This is a ",e.jsx(s,{...n})," sentence."]}),args:{...i,triggerElement:e.jsx("a",{href:"javascript:void(0);",children:"Tooltiptrigger"})}},o={render:T.bind({}),args:{...i,triggerElement:e.jsx("span",{children:"Tooltiptrigger"})}};var a,p,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: tooltipTemplate.bind({}),
  args: {
    ...defaultProps,
    triggerElement: <ButtonIconOnly icon={["fas", "info"]} />
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div>This is a <Tooltip {...args} /> sentence.</div>,
  args: {
    ...defaultProps,
    triggerElement: <a href="javascript:void(0);">Tooltiptrigger</a>
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,u,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: tooltipTemplate.bind({}),
  args: {
    ...defaultProps,
    triggerElement: <span>Tooltiptrigger</span>
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const S=["Icon","link","text"];export{t as Icon,S as __namedExportsOrder,P as default,r as link,o as text};
