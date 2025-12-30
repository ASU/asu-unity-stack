import{j as e}from"./jsx-runtime-DvmJwJjP.js";import{r as o}from"./index-DUDtsY9M.js";import{A as b,e as a,S as ee,w as S,i as te,b as _,a as N}from"./sort-DM6eLLkj.js";import{q as I,P as t,F as se}from"./styled-components.browser.esm-V80J5lJN.js";import{a as re}from"./index-79a5_Zlt.js";import{s as ne}from"./index-BwZPEAQu.js";import{Q as ae}from"./index-ZGwwQH2W.js";import"./_commonjsHelpers-B3tUAs5q.js";import"./index-GHuCKAaX.js";import"./dataConverter-D9R8DMtP.js";const oe=I.div`
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
    grid-template-columns: 700px 1fr;
    grid-column-gap: 126px;
    @media screen and (max-width: 1280px) {
      grid-template-columns: 500px 1fr;
    }
    @media screen and (max-width: 1012px) {
      grid-template-columns: 1fr;
    }

    .all-content-column {
      display: flex;
      flex-direction: column;

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
  @media (max-width: 1268px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 100%;
    grid-template-rows: repeat(6, auto);
    grid-row-gap: 48px;
    grid-column-gap: 0px;
    grid-template-areas:
      "header"
      "top"
      "subdomain"
      "all"
      "faculty"
      "students"
      "links";
  }
`,ie=I.div`
  display: flex;
  flex-direction: column;
`,le=I.div`
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
`,pe=I.div`
  display: flex;
  flex-direction: column;
`,R=({term:n,engines:i,site:s,goToTab:p,setTotalResults:u,totalResults:U,loggedIn:g})=>{const[m,q]=o.useState(null),[d,J]=o.useState(null),h={sites:"web_sites",faculty:"web_dir_faculty_staff",students:"web_dir_students"},x=y=>{u(l=>l+y)};return o.useEffect(()=>()=>u(0),[]),o.useEffect(()=>{const y="007921449323584335659:7htbgpmmreu",l=document.createElement("script");l.type="text/javascript",l.async=!0,l.src=`https://cse.google.com/cse.js?cx=${y}`;const f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(l,f)}),e.jsxs(oe,{children:[e.jsx("div",{className:"all-message"}),e.jsxs("div",{className:"all-content",children:[e.jsxs("div",{className:"all-content-column",children:[(d||m)&&e.jsxs("div",{className:"top-results all-content-item",children:[e.jsx("div",{children:d}),e.jsx("div",{children:m})]}),s&&e.jsx("div",{className:"subdomain-results all-content-item",children:e.jsx(b,{engine:i[a.SITES_LOCAL],term:n,type:"preview",itemsPerPage:3,titleText:`All results from ${s}`,seeAllResultsText:`See all results from ${s}`,onExpandClick:()=>p(h.sites),GASource:`all results from ${s}`,hidePaginator:!0,registerResults:x,localSection:!0,loggedIn:g,restClientTag:"asuis"})}),e.jsx("div",{className:"all-results all-content-item",children:n&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"results-title",children:"All asu.edu results"}),e.jsx("div",{className:"gcse-searchresults-only"})]})})]}),e.jsxs("div",{className:"all-content-column",children:[e.jsx("div",{className:"faculty-and-staff all-content-item",children:e.jsx(b,{engine:i[a.FACULTY],term:n,itemsPerPage:3,titleText:"Faculty and staff",type:"micro",seeAllResultsText:"See all results",onExpandClick:()=>p(h.faculty),GASource:"faculty and staff",setPromotedResult:q,hidePaginator:!0,registerResults:x,restClientTag:"asuis"})}),e.jsx("div",{className:"students all-content-item",children:e.jsx(b,{engine:i[a.STUDENTS],term:n,itemsPerPage:3,titleText:"Students",type:"micro",seeAllResultsText:"See all results",onExpandClick:()=>p(h.students),GASource:"students",hidePaginator:!0,registerResults:x,icon:["fa","lock"],restClientTag:"asuis"})}),e.jsx("div",{className:"quick-links all-content-item",children:e.jsx(ae,{})})]})]})]},document.location.href)};R.propTypes={term:t.string,engines:t.object,site:t.string,goToTab:t.func,setTotalResults:t.func,totalResults:t.number,loggedIn:t.bool};R.__docgenInfo={description:`React component for displaying search results on the main tab.

@param {Object} props - The props for configuring the AllTab component.
@param {string} props.term - The search term.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.site - The selected site for filtering results.
@param {function} props.goToTab - Function to switch between tabs.
@param {function} props.setTotalResults - Function to set the total number of results.
@param {number} props.totalResults - The total number of search results.
@param {boolean} props.loggedIn - Indicates if the user is logged in.
@returns {JSX.Element} The AllTab component.`,methods:[],displayName:"AllTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},site:{description:"",type:{name:"string"},required:!1},goToTab:{description:"",type:{name:"func"},required:!1},setTotalResults:{description:"",type:{name:"func"},required:!1},totalResults:{description:"",type:{name:"number"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};const L=({engines:n,term:i,sort:s,onSortChange:p})=>e.jsxs(le,{children:[e.jsx("div",{className:"faculty-sort",children:e.jsx(ee,{sort:s,onChange:u=>p(u)})}),e.jsx("div",{className:"faculty-results",children:e.jsx(b,{term:i,engine:n[a.FACULTY],itemsPerPage:6,type:"full",sort:s,GASource:"all faculty and staff results",titleText:"All faculty and staff results",showSearchMessage:!0,restClientTag:"asuis"})})]});L.propTypes={term:t.string,engines:t.object,sort:t.string,onSortChange:t.func};L.__docgenInfo={description:`React component for displaying search results on the "Faculty and Staff" tab.

@param {Object} props - The props for configuring the FacultyTab component.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.term - The search term.
@param {string} props.sort - The current sort option.
@param {function} props.onSortChange - Function to handle sort option change.
@returns {JSX.Element} The FacultyTab component.`,methods:[],displayName:"FacultyTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},sort:{description:"",type:{name:"string"},required:!1},onSortChange:{description:"",type:{name:"func"},required:!1}}};const E=({engines:n,term:i,site:s,loggedIn:p})=>e.jsx(ie,{children:e.jsx(b,{engine:n[a.SITES_LOCAL],term:i,itemsPerPage:6,type:"full",GASource:s,titleText:s,loggedIn:p})});E.propTypes={term:t.string,engines:t.object,site:t.string,loggedIn:t.bool};E.__docgenInfo={description:`React component for displaying search results on a local tab based on the url_host param.

@param {Object} props - The props for configuring the LocalTab component.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.term - The search term.
@param {string} props.site - The specific site to display results for.
@param {boolean} props.loggedIn - Indicates whether the user is logged in.
@returns {JSX.Element} The LocalTab component.`,methods:[],displayName:"LocalTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},site:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};const F=({engines:n,term:i,loggedIn:s})=>e.jsx(pe,{children:e.jsx(b,{term:i,engine:n[a.STUDENTS],itemsPerPage:6,type:"full",GASource:"all student results",titleText:"All Student results",loggedIn:s,showSearchMessage:!0,restClientTag:"asuis"})});F.propTypes={term:t.string,engines:t.object,loggedIn:t.bool};F.__docgenInfo={description:`React component for displaying search results on the Students tab.

@param {Object} props - The props for configuring the StudentsTab component.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.term - The search term.
@param {boolean} props.loggedIn - Indicates whether the user is logged in.
@returns {JSX.Element} The StudentsTab component.`,methods:[],displayName:"StudentsTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};const j={all:"all",sites:"web_sites",faculty:"web_dir_faculty_staff",students:"web_dir_students"};R.__docgenInfo={description:`React component for displaying search results on the main tab.

@param {Object} props - The props for configuring the AllTab component.
@param {string} props.term - The search term.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.site - The selected site for filtering results.
@param {function} props.goToTab - Function to switch between tabs.
@param {function} props.setTotalResults - Function to set the total number of results.
@param {number} props.totalResults - The total number of search results.
@param {boolean} props.loggedIn - Indicates if the user is logged in.
@returns {JSX.Element} The AllTab component.`,methods:[],displayName:"AllTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},site:{description:"",type:{name:"string"},required:!1},goToTab:{description:"",type:{name:"func"},required:!1},setTotalResults:{description:"",type:{name:"func"},required:!1},totalResults:{description:"",type:{name:"number"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};L.__docgenInfo={description:`React component for displaying search results on the "Faculty and Staff" tab.

@param {Object} props - The props for configuring the FacultyTab component.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.term - The search term.
@param {string} props.sort - The current sort option.
@param {function} props.onSortChange - Function to handle sort option change.
@returns {JSX.Element} The FacultyTab component.`,methods:[],displayName:"FacultyTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},sort:{description:"",type:{name:"string"},required:!1},onSortChange:{description:"",type:{name:"func"},required:!1}}};E.__docgenInfo={description:`React component for displaying search results on a local tab based on the url_host param.

@param {Object} props - The props for configuring the LocalTab component.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.term - The search term.
@param {string} props.site - The specific site to display results for.
@param {boolean} props.loggedIn - Indicates whether the user is logged in.
@returns {JSX.Element} The LocalTab component.`,methods:[],displayName:"LocalTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},site:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};F.__docgenInfo={description:`React component for displaying search results on the Students tab.

@param {Object} props - The props for configuring the StudentsTab component.
@param {Object} props.engines - The search engines for different categories.
@param {string} props.term - The search term.
@param {boolean} props.loggedIn - Indicates whether the user is logged in.
@returns {JSX.Element} The StudentsTab component.`,methods:[],displayName:"StudentsTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};const ce=I.div`
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
    form {
      width: 50%;
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
      form {
        width: 100%;
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
`;function O({API_URL:n,searchApiVersion:i,loggedIn:s,deptAdmin:p,profileURLBase:u,appPathFolder:U}){const g="search-tabs",m="q",q="url_host",[d,J]=o.useState(""),[h,x]=o.useState(""),[y,l]=o.useState(0),[f,X]=o.useState(""),[c,Y]=re({[g]:j.all}),[K]=o.useState({}),[T,Q]=o.useState(null),k=o.useRef(null),A={filters:K,API_URL:n,searchApiVersion:i,profileURLBase:u||"https://search.asu.edu",appPathFolder:U},v={[a.FACULTY]:{...N[a.FACULTY],...A},[a.STUDENTS]:{...N[a.STUDENTS],...A},[a.SITES_LOCAL]:{...N[a.SITES_LOCAL],...A,site:T},[a.SITES]:{...N[a.SITES],...A}},z=(r,Z)=>{const C={};for(const V of c.entries())C[V[0]]=V[1];C[r]=Z,Y(C)},D=()=>{f.length>0&&(l(0),z(m,f))},W=r=>{x(r)};o.useEffect(()=>{c.get(q)&&Q(c.get(q)),c.get(m)&&(J(c.get(m)),X(c.get(m)))},[c,h]),o.useEffect(()=>{k.current&&k.current.focus()},[]);const G=r=>{z(g,r),l(0)},H=r=>{r.keyCode===13&&(r.preventDefault(),D())},w=r=>d?r:ne[c.get(g)];return e.jsxs(ce,{children:[e.jsx("h1",{children:e.jsx("span",{className:"highlight-gold",children:"Search"})}),e.jsxs("div",{className:"options-area",children:[e.jsx("form",{className:"uds-form",children:e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"text",className:"form-control",id:"search-input",placeholder:"Search asu.edu",value:f,onChange:r=>X(r.target.value),onKeyDown:H,ref:k}),e.jsx(S,{color:"maroon",icon:["fas","search"],label:"Search",onClick:()=>D()})]})}),e.jsxs("div",{className:"profile-options",children:[e.jsx("div",{className:"desktop-button",children:e.jsx(S,{color:"gray",icon:["fas","lock"],label:"Edit my profile",href:"/profile-edit"})}),e.jsx("div",{className:"mobile-button",children:e.jsx(S,{color:"gray",icon:["fas","lock"],label:"Edit my profile",href:"/profile-edit",size:"small"})}),s&&p&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"desktop-button",children:e.jsx(S,{color:"gray",icon:["fas","lock"],label:"Department admin",href:"/groups"})}),e.jsx("div",{className:"mobile-button",children:e.jsx(S,{color:"gray",icon:["fas","lock"],label:"Department admin",href:"/groups",size:"small"})})]})]})]}),e.jsxs(te,{initialTab:c.get(g),onTabChange:r=>G(r),children:[e.jsx(_,{id:j.all,title:"All ASU Search",children:w(e.jsx(R,{totalResults:y,setTotalResults:l,engines:v,site:T,goToTab:G,term:d,loggedIn:s}))}),T&&e.jsx(_,{id:j.sites,title:T,children:w(e.jsx(E,{loggedIn:s,engines:v,site:T,term:d}))}),e.jsx(_,{id:j.faculty,title:"Faculty and Staff",children:w(e.jsx(L,{engines:v,term:d,sort:h,onSortChange:r=>W(r)}))}),e.jsx(_,{id:j.students,icon:["fa","lock"],title:"Students",children:w(e.jsx(F,{loggedIn:s,engines:v,term:d}))})]})]})}O.propTypes={API_URL:t.string,searchApiVersion:t.string,loggedIn:t.bool,deptAdmin:t.bool,profileURLBase:t.string,appPathFolder:t.string};O.__docgenInfo={description:`React component for the ASU search page.

@param {Object} props - The props for configuring the search page.
@param {string} props.API_URL - The API URL for the search functionality.
@param {string} props.searchApiVersion - The version of the search API.
@param {boolean} props.loggedIn - Indicates whether the user is logged in.
@param {boolean} props.deptAdmin - Indicates whether the user is a department admin.
@param {string} props.profileURLBase - The base URL for user profiles.
@param {string} props.appPathFolder - The folder path for the application.
@returns {JSX.Element} The SearchPage component.`,methods:[],displayName:"SearchPage",props:{API_URL:{description:"",type:{name:"string"},required:!1},searchApiVersion:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1},deptAdmin:{description:"",type:{name:"bool"},required:!1},profileURLBase:{description:"",type:{name:"string"},required:!1},appPathFolder:{description:"",type:{name:"string"},required:!1}}};const Se={title:"Organisms/Search Page/Templates",decorators:[n=>e.jsx(se,{children:n()})]},P=()=>e.jsx("div",{className:"uds-content-align",children:e.jsx(O,{API_URL:"https://asuapp2dev.prod.acquia-sites.com",searchApiVersion:"/api/v1/",loggedIn:!1})});P.__docgenInfo={description:"",methods:[],displayName:"searchPageExample"};var B,$,M;P.parameters={...P.parameters,docs:{...(B=P.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div className="uds-content-align">
    <SearchPage API_URL="https://asuapp2dev.prod.acquia-sites.com" searchApiVersion="/api/v1/" loggedIn={false}
  // appPathFolder="/my/custom/path/to/component/root/example"
  />
  </div>`,...(M=($=P.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const je=["searchPageExample"];export{je as __namedExportsOrder,Se as default,P as searchPageExample};
