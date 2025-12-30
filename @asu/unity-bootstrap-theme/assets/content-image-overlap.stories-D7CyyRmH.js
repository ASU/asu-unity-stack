import{M as s}from"./chunk-HLWAVYOI-Bjx8KnzU.js";import{j as e}from"./jsx-runtime-DAFs00V8.js";import{useMDXComponents as i}from"./index-0_jiJ7ii.js";import"./iframe-Bv1spZ7N.js";import"../sb-preview/runtime.js";import"./index-RYns6xqu.js";import"./react-18-CWbnM-_i.js";import"./index-Cu4lwwaE.js";import"./index-HRfTNzeJ.js";import"./index-DrFu-skq.js";function a(n){const t=Object.assign({h1:"h1",pre:"pre",code:"code",ul:"ul",li:"li",h2:"h2",p:"p"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Molecules/Content Sections/Image Overlap/Readme"}),`
`,e.jsx(t.h1,{id:"content-image-overlap",children:"Content Image Overlap"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`<div className="uds-image-overlap">
  <img className="img-fluid" src="https://placeimg.com/800/800/nature" alt="Generic image from PlaceIMG" />
  <div className="content-wrapper">
    <h3>Headline <span className="highlight-gold"> with emphasis</h3>
    <p>Your content goes here. Normal paragraphs and other content types are permissible.</p>
  </div>
</div>
`})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"The content image overlap element uses a CSS grid in the large format (desktop) display to control the spacing, padding and other layout options."}),`
`,e.jsx(t.li,{children:'The component scales at the xl and lg breakpoints in Bootstrap while still maintaining the "desktop" look. Below the lg breakpoint, it will default to the mobile display.'}),`
`,e.jsxs(t.li,{children:["Add the modifier class ",e.jsx(t.code,{children:"content-left"})," to ",e.jsx(t.code,{children:`<div className='uds-image-overlap">'`})," to produce the left content variant."]}),`
`,e.jsx(t.li,{children:"The markup for the left and right variants is otherwise exactly the same."}),`
`]}),`
`,e.jsx(t.h2,{id:"other-notes",children:"Other notes"}),`
`,e.jsx(t.p,{children:"The XD design specifications call for the use of an 4:3 sized image (800px by 600px) for this component. However, it will work with nearly any horizontal image."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A 16:9 sized image will produce an available text area roughly the size of a single line headline + one paragraph."}),`
`,e.jsx(t.li,{children:"A 1:1 (square) image will add enough room for three or four paragraphs, but does take up at least one full length of a standard laptop screen."}),`
`]}),`
`,e.jsxs(t.p,{children:["The component is intended for presentation within a column set that spans the full width of the page. (i.e. ",e.jsx(t.code,{children:"col-12"}),"). However, it will scale to smaller smaller column widths if desired."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"The recommended minimum width for this style of a component is col-6."}),`
`,e.jsx(t.li,{children:"At that width, you may also need to adjust the padding of the inset box as well as the overall length of your content. (Think short!)"}),`
`]})]})}function r(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const o={title:"Molecules/Content Sections/Image Overlap/Readme",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:r};const w=["__page"];export{w as __namedExportsOrder,l as __page,o as default};
