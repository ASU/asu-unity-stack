import{f as l,j as a}from"./iframe-D7aEBKfs.js";import"./preload-helper-Dp1pzeXC.js";const c={title:"Molecules/Banners/Templates",decorators:[l],argTypes:{color:{name:"Color",options:["Orange","Blue","Gray","Black"],mapping:{Orange:"banner-orange",Blue:"banner-blue",Gray:"banner-gray",Black:"banner-black"},control:{type:"radio"}}},args:{color:"Orange"},parameters:{initFunc:{disable:!1}}},e=({color:r})=>a.jsx("section",{role:"alert",className:`${r} alert  alert-banner`,children:a.jsxs("div",{className:"banner uds-content-align",children:[a.jsx("div",{className:"banner-icon",children:a.jsx("span",{className:"fa fa-icon fa-bell"})}),a.jsxs("div",{className:"banner-content",children:[a.jsx("h1",{tabIndex:0,children:"Stay up-to-date on what's new at ASU"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"," ",a.jsx("a",{href:"https://asunow.asu.edu/",children:"read the latest updates here"}),"."]}),a.jsxs("div",{className:"banner-buttons",children:[a.jsx("a",{href:"https://provost.asu.edu/sync/students",className:"btn btn-sm btn-dark",children:"Info. on teaching and learning remotely"}),a.jsx("a",{href:"https://students.asu.edu/faq",className:"btn btn-sm btn-dark",children:"FAQ Page"})]}),a.jsx("div",{className:"banner-close",children:a.jsx("button",{type:"button",className:"btn btn-circle btn-circle-alt-black close","aria-label":"Close","data-bs-dismiss":"alert",children:a.jsx("i",{className:"fas fa-times"})})})]})});e.__docgenInfo={description:"",methods:[],displayName:"Banner"};var n,s,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  color
}) => {
  return <section role="alert" className={\`\${color} alert  alert-banner\`}>
      <div className="banner uds-content-align">
        <div className="banner-icon">
          <span className="fa fa-icon fa-bell"></span>
        </div>
        <div className="banner-content">
          <h1 tabIndex={0}>Stay up-to-date on what's new at ASU</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud{" "}
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
          <button type="button" className="btn btn-circle btn-circle-alt-black close" aria-label="Close" data-bs-dismiss="alert">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </section>;
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const d=["Banner"];export{e as Banner,d as __namedExportsOrder,c as default};
