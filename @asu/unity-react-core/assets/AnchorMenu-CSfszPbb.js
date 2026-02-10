import{j as a}from"./jsx-runtime-VU7BY01E.js";import{r as u}from"./index-BebQxa19.js";import{q as N}from"./html-utils-Cf06jDgj.js";import{t as R,d as F}from"./timers-DqmY83kz.js";import{P as r}from"./Layout-XUDhei8Q.js";import{c as w}from"./index-X6w4Ppxe.js";import{B as L}from"./Button-B8s0eqac.js";import{u as P,G as T}from"./GaEventWrapper-C3Yx4ICT.js";import{q as O}from"./styled-components.browser.esm-BltV_-4f.js";function D(t){const[c,p]=u.useState(!1);return u.useEffect(()=>{const s=window.matchMedia(t);s.matches!==c&&p(s.matches);const f=()=>{p(s.matches)};return s.addEventListener("change",f),()=>s.removeEventListener("change",f)},[c,t]),c}const $=O.div`
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    &.with-header {
      top: ${({requiresAltMenuSpacing:t})=>t?"112px":"142px"};
      @media (max-width: 992px) {
        top: 110px;
      }
    }
  }
  .mobile-menu-toggler {
    background-color: transparent;
    border: none;
    cursor: default;
    h4 {
      align-items: center;
    }
    i {
      transition: all 0.3s;
    }
  }
  .show-menu i {
    transform: rotate(-180deg);
  }
  .nav-link {
    border: none;
    background-color: #ffffff;
    i {
      width: 2rem !important;
      text-align: center !important;
    }
  }
`,x="On This Page",W={event:"collapse",name:"onclick",type:"click",text:x},k=({items:t,firstElementId:c,focusFirstFocusableElement:p=!1})=>{const{isReact:s,isBootstrap:f}=P(),b=u.useRef(null),y=D("(max-width: 991px)"),[n,v]=u.useState({hasHeader:!1,hasAltMenuSpacing:!1,containerClass:"container-xl",activeContainer:"",showMenu:!1,sticky:!1}),E=y?110:142,M=()=>{var h;const e={},o=window.scrollY,i=(h=document.getElementById(c))==null?void 0:h.getBoundingClientRect().top,d=103;i>=0&&(e.sticky=!1,e.activeContainer=""),o>b.current.getBoundingClientRect().top&&(e.sticky=!0);const m=n.hasHeader?E+d:d;t==null||t.forEach(({targetIdName:g})=>{const l=document.getElementById(g),q=(l==null?void 0:l.getBoundingClientRect().top)-m,H=(l==null?void 0:l.getBoundingClientRect().bottom)-m;q<0&&H>0&&(e.activeContainer=g)}),v(g=>({...g,...e}))},C=()=>{R(M,150),F(M,150)},I=()=>!!(document.getElementById("asu-header")||document.getElementById("headerContainer")||document.getElementById("asuHeader")),A=()=>!!document.getElementById("degreeDetailPageContainer");function B(e=null){if(e===null)return n.containerClass;const o=Object.values(e.classList).filter(i=>["container-sm","container-md","container","container-lg","container-xl","container-fluid"].includes(i));return o.length>0?o.join(" "):B(e.parentElement)}u.useEffect(()=>{const e=document.getElementById(c)||null,o={hasHeader:I(),hasAltMenuSpacing:A(),containerClass:B(e)};v(i=>({...i,...o}))},[]),u.useEffect(()=>(window==null||window.addEventListener("scroll",C),()=>window.removeEventListener("scroll",C)),[n.hasHeader]);const S=e=>{var m,h;const o=window.scrollY-(n.hasHeader?E+100:100),i=y?410:90;let d=((m=document.getElementById(e))==null?void 0:m.getBoundingClientRect().top)+o;b.current.classList.contains("sticky")||(d-=i),p&&((h=N(`#${e}`))==null||h.focus()),window.scrollTo({top:d,behavior:"smooth"})},j=()=>{v(e=>({...e,showMenu:!e.showMenu}))};return(t==null?void 0:t.length)>0&&a.jsx($,{requiresAltMenuSpacing:n.hasAltMenuSpacing,ref:b,id:"uds-anchor-menu",className:w("uds-anchor-menu","uds-anchor-menu-expanded-lg","mb-4",{sticky:n.sticky,"with-header":n.hasHeader}),style:n.showMenu?{borderBottom:0}:{},children:a.jsxs("div",{className:`${n.containerClass} uds-anchor-menu-wrapper`,children:[y?a.jsx(T,{gaData:{...W,action:n.showMenu?"close":"open"},children:a.jsx("button",{className:w("mobile-menu-toggler",{"show-menu":n.showMenu}),type:"button",onClick:j,"data-bs-toggle":"collapse","data-bs-target":"#collapseAnchorMenu","aria-controls":"collapseAnchorMenu",children:a.jsxs("h4",{children:[x,":",a.jsx("i",{className:"fas fa-chevron-down"})]})})}):a.jsxs("h4",{children:[x,":"]}),a.jsx("div",{"data-testid":"anchor-menu-container",id:"collapseAnchorMenu",className:w("card","card-body","collapse",{show:n.showMenu}),children:a.jsx("nav",{"data-testid":"anchor-menu",className:"nav","aria-label":x,children:t==null?void 0:t.map(e=>a.jsx(L,{"data-testid":`anchor-item-${e.targetIdName}`,classes:w("nav-link",{active:n.activeContainer===e.targetIdName}).split(" "),ariaLabel:e.text,label:e.text,icon:e.icon,onClick:s&&(()=>S(e.targetIdName)),href:f&&`#${e.targetIdName}`},e.targetIdName))})})]})})};k.propTypes={items:r.arrayOf(r.shape({text:r.string.isRequired,targetIdName:r.string.isRequired,icon:r.arrayOf(r.string)})).isRequired,firstElementId:r.string.isRequired,focusFirstFocusableElement:r.bool};k.__docgenInfo={description:`@param {AnchorMenuProps} props
@returns {JSX.Element}`,methods:[],displayName:"AnchorMenu",props:{focusFirstFocusableElement:{defaultValue:{value:"false",computed:!1},description:`If true it focus the first focusable element into the section
If false it focus the next menu item into the nav bar`,type:{name:"bool"},required:!1},items:{description:"Anchor menu items",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},targetIdName:{name:"string",required:!0},icon:{name:"arrayOf",value:{name:"string"},required:!1}}}},required:!0},firstElementId:{description:"First next sibling element of the anchor menu",type:{name:"string"},required:!0}}};export{k as A};
