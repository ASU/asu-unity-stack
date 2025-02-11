import{r as Pn,R as Tr}from"./index-CeVadUvY.js";import{g as Lo}from"./_commonjsHelpers-B3tUAs5q.js";var _r={exports:{}},wt={};var Ro=Pn,Mo=Symbol.for("react.element"),Fo=Symbol.for("react.fragment"),Do=Object.prototype.hasOwnProperty,jo=Ro.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uo={key:!0,ref:!0,__self:!0,__source:!0};function wr(e,t,n){var a,r={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(a in t)Do.call(t,a)&&!Uo.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)r[a]===void 0&&(r[a]=t[a]);return{$$typeof:Mo,type:e,key:o,ref:s,props:r,_owner:jo.current}}wt.Fragment=Fo;wt.jsx=wr;wt.jsxs=wr;_r.exports=wt;var d=_r.exports;const kr=""+new URL("endorsedLogo-DPPmUtP1.png",import.meta.url).href;var Or={exports:{}},zo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ho=zo,Wo=Ho;function Nr(){}function Cr(){}Cr.resetWarningCache=Nr;var qo=function(){function e(a,r,o,s,l,p){if(p!==Wo){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Cr,resetWarningCache:Nr};return n.PropTypes=n,n};Or.exports=qo();var Y=Or.exports;const h=Lo(Y);function Go({packageName:e="",component:t="",type:n="",configuration:a={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:a}}const Yo={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]};function Bo(e,t,n){return(t=Vo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pa(Object(n),!0).forEach(function(a){Bo(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pa(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function $o(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Vo(e){var t=$o(e,"string");return typeof t=="symbol"?t:t+""}const ha=()=>{};let Ln={},Ir={},Pr=null,Lr={mark:ha,measure:ha};try{typeof window<"u"&&(Ln=window),typeof document<"u"&&(Ir=document),typeof MutationObserver<"u"&&(Pr=MutationObserver),typeof performance<"u"&&(Lr=performance)}catch{}const{userAgent:ga=""}=Ln.navigator||{},pe=Ln,S=Ir,ya=Pr,dt=Lr;pe.document;const se=!!S.documentElement&&!!S.head&&typeof S.addEventListener=="function"&&typeof S.createElement=="function",Rr=~ga.indexOf("MSIE")||~ga.indexOf("Trident/");var Xo=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ko=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Mr={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Jo={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Fr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],z="classic",kt="duotone",Zo="sharp",Qo="sharp-duotone",Dr=[z,kt,Zo,Qo],ei={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ti={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ni=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ai={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ri=["fak","fa-kit","fakd","fa-kit-duotone"],va={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},oi=["kit"],ii={kit:{"fa-kit":"fak"}},si=["fak","fakd"],li={kit:{fak:"fa-kit"}},ba={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ci=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],fi=["fak","fa-kit","fakd","fa-kit-duotone"],ui={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},mi={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},di={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},fn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},pi=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],un=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ci,...pi],hi=["solid","regular","light","thin","duotone","brands"],jr=[1,2,3,4,5,6,7,8,9,10],gi=jr.concat([11,12,13,14,15,16,17,18,19,20]),yi=[...Object.keys(di),...hi,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pt.GROUP,pt.SWAP_OPACITY,pt.PRIMARY,pt.SECONDARY].concat(jr.map(e=>"".concat(e,"x"))).concat(gi.map(e=>"w-".concat(e))),vi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const oe="___FONT_AWESOME___",mn=16,Ur="fa",zr="svg-inline--fa",Te="data-fa-i2svg",dn="data-fa-pseudo-element",bi="data-fa-pseudo-element-pending",Rn="data-prefix",Mn="data-icon",Aa="fontawesome-i2svg",Ai="async",xi=["HTML","HEAD","STYLE","SCRIPT"],Hr=(()=>{try{return!0}catch{return!1}})();function at(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[z]}})}const Wr=c({},Mr);Wr[z]=c(c(c(c({},{"fa-duotone":"duotone"}),Mr[z]),va.kit),va["kit-duotone"]);const Ei=at(Wr),pn=c({},ai);pn[z]=c(c(c(c({},{duotone:"fad"}),pn[z]),ba.kit),ba["kit-duotone"]);const xa=at(pn),hn=c({},fn);hn[z]=c(c({},hn[z]),li.kit);const Fn=at(hn),gn=c({},mi);gn[z]=c(c({},gn[z]),ii.kit);at(gn);const Si=Xo,qr="fa-layers-text",Ti=Ko,_i=c({},ei);at(_i);const wi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Jt=Jo,ki=[...oi,...yi],Qe=pe.FontAwesomeConfig||{};function Oi(e){var t=S.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ni(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}S&&typeof S.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=Ni(Oi(n));r!=null&&(Qe[a]=r)});const Gr={styleDefault:"solid",familyDefault:z,cssPrefix:Ur,replacementClass:zr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qe.familyPrefix&&(Qe.cssPrefix=Qe.familyPrefix);const He=c(c({},Gr),Qe);He.autoReplaceSvg||(He.observeMutations=!1);const g={};Object.keys(Gr).forEach(e=>{Object.defineProperty(g,e,{enumerable:!0,set:function(t){He[e]=t,et.forEach(n=>n(g))},get:function(){return He[e]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(e){He.cssPrefix=e,et.forEach(t=>t(g))},get:function(){return He.cssPrefix}});pe.FontAwesomeConfig=g;const et=[];function Ci(e){return et.push(e),()=>{et.splice(et.indexOf(e),1)}}const le=mn,ee={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ii(e){if(!e||!se)return;const t=S.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=S.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return S.head.insertBefore(t,a),e}const Pi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){let e=12,t="";for(;e-- >0;)t+=Pi[Math.random()*62|0];return t}function We(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Dn(e){return e.classList?We(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Yr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Li(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Yr(e[n]),'" '),"").trim()}function Ot(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function jn(e){return e.size!==ee.size||e.x!==ee.x||e.y!==ee.y||e.rotate!==ee.rotate||e.flipX||e.flipY}function Ri(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),p={transform:"".concat(o," ").concat(s," ").concat(l)},m={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:p,path:m}}function Mi(e){let{transform:t,width:n=mn,height:a=mn,startCentered:r=!1}=e,o="";return r&&Rr?o+="translate(".concat(t.x/le-n/2,"em, ").concat(t.y/le-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(t.x/le,"em), calc(-50% + ").concat(t.y/le,"em)) "):o+="translate(".concat(t.x/le,"em, ").concat(t.y/le,"em) "),o+="scale(".concat(t.size/le*(t.flipX?-1:1),", ").concat(t.size/le*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Fi=`:root, :host {
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
}`;function Br(){const e=Ur,t=zr,n=g.cssPrefix,a=g.replacementClass;let r=Fi;if(n!==e||a!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let Ea=!1;function Zt(){g.autoAddCss&&!Ea&&(Ii(Br()),Ea=!0)}var Di={mixout(){return{dom:{css:Br,insertCss:Zt}}},hooks(){return{beforeDOMElementCreation(){Zt()},beforeI2svg(){Zt()}}}};const ie=pe||{};ie[oe]||(ie[oe]={});ie[oe].styles||(ie[oe].styles={});ie[oe].hooks||(ie[oe].hooks={});ie[oe].shims||(ie[oe].shims=[]);var te=ie[oe];const $r=[],Vr=function(){S.removeEventListener("DOMContentLoaded",Vr),Et=1,$r.map(e=>e())};let Et=!1;se&&(Et=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),Et||S.addEventListener("DOMContentLoaded",Vr));function ji(e){se&&(Et?setTimeout(e,0):$r.push(e))}function rt(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?Yr(e):"<".concat(t," ").concat(Li(n),">").concat(a.map(rt).join(""),"</").concat(t,">")}function Sa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qt=function(t,n,a,r){var o=Object.keys(t),s=o.length,l=n,p,m,v;for(a===void 0?(p=1,v=t[o[0]]):(p=0,v=a);p<s;p++)m=o[p],v=l(v,t[m],m,t);return v};function Ui(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function yn(e){const t=Ui(e);return t.length===1?t[0].toString(16):null}function zi(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ta(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function vn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Ta(t);typeof te.hooks.addPack=="function"&&!a?te.hooks.addPack(e,Ta(t)):te.styles[e]=c(c({},te.styles[e]||{}),r),e==="fas"&&vn("fa",t)}const{styles:nt,shims:Hi}=te,Xr=Object.keys(Fn),Wi=Xr.reduce((e,t)=>(e[t]=Object.keys(Fn[t]),e),{});let Un=null,Kr={},Jr={},Zr={},Qr={},eo={};function qi(e){return~ki.indexOf(e)}function Gi(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!qi(r)?r:null}const to=()=>{const e=a=>Qt(nt,(r,o,s)=>(r[s]=Qt(o,a,{}),r),{});Kr=e((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=o}),a)),Jr=e((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=o}),a)),eo=e((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(l=>{a[l]=o}),a});const t="far"in nt||g.autoFetchSvg,n=Qt(Hi,(a,r)=>{const o=r[0];let s=r[1];const l=r[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Zr=n.names,Qr=n.unicodes,Un=Nt(g.styleDefault,{family:g.familyDefault})};Ci(e=>{Un=Nt(e.styleDefault,{family:g.familyDefault})});to();function zn(e,t){return(Kr[e]||{})[t]}function Yi(e,t){return(Jr[e]||{})[t]}function Ee(e,t){return(eo[e]||{})[t]}function no(e){return Zr[e]||{prefix:null,iconName:null}}function Bi(e){const t=Qr[e],n=zn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function he(){return Un}const ao=()=>({prefix:null,iconName:null,rest:[]});function $i(e){let t=z;const n=Xr.reduce((a,r)=>(a[r]="".concat(g.cssPrefix,"-").concat(r),a),{});return Dr.forEach(a=>{(e.includes(n[a])||e.some(r=>Wi[a].includes(r)))&&(t=a)}),t}function Nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=z}=t,a=Ei[n][e];if(n===kt&&!e)return"fad";const r=xa[n][e]||xa[n][a],o=e in te.styles?e:null;return r||o||null}function Vi(e){let t=[],n=null;return e.forEach(a=>{const r=Gi(g.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function _a(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function Ct(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=un.concat(fi),o=_a(e.filter(x=>r.includes(x))),s=_a(e.filter(x=>!un.includes(x))),l=o.filter(x=>(a=x,!Fr.includes(x))),[p=null]=l,m=$i(o),v=c(c({},Vi(s)),{},{prefix:Nt(p,{family:m})});return c(c(c({},v),Zi({values:e,family:m,styles:nt,config:g,canonical:v,givenPrefix:a})),Xi(n,a,v))}function Xi(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const o=t==="fa"?no(r):{},s=Ee(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!nt.far&&nt.fas&&!g.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ki=Dr.filter(e=>e!==z||e!==kt),Ji=Object.keys(fn).filter(e=>e!==z).map(e=>Object.keys(fn[e])).flat();function Zi(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=e,l=n===kt,p=t.includes("fa-duotone")||t.includes("fad"),m=s.familyDefault==="duotone",v=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(p||m||v)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ki.includes(n)&&(Object.keys(o).find(A=>Ji.includes(A))||s.autoFetchSvg)){const A=ni.get(n).defaultShortPrefixId;a.prefix=A,a.iconName=Ee(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=he()||"fas"),a}class Qi{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=c(c({},this.definitions[o]||{}),r[o]),vn(o,r[o]);const s=Fn[z][o];s&&vn(s,r[o]),to()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:l}=a[r],p=l[2];t[o]||(t[o]={}),p.length>0&&p.forEach(m=>{typeof m=="string"&&(t[o][m]=l)}),t[o][s]=l}),t}}let wa=[],Fe={};const ze={},es=Object.keys(ze);function ts(e,t){let{mixoutsTo:n}=t;return wa=e,Fe={},Object.keys(ze).forEach(a=>{es.indexOf(a)===-1&&delete ze[a]}),wa.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{Fe[s]||(Fe[s]=[]),Fe[s].push(o[s])})}a.provides&&a.provides(ze)}),n}function bn(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Fe[e]||[]).forEach(s=>{t=s.apply(null,[t,...a])}),t}function _e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(Fe[e]||[]).forEach(o=>{o.apply(null,n)})}function ge(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ze[e]?ze[e].apply(null,t):void 0}function An(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||he();if(t)return t=Ee(n,t)||t,Sa(ro.definitions,n,t)||Sa(te.styles,n,t)}const ro=new Qi,ns=()=>{g.autoReplaceSvg=!1,g.observeMutations=!1,_e("noAuto")},as={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return se?(_e("beforeI2svg",e),ge("pseudoElements2svg",e),ge("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,ji(()=>{os({autoReplaceSvgRoot:t}),_e("watch",e)})}},rs={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ee(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Nt(e[0]);return{prefix:n,iconName:Ee(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(g.cssPrefix,"-"))>-1||e.match(Si))){const t=Ct(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||he(),iconName:Ee(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=he();return{prefix:t,iconName:Ee(t,e)||e}}}},B={noAuto:ns,config:g,dom:as,parse:rs,library:ro,findIconDefinition:An,toHtml:rt},os=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=S}=e;(Object.keys(te.styles).length>0||g.autoFetchSvg)&&se&&g.autoReplaceSvg&&B.dom.i2svg({node:t})};function It(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>rt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!se)return;const n=S.createElement("div");return n.innerHTML=e.html,n.children}}),e}function is(e){let{children:t,main:n,mask:a,attributes:r,styles:o,transform:s}=e;if(jn(s)&&n.found&&!a.found){const{width:l,height:p}=n,m={x:l/p/2,y:.5};r.style=Ot(c(c({},o),{},{"transform-origin":"".concat(m.x+s.x/16,"em ").concat(m.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ss(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(g.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:s}),children:a}]}]}function Hn(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:l,maskId:p,titleId:m,extra:v,watchable:x=!1}=e,{width:A,height:T}=n.found?n:t,P=si.includes(a),G=[g.replacementClass,r?"".concat(g.cssPrefix,"-").concat(r):""].filter(H=>v.classes.indexOf(H)===-1).filter(H=>H!==""||!!H).concat(v.classes).join(" ");let _={children:[],attributes:c(c({},v.attributes),{},{"data-prefix":a,"data-icon":r,class:G,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(T)})};const N=P&&!~v.classes.indexOf("fa-fw")?{width:"".concat(A/T*16*.0625,"em")}:{};x&&(_.attributes[Te]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(m||tt())},children:[l]}),delete _.attributes.title);const w=c(c({},_),{},{prefix:a,iconName:r,main:t,mask:n,maskId:p,transform:o,symbol:s,styles:c(c({},N),v.styles)}),{children:C,attributes:k}=n.found&&t.found?ge("generateAbstractMask",w)||{children:[],attributes:{}}:ge("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=C,w.attributes=k,s?ss(w):is(w)}function ka(e){const{content:t,width:n,height:a,transform:r,title:o,extra:s,watchable:l=!1}=e,p=c(c(c({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(p[Te]="");const m=c({},s.styles);jn(r)&&(m.transform=Mi({transform:r,startCentered:!0,width:n,height:a}),m["-webkit-transform"]=m.transform);const v=Ot(m);v.length>0&&(p.style=v);const x=[];return x.push({tag:"span",attributes:p,children:[t]}),o&&x.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),x}function ls(e){const{content:t,title:n,extra:a}=e,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=Ot(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:en}=te;function xn(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(Jt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Jt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Jt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const cs={found:!1,width:512,height:512};function fs(e,t){!Hr&&!g.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function En(e,t){let n=t;return t==="fa"&&g.styleDefault!==null&&(t=he()),new Promise((a,r)=>{if(n==="fa"){const o=no(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&en[t]&&en[t][e]){const o=en[t][e];return a(xn(o))}fs(e,t),a(c(c({},cs),{},{icon:g.showMissingIcons&&e?ge("missingIconAbstract")||{}:{}}))})}const Oa=()=>{},Sn=g.measurePerformance&&dt&&dt.mark&&dt.measure?dt:{mark:Oa,measure:Oa},Xe='FA "6.7.2"',us=e=>(Sn.mark("".concat(Xe," ").concat(e," begins")),()=>oo(e)),oo=e=>{Sn.mark("".concat(Xe," ").concat(e," ends")),Sn.measure("".concat(Xe," ").concat(e),"".concat(Xe," ").concat(e," begins"),"".concat(Xe," ").concat(e," ends"))};var Wn={begin:us,end:oo};const yt=()=>{};function Na(e){return typeof(e.getAttribute?e.getAttribute(Te):null)=="string"}function ms(e){const t=e.getAttribute?e.getAttribute(Rn):null,n=e.getAttribute?e.getAttribute(Mn):null;return t&&n}function ds(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(g.replacementClass)}function ps(){return g.autoReplaceSvg===!0?vt.replace:vt[g.autoReplaceSvg]||vt.replace}function hs(e){return S.createElementNS("http://www.w3.org/2000/svg",e)}function gs(e){return S.createElement(e)}function io(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?hs:gs}=t;if(typeof e=="string")return S.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){a.appendChild(io(o,{ceFn:n}))}),a}function ys(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const vt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(io(n),t)}),t.getAttribute(Te)===null&&g.keepOriginalSource){let n=S.createComment(ys(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Dn(t).indexOf(g.replacementClass))return vt.replace(e);const a=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,l)=>(l===g.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>rt(o)).join(`
`);t.setAttribute(Te,""),t.innerHTML=r}};function Ca(e){e()}function so(e,t){const n=typeof t=="function"?t:yt;if(e.length===0)n();else{let a=Ca;g.mutateApproach===Ai&&(a=pe.requestAnimationFrame||Ca),a(()=>{const r=ps(),o=Wn.begin("mutate");e.map(r),o(),n()})}}let qn=!1;function lo(){qn=!0}function Tn(){qn=!1}let St=null;function Ia(e){if(!ya||!g.observeMutations)return;const{treeCallback:t=yt,nodeCallback:n=yt,pseudoElementsCallback:a=yt,observeMutationsRoot:r=S}=e;St=new ya(o=>{if(qn)return;const s=he();We(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Na(l.addedNodes[0])&&(g.searchPseudoElements&&a(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&g.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&Na(l.target)&&~wi.indexOf(l.attributeName))if(l.attributeName==="class"&&ms(l.target)){const{prefix:p,iconName:m}=Ct(Dn(l.target));l.target.setAttribute(Rn,p||s),m&&l.target.setAttribute(Mn,m)}else ds(l.target)&&n(l.target)})}),se&&St.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function vs(){St&&St.disconnect()}function bs(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function As(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=Ct(Dn(e));return r.prefix||(r.prefix=he()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Yi(r.prefix,e.innerText)||zn(r.prefix,yn(e.innerText))),!r.iconName&&g.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function xs(e){const t=We(e.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return g.autoA11y&&(n?t["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(a||tt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Es(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ee,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=As(e),o=xs(e),s=bn("parseNodeAttributes",{},e);let l=t.styleParser?bs(e):[];return c({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:ee,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},s)}const{styles:Ss}=te;function co(e){const t=g.autoReplaceSvg==="nest"?Pa(e,{styleParser:!1}):Pa(e);return~t.extra.classes.indexOf(qr)?ge("generateLayersText",e,t):ge("generateSvgReplacementMutation",e,t)}function Ts(){return[...ri,...un]}function La(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!se)return Promise.resolve();const n=S.documentElement.classList,a=v=>n.add("".concat(Aa,"-").concat(v)),r=v=>n.remove("".concat(Aa,"-").concat(v)),o=g.autoFetchSvg?Ts():Fr.concat(Object.keys(Ss));o.includes("fa")||o.push("fa");const s=[".".concat(qr,":not([").concat(Te,"])")].concat(o.map(v=>".".concat(v,":not([").concat(Te,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=We(e.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const p=Wn.begin("onTree"),m=l.reduce((v,x)=>{try{const A=co(x);A&&v.push(A)}catch(A){Hr||A.name==="MissingIcon"&&console.error(A)}return v},[]);return new Promise((v,x)=>{Promise.all(m).then(A=>{so(A,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),p(),v()})}).catch(A=>{p(),x(A)})})}function _s(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;co(e).then(n=>{n&&so([n],t)})}function ws(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:An(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:An(r||{})),e(a,c(c({},n),{},{mask:r}))}}const ks=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ee,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:l=null,classes:p=[],attributes:m={},styles:v={}}=t;if(!e)return;const{prefix:x,iconName:A,icon:T}=e;return It(c({type:"icon"},e),()=>(_e("beforeDOMElementCreation",{iconDefinition:e,params:t}),g.autoA11y&&(s?m["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(l||tt()):(m["aria-hidden"]="true",m.focusable="false")),Hn({icons:{main:xn(T),mask:r?xn(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:A,transform:c(c({},ee),n),symbol:a,title:s,maskId:o,titleId:l,extra:{attributes:m,styles:v,classes:p}})))};var Os={mixout(){return{icon:ws(ks)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=La,e.nodeCallback=_s,e}}},provides(e){e.i2svg=function(t){const{node:n=S,callback:a=()=>{}}=t;return La(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:l,symbol:p,mask:m,maskId:v,extra:x}=n;return new Promise((A,T)=>{Promise.all([En(a,s),m.iconName?En(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(P=>{let[G,_]=P;A([t,Hn({icons:{main:G,mask:_},prefix:s,iconName:a,transform:l,symbol:p,maskId:v,title:r,titleId:o,extra:x,watchable:!0})])}).catch(T)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:o,styles:s}=t;const l=Ot(s);l.length>0&&(a.style=l);let p;return jn(o)&&(p=ge("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(p||r.icon),{children:n,attributes:a}}}},Ns={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return It({type:"layer"},()=>{_e("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Cs={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=t;return It({type:"counter",content:e},()=>(_e("beforeDOMElementCreation",{content:e,params:t}),ls({content:e.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(g.cssPrefix,"-layers-counter"),...a]}})))}}}},Is={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ee,title:a=null,classes:r=[],attributes:o={},styles:s={}}=t;return It({type:"text",content:e},()=>(_e("beforeDOMElementCreation",{content:e,params:t}),ka({content:e,transform:c(c({},ee),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(g.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:o}=n;let s=null,l=null;if(Rr){const p=parseInt(getComputedStyle(t).fontSize,10),m=t.getBoundingClientRect();s=m.width/p,l=m.height/p}return g.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,ka({content:t.innerHTML,width:s,height:l,transform:r,title:a,extra:o,watchable:!0})])}}};const Ps=new RegExp('"',"ug"),Ra=[1105920,1112319],Ma=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),ti),vi),ui),_n=Object.keys(Ma).reduce((e,t)=>(e[t.toLowerCase()]=Ma[t],e),{}),Ls=Object.keys(_n).reduce((e,t)=>{const n=_n[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Rs(e){const t=e.replace(Ps,""),n=zi(t,0),a=n>=Ra[0]&&n<=Ra[1],r=t.length===2?t[0]===t[1]:!1;return{value:yn(r?t[0]:t),isSecondary:a||r}}function Ms(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(_n[n]||{})[r]||Ls[n]}function Fa(e,t){const n="".concat(bi).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const s=We(e.children).filter(A=>A.getAttribute(dn)===t)[0],l=pe.getComputedStyle(e,t),p=l.getPropertyValue("font-family"),m=p.match(Ti),v=l.getPropertyValue("font-weight"),x=l.getPropertyValue("content");if(s&&!m)return e.removeChild(s),a();if(m&&x!=="none"&&x!==""){const A=l.getPropertyValue("content");let T=Ms(p,v);const{value:P,isSecondary:G}=Rs(A),_=m[0].startsWith("FontAwesome");let N=zn(T,P),w=N;if(_){const C=Bi(P);C.iconName&&C.prefix&&(N=C.iconName,T=C.prefix)}if(N&&!G&&(!s||s.getAttribute(Rn)!==T||s.getAttribute(Mn)!==w)){e.setAttribute(n,w),s&&e.removeChild(s);const C=Es(),{extra:k}=C;k.attributes[dn]=t,En(N,T).then(H=>{const we=Hn(c(c({},C),{},{icons:{main:H,mask:ao()},prefix:T,iconName:w,extra:k,watchable:!0})),ye=S.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ye,e.firstChild):e.appendChild(ye),ye.outerHTML=we.map(Lt=>rt(Lt)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Fs(e){return Promise.all([Fa(e,"::before"),Fa(e,"::after")])}function Ds(e){return e.parentNode!==document.head&&!~xi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(dn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Da(e){if(se)return new Promise((t,n)=>{const a=We(e.querySelectorAll("*")).filter(Ds).map(Fs),r=Wn.begin("searchPseudoElements");lo(),Promise.all(a).then(()=>{r(),Tn(),t()}).catch(()=>{r(),Tn(),n()})})}var js={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Da,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=S}=t;g.searchPseudoElements&&Da(n)}}};let ja=!1;var Us={mixout(){return{dom:{unwatch(){lo(),ja=!0}}}},hooks(){return{bootstrap(){Ia(bn("mutationObserverCallbacks",{}))},noAuto(){vs()},watch(e){const{observeMutationsRoot:t}=e;ja?Tn():Ia(bn("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Ua=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var zs={mixout(){return{parse:{transform:e=>Ua(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Ua(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:o}=t;const s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),p="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),m="rotate(".concat(a.rotate," 0 0)"),v={transform:"".concat(l," ").concat(p," ").concat(m)},x={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:v,path:x};return{tag:"g",attributes:c({},A.outer),children:[{tag:"g",attributes:c({},A.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),A.path)}]}]}}}};const tn={x:0,y:0,width:"100%",height:"100%"};function za(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Hs(e){return e.tag==="g"?e.children:[e]}var Ws={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?Ct(n.split(" ").map(r=>r.trim())):ao();return a.prefix||(a.prefix=he()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:l}=t;const{width:p,icon:m}=r,{width:v,icon:x}=o,A=Ri({transform:l,containerWidth:v,iconWidth:p}),T={tag:"rect",attributes:c(c({},tn),{},{fill:"white"})},P=m.children?{children:m.children.map(za)}:{},G={tag:"g",attributes:c({},A.inner),children:[za(c({tag:m.tag,attributes:c(c({},m.attributes),A.path)},P))]},_={tag:"g",attributes:c({},A.outer),children:[G]},N="mask-".concat(s||tt()),w="clip-".concat(s||tt()),C={tag:"mask",attributes:c(c({},tn),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,_]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Hs(x)},C]};return n.push(k,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(N,")")},tn)}),{children:n,attributes:a}}}},qs={provides(e){let t=!1;pe.matchMedia&&(t=pe.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=c(c({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Gs={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Ys=[Di,Os,Ns,Cs,Is,js,Us,zs,Ws,qs,Gs];ts(Ys,{mixoutsTo:B});B.noAuto;B.config;B.library;B.dom;const wn=B.parse;B.findIconDefinition;B.toHtml;const Bs=B.icon;B.layer;B.text;B.counter;function Ha(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ha(Object(n),!0).forEach(function(a){De(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ha(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Tt(e){"@babel/helpers - typeof";return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tt(e)}function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $s(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Vs(e,t){if(e==null)return{};var n=$s(e,t),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function kn(e){return Xs(e)||Ks(e)||Js(e)||Zs()}function Xs(e){if(Array.isArray(e))return On(e)}function Ks(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Js(e,t){if(e){if(typeof e=="string")return On(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return On(e,t)}}function On(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Zs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qs(e){var t,n=e.beat,a=e.fade,r=e.beatFade,o=e.bounce,s=e.shake,l=e.flash,p=e.spin,m=e.spinPulse,v=e.spinReverse,x=e.pulse,A=e.fixedWidth,T=e.inverse,P=e.border,G=e.listItem,_=e.flip,N=e.size,w=e.rotation,C=e.pull,k=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":p,"fa-spin-reverse":v,"fa-spin-pulse":m,"fa-pulse":x,"fa-fw":A,"fa-inverse":T,"fa-border":P,"fa-li":G,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},De(t,"fa-".concat(N),typeof N<"u"&&N!==null),De(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),De(t,"fa-pull-".concat(C),typeof C<"u"&&C!==null),De(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(k).map(function(H){return k[H]?H:null}).filter(function(H){return H})}function el(e){return e=e-0,e===e}function fo(e){return el(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var tl=["style"];function nl(e){return e.charAt(0).toUpperCase()+e.slice(1)}function al(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=fo(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?t[nl(r)]=o:t[r]=o,t},{})}function uo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(p){return uo(e,p)}),r=Object.keys(t.attributes||{}).reduce(function(p,m){var v=t.attributes[m];switch(m){case"class":p.attrs.className=v,delete t.attributes.class;break;case"style":p.attrs.style=al(v);break;default:m.indexOf("aria-")===0||m.indexOf("data-")===0?p.attrs[m.toLowerCase()]=v:p.attrs[fo(m)]=v}return p},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=Vs(n,tl);return r.attrs.style=Q(Q({},r.attrs.style),s),e.apply(void 0,[t.tag,Q(Q({},r.attrs),l)].concat(kn(a)))}var mo=!1;try{mo=!0}catch{}function rl(){if(!mo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Wa(e){if(e&&Tt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(wn.icon)return wn.icon(e);if(e===null)return null;if(e&&Tt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function nn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?De({},e,t):{}}var qa={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ce=Tr.forwardRef(function(e,t){var n=Q(Q({},qa),e),a=n.icon,r=n.mask,o=n.symbol,s=n.className,l=n.title,p=n.titleId,m=n.maskId,v=Wa(a),x=nn("classes",[].concat(kn(Qs(n)),kn((s||"").split(" ")))),A=nn("transform",typeof n.transform=="string"?wn.transform(n.transform):n.transform),T=nn("mask",Wa(r)),P=Bs(v,Q(Q(Q(Q({},x),A),T),{},{symbol:o,title:l,titleId:p,maskId:m}));if(!P)return rl("Could not find icon",v),null;var G=P.abstract,_={ref:t};return Object.keys(n).forEach(function(N){qa.hasOwnProperty(N)||(_[N]=n[N])}),ol(G[0],_)});ce.displayName="FontAwesomeIcon";ce.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};var ol=uo.bind(null,Tr.createElement);const Gn=({columnIndex:e,column:{title:t,links:n}})=>{const[a,r]=Pn.useState(!1);return d.jsx("div",{className:"col-xl flex-footer testname-column",children:d.jsxs("div",{className:"card accordion-item desktop-disable-xl",children:[d.jsx("div",{className:"accordion-header",role:"button",onClick:()=>r(!a),onKeyDown:()=>r(!a),tabIndex:0,"data-bs-toggle":"collapse",children:d.jsx("div",{className:"h5",children:d.jsxs("a",{id:`footlink-header-${e}`,className:"collapsed",href:`#footlink-${e}`,role:"button",children:[t,d.jsx(ce,{icon:Yo})]})})}),d.jsx("div",{id:`footlink-${e}`,className:`collapse accordion-body ${a?"show":""}`,children:n.map(o=>d.jsx("a",{className:"nav-link",href:o.url,title:o.title,children:o.text},`footlink-${t}-link-${o.text}`))})]})})};Gn.propTypes={columnIndex:h.number.isRequired,column:Y.shape({title:h.string,links:Y.arrayOf(Y.shape({url:h.string.isRequired,title:h.string,text:h.string.isRequired}))})};Gn.__docgenInfo={description:`@param {{ columnIndex: number, column: Column }} props
@returns {JSX.Element}`,methods:[],displayName:"ColumnSection",props:{columnIndex:{description:"",type:{name:"number"},required:!0},column:{description:"",type:{name:"shape",value:{title:{name:"string",required:!1},links:{name:"arrayOf",value:{name:"shape",value:{url:{name:"string",required:!0},title:{name:"string",required:!1},text:{name:"string",required:!0}}},required:!1}}},required:!1}}};const ot=({contact:{title:e,contactLink:t,contributionLink:n,columns:a}})=>d.jsx("div",{className:"wrapper",id:"wrapper-footer-columns","data-testid":"contact",children:d.jsx("div",{className:"container",id:"footer-columns",children:d.jsxs("div",{className:"row","data-testid":"columns-container",children:[d.jsxs("div",{className:"col-xl-3",id:"info-column",children:[d.jsx("div",{className:"h5",children:e}),t&&d.jsx("p",{className:"contact-link",children:d.jsx("a",{href:t,children:"Contact Us"})}),n&&d.jsx("p",{className:"contribute-button","data-testid":"contact-contribution-link",children:d.jsx("a",{href:n,className:"btn btn-small btn-gold",children:"Support ASU"})})]}),a&&a.length&&d.jsx(d.Fragment,{children:a.map((r,o)=>d.jsx(Gn,{columnIndex:o,column:r},`footlink-${r.title}`))})]})})});ot.propTypes={contact:Y.shape({title:h.string.isRequired,contactLink:h.string.isRequired,contributionLink:h.string,columns:Y.arrayOf(Y.shape({title:h.string,links:Y.arrayOf(Y.shape({url:h.string.isRequired,title:h.string,text:h.string.isRequired}))}))})};ot.defaultProps={contact:{title:"",contactLink:"",contributionLink:""}};ot.__docgenInfo={description:`@typedef {import("../../core/models/types").Contact} Contact

@param {{contact: Contact}} props`,methods:[],displayName:"Contact",props:{contact:{defaultValue:{value:`{
  title: "",
  contactLink: "",
  contributionLink: "",
}`,computed:!1},description:"",type:{name:"shape",value:{title:{name:"string",required:!0},contactLink:{name:"string",required:!0},contributionLink:{name:"string",required:!1},columns:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},links:{name:"arrayOf",value:{name:"shape",value:{url:{name:"string",required:!0},title:{name:"string",required:!1},text:{name:"string",required:!0}}},required:!1}}},required:!1}}},required:!1}}};function fe(e){"@babel/helpers - typeof";return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fe(e)}function Nn(e,t){return Nn=Object.setPrototypeOf||function(a,r){return a.__proto__=r,a},Nn(e,t)}function il(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function bt(e,t,n){return il()?bt=Reflect.construct:bt=function(r,o,s){var l=[null];l.push.apply(l,o);var p=Function.bind.apply(r,l),m=new p;return s&&Nn(m,s.prototype),m},bt.apply(null,arguments)}function J(e){return sl(e)||ll(e)||cl(e)||fl()}function sl(e){if(Array.isArray(e))return Cn(e)}function ll(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cl(e,t){if(e){if(typeof e=="string")return Cn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cn(e,t)}}function Cn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function fl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ul=Object.hasOwnProperty,Ga=Object.setPrototypeOf,ml=Object.isFrozen,dl=Object.getPrototypeOf,pl=Object.getOwnPropertyDescriptor,W=Object.freeze,V=Object.seal,hl=Object.create,po=typeof Reflect<"u"&&Reflect,_t=po.apply,In=po.construct;_t||(_t=function(t,n,a){return t.apply(n,a)});W||(W=function(t){return t});V||(V=function(t){return t});In||(In=function(t,n){return bt(t,J(n))});var gl=X(Array.prototype.forEach),Ya=X(Array.prototype.pop),Be=X(Array.prototype.push),At=X(String.prototype.toLowerCase),an=X(String.prototype.toString),Ba=X(String.prototype.match),K=X(String.prototype.replace),yl=X(String.prototype.indexOf),vl=X(String.prototype.trim),D=X(RegExp.prototype.test),rn=bl(TypeError);function X(e){return function(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return _t(e,t,a)}}function bl(e){return function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return In(e,n)}}function b(e,t,n){var a;n=(a=n)!==null&&a!==void 0?a:At,Ga&&Ga(e,null);for(var r=t.length;r--;){var o=t[r];if(typeof o=="string"){var s=n(o);s!==o&&(ml(t)||(t[r]=s),o=s)}e[o]=!0}return e}function xe(e){var t=hl(null),n;for(n in e)_t(ul,e,[n])===!0&&(t[n]=e[n]);return t}function ht(e,t){for(;e!==null;){var n=pl(e,t);if(n){if(n.get)return X(n.get);if(typeof n.value=="function")return X(n.value)}e=dl(e)}function a(r){return console.warn("fallback value for",r),null}return a}var $a=W(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),on=W(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),sn=W(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Al=W(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ln=W(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),xl=W(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Va=W(["#text"]),Xa=W(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),cn=W(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ka=W(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),gt=W(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),El=V(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Sl=V(/<%[\w\W]*|[\w\W]*%>/gm),Tl=V(/\${[\w\W]*}/gm),_l=V(/^data-[\-\w.\u00B7-\uFFFF]+$/),wl=V(/^aria-[\-\w]+$/),kl=V(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ol=V(/^(?:\w+script|data):/i),Nl=V(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Cl=V(/^html$/i),Il=V(/^[a-z][.\w]*(-[.\w]+)+$/i),Pl=function(){return typeof window>"u"?null:window},Ll=function(t,n){if(fe(t)!=="object"||typeof t.createPolicy!="function")return null;var a=null,r="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(r)&&(a=n.currentScript.getAttribute(r));var o="dompurify"+(a?"#"+a:"");try{return t.createPolicy(o,{createHTML:function(l){return l},createScriptURL:function(l){return l}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function ho(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Pl(),t=function(i){return ho(i)};if(t.version="2.5.8",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;var n=e.document,a=e.document,r=e.DocumentFragment,o=e.HTMLTemplateElement,s=e.Node,l=e.Element,p=e.NodeFilter,m=e.NamedNodeMap,v=m===void 0?e.NamedNodeMap||e.MozNamedAttrMap:m,x=e.HTMLFormElement,A=e.DOMParser,T=e.trustedTypes,P=l.prototype,G=ht(P,"cloneNode"),_=ht(P,"nextSibling"),N=ht(P,"childNodes"),w=ht(P,"parentNode");if(typeof o=="function"){var C=a.createElement("template");C.content&&C.content.ownerDocument&&(a=C.content.ownerDocument)}var k=Ll(T,n),H=k?k.createHTML(""):"",we=a,ye=we.implementation,Lt=we.createNodeIterator,vo=we.createDocumentFragment,bo=we.getElementsByTagName,Ao=n.importNode,Yn={};try{Yn=xe(a).documentMode?a.documentMode:{}}catch{}var Z={};t.isSupported=typeof w=="function"&&ye&&ye.createHTMLDocument!==void 0&&Yn!==9;var Rt=El,Mt=Sl,Ft=Tl,xo=_l,Eo=wl,So=Ol,Bn=Nl,To=Il,Dt=kl,L=null,$n=b({},[].concat(J($a),J(on),J(sn),J(ln),J(Va))),R=null,Vn=b({},[].concat(J(Xa),J(cn),J(Ka),J(gt))),O=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),qe=null,jt=null,Xn=!0,Ut=!0,Kn=!1,Jn=!0,ke=!1,zt=!0,ve=!1,Ht=!1,Wt=!1,Oe=!1,st=!1,lt=!1,Zn=!0,Qn=!1,_o="user-content-",qt=!0,Ge=!1,Ne={},Ce=null,ea=b({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),ta=null,na=b({},["audio","video","img","source","image","track"]),Gt=null,aa=b({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ct="http://www.w3.org/1998/Math/MathML",ft="http://www.w3.org/2000/svg",ae="http://www.w3.org/1999/xhtml",Ie=ae,Yt=!1,Bt=null,wo=b({},[ct,ft,ae],an),be,ko=["application/xhtml+xml","text/html"],Oo="text/html",M,Pe=null,No=a.createElement("form"),ra=function(i){return i instanceof RegExp||i instanceof Function},$t=function(i){Pe&&Pe===i||((!i||fe(i)!=="object")&&(i={}),i=xe(i),be=ko.indexOf(i.PARSER_MEDIA_TYPE)===-1?be=Oo:be=i.PARSER_MEDIA_TYPE,M=be==="application/xhtml+xml"?an:At,L="ALLOWED_TAGS"in i?b({},i.ALLOWED_TAGS,M):$n,R="ALLOWED_ATTR"in i?b({},i.ALLOWED_ATTR,M):Vn,Bt="ALLOWED_NAMESPACES"in i?b({},i.ALLOWED_NAMESPACES,an):wo,Gt="ADD_URI_SAFE_ATTR"in i?b(xe(aa),i.ADD_URI_SAFE_ATTR,M):aa,ta="ADD_DATA_URI_TAGS"in i?b(xe(na),i.ADD_DATA_URI_TAGS,M):na,Ce="FORBID_CONTENTS"in i?b({},i.FORBID_CONTENTS,M):ea,qe="FORBID_TAGS"in i?b({},i.FORBID_TAGS,M):{},jt="FORBID_ATTR"in i?b({},i.FORBID_ATTR,M):{},Ne="USE_PROFILES"in i?i.USE_PROFILES:!1,Xn=i.ALLOW_ARIA_ATTR!==!1,Ut=i.ALLOW_DATA_ATTR!==!1,Kn=i.ALLOW_UNKNOWN_PROTOCOLS||!1,Jn=i.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ke=i.SAFE_FOR_TEMPLATES||!1,zt=i.SAFE_FOR_XML!==!1,ve=i.WHOLE_DOCUMENT||!1,Oe=i.RETURN_DOM||!1,st=i.RETURN_DOM_FRAGMENT||!1,lt=i.RETURN_TRUSTED_TYPE||!1,Wt=i.FORCE_BODY||!1,Zn=i.SANITIZE_DOM!==!1,Qn=i.SANITIZE_NAMED_PROPS||!1,qt=i.KEEP_CONTENT!==!1,Ge=i.IN_PLACE||!1,Dt=i.ALLOWED_URI_REGEXP||Dt,Ie=i.NAMESPACE||ae,O=i.CUSTOM_ELEMENT_HANDLING||{},i.CUSTOM_ELEMENT_HANDLING&&ra(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(O.tagNameCheck=i.CUSTOM_ELEMENT_HANDLING.tagNameCheck),i.CUSTOM_ELEMENT_HANDLING&&ra(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(O.attributeNameCheck=i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),i.CUSTOM_ELEMENT_HANDLING&&typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(O.allowCustomizedBuiltInElements=i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ke&&(Ut=!1),st&&(Oe=!0),Ne&&(L=b({},J(Va)),R=[],Ne.html===!0&&(b(L,$a),b(R,Xa)),Ne.svg===!0&&(b(L,on),b(R,cn),b(R,gt)),Ne.svgFilters===!0&&(b(L,sn),b(R,cn),b(R,gt)),Ne.mathMl===!0&&(b(L,ln),b(R,Ka),b(R,gt))),i.ADD_TAGS&&(L===$n&&(L=xe(L)),b(L,i.ADD_TAGS,M)),i.ADD_ATTR&&(R===Vn&&(R=xe(R)),b(R,i.ADD_ATTR,M)),i.ADD_URI_SAFE_ATTR&&b(Gt,i.ADD_URI_SAFE_ATTR,M),i.FORBID_CONTENTS&&(Ce===ea&&(Ce=xe(Ce)),b(Ce,i.FORBID_CONTENTS,M)),qt&&(L["#text"]=!0),ve&&b(L,["html","head","body"]),L.table&&(b(L,["tbody"]),delete qe.tbody),W&&W(i),Pe=i)},oa=b({},["mi","mo","mn","ms","mtext"]),ia=b({},["annotation-xml"]),Co=b({},["title","style","font","a","script"]),ut=b({},on);b(ut,sn),b(ut,Al);var Vt=b({},ln);b(Vt,xl);var Io=function(i){var f=w(i);(!f||!f.tagName)&&(f={namespaceURI:Ie,tagName:"template"});var u=At(i.tagName),E=At(f.tagName);return Bt[i.namespaceURI]?i.namespaceURI===ft?f.namespaceURI===ae?u==="svg":f.namespaceURI===ct?u==="svg"&&(E==="annotation-xml"||oa[E]):!!ut[u]:i.namespaceURI===ct?f.namespaceURI===ae?u==="math":f.namespaceURI===ft?u==="math"&&ia[E]:!!Vt[u]:i.namespaceURI===ae?f.namespaceURI===ft&&!ia[E]||f.namespaceURI===ct&&!oa[E]?!1:!Vt[u]&&(Co[u]||!ut[u]):!!(be==="application/xhtml+xml"&&Bt[i.namespaceURI]):!1},$=function(i){Be(t.removed,{element:i});try{i.parentNode.removeChild(i)}catch{try{i.outerHTML=H}catch{i.remove()}}},mt=function(i,f){try{Be(t.removed,{attribute:f.getAttributeNode(i),from:f})}catch{Be(t.removed,{attribute:null,from:f})}if(f.removeAttribute(i),i==="is"&&!R[i])if(Oe||st)try{$(f)}catch{}else try{f.setAttribute(i,"")}catch{}},sa=function(i){var f,u;if(Wt)i="<remove></remove>"+i;else{var E=Ba(i,/^[\r\n\t ]+/);u=E&&E[0]}be==="application/xhtml+xml"&&Ie===ae&&(i='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+i+"</body></html>");var q=k?k.createHTML(i):i;if(Ie===ae)try{f=new A().parseFromString(q,be)}catch{}if(!f||!f.documentElement){f=ye.createDocument(Ie,"template",null);try{f.documentElement.innerHTML=Yt?H:q}catch{}}var U=f.body||f.documentElement;return i&&u&&U.insertBefore(a.createTextNode(u),U.childNodes[0]||null),Ie===ae?bo.call(f,ve?"html":"body")[0]:ve?f.documentElement:U},la=function(i){return Lt.call(i.ownerDocument||i,i,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT|p.SHOW_PROCESSING_INSTRUCTION|p.SHOW_CDATA_SECTION,null,!1)},Xt=function(i){return i instanceof x&&(typeof i.nodeName!="string"||typeof i.textContent!="string"||typeof i.removeChild!="function"||!(i.attributes instanceof v)||typeof i.removeAttribute!="function"||typeof i.setAttribute!="function"||typeof i.namespaceURI!="string"||typeof i.insertBefore!="function"||typeof i.hasChildNodes!="function")},Ye=function(i){return fe(s)==="object"?i instanceof s:i&&fe(i)==="object"&&typeof i.nodeType=="number"&&typeof i.nodeName=="string"},re=function(i,f,u){Z[i]&&gl(Z[i],function(E){E.call(t,f,u,Pe)})},ca=function(i){var f;if(re("beforeSanitizeElements",i,null),Xt(i)||D(/[\u0080-\uFFFF]/,i.nodeName))return $(i),!0;var u=M(i.nodeName);if(re("uponSanitizeElement",i,{tagName:u,allowedTags:L}),i.hasChildNodes()&&!Ye(i.firstElementChild)&&(!Ye(i.content)||!Ye(i.content.firstElementChild))&&D(/<[/\w]/g,i.innerHTML)&&D(/<[/\w]/g,i.textContent)||u==="select"&&D(/<template/i,i.innerHTML)||i.nodeType===7||zt&&i.nodeType===8&&D(/<[/\w]/g,i.data))return $(i),!0;if(!L[u]||qe[u]){if(!qe[u]&&ua(u)&&(O.tagNameCheck instanceof RegExp&&D(O.tagNameCheck,u)||O.tagNameCheck instanceof Function&&O.tagNameCheck(u)))return!1;if(qt&&!Ce[u]){var E=w(i)||i.parentNode,q=N(i)||i.childNodes;if(q&&E)for(var U=q.length,F=U-1;F>=0;--F){var Ae=G(q[F],!0);Ae.__removalCount=(i.__removalCount||0)+1,E.insertBefore(Ae,_(i))}}return $(i),!0}return i instanceof l&&!Io(i)||(u==="noscript"||u==="noembed"||u==="noframes")&&D(/<\/no(script|embed|frames)/i,i.innerHTML)?($(i),!0):(ke&&i.nodeType===3&&(f=i.textContent,f=K(f,Rt," "),f=K(f,Mt," "),f=K(f,Ft," "),i.textContent!==f&&(Be(t.removed,{element:i.cloneNode()}),i.textContent=f)),re("afterSanitizeElements",i,null),!1)},fa=function(i,f,u){if(Zn&&(f==="id"||f==="name")&&(u in a||u in No))return!1;if(!(Ut&&!jt[f]&&D(xo,f))){if(!(Xn&&D(Eo,f))){if(!R[f]||jt[f]){if(!(ua(i)&&(O.tagNameCheck instanceof RegExp&&D(O.tagNameCheck,i)||O.tagNameCheck instanceof Function&&O.tagNameCheck(i))&&(O.attributeNameCheck instanceof RegExp&&D(O.attributeNameCheck,f)||O.attributeNameCheck instanceof Function&&O.attributeNameCheck(f))||f==="is"&&O.allowCustomizedBuiltInElements&&(O.tagNameCheck instanceof RegExp&&D(O.tagNameCheck,u)||O.tagNameCheck instanceof Function&&O.tagNameCheck(u))))return!1}else if(!Gt[f]){if(!D(Dt,K(u,Bn,""))){if(!((f==="src"||f==="xlink:href"||f==="href")&&i!=="script"&&yl(u,"data:")===0&&ta[i])){if(!(Kn&&!D(So,K(u,Bn,"")))){if(u)return!1}}}}}}return!0},ua=function(i){return i!=="annotation-xml"&&Ba(i,To)},ma=function(i){var f,u,E,q;re("beforeSanitizeAttributes",i,null);var U=i.attributes;if(!(!U||Xt(i))){var F={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:R};for(q=U.length;q--;){f=U[q];var Ae=f,I=Ae.name,Kt=Ae.namespaceURI;if(u=I==="value"?f.value:vl(f.value),E=M(I),F.attrName=E,F.attrValue=u,F.keepAttr=!0,F.forceKeepAttr=void 0,re("uponSanitizeAttribute",i,F),u=F.attrValue,!F.forceKeepAttr&&(mt(I,i),!!F.keepAttr)){if(!Jn&&D(/\/>/i,u)){mt(I,i);continue}ke&&(u=K(u,Rt," "),u=K(u,Mt," "),u=K(u,Ft," "));var da=M(i.nodeName);if(fa(da,E,u)){if(Qn&&(E==="id"||E==="name")&&(mt(I,i),u=_o+u),zt&&D(/((--!?|])>)|<\/(style|title)/i,u)){mt(I,i);continue}if(k&&fe(T)==="object"&&typeof T.getAttributeType=="function"&&!Kt)switch(T.getAttributeType(da,E)){case"TrustedHTML":{u=k.createHTML(u);break}case"TrustedScriptURL":{u=k.createScriptURL(u);break}}try{Kt?i.setAttributeNS(Kt,I,u):i.setAttribute(I,u),Xt(i)?$(i):Ya(t.removed)}catch{}}}}re("afterSanitizeAttributes",i,null)}},Po=function y(i){var f,u=la(i);for(re("beforeSanitizeShadowDOM",i,null);f=u.nextNode();)re("uponSanitizeShadowNode",f,null),ca(f),ma(f),f.content instanceof r&&y(f.content);re("afterSanitizeShadowDOM",i,null)};return t.sanitize=function(y){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f,u,E,q,U;if(Yt=!y,Yt&&(y="<!-->"),typeof y!="string"&&!Ye(y))if(typeof y.toString=="function"){if(y=y.toString(),typeof y!="string")throw rn("dirty is not a string, aborting")}else throw rn("toString is not a function");if(!t.isSupported){if(fe(e.toStaticHTML)==="object"||typeof e.toStaticHTML=="function"){if(typeof y=="string")return e.toStaticHTML(y);if(Ye(y))return e.toStaticHTML(y.outerHTML)}return y}if(Ht||$t(i),t.removed=[],typeof y=="string"&&(Ge=!1),Ge){if(y.nodeName){var F=M(y.nodeName);if(!L[F]||qe[F])throw rn("root node is forbidden and cannot be sanitized in-place")}}else if(y instanceof s)f=sa("<!---->"),u=f.ownerDocument.importNode(y,!0),u.nodeType===1&&u.nodeName==="BODY"||u.nodeName==="HTML"?f=u:f.appendChild(u);else{if(!Oe&&!ke&&!ve&&y.indexOf("<")===-1)return k&&lt?k.createHTML(y):y;if(f=sa(y),!f)return Oe?null:lt?H:""}f&&Wt&&$(f.firstChild);for(var Ae=la(Ge?y:f);E=Ae.nextNode();)E.nodeType===3&&E===q||(ca(E),ma(E),E.content instanceof r&&Po(E.content),q=E);if(q=null,Ge)return y;if(Oe){if(st)for(U=vo.call(f.ownerDocument);f.firstChild;)U.appendChild(f.firstChild);else U=f;return(R.shadowroot||R.shadowrootmod)&&(U=Ao.call(n,U,!0)),U}var I=ve?f.outerHTML:f.innerHTML;return ve&&L["!doctype"]&&f.ownerDocument&&f.ownerDocument.doctype&&f.ownerDocument.doctype.name&&D(Cl,f.ownerDocument.doctype.name)&&(I="<!DOCTYPE "+f.ownerDocument.doctype.name+`>
`+I),ke&&(I=K(I,Rt," "),I=K(I,Mt," "),I=K(I,Ft," ")),k&&lt?k.createHTML(I):I},t.setConfig=function(y){$t(y),Ht=!0},t.clearConfig=function(){Pe=null,Ht=!1},t.isValidAttribute=function(y,i,f){Pe||$t({});var u=M(y),E=M(i);return fa(u,E,f)},t.addHook=function(y,i){typeof i=="function"&&(Z[y]=Z[y]||[],Be(Z[y],i))},t.removeHook=function(y){if(Z[y])return Ya(Z[y])},t.removeHooks=function(y){Z[y]&&(Z[y]=[])},t.removeAllHooks=function(){Z={}},t}ho();h.shape({event:h.string,action:h.string,name:h.string,region:h.string,section:h.string,component:h.string,type:h.string,text:h.string});const j=({event:e="",action:t="",name:n="",type:a="",section:r="",text:o="",region:s="",component:l=""})=>{const{dataLayer:p}=window,m={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:a.toLowerCase(),region:s.toLowerCase(),section:r.toLowerCase(),text:o.toLowerCase(),component:l.toLowerCase()};p&&p.push(m)},Rl=""+new URL("innovationLogo-CoE9iHq8.png",import.meta.url).href,Le={MAPS_AND_LOCATIONS:"https://www.asu.edu/about/locations-maps",JOBS:"https://cfo.asu.edu/applicant",DIRECTORY:"https://search.asu.edu/?search-tabs=web_dir_faculty_staff",CONTACT_ASU:"https://www.asu.edu/about/contact",MY_ASU:"https://my.asu.edu/",RANKINGS:"https://www.asu.edu/rankings"},$e={COPYRIGHT_AND_TRADEMARK:"https://www.asu.edu/about/copyright-trademark",ACCESSIBILITY_REPORT:"https://accessibility.asu.edu/report",PRIVACY:"https://www.asu.edu/about/privacy",TERMS_OF_USE:"https://www.asu.edu/about/terms-of-use",EMERGENCY:"https://www.asu.edu/emergency/"},Re={type:"internal link",section:"secondary footer"},go=()=>d.jsx("div",{className:"wrapper",id:"wrapper-footer-innovation","data-testid":"innovation",children:d.jsx("div",{className:"container",id:"footer-innovation",children:d.jsx("div",{className:"row",children:d.jsx("div",{className:"col",children:d.jsxs("div",{className:"d-flex footer-innovation-links",children:[d.jsxs("nav",{className:"nav","aria-label":"University Services",children:[d.jsx("a",{className:"nav-link",href:Le.MAPS_AND_LOCATIONS,onFocus:()=>j({...Re,text:"maps and locations"}),children:"Maps and Locations"}),d.jsx("a",{className:"nav-link",href:Le.JOBS,onFocus:()=>j({...Re,text:"jobs"}),children:"Jobs"}),d.jsx("a",{className:"nav-link",href:Le.DIRECTORY,onFocus:()=>j({...Re,text:"directory"}),children:"Directory"}),d.jsx("a",{className:"nav-link",href:Le.CONTACT_ASU,onFocus:()=>j({...Re,text:"contact asu"}),children:"Contact ASU"}),d.jsx("a",{className:"nav-link",href:Le.MY_ASU,onFocus:()=>j({...Re,text:"my asu"}),children:"My ASU"})]}),d.jsx("a",{className:"img-link",href:Le.RANKINGS,onFocus:()=>j({...Re,text:"#1 in the u.s. for innovation"}),children:d.jsx("img",{src:Rl,alt:"Repeatedly ranked #1 in innovation (ASU ahead of MIT and Stanford), sustainability (ASU ahead of Stanford and UC Berkeley), and global impact (ASU ahead of MIT and Penn State)",width:"459",height:"100",loading:"lazy",decoding:"async"})})]})})})})});go.__docgenInfo={description:"",methods:[],displayName:"Innovation"};const Ve={type:"internal link",section:"tertiary footer"},yo=()=>{function e(){try{return window.location.href}catch(t){return console.error(t),""}}return d.jsx("div",{className:"wrapper",id:"wrapper-footer-colophon","data-testid":"legal",children:d.jsx("div",{className:"container",id:"footer-colophon",children:d.jsx("div",{className:"row",children:d.jsx("div",{className:"col",children:d.jsxs("nav",{className:"nav colophon","aria-label":"University Legal and Compliance",children:[d.jsx("a",{className:"nav-link",href:$e.COPYRIGHT_AND_TRADEMARK,onFocus:()=>j({...Ve,text:"copyright and trademark"}),children:"Copyright and Trademark"}),d.jsx("a",{className:"nav-link",href:`${$e.ACCESSIBILITY_REPORT}?a11yref=${e()}`,onFocus:()=>j({...Ve,text:"accessibility"}),children:"Accessibility"}),d.jsx("a",{className:"nav-link",href:$e.PRIVACY,onFocus:()=>j({...Ve,text:"privacy"}),children:"Privacy"}),d.jsx("a",{className:"nav-link",href:$e.TERMS_OF_USE,onFocus:()=>j({...Ve,text:"terms of use"}),children:"Terms of Use"}),d.jsx("a",{className:"nav-link",href:$e.EMERGENCY,onFocus:()=>j({...Ve,text:"emergency"}),children:"Emergency"})]})})})})})};yo.__docgenInfo={description:"",methods:[],displayName:"Legal"};const Ml={prefix:"fab",iconName:"square-instagram",icon:[448,512,["instagram-square"],"e055","M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"]},Fl=Ml,Dl={prefix:"fab",iconName:"square-youtube",icon:[448,512,[61798,"youtube-square"],"f431","M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"]},jl=Dl,Ul={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},zl=Ul,Hl={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Wl={prefix:"fab",iconName:"square-x-twitter",icon:[448,512,[],"e61a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"]},Me={type:"external link",section:"primary footer"},it=({social:{logoUrl:e,unitLogo:t,mediaLinks:n}})=>d.jsx("div",{className:"wrapper",id:"wrapper-endorsed-footer","data-testid":"social",children:d.jsx("div",{className:"container",id:"endorsed-footer",children:d.jsxs("div",{className:"row",children:[d.jsx("div",{className:"col-md",id:"endorsed-logo",children:d.jsx("a",{href:e,onFocus:()=>j({...Me,type:"internal link",text:"asu logo"}),children:d.jsx("img",{src:t,alt:"ASU University Technology Office Arizona State University."})})}),n&&d.jsx("div",{className:"col-md",id:"social-media",children:d.jsxs("nav",{className:"nav","aria-label":"Social Media",children:[n.facebook&&d.jsx("a",{className:"nav-link",href:n.facebook,"data-testid":"facebook",onFocus:()=>j({...Me,text:"facebook icon"}),children:d.jsx(ce,{title:"Facebook Social Media Icon",icon:zl})}),n.twitter&&d.jsx("a",{className:"nav-link",href:n.twitter,"data-testid":"twitter",onFocus:()=>j({...Me,text:"twitter icon"}),children:d.jsx(ce,{title:"Twitter Social Media Icon",icon:Wl})}),n.instagram&&d.jsx("a",{className:"nav-link",href:n.instagram,"data-testid":"instagram",onFocus:()=>j({...Me,text:"instagram icon"}),children:d.jsx(ce,{title:"Instagram Social Media Icon",icon:Fl})}),n.youtube&&d.jsx("a",{className:"nav-link",href:n.youtube,"data-testid":"youtube",onFocus:()=>j({...Me,text:"youtube icon"}),children:d.jsx(ce,{title:"YouTube Social Media Icon",icon:jl})}),n.linkedIn&&d.jsx("a",{className:"nav-link",href:n.linkedIn,"data-testid":"linkedin",onFocus:()=>j({...Me,text:"linkedin icon"}),children:d.jsx(ce,{title:"LinkedIn Social Media Icon",icon:Hl})})]})})]})})});it.propTypes={social:Y.shape({unitLogo:h.string.isRequired,mediaLinks:Y.shape({facebook:h.string,twitter:h.string,linkedIn:h.string,instagram:h.string,youtube:h.string})})};it.defaultProps={social:{unitLogo:kr,mediaLinks:{facebook:"",twitter:"",linkedIn:"",instagram:"",youtube:""}}};it.__docgenInfo={description:`@param {{ social: SocialProps }} props
@returns {JSX.Element}`,methods:[],displayName:"Social",props:{social:{defaultValue:{value:`{
  unitLogo: endorsedLogo,
  mediaLinks: {
    facebook: "",
    twitter: "",
    linkedIn: "",
    instagram: "",
    youtube: "",
  },
}`,computed:!1},description:"",type:{name:"shape",value:{unitLogo:{name:"string",required:!0},mediaLinks:{name:"shape",value:{facebook:{name:"string",required:!1},twitter:{name:"string",required:!1},linkedIn:{name:"string",required:!1},instagram:{name:"string",required:!1},youtube:{name:"string",required:!1}},required:!1}}},required:!1}}};const ql=()=>d.jsxs(d.Fragment,{children:[d.jsx(go,{}),d.jsx(yo,{})]}),Pt=({social:e,contact:t})=>(Pn.useEffect(()=>{typeof window<"u"&&Go({packageName:"component-footer",component:"Component Footer",type:"NA",configuration:{social:e,contact:t}})},[]),d.jsxs("footer",{role:"contentinfo",children:[e&&d.jsx(it,{social:e}),t&&d.jsx(ot,{contact:t}),d.jsx(ql,{})]}));Pt.propTypes={social:Y.shape(it.propTypes),contact:Y.shape(ot.propTypes)};Pt.__docgenInfo={description:`@param {import("./core/models/types").ASUFooter} props
@returns {JSX.Element}`,methods:[],displayName:"ASUFooter",props:{social:{description:"",type:{name:"shape",value:{social:{name:"shape",value:{unitLogo:{name:"string",required:!0},mediaLinks:{name:"shape",value:{facebook:{name:"string",required:!1},twitter:{name:"string",required:!1},linkedIn:{name:"string",required:!1},instagram:{name:"string",required:!1},youtube:{name:"string",required:!1}},required:!1}},required:!1}}},required:!1},contact:{description:"",type:{name:"shape",value:{contact:{name:"shape",value:{title:{name:"string",required:!0},contactLink:{name:"string",required:!0},contributionLink:{name:"string",required:!1},columns:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},links:{name:"arrayOf",value:{name:"shape",value:{url:{name:"string",required:!0},title:{name:"string",required:!1},text:{name:"string",required:!0}}},required:!1}}},required:!1}},required:!1}}},required:!1}}};const $l={title:"UDS/ASU Footer",component:Pt},ne=e=>d.jsx(Pt,{...e}),Ke=ne.bind({});Ke.args={};const je=ne.bind({});je.args={social:{logoUrl:"https://www.asu.edu",unitLogo:kr,mediaLinks:{facebook:"https://facebook.com",twitter:"https://twitter.com/?lang=en",instagram:"https://instagram.com",linkedIn:"https://www.linkedin.com/",youtube:"https://www.youtube.com/"}}};const Je=ne.bind({});Je.args={contact:{title:"No props passed should omit the button and the contact link"}};const Ue=ne.bind({});Ue.args={contact:{title:"Complete Name of College, School or Unit Title Should Go Here",contactLink:"#",contributionLink:"#"}};const Se=ne.bind({});Se.args={...je.args,...Ue.args};const ue=ne.bind({});ue.args={...Se.args,contact:{...Se.args.contact,columns:[{title:"Column Two",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};const me=ne.bind({});me.args={...ue.args,contact:{...ue.args.contact,columns:[...ue.args.contact.columns,{title:"Column Three",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};const de=ne.bind({});de.args={...me.args,contact:{...me.args.contact,columns:[...me.args.contact.columns,{title:"Column Four",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};const xt=ne.bind({});xt.args={...de.args,contact:{...de.args.contact,columns:[...de.args.contact.columns,{title:"Column Five",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};const Ze=ne.bind({});Ze.args={...xt.args,contact:{...xt.args.contact,columns:[...xt.args.contact.columns,{title:"Column Six",links:[{url:"#",title:"link",text:"Biological and Health Systems Computing"},{url:"#",title:"link",text:"Informatics and Decision Systems Electrical"},{url:"#",title:"link",text:"Computer and Energy Matter"},{url:"#",title:"link",text:"Transport and Energy Sustainability and the Built Environment"},{url:"#",title:"link",text:"The Polytechnic School"}]}]}};var Ja,Za,Qa;Ke.parameters={...Ke.parameters,docs:{...(Ja=Ke.parameters)==null?void 0:Ja.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(Qa=(Za=Ke.parameters)==null?void 0:Za.docs)==null?void 0:Qa.source}}};var er,tr,nr;je.parameters={...je.parameters,docs:{...(er=je.parameters)==null?void 0:er.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(nr=(tr=je.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};var ar,rr,or;Je.parameters={...Je.parameters,docs:{...(ar=Je.parameters)==null?void 0:ar.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(or=(rr=Je.parameters)==null?void 0:rr.docs)==null?void 0:or.source}}};var ir,sr,lr;Ue.parameters={...Ue.parameters,docs:{...(ir=Ue.parameters)==null?void 0:ir.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(lr=(sr=Ue.parameters)==null?void 0:sr.docs)==null?void 0:lr.source}}};var cr,fr,ur;Se.parameters={...Se.parameters,docs:{...(cr=Se.parameters)==null?void 0:cr.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(ur=(fr=Se.parameters)==null?void 0:fr.docs)==null?void 0:ur.source}}};var mr,dr,pr;ue.parameters={...ue.parameters,docs:{...(mr=ue.parameters)==null?void 0:mr.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(pr=(dr=ue.parameters)==null?void 0:dr.docs)==null?void 0:pr.source}}};var hr,gr,yr;me.parameters={...me.parameters,docs:{...(hr=me.parameters)==null?void 0:hr.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(yr=(gr=me.parameters)==null?void 0:gr.docs)==null?void 0:yr.source}}};var vr,br,Ar;de.parameters={...de.parameters,docs:{...(vr=de.parameters)==null?void 0:vr.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(Ar=(br=de.parameters)==null?void 0:br.docs)==null?void 0:Ar.source}}};var xr,Er,Sr;Ze.parameters={...Ze.parameters,docs:{...(xr=Ze.parameters)==null?void 0:xr.docs,source:{originalSource:"args => <ASUFooter {...args} />",...(Sr=(Er=Ze.parameters)==null?void 0:Er.docs)==null?void 0:Sr.source}}};const Vl=["Default","UnitLogo","OneColumnNoLinks","OneColumnNoLogo","OneColumn","TwoColumns","ThreeColumns","FourColumns","SixColumns"];export{Ke as Default,de as FourColumns,Se as OneColumn,Je as OneColumnNoLinks,Ue as OneColumnNoLogo,Ze as SixColumns,me as ThreeColumns,ue as TwoColumns,je as UnitLogo,Vl as __namedExportsOrder,$l as default};
