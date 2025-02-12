import"./chunk-HLWAVYOI-a9S9aqr3.js";import{M as i}from"./index-DwFx9IXS.js";import{j as e}from"./jsx-runtime-8P-18mTY.js";import{useMDXComponents as r}from"./index-Rw-mr-m5.js";import"./iframe-CmP71qG3.js";import"../sb-preview/runtime.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./react-18-D3KMmV-X.js";import"./index-CkEJZZAx.js";import"./index-Cu4lwwaE.js";import"./index-CyMZ2tJ-.js";import"./index-DrFu-skq.js";function s(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",strong:"strong",a:"a",code:"code",em:"em",h4:"h4",pre:"pre"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Get Started/Get Started"}),`
`,e.jsx(t.h1,{id:"asu-unity-bootstrap-theme",children:"ASU Unity Bootstrap Theme"}),`
`,e.jsx(t.h2,{id:"quickstart-guide",children:"Quickstart Guide"}),`
`,e.jsx(t.p,{children:"The Unity Bootstrap Theme is a Bootstrap 5-based web UI kit implementing ASU's Web Standards. Developers use the Unity Bootstrap Theme to build accessible and ASU Web Standards 2.0 compliant web sites and applications."}),`
`,e.jsx(t.p,{children:"This is the Storybook reference site for the Unity Bootstrap theme. Browse the design components here to identify one you want to use. Implement the HTML markup associated with that design component in your site or application, include the Unity Bootstrap Theme's CSS and JS files, and you're in business."}),`
`,e.jsx(t.h3,{id:"features",children:"Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Bootstrap 5:"})," Unity is built on top of Bootstrap 5, so you get all the Bootstrap goodness, plus some extra ASU-specific components and styles. ",e.jsx(t.strong,{children:"Bootstrap files,including CSS and Javascript, are bundled with Unity"})," so you don't need to include them separately."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Clean, easy to use styles and scripts:"})," thanks to the helper utilities and variables provided by the Bootstrap 5 team."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Font Awesome is no longer included with Unity!"})," If using in a project outside of webspark, you will need to include Font Awesome yourself. See ",e.jsx(t.a,{href:"https://fontawesome.com/start",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"})," for instructions on how to do that."]}),`
`]}),`
`,e.jsx(t.h2,{id:"-including-unity-in-your-project",children:"❯ Including Unity in your project"}),`
`,e.jsxs(t.p,{children:["We bundle the necessary CSS  and Javascript in the ",e.jsx(t.code,{children:"dist/"})," folder. There are more options so you don't have to include CSS you don't use."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"dist/unity-bootstrap-theme.bundle.css"})," - base theme with header and footer CSS"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"dist/unity-bootstrap-theme.css"})," - base theme without header and footer CSS"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"dist/unity-bootstrap-header.css"})," (optional) - header CSS only - don't use if using the Unity ",e.jsx(t.code,{children:"component-header"})," React component"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"dist/unity-bootstrap-footer.css"})," (optional) - footer CSS only - don't use if using the Unity ",e.jsx(t.code,{children:"component-footer"})," React component"]}),`
`]}),`
`,e.jsx(t.h2,{id:"-how-to--use-the-unity-storybook-reference-site",children:"❯ How to  use the Unity Storybook reference site"}),`
`,e.jsx(t.p,{children:`The Storybook reference site for the Unity Bootstrap Theme exists to provide a reference library of components and the markup to use to implement them in your site once you've included the library's CSS and Javascript in your site or application.
Some components also have controls so you can make changes and see how those changes will appear in your site.`}),`
`,e.jsx(t.h2,{id:"-how-to-use-the-private-package-registry",children:"❯ How to use the private package registry"}),`
`,e.jsxs(t.p,{children:["See the ",e.jsx(t.a,{href:"https://github.com/ASU/asu-unity-stack?tab=readme-ov-file#how-to-use-the-private-package-registry",target:"_blank",rel:"nofollow noopener noreferrer",children:"Unity README"})," for instructions on how to use the private package registry."]}),`
`,e.jsx(t.h3,{id:"troubleshooting-errors",children:"TROUBLESHOOTING ERRORS"}),`
`,e.jsxs(t.p,{children:["If you get errors having to do with yarn not being able to find a package on the registry, try running ",e.jsx(t.code,{children:"yarn config list"})," at the project root and look for the ",e.jsx(t.code,{children:"registry:"})," key under yarn config. If it is not set to ",e.jsx(t.code,{children:"https://registry.yarnpkg.com"})," then run ",e.jsx(t.code,{children:"yarn config delete registry"})," and recheck config."]}),`
`,e.jsxs(t.p,{children:["For custom compilation and sub-themes using the ",e.jsx(t.code,{children:"unity-bootstrap-theme"})," package, make sure your bundling/compilation tool is compatible with the scss. For example, if you are usiing Gulp for scss compilation, you will need to handle the new module imports used in our webpack configuration."]}),`
`,e.jsxs(t.p,{children:["In the old bs4 theme we would import some bootstrap scss with ",e.jsx(t.code,{children:'@import "../../node_modules/bootstrap/scss/root";'}),`
In the new theme it is imported directly with  `,e.jsx(t.code,{children:'@import "bootstrap/scss/functions";'})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://asu-tech.slack.com/archives/C01ABUVU8LQ/p1695234506292239",target:"_blank",rel:"nofollow noopener noreferrer",children:"This slack thread"})," has some more information about this issue and using Gulp. ",e.jsx(t.em,{children:"Must be a member of the ASU Community Slack workspace to view."})]}),`
`,e.jsx(t.h2,{id:"advanced-details-for-unity-developers-and-contributors",children:"Advanced Details for Unity Developers and Contributors"}),`
`,e.jsxs(t.p,{children:["See ",e.jsx(t.a,{href:"https://github.com/ASU/asu-unity-stack#advanced-details-for-unity-developers-and-contributors",target:"_blank",rel:"nofollow noopener noreferrer",children:"this section"})," of our README for more information about the Unity monorepo and how to contribute to the project."]}),`
`,e.jsx(t.h2,{id:"-google-analytics-integration",children:"> Google Analytics integration"}),`
`,e.jsx(t.p,{children:"Google Analytics integration for Unity is handled via Google Tag Manager. During user interaction with Unity components, usage data is captured by Google Tag Manager and delivered to Google Analytics."}),`
`,e.jsxs(t.p,{children:["This is enabled using the window ",e.jsx(t.code,{children:"dataLayer"})," object. For components in each package of this repository we take the ",e.jsx(t.code,{children:"dataLayer"})," object, with GTM and the dataLayer having already been initialized (by the host application or CMS - see ",e.jsx(t.a,{href:"https://unity.web.asu.edu",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://unity.web.asu.edu"})," for details on GTM setup), and push events using the ",e.jsx(t.code,{children:"push()"})," method of the ",e.jsx(t.code,{children:"dataLayer"}),". For each object included in the array, Google Tag manager catches that event."]}),`
`,e.jsxs(t.p,{children:["Depending on the package, this integration, of dispatching events, is handled in different ways. For ",e.jsx(t.code,{children:"component-header"}),", ",e.jsx(t.code,{children:"components-library"})," header and ",e.jsx(t.code,{children:"component-footer"}),", we use a service that pushes each event if the ",e.jsx(t.code,{children:"dataLayer"})," object exists and that service method is called on each jsx element event handler. For example:"]}),`
`,e.jsx(t.h4,{id:"srccomponentjs",children:e.jsx(t.strong,{children:e.jsx(t.code,{children:"src/component.js"})})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-JS",children:`<a href="#" onFocus={() => trackGAEvent(customEvent)}>Anchor Text</a>
`})}),`
`,e.jsx(t.h4,{id:"servicesgoogleanalyticsjs",children:e.jsx(t.strong,{children:e.jsx(t.code,{children:"services/googleAnalytics.js"})})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-JS",children:`const trackGAEvent = (event) => {
  const { dataLayer } = window;
  if (dataLayer) dataLayer.push(event);
}
`})}),`
`,e.jsxs(t.p,{children:["For the ",e.jsx(t.code,{children:"unity-bootstrap-theme"})," package the events are dispatched by an ",e.jsx(t.code,{children:"eventListener"}),", for the ",e.jsx(t.code,{children:"focus"}),", ",e.jsx(t.code,{children:"click"})," or ",e.jsx(t.code,{children:"change"})," event handler, for each html element that needs to be included. For example:"]}),`
`,e.jsx(t.h4,{id:"srccomponenthtml",children:e.jsx(t.strong,{children:e.jsx(t.code,{children:"src/component.html"})})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-JS",children:`<a href="#" data-ga="">Anchor Text</a>
`})}),`
`,e.jsx(t.h4,{id:"srccomponentjs-1",children:e.jsx(t.strong,{children:e.jsx(t.code,{children:"src/component.js"})})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-JS",children:`const pushGAEvent = (event) => {
  const { dataLayer } = window;
  if (dataLayer) dataLayer.push(event);
};
// eventListener
const elements = document.querySelectorAll('[data-ga]');
elements.forEach((element) =>
  element.addEventListener('focus', () => {
    pushGAEvent(event);
  })
);
`})}),`
`,e.jsxs(t.p,{children:["Check ",e.jsx(t.a,{href:"https://unity.web.asu.edu/",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://unity.web.asu.edu/"})," as well as the README.md's in individual Unity packages for more Google Analytics, Google Tag Manager and data layer implementation details."]}),`
`,e.jsxs(t.p,{children:["To read more about Google Tag Manager and dataLayer usage, see ",e.jsx(t.a,{href:"https://developers.google.com/tag-platform/tag-manager/datalayer",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]})]})}function a(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const o={title:"Get Started/Get Started",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:a};const v=["__page"];export{v as __namedExportsOrder,c as __page,o as default};
