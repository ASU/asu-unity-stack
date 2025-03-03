import{r as On,R as Sr}from"./index-CeVadUvY.js";import{g as Mo}from"./_commonjsHelpers-B3tUAs5q.js";var _r={exports:{}},ke={};var Do=On,Fo=Symbol.for("react.element"),Uo=Symbol.for("react.fragment"),jo=Object.prototype.hasOwnProperty,zo=Do.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ho={key:!0,ref:!0,__self:!0,__source:!0};function wr(t,e,n){var a,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(a in e)jo.call(e,a)&&!Ho.hasOwnProperty(a)&&(r[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps,e)r[a]===void 0&&(r[a]=e[a]);return{$$typeof:Fo,type:t,key:o,ref:s,props:r,_owner:zo.current}}ke.Fragment=Uo;ke.jsx=wr;ke.jsxs=wr;_r.exports=ke;var m=_r.exports;const kr=""+new URL("endorsedLogo-DPPmUtP1.png",import.meta.url).href;var Or={exports:{}},Wo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",qo=Wo,Yo=qo;function Nr(){}function Cr(){}Cr.resetWarningCache=Nr;var Go=function(){function t(a,r,o,s,l,d){if(d!==Yo){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Cr,resetWarningCache:Nr};return n.PropTypes=n,n};Or.exports=Go();var V=Or.exports;const p=Mo(V);function Bo({packageName:t="",component:e="",type:n="",configuration:a={}}){if(!t||!e){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[t]={component:e,type:n,configuration:a}}const Vo={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]};function $o(t,e,n){return(e=Ko(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ma(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ma(Object(n),!0).forEach(function(a){$o(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ma(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Xo(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ko(t){var e=Xo(t,"string");return typeof e=="symbol"?e:e+""}const da=()=>{};let Nn={},Ir={},Pr=null,Lr={mark:da,measure:da};try{typeof window<"u"&&(Nn=window),typeof document<"u"&&(Ir=document),typeof MutationObserver<"u"&&(Pr=MutationObserver),typeof performance<"u"&&(Lr=performance)}catch{}const{userAgent:pa=""}=Nn.navigator||{},dt=Nn,T=Ir,ga=Pr,he=Lr;dt.document;const st=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",Rr=~pa.indexOf("MSIE")||~pa.indexOf("Trident/");var Jo=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Zo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Mr={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Qo={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Dr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],j="classic",Oe="duotone",ti="sharp",ei="sharp-duotone",Fr=[j,Oe,ti,ei],ni={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ai={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ri=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),oi={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ii=["fak","fa-kit","fakd","fa-kit-duotone"],ha={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},si=["kit"],li={kit:{"fa-kit":"fak"}},ci=["fak","fakd"],fi={kit:{fak:"fa-kit"}},ya={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ye={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ui=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],mi=["fak","fa-kit","fakd","fa-kit-duotone"],di={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},pi={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},gi={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},sn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},hi=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ln=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ui,...hi],yi=["solid","regular","light","thin","duotone","brands"],Ur=[1,2,3,4,5,6,7,8,9,10],bi=Ur.concat([11,12,13,14,15,16,17,18,19,20]),vi=[...Object.keys(gi),...yi,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ye.GROUP,ye.SWAP_OPACITY,ye.PRIMARY,ye.SECONDARY].concat(Ur.map(t=>"".concat(t,"x"))).concat(bi.map(t=>"w-".concat(t))),Ai={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ot="___FONT_AWESOME___",cn=16,jr="fa",zr="svg-inline--fa",At="data-fa-i2svg",fn="data-fa-pseudo-element",xi="data-fa-pseudo-element-pending",Cn="data-prefix",In="data-icon",ba="fontawesome-i2svg",Ei="async",Ti=["HTML","HEAD","STYLE","SCRIPT"],Hr=(()=>{try{return!0}catch{return!1}})();function oe(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[j]}})}const Wr=c({},Mr);Wr[j]=c(c(c(c({},{"fa-duotone":"duotone"}),Mr[j]),ha.kit),ha["kit-duotone"]);const Si=oe(Wr),un=c({},oi);un[j]=c(c(c(c({},{duotone:"fad"}),un[j]),ya.kit),ya["kit-duotone"]);const va=oe(un),mn=c({},sn);mn[j]=c(c({},mn[j]),fi.kit);const Pn=oe(mn),dn=c({},pi);dn[j]=c(c({},dn[j]),li.kit);oe(dn);const _i=Jo,qr="fa-layers-text",wi=Zo,ki=c({},ni);oe(ki);const Oi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xe=Qo,Ni=[...si,...vi],ee=dt.FontAwesomeConfig||{};function Ci(t){var e=T.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ii(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}T&&typeof T.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Ii(Ci(n));r!=null&&(ee[a]=r)});const Yr={styleDefault:"solid",familyDefault:j,cssPrefix:jr,replacementClass:zr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ee.familyPrefix&&(ee.cssPrefix=ee.familyPrefix);const Dt=c(c({},Yr),ee);Dt.autoReplaceSvg||(Dt.observeMutations=!1);const h={};Object.keys(Yr).forEach(t=>{Object.defineProperty(h,t,{enumerable:!0,set:function(e){Dt[t]=e,ne.forEach(n=>n(h))},get:function(){return Dt[t]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(t){Dt.cssPrefix=t,ne.forEach(e=>e(h))},get:function(){return Dt.cssPrefix}});dt.FontAwesomeConfig=h;const ne=[];function Pi(t){return ne.push(t),()=>{ne.splice(ne.indexOf(t),1)}}const lt=cn,tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Li(t){if(!t||!st)return;const e=T.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=T.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return T.head.insertBefore(e,a),t}const Ri="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ae(){let t=12,e="";for(;t-- >0;)e+=Ri[Math.random()*62|0];return e}function Ft(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ln(t){return t.classList?Ft(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Gr(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mi(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Gr(t[n]),'" '),"").trim()}function Ne(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Rn(t){return t.size!==tt.size||t.x!==tt.x||t.y!==tt.y||t.rotate!==tt.rotate||t.flipX||t.flipY}function Di(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),d={transform:"".concat(o," ").concat(s," ").concat(l)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:d,path:u}}function Fi(t){let{transform:e,width:n=cn,height:a=cn,startCentered:r=!1}=t,o="";return r&&Rr?o+="translate(".concat(e.x/lt-n/2,"em, ").concat(e.y/lt-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/lt,"em), calc(-50% + ").concat(e.y/lt,"em)) "):o+="translate(".concat(e.x/lt,"em, ").concat(e.y/lt,"em) "),o+="scale(".concat(e.size/lt*(e.flipX?-1:1),", ").concat(e.size/lt*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Ui=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Br(){const t=jr,e=zr,n=h.cssPrefix,a=h.replacementClass;let r=Ui;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let Aa=!1;function Ke(){h.autoAddCss&&!Aa&&(Li(Br()),Aa=!0)}var ji={mixout(){return{dom:{css:Br,insertCss:Ke}}},hooks(){return{beforeDOMElementCreation(){Ke()},beforeI2svg(){Ke()}}}};const it=dt||{};it[ot]||(it[ot]={});it[ot].styles||(it[ot].styles={});it[ot].hooks||(it[ot].hooks={});it[ot].shims||(it[ot].shims=[]);var et=it[ot];const Vr=[],$r=function(){T.removeEventListener("DOMContentLoaded",$r),Se=1,Vr.map(t=>t())};let Se=!1;st&&(Se=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),Se||T.addEventListener("DOMContentLoaded",$r));function zi(t){st&&(Se?setTimeout(t,0):Vr.push(t))}function ie(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Gr(t):"<".concat(e," ").concat(Mi(n),">").concat(a.map(ie).join(""),"</").concat(e,">")}function xa(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Je=function(e,n,a,r){var o=Object.keys(e),s=o.length,l=n,d,u,y;for(a===void 0?(d=1,y=e[o[0]]):(d=0,y=a);d<s;d++)u=o[d],y=l(y,e[u],u,e);return y};function Hi(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function pn(t){const e=Hi(t);return e.length===1?e[0].toString(16):null}function Wi(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ea(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function gn(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Ea(e);typeof et.hooks.addPack=="function"&&!a?et.hooks.addPack(t,Ea(e)):et.styles[t]=c(c({},et.styles[t]||{}),r),t==="fas"&&gn("fa",e)}const{styles:re,shims:qi}=et,Xr=Object.keys(Pn),Yi=Xr.reduce((t,e)=>(t[e]=Object.keys(Pn[e]),t),{});let Mn=null,Kr={},Jr={},Zr={},Qr={},to={};function Gi(t){return~Ni.indexOf(t)}function Bi(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Gi(r)?r:null}const eo=()=>{const t=a=>Je(re,(r,o,s)=>(r[s]=Je(o,a,{}),r),{});Kr=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=o}),a)),Jr=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=o}),a)),to=t((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(l=>{a[l]=o}),a});const e="far"in re||h.autoFetchSvg,n=Je(qi,(a,r)=>{const o=r[0];let s=r[1];const l=r[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Zr=n.names,Qr=n.unicodes,Mn=Ce(h.styleDefault,{family:h.familyDefault})};Pi(t=>{Mn=Ce(t.styleDefault,{family:h.familyDefault})});eo();function Dn(t,e){return(Kr[t]||{})[e]}function Vi(t,e){return(Jr[t]||{})[e]}function bt(t,e){return(to[t]||{})[e]}function no(t){return Zr[t]||{prefix:null,iconName:null}}function $i(t){const e=Qr[t],n=Dn("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function pt(){return Mn}const ao=()=>({prefix:null,iconName:null,rest:[]});function Xi(t){let e=j;const n=Xr.reduce((a,r)=>(a[r]="".concat(h.cssPrefix,"-").concat(r),a),{});return Fr.forEach(a=>{(t.includes(n[a])||t.some(r=>Yi[a].includes(r)))&&(e=a)}),e}function Ce(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=j}=e,a=Si[n][t];if(n===Oe&&!t)return"fad";const r=va[n][t]||va[n][a],o=t in et.styles?t:null;return r||o||null}function Ki(t){let e=[],n=null;return t.forEach(a=>{const r=Bi(h.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Ta(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Ie(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=ln.concat(mi),o=Ta(t.filter(x=>r.includes(x))),s=Ta(t.filter(x=>!ln.includes(x))),l=o.filter(x=>(a=x,!Dr.includes(x))),[d=null]=l,u=Xi(o),y=c(c({},Ki(s)),{},{prefix:Ce(d,{family:u})});return c(c(c({},y),ts({values:t,family:u,styles:re,config:h,canonical:y,givenPrefix:a})),Ji(n,a,y))}function Ji(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?no(r):{},s=bt(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!re.far&&re.fas&&!h.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Zi=Fr.filter(t=>t!==j||t!==Oe),Qi=Object.keys(sn).filter(t=>t!==j).map(t=>Object.keys(sn[t])).flat();function ts(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=t,l=n===Oe,d=e.includes("fa-duotone")||e.includes("fad"),u=s.familyDefault==="duotone",y=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(d||u||y)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Zi.includes(n)&&(Object.keys(o).find(v=>Qi.includes(v))||s.autoFetchSvg)){const v=ri.get(n).defaultShortPrefixId;a.prefix=v,a.iconName=bt(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=pt()||"fas"),a}class es{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=c(c({},this.definitions[o]||{}),r[o]),gn(o,r[o]);const s=Pn[j][o];s&&gn(s,r[o]),eo()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:l}=a[r],d=l[2];e[o]||(e[o]={}),d.length>0&&d.forEach(u=>{typeof u=="string"&&(e[o][u]=l)}),e[o][s]=l}),e}}let Sa=[],It={};const Mt={},ns=Object.keys(Mt);function as(t,e){let{mixoutsTo:n}=e;return Sa=t,It={},Object.keys(Mt).forEach(a=>{ns.indexOf(a)===-1&&delete Mt[a]}),Sa.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{It[s]||(It[s]=[]),It[s].push(o[s])})}a.provides&&a.provides(Mt)}),n}function hn(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(It[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function xt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(It[t]||[]).forEach(o=>{o.apply(null,n)})}function gt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Mt[t]?Mt[t].apply(null,e):void 0}function yn(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||pt();if(e)return e=bt(n,e)||e,xa(ro.definitions,n,e)||xa(et.styles,n,e)}const ro=new es,rs=()=>{h.autoReplaceSvg=!1,h.observeMutations=!1,xt("noAuto")},os={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return st?(xt("beforeI2svg",t),gt("pseudoElements2svg",t),gt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,zi(()=>{ss({autoReplaceSvgRoot:e}),xt("watch",t)})}},is={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ce(t[0]);return{prefix:n,iconName:bt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(h.cssPrefix,"-"))>-1||t.match(_i))){const e=Ie(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||pt(),iconName:bt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=pt();return{prefix:e,iconName:bt(e,t)||t}}}},$={noAuto:rs,config:h,dom:os,parse:is,library:ro,findIconDefinition:yn,toHtml:ie},ss=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=T}=t;(Object.keys(et.styles).length>0||h.autoFetchSvg)&&st&&h.autoReplaceSvg&&$.dom.i2svg({node:e})};function Pe(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ie(n))}}),Object.defineProperty(t,"node",{get:function(){if(!st)return;const n=T.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ls(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:s}=t;if(Rn(s)&&n.found&&!a.found){const{width:l,height:d}=n,u={x:l/d/2,y:.5};r.style=Ne(c(c({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function cs(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(h.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:s}),children:a}]}]}function Fn(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:l,maskId:d,titleId:u,extra:y,watchable:x=!1}=t,{width:v,height:_}=n.found?n:e,C=ci.includes(a),B=[h.replacementClass,r?"".concat(h.cssPrefix,"-").concat(r):""].filter(R=>y.classes.indexOf(R)===-1).filter(R=>R!==""||!!R).concat(y.classes).join(" ");let w={children:[],attributes:c(c({},y.attributes),{},{"data-prefix":a,"data-icon":r,class:B,role:y.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(_)})};const I=C&&!~y.classes.indexOf("fa-fw")?{width:"".concat(v/_*16*.0625,"em")}:{};x&&(w.attributes[At]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(u||ae())},children:[l]}),delete w.attributes.title);const O=c(c({},w),{},{prefix:a,iconName:r,main:e,mask:n,maskId:d,transform:o,symbol:s,styles:c(c({},I),y.styles)}),{children:N,attributes:E}=n.found&&e.found?gt("generateAbstractMask",O)||{children:[],attributes:{}}:gt("generateAbstractIcon",O)||{children:[],attributes:{}};return O.children=N,O.attributes=E,s?cs(O):ls(O)}function _a(t){const{content:e,width:n,height:a,transform:r,title:o,extra:s,watchable:l=!1}=t,d=c(c(c({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(d[At]="");const u=c({},s.styles);Rn(r)&&(u.transform=Fi({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);const y=Ne(u);y.length>0&&(d.style=y);const x=[];return x.push({tag:"span",attributes:d,children:[e]}),o&&x.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),x}function fs(t){const{content:e,title:n,extra:a}=t,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=Ne(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Ze}=et;function bn(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(Xe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Xe.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Xe.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const us={found:!1,width:512,height:512};function ms(t,e){!Hr&&!h.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function vn(t,e){let n=e;return e==="fa"&&h.styleDefault!==null&&(e=pt()),new Promise((a,r)=>{if(n==="fa"){const o=no(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Ze[e]&&Ze[e][t]){const o=Ze[e][t];return a(bn(o))}ms(t,e),a(c(c({},us),{},{icon:h.showMissingIcons&&t?gt("missingIconAbstract")||{}:{}}))})}const wa=()=>{},An=h.measurePerformance&&he&&he.mark&&he.measure?he:{mark:wa,measure:wa},Jt='FA "6.7.2"',ds=t=>(An.mark("".concat(Jt," ").concat(t," begins")),()=>oo(t)),oo=t=>{An.mark("".concat(Jt," ").concat(t," ends")),An.measure("".concat(Jt," ").concat(t),"".concat(Jt," ").concat(t," begins"),"".concat(Jt," ").concat(t," ends"))};var Un={begin:ds,end:oo};const Ae=()=>{};function ka(t){return typeof(t.getAttribute?t.getAttribute(At):null)=="string"}function ps(t){const e=t.getAttribute?t.getAttribute(Cn):null,n=t.getAttribute?t.getAttribute(In):null;return e&&n}function gs(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(h.replacementClass)}function hs(){return h.autoReplaceSvg===!0?xe.replace:xe[h.autoReplaceSvg]||xe.replace}function ys(t){return T.createElementNS("http://www.w3.org/2000/svg",t)}function bs(t){return T.createElement(t)}function io(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ys:bs}=e;if(typeof t=="string")return T.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(io(o,{ceFn:n}))}),a}function vs(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const xe={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(io(n),e)}),e.getAttribute(At)===null&&h.keepOriginalSource){let n=T.createComment(vs(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ln(e).indexOf(h.replacementClass))return xe.replace(t);const a=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,l)=>(l===h.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>ie(o)).join(`
`);e.setAttribute(At,""),e.innerHTML=r}};function Oa(t){t()}function so(t,e){const n=typeof e=="function"?e:Ae;if(t.length===0)n();else{let a=Oa;h.mutateApproach===Ei&&(a=dt.requestAnimationFrame||Oa),a(()=>{const r=hs(),o=Un.begin("mutate");t.map(r),o(),n()})}}let jn=!1;function lo(){jn=!0}function xn(){jn=!1}let _e=null;function Na(t){if(!ga||!h.observeMutations)return;const{treeCallback:e=Ae,nodeCallback:n=Ae,pseudoElementsCallback:a=Ae,observeMutationsRoot:r=T}=t;_e=new ga(o=>{if(jn)return;const s=pt();Ft(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!ka(l.addedNodes[0])&&(h.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&h.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&ka(l.target)&&~Oi.indexOf(l.attributeName))if(l.attributeName==="class"&&ps(l.target)){const{prefix:d,iconName:u}=Ie(Ln(l.target));l.target.setAttribute(Cn,d||s),u&&l.target.setAttribute(In,u)}else gs(l.target)&&n(l.target)})}),st&&_e.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function As(){_e&&_e.disconnect()}function xs(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function Es(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=Ie(Ln(t));return r.prefix||(r.prefix=pt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Vi(r.prefix,t.innerText)||Dn(r.prefix,pn(t.innerText))),!r.iconName&&h.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ts(t){const e=Ft(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return h.autoA11y&&(n?e["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(a||ae()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ss(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ca(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Es(t),o=Ts(t),s=hn("parseNodeAttributes",{},t);let l=e.styleParser?xs(t):[];return c({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},s)}const{styles:_s}=et;function co(t){const e=h.autoReplaceSvg==="nest"?Ca(t,{styleParser:!1}):Ca(t);return~e.extra.classes.indexOf(qr)?gt("generateLayersText",t,e):gt("generateSvgReplacementMutation",t,e)}function ws(){return[...ii,...ln]}function Ia(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!st)return Promise.resolve();const n=T.documentElement.classList,a=y=>n.add("".concat(ba,"-").concat(y)),r=y=>n.remove("".concat(ba,"-").concat(y)),o=h.autoFetchSvg?ws():Dr.concat(Object.keys(_s));o.includes("fa")||o.push("fa");const s=[".".concat(qr,":not([").concat(At,"])")].concat(o.map(y=>".".concat(y,":not([").concat(At,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=Ft(t.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const d=Un.begin("onTree"),u=l.reduce((y,x)=>{try{const v=co(x);v&&y.push(v)}catch(v){Hr||v.name==="MissingIcon"&&console.error(v)}return y},[]);return new Promise((y,x)=>{Promise.all(u).then(v=>{so(v,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),d(),y()})}).catch(v=>{d(),x(v)})})}function ks(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;co(t).then(n=>{n&&so([n],e)})}function Os(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:yn(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:yn(r||{})),t(a,c(c({},n),{},{mask:r}))}}const Ns=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=tt,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:l=null,classes:d=[],attributes:u={},styles:y={}}=e;if(!t)return;const{prefix:x,iconName:v,icon:_}=t;return Pe(c({type:"icon"},t),()=>(xt("beforeDOMElementCreation",{iconDefinition:t,params:e}),h.autoA11y&&(s?u["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(l||ae()):(u["aria-hidden"]="true",u.focusable="false")),Fn({icons:{main:bn(_),mask:r?bn(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:v,transform:c(c({},tt),n),symbol:a,title:s,maskId:o,titleId:l,extra:{attributes:u,styles:y,classes:d}})))};var Cs={mixout(){return{icon:Os(Ns)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ia,t.nodeCallback=ks,t}}},provides(t){t.i2svg=function(e){const{node:n=T,callback:a=()=>{}}=e;return Ia(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:l,symbol:d,mask:u,maskId:y,extra:x}=n;return new Promise((v,_)=>{Promise.all([vn(a,s),u.iconName?vn(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(C=>{let[B,w]=C;v([e,Fn({icons:{main:B,mask:w},prefix:s,iconName:a,transform:l,symbol:d,maskId:y,title:r,titleId:o,extra:x,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:s}=e;const l=Ne(s);l.length>0&&(a.style=l);let d;return Rn(o)&&(d=gt("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(d||r.icon),{children:n,attributes:a}}}},Is={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Pe({type:"layer"},()=>{xt("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ps={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return Pe({type:"counter",content:t},()=>(xt("beforeDOMElementCreation",{content:t,params:e}),fs({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(h.cssPrefix,"-layers-counter"),...a]}})))}}}},Ls={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=tt,title:a=null,classes:r=[],attributes:o={},styles:s={}}=e;return Pe({type:"text",content:t},()=>(xt("beforeDOMElementCreation",{content:t,params:e}),_a({content:t,transform:c(c({},tt),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(h.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let s=null,l=null;if(Rr){const d=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/d,l=u.height/d}return h.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,_a({content:e.innerHTML,width:s,height:l,transform:r,title:a,extra:o,watchable:!0})])}}};const Rs=new RegExp('"',"ug"),Pa=[1105920,1112319],La=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),ai),Ai),di),En=Object.keys(La).reduce((t,e)=>(t[e.toLowerCase()]=La[e],t),{}),Ms=Object.keys(En).reduce((t,e)=>{const n=En[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ds(t){const e=t.replace(Rs,""),n=Wi(e,0),a=n>=Pa[0]&&n<=Pa[1],r=e.length===2?e[0]===e[1]:!1;return{value:pn(r?e[0]:e),isSecondary:a||r}}function Fs(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(En[n]||{})[r]||Ms[n]}function Ra(t,e){const n="".concat(xi).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=Ft(t.children).filter(v=>v.getAttribute(fn)===e)[0],l=dt.getComputedStyle(t,e),d=l.getPropertyValue("font-family"),u=d.match(wi),y=l.getPropertyValue("font-weight"),x=l.getPropertyValue("content");if(s&&!u)return t.removeChild(s),a();if(u&&x!=="none"&&x!==""){const v=l.getPropertyValue("content");let _=Fs(d,y);const{value:C,isSecondary:B}=Ds(v),w=u[0].startsWith("FontAwesome");let I=Dn(_,C),O=I;if(w){const N=$i(C);N.iconName&&N.prefix&&(I=N.iconName,_=N.prefix)}if(I&&!B&&(!s||s.getAttribute(Cn)!==_||s.getAttribute(In)!==O)){t.setAttribute(n,O),s&&t.removeChild(s);const N=Ss(),{extra:E}=N;E.attributes[fn]=e,vn(I,_).then(R=>{const Ut=Fn(c(c({},N),{},{icons:{main:R,mask:ao()},prefix:_,iconName:O,extra:E,watchable:!0})),jt=T.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(jt,t.firstChild):t.appendChild(jt),jt.outerHTML=Ut.map(Re=>ie(Re)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Us(t){return Promise.all([Ra(t,"::before"),Ra(t,"::after")])}function js(t){return t.parentNode!==document.head&&!~Ti.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ma(t){if(st)return new Promise((e,n)=>{const a=Ft(t.querySelectorAll("*")).filter(js).map(Us),r=Un.begin("searchPseudoElements");lo(),Promise.all(a).then(()=>{r(),xn(),e()}).catch(()=>{r(),xn(),n()})})}var zs={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ma,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=T}=e;h.searchPseudoElements&&Ma(n)}}};let Da=!1;var Hs={mixout(){return{dom:{unwatch(){lo(),Da=!0}}}},hooks(){return{bootstrap(){Na(hn("mutationObserverCallbacks",{}))},noAuto(){As()},watch(t){const{observeMutationsRoot:e}=t;Da?xn():Na(hn("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Fa=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Ws={mixout(){return{parse:{transform:t=>Fa(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Fa(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),d="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),y={transform:"".concat(l," ").concat(d," ").concat(u)},x={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:y,path:x};return{tag:"g",attributes:c({},v.outer),children:[{tag:"g",attributes:c({},v.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),v.path)}]}]}}}};const Qe={x:0,y:0,width:"100%",height:"100%"};function Ua(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function qs(t){return t.tag==="g"?t.children:[t]}var Ys={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Ie(n.split(" ").map(r=>r.trim())):ao();return a.prefix||(a.prefix=pt()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:l}=e;const{width:d,icon:u}=r,{width:y,icon:x}=o,v=Di({transform:l,containerWidth:y,iconWidth:d}),_={tag:"rect",attributes:c(c({},Qe),{},{fill:"white"})},C=u.children?{children:u.children.map(Ua)}:{},B={tag:"g",attributes:c({},v.inner),children:[Ua(c({tag:u.tag,attributes:c(c({},u.attributes),v.path)},C))]},w={tag:"g",attributes:c({},v.outer),children:[B]},I="mask-".concat(s||ae()),O="clip-".concat(s||ae()),N={tag:"mask",attributes:c(c({},Qe),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,w]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:qs(x)},N]};return n.push(E,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(I,")")},Qe)}),{children:n,attributes:a}}}},Gs={provides(t){let e=!1;dt.matchMedia&&(e=dt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=c(c({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Bs={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Vs=[ji,Cs,Is,Ps,Ls,zs,Hs,Ws,Ys,Gs,Bs];as(Vs,{mixoutsTo:$});$.noAuto;$.config;$.library;$.dom;const Tn=$.parse;$.findIconDefinition;$.toHtml;const $s=$.icon;$.layer;$.text;$.counter;function ja(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ja(Object(n),!0).forEach(function(a){Pt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ja(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function we(t){"@babel/helpers - typeof";return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},we(t)}function Pt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xs(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Ks(t,e){if(t==null)return{};var n=Xs(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Sn(t){return Js(t)||Zs(t)||Qs(t)||tl()}function Js(t){if(Array.isArray(t))return _n(t)}function Zs(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Qs(t,e){if(t){if(typeof t=="string")return _n(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _n(t,e)}}function _n(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function tl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function el(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,s=t.shake,l=t.flash,d=t.spin,u=t.spinPulse,y=t.spinReverse,x=t.pulse,v=t.fixedWidth,_=t.inverse,C=t.border,B=t.listItem,w=t.flip,I=t.size,O=t.rotation,N=t.pull,E=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":d,"fa-spin-reverse":y,"fa-spin-pulse":u,"fa-pulse":x,"fa-fw":v,"fa-inverse":_,"fa-border":C,"fa-li":B,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Pt(e,"fa-".concat(I),typeof I<"u"&&I!==null),Pt(e,"fa-rotate-".concat(O),typeof O<"u"&&O!==null&&O!==0),Pt(e,"fa-pull-".concat(N),typeof N<"u"&&N!==null),Pt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(R){return E[R]?R:null}).filter(function(R){return R})}function nl(t){return t=t-0,t===t}function fo(t){return nl(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var al=["style"];function rl(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ol(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=fo(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[rl(r)]=o:e[r]=o,e},{})}function uo(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(d){return uo(t,d)}),r=Object.keys(e.attributes||{}).reduce(function(d,u){var y=e.attributes[u];switch(u){case"class":d.attrs.className=y,delete e.attributes.class;break;case"style":d.attrs.style=ol(y);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?d.attrs[u.toLowerCase()]=y:d.attrs[fo(u)]=y}return d},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=Ks(n,al);return r.attrs.style=Q(Q({},r.attrs.style),s),t.apply(void 0,[e.tag,Q(Q({},r.attrs),l)].concat(Sn(a)))}var mo=!1;try{mo=!0}catch{}function il(){if(!mo&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function za(t){if(t&&we(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Tn.icon)return Tn.icon(t);if(t===null)return null;if(t&&we(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function tn(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Pt({},t,e):{}}var Ha={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ct=Sr.forwardRef(function(t,e){var n=Q(Q({},Ha),t),a=n.icon,r=n.mask,o=n.symbol,s=n.className,l=n.title,d=n.titleId,u=n.maskId,y=za(a),x=tn("classes",[].concat(Sn(el(n)),Sn((s||"").split(" ")))),v=tn("transform",typeof n.transform=="string"?Tn.transform(n.transform):n.transform),_=tn("mask",za(r)),C=$s(y,Q(Q(Q(Q({},x),v),_),{},{symbol:o,title:l,titleId:d,maskId:u}));if(!C)return il("Could not find icon",y),null;var B=C.abstract,w={ref:e};return Object.keys(n).forEach(function(I){Ha.hasOwnProperty(I)||(w[I]=n[I])}),sl(B[0],w)});ct.displayName="FontAwesomeIcon";ct.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var sl=uo.bind(null,Sr.createElement);const zn=({columnIndex:t,column:{title:e,links:n}})=>{const[a,r]=On.useState(!1);return m.jsx("div",{className:"col-xl flex-footer testname-column",children:m.jsxs("div",{className:"card accordion-item desktop-disable-xl",children:[m.jsx("div",{className:"accordion-header",role:"button",onClick:()=>r(!a),onKeyDown:()=>r(!a),tabIndex:0,"data-bs-toggle":"collapse",children:m.jsx("div",{className:"h5",children:m.jsxs("a",{id:`footlink-header-${t}`,className:"collapsed",href:`#footlink-${t}`,role:"button",children:[e,m.jsx(ct,{icon:Vo})]})})}),m.jsx("div",{id:`footlink-${t}`,className:`collapse accordion-body ${a?"show":""}`,children:n.map(o=>m.jsx("a",{className:"nav-link",href:o.url,title:o.title,children:o.text},`footlink-${e}-link-${o.text}`))})]})})};zn.propTypes={columnIndex:p.number.isRequired,column:V.shape({title:p.string,links:V.arrayOf(V.shape({url:p.string.isRequired,title:p.string,text:p.string.isRequired}))})};zn.__docgenInfo={description:`@param {{ columnIndex: number, column: Column }} props
@returns {JSX.Element}`,methods:[],displayName:"ColumnSection",props:{columnIndex:{description:"",type:{name:"number"},required:!0},column:{description:"",type:{name:"shape",value:{title:{name:"string",required:!1},links:{name:"arrayOf",value:{name:"shape",value:{url:{name:"string",required:!0},title:{name:"string",required:!1},text:{name:"string",required:!0}}},required:!1}}},required:!1}}};const se=({contact:{title:t,contactLink:e,contributionLink:n,columns:a}})=>m.jsx("div",{className:"wrapper",id:"wrapper-footer-columns","data-testid":"contact",children:m.jsx("div",{className:"container",id:"footer-columns",children:m.jsxs("div",{className:"row","data-testid":"columns-container",children:[m.jsxs("div",{className:"col-xl-3",id:"info-column",children:[m.jsx("div",{className:"h5",children:t}),e&&m.jsx("p",{className:"contact-link",children:m.jsx("a",{href:e,children:"Contact Us"})}),n&&m.jsx("p",{className:"contribute-button","data-testid":"contact-contribution-link",children:m.jsx("a",{href:n,className:"btn btn-small btn-gold",children:"Support ASU"})})]}),a&&a.length&&m.jsx(m.Fragment,{children:a.map((r,o)=>m.jsx(zn,{columnIndex:o,column:r},`footlink-${r.title}`))})]})})});se.propTypes={contact:V.shape({title:p.string.isRequired,contactLink:p.string.isRequired,contributionLink:p.string,columns:V.arrayOf(V.shape({title:p.string,links:V.arrayOf(V.shape({url:p.string.isRequired,title:p.string,text:p.string.isRequired}))}))})};se.defaultProps={contact:{title:"",contactLink:"",contributionLink:""}};se.__docgenInfo={description:`@typedef {import("../../core/models/types").Contact} Contact

@param {{contact: Contact}} props`,methods:[],displayName:"Contact",props:{contact:{defaultValue:{value:`{
  title: "",
  contactLink: "",
  contributionLink: "",
}`,computed:!1},description:"",type:{name:"shape",value:{title:{name:"string",required:!0},contactLink:{name:"string",required:!0},contributionLink:{name:"string",required:!1},columns:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},links:{name:"arrayOf",value:{name:"shape",value:{url:{name:"string",required:!0},title:{name:"string",required:!1},text:{name:"string",required:!0}}},required:!1}}},required:!1}}},required:!1}}};const{entries:po,setPrototypeOf:Wa,isFrozen:ll,getPrototypeOf:cl,getOwnPropertyDescriptor:fl}=Object;let{freeze:q,seal:X,create:go}=Object,{apply:wn,construct:kn}=typeof Reflect<"u"&&Reflect;q||(q=function(e){return e});X||(X=function(e){return e});wn||(wn=function(e,n,a){return e.apply(n,a)});kn||(kn=function(e,n){return new e(...n)});const be=Y(Array.prototype.forEach),ul=Y(Array.prototype.lastIndexOf),qa=Y(Array.prototype.pop),Yt=Y(Array.prototype.push),ml=Y(Array.prototype.splice),Ee=Y(String.prototype.toLowerCase),en=Y(String.prototype.toString),Ya=Y(String.prototype.match),Gt=Y(String.prototype.replace),dl=Y(String.prototype.indexOf),pl=Y(String.prototype.trim),K=Y(Object.prototype.hasOwnProperty),W=Y(RegExp.prototype.test),Bt=gl(TypeError);function Y(t){return function(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return wn(t,e,a)}}function gl(t){return function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return kn(t,n)}}function A(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ee;Wa&&Wa(t,null);let a=e.length;for(;a--;){let r=e[a];if(typeof r=="string"){const o=n(r);o!==r&&(ll(e)||(e[a]=o),r=o)}t[r]=!0}return t}function hl(t){for(let e=0;e<t.length;e++)K(t,e)||(t[e]=null);return t}function yt(t){const e=go(null);for(const[n,a]of po(t))K(t,n)&&(Array.isArray(a)?e[n]=hl(a):a&&typeof a=="object"&&a.constructor===Object?e[n]=yt(a):e[n]=a);return e}function Vt(t,e){for(;t!==null;){const a=fl(t,e);if(a){if(a.get)return Y(a.get);if(typeof a.value=="function")return Y(a.value)}t=cl(t)}function n(){return null}return n}const Ga=q(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),nn=q(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),an=q(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),yl=q(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),rn=q(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),bl=q(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ba=q(["#text"]),Va=q(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),on=q(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),$a=q(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ve=q(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),vl=X(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Al=X(/<%[\w\W]*|[\w\W]*%>/gm),xl=X(/\$\{[\w\W]*/gm),El=X(/^data-[\-\w.\u00B7-\uFFFF]+$/),Tl=X(/^aria-[\-\w]+$/),ho=X(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Sl=X(/^(?:\w+script|data):/i),_l=X(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),yo=X(/^html$/i),wl=X(/^[a-z][.\w]*(-[.\w]+)+$/i);var Xa=Object.freeze({__proto__:null,ARIA_ATTR:Tl,ATTR_WHITESPACE:_l,CUSTOM_ELEMENT:wl,DATA_ATTR:El,DOCTYPE_NAME:yo,ERB_EXPR:Al,IS_ALLOWED_URI:ho,IS_SCRIPT_OR_DATA:Sl,MUSTACHE_EXPR:vl,TMPLIT_EXPR:xl});const $t={element:1,text:3,progressingInstruction:7,comment:8,document:9},kl=function(){return typeof window>"u"?null:window},Ol=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let a=null;const r="data-tt-policy-suffix";n&&n.hasAttribute(r)&&(a=n.getAttribute(r));const o="dompurify"+(a?"#"+a:"");try{return e.createPolicy(o,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},Ka=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function bo(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:kl();const e=b=>bo(b);if(e.version="3.2.4",e.removed=[],!t||!t.document||t.document.nodeType!==$t.document||!t.Element)return e.isSupported=!1,e;let{document:n}=t;const a=n,r=a.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:l,Element:d,NodeFilter:u,NamedNodeMap:y=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:x,DOMParser:v,trustedTypes:_}=t,C=d.prototype,B=Vt(C,"cloneNode"),w=Vt(C,"remove"),I=Vt(C,"nextSibling"),O=Vt(C,"childNodes"),N=Vt(C,"parentNode");if(typeof s=="function"){const b=n.createElement("template");b.content&&b.content.ownerDocument&&(n=b.content.ownerDocument)}let E,R="";const{implementation:Ut,createNodeIterator:jt,createDocumentFragment:Re,getElementsByTagName:xo}=n,{importNode:Eo}=a;let z=Ka();e.isSupported=typeof po=="function"&&typeof N=="function"&&Ut&&Ut.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Me,ERB_EXPR:De,TMPLIT_EXPR:Fe,DATA_ATTR:To,ARIA_ATTR:So,IS_SCRIPT_OR_DATA:_o,ATTR_WHITESPACE:Hn,CUSTOM_ELEMENT:wo}=Xa;let{IS_ALLOWED_URI:Wn}=Xa,P=null;const qn=A({},[...Ga,...nn,...an,...rn,...Ba]);let M=null;const Yn=A({},[...Va,...on,...$a,...ve]);let k=Object.seal(go(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),zt=null,Ue=null,Gn=!0,je=!0,Bn=!1,Vn=!0,Et=!1,ze=!0,ht=!1,He=!1,We=!1,Tt=!1,ce=!1,fe=!1,$n=!0,Xn=!1;const ko="user-content-";let qe=!0,Ht=!1,St={},_t=null;const Kn=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Jn=null;const Zn=A({},["audio","video","img","source","image","track"]);let Ye=null;const Qn=A({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ue="http://www.w3.org/1998/Math/MathML",me="http://www.w3.org/2000/svg",at="http://www.w3.org/1999/xhtml";let wt=at,Ge=!1,Be=null;const Oo=A({},[ue,me,at],en);let de=A({},["mi","mo","mn","ms","mtext"]),pe=A({},["annotation-xml"]);const No=A({},["title","style","font","a","script"]);let Wt=null;const Co=["application/xhtml+xml","text/html"],Io="text/html";let L=null,kt=null;const Po=n.createElement("form"),ta=function(i){return i instanceof RegExp||i instanceof Function},Ve=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(kt&&kt===i)){if((!i||typeof i!="object")&&(i={}),i=yt(i),Wt=Co.indexOf(i.PARSER_MEDIA_TYPE)===-1?Io:i.PARSER_MEDIA_TYPE,L=Wt==="application/xhtml+xml"?en:Ee,P=K(i,"ALLOWED_TAGS")?A({},i.ALLOWED_TAGS,L):qn,M=K(i,"ALLOWED_ATTR")?A({},i.ALLOWED_ATTR,L):Yn,Be=K(i,"ALLOWED_NAMESPACES")?A({},i.ALLOWED_NAMESPACES,en):Oo,Ye=K(i,"ADD_URI_SAFE_ATTR")?A(yt(Qn),i.ADD_URI_SAFE_ATTR,L):Qn,Jn=K(i,"ADD_DATA_URI_TAGS")?A(yt(Zn),i.ADD_DATA_URI_TAGS,L):Zn,_t=K(i,"FORBID_CONTENTS")?A({},i.FORBID_CONTENTS,L):Kn,zt=K(i,"FORBID_TAGS")?A({},i.FORBID_TAGS,L):{},Ue=K(i,"FORBID_ATTR")?A({},i.FORBID_ATTR,L):{},St=K(i,"USE_PROFILES")?i.USE_PROFILES:!1,Gn=i.ALLOW_ARIA_ATTR!==!1,je=i.ALLOW_DATA_ATTR!==!1,Bn=i.ALLOW_UNKNOWN_PROTOCOLS||!1,Vn=i.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Et=i.SAFE_FOR_TEMPLATES||!1,ze=i.SAFE_FOR_XML!==!1,ht=i.WHOLE_DOCUMENT||!1,Tt=i.RETURN_DOM||!1,ce=i.RETURN_DOM_FRAGMENT||!1,fe=i.RETURN_TRUSTED_TYPE||!1,We=i.FORCE_BODY||!1,$n=i.SANITIZE_DOM!==!1,Xn=i.SANITIZE_NAMED_PROPS||!1,qe=i.KEEP_CONTENT!==!1,Ht=i.IN_PLACE||!1,Wn=i.ALLOWED_URI_REGEXP||ho,wt=i.NAMESPACE||at,de=i.MATHML_TEXT_INTEGRATION_POINTS||de,pe=i.HTML_INTEGRATION_POINTS||pe,k=i.CUSTOM_ELEMENT_HANDLING||{},i.CUSTOM_ELEMENT_HANDLING&&ta(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(k.tagNameCheck=i.CUSTOM_ELEMENT_HANDLING.tagNameCheck),i.CUSTOM_ELEMENT_HANDLING&&ta(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(k.attributeNameCheck=i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),i.CUSTOM_ELEMENT_HANDLING&&typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(k.allowCustomizedBuiltInElements=i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Et&&(je=!1),ce&&(Tt=!0),St&&(P=A({},Ba),M=[],St.html===!0&&(A(P,Ga),A(M,Va)),St.svg===!0&&(A(P,nn),A(M,on),A(M,ve)),St.svgFilters===!0&&(A(P,an),A(M,on),A(M,ve)),St.mathMl===!0&&(A(P,rn),A(M,$a),A(M,ve))),i.ADD_TAGS&&(P===qn&&(P=yt(P)),A(P,i.ADD_TAGS,L)),i.ADD_ATTR&&(M===Yn&&(M=yt(M)),A(M,i.ADD_ATTR,L)),i.ADD_URI_SAFE_ATTR&&A(Ye,i.ADD_URI_SAFE_ATTR,L),i.FORBID_CONTENTS&&(_t===Kn&&(_t=yt(_t)),A(_t,i.FORBID_CONTENTS,L)),qe&&(P["#text"]=!0),ht&&A(P,["html","head","body"]),P.table&&(A(P,["tbody"]),delete zt.tbody),i.TRUSTED_TYPES_POLICY){if(typeof i.TRUSTED_TYPES_POLICY.createHTML!="function")throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof i.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');E=i.TRUSTED_TYPES_POLICY,R=E.createHTML("")}else E===void 0&&(E=Ol(_,r)),E!==null&&typeof R=="string"&&(R=E.createHTML(""));q&&q(i),kt=i}},ea=A({},[...nn,...an,...yl]),na=A({},[...rn,...bl]),Lo=function(i){let f=N(i);(!f||!f.tagName)&&(f={namespaceURI:wt,tagName:"template"});const g=Ee(i.tagName),S=Ee(f.tagName);return Be[i.namespaceURI]?i.namespaceURI===me?f.namespaceURI===at?g==="svg":f.namespaceURI===ue?g==="svg"&&(S==="annotation-xml"||de[S]):!!ea[g]:i.namespaceURI===ue?f.namespaceURI===at?g==="math":f.namespaceURI===me?g==="math"&&pe[S]:!!na[g]:i.namespaceURI===at?f.namespaceURI===me&&!pe[S]||f.namespaceURI===ue&&!de[S]?!1:!na[g]&&(No[g]||!ea[g]):!!(Wt==="application/xhtml+xml"&&Be[i.namespaceURI]):!1},J=function(i){Yt(e.removed,{element:i});try{N(i).removeChild(i)}catch{w(i)}},ge=function(i,f){try{Yt(e.removed,{attribute:f.getAttributeNode(i),from:f})}catch{Yt(e.removed,{attribute:null,from:f})}if(f.removeAttribute(i),i==="is")if(Tt||ce)try{J(f)}catch{}else try{f.setAttribute(i,"")}catch{}},aa=function(i){let f=null,g=null;if(We)i="<remove></remove>"+i;else{const D=Ya(i,/^[\r\n\t ]+/);g=D&&D[0]}Wt==="application/xhtml+xml"&&wt===at&&(i='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+i+"</body></html>");const S=E?E.createHTML(i):i;if(wt===at)try{f=new v().parseFromString(S,Wt)}catch{}if(!f||!f.documentElement){f=Ut.createDocument(wt,"template",null);try{f.documentElement.innerHTML=Ge?R:S}catch{}}const U=f.body||f.documentElement;return i&&g&&U.insertBefore(n.createTextNode(g),U.childNodes[0]||null),wt===at?xo.call(f,ht?"html":"body")[0]:ht?f.documentElement:U},ra=function(i){return jt.call(i.ownerDocument||i,i,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},$e=function(i){return i instanceof x&&(typeof i.nodeName!="string"||typeof i.textContent!="string"||typeof i.removeChild!="function"||!(i.attributes instanceof y)||typeof i.removeAttribute!="function"||typeof i.setAttribute!="function"||typeof i.namespaceURI!="string"||typeof i.insertBefore!="function"||typeof i.hasChildNodes!="function")},oa=function(i){return typeof l=="function"&&i instanceof l};function rt(b,i,f){be(b,g=>{g.call(e,i,f,kt)})}const ia=function(i){let f=null;if(rt(z.beforeSanitizeElements,i,null),$e(i))return J(i),!0;const g=L(i.nodeName);if(rt(z.uponSanitizeElement,i,{tagName:g,allowedTags:P}),i.hasChildNodes()&&!oa(i.firstElementChild)&&W(/<[/\w]/g,i.innerHTML)&&W(/<[/\w]/g,i.textContent)||i.nodeType===$t.progressingInstruction||ze&&i.nodeType===$t.comment&&W(/<[/\w]/g,i.data))return J(i),!0;if(!P[g]||zt[g]){if(!zt[g]&&la(g)&&(k.tagNameCheck instanceof RegExp&&W(k.tagNameCheck,g)||k.tagNameCheck instanceof Function&&k.tagNameCheck(g)))return!1;if(qe&&!_t[g]){const S=N(i)||i.parentNode,U=O(i)||i.childNodes;if(U&&S){const D=U.length;for(let G=D-1;G>=0;--G){const Z=B(U[G],!0);Z.__removalCount=(i.__removalCount||0)+1,S.insertBefore(Z,I(i))}}}return J(i),!0}return i instanceof d&&!Lo(i)||(g==="noscript"||g==="noembed"||g==="noframes")&&W(/<\/no(script|embed|frames)/i,i.innerHTML)?(J(i),!0):(Et&&i.nodeType===$t.text&&(f=i.textContent,be([Me,De,Fe],S=>{f=Gt(f,S," ")}),i.textContent!==f&&(Yt(e.removed,{element:i.cloneNode()}),i.textContent=f)),rt(z.afterSanitizeElements,i,null),!1)},sa=function(i,f,g){if($n&&(f==="id"||f==="name")&&(g in n||g in Po))return!1;if(!(je&&!Ue[f]&&W(To,f))){if(!(Gn&&W(So,f))){if(!M[f]||Ue[f]){if(!(la(i)&&(k.tagNameCheck instanceof RegExp&&W(k.tagNameCheck,i)||k.tagNameCheck instanceof Function&&k.tagNameCheck(i))&&(k.attributeNameCheck instanceof RegExp&&W(k.attributeNameCheck,f)||k.attributeNameCheck instanceof Function&&k.attributeNameCheck(f))||f==="is"&&k.allowCustomizedBuiltInElements&&(k.tagNameCheck instanceof RegExp&&W(k.tagNameCheck,g)||k.tagNameCheck instanceof Function&&k.tagNameCheck(g))))return!1}else if(!Ye[f]){if(!W(Wn,Gt(g,Hn,""))){if(!((f==="src"||f==="xlink:href"||f==="href")&&i!=="script"&&dl(g,"data:")===0&&Jn[i])){if(!(Bn&&!W(_o,Gt(g,Hn,"")))){if(g)return!1}}}}}}return!0},la=function(i){return i!=="annotation-xml"&&Ya(i,wo)},ca=function(i){rt(z.beforeSanitizeAttributes,i,null);const{attributes:f}=i;if(!f||$e(i))return;const g={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:M,forceKeepAttr:void 0};let S=f.length;for(;S--;){const U=f[S],{name:D,namespaceURI:G,value:Z}=U,qt=L(D);let H=D==="value"?Z:pl(Z);if(g.attrName=qt,g.attrValue=H,g.keepAttr=!0,g.forceKeepAttr=void 0,rt(z.uponSanitizeAttribute,i,g),H=g.attrValue,Xn&&(qt==="id"||qt==="name")&&(ge(D,i),H=ko+H),ze&&W(/((--!?|])>)|<\/(style|title)/i,H)){ge(D,i);continue}if(g.forceKeepAttr||(ge(D,i),!g.keepAttr))continue;if(!Vn&&W(/\/>/i,H)){ge(D,i);continue}Et&&be([Me,De,Fe],ua=>{H=Gt(H,ua," ")});const fa=L(i.nodeName);if(sa(fa,qt,H)){if(E&&typeof _=="object"&&typeof _.getAttributeType=="function"&&!G)switch(_.getAttributeType(fa,qt)){case"TrustedHTML":{H=E.createHTML(H);break}case"TrustedScriptURL":{H=E.createScriptURL(H);break}}try{G?i.setAttributeNS(G,D,H):i.setAttribute(D,H),$e(i)?J(i):qa(e.removed)}catch{}}}rt(z.afterSanitizeAttributes,i,null)},Ro=function b(i){let f=null;const g=ra(i);for(rt(z.beforeSanitizeShadowDOM,i,null);f=g.nextNode();)rt(z.uponSanitizeShadowNode,f,null),ia(f),ca(f),f.content instanceof o&&b(f.content);rt(z.afterSanitizeShadowDOM,i,null)};return e.sanitize=function(b){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=null,g=null,S=null,U=null;if(Ge=!b,Ge&&(b="<!-->"),typeof b!="string"&&!oa(b))if(typeof b.toString=="function"){if(b=b.toString(),typeof b!="string")throw Bt("dirty is not a string, aborting")}else throw Bt("toString is not a function");if(!e.isSupported)return b;if(He||Ve(i),e.removed=[],typeof b=="string"&&(Ht=!1),Ht){if(b.nodeName){const Z=L(b.nodeName);if(!P[Z]||zt[Z])throw Bt("root node is forbidden and cannot be sanitized in-place")}}else if(b instanceof l)f=aa("<!---->"),g=f.ownerDocument.importNode(b,!0),g.nodeType===$t.element&&g.nodeName==="BODY"||g.nodeName==="HTML"?f=g:f.appendChild(g);else{if(!Tt&&!Et&&!ht&&b.indexOf("<")===-1)return E&&fe?E.createHTML(b):b;if(f=aa(b),!f)return Tt?null:fe?R:""}f&&We&&J(f.firstChild);const D=ra(Ht?b:f);for(;S=D.nextNode();)ia(S),ca(S),S.content instanceof o&&Ro(S.content);if(Ht)return b;if(Tt){if(ce)for(U=Re.call(f.ownerDocument);f.firstChild;)U.appendChild(f.firstChild);else U=f;return(M.shadowroot||M.shadowrootmode)&&(U=Eo.call(a,U,!0)),U}let G=ht?f.outerHTML:f.innerHTML;return ht&&P["!doctype"]&&f.ownerDocument&&f.ownerDocument.doctype&&f.ownerDocument.doctype.name&&W(yo,f.ownerDocument.doctype.name)&&(G="<!DOCTYPE "+f.ownerDocument.doctype.name+`>
`+G),Et&&be([Me,De,Fe],Z=>{G=Gt(G,Z," ")}),E&&fe?E.createHTML(G):G},e.setConfig=function(){let b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ve(b),He=!0},e.clearConfig=function(){kt=null,He=!1},e.isValidAttribute=function(b,i,f){kt||Ve({});const g=L(b),S=L(i);return sa(g,S,f)},e.addHook=function(b,i){typeof i=="function"&&Yt(z[b],i)},e.removeHook=function(b,i){if(i!==void 0){const f=ul(z[b],i);return f===-1?void 0:ml(z[b],f,1)[0]}return qa(z[b])},e.removeHooks=function(b){z[b]=[]},e.removeAllHooks=function(){z=Ka()},e}bo();p.shape({event:p.string,action:p.string,name:p.string,region:p.string,section:p.string,component:p.string,type:p.string,text:p.string});const F=({event:t="",action:e="",name:n="",type:a="",section:r="",text:o="",region:s="",component:l=""})=>{const{dataLayer:d}=window,u={event:t.toLowerCase(),action:e.toLowerCase(),name:n.toLowerCase(),type:a.toLowerCase(),region:s.toLowerCase(),section:r.toLowerCase(),text:o.toLowerCase(),component:l.toLowerCase()};d&&d.push(u)},Nl=""+new URL("innovationLogo-CoE9iHq8.png",import.meta.url).href,Ot={MAPS_AND_LOCATIONS:"https://www.asu.edu/about/locations-maps",JOBS:"https://cfo.asu.edu/applicant",DIRECTORY:"https://search.asu.edu/?search-tabs=web_dir_faculty_staff",CONTACT_ASU:"https://www.asu.edu/about/contact",MY_ASU:"https://my.asu.edu/",RANKINGS:"https://www.asu.edu/rankings"},Xt={COPYRIGHT_AND_TRADEMARK:"https://www.asu.edu/about/copyright-trademark",ACCESSIBILITY_REPORT:"https://accessibility.asu.edu/report",PRIVACY:"https://www.asu.edu/about/privacy",TERMS_OF_USE:"https://www.asu.edu/about/terms-of-use",EMERGENCY:"https://www.asu.edu/emergency/"},Nt={type:"internal link",section:"secondary footer"},vo=()=>m.jsx("div",{className:"wrapper",id:"wrapper-footer-innovation","data-testid":"innovation",children:m.jsx("div",{className:"container",id:"footer-innovation",children:m.jsx("div",{className:"row",children:m.jsx("div",{className:"col",children:m.jsxs("div",{className:"d-flex footer-innovation-links",children:[m.jsxs("nav",{className:"nav","aria-label":"University Services",children:[m.jsx("a",{className:"nav-link",href:Ot.MAPS_AND_LOCATIONS,onFocus:()=>F({...Nt,text:"maps and locations"}),children:"Maps and Locations"}),m.jsx("a",{className:"nav-link",href:Ot.JOBS,onFocus:()=>F({...Nt,text:"jobs"}),children:"Jobs"}),m.jsx("a",{className:"nav-link",href:Ot.DIRECTORY,onFocus:()=>F({...Nt,text:"directory"}),children:"Directory"}),m.jsx("a",{className:"nav-link",href:Ot.CONTACT_ASU,onFocus:()=>F({...Nt,text:"contact asu"}),children:"Contact ASU"}),m.jsx("a",{className:"nav-link",href:Ot.MY_ASU,onFocus:()=>F({...Nt,text:"my asu"}),children:"My ASU"})]}),m.jsx("a",{className:"img-link",href:Ot.RANKINGS,onFocus:()=>F({...Nt,text:"#1 in the u.s. for innovation"}),children:m.jsx("img",{src:Nl,alt:"Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)",width:"459",height:"100",loading:"lazy",decoding:"async"})})]})})})})});vo.__docgenInfo={description:"",methods:[],displayName:"Innovation"};const Kt={type:"internal link",section:"tertiary footer"},Ao=()=>{function t(){try{return window.location.href}catch(e){return console.error(e),""}}return m.jsx("div",{className:"wrapper",id:"wrapper-footer-colophon","data-testid":"legal",children:m.jsx("div",{className:"container",id:"footer-colophon",children:m.jsx("div",{className:"row",children:m.jsx("div",{className:"col",children:m.jsxs("nav",{className:"nav colophon","aria-label":"University Legal and Compliance",children:[m.jsx("a",{className:"nav-link",href:Xt.COPYRIGHT_AND_TRADEMARK,onFocus:()=>F({...Kt,text:"copyright and trademark"}),children:"Copyright and Trademark"}),m.jsx("a",{className:"nav-link",href:`${Xt.ACCESSIBILITY_REPORT}?a11yref=${t()}`,onFocus:()=>F({...Kt,text:"accessibility"}),children:"Accessibility"}),m.jsx("a",{className:"nav-link",href:Xt.PRIVACY,onFocus:()=>F({...Kt,text:"privacy"}),children:"Privacy"}),m.jsx("a",{className:"nav-link",href:Xt.TERMS_OF_USE,onFocus:()=>F({...Kt,text:"terms of use"}),children:"Terms of Use"}),m.jsx("a",{className:"nav-link",href:Xt.EMERGENCY,onFocus:()=>F({...Kt,text:"emergency"}),children:"Emergency"})]})})})})})};Ao.__docgenInfo={description:"",methods:[],displayName:"Legal"};const Cl={prefix:"fab",iconName:"square-instagram",icon:[448,512,["instagram-square"],"e055","M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"]},Il=Cl,Pl={prefix:"fab",iconName:"square-youtube",icon:[448,512,[61798,"youtube-square"],"f431","M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"]},Ll=Pl,Rl={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},Ml=Rl,Dl={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Fl={prefix:"fab",iconName:"square-x-twitter",icon:[448,512,[],"e61a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"]},Ct={type:"external link",section:"primary footer"},le=({social:{logoUrl:t,unitLogo:e,mediaLinks:n}})=>m.jsx("div",{className:"wrapper",id:"wrapper-endorsed-footer","data-testid":"social",children:m.jsx("div",{className:"container",id:"endorsed-footer",children:m.jsxs("div",{className:"row",children:[m.jsx("div",{className:"col-md",id:"endorsed-logo",children:m.jsx("a",{href:t,onFocus:()=>F({...Ct,type:"internal link",text:"asu logo"}),children:m.jsx("img",{src:e,alt:"ASU University Technology Office Arizona State University."})})}),n&&m.jsx("div",{className:"col-md",id:"social-media",children:m.jsxs("nav",{className:"nav","aria-label":"Social Media",children:[n.facebook&&m.jsx("a",{className:"nav-link",href:n.facebook,"data-testid":"facebook",onFocus:()=>F({...Ct,text:"facebook icon"}),children:m.jsx(ct,{title:"Facebook Social Media Icon",icon:Ml})}),n.twitter&&m.jsx("a",{className:"nav-link",href:n.twitter,"data-testid":"twitter",onFocus:()=>F({...Ct,text:"twitter icon"}),children:m.jsx(ct,{title:"Twitter Social Media Icon",icon:Fl})}),n.instagram&&m.jsx("a",{className:"nav-link",href:n.instagram,"data-testid":"instagram",onFocus:()=>F({...Ct,text:"instagram icon"}),children:m.jsx(ct,{title:"Instagram Social Media Icon",icon:Il})}),n.youtube&&m.jsx("a",{className:"nav-link",href:n.youtube,"data-testid":"youtube",onFocus:()=>F({...Ct,text:"youtube icon"}),children:m.jsx(ct,{title:"YouTube Social Media Icon",icon:Ll})}),n.linkedIn&&m.jsx("a",{className:"nav-link",href:n.linkedIn,"data-testid":"linkedin",onFocus:()=>F({...Ct,text:"linkedin icon"}),children:m.jsx(ct,{title:"LinkedIn Social Media Icon",icon:Dl})})]})})]})})});le.propTypes={social:V.shape({unitLogo:p.string.isRequired,mediaLinks:V.shape({facebook:p.string,twitter:p.string,linkedIn:p.string,instagram:p.string,youtube:p.string})})};le.defaultProps={social:{unitLogo:kr,mediaLinks:{facebook:"",twitter:"",linkedIn:"",instagram:"",youtube:""}}};le.__docgenInfo={description:`@param {{ social: SocialProps }} props
@returns {JSX.Element}`,methods:[],displayName:"Social",props:{social:{defaultValue:{value:`{
  unitLogo: endorsedLogo,
  mediaLinks: {
    facebook: "",
    twitter: "",
    linkedIn: "",
    instagram: "",
    youtube: "",
  },
}`,computed:!1},description:"",type:{name:"shape",value:{unitLogo:{name:"string",required:!0},mediaLinks:{name:"shape",value:{facebook:{name:"string",required:!1},twitter:{name:"string",required:!1},linkedIn:{name:"string",required:!1},instagram:{name:"string",required:!1},youtube:{name:"string",required:!1}},required:!1}}},required:!1}}};const Ul=()=>m.jsxs(m.Fragment,{children:[m.jsx(vo,{}),m.jsx(Ao,{})]}),Le=({social:t,contact:e})=>(On.useEffect(()=>{typeof window<"u"&&Bo({packageName:"component-footer",component:"Component Footer",type:"NA",configuration:{social:t,contact:e}})},[]),m.jsxs("footer",{role:"contentinfo",children:[t&&m.jsx(le,{social:t}),e&&m.jsx(se,{contact:e}),m.jsx(Ul,{})]}));Le.propTypes={social:V.shape(le.propTypes),contact:V.shape(se.propTypes)};Le.__docgenInfo={description:`@param {import("./core/models/types").ASUFooter} props
@returns {JSX.Element}`,methods:[],displayName:"ASUFooter",props:{social:{description:"",type:{name:"shape",value:{social:{name:"shape",value:{unitLogo:{name:"string",required:!0},mediaLinks:{name:"shape",value:{facebook:{name:"string",required:!1},twitter:{name:"string",required:!1},linkedIn:{name:"string",required:!1},instagram:{name:"string",required:!1},youtube:{name:"string",required:!1}},required:!1}},required:!1}}},required:!1},contact:{description:"",type:{name:"shape",value:{contact:{name:"shape",value:{title:{name:"string",required:!0},contactLink:{name:"string",required:!0},contributionLink:{name:"string",required:!1},columns:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},links:{name:"arrayOf",value:{name:"shape",value:{url:{name:"string",required:!0},title:{name:"string",required:!1},text:{name:"string",required:!0}}},required:!1}}},required:!1}},required:!1}}},required:!1}}};const Hl={title:"UDS/ASU Footer",component:Le},nt=t=>m.jsx(Le,{...t}),Zt=nt.bind({});Zt.args={};const Lt=nt.bind({});Lt.args={social:{logoUrl:"https://www.asu.edu",unitLogo:kr,mediaLinks:{facebook:"https://facebook.com",twitter:"https://twitter.com/?lang=en",instagram:"https://instagram.com",linkedIn:"https://www.linkedin.com/",youtube:"https://www.youtube.com/"}}};const Qt=nt.bind({});Qt.args={contact:{title:"No props passed should omit the button and the contact link"}};const Rt=nt.bind({});Rt.args={contact:{title:"Complete Name of College, School or Unit Title Should Go Here",contactLink:"#",contributionLink:"#"}};const vt=nt.bind({});vt.args={...Lt.args,...Rt.args};const ft=nt.bind({});ft.args={...vt.args,contact:{...vt.args.contact,columns:[{title:"Column Two",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};const ut=nt.bind({});ut.args={...ft.args,contact:{...ft.args.contact,columns:[...ft.args.contact.columns,{title:"Column Three",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};const mt=nt.bind({});mt.args={...ut.args,contact:{...ut.args.contact,columns:[...ut.args.contact.columns,{title:"Column Four",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};const Te=nt.bind({});Te.args={...mt.args,contact:{...mt.args.contact,columns:[...mt.args.contact.columns,{title:"Column Five",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};const te=nt.bind({});te.args={...Te.args,contact:{...Te.args.contact,columns:[...Te.args.contact.columns,{title:"Column Six",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};var Ja,Za,Qa;Zt.parameters={...Zt.parameters,docs:{...(Ja=Zt.parameters)==null?void 0:Ja.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(Qa=(Za=Zt.parameters)==null?void 0:Za.docs)==null?void 0:Qa.source}}};var tr,er,nr;Lt.parameters={...Lt.parameters,docs:{...(tr=Lt.parameters)==null?void 0:tr.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(nr=(er=Lt.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var ar,rr,or;Qt.parameters={...Qt.parameters,docs:{...(ar=Qt.parameters)==null?void 0:ar.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(or=(rr=Qt.parameters)==null?void 0:rr.docs)==null?void 0:or.source}}};var ir,sr,lr;Rt.parameters={...Rt.parameters,docs:{...(ir=Rt.parameters)==null?void 0:ir.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(lr=(sr=Rt.parameters)==null?void 0:sr.docs)==null?void 0:lr.source}}};var cr,fr,ur;vt.parameters={...vt.parameters,docs:{...(cr=vt.parameters)==null?void 0:cr.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(ur=(fr=vt.parameters)==null?void 0:fr.docs)==null?void 0:ur.source}}};var mr,dr,pr;ft.parameters={...ft.parameters,docs:{...(mr=ft.parameters)==null?void 0:mr.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(pr=(dr=ft.parameters)==null?void 0:dr.docs)==null?void 0:pr.source}}};var gr,hr,yr;ut.parameters={...ut.parameters,docs:{...(gr=ut.parameters)==null?void 0:gr.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(yr=(hr=ut.parameters)==null?void 0:hr.docs)==null?void 0:yr.source}}};var br,vr,Ar;mt.parameters={...mt.parameters,docs:{...(br=mt.parameters)==null?void 0:br.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(Ar=(vr=mt.parameters)==null?void 0:vr.docs)==null?void 0:Ar.source}}};var xr,Er,Tr;te.parameters={...te.parameters,docs:{...(xr=te.parameters)==null?void 0:xr.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(Tr=(Er=te.parameters)==null?void 0:Er.docs)==null?void 0:Tr.source}}};const Wl=["Default","UnitLogo","OneColumnNoLinks","OneColumnNoLogo","OneColumn","TwoColumns","ThreeColumns","FourColumns","SixColumns"];export{Zt as Default,mt as FourColumns,vt as OneColumn,Qt as OneColumnNoLinks,Rt as OneColumnNoLogo,te as SixColumns,ut as ThreeColumns,ft as TwoColumns,Lt as UnitLogo,Wl as __namedExportsOrder,Hl as default};
