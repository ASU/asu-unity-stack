import{j as e}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{d as E}from"./Layout-Bte-rkYZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";function q(){function l(){const n=".uds-table-fixed-wrapper",s=".uds-table.uds-table-fixed table",c=".scroll-control.previous";document.querySelectorAll(n).forEach((p,o)=>{const x=p.querySelector(s);x.setAttribute("id","uds-table-"+o);const m=x.querySelector("tbody tr > *"),b=p.querySelector(c);b.style.left=m.offsetWidth+"px"})}function r(){const n=".uds-table-fixed",s=".uds-table-fixed-wrapper",c=".scroll-control.previous",u=".scroll-control.next";document.querySelectorAll(s).forEach((o,x)=>{const m=o.querySelector(n),b=o.querySelector(c),T=o.querySelector(u);["click","focus"].forEach(h=>{b.addEventListener(h,function(){m.scrollLeft-=100}),T.addEventListener(h,function(){m.scrollLeft+=100})})})}function t(n,s){let c;return(...u)=>{clearTimeout(c),c=setTimeout(()=>{n.apply(this,u)},s)}}l(),r(),window.addEventListener("resize",function(){t(l,100)()})}const k={title:"Molecules/Tables/Templates",decorators:[E],argTypes:{fixed:{name:"Fixed",control:{type:"boolean"}},columns:{control:{type:"range",min:4,max:14,step:1}}},args:{fixed:!1,columns:5},parameters:{initFunc:{code:q,disable:!1}}},a=(l,r,t)=>Math.round(l*(r+t)).toLocaleString("en-US"),f=({columns:l})=>{let r=2024;const t=new Array(l).fill(null).map((n,s)=>r-s).reverse();return e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Enrollment"}),t.map((n,s)=>e.jsxs("th",{scope:"col",children:["Fall ",n]},s))]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("th",{scope:"row",children:[e.jsxs("p",{children:["use of ",e.jsx("code",{children:"<a>"})," in cells"," ",e.jsx("a",{href:"#",children:"example link"})]}),"Metropolitan campus population"]}),t.map((n,s)=>e.jsx("td",{children:a(n,35,s)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"indent",children:"Tempe"}),t.map((n,s)=>e.jsx("td",{children:a(n,25,s)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"indent",children:"Downtown"}),t.map((n,s)=>e.jsx("td",{children:a(n,7,s)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"indent",children:"Polytechnic"}),t.map((n,s)=>e.jsx("td",{children:a(n,1.6,s/2)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"indent",children:"West"}),t.map((n,s)=>e.jsx("td",{children:a(n,.8,s/4)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"indent",children:"Thunderbird"}),t.map((n,s)=>e.jsx("td",{children:a(n,.1,s/10)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"normal",children:"Skysong Campus"}),t.map((n,s)=>e.jsx("td",{children:a(n,5,s/5)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Total"}),t.map((n,s)=>e.jsx("td",{children:a(n,50,s)},s))]})]})]})},g=({fixed:l,columns:r})=>l?e.jsxs("div",{className:"uds-table-fixed-wrapper",children:[e.jsx("div",{className:"scroll-control previous",children:e.jsxs("button",{type:"button",className:"btn btn-circle btn-circle-alt-gray",children:[e.jsx("i",{className:"fas fa-chevron-left"}),e.jsx("span",{className:"visually-hidden",children:"Previous"})]})}),e.jsx("div",{className:"scroll-control next",children:e.jsxs("button",{type:"button",className:"btn btn-circle btn-circle-alt-gray",children:[e.jsx("i",{className:"fas fa-chevron-right"}),e.jsx("span",{className:"visually-hidden",children:"Next"})]})}),e.jsx("div",{className:"uds-table uds-table-fixed",tabIndex:"0",children:e.jsx(f,{columns:r})})]}):e.jsx("div",{className:"uds-table",tabIndex:"0",children:e.jsx(f,{columns:r})}),i=g.bind({});i.args={fixed:!1,columns:3};const d=g.bind({});d.args={fixed:!0,columns:7};var v,j,N;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`({
  fixed,
  columns
}) => {
  if (!fixed) {
    return <div className="uds-table" tabIndex="0">
        <Table columns={columns} />
      </div>;
  }
  return <div className="uds-table-fixed-wrapper">
    <div className="scroll-control previous">
      <button type="button" className="btn btn-circle btn-circle-alt-gray">
        <i className="fas fa-chevron-left"></i>
        <span className="visually-hidden">Previous</span>
      </button>
    </div>

    <div className="scroll-control next">
      <button type="button" className="btn btn-circle btn-circle-alt-gray">
        <i className="fas fa-chevron-right"></i>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="uds-table uds-table-fixed" tabIndex="0">
      <Table columns={columns} />
    </div>
  </div>;
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var y,S,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`({
  fixed,
  columns
}) => {
  if (!fixed) {
    return <div className="uds-table" tabIndex="0">
        <Table columns={columns} />
      </div>;
  }
  return <div className="uds-table-fixed-wrapper">
    <div className="scroll-control previous">
      <button type="button" className="btn btn-circle btn-circle-alt-gray">
        <i className="fas fa-chevron-left"></i>
        <span className="visually-hidden">Previous</span>
      </button>
    </div>

    <div className="scroll-control next">
      <button type="button" className="btn btn-circle btn-circle-alt-gray">
        <i className="fas fa-chevron-right"></i>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="uds-table uds-table-fixed" tabIndex="0">
      <Table columns={columns} />
    </div>
  </div>;
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const B=["DefaultComponent","FixedComponent"];export{i as DefaultComponent,d as FixedComponent,B as __namedExportsOrder,k as default};
