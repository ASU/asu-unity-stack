import{p as na,o as z,Y as ce,Z as ia,j as e,q as L,_ as la,$ as ca,a0 as da,l as $t,t as ue,P as d,a1 as Et,i as ge,a2 as he,d as K,a3 as fe,a4 as H,O as pa,G as ma,h as Te,b as ua,a5 as ga,a6 as ha,c as fa,v as xa,x as J,a7 as de,S as ya,a8 as Gt,K as ba,a9 as ja,aa as ie,ab as va,ac as Sa,s as Vt,ad as wa,ae as Pa,af as Wt,ag as pe,ah as Kt,A as Ca,u as La,r as Fa,y as qa,T as Na,E as Ia,C as Aa,F as zt,ai as Ta,J as Ua,L as Da,aj as ka,ak as Ba,al as Oa,M as Ra,am as Ma,R as _a,X as me}from"./index-CHmuEQBt.js";import{r as x,R as Ue}from"./index-B2SEcK1p.js";import"./index-BEWoeB4E.js";import"./_commonjsHelpers-B3tUAs5q.js";function $a(t,r){const a=Math.floor(t/r),o=t%r;return a+(o>0?1:0)}function Ea(t){return""}function Ga(t){return""}function Va(){return""}function X(t,r){let a=r||"";return a=a.replaceAll("{INSTITUTION_CODE}",t.getInstitution()).replaceAll("{ACAD_PLAN_CODE}",t.getAcadPlan()),a}function Ht(t,r){return`${X(t,r)}#${na.flexibleDegreeOptions.acceleratedId}`}function De({programs:t=[],filters:{collegeAcadOrg:r,departmentCode:a,acceleratedConcurrent:o,locations:s=[],keyword:i,blacklistAcadPlans:n,program:p,showCerts:c}}){const m=u=>!r||u.getCollegeAcadOrgJoint().includes(r),h=u=>!a||u.getDepartmentCode().includes(a),b=u=>{var g;return!s.length||((g=u.getCampusList())==null?void 0:g.some(q=>s.some(E=>E.value===q.campusCode)))},l=(u={})=>{var g;return!ce(o)||((g=u[o.value])==null?void 0:g.length)>0},y=(u,g)=>g?new RegExp(g,"i").test(u.getFullDescription()):!0,f=u=>!(n!=null&&n.includes(u.getAcadPlan())),v=u=>p==="undergrad"?!0:c==="true"&&p==="graduate"?u.isMinorOrCertificate():u.isPhdOrMasters(),S=u=>{const g=z(u);return m(g)&&h(g)&&b(g)&&l(u)&&y(g,i)&&f(g)&&v(g)};return t.filter(S)}const Wa=t=>t.sort((a,o)=>a.acadPlanMarketingDescription.localeCompare(o.acadPlanMarketingDescription)),Ka=({dataSource:t,tableView:r=[],programs:a,stateFilters:o})=>{const{collegeAcadOrg:s,departmentCode:i}=t;x.useEffect(()=>{if(!a||!ia())return;const n="background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;",p="font-size:30px;",c="font-size:24px;",m="font-size: 18px; margin-left: 0.5rem;";console.group("<< ASU Degree Page >>"),console.log("%c🏫 Listing Page Programs 📚",n+p),console.log(`%cTotal programs found: ${a.length}`,n+m),console.log("%cPrograms found",n+m),console.log(a),console.log(`%cTotal programs loaded: ${r.length}`,n+m),console.log("%cPrograms loaded",n+m),console.log(r),console.log("%cPage Filters",n+c),console.log(`%c- collegeAcadOrg:${s}`,n+m),console.log(`%c- departmentCode:${i}`,n+m),console.log("%cSearch Filters",n+c),console.log(o),console.groupEnd()})},Jt=()=>e.jsx("div",{className:"container","data-testid":"browse-title",children:e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Browse degrees"})})});Jt.__docgenInfo={description:"",methods:[],displayName:"BrowseTitle"};const W=({id:t,label:r,selected:a,multiple:o,options:s,onChange:i})=>e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:t,children:r}),e.jsx("select",{className:"form-select",id:t,"data-testid":t,multiple:o,onChange:n=>i(t,n),value:a,children:s==null?void 0:s.map(n=>e.jsx("option",{id:n.id,value:n.value,children:n.text},n.id))})]});W.__docgenInfo={description:`@param {SelectFormGroupProps} props
@returns {JSX.Element}`,methods:[],displayName:"SelectFormGroup"};const za=L.div`
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
`,Ha=L.button`
  font-weight: 400;
  text-decoration: underline;
`,Ja={event:"select",action:"click",name:"onclick"},Xa={event:"link",action:"click",name:"onclick",type:"internal link"},R={isActive:!1,locations:[],asuLocals:[],acceleratedConcurrent:{value:"all",text:""},keyword:null,blacklistAcadPlans:[]},le=t=>({id:t.id,value:t.value,text:t.text}),Ya=t=>t.map(r=>r.text).join(", "),ke=(t,r)=>{ue({...Ja,type:t,text:r})},Be=t=>{ue({...Xa,text:t})},xe=({value:t,onChange:r,onApply:a,onClean:o})=>{const s=(c,{target:{selectedOptions:m}})=>{let h=[],b=[];const l=Array.from(m,le),{locations:y,asuLocals:f}=t;({locationsRender:()=>{h=l,b=f},asuLocalsRender:()=>{b=l,h=y}})[`${c}Render`](),r({...t,locations:h,asuLocals:b}),ke({locations:"location or online",asuLocals:"as local"}[c],Ya(l))},i=(c,{target:{selectedOptions:m}})=>{r({...t,[c]:le(m[0])}),ke("accelerated/concurrent",le(m[0]).text)},n=()=>{a==null||a({...t,isActive:!0})},p=()=>{r(R),o==null||o()};return e.jsxs(za,{className:"container","data-testid":"filters",children:[e.jsx("h4",{children:"Filter your results"}),e.jsxs("form",{className:"mt-3 uds-form row",children:[e.jsx("div",{className:"col-lg-4 col-md-12",children:e.jsx(W,{multiple:!0,id:"locations",label:"Campuses or online",selected:t.locations.map(c=>c.value),options:la,onChange:s})}),e.jsx("div",{className:"col-lg-4 col-md-12",children:e.jsx(W,{multiple:!0,id:"asuLocals",label:"ASU location, ASU Local",selected:t.asuLocals.map(c=>c.value),options:ca,onChange:s})}),e.jsx("div",{className:"col-lg-4 col-md-12",children:e.jsx(W,{id:"acceleratedConcurrent",label:"Accelerated, Concurrent",selected:t.acceleratedConcurrent.value,options:da,onChange:i})})]}),e.jsx("div",{className:"hint-container",children:e.jsx("p",{children:e.jsx("small",{children:"*CTRL + Click to select multiple"})})}),e.jsxs("div",{className:"filter-action-buttons",children:[e.jsx($t,{"data-testid":"btn-apply-filter",color:"maroon",label:"Apply filters",ariaLabel:"Apply filters",size:"default",onClick:()=>{n(),Be("apply filters")}}),e.jsx(Ha,{"data-testid":"btn-clear-filters",className:"btn btn-link",onClick:()=>{p(),Be("clean filters")},children:"Clear filters"})]})]})};xe.propTypes={value:Et,onChange:d.func,onApply:d.func,onClean:d.func};xe.__docgenInfo={description:`@param {FilterProps} props
@returns {JSX.Element}`,methods:[],displayName:"Filters",props:{value:{description:"",type:{name:"shape",value:{locations:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},asuLocals:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},acceleratedConcurrent:{name:"custom",raw:"optionItemShape",required:!1}}},required:!1},onChange:{description:"",type:{name:"func"},required:!1},onApply:{description:"",type:{name:"func"},required:!1},onClean:{description:"",type:{name:"func"},required:!1}}};function ye({value:{isActive:t,locations:r,asuLocals:a,acceleratedConcurrent:o}={},onRemove:s}){const i=ge("filter-"),n=(r==null?void 0:r.length)+(a==null?void 0:a.length)+(ce(o)?1:0),p=(c,m)=>{const{text:h}=m;return e.jsxs("span",{tabIndex:-1,role:"button","aria-label":`Remove filter ${h}`,"data-filter-id":c,onKeyDown:()=>s(c,m),onClick:()=>s(c,m),className:"btn btn-tag btn-tag-alt-white d-inline-flex align-items-center me-2",children:[e.jsx("span",{className:"pe-1",children:h}),e.jsx("i",{className:"fas fa-times"})]},i.next().value)};return e.jsxs("div",{"data-testid":"filters-summary",children:[e.jsx("header",{children:e.jsx("strong",{children:"Applied filters"})}),e.jsx("div",{"data-testid":"summary-filter-tags",children:!t||n===0?e.jsx("span",{children:"No filters applied"}):e.jsxs(e.Fragment,{children:[r.map(c=>p("locations",c)),a.map(c=>p("asuLocals",c)),(ce(o)?[o]:[]).map(c=>p("acceleratedConcurrent",c))]})})]})}ye.propTypes={value:Et,onRemove:d.func};ye.__docgenInfo={description:`@param {{
 value: import("src").FiltersState
 onRemove: (filterName: string, filter: import("src").FilterOption) => void
}} propsÎ
@returns {JSX.Element}`,methods:[],displayName:"FiltersSummary",props:{value:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{locations:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},asuLocals:{name:"arrayOf",value:{name:"custom",raw:"optionItemShape"},required:!1},acceleratedConcurrent:{name:"custom",raw:"optionItemShape",required:!1}}},required:!1},onRemove:{description:"",type:{name:"func"},required:!1}}};const Za=L.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`,Qa=L.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;function er({applyNowUrl:t,title:r,contents:a,photoGrid:o}){const s=he(r);return e.jsx("section",{className:"container","data-type":"text-photo-grid","data-testid":"intro-content",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-sm-12 col-md-5",children:[e.jsx(s,{className:"mt-0",children:e.jsx("span",{className:`${K(r.cssClass)}`,children:r.text})}),e.jsx(fe,{contents:a}),e.jsx(H,{href:t})]}),e.jsx("div",{className:"col-sm-12 col-md-7 d-none d-sm-none d-md-block",children:e.jsx(Za,{className:"row",children:o.images.map((i,n)=>e.jsx("div",{className:"photo-item col-sm-12 col-md-6 col-lg-6",children:e.jsx("img",{className:`mg-fluid ${K(i.cssClass)}`,src:i.url,alt:i.altText,style:{maxWidth:"100%"}})},`img-${n+1}`))})})]})})}function tr({applyNowUrl:t,title:r,contents:a,image:o,video:s}){const i=he(r);return e.jsx(Qa,{className:"container","data-type":"text-media","data-testid":"intro-content",children:e.jsxs("div",{className:"row gy-3",children:[e.jsxs("div",{className:"col-sm-12 col-md-5",children:[e.jsx(i,{className:"mt-0",children:e.jsx("span",{className:`${K(r.cssClass)}`,children:r.text})}),e.jsx(fe,{contents:a}),e.jsx(H,{href:t})]}),e.jsxs("div",{className:"col-sm-12 col-md-7 mt-2 mt-sm-0",children:[s&&e.jsx(ma,{type:s.type,url:s.url,vttUrl:s.vttUrl,title:s.title,className:"mt-0"}),o&&e.jsx("div",{className:"uds-img",children:e.jsx("img",{src:o.url,className:"img-fluid",alt:o.altText})})]})]})})}function ar({applyNowUrl:t,title:r,contents:a,image:o}){return e.jsx("section",{className:"container","data-type":"text-image-overlay","data-testid":"intro-content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsx(pa,{title:r.text,contents:a,image:o,contentDirection:"right",contentChildren:e.jsx("div",{className:"mt-2",children:e.jsx(H,{href:t})})})})})})}const rr=({applyNowUrl:t,title:r,contents:a})=>{const o=he(r);return e.jsx("section",{className:"container","data-type":"text","data-testid":"intro-content",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-12 col-md-5",children:e.jsx(o,{className:"mt-0",children:e.jsx("span",{className:`${K(r.cssClass)}`,children:r.text})})}),e.jsxs("div",{className:"col-sm-12 col-md-7",children:[e.jsx(fe,{contents:a}),e.jsx(H,{href:t})]})]})})},be=({applyNowUrl:t,type:r,title:a,contents:o,image:s,video:i,photoGrid:n})=>({text:()=>rr({applyNowUrl:t,title:a,contents:o}),"text-media":()=>tr({applyNowUrl:t,title:a,contents:o,image:s,video:i}),"text-image-overlay":()=>ar({applyNowUrl:t,title:a,contents:o,image:s}),"text-photo-grid":()=>er({applyNowUrl:t,title:a,contents:o,photoGrid:n}),undefined:()=>(console.error(`the type '${r}' is not supported by the 'IntroContent' component.`),null)})[r]();be.propTypes={applyNowUrl:d.string,type:d.oneOf(["text","text-media","text-image-overlay","text-photo-grid"]).isRequired,video:d.shape({...xa}),image:d.shape({...fa}),header:Te,title:d.shape({...ga,component:d.oneOf(ha)}),contents:d.arrayOf(Te),photoGrid:d.shape({images:d.arrayOf(ua)})};const Y={programs:d.arrayOf(d.object),totalRows:d.number,loading:d.bool,actionUrls:d.shape({applyNowUrl:d.string,majorInfoUrl:d.string,majorInfoOnlineUrl:d.string}),degreesPerPage:d.number},sr=L.div`
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
`,je=({programs:t,actionUrls:r})=>{var n,p,c,m,h;const{state:a}=x.useContext(J),o=(p=(n=a==null?void 0:a.listPageProps)==null?void 0:n.programList)==null?void 0:p.settings,s=((h=(m=(c=a==null?void 0:a.listPageProps)==null?void 0:c.programList)==null?void 0:m.dataSource)==null?void 0:h.program)==="graduate",i=t.map(b=>{const l=z(b),y=()=>{var g;const S=l.isOnline()?l.getOnlineMajorMapURL():l.getGeneralDegreeMajorMap();let u;try{u=`<a href=${(g=new URL(S))==null?void 0:g.toString()}>${l.getRequiredCoursesLabel()} Map</a>`}catch{return""}return u},f=()=>`<div>
        ${l.hasConcurrentDegrees()?"<div className='cell-container'>concurrent</div>":""}
        ${l.hasAccelerateDegrees()?`<div className="cell-container">
                <a href=${Ht(l,r.majorInfoUrl)}>
                  4+1 years
                </a>
              </div>`:""}
    </div>`;return{content:{header:l.getMajorDesc(),body:`<ul>
        <li>
          <strong>Major:</strong>
          <br />
            <a href=${X(l,r.majorInfoUrl)}>
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
          <br />${l.getCampusList().map(v=>de(v.campusCode)).join(", ")}
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
      </ul>`}}});return e.jsx(sr,{"data-testid":"accordion-view",children:e.jsx(ya,{cards:i})})};je.propTypes={...Y};je.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"AccordionView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const or=L.section`
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
`;function Z({programs:t,loading:r,actionUrls:a}){var c,m,h,b;const{defaultState:o,state:s}=x.useContext(J),i=(b=(h=(m=(c=s==null?void 0:s.listPageProps)==null?void 0:c.programList)==null?void 0:m.settings)==null?void 0:h.cardDefaultImage)==null?void 0:b.url,n=o.detailPageDefault.hero.image.url,p=i||n;return e.jsx(or,{id:Gt,className:"container row","data-loading":r,"data-testid":"grid-view",children:t.map(l=>{const y=z(l);return e.jsx("div",{className:"col col-sm-12 col-md-4 col-lg-3 mb-2",children:e.jsx(ba,{type:"degree",horizontal:!1,clickable:!1,image:p,imageAltText:"An example image",title:y.getMajorDesc(),linkLabel:"View Program Details",linkUrl:X(y,a.majorInfoUrl),buttons:[{color:"maroon",size:"small",label:"Reqeuest Info",href:Va()},{color:"gold",size:"small",label:"Apply",href:a.applyNowUrl}]})})})})}Z.propTypes={...Y};Z.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"GridView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const nr=[{dataKey:"Major",label:"Major",className:"major",sortable:!0,contentTemplate:({resolver:t,rowIndex:r,actionUrls:a,onClick:o})=>e.jsxs("div",{className:"cell-container",children:[e.jsx("a",{href:X(t,a==null?void 0:a.majorInfoUrl),children:t.getMajorDesc()}),e.jsx(ja,{dataId:"show-row-detail",ariaLabel:`${t.getMajorDesc()} arrow`,ariaControls:`row-info-${r}`,onClick:s=>o(r,s)})]})},{dataKey:"Degree",label:"Degree",className:"degree",contentTemplate:({resolver:t})=>e.jsxs("div",{className:"cell-container",children:[e.jsx("span",{children:t.getDegree()}),e.jsx(ie,{popover:{title:t.getDegreeDesc(),body:t.getDegreeDescLong(),withAuto:!1}})]})},{dataKey:"RequiredCourses",label:"Required Courses",className:"required-course",contentTemplate:({resolver:t})=>{var s;const a=t.isOnline()?t.getOnlineMajorMapURL():t.getGeneralDegreeMajorMap();let o;try{const i=(s=new URL(a))==null?void 0:s.toString();o=e.jsxs("a",{href:i,children:[t.getRequiredCoursesLabel()," Map"]})}catch{return""}return o}},{dataKey:"Location",label:"Campus or location",className:"campus-location",sortable:!0,contentTemplate:({resolver:t})=>{const r=ge("campus-");return e.jsx("div",{children:t.getCampusList().map((a,o,s)=>e.jsxs("div",{className:"cell-container",children:[e.jsx("span",{children:`${de(va(a.campusCode))}${o<s.length-1?", ":""}`},a.campusCode),e.jsx("span",{children:e.jsx(ie,{popover:{title:de(a.campusCode),body:()=>fetch(Ea(a.campusCode)),withAuto:!0}})})]},r.next().value))})}},{dataKey:"AcceleratedConcurrent",label:"Accelerated/ Concurrent",className:"accelerated-concurrent",sortable:!0,contentTemplate:({resolver:t,actionUrls:r})=>e.jsxs("div",{children:[t.getConcurrentDegrees().then(a=>a).length>0&&e.jsx("div",{className:"cell-container",children:"concurrent"}),t.hasConcurrentOrAccelerateDegrees()&&e.jsxs("div",{className:"cell-container",children:[e.jsx("a",{href:Ht(t,r.majorInfoUrl),children:"4+1 years"}),e.jsx(ie,{popover:{title:"4+1 years",body:()=>fetch(Ga(t.getAcadPlan())),withAuto:!1}})]})]})},{dataKey:"CollegeSchool",label:"College/School",className:"college",sortable:!0,contentTemplate:({resolver:t})=>e.jsx("a",{href:t.getCollegeUrl(),children:t.getCollegeDesc()})}],ir=Sa`
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
`,lr=L.table`
  ${ir}
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
`,cr=({resolver:t,id:r})=>{const a=x.createRef(),o=s=>{s.key==="Enter"&&(a==null||a.current.click())};return e.jsxs("div",{children:[e.jsx("header",{children:e.jsx("strong",{children:"Program Description:"})}),e.jsx("input",{className:"togle-more-text",type:"checkbox",id:`#${r}`}),e.jsx("div",{className:"desc-long",id:r,dangerouslySetInnerHTML:Vt(t.getFullDescription())}),e.jsxs("label",{ref:a,className:"label-more-less element-focus",htmlFor:`#${r}`,role:"button",tabIndex:0,onKeyDown:o,children:[e.jsx("span",{"data-testid":"more-text",className:"label-more",children:"[...more]"}),e.jsx("span",{"data-testid":"less-text",className:"label-less",children:"[...less]"})]})]})},dr=({resolver:t})=>e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Additional Program Fee: "}),t.hasAsuProgramFee()?"Yes":"No"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Second Language Requirement: "}),t.hasAsuLangReqFlag()?"Yes":"No"]}),t.hasMathReqFlag()&&e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("strong",{children:"First Required Math Course:"}),e.jsx("span",{children:t.getMinMathReq()}),t.getOtherMathReqCourse()&&e.jsx("span",{dangerouslySetInnerHTML:Vt(t.getOtherMathReqCourse())})]})}),t.getMathIntensity()&&e.jsxs("div",{children:[e.jsx("strong",{children:"Math Intensity:"}),t.getMathIntensity()]})]}),pr=ge("row-"),Q=({programs:t,totalRows:r,loading:a,actionUrls:o})=>{var h,b;const s=Ue.useRef(null),i=Ue.useRef(null),{state:n}=x.useContext(J),p=(b=(h=n==null?void 0:n.listPageProps)==null?void 0:h.programList)==null?void 0:b.settings;let c=nr;n.listPageProps.programList.dataSource.program==="graduate"&&(c=c.filter(l=>l.dataKey!=="RequiredCourses")),p!=null&&p.hideCollegeSchool&&(c=c.filter(l=>l.dataKey!=="CollegeSchool"));const m=(l,y)=>{const f=i.current.children;Array.prototype.forEach.call(f,(S,u)=>u!==l&&S.setAttribute("data-is-open","false")),i.current.children[l].setAttribute("data-is-open",String(y))};return e.jsx("section",{className:"container mb-4","data-testid":"list-view",children:e.jsxs(lr,{id:Gt,ref:s,"data-loading":a,title:`${r} program found`,children:[e.jsx("thead",{children:e.jsx("tr",{role:"row",children:c.map(l=>{var y;return e.jsx("th",{tabIndex:0,className:`${l.className}`,scope:"col","aria-label":l.ariaLabel,children:((y=l.headerTemplate)==null?void 0:y.call(l))||e.jsx("span",{children:l.label})},l.dataKey)})})}),e.jsxs("tbody",{ref:i,"data-testid":"program-rows",children:[t.length===0?e.jsx("tr",{role:"presentation",children:e.jsx("td",{colSpan:c.length,"aria-label":"No result found for the filters applied",children:" "})}):null,t.map((l,y)=>{const f=pr.next().value,v=y*2,S=z(l);return e.jsxs(x.Fragment,{children:[e.jsx("tr",{role:"row",children:c.map(u=>{var g;return e.jsx("td",{className:`${u.className}`,children:(g=u.contentTemplate)==null?void 0:g.call(u,{resolver:S,col:u,row:l,rowIndex:v,onClick:m,actionUrls:o})},`${f}-${u.dataKey}`)})},f),e.jsxs("tr",{id:`row-info-${v}`,className:"row-info",children:[e.jsx("td",{colSpan:3,children:cr({resolver:S,id:`${f}-more-text`})},`${f}-info`),e.jsx("td",{colSpan:2,children:dr({resolver:S})},`${f}-extra-info`)]},`${f}-row-info`)]},f)})]})]})})};Q.propTypes={...Y};Q.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"ListView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const mr=Wt`

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
`,ur={[Kt]:Z,[pe]:Q};function ve({dataViewComponent:t,loading:r,programs:a,actionUrls:o,degreesPerPage:s}){let i;s?typeof s!="number"&&(i=parseInt(s,10)):i=8;const n=s||i,p=$a(a.length,n),c=ur[t],[m,h]=x.useState([]),b=(l,y)=>{const f=(y-1)*n,v=f+n;h(a.slice(f,v))};return x.useEffect(()=>{h(a.slice(0,n))},[a]),e.jsxs("section",{"data-testid":"program-list","data-view-type":t,children:[e.jsx(mr,{}),e.jsx("div",{className:"desktop-view",children:e.jsx(c,{loading:r,programs:m,totalRows:a==null?void 0:a.length,actionUrls:o,degreesPerPage:s||i})}),e.jsx("div",{className:"mobile-view mb-2",children:e.jsx(je,{loading:r,programs:m,totalRows:a==null?void 0:a.length,actionUrls:o,degreesPerPage:s||i})}),a.length>0?e.jsx(wa,{totalNumbers:7,type:"default",background:"white",totalPages:p,onChange:b,showFirstButton:!0,showLastButton:!0}):e.jsx("section",{className:"container no-space",children:e.jsx(Pa,{message:"No result found for the filters applied"})})]})}ve.propTypes={dataViewComponent:d.string,...Y,degreesPerPage:d.number};ve.__docgenInfo={description:`@param {{
 dataViewComponent: GRID_VIEW_ID | LIST_VIEW_ID
} & GridListingProps} props`,methods:[],displayName:"ProgramList",props:{dataViewComponent:{description:"",type:{name:"string"},required:!1},programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};Z.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"GridView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};Q.__docgenInfo={description:`@param {import("..").GridListingProps} props
@returns {JSX.Element}`,methods:[],displayName:"ListView",props:{programs:{description:"",type:{name:"arrayOf",value:{name:"object"}},required:!1},totalRows:{description:"",type:{name:"number"},required:!1},loading:{description:"",type:{name:"bool"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},majorInfoUrl:{name:"string",required:!1},majorInfoOnlineUrl:{name:"string",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const gr=L.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
  }
`,Se=({value:t,onChange:r,onSearch:a})=>{const[o,s]=x.useState(!1);let i;x.useEffect(()=>()=>clearTimeout(i),[]);const n=p=>{ue({event:"search",action:"type",name:"onenter",type:"search degree programs",text:p})};return e.jsx(gr,{className:"container mt-5","data-searching":o,"data-testid":"search-bar",children:e.jsx("form",{"data-testid":"search-bar-form",className:"uds-form p-0 col-md-6 col-sm-12",onSubmit:p=>{p.preventDefault(),a(),s(!0),i=setTimeout(()=>s(!1),500),clearTimeout(i)},children:e.jsxs("div",{className:"form-group mb-0 me-2",children:[e.jsx("label",{htmlFor:"search-field",children:"Search"}),e.jsxs("div",{className:"d-flex row align-items-baseline g-3",children:[e.jsx("div",{className:"col-sm-12 col-md-6 align-self-end",children:e.jsx("input",{"data-testid":"search-field",id:"search-field",value:t,type:"text",className:"form-control",placeholder:"Search degree programs",onChange:p=>{r(p.target.value),n(p.target.value)}})}),e.jsx("div",{className:"col-sm-12 col-md-6 mt-2 mt-sm-0",children:e.jsx($t,{"data-testid":"search-button",color:"maroon",label:"Search now",ariaLabel:"Search now",size:"default",onClick:a})})]})]})})})};Se.propTypes={value:d.string,onChange:d.func,onSearch:d.func};Se.__docgenInfo={description:`@param {SearchBarProps} props
@returns {JSX.Element}`,methods:[],displayName:"SearchBar",props:{value:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},onSearch:{description:"",type:{name:"func"},required:!1}}};const hr=L(Ra)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`,fr=Wt`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`,xr=L.div.attrs({className:"container"})`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`,we=({appPathFolder:t,actionUrls:r,hasSearchBar:a=!0,hasFilters:o=!0,hero:s,introContent:i,programList:n,degreesPerPage:p})=>{var Ae;const[{data:c,loading:m,error:h},b]=La(),[l,y]=x.useState(!1),[f,v]=x.useState([]),[S,u]=x.useState([]),[g,q]=x.useState(""),E=(Ae=n.settings)==null?void 0:Ae.defaultView,Xt=[pe,Kt].includes(E)?E:pe,[Yt,yr]=x.useState(Xt),te=Fa(n.dataSource,ka),{defaultState:Zt}=x.useContext(J),{listingPageDefault:Pe}=Zt,{collegeAcadOrg:Ce,departmentCode:Le,showInactivePrograms:br,blacklistAcadPlans:Fe,program:qe,cert:Qt}=n.dataSource,[Ne,ae]=x.useState({...R}),[G,Ie]=x.useState({...R});Ka({dataSource:n.dataSource,tableView:f,programs:c,stateFilters:Ne}),x.useEffect(()=>{typeof window<"u"&&qa({packageName:"app-degree-pages",component:"ListingPage",type:"NA",configuration:{programList:n,degreesPerPage:p}})},[]),x.useEffect(()=>{b(te)},[te]),x.useEffect(()=>{let j=Wa(c||[]);j=De({programs:j,filters:{collegeAcadOrg:Ce,departmentCode:Le,blacklistAcadPlans:Fe,program:qe,showCerts:Qt}}),u(j),v(j)},[c,p]);const re=async j=>{const{acceleratedConcurrent:se,locations:V,asuLocals:oe,keyword:ne}=j;y(!0),b(te);const oa=De({programs:S,filters:{collegeAcadOrg:Ce,departmentCode:Le,acceleratedConcurrent:se,locations:oe.length>0?V.concat(Oa):V,keyword:ne,blacklistAcadPlans:Fe,program:qe}});ae({...j}),Ie({...j}),v(oa),y(!1)},ea=async()=>{const j={...G,keyword:g};re(j)},ta=j=>{m||l||re(j)},aa=async j=>{ae(j)},ra=()=>{ae(R),Ie(R),v(S),q("")},sa=(j,{value:se})=>{const V=j==="acceleratedConcurrent"?Ba:G[j].filter(ne=>ne.value!==se),oe={...G,[j]:V};re(oe)};return e.jsxs(e.Fragment,{children:[e.jsx(Na,{}),e.jsx(fr,{}),h&&e.jsx(Ia,{message:Aa}),s!=null&&s.hide?null:e.jsx("section",{"data-testid":"hero",children:e.jsx(zt,{image:(s==null?void 0:s.image)||Pe.hero.image,title:{text:Ta(n.dataSource),highlightColor:"gold",...s==null?void 0:s.title,maxWidth:"100%"},contents:s==null?void 0:s.contents})}),e.jsxs(hr,{"data-is-loading":m,className:"main-section dg-margin-top",children:[(i==null?void 0:i.breadcrumbs)&&e.jsx("div",{className:"container mt-4 mb-0",children:e.jsx(Ua,{breadcrumbs:i.breadcrumbs,section:s?s.title.text:""})}),i?e.jsx(be,{applyNowUrl:(r==null?void 0:r.applyNowUrl)||Pe.actionUrls.applyNowUrl,type:i.type,header:i.header,title:i.title,contents:i.contents,image:i.image,video:i.video,photoGrid:i.photoGrid}):null,a||o?e.jsxs("section",{className:"no-space",children:[e.jsx(Jt,{}),a?e.jsx(Se,{value:g,onChange:q,onSearch:ea}):null,o?e.jsx(xe,{value:Ne,onChange:aa,onApply:ta,onClean:ra}):null,e.jsx(xr,{})]}):null,e.jsx("section",{className:"container",children:e.jsx("div",{className:"d-flex justify-content-between filter-switch-container",children:o?e.jsx(ye,{value:G,onRemove:sa}):null})}),m||l?e.jsx(Da,{}):e.jsx(ve,{dataViewComponent:Yt,loading:m||l,programs:f,actionUrls:r,degreesPerPage:p})]})]})};we.propTypes={appPathFolder:d.string,actionUrls:d.shape({applyNowUrl:d.string}),hasSearchBar:d.bool,hasFilters:d.bool,hero:d.shape(zt.propTypes),introContent:d.shape(be.propTypes),programList:d.shape({dataSource:_a,settings:Ma}),degreesPerPage:d.number};const ee=t=>e.jsx(Ca,{listPageProps:t,children:e.jsx(we,{...t})});ee.propTypes=we.propTypes;ee.__docgenInfo={description:`@param {ListingPageProps} props
@returns {JSX.Element}`,methods:[],displayName:"AppComponent",props:{appPathFolder:{description:"",type:{name:"string"},required:!1},actionUrls:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1}}},required:!1},hasSearchBar:{description:"",type:{name:"bool"},required:!1},hasFilters:{description:"",type:{name:"bool"},required:!1},hero:{description:"",type:{name:"shape",value:"Hero.propTypes",computed:!0},required:!1},introContent:{description:"",type:{name:"shape",value:{applyNowUrl:{name:"string",required:!1},type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"text-media"',computed:!1},{value:'"text-image-overlay"',computed:!1},{value:'"text-photo-grid"',computed:!1}],required:!0},video:{name:"shape",value:{},required:!1},image:{name:"shape",value:{},required:!1},header:{name:"custom",raw:"contentPropShape",required:!1},title:{name:"shape",value:{component:{name:"enum",value:[{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1}],required:!1}},required:!1},contents:{name:"arrayOf",value:{name:"custom",raw:"contentPropShape"},required:!1},photoGrid:{name:"shape",value:{images:{name:"arrayOf",value:{name:"custom",raw:"imagePropShape"},required:!1}},required:!1}}},required:!1},programList:{description:"",type:{name:"shape",value:{dataSource:{name:"custom",raw:"dataSourcePropShape",required:!1},settings:{name:"custom",raw:"columSettingsPropShape",required:!1}}},required:!1},degreesPerPage:{description:"",type:{name:"number"},required:!1}}};const Pr={component:ee,title:"Program Listing Page",parameters:{docs:{description:{component:"@typedef {import('../../core/types/listing-page-types').ListingPageProps } AppProps"}}}},w=({appPathFolder:t,actionUrls:r,hero:a,introContent:o,programList:s,hasFilters:i,hasSearchBar:n,...p})=>e.jsx(ee,{appPathFolder:t,actionUrls:r,hero:a,introContent:o,programList:s,hasSearchBar:n,hasFilters:i,...p}),_={applyNowUrl:"https://admission.asu.edu/apply",majorInfoUrl:`${me()}index.html?path=/story/program-detail-page--default&acadPlan={ACAD_PLAN_CODE}`},$={program:"undergrad"},P={appPathFolder:".",actionUrls:_,hero:null,introContent:{breadcrumbs:[{text:"Academic programs",url:"#"},{text:"Undergraduate degrees",url:`${me()}index.html?path=/story/program-listing-page--default`},{text:"Degree title",url:`${me()}index.html?path=/story/program-detail-page--with-content`,isActive:!0}],type:"text",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<p>Lorem, <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     </p>`},{text:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}]},programList:{dataSource:$}},F=w.bind({});F.args={...P};const M=w.bind({});M.args={...P,introContent:null,programList:{...P.programList,dataSource:{...P.programList.dataSource,program:"graduate"}}};const A=w.bind({});A.args={...P,introContent:null,programList:{...P.programList,dataSource:{...P.programList.dataSource,blacklistAcadPlans:["BAACCBS","LAACTBS"]}}};const T=w.bind({});T.args={...P,degreesPerPage:2};const U=w.bind({});U.args={...P,introContent:null,programList:{...P.programList,dataSource:{...P.programList.dataSource,cert:"true",showInactivePrograms:"true"}}};const D=w.bind({});D.args={...F.args,hero:null,programList:{...F.args.programList,dataSource:{...F.args.programList.dataSource,departmentCode:"CPUBAFF",collegeAcadOrg:"CPP"}}};const k=w.bind({});k.args={actionUrls:_,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",altText:"Undergraduate Degrees",size:"medium"},title:{text:"Undergraduate Degrees",highlightColor:"gold"}},introContent:{type:"text",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}]},programList:{dataSource:$,settings:{hideCollegeSchool:!0,cardDefaultImage:{url:"examples/assets/img/ds_header_undergrad.jpg"}}}};const B=w.bind({});B.args={actionUrls:_,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",size:"medium"},title:{text:"Area of study degrees",highlightColor:"gold"}},introContent:{type:"text-photo-grid",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}],photoGrid:{images:[{url:"examples/assets/img/demo-phot-1.jpeg"},{url:"examples/assets/img/demo-phot-2.jpeg"},{url:"examples/assets/img/demo-phot-3.jpeg"}]}},hasFilters:!1,hasSearchBar:!1,programList:{dataSource:$}};const C=w.bind({});C.args={actionUrls:_,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",size:"medium"},title:{text:"Area of study degrees",highlightColor:"gold"}},introContent:{type:"text-media",title:{text:"This is introductory marketing copy. Lorem ipsum dolor sit amet"},contents:[{text:`<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`}],image:{url:"https://source.unsplash.com/random/800x400?a=1"}},programList:{dataSource:$}};const N=w.bind({});N.args={...C.args};N.args.introContent={...C.args.introContent,image:void 0,video:{url:"/examples/assets/video/stock-video-person-drawing.mp4",title:"",vttUrl:""}};const I=w.bind({});I.args={...C.args};I.args.introContent={...C.args.introContent,image:void 0,video:{type:"youtube",url:"https://www.youtube.com/embed/YW2p0ctzK9c"}};const O=w.bind({});O.args={actionUrls:_,hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",size:"medium"},title:{text:"[Subdomain] degrees in [area of study]",highlightColor:"gold"}},introContent:{type:"text-image-overlay",header:{text:"Intro Content Image Overlay"},title:{text:"This is the contents that goes in the box"},contents:[{text:`<b>Instagram</b> tour operator travel sailing flying package.
         Territory New York City group discount active lifestyle creditcard
         insurance wellness kayak guide overnight rural lonely planet.`},{text:`Train luxury Paris recommendations nature France sight seeing.
         Flexibility Amsterdam maps.
         Pacific lonely planet private jet national insurance taxi tourist attractions.
         Budget Pacific guide caravan Barcelona place to stay maps gateway diary tour operator money`}],image:{url:"https://source.unsplash.com/random/800x600?a=1"}},programList:{dataSource:$}};var Oe,Re,Me,_e,$e;F.parameters={...F.parameters,docs:{...(Oe=F.parameters)==null?void 0:Oe.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Me=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:Me.source},description:{story:"@type {{ args: AppProps }}",...($e=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:$e.description}}};var Ee,Ge,Ve;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Ve=(Ge=M.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};var We,Ke,ze,He,Je;A.parameters={...A.parameters,docs:{...(We=A.parameters)==null?void 0:We.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(ze=(Ke=A.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source},description:{story:"@type {{ args: AppProps }}",...(Je=(He=A.parameters)==null?void 0:He.docs)==null?void 0:Je.description}}};var Xe,Ye,Ze,Qe,et;T.parameters={...T.parameters,docs:{...(Xe=T.parameters)==null?void 0:Xe.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Ze=(Ye=T.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source},description:{story:"@type {{ args: AppProps }}",...(et=(Qe=T.parameters)==null?void 0:Qe.docs)==null?void 0:et.description}}};var tt,at,rt,st,ot;U.parameters={...U.parameters,docs:{...(tt=U.parameters)==null?void 0:tt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(rt=(at=U.parameters)==null?void 0:at.docs)==null?void 0:rt.source},description:{story:"@type {{ args: AppProps }}",...(ot=(st=U.parameters)==null?void 0:st.docs)==null?void 0:ot.description}}};var nt,it,lt,ct,dt;D.parameters={...D.parameters,docs:{...(nt=D.parameters)==null?void 0:nt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(lt=(it=D.parameters)==null?void 0:it.docs)==null?void 0:lt.source},description:{story:"@type {{ args: AppProps}}",...(dt=(ct=D.parameters)==null?void 0:ct.docs)==null?void 0:dt.description}}};var pt,mt,ut,gt,ht;k.parameters={...k.parameters,docs:{...(pt=k.parameters)==null?void 0:pt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(ut=(mt=k.parameters)==null?void 0:mt.docs)==null?void 0:ut.source},description:{story:"@type {{ args: AppProps }}",...(ht=(gt=k.parameters)==null?void 0:gt.docs)==null?void 0:ht.description}}};var ft,xt,yt,bt,jt;B.parameters={...B.parameters,docs:{...(ft=B.parameters)==null?void 0:ft.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(yt=(xt=B.parameters)==null?void 0:xt.docs)==null?void 0:yt.source},description:{story:"@type {{ args: AppProps }}",...(jt=(bt=B.parameters)==null?void 0:bt.docs)==null?void 0:jt.description}}};var vt,St,wt,Pt,Ct;C.parameters={...C.parameters,docs:{...(vt=C.parameters)==null?void 0:vt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(wt=(St=C.parameters)==null?void 0:St.docs)==null?void 0:wt.source},description:{story:"@type {{ args: AppProps}}",...(Ct=(Pt=C.parameters)==null?void 0:Pt.docs)==null?void 0:Ct.description}}};var Lt,Ft,qt,Nt,It;N.parameters={...N.parameters,docs:{...(Lt=N.parameters)==null?void 0:Lt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(qt=(Ft=N.parameters)==null?void 0:Ft.docs)==null?void 0:qt.source},description:{story:"@type {{ args: AppProps}}",...(It=(Nt=N.parameters)==null?void 0:Nt.docs)==null?void 0:It.description}}};var At,Tt,Ut,Dt,kt;I.parameters={...I.parameters,docs:{...(At=I.parameters)==null?void 0:At.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Ut=(Tt=I.parameters)==null?void 0:Tt.docs)==null?void 0:Ut.source},description:{story:"@type {{ args: AppProps}}",...(kt=(Dt=I.parameters)==null?void 0:Dt.docs)==null?void 0:kt.description}}};var Bt,Ot,Rt,Mt,_t;O.parameters={...O.parameters,docs:{...(Bt=O.parameters)==null?void 0:Bt.docs,source:{originalSource:`({
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
  ...rest
}) => <ListingPage appPathFolder={appPathFolder} actionUrls={actionUrls} hero={hero} introContent={introContent} programList={programList} hasSearchBar={hasSearchBar} hasFilters={hasFilters} {...rest} />`,...(Rt=(Ot=O.parameters)==null?void 0:Ot.docs)==null?void 0:Rt.source},description:{story:`@param {AppProps} props
@returns {JSX.Element}`,...(_t=(Mt=O.parameters)==null?void 0:Mt.docs)==null?void 0:_t.description}}};const Cr=["Default","DefaultGraduate","DefaultWithBlacklistedPlanCodes","DefaultWithDegreesPerPageSet","DefaultWithCertificate","WithCollegeAcadOrgAndDepartmentCode","WithIntroText","WithIntroTextPhotoGrid","WithIntroTextMediaImage","WithIntroTextMediaVideo","WithIntroTextMediaYoutubeVideo","WithIntroTextImageOverlay"];export{F as Default,M as DefaultGraduate,A as DefaultWithBlacklistedPlanCodes,U as DefaultWithCertificate,T as DefaultWithDegreesPerPageSet,D as WithCollegeAcadOrgAndDepartmentCode,k as WithIntroText,O as WithIntroTextImageOverlay,C as WithIntroTextMediaImage,N as WithIntroTextMediaVideo,I as WithIntroTextMediaYoutubeVideo,B as WithIntroTextPhotoGrid,Cr as __namedExportsOrder,Pr as default};
