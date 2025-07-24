import{j as e}from"./jsx-runtime-Dmx1myWC.js";import"./index-mEo-t6td.js";import{B as S,L as D}from"./index-Csu1HdPQ.js";import{B as c}from"./Button-s9UQ13S_.js";import"./_commonjsHelpers-B3tUAs5q.js";import"./index-C_YFnKFG.js";import"./index-CeGEtbAI.js";import"./index-DbSsuYgj.js";import"./Layout-DbH9YcL9.js";import"./shared-prop-types-utQzYEaw.js";import"./GaEventWrapper-4gADGBRO.js";const M={title:"Components/Button",component:c,parameters:{docs:{description:{component:"The Button component can be used to generate UDS-compliant `<button>` DOM elements and Button-styled `<a>` links. If you are working with third-party React link components, such as react-router's Link, this Button component will accept those components and and style them in UDS.\n\n## Usage\n\nBy default, the Button component will output `<button>` or `<a>` tags, based on whether a URL string is provided via the `href` prop or an event handler function is provided via the `onClick` prop. The `href` prop will cause the Button component to render as a button-styled `<a>` link. Without the `href` prop, the Button will render as a `<button>`.\n\nTo use the React Router Link in the Button component, pass an instance of `<Link>` to the `element` prop and any additional props required by Link, e.g. `to` prop required for the destination URL. The rendered link will leverage all features of React Router, and be visually styled for UDS.\n\nView component examples and source code below.\n        "}}}},u=()=>{alert("The button was clicked.")},l=i=>e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"col col-sm-12 p-3",children:e.jsx(c,{...i})})}),t=l.bind({});t.args={label:"Default Button",onClick:u};t.parameters={docs:{source:{code:`const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  onClick: handleClick,
/>Default Button</Button>`}}};const o=l.bind({});o.args={color:"gold",label:"Small Gold Button",onClick:u,size:"small"};o.parameters={docs:{description:{story:`When the Button component is provided with an onClick handler function, the Button is rendered as a \`<button type="button">\`.

    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color="gold"
      onClick: handleClick,
      size: "small",
    />Small Gold Button</Button>`},source:{code:`const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  color="gold"
  onClick: handleClick,
  size: "small",
/>Small Gold Button</Button>`}}};const n=l.bind({});n.args={color:"gold",icon:["fas","rocket"],label:"Icon Button",onClick:u};n.parameters={docs:{description:{story:`To include a Font Awesome icon in the button label, import the desired React icon and pass it to the Button component via the \`icon\` prop.:

    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color="gold"
      icon: ["fas", "rocket"],
      onClick: handleClick,
    >Icon Button</Button>`},source:{code:`
      const handleClick = e => {
        e.preventDefault();
        alert("The button was clicked.");
      };

      <Button
        color="gold"
        icon: ["fas", "rocket"],
        onClick: handleClick,
      >Icon Button</Button>`}}};const r=l.bind({});r.args={color:"maroon",href:"/#example-link",label:"Link Button"};r.parameters={docs:{description:{story:`To render a button-style link, \`<a>\`-tag, use the \`href\` prop to set the destination url for this link. When a button is primarily intended for page navigation, this is the recommended solution for accessibility.

    <Button
      color="maroon"
      href="/#example-link"
    />Link Button</Button>`},source:{code:`<Button
  color="maroon"
  href="/#example-link"
/>Link Button</Button>`}}};const s=l.bind({});s.args={color:"maroon",href:"/#example-link",label:"Link Button",target:"_blank"};const j=i=>e.jsx(S,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"col col-sm-12 p-3",children:e.jsx(c,{...i})})})}),a=j.bind({});a.args={color:"gold",element:D,label:"React Router Link",to:"/#example-link"};a.parameters={docs:{description:{story:`To use the React Router Link in the Button component, pass an instance of \`<Link>\` to the \`element\` prop and any additional props required by Link, e.g. the \`to\` prop required for the destination URL. The rendered link will leverage all features of React Router, and be visually styled for UDS.

    import { BrowserRouter as Router, Link } from "react-router-dom";

    <Router>
      <...>
        <Button
          color="gold"
          element={Link}
          to="/#example-link"
          label="React Router Link"
        />
      </...>
    </Router>`},source:{code:`import { BrowserRouter as Router, Link } from "react-router-dom";

<Router>
  <...>
    <Button
      color="gold"
      element={Link}
      to="/#example-link"
      label="React Router Link"
    />
  </...>
</Router>`}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>;
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,k,B;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>;
}`,...(B=(k=o.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var f,g,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>;
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,R,L;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>;
}`,...(L=(R=r.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var w,y,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>;
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var x,T,N;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => <Router>
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>
  </Router>`,...(N=(T=a.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const V=["DefaultButton","SmallGoldButton","IconButton","LinkButton","TargetBlankButton","ReactRouterLinkButton"];export{t as DefaultButton,n as IconButton,r as LinkButton,a as ReactRouterLinkButton,o as SmallGoldButton,s as TargetBlankButton,V as __namedExportsOrder,M as default};
