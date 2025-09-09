import{j as e}from"./jsx-runtime-DvmJwJjP.js";import"./index-DUDtsY9M.js";import{W as i}from"./index-Ged_5Big.js";import{F as v}from"./styled-components.browser.esm-B6_ApnWR.js";import"./_commonjsHelpers-B3tUAs5q.js";import"./sort-D60uOoNj.js";import"./index-B-eQrFJv.js";import"./dataConverter-Dgy66W89.js";import"./index-Dm54Kt9Z.js";const b={title:"Organisms/Web Directory/Templates",argTypes:{alphaFilter:{control:"select",options:["true","false"]},columnView:{control:"select",options:["50%"],description:"50% mimics the webspark 2 column layout"}},args:{alphaFilter:"false"},decorators:[s=>e.jsx(v,{children:s()})]},o={defaultSort:"last_name",doNotDisplayProfiles:"",profilesPerPage:"10",usePager:"1"},w={employee:"",expertise:"",title:"",campuses:""},a=s=>e.jsx("div",{className:"uds-content-align",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:s.columnView==="50%"?"col-md-6":"",children:e.jsx(i,{searchType:"departments",deptIds:"1349,1353,32397,1518,1520,3534,1350,334996,1504,2000,2003,159390",API_URL:"https://test-asu-isearch.ws.asu.edu",searchApiVersion:"/api/v1/",filters:w,display:{...o,grid:"false"},alphaFilter:s.alphaFilter})})})}),r=s=>e.jsx("div",{className:"uds-content-align",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:s.columnView==="50%"?"col-md-6":"",children:e.jsx(i,{searchType:"people",ids:"mcrow:454517,mdenke:1350,jagarc50:1350,lhillzev:1353",API_URL:"https://test-asu-isearch.ws.asu.edu",searchApiVersion:"/api/v1/",display:o,alphaFilter:s.alphaFilter})})})}),t=s=>e.jsx("div",{className:"uds-content-align",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:s.columnView==="50%"?"col-md-6":"",children:e.jsx(i,{searchType:"people_departments",ids:",tgrandli:1344,mcrow:1343,jcunnin8:1358,ccherrer:1358,csmudde:1358",API_URL:"https://test-asu-isearch.ws.asu.edu",searchApiVersion:"/api/v1/",display:o,alphaFilter:s.alphaFilter})})})});a.__docgenInfo={description:"",methods:[],displayName:"webDirectoryExampleDepartments"};r.__docgenInfo={description:"",methods:[],displayName:"webDirectoryExamplePeople"};t.__docgenInfo={description:"",methods:[],displayName:"webDirectoryExampleDepartmentsAndPeople"};var l,c,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <div className="uds-content-align">
      <div className="row">
        <div className={args.columnView === "50%" ? "col-md-6" : ""}>
          <WebDirectory searchType="departments" deptIds="1349,1353,32397,1518,1520,3534,1350,334996,1504,2000,2003,159390" API_URL="https://test-asu-isearch.ws.asu.edu" searchApiVersion="/api/v1/" filters={filters} display={{
          ...display,
          grid: "false"
        }} alphaFilter={args.alphaFilter}
        // appPathFolder="/my/custom/path/to/component/root/example"
        />
        </div>
      </div>
    </div>;
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <div className="uds-content-align">
      <div className="row">
        <div className={args.columnView === "50%" ? "col-md-6" : ""}>
          <WebDirectory searchType="people" ids="mcrow:454517,mdenke:1350,jagarc50:1350,lhillzev:1353" API_URL="https://test-asu-isearch.ws.asu.edu" searchApiVersion="/api/v1/" display={display} alphaFilter={args.alphaFilter}
        // appPathFolder="/my/custom/path/to/component/root/example"
        />
        </div>
      </div>
    </div>;
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <div className="uds-content-align">
      <div className="row">
        <div className={args.columnView === "50%" ? "col-md-6" : ""}>
          <WebDirectory searchType="people_departments" ids=",tgrandli:1344,mcrow:1343,jcunnin8:1358,ccherrer:1358,csmudde:1358" API_URL="https://test-asu-isearch.ws.asu.edu" searchApiVersion="/api/v1/" display={display} alphaFilter={args.alphaFilter}
        // appPathFolder="/my/custom/path/to/component/root/example"
        />
        </div>
      </div>
    </div>;
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const A=["webDirectoryExampleDepartments","webDirectoryExamplePeople","webDirectoryExampleDepartmentsAndPeople"];export{A as __namedExportsOrder,b as default,a as webDirectoryExampleDepartments,t as webDirectoryExampleDepartmentsAndPeople,r as webDirectoryExamplePeople};
