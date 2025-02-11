!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","react","react-dom"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).AsuHeader={},e.React,e.ReactDOM)}(this,(function(e,t,n){"use strict";function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var a,i={exports:{}},o={};i.exports=function(){if(a)return o;a=1;var e=t,n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,o={},c=null,f=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:f,props:o,_owner:s.current}}return o.Fragment=r,o.jsx=c,o.jsxs=c,o}();var s=i.exports;const l={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},c={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},f={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},u={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},d={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var m={NODE_ENV:"production"};function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const b=()=>{};let y={},v={},x=null,k={mark:b,measure:b};try{"undefined"!=typeof window&&(y=window),"undefined"!=typeof document&&(v=document),"undefined"!=typeof MutationObserver&&(x=MutationObserver),"undefined"!=typeof performance&&(k=performance)}catch(Mo){}const{userAgent:w=""}=y.navigator||{},S=y,A=v,C=x,N=k;S.document;const O=!!A.documentElement&&!!A.head&&"function"==typeof A.addEventListener&&"function"==typeof A.createElement,E=~w.indexOf("MSIE")||~w.indexOf("Trident/");var T={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},j=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],L="classic",P="duotone",I=[L,P,"sharp","sharp-duotone"],R=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),_=["fak","fa-kit","fakd","fa-kit-duotone"],z={fak:"kit","fa-kit":"kit"},M={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},D=["fak","fakd"],F={kit:"fak"},$={"kit-duotone":"fakd"},U={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},H=["fak","fa-kit","fakd","fa-kit-duotone"],B={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},W=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],G=[1,2,3,4,5,6,7,8,9,10],Y=G.concat([11,12,13,14,15,16,17,18,19,20]),q=[...Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",U.GROUP,U.SWAP_OPACITY,U.PRIMARY,U.SECONDARY].concat(G.map((e=>"".concat(e,"x")))).concat(Y.map((e=>"w-".concat(e))));const V="___FONT_AWESOME___",X=16,K="svg-inline--fa",Z="data-fa-i2svg",J="data-fa-pseudo-element",Q="data-prefix",ee="data-icon",te="fontawesome-i2svg",ne=["HTML","HEAD","STYLE","SCRIPT"],re=(()=>{try{return"production"===m.NODE_ENV}catch(e){return!1}})();function ae(e){return new Proxy(e,{get:(e,t)=>t in e?e[t]:e[L]})}const ie=g({},T);ie[L]=g(g(g(g({},{"fa-duotone":"duotone"}),T[L]),z),M);const oe=ae(ie),se=g({},{classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}});se[L]=g(g(g(g({},{duotone:"fad"}),se[L]),F),$);const le=ae(se),ce=g({},B);ce[L]=g(g({},ce[L]),{fak:"fa-kit"});const fe=ae(ce),ue=g({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}});ue[L]=g(g({},ue[L]),{"fa-kit":"fak"}),ae(ue);const de=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,me="fa-layers-text",pe=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;ae(g({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}}));const he=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ge={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},be=["kit",...q],ye=S.FontAwesomeConfig||{};if(A&&"function"==typeof A.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((e=>{let[t,n]=e;const r=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=A.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t));null!=r&&(ye[n]=r)}))}const ve={styleDefault:"solid",familyDefault:L,cssPrefix:"fa",replacementClass:K,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ye.familyPrefix&&(ye.cssPrefix=ye.familyPrefix);const xe=g(g({},ve),ye);xe.autoReplaceSvg||(xe.observeMutations=!1);const ke={};Object.keys(ve).forEach((e=>{Object.defineProperty(ke,e,{enumerable:!0,set:function(t){xe[e]=t,we.forEach((e=>e(ke)))},get:function(){return xe[e]}})})),Object.defineProperty(ke,"familyPrefix",{enumerable:!0,set:function(e){xe.cssPrefix=e,we.forEach((e=>e(ke)))},get:function(){return xe.cssPrefix}}),S.FontAwesomeConfig=ke;const we=[];const Se=X,Ae={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ce(){let e=12,t="";for(;e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function Ne(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Oe(e){return e.classList?Ne(e.classList):(e.getAttribute("class")||"").split(" ").filter((e=>e))}function Ee(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Te(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";")),"")}function je(e){return e.size!==Ae.size||e.x!==Ae.x||e.y!==Ae.y||e.rotate!==Ae.rotate||e.flipX||e.flipY}function Le(){const e="fa",t=K,n=ke.cssPrefix,r=ke.replacementClass;let a=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}';if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let Pe=!1;function Ie(){ke.autoAddCss&&!Pe&&(!function(e){if(!e||!O)return;const t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=A.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const e=n[a],t=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(r=e)}A.head.insertBefore(t,r)}(Le()),Pe=!0)}var Re={mixout:()=>({dom:{css:Le,insertCss:Ie}}),hooks:()=>({beforeDOMElementCreation(){Ie()},beforeI2svg(){Ie()}})};const _e=S||{};_e[V]||(_e[V]={}),_e[V].styles||(_e[V].styles={}),_e[V].hooks||(_e[V].hooks={}),_e[V].shims||(_e[V].shims=[]);var ze=_e[V];const Me=[],De=function(){A.removeEventListener("DOMContentLoaded",De),Fe=1,Me.map((e=>e()))};let Fe=!1;function $e(e){const{tag:t,attributes:n={},children:r=[]}=e;return"string"==typeof e?Ee(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,'="').concat(Ee(e[n]),'" ')),"").trim()}(n),">").concat(r.map($e).join(""),"</").concat(t,">")}function Ue(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}O&&(Fe=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),Fe||A.addEventListener("DOMContentLoaded",De));var He=function(e,t,n,r){var a,i,o,s=Object.keys(e),l=s.length,c=t;for(void 0===n?(a=1,o=e[s[0]]):(a=0,o=n);a<l;a++)o=c(o,e[i=s[a]],i,e);return o};function Be(e){const t=function(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const r=e.charCodeAt(n++);56320==(64512&r)?t.push(((1023&a)<<10)+(1023&r)+65536):(t.push(a),n--)}else t.push(a)}return t}(e);return 1===t.length?t[0].toString(16):null}function We(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t}),{})}function Ge(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{skipHooks:r=!1}=n,a=We(t);"function"!=typeof ze.hooks.addPack||r?ze.styles[e]=g(g({},ze.styles[e]||{}),a):ze.hooks.addPack(e,We(t)),"fas"===e&&Ge("fa",t)}const{styles:Ye,shims:qe}=ze,Ve=Object.keys(fe),Xe=Ve.reduce(((e,t)=>(e[t]=Object.keys(fe[t]),e)),{});let Ke=null,Ze={},Je={},Qe={},et={},tt={};function nt(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r!==e||""===a||(i=a,~be.indexOf(i))?null:a;var i}const rt=()=>{const e=e=>He(Ye,((t,n,r)=>(t[r]=He(n,e,{}),t)),{});Ze=e(((e,t,n)=>{if(t[3]&&(e[t[3]]=n),t[2]){t[2].filter((e=>"number"==typeof e)).forEach((t=>{e[t.toString(16)]=n}))}return e})),Je=e(((e,t,n)=>{if(e[n]=n,t[2]){t[2].filter((e=>"string"==typeof e)).forEach((t=>{e[t]=n}))}return e})),tt=e(((e,t,n)=>{const r=t[2];return e[n]=n,r.forEach((t=>{e[t]=n})),e}));const t="far"in Ye||ke.autoFetchSvg,n=He(qe,((e,n)=>{const r=n[0];let a=n[1];const i=n[2];return"far"!==a||t||(a="fas"),"string"==typeof r&&(e.names[r]={prefix:a,iconName:i}),"number"==typeof r&&(e.unicodes[r.toString(16)]={prefix:a,iconName:i}),e}),{names:{},unicodes:{}});Qe=n.names,et=n.unicodes,Ke=ct(ke.styleDefault,{family:ke.familyDefault})};var at;function it(e,t){return(Ze[e]||{})[t]}function ot(e,t){return(tt[e]||{})[t]}function st(e){return Qe[e]||{prefix:null,iconName:null}}function lt(){return Ke}at=e=>{Ke=ct(e.styleDefault,{family:ke.familyDefault})},we.push(at),rt();function ct(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{family:n=L}=t,r=oe[n][e];if(n===P&&!e)return"fad";const a=le[n][e]||le[n][r],i=e in ze.styles?e:null;return a||i||null}function ft(e){return e.sort().filter(((e,t,n)=>n.indexOf(e)===t))}function ut(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=W.concat(H),i=ft(e.filter((e=>a.includes(e)))),o=ft(e.filter((e=>!W.includes(e)))),s=i.filter((e=>(r=e,!j.includes(e)))),[l=null]=s,c=function(e){let t=L;const n=Ve.reduce(((e,t)=>(e[t]="".concat(ke.cssPrefix,"-").concat(t),e)),{});return I.forEach((r=>{(e.includes(n[r])||e.some((e=>Xe[r].includes(e))))&&(t=r)})),t}(i),f=g(g({},function(e){let t=[],n=null;return e.forEach((e=>{const r=nt(ke.cssPrefix,e);r?n=r:e&&t.push(e)})),{iconName:n,rest:t}}(o)),{},{prefix:ct(l,{family:c})});return g(g(g({},f),function(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:i={},config:o={}}=e,s=n===P,l=t.includes("fa-duotone")||t.includes("fad"),c="duotone"===o.familyDefault,f="fad"===r.prefix||"fa-duotone"===r.prefix;!s&&(l||c||f)&&(r.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab");if(!r.prefix&&dt.includes(n)){if(Object.keys(i).find((e=>mt.includes(e)))||o.autoFetchSvg){const e=R.get(n).defaultShortPrefixId;r.prefix=e,r.iconName=ot(r.prefix,r.iconName)||r.iconName}}"fa"!==r.prefix&&"fa"!==a||(r.prefix=lt()||"fas");return r}({values:e,family:c,styles:Ye,config:ke,canonical:f,givenPrefix:r})),function(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const i="fa"===t?st(a):{},o=ot(r,a);a=i.iconName||o||a,r=i.prefix||r,"far"!==r||Ye.far||!Ye.fas||ke.autoFetchSvg||(r="fas");return{prefix:r,iconName:a}}(n,r,f))}const dt=I.filter((e=>e!==L||e!==P)),mt=Object.keys(B).filter((e=>e!==L)).map((e=>Object.keys(B[e]))).flat();let pt=[],ht={};const gt={},bt=Object.keys(gt);function yt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(ht[e]||[]).forEach((e=>{t=e.apply(null,[t,...r])})),t}function vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(ht[e]||[]).forEach((e=>{e.apply(null,n)}))}function xt(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return gt[e]?gt[e].apply(null,t):void 0}function kt(e){"fa"===e.prefix&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||lt();if(t)return t=ot(n,t)||t,Ue(wt.definitions,n,t)||Ue(ze.styles,n,t)}const wt=new class{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach((e=>{this.definitions[e]=g(g({},this.definitions[e]||{}),r[e]),Ge(e,r[e]);const t=fe[L][e];t&&Ge(t,r[e]),rt()}))}reset(){this.definitions={}}_pullDefinitions(e,t){const n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((t=>{const{prefix:r,iconName:a,icon:i}=n[t],o=i[2];e[r]||(e[r]={}),o.length>0&&o.forEach((t=>{"string"==typeof t&&(e[r][t]=i)})),e[r][a]=i})),e}},St={i2svg:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return O?(vt("beforeI2svg",e),xt("pseudoElements2svg",e),xt("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;var n;!1===ke.autoReplaceSvg&&(ke.autoReplaceSvg=!0),ke.observeMutations=!0,n=()=>{Ct({autoReplaceSvgRoot:t}),vt("watch",e)},O&&(Fe?setTimeout(n,0):Me.push(n))}},At={noAuto:()=>{ke.autoReplaceSvg=!1,ke.observeMutations=!1,vt("noAuto")},config:ke,dom:St,parse:{icon:e=>{if(null===e)return null;if("object"==typeof e&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ot(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){const t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=ct(e[0]);return{prefix:n,iconName:ot(n,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(ke.cssPrefix,"-"))>-1||e.match(de))){const t=ut(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||lt(),iconName:ot(t.prefix,t.iconName)||t.iconName}}if("string"==typeof e){const t=lt();return{prefix:t,iconName:ot(t,e)||e}}}},library:wt,findIconDefinition:kt,toHtml:$e},Ct=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t=A}=e;(Object.keys(ze.styles).length>0||ke.autoFetchSvg)&&O&&ke.autoReplaceSvg&&At.dom.i2svg({node:t})};function Nt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((e=>$e(e)))}}),Object.defineProperty(e,"node",{get:function(){if(!O)return;const t=A.createElement("div");return t.innerHTML=e.html,t.children}}),e}function Ot(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:s,maskId:l,titleId:c,extra:f,watchable:u=!1}=e,{width:d,height:m}=n.found?n:t,p=D.includes(r),h=[ke.replacementClass,a?"".concat(ke.cssPrefix,"-").concat(a):""].filter((e=>-1===f.classes.indexOf(e))).filter((e=>""!==e||!!e)).concat(f.classes).join(" ");let b={children:[],attributes:g(g({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(m)})};const y=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(d/m*16*.0625,"em")}:{};u&&(b.attributes[Z]=""),s&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||Ce())},children:[s]}),delete b.attributes.title);const v=g(g({},b),{},{prefix:r,iconName:a,main:t,mask:n,maskId:l,transform:i,symbol:o,styles:g(g({},y),f.styles)}),{children:x,attributes:k}=n.found&&t.found?xt("generateAbstractMask",v)||{children:[],attributes:{}}:xt("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=x,v.attributes=k,o?function(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=!0===i?"".concat(t,"-").concat(ke.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},a),{},{id:o}),children:r}]}]}(v):function(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(je(o)&&n.found&&!r.found){const{width:e,height:t}=n,r={x:e/t/2,y:.5};a.style=Te(g(g({},i),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(v)}function Et(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:s=!1}=e,l=g(g(g({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(l[Z]="");const c=g({},o.styles);je(a)&&(c.transform=function(e){let{transform:t,width:n=X,height:r=X,startCentered:a=!1}=e,i="";return i+=a&&E?"translate(".concat(t.x/Se-n/2,"em, ").concat(t.y/Se-r/2,"em) "):a?"translate(calc(-50% + ".concat(t.x/Se,"em), calc(-50% + ").concat(t.y/Se,"em)) "):"translate(".concat(t.x/Se,"em, ").concat(t.y/Se,"em) "),i+="scale(".concat(t.size/Se*(t.flipX?-1:1),", ").concat(t.size/Se*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=Te(c);f.length>0&&(l.style=f);const u=[];return u.push({tag:"span",attributes:l,children:[t]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}const{styles:Tt}=ze;function jt(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return a=Array.isArray(r)?{tag:"g",attributes:{class:"".concat(ke.cssPrefix,"-").concat(ge.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ke.cssPrefix,"-").concat(ge.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ke.cssPrefix,"-").concat(ge.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Lt={found:!1,width:512,height:512};function Pt(e,t){let n=t;return"fa"===t&&null!==ke.styleDefault&&(t=lt()),new Promise(((r,a)=>{if("fa"===n){const n=st(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&Tt[t]&&Tt[t][e]){return r(jt(Tt[t][e]))}!function(e,t){re||ke.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),r(g(g({},Lt),{},{icon:ke.showMissingIcons&&e&&xt("missingIconAbstract")||{}}))}))}const It=()=>{},Rt=ke.measurePerformance&&N&&N.mark&&N.measure?N:{mark:It,measure:It},_t='FA "6.7.2"',zt=e=>{Rt.mark("".concat(_t," ").concat(e," ends")),Rt.measure("".concat(_t," ").concat(e),"".concat(_t," ").concat(e," begins"),"".concat(_t," ").concat(e," ends"))};var Mt=e=>(Rt.mark("".concat(_t," ").concat(e," begins")),()=>zt(e));const Dt=()=>{};function Ft(e){return"string"==typeof(e.getAttribute?e.getAttribute(Z):null)}function $t(e){return A.createElementNS("http://www.w3.org/2000/svg",e)}function Ut(e){return A.createElement(e)}function Ht(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ceFn:n=("svg"===e.tag?$t:Ut)}=t;if("string"==typeof e)return A.createTextNode(e);const r=n(e.tag);Object.keys(e.attributes||[]).forEach((function(t){r.setAttribute(t,e.attributes[t])}));return(e.children||[]).forEach((function(e){r.appendChild(Ht(e,{ceFn:n}))})),r}const Bt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach((e=>{t.parentNode.insertBefore(Ht(e),t)})),null===t.getAttribute(Z)&&ke.keepOriginalSource){let e=A.createComment(function(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Oe(t).indexOf(ke.replacementClass))return Bt.replace(e);const r=new RegExp("".concat(ke.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const e=n[0].attributes.class.split(" ").reduce(((e,t)=>(t===ke.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e)),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(" "),0===e.toNode.length?t.removeAttribute("class"):t.setAttribute("class",e.toNode.join(" "))}const a=n.map((e=>$e(e))).join("\n");t.setAttribute(Z,""),t.innerHTML=a}};function Wt(e){e()}function Gt(e,t){const n="function"==typeof t?t:Dt;if(0===e.length)n();else{let t=Wt;"async"===ke.mutateApproach&&(t=S.requestAnimationFrame||Wt),t((()=>{const t=!0===ke.autoReplaceSvg?Bt.replace:Bt[ke.autoReplaceSvg]||Bt.replace,r=Mt("mutate");e.map(t),r(),n()}))}}let Yt=!1;function qt(){Yt=!0}function Vt(){Yt=!1}let Xt=null;function Kt(e){if(!C)return;if(!ke.observeMutations)return;const{treeCallback:t=Dt,nodeCallback:n=Dt,pseudoElementsCallback:r=Dt,observeMutationsRoot:a=A}=e;Xt=new C((e=>{if(Yt)return;const a=lt();Ne(e).forEach((e=>{if("childList"===e.type&&e.addedNodes.length>0&&!Ft(e.addedNodes[0])&&(ke.searchPseudoElements&&r(e.target),t(e.target)),"attributes"===e.type&&e.target.parentNode&&ke.searchPseudoElements&&r(e.target.parentNode),"attributes"===e.type&&Ft(e.target)&&~he.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){const t=e.getAttribute?e.getAttribute(Q):null,n=e.getAttribute?e.getAttribute(ee):null;return t&&n}(e.target)){const{prefix:t,iconName:n}=ut(Oe(e.target));e.target.setAttribute(Q,t||a),n&&e.target.setAttribute(ee,n)}else(i=e.target)&&i.classList&&i.classList.contains&&i.classList.contains(ke.replacementClass)&&n(e.target);var i}))})),O&&Xt.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Zt(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=void 0!==e.innerText?e.innerText.trim():"";let a=ut(Oe(e));return a.prefix||(a.prefix=lt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=(i=a.prefix,o=e.innerText,(Je[i]||{})[o]||it(a.prefix,Be(e.innerText)))),!a.iconName&&ke.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a;var i,o}function Jt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Zt(e),i=function(e){const t=Ne(e.attributes).reduce(((e,t)=>("class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e)),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return ke.autoA11y&&(n?t["aria-labelledby"]="".concat(ke.replacementClass,"-title-").concat(r||Ce()):(t["aria-hidden"]="true",t.focusable="false")),t}(e),o=yt("parseNodeAttributes",{},e);let s=t.styleParser?function(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce(((e,t)=>{const n=t.split(":"),r=n[0],a=n.slice(1);return r&&a.length>0&&(e[r]=a.join(":").trim()),e}),{})),n}(e):[];return g({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Ae,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i}},o)}const{styles:Qt}=ze;function en(e){const t="nest"===ke.autoReplaceSvg?Jt(e,{styleParser:!1}):Jt(e);return~t.extra.classes.indexOf(me)?xt("generateLayersText",e,t):xt("generateSvgReplacementMutation",e,t)}function tn(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!O)return Promise.resolve();const n=A.documentElement.classList,r=e=>n.add("".concat(te,"-").concat(e)),a=e=>n.remove("".concat(te,"-").concat(e)),i=ke.autoFetchSvg?[..._,...W]:j.concat(Object.keys(Qt));i.includes("fa")||i.push("fa");const o=[".".concat(me,":not([").concat(Z,"])")].concat(i.map((e=>".".concat(e,":not([").concat(Z,"])")))).join(", ");if(0===o.length)return Promise.resolve();let s=[];try{s=Ne(e.querySelectorAll(o))}catch(f){}if(!(s.length>0))return Promise.resolve();r("pending"),a("complete");const l=Mt("onTree"),c=s.reduce(((e,t)=>{try{const n=en(t);n&&e.push(n)}catch(f){re||"MissingIcon"===f.name&&console.error(f)}return e}),[]);return new Promise(((e,n)=>{Promise.all(c).then((n=>{Gt(n,(()=>{r("active"),r("complete"),a("pending"),"function"==typeof t&&t(),l(),e()}))})).catch((e=>{l(),n(e)}))}))}function nn(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;en(e).then((e=>{e&&Gt([e],t)}))}const rn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=Ae,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:l=[],attributes:c={},styles:f={}}=t;if(!e)return;const{prefix:u,iconName:d,icon:m}=e;return Nt(g({type:"icon"},e),(()=>(vt("beforeDOMElementCreation",{iconDefinition:e,params:t}),ke.autoA11y&&(o?c["aria-labelledby"]="".concat(ke.replacementClass,"-title-").concat(s||Ce()):(c["aria-hidden"]="true",c.focusable="false")),Ot({icons:{main:jt(m),mask:a?jt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:d,transform:g(g({},Ae),n),symbol:r,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:f,classes:l}}))))};var an={mixout(){return{icon:(e=rn,function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=(t||{}).icon?t:kt(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:kt(a||{})),e(r,g(g({},n),{},{mask:a}))})};var e},hooks:()=>({mutationObserverCallbacks:e=>(e.treeCallback=tn,e.nodeCallback=nn,e)}),provides(e){e.i2svg=function(e){const{node:t=A,callback:n=()=>{}}=e;return tn(t,n)},e.generateSvgReplacementMutation=function(e,t){const{iconName:n,title:r,titleId:a,prefix:i,transform:o,symbol:s,mask:l,maskId:c,extra:f}=t;return new Promise(((t,u)=>{Promise.all([Pt(n,i),l.iconName?Pt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((l=>{let[u,d]=l;t([e,Ot({icons:{main:u,mask:d},prefix:i,iconName:n,transform:o,symbol:s,maskId:c,title:r,titleId:a,extra:f,watchable:!0})])})).catch(u)}))},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:a,styles:i}=e;const o=Te(i);let s;return o.length>0&&(n.style=o),je(a)&&(s=xt("generateAbstractTransformGrouping",{main:r,transform:a,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},on={mixout:()=>({layer(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{classes:n=[]}=t;return Nt({type:"layer"},(()=>{vt("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e((e=>{Array.isArray(e)?e.map((e=>{r=r.concat(e.abstract)})):r=r.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(ke.cssPrefix,"-layers"),...n].join(" ")},children:r}]}))}})},sn={mixout:()=>({counter(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return Nt({type:"counter",content:e},(()=>(vt("beforeDOMElementCreation",{content:e,params:t}),function(e){const{content:t,title:n,extra:r}=e,a=g(g(g({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Te(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(ke.cssPrefix,"-layers-counter"),...r]}}))))}})},ln={mixout:()=>({text(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=Ae,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return Nt({type:"text",content:e},(()=>(vt("beforeDOMElementCreation",{content:e,params:t}),Et({content:e,transform:g(g({},Ae),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ke.cssPrefix,"-layers-text"),...a]}}))))}}),provides(e){e.generateLayersText=function(e,t){const{title:n,transform:r,extra:a}=t;let i=null,o=null;if(E){const t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();i=n.width/t,o=n.height/t}return ke.autoA11y&&!n&&(a.attributes["aria-hidden"]="true"),Promise.resolve([e,Et({content:e.innerHTML,width:i,height:o,transform:r,title:n,extra:a,watchable:!0})])}}};const cn=new RegExp('"',"ug"),fn=[1105920,1112319],un=g(g(g(g({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),dn=Object.keys(un).reduce(((e,t)=>(e[t.toLowerCase()]=un[t],e)),{}),mn=Object.keys(dn).reduce(((e,t)=>{const n=dn[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e}),{});function pn(e,t){const n="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(((r,a)=>{if(null!==e.getAttribute(n))return r();const i=Ne(e.children).filter((e=>e.getAttribute(J)===t))[0],o=S.getComputedStyle(e,t),s=o.getPropertyValue("font-family"),l=s.match(pe),c=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(i&&!l)return e.removeChild(i),r();if(l&&"none"!==f&&""!==f){const f=o.getPropertyValue("content");let u=function(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(dn[n]||{})[a]||mn[n]}(s,c);const{value:d,isSecondary:m}=function(e){const t=e.replace(cn,""),n=function(e,t){const n=e.length;let r,a=e.charCodeAt(t);return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?1024*(a-55296)+r-56320+65536:a}(t,0),r=n>=fn[0]&&n<=fn[1],a=2===t.length&&t[0]===t[1];return{value:Be(a?t[0]:t),isSecondary:r||a}}(f),p=l[0].startsWith("FontAwesome");let h=it(u,d),b=h;if(p){const e=function(e){const t=et[e],n=it("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}(d);e.iconName&&e.prefix&&(h=e.iconName,u=e.prefix)}if(!h||m||i&&i.getAttribute(Q)===u&&i.getAttribute(ee)===b)r();else{e.setAttribute(n,b),i&&e.removeChild(i);const o={iconName:null,title:null,titleId:null,prefix:null,transform:Ae,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},{extra:s}=o;s.attributes[J]=t,Pt(h,u).then((a=>{const i=Ot(g(g({},o),{},{icons:{main:a,mask:{prefix:null,iconName:null,rest:[]}},prefix:u,iconName:b,extra:s,watchable:!0})),l=A.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(l,e.firstChild):e.appendChild(l),l.outerHTML=i.map((e=>$e(e))).join("\n"),e.removeAttribute(n),r()})).catch(a)}}else r()}))}function hn(e){return Promise.all([pn(e,"::before"),pn(e,"::after")])}function gn(e){return!(e.parentNode===document.head||~ne.indexOf(e.tagName.toUpperCase())||e.getAttribute(J)||e.parentNode&&"svg"===e.parentNode.tagName)}function bn(e){if(O)return new Promise(((t,n)=>{const r=Ne(e.querySelectorAll("*")).filter(gn).map(hn),a=Mt("searchPseudoElements");qt(),Promise.all(r).then((()=>{a(),Vt(),t()})).catch((()=>{a(),Vt(),n()}))}))}let yn=!1;const vn=e=>e.toLowerCase().split(" ").reduce(((e,t)=>{const n=t.toLowerCase().split("-"),r=n[0];let a=n.slice(1).join("-");if(r&&"h"===a)return e.flipX=!0,e;if(r&&"v"===a)return e.flipY=!0,e;if(a=parseFloat(a),isNaN(a))return e;switch(r){case"grow":e.size=e.size+a;break;case"shrink":e.size=e.size-a;break;case"left":e.x=e.x-a;break;case"right":e.x=e.x+a;break;case"up":e.y=e.y-a;break;case"down":e.y=e.y+a;break;case"rotate":e.rotate=e.rotate+a}return e}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0});const xn={x:0,y:0,width:"100%",height:"100%"};function kn(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}!function(e,t){let{mixoutsTo:n}=t;pt=e,ht={},Object.keys(gt).forEach((e=>{-1===bt.indexOf(e)&&delete gt[e]})),pt.forEach((e=>{const t=e.mixout?e.mixout():{};if(Object.keys(t).forEach((e=>{"function"==typeof t[e]&&(n[e]=t[e]),"object"==typeof t[e]&&Object.keys(t[e]).forEach((r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]}))})),e.hooks){const t=e.hooks();Object.keys(t).forEach((e=>{ht[e]||(ht[e]=[]),ht[e].push(t[e])}))}e.provides&&e.provides(gt)}))}([Re,an,on,sn,ln,{hooks:()=>({mutationObserverCallbacks:e=>(e.pseudoElementsCallback=bn,e)}),provides(e){e.pseudoElements2svg=function(e){const{node:t=A}=e;ke.searchPseudoElements&&bn(t)}}},{mixout:()=>({dom:{unwatch(){qt(),yn=!0}}}),hooks:()=>({bootstrap(){Kt(yt("mutationObserverCallbacks",{}))},noAuto(){Xt&&Xt.disconnect()},watch(e){const{observeMutationsRoot:t}=e;yn?Vt():Kt(yt("mutationObserverCallbacks",{observeMutationsRoot:t}))}})},{mixout:()=>({parse:{transform:e=>vn(e)}}),hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=vn(n)),e}}),provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:a}=e;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(32*n.x,", ").concat(32*n.y,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),c={outer:i,inner:{transform:"".concat(o," ").concat(s," ").concat(l)},path:{transform:"translate(".concat(a/2*-1," -256)")}};return{tag:"g",attributes:g({},c.outer),children:[{tag:"g",attributes:g({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:g(g({},t.icon.attributes),c.path)}]}]}}}},{hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?ut(n.split(" ").map((e=>e.trim()))):{prefix:null,iconName:null,rest:[]};return r.prefix||(r.prefix=lt()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}),provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:a,maskId:i,transform:o}=e;const{width:s,icon:l}=r,{width:c,icon:f}=a,u=function(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}({transform:o,containerWidth:c,iconWidth:s}),d={tag:"rect",attributes:g(g({},xn),{},{fill:"white"})},m=l.children?{children:l.children.map(kn)}:{},p={tag:"g",attributes:g({},u.inner),children:[kn(g({tag:l.tag,attributes:g(g({},l.attributes),u.path)},m))]},h={tag:"g",attributes:g({},u.outer),children:[p]},b="mask-".concat(i||Ce()),y="clip-".concat(i||Ce()),v={tag:"mask",attributes:g(g({},xn),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,h]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(k=f,"g"===k.tag?k.children:[k])},v]};var k;return t.push(x,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(b,")")},xn)}),{children:t,attributes:n}}}},{provides(e){let t=!1;S.matchMedia&&(t=S.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:g(g({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const a=g(g({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:g(g({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:g(g({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},a),{},{values:"1;0;1;1;0;1;"})}),e.push(i),e.push({tag:"path",attributes:g(g({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:g(g({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:g(g({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return e.symbol=r,e}})}],{mixoutsTo:At});const wn=At.parse,Sn=At.icon;var An,Cn,Nn,On,En={exports:{}};En.exports=function(){if(On)return Nn;On=1;var e=Cn?An:(Cn=1,An="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");function t(){}function n(){}return n.resetWarningCache=t,Nn=function(){function r(t,n,r,a,i,o){if(o!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function a(){return r}r.isRequired=r;var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i}}()();const Tn=r(En.exports);function jn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ln(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?jn(Object(n),!0).forEach((function(t){In(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Pn(e){return(Pn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function In(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rn(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function _n(e){return function(e){if(Array.isArray(e))return zn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return zn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zn(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function zn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Mn(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var Dn=["style"];var Fn=!1;try{Fn=!0}catch(Mo){}function $n(e){return e&&"object"===Pn(e)&&e.prefix&&e.iconName&&e.icon?e:wn.icon?wn.icon(e):null===e?null:e&&"object"===Pn(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function Un(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?In({},e,t):{}}var Hn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Bn=t.forwardRef((function(e,t){var n=Ln(Ln({},Hn),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,l=n.titleId,c=n.maskId,f=$n(r),u=Un("classes",[].concat(_n(function(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,u=e.pulse,d=e.fixedWidth,m=e.inverse,p=e.border,h=e.listItem,g=e.flip,b=e.size,y=e.rotation,v=e.pull,x=(In(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":d,"fa-inverse":m,"fa-border":p,"fa-li":h,"fa-flip":!0===g,"fa-flip-horizontal":"horizontal"===g||"both"===g,"fa-flip-vertical":"vertical"===g||"both"===g},"fa-".concat(b),null!=b),In(t,"fa-rotate-".concat(y),null!=y&&0!==y),In(t,"fa-pull-".concat(v),null!=v),In(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map((function(e){return x[e]?e:null})).filter((function(e){return e}))}(n)),_n((o||"").split(" ")))),d=Un("transform","string"==typeof n.transform?wn.transform(n.transform):n.transform),m=Un("mask",$n(a)),p=Sn(f,Ln(Ln(Ln(Ln({},u),d),m),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!p)return function(){var e;!Fn&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var h=p.abstract,g={ref:t};return Object.keys(n).forEach((function(e){Hn.hasOwnProperty(e)||(g[e]=n[e])})),Wn(h[0],g)}));Bn.displayName="FontAwesomeIcon",Bn.propTypes={beat:Tn.bool,border:Tn.bool,beatFade:Tn.bool,bounce:Tn.bool,className:Tn.string,fade:Tn.bool,flash:Tn.bool,mask:Tn.oneOfType([Tn.object,Tn.array,Tn.string]),maskId:Tn.string,fixedWidth:Tn.bool,inverse:Tn.bool,flip:Tn.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Tn.oneOfType([Tn.object,Tn.array,Tn.string]),listItem:Tn.bool,pull:Tn.oneOf(["right","left"]),pulse:Tn.bool,rotation:Tn.oneOf([0,90,180,270]),shake:Tn.bool,size:Tn.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Tn.bool,spinPulse:Tn.bool,spinReverse:Tn.bool,symbol:Tn.oneOfType([Tn.bool,Tn.string]),title:Tn.string,titleId:Tn.string,transform:Tn.oneOfType([Tn.string,Tn.object]),swapOpacity:Tn.bool};var Wn=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),i=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=r.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=Mn(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[a]=i,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[Mn(t)]=r}return e}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,l=Rn(r,Dn);return i.attrs.style=Ln(Ln({},i.attrs.style),s),t.apply(void 0,[n.tag,Ln(Ln({},i.attrs),l)].concat(_n(a)))}.bind(null,t.createElement);function Gn(e){return(Gn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Yn(e,t){return(Yn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function qn(e,t,n){return(qn=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(Mo){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&Yn(a,n.prototype),a}).apply(null,arguments)}function Vn(e){return function(e){if(Array.isArray(e))return Xn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Xn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xn(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Xn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Kn=Object.hasOwnProperty,Zn=Object.setPrototypeOf,Jn=Object.isFrozen,Qn=Object.getPrototypeOf,er=Object.getOwnPropertyDescriptor,tr=Object.freeze,nr=Object.seal,rr=Object.create,ar="undefined"!=typeof Reflect&&Reflect,ir=ar.apply,or=ar.construct;ir||(ir=function(e,t,n){return e.apply(t,n)}),tr||(tr=function(e){return e}),nr||(nr=function(e){return e}),or||(or=function(e,t){return qn(e,Vn(t))});var sr,lr=vr(Array.prototype.forEach),cr=vr(Array.prototype.pop),fr=vr(Array.prototype.push),ur=vr(String.prototype.toLowerCase),dr=vr(String.prototype.toString),mr=vr(String.prototype.match),pr=vr(String.prototype.replace),hr=vr(String.prototype.indexOf),gr=vr(String.prototype.trim),br=vr(RegExp.prototype.test),yr=(sr=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return or(sr,t)});function vr(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return ir(e,t,r)}}function xr(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:ur,Zn&&Zn(e,null);for(var a=t.length;a--;){var i=t[a];if("string"==typeof i){var o=n(i);o!==i&&(Jn(t)||(t[a]=o),i=o)}e[i]=!0}return e}function kr(e){var t,n=rr(null);for(t in e)!0===ir(Kn,e,[t])&&(n[t]=e[t]);return n}function wr(e,t){for(;null!==e;){var n=er(e,t);if(n){if(n.get)return vr(n.get);if("function"==typeof n.value)return vr(n.value)}e=Qn(e)}return function(e){return console.warn("fallback value for",e),null}}var Sr=tr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ar=tr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Cr=tr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Nr=tr(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Or=tr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Er=tr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Tr=tr(["#text"]),jr=tr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Lr=tr(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Pr=tr(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ir=tr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Rr=nr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),_r=nr(/<%[\w\W]*|[\w\W]*%>/gm),zr=nr(/\${[\w\W]*}/gm),Mr=nr(/^data-[\-\w.\u00B7-\uFFFF]+$/),Dr=nr(/^aria-[\-\w]+$/),Fr=nr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),$r=nr(/^(?:\w+script|data):/i),Ur=nr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Hr=nr(/^html$/i),Br=nr(/^[a-z][.\w]*(-[.\w]+)+$/i);function*Wr(e="id-",t=0){let n=t;for(;;)n+=1,yield e+n}function Gr(){const e=(document.currentScript&&document.currentScript.src||"").match(/(.*\/)/);return e&&e.length>0?e[0].substr(0,e[0].length-1):"/"}!function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window,n=function(t){return e(t)};if(n.version="2.5.8",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,a=t.document,i=t.DocumentFragment,o=t.HTMLTemplateElement,s=t.Node,l=t.Element,c=t.NodeFilter,f=t.NamedNodeMap,u=void 0===f?t.NamedNodeMap||t.MozNamedAttrMap:f,d=t.HTMLFormElement,m=t.DOMParser,p=t.trustedTypes,h=l.prototype,g=wr(h,"cloneNode"),b=wr(h,"nextSibling"),y=wr(h,"childNodes"),v=wr(h,"parentNode");if("function"==typeof o){var x=a.createElement("template");x.content&&x.content.ownerDocument&&(a=x.content.ownerDocument)}var k=function(e,t){if("object"!==Gn(e)||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(i){return console.warn("TrustedTypes policy "+a+" could not be created."),null}}(p,r),w=k?k.createHTML(""):"",S=a,A=S.implementation,C=S.createNodeIterator,N=S.createDocumentFragment,O=S.getElementsByTagName,E=r.importNode,T={};try{T=kr(a).documentMode?a.documentMode:{}}catch(qe){}var j={};n.isSupported="function"==typeof v&&A&&void 0!==A.createHTMLDocument&&9!==T;var L,P,I=Rr,R=_r,_=zr,z=Mr,M=Dr,D=$r,F=Ur,$=Br,U=Fr,H=null,B=xr({},[].concat(Vn(Sr),Vn(Ar),Vn(Cr),Vn(Or),Vn(Tr))),W=null,G=xr({},[].concat(Vn(jr),Vn(Lr),Vn(Pr),Vn(Ir))),Y=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),q=null,V=null,X=!0,K=!0,Z=!1,J=!0,Q=!1,ee=!0,te=!1,ne=!1,re=!1,ae=!1,ie=!1,oe=!1,se=!0,le=!1,ce=!0,fe=!1,ue={},de=null,me=xr({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),pe=null,he=xr({},["audio","video","img","source","image","track"]),ge=null,be=xr({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ye="http://www.w3.org/1998/Math/MathML",ve="http://www.w3.org/2000/svg",xe="http://www.w3.org/1999/xhtml",ke=xe,we=!1,Se=null,Ae=xr({},[ye,ve,xe],dr),Ce=["application/xhtml+xml","text/html"],Ne=null,Oe=a.createElement("form"),Ee=function(e){return e instanceof RegExp||e instanceof Function},Te=function(e){Ne&&Ne===e||(e&&"object"===Gn(e)||(e={}),e=kr(e),L=L=-1===Ce.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,P="application/xhtml+xml"===L?dr:ur,H="ALLOWED_TAGS"in e?xr({},e.ALLOWED_TAGS,P):B,W="ALLOWED_ATTR"in e?xr({},e.ALLOWED_ATTR,P):G,Se="ALLOWED_NAMESPACES"in e?xr({},e.ALLOWED_NAMESPACES,dr):Ae,ge="ADD_URI_SAFE_ATTR"in e?xr(kr(be),e.ADD_URI_SAFE_ATTR,P):be,pe="ADD_DATA_URI_TAGS"in e?xr(kr(he),e.ADD_DATA_URI_TAGS,P):he,de="FORBID_CONTENTS"in e?xr({},e.FORBID_CONTENTS,P):me,q="FORBID_TAGS"in e?xr({},e.FORBID_TAGS,P):{},V="FORBID_ATTR"in e?xr({},e.FORBID_ATTR,P):{},ue="USE_PROFILES"in e&&e.USE_PROFILES,X=!1!==e.ALLOW_ARIA_ATTR,K=!1!==e.ALLOW_DATA_ATTR,Z=e.ALLOW_UNKNOWN_PROTOCOLS||!1,J=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Q=e.SAFE_FOR_TEMPLATES||!1,ee=!1!==e.SAFE_FOR_XML,te=e.WHOLE_DOCUMENT||!1,ae=e.RETURN_DOM||!1,ie=e.RETURN_DOM_FRAGMENT||!1,oe=e.RETURN_TRUSTED_TYPE||!1,re=e.FORCE_BODY||!1,se=!1!==e.SANITIZE_DOM,le=e.SANITIZE_NAMED_PROPS||!1,ce=!1!==e.KEEP_CONTENT,fe=e.IN_PLACE||!1,U=e.ALLOWED_URI_REGEXP||U,ke=e.NAMESPACE||xe,Y=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Ee(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Y.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Ee(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Y.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Y.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Q&&(K=!1),ie&&(ae=!0),ue&&(H=xr({},Vn(Tr)),W=[],!0===ue.html&&(xr(H,Sr),xr(W,jr)),!0===ue.svg&&(xr(H,Ar),xr(W,Lr),xr(W,Ir)),!0===ue.svgFilters&&(xr(H,Cr),xr(W,Lr),xr(W,Ir)),!0===ue.mathMl&&(xr(H,Or),xr(W,Pr),xr(W,Ir))),e.ADD_TAGS&&(H===B&&(H=kr(H)),xr(H,e.ADD_TAGS,P)),e.ADD_ATTR&&(W===G&&(W=kr(W)),xr(W,e.ADD_ATTR,P)),e.ADD_URI_SAFE_ATTR&&xr(ge,e.ADD_URI_SAFE_ATTR,P),e.FORBID_CONTENTS&&(de===me&&(de=kr(de)),xr(de,e.FORBID_CONTENTS,P)),ce&&(H["#text"]=!0),te&&xr(H,["html","head","body"]),H.table&&(xr(H,["tbody"]),delete q.tbody),tr&&tr(e),Ne=e)},je=xr({},["mi","mo","mn","ms","mtext"]),Le=xr({},["annotation-xml"]),Pe=xr({},["title","style","font","a","script"]),Ie=xr({},Ar);xr(Ie,Cr),xr(Ie,Nr);var Re=xr({},Or);xr(Re,Er);var _e=function(e){fr(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(qe){try{e.outerHTML=w}catch(t){e.remove()}}},ze=function(e,t){try{fr(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(qe){fr(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!W[e])if(ae||ie)try{_e(t)}catch(qe){}else try{t.setAttribute(e,"")}catch(qe){}},Me=function(e){var t,n;if(re)e="<remove></remove>"+e;else{var r=mr(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===L&&ke===xe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=k?k.createHTML(e):e;if(ke===xe)try{t=(new m).parseFromString(i,L)}catch(qe){}if(!t||!t.documentElement){t=A.createDocument(ke,"template",null);try{t.documentElement.innerHTML=we?w:i}catch(qe){}}var o=t.body||t.documentElement;return e&&n&&o.insertBefore(a.createTextNode(n),o.childNodes[0]||null),ke===xe?O.call(t,te?"html":"body")[0]:te?t.documentElement:o},De=function(e){return C.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null,!1)},Fe=function(e){return e instanceof d&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},$e=function(e){return"object"===Gn(s)?e instanceof s:e&&"object"===Gn(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Ue=function(e,t,r){j[e]&&lr(j[e],(function(e){e.call(n,t,r,Ne)}))},He=function(e){var t;if(Ue("beforeSanitizeElements",e,null),Fe(e))return _e(e),!0;if(br(/[\u0080-\uFFFF]/,e.nodeName))return _e(e),!0;var r=P(e.nodeName);if(Ue("uponSanitizeElement",e,{tagName:r,allowedTags:H}),e.hasChildNodes()&&!$e(e.firstElementChild)&&(!$e(e.content)||!$e(e.content.firstElementChild))&&br(/<[/\w]/g,e.innerHTML)&&br(/<[/\w]/g,e.textContent))return _e(e),!0;if("select"===r&&br(/<template/i,e.innerHTML))return _e(e),!0;if(7===e.nodeType)return _e(e),!0;if(ee&&8===e.nodeType&&br(/<[/\w]/g,e.data))return _e(e),!0;if(!H[r]||q[r]){if(!q[r]&&We(r)){if(Y.tagNameCheck instanceof RegExp&&br(Y.tagNameCheck,r))return!1;if(Y.tagNameCheck instanceof Function&&Y.tagNameCheck(r))return!1}if(ce&&!de[r]){var a=v(e)||e.parentNode,i=y(e)||e.childNodes;if(i&&a)for(var o=i.length-1;o>=0;--o){var s=g(i[o],!0);s.__removalCount=(e.__removalCount||0)+1,a.insertBefore(s,b(e))}}return _e(e),!0}return e instanceof l&&!function(e){var t=v(e);t&&t.tagName||(t={namespaceURI:ke,tagName:"template"});var n=ur(e.tagName),r=ur(t.tagName);return!!Se[e.namespaceURI]&&(e.namespaceURI===ve?t.namespaceURI===xe?"svg"===n:t.namespaceURI===ye?"svg"===n&&("annotation-xml"===r||je[r]):Boolean(Ie[n]):e.namespaceURI===ye?t.namespaceURI===xe?"math"===n:t.namespaceURI===ve?"math"===n&&Le[r]:Boolean(Re[n]):e.namespaceURI===xe?!(t.namespaceURI===ve&&!Le[r])&&!(t.namespaceURI===ye&&!je[r])&&!Re[n]&&(Pe[n]||!Ie[n]):!("application/xhtml+xml"!==L||!Se[e.namespaceURI]))}(e)?(_e(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!br(/<\/no(script|embed|frames)/i,e.innerHTML)?(Q&&3===e.nodeType&&(t=e.textContent,t=pr(t,I," "),t=pr(t,R," "),t=pr(t,_," "),e.textContent!==t&&(fr(n.removed,{element:e.cloneNode()}),e.textContent=t)),Ue("afterSanitizeElements",e,null),!1):(_e(e),!0)},Be=function(e,t,n){if(se&&("id"===t||"name"===t)&&(n in a||n in Oe))return!1;if(K&&!V[t]&&br(z,t));else if(X&&br(M,t));else if(!W[t]||V[t]){if(!(We(e)&&(Y.tagNameCheck instanceof RegExp&&br(Y.tagNameCheck,e)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(e))&&(Y.attributeNameCheck instanceof RegExp&&br(Y.attributeNameCheck,t)||Y.attributeNameCheck instanceof Function&&Y.attributeNameCheck(t))||"is"===t&&Y.allowCustomizedBuiltInElements&&(Y.tagNameCheck instanceof RegExp&&br(Y.tagNameCheck,n)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(n))))return!1}else if(ge[t]);else if(br(U,pr(n,F,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==hr(n,"data:")||!pe[e]){if(Z&&!br(D,pr(n,F,"")));else if(n)return!1}else;return!0},We=function(e){return"annotation-xml"!==e&&mr(e,$)},Ge=function(e){var t,r,a,i;Ue("beforeSanitizeAttributes",e,null);var o=e.attributes;if(o&&!Fe(e)){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:W};for(i=o.length;i--;){var l=t=o[i],c=l.name,f=l.namespaceURI;if(r="value"===c?t.value:gr(t.value),a=P(c),s.attrName=a,s.attrValue=r,s.keepAttr=!0,s.forceKeepAttr=void 0,Ue("uponSanitizeAttribute",e,s),r=s.attrValue,!s.forceKeepAttr&&(ze(c,e),s.keepAttr))if(J||!br(/\/>/i,r)){Q&&(r=pr(r,I," "),r=pr(r,R," "),r=pr(r,_," "));var u=P(e.nodeName);if(Be(u,a,r))if(!le||"id"!==a&&"name"!==a||(ze(c,e),r="user-content-"+r),ee&&br(/((--!?|])>)|<\/(style|title)/i,r))ze(c,e);else{if(k&&"object"===Gn(p)&&"function"==typeof p.getAttributeType)if(f);else switch(p.getAttributeType(u,a)){case"TrustedHTML":r=k.createHTML(r);break;case"TrustedScriptURL":r=k.createScriptURL(r)}try{f?e.setAttributeNS(f,c,r):e.setAttribute(c,r),Fe(e)?_e(e):cr(n.removed)}catch(qe){}}}else ze(c,e)}Ue("afterSanitizeAttributes",e,null)}},Ye=function e(t){var n,r=De(t);for(Ue("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Ue("uponSanitizeShadowNode",n,null),He(n),Ge(n),n.content instanceof i&&e(n.content);Ue("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var a,o,l,c,f,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((we=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!$e(e)){if("function"!=typeof e.toString)throw yr("toString is not a function");if("string"!=typeof(e=e.toString()))throw yr("dirty is not a string, aborting")}if(!n.isSupported){if("object"===Gn(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if($e(e))return t.toStaticHTML(e.outerHTML)}return e}if(ne||Te(u),n.removed=[],"string"==typeof e&&(fe=!1),fe){if(e.nodeName){var d=P(e.nodeName);if(!H[d]||q[d])throw yr("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof s)1===(o=(a=Me("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===o.nodeName||"HTML"===o.nodeName?a=o:a.appendChild(o);else{if(!ae&&!Q&&!te&&-1===e.indexOf("<"))return k&&oe?k.createHTML(e):e;if(!(a=Me(e)))return ae?null:oe?w:""}a&&re&&_e(a.firstChild);for(var m=De(fe?e:a);l=m.nextNode();)3===l.nodeType&&l===c||(He(l),Ge(l),l.content instanceof i&&Ye(l.content),c=l);if(c=null,fe)return e;if(ae){if(ie)for(f=N.call(a.ownerDocument);a.firstChild;)f.appendChild(a.firstChild);else f=a;return(W.shadowroot||W.shadowrootmod)&&(f=E.call(r,f,!0)),f}var p=te?a.outerHTML:a.innerHTML;return te&&H["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&br(Hr,a.ownerDocument.doctype.name)&&(p="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+p),Q&&(p=pr(p,I," "),p=pr(p,R," "),p=pr(p,_," ")),k&&oe?k.createHTML(p):p},n.setConfig=function(e){Te(e),ne=!0},n.clearConfig=function(){Ne=null,ne=!1},n.isValidAttribute=function(e,t,n){Ne||Te({});var r=P(e),a=P(t);return Be(r,a,n)},n.addHook=function(e,t){"function"==typeof t&&(j[e]=j[e]||[],fr(j[e],t))},n.removeHook=function(e){if(j[e])return cr(j[e])},n.removeHooks=function(e){j[e]&&(j[e]=[])},n.removeAllHooks=function(){j={}},n}(),Tn.shape({event:Tn.string,action:Tn.string,name:Tn.string,region:Tn.string,section:Tn.string,component:Tn.string,type:Tn.string,text:Tn.string});const Yr=({event:e="",action:t="",name:n="",type:r="",section:a="",text:i="",region:o="",component:s=""})=>{const{dataLayer:l}=window,c={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:o.toLowerCase(),section:a.toLowerCase(),text:i.toLowerCase(),component:s.toLowerCase()};l&&l.push(c)},qr={alt:Tn.string,title:Tn.string,src:Tn.string,mobileSrc:Tn.string,brandLink:Tn.string},Vr={baseUrl:Tn.string,parentOrg:Tn.string,parentOrgUrl:Tn.string,animate:Tn.bool},Xr={loggedIn:Tn.bool,loginLink:Tn.string,logoutLink:Tn.string,userName:Tn.string},Kr={text:Tn.string.isRequired,color:Tn.oneOf(["gold","maroon","light","dark"]),href:Tn.string.isRequired,classes:Tn.string,onClick:Tn.func},Zr=Tn.shape({id:Tn.number,href:Tn.string,text:Tn.string,type:Tn.string,selected:Tn.bool,items:Tn.arrayOf(Tn.arrayOf(Tn.object)),buttons:Tn.arrayOf(Tn.shape(Kr)),class:Tn.string}),Jr={isPartner:Tn.bool,navTree:Tn.arrayOf(Zr),partnerLogo:Tn.shape(qr),logo:Tn.shape(qr),title:Tn.string,parentOrg:Vr.parentOrg,parentOrgUrl:Vr.parentOrgUrl,baseUrl:Vr.baseUrl,loggedIn:Xr.loggedIn,userName:Xr.userName,loginLink:Xr.loginLink,onLoginClick:Tn.func,logoutLink:Xr.logoutLink,onLogoutClick:Tn.func,buttons:Tn.arrayOf(Tn.shape(Kr)),breakpoint:Tn.oneOf(["Lg","Xl"]),animateTitle:Tn.bool,expandOnHover:Tn.bool,mobileNavTree:Tn.arrayOf(Zr),hasNavigation:Tn.bool,searchUrl:Tn.string,site:Tn.string,renderDiv:Tn.oneOf(["true","false"])},Qr={Lg:"992px",Xl:"1260px"},ea=t.createContext(),ta=({initialValue:e,children:t})=>{const n={...e,breakpoint:Qr[e.breakpoint]};return s.jsx(ea.Provider,{value:n,children:t})};ta.propTypes={initialValue:Tn.shape(Jr).isRequired,children:Tn.node.isRequired};const na=()=>{const e=t.useContext(ea);if(void 0===e)throw new Error("useAppContext must be used within a AppContextProvider");return e},ra=e=>{const n=null==window?void 0:window.matchMedia(`(max-width: ${e})`),[r,a]=t.useState(null==n?void 0:n.matches),i=e=>{a(e.matches)};return t.useEffect((()=>(n.addEventListener("change",i),()=>n.removeEventListener("change",i))),[]),r};var aa,ia={exports:{}},oa={};ia.exports=function(){if(aa)return oa;aa=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),o=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),c=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),d=Symbol.for("react.offscreen"),m=Symbol.for("react.client.reference");function p(d){if("object"==typeof d&&null!==d){var m=d.$$typeof;switch(m){case e:switch(d=d.type){case n:case a:case r:case l:case c:return d;default:switch(d=d&&d.$$typeof){case o:case s:case u:case f:case i:return d;default:return m}}case t:return m}}}return oa.ContextConsumer=i,oa.ContextProvider=o,oa.Element=e,oa.ForwardRef=s,oa.Fragment=n,oa.Lazy=u,oa.Memo=f,oa.Portal=t,oa.Profiler=a,oa.StrictMode=r,oa.Suspense=l,oa.SuspenseList=c,oa.isContextConsumer=function(e){return p(e)===i},oa.isContextProvider=function(e){return p(e)===o},oa.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===e},oa.isForwardRef=function(e){return p(e)===s},oa.isFragment=function(e){return p(e)===n},oa.isLazy=function(e){return p(e)===u},oa.isMemo=function(e){return p(e)===f},oa.isPortal=function(e){return p(e)===t},oa.isProfiler=function(e){return p(e)===a},oa.isStrictMode=function(e){return p(e)===r},oa.isSuspense=function(e){return p(e)===l},oa.isSuspenseList=function(e){return p(e)===c},oa.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===a||e===r||e===l||e===c||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===u||e.$$typeof===f||e.$$typeof===o||e.$$typeof===i||e.$$typeof===s||e.$$typeof===m||void 0!==e.getModuleId)},oa.typeOf=p,oa}();var sa=ia.exports;function la(e){function t(e,r,l,c,d){for(var m,p,h,g,x,w=0,S=0,A=0,C=0,N=0,P=0,R=h=m=0,z=0,M=0,D=0,F=0,$=l.length,U=$-1,H="",B="",W="",G="";z<$;){if(p=l.charCodeAt(z),z===U&&0!==S+C+A+w&&(0!==S&&(p=47===S?10:47),C=A=w=0,$++,U++),0===S+C+A+w){if(z===U&&(0<M&&(H=H.replace(u,"")),0<H.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:H+=l.charAt(z)}p=59}switch(p){case 123:for(m=(H=H.trim()).charCodeAt(0),h=1,F=++z;z<$;){switch(p=l.charCodeAt(z)){case 123:h++;break;case 125:h--;break;case 47:switch(p=l.charCodeAt(z+1)){case 42:case 47:e:{for(R=z+1;R<U;++R)switch(l.charCodeAt(R)){case 47:if(42===p&&42===l.charCodeAt(R-1)&&z+2!==R){z=R+1;break e}break;case 10:if(47===p){z=R+1;break e}}z=R}}break;case 91:p++;case 40:p++;case 34:case 39:for(;z++<U&&l.charCodeAt(z)!==p;);}if(0===h)break;z++}if(h=l.substring(F,z),0===m&&(m=(H=H.replace(f,"").trim()).charCodeAt(0)),64===m){switch(0<M&&(H=H.replace(u,"")),p=H.charCodeAt(1)){case 100:case 109:case 115:case 45:M=r;break;default:M=L}if(F=(h=t(r,M,h,p,d+1)).length,0<I&&(x=s(3,h,M=n(L,H,D),r,E,O,F,p,d,c),H=M.join(""),void 0!==x&&0===(F=(h=x.trim()).length)&&(p=0,h="")),0<F)switch(p){case 115:H=H.replace(k,o);case 100:case 109:case 45:h=H+"{"+h+"}";break;case 107:h=(H=H.replace(b,"$1 $2"))+"{"+h+"}",h=1===j||2===j&&i("@"+h,3)?"@-webkit-"+h+"@"+h:"@"+h;break;default:h=H+h,112===c&&(B+=h,h="")}else h=""}else h=t(r,n(r,H,D),h,c,d+1);W+=h,h=D=M=R=m=0,H="",p=l.charCodeAt(++z);break;case 125:case 59:if(1<(F=(H=(0<M?H.replace(u,""):H).trim()).length))switch(0===R&&(m=H.charCodeAt(0),45===m||96<m&&123>m)&&(F=(H=H.replace(" ",":")).length),0<I&&void 0!==(x=s(1,H,r,e,E,O,B.length,c,d,c))&&0===(F=(H=x.trim()).length)&&(H="\0\0"),m=H.charCodeAt(0),p=H.charCodeAt(1),m){case 0:break;case 64:if(105===p||99===p){G+=H+l.charAt(z);break}default:58!==H.charCodeAt(F-1)&&(B+=a(H,m,p,H.charCodeAt(2)))}D=M=R=m=0,H="",p=l.charCodeAt(++z)}}switch(p){case 13:case 10:47===S?S=0:0===1+m&&107!==c&&0<H.length&&(M=1,H+="\0"),0<I*_&&s(0,H,r,e,E,O,B.length,c,d,c),O=1,E++;break;case 59:case 125:if(0===S+C+A+w){O++;break}default:switch(O++,g=l.charAt(z),p){case 9:case 32:if(0===C+w+S)switch(N){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===C+S+w&&(M=D=1,g="\f"+g);break;case 108:if(0===C+S+w+T&&0<R)switch(z-R){case 2:112===N&&58===l.charCodeAt(z-3)&&(T=N);case 8:111===P&&(T=P)}break;case 58:0===C+S+w&&(R=z);break;case 44:0===S+A+C+w&&(M=1,g+="\r");break;case 34:case 39:0===S&&(C=C===p?0:0===C?p:C);break;case 91:0===C+S+A&&w++;break;case 93:0===C+S+A&&w--;break;case 41:0===C+S+w&&A--;break;case 40:if(0===C+S+w){if(0===m)if(2*N+3*P==533);else m=1;A++}break;case 64:0===S+A+C+w+R+h&&(h=1);break;case 42:case 47:if(!(0<C+w+A))switch(S){case 0:switch(2*p+3*l.charCodeAt(z+1)){case 235:S=47;break;case 220:F=z,S=42}break;case 42:47===p&&42===N&&F+2!==z&&(33===l.charCodeAt(F+2)&&(B+=l.substring(F,z+1)),g="",S=0)}}0===S&&(H+=g)}P=N,N=p,z++}if(0<(F=B.length)){if(M=r,0<I&&(void 0!==(x=s(2,B,M,e,E,O,F,c,d,c))&&0===(B=x).length))return G+B+W;if(B=M.join(",")+"{"+B+"}",0!=j*T){switch(2!==j||i(B,2)||(T=0),T){case 111:B=B.replace(v,":-moz-$1")+B;break;case 112:B=B.replace(y,"::-webkit-input-$1")+B.replace(y,"::-moz-$1")+B.replace(y,":-ms-input-$1")+B}T=0}}return G+B+W}function n(e,t,n){var a=t.trim().split(h);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<i;++s)t[s]=r(e,t[s],n).trim();break;default:var l=s=0;for(t=[];s<i;++s)for(var c=0;c<o;++c)t[l++]=r(e[c]+" ",a[s],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,n,r){var o=e+";",s=2*t+3*n+4*r;if(944===s){e=o.indexOf(":",9)+1;var l=o.substring(e,o.length-1).trim();return l=o.substring(0,e).trim()+l+";",1===j||2===j&&i(l,1)?"-webkit-"+l+l:l}if(0===j||2===j&&!i(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(N,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(l=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+l+o;case 1005:return m.test(o)?o.replace(d,":-webkit-")+o.replace(d,":-moz-")+o:o;case 1e3:switch(t=(l=o.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=o.replace(x,"tb");break;case 232:l=o.replace(x,"tb-rl");break;case 220:l=o.replace(x,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+l+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(l=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:o=o.replace(l,"-webkit-"+l)+";"+o;break;case 207:case 102:o=o.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(l,"-webkit-"+l)+";"+o.replace(l,"-ms-"+l+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return l=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+l+"-ms-flex-"+l+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(S,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(S,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):o.replace(l,"-webkit-"+l)+o.replace(l,"-moz-"+l.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+r&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function i(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),R(2!==t?r:r.replace(A,"$1"),n,t)}function o(e,t){var n=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(w," or ($1)").substring(4):"("+t+")"}function s(e,t,n,r,a,i,o,s,l,f){for(var u,d=0,m=t;d<I;++d)switch(u=P[d].call(c,e,m,n,r,a,i,o,s,l,f)){case void 0:case!1:case!0:case null:break;default:m=u}if(m!==t)return m}function l(e){return void 0!==(e=e.prefix)&&(R=null,e?"function"!=typeof e?j=1:(j=2,R=e):j=0),l}function c(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<I){var a=s(-1,n,r,r,E,O,0,0,0,0);void 0!==a&&"string"==typeof a&&(n=a)}var i=t(L,r,n,0,0);return 0<I&&(void 0!==(a=s(-2,i,r,r,E,O,i.length,0,0,0))&&(i=a)),T=0,O=E=1,i}var f=/^\0+/g,u=/[\0\r\f]/g,d=/: */g,m=/zoo|gra/,p=/([,: ])(transform)/g,h=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,v=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,S=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,N=/([^-])(image-set\()/,O=1,E=1,T=0,j=1,L=[],P=[],I=0,R=null,_=0;return c.use=function e(t){switch(t){case void 0:case null:I=P.length=0;break;default:if("function"==typeof t)P[I++]=t;else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else _=0|!!t}return e},c.set=l,void 0!==e&&l(e),c}var ca={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function fa(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var ua,da=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ma=fa((function(e){return da.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),pa={exports:{}},ha={};pa.exports=function(){if(ua)return ha;ua=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var d=e.$$typeof;switch(d){case t:switch(e=e.type){case l:case c:case r:case i:case a:case u:return e;default:switch(e=e&&e.$$typeof){case s:case f:case p:case m:case o:return e;default:return d}}case n:return d}}}function x(e){return v(e)===c}return ha.AsyncMode=l,ha.ConcurrentMode=c,ha.ContextConsumer=s,ha.ContextProvider=o,ha.Element=t,ha.ForwardRef=f,ha.Fragment=r,ha.Lazy=p,ha.Memo=m,ha.Portal=n,ha.Profiler=i,ha.StrictMode=a,ha.Suspense=u,ha.isAsyncMode=function(e){return x(e)||v(e)===l},ha.isConcurrentMode=x,ha.isContextConsumer=function(e){return v(e)===s},ha.isContextProvider=function(e){return v(e)===o},ha.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},ha.isForwardRef=function(e){return v(e)===f},ha.isFragment=function(e){return v(e)===r},ha.isLazy=function(e){return v(e)===p},ha.isMemo=function(e){return v(e)===m},ha.isPortal=function(e){return v(e)===n},ha.isProfiler=function(e){return v(e)===i},ha.isStrictMode=function(e){return v(e)===a},ha.isSuspense=function(e){return v(e)===u},ha.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===i||e===a||e===u||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===m||e.$$typeof===o||e.$$typeof===s||e.$$typeof===f||e.$$typeof===g||e.$$typeof===b||e.$$typeof===y||e.$$typeof===h)},ha.typeOf=v,ha}();var ga=pa.exports,ba={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ya={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},va={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xa={};function ka(e){return ga.isMemo(e)?va:xa[e.$$typeof]||ba}xa[ga.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xa[ga.Memo]=va;var wa=Object.defineProperty,Sa=Object.getOwnPropertyNames,Aa=Object.getOwnPropertySymbols,Ca=Object.getOwnPropertyDescriptor,Na=Object.getPrototypeOf,Oa=Object.prototype;var Ea=function e(t,n,r){if("string"!=typeof n){if(Oa){var a=Na(n);a&&a!==Oa&&e(t,a,r)}var i=Sa(n);Aa&&(i=i.concat(Aa(n)));for(var o=ka(t),s=ka(n),l=0;l<i.length;++l){var c=i[l];if(!(ya[c]||r&&r[c]||s&&s[c]||o&&o[c])){var f=Ca(n,c);try{wa(t,c,f)}catch(Mo){}}}}return t};const Ta=r(Ea);var ja={env:{NODE_ENV:"production"}};function La(){return(La=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Pa=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},Ia=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!sa.typeOf(e)},Ra=Object.freeze([]),_a=Object.freeze({});function za(e){return"function"==typeof e}function Ma(e){return e.displayName||e.name||"Component"}function Da(e){return e&&"string"==typeof e.styledComponentId}var Fa=void 0!==ja.env&&(ja.env.REACT_APP_SC_ATTR||ja.env.SC_ATTR)||"data-styled",$a="undefined"!=typeof window&&"HTMLElement"in window,Ua=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==ja.env&&(void 0!==ja.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==ja.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==ja.env.REACT_APP_SC_DISABLE_SPEEDY&&ja.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==ja.env.SC_DISABLE_SPEEDY&&""!==ja.env.SC_DISABLE_SPEEDY?"false"!==ja.env.SC_DISABLE_SPEEDY&&ja.env.SC_DISABLE_SPEEDY:"production"!==ja.env.NODE_ENV));function Ha(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Ba=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)(a<<=1)<0&&Ha(16,""+e);this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),s=0,l=t.length;s<l;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),Wa=new Map,Ga=new Map,Ya=1,qa=function(e){if(Wa.has(e))return Wa.get(e);for(;Ga.has(Ya);)Ya++;var t=Ya++;return Wa.set(e,t),Ga.set(t,e),t},Va=function(e){return Ga.get(e)},Xa=function(e,t){t>=Ya&&(Ya=t+1),Wa.set(e,t),Ga.set(t,e)},Ka="style["+Fa+'][data-styled-version="5.3.11"]',Za=new RegExp("^"+Fa+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ja=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},Qa=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var s=o.match(Za);if(s){var l=0|parseInt(s[1],10),c=s[2];0!==l&&(Xa(c,l),Ja(e,c,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},ei=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(Fa))return r}}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(Fa,"active"),r.setAttribute("data-styled-version","5.3.11");var o="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},ti=function(){function e(e){var t=this.element=ei(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}Ha(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(n){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),ni=function(){function e(e){var t=this.element=ei(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ri=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ai=$a,ii={isServer:!$a,useCSSOMInjection:!Ua},oi=function(){function e(e,t,n){void 0===e&&(e=_a),void 0===t&&(t={}),this.options=La({},ii,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&$a&&ai&&(ai=!1,function(e){for(var t=document.querySelectorAll(Ka),n=0,r=t.length;n<r;n++){var a=t[n];a&&"active"!==a.getAttribute(Fa)&&(Qa(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(e){return qa(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(La({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,a=t.target,e=n?new ri(a):r?new ti(a):new ni(a),new Ba(e)));var e,t,n,r,a},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(qa(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(qa(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(qa(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=0;a<n;a++){var i=Va(a);if(void 0!==i){var o=e.names.get(i),s=t.getGroup(a);if(o&&s&&o.size){var l=Fa+".g"+a+'[id="'+i+'"]',c="";void 0!==o&&o.forEach((function(e){e.length>0&&(c+=e+",")})),r+=""+s+l+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),si=/(a)(d)/gi,li=function(e){return String.fromCharCode(e+(e>25?39:97))};function ci(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=li(t%52)+n;return(li(t%52)+n).replace(si,"$1-$2")}var fi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ui=function(e){return fi(5381,e)};var di=ui("5.3.11"),mi=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(za(n)&&!Da(n))return!1}return!0}(e),this.componentId=t,this.baseHash=fi(di,t),this.baseStyle=n,oi.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))a.push(this.staticRulesId);else{var i=Oi(this.rules,e,t,n).join(""),o=ci(fi(this.baseHash,i)>>>0);if(!t.hasNameForId(r,o)){var s=n(i,"."+o,void 0,r);t.insertRules(r,o,s)}a.push(o),this.staticRulesId=o}else{for(var l=this.rules.length,c=fi(this.baseHash,n.hash),f="",u=0;u<l;u++){var d=this.rules[u];if("string"==typeof d)f+=d;else if(d){var m=Oi(d,e,t,n),p=Array.isArray(m)?m.join(""):m;c=fi(c,p+u),f+=p}}if(f){var h=ci(c>>>0);if(!t.hasNameForId(r,h)){var g=n(f,"."+h,void 0,r);t.insertRules(r,h,g)}a.push(h)}}return a.join(" ")},e}(),pi=/^\s*\/\/.*$/gm,hi=[":","[",".","#"];var gi=t.createContext();gi.Consumer;var bi=t.createContext(),yi=(bi.Consumer,new oi),vi=function(){var e,t,n,r,a=_a,i=a.options,o=void 0===i?_a:i,s=a.plugins,l=void 0===s?Ra:s,c=new la(o),f=[],u=function(e){function t(t){if(t)try{e(t+"}")}catch(n){}}return function(n,r,a,i,o,s,l,c,f,u){switch(n){case 1:if(0===f&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(a[0]+r),"";default:return r+(0===u?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){f.push(e)})),d=function(n,a,i){return 0===a&&-1!==hi.indexOf(i[t.length])||i.match(r)?n:"."+e};function m(a,i,o,s){void 0===s&&(s="&");var l=a.replace(pi,""),f=i&&o?o+" "+i+" { "+l+" }":l;return e=s,t=i,n=new RegExp("\\"+t+"\\b","g"),r=new RegExp("(\\"+t+"\\b){2,}"),c(o||!i?"":i,f)}return c.use([].concat(l,[function(e,r,a){2===e&&a.length&&a[0].lastIndexOf(t)>0&&(a[0]=a[0].replace(n,d))},u,function(e){if(-2===e){var t=f;return f=[],t}}])),m.hash=l.length?l.reduce((function(e,t){return t.name||Ha(15),fi(e,t.name)}),5381).toString():"",m}();var xi=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=vi);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return Ha(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=vi),this.name+e.hash},e}(),ki=/([A-Z])/,wi=/([A-Z])/g,Si=/^ms-/,Ai=function(e){return"-"+e.toLowerCase()};function Ci(e){return ki.test(e)?e.replace(wi,Ai).replace(Si,"-ms-"):e}var Ni=function(e){return null==e||!1===e||""===e};function Oi(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,s=e.length;o<s;o+=1)""!==(a=Oi(e[o],t,n,r))&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}return Ni(e)?"":Da(e)?"."+e.styledComponentId:za(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:Oi(e(t),t,n,r):e instanceof xi?n?(e.inject(n,r),e.getName(r)):e:Ia(e)?function e(t,n){var r,a,i=[];for(var o in t)t.hasOwnProperty(o)&&!Ni(t[o])&&(Array.isArray(t[o])&&t[o].isCss||za(t[o])?i.push(Ci(o)+":",t[o],";"):Ia(t[o])?i.push.apply(i,e(t[o],o)):i.push(Ci(o)+": "+(r=o,(null==(a=t[o])||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||r in ca||r.startsWith("--")?String(a).trim():a+"px")+";")));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString();var l}var Ei=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ti(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return za(e)||Ia(e)?Ei(Oi(Pa(Ra,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ei(Oi(Pa(e,n)))}var ji=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Li=/(^-|-$)/g;function Pi(e){return e.replace(ji,"-").replace(Li,"")}function Ii(e){return"string"==typeof e&&"production"===ja.env.NODE_ENV}var Ri=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},_i=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function zi(e,t,n){var r=e[n];Ri(t)&&Ri(r)?Mi(r,t):e[n]=t}function Mi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(Ri(o))for(var s in o)_i(s)&&zi(e,o[s],s)}return e}var Di=t.createContext();Di.Consumer;var Fi={};function $i(e,n,r){var a,i=Da(e),o=!Ii(e),s=n.attrs,l=void 0===s?Ra:s,c=n.componentId,f=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Pi(e);Fi[n]=(Fi[n]||0)+1;var r=n+"-"+function(e){return ci(ui(e)>>>0)}("5.3.11"+n+Fi[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):c,u=n.displayName,d=void 0===u?Ii(a=e)?"styled."+a:"Styled("+Ma(a)+")":u,m=n.displayName&&n.componentId?Pi(n.displayName)+"-"+n.componentId:n.componentId||f,p=i&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,h=n.shouldForwardProp;i&&e.shouldForwardProp&&(h=n.shouldForwardProp?function(t,r,a){return e.shouldForwardProp(t,r,a)&&n.shouldForwardProp(t,r,a)}:e.shouldForwardProp);var g,b=new mi(r,m,i?e.componentStyle:void 0),y=b.isStatic&&0===l.length,v=function(e,n){return function(e,n,r,a){var i,o,s,l,c,f=e.attrs,u=e.componentStyle,d=e.defaultProps,m=e.foldedComponentIds,p=e.shouldForwardProp,h=e.styledComponentId,g=e.target,b=function(e,t,n){void 0===e&&(e=_a);var r=La({},t,{theme:e}),a={};return n.forEach((function(e){var t,n,i,o=e;for(t in za(o)&&(o=o(r)),o)r[t]=a[t]="className"===t?(n=a[t],i=o[t],n&&i?n+" "+i:n||i):o[t]})),[r,a]}(function(e,t,n){return void 0===n&&(n=_a),e.theme!==n.theme&&e.theme||t||n.theme}(n,t.useContext(Di),d)||_a,n,f),y=b[0],v=b[1],x=(i=u,o=a,s=y,l=t.useContext(gi)||yi,c=t.useContext(bi)||vi,o?i.generateAndInjectStyles(_a,l,c):i.generateAndInjectStyles(s,l,c)),k=r,w=v.$as||n.$as||v.as||n.as||g,S=Ii(w),A=v!==n?La({},n,{},v):n,C={};for(var N in A)"$"!==N[0]&&"as"!==N&&("forwardedAs"===N?C.as=A[N]:(p?p(N,ma,w):!S||ma(N))&&(C[N]=A[N]));return n.style&&v.style!==n.style&&(C.style=La({},n.style,{},v.style)),C.className=Array.prototype.concat(m,h,x!==h?x:null,n.className,v.className).filter(Boolean).join(" "),C.ref=k,t.createElement(w,C)}(g,e,n,y)};return v.displayName=d,(g=t.forwardRef(v)).attrs=p,g.componentStyle=b,g.displayName=d,g.shouldForwardProp=h,g.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ra,g.styledComponentId=m,g.target=i?e.target:e,g.withComponent=function(e){var t=n.componentId,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["componentId"]),i=t&&t+"-"+(Ii(e)?e:Pi(Ma(e)));return $i(e,La({},a,{attrs:p,componentId:i}),r)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=i?Mi({},e.defaultProps,t):t}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&Ta(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Ui=function(e){return function e(t,n,r){if(void 0===r&&(r=_a),!sa.isValidElementType(n))return Ha(1,String(n));var a=function(){return t(n,r,Ti.apply(void 0,arguments))};return a.withConfig=function(a){return e(t,n,La({},r,{},a))},a.attrs=function(a){return e(t,n,La({},r,{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},a}($i,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Ui[e]=Ui(e)}));const Hi=Ui.div`
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
  @media (max-width: ${({breakpoint:e})=>e}) {
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
`,Bi=Ui.div`
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
  @media (max-width: ${({breakpoint:e})=>e}) {
    width: 100%;
  }
`,Wi={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar"},Gi=()=>{const{loggedIn:e,userName:t,logoutLink:n,loginLink:r,onLoginClick:a,onLogoutClick:i,breakpoint:o}=na();return s.jsx(Bi,{className:"nav-link login-status",breakpoint:o,children:e?s.jsxs(s.Fragment,{children:[t?s.jsx("span",{className:"name","data-testid":"user-name",children:t}):"",s.jsx("a",{className:"signout",href:n,onClick:e=>{Yr({...Wi,text:"sign out"}),null==i||i(e)},children:"Sign Out"})]}):s.jsx("a",{href:r,onClick:e=>{Yr({...Wi,text:"sign in"}),null==a||a(e)},children:"Sign In"})})},Yi=Ui.form`
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .search-button {
    transition: cubic-bezier(0.19, 1, 0.19, 1);
  }
  input[name="q"] {
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
  @media (max-width: ${({breakpoint:e})=>e}) {
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
`,qi={event:"search",action:"type",name:"onenter",type:"main search",region:"navbar",section:"topbar"},Vi=()=>{const{breakpoint:e,searchUrl:n,site:r}=na(),a=ra(e),i=t.useRef(null),[o,l]=t.useState(!1);t.useEffect((()=>{o&&i.current.focus()}),[o]);const c=()=>{l((e=>{const t=!e;return Yr({...qi,event:"link",action:"click",name:"onclick",text:t?"search icon":"close search icon"}),t}))};return s.jsxs(Yi,{breakpoint:e,action:n,onSubmit:e=>{const t=e.target;e.preventDefault(),Yr({...qi,text:e.target.elements.q.value}),setTimeout((()=>{t.submit()}),100)},method:"get",name:"gs",className:o?"open-search":"","data-testid":"universal-nav-search-form",children:[a?s.jsxs("label",{children:[s.jsx(Bn,{icon:f}),s.jsx("input",{ref:i,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0,onChange:e=>Yr({...qi,text:e.target.value})})]}):s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:c,className:"search-button","data-testid":"search-button",children:s.jsx(Bn,{icon:f})}),o&&s.jsxs(s.Fragment,{children:[s.jsx("input",{ref:i,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0}),s.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:c,className:"close-search","data-testid":"close-search",children:s.jsx(Bn,{icon:d})})]})]}),s.jsx("input",{name:"url_host",value:r,type:"hidden"}),s.jsx("input",{name:"site",value:"default_collection",type:"hidden"}),s.jsx("input",{name:"sort",value:"date:D:L:d1",type:"hidden"}),s.jsx("input",{name:"output",value:"xml_no_dtd",type:"hidden"}),s.jsx("input",{name:"ie",value:"UTF-8",type:"hidden"}),s.jsx("input",{name:"oe",value:"UTF-8",type:"hidden"}),s.jsx("input",{name:"client",value:"asu_frontend",type:"hidden"}),s.jsx("input",{name:"proxystylesheet",value:"asu_frontend",type:"hidden"})]})},Xi={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar",text:""},Ki=()=>{const{breakpoint:e}=na();const t=[{className:"nav-link visually-hidden-focusable",href:"#skip-to-content",text:"Skip to main content"},{className:"nav-link visually-hidden-focusable",href:`https://accessibility.asu.edu/report?a11yref=${function(){try{return window.location.href}catch(e){return console.error(e),""}}()}`,text:"Report an accessibility problem"},{className:"nav-link",href:"https://asu.edu",text:"ASU Home"},{className:"nav-link",href:"https://my.asu.edu",text:"My ASU"},{className:"nav-link",href:"https://www.asu.edu/academics/colleges-schools",text:"Colleges and Schools"}];return s.jsx(Hi,{breakpoint:e,className:"universal-nav","data-testid":"universal-navbar","data-elastic-exclude":"data-elastic-exclude",children:s.jsx("div",{className:"container-xl",children:s.jsx("div",{className:"header-top",children:s.jsxs("nav",{className:"nav","aria-label":"ASU Global",children:[s.jsxs("div",{className:"links-container",children:[t.map((e=>s.jsx("a",{className:e.className,href:e.href,onClick:()=>Yr({...Xi,text:e.text}),children:e.text},e.href))),s.jsx(Gi,{})]}),s.jsx(Vi,{})]})})})})},Zi=Ui.div`
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
  @media (min-width: ${({breakpoint:e})=>e}) {
    .no-navigation {
      margin-top: 16px;
      display: flex;
      align-items: center;
      .title {
        width: 100%;
      }
    }
  }
  @media (max-width: ${({breakpoint:e})=>e}) {
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
`,Ji=Ui.a`
  display: unset;
  padding: 0;
  margin: 0;
  font-size: unset;
  line-height: unset;
  white-space: unset;
`,Qi=Gr(),eo=`${Qi}/assets/img/arizona-state-university-logo-vertical.png`,to=`${Qi}/assets/img/arizona-state-university-logo.png`,no=()=>{const{logo:e}=na();return s.jsxs(Ji,{href:(null==e?void 0:e.brandLink)??"https://asu.edu",className:"navbar-brand","data-testid":"logo",onClick:()=>Yr({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"asu logo"}),children:[s.jsx("img",{className:"vert",src:(null==e?void 0:e.src)??eo,alt:(null==e?void 0:e.alt)??"Arizona State University",title:(null==e?void 0:e.title)??"ASU home page",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),s.jsx("img",{className:"horiz",src:(null==e?void 0:e.mobileSrc)??to,alt:(null==e?void 0:e.alt)??"Arizona State University",title:(null==e?void 0:e.title)??"ASU home page",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})},ro=Ui.a`
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
`,ao=({href:e,color:t,text:n,classes:r,onClick:a})=>s.jsx(ro,{href:e,...e?{}:{tabIndex:0},className:`button-${t} ${r??""}`,onClick:a,children:n});ao.propTypes={...Kr};const io=Ui.nav`
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
  @media (max-width: ${({breakpoint:e})=>e}) {
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
`,oo=Ui.div`
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
  @media (max-width: ${({breakpoint:e})=>e}) {
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
`,so={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},lo=({text:e})=>s.jsx("h3",{className:"ul-heading",children:e});lo.propTypes={text:Tn.string};const co=({link:e,dropdownName:t,handleLinkEvent:n})=>s.jsx("li",{className:"nav-button",children:s.jsx(ao,{text:e.text,color:e.color||"dark",href:e.href,onClick:t=>n(t,e),onKeyDown:n,onFocus:()=>Yr({text:e.text,component:t}),"data-testid":"submenu-item"})});co.propTypes={link:Tn.shape({text:Tn.string,color:Tn.string,href:Tn.string}),dropdownName:Tn.string,handleLinkEvent:Tn.func};const fo=({link:e,dropdownName:t,handleLinkEvent:n})=>s.jsx("li",{className:"nav-link",children:s.jsx("a",{...e.href?{}:{tabIndex:0},href:e.href,onClick:t=>n(t,e),onKeyDown:t=>n(t,e),onFocus:()=>Yr({text:e.text,component:t}),"data-testid":"submenu-item",children:e.text})});fo.propTypes={link:Tn.shape({text:Tn.string,href:Tn.string}),dropdownName:Tn.string,handleLinkEvent:Tn.func};const uo=({dropdownName:e,items:n,buttons:r,classes:a,listId:i,setItemOpened:o,parentLink:l})=>{const{breakpoint:c}=na(),f=(null==n?void 0:n.length)>2,u=t.useRef(null),[d,m]=t.useState(!1),p=(null==n?void 0:n.length)>1;t.useEffect((()=>{if(window&&u.current){const e=u.current.getBoundingClientRect().left,t=.55*window.innerWidth;m(e>t)}}),[]);const h=e=>e.stopPropagation(),g=(e,t)=>{var n;const{key:r,type:a,target:i}=e,{parentElement:s}=i;h(e),"ArrowDown"===r?(e.preventDefault(),(()=>{var e;const t=null==(e=s.nextElementSibling)?void 0:e.firstChild;t&&t.focus()})()):"ArrowUp"===r?(e.preventDefault(),(()=>{var e;const t=null==(e=s.previousElementSibling)?void 0:e.firstChild;t&&t.focus()})()):"Escape"===r?(o(),l&&l.focus()):"Enter"!==r&&" "!==r&&"click"!==a||(null==(n=null==t?void 0:t.onClick)||n.call(t,e),Yr({...so,text:t.text}))};return s.jsxs(oo,{ref:u,className:`${a}${d?" aligned-right":""}${f?" mega":""}`,breakpoint:c,children:[s.jsx("div",{id:p?i:null,className:"dropdown-container",children:null==n?void 0:n.map(((t,n)=>{const r=Wr(`dropdown-item-${n}-`).next().value;return s.jsx("ul",{id:p?`${i}-${r}`:i,children:t.map(((t,n)=>((t,n)=>{const r=`${t.text}-${t.href||n}`;return"heading"===t.type?s.jsx(lo,{text:t.text},r):"button"===t.type?s.jsx(co,{link:t,dropdownName:e,handleLinkEvent:g},r):s.jsx(fo,{link:t,dropdownName:e,handleLinkEvent:g},r)})(t,n)))},r)}))}),r&&s.jsx("div",{className:"dropdown-button-container",children:s.jsx("div",{children:r.map(((e,t)=>s.jsx(ao,{color:e.color,text:e.text,href:e.href,onClick:h},`${e.text}-${e.href||t}`)))})})]})};uo.propTypes={dropdownName:Tn.string,items:Tn.arrayOf(Tn.arrayOf(Tn.shape({text:Tn.string,selected:Tn.bool,onClick:Tn.func,href:Tn.string}))),buttons:Tn.arrayOf(Tn.shape(Kr)),classes:Tn.string,listId:Tn.string,setItemOpened:Tn.func,parentLink:Tn.shape({focus:Tn.func})};const mo=Ui.li`
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
  @media (max-width: ${({breakpoint:e})=>e}) {
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
`,po={event:"collapse",type:"click"},ho={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},go=({children:e})=>s.jsxs(s.Fragment,{children:[s.jsx(Bn,{icon:c,className:"icon-nav-item",alt:""}),s.jsx("span",{className:"mobile-only",children:e})]});go.propTypes={children:Tn.node};const bo=({link:e,setItemOpened:n,itemOpened:r})=>{const a=t.useRef(null),i=t.useRef(null),o=e.id===r,{breakpoint:l,expandOnHover:c,title:f}=na(),d=ra(l);t.useEffect((()=>{const e=e=>{var t;o&&!(null==(t=null==a?void 0:a.current)?void 0:t.contains(e.target))&&n()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[o]);const m=t.useMemo((()=>{var t;return"icon-home"===e.type?s.jsx(go,{children:e.text}):s.jsxs("span",{children:[e.text,!!(null==(t=e.items)?void 0:t.length)&&s.jsx(Bn,{icon:u,className:"chevron-icon "+(o?"open":""),alt:""})]})}),[e]),p=()=>{var t;const n=!!(null==(t=e.items)?void 0:t.length),r=o?"close":"open",{text:a}=e;Yr(n?{...ho,...po,action:r,text:a}:{...ho,text:"icon-home"===e.type?"home button":a})},h=t=>{var r,a;if(!e.items&&e.href)return void Yr({...ho,text:e.text});const{key:i}=t;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"," ","Escape","Click"].includes(i)){if(t.preventDefault(),"Escape"===i&&o)return void n();if("Enter"!==i&&" "!==i||(e.items&&(c||d?d&&n():n()),p(),null==(r=e.onClick)||r.call(e,t)),("ArrowDown"===i||"ArrowRight"===i)&&o){const t=document.querySelectorAll(`.header-dropdown-${e.id} li.nav-link a`);t.length&&t[0].focus()}}else"click"===t.type&&e.items?(t.preventDefault(),p(),n()):"click"===t.type&&(p(),null==(a=e.onClick)||a.call(e,t))},g=()=>{c&&!d&&(n(),p())};return s.jsxs(mo,{breakpoint:l,ref:a,onMouseEnter:g,onMouseLeave:g,children:[s.jsx("a",{onKeyDown:h,onClick:h,href:e.href,...e.items?{"aria-expanded":o}:{},...e.href?{}:{tabIndex:0},"aria-owns":e.items?`dropdown-${e.id}`:null,className:`${e.class?e.class:""}${e.selected?" nav-item-selected":""}${o?" open-link":""}`,"data-testid":"nav-item",title:"icon-home"===e.type&&f?`${f} home page`:e.text,ref:i,children:m}),e.items&&s.jsx(uo,{items:e.items,buttons:e.buttons,dropdownName:e.text,classes:`header-dropdown-${e.id} ${o?"opened":""}`,listId:`dropdown-${e.id}`,setItemOpened:n,parentLink:null==i?void 0:i.current})]})};bo.propTypes={link:Zr,setItemOpened:Tn.func,itemOpened:Tn.number};const yo=()=>{const{navTree:e,mobileNavTree:n,buttons:r,breakpoint:a}=na(),i=ra(a),[o,l]=t.useState(void 0),c=(e,t)=>{const n={...e,id:t},r=Wr(`${e.text}-${t}-`).next().value;return s.jsx(bo,{link:n,setItemOpened:()=>{return e=t,void l((t=>o===e?void 0:e));var e},itemOpened:o},r)};return s.jsxs(io,{breakpoint:a,"data-testid":"navigation","aria-label":"Site",children:[((null==e?void 0:e.length)||(null==n?void 0:n.length)||(null==r?void 0:r.length))&&s.jsxs("div",{className:"content-container",children:[((null==e?void 0:e.length)||(null==n?void 0:n.length))&&s.jsx("ul",{className:"nav-list",children:(null==n?void 0:n.length)&&i?null==n?void 0:n.map(((e,t)=>c(e,t))):null==e?void 0:e.map(((e,t)=>c(e,t)))}),!!(null==r?void 0:r.length)&&s.jsx("form",{className:"buttons-container","data-testid":"buttons-container",children:null==r?void 0:r.map((e=>t.createElement(ao,{...e,key:e.text,onClick:()=>Yr({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:e.text})})))})]}),i&&s.jsx(Ki,{})]})},vo=Ui.div`
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
  @media (max-width: ${({breakpoint:e})=>e}) {
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
`,xo=Gr(),ko=`${xo}/assets/img/arizona-state-university-logo-vertical.png`,wo=`${xo}/assets/img/arizona-state-university-logo.png`,So=`${xo}/assets/img/asu-starbucks.png`,Ao=()=>{const{partnerLogo:e,logo:t,breakpoint:n}=na();return s.jsxs(vo,{breakpoint:n,"data-testid":"partner",children:[s.jsx("a",{href:(null==e?void 0:e.brandLink)??"https://starbucks.asu.edu/",onClick:()=>Yr({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"partner logo"}),children:s.jsx("img",{src:(null==e?void 0:e.src)??So,alt:(null==e?void 0:e.alt)??"ASU Starbucks logo",width:"232",height:"81",decoding:"async",fetchpriority:"high"})}),s.jsxs("a",{href:(null==t?void 0:t.brandLink)??"https://asu.edu",onClick:()=>Yr({text:"asu logo"}),children:[s.jsx("img",{className:"vert",src:(null==t?void 0:t.src)??ko,alt:(null==t?void 0:t.alt)??"Arizona State University",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),s.jsx("img",{className:"horiz",src:(null==t?void 0:t.mobileSrc)??wo,alt:(null==t?void 0:t.alt)??"Arizona State University",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})]})},Co=e=>{const t=new Date,n=e||window.location.hostname,r=localStorage.getItem("title_loaded"),a=t.getTime()>parseInt(r,10),i="localhost"===n,o=document.referrer.includes(n);if(i||!o&&(!r||a)){const e=((e,t)=>{const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n})(t,10).getTime();return localStorage.setItem("title_loaded",e.toString()),!0}return!1},No={"992px":"993px","1260px":"1261px"},Oo=Ui.div`
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

  @media (min-width: ${({breakpoint:e})=>No[e]}) {
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
`,Eo=()=>{const[e,n]=t.useState(!1),{title:r,parentOrg:a,parentOrgUrl:i,baseUrl:o,breakpoint:l,animateTitle:c}=na();return t.useEffect((()=>{if(!1!==c){let e="/"===o?window.location.hostname:o;e.includes(window.location.hostname)||0!==e.indexOf("/")||(e=window.location.hostname+e),Co(e)&&n(!0)}}),[e,c,o]),a?s.jsxs(Oo,{breakpoint:l,className:"title","data-testid":"title",children:[s.jsx("a",{className:"unit-name",href:i,onClick:()=>Yr({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:a}),title:`${a} home page`,children:a}),s.jsx("a",{className:"subunit-name "+(e?"active":""),href:o,onClick:()=>Yr({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:r}),title:`${r} home page`,children:r})]}):s.jsx(Oo,{breakpoint:l,className:"title","data-testid":"title",children:s.jsx("a",{className:"title-subunit-name "+(e?"active":""),href:o,onClick:()=>Yr({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:r}),title:`${r} home page`,children:r})})};Eo.propTypes={...Vr};const To=()=>{const{breakpoint:e,isPartner:n,hasNavigation:r}=na(),[a,i]=t.useState(!1),o=ra(e);return s.jsxs(s.Fragment,{children:[!o&&s.jsx(Ki,{}),s.jsx(Zi,{breakpoint:e,children:s.jsx("div",{className:"container-xl",children:s.jsx("div",{className:"header-main",children:s.jsxs("div",{className:"navbar navbar-expand-xl "+(n?"partner":""),children:[!n&&s.jsx(no,{}),s.jsx("button",{className:"navbar-toggler"+(a?"":" collapsed"),type:"button",onClick:()=>{i((e=>!e)),Yr({event:"collapse",action:a?"close":"open",type:"click",text:"menu button tablet"})},"aria-label":"Toggle navigation",children:s.jsx(Bn,{icon:a?d:l,alt:""})}),s.jsxs("div",{className:`${n?"":"expand-title"}${r?"":" no-navigation"}`,children:[n?s.jsx(Ao,{}):s.jsx(Eo,{}),!o&&s.jsx(yo,{})]}),a&&o&&s.jsx(yo,{})]})})})})]})},jo=e=>{if(!Array.isArray(e)||0===e.length)return e;if((e=>null==e?void 0:e.find((e=>e.selected)))(e))return e;let t="";if((null==window?void 0:window.location)&&(t=window.location.pathname+window.location.search),!t)return e;const n=((e,t)=>null==e?void 0:e.findIndex((e=>{var n;return(null==e?void 0:e.href)===t||Array.isArray(e.items)&&(null==(n=e.items)?void 0:n.flat().find((({href:e})=>e===t)))})))(e,t);if(-1===n)return e;const r=[...e];return r[n].selected=!0,r},Lo={Lg:"992px",Xl:"1260px"},Po=Ui.header`
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
  @media (min-width: ${({breakpoint:e})=>Lo[e]}) {
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
`,Io=Ui.div`
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
  @media (min-width: ${({breakpoint:e})=>Lo[e]}) {
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
`,Ro=({isPartner:e,navTree:n,title:r,baseUrl:a,parentOrg:i,parentOrgUrl:o,partnerLogo:l,logo:c,loggedIn:f,userName:u,loginLink:d,onLoginClick:m,logoutLink:p,onLogoutClick:h,buttons:g,breakpoint:b,animateTitle:y,expandOnHover:v,mobileNavTree:x,searchUrl:k,site:w,renderDiv:S="false"})=>{const A=jo(n),C=jo(x),N=t.useRef(null),O=()=>{window.scrollY>N.current.getBoundingClientRect().top?N.current.classList.add("scrolled"):N.current.classList.remove("scrolled")};t.useEffect((()=>{"undefined"!=typeof window&&function({packageName:e="",component:t="",type:n="",configuration:r={}}){e&&t?(window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}):console.error("trackReactComponent: Missing required arguments.")}({packageName:"component-header",component:"Component Header",type:"NA",configuration:{site:w,isPartner:e,searchUrl:k,navTree:A,parentOrg:i,buttons:g,mobileNavTree:C}})}),[]),t.useEffect((()=>(null==window||window.addEventListener("scroll",O),()=>window.removeEventListener("scroll",O))),[]);return s.jsx(ta,{initialValue:{isPartner:e,navTree:A,title:r,baseUrl:a,parentOrg:i,parentOrgUrl:o,partnerLogo:l,logo:c,loggedIn:f,userName:u,loginLink:d,onLoginClick:m,logoutLink:p,onLogoutClick:h,buttons:g,breakpoint:b,animateTitle:y,expandOnHover:v,mobileNavTree:C,hasNavigation:!!(null==A?void 0:A.length)||!!(null==C?void 0:C.length),searchUrl:k,site:w},children:(()=>{const e="true"===S?Io:Po;return s.jsx(e,{id:"asuHeader",ref:N,breakpoint:b,children:s.jsx(To,{})})})()})};var _o;Ro.propTypes={...Jr},Ro.defaultProps={isPartner:!1,baseUrl:"/",breakpoint:"Xl",expandOnHover:!1};var zo=n;_o=zo.createRoot,zo.hydrateRoot;e.ASUHeader=Ro,e.initGlobalHeader=({targetSelector:e,props:n})=>{((e,n,r)=>{_o(r).render(t.createElement(e,n))})(Ro,n,document.querySelector(e))},Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
/*! @license DOMPurify 2.5.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.8/LICENSE */
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
