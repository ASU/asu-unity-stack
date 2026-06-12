import{K as s,J as x,a8 as e}from"./iframe-CkCSEFga.js";import"./preload-helper-Dp1pzeXC.js";const j={title:"Components/SystemAlert",component:x},a={type:s.WARNING,children:"Content",dismissable:!0},i=A=>e.jsx(x,{...A}),t={render:i.bind({}),args:{...a,type:s.INFO,children:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Information (blue): This is a info alert to confirm or notify. It is built using"," ",e.jsx("a",{href:"https://getbootstrap.com/docs/5.0/components/alerts",children:"the Bootstrap 5 .alert-info class"})]}),e.jsxs("p",{children:["Creating a dismissable alert box requires the inclusion of the"," ",e.jsx("code",{children:"alert-dismissable"})," class along with the"," ",e.jsx("code",{children:'data-bs-dismiss="alert"'})," attribute on the close button. Alert messages do not necessarily have to be dismissable."]})]})}},r={render:i.bind({}),args:{...a,type:s.WARNING,children:e.jsxs(e.Fragment,{children:[" ","Warning (orange): This is a warning alert to alert, confirm or notify. It is built using"," ",e.jsx("a",{href:"https://getbootstrap.com/docs/5.0/components/alerts",children:"the Bootstrap 5 .alert-warning class"}),"."]})}},n={render:i.bind({}),args:{...a,type:s.SUCCESS,children:e.jsxs(e.Fragment,{children:["Success (green): This is a success alert to confirm or notify. It is built using"," ",e.jsx("a",{href:"https://getbootstrap.com/docs/5.0/components/alerts",children:"the Bootstrap 5 .alert-success class"}),"."]})}},o={render:i.bind({}),args:{...a,type:s.ERROR,children:e.jsxs(e.Fragment,{children:["Error (red): This is a danger alert used specifically for errors. It is built using"," ",e.jsx("a",{href:"https://getbootstrap.com/docs/5.0/components/alerts",children:"the Bootstrap 5 .alert-danger class"}),"."]})}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: systemAlertTemplate.bind({}),
  args: {
    ...defaultProps,
    type: SystemAlertType.INFO,
    children: <>
        <p>
          Information (blue): This is a info alert to confirm or notify. It is
          built using{" "}
          <a href="https://getbootstrap.com/docs/5.0/components/alerts">
            the Bootstrap 5 .alert-info class
          </a>
        </p>
        <p>
          Creating a dismissable alert box requires the inclusion of the{" "}
          <code>alert-dismissable</code> class along with the{" "}
          <code>data-bs-dismiss=&quot;alert&quot;</code> attribute on the close
          button. Alert messages do not necessarily have to be dismissable.
        </p>
      </>
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: systemAlertTemplate.bind({}),
  args: {
    ...defaultProps,
    type: SystemAlertType.WARNING,
    children: <>
        {" "}
        Warning (orange): This is a warning alert to alert, confirm or notify.
        It is built using{" "}
        <a href="https://getbootstrap.com/docs/5.0/components/alerts">
          the Bootstrap 5 .alert-warning class
        </a>
        .
      </>
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,g,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: systemAlertTemplate.bind({}),
  args: {
    ...defaultProps,
    type: SystemAlertType.SUCCESS,
    children: <>
        Success (green): This is a success alert to confirm or notify. It is
        built using{" "}
        <a href="https://getbootstrap.com/docs/5.0/components/alerts">
          the Bootstrap 5 .alert-success class
        </a>
        .
      </>
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,y,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: systemAlertTemplate.bind({}),
  args: {
    ...defaultProps,
    type: SystemAlertType.ERROR,
    children: <>
        Error (red): This is a danger alert used specifically for errors. It is
        built using{" "}
        <a href="https://getbootstrap.com/docs/5.0/components/alerts">
          the Bootstrap 5 .alert-danger class
        </a>
        .
      </>
  }
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const E=["Info","Warning","Success","Error"];export{o as Error,t as Info,n as Success,r as Warning,E as __namedExportsOrder,j as default};
