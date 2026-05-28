import{Y as e}from"./iframe-eq-7wow_.js";import{u as s,d as o}from"./blocks-C8uz7fLr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BuXgL6en.js";function i(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Organisms/Global Header/Docs/Header top"}),`
`,e.jsx(n.h1,{id:"header-top-universal-navigation",children:"Header Top (Universal Navigation)"}),`
`,e.jsxs(n.p,{children:["The grey bar at the top of the page is referred to as the ",e.jsx(n.strong,{children:"universal navigation"})," and exists within the ",e.jsx(n.code,{children:"#header-top"})," element."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The links in this area are not intended to be altered and should provide a top-level consistent experience for people looking to navigate the entire ASU domain."}),`
`,e.jsxs(n.li,{children:["The first two links on the page are visually hidden but become visible when navigating with a keyboard. Those links are the ",e.jsx(n.strong,{children:"Skip to Content"})," link and the ",e.jsx(n.strong,{children:"Report an Accessibility Problem"})," link."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The markup contains a landmark for developers to target with any relevant JS for the process of logging in / logging out of their specific application. Inject your results into ",e.jsx(n.code,{children:"div.login-status"})," and utilize some additional utility classes for consistent formatting:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".login-status > a.name"})," should render with a font weight of 700;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".login-status > a.signout"})," should surround the result with an open and close parenthesis. (Done via pseudo-elements and CSS.)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"about-local-site-search",children:"About local site search"}),`
`,e.jsxs(n.p,{children:["The following input ",e.jsx(n.strong,{children:"should be added"})," right below the other hidden fields on the ",e.jsx(n.code,{children:'form[name="gs"]'})," element"]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:'<input name="url_host" value="mydomain.asu.edu" type="hidden" />'})}),`
`,e.jsxs(n.p,{children:["But replacing ",e.jsx(n.em,{children:"mydomain.asu.edu"})," with your domain ",e.jsx(n.strong,{children:"with no https and no trailing slash or path."})]}),`
`,e.jsx(n.h3,{id:"implementation",children:"Implementation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<form className="form-inline" action="https://search.asu.edu/search" method="get" name="gs">
  <input
    className="form-control"
    type="search"
    name="q"ß
    aria-labelledby="header-top-search"
    required
    data-ga-input-header-event="search"
  />
  <label id="header-top-search">Search asu.edu</label>

  <!-- Input added right here -->
  <input name="url_host" value="mydomain.asu.edu" type="hidden" />
</form>
`})})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default};
