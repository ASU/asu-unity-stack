import{Y as n}from"./iframe-DAx8JK7O.js";import{u as s,d as a}from"./blocks-4ZfGtOX8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DbAEcZIC.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Atoms/Anchor Menu/Usage Guide"}),`
`,n.jsx(e.h1,{id:"anchor-menu-usage-guide",children:"Anchor Menu Usage Guide"}),`
`,n.jsx(e.p,{children:"The UDS Anchor Menu is a navigation component that helps users jump to different sections of a long page. It automatically tracks scroll position, highlights the currently visible section, and can attach to the page header when scrolling."}),`
`,n.jsx(e.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,n.jsx(e.p,{children:"Before using the anchor menu, ensure you have:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ASU Unity Bootstrap Theme"})," CSS loaded in your project"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ASU Unity Bootstrap Theme"})," JavaScript loaded (includes the anchor menu initialization)"]}),`
`,n.jsxs(e.li,{children:["An ",n.jsx(e.strong,{children:"ASU global header"})," with ID ",n.jsx(e.code,{children:"asu-header"})," or ",n.jsx(e.code,{children:"asuHeader"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Font Awesome"})," for icons (optional, but recommended)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"basic-html-structure",children:"Basic HTML Structure"}),`
`,n.jsx(e.p,{children:"The anchor menu requires specific HTML structure to function properly:"}),`
`,n.jsx(e.h3,{id:"1-the-anchor-menu-container",children:"1. The Anchor Menu Container"}),`
`,n.jsxs(e.p,{children:["Create an element with ID ",n.jsx(e.code,{children:"uds-anchor-menu"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div id="uds-anchor-menu" class="uds-anchor-menu uds-anchor-menu-expanded-lg">
  <div class="container">
    <div class="uds-anchor-menu-wrapper">
      <h2>
        <button
          type="button"
          class="mobile-menu-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#anchorMenuNav"
          aria-expanded="false"
          aria-controls="anchorMenuNav"
        >
          On This Page: <span class="fas fa-chevron-down"></span>
        </button>
      </h2>
      <div id="anchorMenuNav" class="card card-body collapse">
        <nav class="nav" aria-label="Page navigation">
          <!-- Anchor links go here -->
        </nav>
      </div>
    </div>
  </div>
</div>
`})}),`
`,n.jsx(e.h3,{id:"2-adding-anchor-links",children:"2. Adding Anchor Links"}),`
`,n.jsxs(e.p,{children:["Inside the ",n.jsx(e.code,{children:"<nav>"})," element, add links that point to section IDs on your page:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<a
  class="nav-link"
  href="#section-id"
  data-ga-name="onclick"
  data-ga-event="link"
  data-ga-action="click"
  data-ga-type="internal link"
  data-ga-region="main content"
  data-ga-section="page section name"
  data-ga-text="link text"
>
  <span class="fas fa-link"></span>Section Title
</a>
`})}),`
`,n.jsx(e.h3,{id:"3-target-sections",children:"3. Target Sections"}),`
`,n.jsx(e.p,{children:"Create sections on your page with matching IDs:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="container">
  <div id="section-id">
    <h2>Section Title</h2>
    <p>Your content here...</p>
  </div>
</div>
`})}),`
`,n.jsx(e.h2,{id:"complete-example",children:"Complete Example"}),`
`,n.jsx(e.p,{children:"Here's a complete working example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anchor Menu Example</title>

  <!-- Unity Bootstrap Theme CSS -->
  <link rel="stylesheet" href="path/to/unity-bootstrap-theme.css">

  <!-- Font Awesome (optional) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>
<body>
  <!-- ASU Global Header (required) -->
  <div id="asu-header">
    <!-- Your header content -->
  </div>

  <!-- Hero or page header -->
  <div class="container-fluid">
    <div class="uds-hero-lg">
      <h1>Page Title</h1>
    </div>
  </div>

  <!-- Anchor Menu -->
  <div id="uds-anchor-menu" class="uds-anchor-menu uds-anchor-menu-expanded-lg">
    <div class="container">
      <div class="uds-anchor-menu-wrapper">
        <h2>
          <button
            type="button"
            class="mobile-menu-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#anchorMenuNav"
            aria-expanded="false"
            aria-controls="anchorMenuNav"
          >
            On This Page: <span class="fas fa-chevron-down"></span>
          </button>
        </h2>
        <div id="anchorMenuNav" class="card card-body collapse">
          <nav class="nav" aria-label="Page navigation">
            <a class="nav-link" href="#introduction">
              <span class="fas fa-link"></span>Introduction
            </a>
            <a class="nav-link" href="#overview">
              <span class="fas fa-link"></span>Overview
            </a>
            <a class="nav-link" href="#details">
              <span class="fas fa-link"></span>Details
            </a>
            <a class="nav-link" href="#conclusion">
              <span class="fas fa-link"></span>Conclusion
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Page Content with Target Sections -->
  <div class="container">
    <div id="introduction">
      <h2>Introduction</h2>
      <p>Your introduction content...</p>
    </div>

    <div id="overview">
      <h2>Overview</h2>
      <p>Your overview content...</p>
    </div>

    <div id="details">
      <h2>Details</h2>
      <p>Your detailed content...</p>
    </div>

    <div id="conclusion">
      <h2>Conclusion</h2>
      <p>Your conclusion content...</p>
    </div>
  </div>

  <!-- Unity Bootstrap Theme JS (includes anchor menu initialization) -->
  <script src="path/to/unity-bootstrap-theme.js"><\/script>
</body>
</html>
`})}),`
`,n.jsx(e.h2,{id:"dynamic-link-generation-javascriptcms-integration",children:"Dynamic Link Generation (JavaScript/CMS Integration)"}),`
`,n.jsx(e.p,{children:"If you're building the anchor menu dynamically (like in a CMS), you can programmatically add links to the menu. Here's a framework-agnostic approach:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  const anchorMenuNav = document.querySelector('#uds-anchor-menu nav');
  const heading = document.querySelector('.uds-anchor-menu-wrapper h2').textContent.toLowerCase().trim();

  // Find all elements you want to link to (e.g., elements with a specific class)
  const linkableElements = document.querySelectorAll('.anchor-target');

  linkableElements.forEach(function(element) {
    // Get or create an ID for the element
    const elementId = element.id || \`section-\${element.dataset.title.toLowerCase().replace(/\\s+/g, '-')}\`;
    if (!element.id) {
      element.id = elementId;
    }

    // Create the anchor link
    const linkTitle = element.dataset.title || element.querySelector('h2').textContent;
    const icon = element.dataset.icon || '<span class="fas fa-link"></span>';

    const link = document.createElement('a');
    link.className = 'nav-link';
    link.href = \`#\${elementId}\`;
    link.setAttribute('data-ga-event', 'link');
    link.setAttribute('data-ga-action', 'click');
    link.setAttribute('data-ga-name', 'onclick');
    link.setAttribute('data-ga-type', 'internal link');
    link.setAttribute('data-ga-region', 'main content');
    link.setAttribute('data-ga-section', heading);
    link.setAttribute('data-ga-text', linkTitle.toLowerCase());
    link.innerHTML = \`\${icon}\${linkTitle}\`;

    // Append to the navigation menu
    anchorMenuNav.appendChild(link);
  });
});
`})}),`
`,n.jsx(e.h3,{id:"html-for-dynamic-example",children:"HTML for Dynamic Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- Mark sections that should appear in the anchor menu -->
<div class="anchor-target" data-title="Getting Started">
  <h2>Getting Started</h2>
  <p>Content here...</p>
</div>

<div class="anchor-target" data-title="Advanced Topics" data-icon='<span class="fas fa-star"></span>'>
  <h2>Advanced Topics</h2>
  <p>More content...</p>
</div>
`})}),`
`,n.jsx(e.h2,{id:"styling-options",children:"Styling Options"}),`
`,n.jsx(e.p,{children:"The anchor menu component supports several CSS classes for different behaviors:"}),`
`,n.jsx(e.h3,{id:"expansion-breakpoints",children:"Expansion Breakpoints"}),`
`,n.jsx(e.p,{children:"Control when the menu expands to full width:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".uds-anchor-menu-expanded-sm"})," - Expands at small breakpoint (≥576px)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".uds-anchor-menu-expanded-md"})," - Expands at medium breakpoint (≥768px)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".uds-anchor-menu-expanded-lg"})," - Expands at large breakpoint (≥992px)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:".uds-anchor-menu-expanded-xl"})," - Expands at extra-large breakpoint (≥1200px)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- Example: Expands at large screens -->
<div id="uds-anchor-menu" class="uds-anchor-menu uds-anchor-menu-expanded-lg">
  <!-- ... -->
</div>
`})}),`
`,n.jsx(e.h2,{id:"important-requirements",children:"Important Requirements"}),`
`,n.jsx(e.h3,{id:"1-element-ids",children:"1. Element IDs"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["The anchor menu container ",n.jsx(e.strong,{children:"must"})," have ID ",n.jsx(e.code,{children:"uds-anchor-menu"})]}),`
`,n.jsxs(e.li,{children:["Your page ",n.jsx(e.strong,{children:"must"})," have a global header with ID ",n.jsx(e.code,{children:"asu-header"})," or ",n.jsx(e.code,{children:"asuHeader"})]}),`
`,n.jsxs(e.li,{children:["All target sections ",n.jsx(e.strong,{children:"must"})," have unique IDs matching the ",n.jsx(e.code,{children:"href"})," values in your anchor links"]}),`
`]}),`
`,n.jsx(e.h3,{id:"2-link-structure",children:"2. Link Structure"}),`
`,n.jsx(e.p,{children:"Each anchor link should:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Have class ",n.jsx(e.code,{children:"nav-link"})]}),`
`,n.jsxs(e.li,{children:["Point to a valid section ID with ",n.jsx(e.code,{children:'href="#section-id"'})]}),`
`,n.jsx(e.li,{children:"Include Google Analytics data attributes (optional but recommended for tracking)"}),`
`]}),`
`,n.jsx(e.h3,{id:"3-automatic-initialization",children:"3. Automatic Initialization"}),`
`,n.jsx(e.p,{children:"The anchor menu automatically initializes on page load when:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The Unity Bootstrap Theme JavaScript is loaded"}),`
`,n.jsxs(e.li,{children:["An element with ID ",n.jsx(e.code,{children:"uds-anchor-menu"})," exists"]}),`
`,n.jsx(e.li,{children:"A global header element exists"}),`
`,n.jsx(e.li,{children:"The anchor links point to valid sections"}),`
`]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsx(e.p,{children:"The anchor menu provides these automatic behaviors:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Scroll Tracking"})," - Highlights the link for the section currently most visible in the viewport"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Header Attachment"})," - When scrolling down, the menu attaches to the bottom of the global header"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Smooth Scrolling"})," - Clicking an anchor link smoothly scrolls to position the section at 25% from the top of viewport"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mobile Collapse"})," - On smaller screens, the menu collapses and can be toggled with the heading"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Active States"})," - Automatically adds/removes ",n.jsx(e.code,{children:"active"})," class to links based on scroll position"]}),`
`]}),`
`,n.jsx(e.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,n.jsx(e.h3,{id:"menu-not-appearing",children:"Menu Not Appearing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Verify the element has ID ",n.jsx(e.code,{children:"uds-anchor-menu"})]}),`
`,n.jsx(e.li,{children:"Check that the Unity Bootstrap Theme JavaScript is loaded"}),`
`,n.jsxs(e.li,{children:["Ensure a global header with ID ",n.jsx(e.code,{children:"asu-header"})," or ",n.jsx(e.code,{children:"asuHeader"})," exists"]}),`
`]}),`
`,n.jsx(e.h3,{id:"links-not-working",children:"Links Not Working"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Confirm target section IDs exactly match the ",n.jsx(e.code,{children:"href"})," values (without the ",n.jsx(e.code,{children:"#"}),")"]}),`
`,n.jsx(e.li,{children:"Check browser console for warnings about missing elements"}),`
`,n.jsx(e.li,{children:"Verify sections exist in the DOM when the page loads"}),`
`]}),`
`,n.jsx(e.h3,{id:"incorrect-highlighting",children:"Incorrect Highlighting"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ensure target sections have sufficient content/height to be detected"}),`
`,n.jsx(e.li,{children:"Check that section IDs are unique"}),`
`,n.jsxs(e.li,{children:["Verify sections aren't hidden with ",n.jsx(e.code,{children:"display: none"})," or ",n.jsx(e.code,{children:"visibility: hidden"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:"The anchor menu includes accessibility features:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Uses semantic ",n.jsx(e.code,{children:"<nav>"})," element with ",n.jsx(e.code,{children:"aria-label"})]}),`
`,n.jsx(e.li,{children:"Includes proper ARIA attributes for collapsible sections"}),`
`,n.jsx(e.li,{children:"Supports keyboard navigation"}),`
`,n.jsx(e.li,{children:"Links have descriptive text and proper contrast"}),`
`]}),`
`,n.jsx(e.p,{children:"Make sure to:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep link text descriptive and meaningful"}),`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:"aria-label"})," on the ",n.jsx(e.code,{children:"<nav>"})," element to describe its purpose"]}),`
`,n.jsx(e.li,{children:"Include proper ARIA attributes on collapsible elements"}),`
`]})]})}function d(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{d as default};
