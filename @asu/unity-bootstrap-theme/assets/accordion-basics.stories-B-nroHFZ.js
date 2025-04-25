import{M as c}from"./chunk-HLWAVYOI-D576cqqY.js";import{j as n}from"./jsx-runtime-DAFs00V8.js";import{useMDXComponents as i}from"./index-0_jiJ7ii.js";import"./iframe-CvjYVZC8.js";import"../sb-preview/runtime.js";import"./index-RYns6xqu.js";import"./react-18-CWbnM-_i.js";import"./index-Cu4lwwaE.js";import"./index-HRfTNzeJ.js";import"./index-DrFu-skq.js";function d(o){const e=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",em:"em",strong:"strong",pre:"pre"},i(),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Atoms/Accordions/Readme"}),`
`,n.jsx(e.h2,{id:"accordion",children:"Accordion"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:".accordion"})," class is a bootstrap5 class that is used to create an accordion."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The accordions will conform to the width of the surrounding container."}),`
`,n.jsx(e.li,{children:"There is a recommended character limit of 75 characters for the text within the header of a foldable card."}),`
`]}),`
`,n.jsx(e.p,{children:"The recommended markup for an accordion begins from the following pattern."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:n.jsx(e.strong,{children:"Note:"})})," The ",n.jsx(e.code,{children:".accordion-body"})," class must be wrapped in a div with the ",n.jsx(e.code,{children:".collapse"})," class, or else the accordion will have a jerky animation when opening and closing."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header">
      <h3>
        <a
          id="example-header-3"
          data-bs-toggle="collapse"
          href="#example-content-3"
          role="button"
          class="collapsed"
          aria-expanded="true"
          aria-controls="example-content-3"
          data-ga="This card starts off in an unfolded state."
          data-ga-name="onclick"
          data-ga-event="collapse"
          data-ga-type="click"
          data-ga-region="main content"
          data-ga-section="default"
        >
          This card starts off in an unfolded state.
          <span class="fas fa-chevron-up"></span>
        </a>
      </h3>
    </div>
    <div
      id="example-content-3"
      class="collapse show"
      aria-labelledby="example-header-3"
    >
    <div class="accordion-body">
      <h4>This is a quaternary headline</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <h5>This is a level five headline. There's a fancy word for that too.</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
    </div>
    </div>
  </div>
  </div>
`})}),`
`,n.jsx(e.h2,{id:"accent-colors-and-icons",children:"Accent Colors and Icons"}),`
`,n.jsx(e.p,{children:"Accordions can be accented with different colors from the ASU palette. The header of an accordion can also include an optional icon from Font Awesome."}),`
`,n.jsx(e.p,{children:"Include a modifying class along side of `.accordion to produce different accent colors. Allowable colors are below:"}),`
`,n.jsx(e.p,{children:`| Modifier class | Produced Color     |
| -------------- | ------------------ |
| (none)         | ASU Gold (default) |
| .accordion-item-maroon   | ASU Maroon         |
| .accordion-item-gray     | ASU Gray 4         |
| .accordion-item-dark     | ASU Gray 7 (Black) |`}),`
`,n.jsx(e.p,{children:"To add an icon:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Include the modifying class ",n.jsx(e.code,{children:".accordion-header-icon"})," next to the ",n.jsx(e.code,{children:".accordion-header"})," declaration."]}),`
`,n.jsx(e.li,{children:"Any Font Awesome icon from the collection may be used."}),`
`]}),`
`,n.jsx(e.p,{children:"A foldable card with an icon and and accent color might look like this:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class=" accordion mt-3 accordion-item-maroon">
  <div class="accordion-header accordion-header-icon">
    <h4>
      <a id="accordionOne" class="collapsed" href="#cardBodyOne" data-bs-toggle="collapse" data-bs-target="#accordionBodyOne" role="button" aria-expanded="false" aria-controls="cardBodyOne">
        <span class="accordion-icon">
            <i class="fas fa-dog me-2" role="img" aria-label="..."></i>
            Accordion with icon and gold color.
        </span>
        <span class="fas fa-chevron-up"></span>
      </a>
    </h4>
  </div>
  <div id="accordionBodyOne" class="collapse" aria-labelledby="accordionOne">
    <div class="accordion-body">
      ...
    </div>
  </div>
</div>
`})}),`
`,n.jsx(e.h2,{id:"disable-fold-at-breakpoint",children:"Disable fold at breakpoint"}),`
`,n.jsx(e.p,{children:'You may choose to disable the "fold" of a foldable card at a particular breakpoint in order to have an element appear expanded on desktop and collapsed on mobile.'}),`
`,n.jsxs(e.p,{children:["Include one of the following modifier classes next to the ",n.jsx(e.code,{children:".accordion"})," class to enable the functionality."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".desktop-disable-md"})," disables the fold at the ",n.jsx(e.code,{children:"md"})," breakpoint and above."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".desktop-disable-lg"})," and ",n.jsx(e.code,{children:".desktop-disable-xl"})," are also available."]}),`
`]}),`
`,n.jsx(e.p,{children:"Example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="accordion desktop-disable-lg">
  <div class="accordion-header">
    ...
  </div>
  <div id="accordionOne" class="collapse" aria-labelledby="accordionOne">
    <div class="accordion-body">
      ...
    </div>
  </div>
</div>
`})})]})}function s(o={}){const{wrapper:e}=Object.assign({},i(),o.components);return e?n.jsx(e,{...o,children:n.jsx(d,{...o})}):d(o)}const r=()=>{throw new Error("Docs-only story")};r.parameters={docsOnly:!0};const a={title:"Atoms/Accordions/Readme",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:s};const b=["__page"];export{b as __namedExportsOrder,r as __page,a as default};
