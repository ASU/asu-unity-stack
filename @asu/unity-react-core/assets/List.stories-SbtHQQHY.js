import{j as s}from"./jsx-runtime-Dmx1myWC.js";import{L as v,a as i,I as x,b as w}from"./List-BLJguhki.js";import"./index-mEo-t6td.js";import"./_commonjsHelpers-B3tUAs5q.js";import"./index-DbSsuYgj.js";const r="Lorem ipsum dolor sit amet, adipiscing elit.",e={content:r},t={content:["Title",r]},A=(l,p)=>s.jsx("div",{className:"container",children:s.jsx("div",{className:"row",children:l(p.args,p)})}),P={title:"Components/List",component:v,decorators:[A]},o=l=>s.jsx(v,{...l}),n={render:o.bind({}),args:{listType:i.UNORDERED,items:[e,e,{...e,nestedItems:[e,e,{...e,nestedItems:[e,e,{...e,nestedItems:[e,e,e]},e]},e]},e]}},a={render:o.bind({}),args:{...n.args,listType:i.ORDERED}},m={render:o.bind({}),args:{listType:i.ICON,items:[{content:r,icon:["fas","rocket"]},{content:r,icon:["fas","bus"]},{content:r,icon:["fas","car"]},{content:s.jsxs(s.Fragment,{children:['We hide icons from assistive technology in these examples, but whether to hide using aria-hidden="true" or not should be determined by the developer based on whether the icons are intended as decoration only or are intended to convey meaning. See ',s.jsx("a",{href:"https://fontawesome.com/v4.7.0/accessibility/",children:"Font Awesome Accessibility"})," for guidelines."]}),icon:["fas","bicycle"]}]}},c={render:o.bind({}),args:{listType:i.STEP,backgroundColor:w.MEDIUM,listItemStyleColor:x.SECONDARY,items:[t,t,t,t]}},d={render:o.bind({}),args:{listType:i.DISPLAY,items:[t,t,t,t,t,t]}};var y,u,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,b,L;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  args: {
    ...UnorderedList.args,
    listType: ListComponentType.ORDERED
  }
}`,...(L=(b=a.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var T,f,C;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var I,S,D;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.STEP,
    backgroundColor: ListBackgroundColor.MEDIUM,
    listItemStyleColor: ItemListStyleColor.SECONDARY,
    items: [item2, item2, item2, item2]
  }
}`,...(D=(S=c.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var E,O,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: listTemplate.bind({}),
  args: {
    listType: ListComponentType.DISPLAY,
    items: [item2, item2, item2, item2, item2, item2]
  }
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Y=["UnorderedList","OrderedList","IconList","StepList","DisplayList"];export{d as DisplayList,m as IconList,a as OrderedList,c as StepList,n as UnorderedList,Y as __namedExportsOrder,P as default};
