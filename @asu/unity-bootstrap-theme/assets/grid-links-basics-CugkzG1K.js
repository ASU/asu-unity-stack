import{j as e}from"./iframe-7SCvHqje.js";import{u as o,M as r}from"./blocks-xUdhjy-T.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CFBDRSJH.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Organisms/Grid Links/Readme"}),`
`,e.jsx(n.h1,{id:"uds-grid-links",children:"UDS Grid Links"}),`
`,e.jsxs(n.p,{children:['The recommended markup for a "grid links" section is a list of links wrapped in a generic ',e.jsx(n.code,{children:"<div>"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<div className="uds-grid-links">
  <a href="#"><span className="fa fa-fw fa-generic-icon"></span>Icon and Link Text</a>
  <a href="#">Just a link</a>
  ...
</div>
`})}),`
`,e.jsx("div",{className:"pt-4",children:" "}),`
`,e.jsx(n.h1,{id:"modifiers-for-desktop-views",children:"Modifiers for desktop views"}),`
`,e.jsxs(n.p,{children:["In addition to the required ",e.jsx(n.code,{children:"uds-grid-links"})," class, there are two additional class modifiers that can control the number of columns present in your link grid, as well as the point at which the display will become mobile-first. (The mobile display is a single column of grid links.)"]}),`
`,e.jsx(n.h2,{id:"column-modifiers",children:"Column modifiers"}),`
`,e.jsx(n.p,{children:"Use one of the following classes to produce a grid containing the specified number of columns."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"two-columns"})," for a 2 column format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"three-columns"})," for a 3 column format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"four-columns"})," for a 4 column format."]}),`
`]}),`
`,e.jsx(n.p,{children:"Note that the classes above are different than the Bootstrap utility classes to control a column layout on a page."}),`
`,e.jsx(n.h2,{id:"background-colors",children:"Background Colors"}),`
`,e.jsxs(n.p,{children:["Add a background color and change the foregrround color of the ",e.jsx(n.code,{children:".uds-grid-links"})," component to match."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["First, wrap the ",e.jsx(n.code,{children:"uds-grid-links"})," element in a container."]}),`
`,e.jsxs(n.li,{children:["Apply a utility background color class to that container. Use either ",e.jsx(n.code,{children:"uds-gray-1"})," or ",e.jsx(n.code,{children:"uds-gray-7"})," for light gray or dark backgrounds."]}),`
`,e.jsx(n.li,{children:"Add appropriate padding to the container."}),`
`,e.jsxs(n.li,{children:["Include a the appropriate ",e.jsx(n.code,{children:"text-color"})," utility class to modify the foreground color, if needed."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<section className="gray-dark-bg p-8">
  <div className="uds-grid-links text-white">
    ...
  </div>
</section>
`})}),`
`,e.jsx("div",{className:"pt-4",children:" "}),`
`,e.jsx(n.h1,{id:"additional-notes",children:"Additional notes"}),`
`,e.jsxs(n.p,{children:["When using Font Awesome icons in the display of these grid links, it is recommended to use the utility ",e.jsx(n.code,{children:"fa-fw"})," class to keep all of the included icons the same width. This will keep everything lined up within the grid in both desktop and mobile presentations. More from ",e.jsx(n.a,{href:"https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/fixed-width-icons",rel:"nofollow",children:"Font Awesome"}),"."]})]})}function a(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{a as default};
