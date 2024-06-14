"use strict";(self.webpackChunk_asu_component_cookie_consent=self.webpackChunk_asu_component_cookie_consent||[]).push([[801],{"./src/CookieConsent.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConsentDisabled:()=>ConsentDisabled,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CookieConsent_stories});var react=__webpack_require__("../../node_modules/react/index.js"),free_solid_svg_icons=__webpack_require__("../../node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),index_es=__webpack_require__("../../node_modules/@fortawesome/react-fontawesome/index.es.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);__webpack_require__("../../node_modules/dompurify/dist/purify.js");prop_types_default().shape({event:prop_types_default().string,action:prop_types_default().string,name:prop_types_default().string,region:prop_types_default().string,section:prop_types_default().string,component:prop_types_default().string,type:prop_types_default().string,text:prop_types_default().string});const trackGAEvent=({event="",action="",name="",type="",section="",text="",region="",component=""})=>{const{dataLayer}=window,e={event:event.toLowerCase(),action:action.toLowerCase(),name:name.toLowerCase(),type:type.toLowerCase(),region:region.toLowerCase(),section:section.toLowerCase(),text:text.toLowerCase(),component:component.toLowerCase()};dataLayer&&dataLayer.push(e)};const componentDatalayer=function trackReactComponent({packageName="",component="",type="",configuration={}}){packageName&&component?(window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[packageName]={component,type,configuration}):console.error("trackReactComponent: Missing required arguments.")};const CookieConsentWrapper=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 999;
  font-weight: 300;
  color: #191919;
  .cookie-consent-component {
    position: fixed;
    bottom: 2rem;
    margin-right: 1rem;
    &.ease-closing {
      transition-timing-function: ease-out;
      transition: 0.2s;
      transform: translateY(130%);
    }
    .container {
      position: relative;
      background: #e8e8e8;
      border: 1px solid #d0d0d0;
      padding: 1rem 1.5rem 1.5rem 1.5rem;
      max-width: 676px;
      width: 100%;
      margin: 0 auto;
      z-index: 999;
      box-sizing: border-box;
      float: left;
      bottom: 0;

      .content {
        width: 90%;
        font-size: 0.875rem;
        line-height: 1.5rem;
        margin: 0;
        p {
          margin: 0;
          a {
            color: #8c1d40;
            text-decoration: underline;
          }
        }
      }
      .accept-btn {
        color: #ffffff;
        background: #8c1d40;
        text-decoration: none;
        font-weight: 700;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        user-select: none;
        margin: 1rem 0 0 0;
        line-height: 1rem;
        font-size: 14px;
        border-radius: 25px;
        border: none;
        padding: 0.5rem 1.2rem;
        transition: 0.03s ease-in-out;
        &:not(:disabled):not(.disabled) {
          cursor: pointer;
        }
        &:hover {
          transform: scale(1.05);
        }
        &:active {
          transform: scale(1);
        }
      }
      .close-btn {
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        border-radius: 400rem;
        line-height: 1rem;
        transition: 0.03s ease-in-out;
        padding: 0.25rem 0.25rem;
        width: 2rem;
        height: 2rem;
        border: solid 1px #d0d0d0;
        background: #ffffff;
        font-size: 1rem;
        &:hover {
          transform: scale(1.05);
        }
        &:active {
          transform: scale(0.95);
        }
        &:not(:disabled):not(.disabled) {
          cursor: pointer;
        }
        @media (max-width: 768px) {
          top: 0.5rem;
          right: 0.5rem;
        }
      }

      // Fade animation
      animation: fade 1s;
      @keyframes fade {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }

    @media (max-width: 998px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
  button,
  a {
    text-decoration: none;
    &:focus {
      outline: none !important;
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
    }
  }
`,defaultGAEvent={event:"link",action:"click",name:"onclick",type:"internal link",region:"main content",section:"cookie banner"},now=new Date,CookieConsent=({enableCookieConsent,expirationTime})=>{const cookieConsentRef=(0,react.useRef)(null),[visible,setVisible]=(0,react.useState)(!1),updateLocalStorage=()=>{const{localStorage}=window,ttl=((date,days)=>{const dateWithDays=new Date(date);return dateWithDays.setDate(dateWithDays.getDate()+days),dateWithDays})(now,expirationTime).getTime();localStorage.setItem("cookieConsent",ttl.toString())},handleCloseConsent=()=>{updateLocalStorage(),cookieConsentRef.current.classList.add("ease-closing"),setTimeout((()=>{setVisible(!1)}),500)};return(0,react.useEffect)((()=>{"undefined"!=typeof window&&componentDatalayer({packageName:"component-cookie-consent",component:"CookieConsent",type:"NA",configuration:{expirationTime,enableCookieConsent}})}),[]),(0,react.useEffect)((()=>{const{localStorage}=window;if(localStorage){const item=localStorage.getItem("cookieConsent");setVisible(!item||now.getTime()>parseInt(item,10))}}),[]),enableCookieConsent&&visible?react.createElement(CookieConsentWrapper,null,react.createElement("div",{ref:cookieConsentRef,className:"cookie-consent-component"},react.createElement("div",{className:"container"},react.createElement("div",{className:"content"},react.createElement("p",null,"ASU websites use cookies to enhance user experience, analyze site usage, and assist with outreach and enrollment. By continuing to use this site, you are giving us your consent to do this. Learn more about cookies on ASU websites in our"," ",react.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.asu.edu/privacy#cookies"},"Privacy Statement."))),react.createElement("button",{type:"button",className:"accept-btn",onClick:()=>{handleCloseConsent(),trackGAEvent({...defaultGAEvent,text:"ok, i agree"})}},"Ok, I agree"),react.createElement("button",{type:"button",className:"close-btn","aria-label":"Close cookie consent",onClick:()=>{handleCloseConsent(),trackGAEvent({...defaultGAEvent,text:"close cross"})}},react.createElement(index_es.g,{icon:free_solid_svg_icons.GRI}))))):null};CookieConsent.propTypes={enableCookieConsent:prop_types_default().bool.isRequired,expirationTime:prop_types_default().number},CookieConsent.defaultProps={expirationTime:90},CookieConsent.__docgenInfo={description:"@param {CookieConsentProps} props\n@returns {JSX.Element}",methods:[],displayName:"CookieConsent",props:{expirationTime:{defaultValue:{value:"90",computed:!1},description:"",type:{name:"number"},required:!1},enableCookieConsent:{description:"",type:{name:"bool"},required:!0}}};const CookieConsent_stories={title:"UDS/ASU Cookie Consent",component:CookieConsent},Template=args=>react.createElement(CookieConsent,args);Template.displayName="Template";const Default=Template.bind({});Default.args={enableCookieConsent:!0,expirationTime:90};const ConsentDisabled=Template.bind({});ConsentDisabled.args={enableCookieConsent:!1};const __namedExportsOrder=["Default","ConsentDisabled"]}}]);