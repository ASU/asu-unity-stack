import{r as o,j as e,u as ee}from"./iframe-B2MNqyLI.js";import{A as f,e as n,S as se,v as T,h as te,V as I,a as _}from"./sort-gdIR3KgG.js";import{g as P,P as s,F as re}from"./styled-components.browser.esm-nQY76WcU.js";import{s as ae}from"./index-c--hRYRQ.js";import{Q as ne}from"./index-B70kNEup.js";import"./preload-helper-Dp1pzeXC.js";import"./dataConverter-DEoZKpVQ.js";const oe=P.div`
  // Google Programmable Search styles
  .gsc-control-cse {
    font-size: 1rem;
    .gsc-table-result {
      font-size: 1rem;
    }
    .gs-spelling,
    .gs-result .gs-title,
    .gs-result .gs-title * {
      font-size: 1.5rem;
    }
    .gsc-webResult.gsc-result {
      padding: 0;
      margin-bottom: 3rem;
    }
    .gsc-thumbnail-inside {
      padding: 0;
    }
    &.gsc-control-cse-en {
      padding: 0;
    }
    .gsc-orderby-container {
      word-break: normal;
    }
    .gsc-result-info {
      font-size: 1rem;
      color: #000;
    }
    .gsc-above-wrapper-area {
      border: none;
    }
    .gs-promotion-table {
      padding: 2rem;
    }
    .gs-promotion-text-cell .gs-visibleUrl,
    .gs-promotion-text-cell .gs-snippet {
      font-size: 1rem;
    }
    // Pager
    .gsc-resultsbox-visible .gsc-results .gsc-cursor-box .gsc-cursor-page {
      font-weight: bold;
      color: #000;
      background-color: transparent;
      padding: 0.5rem 0.75rem;
      line-height: 1rem;
      margin-right: 1rem;
    }
    .gsc-resultsbox-visible
      .gsc-results
      .gsc-cursor-box
      .gsc-cursor-page:hover {
      background-color: #e8e8e8;
      color: #000;
      padding: 0.5rem 0.75rem;
      line-height: 1rem;
      border-radius: 400px;
      margin-right: 1rem;
      text-decoration: none;
    }
    .gsc-resultsbox-visible
      .gsc-results
      .gsc-cursor-box
      .gsc-cursor-page.gsc-cursor-current-page {
      background-color: #8c1d40;
      color: #fff;
      padding: 0.5rem 0.75rem;
      line-height: 1rem;
      border-radius: 400px;
      margin-right: 1rem;
    }
  }
  // End Google Programmable Search styles
  .results-title {
    font-size: 40px;
    font-weight: bold;
    max-width: 100%;
    @media (max-width: 576px) {
      // mobile breakpoint mapped to $uds-breakpoint-sm
      display: none;
    }
  }

  display: flex;
  flex-direction: column;
  .all-message {
    margin-bottom: 88px;

    @media (max-width: 768px) {
      margin-bottom: 12px;
    }
  }
  .all-content {
    display: grid;
    grid-template-columns: minmax(0, 700px) 1fr;
    column-gap: 126px;
    @media screen and (max-width: 1280px) {
      grid-template-columns: minmax(0, 500px) 1fr;
    }
    @media screen and (max-width: 1012px) {
      grid-template-columns: 1fr;
    }

    .all-content-column {
      display: flex;
      flex-direction: column;
      min-width: 0;

      .all-content-item {
        margin-bottom: 72px;
      }
      .top-results {
        .uds-results-card {
          margin-bottom: 32px;
        }
      }
    }
  }
`,ie=P.div`
  display: flex;
  flex-direction: column;
`,le=P.div`
  display: grid;
  grid-template-columns: 792px auto;
  grid-template-areas: "results sort";
  .faculty-sort {
    grid-area: sort;
  }
  .faculty-results {
    grid-area: results;
  }
  @media (max-width: 1268px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(1, auto);
    grid-row-gap: 40px;
    grid-template-areas:
      "sort"
      "results";
  }
`,ce=P.div`
  display: flex;
  flex-direction: column;
`,E=({term:a,engines:i,site:t,goToTab:c,setTotalResults:m,totalResults:O,loggedIn:u})=>{const[L,v]=o.useState(null),[d,V]=o.useState(null),g={sites:"web_sites",faculty:"web_dir_faculty_staff",students:"web_dir_students"},x=b=>{m(l=>l+b)};return o.useEffect(()=>()=>m(0),[]),o.useEffect(()=>{const b="007921449323584335659:7htbgpmmreu",l=document.createElement("script");l.type="text/javascript",l.async=!0,l.src=`https://cse.google.com/cse.js?cx=${b}`;const h=document.getElementsByTagName("script")[0];h.parentNode.insertBefore(l,h)}),e.jsxs(oe,{children:[e.jsx("div",{className:"all-message"}),e.jsxs("div",{className:"all-content",children:[e.jsxs("div",{className:"all-content-column",children:[(d||L)&&e.jsxs("div",{className:"top-results all-content-item",children:[e.jsx("div",{children:d}),e.jsx("div",{children:L})]}),t&&e.jsx("div",{className:"subdomain-results all-content-item",children:e.jsx(f,{engine:i[n.SITES_LOCAL],term:a,type:"preview",itemsPerPage:3,titleText:`All results from ${t}`,seeAllResultsText:`See all results from ${t}`,onExpandClick:()=>c(g.sites),GASource:`all results from ${t}`,hidePaginator:!0,registerResults:x,localSection:!0,loggedIn:u,restClientTag:"asuis"})}),e.jsx("div",{className:"all-results all-content-item",children:a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"results-title",children:"All asu.edu results"}),e.jsx("div",{className:"gcse-searchresults-only"})]})})]}),e.jsxs("div",{className:"all-content-column",children:[e.jsx("div",{className:"faculty-and-staff all-content-item",children:e.jsx(f,{engine:i[n.FACULTY],term:a,itemsPerPage:3,titleText:"Faculty and staff",type:"micro",seeAllResultsText:"See all results",onExpandClick:()=>c(g.faculty),GASource:"faculty and staff",setPromotedResult:v,hidePaginator:!0,registerResults:x,restClientTag:"asuis"})}),e.jsx("div",{className:"students all-content-item",children:e.jsx(f,{engine:i[n.STUDENTS],term:a,itemsPerPage:3,titleText:"Students",type:"micro",seeAllResultsText:"See all results",onExpandClick:()=>c(g.students),GASource:"students",hidePaginator:!0,registerResults:x,icon:["fa","lock"],restClientTag:"asuis"})}),e.jsx("div",{className:"quick-links all-content-item",children:e.jsx(ne,{})})]})]})]},document.location.href)};E.propTypes={term:s.string,engines:s.object,site:s.string,goToTab:s.func,setTotalResults:s.func,totalResults:s.number,loggedIn:s.bool};E.__docgenInfo={description:`React component for displaying search results on the main tab.

@param {Object} props - The props for configuring the AllTab component.
@param {string} props.term - The search term.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.site - The selected site for filtering results.
@param {function} props.goToTab - Function to switch between tabs.
@param {function} props.setTotalResults - Function to set the total number of results.
@param {number} props.totalResults - The total number of search results.
@param {boolean} props.loggedIn - Indicates if the user is logged in.
@returns {JSX.Element} The AllTab component.`,methods:[],displayName:"AllTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},site:{description:"",type:{name:"string"},required:!1},goToTab:{description:"",type:{name:"func"},required:!1},setTotalResults:{description:"",type:{name:"func"},required:!1},totalResults:{description:"",type:{name:"number"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};const k=({engines:a,term:i,sort:t,onSortChange:c})=>e.jsxs(le,{children:[e.jsx("div",{className:"faculty-sort",children:e.jsx(se,{sort:t,onChange:m=>c(m)})}),e.jsx("div",{className:"faculty-results",children:e.jsx(f,{term:i,engine:a[n.FACULTY],itemsPerPage:6,type:"full",sort:t,GASource:"all faculty and staff results",titleText:"All faculty and staff results",showSearchMessage:!0,restClientTag:"asuis"})})]});k.propTypes={term:s.string,engines:s.object,sort:s.string,onSortChange:s.func};k.__docgenInfo={description:`React component for displaying search results on the "Faculty and Staff" tab.

@param {Object} props - The props for configuring the FacultyTab component.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.term - The search term.
@param {string} props.sort - The current sort option.
@param {function} props.onSortChange - Function to handle sort option change.
@returns {JSX.Element} The FacultyTab component.`,methods:[],displayName:"FacultyTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},sort:{description:"",type:{name:"string"},required:!1},onSortChange:{description:"",type:{name:"func"},required:!1}}};const C=({engines:a,term:i,site:t,loggedIn:c})=>e.jsx(ie,{children:e.jsx(f,{engine:a[n.SITES_LOCAL],term:i,itemsPerPage:6,type:"full",GASource:t,titleText:t,loggedIn:c})});C.propTypes={term:s.string,engines:s.object,site:s.string,loggedIn:s.bool};C.__docgenInfo={description:`React component for displaying search results on a local tab based on the url_host param.

@param {Object} props - The props for configuring the LocalTab component.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.term - The search term.
@param {string} props.site - The specific site to display results for.
@param {boolean} props.loggedIn - Indicates whether the user is logged in.
@returns {JSX.Element} The LocalTab component.`,methods:[],displayName:"LocalTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},site:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};const F=({engines:a,term:i,loggedIn:t})=>e.jsx(ce,{children:e.jsx(f,{term:i,engine:a[n.STUDENTS],itemsPerPage:6,type:"full",GASource:"all student results",titleText:"All Student results",loggedIn:t,showSearchMessage:!0,restClientTag:"asuis"})});F.propTypes={term:s.string,engines:s.object,loggedIn:s.bool};F.__docgenInfo={description:`React component for displaying search results on the Students tab.

@param {Object} props - The props for configuring the StudentsTab component.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.term - The search term.
@param {boolean} props.loggedIn - Indicates whether the user is logged in.
@returns {JSX.Element} The StudentsTab component.`,methods:[],displayName:"StudentsTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};const S={all:"all",sites:"web_sites",faculty:"web_dir_faculty_staff",students:"web_dir_students"},pe=P.div`
  max-width: 1200px;
  min-height: 80vh;
  margin: 0 auto;
  margin-top: 72px;
  h1 {
    margin-left: 12px;
  }

  .options-area {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 70px;
    .search-page-form-wrapper {
      width: 50%;
    }
    form {
      .form-group {
        display: flex;
        margin-bottom: 0;
        input {
          margin-right: 16px;
          margin-bottom: 0;
        }
        .desktop-button {
          display: inline;
        }
        .mobile-button {
          display: none;
        }
      }
    }
    .profile-options {
      display: flex;
      flex-direction: row;
      .desktop-button {
        display: inline;
        &:not(:nth-last-child(2)) {
          margin-right: 24px;
        }
      }
      .mobile-button {
        display: none;
        &:not(:last-child) {
          margin-bottom: 24px;
        }
      }
    }
  }

  .message {
    grid-area: message;
    margin-bottom: 56px;
  }

  @media (max-width: 1268px) {
    .options-area {
      flex-direction: column;
      .search-page-form-wrapper {
        width: 100%;
      }
      form {
        margin-bottom: 24px;
        max-width: 100%;

        .form-group {
          flex-direction: column;

          input {
            margin-right: 0;
            margin-bottom: 24px;
          }
          .desktop-button {
            display: none;
          }
          .mobile-button {
            display: inline;
          }
        }
      }
      .profile-options {
        display: flex;
        flex-direction: column;
        a:not(:last-child) {
          margin-bottom: 16px;
        }
        .desktop-button {
          display: none;
        }
        .mobile-button {
          display: inline;
        }
      }
    }
  }
`;function U({API_URL:a,searchApiVersion:i,loggedIn:t,deptAdmin:c,profileURLBase:m,appPathFolder:O}){const u="search-tabs",v="url_host",[d,V]=o.useState(""),[g,x]=o.useState(""),[b,l]=o.useState(0),[h,z]=o.useState(""),[p,Y]=ee({[u]:S.all}),[K]=o.useState({}),[y,Q]=o.useState(null),R=o.useRef(null),A={filters:K,API_URL:a,searchApiVersion:i,profileURLBase:m||"https://search.asu.edu",appPathFolder:O},N={[n.FACULTY]:{..._[n.FACULTY],...A},[n.STUDENTS]:{..._[n.STUDENTS],...A},[n.SITES_LOCAL]:{..._[n.SITES_LOCAL],...A,site:y},[n.SITES]:{..._[n.SITES],...A}},D=(r,Z)=>{const q={};for(const J of p.entries())q[J[0]]=J[1];q[r]=Z,Y(q)},G=()=>{h.length>0&&(l(0),D("q",h))},W=r=>{x(r)};o.useEffect(()=>{p.get(v)&&Q(p.get(v)),p.get("q")&&(V(p.get("q")),z(p.get("q")))},[p,g]),o.useEffect(()=>{R.current&&R.current.focus()},[]);const B=r=>{D(u,r),l(0)},H=r=>{r.keyCode===13&&(r.preventDefault(),G())},w=r=>d?r:ae[p.get(u)];return e.jsxs(pe,{children:[e.jsx("h1",{children:e.jsx("span",{className:"highlight-gold",children:"Search"})}),e.jsxs("div",{className:"options-area",children:[e.jsx("search",{className:"search-page-form-wrapper",children:e.jsx("form",{className:"uds-form",children:e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"text",className:"form-control",id:"search-input",placeholder:"Search asu.edu",value:h,onChange:r=>z(r.target.value),onKeyDown:H,ref:R}),e.jsx(T,{color:"maroon",icon:["fas","search"],label:"Search",onClick:()=>G()})]})})}),e.jsxs("div",{className:"profile-options",children:[e.jsx("div",{className:"desktop-button",children:e.jsx(T,{color:"gray",icon:["fas","lock"],label:"Edit my profile",href:"/profile-edit"})}),e.jsx("div",{className:"mobile-button",children:e.jsx(T,{color:"gray",icon:["fas","lock"],label:"Edit my profile",href:"/profile-edit",size:"small"})}),t&&c&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"desktop-button",children:e.jsx(T,{color:"gray",icon:["fas","lock"],label:"Department admin",href:"/groups"})}),e.jsx("div",{className:"mobile-button",children:e.jsx(T,{color:"gray",icon:["fas","lock"],label:"Department admin",href:"/groups",size:"small"})})]})]})]}),e.jsxs(te,{initialTab:p.get(u),onTabChange:r=>B(r),children:[e.jsx(I,{id:S.all,title:"All ASU Search",children:w(e.jsx(E,{totalResults:b,setTotalResults:l,engines:N,site:y,goToTab:B,term:d,loggedIn:t}))}),y&&e.jsx(I,{id:S.sites,title:y,children:w(e.jsx(C,{loggedIn:t,engines:N,site:y,term:d}))}),e.jsx(I,{id:S.faculty,title:"Faculty and Staff",children:w(e.jsx(k,{engines:N,term:d,sort:g,onSortChange:r=>W(r)}))}),e.jsx(I,{id:S.students,icon:["fa","lock"],title:"Students",children:w(e.jsx(F,{loggedIn:t,engines:N,term:d}))})]})]})}U.propTypes={API_URL:s.string,searchApiVersion:s.string,loggedIn:s.bool,deptAdmin:s.bool,profileURLBase:s.string,appPathFolder:s.string};U.__docgenInfo={description:`React component for the ASU search page.

@param {Object} props - The props for configuring the search page.
@param {string} props.API_URL - The API URL for the search functionality.
@param {string} props.searchApiVersion - The version of the search API.
@param {boolean} props.loggedIn - Indicates whether the user is logged in.
@param {boolean} props.deptAdmin - Indicates whether the user is a department admin.
@param {string} props.profileURLBase - The base URL for user profiles.
@param {string} props.appPathFolder - The folder path for the application.
@returns {JSX.Element} The SearchPage component.`,methods:[],displayName:"SearchPage",props:{API_URL:{description:"",type:{name:"string"},required:!1},searchApiVersion:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1},deptAdmin:{description:"",type:{name:"bool"},required:!1},profileURLBase:{description:"",type:{name:"string"},required:!1},appPathFolder:{description:"",type:{name:"string"},required:!1}}};const be={title:"Organisms/Search Page/Templates",decorators:[a=>e.jsx(re,{children:a()})]},j=()=>e.jsx("div",{className:"uds-content-align",children:e.jsx(U,{API_URL:"https://asuapp2dev.prod.acquia-sites.com",searchApiVersion:"/api/v1/",loggedIn:!1})});j.__docgenInfo={description:"",methods:[],displayName:"searchPageExample"};var X,$,M;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => <div className="uds-content-align">
    <SearchPage API_URL="https://asuapp2dev.prod.acquia-sites.com" searchApiVersion="/api/v1/" loggedIn={false}
  // appPathFolder="/my/custom/path/to/component/root/example"
  />
  </div>`,...(M=($=j.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const ye=["searchPageExample"];export{ye as __namedExportsOrder,be as default,j as searchPageExample};
