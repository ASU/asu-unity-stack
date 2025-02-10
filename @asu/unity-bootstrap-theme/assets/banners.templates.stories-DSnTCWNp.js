import{j as e}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{f as l}from"./Layout-Bte-rkYZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";const i=()=>{document.querySelectorAll(".banner-close button").forEach(s=>s.addEventListener("click",()=>{s.parentElement.parentElement.parentElement.classList.add("hidden-banner")}))},h={title:"Molecules/Banners/Templates",decorators:[l],parameters:{initFunc:{code:i,disable:!1}},argTypes:{color:{name:"Color",options:["Orange","Blue","Gray","Black"],mapping:{Orange:"banner-orange",Blue:"banner-blue",Gray:"banner-gray",Black:"banner-black"},control:{type:"radio"}}},args:{color:"Orange"}},n=({color:a})=>e.jsx("section",{className:a,children:e.jsxs("div",{className:"banner uds-content-align",children:[e.jsx("div",{className:"banner-icon",children:e.jsx("span",{className:"fa fa-icon fa-bell"})}),e.jsxs("div",{className:"banner-content",children:[e.jsx("h1",{tabIndex:0,children:"Stay up-to-date on what's new at ASU"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"," ",e.jsx("a",{href:"https://asunow.asu.edu/",children:"read the latest updates here"}),"."]}),e.jsxs("div",{className:"banner-buttons",children:[e.jsx("a",{href:"https://provost.asu.edu/sync/students",className:"btn btn-sm btn-dark",children:"Info. on teaching and learning remotely"}),e.jsx("a",{href:"https://students.asu.edu/faq",className:"btn btn-sm btn-dark",children:"FAQ Page"})]}),e.jsx("div",{className:"banner-close",children:e.jsx("button",{type:"button",className:"btn btn-circle btn-circle-alt-black close","aria-label":"Close",children:e.jsx("i",{className:"fas fa-times"})})})]})});n.__docgenInfo={description:"",methods:[],displayName:"Banner"};var t,r,o;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`({
  color
}) => {
  return <section className={color}>
        <div className="banner uds-content-align">
          <div className="banner-icon">
            <span className="fa fa-icon fa-bell"></span>
          </div>
          <div className="banner-content">
            <h1 tabIndex={0}>Stay up-to-date on what's new at ASU</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud{" "}
            <a href="https://asunow.asu.edu/">read the latest updates here</a>.
          </div>
          <div className="banner-buttons">
            <a href="https://provost.asu.edu/sync/students" className="btn btn-sm btn-dark">
              Info. on teaching and learning remotely
            </a>
            <a href="https://students.asu.edu/faq" className="btn btn-sm btn-dark">
              FAQ Page
            </a>
          </div>
          <div className="banner-close">
            <button type="button" className="btn btn-circle btn-circle-alt-black close" aria-label="Close">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </section>;
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const f=["Banner"];export{n as Banner,f as __namedExportsOrder,h as default};
