import{M as s}from"./chunk-HLWAVYOI-DyKHpClZ.js";import{j as e}from"./jsx-runtime-DAFs00V8.js";import{useMDXComponents as l}from"./index-0_jiJ7ii.js";import"./iframe-B4FjDkHy.js";import"../sb-preview/runtime.js";import"./index-RYns6xqu.js";import"./react-18-CWbnM-_i.js";import"./index-Cu4lwwaE.js";import"./index-HRfTNzeJ.js";import"./index-DrFu-skq.js";function i(n){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",a:"a"},l(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Atoms/Blockquotes and Testimonials/Readme"}),`
`,e.jsx(t.h1,{id:"uds-blockquote",children:"UDS Blockquote"}),`
`,e.jsx(t.p,{children:"The recommended markup for a blockquote begins from the following pattern."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`<div className="uds-blockquote">
  <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
    <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
  </svg>
  <blockquote>
    <p>We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.</p>
    <div className="citation">
      <cite className="name">Thomas Jefferson</cite>
      <cite className="description">The Declaration of Independence</cite>
    </div>
  </blockquote>
</div>
`})}),`
`,e.jsxs(t.p,{children:["Within the UDS Blockquote system, it is not necessary to encode any type of quotation mark within the included ",e.jsx(t.code,{children:"<blockquote>"})," element. The styles applied to the ",e.jsx(t.code,{children:".uds-blockquote"}),' element will encode all appropriate "fancy" quotation marks as psudo-elements to the enclosed ',e.jsx(t.code,{children:"<p>"})," tags."]}),`
`,e.jsxs(t.p,{children:["The design of the blockquote can be altered in a number of different ways by adding various modifying classes to the wrapping ",e.jsx(t.code,{children:".uds-blockquote"})," element. All possible modifiers are listed below along with the blockquote style on which they are used."]}),`
`,e.jsx(t.p,{children:`| Modifier class  | Used in blockquote style                     |
| --------------- | -------------------------------------------- |
| .accent-gold    | No Image, Alt Citation, Testimonials         |
| .accent-maroon  | No Image, Alt Citation, Testimonials         |
| .with-image     | With Image, No Citation, Testimonial w/Image |
| .reversed       | With Image, No Citation                      |
| .no-citation    | No Citation                                  |
| .alt-citation   | Alt Citation                                 |
| .uds-testmonial | Testmonials                                  |`}),`
`,e.jsx("div",{className:"pt-6",children:" "}),`
`,e.jsx(t.h2,{id:"modifying-classes",children:"Modifying classes"}),`
`,e.jsx("div",{className:"pt-2",children:" "}),`
`,e.jsx(t.h3,{id:"accent-gold-accent-maroon",children:".accent-gold, .accent-maroon"}),`
`,e.jsxs(t.p,{children:["This modifying class for ",e.jsx(t.code,{children:".uds-blockquote"})," contains additiional styling to change the accent color for the element to either ASU Maroon or ASU Gold. It will affect both the color of open quotation mark image and the decorative separator between the blockquote and the citation when present."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`<div className="uds-blockquote accent-maroon">
  <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">...</svg>
  <blockquote>
    ...
  </blockquote>
</div>

<div className="uds-blockquote uds-testimonial accent-gold">
  <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">...</svg>
  <blockquote>
    ...
  </blockquote>
</div>
`})}),`
`,e.jsx(t.h3,{id:"with-image",children:".with-image"}),`
`,e.jsxs(t.p,{children:["The class ",e.jsx(t.code,{children:".with-image"})," applies the necessary formatting to include a circular image alongside the blockquote."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"The image included within the markup must be formatted with a 1:1 aspect ratio. (It must be a square image.)"}),`
`,e.jsxs(t.li,{children:["Please don't forget the ",e.jsx(t.code,{children:"alt"})," text for the included image."]}),`
`,e.jsx(t.li,{children:'The class leverages the Bootstrap "sm" breakpoint (575px) to transform the image from 180px on desktop to 40px on mobile.'}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`<div className="uds-blockquote with-image">
  <img src="https://placeimg.com/400/400/any" alt="Must include alt text"/>
  <blockquote>
    ...
  </blockquote>
</div>
`})}),`
`,e.jsx(t.h3,{id:"reversed",children:".reversed"}),`
`,e.jsxs(t.p,{children:["Adding both the ",e.jsx(t.code,{children:".with-image"})," and ",e.jsx(t.code,{children:".reversed"})," modifier classes to the initial ",e.jsx(t.code,{children:".uds-blockquote"})," element will produce a layout which aligns the image to the right of the quoted text."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Including the ",e.jsx(t.code,{children:".reversed"})," class without the additional modifying ",e.jsx(t.code,{children:".with-image"})," class will have no effect."]}),`
`,e.jsx(t.li,{children:"The effect is only visible on viewports larger than 575px. (Tablet and desktop only.)"}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`<div className="uds-blockquote with-image reversed">
  <img src="https://placeimg.com/400/400/any" alt="Must include alt text"/>
  <blockquote>
    ...
  </blockquote>
</div>
`})}),`
`,e.jsx(t.h3,{id:"no-citation",children:".no-citation"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:".no-citation"})," class allows for an alternate presentation of the quoted party as a heading element that preceeds the quoted text."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The heading element is a standard ",e.jsx(t.code,{children:"<h3>"})," tag that has optionally been highlighted with ",e.jsx(t.code,{children:".highlight-gold"})," style modifier."]}),`
`,e.jsxs(t.li,{children:["The ",e.jsx(t.code,{children:".no-citation"})," only has one visible effect; it vertically aligns the quoted text with the included image."]}),`
`,e.jsx(t.li,{children:'The UDS Blockquote "no citation" style should always include an image.'}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`<div className="uds-blockquote no-citation with-image">
  <img src="https://placeimg.com/400/400/any" alt="Must include alt text"/>
  <blockquote>
    <h3><span className="highlight-black">Quoted Person</span></h3>
    <p>The quotation would go here.</p>
  </blockquote>
</div>
`})}),`
`,e.jsx(t.h3,{id:"alt-citation",children:".alt-citation"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:".alt-citation"})," class replaces the indentation and included hyphen of the blockquote's ",e.jsx(t.code,{children:"<cite>"})," element with a decorative colored separator. The color of the separator element is controlled by the manditory additional inclusion of either ",e.jsx(t.code,{children:".accent-gold"})," or ",e.jsx(t.code,{children:".accent-maroon"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`<div className="uds-blockquote .alt-citation accent-gold">
  <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">...</svg>
  <blockquote>
    ...
  </blockquote>
</div>
`})}),`
`,e.jsx(t.h3,{id:"uds-testimonial",children:".uds-testimonial"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:".uds-testimonial"})," class applies all of the styles that originate from the ",e.jsx(t.code,{children:".alt-citation"})," modifier class plus a couple of additional rules to horizontally center all included elements with the blockquote."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"The markup intensionally includes both an open quotation mark that preceeds the quoted text and the maroon or gold open quote image above it."}),`
`,e.jsxs(t.li,{children:["When including an image and applying the ",e.jsx(t.code,{children:".uds-testimonial"})," class, the image will remain at a max-width of 180px on a mobile device."]}),`
`]}),`
`,e.jsx("div",{className:"pt-6",children:" "}),`
`,e.jsx(t.h2,{id:"the-open-quote-svg",children:"The open quote svg"}),`
`,e.jsx(t.p,{children:"The open quote glyph that is included in the markup is a direct SVG element (as opposed to an image file) so that the color can be manipulated by a CSS declaration."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`<svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
  <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
</svg>
`})}),`
`,e.jsxs(t.p,{children:["The SVG glyph is the opening double quote glyph from within ",e.jsx(t.strong,{children:"Arial Bold"}),". See the ",e.jsx(t.a,{href:"https://practicaltypography.com/straight-and-curly-quotes.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"following page"})," for details about alternate ways to produce that glyph."]})]})}function a(n={}){const{wrapper:t}=Object.assign({},l(),n.components);return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const o={title:"Atoms/Blockquotes and Testimonials/Readme",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:a};const b=["__page"];export{b as __namedExportsOrder,c as __page,o as default};
