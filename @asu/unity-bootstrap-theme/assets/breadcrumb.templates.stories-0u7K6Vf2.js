import{j as e}from"./jsx-runtime-DAFs00V8.js";import"./index-RYns6xqu.js";import{d as n}from"./Layout-CZch45HE.js";import"./index-rNTiGNI1.js";const l={title:"Atoms/Breadcrumbs/Templates",args:{type:"bg-white"},argTypes:{type:{name:"Type",options:["bg-white","gray-faint-bg","gray-light-bg","gray-dark-bg"],control:{type:"radio"}}},decorators:[n]},r=({type:c})=>e.jsx("nav",{"aria-label":"breadcrumbs",children:e.jsxs("ol",{className:`breadcrumb ${c}`,children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsx("a",{href:"#",children:"Home"})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx("a",{href:"#",children:"Second Nav Item"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:e.jsx("a",{href:"#",children:"Current Page"})})]})});r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsAgainstWhiteBackground"};var a,s,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`({
  type
}) => {
  return <nav aria-label="breadcrumbs">
      <ol className={\`breadcrumb \${type}\`}>
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Second Nav Item</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <a href="#">Current Page</a>
        </li>
      </ol>
    </nav>;
}`,...(t=(s=r.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const b=["BreadcrumbsAgainstWhiteBackground"];export{r as BreadcrumbsAgainstWhiteBackground,b as __namedExportsOrder,l as default};
