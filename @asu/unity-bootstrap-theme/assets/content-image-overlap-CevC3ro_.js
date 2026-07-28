import{Y as e}from"./iframe-fxNE3F8I.js";import{u as o,d as l}from"./blocks-BfcB18LS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DQDoWbDH.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Molecules/Content Sections/Image Overlap/Readme"}),`
`,e.jsx(n.h1,{id:"content-image-overlap",children:"Content Image Overlap"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<div className="uds-image-overlap">
  <img className="img-fluid" src="https://placeimg.com/800/800/nature" alt="Generic image from PlaceIMG" />
  <div className="content-wrapper">
    <h3>Headline <span className="highlight-gold"> with emphasis</h3>
    <p>Your content goes here. Normal paragraphs and other content types are permissible.</p>
  </div>
</div>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The content image overlap element uses a CSS grid in the large format (desktop) display to control the spacing, padding and other layout options."}),`
`,e.jsx(n.li,{children:'The component scales at the xl and lg breakpoints in Bootstrap while still maintaining the "desktop" look. Below the lg breakpoint, it will default to the mobile display.'}),`
`,e.jsxs(n.li,{children:["Add the modifier class ",e.jsx(n.code,{children:"content-left"})," to ",e.jsx(n.code,{children:`<div className='uds-image-overlap">'`})," to produce the left content variant."]}),`
`,e.jsx(n.li,{children:"The markup for the left and right variants is otherwise exactly the same."}),`
`]}),`
`,e.jsx(n.h2,{id:"other-notes",children:"Other notes"}),`
`,e.jsx(n.p,{children:"The XD design specifications call for the use of an 4:3 sized image (800px by 600px) for this component. However, it will work with nearly any horizontal image."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A 16:9 sized image will produce an available text area roughly the size of a single line headline + one paragraph."}),`
`,e.jsx(n.li,{children:"A 1:1 (square) image will add enough room for three or four paragraphs, but does take up at least one full length of a standard laptop screen."}),`
`]}),`
`,e.jsxs(n.p,{children:["The component is intended for presentation within a column set that spans the full width of the page. (i.e. ",e.jsx(n.code,{children:"col-12"}),"). However, it will scale to smaller smaller column widths if desired."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The recommended minimum width for this style of a component is col-6."}),`
`,e.jsx(n.li,{children:"At that width, you may also need to adjust the padding of the inset box as well as the overall length of your content. (Think short!)"}),`
`]})]})}function d(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{d as default};
