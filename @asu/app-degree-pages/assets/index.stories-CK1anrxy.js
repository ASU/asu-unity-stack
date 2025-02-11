import{D as Dt,q as S,j as e,p as h,K as q,s as N,l as Ot,S as Lt,P as n,i as Pt,g as Fe,a as ie,b as X,O as ae,e as At,f as le,c as Et,G as _t,v as Ft,d as Ut,h as Wt,k as I,t as ne,m as z,n as Gt,w as Nt,A as Bt,u as Vt,o as Ue,r as Ht,x as $t,y as Xt,z as zt,B as Jt,T as Yt,E as Qt,C as Kt,F as Ct,H as Zt,M as ea,L as ta,I as aa,J as ra,N as na,Q as oa,R as sa,U as oe,V as ia,W as la,X as We}from"./index-CHmuEQBt.js";import{r as R}from"./index-B2SEcK1p.js";import{g as pa}from"./_commonjsHelpers-B3tUAs5q.js";import"./index-BEWoeB4E.js";const Ge=a=>a.map(t=>({title:t.acadPlanDescription,url:t.academicOfficeUrl})).sort((t,r)=>t.title.localeCompare(r.title)),ca=a=>a==null?void 0:a.map(t=>({career:{text:t.alternateTitle,url:`${Dt}/career-details/${t.onetCode}`},growth:t.growth,medianSalary:t.salary.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}),brightOutlook:!!t.brightOutlook,greenOccupation:!!t.green}));function ma(a,t){Promise.all(a).then(r=>{const i=r[0],o=r[1];t({accelerateData:i,concurrentData:o})}).catch(()=>{t({accelerateData:[],concurrentData:[]})})}const ua=S.section`
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
`;function Tt(){return e.jsxs(ua,{className:"container",id:h.affordingCollege.targetIdName,"data-testid":"affording-college",children:[e.jsx(da,{}),e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Affording college"})}),e.jsxs("div",{className:"mt-2 row",children:[e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{icon:["fas","calculator"],title:"Tuition estimator",body:"The tuition estimator shows the tuition and fee breakdown for your particular major, campus and residency status without financial aid.",buttons:[{label:"Estimate tuition and fees",ariaLabel:"Estimate tuition and fees",color:"maroon",href:"https://tuition.asu.edu/cost-calculator/tuition"}]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{icon:["fas","award"],title:"Scholarships",body:"Scholarships are a type of aid that does not need to be paid back. Some you apply for and some are automatic.",buttons:[{label:"Learn about scholarships",ariaLabel:"Learn about scholarships",color:"maroon",href:"https://scholarships.asu.edu/"}]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{icon:["fas","hand-holding-usd"],title:"Financial aid",body:"There are many financial aid options available for students. In fact, more than 80 percent of all ASU students receive some form of financial assistance every year.",buttons:[{label:"Explore financial aid",ariaLabel:"Explore financial aid",color:"maroon",href:"https://tuition.asu.edu/financial-aid"}]})})]})]})}Tt.__docgenInfo={description:"",methods:[],displayName:"AffordingCollege"};var Mt={exports:{}};(function(a){(function(){var t={}.hasOwnProperty;function r(){for(var s="",p=0;p<arguments.length;p++){var c=arguments[p];c&&(s=o(s,i(c)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var p="";for(var c in s)t.call(s,c)&&s[c]&&(p=o(p,c));return p}function o(s,p){return p?s?s+" "+p:s+p:s}a.exports?(r.default=r,a.exports=r):window.classNames=r})()})(Mt);var ha=Mt.exports;const ga=pa(ha),fa=S.ul`
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
`,xa=({transferRequirements:a="",additionalRequirements:t=""})=>{const r=[{label:"Freshman",href:"https://admission.asu.edu/freshman/apply"},{label:"Transfer",href:"https://admission.asu.edu/transfer/apply"},{label:"International",href:"https://admission.asu.edu/international/undergrad-apply"},{label:"Readmission",href:"https://admission.asu.edu/undergrad/readmission"}],i=[];return t!=null&&t.trim()&&i.push({content:{header:"Additional Requirements",body:t}}),a!=null&&a.trim()&&i.push({content:{header:"Transfer Admission Requirements",body:a}}),e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"All students are required to meet general university admission requirements"}),e.jsx(fa,{className:ga("",{"mb-0":i.length===0}),children:r.map(({label:o,href:s})=>e.jsx("li",{children:e.jsx(Ot,{ariaLabel:o,color:"maroon",href:s,label:o,size:"small"})},o))}),i.length>0&&e.jsx("div",{className:"mt-2 mb-4",children:e.jsx(Lt,{cards:i,openedCard:1})})]})};function pe({graduateRequirements:a,transferRequirements:t,isMinorOrCertificate:r,additionalRequirements:i,minorRequirements:o}){let s;return a||r?s=r?"Program requirements":"Degree requirements":s=r?"Program requirements":"Admission requirements",e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:h.applicationRequirements.targetIdName,"data-testid":"application-requirements",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:s})}),a||r?e.jsx("div",{dangerouslySetInnerHTML:N(a||o)}):xa({transferRequirements:t,additionalRequirements:i})]}),a||r?e.jsxs("section",{id:h.degreeRequirements.targetIdName,"data-testid":"degree-requirements",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Admission requirements"})}),e.jsx("div",{dangerouslySetInnerHTML:N(i)})]}):null]})}pe.propTypes={graduateRequirements:n.string,transferRequirements:n.string,isMinorOrCertificate:n.bool,additionalRequirements:n.string,minorRequirements:n.string};pe.__docgenInfo={description:`@param {ApplicationRequirementsProps} props
@returns {JSX.Element}`,methods:[],displayName:"ApplicationRequirements",props:{graduateRequirements:{description:"",type:{name:"string"},required:!1},transferRequirements:{description:"",type:{name:"string"},required:!1},isMinorOrCertificate:{description:"",type:{name:"bool"},required:!1},additionalRequirements:{description:"",type:{name:"string"},required:!1},minorRequirements:{description:"",type:{name:"string"},required:!1}}};const k=({item:a,type:t})=>{const r=Pt("glance-"),i=()=>typeof a=="object"?a.map((o,s)=>{const p=["","#"].includes(o.url)?null:o.url;let c="";return s>0&&s<a.length-1&&(c=", "),s===a.length-1&&a.length>1&&(c=" or "),e.jsxs(R.Fragment,{children:[c,e.jsx("a",{href:p,rel:"noreferrer",target:"_blank",children:o.text})]},r.next().value)}):a;return e.jsxs("li",{children:[e.jsx("i",{className:`fas fa-${Fe[t].icon} fa-li`}),e.jsxs("strong",{children:[Fe[t].title,": "]}),i()]})};k.propTypes={item:n.oneOfType([n.arrayOf(ie),n.string]),type:n.string};k.__docgenInfo={description:`@param {GlanceItemProps} param
@returns {JSX.Element}`,methods:[],displayName:"GlanceItem",props:{item:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"custom",raw:"glanceItemPropShape"}},{name:"string"}]},required:!1},type:{description:"",type:{name:"string"},required:!1}}};const ce=({offeredBy:a,locations:t,firstRequirementMathCourse:r,mathIntensity:i,timeCommitment:o})=>e.jsxs("section",{id:h.atAGlance.targetIdName,"data-testid":"at-aglance",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"At a glance: program details"})}),e.jsxs("ul",{className:"uds-list fa-ul maroon pt-2 pb-0 pe-0",children:[a&&e.jsx(k,{item:[a],type:"offeredBy"}),t&&e.jsx(k,{item:t,type:"locations"}),r&&e.jsx(k,{item:r,type:"firstRequirementMathCourse"}),i&&e.jsx(k,{item:i,type:"mathIntensity"}),o&&e.jsx(k,{item:o,type:"timeCommitment"})]})]});ce.propTypes={offeredBy:ie.isRequired,locations:n.arrayOf(ie).isRequired,firstRequirementMathCourse:n.string.isRequired,mathIntensity:n.string,timeCommitment:n.string};ce.__docgenInfo={description:`@param {AtAGlanceProps} props
@returns {JSX.Element}`,methods:[],displayName:"AtAGlance",props:{offeredBy:{description:"",type:{name:"custom",raw:"glanceItemPropShape.isRequired"},required:!1},locations:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"glanceItemPropShape"}},required:!0},firstRequirementMathCourse:{description:"",type:{name:"string"},required:!0},mathIntensity:{description:"",type:{name:"string"},required:!1},timeCommitment:{description:"",type:{name:"string"},required:!1}}};const ya=`
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;function me({image:a,learnMoreLink:t,contents:r}){const i=`linear-gradient(180deg, #19191900 0%, #191919c9 100%),url('${a.url}')`,o=Pt("attend-online-");return e.jsx("section",{id:h.attendOnline.targetIdName,className:"uds-card-and-image",style:{backgroundImage:i},"data-testid":"attend-online",children:e.jsx("div",{className:"uds-card-and-image-container",children:e.jsxs("div",{className:"card card-centered",children:[e.jsx("i",{className:"fas fa-wifi fa-2x card-icon-top"}),e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Attend online"})}),e.jsx("div",{className:"card-body",children:r?r.map(s=>e.jsx("p",{children:s},o.next().value)):e.jsx("p",{children:ya})}),e.jsx("div",{className:"card-button",children:e.jsx(Ot,{label:"Learn about online options",ariaLabel:"Learn about online options",href:t,color:"maroon",size:"small"})})]})})})}me.propTypes={learnMoreLink:n.string,image:X,contents:n.arrayOf(n.shape({text:n.string}))};me.__docgenInfo={description:`@param {import("src/core/types/detail-page-types").AttendOnlineProps & {
 learnMoreLink: string
}} props
@returns`,methods:[],displayName:"AttendOnline",props:{learnMoreLink:{description:"",type:{name:"string"},required:!1},image:{description:"",type:{name:"shape",value:{}},required:!1},contents:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1}}}},required:!1}}};const ba=S.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`,ue=({contents:a,image:t})=>e.jsx(ba,{id:h.careerOutlook.targetIdName,"data-testid":"career-outlook",children:e.jsx(ae,{headingTag:"H2",title:h.careerOutlook.text,contents:a,image:t})});ue.propTypes=ae.propTypes;ue.__docgenInfo={description:`@param {import("src/core/types/detail-page-types").GlobalOpportunityProps} props
@returns {JSX.Element}`,methods:[],displayName:"CareerOutlook",props:{headingTag:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},contentDirection:{description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},contents:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1}}}},required:!1},image:{description:"",type:{name:"shape",value:{}},required:!1},contentChildren:{description:"",type:{name:"element"},required:!1}}};const ja=S.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;function de({content:a}){return e.jsxs("section",{id:h.changeMajorRequirements.targetIdName,className:"change-your-major","data-testid":"change-your-major",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Change your major requirements for current students"})}),e.jsx(ja,{dangerouslySetInnerHTML:N(a)})]})}de.propTypes={content:n.string};de.__docgenInfo={description:`@param {Object} props
@returns`,methods:[],displayName:"ChangeYourMajor",props:{content:{description:"",type:{name:"string"},required:!1}}};function he({content:a=""}){return e.jsx("div",{"data-testid":"custom-text",className:"mt-3",dangerouslySetInnerHTML:N(a)})}he.propTypes={content:n.string};he.__docgenInfo={description:`@param {{content: string}} props
@returns {JSX.Element}`,methods:[],displayName:"CustomText",props:{content:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}};const It=`
  width: unset !important;
  min-width: unset !important;
`,Rt=S.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${It}
`,kt=S.i`
  color: #78be21;
  ${It}
`;function ge({data:a}){return e.jsx("div",{className:"uds-table mb-1",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Career"}),e.jsx("th",{scope:"col",className:"text-end",children:"Growth*"}),e.jsx("th",{scope:"col",className:"text-end",children:"Median Salary*"})]})}),e.jsx("tbody",{children:a==null?void 0:a.map(t=>e.jsxs("tr",{children:[e.jsxs("th",{scope:"row",style:{fontWeight:"normal"},children:[e.jsx("a",{href:t.career.url,target:"_blank",rel:"noreferrer",children:t.career.text}),t.greenOccupation&&e.jsx(kt,{className:"fas fa-leaf ms-1"}),t.brightOutlook&&e.jsx(Rt,{className:"fas fa-sun ms-1"})]}),e.jsxs("td",{className:"text-end",children:[+t.growth,"%"]}),e.jsx("td",{className:"text-end",children:t.medianSalary||0})]},t.career.url))})]})})}ge.propTypes={data:n.arrayOf(At)};ge.__docgenInfo={description:`@param {{ data: TableProps[] }} props
@returns {JSX.Element}`,methods:[],displayName:"Table",props:{data:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"exampleCareersTableDataPropShape"}},required:!1}}};function fe({tableData:a}){return e.jsxs("section",{id:h.exampleCareers.targetIdName,className:"container","data-testid":"example-careers",children:[e.jsx("h3",{children:"Example careers"}),e.jsx("p",{children:"Example job titles and salaries listed below are not necessarily entry level, and students should take into consideration how years of experience and geographical location may affect pay scales. Some jobs also may require advanced degrees, certifications or state-specific licensure."}),e.jsxs("div",{className:"mt-4 mb-4",children:[e.jsx(ge,{data:a}),e.jsx("p",{children:e.jsx("small",{children:"* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)."})})]}),e.jsxs("div",{className:"d-flex",children:[e.jsxs("p",{className:"me-3",children:[e.jsx(Rt,{className:"fas fa-sun me-1"}),"Bright outlook"]}),e.jsxs("p",{children:[e.jsx(kt,{className:"fas fa-leaf me-1"}),"Green occupation"]})]})]})}fe.propTypes={tableData:n.arrayOf(At)};fe.__docgenInfo={description:`@param {ExampleCareersProps} props
@returns {JSX.Element}`,methods:[],displayName:"ExampleCareers",props:{tableData:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"exampleCareersTableDataPropShape"}},required:!1}}};const qa=S.ul`
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
`,ee=({id:a,title:t,links:r})=>e.jsxs("div",{id:a,className:"mt-4",children:[e.jsx("h3",{children:t}),e.jsx("p",{children:"This program allows students to obtain both a bachelor's and master's degree in as little as five years. It is offered as an accelerated bachelor's and master's degree with:"}),e.jsx(qa,{className:"mt-3 mb-3",children:r.map((i,o)=>e.jsx("li",{children:e.jsx("a",{href:i.url,target:"_blank",rel:"noreferrer",children:i.title})},`${i.title}-${o}`))}),e.jsx("p",{className:"mb-0",children:"Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply."})]});ee.propTypes={id:n.string,title:n.string,links:le};ee.__docgenInfo={description:`@param {ContentBlockProps} props
@returns`,methods:[],displayName:"ContentBlock",props:{id:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},links:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},url:{name:"string",required:!1}}}},required:!1}}};function xe({acceleratedLinks:a,concurrentLinks:t}){return e.jsxs("section",{id:h.flexibleDegreeOptions.targetIdName,className:"container","data-testid":"flexible-degree-options",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Flexible degree options"})}),!!a.length&&e.jsx(ee,{id:h.flexibleDegreeOptions.acceleratedId,title:"Accelerated program options",links:a}),!!t.length&&e.jsx(ee,{id:h.flexibleDegreeOptions.concurrentId,title:"Concurrent degree program",links:t})]})}xe.propTypes={acceleratedLinks:le,concurrentLinks:le};xe.__docgenInfo={description:`@param {FlexibleDegreeOptionsProps} props
@returns`,methods:[],displayName:"FlexibleDegreeOptions",props:{acceleratedLinks:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},url:{name:"string",required:!1}}}},required:!1},concurrentLinks:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},url:{name:"string",required:!1}}}},required:!1}}};const va=S.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`,ye=({contents:a,image:t})=>e.jsx(va,{id:h.globalOpportunity.targetIdName,"data-testid":"global-opportunity",children:e.jsx(ae,{headingTag:"H2",title:h.globalOpportunity.text,contents:a,image:t})});ye.propTypes=ae.propTypes;ye.__docgenInfo={description:`@param {import("src/core/types/detail-page-types").GlobalOpportunityProps} props
@returns {JSX.Element}`,methods:[],displayName:"GlobalOpportunity",props:{headingTag:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},contentDirection:{description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},contents:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1}}}},required:!1},image:{description:"",type:{name:"shape",value:{}},required:!1},contentChildren:{description:"",type:{name:"element"},required:!1}}};const be=({url:a,altText:t})=>e.jsx("div",{className:"uds-img pt-3 pb-3","data-testid":"intro-image",children:e.jsx("img",{src:a,className:"img-fluid",alt:t})});be.propTypes={...Et};be.__docgenInfo={description:'@param {import("src/core/types/shared-local-types").ImageItem} props',methods:[],displayName:"IntroImage",props:{url:{description:"",type:{name:"string"},required:!1},altText:{description:"",type:{name:"string"},required:!1},cssClass:{description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};const Sa=(a,t)=>{if(a!=="youtube")return t;const r=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,i=t.match(r);return i&&i[7].length===11?`https://www.youtube.com/embed/${i[7]}`:t},wa=S.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`,je=({type:a,url:t,vttUrl:r,title:i})=>e.jsx(wa,{"data-testid":"intro-video",children:e.jsx(_t,{type:a,url:Sa(a,t),vttUrl:r,title:i,controls:!0})});je.propTypes={...Ft};je.__docgenInfo={description:'@param {import("src/core/types/shared-local-types").VideoItem} props',methods:[],displayName:"IntroVideo",props:{type:{description:"",type:{name:"enum",value:[{value:'"video"',computed:!1},{value:'"youtube"',computed:!1}]},required:!1},url:{description:"",type:{name:"string"},required:!1},altText:{description:"",type:{name:"string"},required:!1},vttUrl:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1}}};function qe({contents:a=[]}){return e.jsx("div",{"data-testid":"market-text",children:a.map((t,r)=>e.jsx("div",{className:`mt-3 ${Ut(t.cssClass)}`,dangerouslySetInnerHTML:N(t.text)},`content-${r+1}`))})}qe.propTypes={contents:n.arrayOf(Wt)};qe.__docgenInfo={description:`@param {IntroContentProps} props
@returns {JSX.Element}`,methods:[],displayName:"MarketText",props:{contents:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"custom",raw:"contentPropShape"}},required:!1}}};function ve({cards:a,defaultCards:t}){var r,i,o,s,p,c,g,b,m,d,u,f;return e.jsxs("section",{className:"container",id:h.nextSteps.targetIdName,"data-testid":"next-steps",children:[e.jsx("h2",{children:"Next steps to attend ASU"}),e.jsxs("div",{className:"mt-2 row",children:[e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{icon:((r=a==null?void 0:a.learnMore)==null?void 0:r.icon)??t.learnMore.icon,title:((i=a==null?void 0:a.learnMore)==null?void 0:i.title)??t.learnMore.title,body:((o=a==null?void 0:a.learnMore)==null?void 0:o.content)??t.learnMore.content,buttons:[((s=a==null?void 0:a.learnMore)==null?void 0:s.buttonLink)??t.learnMore.buttonLink]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{icon:((p=a==null?void 0:a.apply)==null?void 0:p.icon)??t.apply.icon,title:((c=a==null?void 0:a.apply)==null?void 0:c.title)??t.apply.title,body:((g=a==null?void 0:a.apply)==null?void 0:g.content)??t.apply.content,buttons:[((b=a==null?void 0:a.apply)==null?void 0:b.buttonLink)??t.apply.buttonLink]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{icon:((m=a==null?void 0:a.visit)==null?void 0:m.icon)??t.visit.icon,title:((d=a==null?void 0:a.visit)==null?void 0:d.title)??t.visit.title,body:((u=a==null?void 0:a.visit)==null?void 0:u.content)??t.visit.content,buttons:[((f=a==null?void 0:a.visit)==null?void 0:f.buttonLink)??t.visit.buttonLink]})})]})]})}ve.propTypes={cards:n.shape({learnMore:I,apply:I,visit:I}),defaultCards:n.shape({learnMore:I,apply:I,visit:I})};ve.__docgenInfo={description:`@param {NextStepsProps} props
@returns`,methods:[],displayName:"NextSteps",props:{cards:{description:"",type:{name:"shape",value:{learnMore:{name:"custom",raw:"cardPropShape",required:!1},apply:{name:"custom",raw:"cardPropShape",required:!1},visit:{name:"custom",raw:"cardPropShape",required:!1}}},required:!1},defaultCards:{description:"",type:{name:"shape",value:{learnMore:{name:"custom",raw:"cardPropShape",required:!1},apply:{name:"custom",raw:"cardPropShape",required:!1},visit:{name:"custom",raw:"cardPropShape",required:!1}}},required:!1}}};function Se({content:a=""}){return e.jsxs("section",{className:"container","data-testid":"professional-licensure",children:[e.jsx("h3",{children:"Professional licensure"}),e.jsx("p",{dangerouslySetInnerHTML:N(a)})]})}Se.propTypes={content:n.node};Se.__docgenInfo={description:"",methods:[],displayName:"ProfessionalLicensure",props:{content:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"node"},required:!1}}};const se={event:"link",action:"click",name:"onclick",type:"internal link",region:"main content",section:"Program contact information"},Oa=S.ul`
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
`;function we({department:a,asuOfficeLoc:t,email:r,phone:i}){return e.jsxs("section",{id:h.programContactInfo.targetIdName,"data-testid":"program-contact-info",children:[e.jsx("h2",{children:e.jsx("span",{className:"highlight-gold",children:"Program contact information"})}),e.jsx("p",{children:"If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below."}),e.jsxs(Oa,{className:"text-maroon",children:[e.jsx("li",{children:e.jsxs("div",{children:[e.jsx("i",{className:"c-icon fas icon-small fa-map-marker-alt",title:"Department  Address"}),e.jsx("a",{href:a.url,onClick:()=>ne({...se,text:a.text}),children:a.text})]})}),e.jsx("li",{children:e.jsx("div",{className:"c-icon text-dark office-loc",children:t})}),e.jsxs("li",{children:[e.jsx("i",{className:"c-icon fas icon-small fa-envelope",title:"Email"}),e.jsx("a",{href:`mailto:${r.url||r.text}`,onClick:()=>ne({...se,text:r.text}),children:r.text})]}),e.jsxs("li",{children:[e.jsx("i",{className:"c-icon fas icon-small fa-phone",title:"Phone"}),e.jsx("a",{href:`tel:${i}`,onClick:()=>ne({...se,text:i}),children:i})]})]})]})}we.propTypes={department:z,asuOfficeLoc:n.string,email:z,phone:n.string};we.__docgenInfo={description:`@param {import("src/core/types/detail-page-types").ProgramContactInfoProps} props
@returns`,methods:[],displayName:"ProgramContactInfo",props:{department:{description:"",type:{name:"shape",value:{}},required:!1},asuOfficeLoc:{description:"",type:{name:"string"},required:!1},email:{description:"",type:{name:"shape",value:{}},required:!1},phone:{description:"",type:{name:"string"},required:!1}}};function te({content:a,stemOptText:t,programNotFound:r}){return e.jsxs("div",{"data-testid":"program-description",children:[e.jsx("h2",{children:r?"Program not found":"Program description"}),e.jsx("div",{"data-testid":"program-description-body",dangerouslySetInnerHTML:N(a)}),t&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx("strong",{children:Gt})}),e.jsx("div",{"data-testid":"stem-opt-text",dangerouslySetInnerHTML:N(t)})]})]})}te.propTypes={content:n.string,stemOptText:n.string,programNotFound:n.bool};te.__docgenInfo={description:`@param {ProgramDescriptionProps}  props
@returns`,methods:[],displayName:"ProgramDescription",props:{content:{description:"",type:{name:"string"},required:!1},stemOptText:{description:"",type:{name:"string"},required:!1},programNotFound:{description:"",type:{name:"bool"},required:!1}}};const Pa="https://changemajor.apps.asu.edu/",Aa="On-campus students",Na="Online students",Ca="View major map -",Be="View major map";function Oe({onlineMajorMapURL:a="",majorMapOnCampusURL:t="",subPlnMajorMaps:r=[],subPlns:i=[]}){const o=m=>{const d=i.find(u=>u.acadSubPlanCode===m);return d?d.description:""},s=(m,d,u)=>{m&&u.push({href:m,text:d})},p=[],c=[];r.forEach(m=>{const d=o(m.acadSubPlanCode),u=`${Ca} ${d}`;s(m.url,u,p)}),t&&s(t,Be,p),a&&s(a,Be,c);const g=(m,d)=>e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:m}),e.jsx("ul",{className:"mb-3",children:d.map(u=>e.jsx("li",{children:e.jsx("a",{href:u.href,children:u.text})},u.href))})]}),b=()=>e.jsxs("section",{className:"container ps-0","data-testid":"required-course",children:[e.jsx("h4",{children:"Required courses (major map)"}),p.length>0&&g(Aa,p),c.length>0&&g(Na,c),e.jsxs("div",{className:"mt-3",children:[e.jsx("strong",{children:"What if:"})," See how your courses can be applied to another major and find out how to ",e.jsx("a",{href:Pa,children:"change your major"})]})]});return!(r!=null&&r.length)&&!a&&!t?e.jsx("div",{}):b()}Oe.propTypes={onlineMajorMapURL:n.string,majorMapOnCampusURL:n.string,subPlnMajorMaps:n.arrayOf(n.shape({campus:n.string,acadSubPlanCode:n.string,defaultFlag:n.bool,url:n.string})),subPlns:n.arrayOf(n.shape({acadSubPlanCode:n.string,description:n.string}))};Oe.__docgenInfo={description:`@param {RequiredCoursesProps} props
@returns`,methods:[],displayName:"RequiredCourse",props:{onlineMajorMapURL:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},majorMapOnCampusURL:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},subPlnMajorMaps:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{campus:{name:"string",required:!1},acadSubPlanCode:{name:"string",required:!1},defaultFlag:{name:"bool",required:!1},url:{name:"string",required:!1}}}},required:!1},subPlns:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{acadSubPlanCode:{name:"string",required:!1},description:{name:"string",required:!1}}}},required:!1}}};const Pe=({sectionIntroText:a,cards:t,defaultCards:r})=>{var i,o,s,p,c,g,b,m,d,u,f,x,v,y,A,T,J,Y,l,Q,U,K,W,Z,j,G,B,V,H,$,M,Ne,Ce,Te,Me,Ie,Re,ke,De,Le,Ee,_e;return e.jsxs("section",{id:h.whyChooseAsu.targetIdName,className:"container","data-testid":"why-choose-asu",children:[e.jsx("h2",{children:"Why choose ASU"}),e.jsx("div",{dangerouslySetInnerHTML:N(a)}),e.jsxs("div",{className:"mt-2 row",children:[e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{image:((o=(i=t==null?void 0:t.faculty)==null?void 0:i.image)==null?void 0:o.url)??r.faculty.image.url,imageAltText:((p=(s=t==null?void 0:t.faculty)==null?void 0:s.image)==null?void 0:p.altText)??r.faculty.image.altText,title:((c=t==null?void 0:t.faculty)==null?void 0:c.title)??r.faculty.title,body:((g=t==null?void 0:t.faculty)==null?void 0:g.text)??r.faculty.text,buttons:[((b=t==null?void 0:t.faculty)==null?void 0:b.button)??r.faculty.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{image:((d=(m=t==null?void 0:t.programs)==null?void 0:m.image)==null?void 0:d.url)??r.programs.image.url,imageAltText:((f=(u=t==null?void 0:t.programs)==null?void 0:u.image)==null?void 0:f.altText)??r.programs.image.altText,title:((x=t==null?void 0:t.programs)==null?void 0:x.title)??r.programs.title,body:((v=t==null?void 0:t.programs)==null?void 0:v.text)??r.programs.text,buttons:[((y=t==null?void 0:t.programs)==null?void 0:y.button)??r.programs.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{image:((T=(A=t==null?void 0:t.research)==null?void 0:A.image)==null?void 0:T.url)??r.research.image.url,imageAltText:((Y=(J=t==null?void 0:t.research)==null?void 0:J.image)==null?void 0:Y.altText)??r.research.image.altText,title:((l=t==null?void 0:t.research)==null?void 0:l.title)??r.research.title,body:((Q=t==null?void 0:t.research)==null?void 0:Q.text)??r.research.text,buttons:[((U=t==null?void 0:t.research)==null?void 0:U.button)??r.research.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{image:((W=(K=t==null?void 0:t.inclusion)==null?void 0:K.image)==null?void 0:W.url)??r.inclusion.image.url,imageAltText:((j=(Z=t==null?void 0:t.inclusion)==null?void 0:Z.image)==null?void 0:j.altText)??r.inclusion.image.altText,title:((G=t==null?void 0:t.inclusion)==null?void 0:G.title)??r.inclusion.title,body:((B=t==null?void 0:t.inclusion)==null?void 0:B.text)??r.inclusion.text,buttons:[((V=t==null?void 0:t.inclusion)==null?void 0:V.button)??r.inclusion.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{image:(($=(H=t==null?void 0:t.mentors)==null?void 0:H.image)==null?void 0:$.url)??r.mentors.image.url,imageAltText:((Ne=(M=t==null?void 0:t.mentors)==null?void 0:M.image)==null?void 0:Ne.altText)??r.mentors.image.altText,title:((Ce=t==null?void 0:t.mentors)==null?void 0:Ce.title)??r.mentors.title,body:((Te=t==null?void 0:t.mentors)==null?void 0:Te.text)??r.mentors.text,buttons:[((Me=t==null?void 0:t.mentors)==null?void 0:Me.button)??r.mentors.button]})}),e.jsx("div",{className:"mt-2 col-12 col-md-6 col-lg-4",children:e.jsx(q,{image:((Re=(Ie=t==null?void 0:t.honors)==null?void 0:Ie.image)==null?void 0:Re.url)??r.honors.image.url,imageAltText:((De=(ke=t==null?void 0:t.honors)==null?void 0:ke.image)==null?void 0:De.altText)??r.honors.image.altText,title:((Le=t==null?void 0:t.honors)==null?void 0:Le.title)??r.honors.title,body:((Ee=t==null?void 0:t.honors)==null?void 0:Ee.text)??r.honors.text,buttons:[((_e=t==null?void 0:t.honors)==null?void 0:_e.button)??r.honors.button]})})]})]})};Pe.propTypes=Nt;Pe.__docgenInfo={description:`@param {WhyChooseAsuProps} props
@returns {JSX.Element}`,methods:[],displayName:"WhyChooseAsu",props:{hide:{description:"",type:{name:"bool"},required:!1},sectionIntroText:{description:"",type:{name:"string"},required:!1},cards:{description:"",type:{name:"shape",value:{faculty:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},programs:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},research:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},inclusion:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},mentors:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},honors:{name:"custom",raw:"whyChooseAsuCardShape",required:!1}}},required:!1},defaultCards:{description:"",type:{name:"shape",value:{faculty:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},programs:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},research:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},inclusion:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},mentors:{name:"custom",raw:"whyChooseAsuCardShape",required:!1},honors:{name:"custom",raw:"whyChooseAsuCardShape",required:!1}}},required:!1}}};const Ae=({appPathFolder:a,dataSource:t,anchorMenu:r,hero:i,introContent:o,atAGlance:s,applicationRequirements:p,changeMajorRequirements:c,affordingCollege:g,flexibleDegreeOptions:b,careerOutlook:m,exampleCareers:d,globalOpportunity:u,attendOnline:f,programContactInfo:x,nextSteps:v,whyChooseAsu:y})=>{var B,V,H,$;const[{data:A,loading:T,error:J},Y]=Vt(),[l,Q]=R.useState(Ue({})),[U,K]=R.useState({accelerateData:[],concurrentData:[]}),W=Ht(t,oa),{defaultState:Z}=R.useContext($t),{detailPageDefault:j}=Z;R.useEffect(()=>{typeof window<"u"&&Xt({packageName:"app-degree-pages",component:"DetailPage",type:"NA",configuration:{dataSource:t}})},[]),R.useEffect(()=>{Y(W)},[W]),R.useEffect(()=>{if(A){const M=Ue(A);Q(M),M.hasConcurrentOrAccelerateDegrees()&&ma([M.getAccelerateDegrees(),M.getConcurrentDegrees()],K)}},[A]);const G=zt(r,l);return e.jsxs(e.Fragment,{children:[e.jsx(Yt,{}),J&&e.jsx(Qt,{message:Kt}),!(i!=null&&i.hide)&&e.jsx("section",{children:e.jsx(Ct,{image:(i==null?void 0:i.image)||j.hero.image,title:{...j.hero.title,text:l.getMajorDesc(),...i==null?void 0:i.title},contents:i==null?void 0:i.contents})}),!T&&Jt(G)&&e.jsx(Zt,{anchorMenu:G}),e.jsxs(ea,{as:"div","data-is-loading":T,className:"main-section",children:[T&&e.jsx(ta,{}),!T&&(A!=null&&A.error?e.jsx("section",{className:"container mt-4 mb-0",children:e.jsx(te,{content:aa,programNotFound:!0})}):e.jsxs("section",{className:"container mt-4 mb-0",children:[(o==null?void 0:o.breadcrumbs)&&e.jsx("div",{className:"row col-12",children:e.jsx(ra,{breadcrumbs:o.breadcrumbs,section:i?i.title.text:l.getMajorDesc()})}),e.jsxs("div",{className:"row flex-column-reverse flex-sm-row",children:[e.jsxs("div",{className:"col col-sm-12 col-md-7 col-lg-7",children:[e.jsxs("section",{className:"intro",children:[!l.isValidActiveProgram()&&e.jsx(he,{content:l.getAsuCustomText()}),!(o!=null&&o.hideMarketText)&&((o==null?void 0:o.contents)||l.getMarketText())&&e.jsx(qe,{contents:(o==null?void 0:o.contents)||[{text:l.getMarketText()}]}),!(o!=null&&o.hideProgramDesc)&&e.jsx(te,{content:l.getFullDescription(),stemOptText:l.getStemOptText()})]}),!(s!=null&&s.hide)&&e.jsx(ce,{offeredBy:(s==null?void 0:s.offeredBy)||{text:l.getCollegeDesc(),url:l.getCollegeUrl()},locations:(s==null?void 0:s.locations)||na(l),firstRequirementMathCourse:(s==null?void 0:s.firstRequirementMathCourse)||l.getMinMathReq(),mathIntensity:(s==null?void 0:s.mathIntensity)||l.getMathIntensity()}),!(o!=null&&o.hideRequiredCourses)&&!l.isMinorOrCertificate()&&e.jsx(Oe,{onlineMajorMapURL:l.getOnlineMajorMapURL(),majorMapOnCampusURL:l.getGeneralDegreeMajorMap(),subPlnMajorMaps:l.getSubPlnMajorMaps(),subPlns:l.getSubPln()}),!(p!=null&&p.hide)&&e.jsx(pe,{graduateRequirements:l.isGradProgram()?l.getGraduateRequirements():null,isMinorOrCertificate:l.isMinorOrCertificate(),minorRequirements:l.getMinorCourseRequirements(),additionalRequirements:l.getAdmissionsRequirementsText(),transferRequirements:l.getTransferAdmission()}),!(c!=null&&c.hide)&&!l.isMinorOrCertificate()&&!l.isGradProgram()&&e.jsx(de,{content:l.getChangeMajor()})]}),e.jsxs("div",{className:"col col-sm-12 col-md-5 col-lg-5",children:[(o==null?void 0:o.video)&&e.jsx(je,{type:o.video.type,url:o.video.url,vttUrl:o.video.vttUrl,title:o.video.title}),!(o!=null&&o.video)&&e.jsx(be,{url:((B=o==null?void 0:o.image)==null?void 0:B.url)||j.introContent.image.url,altText:((V=o==null?void 0:o.image)==null?void 0:V.altText)||j.introContent.image.altText})]})]}),e.jsxs("div",{className:"row",children:[!(v!=null&&v.hide)&&!l.isMinorOrCertificate()&&e.jsx(ve,{cards:v==null?void 0:v.cards,defaultCards:j.nextSteps.cards}),!(g!=null&&g.hide)&&e.jsx(Tt,{}),!(b!=null&&b.hide)&&l.hasConcurrentOrAccelerateDegrees()&&e.jsx(xe,{acceleratedLinks:Ge(U.accelerateData),concurrentLinks:Ge(U.concurrentData)}),!(m!=null&&m.hide)&&l.getAsuCareerOpportunity()&&e.jsx(ue,{image:(m==null?void 0:m.image)||j.careerOutlook.image,contents:[{text:l.getAsuCareerOpportunity()}]}),!(d!=null&&d.hide)&&l.hasCareerData()&&e.jsx(fe,{tableData:ca(l.getCareerData())}),l.getProfessionalLicensureText()&&e.jsx(Se,{content:l.getProfessionalLicensureText()}),!(u!=null&&u.hide)&&l.getGlobalExp()&&e.jsx(ye,{contents:[{text:l.getGlobalExp()}],image:(u==null?void 0:u.image)||j.globalOpportunity.image}),!(y!=null&&y.hide)&&e.jsx(Pe,{sectionIntroText:(y==null?void 0:y.sectionIntroText)||j.whyChooseAsu.sectionIntroText,cards:y==null?void 0:y.cards,defaultCards:j.whyChooseAsu.cards}),!(f!=null&&f.hide)&&l.isOnline()&&e.jsx(me,{learnMoreLink:l.getCurriculumUrl(),image:(f==null?void 0:f.image)||j.attendOnline.image})]}),!(x!=null&&x.hide)&&e.jsx("div",{className:"row",children:e.jsx("div",{className:"col col-sm-12 col-md-6 col-lg-6 ",children:e.jsx(we,{department:{text:l.getDepartmentName(),url:((H=x==null?void 0:x.department)==null?void 0:H.url)||l.getPlanUrl()},email:{text:l.getEmailAddress(),url:(($=x==null?void 0:x.email)==null?void 0:$.url)||l.getEmailAddress()},asuOfficeLoc:l.getAsuOfficeLoc(),phone:l.getPhone()})})})]}))]})]})};Ae.propTypes={appPathFolder:n.string,dataSource:sa,anchorMenu:n.shape(la),hero:n.shape(Ct.propTypes),introContent:n.shape({hideMarketText:n.bool,hideProgramDesc:n.bool,hideRequiredCourses:n.bool,breadcrumbs:oe.arrayOf(z),contents:oe.arrayOf(n.object),video:ia,image:X}),atAGlance:n.shape({hide:n.bool,offeredBy:z,locations:oe.arrayOf(z),firstRequirementMathCourse:n.string,mathIntensity:n.string,timeCommitment:n.string}),applicationRequirements:n.shape({hide:n.bool}),changeMajorRequirements:n.shape({hide:n.bool}),affordingCollege:n.shape({hide:n.bool}),flexibleDegreeOptions:n.shape({hide:n.bool}),careerOutlook:n.shape({hide:n.bool,image:X}),exampleCareers:n.shape({hide:n.bool}),globalOpportunity:n.shape({hide:n.bool,image:X}),attendOnline:n.shape({hide:n.bool,image:X}),programContactInfo:n.shape({hide:n.bool,department:n.string,email:n.string}),nextSteps:n.shape({hide:n.bool,cards:n.arrayOf(I)}),whyChooseAsu:n.shape(Nt)};const re=a=>e.jsx(Bt,{detailPageProps:a,children:e.jsx(Ae,{...a})});re.propTypes=Ae.propTypes;re.__docgenInfo={description:`@param {DetailPageProps} props
@returns {JSX.Element}`,methods:[],displayName:"AppComponent",props:{appPathFolder:{description:"",type:{name:"string"},required:!1},dataSource:{description:"",type:{name:"shape",value:{id:{name:"string",required:!1},sourceType:{name:"enum",value:[{value:'"api"',computed:!1},{value:'"shared-data-source"',computed:!1},{value:'"static-json"',computed:!1}],required:!1},sharedDataSourceId:{name:"string",required:!1},data:{name:"arrayOf",value:{name:"object"},required:!1},apiUrl:{name:"string",required:!1}}},required:!1},anchorMenu:{description:"",type:{name:"shape",value:{atAGlance:{name:"bool",required:!1},applicationRequirements:{name:"bool",required:!1},changeMajorRequirements:{name:"bool",required:!1},nextSteps:{name:"bool",required:!1},affordingCollege:{name:"bool",required:!1},flexibleDegreeOptions:{name:"bool",required:!1},careerOutlook:{name:"bool",required:!1},exampleCareers:{name:"bool",required:!1},customizeYourCollegeExperience:{name:"bool",required:!1},globalOpportunity:{name:"bool",required:!1},attendOnline:{name:"bool",required:!1},whyChooseAsu:{name:"bool",required:!1},programContactInfo:{name:"bool",required:!1},externalAnchors:{name:"arrayOf",value:{name:"shape",value:{targetIdName:{name:"string",required:!1},text:{name:"string",required:!1}}},required:!1}}},required:!1},hero:{description:"",type:{name:"shape",value:"Hero.propTypes",computed:!0},required:!1},introContent:{description:"",type:{name:"shape",value:{hideMarketText:{name:"bool",required:!1},hideProgramDesc:{name:"bool",required:!1},hideRequiredCourses:{name:"bool",required:!1},breadcrumbs:{name:"arrayOf",value:{name:"custom",raw:"linkPropShape"},required:!1},contents:{name:"arrayOf",value:{name:"object"},required:!1},video:{name:"custom",raw:"videoPropShape",required:!1},image:{name:"custom",raw:"imagePropShape",required:!1}}},required:!1},atAGlance:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},offeredBy:{name:"custom",raw:"linkPropShape",required:!1},locations:{name:"arrayOf",value:{name:"custom",raw:"linkPropShape"},required:!1},firstRequirementMathCourse:{name:"string",required:!1},mathIntensity:{name:"string",required:!1},timeCommitment:{name:"string",required:!1}}},required:!1},applicationRequirements:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},changeMajorRequirements:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},affordingCollege:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},flexibleDegreeOptions:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},careerOutlook:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},image:{name:"custom",raw:"imagePropShape",required:!1}}},required:!1},exampleCareers:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1}}},required:!1},globalOpportunity:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},image:{name:"custom",raw:"imagePropShape",required:!1}}},required:!1},attendOnline:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},image:{name:"custom",raw:"imagePropShape",required:!1}}},required:!1},programContactInfo:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},department:{name:"string",required:!1},email:{name:"string",required:!1}}},required:!1},nextSteps:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},cards:{name:"arrayOf",value:{name:"custom",raw:"cardPropShape"},required:!1}}},required:!1},whyChooseAsu:{description:"",type:{name:"shape",value:{hide:{name:"bool",required:!1},sectionIntroText:{name:"string",required:!1},cards:{name:"custom",raw:"whyChooseAsuCardsShape",required:!1},defaultCards:{name:"custom",raw:"whyChooseAsuCardsShape",required:!1}}},required:!1}}};const Da={component:re,title:"Program Detail Page",parameters:{docs:{description:{component:"@typedef {import('../../core/types/detail-page-types').DetailPageProps} AppProps"}}}},D=({appPathFolder:a,dataSource:t,anchorMenu:r,introContent:i,hero:o,atAGlance:s,applicationRequirements:p,changeMajorRequirements:c,affordingCollege:g,flexibleDegreeOptions:b,careerOutlook:m,exampleCareers:d,globalOpportunity:u,programContactInfo:f,attendOnline:x,nextSteps:v,whyChooseAsu:y})=>e.jsxs(e.Fragment,{children:[e.jsx(re,{appPathFolder:a,dataSource:t,anchorMenu:r,introContent:i,hero:o,atAGlance:s,applicationRequirements:p,changeMajorRequirements:c,affordingCollege:g,flexibleDegreeOptions:b,careerOutlook:m,exampleCareers:d,globalOpportunity:u,programContactInfo:f,attendOnline:x,nextSteps:v,whyChooseAsu:y}),e.jsx("section",{id:"my-request-form-info-id",className:"container mb-4",children:e.jsxs("div",{className:"row",children:[e.jsx("h4",{children:"This is a just a Place holder"}),e.jsx("img",{src:"./examples/assets/img/request-form-information.jpeg",alt:"",style:{opacity:"0.7",mixBlendMode:"luminosity",maxWidth:"100%",width:"100%"}})]})})]}),Ta=new URL(window.location.href).searchParams.get("acadPlan"),P={appPathFolder:".",dataSource:{acadPlan:Ta||"TBTGMBGM"},anchorMenu:{applicationRequirements:!0,nextSteps:!0,affordingCollege:!0,careerOutlook:!0,globalOpportunity:!0,externalAnchors:[{targetIdName:"my-request-form-info-id",text:"Request Information"}]},hero:{image:{url:"examples/assets/img/ds_header_undergrad.jpg",altText:"Undergraduate Degrees",size:"medium"},title:{text:"Undergraduate Degrees",highlightColor:"gold"}},introContent:{breadcrumbs:[{text:"Academic programs",url:"#"},{text:"Undergraduate degrees",url:`${We()}index.html?path=/story/program-listing-page--default`},{text:"Degree title",url:`${We()}index.html?path=/story/program-detail-page--with-content`,isActive:!0}],image:{url:"https://source.unsplash.com/random/1200x750?college",altText:"Random image. REPLACE with appropriate alt text for accessibility."}},atAGlance:{offeredBy:{text:"Herberger Instite for Design and the Arts",url:"#"},locations:[{text:"Tempe campus",url:"#"},{text:"West Valley campus",url:"#"},{text:"Online",url:"#"},{text:"ASU Local@Los Angeles",url:"#"}],firstRequirementMathCourse:"MAT 142 - College Mathematics",mathIntensity:"General",timeCommitment:"120 credit hours(about 4 years)"},nextSteps:{cards:{learnMore:{icon:["fas","info-circle"],title:"Learn more about our programs",content:"Tell us what type of student you are and we'll get you the information you need.",buttonLink:{label:"Request information",ariaLabel:"Request information",color:"maroon",href:"https://admission.asu.edu/contact/request-info"}},apply:{icon:["fas","file-alt"],title:"Apply to program",content:"Arizona State University invites freshman, transfer, international, graduate and online students to apply for admission using our online application.",buttonLink:{label:"Apply now",ariaLabel:"Apply now",color:"maroon",href:"https://admission.asu.edu/apply"}},visit:{icon:["fas","map-marker-alt"],title:"Visit our campus",content:"An Experience ASU visit includes a presentation on admissions, scholarships and financial aid, student housing, getting involved on campus and much more.You will also go on a student-led walking tour of campus.",buttonLink:{label:"Schedule a visit",ariaLabel:"Schedule a visit",color:"maroon",href:"https://visit.asu.edu/"}}}},careerOutlook:{image:{url:"https://source.unsplash.com/random/1200x750?career",altText:"Random image. REPLACE with appropriate alt text for accessibility."}},globalOpportunity:{image:{url:"https://source.unsplash.com/random/1200x750?job",altText:"Random image. REPLACE with appropriate alt text for accessibility."}},whyChooseAsu:{hide:!1,sectionIntroText:"CUSTOM INTRO TEXT. ASU offers students excellent academics and unique opportunities to customize your college experience and give you an edge, including undergraduate research, internships, access to state-of-the-art facilities, and opportunities to work with world-class faculty and scientists.",cards:{faculty:{image:{url:"https://source.unsplash.com/random/600x600?career",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"World-class faculty",text:"The ASU faculty is at the forefront nationally in advancing research and discovery. Our faculty members inspire new ways of thinking, innovating and solving problems socially, culturally and economically in our region and in the international community.",button:{label:"Faculty excellence",color:"maroon",href:"https://www.asu.edu/academics/faculty-excellence"}},programs:{image:{url:"https://source.unsplash.com/random/600x600?job",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"Highly ranked programs",text:"A leading service ranking the excellence and innovation of the nation’s top universities, U.S. News & World Report rates many ASU programs among the top 25 in the country, including more than thirty programs ranked in the nation's top 10.",button:{label:"ASU rankings",color:"maroon",href:"https://www.asu.edu/rankings"}},research:{image:{url:"https://source.unsplash.com/random/600x600?person",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"Research opportunities",text:"Students have the opportunity to work with mentors who are experts in their fields and establish professional connections that may last a lifetime. Engage in meaningful research and gain experience that may make you more competitive in the job market.",button:{label:"Research opportunities",color:"maroon",href:"https://provost.asu.edu/uresearch"}},inclusion:{image:{url:"https://source.unsplash.com/random/600x600?online",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"An inclusive environment",text:"ASU defines our success not by whom we exclude, but by whom we include and how our students succeed. Our educational programs are designed to broaden access to a quality education and support our students’ success.",button:{label:"ASU Charter",color:"maroon",href:"https://www.asu.edu/about/charter-mission"}},mentors:{image:{url:"https://source.unsplash.com/random/600x600?classroom",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"Mentor network",text:"Students have access to a powerful online network of diverse mentors. Engaging with the ASU Mentor Network can help to build connections with professionals, both locally and globally, who share career advice, networks, and their own success stories.",button:{label:"ASU Mentor network",color:"maroon",href:"https://mentorship.asu.edu"}},honors:{image:{url:"https://source.unsplash.com/random/600x600?school",altText:"Random image. REPLACE with appropriate alt text for accessibility."},title:"Global education",text:"ASU offers more than 300 Global Education programs in over 65 different countries. Whether you are interested in studying abroad, internships, research or service learning, there's a program for you!",button:{label:"Explore",color:"maroon",href:"https://goglobal.asu.edu"}}}},attendOnline:{image:{url:"https://source.unsplash.com/random/1200x750?classroom,online",altText:"Random image. REPLACE with appropriate alt text for accessibility."}},programContactInfo:{department:{text:"",url:"#"},email:{text:"",url:"#"}}},L=D.bind({});L.args={...P,hero:null,anchorMenu:null,introContent:null,atAGlance:null,applicationRequirements:null,changeMajorRequirements:null,nextSteps:null,affordingCollege:null,flexibleDegreeOptions:null,careerOutlook:null,exampleCareers:null,globalOpportunity:null,attendOnline:null,programContactInfo:null,whyChooseAsu:null};const E=D.bind({});E.args={...P,dataSource:{...P.dataSource,acadPlan:"LAAUDAUDD"}};const _=D.bind({});_.args={...P,dataSource:{...P.dataSource,acadPlan:"FAARTHBA"}};const F=D.bind({});F.args={...P,dataSource:{...P.dataSource,acadPlan:"BABUSCLBA"}};const w=D.bind({});w.args={...P};w.args.dataSource={...w.args.dataSource,acadPlan:"LSBISBIS"};w.args.introContent={...w.args.introContent,image:void 0,video:{url:"./examples/assets/video/stock-video-person-drawing.mp4",title:"",vttUrl:""}};const O=D.bind({});O.args={...P};O.args.dataSource={...O.args.dataSource,acadPlan:"LSBISBIS"};O.args.introContent={...O.args.introContent,image:void 0,video:{type:"youtube",url:"https://www.youtube.com/watch?v=aA2DCIDNxmw&list=PLuoS9aQM7Lzurd5ezsuCIlxyag7q_c-NQ"}};const C=D.bind({});C.args={...P};C.args.dataSource={...C.args.dataSource,acadPlan:"ASAPSSCERT"};var Ve,He,$e,Xe,ze;L.parameters={...L.parameters,docs:{...(Ve=L.parameters)==null?void 0:Ve.docs,source:{originalSource:`({
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
  </>`,...($e=(He=L.parameters)==null?void 0:He.docs)==null?void 0:$e.source},description:{story:"@type {{ args: AppProps }}",...(ze=(Xe=L.parameters)==null?void 0:Xe.docs)==null?void 0:ze.description}}};var Je,Ye,Qe,Ke,Ze;E.parameters={...E.parameters,docs:{...(Je=E.parameters)==null?void 0:Je.docs,source:{originalSource:`({
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
  </>`,...(Qe=(Ye=E.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source},description:{story:"@type {{ args: AppProps }}",...(Ze=(Ke=E.parameters)==null?void 0:Ke.docs)==null?void 0:Ze.description}}};var et,tt,at,rt,nt;_.parameters={..._.parameters,docs:{...(et=_.parameters)==null?void 0:et.docs,source:{originalSource:`({
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
  </>`,...(at=(tt=_.parameters)==null?void 0:tt.docs)==null?void 0:at.source},description:{story:"@type {{ args: AppProps }}",...(nt=(rt=_.parameters)==null?void 0:rt.docs)==null?void 0:nt.description}}};var ot,st,it,lt,pt;F.parameters={...F.parameters,docs:{...(ot=F.parameters)==null?void 0:ot.docs,source:{originalSource:`({
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
  </>`,...(it=(st=F.parameters)==null?void 0:st.docs)==null?void 0:it.source},description:{story:"@type {{ args: AppProps }}",...(pt=(lt=F.parameters)==null?void 0:lt.docs)==null?void 0:pt.description}}};var ct,mt,ut,dt,ht;w.parameters={...w.parameters,docs:{...(ct=w.parameters)==null?void 0:ct.docs,source:{originalSource:`({
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
  </>`,...(ut=(mt=w.parameters)==null?void 0:mt.docs)==null?void 0:ut.source},description:{story:"@type {{ args: AppProps }}",...(ht=(dt=w.parameters)==null?void 0:dt.docs)==null?void 0:ht.description}}};var gt,ft,xt,yt,bt;O.parameters={...O.parameters,docs:{...(gt=O.parameters)==null?void 0:gt.docs,source:{originalSource:`({
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
  </>`,...(xt=(ft=O.parameters)==null?void 0:ft.docs)==null?void 0:xt.source},description:{story:"@type {{ args: AppProps }}",...(bt=(yt=O.parameters)==null?void 0:yt.docs)==null?void 0:bt.description}}};var jt,qt,vt,St,wt;C.parameters={...C.parameters,docs:{...(jt=C.parameters)==null?void 0:jt.docs,source:{originalSource:`({
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
  </>`,...(vt=(qt=C.parameters)==null?void 0:qt.docs)==null?void 0:vt.source},description:{story:"@type {{ args: AppProps }}",...(wt=(St=C.parameters)==null?void 0:St.docs)==null?void 0:wt.description}}};const La=["Default","DefaultWithGraduateDegree","WithContent","WithNotAcceptNewStudents","WithVideoAndMarketText","WithYoutubeVideo","WithNoGlobalOpportunity"];export{L as Default,E as DefaultWithGraduateDegree,_ as WithContent,C as WithNoGlobalOpportunity,F as WithNotAcceptNewStudents,w as WithVideoAndMarketText,O as WithYoutubeVideo,La as __namedExportsOrder,Da as default};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
