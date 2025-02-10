import{j as a}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{d as g}from"./Layout-Bte-rkYZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";const m={title:"Molecules/Pagination/Templates",decorators:[g],argTypes:{bgColor:{name:"Background (With Border Only)",options:["None","uds-bg-gray","uds-bg-dark"],mapping:{None:""},control:{type:"radio"}},border:{name:"Border",control:{type:"boolean"}}},args:{bgColor:"None",border:!1}},e=({border:l,bgColor:s})=>a.jsx("nav",{"aria-label":"Page navigation example",children:a.jsxs("ul",{className:`pagination ${l?"justify-content-center border p-2":""} ${s}`,children:[a.jsx("li",{className:"page-item disabled",children:a.jsx("a",{"aria-label":"Previous page","aria-disabled":!0,className:"page-link page-link-icon",href:"#"})}),a.jsxs("li",{className:"page-item active",children:[a.jsx("a",{"aria-current":"page","aria-label":"Page 1",className:"page-link",href:"#","data-ga-event":"select","data-ga-action":"click","data-ga-name":"onclick","data-ga-type":"pagination","data-ga-region":"main content","data-ga-section":"pagination title","data-ga":"page 1",children:"1"}),a.jsx("span",{className:"visually-hidden",children:"(current)"})]}),a.jsx("li",{className:"page-item",children:a.jsx("a",{"aria-label":"Page 2",className:"page-link",href:"#","data-ga-event":"select","data-ga-action":"click","data-ga-name":"onclick","data-ga-type":"pagination","data-ga-region":"main content","data-ga-section":"pagination title","data-ga":"page 2",children:"2"})}),a.jsx("li",{className:"page-item",children:a.jsx("a",{"aria-label":"Page 3",className:"page-link",href:"#","data-ga-event":"select","data-ga-action":"click","data-ga-name":"onclick","data-ga-type":"pagination","data-ga-region":"main content","data-ga-section":"pagination title","data-ga":"page 3",children:"3"})}),a.jsx("li",{className:"page-item",children:a.jsx("a",{"aria-label":"Next page",className:"page-link page-link-icon",href:"#"})})]})});e.__docgenInfo={description:"",methods:[],displayName:"Basic"};var n,i,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  border,
  bgColor
}) => {
  return <nav aria-label="Page navigation example">
        <ul className={\`pagination \${border ? "justify-content-center border p-2" : ""} \${bgColor}\`}>
          <li className="page-item disabled">
            <a aria-label="Previous page" aria-disabled className="page-link page-link-icon" href="#" />
          </li>
          <li className="page-item active">
            <a aria-current="page" aria-label="Page 1" className="page-link" href="#" data-ga-event="select" data-ga-action="click" data-ga-name="onclick" data-ga-type="pagination" data-ga-region="main content" data-ga-section="pagination title" data-ga="page 1">
              1
            </a>
            <span className="visually-hidden">(current)</span>
          </li>
          <li className="page-item">
            <a aria-label="Page 2" className="page-link" href="#" data-ga-event="select" data-ga-action="click" data-ga-name="onclick" data-ga-type="pagination" data-ga-region="main content" data-ga-section="pagination title" data-ga="page 2">
              2
            </a>
          </li>
          <li className="page-item">
            <a aria-label="Page 3" className="page-link" href="#" data-ga-event="select" data-ga-action="click" data-ga-name="onclick" data-ga-type="pagination" data-ga-region="main content" data-ga-section="pagination title" data-ga="page 3">
              3
            </a>
          </li>
          <li className="page-item">
            <a aria-label="Next page" className="page-link page-link-icon" href="#" />
          </li>
        </ul>
      </nav>;
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const N=["Basic"];export{e as Basic,N as __namedExportsOrder,m as default};
