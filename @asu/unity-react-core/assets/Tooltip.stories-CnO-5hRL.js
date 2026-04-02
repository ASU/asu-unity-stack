import{u as s,j as e,b as f}from"./iframe-ga4iPdfS.js";import"./preload-helper-Dp1pzeXC.js";const j={title:"Components/Tooltip",component:s,parameters:{docs:{description:{component:`TODO
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role
Keyboard interactions [Escape] should close the tooltip

alignment of tooltip assumes the trigger is icon button

probably limit the triggers to something with a visual inidicator (like button or link)`}}}},i={title:"Header",content:"Content"},T=n=>e.jsx(s,{...n}),t={render:T.bind({}),args:{...i,triggerElement:e.jsx(f,{icon:["fas","info"]})}},r={render:n=>e.jsxs("div",{children:["This is a ",e.jsx(s,{...n})," sentence."]}),args:{...i,triggerElement:e.jsx("a",{href:"javascript:void(0);",children:"Tooltiptrigger"})}},o={render:T.bind({}),args:{...i,triggerElement:e.jsx("span",{children:"Tooltiptrigger"})}};var a,l,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: tooltipTemplate.bind({}),
  args: {
    ...defaultProps,
    triggerElement: <ButtonIconOnly icon={["fas", "info"]} />
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div>This is a <Tooltip {...args} /> sentence.</div>,
  args: {
    ...defaultProps,
    triggerElement: <a href="javascript:void(0);">Tooltiptrigger</a>
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,u,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: tooltipTemplate.bind({}),
  args: {
    ...defaultProps,
    triggerElement: <span>Tooltiptrigger</span>
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const v=["Icon","link","text"];export{t as Icon,v as __namedExportsOrder,j as default,r as link,o as text};
