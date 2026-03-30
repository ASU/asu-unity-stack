import{j as n,Z as R,$ as o,a0 as v,a1 as w}from"./iframe-CF84AQVO.js";import"./preload-helper-Dp1pzeXC.js";const r="Lorem ipsum dolor sit amet, adipiscing elit.",e={content:r},t={content:["Title",r]},A=(s,m)=>n.jsx("div",{className:"container",children:n.jsx("div",{className:"row",children:s(m.args,m)})}),k={title:"Components/List",component:R,args:{multiplier:1},argTypes:{multiplier:{name:"Multiplier",description:"Storybook control - Number of times to repeat the items.",control:{type:"number",min:1,max:111,step:1}}},decorators:[A]},a=s=>{const m=s.multiplier>0?s.multiplier:1;return n.jsx(R,{...s,items:new Array(m).fill(s.items).flat()})},i={render:a.bind({}),args:{listType:o.UNORDERED,items:[e,e,{...e,nestedItems:[e,e,{...e,nestedItems:[e,e,{...e,nestedItems:[e,e,e]},e]},e]},e]}},c={render:a.bind({}),args:{...i.args,listType:o.ORDERED}},d={render:a.bind({}),args:{listType:o.ICON,items:[{content:r,icon:["fas","rocket"]},{content:r,icon:["fas","bus"]},{content:r,icon:["fas","car"]},{content:n.jsxs(n.Fragment,{children:['We hide icons from assistive technology in these examples, but whether to hide using aria-hidden="true" or not should be determined by the developer based on whether the icons are intended as decoration only or are intended to convey meaning. See ',n.jsx("a",{href:"https://fontawesome.com/v4.7.0/accessibility/",children:"Font Awesome Accessibility"})," for guidelines."]}),icon:["fas","bicycle"]}]}},l={render:a.bind({}),args:{listType:o.STEP,backgroundColor:w.MEDIUM,listItemStyleColor:v.SECONDARY,items:[t,t,t,t]}},p={render:a.bind({}),args:{listType:o.DISPLAY,items:[t,t,t,t,t,t]}};var u,y,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.UNORDERED,
    items: [item, item, {
      ...item,
      nestedItems: [item, item, {
        ...item,
        nestedItems: [item, item, {
          ...item,
          nestedItems: [item, item, item]
        }, item]
      }, item]
    }, item]
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var b,g,L;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  args: {
    ...UnorderedList.args,
    listType: ListComponentType.ORDERED
  }
}`,...(L=(g=c.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var T,f,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.ICON,
    items: [{
      content: lorem,
      icon: ["fas", "rocket"]
    }, {
      content: lorem,
      icon: ["fas", "bus"]
    }, {
      content: lorem,
      icon: ["fas", "car"]
    }, {
      content: <>We hide icons from assistive technology in these examples, but whether to hide using aria-hidden="true" or not should be determined by the developer based on whether the icons are intended as decoration only or are intended to convey meaning. See <a href="https://fontawesome.com/v4.7.0/accessibility/">Font Awesome Accessibility</a> for guidelines.</>,
      icon: ["fas", "bicycle"]
    }]
  }
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var C,I,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.STEP,
    backgroundColor: ListBackgroundColor.MEDIUM,
    listItemStyleColor: ItemListStyleColor.SECONDARY,
    items: [item2, item2, item2, item2]
  }
}`,...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var E,x,O;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.DISPLAY,
    items: [item2, item2, item2, item2, item2, item2]
  }
}`,...(O=(x=p.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};const U=["UnorderedList","OrderedList","IconList","StepList","DisplayList"];export{p as DisplayList,d as IconList,c as OrderedList,l as StepList,i as UnorderedList,U as __namedExportsOrder,k as default};
