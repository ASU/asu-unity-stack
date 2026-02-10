import{p as ba,x as K,Z as ge,_ as ja,j as e,q,$ as va,a0 as Sa,a1 as Pa,w as aa,t as ye,P as d,a2 as ra,i as be,a3 as je,k as Z,a4 as ve,a5 as Q,O as Ca,h as wa,l as Oe,b as La,a6 as Fa,a7 as qa,d as Ia,v as Na,z as ee,a8 as he,A as Aa,a9 as sa,V as Ta,aa as Ua,ab as me,ac as Da,ad as Ba,s as oa,ae as ka,af as Oa,ag as na,ah as fe,ai as ia,r as Ra,u as Ma,y as _a,B as $a,T as Ea,E as Ga,F as Va,G as la,aj as Wa,K as Ka,L as za,ak as Ha,al as Ja,am as Xa,M as Ya,an as Za,R as Qa,Y as xe}from"./index-BTeQ6WnX.js";import{r as x,R as Re}from"./index-B2SEcK1p.js";import"./index-miGSFhnH.js";import"./_commonjsHelpers-B3tUAs5q.js";function er(t,r){const a=Math.floor(t/r),o=t%r;return a+(o>0?1:0)}function tr(t){return""}function ar(t){return""}function rr(){return""}function te(t,r){let a=r||"";return a=a.replaceAll("{INSTITUTION_CODE}",t.getInstitution()).replaceAll("{ACAD_PLAN_CODE}",t.getAcadPlan()),a}function ca(t,r){return`${te(t,r)}#${ba.flexibleDegreeOptions.acceleratedId}`}function Me({programs:t=[],filters:{collegeAcadOrg:r,departmentCode:a,acceleratedConcurrent:o,locations:s=[],keyword:i,blacklistAcadPlans:n,program:p,showCerts:c}}){const m=u=>!r||u.getCollegeAcadOrgJoint().includes(r),g=u=>!a||u.getDepartmentCode().includes(a),b=u=>{var h;return!s.length||((h=u.getCampusList())==null?void 0:h.some(N=>s.some(D=>D.value===N.campusCode)))},l=(u={})=>{var h;return!ge(o)||((h=u[o.value])==null?void 0:h.length)>0},y=(u,h)=>!!(!h||new RegExp(h,"i").test(u.getMajorDesc())),f=(u,h)=>!!(!h||new RegExp(h,"i").test(u.getFullDescription())),S=u=>!(n!=null&&n.includes(u.getAcadPlan())),w=u=>p==="undergrad"?!0:c==="true"?u.isMinorOrCertificate():u.isPhdOrMasters(),P=u=>{const h=K(u);return m(h)&&g(h)&&b(h)&&l(u)&&S(h)&&w(h)},L=[],A=[];return t.filter(u=>{const h=K(u),N=y(h,i),D=f(h,i);return(N||D)&&P(u)?(N?L.push(u):A.push(u),!0):!1}),L.concat(A)}const sr=t=>t.sort((a,o)=>a.acadPlanMarketingDescription.localeCompare(o.acadPlanMarketingDescription)),or=({dataSource:t,tableView:r=[],programs:a,stateFilters:o})=>{const{collegeAcadOrg:s,departmentCode:i}=t;x.useEffect(()=>{if(!a||!ja())return;const n="background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;",p="font-size:30px;",c="font-size:24px;",m="font-size: 18px; margin-left: 0.5rem;";console.group("<< ASU Degree Page >>"),console.log("%c🏫 Listing Page Programs 📚",n+p),console.log(`%cTotal programs found: ${a.length}`,n+m),console.log("%cPrograms found",n+m),console.log(a),console.log(`%cTotal programs loaded: ${r.length}`,n+m),console.log("%cPrograms loaded",n+m),console.log(r),console.log("%cPage Filters",n+c),console.log(`%c- collegeAcadOrg:${s}`,n+m),console.log(`%c- departmentCode:${i}`,n+m),console.log("%cSearch Filters",n+c),console.log(o),console.groupEnd()})},da=()=>e.jsx("div",{className:"container","data-testid":"browse-title",children:e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Browse degrees"})})});da.__docgenInfo={description:"",methods:[],displayName:"BrowseTitle"};const Y=({id:t,label:r,selected:a,multiple:o,options:s,onChange:i})=>e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:t,children:r}),e.jsx("select",{className:"form-select",id:t,"data-testid":t,multiple:o,onChange:n=>i(t,n),value:a,children:s==null?void 0:s.map(n=>e.jsx("option",{id:`${n.value}-${n.id}`,value:n.value,children:n.text},n.id))})]});Y.__docgenInfo={description:`@param {SelectFormGroupProps} props
@returns {JSX.Element}`,methods:[],displayName:"SelectFormGroup"};const nr=q.div`
  .hint-container {
    margin-top: -1.25rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .hint-container {
      display: none;
    }
    .filter-action-buttons {
      & {
        * {
          margin: 0;
        }
        .btn-link {
          padding: 1rem;
        }
      }
    }
  }
`,ir=q.button`
  font-weight: 400;
  text-decoration: underline;
`,lr={event:"select",action:"click",name:"onclick"},cr={event:"link",action:"click",name:"onclick",type:"internal link"},V={isActive:!1,locations:[],asuLocals:[],acceleratedConcurrent:{value:"all",text:""},keyword:null,blacklistAcadPlans:[]},ue=t=>({id:t.id,value:t.value,text:t.text}),dr=t=>t.map(r=>r.text).join(", "),_e=(t,r)=>{ye({...lr,type:t,text:r})},$e=t=>{ye({...cr,text:t})},Se=({value:t,onChange:r,onApply:a,onClean:o})=>{const s=(c,{target:{selectedOptions:m}})=>{let g=[],b=[];const l=Array.from(m,ue),{locations:y,asuLocals:f}=t;({locationsRender:()=>{g=l,b=f},asuLocalsRender:()=>{b=l,g=y}})[`${c}Render`](),r({...t,locations:g,asuLocals:b}),_e({locations:"location or online",asuLocals:"as local"}[c],dr(l))},i=(c,{target:{selectedOptions:m}})=>{r({...t,[c]:ue(m[0])}),_e("accelerated/concurrent",ue(m[0]).text)},n=()=>{a==null||a({...t,isActive:!0})},p=()=>{r(V),o==null||o()};return e.jsxs(nr,{className:"container","data-testid":"filters",children:[e.jsx("h4",{children:"Filter your results"}),e.jsxs("form",{className:"mt-3 uds-form row",children:[e.jsx("div",{className:"col-lg-4 col-md-12",children:e.jsx(Y,{multiple:!0,id:"locations",label:"Campuses or online",selected:t.locations.map(c=>c.value),options:va,onChange:s})}),e.jsx("div",{className:"col-lg-4 col-md-12",children:e.jsx(Y,{multiple:!0,id:"asuLocals",label:"ASU location, ASU Local",selected:t.asuLocals.map(c=>c.value),options:Sa,onChange:s})}),e.jsx("div",{className:"col-lg-4 col-md-12",children:e.jsx(Y,{id:"acceleratedConcurrent",label:"Accelerated, Concurrent",selected:t.acceleratedConcurrent.value,options:Pa,onChange:i})})]}),e.jsx("div",{className:"hint-container",children:e.jsx("p",{children:e.jsx("small",{children:"*CTRL + Click to select multiple"})})}),e.jsxs("div",{className:"filter-action-buttons",children:[e.jsx(aa,{"data-testid":"btn-apply-filter",color:"maroon",label:"Apply filters",ariaLabel:"Apply filters",size:"default",onClick:()=>{n(),$e("apply filters")}}),e.jsx(ir,{"data-testid":"btn-clear-filters",className:"btn btn-link",onClick:()=>{p(),$e("clean filters")},children:"Clear filters"})]})]})};Se.propTypes={value:ra,onChange:d.func,onApply:d.func,onClean:d.func};Se.__docgenInfo={description:`@param {FilterProps} props
@returns {JSX.Element}`,methods:[],displayName:"Filters",props:{value:{description:"",type:{name:"shape",value:{locations:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},asuLocals:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},acceleratedConcurrent:{name:"custom",raw:"optionItemShape",required:!1}}},required:!1},onChange:{description:"",type:{name:"func"},required:!1},onApply:{description:"",type:{name:"func"},required:!1},onClean:{description:"",type:{name:"func"},required:!1}}};function Pe({value:{isActive:t,locations:r,asuLocals:a,acceleratedConcurrent:o}={},onRemove:s}){const i=be("filter-"),n=(r==null?void 0:r.length)+(a==null?void 0:a.length)+(ge(o)?1:0),p=(c,m)=>{const{text:g}=m;return e.jsxs("span",{tabIndex:-1,role:"button","aria-label":`Remove filter ${g}`,"data-filter-id":c,onKeyDown:()=>s(c,m),onClick:()=>s(c,m),className:"btn btn-tag btn-tag-alt-white d-inline-flex align-items-center me-2",children:[e.jsx("span",{className:"pe-1",children:g}),e.jsx("i",{className:"fas fa-times"})]},i.next().value)};return e.jsxs("div",{"data-testid":"filters-summary",children:[e.jsx("header",{children:e.jsx("strong",{children:"Applied filters"})}),e.jsx("div",{"data-testid":"summary-filter-tags",children:!t||n===0?e.jsx("span",{children:"No filters applied"}):e.jsxs(e.Fragment,{children:[r.map(c=>p("locations",c)),a.map(c=>p("asuLocals",c)),(ge(o)?[o]:[]).map(c=>p("acceleratedConcurrent",c))]})})]})}Pe.propTypes={value:ra,onRemove:d.func};Pe.__docgenInfo={description:`@param {{
 value: import("src").FiltersState
 onRemove: (filterName: string, filter: import("src").FilterOption) => void
}} propsÎ
@returns {JSX.Element}`,methods:[],displayName:"FiltersSummary",props:{value:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{locations:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},asuLocals:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},acceleratedConcurrent:{name:"custom",raw:"optionItemShape",required:!1}}},required:!1},onRemove:{description:"",type:{name:"func"},required:!1}}};const pr=q.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`,mr=q.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;function ur({applyNowUrl:t,title:r,contents:a,photoGrid:o}){const s=je(r);return e.jsx("section",{className:"container","data-type":"text-photo-grid","data-testid":"intro-content",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-sm-12 col-md-5",children:[e.jsx(s,{className:"mt-0",children:e.jsx("span",{className:`${Z(r.cssClass)}`,children:r.text})}),e.jsx(ve,{contents:a}),e.jsx(Q,{href:t})]}),e.jsx("div",{className:"col-sm-12 col-md-7 d-none d-sm-none d-md-block",children:e.jsx(pr,{className:"row",children:o.images.map((i,n)=>e.jsx("div",{className:"photo-item col-sm-12 col-md-6 col-lg-6",children:e.jsx("img",{className:`mg-fluid ${Z(i.cssClass)}`,src:i.url,alt:i.altText,style:{maxWidth:"100%"}})},`img-${n+1}`))})})]})})}function gr({applyNowUrl:t,title:r,contents:a,image:o,video:s}){const i=je(r);return e.jsx(mr,{className:"container","data-type":"text-media","data-testid":"intro-content",children:e.jsxs("div",{className:"row gy-3",children:[e.jsxs("div",{className:"col-sm-12 col-md-5",children:[e.jsx(i,{className:"mt-0",children:e.jsx("span",{className:`${Z(r.cssClass)}`,children:r.text})}),e.jsx(ve,{contents:a}),e.jsx(Q,{href:t})]}),e.jsxs("div",{className:"col-sm-12 col-md-7 mt-2 mt-sm-0",children:[s&&e.jsx(wa,{type:s.type,url:s.url,vttUrl:s.vttUrl,title:s.title,className:"mt-0"}),o&&e.jsx("div",{className:"uds-img",children:e.jsx("img",{src:o.url,className:"img-fluid",alt:o.altText})})]})]})})}function hr({applyNowUrl:t,title:r,contents:a,image:o}){return e.jsx("section",{className:"container","data-type":"text-image-overlay","data-testid":"intro-content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsx(Ca,{title:r.text,contents:a,image:o,contentDirection:"right",contentChildren:e.jsx("div",{className:"mt-2",children:e.jsx(Q,{href:t})})})})})})}const fr=({applyNowUrl:t,title:r,contents:a})=>{const o=je(r);return e.jsx("section",{className:"container","data-type":"text","data-testid":"intro-content",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-12 col-md-5",children:e.jsx(o,{className:"mt-0",children:e.jsx("span",{className:`${Z(r.cssClass)}`,children:r.text})})}),e.jsxs("div",{className:"col-sm-12 col-md-7",children:[e.jsx(ve,{contents:a}),e.jsx(Q,{href:t})]})]})})},Ce=({applyNowUrl:t,type:r,title:a,contents:o,image:s,video:i,photoGrid:n})=>({text:()=>fr({applyNowUrl:t,title:a,contents:o}),"text-media":()=>gr({applyNowUrl:t,title:a,contents:o,image:s,video:i}),"text-image-overlay":()=>hr({applyNowUrl:t,title:a,contents:o,image:s}),"text-photo-grid":()=>ur({applyNowUrl:t,title:a,contents:o,photoGrid:n}),undefined:()=>(console.error(`the type '${r}' is not supported by the 'IntroContent' component.`),null)})[r]();Ce.propTypes={applyNowUrl:d.string,type:d.oneOf(["text","text-media","text-image-overlay","text-photo-grid"]).isRequired,video:d.shape({...Na}),image:d.shape({...Ia}),header:Oe,title:d.shape({...Fa,component:d.oneOf(qa)}),contents:d.arrayOf(Oe),photoGrid:d.shape({images:d.arrayOf(La)})};const ae={programs:d.arrayOf(d.object),totalRows:d.number,loading:d.bool,actionUrls:d.shape({applyNowUrl:d.string,majorInfoUrl:d.string,majorInfoOnlineUrl:d.string}),degreesPerPage:d.number},xr=q.div`
  & {
    ul {
      margin-top: 1.5rem;
      margin-bottom: 0;
      list-style: none;
      padding: 0;

      li:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
  .accordion .card.card-foldable {
    border-bottom: 1px solid #d0d0d0;
  }
`,we=({programs:t,actionUrls:r})=>{var n,p,c,m,g;const{state:a}=x.useContext(ee),o=(p=(n=a==null?void 0:a.listPageProps)==null?void 0:n.programList)==null?void 0:p.settings,s=((g=(m=(c=a==null?void 0:a.listPageProps)==null?void 0:c.programList)==null?void 0:m.dataSource)==null?void 0:g.program)==="graduate",i=t.map(b=>{const l=K(b),y=()=>{var L;const w=l.isOnline()?l.getOnlineMajorMapURL():l.getGeneralDegreeMajorMap();let P;try{P=`<a href=${(L=new URL(w))==null?void 0:L.toString()}>${l.getRequiredCoursesLabel()} Map</a>`}catch{return""}return P},f=()=>`<div>
        ${l.hasConcurrentDegrees()?"<div className='cell-container'>concurrent</div>":""}
        ${l.hasAccelerateDegrees()?`<div className="cell-container">
                <a href=${ca(l,r.majorInfoUrl)}>
                  4+1 years
                </a>
              </div>`:""}
    </div>`;return{content:{header:l.getMajorDesc(),body:`<ul>
        <li>
          <strong>Major:</strong>
          <br />
            <a href=${te(l,r.majorInfoUrl)}>
              ${l.getMajorDesc()}
            </a>
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${l.getDegree()}
        </li>
        ${s?"":`<li>
              <strong>Required Courses:</strong>
              <br />${y()}
            </li>`}
        <li>
          <strong>Campus or location:</strong>
          <br />${l.getCampusList().map(S=>he(S.campusCode)).join(", ")}
        </li>
        <li>
          <strong>Accelerated/Concurrent:</strong>
          <br />${f()||"-"}
        </li>
        ${o!=null&&o.hideCollegeSchool?"":` <li>
                  <strong>College/School:</strong>
                  <br />
                  <a href=${l.getCollegeUrl()}>
                    ${l.getCollegeDesc()}
                  </a>
                </li>`}
      </ul>`}}});return e.jsx(xr,{"data-testid":"accordion-view",children:e.jsx(Aa,{cards:i})})};we.propTypes={...ae};we.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"AccordionView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const yr=q.section`
  margin: auto;

  .card-buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    order: 3;
    margin: 0 1rem 1rem;

    .card-button {
      column-gap: 0;
      padding: 0;
      width: fit-content;
    }
    .card-button .btn {
      margin: 0;
    }
  }
`;function re({programs:t,loading:r,actionUrls:a}){var c,m,g,b;const{defaultState:o,state:s}=x.useContext(ee),i=(b=(g=(m=(c=s==null?void 0:s.listPageProps)==null?void 0:c.programList)==null?void 0:m.settings)==null?void 0:g.cardDefaultImage)==null?void 0:b.url,n=o.detailPageDefault.hero.image.url,p=i||n;return e.jsx(yr,{id:sa,className:"container row","data-loading":r,"data-testid":"grid-view",children:t.map(l=>{const y=K(l);return e.jsx("div",{className:"col col-sm-12 col-md-4 col-lg-3 mb-2",children:e.jsx(Ta,{type:"degree",horizontal:!1,clickable:!1,image:p,imageAltText:"An example image",title:y.getMajorDesc(),linkLabel:"View Program Details",linkUrl:te(y,a.majorInfoUrl),buttons:[{color:"maroon",size:"small",label:"Reqeuest Info",href:rr()},{color:"gold",size:"small",label:"Apply",href:a.applyNowUrl}]})})})})}re.propTypes={...ae};re.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"GridView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const br=[{dataKey:"Major",label:"Major",className:"major",sortable:!0,contentTemplate:({resolver:t,rowIndex:r,actionUrls:a,onClick:o})=>e.jsxs("div",{className:"cell-container",children:[e.jsx("a",{href:te(t,a==null?void 0:a.majorInfoUrl),children:t.getMajorDesc()}),e.jsx(Ua,{dataId:"show-row-detail",ariaLabel:`${t.getMajorDesc()} arrow`,ariaControls:`row-info-${r}`,onClick:s=>o(r,s)})]})},{dataKey:"Degree",label:"Degree",className:"degree",contentTemplate:({resolver:t})=>e.jsxs("div",{className:"cell-container",children:[e.jsx("span",{children:t.getDegree()}),e.jsx(me,{popover:{title:t.getDegreeDesc(),body:t.getDegreeDescLong(),withAuto:!1}})]})},{dataKey:"RequiredCourses",label:"Required Courses",className:"required-course",contentTemplate:({resolver:t})=>{var s;const a=t.isOnline()?t.getOnlineMajorMapURL():t.getGeneralDegreeMajorMap();let o;try{const i=(s=new URL(a))==null?void 0:s.toString();o=e.jsxs("a",{href:i,children:[t.getRequiredCoursesLabel()," Map"]})}catch{return""}return o}},{dataKey:"Location",label:"Campus or location",className:"campus-location",sortable:!0,contentTemplate:({resolver:t})=>{const r=be("campus-");return e.jsx("div",{children:t.getCampusList().map((a,o,s)=>e.jsxs("div",{className:"cell-container",children:[e.jsx("span",{children:`${he(Da(a.campusCode))}${o<s.length-1?", ":""}`},a.campusCode),e.jsx("span",{children:e.jsx(me,{popover:{title:he(a.campusCode),body:()=>fetch(tr(a.campusCode)),withAuto:!0}})})]},r.next().value))})}},{dataKey:"AcceleratedConcurrent",label:"Accelerated/ Concurrent",className:"accelerated-concurrent",sortable:!0,contentTemplate:({resolver:t,actionUrls:r})=>e.jsxs("div",{children:[t.getConcurrentDegrees().then(a=>a).length>0&&e.jsx("div",{className:"cell-container",children:"concurrent"}),t.hasConcurrentOrAccelerateDegrees()&&e.jsxs("div",{className:"cell-container",children:[e.jsx("a",{href:ca(t,r.majorInfoUrl),children:"4+1 years"}),e.jsx(me,{popover:{title:"4+1 years",body:()=>fetch(ar(t.getAcadPlan())),withAuto:!1}})]})]})},{dataKey:"CollegeSchool",label:"College/School",className:"college",sortable:!0,contentTemplate:({resolver:t})=>e.jsx("a",{href:t.getCollegeUrl(),children:t.getCollegeDesc()})}],jr=Ba`
  @keyframes loading {
    40% {
      background-position: 100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  &[data-loading="true"] {
    td {
      position: relative;

      .bar {
        background-color: #e7e7e7;
        height: 14px;
        border-radius: 7px;
        width: 80%;
      }

      &:after {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 0;
        content: "";
        display: block;
        width: 100%;
        height: 24px;
        background-image: linear-gradient(
          100deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.5) 60%,
          rgba(255, 255, 255, 0) 80%
        );
        background-size: 200px 24px;
        background-position: -100px 0;
        background-repeat: no-repeat;
        animation: loading 1s infinite;
      }
    }
  }
`,vr=q.table`
  ${jr}
  --table-border-color: #e5e5e5;

  background-color: #fafafa;
  border: 1px solid var(--table-border-color);
  border-collapse: collapse;
  padding: 5px;

  width: 100%;
  margin: 0 auto;
  clear: both;
  border-spacing: 0;

  a {
    text-decoration: none;
  }

  thead {
    background: #d0d0d0;
    th {
      outline: none;
      :focus {
        box-shadow:
          0px 0px 0px 2px #fff,
          0px 0px 0px 4px #191919 !important;
      }
    }
  }

  th,
  td {
    padding: 8px 12px;
    // display: inline-block;
  }

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;

    td {
      vertical-align: top;
    }

    .major {
      width: 250px;
      a {
        font-weight: 700;
      }
    }

    .degree {
      width: 75px;
    }

    .required-course {
      width: 100px;
    }

    .campus-location {
      width: 90px;
      & > div {
        width: fit-content;
      }
    }

    .accelerated-concurrent {
      width: 120px;
    }

    .college {
      width: 210px;
    }

    .compare-fav {
      // width: 180px;
    }

    .apply-info {
      width: 168px;
      & .btn {
        width: fit-content;
        :first-child {
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  tbody {
    tr {
      border: 1px solid var(--table-border-color);
      border-top: 0;

      &:not(.row-info):hover {
        background-color: #e8e8e8;
      }

      .info-apply .cell-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.5rem;
      }

      td .cell-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0.5rem;
      }
    }

    tr.row-info {
      td > div {
        position: relative;
      }

      input.togle-more-text {
        opacity: 0;
        position: absolute;
        pointer-events: none;

        &:checked + .desc-long {
          max-height: fit-content;
          overflow: auto;
        }

        &:not(:checked) + .desc-long::after {
          content: " ";
          height: 1rem;
          background: rgba(250, 250, 250, 0.9);
          box-shadow: -1px -2px 20px 15px #fafafa;
          width: 100%;
          position: absolute;
          bottom: 0;
        }

        &:checked + .desc-long + .label-more-less {
          .label-more {
            display: none;
          }
          .label-less {
            display: inline;
          }
        }

        &:not(:checked) + .desc-long + .label-more-less {
          .label-more {
            display: inline;
          }
          .label-less {
            display: none;
          }
        }
      }

      .desc-long {
        max-height: 200px;
        overflow: hidden;
        transform: max-width 0.6;
        p:last-child {
          margin-bottom: 0;
        }
      }

      label.label-more-less {
        cursor: pointer;
        line-height: normal;
        color: #8c1d40;
        text-align: right;
        border: 0;
        margin: 0;
        font-weight: 400;
        display: inline;
        position: absolute;
        bottom: 0.2rem;
        right: -2.5rem;
      }
    }

    tr.row-info {
      td:first-child {
        flex-basis: 55%;
      }

      td:last-child {
      }
    }

    tr:not([data-is-open="true"]) + tr.row-info {
      overflow: hidden;
      height: 0;
    }

    tr[data-is-open="true"] + tr.row-info {
      height: auto;
    }
  }
`,Sr=({resolver:t,id:r})=>{const a=x.createRef(),o=s=>{s.key==="Enter"&&(a==null||a.current.click())};return e.jsxs("div",{children:[e.jsx("header",{children:e.jsx("strong",{children:"Program Description:"})}),e.jsx("input",{className:"togle-more-text",type:"checkbox",id:`#${r}`}),e.jsx("div",{className:"desc-long",id:r,dangerouslySetInnerHTML:oa(t.getFullDescription())}),e.jsxs("label",{ref:a,className:"label-more-less element-focus",htmlFor:`#${r}`,role:"button",tabIndex:0,onKeyDown:o,children:[e.jsx("span",{"data-testid":"more-text",className:"label-more",children:"[...more]"}),e.jsx("span",{"data-testid":"less-text",className:"label-less",children:"[...less]"})]})]})},Pr=({resolver:t})=>e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Additional Program Fee: "}),t.hasAsuProgramFee()?"Yes":"No"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Second Language Requirement: "}),t.hasAsuLangReqFlag()?"Yes":"No"]}),t.hasMathReqFlag()&&e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("strong",{children:"First Required Math Course:"}),e.jsx("span",{children:t.getMinMathReq()}),t.getOtherMathReqCourse()&&e.jsx("span",{dangerouslySetInnerHTML:oa(t.getOtherMathReqCourse())})]})}),t.getMathIntensity()&&e.jsxs("div",{children:[e.jsx("strong",{children:"Math Intensity:"}),t.getMathIntensity()]}),t.hasStemOptText()&&e.jsxs("div",{children:[e.jsx("strong",{children:"STEM OPT:"}),t.hasStemOptText()]})]}),Cr=be("row-"),se=({programs:t,totalRows:r,loading:a,actionUrls:o})=>{var g,b;const s=Re.useRef(null),i=Re.useRef(null),{state:n}=x.useContext(ee),p=(b=(g=n==null?void 0:n.listPageProps)==null?void 0:g.programList)==null?void 0:b.settings;let c=br;n.listPageProps.programList.dataSource.program==="graduate"&&(c=c.filter(l=>l.dataKey!=="RequiredCourses")),p!=null&&p.hideCollegeSchool&&(c=c.filter(l=>l.dataKey!=="CollegeSchool"));const m=(l,y)=>{const f=i.current.children;Array.prototype.forEach.call(f,(w,P)=>P!==l&&w.setAttribute("data-is-open","false")),i.current.children[l].setAttribute("data-is-open",String(y))};return e.jsx("section",{className:"container mb-4","data-testid":"list-view",children:e.jsxs(vr,{id:sa,ref:s,"data-loading":a,title:`${r} program found`,children:[e.jsx("thead",{children:e.jsx("tr",{role:"row",children:c.map(l=>{var y;return e.jsx("th",{tabIndex:0,className:`${l.className}`,scope:"col","aria-label":l.ariaLabel,children:((y=l.headerTemplate)==null?void 0:y.call(l))||e.jsx("span",{children:l.label})},l.dataKey)})})}),e.jsxs("tbody",{ref:i,"data-testid":"program-rows",children:[t.length===0?e.jsx("tr",{role:"presentation",children:e.jsx("td",{colSpan:c.length,"aria-label":"No result found for the filters applied",children:" "})}):null,t.map((l,y)=>{const f=Cr.next().value,S=y*2,w=K(l);return e.jsxs(x.Fragment,{children:[e.jsx("tr",{role:"row",children:c.map(P=>{var L;return e.jsx("td",{className:`${P.className}`,children:(L=P.contentTemplate)==null?void 0:L.call(P,{resolver:w,col:P,row:l,rowIndex:S,onClick:m,actionUrls:o})},`${f}-${P.dataKey}`)})},f),e.jsxs("tr",{id:`row-info-${S}`,className:"row-info",children:[e.jsx("td",{colSpan:3,children:Sr({resolver:w,id:`${f}-more-text`})},`${f}-info`),e.jsx("td",{colSpan:2,children:Pr({resolver:w})},`${f}-extra-info`)]},`${f}-row-info`)]},f)})]})]})})};se.propTypes={...ae};se.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"ListView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const wr=na`

  .mobile-view {
    display: none;
  }
  [data-view-type="list-view"] {
    @media (max-width: 768px) {
      .desktop-view {
        display: none;
      }
      .mobile-view {
        display: block;
        .card-foldable .card-header h4 a {
          color: #8c1d40;
        }
      }
    }
  }
`,Lr={[ia]:re,[fe]:se};function Le({dataViewComponent:t,loading:r,programs:a,actionUrls:o,degreesPerPage:s}){let i;s?typeof s!="number"&&(i=parseInt(s,10)):i=8;const n=s||i,p=er(a.length,n),c=Lr[t],[m,g]=x.useState([]),b=(l,y)=>{const f=(y-1)*n,S=f+n;g(a.slice(f,S))};return x.useEffect(()=>{g(a.slice(0,n))},[a]),e.jsxs("section",{"data-testid":"program-list","data-view-type":t,children:[e.jsx(wr,{}),e.jsx("div",{className:"desktop-view",children:e.jsx(c,{loading:r,programs:m,totalRows:a==null?void 0:a.length,actionUrls:o,degreesPerPage:s||i})}),e.jsx("div",{className:"mobile-view mb-2",children:e.jsx(we,{loading:r,programs:m,totalRows:a==null?void 0:a.length,actionUrls:o,degreesPerPage:s||i})}),a.length>0?e.jsx(ka,{totalNumbers:7,type:"default",background:"white",totalPages:p,onChange:b,showFirstButton:!0,showLastButton:!0}):e.jsx("section",{className:"container no-space",children:e.jsx(Oa,{message:"No result found for the filters applied"})})]})}Le.propTypes={dataViewComponent:d.string,...ae,degreesPerPage:d.number};Le.__docgenInfo={description:`@param {{
 dataViewComponent: GRID_VIEW_ID | LIST_VIEW_ID
} & GridListingProps} props`,methods:[],displayName:"ProgramList",props:{dataViewComponent:{description:"",type:{name:"string"},required:!1},programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};re.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"GridView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};se.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"ListView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const Fr=q.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow:
      0px 0px 0px 2px #ffffff,
      0px 0px 0px 4px #191919 !important;
  }
`,Fe=({value:t,onChange:r,onSearch:a})=>{const[o,s]=x.useState(!1);let i;x.useEffect(()=>()=>clearTimeout(i),[]);const n=p=>{ye({event:"search",action:"type",name:"onenter",type:"search degree programs",text:p})};return e.jsx(Fr,{className:"container mt-5","data-searching":o,"data-testid":"search-bar",children:e.jsx("form",{"data-testid":"search-bar-form",className:"uds-form p-0 col-md-6 col-sm-12",onSubmit:p=>{p.preventDefault(),a(),s(!0),i=setTimeout(()=>s(!1),500),clearTimeout(i)},children:e.jsxs("div",{className:"form-group mb-0 me-2",children:[e.jsx("label",{htmlFor:"search-field",children:"Search"}),e.jsxs("div",{className:"d-flex row align-items-baseline g-3",children:[e.jsx("div",{className:"col-sm-12 col-md-6 align-self-end",children:e.jsx("input",{"data-testid":"search-field",id:"search-field",value:t,type:"text",className:"form-control",placeholder:"Search degree programs",onChange:p=>{r(p.target.value),n(p.target.value)}})}),e.jsx("div",{className:"col-sm-12 col-md-6 mt-2 mt-sm-0",children:e.jsx(aa,{"data-testid":"search-button",color:"maroon",label:"Search now",ariaLabel:"Search now",size:"default",onClick:a})})]})]})})})};Fe.propTypes={value:d.string,onChange:d.func,onSearch:d.func};Fe.__docgenInfo={description:`@param {SearchBarProps} props
@returns {JSX.Element}`,methods:[],displayName:"SearchBar",props:{value:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},onSearch:{description:"",type:{name:"func"},required:!1}}};const qr=q(Ya)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`,Ir=na`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`,Nr=q.div.attrs({className:"container"})`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`,qe=({appPathFolder:t,actionUrls:r,hasSearchBar:a=!0,hasFilters:o=!0,hero:s,introContent:i,programList:n,degreesPerPage:p})=>{var ke;const[{data:c,loading:m,error:g},b]=Ma(),[l,y]=x.useState(!1),[f,S]=x.useState([]),[w,P]=x.useState([]),[L,A]=x.useState(""),u=(ke=n==null?void 0:n.settings)==null?void 0:ke.defaultView,h=[fe,ia].includes(u)?u:fe,[N,D]=x.useState(h),ne=_a(n.dataSource,Ha),{defaultState:pa}=x.useContext(ee),{listingPageDefault:Ie}=pa,{collegeAcadOrg:Ne,departmentCode:Ae,showInactivePrograms:Ar,blacklistAcadPlans:Te,program:Ue,cert:ma}=n.dataSource,[De,ie]=x.useState({...V}),[J,Be]=x.useState({...V});or({dataSource:n.dataSource,tableView:f,programs:c,stateFilters:De}),x.useEffect(()=>{typeof window<"u"&&$a({packageName:"app-degree-pages",component:"ListingPage",type:"NA",configuration:{programList:n,degreesPerPage:p}})},[]),x.useEffect(()=>{b(ne)},[ne]),x.useEffect(()=>{let j=sr(c||[]);j=Me({programs:j,filters:{collegeAcadOrg:Ne,departmentCode:Ae,blacklistAcadPlans:Te,program:Ue,showCerts:ma}}),P(j),S(j)},[c,p]);const le=async j=>{const{acceleratedConcurrent:ce,locations:X,asuLocals:de,keyword:pe}=j;y(!0),b(ne);const ya=Me({programs:w,filters:{collegeAcadOrg:Ne,departmentCode:Ae,acceleratedConcurrent:ce,locations:de.length>0?X.concat(Xa):X,keyword:pe,blacklistAcadPlans:Te,program:Ue}});ie({...j}),Be({...j}),S(ya),y(!1)},ua=async()=>{const j={...J,keyword:L};le(j)},ga=j=>{m||l||le(j)},ha=async j=>{ie(j)},fa=()=>{ie(V),Be(V),S(w),A("")},xa=(j,{value:ce})=>{const X=j==="acceleratedConcurrent"?Ja:J[j].filter(pe=>pe.value!==ce),de={...J,[j]:X};le(de)};return e.jsxs(e.Fragment,{children:[e.jsx(Ea,{}),e.jsx(Ir,{}),g&&e.jsx(Ga,{message:Va}),s!=null&&s.hide?null:e.jsx("section",{"data-testid":"hero",children:e.jsx(la,{image:(s==null?void 0:s.image)||Ie.hero.image,title:{text:Wa(n.dataSource),highlightColor:"gold",...s==null?void 0:s.title,maxWidth:"100%"},contents:s==null?void 0:s.contents})}),e.jsxs(qr,{"data-is-loading":m,className:"main-section dg-margin-top",children:[(i==null?void 0:i.breadcrumbs)&&e.jsx("div",{className:"container mt-4 mb-0",children:e.jsx(Ka,{breadcrumbs:i.breadcrumbs,section:s?s.title.text:""})}),i?e.jsx(Ce,{applyNowUrl:(r==null?void 0:r.applyNowUrl)||Ie.actionUrls.applyNowUrl,type:i.type,header:i.header,title:i.title,contents:i.contents,image:i.image,video:i.video,photoGrid:i.photoGrid}):null,a||o?e.jsxs("section",{className:"no-space",children:[e.jsx(da,{}),a?e.jsx(Fe,{value:L,onChange:A,onSearch:ua}):null,o?e.jsx(Se,{value:De,onChange:ha,onApply:ga,onClean:fa}):null,e.jsx(Nr,{})]}):null,e.jsx("section",{className:"container",children:e.jsx("div",{className:"d-flex justify-content-between filter-switch-container",children:o?e.jsx(Pe,{value:J,onRemove:xa}):null})}),m||l?e.jsx(za,{}):e.jsx(Le,{dataViewComponent:N,loading:m||l,programs:f,actionUrls:r,degreesPerPage:p})]})]})};qe.propTypes={appPathFolder:d.string,actionUrls:d.shape({applyNowUrl:d.string}),hasSearchBar:d.bool,hasFilters:d.bool,hero:d.shape(la.propTypes),introContent:d.shape(Ce.propTypes),programList:d.shape({dataSource:Qa,settings:Za}),degreesPerPage:d.number};const oe=t=>e.jsx(Ra,{listPageProps:t,children:e.jsx(qe,{...t})});oe.propTypes=qe.propTypes;oe.__docgenInfo={description:`@param {ListingPageProps} props
@returns {JSX.Element}`,methods:[],displayName:"AppComponent",props:{appPathFolder:{description:"",type:{name:"string"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1}}},required:!1},hasSearchBar:{description:"",type:{name:"bool"},required:!1},hasFilters:{description:"",type:{name:"bool"},required:!1},hero:{description:"",type:{name:"shape",value:"Hero.propTypes",computed:!0},required:!1},introContent:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"text-media"',computed:!1},{value:'"text-image-overlay"',computed:!1},{value:'"text-photo-grid"',computed:!1}],required:!0},video:{name:"shape",value:{},required:!1},image:{name:"shape",value:{},required:!1},header:{name:"custom",raw:"contentPropShape",required:!1},title:{name:"shape",value:{component:{name:"enum",value:[{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1}],required:!1}},required:!1},contents:{name:"arrayOf",value:{name:"custom",raw:"contentPropShape"},required:!1},photoGrid:{name:"shape",value:{images:{name:"arrayOf",value:{name:"custom",raw:"imagePropShape"},required:!1}},required:!1}}},required:!1},programList:{description:"",type:{name:"shape",value:{dataSource:{name:"custom",raw:"dataSourcePropShape",required:!1},settings:{name:"custom",raw:"columSettingsPropShape",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const kr={component:oe,title:"Program Listing Page",parameters:{docs:{description:{component:"@typedef {import('../../core/types/listing-page-types').ListingPageProps } AppProps"}}}},C=({appPathFolder:t,actionUrls:r,hero:a,introContent:o,programList:s,hasFilters:i,hasSearchBar:n,...p})=>e.jsx(oe,{appPathFolder:t,actionUrls:r,hero:a,introContent:o,programList:s,hasSearchBar:n,hasFilters:i,...p}),z={applyNowUrl:"https://admission.asu.edu/apply",majorInfoUrl:`${xe()}index.html?path=/story/program-detail-page--default&acadPlan={ACAD_PLAN_CODE}`},H={program:"undergrad"},v={appPathFolder:".",actionUrls:z,hero:null,introContent:{breadcrumbs:[{text:"Academic programs",url:"#"},{text:"Undergraduate degrees",url:`${xe()}index.html?path=/story/program-listing-page--default`},{text:"Degree title",url:`${xe()}index.html?path=/story/program-detail-page--with-content`,isActive:!0}],type:"text",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<p>Lorem, <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     </p>`},{text:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}]},programList:{dataSource:H}},I=C.bind({});I.args={...v};const W=C.bind({});W.args={...v,introContent:null,programList:{...v.programList,dataSource:{...v.programList.dataSource,program:"graduate"}}};const B=C.bind({});B.args={...v,introContent:null,programList:{...v.programList,dataSource:{...v.programList.dataSource,blacklistAcadPlans:["BAACCBS","LAACTBS"]}}};const k=C.bind({});k.args={...v,degreesPerPage:2};const O=C.bind({});O.args={...v,introContent:null,programList:{...v.programList,dataSource:{...v.programList.dataSource,cert:"true",showInactivePrograms:"true"}}};const R=C.bind({});R.args={...v,introContent:null,programList:{...v.programList,dataSource:{...v.programList.dataSource,program:"graduate",cert:"true",showInactivePrograms:"true"}}};const M=C.bind({});M.args={...v,introContent:null,programList:{...v.programList,dataSource:{...v.programList.dataSource,program:"all",cert:"true",showInactivePrograms:"true"}}};const _=C.bind({});_.args={...I.args,hero:null,programList:{...I.args.programList,dataSource:{...I.args.programList.dataSource,departmentCode:"CPUBAFF",collegeAcadOrg:"CPP"}}};const $=C.bind({});$.args={actionUrls:z,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",altText:"Undergraduate Degrees",size:"medium"},title:{text:"Undergraduate Degrees",highlightColor:"gold"}},introContent:{type:"text",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}]},programList:{dataSource:H,settings:{hideCollegeSchool:!0,cardDefaultImage:{url:"examples/assets/img/ds_header_undergrad.jpg"}}}};const E=C.bind({});E.args={actionUrls:z,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",size:"medium"},title:{text:"Area of study degrees",highlightColor:"gold"}},introContent:{type:"text-photo-grid",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}],photoGrid:{images:[{url:"examples/assets/img/demo-phot-1.jpeg"},{url:"examples/assets/img/demo-phot-2.jpeg"},{url:"examples/assets/img/demo-phot-3.jpeg"}]}},hasFilters:!1,hasSearchBar:!1,programList:{dataSource:H}};const F=C.bind({});F.args={actionUrls:z,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",size:"medium"},title:{text:"Area of study degrees",highlightColor:"gold"}},introContent:{type:"text-media",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}],image:{url:"https://source.unsplash.com/random/800x400?a=1"}},programList:{dataSource:H}};const T=C.bind({});T.args={...F.args};T.args.introContent={...F.args.introContent,image:void 0,video:{url:"/examples/assets/video/stock-video-person-drawing.mp4",title:"",vttUrl:""}};const U=C.bind({});U.args={...F.args};U.args.introContent={...F.args.introContent,image:void 0,video:{type:"youtube",url:"https://www.youtube.com/embed/YW2p0ctzK9c"}};const G=C.bind({});G.args={actionUrls:z,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",size:"medium"},title:{text:"[Subdomain] degrees in [area of study]",highlightColor:"gold"}},introContent:{type:"text-image-overlay",header:{text:"Intro Content Image Overlay"},title:{text:"This is the contents that goes in the box"},contents:[{text:`<b>Instagram</b> tour operator travel sailing flying package.
         Territory New York City group discount active lifestyle creditcard
         insurance wellness kayak guide overnight rural lonely planet.`},{text:`Train luxury Paris recommendations nature France sight seeing.
         Flexibility Amsterdam maps.
         Pacific lonely planet private jet national insurance taxi tourist attractions.
         Budget Pacific guide caravan Barcelona place to stay maps gateway diary tour operator money`}],image:{url:"https://source.unsplash.com/random/800x600?a=1"}},programList:{dataSource:H}};var Ee,Ge,Ve,We,Ke;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Ve=(Ge=I.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source},description:{story:"@type {{ args: AppProps }}",...(Ke=(We=I.parameters)==null?void 0:We.docs)==null?void 0:Ke.description}}};var ze,He,Je;W.parameters={...W.parameters,docs:{...(ze=W.parameters)==null?void 0:ze.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Je=(He=W.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};var Xe,Ye,Ze,Qe,et;B.parameters={...B.parameters,docs:{...(Xe=B.parameters)==null?void 0:Xe.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Ze=(Ye=B.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source},description:{story:"@type {{ args: AppProps }}",...(et=(Qe=B.parameters)==null?void 0:Qe.docs)==null?void 0:et.description}}};var tt,at,rt,st,ot;k.parameters={...k.parameters,docs:{...(tt=k.parameters)==null?void 0:tt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(rt=(at=k.parameters)==null?void 0:at.docs)==null?void 0:rt.source},description:{story:"@type {{ args: AppProps }}",...(ot=(st=k.parameters)==null?void 0:st.docs)==null?void 0:ot.description}}};var nt,it,lt,ct,dt;O.parameters={...O.parameters,docs:{...(nt=O.parameters)==null?void 0:nt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(lt=(it=O.parameters)==null?void 0:it.docs)==null?void 0:lt.source},description:{story:"@type {{ args: AppProps }}",...(dt=(ct=O.parameters)==null?void 0:ct.docs)==null?void 0:dt.description}}};var pt,mt,ut,gt,ht;R.parameters={...R.parameters,docs:{...(pt=R.parameters)==null?void 0:pt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(ut=(mt=R.parameters)==null?void 0:mt.docs)==null?void 0:ut.source},description:{story:"@type {{ args: AppProps }}",...(ht=(gt=R.parameters)==null?void 0:gt.docs)==null?void 0:ht.description}}};var ft,xt,yt,bt,jt;M.parameters={...M.parameters,docs:{...(ft=M.parameters)==null?void 0:ft.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(yt=(xt=M.parameters)==null?void 0:xt.docs)==null?void 0:yt.source},description:{story:"@type {{ args: AppProps }}",...(jt=(bt=M.parameters)==null?void 0:bt.docs)==null?void 0:jt.description}}};var vt,St,Pt,Ct,wt;_.parameters={..._.parameters,docs:{...(vt=_.parameters)==null?void 0:vt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Pt=(St=_.parameters)==null?void 0:St.docs)==null?void 0:Pt.source},description:{story:"@type {{ args: AppProps}}",...(wt=(Ct=_.parameters)==null?void 0:Ct.docs)==null?void 0:wt.description}}};var Lt,Ft,qt,It,Nt;$.parameters={...$.parameters,docs:{...(Lt=$.parameters)==null?void 0:Lt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(qt=(Ft=$.parameters)==null?void 0:Ft.docs)==null?void 0:qt.source},description:{story:"@type {{ args: AppProps }}",...(Nt=(It=$.parameters)==null?void 0:It.docs)==null?void 0:Nt.description}}};var At,Tt,Ut,Dt,Bt;E.parameters={...E.parameters,docs:{...(At=E.parameters)==null?void 0:At.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Ut=(Tt=E.parameters)==null?void 0:Tt.docs)==null?void 0:Ut.source},description:{story:"@type {{ args: AppProps }}",...(Bt=(Dt=E.parameters)==null?void 0:Dt.docs)==null?void 0:Bt.description}}};var kt,Ot,Rt,Mt,_t;F.parameters={...F.parameters,docs:{...(kt=F.parameters)==null?void 0:kt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Rt=(Ot=F.parameters)==null?void 0:Ot.docs)==null?void 0:Rt.source},description:{story:"@type {{ args: AppProps}}",...(_t=(Mt=F.parameters)==null?void 0:Mt.docs)==null?void 0:_t.description}}};var $t,Et,Gt,Vt,Wt;T.parameters={...T.parameters,docs:{...($t=T.parameters)==null?void 0:$t.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Gt=(Et=T.parameters)==null?void 0:Et.docs)==null?void 0:Gt.source},description:{story:"@type {{ args: AppProps}}",...(Wt=(Vt=T.parameters)==null?void 0:Vt.docs)==null?void 0:Wt.description}}};var Kt,zt,Ht,Jt,Xt;U.parameters={...U.parameters,docs:{...(Kt=U.parameters)==null?void 0:Kt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Ht=(zt=U.parameters)==null?void 0:zt.docs)==null?void 0:Ht.source},description:{story:"@type {{ args: AppProps}}",...(Xt=(Jt=U.parameters)==null?void 0:Jt.docs)==null?void 0:Xt.description}}};var Yt,Zt,Qt,ea,ta;G.parameters={...G.parameters,docs:{...(Yt=G.parameters)==null?void 0:Yt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Qt=(Zt=G.parameters)==null?void 0:Zt.docs)==null?void 0:Qt.source},description:{story:`@param {AppProps} props
@returns {JSX.Element}`,...(ta=(ea=G.parameters)==null?void 0:ea.docs)==null?void 0:ta.description}}};const Or=["Default","DefaultGraduate","DefaultWithBlacklistedPlanCodes","DefaultWithDegreesPerPageSet","DefaultWithCertificate","GradWithCertificate","AllWithCertificate","WithCollegeAcadOrgAndDepartmentCode","WithIntroText","WithIntroTextPhotoGrid","WithIntroTextMediaImage","WithIntroTextMediaVideo","WithIntroTextMediaYoutubeVideo","WithIntroTextImageOverlay"];export{M as AllWithCertificate,I as Default,W as DefaultGraduate,B as DefaultWithBlacklistedPlanCodes,O as DefaultWithCertificate,k as DefaultWithDegreesPerPageSet,R as GradWithCertificate,_ as WithCollegeAcadOrgAndDepartmentCode,$ as WithIntroText,G as WithIntroTextImageOverlay,F as WithIntroTextMediaImage,T as WithIntroTextMediaVideo,U as WithIntroTextMediaYoutubeVideo,E as WithIntroTextPhotoGrid,Or as __namedExportsOrder,kr as default};
