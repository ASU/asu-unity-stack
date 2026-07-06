import{j as e}from"./iframe-DrKAcKTa.js";import{W as t}from"./index-DlJkMoMU.js";import{F as y}from"./styled-components.browser.esm-B8xGiqId.js";import"./preload-helper-Dp1pzeXC.js";import"./sort-CwTNf7GB.js";import"./dataConverter-DR67sZ-f.js";const P={title:"Organisms/Web Directory/Templates",argTypes:{alphaFilter:{control:"select",options:["true","false"]},columnView:{control:"select",options:["50%"],description:"50% mimics the webspark 2 column layout"}},args:{alphaFilter:"false"},decorators:[a=>e.jsx(y,{children:a()})]},o={defaultSort:"last_name",doNotDisplayProfiles:"",profilesPerPage:"10",usePager:"1"},x={employee:"",expertise:"",title:"",campuses:""},s=a=>e.jsx("div",{className:"uds-content-align",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:a.columnView==="50%"?"col-md-6":"",children:e.jsx(t,{searchType:"departments",deptIds:"1349,1353,32397,1518,1520,3534,1350,334996,1504,2000,2003,159390",API_URL:"https://asuapp2dev.prod.acquia-sites.com",searchApiVersion:"/api/v1/",filters:x,display:{...o,grid:"false"},alphaFilter:a.alphaFilter})})})}),r=a=>e.jsx("div",{className:"uds-content-align",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:a.columnView==="50%"?"col-md-6":"",children:e.jsx(t,{searchType:"people",ids:"mcrow:454517,mdenke:1350,jagarc50:1350,lhillzev:1353",API_URL:"https://asuapp2dev.prod.acquia-sites.com/",searchApiVersion:"/api/v1/",display:o,alphaFilter:a.alphaFilter})})})}),i=a=>e.jsx("div",{className:"uds-content-align",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:a.columnView==="50%"?"col-md-6":"",children:e.jsx(t,{searchType:"people_departments",ids:",tgrandli:1344,mcrow:1343,jcunnin8:1358,ccherrer:1358,csmudde:1358",API_URL:"https://asuapp2dev.prod.acquia-sites.com/",searchApiVersion:"/api/v1/",display:o,alphaFilter:a.alphaFilter})})})});s.__docgenInfo={description:"",methods:[],displayName:"webDirectoryExampleDepartments"};r.__docgenInfo={description:"",methods:[],displayName:"webDirectoryExamplePeople"};i.__docgenInfo={description:"",methods:[],displayName:"webDirectoryExampleDepartmentsAndPeople"};var p,l,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <div className="uds-content-align">
      <div className="row">
        <div className={args.columnView === "50%" ? "col-md-6" : ""}>
          <WebDirectory searchType="departments" deptIds="1349,1353,32397,1518,1520,3534,1350,334996,1504,2000,2003,159390" API_URL="https://asuapp2dev.prod.acquia-sites.com" searchApiVersion="/api/v1/" filters={filters} display={{
          ...display,
          grid: "false"
        }} alphaFilter={args.alphaFilter}
        // appPathFolder="/my/custom/path/to/component/root/example"
        />
        </div>
      </div>
    </div>;
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var n,d,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return <div className="uds-content-align">
      <div className="row">
        <div className={args.columnView === "50%" ? "col-md-6" : ""}>
          <WebDirectory searchType="people" ids="mcrow:454517,mdenke:1350,jagarc50:1350,lhillzev:1353" API_URL="https://asuapp2dev.prod.acquia-sites.com/" searchApiVersion="/api/v1/" display={display} alphaFilter={args.alphaFilter}
        // appPathFolder="/my/custom/path/to/component/root/example"
        />
        </div>
      </div>
    </div>;
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <div className="uds-content-align">
      <div className="row">
        <div className={args.columnView === "50%" ? "col-md-6" : ""}>
          <WebDirectory searchType="people_departments" ids=",tgrandli:1344,mcrow:1343,jcunnin8:1358,ccherrer:1358,csmudde:1358" API_URL="https://asuapp2dev.prod.acquia-sites.com/" searchApiVersion="/api/v1/" display={display} alphaFilter={args.alphaFilter}
        // appPathFolder="/my/custom/path/to/component/root/example"
        />
        </div>
      </div>
    </div>;
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const _=["webDirectoryExampleDepartments","webDirectoryExamplePeople","webDirectoryExampleDepartmentsAndPeople"];export{_ as __namedExportsOrder,P as default,s as webDirectoryExampleDepartments,i as webDirectoryExampleDepartmentsAndPeople,r as webDirectoryExamplePeople};
