import{E as d,a7 as s}from"./iframe-py0flEpT.js";import"./preload-helper-Dp1pzeXC.js";const k={title:"Components/SidebarMenu",component:d},c={title:"Header",links:[{href:"https://example.com",text:"Active Link",isActive:!0},{text:"Link 2 dropdown",items:[{href:"https://example.com",text:"Link 2.1",isActive:!1},{href:"https://example.com",text:"Link 2.2"}]},{text:"Link 3 Dropdown",items:[{href:"https://example.com",text:"Link 3.1"},{href:"https://example.com",text:"Link 3.2"}]},{href:"https://example.com",text:"Link 4"},{text:"Link 5 dropdown",items:[{href:"https://example.com",text:"Link 5.1"},{href:"https://example.com",text:"Link 5.2"}]}]},l=x=>s.jsx("div",{className:"row",children:s.jsx(d,{...x})}),t={render:l.bind({}),name:"Sidebar",args:{...c}},e=JSON.parse(JSON.stringify(c));e.links[0].text="Link 1";e.links[0].isActive=!1;e.links[1].items[0].isActive=!0;e.links[1].items[0].text="Active Link";const r={render:l.bind({}),args:{...e}},f=["Overview","WithNestedActivePage"];var i,n,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: sidebarMenuTemplate.bind({}),
  name: "Sidebar",
  args: {
    ...defaultProps
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var o,m,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: sidebarMenuTemplate.bind({}),
  args: {
    ...defaultProps2
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as Overview,r as WithNestedActivePage,f as __namedExportsOrder,k as default};
