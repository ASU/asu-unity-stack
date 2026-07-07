import{Y as n}from"./iframe-C5aesD81.js";import{u as s,d as i}from"./blocks-C-K7N3sB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D6SiRNK3.js";function o(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Organisms/Global Header/Docs/Navbar options"}),`
`,n.jsx(e.h1,{id:"navbar-options",children:"Navbar Options"}),`
`,n.jsx(e.p,{children:"The list of links within the navbar breaks from the normal tradition of a cumbersome unordered list of links for accessibility purposes and code readability. There are three basic structures for links within the navbar."}),`
`,n.jsx(e.h1,{id:"basic-links",children:"Basic Links"}),`
`,n.jsx(e.p,{children:"The most basic representation of a link uses the default Bootstrap class."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<a className="nav-link" href="#">Tour</a>
`})}),`
`,n.jsx(e.h1,{id:"dropdown-menus",children:"Dropdown Menus"}),`
`,n.jsx(e.p,{children:"The anatomy of a dropdown menu breaks somewhat from you would find in Bootstrap to allow for a couple of customizations within our design system. A single dropdown menu looks like this."}),`
`,n.jsx(e.p,{children:"The maximum number of links recommended in any one column is eight."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<div className="nav-item dropdown">
  <a className="nav-link" href="#" id="dropdown-one-col" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
    <span className="fa fa-chevron-down"></span>
  </a>
  <div className="dropdown-menu dropdown-columns" >
    <div className="dropdown-col">
      <a className="dropdown-item" href="#">Navigation Link</a>
      <a className="dropdown-item" href="#">Another Link</a>
      <a className="dropdown-item" href="#">Third</a>
    </div>
  </div>
</div>
`})}),`
`,n.jsxs(e.p,{children:["The two column dropdown variant adds a second ",n.jsx(e.code,{children:".dropdown-col"})," to the ",n.jsx(e.code,{children:".dropdown-columns"})," container above. Our design system only allows for a maximum of two columns of links in this type of dropdown menu. (For more than three columns, use a ",n.jsx(e.a,{href:"?path=/Organisms/docs-global-header-navbar-options--page#mega-menus",children:"mega menu"}),".)"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<div className="nav-item dropdown">
  <a className="nav-link" href="#" id="dropdown-one-col" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
    <span className="fa fa-chevron-down"></span>
  </a>
  <div className="dropdown-menu dropdown-columns" >
    <div className="dropdown-col">
      <a className="dropdown-item" href="#">Link</a>
      <a className="dropdown-item" href="#">Link</a>
    </div>
    <div className="dropdown-col">
      <a className="dropdown-item" href="#">Link</a>
      <a className="dropdown-item" href="#">Link</a>
    </div>
  </div>
</div>
`})}),`
`,n.jsx(e.h1,{id:"dropdown-headers-and-buttons",children:"Dropdown headers and buttons"}),`
`,n.jsx(e.p,{children:"Dropdown columns can also optionally include headers at the top of each column as well as a call to action button at the base of each column."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Column headers are ",n.jsx(e.code,{children:"<h3>"})," tags"]}),`
`,n.jsxs(e.li,{children:["CTA buttons are of the ",n.jsx(e.code,{children:"btn-small"})," variety."]}),`
`,n.jsx(e.li,{children:"All button colors are allowed in this context."}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<div className="dropdown-col">
  <h3>Column Header</h3>
  <a className="dropdown-item" href="#">Link</a>
  <a className="dropdown-item" href="#">Link</a>
  <a href="#" className="btn btn-sm btn-dark">Action</a>
</div>
`})}),`
`,n.jsx(e.h1,{id:"mega-menus",children:"Mega menus"}),`
`,n.jsx(e.p,{children:'In the default Boostrap menu system a "mega menu" is not a defined element. The markup in use within our component takes advantage of a few utility classes and the default Bootstrap row and column system to provide consistency with the normal layout grid.'}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use a mega menu for when you need at least three columns of links under one menu item."}),`
`,n.jsx(e.li,{children:"It is recommended that all columns within a mega menu include column headers for better visual navigation within a mobile device context."}),`
`,n.jsx(e.li,{children:"Just like with a traditional dropdown menu, the recommended maximum number of individual links in one column is eight."}),`
`]}),`
`,n.jsx(e.p,{children:"The three column variant of a mega menu looks like this:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<div className="nav-item dropdown megamenu">
  <a className="nav-link" href="#" id="megamenu-three-col" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Mega Menu (3 col)
    <span className="fa fa-chevron-down"></span>
  </a>
  <div className="dropdown-menu" >
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <h3>Column one</h3>
          <a className="dropdown-item" href="#">Link</a>
          <a className="dropdown-item" href="#">Link</a>
        </div>
        <div className="col-lg">
          <h3>Column two</h3>
          <a className="dropdown-item" href="#">Link</a>
          <a className="dropdown-item" href="#">Link</a>
        </div>
        <div className="col-lg">
          <h3>Column three</h3>
          <a className="dropdown-item" href="#">Link</a>
          <a className="dropdown-item" href="#">Link</a>
        </div>
      </div>
    </div>
  </div>
</div>
`})}),`
`,n.jsx(e.h2,{id:"adding-more-columns-to-the-mega-menu",children:"Adding more columns to the mega menu"}),`
`,n.jsxs(e.p,{children:["To extend the menu to the four and five column variants, add another ",n.jsx(e.code,{children:'<div className="col-lg"></div>'})," to the designated row and fill it with your favorite links. Serve chilled with an olive or two as a garnish."]}),`
`,n.jsx(e.p,{children:"The mega menu system has also been tested with two and six column variations, although neither of these appear as options in the design document."}),`
`,n.jsx(e.h2,{id:"mega-menu-button-options",children:"Mega menu button options"}),`
`,n.jsx(e.p,{children:"Call to action buttons can be included within a mega menu in one of two locations. Actions that correspond with a list of links contained within one column can be placed inline with the corresponding column."}),`
`,n.jsx(e.p,{children:"The markup for this resembles the markup for dropdown menus and follows the same rules."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Buttons are of the ",n.jsx(e.code,{children:"btn-small"})," variety."]}),`
`,n.jsx(e.li,{children:"All button colors are allowed in this context."}),`
`,n.jsx(e.li,{children:"One button per column."}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<div className="col-lg">
  <h3>Column three</h3>
  <a className="dropdown-item" href="#">Link</a>
  <a className="dropdown-item" href="#">Link</a>
  <a href="#" className="btn btn-sm btn-dark">Column action</a>
</div>
`})}),`
`,n.jsxs(e.p,{children:["It is also possible to define a set of call to action buttons that correspond to the entire collection of links in the mega menu option. These buttons are added to the markup in a separate designated ",n.jsx(e.code,{children:".row .with-buttons"})," following the main row for the link columns."]}),`
`,n.jsx(e.p,{children:"The same rules apply for the button sizes and alllowed colors. A maximum of two buttons should be used in this space."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<div className="dropdown-menu" >
  <div className="container">
    <div className="row">
      ...
      <div className="col-lg">
        <h3>Column four</h3>
        <a className="dropdown-item" href="#">Link</a>
        <a className="dropdown-item" href="#">Link</a>
      </div>
      ...
    </div>
    <div className="row with-buttons">
      <div className="col-lg-12">
        <a href="#" className="btn btn-sm btn-gold">Mega menu action</a>
        <a href="#" className="btn btn-sm btn-gold">Secondary action</a>
      </div>
    </div>
  <div>
</div>
`})})]})}function c(a={}){const{wrapper:e}={...s(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(o,{...a})}):o(a)}export{c as default};
