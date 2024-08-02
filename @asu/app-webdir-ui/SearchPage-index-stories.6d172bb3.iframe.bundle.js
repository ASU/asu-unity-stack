"use strict";(self.webpackChunk_asu_app_webdir_ui=self.webpackChunk_asu_app_webdir_ui||[]).push([[997],{"./src/SearchPage/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories,searchPageExample:()=>searchPageExample});var react=__webpack_require__("../../node_modules/react/index.js"),libCore_es=__webpack_require__("./node_modules/@asu/components-core/dist/libCore.es.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),dist=__webpack_require__("../../node_modules/react-router-dom/dist/index.js"),search=__webpack_require__("./src/helpers/search.js"),PreSearchMessages=__webpack_require__("./src/PreSearchMessages/index.js"),QuickLinks=__webpack_require__("./src/QuickLinks/index.js"),SearchResultsList=__webpack_require__("./src/SearchResultsList/index.js"),styled_components_browser_esm=(__webpack_require__("./src/SearchPage/components/SearchMessage.js"),__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"));const AllTabLayout=styled_components_browser_esm.Ay.div`
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
`,LocalTabLayout=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,FacultyTabLayout=styled_components_browser_esm.Ay.div`
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
`,StudentsTabLayout=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,AllTab=({term,engines,site,goToTab,setTotalResults,totalResults,loggedIn})=>{const[promotedProfile,setPromotedProfile]=(0,react.useState)(null),[promotedResult,setPromotedResult]=(0,react.useState)(null),tabIds_sites$0="web_sites",tabIds_faculty$0="web_dir_faculty_staff",tabIds_students$0="web_dir_students",registerResults=num=>{setTotalResults((prev=>prev+num))};return(0,react.useEffect)((()=>()=>setTotalResults(0)),[]),(0,react.useEffect)((()=>{const gcse=document.createElement("script");gcse.type="text/javascript",gcse.async=!0,gcse.src="https://cse.google.com/cse.js?cx=007921449323584335659:7htbgpmmreu";const s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(gcse,s)})),react.createElement(AllTabLayout,{key:document.location.href},react.createElement("div",{className:"all-message"}),react.createElement("div",{className:"all-content"},react.createElement("div",{className:"all-content-column"},(promotedResult||promotedProfile)&&react.createElement("div",{className:"top-results all-content-item"},react.createElement("div",null,promotedResult),react.createElement("div",null,promotedProfile)),site&&react.createElement("div",{className:"subdomain-results all-content-item"},react.createElement(SearchResultsList.A,{engine:engines[search.Ry.SITES_LOCAL],term,type:"preview",itemsPerPage:3,titleText:`All results from ${site}`,seeAllResultsText:`See all results from ${site}`,onExpandClick:()=>goToTab(tabIds_sites$0),GASource:`all results from ${site}`,hidePaginator:!0,registerResults,localSection:!0,loggedIn,restClientTag:"asuis"})),react.createElement("div",{className:"all-results all-content-item"},term&&react.createElement(react.Fragment,null,react.createElement("div",{className:"results-title"},"All asu.edu results"),react.createElement("div",{className:"gcse-searchresults-only"})))),react.createElement("div",{className:"all-content-column"},react.createElement("div",{className:"faculty-and-staff all-content-item"},react.createElement(SearchResultsList.A,{engine:engines[search.Ry.FACULTY],term,itemsPerPage:3,titleText:"Faculty and staff",type:"micro",seeAllResultsText:"See all results",onExpandClick:()=>goToTab(tabIds_faculty$0),GASource:"faculty and staff",setPromotedResult:setPromotedProfile,hidePaginator:!0,registerResults,restClientTag:"asuis"})),react.createElement("div",{className:"students all-content-item"},react.createElement(SearchResultsList.A,{engine:engines[search.Ry.STUDENTS],term,itemsPerPage:3,titleText:"Students",type:"micro",seeAllResultsText:"See all results",onExpandClick:()=>goToTab(tabIds_students$0),GASource:"students",hidePaginator:!0,registerResults,icon:["fa","lock"],restClientTag:"asuis"})),react.createElement("div",{className:"quick-links all-content-item"},react.createElement(QuickLinks.p,null)))))};AllTab.displayName="AllTab",AllTab.propTypes={term:prop_types_default().string,engines:prop_types_default().object,site:prop_types_default().string,goToTab:prop_types_default().func,setTotalResults:prop_types_default().func,totalResults:prop_types_default().number,loggedIn:prop_types_default().bool},AllTab.__docgenInfo={description:"React component for displaying search results on the main tab.\n\n@param {Object} props - The props for configuring the AllTab component.\n@param {string} props.term - The search term.\n@param {Object} props.engines - The search engines for different categories.\n@param {string} props.site - The selected site for filtering results.\n@param {function} props.goToTab - Function to switch between tabs.\n@param {function} props.setTotalResults - Function to set the total number of results.\n@param {number} props.totalResults - The total number of search results.\n@param {boolean} props.loggedIn - Indicates if the user is logged in.\n@returns {JSX.Element} The AllTab component.",methods:[],displayName:"AllTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},site:{description:"",type:{name:"string"},required:!1},goToTab:{description:"",type:{name:"func"},required:!1},setTotalResults:{description:"",type:{name:"func"},required:!1},totalResults:{description:"",type:{name:"number"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};var components_sort=__webpack_require__("./src/SearchPage/components/sort.js");const FacultyTab=({engines,term,sort,onSortChange})=>react.createElement(FacultyTabLayout,null,react.createElement("div",{className:"faculty-sort"},react.createElement(components_sort.r,{sort,onChange:val=>onSortChange(val)})),react.createElement("div",{className:"faculty-results"},react.createElement(SearchResultsList.A,{term,engine:engines[search.Ry.FACULTY],itemsPerPage:6,type:"full",sort,GASource:"all faculty and staff results",titleText:"All faculty and staff results",showSearchMessage:!0,restClientTag:"asuis"})));FacultyTab.displayName="FacultyTab",FacultyTab.propTypes={term:prop_types_default().string,engines:prop_types_default().object,sort:prop_types_default().string,onSortChange:prop_types_default().func},FacultyTab.__docgenInfo={description:'React component for displaying search results on the "Faculty and Staff" tab.\n\n@param {Object} props - The props for configuring the FacultyTab component.\n@param {Object} props.engines - The search engines for different categories.\n@param {string} props.term - The search term.\n@param {string} props.sort - The current sort option.\n@param {function} props.onSortChange - Function to handle sort option change.\n@returns {JSX.Element} The FacultyTab component.',methods:[],displayName:"FacultyTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},sort:{description:"",type:{name:"string"},required:!1},onSortChange:{description:"",type:{name:"func"},required:!1}}};const LocalTab=({engines,term,site,loggedIn})=>react.createElement(LocalTabLayout,null,react.createElement(SearchResultsList.A,{engine:engines[search.Ry.SITES_LOCAL],term,itemsPerPage:6,type:"full",GASource:site,titleText:site,loggedIn}));LocalTab.displayName="LocalTab",LocalTab.propTypes={term:prop_types_default().string,engines:prop_types_default().object,site:prop_types_default().string,loggedIn:prop_types_default().bool},LocalTab.__docgenInfo={description:"React component for displaying search results on a local tab based on the url_host param.\n\n@param {Object} props - The props for configuring the LocalTab component.\n@param {Object} props.engines - The search engines for different categories.\n@param {string} props.term - The search term.\n@param {string} props.site - The specific site to display results for.\n@param {boolean} props.loggedIn - Indicates whether the user is logged in.\n@returns {JSX.Element} The LocalTab component.",methods:[],displayName:"LocalTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},site:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};const StudentsTab=({engines,term,loggedIn})=>react.createElement(StudentsTabLayout,null,react.createElement(SearchResultsList.A,{term,engine:engines[search.Ry.STUDENTS],itemsPerPage:6,type:"full",GASource:"all student results",titleText:"All Student results",loggedIn,showSearchMessage:!0,restClientTag:"asuis"}));StudentsTab.displayName="StudentsTab",StudentsTab.propTypes={term:prop_types_default().string,engines:prop_types_default().object,loggedIn:prop_types_default().bool},StudentsTab.__docgenInfo={description:"React component for displaying search results on the Students tab.\n\n@param {Object} props - The props for configuring the StudentsTab component.\n@param {Object} props.engines - The search engines for different categories.\n@param {string} props.term - The search term.\n@param {boolean} props.loggedIn - Indicates whether the user is logged in.\n@returns {JSX.Element} The StudentsTab component.",methods:[],displayName:"StudentsTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};const tabIds_all="all",tabIds_sites="web_sites",tabIds_faculty="web_dir_faculty_staff",tabIds_students="web_dir_students";AllTab.__docgenInfo={description:"React component for displaying search results on the main tab.\n\n@param {Object} props - The props for configuring the AllTab component.\n@param {string} props.term - The search term.\n@param {Object} props.engines - The search engines for different categories.\n@param {string} props.site - The selected site for filtering results.\n@param {function} props.goToTab - Function to switch between tabs.\n@param {function} props.setTotalResults - Function to set the total number of results.\n@param {number} props.totalResults - The total number of search results.\n@param {boolean} props.loggedIn - Indicates if the user is logged in.\n@returns {JSX.Element} The AllTab component.",methods:[],displayName:"AllTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},site:{description:"",type:{name:"string"},required:!1},goToTab:{description:"",type:{name:"func"},required:!1},setTotalResults:{description:"",type:{name:"func"},required:!1},totalResults:{description:"",type:{name:"number"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}},FacultyTab.__docgenInfo={description:'React component for displaying search results on the "Faculty and Staff" tab.\n\n@param {Object} props - The props for configuring the FacultyTab component.\n@param {Object} props.engines - The search engines for different categories.\n@param {string} props.term - The search term.\n@param {string} props.sort - The current sort option.\n@param {function} props.onSortChange - Function to handle sort option change.\n@returns {JSX.Element} The FacultyTab component.',methods:[],displayName:"FacultyTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},sort:{description:"",type:{name:"string"},required:!1},onSortChange:{description:"",type:{name:"func"},required:!1}}},LocalTab.__docgenInfo={description:"React component for displaying search results on a local tab based on the url_host param.\n\n@param {Object} props - The props for configuring the LocalTab component.\n@param {Object} props.engines - The search engines for different categories.\n@param {string} props.term - The search term.\n@param {string} props.site - The specific site to display results for.\n@param {boolean} props.loggedIn - Indicates whether the user is logged in.\n@returns {JSX.Element} The LocalTab component.",methods:[],displayName:"LocalTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},site:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}},StudentsTab.__docgenInfo={description:"React component for displaying search results on the Students tab.\n\n@param {Object} props - The props for configuring the StudentsTab component.\n@param {Object} props.engines - The search engines for different categories.\n@param {string} props.term - The search term.\n@param {boolean} props.loggedIn - Indicates whether the user is logged in.\n@returns {JSX.Element} The StudentsTab component.",methods:[],displayName:"StudentsTab",props:{term:{description:"",type:{name:"string"},required:!1},engines:{description:"",type:{name:"object"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1}}};const SearchPageLayout=styled_components_browser_esm.Ay.div`
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
`;function SearchPage({API_URL,searchApiVersion,loggedIn,deptAdmin,profileURLBase,appPathFolder}){const searchTabsId="search-tabs",[term,setTerm]=(0,react.useState)(""),[sort,setSort]=(0,react.useState)(""),[totalResults,setTotalResults]=(0,react.useState)(0),[searchValue,setSearchValue]=(0,react.useState)(""),[searchParams,setSearchParams]=(0,dist.ok)({[searchTabsId]:tabIds_all}),[filters]=(0,react.useState)({}),[site,setSite]=(0,react.useState)(null),inputRef=(0,react.useRef)(null),engineParams={filters,API_URL,searchApiVersion,profileURLBase:profileURLBase||"https://search.asu.edu",appPathFolder},enginesWithParams={[search.Ry.FACULTY]:{...search.sP[search.Ry.FACULTY],...engineParams},[search.Ry.STUDENTS]:{...search.sP[search.Ry.STUDENTS],...engineParams},[search.Ry.SITES_LOCAL]:{...search.sP[search.Ry.SITES_LOCAL],...engineParams,site},[search.Ry.SITES]:{...search.sP[search.Ry.SITES],...engineParams}},updateSearchParams=(param,newValue)=>{const newParams={};for(const entry of searchParams.entries())newParams[entry[0]]=entry[1];newParams[param]=newValue,setSearchParams(newParams)},doSearch=()=>{searchValue.length>0&&(setTotalResults(0),updateSearchParams("q",searchValue))};(0,react.useEffect)((()=>{searchParams.get("url_host")&&setSite(searchParams.get("url_host")),searchParams.get("q")&&(setTerm(searchParams.get("q")),setSearchValue(searchParams.get("q")))}),[searchParams,sort]),(0,react.useEffect)((()=>{inputRef.current&&inputRef.current.focus()}),[]);const goToTab=tab=>{updateSearchParams("search-tabs",tab),setTotalResults(0)},preSearchOrContent=content=>term?content:PreSearchMessages.V[searchParams.get("search-tabs")];return react.createElement(SearchPageLayout,null,react.createElement("h1",null,react.createElement("span",{className:"highlight-gold"},"Search")),react.createElement("div",{className:"options-area"},react.createElement("form",{className:"uds-form"},react.createElement("div",{className:"form-group"},react.createElement("input",{type:"text",className:"form-control",id:"search-input",placeholder:"Search asu.edu",value:searchValue,onChange:e=>setSearchValue(e.target.value),onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),doSearch())},ref:inputRef}),react.createElement(libCore_es.$n,{color:"maroon",icon:["fas","search"],label:"Search",onClick:()=>doSearch()}))),react.createElement("div",{className:"profile-options"},react.createElement("div",{className:"desktop-button"},react.createElement(libCore_es.$n,{color:"gray",icon:["fas","lock"],label:"Edit my profile",href:"/profile-edit"})),react.createElement("div",{className:"mobile-button"},react.createElement(libCore_es.$n,{color:"gray",icon:["fas","lock"],label:"Edit my profile",href:"/profile-edit",size:"small"})),loggedIn&&deptAdmin&&react.createElement(react.Fragment,null,react.createElement("div",{className:"desktop-button"},react.createElement(libCore_es.$n,{color:"gray",icon:["fas","lock"],label:"Department admin",href:"/groups"})),react.createElement("div",{className:"mobile-button"},react.createElement(libCore_es.$n,{color:"gray",icon:["fas","lock"],label:"Department admin",href:"/groups",size:"small"}))))),react.createElement(libCore_es.YT,{initialTab:searchParams.get("search-tabs"),onTabChange:tab=>goToTab(tab)},react.createElement(libCore_es.oz,{id:tabIds_all,title:"All ASU Search"},preSearchOrContent(react.createElement(AllTab,{totalResults,setTotalResults,engines:enginesWithParams,site,goToTab,term,loggedIn}))),site&&react.createElement(libCore_es.oz,{id:tabIds_sites,title:site},preSearchOrContent(react.createElement(LocalTab,{loggedIn,engines:enginesWithParams,site,term}))),react.createElement(libCore_es.oz,{id:tabIds_faculty,title:"Faculty and Staff"},preSearchOrContent(react.createElement(FacultyTab,{engines:enginesWithParams,term,sort,onSortChange:value=>(value=>{setSort(value)})(value)}))),react.createElement(libCore_es.oz,{id:tabIds_students,icon:["fa","lock"],title:"Students"},preSearchOrContent(react.createElement(StudentsTab,{loggedIn,engines:enginesWithParams,term})))))}SearchPage.displayName="SearchPage",SearchPage.propTypes={API_URL:prop_types_default().string,searchApiVersion:prop_types_default().string,loggedIn:prop_types_default().bool,deptAdmin:prop_types_default().bool,profileURLBase:prop_types_default().string,appPathFolder:prop_types_default().string},SearchPage.__docgenInfo={description:"React component for the ASU search page.\n\n@param {Object} props - The props for configuring the search page.\n@param {string} props.API_URL - The API URL for the search functionality.\n@param {string} props.searchApiVersion - The version of the search API.\n@param {boolean} props.loggedIn - Indicates whether the user is logged in.\n@param {boolean} props.deptAdmin - Indicates whether the user is a department admin.\n@param {string} props.profileURLBase - The base URL for user profiles.\n@param {string} props.appPathFolder - The folder path for the application.\n@returns {JSX.Element} The SearchPage component.",methods:[],displayName:"SearchPage",props:{API_URL:{description:"",type:{name:"string"},required:!1},searchApiVersion:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1},deptAdmin:{description:"",type:{name:"bool"},required:!1},profileURLBase:{description:"",type:{name:"string"},required:!1},appPathFolder:{description:"",type:{name:"string"},required:!1}}};var Layout=__webpack_require__("../../shared/components/Layout.js");const index_stories={title:"Organisms/Search Page/Templates",decorators:[story=>react.createElement(Layout.iD,null,story())]},searchPageExample=()=>react.createElement("div",{className:"uds-content-align"},react.createElement(SearchPage,{API_URL:"https://test-asu-isearch.ws.asu.edu",searchApiVersion:"/api/v1/",loggedIn:!1}));searchPageExample.displayName="searchPageExample";const __namedExportsOrder=["searchPageExample"]},"./src/PreSearchMessages/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>searchMessageComponentMap});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),QuickLinks=__webpack_require__("./src/QuickLinks/index.js");const PreSearchMessageTemplate=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
  padding: 4px;
  display: grid;
  grid-template-columns: 700px 1fr;
  grid-template-rows: 100%;
  grid-column-gap: 126px;

  .message-content {
    max-width: 700px;
    h2 {
      margin-bottom: 32px;
    }
  }
  .assistance-area {
    margin-top: 16px;
    .intro-highlight {
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: 48px;
  }
`,PreSearchDynamicMsg=({titleText,descText,contactText,signInLink})=>react.createElement(PreSearchMessageTemplate,null,react.createElement("div",{className:"message-content"},react.createElement("h2",null,titleText),react.createElement("div",null,signInLink?react.createElement("p",null,descText,react.createElement("a",{href:signInLink},"logging into the site"),"."):react.createElement("p",null,descText),react.createElement("div",{className:"assistance-area"},react.createElement("span",{className:"intro-highlight"},"Need assistance?")," ",react.createElement("br",null),react.createElement("a",{href:"https://www.asu.edu/about/contact"},contactText)))),react.createElement(QuickLinks.p,null));PreSearchDynamicMsg.displayName="PreSearchDynamicMsg",PreSearchDynamicMsg.propTypes={titleText:prop_types_default().string,descText:prop_types_default().string,contactText:prop_types_default().string,signInLink:prop_types_default().string},PreSearchDynamicMsg.__docgenInfo={description:"",methods:[],displayName:"PreSearchDynamicMsg",props:{titleText:{description:"",type:{name:"string"},required:!1},descText:{description:"",type:{name:"string"},required:!1},contactText:{description:"",type:{name:"string"},required:!1},signInLink:{description:"",type:{name:"string"},required:!1}}};const searchMessageComponentMap={web_dir_faculty_staff:react.createElement(PreSearchDynamicMsg,{titleText:"Welcome to the ASU Faculty and Staff Directory",descText:"Our directory is integrated into the ASU Search engine experience. Find current faculty and staff profiles by using the search field above.",contactText:"Contact us via live chat, phone or email 24 hours a day, seven days a week."}),web_dir_students:react.createElement(PreSearchDynamicMsg,{titleText:"Welcome to the ASU Student Directory",descText:"Students must opt-in to make their profile publicly available. ASU affiliates with an ASURITE ID can view the remaining student profiles that do not have directory holds on them by ",contactText:"Contact us via live chat, phone or email 24 hours a day, seven days a week.",signInLink:"https://search.asu.edu/caslogin?returnto=/"}),all:react.createElement(PreSearchDynamicMsg,{titleText:"Welcome to ASU search",descText:"Find the information you're looking for from anywhere on asu.edu.",contactText:"Contact us via live chat, phone or email 24 hours a day, seven days a week."}),"web-sites":react.createElement(PreSearchDynamicMsg,{titleText:"Welcome to ASU search",descText:"Find the information you're looking for from anywhere on asu.edu.",contactText:"Contact us via live chat, phone or email 24 hours a day, seven days a week."})}},"./src/QuickLinks/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>QuickLinks});var react=__webpack_require__("../../node_modules/react/index.js");const QuickLinksTemplate=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
  span {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
  }
  a:not(:last-child) {
    margin-bottom: 16px;
  }
`,QuickLinks=()=>react.createElement(QuickLinksTemplate,null,react.createElement("span",null,"Quick links"),react.createElement("a",{href:"https://search.asu.edu/?search-tabs=web_dir_faculty_staff"},"ASU directory"),react.createElement("a",{href:"https://students.asu.edu/advising"},"ASU advising directory by college"),react.createElement("a",{href:"https://www.asu.edu/academics/colleges-schools"},"ASU's colleges and schools"),react.createElement("a",{href:"https://degrees.asu.edu/"},"Search majors and degree programs"),react.createElement("a",{href:"https://webapp4.asu.edu/catalog/classlist"},"ASU class search"),react.createElement("a",{href:"https://search.lib.asu.edu/discovery/search?vid=01ASU_INST:01ASU"},"ASU Library One search"),react.createElement("a",{href:"https://news.asu.edu/"},"ASU news"),react.createElement("a",{href:"https://asuevents.asu.edu/"},"ASU events calendar"),react.createElement("a",{href:"https://cfo.asu.edu/applicant"},"Search ASU job openings"));QuickLinks.displayName="QuickLinks",QuickLinks.__docgenInfo={description:"",methods:[],displayName:"QuickLinks"}}}]);
//# sourceMappingURL=SearchPage-index-stories.6d172bb3.iframe.bundle.js.map