import{p as ia,r as V,Y as me,Z as la,j as e,q,_ as ca,$ as da,a0 as pa,b as Vt,t as fe,P as d,a1 as Wt,i as xe,a2 as ye,h as X,a3 as be,a4 as Y,O as ma,Q as ua,l as ke,c as ga,a5 as ha,a6 as fa,d as xa,v as ya,y as Q,a7 as ue,k as ba,a8 as Kt,n as ja,a9 as va,aa as de,ab as Sa,ac as wa,s as zt,ad as Pa,ae as Ca,af as Ht,ag as ge,ah as Jt,A as La,u as Fa,x as qa,z as Na,T as Ia,E as Aa,F as Ta,U as Xt,ai as Ua,I as Da,L as ka,aj as Ba,ak as Oa,al as Ma,M as Ra,am as _a,N as $a,X as he}from"./index-D_zSnX4r.js";import{r as x,R as Be}from"./index-B2SEcK1p.js";import"./index-qDrbLwMz.js";import"./_commonjsHelpers-B3tUAs5q.js";function Ea(t,r){const a=Math.floor(t/r),o=t%r;return a+(o>0?1:0)}function Ga(t){return""}function Va(t){return""}function Wa(){return""}function Z(t,r){let a=r||"";return a=a.replaceAll("{INSTITUTION_CODE}",t.getInstitution()).replaceAll("{ACAD_PLAN_CODE}",t.getAcadPlan()),a}function Yt(t,r){return`${Z(t,r)}#${ia.flexibleDegreeOptions.acceleratedId}`}function Oe({programs:t=[],filters:{collegeAcadOrg:r,departmentCode:a,acceleratedConcurrent:o,locations:s=[],keyword:i,blacklistAcadPlans:n,program:p,showCerts:c}}){const m=u=>!r||u.getCollegeAcadOrgJoint().includes(r),g=u=>!a||u.getDepartmentCode().includes(a),b=u=>{var h;return!s.length||((h=u.getCampusList())==null?void 0:h.some(I=>s.some(D=>D.value===I.campusCode)))},l=(u={})=>{var h;return!me(o)||((h=u[o.value])==null?void 0:h.length)>0},y=(u,h)=>!!(!h||new RegExp(h,"i").test(u.getMajorDesc())),f=(u,h)=>!!(!h||new RegExp(h,"i").test(u.getFullDescription())),v=u=>!(n!=null&&n.includes(u.getAcadPlan())),w=u=>p==="undergrad"?!0:c==="true"&&p==="graduate"?u.isMinorOrCertificate():u.isPhdOrMasters(),S=u=>{const h=V(u);return m(h)&&g(h)&&b(h)&&l(u)&&v(h)&&w(h)},C=[],A=[];return t.filter(u=>{const h=V(u),I=y(h,i),D=f(h,i);return(I||D)&&S(u)?(I?C.push(u):A.push(u),!0):!1}),C.concat(A)}const Ka=t=>t.sort((a,o)=>a.acadPlanMarketingDescription.localeCompare(o.acadPlanMarketingDescription)),za=({dataSource:t,tableView:r=[],programs:a,stateFilters:o})=>{const{collegeAcadOrg:s,departmentCode:i}=t;x.useEffect(()=>{if(!a||!la())return;const n="background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;",p="font-size:30px;",c="font-size:24px;",m="font-size: 18px; margin-left: 0.5rem;";console.group("<< ASU Degree Page >>"),console.log("%c🏫 Listing Page Programs 📚",n+p),console.log(`%cTotal programs found: ${a.length}`,n+m),console.log("%cPrograms found",n+m),console.log(a),console.log(`%cTotal programs loaded: ${r.length}`,n+m),console.log("%cPrograms loaded",n+m),console.log(r),console.log("%cPage Filters",n+c),console.log(`%c- collegeAcadOrg:${s}`,n+m),console.log(`%c- departmentCode:${i}`,n+m),console.log("%cSearch Filters",n+c),console.log(o),console.groupEnd()})},Qt=()=>e.jsx("div",{className:"container","data-testid":"browse-title",children:e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Browse degrees"})})});Qt.__docgenInfo={description:"",methods:[],displayName:"BrowseTitle"};const J=({id:t,label:r,selected:a,multiple:o,options:s,onChange:i})=>e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:t,children:r}),e.jsx("select",{className:"form-select",id:t,"data-testid":t,multiple:o,onChange:n=>i(t,n),value:a,children:s==null?void 0:s.map(n=>e.jsx("option",{id:`${n.value}-${n.id}`,value:n.value,children:n.text},n.id))})]});J.__docgenInfo={description:`@param {SelectFormGroupProps} props
@returns {JSX.Element}`,methods:[],displayName:"SelectFormGroup"};const Ha=q.div`
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
`,Ja=q.button`
  font-weight: 400;
  text-decoration: underline;
`,Xa={event:"select",action:"click",name:"onclick"},Ya={event:"link",action:"click",name:"onclick",type:"internal link"},E={isActive:!1,locations:[],asuLocals:[],acceleratedConcurrent:{value:"all",text:""},keyword:null,blacklistAcadPlans:[]},pe=t=>({id:t.id,value:t.value,text:t.text}),Qa=t=>t.map(r=>r.text).join(", "),Me=(t,r)=>{fe({...Xa,type:t,text:r})},Re=t=>{fe({...Ya,text:t})},je=({value:t,onChange:r,onApply:a,onClean:o})=>{const s=(c,{target:{selectedOptions:m}})=>{let g=[],b=[];const l=Array.from(m,pe),{locations:y,asuLocals:f}=t;({locationsRender:()=>{g=l,b=f},asuLocalsRender:()=>{b=l,g=y}})[`${c}Render`](),r({...t,locations:g,asuLocals:b}),Me({locations:"location or online",asuLocals:"as local"}[c],Qa(l))},i=(c,{target:{selectedOptions:m}})=>{r({...t,[c]:pe(m[0])}),Me("accelerated/concurrent",pe(m[0]).text)},n=()=>{a==null||a({...t,isActive:!0})},p=()=>{r(E),o==null||o()};return e.jsxs(Ha,{className:"container","data-testid":"filters",children:[e.jsx("h4",{children:"Filter your results"}),e.jsxs("form",{className:"mt-3 uds-form row",children:[e.jsx("div",{className:"col-lg-4 col-md-12",children:e.jsx(J,{multiple:!0,id:"locations",label:"Campuses or online",selected:t.locations.map(c=>c.value),options:ca,onChange:s})}),e.jsx("div",{className:"col-lg-4 col-md-12",children:e.jsx(J,{multiple:!0,id:"asuLocals",label:"ASU location, ASU Local",selected:t.asuLocals.map(c=>c.value),options:da,onChange:s})}),e.jsx("div",{className:"col-lg-4 col-md-12",children:e.jsx(J,{id:"acceleratedConcurrent",label:"Accelerated, Concurrent",selected:t.acceleratedConcurrent.value,options:pa,onChange:i})})]}),e.jsx("div",{className:"hint-container",children:e.jsx("p",{children:e.jsx("small",{children:"*CTRL + Click to select multiple"})})}),e.jsxs("div",{className:"filter-action-buttons",children:[e.jsx(Vt,{"data-testid":"btn-apply-filter",color:"maroon",label:"Apply filters",ariaLabel:"Apply filters",size:"default",onClick:()=>{n(),Re("apply filters")}}),e.jsx(Ja,{"data-testid":"btn-clear-filters",className:"btn btn-link",onClick:()=>{p(),Re("clean filters")},children:"Clear filters"})]})]})};je.propTypes={value:Wt,onChange:d.func,onApply:d.func,onClean:d.func};je.__docgenInfo={description:`@param {FilterProps} props
@returns {JSX.Element}`,methods:[],displayName:"Filters",props:{value:{description:"",type:{name:"shape",value:{locations:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},asuLocals:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},acceleratedConcurrent:{name:"custom",raw:"optionItemShape",required:!1}}},required:!1},onChange:{description:"",type:{name:"func"},required:!1},onApply:{description:"",type:{name:"func"},required:!1},onClean:{description:"",type:{name:"func"},required:!1}}};function ve({value:{isActive:t,locations:r,asuLocals:a,acceleratedConcurrent:o}={},onRemove:s}){const i=xe("filter-"),n=(r==null?void 0:r.length)+(a==null?void 0:a.length)+(me(o)?1:0),p=(c,m)=>{const{text:g}=m;return e.jsxs("span",{tabIndex:-1,role:"button","aria-label":`Remove filter ${g}`,"data-filter-id":c,onKeyDown:()=>s(c,m),onClick:()=>s(c,m),className:"btn btn-tag btn-tag-alt-white d-inline-flex align-items-center me-2",children:[e.jsx("span",{className:"pe-1",children:g}),e.jsx("i",{className:"fas fa-times"})]},i.next().value)};return e.jsxs("div",{"data-testid":"filters-summary",children:[e.jsx("header",{children:e.jsx("strong",{children:"Applied filters"})}),e.jsx("div",{"data-testid":"summary-filter-tags",children:!t||n===0?e.jsx("span",{children:"No filters applied"}):e.jsxs(e.Fragment,{children:[r.map(c=>p("locations",c)),a.map(c=>p("asuLocals",c)),(me(o)?[o]:[]).map(c=>p("acceleratedConcurrent",c))]})})]})}ve.propTypes={value:Wt,onRemove:d.func};ve.__docgenInfo={description:`@param {{
 value: import("src").FiltersState
 onRemove: (filterName: string, filter: import("src").FilterOption) => void
}} propsÎ
@returns {JSX.Element}`,methods:[],displayName:"FiltersSummary",props:{value:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{locations:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},asuLocals:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},acceleratedConcurrent:{name:"custom",raw:"optionItemShape",required:!1}}},required:!1},onRemove:{description:"",type:{name:"func"},required:!1}}};const Za=q.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`,er=q.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;function tr({applyNowUrl:t,title:r,contents:a,photoGrid:o}){const s=ye(r);return e.jsx("section",{className:"container","data-type":"text-photo-grid","data-testid":"intro-content",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-sm-12 col-md-5",children:[e.jsx(s,{className:"mt-0",children:e.jsx("span",{className:`${X(r.cssClass)}`,children:r.text})}),e.jsx(be,{contents:a}),e.jsx(Y,{href:t})]}),e.jsx("div",{className:"col-sm-12 col-md-7 d-none d-sm-none d-md-block",children:e.jsx(Za,{className:"row",children:o.images.map((i,n)=>e.jsx("div",{className:"photo-item col-sm-12 col-md-6 col-lg-6",children:e.jsx("img",{className:`mg-fluid ${X(i.cssClass)}`,src:i.url,alt:i.altText,style:{maxWidth:"100%"}})},`img-${n+1}`))})})]})})}function ar({applyNowUrl:t,title:r,contents:a,image:o,video:s}){const i=ye(r);return e.jsx(er,{className:"container","data-type":"text-media","data-testid":"intro-content",children:e.jsxs("div",{className:"row gy-3",children:[e.jsxs("div",{className:"col-sm-12 col-md-5",children:[e.jsx(i,{className:"mt-0",children:e.jsx("span",{className:`${X(r.cssClass)}`,children:r.text})}),e.jsx(be,{contents:a}),e.jsx(Y,{href:t})]}),e.jsxs("div",{className:"col-sm-12 col-md-7 mt-2 mt-sm-0",children:[s&&e.jsx(ua,{type:s.type,url:s.url,vttUrl:s.vttUrl,title:s.title,className:"mt-0"}),o&&e.jsx("div",{className:"uds-img",children:e.jsx("img",{src:o.url,className:"img-fluid",alt:o.altText})})]})]})})}function rr({applyNowUrl:t,title:r,contents:a,image:o}){return e.jsx("section",{className:"container","data-type":"text-image-overlay","data-testid":"intro-content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsx(ma,{title:r.text,contents:a,image:o,contentDirection:"right",contentChildren:e.jsx("div",{className:"mt-2",children:e.jsx(Y,{href:t})})})})})})}const sr=({applyNowUrl:t,title:r,contents:a})=>{const o=ye(r);return e.jsx("section",{className:"container","data-type":"text","data-testid":"intro-content",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-12 col-md-5",children:e.jsx(o,{className:"mt-0",children:e.jsx("span",{className:`${X(r.cssClass)}`,children:r.text})})}),e.jsxs("div",{className:"col-sm-12 col-md-7",children:[e.jsx(be,{contents:a}),e.jsx(Y,{href:t})]})]})})},Se=({applyNowUrl:t,type:r,title:a,contents:o,image:s,video:i,photoGrid:n})=>({text:()=>sr({applyNowUrl:t,title:a,contents:o}),"text-media":()=>ar({applyNowUrl:t,title:a,contents:o,image:s,video:i}),"text-image-overlay":()=>rr({applyNowUrl:t,title:a,contents:o,image:s}),"text-photo-grid":()=>tr({applyNowUrl:t,title:a,contents:o,photoGrid:n}),undefined:()=>(console.error(`the type '${r}' is not supported by the 'IntroContent' component.`),null)})[r]();Se.propTypes={applyNowUrl:d.string,type:d.oneOf(["text","text-media","text-image-overlay","text-photo-grid"]).isRequired,video:d.shape({...ya}),image:d.shape({...xa}),header:ke,title:d.shape({...ha,component:d.oneOf(fa)}),contents:d.arrayOf(ke),photoGrid:d.shape({images:d.arrayOf(ga)})};const ee={programs:d.arrayOf(d.object),totalRows:d.number,loading:d.bool,actionUrls:d.shape({applyNowUrl:d.string,majorInfoUrl:d.string,majorInfoOnlineUrl:d.string}),degreesPerPage:d.number},or=q.div`
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
`,we=({programs:t,actionUrls:r})=>{var n,p,c,m,g;const{state:a}=x.useContext(Q),o=(p=(n=a==null?void 0:a.listPageProps)==null?void 0:n.programList)==null?void 0:p.settings,s=((g=(m=(c=a==null?void 0:a.listPageProps)==null?void 0:c.programList)==null?void 0:m.dataSource)==null?void 0:g.program)==="graduate",i=t.map(b=>{const l=V(b),y=()=>{var C;const w=l.isOnline()?l.getOnlineMajorMapURL():l.getGeneralDegreeMajorMap();let S;try{S=`<a href=${(C=new URL(w))==null?void 0:C.toString()}>${l.getRequiredCoursesLabel()} Map</a>`}catch{return""}return S},f=()=>`<div>
        ${l.hasConcurrentDegrees()?"<div className='cell-container'>concurrent</div>":""}
        ${l.hasAccelerateDegrees()?`<div className="cell-container">
                <a href=${Yt(l,r.majorInfoUrl)}>
                  4+1 years
                </a>
              </div>`:""}
    </div>`;return{content:{header:l.getMajorDesc(),body:`<ul>
        <li>
          <strong>Major:</strong>
          <br />
            <a href=${Z(l,r.majorInfoUrl)}>
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
          <br />${l.getCampusList().map(v=>ue(v.campusCode)).join(", ")}
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
      </ul>`}}});return e.jsx(or,{"data-testid":"accordion-view",children:e.jsx(ba,{cards:i})})};we.propTypes={...ee};we.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"AccordionView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const nr=q.section`
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
`;function te({programs:t,loading:r,actionUrls:a}){var c,m,g,b;const{defaultState:o,state:s}=x.useContext(Q),i=(b=(g=(m=(c=s==null?void 0:s.listPageProps)==null?void 0:c.programList)==null?void 0:m.settings)==null?void 0:g.cardDefaultImage)==null?void 0:b.url,n=o.detailPageDefault.hero.image.url,p=i||n;return e.jsx(nr,{id:Kt,className:"container row","data-loading":r,"data-testid":"grid-view",children:t.map(l=>{const y=V(l);return e.jsx("div",{className:"col col-sm-12 col-md-4 col-lg-3 mb-2",children:e.jsx(ja,{type:"degree",horizontal:!1,clickable:!1,image:p,imageAltText:"An example image",title:y.getMajorDesc(),linkLabel:"View Program Details",linkUrl:Z(y,a.majorInfoUrl),buttons:[{color:"maroon",size:"small",label:"Reqeuest Info",href:Wa()},{color:"gold",size:"small",label:"Apply",href:a.applyNowUrl}]})})})})}te.propTypes={...ee};te.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"GridView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const ir=[{dataKey:"Major",label:"Major",className:"major",sortable:!0,contentTemplate:({resolver:t,rowIndex:r,actionUrls:a,onClick:o})=>e.jsxs("div",{className:"cell-container",children:[e.jsx("a",{href:Z(t,a==null?void 0:a.majorInfoUrl),children:t.getMajorDesc()}),e.jsx(va,{dataId:"show-row-detail",ariaLabel:`${t.getMajorDesc()} arrow`,ariaControls:`row-info-${r}`,onClick:s=>o(r,s)})]})},{dataKey:"Degree",label:"Degree",className:"degree",contentTemplate:({resolver:t})=>e.jsxs("div",{className:"cell-container",children:[e.jsx("span",{children:t.getDegree()}),e.jsx(de,{popover:{title:t.getDegreeDesc(),body:t.getDegreeDescLong(),withAuto:!1}})]})},{dataKey:"RequiredCourses",label:"Required Courses",className:"required-course",contentTemplate:({resolver:t})=>{var s;const a=t.isOnline()?t.getOnlineMajorMapURL():t.getGeneralDegreeMajorMap();let o;try{const i=(s=new URL(a))==null?void 0:s.toString();o=e.jsxs("a",{href:i,children:[t.getRequiredCoursesLabel()," Map"]})}catch{return""}return o}},{dataKey:"Location",label:"Campus or location",className:"campus-location",sortable:!0,contentTemplate:({resolver:t})=>{const r=xe("campus-");return e.jsx("div",{children:t.getCampusList().map((a,o,s)=>e.jsxs("div",{className:"cell-container",children:[e.jsx("span",{children:`${ue(Sa(a.campusCode))}${o<s.length-1?", ":""}`},a.campusCode),e.jsx("span",{children:e.jsx(de,{popover:{title:ue(a.campusCode),body:()=>fetch(Ga(a.campusCode)),withAuto:!0}})})]},r.next().value))})}},{dataKey:"AcceleratedConcurrent",label:"Accelerated/ Concurrent",className:"accelerated-concurrent",sortable:!0,contentTemplate:({resolver:t,actionUrls:r})=>e.jsxs("div",{children:[t.getConcurrentDegrees().then(a=>a).length>0&&e.jsx("div",{className:"cell-container",children:"concurrent"}),t.hasConcurrentOrAccelerateDegrees()&&e.jsxs("div",{className:"cell-container",children:[e.jsx("a",{href:Yt(t,r.majorInfoUrl),children:"4+1 years"}),e.jsx(de,{popover:{title:"4+1 years",body:()=>fetch(Va(t.getAcadPlan())),withAuto:!1}})]})]})},{dataKey:"CollegeSchool",label:"College/School",className:"college",sortable:!0,contentTemplate:({resolver:t})=>e.jsx("a",{href:t.getCollegeUrl(),children:t.getCollegeDesc()})}],lr=wa`
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
`,cr=q.table`
  ${lr}
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
        box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #191919 !important;
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
`,dr=({resolver:t,id:r})=>{const a=x.createRef(),o=s=>{s.key==="Enter"&&(a==null||a.current.click())};return e.jsxs("div",{children:[e.jsx("header",{children:e.jsx("strong",{children:"Program Description:"})}),e.jsx("input",{className:"togle-more-text",type:"checkbox",id:`#${r}`}),e.jsx("div",{className:"desc-long",id:r,dangerouslySetInnerHTML:zt(t.getFullDescription())}),e.jsxs("label",{ref:a,className:"label-more-less element-focus",htmlFor:`#${r}`,role:"button",tabIndex:0,onKeyDown:o,children:[e.jsx("span",{"data-testid":"more-text",className:"label-more",children:"[...more]"}),e.jsx("span",{"data-testid":"less-text",className:"label-less",children:"[...less]"})]})]})},pr=({resolver:t})=>e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Additional Program Fee: "}),t.hasAsuProgramFee()?"Yes":"No"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Second Language Requirement: "}),t.hasAsuLangReqFlag()?"Yes":"No"]}),t.hasMathReqFlag()&&e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("strong",{children:"First Required Math Course:"}),e.jsx("span",{children:t.getMinMathReq()}),t.getOtherMathReqCourse()&&e.jsx("span",{dangerouslySetInnerHTML:zt(t.getOtherMathReqCourse())})]})}),t.getMathIntensity()&&e.jsxs("div",{children:[e.jsx("strong",{children:"Math Intensity:"}),t.getMathIntensity()]}),t.hasStemOptText()&&e.jsxs("div",{children:[e.jsx("strong",{children:"STEM OPT:"}),t.hasStemOptText()]})]}),mr=xe("row-"),ae=({programs:t,totalRows:r,loading:a,actionUrls:o})=>{var g,b;const s=Be.useRef(null),i=Be.useRef(null),{state:n}=x.useContext(Q),p=(b=(g=n==null?void 0:n.listPageProps)==null?void 0:g.programList)==null?void 0:b.settings;let c=ir;n.listPageProps.programList.dataSource.program==="graduate"&&(c=c.filter(l=>l.dataKey!=="RequiredCourses")),p!=null&&p.hideCollegeSchool&&(c=c.filter(l=>l.dataKey!=="CollegeSchool"));const m=(l,y)=>{const f=i.current.children;Array.prototype.forEach.call(f,(w,S)=>S!==l&&w.setAttribute("data-is-open","false")),i.current.children[l].setAttribute("data-is-open",String(y))};return e.jsx("section",{className:"container mb-4","data-testid":"list-view",children:e.jsxs(cr,{id:Kt,ref:s,"data-loading":a,title:`${r} program found`,children:[e.jsx("thead",{children:e.jsx("tr",{role:"row",children:c.map(l=>{var y;return e.jsx("th",{tabIndex:0,className:`${l.className}`,scope:"col","aria-label":l.ariaLabel,children:((y=l.headerTemplate)==null?void 0:y.call(l))||e.jsx("span",{children:l.label})},l.dataKey)})})}),e.jsxs("tbody",{ref:i,"data-testid":"program-rows",children:[t.length===0?e.jsx("tr",{role:"presentation",children:e.jsx("td",{colSpan:c.length,"aria-label":"No result found for the filters applied",children:" "})}):null,t.map((l,y)=>{const f=mr.next().value,v=y*2,w=V(l);return e.jsxs(x.Fragment,{children:[e.jsx("tr",{role:"row",children:c.map(S=>{var C;return e.jsx("td",{className:`${S.className}`,children:(C=S.contentTemplate)==null?void 0:C.call(S,{resolver:w,col:S,row:l,rowIndex:v,onClick:m,actionUrls:o})},`${f}-${S.dataKey}`)})},f),e.jsxs("tr",{id:`row-info-${v}`,className:"row-info",children:[e.jsx("td",{colSpan:3,children:dr({resolver:w,id:`${f}-more-text`})},`${f}-info`),e.jsx("td",{colSpan:2,children:pr({resolver:w})},`${f}-extra-info`)]},`${f}-row-info`)]},f)})]})]})})};ae.propTypes={...ee};ae.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"ListView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const ur=Ht`

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
`,gr={[Jt]:te,[ge]:ae};function Pe({dataViewComponent:t,loading:r,programs:a,actionUrls:o,degreesPerPage:s}){let i;s?typeof s!="number"&&(i=parseInt(s,10)):i=8;const n=s||i,p=Ea(a.length,n),c=gr[t],[m,g]=x.useState([]),b=(l,y)=>{const f=(y-1)*n,v=f+n;g(a.slice(f,v))};return x.useEffect(()=>{g(a.slice(0,n))},[a]),e.jsxs("section",{"data-testid":"program-list","data-view-type":t,children:[e.jsx(ur,{}),e.jsx("div",{className:"desktop-view",children:e.jsx(c,{loading:r,programs:m,totalRows:a==null?void 0:a.length,actionUrls:o,degreesPerPage:s||i})}),e.jsx("div",{className:"mobile-view mb-2",children:e.jsx(we,{loading:r,programs:m,totalRows:a==null?void 0:a.length,actionUrls:o,degreesPerPage:s||i})}),a.length>0?e.jsx(Pa,{totalNumbers:7,type:"default",background:"white",totalPages:p,onChange:b,showFirstButton:!0,showLastButton:!0}):e.jsx("section",{className:"container no-space",children:e.jsx(Ca,{message:"No result found for the filters applied"})})]})}Pe.propTypes={dataViewComponent:d.string,...ee,degreesPerPage:d.number};Pe.__docgenInfo={description:`@param {{
 dataViewComponent: GRID_VIEW_ID | LIST_VIEW_ID
} & GridListingProps} props`,methods:[],displayName:"ProgramList",props:{dataViewComponent:{description:"",type:{name:"string"},required:!1},programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};te.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"GridView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};ae.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"ListView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const hr=q.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
  }
`,Ce=({value:t,onChange:r,onSearch:a})=>{const[o,s]=x.useState(!1);let i;x.useEffect(()=>()=>clearTimeout(i),[]);const n=p=>{fe({event:"search",action:"type",name:"onenter",type:"search degree programs",text:p})};return e.jsx(hr,{className:"container mt-5","data-searching":o,"data-testid":"search-bar",children:e.jsx("form",{"data-testid":"search-bar-form",className:"uds-form p-0 col-md-6 col-sm-12",onSubmit:p=>{p.preventDefault(),a(),s(!0),i=setTimeout(()=>s(!1),500),clearTimeout(i)},children:e.jsxs("div",{className:"form-group mb-0 me-2",children:[e.jsx("label",{htmlFor:"search-field",children:"Search"}),e.jsxs("div",{className:"d-flex row align-items-baseline g-3",children:[e.jsx("div",{className:"col-sm-12 col-md-6 align-self-end",children:e.jsx("input",{"data-testid":"search-field",id:"search-field",value:t,type:"text",className:"form-control",placeholder:"Search degree programs",onChange:p=>{r(p.target.value),n(p.target.value)}})}),e.jsx("div",{className:"col-sm-12 col-md-6 mt-2 mt-sm-0",children:e.jsx(Vt,{"data-testid":"search-button",color:"maroon",label:"Search now",ariaLabel:"Search now",size:"default",onClick:a})})]})]})})})};Ce.propTypes={value:d.string,onChange:d.func,onSearch:d.func};Ce.__docgenInfo={description:`@param {SearchBarProps} props
@returns {JSX.Element}`,methods:[],displayName:"SearchBar",props:{value:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},onSearch:{description:"",type:{name:"func"},required:!1}}};const fr=q(Ra)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`,xr=Ht`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`,yr=q.div.attrs({className:"container"})`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`,Le=({appPathFolder:t,actionUrls:r,hasSearchBar:a=!0,hasFilters:o=!0,hero:s,introContent:i,programList:n,degreesPerPage:p})=>{var De;const[{data:c,loading:m,error:g},b]=Fa(),[l,y]=x.useState(!1),[f,v]=x.useState([]),[w,S]=x.useState([]),[C,A]=x.useState(""),u=(De=n.settings)==null?void 0:De.defaultView,h=[ge,Jt].includes(u)?u:ge,[I,D]=x.useState(h),se=qa(n.dataSource,Ba),{defaultState:Zt}=x.useContext(Q),{listingPageDefault:Fe}=Zt,{collegeAcadOrg:qe,departmentCode:Ne,showInactivePrograms:br,blacklistAcadPlans:Ie,program:Ae,cert:ea}=n.dataSource,[Te,oe]=x.useState({...E}),[z,Ue]=x.useState({...E});za({dataSource:n.dataSource,tableView:f,programs:c,stateFilters:Te}),x.useEffect(()=>{typeof window<"u"&&Na({packageName:"app-degree-pages",component:"ListingPage",type:"NA",configuration:{programList:n,degreesPerPage:p}})},[]),x.useEffect(()=>{b(se)},[se]),x.useEffect(()=>{let j=Ka(c||[]);j=Oe({programs:j,filters:{collegeAcadOrg:qe,departmentCode:Ne,blacklistAcadPlans:Ie,program:Ae,showCerts:ea}}),S(j),v(j)},[c,p]);const ne=async j=>{const{acceleratedConcurrent:ie,locations:H,asuLocals:le,keyword:ce}=j;y(!0),b(se);const na=Oe({programs:w,filters:{collegeAcadOrg:qe,departmentCode:Ne,acceleratedConcurrent:ie,locations:le.length>0?H.concat(Ma):H,keyword:ce,blacklistAcadPlans:Ie,program:Ae}});oe({...j}),Ue({...j}),v(na),y(!1)},ta=async()=>{const j={...z,keyword:C};ne(j)},aa=j=>{m||l||ne(j)},ra=async j=>{oe(j)},sa=()=>{oe(E),Ue(E),v(w),A("")},oa=(j,{value:ie})=>{const H=j==="acceleratedConcurrent"?Oa:z[j].filter(ce=>ce.value!==ie),le={...z,[j]:H};ne(le)};return e.jsxs(e.Fragment,{children:[e.jsx(Ia,{}),e.jsx(xr,{}),g&&e.jsx(Aa,{message:Ta}),s!=null&&s.hide?null:e.jsx("section",{"data-testid":"hero",children:e.jsx(Xt,{image:(s==null?void 0:s.image)||Fe.hero.image,title:{text:Ua(n.dataSource),highlightColor:"gold",...s==null?void 0:s.title,maxWidth:"100%"},contents:s==null?void 0:s.contents})}),e.jsxs(fr,{"data-is-loading":m,className:"main-section dg-margin-top",children:[(i==null?void 0:i.breadcrumbs)&&e.jsx("div",{className:"container mt-4 mb-0",children:e.jsx(Da,{breadcrumbs:i.breadcrumbs,section:s?s.title.text:""})}),i?e.jsx(Se,{applyNowUrl:(r==null?void 0:r.applyNowUrl)||Fe.actionUrls.applyNowUrl,type:i.type,header:i.header,title:i.title,contents:i.contents,image:i.image,video:i.video,photoGrid:i.photoGrid}):null,a||o?e.jsxs("section",{className:"no-space",children:[e.jsx(Qt,{}),a?e.jsx(Ce,{value:C,onChange:A,onSearch:ta}):null,o?e.jsx(je,{value:Te,onChange:ra,onApply:aa,onClean:sa}):null,e.jsx(yr,{})]}):null,e.jsx("section",{className:"container",children:e.jsx("div",{className:"d-flex justify-content-between filter-switch-container",children:o?e.jsx(ve,{value:z,onRemove:oa}):null})}),m||l?e.jsx(ka,{}):e.jsx(Pe,{dataViewComponent:I,loading:m||l,programs:f,actionUrls:r,degreesPerPage:p})]})]})};Le.propTypes={appPathFolder:d.string,actionUrls:d.shape({applyNowUrl:d.string}),hasSearchBar:d.bool,hasFilters:d.bool,hero:d.shape(Xt.propTypes),introContent:d.shape(Se.propTypes),programList:d.shape({dataSource:$a,settings:_a}),degreesPerPage:d.number};const re=t=>e.jsx(La,{listPageProps:t,children:e.jsx(Le,{...t})});re.propTypes=Le.propTypes;re.__docgenInfo={description:`@param {ListingPageProps} props
@returns {JSX.Element}`,methods:[],displayName:"AppComponent",props:{appPathFolder:{description:"",type:{name:"string"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1}}},required:!1},hasSearchBar:{description:"",type:{name:"bool"},required:!1},hasFilters:{description:"",type:{name:"bool"},required:!1},hero:{description:"",type:{name:"shape",value:"Hero.propTypes",computed:!0},required:!1},introContent:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"text-media"',computed:!1},{value:'"text-image-overlay"',computed:!1},{value:'"text-photo-grid"',computed:!1}],required:!0},video:{name:"shape",value:{},required:!1},image:{name:"shape",value:{},required:!1},header:{name:"custom",raw:"contentPropShape",required:!1},title:{name:"shape",value:{component:{name:"enum",value:[{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1}],required:!1}},required:!1},contents:{name:"arrayOf",value:{name:"custom",raw:"contentPropShape"},required:!1},photoGrid:{name:"shape",value:{images:{name:"arrayOf",value:{name:"custom",raw:"imagePropShape"},required:!1}},required:!1}}},required:!1},programList:{description:"",type:{name:"shape",value:{dataSource:{name:"custom",raw:"dataSourcePropShape",required:!1},settings:{name:"custom",raw:"columSettingsPropShape",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const Pr={component:re,title:"Program Listing Page",parameters:{docs:{description:{component:"@typedef {import('../../core/types/listing-page-types').ListingPageProps } AppProps"}}}},P=({appPathFolder:t,actionUrls:r,hero:a,introContent:o,programList:s,hasFilters:i,hasSearchBar:n,...p})=>e.jsx(re,{appPathFolder:t,actionUrls:r,hero:a,introContent:o,programList:s,hasSearchBar:n,hasFilters:i,...p}),W={applyNowUrl:"https://admission.asu.edu/apply",majorInfoUrl:`${he()}index.html?path=/story/program-detail-page--default&acadPlan={ACAD_PLAN_CODE}`},K={program:"undergrad"},L={appPathFolder:".",actionUrls:W,hero:null,introContent:{breadcrumbs:[{text:"Academic programs",url:"#"},{text:"Undergraduate degrees",url:`${he()}index.html?path=/story/program-listing-page--default`},{text:"Degree title",url:`${he()}index.html?path=/story/program-detail-page--with-content`,isActive:!0}],type:"text",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<p>Lorem, <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     </p>`},{text:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}]},programList:{dataSource:K}},N=P.bind({});N.args={...L};const G=P.bind({});G.args={...L,introContent:null,programList:{...L.programList,dataSource:{...L.programList.dataSource,program:"graduate"}}};const k=P.bind({});k.args={...L,introContent:null,programList:{...L.programList,dataSource:{...L.programList.dataSource,blacklistAcadPlans:["BAACCBS","LAACTBS"]}}};const B=P.bind({});B.args={...L,degreesPerPage:2};const O=P.bind({});O.args={...L,introContent:null,programList:{...L.programList,dataSource:{...L.programList.dataSource,cert:"true",showInactivePrograms:"true"}}};const M=P.bind({});M.args={...N.args,hero:null,programList:{...N.args.programList,dataSource:{...N.args.programList.dataSource,departmentCode:"CPUBAFF",collegeAcadOrg:"CPP"}}};const R=P.bind({});R.args={actionUrls:W,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",altText:"Undergraduate Degrees",size:"medium"},title:{text:"Undergraduate Degrees",highlightColor:"gold"}},introContent:{type:"text",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}]},programList:{dataSource:K,settings:{hideCollegeSchool:!0,cardDefaultImage:{url:"examples/assets/img/ds_header_undergrad.jpg"}}}};const _=P.bind({});_.args={actionUrls:W,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",size:"medium"},title:{text:"Area of study degrees",highlightColor:"gold"}},introContent:{type:"text-photo-grid",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}],photoGrid:{images:[{url:"examples/assets/img/demo-phot-1.jpeg"},{url:"examples/assets/img/demo-phot-2.jpeg"},{url:"examples/assets/img/demo-phot-3.jpeg"}]}},hasFilters:!1,hasSearchBar:!1,programList:{dataSource:K}};const F=P.bind({});F.args={actionUrls:W,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",size:"medium"},title:{text:"Area of study degrees",highlightColor:"gold"}},introContent:{type:"text-media",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}],image:{url:"https://source.unsplash.com/random/800x400?a=1"}},programList:{dataSource:K}};const T=P.bind({});T.args={...F.args};T.args.introContent={...F.args.introContent,image:void 0,video:{url:"/examples/assets/video/stock-video-person-drawing.mp4",title:"",vttUrl:""}};const U=P.bind({});U.args={...F.args};U.args.introContent={...F.args.introContent,image:void 0,video:{type:"youtube",url:"https://www.youtube.com/embed/YW2p0ctzK9c"}};const $=P.bind({});$.args={actionUrls:W,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",size:"medium"},title:{text:"[Subdomain] degrees in [area of study]",highlightColor:"gold"}},introContent:{type:"text-image-overlay",header:{text:"Intro Content Image Overlay"},title:{text:"This is the contents that goes in the box"},contents:[{text:`<b>Instagram</b> tour operator travel sailing flying package.
         Territory New York City group discount active lifestyle creditcard
         insurance wellness kayak guide overnight rural lonely planet.`},{text:`Train luxury Paris recommendations nature France sight seeing.
         Flexibility Amsterdam maps.
         Pacific lonely planet private jet national insurance taxi tourist attractions.
         Budget Pacific guide caravan Barcelona place to stay maps gateway diary tour operator money`}],image:{url:"https://source.unsplash.com/random/800x600?a=1"}},programList:{dataSource:K}};var _e,$e,Ee,Ge,Ve;N.parameters={...N.parameters,docs:{...(_e=N.parameters)==null?void 0:_e.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Ee=($e=N.parameters)==null?void 0:$e.docs)==null?void 0:Ee.source},description:{story:"@type {{ args: AppProps }}",...(Ve=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.description}}};var We,Ke,ze;G.parameters={...G.parameters,docs:{...(We=G.parameters)==null?void 0:We.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(ze=(Ke=G.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source}}};var He,Je,Xe,Ye,Qe;k.parameters={...k.parameters,docs:{...(He=k.parameters)==null?void 0:He.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Xe=(Je=k.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source},description:{story:"@type {{ args: AppProps }}",...(Qe=(Ye=k.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.description}}};var Ze,et,tt,at,rt;B.parameters={...B.parameters,docs:{...(Ze=B.parameters)==null?void 0:Ze.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(tt=(et=B.parameters)==null?void 0:et.docs)==null?void 0:tt.source},description:{story:"@type {{ args: AppProps }}",...(rt=(at=B.parameters)==null?void 0:at.docs)==null?void 0:rt.description}}};var st,ot,nt,it,lt;O.parameters={...O.parameters,docs:{...(st=O.parameters)==null?void 0:st.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(nt=(ot=O.parameters)==null?void 0:ot.docs)==null?void 0:nt.source},description:{story:"@type {{ args: AppProps }}",...(lt=(it=O.parameters)==null?void 0:it.docs)==null?void 0:lt.description}}};var ct,dt,pt,mt,ut;M.parameters={...M.parameters,docs:{...(ct=M.parameters)==null?void 0:ct.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(pt=(dt=M.parameters)==null?void 0:dt.docs)==null?void 0:pt.source},description:{story:"@type {{ args: AppProps}}",...(ut=(mt=M.parameters)==null?void 0:mt.docs)==null?void 0:ut.description}}};var gt,ht,ft,xt,yt;R.parameters={...R.parameters,docs:{...(gt=R.parameters)==null?void 0:gt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(ft=(ht=R.parameters)==null?void 0:ht.docs)==null?void 0:ft.source},description:{story:"@type {{ args: AppProps }}",...(yt=(xt=R.parameters)==null?void 0:xt.docs)==null?void 0:yt.description}}};var bt,jt,vt,St,wt;_.parameters={..._.parameters,docs:{...(bt=_.parameters)==null?void 0:bt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(vt=(jt=_.parameters)==null?void 0:jt.docs)==null?void 0:vt.source},description:{story:"@type {{ args: AppProps }}",...(wt=(St=_.parameters)==null?void 0:St.docs)==null?void 0:wt.description}}};var Pt,Ct,Lt,Ft,qt;F.parameters={...F.parameters,docs:{...(Pt=F.parameters)==null?void 0:Pt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Lt=(Ct=F.parameters)==null?void 0:Ct.docs)==null?void 0:Lt.source},description:{story:"@type {{ args: AppProps}}",...(qt=(Ft=F.parameters)==null?void 0:Ft.docs)==null?void 0:qt.description}}};var Nt,It,At,Tt,Ut;T.parameters={...T.parameters,docs:{...(Nt=T.parameters)==null?void 0:Nt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(At=(It=T.parameters)==null?void 0:It.docs)==null?void 0:At.source},description:{story:"@type {{ args: AppProps}}",...(Ut=(Tt=T.parameters)==null?void 0:Tt.docs)==null?void 0:Ut.description}}};var Dt,kt,Bt,Ot,Mt;U.parameters={...U.parameters,docs:{...(Dt=U.parameters)==null?void 0:Dt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Bt=(kt=U.parameters)==null?void 0:kt.docs)==null?void 0:Bt.source},description:{story:"@type {{ args: AppProps}}",...(Mt=(Ot=U.parameters)==null?void 0:Ot.docs)==null?void 0:Mt.description}}};var Rt,_t,$t,Et,Gt;$.parameters={...$.parameters,docs:{...(Rt=$.parameters)==null?void 0:Rt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...($t=(_t=$.parameters)==null?void 0:_t.docs)==null?void 0:$t.source},description:{story:`@param {AppProps} props
@returns {JSX.Element}`,...(Gt=(Et=$.parameters)==null?void 0:Et.docs)==null?void 0:Gt.description}}};const Cr=["Default","DefaultGraduate","DefaultWithBlacklistedPlanCodes","DefaultWithDegreesPerPageSet","DefaultWithCertificate","WithCollegeAcadOrgAndDepartmentCode","WithIntroText","WithIntroTextPhotoGrid","WithIntroTextMediaImage","WithIntroTextMediaVideo","WithIntroTextMediaYoutubeVideo","WithIntroTextImageOverlay"];export{N as Default,G as DefaultGraduate,k as DefaultWithBlacklistedPlanCodes,O as DefaultWithCertificate,B as DefaultWithDegreesPerPageSet,M as WithCollegeAcadOrgAndDepartmentCode,R as WithIntroText,$ as WithIntroTextImageOverlay,F as WithIntroTextMediaImage,T as WithIntroTextMediaVideo,U as WithIntroTextMediaYoutubeVideo,_ as WithIntroTextPhotoGrid,Cr as __namedExportsOrder,Pr as default};
