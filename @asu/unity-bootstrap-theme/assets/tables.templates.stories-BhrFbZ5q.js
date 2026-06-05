import{y as j,Y as e}from"./iframe-DAx8JK7O.js";import"./preload-helper-Dp1pzeXC.js";const N={title:"Molecules/Tables/Templates",decorators:[j],argTypes:{fixed:{name:"Fixed",control:{type:"boolean"}},columns:{control:{type:"range",min:4,max:14,step:1}}},args:{fixed:!1,columns:5}},l=(c,t,a)=>Math.round(c*(t+a)).toLocaleString("en-US"),d=({columns:c})=>{let t=2024;const a=new Array(c).fill(null).map((n,s)=>t-s).reverse();return e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Enrollment"}),a.map((n,s)=>e.jsxs("th",{scope:"col",children:["Fall ",n]},s))]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("th",{scope:"row",children:[e.jsxs("p",{children:["use of ",e.jsx("code",{children:"<a>"})," in cells"," ",e.jsx("a",{href:"#",children:"example link"})]}),"Metropolitan campus population"]}),a.map((n,s)=>e.jsx("td",{children:l(n,35,s)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"indent",children:"Tempe"}),a.map((n,s)=>e.jsx("td",{children:l(n,25,s)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"indent",children:"Downtown"}),a.map((n,s)=>e.jsx("td",{children:l(n,7,s)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"indent",children:"Polytechnic"}),a.map((n,s)=>e.jsx("td",{children:l(n,1.6,s/2)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"indent",children:"West"}),a.map((n,s)=>e.jsx("td",{children:l(n,.8,s/4)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"indent",children:"Thunderbird"}),a.map((n,s)=>e.jsx("td",{children:l(n,.1,s/10)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"normal",children:"Skysong Campus"}),a.map((n,s)=>e.jsx("td",{children:l(n,5,s/5)},s))]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Total"}),a.map((n,s)=>e.jsx("td",{children:l(n,50,s)},s))]})]})]})},b=({fixed:c,columns:t})=>c?e.jsxs("div",{className:"uds-table-fixed-wrapper",children:[e.jsx("div",{className:"scroll-control previous",children:e.jsxs("button",{type:"button",className:"btn btn-circle btn-circle-alt-gray",children:[e.jsx("i",{className:"fas fa-chevron-left"}),e.jsx("span",{className:"visually-hidden",children:"Previous"})]})}),e.jsx("div",{className:"scroll-control next",children:e.jsxs("button",{type:"button",className:"btn btn-circle btn-circle-alt-gray",children:[e.jsx("i",{className:"fas fa-chevron-right"}),e.jsx("span",{className:"visually-hidden",children:"Next"})]})}),e.jsx("div",{className:"uds-table uds-table-fixed",tabIndex:"0",children:e.jsx(d,{columns:t})})]}):e.jsx("div",{className:"uds-table",tabIndex:"0",children:e.jsx(d,{columns:t})}),i=b.bind({});i.args={fixed:!1,columns:3};const r=b.bind({});r.args={fixed:!0,columns:7};r.parameters={initFunc:{disable:!1}};var o,m,u;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,p,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`({
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
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const y=["DefaultComponent","FixedComponent"];export{i as DefaultComponent,r as FixedComponent,y as __namedExportsOrder,N as default};
