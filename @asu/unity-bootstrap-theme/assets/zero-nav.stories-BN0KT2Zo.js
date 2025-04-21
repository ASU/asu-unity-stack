import"./chunk-HLWAVYOI-C6HXpM-S.js";import{M as s}from"./index-Dzl6qL0m.js";import{j as n}from"./jsx-runtime-8P-18mTY.js";import{useMDXComponents as o}from"./index-Rw-mr-m5.js";import"./iframe-DZ3gy4Rq.js";import"../sb-preview/runtime.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./react-18-D3KMmV-X.js";import"./index-CkEJZZAx.js";import"./index-Cu4lwwaE.js";import"./index-CyMZ2tJ-.js";import"./index-DrFu-skq.js";function i(t){const e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},o(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Organisms/Global Header/Docs/No navigation"}),`
`,n.jsx(e.h1,{id:"no-navigation-and-cta-only-variations",children:"No navigation and CTA only variations"}),`
`,n.jsxs(e.p,{children:["For the purposes of creating landing pages with minimal visual navigation, the ",n.jsx(e.code,{children:"#header-main"})," header element can be altered to display the title vertically centered within the container."]}),`
`,n.jsxs(e.p,{children:["The key here is to add the utility class of ",n.jsx(e.code,{children:".no-links"})," to the ",n.jsx(e.code,{children:".navbar-container"})," element."]}),`
`,n.jsx(e.p,{children:'Even if there are no links present with in the desktop version of the navigation, it is still important to include the markup for the mobile menu, as the links in the mobile menu footer are intended to be "universal."'}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<!-- No links, no buttons -->
<div className="navbar-container no-links">
  <div className="title subdomain-name"><a href="#">Landing Page Title</a></div>
  <div className="collapse navbar-collapse w-100 justify-content-between" id="menubar">
    <div className="navbar-mobile-footer">
      ...
    </div>
  </div>
</div>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<!-- No links, buttons included -->
<div className="navbar-container no-links">
  <div className="title subdomain-name"><a href="#">Landing Page Title</a></div>
  <div className="collapse navbar-collapse w-100 justify-content-between" id="menubar">
    <form className="navbar-site-buttons form-inline">
      <a href="#" className="btn btn-md btn-maroon">CTA Button 1</a>
      <a href="#" className="btn btn-md btn-dark">CTA Button 2</a>
    </form>
    <div className="navbar-mobile-footer">
      ...
    </div>
  </div>
</div>
`})})]})}function r(t={}){const{wrapper:e}=Object.assign({},o(),t.components);return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const a={title:"Organisms/Global Header/Docs/No navigation",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:r};const y=["__page"];export{y as __namedExportsOrder,l as __page,a as default};
