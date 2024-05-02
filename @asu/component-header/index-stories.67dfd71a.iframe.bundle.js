"use strict";(self.webpackChunk_asu_component_header=self.webpackChunk_asu_component_header||[]).push([[141],{"./src/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnimatedTitle:()=>AnimatedTitle,BreakpointXL:()=>BreakpointXL,Default:()=>Default,Empty:()=>Empty,ExpandOnHover:()=>ExpandOnHover,NoNavigation:()=>NoNavigation,NoNavigationWithButtons:()=>NoNavigationWithButtons,Partner:()=>index_stories_Partner,WithButtons:()=>WithButtons,WithMenuColumns:()=>WithMenuColumns,WithMobileNavTree:()=>WithMobileNavTree,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);const LogoPropTypes={alt:prop_types_default().string,title:prop_types_default().string,src:prop_types_default().string,mobileSrc:prop_types_default().string,brandLink:prop_types_default().string},TitlePropTypes={baseUrl:prop_types_default().string,parentOrg:prop_types_default().string,parentOrgUrl:prop_types_default().string,animate:prop_types_default().bool},LoginPropTypes={loggedIn:prop_types_default().bool,loginLink:prop_types_default().string,logoutLink:prop_types_default().string,userName:prop_types_default().string},ButtonPropTypes={text:prop_types_default().string.isRequired,color:prop_types_default().oneOf(["gold","maroon","light","dark"]),href:prop_types_default().string.isRequired,classes:prop_types_default().string,onClick:prop_types_default().func,onFocus:prop_types_default().func},NavTreePropTypes=prop_types_default().shape({id:prop_types_default().number,href:prop_types_default().string,text:prop_types_default().string,type:prop_types_default().string,selected:prop_types_default().bool,items:prop_types_default().arrayOf(prop_types_default().arrayOf(prop_types_default().object)),buttons:prop_types_default().arrayOf(prop_types_default().shape(ButtonPropTypes)),class:prop_types_default().string}),HeaderPropTypes={isPartner:prop_types_default().bool,navTree:prop_types_default().arrayOf(NavTreePropTypes),partnerLogo:prop_types_default().shape(LogoPropTypes),logo:prop_types_default().shape(LogoPropTypes),title:prop_types_default().string,parentOrg:TitlePropTypes.parentOrg,parentOrgUrl:TitlePropTypes.parentOrgUrl,baseUrl:TitlePropTypes.baseUrl,loggedIn:LoginPropTypes.loggedIn,userName:LoginPropTypes.userName,loginLink:LoginPropTypes.loginLink,onLoginClick:prop_types_default().func,logoutLink:LoginPropTypes.logoutLink,onLogoutClick:prop_types_default().func,buttons:prop_types_default().arrayOf(prop_types_default().shape(ButtonPropTypes)),breakpoint:prop_types_default().oneOf(["Lg","Xl"]),animateTitle:prop_types_default().bool,expandOnHover:prop_types_default().bool,mobileNavTree:prop_types_default().arrayOf(NavTreePropTypes),hasNavigation:prop_types_default().bool,searchUrl:prop_types_default().string,site:prop_types_default().string,renderDiv:prop_types_default().oneOf(["true","false"])};var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ButtonWrapper=styled_components_browser_esm.Ay.a`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  color: #191919;
  padding: 0.5rem 1rem;
  border-radius: 400rem;
  font-weight: 700;
  font-size: 0.875rem;
  transition: 0.03s ease-in-out;
  cursor: pointer;
  & + a {
    margin-left: 1rem;
  }
  &:hover {
    transform: scale(1.05);
  }
  &.button-light {
    background-color: #bfbfbf !important;
    color: #000000 !important;
  }
  &.button-gold {
    background-color: #ffc627 !important;
    color: #000000 !important;
  }
  &.button-dark {
    background-color: #191919 !important;
    color: #ffffff !important;
  }
  &.button-maroon {
    background-color: #8c1d40 !important;
    color: #ffffff !important;
  }
`,Button=({href,color,text,classes,onClick,onFocus})=>react.createElement(ButtonWrapper,{href,className:`button-${color} ${classes??""}`,onClick,onFocus},text);Button.displayName="Button",Button.propTypes={...ButtonPropTypes},Button.__docgenInfo={description:"@param {ButtonProps} props\n@returns {JSX.Element}",methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!0},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},onFocus:{description:"",type:{name:"func"},required:!1}}};const basicNavTree=[{href:"/",text:"Home",type:"icon-home",selected:!0,class:"test-class"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu",text:"Sublink 2"},{href:"https://campus.asu.edu",text:"Sublink 3"},{href:"https://campus.asu.edu",text:"Sublink 4"},{href:"https://asuonline.asu.edu/",text:"Sublink 5"},{href:"https://havasu.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 3",href:"#"},{text:"Link option 4",href:"#"},{text:"Link option 5",href:"#"},{text:"Link option 6",href:"#",onClick:()=>{alert("On Click Callback")}},{text:"Link option 7",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 8",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]}],navTreeMega=[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#"},{text:"Link option 2",href:"/",items:[[{href:"https://www.asu.edu/",text:"A test navigation item"},{href:"https://www.asu.edu/",text:"Mauris viverra, sem nec"},{href:"https://www.asu.edu/?feature=athletics",text:"Massa nunc dictum nam venenatis"},{href:"https://www.asu.edu/?feature=alumni",text:"Alumni"},{href:"https://www.asu.edu/?feature=giving",text:"Giving"},{href:"https://www.asu.edu/?feature=president",text:"President"},{href:"https://www.asu.edu/about",text:"About ASU"}]]},{text:"Link option 3",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 4",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column one"},{href:"https://havasu.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Phasellus egestas nec est "},{href:"https://campus.asu.edu/tempe/",text:"Pellentesque et mollis"},{href:"https://campus.asu.edu/west/",text:"Cras congue"},{href:"https://campus.asu.edu/polytechnic/",text:"Cras ut malesuada nisl"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Map"},{href:"https://campus.asu.edu/tempe/",text:"Tempe"},{href:"https://campus.asu.edu/west/",text:"West"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 5",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"Lake Havasu"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 6",href:"#",buttons:[{text:"CTA One",href:"https://asu.edu",color:"maroon"},{text:"CTA Two",href:"https://asu.edu",color:"gold"}],items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"The Lake Havasu Campus"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Call to Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column Five"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Buildings and directory"},{href:"https://campus.asu.edu/tempe/",text:"Some good news"},{href:"https://campus.asu.edu/west/",selected:!0,text:"Directory Admin Tools"}]]}];const componentDatalayer=function trackReactComponent({packageName="",component="",type="",configuration={}}){packageName&&component?(window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[packageName]={component,type,configuration}):console.error("trackReactComponent: Missing required arguments.")};var free_solid_svg_icons=__webpack_require__("../../node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),index_es=__webpack_require__("../../node_modules/@fortawesome/react-fontawesome/index.es.js");const breakpoints={Lg:"992px",Xl:"1260px"},AppContext=(0,react.createContext)(),AppContextProvider=({initialValue,children})=>{const value={...initialValue,breakpoint:breakpoints[initialValue.breakpoint]};return react.createElement(AppContext.Provider,{value},children)};AppContextProvider.displayName="AppContextProvider",AppContextProvider.propTypes={initialValue:prop_types_default().shape(HeaderPropTypes).isRequired,children:prop_types_default().node.isRequired};const useAppContext=()=>{const context=(0,react.useContext)(AppContext);if(void 0===context)throw new Error("useAppContext must be used within a AppContextProvider");return context};AppContextProvider.__docgenInfo={description:"",methods:[],displayName:"AppContextProvider",props:{initialValue:{description:"",type:{name:"shape",value:{isPartner:{name:"bool",required:!1},navTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},partnerLogo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},logo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},title:{name:"string",required:!1},parentOrg:{name:"custom",raw:"TitlePropTypes.parentOrg",required:!1},parentOrgUrl:{name:"custom",raw:"TitlePropTypes.parentOrgUrl",required:!1},baseUrl:{name:"custom",raw:"TitlePropTypes.baseUrl",required:!1},loggedIn:{name:"custom",raw:"LoginPropTypes.loggedIn",required:!1},userName:{name:"custom",raw:"LoginPropTypes.userName",required:!1},loginLink:{name:"custom",raw:"LoginPropTypes.loginLink",required:!1},onLoginClick:{name:"func",required:!1},logoutLink:{name:"custom",raw:"LoginPropTypes.logoutLink",required:!1},onLogoutClick:{name:"func",required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1},onFocus:{name:"func",required:!1}}},required:!1},breakpoint:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}],required:!1},animateTitle:{name:"bool",required:!1},expandOnHover:{name:"bool",required:!1},mobileNavTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},hasNavigation:{name:"bool",required:!1},searchUrl:{name:"string",required:!1},site:{name:"string",required:!1},renderDiv:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}],required:!1}}},required:!0},children:{description:"",type:{name:"node"},required:!0}}};const useIsMobile=breakpoint=>{const isMobileQuery=window?.matchMedia(`(max-width: ${breakpoint})`),[isMobile,setIsMobile]=(0,react.useState)(isMobileQuery?.matches),setMobile=e=>{setIsMobile(e.matches)};return(0,react.useEffect)((()=>(isMobileQuery.addEventListener("change",setMobile),()=>isMobileQuery.removeEventListener("change",setMobile))),[]),isMobile};__webpack_require__("../../node_modules/dompurify/dist/purify.js");function*idGenerator(key="id-",startIndex=0){let i=startIndex;for(;;)i+=1,yield key+i}function getCurrentScriptPath(){const match=(document.currentScript&&document.currentScript.src||"").match(/(.*\/)/);return match&&match.length>0?match[0].substr(0,match[0].length-1):"/"}const trackGAEvent=({event="",action="",name="",type="",section="",text="",region="",component=""})=>{const{dataLayer}=window,e={event:event.toLowerCase(),action:action.toLowerCase(),name:name.toLowerCase(),type:type.toLowerCase(),region:region.toLowerCase(),section:section.toLowerCase(),text:text.toLowerCase(),component:component.toLowerCase()};dataLayer&&dataLayer.push(e)},Wrapper=styled_components_browser_esm.Ay.div`
  background-color: #e8e8e8;
  min-height: 24px;
  transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
  .header-top {
    height: 100%;
    .nav {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .links-container {
        display: flex;
        .nav-link {
          color: #484848;
          font-size: 0.75rem;
          line-height: 0.75rem;
          padding: 0.25rem 0.5rem;
          margin-right: 0.5rem;
          white-space: nowrap;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }

          &.visually-hidden-focusable:not(:focus):not(:active) {
            clip: rect(0 0 0 0);
            clip-path: inset(100%);
            height: 1px;
            overflow: hidden;
            position: absolute;
            white-space: nowrap;
            width: 1px;
          }
        }
      }
    }
  }
  @media (max-width: ${({breakpoint})=>breakpoint}) {
    width: 100%;
    min-height: auto;
    position: relative;
    &:before {
      content: "";
      width: 100%;
      height: 50px;
      position: absolute;
      top: -50px;
      border-bottom: 1px solid #d0d0d0;
      background: linear-gradient(
        180deg,
        rgba(232, 232, 232, 0) 0%,
        rgba(232, 232, 232, 1) 100%
      );
    }
    .header-top {
      width: 100%;
      .nav {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column-reverse;
        .links-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-flow: row;
          justify-items: start;
          width: 100%;
          .nav-link {
            white-space: normal;
            color: #191919;
            margin-right: 0;
            text-align: center;
            width: 100%;
            font-size: 0.875rem;
            padding: 1rem 1.5rem;
            border-top: 1px solid #d0d0d0;
            justify-content: center;
            &:nth-child(even) {
              border-left: 1px solid #d0d0d0;
            }
          }
        }
      }
    }
  }
`,LoginWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  > a {
    padding: 0;
    margin: 0;
    color: #484848;
    text-decoration: none;
  }
  > span.name {
    font-weight: 700;
  }
  > a.signout:before {
    content: "(";
    margin-left: 4px;
  }
  > a.signout:after {
    content: ") ";
  }
  @media (max-width: ${({breakpoint})=>breakpoint}) {
    width: 100%;
  }
`,DEFAUL_GA_EVENT={section:"topbar"},Login=()=>{const{loggedIn,userName,logoutLink,loginLink,onLoginClick,onLogoutClick,breakpoint}=useAppContext();return react.createElement(LoginWrapper,{className:"nav-link login-status",breakpoint},loggedIn?react.createElement(react.Fragment,null,userName?react.createElement("span",{className:"name","data-testid":"user-name"},userName):"",react.createElement("a",{className:"signout",href:logoutLink,onFocus:()=>trackGAEvent({...DEFAUL_GA_EVENT,text:"sign out"}),onClick:e=>onLogoutClick?.(e)},"Sign Out")):react.createElement("a",{href:loginLink,onFocus:()=>trackGAEvent({...DEFAUL_GA_EVENT,text:"sign in"}),onClick:e=>onLoginClick?.(e)},"Sign In"))};Login.displayName="Login",Login.__docgenInfo={description:"",methods:[],displayName:"Login"};const SearchWrapper=styled_components_browser_esm.Ay.form`
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .search-button {
    transition: cubic-bezier(0.19, 1, 0.19, 1);
  }
  input {
    width: 200px;
    background-color: #ffffff;
    border: 0;
    border-radius: 0;
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    border: 1px solid #707070;
    margin: 0.5rem 0;
    display: unset;
    &:focus {
      border-color: transparent;
    }
  }
  .close-search {
    background-color: #ffffff;
    border: 1px solid #d0d0d0;
    border-radius: 100%;
    padding: 0.45rem 0.75rem;
    margin-left: 0.5rem;
  }
  &.open-search {
    margin-left: -1rem;
    .search-button {
      transform: translate(1.9rem);
      pointer-events: none;
    }
  }
  @media (max-width: ${({breakpoint})=>breakpoint}) {
    width: 100%;
    padding: 1rem 2rem;
    label {
      position: relative;
      font-size: 0.875rem;
      margin-bottom: 0;
      width: 100%;
      svg {
        position: absolute;
        top: 50%;
        left: 0.5rem;
        transform: translate(0, -50%);
      }
      input {
        width: 100%;
        border: unset;
        margin: 0;
      }
    }
  }
`,SEARCH_GA_EVENT={event:"search",action:"type",name:"onenter",type:"main search",region:"navbar",section:"topbar"};function handleSearch(e){return e.preventDefault(),setTimeout((()=>e.target.submit()),100),trackGAEvent({...SEARCH_GA_EVENT,text:e.target.elements.q.value})}const Search=()=>{const{breakpoint,searchUrl,site}=useAppContext(),isMobile=useIsMobile(breakpoint),inputRef=(0,react.useRef)(null),[open,setOpen]=(0,react.useState)(!1);(0,react.useEffect)((()=>{open&&inputRef.current.focus()}),[open]);const handleChangeVisibility=()=>{setOpen((prevState=>{const newState=!prevState;return trackGAEvent({...SEARCH_GA_EVENT,event:"link",action:"click",name:"onclick",text:newState?"search icon":"close search icon"}),newState}))};return react.createElement(SearchWrapper,{breakpoint,action:searchUrl,onSubmit:handleSearch,method:"get",name:"gs",className:open?"open-search":"","data-testid":"universal-nav-search-form"},isMobile?react.createElement("label",null,react.createElement(index_es.g,{icon:free_solid_svg_icons.MjD}),react.createElement("input",{ref:inputRef,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0,onChange:e=>trackGAEvent({...SEARCH_GA_EVENT,text:e.target.value})})):react.createElement(react.Fragment,null,react.createElement("button",{type:"button","aria-label":"Search asu.edu",onClick:handleChangeVisibility,className:"search-button","data-testid":"search-button"},react.createElement(index_es.g,{icon:free_solid_svg_icons.MjD})),open&&react.createElement(react.Fragment,null,react.createElement("input",{ref:inputRef,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0}),react.createElement("button",{type:"button","aria-label":"Search asu.edu",onClick:handleChangeVisibility,className:"close-search","data-testid":"close-search"},react.createElement(index_es.g,{icon:free_solid_svg_icons.GRI})))),react.createElement("input",{name:"url_host",value:site,type:"hidden"}),react.createElement("input",{name:"site",value:"default_collection",type:"hidden"}),react.createElement("input",{name:"sort",value:"date:D:L:d1",type:"hidden"}),react.createElement("input",{name:"output",value:"xml_no_dtd",type:"hidden"}),react.createElement("input",{name:"ie",value:"UTF-8",type:"hidden"}),react.createElement("input",{name:"oe",value:"UTF-8",type:"hidden"}),react.createElement("input",{name:"client",value:"asu_frontend",type:"hidden"}),react.createElement("input",{name:"proxystylesheet",value:"asu_frontend",type:"hidden"}))};Search.displayName="Search",Search.__docgenInfo={description:"",methods:[],displayName:"Search"};const UniversalNavbar_DEFAUL_GA_EVENT={section:"topbar"},UniversalNavbar=()=>{const{breakpoint}=useAppContext();return react.createElement(Wrapper,{breakpoint,className:"universal-nav","data-testid":"universal-navbar","data-elastic-exclude":"data-elastic-exclude"},react.createElement("div",{className:"container-xl"},react.createElement("div",{className:"header-top"},react.createElement("nav",{className:"nav","aria-label":"ASU"},react.createElement("div",{className:"links-container"},react.createElement("a",{className:"nav-link visually-hidden-focusable",href:"#skip-to-content"},"Skip to main content"),react.createElement("a",{className:"nav-link visually-hidden-focusable",href:`https://accessibility.asu.edu/report?a11yref=${function getURL(){try{return window.location.href}catch(error){return console.error(error),""}}()}`},"Report an accessibility problem"),react.createElement("a",{className:"nav-link",href:"https://asu.edu",onFocus:()=>trackGAEvent({...UniversalNavbar_DEFAUL_GA_EVENT,text:"asu home"})},"ASU Home"),react.createElement("a",{className:"nav-link",href:"https://my.asu.edu",onFocus:()=>trackGAEvent({...UniversalNavbar_DEFAUL_GA_EVENT,text:"my asu"})},"My ASU"),react.createElement("a",{className:"nav-link",href:"https://www.asu.edu/academics/colleges-schools",onFocus:()=>trackGAEvent({...UniversalNavbar_DEFAUL_GA_EVENT,text:"colleges and schools"})},"Colleges and Schools"),react.createElement(Login,null)),react.createElement(Search,null)))))};UniversalNavbar.displayName="UniversalNavbar",UniversalNavbar.__docgenInfo={description:"",methods:[],displayName:"UniversalNavbar"};const HeaderMainWrapper=styled_components_browser_esm.Ay.div`
  background-color: #ffffff;
  border-bottom: 1px solid #d0d0d0;
  padding: 0 12px;
  .navbar {
    padding: 0;
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
  }
  .navbar-brand {
    .vert {
      display: block;
      height: 72px;
      width: auto;
      margin: 20px 1rem 20px 0;
    }
    .horiz {
      display: none;
    }
  }
  .navbar-toggler {
    display: none;
  }
  .expand-title {
    width: 100%;
  }
  @media (min-width: ${({breakpoint})=>breakpoint}) {
    .no-navigation {
      margin-top: 16px;
      display: flex;
      align-items: center;
      .title {
        width: 100%;
      }
    }
  }
  @media (max-width: ${({breakpoint})=>breakpoint}) {
    padding: 0;
    .navbar {
      padding: 1.5rem 0 0 0;
      flex-wrap: wrap;
      justify-content: space-between;
      &.partner {
        flex-direction: row-reverse;
      }
    }
    .partner .content-container {
      min-height: calc(100vh - 240px);
    }
    .navbar-brand {
      padding: 0;
      margin: 0;

      .vert {
        display: none;
      }

      .horiz {
        display: block;
        height: 32px;
        width: auto;
        margin-bottom: 1rem;
        margin-left: 2rem;
      }
    }
    .navbar-toggler {
      display: initial;
      background: transparent;
      color: #191919;
      border: 0;
      border-radius: 50%;
      font-size: 1.25rem;
      margin-right: 2rem;
      padding: 0.25rem 0.45rem;
      &.collapsed {
        border-radius: 0;
      }
    }
    .no-navigation + nav .buttons-container {
      border-top: 1px solid #cccccc;
    }
  }
`,LogoWrapper=styled_components_browser_esm.Ay.a`
  display: unset;
  padding: 0;
  margin: 0;
  font-size: unset;
  line-height: unset;
  white-space: unset;
`,currentScriptPath=getCurrentScriptPath(),vertLogo=`${currentScriptPath}/assets/img/arizona-state-university-logo-vertical.png`,horizLogo=`${currentScriptPath}/assets/img/arizona-state-university-logo.png`,Logo=()=>{const{logo}=useAppContext();return react.createElement(LogoWrapper,{href:logo?.brandLink??"https://asu.edu",className:"navbar-brand","data-testid":"logo",onFocus:()=>trackGAEvent({text:"asu logo"})},react.createElement("img",{className:"vert",src:logo?.src??vertLogo,alt:logo?.alt??"Arizona State University",title:logo?.title??"ASU home page",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),react.createElement("img",{className:"horiz",src:logo?.mobileSrc??horizLogo,alt:logo?.alt??"Arizona State University",title:logo?.title??"ASU home page",width:"400",height:"72",decoding:"async",fetchpriority:"high"}))};Logo.displayName="Logo",Logo.__docgenInfo={description:"",methods:[],displayName:"Logo"};const index_styles_Wrapper=styled_components_browser_esm.Ay.nav`
  white-space: nowrap;
  > .content-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    height: auto;
    margin: inherit;
    font-size: inherit;
    color: inherit;
    flex-direction: row;
  }
  .nav-list {
    display: flex;
    margin: 0;
  }
  @media (max-width: ${({breakpoint})=>breakpoint}) {
    width: 100%;
    > .content-container {
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: auto;
      min-height: calc(100vh - 277px);
      max-height: calc(100vh - 277px);
      > *:last-child {
        margin-bottom: min(75px, 15vw);
      }
    }
    .nav-list {
      flex-direction: column;
      width: 100%;
    }
    .buttons-container {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      width: 100%;
    }
  }
`,DropdownWrapper=styled_components_browser_esm.Ay.div`
  position: fixed;
  background-color: #ffffff;
  border: 1px solid #d0d0d0;
  margin: 0;
  z-index: 1031;
  visibility: hidden;
  white-space: normal;
  &.opened {
    visibility: visible;
  }
  &.mega {
    width: 100%;
    left: 0;
    margin-left: 0 !important;
  }
  &.aligned-right:not(.mega) {
    position: absolute;
    right: 0;
  }
  > .dropdown-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 2rem;
    ul {
      width: 16rem;
      max-width: 282px;
      display: flex;
      flex-direction: column;
      &:not(:last-child) {
        padding-right: 2rem;
        margin-right: 2rem;
        border-right: 1px solid #d0d0d0;
      }
      .ul-heading {
        margin-top: 0;
        font-size: 1.5rem;
        letter-spacing: -0.035em;
        font-weight: 700;
        text-align: left;
        opacity: 1;
        margin: 1rem 0;
        line-height: calc(100% + 0.12em);
      }
      .nav-link {
        padding: 0;
        a {
          width: 100%;
          display: inline-block;
          margin: 0.75rem 0;
          position: relative;
          line-height: 1rem;
          color: #191919;
          &:hover {
            color: #8c1d40;
            text-decoration: underline;
          }
        }
        & + .nav-button {
          margin-top: auto;
          padding-top: 2rem;
          & + .nav-button {
            margin-top: 1rem;
          }
        }
      }
    }
  }
  .dropdown-button-container {
    border-top: 1px solid #d0d0d0;
    border-bottom: 1px solid #d0d0d0;
    margin-top: 1rem;
    > div {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      padding: 1rem 0;
    }
  }
  @media (max-width: ${({breakpoint})=>breakpoint}) {
    position: initial;
    border: none;
    max-height: unset;
    visibility: visible;
    display: none;
    &.opened {
      display: block;
    }
    > .dropdown-container {
      max-width: 100%;
      padding: 1rem 2rem;
      flex-direction: column;
      ul {
        width: 100%;
        max-width: 100%;
        padding: 0 1rem;
        margin-bottom: 1rem;
        &:not(:last-child) {
          padding-right: 1rem;
          margin: 0 0 1rem 0;
          border: none;
        }
        .ul-heading {
          font-size: 1.25rem;
        }
        .nav-button {
          padding-top: 1.5rem;
        }
        .nav-link {
          padding: 0 1rem;
          &:not(:last-child) {
            border-bottom: 1px solid #d0d0d0;
          }
          a {
            padding: 1rem 0;
            margin: 0;
          }
        }
      }
    }
    .dropdown-button-container {
      margin-top: 0;
      > div {
        max-width: 100%;
        padding: 1rem 3rem;
      }
    }
  }
`,DropdownItem=({dropdownName,items,buttons,classes,listId})=>{const{breakpoint}=useAppContext(),isMega=items?.length>2,dropdownRef=(0,react.useRef)(null),[alignedRight,setAlignedRight]=(0,react.useState)(!1),MULTIPLE_SUBMENUS=items?.length>1;(0,react.useEffect)((()=>{if(window&&dropdownRef.current){const elPosition=dropdownRef.current.getBoundingClientRect().left,breakpointPosition=.55*window.innerWidth;setAlignedRight(elPosition>breakpointPosition)}}),[]);const stopPropagation=e=>{e.stopPropagation()};return react.createElement(DropdownWrapper,{ref:dropdownRef,className:`${classes}${alignedRight?" aligned-right":""}${isMega?" mega":""}`,breakpoint},react.createElement("div",{id:MULTIPLE_SUBMENUS?listId:null,className:"dropdown-container"},items?.map(((item,index0)=>{const key=idGenerator(`dropdown-item-${index0}-`).next().value;return react.createElement("ul",{id:MULTIPLE_SUBMENUS?`${listId}-${key}`:listId,key},item.map(((link,index)=>((link,index)=>{const key=`${link.text}-${link.href||index}`;return"heading"===link.type?react.createElement("h3",{key,className:"ul-heading"},link.text):"button"===link.type?react.createElement("li",{key,className:"nav-button"},react.createElement(Button,{text:link.text,color:link.color||"dark",href:link.href,onClick:stopPropagation,onFocus:()=>trackGAEvent({text:link.text,component:dropdownName})})):react.createElement("li",{key,className:"nav-link"},react.createElement("a",{href:link.href,onClick:stopPropagation,onFocus:()=>trackGAEvent({text:link.text,component:dropdownName})},link.text))})(link,index))))}))),buttons&&react.createElement("div",{className:"dropdown-button-container"},react.createElement("div",null,buttons.map(((button,index)=>react.createElement(Button,{key:`${button.text}-${button.href||index}`,color:button.color,text:button.text,href:button.href,onClick:stopPropagation}))))))};DropdownItem.displayName="DropdownItem",DropdownItem.propTypes={dropdownName:prop_types_default().string,items:prop_types_default().arrayOf(prop_types_default().arrayOf(prop_types_default().object)),buttons:prop_types_default().arrayOf(prop_types_default().shape(ButtonPropTypes)),classes:prop_types_default().string,listId:prop_types_default().string},DropdownItem.__docgenInfo={description:"@param {DropdownItemProps} props\n@returns {JSX.Element}",methods:[],displayName:"DropdownItem",props:{dropdownName:{description:"",type:{name:"string"},required:!1},items:{description:"",type:{name:"arrayOf",value:{name:"arrayOf",value:{name:"object"}}},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1},onFocus:{name:"func",required:!1}}}},required:!1},classes:{description:"",type:{name:"string"},required:!1},listId:{description:"",type:{name:"string"},required:!1}}};const NavItemWrapper=styled_components_browser_esm.Ay.li`
  position: relative;
  padding: 0;
  margin: 0 0.5rem 0 0;
  &:has(.open-link) > a:after,
  &:hover > a:after {
    width: calc(100% + 24px);
  }
  > a {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    line-height: 1rem;
    color: #191919;
    &:after {
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      content: "";
      display: block;
      height: 0.5rem;
      position: relative;
      top: 0.6rem;
      right: 12px;
      width: 0;
      background-image: linear-gradient(
        to right,
        transparent 0.5%,
        #ffc627 0.5%
      );
    }
    &.nav-item-selected:after {
      width: calc(100% + 24px);
    }
    &.nav-item {
      display: block;
    }
    > span {
      position: relative;
      .chevron-icon {
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
        margin-left: 0.5rem;
        font-size: 0.75rem;

        &.open {
          transform: rotate(180deg);
        }
      }
    }
    .mobile-only {
      display: none;
    }
  }
  @media (max-width: ${({breakpoint})=>breakpoint}) {
    border-bottom: 1px solid #cccccc;
    margin: 0;
    &:first-child {
      border-top: 1px solid #cccccc;
    }
    &:hover > a:after {
      width: 100%;
    }
    .icon-nav-item {
      display: none;
    }
    > a {
      padding: 1rem 2rem 0.75rem;
      width: 100%;
      &.open-link {
        border-bottom: 1px solid #cccccc;
      }
      &:after {
        right: 0;
        top: 0.8rem;
      }
      &.nav-item-selected:after {
        width: 100%;
      }
      > span {
        display: flex;
        justify-content: space-between;
        .chevron-icon {
          font-size: 1.25rem;
        }
      }
      .mobile-only {
        display: initial;
      }
    }
  }
`,DROPDOWNS_GA_EVENTS={event:"collapse",type:"click"},NavLinkIcon=({children})=>react.createElement(react.Fragment,null,react.createElement(index_es.g,{icon:free_solid_svg_icons.v02,className:"icon-nav-item",alt:""}),react.createElement("span",{className:"mobile-only"},children));NavLinkIcon.propTypes={children:prop_types_default().node};const NavItem=({link,setItemOpened,itemOpened})=>{const clickRef=(0,react.useRef)(null),opened=link.id===itemOpened,{breakpoint,expandOnHover,title}=useAppContext(),isMobile=useIsMobile(breakpoint);(0,react.useEffect)((()=>{const handleClickOutside=event=>{opened&&!clickRef?.current?.contains(event.target)&&setItemOpened()};return document.addEventListener("click",handleClickOutside,!0),()=>{document.removeEventListener("click",handleClickOutside,!0)}}),[opened]);const renderNavLinks=(0,react.useMemo)((()=>"icon-home"===link.type?react.createElement(NavLinkIcon,null,link.text):react.createElement("span",null,link.text,!!link.items?.length&&react.createElement(index_es.g,{icon:free_solid_svg_icons.Jt$,className:"chevron-icon "+(opened?"open":""),alt:""}))),[link]),dispatchGAEvent=()=>{const isDropdown=!!link.items?.length,action=opened?"close":"open",{text}=link;trackGAEvent(isDropdown?{...DROPDOWNS_GA_EVENTS,action,text}:{text:"icon-home"===link.type?"home button":text})},handleOnMouseEnterLeave=()=>{expandOnHover&&!isMobile&&(setItemOpened(),dispatchGAEvent())};return react.createElement(NavItemWrapper,{breakpoint,ref:clickRef,onMouseEnter:handleOnMouseEnterLeave,onMouseLeave:handleOnMouseEnterLeave},react.createElement("a",{onClick:e=>{link.items&&(e.preventDefault(),expandOnHover||isMobile?isMobile&&setItemOpened():setItemOpened()),dispatchGAEvent(),link.onClick?.(e)},href:link.href,"aria-expanded":()=>"true","aria-owns":link.items?`dropdown-${link.id}`:null,className:`${link.class?link.class:""}${link.selected?" nav-item-selected":""}${opened?" open-link":""}`,tabIndex:0,"data-testid":"nav-item",title:"icon-home"===link.type&&title?`${title} home page`:link.text},renderNavLinks),link.items&&react.createElement(DropdownItem,{items:link.items,buttons:link.buttons,dropdownName:link.text,classes:`header-dropdown-${link.id} ${opened?"opened":""}`,listId:`dropdown-${link.id}`}))};NavItem.displayName="NavItem",NavItem.propTypes={link:NavTreePropTypes,setItemOpened:prop_types_default().func,itemOpened:prop_types_default().number},NavItem.__docgenInfo={description:"@param {{ link: NavTreeProps, setItemOpened: Function, itemOpened: number }} props\n@returns {JSX.Element}",methods:[],displayName:"NavItem",props:{link:{description:"",type:{name:"shape",value:{id:{name:"number",required:!1},href:{name:"string",required:!1},text:{name:"string",required:!1},type:{name:"string",required:!1},selected:{name:"bool",required:!1},items:{name:"arrayOf",value:{name:"arrayOf",value:{name:"object"}},required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1},onFocus:{name:"func",required:!1}}},required:!1},class:{name:"string",required:!1}}},required:!1},setItemOpened:{description:"",type:{name:"func"},required:!1},itemOpened:{description:"",type:{name:"number"},required:!1}}};const NavbarContainer=()=>{const{navTree,mobileNavTree,buttons,breakpoint}=useAppContext(),isMobile=useIsMobile(breakpoint),[itemOpened,setItemOpened]=(0,react.useState)(void 0),renderItem=(link,index)=>{const item={...link,id:index},key=idGenerator(`${link.text}-${index}-`).next().value;return react.createElement(NavItem,{key,link:item,setItemOpened:()=>{return itemId=index,void setItemOpened((prev=>itemOpened===itemId?void 0:itemId));var itemId},itemOpened})};return react.createElement(index_styles_Wrapper,{breakpoint,"data-testid":"navigation","aria-label":"Main"},(navTree?.length||mobileNavTree?.length||buttons?.length)&&react.createElement("div",{className:"content-container"},(navTree?.length||mobileNavTree?.length)&&react.createElement("ul",{className:"nav-list"},mobileNavTree?.length&&isMobile?mobileNavTree?.map(((link,i)=>renderItem(link,i))):navTree?.map(((link,i)=>renderItem(link,i)))),!!buttons?.length&&react.createElement("form",{className:"buttons-container","data-testid":"buttons-container"},buttons?.map((button=>react.createElement(Button,(0,esm_extends.A)({},button,{key:button.text,onFocus:()=>trackGAEvent({text:button.text})})))))),isMobile&&react.createElement(UniversalNavbar,null))};NavbarContainer.displayName="NavbarContainer",NavbarContainer.__docgenInfo={description:"",methods:[],displayName:"NavbarContainer"};const PartnerLogosWrapper=styled_components_browser_esm.Ay.div`
  margin: 0.5rem 0;
  a {
    display: inline-block;
    &:not(:last-child) {
      border-right: 1px solid #d0d0d0;
      margin-right: 1.5rem;
      padding-right: 1.5rem;
    }
    img {
      height: 52px;
      width: auto;
      &.vert {
        display: initial;
      }
      &.horiz {
        display: none;
      }
    }
  }
  @media (max-width: ${({breakpoint})=>breakpoint}) {
    margin: 0.5rem 0 1rem 1rem;
    a {
      &:not(:last-child) {
        margin-right: 1rem;
        padding-right: 1rem;
      }
      img {
        height: 32px;
        width: auto;
        &.vert {
          display: none;
        }
        &.horiz {
          height: 24px;
          width: auto;
          display: initial;
        }
      }
    }
  }
  @media (max-width: 370px) {
    margin: 0.5rem 0 1rem 0.5rem;
    a {
      &:not(:last-child) {
        margin-right: 0.5rem;
        padding-right: 0.5rem;
      }
      img {
        height: 29px;
        &.horiz {
          height: 21px;
        }
      }
    }
  }
`,Partner_currentScriptPath=getCurrentScriptPath(),asuVertLogo=`${Partner_currentScriptPath}/assets/img/arizona-state-university-logo-vertical.png`,asuHorizLogo=`${Partner_currentScriptPath}/assets/img/arizona-state-university-logo.png`,starbucksLogo=`${Partner_currentScriptPath}/assets/img/asu-starbucks.png`,Partner=()=>{const{partnerLogo,logo:asuLogo,breakpoint}=useAppContext();return react.createElement(PartnerLogosWrapper,{breakpoint,"data-testid":"partner"},react.createElement("a",{href:partnerLogo?.brandLink??"https://starbucks.asu.edu/",onFocus:()=>trackGAEvent({text:"starbucks logo"})},react.createElement("img",{src:partnerLogo?.src??starbucksLogo,alt:partnerLogo?.alt??"ASU Starbucks logo",width:"232",height:"81",decoding:"async",fetchpriority:"high"})),react.createElement("a",{href:asuLogo?.brandLink??"https://asu.edu",onFocus:()=>trackGAEvent({text:"asu logo"})},react.createElement("img",{className:"vert",src:asuLogo?.src??asuVertLogo,alt:asuLogo?.alt??"Arizona State University",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),react.createElement("img",{className:"horiz",src:asuLogo?.mobileSrc??asuHorizLogo,alt:asuLogo?.alt??"Arizona State University",width:"400",height:"72",decoding:"async",fetchpriority:"high"})))};Partner.displayName="Partner",Partner.__docgenInfo={description:"",methods:[],displayName:"Partner"};const checkFirstLoad=root=>{const now=new Date,siteRoot=root||window.location.hostname,titleLoaded=localStorage.getItem("title_loaded"),titleLoadedExpired=now.getTime()>parseInt(titleLoaded,10),isLocalSite="localhost"===siteRoot,hasMatchingReferrer=document.referrer.includes(siteRoot);if(isLocalSite||!hasMatchingReferrer&&(!titleLoaded||titleLoadedExpired)){const expirationTime=((date,minutes)=>{const dateWithMinutes=new Date(date);return dateWithMinutes.setMinutes(dateWithMinutes.getMinutes()+minutes),dateWithMinutes})(now,10).getTime();return localStorage.setItem("title_loaded",expirationTime.toString()),!0}return!1},breakpointMap={"992px":"993px","1260px":"1261px"},TitleWrapper=styled_components_browser_esm.Ay.div`
  line-height: 1;
  font-size: 1rem;
  font-weight: 700;
  padding: 0 2rem 1.5rem 2rem;
  letter-spacing: -1px;
  display: inline-block;
  margin: 0;
  width: max-content;

  &.active {
    background-position: -200%;
  }

  > .unit-name {
    display: none;
  }
  .unit-name,
  .subunit-name,
  .title-subunit-name {
    color: #191919;
  }

  .subunit-name,
  .title-subunit-name {
    background-image: linear-gradient(
      to right,
      transparent 51%,
      #ffc626 51%,
      95%,
      transparent
    );
    background-position: 0 0;
    background-size: 200%;
    display: inline-block;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    transition-duration: 1.5s;
    &.active {
      background-position: -200%;
    }
  }

  @media (min-width: ${({breakpoint})=>breakpointMap[breakpoint]}) {
    line-height: 1;
    font-weight: 700;
    padding: 0;
    margin: 1rem 0 0.5rem 0;
    > .unit-name {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      display: block;

      :hover {
        text-decoration: underline;
      }
    }
    .subunit-name {
      font-size: 1.5rem;
      margin-bottom: 0;
      display: inline-block;

      :hover {
        text-decoration: underline;
      }
    }
    .title-subunit-name {
      font-size: 2rem;
      font-weight: 700;
      display: inline-block;
      margin: 0.5rem 0 0.5rem 0;

      :hover {
        text-decoration: underline;
      }
    }
  }
`,Title=()=>{const[active,setActive]=(0,react.useState)(!1),{title,parentOrg,parentOrgUrl,baseUrl,breakpoint,animateTitle}=useAppContext();return(0,react.useEffect)((()=>{if(!1!==animateTitle){let root="/"===baseUrl?window.location.hostname:baseUrl;root.includes(window.location.hostname)||0!==root.indexOf("/")||(root=window.location.hostname+root),checkFirstLoad(root)&&setActive(!0)}}),[active,animateTitle,baseUrl]),parentOrg?react.createElement(TitleWrapper,{breakpoint,className:"title","data-testid":"title"},react.createElement("a",{className:"unit-name",href:parentOrgUrl,onFocus:()=>trackGAEvent({text:parentOrg}),title:`${parentOrg} home page`},parentOrg),react.createElement("a",{className:"subunit-name "+(active?"active":""),href:baseUrl,onFocus:()=>trackGAEvent({text:title}),title:`${title} home page`},title)):react.createElement(TitleWrapper,{breakpoint,className:"title","data-testid":"title"},react.createElement("a",{className:"title-subunit-name "+(active?"active":""),href:baseUrl,onFocus:()=>trackGAEvent({text:title}),title:`${title} home page`},title))};Title.displayName="Title",Title.propTypes={...TitlePropTypes},Title.__docgenInfo={description:"",methods:[],displayName:"Title",props:{baseUrl:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},animate:{description:"",type:{name:"bool"},required:!1}}};const HeaderMain=()=>{const{breakpoint,isPartner,hasNavigation}=useAppContext(),[mobileMenuOpen,setMobileMenuOpen]=(0,react.useState)(!1),isMobile=useIsMobile(breakpoint);return react.createElement(react.Fragment,null,!isMobile&&react.createElement(UniversalNavbar,null),react.createElement(HeaderMainWrapper,{breakpoint},react.createElement("div",{className:"container-xl"},react.createElement("div",{className:"header-main"},react.createElement("div",{className:"navbar navbar-expand-xl "+(isPartner?"partner":"")},!isPartner&&react.createElement(Logo,null),react.createElement("button",{className:"navbar-toggler"+(mobileMenuOpen?"":" collapsed"),type:"button",onClick:()=>{setMobileMenuOpen((prevState=>!prevState)),trackGAEvent({event:"collapse",action:mobileMenuOpen?"close":"open",type:"click",text:"menu button tablet"})},"aria-label":"Toggle navigation"},react.createElement(index_es.g,{icon:mobileMenuOpen?free_solid_svg_icons.GRI:free_solid_svg_icons.ckx,alt:""})),react.createElement("div",{className:`${isPartner?"":"expand-title"}${hasNavigation?"":" no-navigation"}`},isPartner?react.createElement(Partner,null):react.createElement(Title,null),!isMobile&&react.createElement(NavbarContainer,null)),mobileMenuOpen&&isMobile&&react.createElement(NavbarContainer,null))))))};HeaderMain.__docgenInfo={description:"",methods:[],displayName:"HeaderMain"};const header_styles_breakpoints={Lg:"992px",Xl:"1260px"},Header=styled_components_browser_esm.Ay.header`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  .container-xl {
    height: 100%;
    max-width: 1224px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
  button,
  a {
    text-decoration: none;
    &:focus {
      outline: none !important;
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
    }
  }
  @media (min-width: ${({breakpoint})=>header_styles_breakpoints[breakpoint]}) {
    &.scrolled {
      .universal-nav {
        min-height: 0;
        height: 0;
        overflow: hidden;
      }
      .title {
        margin: 0.5rem 0 0 0;
      }
      a.unit-name {
        display: none;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      a.subunit-name {
        margin: 0.52rem 0;
      }
      a.subunit-name,
      a.title-subunit-name {
        font-size: 1.5em;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      .navbar-brand img {
        height: 64px;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
        margin: 12px 1rem 12px 0;
      }
    }
  }
  @media (max-width: 1260px) {
    .container-xl {
      padding-left: 0;
      padding-right: 0;
      max-width: 100%;
    }
  }
`,HeaderDiv=styled_components_browser_esm.Ay.div`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  .container-xl {
    height: 100%;
    max-width: 1224px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
  button,
  a {
    text-decoration: none;
    &:focus {
      outline: none !important;
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
    }
  }
  @media (min-width: ${({breakpoint})=>header_styles_breakpoints[breakpoint]}) {
    &.scrolled {
      .universal-nav {
        min-height: 0;
        height: 0;
        overflow: hidden;
      }
      .title {
        margin: 0.5rem 0 0 0;
      }
      a.unit-name {
        display: none;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      a.subunit-name {
        margin: 0.52rem 0;
      }
      a.subunit-name,
      a.title-subunit-name {
        font-size: 1.5em;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      .navbar-brand img {
        height: 64px;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
        margin: 12px 1rem 12px 0;
      }
    }
  }
  @media (max-width: 1260px) {
    .container-xl {
      padding-left: 0;
      padding-right: 0;
      max-width: 100%;
    }
  }
`,tryAddActivePage=navTree=>{if(!Array.isArray(navTree)||0===navTree.length)return navTree;if((navTree=>navTree?.find((x=>x.selected)))(navTree))return navTree;let currentPath="";if(window?.location&&(currentPath=window.location.pathname+window.location.search),!currentPath)return navTree;const index=((navTree,path)=>navTree?.findIndex((item=>item?.href===path||Array.isArray(item.items)&&item.items?.flat().find((({href})=>href===path)))))(navTree,currentPath);if(-1===index)return navTree;const newTree=[...navTree];return newTree[index].selected=!0,newTree},ASUHeader=({isPartner,navTree:rawNavTree,title,baseUrl,parentOrg,parentOrgUrl,partnerLogo,logo,loggedIn,userName,loginLink,onLoginClick,logoutLink,onLogoutClick,buttons,breakpoint,animateTitle,expandOnHover,mobileNavTree:rawMobileNavTree,searchUrl,site,renderDiv="false"})=>{const navTree=tryAddActivePage(rawNavTree),mobileNavTree=tryAddActivePage(rawMobileNavTree),headerRef=(0,react.useRef)(null),handleWindowScroll=()=>{window.scrollY>headerRef.current.getBoundingClientRect().top?headerRef.current.classList.add("scrolled"):headerRef.current.classList.remove("scrolled")};(0,react.useEffect)((()=>{"undefined"!=typeof window&&componentDatalayer({packageName:"component-header",component:"Component Header",type:"NA",configuration:{site,isPartner,searchUrl,navTree,parentOrg,buttons,mobileNavTree}})}),[]),(0,react.useEffect)((()=>(window?.addEventListener("scroll",handleWindowScroll),()=>window.removeEventListener("scroll",handleWindowScroll))),[]);return react.createElement(AppContextProvider,{initialValue:{isPartner,navTree,title,baseUrl,parentOrg,parentOrgUrl,partnerLogo,logo,loggedIn,userName,loginLink,onLoginClick,logoutLink,onLogoutClick,buttons,breakpoint,animateTitle,expandOnHover,mobileNavTree,hasNavigation:!!navTree?.length||!!mobileNavTree?.length,searchUrl,site}},(()=>{const Wrapper="true"===renderDiv?HeaderDiv:Header;return react.createElement(Wrapper,{id:"asuHeader",ref:headerRef,breakpoint},react.createElement(HeaderMain,null))})())};ASUHeader.displayName="ASUHeader",ASUHeader.propTypes={...HeaderPropTypes},ASUHeader.defaultProps={isPartner:!1,baseUrl:"/",breakpoint:"Xl",expandOnHover:!1},ASUHeader.__docgenInfo={description:"@param {HeaderProps} props\n@returns {JSX.Element}",methods:[],displayName:"ASUHeader",props:{renderDiv:{defaultValue:{value:'"false"',computed:!1},description:"",type:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}]},required:!1},isPartner:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},baseUrl:{defaultValue:{value:'"/"',computed:!1},description:"",type:{name:"string"},required:!1},breakpoint:{defaultValue:{value:'"Xl"',computed:!1},description:"",type:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}]},required:!1},expandOnHover:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},navTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},partnerLogo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},logo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},title:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1},userName:{description:"",type:{name:"string"},required:!1},loginLink:{description:"",type:{name:"string"},required:!1},onLoginClick:{description:"",type:{name:"func"},required:!1},logoutLink:{description:"",type:{name:"string"},required:!1},onLogoutClick:{description:"",type:{name:"func"},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1},onFocus:{name:"func",required:!1}}}},required:!1},animateTitle:{description:"",type:{name:"bool"},required:!1},mobileNavTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},hasNavigation:{description:"",type:{name:"bool"},required:!1},searchUrl:{description:"",type:{name:"string"},required:!1},site:{description:"",type:{name:"string"},required:!1}}};const index_stories={title:"UDS/ASU Header",component:ASUHeader,argTypes:{renderDiv:{control:"select",options:["true","false"],description:"Either 'true' or 'false'. If 'true', the header will be rendered as a div instead of a header element."}}},Template=args=>react.createElement(react.Fragment,null,react.createElement(ASUHeader,args),react.createElement("div",{style:{width:"100%",height:"200vh",background:"#f0f0f0",paddingTop:40,marginTop:140}},react.createElement("h1",{style:{textAlign:"center",fontFamily:"Arial"}},"Scroll section"))),Default=Template.bind({});Default.args={loggedIn:!1,userName:"",navTree:basicNavTree,title:"Subdomain name",breakpoint:"Lg",searchUrl:"https://search.asu.edu/search",site:"subdomain",renderDiv:"false"};const Empty=Template.bind({});Empty.args={};const NoNavigation=Template.bind({});NoNavigation.args={title:"Subdomain name",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const NoNavigationWithButtons=Template.bind({});NoNavigationWithButtons.args={title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const BreakpointXL=Template.bind({});BreakpointXL.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:basicNavTree,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const WithMobileNavTree=Template.bind({});WithMobileNavTree.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:basicNavTree,mobileNavTree:[{href:"/",text:"This",type:"icon-home",class:"home",selected:!0},{text:"Link option 1",href:"https://webapp4.asu.edu/myasu/"},{text:"Link option 2",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column Two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"}]]}],title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const WithButtons=Template.bind({});WithButtons.args={navTree:[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",selected:!0},{text:"Link option 3",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu/",text:"Sublink 2"},{href:"https://campus.asu.edu/",text:"Sublink 3"},{href:"https://campus.asu.edu/",text:"Sublink 4"},{href:"https://campus.asu.edu/",text:"Sublink 5"},{href:"https://asuonline.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 4",href:"#"}],title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold",classes:"custom-class"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const WithMenuColumns=Template.bind({});WithMenuColumns.args={navTree:navTreeMega,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const ExpandOnHover=Template.bind({});ExpandOnHover.args={navTree:navTreeMega,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",expandOnHover:!0,searchUrl:"https://search.asu.edu/search",site:"subdomain"};const index_stories_Partner=Template.bind({});index_stories_Partner.args={isPartner:!0,navTree:basicNavTree,loggedIn:!1,userName:"",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const AnimatedTitle=(args=>react.createElement(react.Fragment,null,react.createElement(ASUHeader,(0,esm_extends.A)({},args,{animateTitle:!0})),react.createElement("div",{style:{marginTop:200,textAlign:"center"}},react.createElement(Button,{text:"Animate Title",color:"dark",onClick:()=>{localStorage.getItem("title_loaded")&&localStorage.removeItem("title_loaded"),setTimeout((()=>{window.location.reload()}),1e3)}})))).bind({});AnimatedTitle.args={title:"Subdomain name",navTree:basicNavTree,loggedIn:!1,logoutLink:"/caslogout",loginLink:"/cas",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const __namedExportsOrder=["Default","Empty","NoNavigation","NoNavigationWithButtons","BreakpointXL","WithMobileNavTree","WithButtons","WithMenuColumns","ExpandOnHover","Partner","AnimatedTitle"]}}]);
//# sourceMappingURL=index-stories.67dfd71a.iframe.bundle.js.map