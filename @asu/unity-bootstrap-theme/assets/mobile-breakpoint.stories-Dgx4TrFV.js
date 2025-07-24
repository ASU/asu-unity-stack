import{M as i}from"./chunk-HLWAVYOI-DkxHSyAU.js";import{j as e}from"./jsx-runtime-DAFs00V8.js";import{useMDXComponents as a}from"./index-0_jiJ7ii.js";import"./iframe-MLxAtkKc.js";import"../sb-preview/runtime.js";import"./index-RYns6xqu.js";import"./react-18-CWbnM-_i.js";import"./index-Cu4lwwaE.js";import"./index-HRfTNzeJ.js";import"./index-DrFu-skq.js";function r(t){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Organisms/Global Header/Docs/Mobile Breakpoint"}),`
`,e.jsx(n.h1,{id:"altering-the-default-mobile-breakpoint",children:"Altering the default mobile breakpoint"}),`
`,e.jsx(n.p,{children:"By default, the Boostrap 4 version of the ASU header uses the XL breakpoint to trigger the mobile vs desktop view of the component. This means that users with resolutions of 1260px and below will experience the mobile menu."}),`
`,e.jsxs(n.p,{children:["If you have a limited number of top level items in the navigation of your menu, you can change this behavior by altering the markup for the header as well as the media queries in the SASS files to use the ",e.jsx(n.code,{children:"lg"})," or ",e.jsx(n.code,{children:"md"})," breakpoints instead."]}),`
`,e.jsx(n.h2,{id:"markup-changes",children:"Markup changes"}),`
`,e.jsx(n.p,{children:"There are four changes in the markup needed to alter the default behavior."}),`
`,e.jsx(n.p,{children:"First, look for for two instances of Bootstrap containers that have been set to the xl breakpoint."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The first is at ",e.jsx(n.code,{children:"#wrapper-header-top div.container-xl"})]}),`
`,e.jsxs(n.li,{children:["The other is at ",e.jsx(n.code,{children:"#wrapper-header-main div.container-xl"}),"."]}),`
`,e.jsxs(n.li,{children:["Change both containers to ",e.jsx(n.code,{children:"container-lg"})," or your breakpoint of choice."]}),`
`]}),`
`,e.jsx(n.p,{children:"Second, if your header contains a navigation bar, it also needs to be set to display the mobile view at the correct breakpoint."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Locate ",e.jsx(n.code,{children:".navbar-expand-xl"})," and change it to ",e.jsx(n.code,{children:".navbar-expand-lg"})," or your breakpoint of choice."]}),`
`]}),`
`,e.jsx(n.p,{children:"Last, the text for the home icon also toggles on and off based on the breakpoint."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Find ",e.jsx(n.code,{children:'<span className="d-xl-none">Home</span>'})," and change the class for the ",e.jsx(n.code,{children:"<span>"})," element to be ",e.jsx(n.code,{children:"d-lg-none"})," instead."]}),`
`]}),`
`,e.jsx(n.h2,{id:"sass-changes",children:"SASS Changes"}),`
`,e.jsxs(n.p,{children:["The SASS partial file called ",e.jsx(n.code,{children:"_global-header.scss"})," contains the markup needed to render both the desktop and mobile view of the header components. Sections 4 and 7 contain the collection of rules that render the desktop view at a particular breakpoint. Those media queries need to be altered to reference the new breakpoint."]}),`
`,e.jsxs(n.p,{children:["Locate any instance of ",e.jsx(n.code,{children:"@include media-breakpoint-up(xl)"})," in the SASS partial and replace the ",e.jsx(n.code,{children:"(xl)"})," with the breakpoint of your choice."]})]})}function s(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const o={title:"Organisms/Global Header/Docs/Mobile Breakpoint",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:s};const g=["__page"];export{g as __namedExportsOrder,l as __page,o as default};
