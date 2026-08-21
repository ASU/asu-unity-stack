import{B as t,a8 as e}from"./iframe-CB-WtVuK.js";import{B as H,L as J}from"./index-kWB9U3P0.js";import"./preload-helper-Dp1pzeXC.js";const Y={title:"Components/Button",component:t,parameters:{docs:{description:{component:"The Button component can be used to generate UDS-compliant `<button>` DOM elements and Button-styled `<a>` links. It supports both legacy button styles and new UDS button variants.\n\n## New UDS Button Variants\n\nThe Button component now supports three modern variants via the `variant` prop:\n- **Borderless**: Text-only button that fills with color on hover\n- **Outline**: Button with border and transparent background that fills on hover\n- **Filled**: Solid background button (default when variant is used)\n\nWhen using the `variant` prop, the button size options are: `large` (default), `medium`, `small`.\n\n\n## Usage\n\nBy default, the Button component will output `<button>` or `<a>` tags, based on whether a URL string is provided via the `href` prop or an event handler function is provided via the `onClick` prop. The `href` prop will cause the Button component to render as a button-styled `<a>` link. Without the `href` prop, the Button will render as a `<button>`.\n\nTo use the React Router Link in the Button component, pass an instance of `<Link>` to the `element` prop and any additional props required by Link, e.g. `to` prop required for the destination URL. The rendered link will leverage all features of React Router, and be visually styled for UDS.\n\nView component examples and source code below.\n        "}}}},o=()=>{alert("The button was clicked.")},n=h=>e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"col col-sm-12 p-3",children:e.jsx(t,{...h})})}),a=n.bind({});a.args={label:"Default Button",onClick:o};a.parameters={docs:{source:{code:`const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  onClick: handleClick,
/>Default Button</Button>`}}};const l=n.bind({});l.args={color:"gold",label:"Small Gold Button",onClick:o,size:"small"};l.parameters={docs:{description:{story:`When the Button component is provided with an onClick handler function, the Button is rendered as a \`<button type="button">\`.

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
/>Small Gold Button</Button>`}}};const r=n.bind({});r.args={color:"gold",icon:["fas","rocket"],label:"Icon Button",onClick:o};r.parameters={docs:{description:{story:`To include a Font Awesome icon in the button label, import the desired React icon and pass it to the Button component via the \`icon\` prop.:

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
      >Icon Button</Button>`}}};const s=n.bind({});s.args={color:"maroon",href:"/#example-link",label:"Link Button"};s.parameters={docs:{description:{story:`To render a button-style link, \`<a>\`-tag, use the \`href\` prop to set the destination url for this link. When a button is primarily intended for page navigation, this is the recommended solution for accessibility.

    <Button
      color="maroon"
      href="/#example-link"
    />Link Button</Button>`},source:{code:`<Button
  color="maroon"
  href="/#example-link"
/>Link Button</Button>`}}};const p=n.bind({});p.args={color:"maroon",href:"/#example-link",label:"Link Button",target:"_blank"};const K=h=>e.jsx(H,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"col col-sm-12 p-3",children:e.jsx(t,{...h})})})}),i=K.bind({});i.args={color:"gold",element:J,label:"React Router Link",to:"/#example-link"};i.parameters={docs:{description:{story:`To use the React Router Link in the Button component, pass an instance of \`<Link>\` to the \`element\` prop and any additional props required by Link, e.g. the \`to\` prop required for the destination URL. The rendered link will leverage all features of React Router, and be visually styled for UDS.

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
</Router>`}}};const c=n.bind({});c.args={label:"Filled Button",variant:"filled",color:"gold",onClick:o};c.parameters={docs:{description:{story:"The filled variant provides a solid background button. This is the default style when using the variant prop."}}};const d=n.bind({});d.args={label:"Outline Button",variant:"outline",color:"maroon",onClick:o};d.parameters={docs:{description:{story:"The outline variant provides a button with border and transparent background that fills on hover."}}};const u=n.bind({});u.args={label:"Borderless Button",variant:"borderless",color:"gold",onClick:o};u.parameters={docs:{description:{story:"The borderless variant provides a text-only button that fills with color on hover."}}};const m=()=>e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"col col-sm-12 p-3",children:[e.jsx("h3",{children:"UDS Button Variants"}),e.jsx(t,{label:"Borderless",variant:"borderless",color:"gold",onClick:o}),e.jsx(t,{label:"Outline",variant:"outline",color:"gold",onClick:o}),e.jsx(t,{label:"Filled sm",variant:"filled",color:"gold",onClick:o,size:"small"}),e.jsx(t,{label:"Filled md",variant:"filled",color:"gold",onClick:o,size:"medium"}),e.jsx(t,{label:"Filled lg/default",variant:"filled",color:"gold",onClick:o,size:"large"}),e.jsx("h3",{children:"All Colors"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(t,{label:"Gold",variant:"filled",color:"gold",onClick:o}),e.jsx(t,{label:"Maroon",variant:"filled",color:"maroon",onClick:o}),e.jsx(t,{label:"Gray",variant:"filled",color:"gray",onClick:o}),e.jsx(t,{label:"Dark",variant:"filled",color:"dark",onClick:o})]})]})});m.parameters={docs:{description:{story:"Showcase of all button variants and colors available."}},controls:{disable:!0}};m.__docgenInfo={description:"",methods:[],displayName:"AllVariants"};var k,v,B;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>;
}`,...(B=(v=a.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var g,b,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>;
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,x,y;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>;
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var R,w,N;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>;
}`,...(N=(w=s.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var L,S,T;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>;
}`,...(T=(S=p.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,D,F;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`args => <Router>
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>
  </Router>`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var U,z,G;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>;
}`,...(G=(z=c.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var O,I,V;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>;
}`,...(V=(I=d.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var A,W,_;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>;
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,M,E;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`() => <div className="container-fluid">
    <div className="col col-sm-12 p-3">
      <h3>UDS Button Variants</h3>
      <Button label="Borderless" variant="borderless" color="gold" onClick={handleClick} />
      <Button label="Outline" variant="outline" color="gold" onClick={handleClick} />
      <Button label="Filled sm" variant="filled" color="gold" onClick={handleClick} size="small" />
      <Button label="Filled md" variant="filled" color="gold" onClick={handleClick} size="medium" />
      <Button label="Filled lg/default" variant="filled" color="gold" onClick={handleClick} size="large" />
      <h3>All Colors</h3>
      <div style={{
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap"
    }}>
        <Button label="Gold" variant="filled" color="gold" onClick={handleClick} />
        <Button label="Maroon" variant="filled" color="maroon" onClick={handleClick} />
        <Button label="Gray" variant="filled" color="gray" onClick={handleClick} />
        <Button label="Dark" variant="filled" color="dark" onClick={handleClick} />
      </div>
    </div>
  </div>`,...(E=(M=m.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const Z=["DefaultButton","SmallGoldButton","IconButton","LinkButton","TargetBlankButton","ReactRouterLinkButton","FilledButton","OutlineButton","BorderlessButton","AllVariants"];export{m as AllVariants,u as BorderlessButton,a as DefaultButton,c as FilledButton,r as IconButton,s as LinkButton,d as OutlineButton,i as ReactRouterLinkButton,l as SmallGoldButton,p as TargetBlankButton,Z as __namedExportsOrder,Y as default};
