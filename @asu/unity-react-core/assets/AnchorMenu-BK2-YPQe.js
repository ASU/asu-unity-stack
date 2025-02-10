import{j as o}from"./jsx-runtime-BXONz2zb.js";import{c as w}from"./index-DbSsuYgj.js";import{P as i}from"./index-Cqy-YfF9.js";import{r as d}from"./index-mEo-t6td.js";import{q as N}from"./html-utils-v5abHA4p.js";import"./googleAnalytics-BohoIYAK.js";import{B as R}from"./Button-DXDwVTgi.js";import{G as T}from"./GaEventWrapper-Bd8rODjQ.js";import{q as L}from"./styled-components.browser.esm-heMRbImm.js";function P(t){const[a,p]=d.useState(!1);return d.useEffect(()=>{const r=window.matchMedia(t);r.matches!==a&&p(r.matches);const l=()=>{p(r.matches)};return r.addEventListener("change",l),()=>r.removeEventListener("change",l)},[a,t]),a}let y=!1;const F=(t,a)=>{y||(y=!0,setTimeout(()=>{t(),y=!1},a))};let k;const O=(t,a)=>{window.clearTimeout(k),k=window.setTimeout(t,a)},D=L.div`
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
`,x="On This Page",W={event:"collapse",name:"onclick",type:"click",text:x},B=({items:t,firstElementId:a,focusFirstFocusableElement:p=!1})=>{const r=d.useRef(null),l=P("(max-width: 991px)"),[n,b]=d.useState({hasHeader:!1,hasAltMenuSpacing:!1,containerClass:"container-xl",activeContainer:"",showMenu:!1,sticky:!1}),v=l?110:142,E=()=>{var f;const e={},s=window.scrollY,c=(f=document.getElementById(a))==null?void 0:f.getBoundingClientRect().top,m=103;c>=0&&(e.sticky=!1,e.activeContainer=""),s>r.current.getBoundingClientRect().top&&(e.sticky=!0);const h=n.hasHeader?v+m:m;t==null||t.forEach(({targetIdName:g})=>{const u=document.getElementById(g),H=(u==null?void 0:u.getBoundingClientRect().top)-h,S=(u==null?void 0:u.getBoundingClientRect().bottom)-h;H<0&&S>0&&(e.activeContainer=g)}),b(g=>({...g,...e}))},M=()=>{F(E,150),O(E,150)},I=()=>!!(document.getElementById("asu-header")||document.getElementById("headerContainer")||document.getElementById("asuHeader")),A=()=>!!document.getElementById("degreeDetailPageContainer");function C(e=null){if(e===null)return n.containerClass;const s=Object.values(e.classList).filter(c=>["container-sm","container-md","container","container-lg","container-xl","container-fluid"].includes(c));return s.length>0?s.join(" "):C(e.parentElement)}d.useEffect(()=>{const e=document.getElementById(a)||null,s={hasHeader:I(),hasAltMenuSpacing:A(),containerClass:C(e)};b(c=>({...c,...s}))},[]),d.useEffect(()=>(window==null||window.addEventListener("scroll",M),()=>window.removeEventListener("scroll",M)),[n.hasHeader]);const j=e=>{var h,f;const s=window.scrollY-(n.hasHeader?v+100:100),c=l?410:90;let m=((h=document.getElementById(e))==null?void 0:h.getBoundingClientRect().top)+s;r.current.classList.contains("sticky")||(m-=c),p&&((f=N(`#${e}`))==null||f.focus()),window.scrollTo({top:m,behavior:"smooth"})},q=()=>{b(e=>({...e,showMenu:!e.showMenu}))};return(t==null?void 0:t.length)>0&&o.jsx(D,{requiresAltMenuSpacing:n.hasAltMenuSpacing,ref:r,className:w("uds-anchor-menu","uds-anchor-menu-expanded-lg","mb-4",{sticky:n.sticky,"with-header":n.hasHeader}),style:n.showMenu?{borderBottom:0}:{},children:o.jsxs("div",{className:`${n.containerClass} uds-anchor-menu-wrapper`,children:[l?o.jsx(T,{gaData:{...W,action:n.showMenu?"close":"open"},children:o.jsx("button",{className:w("mobile-menu-toggler",{"show-menu":n.showMenu}),type:"button",onClick:q,"data-bs-toggle":"collapse","data-bs-target":"#collapseAnchorMenu","aria-controls":"collapseAnchorMenu",children:o.jsxs("h4",{children:[x,":",o.jsx("i",{className:"fas fa-chevron-down"})]})})}):o.jsxs("h4",{children:[x,":"]}),o.jsx("div",{"data-testid":"anchor-menu-container",id:"collapseAnchorMenu",className:w("card","card-body","collapse",{show:n.showMenu}),children:o.jsx("nav",{"data-testid":"anchor-menu",className:"nav","aria-label":x,children:t==null?void 0:t.map(e=>o.jsx(R,{"data-testid":`anchor-item-${e.targetIdName}`,classes:w("nav-link",{active:n.activeContainer===e.targetIdName}).split(" "),ariaLabel:e.text,label:e.text,icon:e.icon,onClick:()=>j(e.targetIdName)},e.targetIdName))})})]})})};B.propTypes={items:i.arrayOf(i.shape({text:i.string.isRequired,targetIdName:i.string.isRequired,icon:i.arrayOf(i.string)})).isRequired,firstElementId:i.string.isRequired,focusFirstFocusableElement:i.bool};B.__docgenInfo={description:`@param {AnchorMenuProps} props
@returns {JSX.Element}`,methods:[],displayName:"AnchorMenu",props:{focusFirstFocusableElement:{defaultValue:{value:"false",computed:!1},description:`If true it focus the first focusable element into the section
If false it focus the next menu item into the nav bar`,type:{name:"bool"},required:!1},items:{description:"Anchor menu items",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},targetIdName:{name:"string",required:!0},icon:{name:"arrayOf",value:{name:"string"},required:!1}}}},required:!0},firstElementId:{description:"First next sibling element of the anchor menu",type:{name:"string"},required:!0}}};export{B as A};
