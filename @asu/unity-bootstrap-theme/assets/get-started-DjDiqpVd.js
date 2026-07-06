import{Y as e}from"./iframe-BwbgSoc-.js";import{u as o,d as s}from"./blocks-Bo8RgZPp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BNc6ItrQ.js";function i(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Get Started/Get Started"}),`
`,e.jsx(n.h1,{id:"asu-unity-bootstrap-theme",children:"ASU Unity Bootstrap Theme"}),`
`,e.jsx(n.h2,{id:"quickstart-guide",children:"Quickstart Guide"}),`
`,e.jsx(n.p,{children:"The Unity Bootstrap Theme is a Bootstrap 5-based web UI kit implementing ASU's Web Standards. Developers use the Unity Bootstrap Theme to build accessible and ASU Web Standards 2.0 compliant web sites and applications."}),`
`,e.jsx(n.p,{children:"This is the Storybook reference site for the Unity Bootstrap theme. Browse the design components here to identify one you want to use. Implement the HTML markup associated with that design component in your site or application, include the Unity Bootstrap Theme's CSS and JS files, and you're in business."}),`
`,e.jsx(n.h3,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bootstrap 5:"})," Unity is built on top of Bootstrap 5, so you get all the Bootstrap goodness, plus some extra ASU-specific components and styles. ",e.jsx(n.strong,{children:"Bootstrap files,including CSS and Javascript, are bundled with Unity"})," so you don't need to include them separately."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clean, easy to use styles and scripts:"})," thanks to the helper utilities and variables provided by the Bootstrap 5 team."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font Awesome is no longer included with Unity!"})," If using in a project outside of webspark, you will need to include Font Awesome yourself. See ",e.jsx(n.a,{href:"https://fontawesome.com/start",rel:"nofollow",children:"here"})," for instructions on how to do that."]}),`
`]}),`
`,e.jsx(n.h2,{id:"-including-unity-in-your-project",children:"❯ Including Unity in your project"}),`
`,e.jsxs(n.p,{children:["We bundle the necessary CSS and Javascript in the ",e.jsx(n.code,{children:"dist/"})," folder. There are more options so you don't have to include CSS you don't use."]}),`
`,e.jsx(n.h3,{id:"css",children:"CSS"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dist/css/unity-bootstrap-theme.bundle.css"})," - base theme with header and footer CSS"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dist/css/unity-bootstrap-theme.css"})," - base theme without header and footer CSS"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dist/css/unity-bootstrap-header-footer.css"})," (optional) - header and footer CSS only - don't use if using the Unity ",e.jsx(n.code,{children:"component-header-footer"})," React component"]}),`
`]}),`
`,e.jsx(n.h3,{id:"javascript",children:"Javascript"}),`
`,e.jsxs(n.p,{children:["Unity Bootstrap Theme includes JavaScript for interactive components and Google Analytics data layer integration. ",e.jsx(n.strong,{children:"All scripts automatically initialize on window load"})," - you just need to include them in your project."]}),`
`,e.jsx(n.p,{children:"We provide 3 formats for different use cases:"}),`
`,e.jsx(n.h4,{id:"for-browserhtml-projects-umd",children:e.jsx(n.strong,{children:"For Browser/HTML Projects (UMD)"})}),`
`,e.jsx(n.p,{children:"Include the UMD bundle via script tag. Everything auto-initializes on page load:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- Include Unity Bootstrap JS -->
<script src="path/to/@asu/unity-bootstrap-theme/dist/js/unity-bootstrap.umd.js"><\/script>

<!-- Optional: Bootstrap JS (if not already included) -->
<script src="path/to/@asu/unity-bootstrap-theme/dist/js/bootstrap.bundle.min.js"><\/script>

<!-- Optional: Chart.js (only if using donut chart component) -->
<script src="path/to/@asu/unity-bootstrap-theme/dist/js/chart.min.js"><\/script>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Manual initialization"})," (only needed if script loads after page load or re-initialization required):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script>
  // Global variable \`unityBootstrap\` is available
  unityBootstrap.initDataLayer();
  unityBootstrap.initGlobalHeader();
  // ... or any other init function
<\/script>
`})}),`
`,e.jsx(n.h4,{id:"for-reactmodern-javascript-apps-es-module",children:e.jsx(n.strong,{children:"For React/Modern JavaScript Apps (ES Module)"})}),`
`,e.jsxs(n.p,{children:["Import at your app's entry point (e.g., ",e.jsx(n.code,{children:"src/index.js"})," or ",e.jsx(n.code,{children:"src/main.jsx"}),"). Auto-initializes on window load:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Unity Bootstrap JS - auto-initializes on window load
import '@asu/unity-bootstrap-theme/dist/js/unity-bootstrap.es.js';

// Import Unity CSS
import '@asu/unity-bootstrap-theme/dist/css/unity-bootstrap-theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`})}),`
`,e.jsx(n.h4,{id:"available-formats",children:e.jsx(n.strong,{children:"Available Formats"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dist/js/unity-bootstrap.umd.js"})," - Universal Module Definition (browser/script tags)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dist/js/unity-bootstrap.es.js"})," - ES Module (React/modern bundlers)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dist/js/unity-bootstrap.cjs.js"})," - CommonJS (Node.js)"]}),`
`]}),`
`,e.jsxs(n.h4,{id:"vendor-files-included-for-convenience",children:[e.jsx(n.strong,{children:"Vendor Files"})," (Included for convenience)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dist/js/bootstrap.bundle.min.js"})," - Unaltered Bootstrap JS"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dist/js/chart.min.js"})," - Only needed for donut chart component"]}),`
`]}),`
`,e.jsx(n.h4,{id:"available-initialization-functions",children:e.jsx(n.strong,{children:"Available Initialization Functions"})}),`
`,e.jsx(n.p,{children:"All functions listed below auto-initialize on window load. Manual calls are only needed for edge cases:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"initAnchorMenu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"initBlockquoteAnimation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"initCalendar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"initChart"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"initDataLayer"})," - Required for Google Analytics tracking"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"initFixedTable"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"initGlobalHeader"})," - Required for header functionality if using the HTML markup only. Not needed if using the React header in ",e.jsx(n.code,{children:"@asu/component-header-footer"})," component."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"initHeroesVideo"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"initImageParallax"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"initModals"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"initRankingCard"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"initTabbedPanels"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"initVideo"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"initCardBodies"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"initCollapse"})}),`
`]}),`
`,e.jsx(n.h2,{id:"-how-to--use-the-unity-storybook-reference-site",children:"❯ How to  use the Unity Storybook reference site"}),`
`,e.jsx(n.p,{children:`The Storybook reference site for the Unity Bootstrap Theme exists to provide a reference library of components and the markup to use to implement them in your site once you've included the library's CSS and Javascript in your site or application.
Some components also have controls so you can make changes and see how those changes will appear in your site.`}),`
`,e.jsx(n.h2,{id:"-how-to-use-the-private-package-registry",children:"❯ How to use the private package registry"}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"https://github.com/ASU/asu-unity-stack?tab=readme-ov-file#how-to-use-the-private-package-registry",rel:"nofollow",children:"Unity README"})," for instructions on how to use the private package registry."]}),`
`,e.jsx(n.h3,{id:"troubleshooting-errors",children:"TROUBLESHOOTING ERRORS"}),`
`,e.jsxs(n.p,{children:["If you get errors having to do with yarn not being able to find a package on the registry, try running ",e.jsx(n.code,{children:"yarn config list"})," at the project root and look for the ",e.jsx(n.code,{children:"registry:"})," key under yarn config. If it is not set to ",e.jsx(n.code,{children:"https://registry.yarnpkg.com"})," then run ",e.jsx(n.code,{children:"yarn config delete registry"})," and recheck config."]}),`
`,e.jsxs(n.p,{children:["For custom compilation and sub-themes using the ",e.jsx(n.code,{children:"unity-bootstrap-theme"})," package, make sure your bundling/compilation tool is compatible with the scss. For example, if you are usiing Gulp for scss compilation, you will need to handle the new module imports used in our webpack configuration."]}),`
`,e.jsxs(n.p,{children:["In the old bs4 theme we would import some bootstrap scss with ",e.jsx(n.code,{children:'@import "../../node_modules/bootstrap/scss/root";'}),`
In the new theme it is imported directly with  `,e.jsx(n.code,{children:'@import "bootstrap/scss/functions";'})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://asu-tech.slack.com/archives/C01ABUVU8LQ/p1695234506292239",rel:"nofollow",children:"This slack thread"})," has some more information about this issue and using Gulp. ",e.jsx(n.em,{children:"Must be a member of the ASU Community Slack workspace to view."})]}),`
`,e.jsx(n.h2,{id:"advanced-details-for-unity-developers-and-contributors",children:"Advanced Details for Unity Developers and Contributors"}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.a,{href:"https://github.com/ASU/asu-unity-stack#advanced-details-for-unity-developers-and-contributors",rel:"nofollow",children:"this section"})," of our README for more information about the Unity monorepo and how to contribute to the project."]}),`
`,e.jsx(n.h2,{id:"-google-analytics-integration",children:"> Google Analytics integration"}),`
`,e.jsx(n.p,{children:"Google Analytics integration for Unity is handled via Google Tag Manager. During user interaction with Unity components, usage data is captured by Google Tag Manager and delivered to Google Analytics."}),`
`,e.jsxs(n.p,{children:["This is enabled using the window ",e.jsx(n.code,{children:"dataLayer"})," object. For components in each package of this repository we take the ",e.jsx(n.code,{children:"dataLayer"})," object, with GTM and the dataLayer having already been initialized (by the host application or CMS - see ",e.jsx(n.a,{href:"https://unity.web.asu.edu",rel:"nofollow",children:"https://unity.web.asu.edu"})," for details on GTM setup), and push events using the ",e.jsx(n.code,{children:"push()"})," method of the ",e.jsx(n.code,{children:"dataLayer"}),". For each object included in the array, Google Tag manager catches that event."]}),`
`,e.jsxs(n.p,{children:["Depending on the package, this integration, of dispatching events, is handled in different ways. For ",e.jsx(n.code,{children:"component-header"}),", ",e.jsx(n.code,{children:"components-library"})," header and ",e.jsx(n.code,{children:"component-footer"}),", we use a service that pushes each event if the ",e.jsx(n.code,{children:"dataLayer"})," object exists and that service method is called on each jsx element event handler. For example:"]}),`
`,e.jsx(n.h4,{id:"srccomponentjs",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"src/component.js"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-JS",children:`<a href="#" onFocus={() => trackGAEvent(customEvent)}>Anchor Text</a>
`})}),`
`,e.jsx(n.h4,{id:"servicesgoogleanalyticsjs",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"services/googleAnalytics.js"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-JS",children:`const trackGAEvent = (event) => {
  const { dataLayer } = window;
  if (dataLayer) dataLayer.push(event);
}
`})}),`
`,e.jsxs(n.p,{children:["For the ",e.jsx(n.code,{children:"unity-bootstrap-theme"})," package the events are dispatched by an ",e.jsx(n.code,{children:"eventListener"}),", for the ",e.jsx(n.code,{children:"focus"}),", ",e.jsx(n.code,{children:"click"})," or ",e.jsx(n.code,{children:"change"})," event handler, for each html element that needs to be included. For example:"]}),`
`,e.jsx(n.h4,{id:"srccomponenthtml",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"src/component.html"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-JS",children:`<a href="#" data-ga="">Anchor Text</a>
`})}),`
`,e.jsx(n.h4,{id:"srccomponentjs-1",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"src/component.js"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-JS",children:`const pushGAEvent = (event) => {
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
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"https://unity.web.asu.edu/",rel:"nofollow",children:"https://unity.web.asu.edu/"})," as well as the README.md's in individual Unity packages for more Google Analytics, Google Tag Manager and data layer implementation details."]}),`
`,e.jsxs(n.p,{children:["To read more about Google Tag Manager and dataLayer usage, see ",e.jsx(n.a,{href:"https://developers.google.com/tag-platform/tag-manager/datalayer",rel:"nofollow",children:"here"}),"."]})]})}function l(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{l as default};
