import{j as c}from"./jsx-runtime-Dmx1myWC.js";import"./index-mEo-t6td.js";import{B as C}from"./ButtonIconOnly-CFEzPWY0.js";import"./_commonjsHelpers-B3tUAs5q.js";import"./index-Cqy-YfF9.js";import"./shared-prop-types-DfvEmnmL.js";import"./GaEventWrapper-QVQjJ73P.js";import"./googleAnalytics-CP87WOuA.js";const T={title:"Components/ButtonIconOnly",component:C,parameters:{docs:{description:{component:`The ButtonIconOnly component can be used to generate UDS-compliant \`<button>\` DOM
        elements.

## Usage

The ButtonIconOnly component will output \`<button>\` tags. you must provide an event handler function
for the \`onClick\` prop.

View component examples and source code below.
        `}}}},s=r=>{r.preventDefault()},a=r=>c.jsx("div",{className:"container-fluid",children:c.jsx("div",{className:"row",children:c.jsx("div",{className:"col col-sm-12 p-3",children:c.jsx(C,{...r})})})}),n=a.bind({});n.args={color:"white",icon:["fas","times"],onClick:s};const e=a.bind({});e.args={color:"white",icon:["fas","times"],onClick:s};e.parameters={docs:{description:{story:`
    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color: "white"
      icon: ["fas", "times"]
      onClick: {handleClick}
    />Default Button</Button>`},source:{code:`
      const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  color: "white"
  icon: ["fas", "times"]
  onClick: {handleClick}
/>Default Button</Button>`}}};const o=a.bind({});o.args={color:"white",icon:["fas","chevron-right"],onClick:s,size:"large"};o.parameters={docs:{description:{story:`
    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color: "white"
      icon: ["fas", "chevron-right"]
      onClick: {handleClick}
      size: "large"
    />Next Button</Button>`},source:{code:`
      const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  color: "white"
  icon: ["fas", "chevron-right"]
  onClick: {handleClick}
  size: "large"
/>Next Button</Button>`}}};const t=a.bind({});t.args={color:"white",icon:["fas","chevron-left"],onClick:s,size:"large"};t.parameters={docs:{description:{story:`
    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color: "white"
      icon: ["fas", "chevron-left"]
      onClick: {handleClick}
      size: "large"
    />Prev Button</Button>`},source:{code:`
      const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  color: "white"
  icon: ["fas", "chevron-left"]
  onClick: {handleClick}
  size: "large"
/>Prev Button</Button>`}}};var i,l,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => <div className="container-fluid">
    <div className="row">
      <div className="col col-sm-12 p-3">
        <ButtonIconOnly {...args} />
      </div>
    </div>
  </div>`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,m,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div className="container-fluid">
    <div className="row">
      <div className="col col-sm-12 p-3">
        <ButtonIconOnly {...args} />
      </div>
    </div>
  </div>`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,h,B;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => <div className="container-fluid">
    <div className="row">
      <div className="col col-sm-12 p-3">
        <ButtonIconOnly {...args} />
      </div>
    </div>
  </div>`,...(B=(h=o.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var f,k,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => <div className="container-fluid">
    <div className="row">
      <div className="col col-sm-12 p-3">
        <ButtonIconOnly {...args} />
      </div>
    </div>
  </div>`,...(g=(k=t.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const j=["DefaultButton","CloseButton","NextButton","PrevButton"];export{e as CloseButton,n as DefaultButton,o as NextButton,t as PrevButton,j as __namedExportsOrder,T as default};
