import{Y as a,a as v,C as n,L as g}from"./iframe-D91uVXag.js";import"./preload-helper-Dp1pzeXC.js";const i=()=>a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Lorem ipsum"}),a.jsxs("div",{className:"sidebar-toggler","data-bs-toggle":"collapse","data-bs-target":"#sidebar-left","aria-expanded":"false","aria-controls":"sidebar-left","data-ga-name":"onclick","data-ga-event":"collapse","data-ga-type":"click","data-ga-region":"main content","data-ga-section":"Lorem ipsum","data-ga":"Select section",children:[a.jsx("p",{children:"Select Section"}),a.jsx("span",{className:"fas fa-chevron-up"})]}),a.jsxs("nav",{id:"sidebar-left",className:"sidebar collapse","aria-label":"Secondary",children:[a.jsx("div",{className:"nav-link-container",children:a.jsx("a",{className:"nav-link",href:"#",children:"Default Link"})}),a.jsx("div",{className:"nav-link-container",children:a.jsx("a",{className:"nav-link is-active",href:"#",children:"Active Link"})}),a.jsxs("div",{className:"card card-foldable",children:[a.jsx("div",{className:"card-header",children:a.jsxs("a",{id:"cardOne",className:"collapsed nav-link",href:"#cardBodyOne","data-bs-toggle":"collapse","data-bs-target":"#cardBodyOne","aria-expanded":"false","aria-controls":"cardBodyOne","data-ga-name":"onclick","data-ga-event":"collapse","data-ga-type":"click","data-ga-region":"main content","data-ga-section":"Lorem ipsum","data-ga":"Expandable link sections",children:["Expandable link sections",a.jsx("span",{className:"fas fa-chevron-down ms-1"})]})}),a.jsxs("div",{id:"cardBodyOne",className:"collapse card-body","data-bs-parent":".sidebar",children:[a.jsx("a",{href:"#",className:"nav-link",children:"A Long Link Total that is two or more lines of text"}),a.jsx("a",{href:"#",className:"nav-link",children:"Another link here"}),a.jsx("a",{href:"#",className:"nav-link is-active",children:"One more link"})]})]}),a.jsxs("div",{className:"card card-foldable",children:[a.jsx("div",{className:"card-header",children:a.jsxs("a",{id:"cardTwo",className:"collapsed nav-link","data-bs-toggle":"collapse",href:"#cardBodyTwo",role:"button","aria-expanded":"false","aria-controls":"cardBodyTwo","data-ga-name":"onclick","data-ga-event":"collapse","data-ga-type":"click","data-ga-region":"main content","data-ga-section":"Lorem ipsum","data-ga":"There should only be one open section at a time",children:["There should only be one open section at a time.",a.jsx("span",{className:"fas fa-chevron-down ms-1"})]})}),a.jsxs("div",{id:"cardBodyTwo",className:"collapse card-body","data-bs-parent":".sidebar",children:[a.jsx("a",{href:"#",className:"nav-link",children:"Work it harder"}),a.jsx("a",{href:"#",className:"nav-link",children:"Make it better"}),a.jsx("a",{href:"#",className:"nav-link",children:"Do it faster"}),a.jsx("a",{href:"#",className:"nav-link is-active",children:"Makes us stronger"}),a.jsx("a",{href:"#",className:"nav-link",children:"More than ever"}),a.jsx("a",{href:"#",className:"nav-link",children:"Hour after"}),a.jsx("a",{href:"#",className:"nav-link",children:"Our work is"}),a.jsx("a",{href:"#",className:"nav-link",children:"Never over"})]})]}),a.jsx("div",{className:"nav-link-container",children:a.jsx("a",{className:"nav-link",href:"#",children:"Link between cards"})}),a.jsxs("div",{className:"card card-foldable",children:[a.jsx("div",{className:"card-header",children:a.jsxs("a",{id:"cardThree",className:"collapsed nav-link","data-bs-toggle":"collapse",href:"#cardBodyThree",role:"button","aria-expanded":"false","aria-controls":"cardBodyThree","data-ga-name":"onclick","data-ga-event":"collapse","data-ga-type":"click","data-ga-region":"main content","data-ga-section":"Lorem ipsum","data-ga":"There be gold inside",children:["There be gold inside",a.jsx("span",{className:"fas fa-chevron-down ms-1"})]})}),a.jsxs("div",{id:"cardBodyThree",className:"collapse card-body","data-bs-parent":".sidebar",children:[a.jsx("a",{href:"#",className:"nav-link",children:"Crow's nest square-rigged hands chase"}),a.jsx("a",{href:"#",className:"nav-link",children:"Davy Jones' Locker belaying pin Sail ho mizzen"}),a.jsx("a",{href:"#",className:"nav-link",children:"Lugger to go on account loaded to the gunwalls lad"}),a.jsx("a",{href:"#",className:"nav-link is-active",children:"Skysail fluke overhaul hardtack"}),a.jsx("a",{href:"#",className:"nav-link",children:"Sloop flogging chase guns lee"})]})]}),a.jsx("div",{className:"nav-link-container",children:a.jsx("a",{className:"nav-link",href:"#",children:"Default Link"})}),a.jsx("div",{className:"nav-link-container",children:a.jsx("a",{className:"nav-link",href:"#",children:"Last Link"})})]})]});i.__docgenInfo={description:"",methods:[],displayName:"SidebarComponent"};const k={title:"Atoms/Sidebar/Examples",component:i,args:{simplify:!1},argTypes:{simplify:{type:"boolean"}}},m=({simplify:l,args:p})=>a.jsxs(v,{id:"html-root",children:[!l&&a.jsx(n,{col:"12",children:a.jsx("h1",{children:"Take a look at the sidebar"})}),a.jsx(n,{col:"3",children:a.jsx(i,{...p})}),a.jsx(n,{col:"9",children:!l&&a.jsxs(a.Fragment,{children:[a.jsx("p",{children:"This story isn't about the page content itself. Rather, you should focus your attention on the sidebar navigation element to the left."}),a.jsx("p",{children:"Foldable cards can be mixed in with static navigation links to create a section of content which behaves like an accordion and reveals navigation items which are nested two levels deep."}),a.jsx(g,{})]})})]}),s=m.bind({}),e=m.bind({});e.args={simplify:!0};var o,r,t;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`({
  simplify,
  args
}) => <Container id="html-root">
    {!simplify && <Column col="12">
        <h1>Take a look at the sidebar</h1>
      </Column>}
    <Column col="3">
      <SidebarComponent {...args} />
    </Column>
    <Column col="9">
      {!simplify && <>
          <p>
            This story isn't about the page content itself. Rather, you should
            focus your attention on the sidebar navigation element to the left.
          </p>
          <p>
            Foldable cards can be mixed in with static navigation links to
            create a section of content which behaves like an accordion and
            reveals navigation items which are nested two levels deep.
          </p>
          <LoremContent />
        </>}
    </Column>
  </Container>`,...(t=(r=s.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var c,d,h;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  simplify,
  args
}) => <Container id="html-root">
    {!simplify && <Column col="12">
        <h1>Take a look at the sidebar</h1>
      </Column>}
    <Column col="3">
      <SidebarComponent {...args} />
    </Column>
    <Column col="9">
      {!simplify && <>
          <p>
            This story isn't about the page content itself. Rather, you should
            focus your attention on the sidebar navigation element to the left.
          </p>
          <p>
            Foldable cards can be mixed in with static navigation links to
            create a section of content which behaves like an accordion and
            reveals navigation items which are nested two levels deep.
          </p>
          <LoremContent />
        </>}
    </Column>
  </Container>`,...(h=(d=e.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const b=["Sidebar","SidebarOnly"];export{s as Sidebar,e as SidebarOnly,b as __namedExportsOrder,k as default};
