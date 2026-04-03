import{j as e}from"./iframe-DF0cKX9M.js";import{u as i,M as o}from"./blocks-foj227X8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DajjpyEo.js";function t(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Organisms/Global Header/Docs/Header main"}),`
`,e.jsx(n.h1,{id:"header-main",children:"Header Main"}),`
`,e.jsxs(n.p,{children:["The design of the main header component utilizes a mobile-first design and does not require a separate set of code for both the desktop and the mobile view. This component is a heavily modified version of the default ",e.jsx(n.code,{children:"navbar"})," component within Bootstrap 5."]}),`
`,e.jsx(n.p,{children:"The component should toggle between the mobile view and the desktop view at any resolution less than 1260px. This rather high breakpoint was an intensional design decision to prevent menus with a lot of links in the navigation from displaying incorrectly at resolutions between 991px and 1260px."}),`
`,e.jsxs(n.p,{children:["If this does not apply to your site, the ",e.jsx(n.a,{href:"?path=/story/organisms-global-header-docs-mobile-breakpoint--page",children:"default code can be modified"})," to display the desktop view at resolutions greater than 991px."]}),`
`,e.jsx(n.p,{children:"The basic markup should resemble the following:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<div className="navbar navbar-expand-xl">
    <a className="navbar-brand" href="#">...</a>
    <button className="navbar-toggler collapsed" type="button">...</button>
    <div className="navbar-container">
        <div className="title subdomain-name">University Technology Office</div>
        <div className="collapse" id="menubar">
            <div className="header-content-container">
                <nav className="navbar-nav" aria-label="Main">
                  <a className="nav-link nav-link-home active" href="/">
                      <span className="d-xl-none">Home</span>
                      <span title="Home" className="fas fa-fw fa-home"></span>
                  </a>
                  ...
                </nav><!-- end .navbar-nav -->
                <form className="navbar-site-buttons form-inline">
                    ...
                </form>
            </div>
            <div className="navbar-mobile-footer pinned">...</div>
        </div>
    </div>
</div>
`})}),`
`,e.jsx(n.h2,{id:"navbar-brand",children:".navbar-brand"}),`
`,e.jsx(n.p,{children:"This contains both the horizontal and vertical logos used in the component."}),`
`,e.jsxs(n.p,{children:["If you are copy/pasting directly from Storybook, you'll want to change the image ",e.jsx(n.code,{children:"src"})," attribute to load the files correctly. The relative path to these files will change depending on your configuration, but within the ",e.jsx(n.code,{children:"@asu"})," NPM package you can find them at ",e.jsx(n.code,{children:"node_modules/@asu/unity-bootstrap-theme/src/img/asu-logo"})," Those will wind up looking something like this:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'<img className="vert" src="{path}/arizona-state-university-logo-vertical.png" alt="Arizona State University" />'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'<img className="horiz" src="{path}/arizona-state-university-logo.png" alt="Arizona State University" />'})}),`
`]}),`
`,e.jsx(n.h2,{id:"navbar-toggler",children:".navbar-toggler"}),`
`,e.jsx(n.p,{children:"Contains the SVG icons needed for opened and closed state of the mobile menu. No need to alter anything here."}),`
`,e.jsx(n.h2,{id:"navbar-container-title",children:".navbar-container .title"}),`
`,e.jsxs(n.p,{children:['The site name and "parent" site name are represented by altering the contents of the ',e.jsx(n.code,{children:".title"})," div in this area. There are two supported configurations of this information. Both the parent titles and the main site titles can be either linked or unlinked in either configuration."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Title, with parent"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<!-- Recommended approach is to provide a link to the parent site only. -->
<div className="title">
  <a href="#" className="unit-name">Ira A. Fulton Schools of Engineering</a>
  <span className="subdomain-name">School of Computing, Informatics, and Decisions Systems Engineering</span>
</div>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Title, no parent"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<!-- Linked -->
<div className="title subdomain-name"><a href="#">Landing Page Title</a></div>

<!-- Unlinked -->
<div className="title subdomain-name">University Technology Office</div>
`})}),`
`,e.jsx(n.h2,{id:"navbar-nav",children:".navbar-nav"}),`
`,e.jsx(n.p,{children:"The contents of this section are the actual navigation links and buttons for your site. Please see the next section for more information about how to build all of the specific features of the menu including the dropdown, mega menus and CTA buttons."}),`
`,e.jsxs(n.p,{children:["Immediately following ",e.jsx(n.code,{children:".navbar-nav"})," should be a link for the home page of the site. In almost every case, this link should look exactly like the following:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<a className="nav-link nav-link-home active" href="/">
    <span className="d-xl-none">Home</span>
    <span title="Home" className="fas fa-fw fa-home"></span>
</a>
`})}),`
`,e.jsx(n.p,{children:'This link provides the markup for the home icon in the desktop view as well as the "home" text and link in the mobile view.'}),`
`,e.jsx(n.h2,{id:"formnavbar-site-buttons",children:"form.navbar-site-buttons"}),`
`,e.jsxs(n.p,{children:["The form element immediately following ",e.jsx(n.code,{children:".navbar-nav"})," is the intended container element for the top-level call-to-action buttons that can be found as a part of the menu system. When present, they will always be aligned to the right side of the component and vertically aligned with either the ",e.jsx(n.code,{children:"navbar-nav"})," element or the site title if the navbar is not present."]}),`
`,e.jsx(n.p,{children:"Use the medium sized buttons for this application. A maximum of two buttons are allowed."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<form className="navbar-site-buttons form-inline">
  <a href="#" className="btn btn-md btn-maroon">CTA Button 1</a>
  <a href="#" className="btn btn-md btn-dark">CTA Button 2</a>
  <!-- <a href="#" className="btn btn-md btn-gold">Gold button is OK</a> -->
</form>
`})}),`
`,e.jsx(n.h2,{id:"navbar-mobile-footer",children:".navbar-mobile-footer"}),`
`,e.jsxs(n.p,{children:["This section of the header markup houses the footer at the bottom of the mobile menu. The links in this section are generally the same set of links found in the ",e.jsx(n.code,{children:"#top-header"})," section. But the links are duplicated in the markup for simplicity and accessibility purposes."]}),`
`,e.jsx(n.p,{children:"The structure of this element looks like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<div className="navbar-mobile-footer">
  <form className="navbar-mobile-search" action="https://search.asu.edu/search">
    ...
  </form>
  <div className="nav-grid">
    ...
    <div className="nav-link login-status">
      ...
    </div>
  </div>
</div>
`})}),`
`,e.jsxs(n.p,{children:["Just like the ",e.jsx(n.code,{children:"#top-header"})," element, the mobile footer contains a targetable landmark for various applications to return a logged in / logged out status. Inject your results into ",e.jsx(n.code,{children:".navbar-mobile-footer .login-status"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`<!-- Logged in -->
Sparky<a className="signout" href="https://webapp4.asu.edu/myasu/Signout">Sign Out</a>

<!-- Logged out. (This is the normal format of links in this area.) -->
<a className="nav-link" href="https://weblogin.asu.edu/cgi-bin/login">Sign In</a>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".navbar-mobile-footer .login-status .signout"})," will wrap the result in parenthesis (via CSS psudo-elements) and provide a small left margin as a spacer for any leading text."]})]})}function h(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{h as default};
