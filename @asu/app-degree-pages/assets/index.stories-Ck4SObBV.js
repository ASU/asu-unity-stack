import{D as Dt,q as S,j as e,p as h,V as q,s as C,c as Lt,w as pe,O as Et,P as r,i as Pt,g as Ue,a as se,b as X,d as ae,e as At,f as le,h as _t,o as Ft,v as Ut,k as Wt,l as Gt,m as I,t as ne,n as z,S as Bt,r as Ct,A as Vt,u as Ht,x as We,y as $t,z as Xt,B as zt,C as Jt,T as Yt,E as Qt,F as Kt,G as Nt,M as Zt,H as ea,I as ta,L as aa,J as ra,K as na,N as ia,Q as oa,R as sa,U as ie,W as la,X as pa,Y as Ge}from"./index-BkCMxXG6.js";import{r as k}from"./index-B2SEcK1p.js";import"./index-DJJwdAOw.js";import"./_commonjsHelpers-B3tUAs5q.js";const Be=a=>a.map(t=>({title:t.acadPlanDescription,url:t.academicOfficeUrl})).sort((t,n)=>t.title.localeCompare(n.title)),ca=a=>a==null?void 0:a.map(t=>({career:{text:t.alternateTitle,url:`${Dt}/career-details/${t.onetCode}`},growth:t.growth,medianSalary:t.salary.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}),brightOutlook:!!t.brightOutlook,greenOccupation:!!t.green}));function ma(a,t){Promise.all(a).then(n=>{const o=n[0],i=n[1];t({accelerateData:o,concurrentData:i})}).catch(()=>{t({accelerateData:[],concurrentData:[]})})}const ua=S.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`,da=S.div`
  background-image: url("https://asu.github.io/asu-unity-stack/@asu/unity-bootstrap-theme/static/media/TopoPatternWhite.529b0b3d.png");
  background-position: center;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 1920px;
  height: 100%;
  z-index: -1;
`;function Tt(){return e.jsxs(ua,{className:"container",id:h.affordingCollege.targetIdName,"data-testid":"affording-college",children:[e.jsx(da,{}),e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Affording college"})}),e.jsxs("div",{className:"mt-2 row",children:[e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{icon:["fas","calculator"],title:"Tuition estimator",body:"The tuition estimator shows the tuition and fee breakdown for your particular major, campus and residency status without financial aid.",buttons:[{label:"Estimate tuition and fees",ariaLabel:"Estimate tuition and fees",color:"maroon",href:"https://tuition.asu.edu/cost-calculator/tuition"}]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{icon:["fas","award"],title:"Scholarships",body:"Scholarships are a type of aid that does not need to be paid back. Some you apply for and some are automatic.",buttons:[{label:"Learn about scholarships",ariaLabel:"Learn about scholarships",color:"maroon",href:"https://scholarships.asu.edu/"}]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{icon:["fas","hand-holding-usd"],title:"Financial aid",body:"There are many financial aid options available for students. In fact, more than 80 percent of all ASU students receive some form of financial assistance every year.",buttons:[{label:"Explore financial aid",ariaLabel:"Explore financial aid",color:"maroon",href:"https://tuition.asu.edu/financial-aid"}]})})]})]})}Tt.__docgenInfo={description:"",methods:[],displayName:"AffordingCollege"};const Mt=S.ul`
  display: inline-flex;
  list-style: none;
  padding: 0;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    .btn {
      width: max-content;
      margin-left: 0;
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
`,ha=({transferRequirements:a="",additionalRequirements:t=""})=>{const n=[{label:"Freshman",href:"https://admission.asu.edu/freshman/apply"},{label:"Transfer",href:"https://admission.asu.edu/transfer/apply"},{label:"International",href:"https://admission.asu.edu/international/undergrad-apply"},{label:"Readmission",href:"https://admission.asu.edu/undergrad/readmission"}],o=[];return t!=null&&t.trim()&&o.push({content:{header:"Additional Requirements",body:t}}),a!=null&&a.trim()&&o.push({content:{header:"Transfer Admission Requirements",body:a}}),e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"All students are required to meet general university admission requirements"}),e.jsx(Mt,{className:Lt("",{"mb-0":o.length===0}),children:n.map(({label:i,href:l})=>e.jsx("li",{children:e.jsx(pe,{ariaLabel:i,color:"maroon",href:l,label:i,size:"small"})},i))}),o.length>0&&e.jsx("div",{className:"mt-2 mb-4",children:e.jsx(Et,{cards:o,openedCard:1})})]})},ga=a=>{const t="View Curriculum";return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"View curriculum below for a detailed list of courses and other requirements."}),e.jsx(Mt,{children:e.jsx("li",{children:e.jsx(pe,{ariaLabel:t,color:"maroon",href:a,label:t,size:"small"})})})]})};function ce({graduateRequirements:a,transferRequirements:t,isMinorOrCertificate:n,additionalRequirements:o,minorRequirements:i,majorMapURL:l}){if(!a&&!n)return e.jsxs("section",{id:h.applicationRequirements.targetIdName,"data-testid":"application-requirements",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Admission requirements"})}),ha({transferRequirements:t,additionalRequirements:o})]});const u=n?"Program requirements":"Degree requirements",m=a||i;return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:h.applicationRequirements.targetIdName,"data-testid":"application-requirements",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:u})}),m?e.jsx("div",{dangerouslySetInnerHTML:C(m)}):ga(l)]}),e.jsxs("section",{id:h.degreeRequirements.targetIdName,"data-testid":"degree-requirements",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Admission requirements"})}),e.jsx("div",{dangerouslySetInnerHTML:C(o)})]})]})}ce.propTypes={graduateRequirements:r.string,transferRequirements:r.string,isMinorOrCertificate:r.bool,additionalRequirements:r.string,minorRequirements:r.string,majorMapURL:r.string};ce.__docgenInfo={description:`@param {ApplicationRequirementsProps} props
@returns {JSX.Element}`,methods:[],displayName:"ApplicationRequirements",props:{graduateRequirements:{description:"",type:{name:"string"},required:!1},transferRequirements:{description:"",type:{name:"string"},required:!1},isMinorOrCertificate:{description:"",type:{name:"bool"},required:!1},additionalRequirements:{description:"",type:{name:"string"},required:!1},minorRequirements:{description:"",type:{name:"string"},required:!1},majorMapURL:{description:"",type:{name:"string"},required:!1}}};const N=({item:a,type:t})=>{const n=Pt("glance-"),o=()=>typeof a=="object"?a.map((i,l)=>{const u=["","#"].includes(i.url)?null:i.url;let m="";return l>0&&l<a.length-1&&(m=", "),l===a.length-1&&a.length>1&&(m=" or "),e.jsxs(k.Fragment,{children:[m,e.jsx("a",{href:u,rel:"noreferrer",target:"_blank",children:i.text})]},n.next().value)}):a;return e.jsxs("li",{children:[e.jsx("i",{className:`fas fa-${Ue[t].icon} fa-li`}),e.jsxs("strong",{children:[Ue[t].title,": "]}),o()]})};N.propTypes={item:r.oneOfType([r.arrayOf(se),r.string]),type:r.string};N.__docgenInfo={description:`@param {GlanceItemProps} param
@returns {JSX.Element}`,methods:[],displayName:"GlanceItem",props:{item:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"custom",raw:"glanceItemPropShape"}},{name:"string"}]},required:!1},type:{description:"",type:{name:"string"},required:!1}}};const me=({offeredBy:a,locations:t,firstRequirementMathCourse:n,mathIntensity:o,timeCommitment:i,stemOptText:l})=>e.jsxs("section",{id:h.atAGlance.targetIdName,"data-testid":"at-aglance",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"At a glance: program details"})}),e.jsxs("ul",{className:"uds-list fa-ul maroon pt-2 pb-0 pe-0",children:[a&&e.jsx(N,{item:[a],type:"offeredBy"}),t&&e.jsx(N,{item:t,type:"locations"}),n&&e.jsx(N,{item:n,type:"firstRequirementMathCourse"}),o&&e.jsx(N,{item:o,type:"mathIntensity"}),i&&e.jsx(N,{item:i,type:"timeCommitment"}),l&&e.jsx(N,{item:l,type:"stemOptText"})]})]});me.propTypes={offeredBy:se.isRequired,locations:r.arrayOf(se).isRequired,firstRequirementMathCourse:r.string.isRequired,mathIntensity:r.string,timeCommitment:r.string,stemOptText:r.string};me.__docgenInfo={description:`@param {AtAGlanceProps} props
@returns {JSX.Element}`,methods:[],displayName:"AtAGlance",props:{offeredBy:{description:"",type:{name:"custom",raw:"glanceItemPropShape.isRequired"},required:!1},locations:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"glanceItemPropShape"}},required:!0},firstRequirementMathCourse:{description:"",type:{name:"string"},required:!0},mathIntensity:{description:"",type:{name:"string"},required:!1},timeCommitment:{description:"",type:{name:"string"},required:!1},stemOptText:{description:"",type:{name:"string"},required:!1}}};const fa=`
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;function ue({image:a,learnMoreLink:t,contents:n}){const o=`linear-gradient(180deg, #19191900 0%, #191919c9 100%),url('${a.url}')`,i=Pt("attend-online-");return e.jsx("section",{id:h.attendOnline.targetIdName,className:"uds-card-and-image",style:{backgroundImage:o},"data-testid":"attend-online",children:e.jsx("div",{className:"uds-card-and-image-container",children:e.jsxs("div",{className:"card card-centered",children:[e.jsx("i",{className:"fas fa-wifi fa-2x card-icon-top"}),e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Attend online"})}),e.jsx("div",{className:"card-body",children:n?n.map(l=>e.jsx("p",{children:l},i.next().value)):e.jsx("p",{children:fa})}),e.jsx("div",{className:"card-button",children:e.jsx(pe,{label:"Learn about online options",ariaLabel:"Learn about online options",href:t,color:"maroon",size:"small"})})]})})})}ue.propTypes={learnMoreLink:r.string,image:X,contents:r.arrayOf(r.shape({text:r.string}))};ue.__docgenInfo={description:`@param {import("src/core/types/detail-page-types").AttendOnlineProps & {
 learnMoreLink: string
}} props
@returns`,methods:[],displayName:"AttendOnline",props:{learnMoreLink:{description:"",type:{name:"string"},required:!1},image:{description:"",type:{name:"shape",value:{}},required:!1},contents:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1}}}},required:!1}}};const xa=S.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`,de=({contents:a,image:t})=>e.jsx(xa,{id:h.careerOutlook.targetIdName,"data-testid":"career-outlook",children:e.jsx(ae,{headingTag:"H2",title:h.careerOutlook.text,contents:a,image:t})});de.propTypes=ae.propTypes;de.__docgenInfo={description:`@param {import("src/core/types/detail-page-types").GlobalOpportunityProps} props
@returns {JSX.Element}`,methods:[],displayName:"CareerOutlook",props:{headingTag:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},contentDirection:{description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},contents:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1}}}},required:!1},image:{description:"",type:{name:"shape",value:{}},required:!1},contentChildren:{description:"",type:{name:"element"},required:!1}}};const ya=S.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;function he({content:a}){return e.jsxs("section",{id:h.changeMajorRequirements.targetIdName,className:"change-your-major","data-testid":"change-your-major",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Change your major requirements for current students"})}),e.jsx(ya,{dangerouslySetInnerHTML:C(a)})]})}he.propTypes={content:r.string};he.__docgenInfo={description:`@param {Object} props
@returns`,methods:[],displayName:"ChangeYourMajor",props:{content:{description:"",type:{name:"string"},required:!1}}};function ge({content:a=""}){return e.jsx("div",{"data-testid":"custom-text",className:"mt-3",dangerouslySetInnerHTML:C(a)})}ge.propTypes={content:r.string};ge.__docgenInfo={description:`@param {{content: string}} props
@returns {JSX.Element}`,methods:[],displayName:"CustomText",props:{content:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}};const Rt=`
  width: unset !important;
  min-width: unset !important;
`,It=S.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${Rt}
`,kt=S.i`
  color: #78be21;
  ${Rt}
`;function fe({data:a}){return e.jsx("div",{className:"uds-table mb-1",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Career"}),e.jsx("th",{scope:"col",className:"text-end",children:"Growth*"}),e.jsx("th",{scope:"col",className:"text-end",children:"Median Salary*"})]})}),e.jsx("tbody",{children:a==null?void 0:a.map(t=>e.jsxs("tr",{children:[e.jsxs("th",{scope:"row",style:{fontWeight:"normal"},children:[e.jsx("a",{href:t.career.url,target:"_blank",rel:"noreferrer",children:t.career.text}),t.greenOccupation&&e.jsx(kt,{className:"fas fa-leaf ms-1"}),t.brightOutlook&&e.jsx(It,{className:"fas fa-sun ms-1"})]}),e.jsxs("td",{className:"text-end",children:[+t.growth,"%"]}),e.jsx("td",{className:"text-end",children:t.medianSalary||0})]},t.career.url))})]})})}fe.propTypes={data:r.arrayOf(At)};fe.__docgenInfo={description:`@param {{ data: TableProps[] }} props
@returns {JSX.Element}`,methods:[],displayName:"Table",props:{data:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"exampleCareersTableDataPropShape"}},required:!1}}};function xe({tableData:a}){return e.jsxs("section",{id:h.exampleCareers.targetIdName,className:"container","data-testid":"example-careers",children:[e.jsx("h3",{children:"Example careers"}),e.jsx("p",{children:"Example job titles and salaries listed below are not necessarily entry level, and students should take into consideration how years of experience and geographical location may affect pay scales. Some jobs also may require advanced degrees, certifications or state-specific licensure."}),e.jsxs("div",{className:"mt-4 mb-4",children:[e.jsx(fe,{data:a}),e.jsx("p",{children:e.jsx("small",{children:"* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)."})})]}),e.jsxs("div",{className:"d-flex",children:[e.jsxs("p",{className:"me-3",children:[e.jsx(It,{className:"fas fa-sun me-1"}),"Bright outlook"]}),e.jsxs("p",{children:[e.jsx(kt,{className:"fas fa-leaf me-1"}),"Green occupation"]})]})]})}xe.propTypes={tableData:r.arrayOf(At)};xe.__docgenInfo={description:`@param {ExampleCareersProps} props
@returns {JSX.Element}`,methods:[],displayName:"ExampleCareers",props:{tableData:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"exampleCareersTableDataPropShape"}},required:!1}}};const ba=S.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 320px;
  li:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media (max-width: 767px) {
    max-height: 100%;
  }
`,ee=({id:a,title:t,links:n})=>e.jsxs("div",{id:a,className:"mt-4",children:[e.jsx("h3",{children:t}),e.jsx("p",{children:"This program allows students to obtain both a bachelor's and master's degree in as little as five years. It is offered as an accelerated bachelor's and master's degree with:"}),e.jsx(ba,{className:"mt-3 mb-3",children:n.map((o,i)=>e.jsx("li",{children:e.jsx("a",{href:o.url,target:"_blank",rel:"noreferrer",children:o.title})},`${o.title}-${i}`))}),e.jsx("p",{className:"mb-0",children:"Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply."})]});ee.propTypes={id:r.string,title:r.string,links:le};ee.__docgenInfo={description:`@param {ContentBlockProps} props
@returns`,methods:[],displayName:"ContentBlock",props:{id:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},links:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},url:{name:"string",required:!1}}}},required:!1}}};function ye({acceleratedLinks:a,concurrentLinks:t}){return e.jsxs("section",{id:h.flexibleDegreeOptions.targetIdName,className:"container","data-testid":"flexible-degree-options",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Flexible degree options"})}),!!a.length&&e.jsx(ee,{id:h.flexibleDegreeOptions.acceleratedId,title:"Accelerated program options",links:a}),!!t.length&&e.jsx(ee,{id:h.flexibleDegreeOptions.concurrentId,title:"Concurrent degree program",links:t})]})}ye.propTypes={acceleratedLinks:le,concurrentLinks:le};ye.__docgenInfo={description:`@param {FlexibleDegreeOptionsProps} props
@returns`,methods:[],displayName:"FlexibleDegreeOptions",props:{acceleratedLinks:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},url:{name:"string",required:!1}}}},required:!1},concurrentLinks:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},url:{name:"string",required:!1}}}},required:!1}}};const ja=S.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`,be=({contents:a,image:t})=>e.jsx(ja,{id:h.globalOpportunity.targetIdName,"data-testid":"global-opportunity",children:e.jsx(ae,{headingTag:"H2",title:h.globalOpportunity.text,contents:a,image:t})});be.propTypes=ae.propTypes;be.__docgenInfo={description:`@param {import("src/core/types/detail-page-types").GlobalOpportunityProps} props
@returns {JSX.Element}`,methods:[],displayName:"GlobalOpportunity",props:{headingTag:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},contentDirection:{description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},contents:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1}}}},required:!1},image:{description:"",type:{name:"shape",value:{}},required:!1},contentChildren:{description:"",type:{name:"element"},required:!1}}};const je=({url:a,altText:t})=>e.jsx("div",{className:"uds-img pt-3 pb-3","data-testid":"intro-image",children:e.jsx("img",{src:a,className:"img-fluid",alt:t})});je.propTypes={..._t};je.__docgenInfo={description:'@param {import("src/core/types/shared-local-types").ImageItem} props',methods:[],displayName:"IntroImage",props:{url:{description:"",type:{name:"string"},required:!1},altText:{description:"",type:{name:"string"},required:!1},cssClass:{description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};const qa=(a,t)=>{if(a!=="youtube")return t;const n=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,o=t.match(n);return o&&o[7].length===11?`https://www.youtube.com/embed/${o[7]}`:t},va=S.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`,qe=({type:a,url:t,vttUrl:n,title:o})=>e.jsx(va,{"data-testid":"intro-video",children:e.jsx(Ft,{type:a,url:qa(a,t),vttUrl:n,title:o,controls:!0})});qe.propTypes={...Ut};qe.__docgenInfo={description:'@param {import("src/core/types/shared-local-types").VideoItem} props',methods:[],displayName:"IntroVideo",props:{type:{description:"",type:{name:"enum",value:[{value:'"video"',computed:!1},{value:'"youtube"',computed:!1}]},required:!1},url:{description:"",type:{name:"string"},required:!1},altText:{description:"",type:{name:"string"},required:!1},vttUrl:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1}}};function ve({contents:a=[]}){return e.jsx("div",{"data-testid":"market-text",children:a.map((t,n)=>e.jsx("div",{className:`mt-3 ${Wt(t.cssClass)}`,dangerouslySetInnerHTML:C(t.text)},`content-${n+1}`))})}ve.propTypes={contents:r.arrayOf(Gt)};ve.__docgenInfo={description:`@param {IntroContentProps} props
@returns {JSX.Element}`,methods:[],displayName:"MarketText",props:{contents:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"custom",raw:"contentPropShape"}},required:!1}}};function Se({cards:a,defaultCards:t}){var n,o,i,l,u,m,g,b,p,d,c,f;return e.jsxs("section",{className:"container",id:h.nextSteps.targetIdName,"data-testid":"next-steps",children:[e.jsx("h2",{children:"Next steps to attend ASU"}),e.jsxs("div",{className:"mt-2 row",children:[e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{icon:((n=a==null?void 0:a.learnMore)==null?void 0:n.icon)??t.learnMore.icon,title:((o=a==null?void 0:a.learnMore)==null?void 0:o.title)??t.learnMore.title,body:((i=a==null?void 0:a.learnMore)==null?void 0:i.content)??t.learnMore.content,buttons:[((l=a==null?void 0:a.learnMore)==null?void 0:l.buttonLink)??t.learnMore.buttonLink]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{icon:((u=a==null?void 0:a.apply)==null?void 0:u.icon)??t.apply.icon,title:((m=a==null?void 0:a.apply)==null?void 0:m.title)??t.apply.title,body:((g=a==null?void 0:a.apply)==null?void 0:g.content)??t.apply.content,buttons:[((b=a==null?void 0:a.apply)==null?void 0:b.buttonLink)??t.apply.buttonLink]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{icon:((p=a==null?void 0:a.visit)==null?void 0:p.icon)??t.visit.icon,title:((d=a==null?void 0:a.visit)==null?void 0:d.title)??t.visit.title,body:((c=a==null?void 0:a.visit)==null?void 0:c.content)??t.visit.content,buttons:[((f=a==null?void 0:a.visit)==null?void 0:f.buttonLink)??t.visit.buttonLink]})})]})]})}Se.propTypes={cards:r.shape({learnMore:I,apply:I,visit:I}),defaultCards:r.shape({learnMore:I,apply:I,visit:I})};Se.__docgenInfo={description:`@param {NextStepsProps} props
@returns`,methods:[],displayName:"NextSteps",props:{cards:{description:"",type:{name:"shape",value:{learnMore:{name:"custom",raw:"cardPropShape",required:!1},apply:{name:"custom",raw:"cardPropShape",required:!1},visit:{name:"custom",raw:"cardPropShape",required:!1}}},required:!1},defaultCards:{description:"",type:{name:"shape",value:{learnMore:{name:"custom",raw:"cardPropShape",required:!1},apply:{name:"custom",raw:"cardPropShape",required:!1},visit:{name:"custom",raw:"cardPropShape",required:!1}}},required:!1}}};function we({content:a=""}){return e.jsxs("section",{className:"container","data-testid":"professional-licensure",children:[e.jsx("h3",{children:"Professional licensure"}),e.jsx("p",{dangerouslySetInnerHTML:C(a)})]})}we.propTypes={content:r.node};we.__docgenInfo={description:"",methods:[],displayName:"ProfessionalLicensure",props:{content:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"node"},required:!1}}};const oe={event:"link",action:"click",name:"onclick",type:"internal link",region:"main content",section:"Program contact information"},Sa=S.ul`
  list-style: none;
  margin-left: 0rem;
  padding-left: 0rem;

  & li {
    display: flex;
    align-items: center;
    :not(:first-child) {
      display: flex;
      padding-bottom: 0.5rem;
    }

    :first-child div {
      display: flex;
    }

    :nth-of-type(2) {
      padding-bottom: 2rem;
    }

    > div {
      display: flex;
      align-items: center;
    }

    .c-icon,
    i {
      font-size: 1rem;
      margin-right: 0.5rem;
    }

    .office-loc {
      margin-left: 1.5rem;
    }
  }
`;function Oe({department:a,asuOfficeLoc:t,email:n,phone:o}){return e.jsxs("section",{id:h.programContactInfo.targetIdName,"data-testid":"program-contact-info",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Program contact information"})}),e.jsx("p",{children:"If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below."}),e.jsxs(Sa,{className:"text-maroon",children:[e.jsx("li",{children:e.jsxs("div",{children:[e.jsx("i",{className:"c-icon fas icon-small fa-map-marker-alt",title:"Department  Address"}),e.jsx("a",{href:a.url,onClick:()=>ne({...oe,text:a.text}),children:a.text})]})}),e.jsx("li",{children:e.jsx("div",{className:"c-icon text-dark office-loc",children:t})}),e.jsxs("li",{children:[e.jsx("i",{className:"c-icon fas icon-small fa-envelope",title:"Email"}),e.jsx("a",{href:`mailto:${n.url||n.text}`,onClick:()=>ne({...oe,text:n.text}),children:n.text})]}),e.jsxs("li",{children:[e.jsx("i",{className:"c-icon fas icon-small fa-phone",title:"Phone"}),e.jsx("a",{href:`tel:${o}`,onClick:()=>ne({...oe,text:o}),children:o})]})]})]})}Oe.propTypes={department:z,asuOfficeLoc:r.string,email:z,phone:r.string};Oe.__docgenInfo={description:`@param {import("src/core/types/detail-page-types").ProgramContactInfoProps} props
@returns`,methods:[],displayName:"ProgramContactInfo",props:{department:{description:"",type:{name:"shape",value:{}},required:!1},asuOfficeLoc:{description:"",type:{name:"string"},required:!1},email:{description:"",type:{name:"shape",value:{}},required:!1},phone:{description:"",type:{name:"string"},required:!1}}};function te({content:a,stemOptText:t,programNotFound:n}){return e.jsxs("div",{"data-testid":"program-description",children:[e.jsx("h2",{children:n?"Program not found":"Program description"}),e.jsx("div",{"data-testid":"program-description-body",dangerouslySetInnerHTML:C(a)}),t&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx("strong",{children:Bt})}),e.jsx("div",{"data-testid":"stem-opt-text",dangerouslySetInnerHTML:C(t)})]})]})}te.propTypes={content:r.string,stemOptText:r.string,programNotFound:r.bool};te.__docgenInfo={description:`@param {ProgramDescriptionProps}  props
@returns`,methods:[],displayName:"ProgramDescription",props:{content:{description:"",type:{name:"string"},required:!1},stemOptText:{description:"",type:{name:"string"},required:!1},programNotFound:{description:"",type:{name:"bool"},required:!1}}};const wa="https://changemajor.apps.asu.edu/",Oa="On-campus students",Pa="Online students",Aa="View major map -",Ve="View major map";function Pe({onlineMajorMapURL:a="",majorMapOnCampusURL:t="",subPlnMajorMaps:n=[],subPlns:o=[]}){const i=p=>{const d=o.find(c=>c.acadSubPlanCode===p);return d?d.description:""},l=(p,d,c)=>{p&&c.push({href:p,text:d})},u=[],m=[];n.forEach(p=>{const d=i(p.acadSubPlanCode),c=`${Aa} ${d}`;l(p.url,c,u)}),t&&l(t,Ve,u),a&&l(a,Ve,m);const g=(p,d)=>e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:p}),e.jsx("ul",{className:"mb-3",children:d.map(c=>e.jsx("li",{children:e.jsx("a",{href:c.href,children:c.text})},c.href))})]}),b=()=>e.jsxs("section",{className:"container ps-0","data-testid":"required-course",children:[e.jsx("h4",{children:"Required courses (major map)"}),u.length>0&&g(Oa,u),m.length>0&&g(Pa,m),e.jsxs("div",{className:"mt-3",children:[e.jsx("strong",{children:"What if:"})," See how your courses can be applied to another major and find out how to ",e.jsx("a",{href:wa,children:"change your major"})]})]});return!(n!=null&&n.length)&&!a&&!t?e.jsx("div",{}):b()}Pe.propTypes={onlineMajorMapURL:r.string,majorMapOnCampusURL:r.string,subPlnMajorMaps:r.arrayOf(r.shape({campus:r.string,acadSubPlanCode:r.string,defaultFlag:r.bool,url:r.string})),subPlns:r.arrayOf(r.shape({acadSubPlanCode:r.string,description:r.string}))};Pe.__docgenInfo={description:`@param {RequiredCoursesProps} props
@returns`,methods:[],displayName:"RequiredCourse",props:{onlineMajorMapURL:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},majorMapOnCampusURL:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},subPlnMajorMaps:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{campus:{name:"string",required:!1},acadSubPlanCode:{name:"string",required:!1},defaultFlag:{name:"bool",required:!1},url:{name:"string",required:!1}}}},required:!1},subPlns:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{acadSubPlanCode:{name:"string",required:!1},description:{name:"string",required:!1}}}},required:!1}}};const Ae=({sectionIntroText:a,cards:t,defaultCards:n})=>{var o,i,l,u,m,g,b,p,d,c,f,x,v,y,A,M,J,Y,s,Q,W,K,G,Z,j,L,B,V,H,$,R,Ne,Te,Me,Re,Ie,ke,De,Le,Ee,_e,Fe;return e.jsxs("section",{id:h.whyChooseAsu.targetIdName,className:"container","data-testid":"why-choose-asu",children:[e.jsx("h2",{children:"Why choose ASU"}),e.jsx("div",{dangerouslySetInnerHTML:C(a)}),e.jsxs("div",{className:"mt-2 row",children:[e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{image:((i=(o=t==null?void 0:t.faculty)==null?void 0:o.image)==null?void 0:i.url)??n.faculty.image.url,imageAltText:((u=(l=t==null?void 0:t.faculty)==null?void 0:l.image)==null?void 0:u.altText)??n.faculty.image.altText,title:((m=t==null?void 0:t.faculty)==null?void 0:m.title)??n.faculty.title,body:((g=t==null?void 0:t.faculty)==null?void 0:g.text)??n.faculty.text,buttons:[((b=t==null?void 0:t.faculty)==null?void 0:b.button)??n.faculty.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{image:((d=(p=t==null?void 0:t.programs)==null?void 0:p.image)==null?void 0:d.url)??n.programs.image.url,imageAltText:((f=(c=t==null?void 0:t.programs)==null?void 0:c.image)==null?void 0:f.altText)??n.programs.image.altText,title:((x=t==null?void 0:t.programs)==null?void 0:x.title)??n.programs.title,body:((v=t==null?void 0:t.programs)==null?void 0:v.text)??n.programs.text,buttons:[((y=t==null?void 0:t.programs)==null?void 0:y.button)??n.programs.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{image:((M=(A=t==null?void 0:t.research)==null?void 0:A.image)==null?void 0:M.url)??n.research.image.url,imageAltText:((Y=(J=t==null?void 0:t.research)==null?void 0:J.image)==null?void 0:Y.altText)??n.research.image.altText,title:((s=t==null?void 0:t.research)==null?void 0:s.title)??n.research.title,body:((Q=t==null?void 0:t.research)==null?void 0:Q.text)??n.research.text,buttons:[((W=t==null?void 0:t.research)==null?void 0:W.button)??n.research.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{image:((G=(K=t==null?void 0:t.inclusion)==null?void 0:K.image)==null?void 0:G.url)??n.inclusion.image.url,imageAltText:((j=(Z=t==null?void 0:t.inclusion)==null?void 0:Z.image)==null?void 0:j.altText)??n.inclusion.image.altText,title:((L=t==null?void 0:t.inclusion)==null?void 0:L.title)??n.inclusion.title,body:((B=t==null?void 0:t.inclusion)==null?void 0:B.text)??n.inclusion.text,buttons:[((V=t==null?void 0:t.inclusion)==null?void 0:V.button)??n.inclusion.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{image:(($=(H=t==null?void 0:t.mentors)==null?void 0:H.image)==null?void 0:$.url)??n.mentors.image.url,imageAltText:((Ne=(R=t==null?void 0:t.mentors)==null?void 0:R.image)==null?void 0:Ne.altText)??n.mentors.image.altText,title:((Te=t==null?void 0:t.mentors)==null?void 0:Te.title)??n.mentors.title,body:((Me=t==null?void 0:t.mentors)==null?void 0:Me.text)??n.mentors.text,buttons:[((Re=t==null?void 0:t.mentors)==null?void 0:Re.button)??n.mentors.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{image:((ke=(Ie=t==null?void 0:t.honors)==null?void 0:Ie.image)==null?void 0:ke.url)??n.honors.image.url,imageAltText:((Le=(De=t==null?void 0:t.honors)==null?void 0:De.image)==null?void 0:Le.altText)??n.honors.image.altText,title:((Ee=t==null?void 0:t.honors)==null?void 0:Ee.title)??n.honors.title,body:((_e=t==null?void 0:t.honors)==null?void 0:_e.text)??n.honors.text,buttons:[((Fe=t==null?void 0:t.honors)==null?void 0:Fe.button)??n.honors.button]})})]})]})};Ae.propTypes=Ct;Ae.__docgenInfo={description:`@param {WhyChooseAsuProps} props
@returns {JSX.Element}`,methods:[],displayName:"WhyChooseAsu",props:{hide:{description:"",type:{name:"bool"},required:!1},sectionIntroText:{description:"",type:{name:"string"},required:!1},cards:{description:"",type:{name:"shape",value:{faculty:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},programs:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},research:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},inclusion:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},mentors:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},honors:{name:"custom",raw:"whyChooseAsuCardShape",required:!1}}},required:!1},defaultCards:{description:"",type:{name:"shape",value:{faculty:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},programs:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},research:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},inclusion:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},mentors:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},honors:{name:"custom",raw:"whyChooseAsuCardShape",required:!1}}},required:!1}}};const Ce=({appPathFolder:a,dataSource:t,anchorMenu:n,hero:o,introContent:i,atAGlance:l,applicationRequirements:u,changeMajorRequirements:m,affordingCollege:g,flexibleDegreeOptions:b,careerOutlook:p,exampleCareers:d,globalOpportunity:c,attendOnline:f,programContactInfo:x,nextSteps:v,whyChooseAsu:y})=>{var B,V,H,$;const[{data:A,loading:M,error:J},Y]=Ht(),[s,Q]=k.useState(We({})),[W,K]=k.useState({accelerateData:[],concurrentData:[]}),G=$t(t,oa),{defaultState:Z}=k.useContext(Xt),{detailPageDefault:j}=Z;k.useEffect(()=>{typeof window<"u"&&zt({packageName:"app-degree-pages",component:"DetailPage",type:"NA",configuration:{dataSource:t}})},[]),k.useEffect(()=>{Y(G)},[G]),k.useEffect(()=>{if(A){const R=We(A);Q(R),R.hasConcurrentOrAccelerateDegrees()&&ma([R.getAccelerateDegrees(),R.getConcurrentDegrees()],K)}},[A]);const L=n?Jt(n,s):null;return e.jsxs(e.Fragment,{children:[e.jsx(Yt,{}),J&&e.jsx(Qt,{message:Kt}),!(o!=null&&o.hide)&&e.jsx("section",{children:e.jsx(Nt,{image:(o==null?void 0:o.image)||j.hero.image,title:{...j.hero.title,text:s.getMajorDesc(),...o==null?void 0:o.title},contents:o==null?void 0:o.contents})}),e.jsxs(Zt,{as:"div","data-is-loading":M,className:"main-section",children:[!M&&L&&ea(L)&&e.jsx(ta,{anchorMenu:L}),M&&e.jsx(aa,{}),!M&&(A!=null&&A.error?e.jsx("section",{className:"container mt-4 mb-0",children:e.jsx(te,{content:ra,programNotFound:!0})}):e.jsxs("section",{className:"container mt-4 mb-0",children:[(i==null?void 0:i.breadcrumbs)&&e.jsx("div",{className:"row col-12",children:e.jsx(na,{breadcrumbs:i.breadcrumbs,section:o?o.title.text:s.getMajorDesc()})}),e.jsxs("div",{className:"row flex-column-reverse flex-sm-row",children:[e.jsxs("div",{className:"col col-sm-12 col-md-7 col-lg-7",children:[e.jsxs("section",{className:"intro",children:[!s.isValidActiveProgram()&&e.jsx(ge,{content:s.getAsuCustomText()}),!(i!=null&&i.hideMarketText)&&((i==null?void 0:i.contents)||s.getMarketText())&&e.jsx(ve,{contents:(i==null?void 0:i.contents)||[{text:s.getMarketText()}]}),!(i!=null&&i.hideProgramDesc)&&e.jsx(te,{content:s.getFullDescription(),stemOptText:s.getStemOptText()})]}),!(l!=null&&l.hide)&&e.jsx(me,{offeredBy:(l==null?void 0:l.offeredBy)||{text:s.getCollegeDesc(),url:s.getCollegeUrl()},locations:(l==null?void 0:l.locations)||ia(s),firstRequirementMathCourse:(l==null?void 0:l.firstRequirementMathCourse)||s.getMinMathReq(),mathIntensity:(l==null?void 0:l.mathIntensity)||s.getMathIntensity(),stemOptText:s.hasStemOptText()}),!(i!=null&&i.hideRequiredCourses)&&!s.isMinorOrCertificate()&&e.jsx(Pe,{onlineMajorMapURL:s.getOnlineMajorMapURL(),majorMapOnCampusURL:s.getGeneralDegreeMajorMap(),subPlnMajorMaps:s.getSubPlnMajorMaps(),subPlns:s.getSubPln()}),!(u!=null&&u.hide)&&e.jsx(ce,{graduateRequirements:s.isGradProgram()?s.getGraduateRequirements():null,isMinorOrCertificate:s.isMinorOrCertificate(),minorRequirements:s.getMinorCourseRequirements(),additionalRequirements:s.getAdmissionsRequirementsText(),transferRequirements:s.getTransferAdmission(),majorMapURL:s.getGeneralDegreeMajorMap()}),!(m!=null&&m.hide)&&!s.isMinorOrCertificate()&&!s.isGradProgram()&&e.jsx(he,{content:s.getChangeMajor()})]}),e.jsxs("div",{className:"col col-sm-12 col-md-5 col-lg-5",children:[(i==null?void 0:i.video)&&e.jsx(qe,{type:i.video.type,url:i.video.url,vttUrl:i.video.vttUrl,title:i.video.title}),!(i!=null&&i.video)&&e.jsx(je,{url:((B=i==null?void 0:i.image)==null?void 0:B.url)||j.introContent.image.url,altText:((V=i==null?void 0:i.image)==null?void 0:V.altText)||j.introContent.image.altText})]})]}),e.jsxs("div",{className:"row",children:[!(v!=null&&v.hide)&&!s.isMinorOrCertificate()&&e.jsx(Se,{cards:v==null?void 0:v.cards,defaultCards:j.nextSteps.cards}),!(g!=null&&g.hide)&&e.jsx(Tt,{}),!(b!=null&&b.hide)&&s.hasConcurrentOrAccelerateDegrees()&&e.jsx(ye,{acceleratedLinks:Be(W.accelerateData),concurrentLinks:Be(W.concurrentData)}),!(p!=null&&p.hide)&&s.getAsuCareerOpportunity()&&e.jsx(de,{image:(p==null?void 0:p.image)||j.careerOutlook.image,contents:[{text:s.getAsuCareerOpportunity()}]}),!(d!=null&&d.hide)&&s.hasCareerData()&&e.jsx(xe,{tableData:ca(s.getCareerData())}),s.getProfessionalLicensureText()&&e.jsx(we,{content:s.getProfessionalLicensureText()}),!(c!=null&&c.hide)&&s.getGlobalExp()&&e.jsx(be,{contents:[{text:s.getGlobalExp()}],image:(c==null?void 0:c.image)||j.globalOpportunity.image}),!(y!=null&&y.hide)&&e.jsx(Ae,{sectionIntroText:(y==null?void 0:y.sectionIntroText)||j.whyChooseAsu.sectionIntroText,cards:y==null?void 0:y.cards,defaultCards:j.whyChooseAsu.cards}),!(f!=null&&f.hide)&&s.isOnline()&&e.jsx(ue,{learnMoreLink:s.getCurriculumUrl(),image:(f==null?void 0:f.image)||j.attendOnline.image})]}),!(x!=null&&x.hide)&&e.jsx("div",{className:"row",children:e.jsx("div",{className:"col col-sm-12 col-md-6 col-lg-6 ",children:e.jsx(Oe,{department:{text:s.getDepartmentName(),url:((H=x==null?void 0:x.department)==null?void 0:H.url)||s.getPlanUrl()},email:{text:s.getEmailAddress(),url:(($=x==null?void 0:x.email)==null?void 0:$.url)||s.getEmailAddress()},asuOfficeLoc:s.getAsuOfficeLoc(),phone:s.getPhone()})})})]}))]})]})};Ce.propTypes={appPathFolder:r.string,dataSource:sa,anchorMenu:r.shape(pa),hero:r.shape(Nt.propTypes),introContent:r.shape({hideMarketText:r.bool,hideProgramDesc:r.bool,hideRequiredCourses:r.bool,breadcrumbs:ie.arrayOf(z),contents:ie.arrayOf(r.object),video:la,image:X}),atAGlance:r.shape({hide:r.bool,offeredBy:z,locations:ie.arrayOf(z),firstRequirementMathCourse:r.string,mathIntensity:r.string,timeCommitment:r.string}),applicationRequirements:r.shape({hide:r.bool}),changeMajorRequirements:r.shape({hide:r.bool}),affordingCollege:r.shape({hide:r.bool}),flexibleDegreeOptions:r.shape({hide:r.bool}),careerOutlook:r.shape({hide:r.bool,image:X}),exampleCareers:r.shape({hide:r.bool}),globalOpportunity:r.shape({hide:r.bool,image:X}),attendOnline:r.shape({hide:r.bool,image:X}),programContactInfo:r.shape({hide:r.bool,department:r.string,email:r.string}),nextSteps:r.shape({hide:r.bool,cards:r.arrayOf(I)}),whyChooseAsu:r.shape(Ct)};const re=a=>e.jsx(Vt,{detailPageProps:a,children:e.jsx(Ce,{...a})});re.propTypes=Ce.propTypes;re.__docgenInfo={description:`@param {DetailPageProps} props
@returns {JSX.Element}`,methods:[],displayName:"AppComponent",props:{appPathFolder:{description:"",type:{name:"string"},required:!1},dataSource:{description:"",type:{name:"shape",value:{id:{name:"string",required:!1},sourceType:{name:"enum",value:[{value:'"api"',computed:!1},{value:'"shared-data-source"',computed:!1},{value:'"static-json"',computed:!1}],required:!1},sharedDataSourceId:{name:"string",required:!1},data:{name:"arrayOf",value:{name:"object"},required:!1},apiUrl:{name:"string",required:!1}}},required:!1},anchorMenu:{description:"",type:{name:"shape",value:{atAGlance:{name:"bool",required:!1},applicationRequirements:{name:"bool",required:!1},changeMajorRequirements:{name:"bool",required:!1},nextSteps:{name:"bool",required:!1},affordingCollege:{name:"bool",required:!1},flexibleDegreeOptions:{name:"bool",required:!1},careerOutlook:{name:"bool",required:!1},exampleCareers:{name:"bool",required:!1},customizeYourCollegeExperience:{name:"bool",required:!1},globalOpportunity:{name:"bool",required:!1},attendOnline:{name:"bool",required:!1},whyChooseAsu:{name:"bool",required:!1},programContactInfo:{name:"bool",required:!1},externalAnchors:{name:"arrayOf",value:{name:"shape",value:{targetIdName:{name:"string",required:!1},text:{name:"string",required:!1}}},required:!1}}},required:!1},hero:{description:"",type:{name:"shape",value:"Hero.propTypes",computed:!0},required:!1},introContent:{description:"",type:{name:"shape",value:{hideMarketText:{name:"bool",required:!1},hideProgramDesc:{name:"bool",required:!1},hideRequiredCourses:{name:"bool",required:!1},breadcrumbs:{name:"arrayOf",value:{name:"custom",raw:"linkPropShape"},required:!1},contents:{name:"arrayOf",value:{name:"object"},required:!1},video:{name:"custom",raw:"videoPropShape",required:!1},image:{name:"custom",raw:"imagePropShape",required:!1}}},required:!1},atAGlance:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},offeredBy:{name:"custom",raw:"linkPropShape",required:!1},locations:{name:"arrayOf",value:{name:"custom",raw:"linkPropShape"},required:!1},firstRequirementMathCourse:{name:"string",required:!1},mathIntensity:{name:"string",required:!1},timeCommitment:{name:"string",required:!1}}},required:!1},applicationRequirements:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},changeMajorRequirements:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},affordingCollege:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},flexibleDegreeOptions:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},careerOutlook:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},image:{name:"custom",raw:"imagePropShape",required:!1}}},required:!1},exampleCareers:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},globalOpportunity:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},image:{name:"custom",raw:"imagePropShape",required:!1}}},required:!1},attendOnline:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},image:{name:"custom",raw:"imagePropShape",required:!1}}},required:!1},programContactInfo:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},department:{name:"string",required:!1},email:{name:"string",required:!1}}},required:!1},nextSteps:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},cards:{name:"arrayOf",value:{name:"custom",raw:"cardPropShape"},required:!1}}},required:!1},whyChooseAsu:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},sectionIntroText:{name:"string",required:!1},cards:{name:"custom",raw:"whyChooseAsuCardsShape",required:!1},defaultCards:{name:"custom",raw:"whyChooseAsuCardsShape",required:!1}}},required:!1}}};const Ia={component:re,title:"Program Detail Page",parameters:{docs:{description:{component:"@typedef {import('../../core/types/detail-page-types').DetailPageProps} AppProps"}}}},D=({appPathFolder:a,dataSource:t,anchorMenu:n,introContent:o,hero:i,atAGlance:l,applicationRequirements:u,changeMajorRequirements:m,affordingCollege:g,flexibleDegreeOptions:b,careerOutlook:p,exampleCareers:d,globalOpportunity:c,programContactInfo:f,attendOnline:x,nextSteps:v,whyChooseAsu:y})=>e.jsxs(e.Fragment,{children:[e.jsx(re,{appPathFolder:a,dataSource:t,anchorMenu:n,introContent:o,hero:i,atAGlance:l,applicationRequirements:u,changeMajorRequirements:m,affordingCollege:g,flexibleDegreeOptions:b,careerOutlook:p,exampleCareers:d,globalOpportunity:c,programContactInfo:f,attendOnline:x,nextSteps:v,whyChooseAsu:y}),e.jsx("section",{id:"my-request-form-info-id",className:"container mb-4",children:e.jsxs("div",{className:"row",children:[e.jsx("h4",{children:"This is a just a Place holder"}),e.jsx("img",{src:"./examples/assets/img/request-form-information.jpeg",alt:"",style:{opacity:"0.7",mixBlendMode:"luminosity",maxWidth:"100%",width:"100%"}})]})})]}),Ca=new URL(window.location.href).searchParams.get("acadPlan"),P={appPathFolder:".",dataSource:{acadPlan:Ca||"TBTGMBGM"},anchorMenu:{applicationRequirements:!0,nextSteps:!0,affordingCollege:!0,careerOutlook:!0,globalOpportunity:!0,externalAnchors:[{targetIdName:"my-request-form-info-id",text:"Request Information"}]},hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",altText:"Undergraduate Degrees",size:"medium"},title:{text:"Undergraduate Degrees",highlightColor:"gold"}},introContent:{breadcrumbs:[{text:"Academic programs",url:"#"},{text:"Undergraduate degrees",url:`${Ge()}index.html?path=/story/program-listing-page--default`},{text:"Degree title",url:`${Ge()}index.html?path=/story/program-detail-page--with-content`,isActive:!0}],image:{url:"https://source.unsplash.com/random/1200x750?college",altText:"Random image. REPLACE with appropriate alt text for accessibility."}},atAGlance:{offeredBy:{text:"Herberger Instite for Design and the Arts",url:"#"},locations:[{text:"Tempe campus",url:"#"},{text:"West Valley campus",url:"#"},{text:"Online",url:"#"},{text:"ASU Local@Los Angeles",url:"#"}],firstRequirementMathCourse:"MAT 142 - College Mathematics",mathIntensity:"General",timeCommitment:"120 credit hours(about 4 years)"},nextSteps:{cards:{learnMore:{icon:["fas","info-circle"],title:"Learn more about our programs",content:"Tell us what type of student you are and we'll get you the information you need.",buttonLink:{label:"Request information",ariaLabel:"Request information",color:"maroon",href:"https://admission.asu.edu/contact/request-info"}},apply:{icon:["fas","file-alt"],title:"Apply to program",content:"Arizona State University invites freshman, transfer, international, graduate and online students to apply for admission using our online application.",buttonLink:{label:"Apply now",ariaLabel:"Apply now",color:"maroon",href:"https://admission.asu.edu/apply"}},visit:{icon:["fas","map-marker-alt"],title:"Visit our campus",content:"An Experience ASU visit includes a presentation on admissions, scholarships and financial aid, student housing, getting involved on campus and much more.You will also go on a student-led walking tour of campus.",buttonLink:{label:"Schedule a visit",ariaLabel:"Schedule a visit",color:"maroon",href:"https://visit.asu.edu/"}}}},careerOutlook:{image:{url:"https://source.unsplash.com/random/1200x750?career",altText:"Random image. REPLACE with appropriate alt text for accessibility."}},globalOpportunity:{image:{url:"https://source.unsplash.com/random/1200x750?job",altText:"Random image. REPLACE with appropriate alt text for accessibility."}},whyChooseAsu:{hide:!1,sectionIntroText:"CUSTOM INTRO TEXT. ASU offers students excellent academics and unique opportunities to customize your college experience and give you an edge, including undergraduate research, internships, access to state-of-the-art facilities, and opportunities to work with world-class faculty and scientists.",cards:{faculty:{image:{url:"https://source.unsplash.com/random/600x600?career",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"World-class faculty",text:"The ASU faculty is at the forefront nationally in advancing research and discovery. Our faculty members inspire new ways of thinking, innovating and solving problems socially, culturally and economically in our region and in the international community.",button:{label:"Faculty excellence",color:"maroon",href:"https://www.asu.edu/academics/faculty-excellence"}},programs:{image:{url:"https://source.unsplash.com/random/600x600?job",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"Highly ranked programs",text:"A leading service ranking the excellence and innovation of the nation’s top universities, U.S. News & World Report rates many ASU programs among the top 25 in the country, including more than thirty programs ranked in the nation's top 10.",button:{label:"ASU rankings",color:"maroon",href:"https://www.asu.edu/rankings"}},research:{image:{url:"https://source.unsplash.com/random/600x600?person",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"Research opportunities",text:"Students have the opportunity to work with mentors who are experts in their fields and establish professional connections that may last a lifetime. Engage in meaningful research and gain experience that may make you more competitive in the job market.",button:{label:"Research opportunities",color:"maroon",href:"https://provost.asu.edu/uresearch"}},inclusion:{image:{url:"https://source.unsplash.com/random/600x600?online",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"An inclusive environment",text:"ASU defines our success not by whom we exclude, but by whom we include and how our students succeed. Our educational programs are designed to broaden access to a quality education and support our students’ success.",button:{label:"ASU Charter",color:"maroon",href:"https://www.asu.edu/about/charter-mission"}},mentors:{image:{url:"https://source.unsplash.com/random/600x600?classroom",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"Mentor network",text:"Students have access to a powerful online network of diverse mentors. Engaging with the ASU Mentor Network can help to build connections with professionals, both locally and globally, who share career advice, networks, and their own success stories.",button:{label:"ASU Mentor network",color:"maroon",href:"https://mentorship.asu.edu"}},honors:{image:{url:"https://source.unsplash.com/random/600x600?school",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"Global education",text:"ASU offers more than 300 Global Education programs in over 65 different countries. Whether you are interested in studying abroad, internships, research or service learning, there's a program for you!",button:{label:"Explore",color:"maroon",href:"https://goglobal.asu.edu"}}}},attendOnline:{image:{url:"https://source.unsplash.com/random/1200x750?classroom,online",altText:"Random image. REPLACE with appropriate alt text for accessibility."}},programContactInfo:{department:{text:"",url:"#"},email:{text:"",url:"#"}}},E=D.bind({});E.args={...P,hero:null,anchorMenu:null,introContent:null,atAGlance:null,applicationRequirements:null,changeMajorRequirements:null,nextSteps:null,affordingCollege:null,flexibleDegreeOptions:null,careerOutlook:null,exampleCareers:null,globalOpportunity:null,attendOnline:null,programContactInfo:null,whyChooseAsu:null};const _=D.bind({});_.args={...P,dataSource:{...P.dataSource,acadPlan:"LAAUDAUDD"}};const F=D.bind({});F.args={...P,dataSource:{...P.dataSource,acadPlan:"FAARTHBA"}};const U=D.bind({});U.args={...P,dataSource:{...P.dataSource,acadPlan:"BABUSCLBA"}};const w=D.bind({});w.args={...P};w.args.dataSource={...w.args.dataSource,acadPlan:"LSBISBIS"};w.args.introContent={...w.args.introContent,image:void 0,video:{url:"./examples/assets/video/stock-video-person-drawing.mp4",title:"",vttUrl:""}};const O=D.bind({});O.args={...P};O.args.dataSource={...O.args.dataSource,acadPlan:"LSBISBIS"};O.args.introContent={...O.args.introContent,image:void 0,video:{type:"youtube",url:"https://www.youtube.com/watch?v=aA2DCIDNxmw&list=PLuoS9aQM7Lzurd5ezsuCIlxyag7q_c-NQ"}};const T=D.bind({});T.args={...P};T.args.dataSource={...T.args.dataSource,acadPlan:"ASAPSSCERT"};var He,$e,Xe,ze,Je;E.parameters={...E.parameters,docs:{...(He=E.parameters)==null?void 0:He.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(Xe=($e=E.parameters)==null?void 0:$e.docs)==null?void 0:Xe.source},description:{story:"@type {{ args: AppProps }}",...(Je=(ze=E.parameters)==null?void 0:ze.docs)==null?void 0:Je.description}}};var Ye,Qe,Ke,Ze,et;_.parameters={..._.parameters,docs:{...(Ye=_.parameters)==null?void 0:Ye.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(Ke=(Qe=_.parameters)==null?void 0:Qe.docs)==null?void 0:Ke.source},description:{story:"@type {{ args: AppProps }}",...(et=(Ze=_.parameters)==null?void 0:Ze.docs)==null?void 0:et.description}}};var tt,at,rt,nt,it;F.parameters={...F.parameters,docs:{...(tt=F.parameters)==null?void 0:tt.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(rt=(at=F.parameters)==null?void 0:at.docs)==null?void 0:rt.source},description:{story:"@type {{ args: AppProps }}",...(it=(nt=F.parameters)==null?void 0:nt.docs)==null?void 0:it.description}}};var ot,st,lt,pt,ct;U.parameters={...U.parameters,docs:{...(ot=U.parameters)==null?void 0:ot.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(lt=(st=U.parameters)==null?void 0:st.docs)==null?void 0:lt.source},description:{story:"@type {{ args: AppProps }}",...(ct=(pt=U.parameters)==null?void 0:pt.docs)==null?void 0:ct.description}}};var mt,ut,dt,ht,gt;w.parameters={...w.parameters,docs:{...(mt=w.parameters)==null?void 0:mt.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(dt=(ut=w.parameters)==null?void 0:ut.docs)==null?void 0:dt.source},description:{story:"@type {{ args: AppProps }}",...(gt=(ht=w.parameters)==null?void 0:ht.docs)==null?void 0:gt.description}}};var ft,xt,yt,bt,jt;O.parameters={...O.parameters,docs:{...(ft=O.parameters)==null?void 0:ft.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(yt=(xt=O.parameters)==null?void 0:xt.docs)==null?void 0:yt.source},description:{story:"@type {{ args: AppProps }}",...(jt=(bt=O.parameters)==null?void 0:bt.docs)==null?void 0:jt.description}}};var qt,vt,St,wt,Ot;T.parameters={...T.parameters,docs:{...(qt=T.parameters)==null?void 0:qt.docs,source:{originalSource:`({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
  whyChooseAsu
}) => <>
    <DetailPage appPathFolder={appPathFolder} dataSource={dataSource} anchorMenu={anchorMenu} introContent={introContent} hero={hero} atAGlance={atAGlance} applicationRequirements={applicationRequirements} changeMajorRequirements={changeMajorRequirements} affordingCollege={affordingCollege} flexibleDegreeOptions={flexibleDegreeOptions} careerOutlook={careerOutlook} exampleCareers={exampleCareers} globalOpportunity={globalOpportunity} programContactInfo={programContactInfo} attendOnline={attendOnline} nextSteps={nextSteps} whyChooseAsu={whyChooseAsu} />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img src="./examples/assets/img/request-form-information.jpeg" alt="" style={{
        opacity: "0.7",
        mixBlendMode: "luminosity",
        maxWidth: "100%",
        width: "100%"
      }} />
      </div>
    </section>
  </>`,...(St=(vt=T.parameters)==null?void 0:vt.docs)==null?void 0:St.source},description:{story:"@type {{ args: AppProps }}",...(Ot=(wt=T.parameters)==null?void 0:wt.docs)==null?void 0:Ot.description}}};const ka=["Default","DefaultWithGraduateDegree","WithContent","WithNotAcceptNewStudents","WithVideoAndMarketText","WithYoutubeVideo","WithNoGlobalOpportunity"];export{E as Default,_ as DefaultWithGraduateDegree,F as WithContent,T as WithNoGlobalOpportunity,U as WithNotAcceptNewStudents,w as WithVideoAndMarketText,O as WithYoutubeVideo,ka as __namedExportsOrder,Ia as default};
