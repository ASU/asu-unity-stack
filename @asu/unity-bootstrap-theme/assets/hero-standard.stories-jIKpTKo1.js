import{M as r}from"./chunk-HLWAVYOI-BIHtL9-C.js";import{j as e}from"./jsx-runtime-DAFs00V8.js";import{useMDXComponents as o}from"./index-0_jiJ7ii.js";import"./iframe-BTJ0xJGm.js";import"../sb-preview/runtime.js";import"./index-RYns6xqu.js";import"./react-18-CWbnM-_i.js";import"./index-Cu4lwwaE.js";import"./index-HRfTNzeJ.js";import"./index-DrFu-skq.js";function s(i){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",h2:"h2",h3:"h3",strong:"strong"},o(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Molecules/Heroes/Readme"}),`
`,e.jsx(n.h1,{id:"standard-hero",children:"Standard hero"}),`
`,e.jsx(n.p,{children:"Hero content sections come in three different size varieties."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uds-hero-sm"})," - Will be 16rem (256px) tall on mobile and 16rem (256px) tall on desktop."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uds-hero-md"})," - Will be 16rem (256px) tall on mobile and 32rem (512px) tall on desktop."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uds-hero-lg"})," - Will be 32rem (512px) tall on mobile and 42.75rem (684px) tall on desktop."]}),`
`]}),`
`,e.jsx(n.p,{children:"The recommended markup for a hero image is as follows:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<div className="uds-hero-md">
  <img className="hero" src="" alt="Don't forget the alt text." />
  <h1>Hero headline text</h1>
  <div className="content">
    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
  </div>
  <a href="#" className="btn btn-gold">Call to action button</a>
</div>
`})}),`
`,e.jsx(n.p,{children:"Within the context of the hero section, the inclusion of an image is mandatory. You may optionally chose to include any of the following pieces of content as required:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Headline text"}),`
`,e.jsx(n.li,{children:"An optional subtitle positioned above the title."}),`
`,e.jsx(n.li,{children:"A short description or introduction to the content below."}),`
`,e.jsx(n.li,{children:"A single call to action button, or a button row containing more than one button."}),`
`]}),`
`,e.jsx("div",{className:"pt-4",children:" "}),`
`,e.jsx(n.h2,{id:"hero-content",children:"Hero content"}),`
`,e.jsx("div",{className:"pt-4",children:" "}),`
`,e.jsx(n.h3,{id:"the-image",children:"The image"}),`
`,e.jsx(n.p,{children:"Images optimized for mobile should be cropped to the following dimensions."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Small and medium heroes: 768px width by 256px height"}),`
`,e.jsx(n.li,{children:"Large heroes: 768px width by 512px height"}),`
`]}),`
`,e.jsx(n.p,{children:"Images intended for a desktop display should be cropped to 1920px wide and should use the following heights."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Small hero, desktop: 265px"}),`
`,e.jsx(n.li,{children:"Medium hero, desktop: 512px"}),`
`,e.jsx(n.li,{children:"Large hero, desktop: 684px"}),`
`]}),`
`,e.jsxs(n.p,{children:["The hero section uses a standard ",e.jsx(n.code,{children:"<img>"})," tag to express the background image of the section."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Be sure to include meaningful alt text for your hero image."}),`
`,e.jsx(n.li,{children:"A background gradient is automatically applied to the background image when viewing the hero on a tablet or desktop sized viewport."}),`
`,e.jsxs(n.li,{children:["Within the ",e.jsx(n.code,{children:"<img>"})," tag, you can also chose to include a ",e.jsx(n.code,{children:"srcset"})," of images that are appropriately sized for the indicated viewport."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"srcset"})," sizes offer additional opportunities for art direction via specific cropping of the original image."]}),`
`]}),`
`,e.jsxs(n.p,{children:["A fancy ",e.jsx(n.code,{children:"<img>"})," example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<div className="uds-hero-md">
  <img className="hero"
    srcset="centered-pitchfork-hand-768w.jpg 768w,
            offset-pitchfork-hand-1920w.jpg 1920w"
    sizes="(max-width: 768px) 768px,
            1920px"
    src="offset-pitchfork-hand-1920w.jpg"
    alt="Student doing a pitchfork as a silhouette in the sun."
  />
  ...
</div>
`})}),`
`,e.jsx(n.h3,{id:"headline-text",children:"Headline text"}),`
`,e.jsxs(n.p,{children:["Headline text should be expressed within the hero as an ",e.jsx(n.code,{children:"H1"})," tag."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:'<span className="highlight-*">'})," classes to highlight all or part of the headline."]}),`
`,e.jsxs(n.li,{children:["Include the ",e.jsx(n.code,{children:"text-white"})," class within the initial ",e.jsx(n.code,{children:"h1"})," for proper contrast against dark background images as needed."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<div className="uds-hero-md">
  <img className="hero" src="darkimage.jpg" alt="Don't forget the alt text." />
  <h1 className="text-white">White text with a <span className="highlight-gold">gold</span>highlight</h1>
  ...
</div>
`})}),`
`,e.jsx(n.h3,{id:"subtitles",children:"Subtitles"}),`
`,e.jsxs(n.p,{children:["A subtitle can be added to the hero section by the inclusion of a ",e.jsx(n.code,{children:"<div>"})," with the proper ARIA role assigned. Subtitles are styled to look like a standard ",e.jsx(n.code,{children:"<h3>"})," heading tag, but are expressed as a normal ",e.jsx(n.code,{children:"<div>"})," to preserve the normal document outline."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Include a ",e.jsx(n.code,{children:"text-white"})," class as needed for proper contrast."]}),`
`,e.jsxs(n.li,{children:["Optionally include a ",e.jsx(n.code,{children:'<span className="highlight-*">'})," class to highlight all or part of the subtitle."]}),`
`,e.jsx(n.li,{children:"Highlighted subtitles will align with highlighted sections of the headline for the hero."}),`
`,e.jsx(n.li,{children:"Visually, subtitles will always be positioned above the title regardless of source order."}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<div className="uds-hero-md">
  ...
  <div role="doc-subtitle"><span className="highlight-white">Your subtitle</span></div>
  <h1><span className="highlight-black">The main title goes here</h1>
  ...
</div>
`})}),`
`,e.jsx(n.h3,{id:"description--introduction",children:"Description / Introduction"}),`
`,e.jsxs(n.p,{children:["Be sure to wrap your description or introduction text in a ",e.jsx(n.code,{children:'<div className="content">'})," to ensure proper alignment with the other elements within the hero. As you add content of various lengths, be sure to test your results on a desktop and mobile viewport to make sure that it doesn't cause the hero to become distorted."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"By default, this content will appear immediately below the background image when viewed on a mobile device."}),`
`,e.jsxs(n.li,{children:["For best results, consider including this kind of content within a medium (",e.jsx(n.code,{children:"uds-hero-md"}),") or large (",e.jsx(n.code,{children:"uds-hero-lg"}),") hero section only."]}),`
`,e.jsx(n.li,{children:"You may use multiple small paragraphs if desired."}),`
`,e.jsxs(n.li,{children:["You may use a standard unordered/ordered list if desired. (Avoid the use of the ",e.jsx(n.code,{children:"uds-list"})," element here for best results.)"]}),`
`,e.jsxs(n.li,{children:["You may ",e.jsx(n.strong,{children:"not"})," use a standard link within this text. Instead, consider using a call to action button."]}),`
`,e.jsxs(n.li,{children:["Include the ",e.jsx(n.code,{children:"text-white"})," class with the wrapper to ensure proper contrast against dark background images."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<div className="uds-hero-lg">
  ...
  <div className="content text-white">
    <p>Introduction text can occur here.</p>
    <p>If multiple paragraphs are desired, that should be OK in most circumstances.</p>
  </div>
  ...
</div>
`})}),`
`,e.jsx(n.h3,{id:"call-to-action-button",children:"Call to Action Button"}),`
`,e.jsxs(n.p,{children:["Include a standard sized button as a direct child of the ",e.jsx(n.code,{children:"uds-hero-*"})," containing element to produce a properly aligned call to action button for your hero."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"On a mobile device, the CTA button will automatically be positioned across the bottom border of the background image."}),`
`,e.jsx(n.li,{children:"Only maroon or gold buttons are permitted within the hero section."}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<div className="uds-hero-lg">
  ...
  <a href="#" className="btn btn-maroon">Maroon Call to Action</a>
  ...
</div>
`})}),`
`,e.jsx(n.h2,{id:"base-class-modifiers",children:"Base class modifiers"}),`
`,e.jsx("div",{className:"pt-4",children:" "}),`
`,e.jsx(n.p,{children:"You can alter the behavior of a standard hero content section by including either of two possible modifying classes along with the size declaration."}),`
`,e.jsx(n.h3,{id:"button-rows",children:"Button Rows"}),`
`,e.jsx(n.p,{children:"Instead of using a single CTA button within the hero, you may chose to include a pair of smaller buttons as a primary and secondary action."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Declare your hero using a specific size and the ",e.jsx(n.code,{children:"has-btn-row"})," modifying class."]}),`
`,e.jsxs(n.li,{children:["Avoid using a button row with the small hero size (",e.jsx(n.code,{children:"uds-size-sm"}),") if possible."]}),`
`,e.jsxs(n.li,{children:["Wrap your buttons in a ",e.jsx(n.code,{children:'<div className="btn-row">'}),"."]}),`
`,e.jsxs(n.li,{children:["Buttons in a button row should be of the ",e.jsx(n.code,{children:"btn-md"})," size."]}),`
`,e.jsx(n.li,{children:"For best results both buttons should be the same color."}),`
`]}),`
`,e.jsx(n.p,{children:"On a mobile device, buttons will wrap to a new line as necessary. They will also be presented within the context of the background image instead of along the bottom border of the image. Be sure to check that your markup doesn't distort the intended height of the element."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<div className="uds-hero-md has-btn-row">
  ...
  <div className="btn-row">
    <a href="#" className="btn btn-md btn-gold">Primary CTA</a>
    <a href="#" className="btn btn-md btn-gold">A secondary action</a>
  </div>
  ...
</div>
`})}),`
`,e.jsx(n.h3,{id:"hide-content-on-mobile",children:"Hide Content on Mobile"}),`
`,e.jsxs(n.p,{children:["By default, content presented within the ",e.jsx(n.code,{children:'<div className="content">'})," wrapper will appear immediately below the background image for a standard hero when viewing the page on a mobile device. This is to prevent the loss of information when viewing a potentially important description or introduction to the page."]}),`
`,e.jsxs(n.p,{children:["If you would like to prevent this content from being displayed at all, include a ",e.jsx(n.code,{children:"hide-content"})," class along with the initial size declaration for the hero."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<div className="uds-hero-md hide-content">
  ...
  <div className="content">
    <p className="text-white">This content will only be visible when the hero is viewed on a desktop or tablet sized device.</p>
  </div>
  ...
</div>
`})})]})}function l(i={}){const{wrapper:n}=Object.assign({},o(),i.components);return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const t={title:"Molecules/Heroes/Readme",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:l};const f=["__page"];export{f as __namedExportsOrder,d as __page,t as default};
