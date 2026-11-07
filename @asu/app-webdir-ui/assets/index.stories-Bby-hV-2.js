import{r as o,j as e,u as Q}from"./iframe-DzOrHZhe.js";import{A as f,e as n,S as Z,R as T,Z as W,p as w,a as R}from"./sort-smhyfypv.js";import{g as j,P as t,F as H}from"./styled-components.browser.esm-BBosuiPa.js";import{s as ee}from"./index-BU3s9tkY.js";import{Q as te}from"./index-BQCxXkm-.js";import"./preload-helper-Dp1pzeXC.js";import"./dataConverter-DV1GjXwA.js";const se=j.div`
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
`,re=j.div`
  display: flex;
  flex-direction: column;
`,ae=j.div`
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
`,ne=j.div`
  display: flex;
  flex-direction: column;
`,E=({term:a,engines:i,site:s,goToTab:c,setTotalResults:m,totalResults:U,loggedIn:u})=>{const[_,P]=o.useState(null),[d,O]=o.useState(null),g={sites:"web_sites",faculty:"web_dir_faculty_staff",students:"web_dir_students"},x=b=>{m(l=>l+b)};return o.useEffect(()=>()=>m(0),[]),o.useEffect(()=>{const b="007921449323584335659:7htbgpmmreu",l=document.createElement("script");l.type="text/javascript",l.async=!0,l.src=`https://cse.google.com/cse.js?cx=${b}`;const h=document.getElementsByTagName("script")[0];h.parentNode.insertBefore(l,h)}),e.jsxs(se,{children:[e.jsx("div",{className:"all-message"}),e.jsxs("div",{className:"all-content",children:[e.jsxs("div",{className:"all-content-column",children:[(d||_)&&e.jsxs("div",{className:"top-results all-content-item",children:[e.jsx("div",{children:d}),e.jsx("div",{children:_})]}),s&&e.jsx("div",{className:"subdomain-results all-content-item",children:e.jsx(f,{engine:i[n.SITES_LOCAL],term:a,type:"preview",itemsPerPage:3,titleText:`All results from ${s}`,seeAllResultsText:`See all results from ${s}`,onExpandClick:()=>c(g.sites),GASource:`all results from ${s}`,hidePaginator:!0,registerResults:x,localSection:!0,loggedIn:u,restClientTag:"asuis"})}),e.jsx("div",{className:"all-results all-content-item",children:a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"results-title",children:"All asu.edu results"}),e.jsx("div",{className:"gcse-searchresults-only"})]})})]}),e.jsxs("div",{className:"all-content-column",children:[e.jsx("div",{className:"faculty-and-staff all-content-item",children:e.jsx(f,{engine:i[n.FACULTY],term:a,itemsPerPage:3,titleText:"Faculty and staff",type:"micro",seeAllResultsText:"See all results",onExpandClick:()=>c(g.faculty),GASource:"faculty and staff",setPromotedResult:P,hidePaginator:!0,registerResults:x,restClientTag:"asuis"})}),e.jsx("div",{className:"students all-content-item",children:e.jsx(f,{engine:i[n.STUDENTS],term:a,itemsPerPage:3,titleText:"Students",type:"micro",seeAllResultsText:"See all results",onExpandClick:()=>c(g.students),GASource:"students",hidePaginator:!0,registerResults:x,icon:["fa","lock"],restClientTag:"asuis"})}),e.jsx("div",{className:"quick-links all-content-item",children:e.jsx(te,{})})]})]})]},document.location.href)};E.propTypes={term:t.string,engines:t.object,site:t.string,goToTab:t.func,setTotalResults:t.func,totalResults:t.number,loggedIn:t.bool};E.__docgenInfo={description:`React component for displaying search results on the main tab.

@param {Object} props - The props for configuring the AllTab component.
@param {string} props.term - The search term.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.site - The selected site for filtering results.
@param {function} props.goToTab - Function to switch between tabs.
@param {function} props.setTotalResults - Function to set the total number of results.
@param {number} props.totalResults - The total number of search results.
@param {boolean} props.loggedIn - Indicates if the user is logged in.
@returns {JSX.Element} The AllTab component.`,methods:[],displayName:"AllTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},site:{description:"",type:{name:"string"},required:!1},goToTab:{description:"",type:{name:"func"},required:!1},setTotalResults:{description:"",type:{name:"func"},required:!1},totalResults:{description:"",type:{name:"number"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};const q=({engines:a,term:i,sort:s,onSortChange:c})=>e.jsxs(ae,{children:[e.jsx("div",{className:"faculty-sort",children:e.jsx(Z,{sort:s,onChange:m=>c(m)})}),e.jsx("div",{className:"faculty-results",children:e.jsx(f,{term:i,engine:a[n.FACULTY],itemsPerPage:6,type:"full",sort:s,GASource:"all faculty and staff results",titleText:"All faculty and staff results",showSearchMessage:!0,restClientTag:"asuis"})})]});q.propTypes={term:t.string,engines:t.object,sort:t.string,onSortChange:t.func};q.__docgenInfo={description:`React component for displaying search results on the "Faculty and Staff" tab.

@param {Object} props - The props for configuring the FacultyTab component.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.term - The search term.
@param {string} props.sort - The current sort option.
@param {function} props.onSortChange - Function to handle sort option change.
@returns {JSX.Element} The FacultyTab component.`,methods:[],displayName:"FacultyTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},sort:{description:"",type:{name:"string"},required:!1},onSortChange:{description:"",type:{name:"func"},required:!1}}};const k=({engines:a,term:i,site:s,loggedIn:c})=>e.jsx(re,{children:e.jsx(f,{engine:a[n.SITES_LOCAL],term:i,itemsPerPage:6,type:"full",GASource:s,titleText:s,loggedIn:c})});k.propTypes={term:t.string,engines:t.object,site:t.string,loggedIn:t.bool};k.__docgenInfo={description:`React component for displaying search results on a local tab based on the url_host param.

@param {Object} props - The props for configuring the LocalTab component.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.term - The search term.
@param {string} props.site - The specific site to display results for.
@param {boolean} props.loggedIn - Indicates whether the user is logged in.
@returns {JSX.Element} The LocalTab component.`,methods:[],displayName:"LocalTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},site:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};const C=({engines:a,term:i,loggedIn:s})=>e.jsx(ne,{children:e.jsx(f,{term:i,engine:a[n.STUDENTS],itemsPerPage:6,type:"full",GASource:"all student results",titleText:"All Student results",loggedIn:s,showSearchMessage:!0,restClientTag:"asuis"})});C.propTypes={term:t.string,engines:t.object,loggedIn:t.bool};C.__docgenInfo={description:`React component for displaying search results on the Students tab.

@param {Object} props - The props for configuring the StudentsTab component.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.term - The search term.
@param {boolean} props.loggedIn - Indicates whether the user is logged in.
@returns {JSX.Element} The StudentsTab component.`,methods:[],displayName:"StudentsTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};const S={all:"all",sites:"web_sites",faculty:"web_dir_faculty_staff",students:"web_dir_students"},oe=j.div`
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
`;function F({API_URL:a,searchApiVersion:i,loggedIn:s,deptAdmin:c,profileURLBase:m,appPathFolder:U}){const u="search-tabs",P="url_host",[d,O]=o.useState(""),[g,x]=o.useState(""),[b,l]=o.useState(0),[h,z]=o.useState(""),[p,J]=Q({[u]:S.all}),[X]=o.useState({}),[y,$]=o.useState(null),I=o.useRef(null),A={filters:X,API_URL:a,searchApiVersion:i,profileURLBase:m||"https://search.asu.edu",appPathFolder:U},N={[n.FACULTY]:{...R[n.FACULTY],...A},[n.STUDENTS]:{...R[n.STUDENTS],...A},[n.SITES_LOCAL]:{...R[n.SITES_LOCAL],...A,site:y},[n.SITES]:{...R[n.SITES],...A}},D=(r,K)=>{const L={};for(const V of p.entries())L[V[0]]=V[1];L[r]=K,J(L)},G=()=>{h.length>0&&(l(0),D("q",h))},M=r=>{x(r)};o.useEffect(()=>{p.get(P)&&$(p.get(P)),p.get("q")&&(O(p.get("q")),z(p.get("q")))},[p,g]),o.useEffect(()=>{I.current&&I.current.focus()},[]);const B=r=>{D(u,r),l(0)},Y=r=>{r.keyCode===13&&(r.preventDefault(),G())},v=r=>d?r:ee[p.get(u)];return e.jsxs(oe,{children:[e.jsx("h1",{children:e.jsx("span",{className:"highlight-gold",children:"Search"})}),e.jsxs("div",{className:"options-area",children:[e.jsx("search",{className:"search-page-form-wrapper",children:e.jsx("form",{className:"uds-form",children:e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"text",className:"form-control",id:"search-input",placeholder:"Search asu.edu",value:h,onChange:r=>z(r.target.value),onKeyDown:Y,ref:I}),e.jsx(T,{color:"maroon",icon:["fas","search"],label:"Search",onClick:()=>G()})]})})}),e.jsxs("div",{className:"profile-options",children:[e.jsx("div",{className:"desktop-button",children:e.jsx(T,{color:"gray",icon:["fas","lock"],label:"Edit my profile",href:"/profile-edit"})}),e.jsx("div",{className:"mobile-button",children:e.jsx(T,{color:"gray",icon:["fas","lock"],label:"Edit my profile",href:"/profile-edit",size:"small"})}),s&&c&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"desktop-button",children:e.jsx(T,{color:"gray",icon:["fas","lock"],label:"Department admin",href:"/groups"})}),e.jsx("div",{className:"mobile-button",children:e.jsx(T,{color:"gray",icon:["fas","lock"],label:"Department admin",href:"/groups",size:"small"})})]})]})]}),e.jsxs(W,{initialTab:p.get(u),onTabChange:r=>B(r),children:[e.jsx(w,{id:S.all,title:"All ASU Search",children:v(e.jsx(E,{totalResults:b,setTotalResults:l,engines:N,site:y,goToTab:B,term:d,loggedIn:s}))}),y&&e.jsx(w,{id:S.sites,title:y,children:v(e.jsx(k,{loggedIn:s,engines:N,site:y,term:d}))}),e.jsx(w,{id:S.faculty,title:"Faculty and Staff",children:v(e.jsx(q,{engines:N,term:d,sort:g,onSortChange:r=>M(r)}))}),e.jsx(w,{id:S.students,icon:["fa","lock"],title:"Students",children:v(e.jsx(C,{loggedIn:s,engines:N,term:d}))})]})]})}F.propTypes={API_URL:t.string,searchApiVersion:t.string,loggedIn:t.bool,deptAdmin:t.bool,profileURLBase:t.string,appPathFolder:t.string};F.__docgenInfo={description:`React component for the ASU search page.

@param {Object} props - The props for configuring the search page.
@param {string} props.API_URL - The API URL for the search functionality.
@param {string} props.searchApiVersion - The version of the search API.
@param {boolean} props.loggedIn - Indicates whether the user is logged in.
@param {boolean} props.deptAdmin - Indicates whether the user is a department admin.
@param {string} props.profileURLBase - The base URL for user profiles.
@param {string} props.appPathFolder - The folder path for the application.
@returns {JSX.Element} The SearchPage component.`,methods:[],displayName:"SearchPage",props:{API_URL:{description:"",type:{name:"string"},required:!1},searchApiVersion:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1},deptAdmin:{description:"",type:{name:"bool"},required:!1},profileURLBase:{description:"",type:{name:"string"},required:!1},appPathFolder:{description:"",type:{name:"string"},required:!1}}};const ie="https://asuapp2dev.prod.acquia-sites.com/",le="api/v1/",xe={title:"Organisms/Search Page/Templates",decorators:[a=>e.jsx(H,{children:a()})]},ce=()=>e.jsx("div",{className:"uds-content-align",children:e.jsx(F,{API_URL:ie,searchApiVersion:le,loggedIn:!1})});ce.__docgenInfo={description:"",methods:[],displayName:"searchPageExample"};const be=["searchPageExample"];export{be as __namedExportsOrder,xe as default,ce as searchPageExample};
