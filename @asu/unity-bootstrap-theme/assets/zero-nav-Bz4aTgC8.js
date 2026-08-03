import{Y as n}from"./iframe-C5akAC6m.js";import{u as i,d as o}from"./blocks-BX8dsTQQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-7jvHB4AN.js";function t(a){const e={code:"code",h1:"h1",p:"p",pre:"pre",...i(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Organisms/Global Header/Docs/No navigation"}),`
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
`})})]})}function c(a={}){const{wrapper:e}={...i(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(t,{...a})}):t(a)}export{c as default};
