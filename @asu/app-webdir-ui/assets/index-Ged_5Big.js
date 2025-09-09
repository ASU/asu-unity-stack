import{j as e}from"./jsx-runtime-DvmJwJjP.js";import{P as t,q as A}from"./styled-components.browser.esm-B6_ApnWR.js";import{r as l}from"./index-DUDtsY9M.js";import{a as C,e as c,t as V,v as $,A as B,Q as K,S as M}from"./sort-D60uOoNj.js";function z({packageName:n="",component:u="",type:f="",configuration:y={}}){if(!n||!u){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[n]={component:u,type:f,configuration:y}}const F={1:"Faculty",2:"Academic Professionals",3:"Other Faculty and Academic Professionals"},O=({filters:n,API_URL:u,searchApiVersion:f,appPathFolder:y,deptIds:h,display:b,profileURLBase:g,searchType:s,grid:w})=>{const[T,a]=l.useState({}),[j,P]=l.useState(null),[R,m]=l.useState(!0),[_,S]=l.useState({}),D=6,r="faculty_rank",i=new URL(`${u}${f}${C[c.WEB_DIRECTORY_FACULTY_RANK].url}`);i.searchParams.append("sort_by",s),i.searchParams.append("dept_ids",h),i.searchParams.append("page","1"),i.searchParams.append("size","1");const x=async p=>{var N;const o=`${i}&rank_group=${p}`,L=await(await fetch(o)).json();return{rankGroup:p,length:(N=L.results)==null?void 0:N.length}};l.useEffect(()=>{const p={...n};p.deptIds=h.split(","),a(p);const o=Object.keys(F).map(x);Promise.all(o).then(d=>{const L=d.reduce((N,{rankGroup:W,length:Y})=>(Y>0&&(N[W]=F[W]),N),{});S(L),m(!1)})},[h,j]);const E={filters:n,API_URL:u,searchApiVersion:f,profileURLBase:g||"https://search.asu.edu",appPathFolder:y},v={[c.WEB_DIRECTORY_FACULTY_RANK]:{...C[c.WEB_DIRECTORY_FACULTY_RANK],...E}},I={faculty_rank:c.WEB_DIRECTORY_FACULTY_RANK};return R?e.jsx("div",{children:"Loading..."}):Object.keys(_).length?e.jsx(V,{onTabChange:P,children:Object.keys(_).map(p=>e.jsx($,{id:`faculty-${p}`,title:F[p],children:e.jsx(B,{engine:v[I[s]],itemsPerPage:parseInt(b.profilesPerPage,10)||D,size:"large",sort:r,hidePaginator:b.usePager!=="1",filters:T,profilesToFilterOut:b.doNotDisplayProfiles,display:b,rankGroup:p.toString(),restClientTag:"asuis",grid:w})},p))}):e.jsxs("div",{children:["No faculty rank data found for department ",h]})};O.propTypes={deptIds:t.string,API_URL:t.string,searchApiVersion:t.string,searchType:t.string,profileURLBase:t.string,appPathFolder:t.string,display:t.shape({defaultSort:t.string,doNotDisplayProfiles:t.string,profilesPerPage:t.string,usePager:t.string}),filters:t.shape({employee:t.string,expertise:t.string,title:t.string,campuses:t.string}),grid:t.bool};O.__docgenInfo={description:`Prop types for FacultyRankTabPanels component.
@type {Object}
@property {string} deptIds - The department IDs.
@property {string} API_URL - The API URL.
@property {string} searchApiVersion - The search API version.
@property {string} searchType - The type of search.
@property {string} appPathFolder - The application path folder.
@property {Object} display - Display settings.
@property {string} display.defaultSort - The default sorting option.
@property {string} display.doNotDisplayProfiles - Profiles not to display.
@property {string} display.profilesPerPage - Number of profiles to display.
@property {string} display.usePager - Whether to use pagination.
@property {Object} filters - Filters for the search.
@property {string} filters.employee - Employee filter.
@property {string} filters.expertise - Expertise filter.
@property {string} filters.title - Title filter.
@property {string} filters.campuses - Campuses filter.`,methods:[],displayName:"FacultyRankTabPanels",props:{deptIds:{description:"",type:{name:"string"},required:!1},API_URL:{description:"",type:{name:"string"},required:!1},searchApiVersion:{description:"",type:{name:"string"},required:!1},searchType:{description:"",type:{name:"string"},required:!1},profileURLBase:{description:"",type:{name:"string"},required:!1},appPathFolder:{description:"",type:{name:"string"},required:!1},display:{description:"",type:{name:"shape",value:{defaultSort:{name:"string",required:!1},doNotDisplayProfiles:{name:"string",required:!1},profilesPerPage:{name:"string",required:!1},usePager:{name:"string",required:!1}}},required:!1},filters:{description:"",type:{name:"shape",value:{employee:{name:"string",required:!1},expertise:{name:"string",required:!1},title:{name:"string",required:!1},campuses:{name:"string",required:!1}}},required:!1},grid:{description:"",type:{name:"bool"},required:!1}}};const G=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],H=A.fieldset`
  width: 85%;
  margin: 0 0 2rem 0;

  .choices-wrapper {
    position: relative;
  }

  legend {
    font-size: 1rem;
    font-weight: bold;
  }
  .choices-container {
    display: flex;
    overflow-x: auto;
    padding: 8px 0;
    &:focus {
      outline: none !important;
      box-shadow:
        0px 0px 0px 2px #ffffff,
        0px 0px 0px 4px #191919 !important;
    }

    &::-webkit-scrollbar {
      display: none;
    }
    .choice {
      &:hover {
        text-decoration: none;
      }
      font-weight: bold;
      text-decoration: underline;
      border: none;
      background-color: transparent;
      color: #8c1d40;
      &:is(:first-child) {
        padding-left: 0px;
      }
      white-space: nowrap;
      margin: 0 8px;
      padding: 6px 12px;
      &.selected {
        color: white;
        z-index: 3;
        background-color: #8c1d40;
        border-radius: 300px;
      }
    }
  }
`,k=({filterLabel:n,choices:u=[],onChoose:f=()=>{},resetFilters:y=()=>{}})=>{const[h,b]=l.useState(null),[g,s]=l.useState(-1),[w,T]=l.useState(0),a=l.useRef(null),[j,P]=l.useState(0),[R,m]=l.useState(0);l.useEffect(()=>{const r=()=>{P(a.current.scrollLeft)};return a.current&&(a.current.addEventListener("scroll",r),r()),()=>{var i;return(i=a.current)==null?void 0:i.removeEventListener("scroll",r)}},[R]),l.useEffect(()=>{const r=()=>{a.current&&m(a.current.scrollWidth-a.current.offsetWidth)};return a.current&&(a.current.addEventListener("resize",r),r()),()=>{var i;return(i=a.current)==null?void 0:i.removeEventListener("resize",r)}},[]),l.useEffect(()=>{if(a.current){const r=a.current.children.length;T(r)}},[]);const _=r=>{var i;if(a.current){if(r.key==="ArrowRight"&&g+1<w){const x=(i=a.current)==null?void 0:i.children[g+1];s(g+1),x.focus()}else if(r.key==="ArrowLeft"&&g-1>=0){const x=a.current.children[g-1];s(g-1),x.focus()}}},S=r=>{b(r),f(r)},D=r=>{const i=a.current,x=i.scrollWidth-i.clientWidth;let v=i.scrollLeft+200*r;v=Math.max(0,Math.min(x,v)),i.scrollTo({left:v,behavior:"smooth"})};return e.jsxs(H,{className:"filter-container",children:[e.jsx("legend",{children:n}),e.jsxs("div",{className:"choices-wrapper",children:[e.jsx(K,{hidePrev:j<=0,hideNext:j>=R-5,clickPrev:()=>{D(-1)},clickNext:()=>{D(1)}}),e.jsxs("div",{role:"radiogroup",tabIndex:0,onKeyDown:_,className:"choices-container",ref:a,"aria-label":`${n} filter options}`,children:[y&&e.jsx("button",{role:"radio",type:"button",onClick:r=>{r.preventDefault(),S(null),y()},tabIndex:-1,"aria-label":"All","aria-checked":h===null,className:"choice",children:"All"}),u.map(r=>e.jsx("button",{role:"radio",type:"button",onClick:i=>{i.preventDefault(),S(r)},"aria-checked":h===r,className:`${h===r?"selected":""} choice`,"aria-label":`Filter by ${r}`,tabIndex:-1,children:r},r))]})]})]})};k.propTypes={filterLabel:t.string.isRequired,choices:t.arrayOf(t.string).isRequired,onChoose:t.func.isRequired,resetFilters:t.func};k.__docgenInfo={description:`Prop types for FilterComponent component.
@type {Object}
@property {string} filterLabel - The label for the filter.
@property {string[]} [choices=[]] - An array of choices for the filter.
@property {function} [onChoose=() => {}] - A callback function triggered when a choice is selected.
@property {function} [resetFilters=() => {}] - A callback function triggered to reset the filters.`,methods:[],displayName:"FilterComponent",props:{choices:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},onChoose:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},resetFilters:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},filterLabel:{description:"",type:{name:"string"},required:!0}}};const Q=A.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;

  .view-label {
    font-size: 1rem;
    color: #333;
    padding-right: 0.5rem;
  }

  .view-buttons {
    display: flex;
  }

  .view-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    svg rect {
      fill: #bfbfbf;
    }
  }

  .view-button:hover {
    color: #333;
  }

  .view-button:focus-visible {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
  }

  .view-button.active {
    svg rect {
      fill: #191919;
    }
  }

  .view-button svg {
    width: 22px;
    height: 22px;
  }

  @media (forced-colors: active) {
    .view-button {
      border: 1px solid currentColor;
    }
    .view-button.active {
      color: HighlightText;
    }
  }
`,q=({view:n,setView:u,label:f})=>e.jsxs(Q,{className:"view-toggle",role:"group","aria-label":"View options",children:[e.jsx("span",{className:"view-label",id:"view-label",children:f}),e.jsxs("div",{className:"view-buttons",role:"toolbar","aria-labelledby":"view-label",children:[e.jsx("button",{className:`view-button ${n?"active":""}`,"aria-label":"Grid view",type:"button",onClick:()=>u(!0),"aria-pressed":n,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[e.jsx("rect",{x:"1",y:"1",width:"6",height:"6",rx:"2"}),e.jsx("rect",{x:"9",y:"1",width:"6",height:"6",rx:"2"}),e.jsx("rect",{x:"17",y:"1",width:"6",height:"6",rx:"2"}),e.jsx("rect",{x:"1",y:"9",width:"6",height:"6",rx:"2"}),e.jsx("rect",{x:"9",y:"9",width:"6",height:"6",rx:"2"}),e.jsx("rect",{x:"17",y:"9",width:"6",height:"6",rx:"2"}),e.jsx("rect",{x:"1",y:"17",width:"6",height:"6",rx:"2"}),e.jsx("rect",{x:"9",y:"17",width:"6",height:"6",rx:"2"}),e.jsx("rect",{x:"17",y:"17",width:"6",height:"6",rx:"2"})]})}),e.jsx("button",{className:`view-button ${n?"":"active"}`,"aria-label":"List view",type:"button",onClick:()=>u(!1),"aria-pressed":!n,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[e.jsx("rect",{x:"2",y:"1",width:"6",height:"6",rx:"2"}),e.jsx("rect",{x:"11",y:"2",width:"14",height:"4.5",rx:"3"}),e.jsx("rect",{x:"2",y:"9",width:"6",height:"6",rx:"2"}),e.jsx("rect",{x:"11",y:"10",width:"14",height:"4.5",rx:"3"}),e.jsx("rect",{x:"2",y:"17",width:"6",height:"6",rx:"2"}),e.jsx("rect",{x:"11",y:"18",width:"14",height:"4.5",rx:"3"})]})})]})]});q.propTypes={view:t.bool,setView:t.func,label:t.string};q.__docgenInfo={description:"",methods:[],displayName:"ViewSelector",props:{view:{description:"",type:{name:"bool"},required:!1},setView:{description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!1}}};const J=A.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "view ."
    "sort ."
    "filter filter"
    "results results";
  grid-column-gap: 100px;

  .uds-grid > .row {
    gap: 1rem;
    & > div {
      flex: 0 0 282px;
    }
  }

  .sort {
    grid-area: sort;
  }
  .view-toggle {
    grid-area: view;
  }
  .filter-container {
    grid-area: filter;
  }
  .plain-button {
    background-color: #fff;
    border: none;
    outline: none;
    color: #822141;
  }
  .plain-button:hover {
    cursor: pointer;
  }
  .results {
    grid-area: results;
  }
`,X=A.div`
  display: flex;
  flex-wrap: wrap;
  .uds-grid > .row {
    gap: 1rem;
    & > div {
      flex: 0 0 282px;
    }
  }
  .view-toggle {
    width: 100%;
    justify-content: flex-start;
    padding-left: 1rem;
  }

  div:has(.uds-tabbed-panels) {
    width: 100%;
  }
`;function U({searchType:n,ids:u,deptIds:f,API_URL:y,searchApiVersion:h,profileURLBase:b,appPathFolder:g,display:s,filters:w,alphaFilter:T="false"}){const[a,j]=l.useState(r),[P,R]=l.useState(D),[m,_]=l.useState(s.grid==="true"||s.grid===!0),S=6;l.useEffect(()=>{typeof window<"u"&&z({packageName:"app-webdir-ui",component:"WebDirectory",type:n,configuration:{...w,...s}})},[]);function D(){const o=w?{...w}:{};return n==="departments"||n==="faculty_rank"?(o.deptIds=f.split(","),o):(o.peopleInDepts=u.split(",").filter(d=>d.includes(":")).map(d=>d.split(":")).map(d=>({asurite_id:d[0],dept_id:d[1]})),o)}function r(){const o={last_name:"last_name_asc",people_order:"people_order"};return Object.prototype.hasOwnProperty.call(o,s==null?void 0:s.defaultSort)?o[s==null?void 0:s.defaultSort]:"last_name_asc"}function i(o,d){var L;return o==="departments"&&((L=d==null?void 0:d.split(","))==null?void 0:L.length)<2?[{value:"default",label:"Choose Sort",disabled:!0},{value:"last_name_asc",label:"Last Name (ascending)"},{value:"last_name_desc",label:"Last Name (descending)"}]:[{value:"default",label:"Choose Sort",disabled:!0},{value:"last_name_asc",label:"Last Name (ascending)"},{value:"last_name_desc",label:"Last Name (descending)"}]}const x=i(n,f),E={filters:w,API_URL:y,searchApiVersion:h,profileURLBase:b||"https://search.asu.edu",appPathFolder:g},v={[c.WEB_DIRECTORY_DEPARTMENTS]:{...C[c.WEB_DIRECTORY_DEPARTMENTS],...E},[c.WEB_DIRECTORY_PEOPLE_AND_DEPS]:{...C[c.WEB_DIRECTORY_PEOPLE_AND_DEPS],...E},[c.WEB_DIRECTORY_PEOPLE_AND_DEPS]:{...C[c.WEB_DIRECTORY_PEOPLE_AND_DEPS],...E},[c.WEB_DIRECTORY_FACULTY_RANK]:{...C[c.WEB_DIRECTORY_FACULTY__RANK],...E,deptIds:f,display:s,searchType:n}},I=o=>{j(o)},p={departments:c.WEB_DIRECTORY_DEPARTMENTS,people:c.WEB_DIRECTORY_PEOPLE_AND_DEPS,people_departments:c.WEB_DIRECTORY_PEOPLE_AND_DEPS,faculty_rank:c.WEB_DIRECTORY_FACULTY_RANK};return n!=="faculty_rank"?e.jsx(e.Fragment,{children:e.jsxs(J,{className:m?"grid-view":"",children:[T==="true"&&e.jsx(k,{filterLabel:"Filter By Last Initial",choices:G,onChoose:o=>R({...P,lastInit:o}),resetFilters:()=>R({...P,lastInit:""})}),e.jsx(q,{view:m,setView:_,label:"View"}),e.jsx("div",{className:"sort",children:e.jsx(M,{customSortOptions:x,sort:a,onChange:o=>I(o)})}),e.jsx("div",{className:"results",children:e.jsx(B,{engine:v[p[n]],itemsPerPage:parseInt(s==null?void 0:s.profilesPerPage,10)||S,sort:a,hidePaginator:(s==null?void 0:s.usePager)!=="1",filters:P,profilesToFilterOut:s==null?void 0:s.doNotDisplayProfiles,display:s,appPathFolder:g,restClientTag:"webdir",grid:m})})]})}):e.jsxs(X,{className:m?"grid-view":"",children:[e.jsx(q,{view:m,setView:_,label:"View"}),e.jsx(O,{...v[p[n]],alphaFilter:T,filters:P,grid:m,setGridView:_,className:"tabbed-panels"})]})}U.propTypes={deptIds:t.string,API_URL:t.string,searchApiVersion:t.string,searchType:t.string,ids:t.string,profileURLBase:t.string,appPathFolder:t.string,display:t.shape({defaultSort:t.string,doNotDisplayProfiles:t.string,profilesPerPage:t.string,usePager:t.string,grid:t.string||t.bool}),filters:t.shape({employee:t.string,expertise:t.string,title:t.string,campuses:t.string}),alphaFilter:t.string};U.__docgenInfo={description:`React component for displaying web directory search results.

@param {Object} props - The props for configuring the WebDirectory component.
@param {"departments" | "faculty_rank" | "people" | "people_departments"} props.searchType - The type of web directory search (e.g., 'departments', 'people').
@param {string} props.ids - The IDs used for searching (e.g., department IDs, ASURITE IDs).
@param {string} props.deptIds - The department IDs for searching.
@param {string} props.API_URL - The API URL for performing the search.
@param {string} props.searchApiVersion - The version of the search API to use.
@param {string} props.profileURLBase - The base URL for profile links.
@param {string} props.appPathFolder - The base path for the application folder.
@param {object} props.display - Display options for the search results.
@param {Object} props.filters - Filters for the search.
@param {string} props.alphaFilter - Indicates whether to enable alpha filtering.
@returns {JSX.Element} The WebDirectory component.`,methods:[],displayName:"WebDirectory",props:{alphaFilter:{defaultValue:{value:'"false"',computed:!1},description:"",type:{name:"string"},required:!1},deptIds:{description:"",type:{name:"string"},required:!1},API_URL:{description:"",type:{name:"string"},required:!1},searchApiVersion:{description:"",type:{name:"string"},required:!1},searchType:{description:"",type:{name:"string"},required:!1},ids:{description:"",type:{name:"string"},required:!1},profileURLBase:{description:"",type:{name:"string"},required:!1},appPathFolder:{description:"",type:{name:"string"},required:!1},display:{description:"",type:{name:"shape",value:{defaultSort:{name:"string",required:!1},doNotDisplayProfiles:{name:"string",required:!1},profilesPerPage:{name:"string",required:!1},usePager:{name:"string",required:!1},grid:{name:"custom",raw:"PropTypes.string || PropTypes.bool",required:!1}}},required:!1},filters:{description:"",type:{name:"shape",value:{employee:{name:"string",required:!1},expertise:{name:"string",required:!1},title:{name:"string",required:!1},campuses:{name:"string",required:!1}}},required:!1}}};export{U as W};
