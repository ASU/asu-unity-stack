import{j as a}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{d as i}from"./Layout-Bte-rkYZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";const p={title:"Atoms/Alerts/Templates",args:{type:"Success",dismissable:!1},argTypes:{type:{name:"type",options:["Warning","Success","Info","Danger"],mapping:{Warning:"alert-warning",Success:"alert-success",Info:"alert-info",Danger:"alert-danger"},control:{type:"radio"}},dismissable:{name:"Dismissable",control:{type:"boolean"}}},decorators:[i]},s=e=>a.jsxs("div",{className:`alert ${e.type} ${e.dismissable?"alert-dismissable":""}`,role:"alert",children:[a.jsx("div",{className:"alert-icon",children:a.jsx("span",{title:"Alert",className:"fa fa-icon fa-bell"})}),a.jsxs("div",{className:"alert-content",children:["This is an alert to alert. It is built using"," ",a.jsx("a",{href:"https://getbootstrap.com/docs/4.0/components/alerts",children:"the Bootstrap 4 alert classes"}),"."]}),e.dismissable&&a.jsx("div",{className:"alert-close",children:a.jsx("button",{type:"button",className:"btn btn-circle btn-circle-alt-black close","data-bs-dismiss":"alert","aria-label":"Close","data-ga":"close cross","data-ga-name":"onclick","data-ga-event":"modal","data-ga-action":"close","data-ga-type":"click","data-ga-region":"main content","data-ga-section":`This is an alert to alert. It is built using the Bootstrap 4
                alert classes`,children:a.jsx("i",{className:"fas fa-times"})})})]});s.__docgenInfo={description:"",methods:[],displayName:"Alert"};var t,l,r;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  return <div className={\`alert \${args.type} \${args.dismissable ? "alert-dismissable" : ""}\`} role="alert">
        <div className="alert-icon">
          <span title="Alert" className="fa fa-icon fa-bell"></span>
        </div>
        <div className="alert-content">
          This is an alert to alert. It is built using{" "}
          <a href="https://getbootstrap.com/docs/4.0/components/alerts">
            the Bootstrap 4 alert classes
          </a>
          .
        </div>
        {args.dismissable && <div className="alert-close">
            <button type="button" className="btn btn-circle btn-circle-alt-black close" data-bs-dismiss="alert" aria-label="Close" data-ga="close cross" data-ga-name="onclick" data-ga-event="modal" data-ga-action="close" data-ga-type="click" data-ga-region="main content" data-ga-section="This is an alert to alert. It is built using the Bootstrap 4
                alert classes">
              <i className="fas fa-times"></i>
            </button>
          </div>}
      </div>;
}`,...(r=(l=s.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const b=["Alert"];export{s as Alert,b as __namedExportsOrder,p as default};
