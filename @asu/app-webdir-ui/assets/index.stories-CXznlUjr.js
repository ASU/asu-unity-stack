import{j as e}from"./iframe-CGe7Wy5A.js";import{W as o}from"./index-CBPRzwvH.js";import{F as x}from"./styled-components.browser.esm-0ZuCFfxC.js";import"./preload-helper-Dp1pzeXC.js";import"./sort-D7ck2HSR.js";import"./dataConverter-vtgfCe0N.js";const i="https://asuapp2dev.prod.acquia-sites.com/",l="api/v1/",f={title:"Organisms/Web Directory/Templates",argTypes:{alphaFilter:{control:"select",options:["true","false"]},columnView:{control:"select",options:["50%"],description:"50% mimics the webspark 2 column layout"}},args:{alphaFilter:"false"},decorators:[r=>e.jsx(x,{children:r()})]},n={defaultSort:"last_name",doNotDisplayProfiles:"",profilesPerPage:"10",usePager:"1"},w={employee:"",expertise:"",title:"",campuses:""},a=r=>e.jsx("div",{className:"uds-content-align",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:r.columnView==="50%"?"col-md-6":"",children:e.jsx(o,{searchType:"departments",deptIds:"1349,1353,32397,1518,1520,3534,1350,334996,1504,2000,2003,159390",API_URL:i,searchApiVersion:l,filters:w,display:{...n,grid:"false"},alphaFilter:r.alphaFilter})})})});a.args={alphaFilter:"true"};const t=r=>e.jsx("div",{className:"uds-content-align",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:r.columnView==="50%"?"col-md-6":"",children:e.jsx(o,{searchType:"people",ids:"mcrow:454517,mdenke:1350,jagarc50:1350,lhillzev:1353",API_URL:i,searchApiVersion:l,display:n,alphaFilter:r.alphaFilter})})})}),s=r=>e.jsx("div",{className:"uds-content-align",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:r.columnView==="50%"?"col-md-6":"",children:e.jsx(o,{searchType:"people_departments",ids:",tgrandli:1344,mcrow:1343,jcunnin8:1358,ccherrer:1358,csmudde:1358",API_URL:i,searchApiVersion:l,display:n,alphaFilter:r.alphaFilter})})})});s.args={alphaFilter:"true"};a.__docgenInfo={description:"",methods:[],displayName:"webDirectoryExampleDepartments"};t.__docgenInfo={description:"",methods:[],displayName:"webDirectoryExamplePeople"};s.__docgenInfo={description:"",methods:[],displayName:"webDirectoryExampleDepartmentsAndPeople"};var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <div className="uds-content-align">
      <div className="row">
        <div className={args.columnView === "50%" ? "col-md-6" : ""}>
          <WebDirectory searchType="departments" deptIds="1349,1353,32397,1518,1520,3534,1350,334996,1504,2000,2003,159390" API_URL={API_URL} searchApiVersion={searchApiVersion} filters={filters} display={{
          ...display,
          grid: "false"
        }} alphaFilter={args.alphaFilter}
        // appPathFolder="/my/custom/path/to/component/root/example"
        />
        </div>
      </div>
    </div>;
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,h,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <div className="uds-content-align">
      <div className="row">
        <div className={args.columnView === "50%" ? "col-md-6" : ""}>
          <WebDirectory searchType="people" ids="mcrow:454517,mdenke:1350,jagarc50:1350,lhillzev:1353" API_URL={API_URL} searchApiVersion={searchApiVersion} display={display} alphaFilter={args.alphaFilter}
        // appPathFolder="/my/custom/path/to/component/root/example"
        />
        </div>
      </div>
    </div>;
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,g,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <div className="uds-content-align">
      <div className="row">
        <div className={args.columnView === "50%" ? "col-md-6" : ""}>
          <WebDirectory searchType="people_departments" ids=",tgrandli:1344,mcrow:1343,jcunnin8:1358,ccherrer:1358,csmudde:1358" API_URL={API_URL} searchApiVersion={searchApiVersion} display={display} alphaFilter={args.alphaFilter}
        // appPathFolder="/my/custom/path/to/component/root/example"
        />
        </div>
      </div>
    </div>;
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const A=["webDirectoryExampleDepartments","webDirectoryExamplePeople","webDirectoryExampleDepartmentsAndPeople"];export{A as __namedExportsOrder,f as default,a as webDirectoryExampleDepartments,s as webDirectoryExampleDepartmentsAndPeople,t as webDirectoryExamplePeople};
