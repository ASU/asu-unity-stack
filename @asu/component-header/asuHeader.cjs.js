"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react"),t=require("react-dom");function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r,a={exports:{}},i={};a.exports=function(){if(r)return i;r=1;var t=e,n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,i={},c=null,f=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(f=t.ref),t)o.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:f,props:i,_owner:s.current}}return i.Fragment=a,i.jsx=c,i.jsxs=c,i}();var o=a.exports;const s={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},l={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},c={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},f={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},u={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var d={NODE_ENV:"production"};function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const g=()=>{};let b={},y={},v=null,x={mark:g,measure:g};try{"undefined"!=typeof window&&(b=window),"undefined"!=typeof document&&(y=document),"undefined"!=typeof MutationObserver&&(v=MutationObserver),"undefined"!=typeof performance&&(x=performance)}catch($o){}const{userAgent:k=""}=b.navigator||{},w=b,S=y,A=v,C=x;w.document;const N=!!S.documentElement&&!!S.head&&"function"==typeof S.addEventListener&&"function"==typeof S.createElement,O=~k.indexOf("MSIE")||~k.indexOf("Trident/");var E={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},T=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],P="classic",L="duotone",I=[P,L,"sharp","sharp-duotone"],j=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),R=["fak","fa-kit","fakd","fa-kit-duotone"],_={fak:"kit","fa-kit":"kit"},z={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},D=["fak","fakd"],M={kit:"fak"},F={"kit-duotone":"fakd"},$={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},U=["fak","fa-kit","fakd","fa-kit-duotone"],H={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},W=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],B=[1,2,3,4,5,6,7,8,9,10],Y=B.concat([11,12,13,14,15,16,17,18,19,20]),G=[...Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$.GROUP,$.SWAP_OPACITY,$.PRIMARY,$.SECONDARY].concat(B.map((e=>"".concat(e,"x")))).concat(Y.map((e=>"w-".concat(e))));const q="___FONT_AWESOME___",X=16,V="svg-inline--fa",K="data-fa-i2svg",Z="data-fa-pseudo-element",J="data-prefix",Q="data-icon",ee="fontawesome-i2svg",te=["HTML","HEAD","STYLE","SCRIPT"],ne=(()=>{try{return"production"===d.NODE_ENV}catch(e){return!1}})();function re(e){return new Proxy(e,{get:(e,t)=>t in e?e[t]:e[P]})}const ae=h({},E);ae[P]=h(h(h(h({},{"fa-duotone":"duotone"}),E[P]),_),z);const ie=re(ae),oe=h({},{classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}});oe[P]=h(h(h(h({},{duotone:"fad"}),oe[P]),M),F);const se=re(oe),le=h({},H);le[P]=h(h({},le[P]),{fak:"fa-kit"});const ce=re(le),fe=h({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}});fe[P]=h(h({},fe[P]),{"fa-kit":"fak"}),re(fe);const ue=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,de="fa-layers-text",me=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;re(h({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}}));const pe=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],he={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ge=["kit",...G],be=w.FontAwesomeConfig||{};if(S&&"function"==typeof S.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((e=>{let[t,n]=e;const r=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=S.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t));null!=r&&(be[n]=r)}))}const ye={styleDefault:"solid",familyDefault:P,cssPrefix:"fa",replacementClass:V,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};be.familyPrefix&&(be.cssPrefix=be.familyPrefix);const ve=h(h({},ye),be);ve.autoReplaceSvg||(ve.observeMutations=!1);const xe={};Object.keys(ye).forEach((e=>{Object.defineProperty(xe,e,{enumerable:!0,set:function(t){ve[e]=t,ke.forEach((e=>e(xe)))},get:function(){return ve[e]}})})),Object.defineProperty(xe,"familyPrefix",{enumerable:!0,set:function(e){ve.cssPrefix=e,ke.forEach((e=>e(xe)))},get:function(){return ve.cssPrefix}}),w.FontAwesomeConfig=xe;const ke=[];const we=X,Se={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ae(){let e=12,t="";for(;e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function Ce(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ne(e){return e.classList?Ce(e.classList):(e.getAttribute("class")||"").split(" ").filter((e=>e))}function Oe(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ee(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";")),"")}function Te(e){return e.size!==Se.size||e.x!==Se.x||e.y!==Se.y||e.rotate!==Se.rotate||e.flipX||e.flipY}function Pe(){const e="fa",t=V,n=xe.cssPrefix,r=xe.replacementClass;let a=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}';if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let Le=!1;function Ie(){xe.autoAddCss&&!Le&&(!function(e){if(!e||!N)return;const t=S.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=S.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const e=n[a],t=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(r=e)}S.head.insertBefore(t,r)}(Pe()),Le=!0)}var je={mixout:()=>({dom:{css:Pe,insertCss:Ie}}),hooks:()=>({beforeDOMElementCreation(){Ie()},beforeI2svg(){Ie()}})};const Re=w||{};Re[q]||(Re[q]={}),Re[q].styles||(Re[q].styles={}),Re[q].hooks||(Re[q].hooks={}),Re[q].shims||(Re[q].shims=[]);var _e=Re[q];const ze=[],De=function(){S.removeEventListener("DOMContentLoaded",De),Me=1,ze.map((e=>e()))};let Me=!1;function Fe(e){const{tag:t,attributes:n={},children:r=[]}=e;return"string"==typeof e?Oe(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,'="').concat(Oe(e[n]),'" ')),"").trim()}(n),">").concat(r.map(Fe).join(""),"</").concat(t,">")}function $e(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}N&&(Me=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),Me||S.addEventListener("DOMContentLoaded",De));var Ue=function(e,t,n,r){var a,i,o,s=Object.keys(e),l=s.length,c=t;for(void 0===n?(a=1,o=e[s[0]]):(a=0,o=n);a<l;a++)o=c(o,e[i=s[a]],i,e);return o};function He(e){const t=function(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const r=e.charCodeAt(n++);56320==(64512&r)?t.push(((1023&a)<<10)+(1023&r)+65536):(t.push(a),n--)}else t.push(a)}return t}(e);return 1===t.length?t[0].toString(16):null}function We(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t}),{})}function Be(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{skipHooks:r=!1}=n,a=We(t);"function"!=typeof _e.hooks.addPack||r?_e.styles[e]=h(h({},_e.styles[e]||{}),a):_e.hooks.addPack(e,We(t)),"fas"===e&&Be("fa",t)}const{styles:Ye,shims:Ge}=_e,qe=Object.keys(ce),Xe=qe.reduce(((e,t)=>(e[t]=Object.keys(ce[t]),e)),{});let Ve=null,Ke={},Ze={},Je={},Qe={},et={};function tt(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r!==e||""===a||(i=a,~ge.indexOf(i))?null:a;var i}const nt=()=>{const e=e=>Ue(Ye,((t,n,r)=>(t[r]=Ue(n,e,{}),t)),{});Ke=e(((e,t,n)=>{if(t[3]&&(e[t[3]]=n),t[2]){t[2].filter((e=>"number"==typeof e)).forEach((t=>{e[t.toString(16)]=n}))}return e})),Ze=e(((e,t,n)=>{if(e[n]=n,t[2]){t[2].filter((e=>"string"==typeof e)).forEach((t=>{e[t]=n}))}return e})),et=e(((e,t,n)=>{const r=t[2];return e[n]=n,r.forEach((t=>{e[t]=n})),e}));const t="far"in Ye||xe.autoFetchSvg,n=Ue(Ge,((e,n)=>{const r=n[0];let a=n[1];const i=n[2];return"far"!==a||t||(a="fas"),"string"==typeof r&&(e.names[r]={prefix:a,iconName:i}),"number"==typeof r&&(e.unicodes[r.toString(16)]={prefix:a,iconName:i}),e}),{names:{},unicodes:{}});Je=n.names,Qe=n.unicodes,Ve=lt(xe.styleDefault,{family:xe.familyDefault})};var rt;function at(e,t){return(Ke[e]||{})[t]}function it(e,t){return(et[e]||{})[t]}function ot(e){return Je[e]||{prefix:null,iconName:null}}function st(){return Ve}rt=e=>{Ve=lt(e.styleDefault,{family:xe.familyDefault})},ke.push(rt),nt();function lt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{family:n=P}=t,r=ie[n][e];if(n===L&&!e)return"fad";const a=se[n][e]||se[n][r],i=e in _e.styles?e:null;return a||i||null}function ct(e){return e.sort().filter(((e,t,n)=>n.indexOf(e)===t))}function ft(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=W.concat(U),i=ct(e.filter((e=>a.includes(e)))),o=ct(e.filter((e=>!W.includes(e)))),s=i.filter((e=>(r=e,!T.includes(e)))),[l=null]=s,c=function(e){let t=P;const n=qe.reduce(((e,t)=>(e[t]="".concat(xe.cssPrefix,"-").concat(t),e)),{});return I.forEach((r=>{(e.includes(n[r])||e.some((e=>Xe[r].includes(e))))&&(t=r)})),t}(i),f=h(h({},function(e){let t=[],n=null;return e.forEach((e=>{const r=tt(xe.cssPrefix,e);r?n=r:e&&t.push(e)})),{iconName:n,rest:t}}(o)),{},{prefix:lt(l,{family:c})});return h(h(h({},f),function(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:i={},config:o={}}=e,s=n===L,l=t.includes("fa-duotone")||t.includes("fad"),c="duotone"===o.familyDefault,f="fad"===r.prefix||"fa-duotone"===r.prefix;!s&&(l||c||f)&&(r.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab");if(!r.prefix&&ut.includes(n)){if(Object.keys(i).find((e=>dt.includes(e)))||o.autoFetchSvg){const e=j.get(n).defaultShortPrefixId;r.prefix=e,r.iconName=it(r.prefix,r.iconName)||r.iconName}}"fa"!==r.prefix&&"fa"!==a||(r.prefix=st()||"fas");return r}({values:e,family:c,styles:Ye,config:xe,canonical:f,givenPrefix:r})),function(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const i="fa"===t?ot(a):{},o=it(r,a);a=i.iconName||o||a,r=i.prefix||r,"far"!==r||Ye.far||!Ye.fas||xe.autoFetchSvg||(r="fas");return{prefix:r,iconName:a}}(n,r,f))}const ut=I.filter((e=>e!==P||e!==L)),dt=Object.keys(H).filter((e=>e!==P)).map((e=>Object.keys(H[e]))).flat();let mt=[],pt={};const ht={},gt=Object.keys(ht);function bt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(pt[e]||[]).forEach((e=>{t=e.apply(null,[t,...r])})),t}function yt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(pt[e]||[]).forEach((e=>{e.apply(null,n)}))}function vt(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ht[e]?ht[e].apply(null,t):void 0}function xt(e){"fa"===e.prefix&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||st();if(t)return t=it(n,t)||t,$e(kt.definitions,n,t)||$e(_e.styles,n,t)}const kt=new class{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach((e=>{this.definitions[e]=h(h({},this.definitions[e]||{}),r[e]),Be(e,r[e]);const t=ce[P][e];t&&Be(t,r[e]),nt()}))}reset(){this.definitions={}}_pullDefinitions(e,t){const n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((t=>{const{prefix:r,iconName:a,icon:i}=n[t],o=i[2];e[r]||(e[r]={}),o.length>0&&o.forEach((t=>{"string"==typeof t&&(e[r][t]=i)})),e[r][a]=i})),e}},wt={i2svg:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return N?(yt("beforeI2svg",e),vt("pseudoElements2svg",e),vt("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;var n;!1===xe.autoReplaceSvg&&(xe.autoReplaceSvg=!0),xe.observeMutations=!0,n=()=>{At({autoReplaceSvgRoot:t}),yt("watch",e)},N&&(Me?setTimeout(n,0):ze.push(n))}},St={noAuto:()=>{xe.autoReplaceSvg=!1,xe.observeMutations=!1,yt("noAuto")},config:xe,dom:wt,parse:{icon:e=>{if(null===e)return null;if("object"==typeof e&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:it(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){const t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=lt(e[0]);return{prefix:n,iconName:it(n,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(xe.cssPrefix,"-"))>-1||e.match(ue))){const t=ft(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||st(),iconName:it(t.prefix,t.iconName)||t.iconName}}if("string"==typeof e){const t=st();return{prefix:t,iconName:it(t,e)||e}}}},library:kt,findIconDefinition:xt,toHtml:Fe},At=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t=S}=e;(Object.keys(_e.styles).length>0||xe.autoFetchSvg)&&N&&xe.autoReplaceSvg&&St.dom.i2svg({node:t})};function Ct(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((e=>Fe(e)))}}),Object.defineProperty(e,"node",{get:function(){if(!N)return;const t=S.createElement("div");return t.innerHTML=e.html,t.children}}),e}function Nt(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:s,maskId:l,titleId:c,extra:f,watchable:u=!1}=e,{width:d,height:m}=n.found?n:t,p=D.includes(r),g=[xe.replacementClass,a?"".concat(xe.cssPrefix,"-").concat(a):""].filter((e=>-1===f.classes.indexOf(e))).filter((e=>""!==e||!!e)).concat(f.classes).join(" ");let b={children:[],attributes:h(h({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:g,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(m)})};const y=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(d/m*16*.0625,"em")}:{};u&&(b.attributes[K]=""),s&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||Ae())},children:[s]}),delete b.attributes.title);const v=h(h({},b),{},{prefix:r,iconName:a,main:t,mask:n,maskId:l,transform:i,symbol:o,styles:h(h({},y),f.styles)}),{children:x,attributes:k}=n.found&&t.found?vt("generateAbstractMask",v)||{children:[],attributes:{}}:vt("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=x,v.attributes=k,o?function(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=!0===i?"".concat(t,"-").concat(xe.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},a),{},{id:o}),children:r}]}]}(v):function(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(Te(o)&&n.found&&!r.found){const{width:e,height:t}=n,r={x:e/t/2,y:.5};a.style=Ee(h(h({},i),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(v)}function Ot(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:s=!1}=e,l=h(h(h({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(l[K]="");const c=h({},o.styles);Te(a)&&(c.transform=function(e){let{transform:t,width:n=X,height:r=X,startCentered:a=!1}=e,i="";return i+=a&&O?"translate(".concat(t.x/we-n/2,"em, ").concat(t.y/we-r/2,"em) "):a?"translate(calc(-50% + ".concat(t.x/we,"em), calc(-50% + ").concat(t.y/we,"em)) "):"translate(".concat(t.x/we,"em, ").concat(t.y/we,"em) "),i+="scale(".concat(t.size/we*(t.flipX?-1:1),", ").concat(t.size/we*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=Ee(c);f.length>0&&(l.style=f);const u=[];return u.push({tag:"span",attributes:l,children:[t]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}const{styles:Et}=_e;function Tt(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return a=Array.isArray(r)?{tag:"g",attributes:{class:"".concat(xe.cssPrefix,"-").concat(he.GROUP)},children:[{tag:"path",attributes:{class:"".concat(xe.cssPrefix,"-").concat(he.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(xe.cssPrefix,"-").concat(he.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Pt={found:!1,width:512,height:512};function Lt(e,t){let n=t;return"fa"===t&&null!==xe.styleDefault&&(t=st()),new Promise(((r,a)=>{if("fa"===n){const n=ot(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&Et[t]&&Et[t][e]){return r(Tt(Et[t][e]))}!function(e,t){ne||xe.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),r(h(h({},Pt),{},{icon:xe.showMissingIcons&&e&&vt("missingIconAbstract")||{}}))}))}const It=()=>{},jt=xe.measurePerformance&&C&&C.mark&&C.measure?C:{mark:It,measure:It},Rt='FA "6.7.2"',_t=e=>{jt.mark("".concat(Rt," ").concat(e," ends")),jt.measure("".concat(Rt," ").concat(e),"".concat(Rt," ").concat(e," begins"),"".concat(Rt," ").concat(e," ends"))};var zt=e=>(jt.mark("".concat(Rt," ").concat(e," begins")),()=>_t(e));const Dt=()=>{};function Mt(e){return"string"==typeof(e.getAttribute?e.getAttribute(K):null)}function Ft(e){return S.createElementNS("http://www.w3.org/2000/svg",e)}function $t(e){return S.createElement(e)}function Ut(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ceFn:n=("svg"===e.tag?Ft:$t)}=t;if("string"==typeof e)return S.createTextNode(e);const r=n(e.tag);Object.keys(e.attributes||[]).forEach((function(t){r.setAttribute(t,e.attributes[t])}));return(e.children||[]).forEach((function(e){r.appendChild(Ut(e,{ceFn:n}))})),r}const Ht={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach((e=>{t.parentNode.insertBefore(Ut(e),t)})),null===t.getAttribute(K)&&xe.keepOriginalSource){let e=S.createComment(function(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Ne(t).indexOf(xe.replacementClass))return Ht.replace(e);const r=new RegExp("".concat(xe.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const e=n[0].attributes.class.split(" ").reduce(((e,t)=>(t===xe.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e)),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(" "),0===e.toNode.length?t.removeAttribute("class"):t.setAttribute("class",e.toNode.join(" "))}const a=n.map((e=>Fe(e))).join("\n");t.setAttribute(K,""),t.innerHTML=a}};function Wt(e){e()}function Bt(e,t){const n="function"==typeof t?t:Dt;if(0===e.length)n();else{let t=Wt;"async"===xe.mutateApproach&&(t=w.requestAnimationFrame||Wt),t((()=>{const t=!0===xe.autoReplaceSvg?Ht.replace:Ht[xe.autoReplaceSvg]||Ht.replace,r=zt("mutate");e.map(t),r(),n()}))}}let Yt=!1;function Gt(){Yt=!0}function qt(){Yt=!1}let Xt=null;function Vt(e){if(!A)return;if(!xe.observeMutations)return;const{treeCallback:t=Dt,nodeCallback:n=Dt,pseudoElementsCallback:r=Dt,observeMutationsRoot:a=S}=e;Xt=new A((e=>{if(Yt)return;const a=st();Ce(e).forEach((e=>{if("childList"===e.type&&e.addedNodes.length>0&&!Mt(e.addedNodes[0])&&(xe.searchPseudoElements&&r(e.target),t(e.target)),"attributes"===e.type&&e.target.parentNode&&xe.searchPseudoElements&&r(e.target.parentNode),"attributes"===e.type&&Mt(e.target)&&~pe.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){const t=e.getAttribute?e.getAttribute(J):null,n=e.getAttribute?e.getAttribute(Q):null;return t&&n}(e.target)){const{prefix:t,iconName:n}=ft(Ne(e.target));e.target.setAttribute(J,t||a),n&&e.target.setAttribute(Q,n)}else(i=e.target)&&i.classList&&i.classList.contains&&i.classList.contains(xe.replacementClass)&&n(e.target);var i}))})),N&&Xt.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Kt(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=void 0!==e.innerText?e.innerText.trim():"";let a=ft(Ne(e));return a.prefix||(a.prefix=st()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=(i=a.prefix,o=e.innerText,(Ze[i]||{})[o]||at(a.prefix,He(e.innerText)))),!a.iconName&&xe.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a;var i,o}function Zt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Kt(e),i=function(e){const t=Ce(e.attributes).reduce(((e,t)=>("class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e)),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return xe.autoA11y&&(n?t["aria-labelledby"]="".concat(xe.replacementClass,"-title-").concat(r||Ae()):(t["aria-hidden"]="true",t.focusable="false")),t}(e),o=bt("parseNodeAttributes",{},e);let s=t.styleParser?function(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce(((e,t)=>{const n=t.split(":"),r=n[0],a=n.slice(1);return r&&a.length>0&&(e[r]=a.join(":").trim()),e}),{})),n}(e):[];return h({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Se,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i}},o)}const{styles:Jt}=_e;function Qt(e){const t="nest"===xe.autoReplaceSvg?Zt(e,{styleParser:!1}):Zt(e);return~t.extra.classes.indexOf(de)?vt("generateLayersText",e,t):vt("generateSvgReplacementMutation",e,t)}function en(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!N)return Promise.resolve();const n=S.documentElement.classList,r=e=>n.add("".concat(ee,"-").concat(e)),a=e=>n.remove("".concat(ee,"-").concat(e)),i=xe.autoFetchSvg?[...R,...W]:T.concat(Object.keys(Jt));i.includes("fa")||i.push("fa");const o=[".".concat(de,":not([").concat(K,"])")].concat(i.map((e=>".".concat(e,":not([").concat(K,"])")))).join(", ");if(0===o.length)return Promise.resolve();let s=[];try{s=Ce(e.querySelectorAll(o))}catch(f){}if(!(s.length>0))return Promise.resolve();r("pending"),a("complete");const l=zt("onTree"),c=s.reduce(((e,t)=>{try{const n=Qt(t);n&&e.push(n)}catch(f){ne||"MissingIcon"===f.name&&console.error(f)}return e}),[]);return new Promise(((e,n)=>{Promise.all(c).then((n=>{Bt(n,(()=>{r("active"),r("complete"),a("pending"),"function"==typeof t&&t(),l(),e()}))})).catch((e=>{l(),n(e)}))}))}function tn(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Qt(e).then((e=>{e&&Bt([e],t)}))}const nn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=Se,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:l=[],attributes:c={},styles:f={}}=t;if(!e)return;const{prefix:u,iconName:d,icon:m}=e;return Ct(h({type:"icon"},e),(()=>(yt("beforeDOMElementCreation",{iconDefinition:e,params:t}),xe.autoA11y&&(o?c["aria-labelledby"]="".concat(xe.replacementClass,"-title-").concat(s||Ae()):(c["aria-hidden"]="true",c.focusable="false")),Nt({icons:{main:Tt(m),mask:a?Tt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:d,transform:h(h({},Se),n),symbol:r,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:f,classes:l}}))))};var rn={mixout(){return{icon:(e=nn,function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=(t||{}).icon?t:xt(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:xt(a||{})),e(r,h(h({},n),{},{mask:a}))})};var e},hooks:()=>({mutationObserverCallbacks:e=>(e.treeCallback=en,e.nodeCallback=tn,e)}),provides(e){e.i2svg=function(e){const{node:t=S,callback:n=()=>{}}=e;return en(t,n)},e.generateSvgReplacementMutation=function(e,t){const{iconName:n,title:r,titleId:a,prefix:i,transform:o,symbol:s,mask:l,maskId:c,extra:f}=t;return new Promise(((t,u)=>{Promise.all([Lt(n,i),l.iconName?Lt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((l=>{let[u,d]=l;t([e,Nt({icons:{main:u,mask:d},prefix:i,iconName:n,transform:o,symbol:s,maskId:c,title:r,titleId:a,extra:f,watchable:!0})])})).catch(u)}))},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:a,styles:i}=e;const o=Ee(i);let s;return o.length>0&&(n.style=o),Te(a)&&(s=vt("generateAbstractTransformGrouping",{main:r,transform:a,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},an={mixout:()=>({layer(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{classes:n=[]}=t;return Ct({type:"layer"},(()=>{yt("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e((e=>{Array.isArray(e)?e.map((e=>{r=r.concat(e.abstract)})):r=r.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(xe.cssPrefix,"-layers"),...n].join(" ")},children:r}]}))}})},on={mixout:()=>({counter(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return Ct({type:"counter",content:e},(()=>(yt("beforeDOMElementCreation",{content:e,params:t}),function(e){const{content:t,title:n,extra:r}=e,a=h(h(h({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ee(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(xe.cssPrefix,"-layers-counter"),...r]}}))))}})},sn={mixout:()=>({text(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=Se,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return Ct({type:"text",content:e},(()=>(yt("beforeDOMElementCreation",{content:e,params:t}),Ot({content:e,transform:h(h({},Se),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(xe.cssPrefix,"-layers-text"),...a]}}))))}}),provides(e){e.generateLayersText=function(e,t){const{title:n,transform:r,extra:a}=t;let i=null,o=null;if(O){const t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();i=n.width/t,o=n.height/t}return xe.autoA11y&&!n&&(a.attributes["aria-hidden"]="true"),Promise.resolve([e,Ot({content:e.innerHTML,width:i,height:o,transform:r,title:n,extra:a,watchable:!0})])}}};const ln=new RegExp('"',"ug"),cn=[1105920,1112319],fn=h(h(h(h({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),un=Object.keys(fn).reduce(((e,t)=>(e[t.toLowerCase()]=fn[t],e)),{}),dn=Object.keys(un).reduce(((e,t)=>{const n=un[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e}),{});function mn(e,t){const n="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(((r,a)=>{if(null!==e.getAttribute(n))return r();const i=Ce(e.children).filter((e=>e.getAttribute(Z)===t))[0],o=w.getComputedStyle(e,t),s=o.getPropertyValue("font-family"),l=s.match(me),c=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(i&&!l)return e.removeChild(i),r();if(l&&"none"!==f&&""!==f){const f=o.getPropertyValue("content");let u=function(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(un[n]||{})[a]||dn[n]}(s,c);const{value:d,isSecondary:m}=function(e){const t=e.replace(ln,""),n=function(e,t){const n=e.length;let r,a=e.charCodeAt(t);return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?1024*(a-55296)+r-56320+65536:a}(t,0),r=n>=cn[0]&&n<=cn[1],a=2===t.length&&t[0]===t[1];return{value:He(a?t[0]:t),isSecondary:r||a}}(f),p=l[0].startsWith("FontAwesome");let g=at(u,d),b=g;if(p){const e=function(e){const t=Qe[e],n=at("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}(d);e.iconName&&e.prefix&&(g=e.iconName,u=e.prefix)}if(!g||m||i&&i.getAttribute(J)===u&&i.getAttribute(Q)===b)r();else{e.setAttribute(n,b),i&&e.removeChild(i);const o={iconName:null,title:null,titleId:null,prefix:null,transform:Se,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},{extra:s}=o;s.attributes[Z]=t,Lt(g,u).then((a=>{const i=Nt(h(h({},o),{},{icons:{main:a,mask:{prefix:null,iconName:null,rest:[]}},prefix:u,iconName:b,extra:s,watchable:!0})),l=S.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(l,e.firstChild):e.appendChild(l),l.outerHTML=i.map((e=>Fe(e))).join("\n"),e.removeAttribute(n),r()})).catch(a)}}else r()}))}function pn(e){return Promise.all([mn(e,"::before"),mn(e,"::after")])}function hn(e){return!(e.parentNode===document.head||~te.indexOf(e.tagName.toUpperCase())||e.getAttribute(Z)||e.parentNode&&"svg"===e.parentNode.tagName)}function gn(e){if(N)return new Promise(((t,n)=>{const r=Ce(e.querySelectorAll("*")).filter(hn).map(pn),a=zt("searchPseudoElements");Gt(),Promise.all(r).then((()=>{a(),qt(),t()})).catch((()=>{a(),qt(),n()}))}))}let bn=!1;const yn=e=>e.toLowerCase().split(" ").reduce(((e,t)=>{const n=t.toLowerCase().split("-"),r=n[0];let a=n.slice(1).join("-");if(r&&"h"===a)return e.flipX=!0,e;if(r&&"v"===a)return e.flipY=!0,e;if(a=parseFloat(a),isNaN(a))return e;switch(r){case"grow":e.size=e.size+a;break;case"shrink":e.size=e.size-a;break;case"left":e.x=e.x-a;break;case"right":e.x=e.x+a;break;case"up":e.y=e.y-a;break;case"down":e.y=e.y+a;break;case"rotate":e.rotate=e.rotate+a}return e}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0});const vn={x:0,y:0,width:"100%",height:"100%"};function xn(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}!function(e,t){let{mixoutsTo:n}=t;mt=e,pt={},Object.keys(ht).forEach((e=>{-1===gt.indexOf(e)&&delete ht[e]})),mt.forEach((e=>{const t=e.mixout?e.mixout():{};if(Object.keys(t).forEach((e=>{"function"==typeof t[e]&&(n[e]=t[e]),"object"==typeof t[e]&&Object.keys(t[e]).forEach((r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]}))})),e.hooks){const t=e.hooks();Object.keys(t).forEach((e=>{pt[e]||(pt[e]=[]),pt[e].push(t[e])}))}e.provides&&e.provides(ht)}))}([je,rn,an,on,sn,{hooks:()=>({mutationObserverCallbacks:e=>(e.pseudoElementsCallback=gn,e)}),provides(e){e.pseudoElements2svg=function(e){const{node:t=S}=e;xe.searchPseudoElements&&gn(t)}}},{mixout:()=>({dom:{unwatch(){Gt(),bn=!0}}}),hooks:()=>({bootstrap(){Vt(bt("mutationObserverCallbacks",{}))},noAuto(){Xt&&Xt.disconnect()},watch(e){const{observeMutationsRoot:t}=e;bn?qt():Vt(bt("mutationObserverCallbacks",{observeMutationsRoot:t}))}})},{mixout:()=>({parse:{transform:e=>yn(e)}}),hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=yn(n)),e}}),provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:a}=e;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(32*n.x,", ").concat(32*n.y,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),c={outer:i,inner:{transform:"".concat(o," ").concat(s," ").concat(l)},path:{transform:"translate(".concat(a/2*-1," -256)")}};return{tag:"g",attributes:h({},c.outer),children:[{tag:"g",attributes:h({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:h(h({},t.icon.attributes),c.path)}]}]}}}},{hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?ft(n.split(" ").map((e=>e.trim()))):{prefix:null,iconName:null,rest:[]};return r.prefix||(r.prefix=st()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}),provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:a,maskId:i,transform:o}=e;const{width:s,icon:l}=r,{width:c,icon:f}=a,u=function(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}({transform:o,containerWidth:c,iconWidth:s}),d={tag:"rect",attributes:h(h({},vn),{},{fill:"white"})},m=l.children?{children:l.children.map(xn)}:{},p={tag:"g",attributes:h({},u.inner),children:[xn(h({tag:l.tag,attributes:h(h({},l.attributes),u.path)},m))]},g={tag:"g",attributes:h({},u.outer),children:[p]},b="mask-".concat(i||Ae()),y="clip-".concat(i||Ae()),v={tag:"mask",attributes:h(h({},vn),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,g]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(k=f,"g"===k.tag?k.children:[k])},v]};var k;return t.push(x,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(b,")")},vn)}),{children:t,attributes:n}}}},{provides(e){let t=!1;w.matchMedia&&(t=w.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:h(h({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const a=h(h({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:h(h({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:h(h({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},a),{},{values:"1;0;1;1;0;1;"})}),e.push(i),e.push({tag:"path",attributes:h(h({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:h(h({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:h(h({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return e.symbol=r,e}})}],{mixoutsTo:St});const kn=St.parse,wn=St.icon;var Sn,An,Cn,Nn,On={exports:{}};On.exports=function(){if(Nn)return Cn;Nn=1;var e=An?Sn:(An=1,Sn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");function t(){}function n(){}return n.resetWarningCache=t,Cn=function(){function r(t,n,r,a,i,o){if(o!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function a(){return r}r.isRequired=r;var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i}}()();const En=n(On.exports);function Tn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Pn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Tn(Object(n),!0).forEach((function(t){In(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ln(e){return(Ln="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function In(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jn(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Rn(e){return function(e){if(Array.isArray(e))return _n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return _n(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zn(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var Dn=["style"];var Mn=!1;try{Mn=!0}catch($o){}function Fn(e){return e&&"object"===Ln(e)&&e.prefix&&e.iconName&&e.icon?e:kn.icon?kn.icon(e):null===e?null:e&&"object"===Ln(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function $n(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?In({},e,t):{}}var Un={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Hn=e.forwardRef((function(e,t){var n=Pn(Pn({},Un),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,l=n.titleId,c=n.maskId,f=Fn(r),u=$n("classes",[].concat(Rn(function(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,u=e.pulse,d=e.fixedWidth,m=e.inverse,p=e.border,h=e.listItem,g=e.flip,b=e.size,y=e.rotation,v=e.pull,x=(In(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":d,"fa-inverse":m,"fa-border":p,"fa-li":h,"fa-flip":!0===g,"fa-flip-horizontal":"horizontal"===g||"both"===g,"fa-flip-vertical":"vertical"===g||"both"===g},"fa-".concat(b),null!=b),In(t,"fa-rotate-".concat(y),null!=y&&0!==y),In(t,"fa-pull-".concat(v),null!=v),In(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map((function(e){return x[e]?e:null})).filter((function(e){return e}))}(n)),Rn((o||"").split(" ")))),d=$n("transform","string"==typeof n.transform?kn.transform(n.transform):n.transform),m=$n("mask",Fn(a)),p=wn(f,Pn(Pn(Pn(Pn({},u),d),m),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!p)return function(){var e;!Mn&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var h=p.abstract,g={ref:t};return Object.keys(n).forEach((function(e){Un.hasOwnProperty(e)||(g[e]=n[e])})),Wn(h[0],g)}));Hn.displayName="FontAwesomeIcon",Hn.propTypes={beat:En.bool,border:En.bool,beatFade:En.bool,bounce:En.bool,className:En.string,fade:En.bool,flash:En.bool,mask:En.oneOfType([En.object,En.array,En.string]),maskId:En.string,fixedWidth:En.bool,inverse:En.bool,flip:En.oneOf([!0,!1,"horizontal","vertical","both"]),icon:En.oneOfType([En.object,En.array,En.string]),listItem:En.bool,pull:En.oneOf(["right","left"]),pulse:En.bool,rotation:En.oneOf([0,90,180,270]),shake:En.bool,size:En.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:En.bool,spinPulse:En.bool,spinReverse:En.bool,symbol:En.oneOfType([En.bool,En.string]),title:En.string,titleId:En.string,transform:En.oneOfType([En.string,En.object]),swapOpacity:En.bool};var Wn=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),i=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=r.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=zn(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[a]=i,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[zn(t)]=r}return e}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,l=jn(r,Dn);return i.attrs.style=Pn(Pn({},i.attrs.style),s),t.apply(void 0,[n.tag,Pn(Pn({},i.attrs),l)].concat(Rn(a)))}.bind(null,e.createElement);const{entries:Bn,setPrototypeOf:Yn,isFrozen:Gn,getPrototypeOf:qn,getOwnPropertyDescriptor:Xn}=Object;let{freeze:Vn,seal:Kn,create:Zn}=Object,{apply:Jn,construct:Qn}="undefined"!=typeof Reflect&&Reflect;Vn||(Vn=function(e){return e}),Kn||(Kn=function(e){return e}),Jn||(Jn=function(e,t,n){return e.apply(t,n)}),Qn||(Qn=function(e,t){return new e(...t)});const er=hr(Array.prototype.forEach),tr=hr(Array.prototype.lastIndexOf),nr=hr(Array.prototype.pop),rr=hr(Array.prototype.push),ar=hr(Array.prototype.splice),ir=hr(String.prototype.toLowerCase),or=hr(String.prototype.toString),sr=hr(String.prototype.match),lr=hr(String.prototype.replace),cr=hr(String.prototype.indexOf),fr=hr(String.prototype.trim),ur=hr(Object.prototype.hasOwnProperty),dr=hr(RegExp.prototype.test),mr=(pr=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Qn(pr,t)});var pr;function hr(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return Jn(e,t,r)}}function gr(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ir;Yn&&Yn(e,null);let r=t.length;for(;r--;){let a=t[r];if("string"==typeof a){const e=n(a);e!==a&&(Gn(t)||(t[r]=e),a=e)}e[a]=!0}return e}function br(e){for(let t=0;t<e.length;t++){ur(e,t)||(e[t]=null)}return e}function yr(e){const t=Zn(null);for(const[n,r]of Bn(e)){ur(e,n)&&(Array.isArray(r)?t[n]=br(r):r&&"object"==typeof r&&r.constructor===Object?t[n]=yr(r):t[n]=r)}return t}function vr(e,t){for(;null!==e;){const n=Xn(e,t);if(n){if(n.get)return hr(n.get);if("function"==typeof n.value)return hr(n.value)}e=qn(e)}return function(){return null}}const xr=Vn(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),kr=Vn(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),wr=Vn(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Sr=Vn(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ar=Vn(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Cr=Vn(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Nr=Vn(["#text"]),Or=Vn(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Er=Vn(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Tr=Vn(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Pr=Vn(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Lr=Kn(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ir=Kn(/<%[\w\W]*|[\w\W]*%>/gm),jr=Kn(/\$\{[\w\W]*/gm),Rr=Kn(/^data-[\-\w.\u00B7-\uFFFF]+$/),_r=Kn(/^aria-[\-\w]+$/),zr=Kn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Dr=Kn(/^(?:\w+script|data):/i),Mr=Kn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Fr=Kn(/^html$/i),$r=Kn(/^[a-z][.\w]*(-[.\w]+)+$/i);var Ur=Object.freeze({__proto__:null,ARIA_ATTR:_r,ATTR_WHITESPACE:Mr,CUSTOM_ELEMENT:$r,DATA_ATTR:Rr,DOCTYPE_NAME:Fr,ERB_EXPR:Ir,IS_ALLOWED_URI:zr,IS_SCRIPT_OR_DATA:Dr,MUSTACHE_EXPR:Lr,TMPLIT_EXPR:jr});const Hr=1,Wr=3,Br=7,Yr=8,Gr=9;function*qr(e="id-",t=0){let n=t;for(;;)n+=1,yield e+n}function Xr(){const e=(document.currentScript&&document.currentScript.src||"").match(/(.*\/)/);return e&&e.length>0?e[0].substr(0,e[0].length-1):"/"}!function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window;const n=t=>e(t);if(n.version="3.2.4",n.removed=[],!t||!t.document||t.document.nodeType!==Gr||!t.Element)return n.isSupported=!1,n;let{document:r}=t;const a=r,i=a.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:f,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:d,DOMParser:m,trustedTypes:p}=t,h=c.prototype,g=vr(h,"cloneNode"),b=vr(h,"remove"),y=vr(h,"nextSibling"),v=vr(h,"childNodes"),x=vr(h,"parentNode");if("function"==typeof s){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let k,w="";const{implementation:S,createNodeIterator:A,createDocumentFragment:C,getElementsByTagName:N}=r,{importNode:O}=a;let E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof Bn&&"function"==typeof x&&S&&void 0!==S.createHTMLDocument;const{MUSTACHE_EXPR:T,ERB_EXPR:P,TMPLIT_EXPR:L,DATA_ATTR:I,ARIA_ATTR:j,IS_SCRIPT_OR_DATA:R,ATTR_WHITESPACE:_,CUSTOM_ELEMENT:z}=Ur;let{IS_ALLOWED_URI:D}=Ur,M=null;const F=gr({},[...xr,...kr,...wr,...Ar,...Nr]);let $=null;const U=gr({},[...Or,...Er,...Tr,...Pr]);let H=Object.seal(Zn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,B=null,Y=!0,G=!0,q=!1,X=!0,V=!1,K=!0,Z=!1,J=!1,Q=!1,ee=!1,te=!1,ne=!1,re=!0,ae=!1,ie=!0,oe=!1,se={},le=null;const ce=gr({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let fe=null;const ue=gr({},["audio","video","img","source","image","track"]);let de=null;const me=gr({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),pe="http://www.w3.org/1998/Math/MathML",he="http://www.w3.org/2000/svg",ge="http://www.w3.org/1999/xhtml";let be=ge,ye=!1,ve=null;const xe=gr({},[pe,he,ge],or);let ke=gr({},["mi","mo","mn","ms","mtext"]),we=gr({},["annotation-xml"]);const Se=gr({},["title","style","font","a","script"]);let Ae=null;const Ce=["application/xhtml+xml","text/html"];let Ne=null,Oe=null;const Ee=r.createElement("form"),Te=function(e){return e instanceof RegExp||e instanceof Function},Pe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Oe||Oe!==e){if(e&&"object"==typeof e||(e={}),e=yr(e),Ae=-1===Ce.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,Ne="application/xhtml+xml"===Ae?or:ir,M=ur(e,"ALLOWED_TAGS")?gr({},e.ALLOWED_TAGS,Ne):F,$=ur(e,"ALLOWED_ATTR")?gr({},e.ALLOWED_ATTR,Ne):U,ve=ur(e,"ALLOWED_NAMESPACES")?gr({},e.ALLOWED_NAMESPACES,or):xe,de=ur(e,"ADD_URI_SAFE_ATTR")?gr(yr(me),e.ADD_URI_SAFE_ATTR,Ne):me,fe=ur(e,"ADD_DATA_URI_TAGS")?gr(yr(ue),e.ADD_DATA_URI_TAGS,Ne):ue,le=ur(e,"FORBID_CONTENTS")?gr({},e.FORBID_CONTENTS,Ne):ce,W=ur(e,"FORBID_TAGS")?gr({},e.FORBID_TAGS,Ne):{},B=ur(e,"FORBID_ATTR")?gr({},e.FORBID_ATTR,Ne):{},se=!!ur(e,"USE_PROFILES")&&e.USE_PROFILES,Y=!1!==e.ALLOW_ARIA_ATTR,G=!1!==e.ALLOW_DATA_ATTR,q=e.ALLOW_UNKNOWN_PROTOCOLS||!1,X=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,V=e.SAFE_FOR_TEMPLATES||!1,K=!1!==e.SAFE_FOR_XML,Z=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,ne=e.RETURN_TRUSTED_TYPE||!1,Q=e.FORCE_BODY||!1,re=!1!==e.SANITIZE_DOM,ae=e.SANITIZE_NAMED_PROPS||!1,ie=!1!==e.KEEP_CONTENT,oe=e.IN_PLACE||!1,D=e.ALLOWED_URI_REGEXP||zr,be=e.NAMESPACE||ge,ke=e.MATHML_TEXT_INTEGRATION_POINTS||ke,we=e.HTML_INTEGRATION_POINTS||we,H=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Te(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Te(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(H.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),V&&(G=!1),te&&(ee=!0),se&&(M=gr({},Nr),$=[],!0===se.html&&(gr(M,xr),gr($,Or)),!0===se.svg&&(gr(M,kr),gr($,Er),gr($,Pr)),!0===se.svgFilters&&(gr(M,wr),gr($,Er),gr($,Pr)),!0===se.mathMl&&(gr(M,Ar),gr($,Tr),gr($,Pr))),e.ADD_TAGS&&(M===F&&(M=yr(M)),gr(M,e.ADD_TAGS,Ne)),e.ADD_ATTR&&($===U&&($=yr($)),gr($,e.ADD_ATTR,Ne)),e.ADD_URI_SAFE_ATTR&&gr(de,e.ADD_URI_SAFE_ATTR,Ne),e.FORBID_CONTENTS&&(le===ce&&(le=yr(le)),gr(le,e.FORBID_CONTENTS,Ne)),ie&&(M["#text"]=!0),Z&&gr(M,["html","head","body"]),M.table&&(gr(M,["tbody"]),delete W.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw mr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw mr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');k=e.TRUSTED_TYPES_POLICY,w=k.createHTML("")}else void 0===k&&(k=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML:e=>e,createScriptURL:e=>e})}catch(i){return console.warn("TrustedTypes policy "+a+" could not be created."),null}}(p,i)),null!==k&&"string"==typeof w&&(w=k.createHTML(""));Vn&&Vn(e),Oe=e}},Le=gr({},[...kr,...wr,...Sr]),Ie=gr({},[...Ar,...Cr]),je=function(e){rr(n.removed,{element:e});try{x(e).removeChild(e)}catch(t){b(e)}},Re=function(e,t){try{rr(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(r){rr(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(ee||te)try{je(t)}catch(r){}else try{t.setAttribute(e,"")}catch(r){}},_e=function(e){let t=null,n=null;if(Q)e="<remove></remove>"+e;else{const t=sr(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Ae&&be===ge&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const a=k?k.createHTML(e):e;if(be===ge)try{t=(new m).parseFromString(a,Ae)}catch(o){}if(!t||!t.documentElement){t=S.createDocument(be,"template",null);try{t.documentElement.innerHTML=ye?w:a}catch(o){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(r.createTextNode(n),i.childNodes[0]||null),be===ge?N.call(t,Z?"html":"body")[0]:Z?t.documentElement:i},ze=function(e){return A.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},De=function(e){return e instanceof d&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Me=function(e){return"function"==typeof l&&e instanceof l};function Fe(e,t,r){er(e,(e=>{e.call(n,t,r,Oe)}))}const $e=function(e){let t=null;if(Fe(E.beforeSanitizeElements,e,null),De(e))return je(e),!0;const r=Ne(e.nodeName);if(Fe(E.uponSanitizeElement,e,{tagName:r,allowedTags:M}),e.hasChildNodes()&&!Me(e.firstElementChild)&&dr(/<[/\w]/g,e.innerHTML)&&dr(/<[/\w]/g,e.textContent))return je(e),!0;if(e.nodeType===Br)return je(e),!0;if(K&&e.nodeType===Yr&&dr(/<[/\w]/g,e.data))return je(e),!0;if(!M[r]||W[r]){if(!W[r]&&He(r)){if(H.tagNameCheck instanceof RegExp&&dr(H.tagNameCheck,r))return!1;if(H.tagNameCheck instanceof Function&&H.tagNameCheck(r))return!1}if(ie&&!le[r]){const t=x(e)||e.parentNode,n=v(e)||e.childNodes;if(n&&t){for(let r=n.length-1;r>=0;--r){const a=g(n[r],!0);a.__removalCount=(e.__removalCount||0)+1,t.insertBefore(a,y(e))}}}return je(e),!0}return e instanceof c&&!function(e){let t=x(e);t&&t.tagName||(t={namespaceURI:be,tagName:"template"});const n=ir(e.tagName),r=ir(t.tagName);return!!ve[e.namespaceURI]&&(e.namespaceURI===he?t.namespaceURI===ge?"svg"===n:t.namespaceURI===pe?"svg"===n&&("annotation-xml"===r||ke[r]):Boolean(Le[n]):e.namespaceURI===pe?t.namespaceURI===ge?"math"===n:t.namespaceURI===he?"math"===n&&we[r]:Boolean(Ie[n]):e.namespaceURI===ge?!(t.namespaceURI===he&&!we[r])&&!(t.namespaceURI===pe&&!ke[r])&&!Ie[n]&&(Se[n]||!Le[n]):!("application/xhtml+xml"!==Ae||!ve[e.namespaceURI]))}(e)?(je(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!dr(/<\/no(script|embed|frames)/i,e.innerHTML)?(V&&e.nodeType===Wr&&(t=e.textContent,er([T,P,L],(e=>{t=lr(t,e," ")})),e.textContent!==t&&(rr(n.removed,{element:e.cloneNode()}),e.textContent=t)),Fe(E.afterSanitizeElements,e,null),!1):(je(e),!0)},Ue=function(e,t,n){if(re&&("id"===t||"name"===t)&&(n in r||n in Ee))return!1;if(G&&!B[t]&&dr(I,t));else if(Y&&dr(j,t));else if(!$[t]||B[t]){if(!(He(e)&&(H.tagNameCheck instanceof RegExp&&dr(H.tagNameCheck,e)||H.tagNameCheck instanceof Function&&H.tagNameCheck(e))&&(H.attributeNameCheck instanceof RegExp&&dr(H.attributeNameCheck,t)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(t))||"is"===t&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&dr(H.tagNameCheck,n)||H.tagNameCheck instanceof Function&&H.tagNameCheck(n))))return!1}else if(de[t]);else if(dr(D,lr(n,_,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==cr(n,"data:")||!fe[e]){if(q&&!dr(R,lr(n,_,"")));else if(n)return!1}else;return!0},He=function(e){return"annotation-xml"!==e&&sr(e,z)},We=function(e){Fe(E.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||De(e))return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:$,forceKeepAttr:void 0};let a=t.length;for(;a--;){const o=t[a],{name:s,namespaceURI:l,value:c}=o,f=Ne(s);let u="value"===s?c:fr(c);if(r.attrName=f,r.attrValue=u,r.keepAttr=!0,r.forceKeepAttr=void 0,Fe(E.uponSanitizeAttribute,e,r),u=r.attrValue,!ae||"id"!==f&&"name"!==f||(Re(s,e),u="user-content-"+u),K&&dr(/((--!?|])>)|<\/(style|title)/i,u)){Re(s,e);continue}if(r.forceKeepAttr)continue;if(Re(s,e),!r.keepAttr)continue;if(!X&&dr(/\/>/i,u)){Re(s,e);continue}V&&er([T,P,L],(e=>{u=lr(u,e," ")}));const d=Ne(e.nodeName);if(Ue(d,f,u)){if(k&&"object"==typeof p&&"function"==typeof p.getAttributeType)if(l);else switch(p.getAttributeType(d,f)){case"TrustedHTML":u=k.createHTML(u);break;case"TrustedScriptURL":u=k.createScriptURL(u)}try{l?e.setAttributeNS(l,s,u):e.setAttribute(s,u),De(e)?je(e):nr(n.removed)}catch(i){}}}Fe(E.afterSanitizeAttributes,e,null)},Be=function e(t){let n=null;const r=ze(t);for(Fe(E.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)Fe(E.uponSanitizeShadowNode,n,null),$e(n),We(n),n.content instanceof o&&e(n.content);Fe(E.afterSanitizeShadowDOM,t,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null,i=null,s=null,c=null;if(ye=!e,ye&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Me(e)){if("function"!=typeof e.toString)throw mr("toString is not a function");if("string"!=typeof(e=e.toString()))throw mr("dirty is not a string, aborting")}if(!n.isSupported)return e;if(J||Pe(t),n.removed=[],"string"==typeof e&&(oe=!1),oe){if(e.nodeName){const t=Ne(e.nodeName);if(!M[t]||W[t])throw mr("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)r=_e("\x3c!----\x3e"),i=r.ownerDocument.importNode(e,!0),i.nodeType===Hr&&"BODY"===i.nodeName||"HTML"===i.nodeName?r=i:r.appendChild(i);else{if(!ee&&!V&&!Z&&-1===e.indexOf("<"))return k&&ne?k.createHTML(e):e;if(r=_e(e),!r)return ee?null:ne?w:""}r&&Q&&je(r.firstChild);const f=ze(oe?e:r);for(;s=f.nextNode();)$e(s),We(s),s.content instanceof o&&Be(s.content);if(oe)return e;if(ee){if(te)for(c=C.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return($.shadowroot||$.shadowrootmode)&&(c=O.call(a,c,!0)),c}let u=Z?r.outerHTML:r.innerHTML;return Z&&M["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&dr(Fr,r.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+u),V&&er([T,P,L],(e=>{u=lr(u,e," ")})),k&&ne?k.createHTML(u):u},n.setConfig=function(){Pe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),J=!0},n.clearConfig=function(){Oe=null,J=!1},n.isValidAttribute=function(e,t,n){Oe||Pe({});const r=Ne(e),a=Ne(t);return Ue(r,a,n)},n.addHook=function(e,t){"function"==typeof t&&rr(E[e],t)},n.removeHook=function(e,t){if(void 0!==t){const n=tr(E[e],t);return-1===n?void 0:ar(E[e],n,1)[0]}return nr(E[e])},n.removeHooks=function(e){E[e]=[]},n.removeAllHooks=function(){E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}(),En.shape({event:En.string,action:En.string,name:En.string,region:En.string,section:En.string,component:En.string,type:En.string,text:En.string});const Vr=({event:e="",action:t="",name:n="",type:r="",section:a="",text:i="",region:o="",component:s=""})=>{const{dataLayer:l}=window,c={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:o.toLowerCase(),section:a.toLowerCase(),text:i.toLowerCase(),component:s.toLowerCase()};l&&l.push(c)},Kr={alt:En.string,title:En.string,src:En.string,mobileSrc:En.string,brandLink:En.string},Zr={baseUrl:En.string,parentOrg:En.string,parentOrgUrl:En.string,animate:En.bool},Jr={loggedIn:En.bool,loginLink:En.string,logoutLink:En.string,userName:En.string},Qr={text:En.string.isRequired,color:En.oneOf(["gold","maroon","light","dark"]),href:En.string.isRequired,classes:En.string,onClick:En.func},ea=En.shape({id:En.number,href:En.string,text:En.string,type:En.string,selected:En.bool,items:En.arrayOf(En.arrayOf(En.object)),buttons:En.arrayOf(En.shape(Qr)),class:En.string}),ta={isPartner:En.bool,navTree:En.arrayOf(ea),partnerLogo:En.shape(Kr),logo:En.shape(Kr),title:En.string,parentOrg:Zr.parentOrg,parentOrgUrl:Zr.parentOrgUrl,baseUrl:Zr.baseUrl,loggedIn:Jr.loggedIn,userName:Jr.userName,loginLink:Jr.loginLink,onLoginClick:En.func,logoutLink:Jr.logoutLink,onLogoutClick:En.func,buttons:En.arrayOf(En.shape(Qr)),breakpoint:En.oneOf(["Lg","Xl"]),animateTitle:En.bool,expandOnHover:En.bool,mobileNavTree:En.arrayOf(ea),hasNavigation:En.bool,searchUrl:En.string,site:En.string,renderDiv:En.oneOf(["true","false"])},na={Lg:"992px",Xl:"1260px"},ra=e.createContext(),aa=({initialValue:e,children:t})=>{const n={...e,breakpoint:na[e.breakpoint]};return o.jsx(ra.Provider,{value:n,children:t})};aa.propTypes={initialValue:En.shape(ta).isRequired,children:En.node.isRequired};const ia=()=>{const t=e.useContext(ra);if(void 0===t)throw new Error("useAppContext must be used within a AppContextProvider");return t},oa=t=>{const n=null==window?void 0:window.matchMedia(`(max-width: ${t})`),[r,a]=e.useState(null==n?void 0:n.matches),i=e=>{a(e.matches)};return e.useEffect((()=>(n.addEventListener("change",i),()=>n.removeEventListener("change",i))),[]),r};var sa,la={exports:{}},ca={};la.exports=function(){if(sa)return ca;sa=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),o=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),c=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),d=Symbol.for("react.offscreen"),m=Symbol.for("react.client.reference");function p(d){if("object"==typeof d&&null!==d){var m=d.$$typeof;switch(m){case e:switch(d=d.type){case n:case a:case r:case l:case c:return d;default:switch(d=d&&d.$$typeof){case o:case s:case u:case f:case i:return d;default:return m}}case t:return m}}}return ca.ContextConsumer=i,ca.ContextProvider=o,ca.Element=e,ca.ForwardRef=s,ca.Fragment=n,ca.Lazy=u,ca.Memo=f,ca.Portal=t,ca.Profiler=a,ca.StrictMode=r,ca.Suspense=l,ca.SuspenseList=c,ca.isContextConsumer=function(e){return p(e)===i},ca.isContextProvider=function(e){return p(e)===o},ca.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===e},ca.isForwardRef=function(e){return p(e)===s},ca.isFragment=function(e){return p(e)===n},ca.isLazy=function(e){return p(e)===u},ca.isMemo=function(e){return p(e)===f},ca.isPortal=function(e){return p(e)===t},ca.isProfiler=function(e){return p(e)===a},ca.isStrictMode=function(e){return p(e)===r},ca.isSuspense=function(e){return p(e)===l},ca.isSuspenseList=function(e){return p(e)===c},ca.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===a||e===r||e===l||e===c||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===u||e.$$typeof===f||e.$$typeof===o||e.$$typeof===i||e.$$typeof===s||e.$$typeof===m||void 0!==e.getModuleId)},ca.typeOf=p,ca}();var fa=la.exports;function ua(e){function t(e,r,l,c,d){for(var m,p,h,g,x,w=0,S=0,A=0,C=0,N=0,I=0,R=h=m=0,z=0,D=0,M=0,F=0,$=l.length,U=$-1,H="",W="",B="",Y="";z<$;){if(p=l.charCodeAt(z),z===U&&0!==S+C+A+w&&(0!==S&&(p=47===S?10:47),C=A=w=0,$++,U++),0===S+C+A+w){if(z===U&&(0<D&&(H=H.replace(u,"")),0<H.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:H+=l.charAt(z)}p=59}switch(p){case 123:for(m=(H=H.trim()).charCodeAt(0),h=1,F=++z;z<$;){switch(p=l.charCodeAt(z)){case 123:h++;break;case 125:h--;break;case 47:switch(p=l.charCodeAt(z+1)){case 42:case 47:e:{for(R=z+1;R<U;++R)switch(l.charCodeAt(R)){case 47:if(42===p&&42===l.charCodeAt(R-1)&&z+2!==R){z=R+1;break e}break;case 10:if(47===p){z=R+1;break e}}z=R}}break;case 91:p++;case 40:p++;case 34:case 39:for(;z++<U&&l.charCodeAt(z)!==p;);}if(0===h)break;z++}if(h=l.substring(F,z),0===m&&(m=(H=H.replace(f,"").trim()).charCodeAt(0)),64===m){switch(0<D&&(H=H.replace(u,"")),p=H.charCodeAt(1)){case 100:case 109:case 115:case 45:D=r;break;default:D=L}if(F=(h=t(r,D,h,p,d+1)).length,0<j&&(x=s(3,h,D=n(L,H,M),r,E,O,F,p,d,c),H=D.join(""),void 0!==x&&0===(F=(h=x.trim()).length)&&(p=0,h="")),0<F)switch(p){case 115:H=H.replace(k,o);case 100:case 109:case 45:h=H+"{"+h+"}";break;case 107:h=(H=H.replace(b,"$1 $2"))+"{"+h+"}",h=1===P||2===P&&i("@"+h,3)?"@-webkit-"+h+"@"+h:"@"+h;break;default:h=H+h,112===c&&(W+=h,h="")}else h=""}else h=t(r,n(r,H,M),h,c,d+1);B+=h,h=M=D=R=m=0,H="",p=l.charCodeAt(++z);break;case 125:case 59:if(1<(F=(H=(0<D?H.replace(u,""):H).trim()).length))switch(0===R&&(m=H.charCodeAt(0),45===m||96<m&&123>m)&&(F=(H=H.replace(" ",":")).length),0<j&&void 0!==(x=s(1,H,r,e,E,O,W.length,c,d,c))&&0===(F=(H=x.trim()).length)&&(H="\0\0"),m=H.charCodeAt(0),p=H.charCodeAt(1),m){case 0:break;case 64:if(105===p||99===p){Y+=H+l.charAt(z);break}default:58!==H.charCodeAt(F-1)&&(W+=a(H,m,p,H.charCodeAt(2)))}M=D=R=m=0,H="",p=l.charCodeAt(++z)}}switch(p){case 13:case 10:47===S?S=0:0===1+m&&107!==c&&0<H.length&&(D=1,H+="\0"),0<j*_&&s(0,H,r,e,E,O,W.length,c,d,c),O=1,E++;break;case 59:case 125:if(0===S+C+A+w){O++;break}default:switch(O++,g=l.charAt(z),p){case 9:case 32:if(0===C+w+S)switch(N){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===C+S+w&&(D=M=1,g="\f"+g);break;case 108:if(0===C+S+w+T&&0<R)switch(z-R){case 2:112===N&&58===l.charCodeAt(z-3)&&(T=N);case 8:111===I&&(T=I)}break;case 58:0===C+S+w&&(R=z);break;case 44:0===S+A+C+w&&(D=1,g+="\r");break;case 34:case 39:0===S&&(C=C===p?0:0===C?p:C);break;case 91:0===C+S+A&&w++;break;case 93:0===C+S+A&&w--;break;case 41:0===C+S+w&&A--;break;case 40:if(0===C+S+w){if(0===m)if(2*N+3*I==533);else m=1;A++}break;case 64:0===S+A+C+w+R+h&&(h=1);break;case 42:case 47:if(!(0<C+w+A))switch(S){case 0:switch(2*p+3*l.charCodeAt(z+1)){case 235:S=47;break;case 220:F=z,S=42}break;case 42:47===p&&42===N&&F+2!==z&&(33===l.charCodeAt(F+2)&&(W+=l.substring(F,z+1)),g="",S=0)}}0===S&&(H+=g)}I=N,N=p,z++}if(0<(F=W.length)){if(D=r,0<j&&(void 0!==(x=s(2,W,D,e,E,O,F,c,d,c))&&0===(W=x).length))return Y+W+B;if(W=D.join(",")+"{"+W+"}",0!=P*T){switch(2!==P||i(W,2)||(T=0),T){case 111:W=W.replace(v,":-moz-$1")+W;break;case 112:W=W.replace(y,"::-webkit-input-$1")+W.replace(y,"::-moz-$1")+W.replace(y,":-ms-input-$1")+W}T=0}}return Y+W+B}function n(e,t,n){var a=t.trim().split(h);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<i;++s)t[s]=r(e,t[s],n).trim();break;default:var l=s=0;for(t=[];s<i;++s)for(var c=0;c<o;++c)t[l++]=r(e[c]+" ",a[s],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,n,r){var o=e+";",s=2*t+3*n+4*r;if(944===s){e=o.indexOf(":",9)+1;var l=o.substring(e,o.length-1).trim();return l=o.substring(0,e).trim()+l+";",1===P||2===P&&i(l,1)?"-webkit-"+l+l:l}if(0===P||2===P&&!i(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(N,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(l=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+l+o;case 1005:return m.test(o)?o.replace(d,":-webkit-")+o.replace(d,":-moz-")+o:o;case 1e3:switch(t=(l=o.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=o.replace(x,"tb");break;case 232:l=o.replace(x,"tb-rl");break;case 220:l=o.replace(x,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+l+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(l=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:o=o.replace(l,"-webkit-"+l)+";"+o;break;case 207:case 102:o=o.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(l,"-webkit-"+l)+";"+o.replace(l,"-ms-"+l+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return l=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+l+"-ms-flex-"+l+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(S,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(S,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):o.replace(l,"-webkit-"+l)+o.replace(l,"-moz-"+l.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+r&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function i(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),R(2!==t?r:r.replace(A,"$1"),n,t)}function o(e,t){var n=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(w," or ($1)").substring(4):"("+t+")"}function s(e,t,n,r,a,i,o,s,l,f){for(var u,d=0,m=t;d<j;++d)switch(u=I[d].call(c,e,m,n,r,a,i,o,s,l,f)){case void 0:case!1:case!0:case null:break;default:m=u}if(m!==t)return m}function l(e){return void 0!==(e=e.prefix)&&(R=null,e?"function"!=typeof e?P=1:(P=2,R=e):P=0),l}function c(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<j){var a=s(-1,n,r,r,E,O,0,0,0,0);void 0!==a&&"string"==typeof a&&(n=a)}var i=t(L,r,n,0,0);return 0<j&&(void 0!==(a=s(-2,i,r,r,E,O,i.length,0,0,0))&&(i=a)),T=0,O=E=1,i}var f=/^\0+/g,u=/[\0\r\f]/g,d=/: */g,m=/zoo|gra/,p=/([,: ])(transform)/g,h=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,v=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,S=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,N=/([^-])(image-set\()/,O=1,E=1,T=0,P=1,L=[],I=[],j=0,R=null,_=0;return c.use=function e(t){switch(t){case void 0:case null:j=I.length=0;break;default:if("function"==typeof t)I[j++]=t;else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else _=0|!!t}return e},c.set=l,void 0!==e&&l(e),c}var da={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ma(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var pa,ha=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ga=ma((function(e){return ha.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),ba={exports:{}},ya={};ba.exports=function(){if(pa)return ya;pa=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var d=e.$$typeof;switch(d){case t:switch(e=e.type){case l:case c:case r:case i:case a:case u:return e;default:switch(e=e&&e.$$typeof){case s:case f:case p:case m:case o:return e;default:return d}}case n:return d}}}function x(e){return v(e)===c}return ya.AsyncMode=l,ya.ConcurrentMode=c,ya.ContextConsumer=s,ya.ContextProvider=o,ya.Element=t,ya.ForwardRef=f,ya.Fragment=r,ya.Lazy=p,ya.Memo=m,ya.Portal=n,ya.Profiler=i,ya.StrictMode=a,ya.Suspense=u,ya.isAsyncMode=function(e){return x(e)||v(e)===l},ya.isConcurrentMode=x,ya.isContextConsumer=function(e){return v(e)===s},ya.isContextProvider=function(e){return v(e)===o},ya.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},ya.isForwardRef=function(e){return v(e)===f},ya.isFragment=function(e){return v(e)===r},ya.isLazy=function(e){return v(e)===p},ya.isMemo=function(e){return v(e)===m},ya.isPortal=function(e){return v(e)===n},ya.isProfiler=function(e){return v(e)===i},ya.isStrictMode=function(e){return v(e)===a},ya.isSuspense=function(e){return v(e)===u},ya.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===i||e===a||e===u||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===m||e.$$typeof===o||e.$$typeof===s||e.$$typeof===f||e.$$typeof===g||e.$$typeof===b||e.$$typeof===y||e.$$typeof===h)},ya.typeOf=v,ya}();var va=ba.exports,xa={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ka={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wa={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sa={};function Aa(e){return va.isMemo(e)?wa:Sa[e.$$typeof]||xa}Sa[va.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Sa[va.Memo]=wa;var Ca=Object.defineProperty,Na=Object.getOwnPropertyNames,Oa=Object.getOwnPropertySymbols,Ea=Object.getOwnPropertyDescriptor,Ta=Object.getPrototypeOf,Pa=Object.prototype;var La=function e(t,n,r){if("string"!=typeof n){if(Pa){var a=Ta(n);a&&a!==Pa&&e(t,a,r)}var i=Na(n);Oa&&(i=i.concat(Oa(n)));for(var o=Aa(t),s=Aa(n),l=0;l<i.length;++l){var c=i[l];if(!(ka[c]||r&&r[c]||s&&s[c]||o&&o[c])){var f=Ea(n,c);try{Ca(t,c,f)}catch($o){}}}}return t};const Ia=n(La);var ja={env:{NODE_ENV:"production"}};function Ra(){return(Ra=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _a=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},za=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!fa.typeOf(e)},Da=Object.freeze([]),Ma=Object.freeze({});function Fa(e){return"function"==typeof e}function $a(e){return e.displayName||e.name||"Component"}function Ua(e){return e&&"string"==typeof e.styledComponentId}var Ha=void 0!==ja.env&&(ja.env.REACT_APP_SC_ATTR||ja.env.SC_ATTR)||"data-styled",Wa="undefined"!=typeof window&&"HTMLElement"in window,Ba=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==ja.env&&(void 0!==ja.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==ja.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==ja.env.REACT_APP_SC_DISABLE_SPEEDY&&ja.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==ja.env.SC_DISABLE_SPEEDY&&""!==ja.env.SC_DISABLE_SPEEDY?"false"!==ja.env.SC_DISABLE_SPEEDY&&ja.env.SC_DISABLE_SPEEDY:"production"!==ja.env.NODE_ENV));function Ya(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Ga=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)(a<<=1)<0&&Ya(16,""+e);this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),s=0,l=t.length;s<l;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),qa=new Map,Xa=new Map,Va=1,Ka=function(e){if(qa.has(e))return qa.get(e);for(;Xa.has(Va);)Va++;var t=Va++;return qa.set(e,t),Xa.set(t,e),t},Za=function(e){return Xa.get(e)},Ja=function(e,t){t>=Va&&(Va=t+1),qa.set(e,t),Xa.set(t,e)},Qa="style["+Ha+'][data-styled-version="5.3.11"]',ei=new RegExp("^"+Ha+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ti=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},ni=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var s=o.match(ei);if(s){var l=0|parseInt(s[1],10),c=s[2];0!==l&&(Ja(c,l),ti(e,c,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},ri=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(Ha))return r}}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(Ha,"active"),r.setAttribute("data-styled-version","5.3.11");var o="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},ai=function(){function e(e){var t=this.element=ri(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}Ya(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(n){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),ii=function(){function e(e){var t=this.element=ri(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),oi=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),si=Wa,li={isServer:!Wa,useCSSOMInjection:!Ba},ci=function(){function e(e,t,n){void 0===e&&(e=Ma),void 0===t&&(t={}),this.options=Ra({},li,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Wa&&si&&(si=!1,function(e){for(var t=document.querySelectorAll(Qa),n=0,r=t.length;n<r;n++){var a=t[n];a&&"active"!==a.getAttribute(Ha)&&(ni(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(e){return Ka(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Ra({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,a=t.target,e=n?new oi(a):r?new ai(a):new ii(a),new Ga(e)));var e,t,n,r,a},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(Ka(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Ka(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(Ka(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=0;a<n;a++){var i=Za(a);if(void 0!==i){var o=e.names.get(i),s=t.getGroup(a);if(o&&s&&o.size){var l=Ha+".g"+a+'[id="'+i+'"]',c="";void 0!==o&&o.forEach((function(e){e.length>0&&(c+=e+",")})),r+=""+s+l+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),fi=/(a)(d)/gi,ui=function(e){return String.fromCharCode(e+(e>25?39:97))};function di(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ui(t%52)+n;return(ui(t%52)+n).replace(fi,"$1-$2")}var mi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},pi=function(e){return mi(5381,e)};var hi=pi("5.3.11"),gi=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Fa(n)&&!Ua(n))return!1}return!0}(e),this.componentId=t,this.baseHash=mi(hi,t),this.baseStyle=n,ci.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))a.push(this.staticRulesId);else{var i=Pi(this.rules,e,t,n).join(""),o=di(mi(this.baseHash,i)>>>0);if(!t.hasNameForId(r,o)){var s=n(i,"."+o,void 0,r);t.insertRules(r,o,s)}a.push(o),this.staticRulesId=o}else{for(var l=this.rules.length,c=mi(this.baseHash,n.hash),f="",u=0;u<l;u++){var d=this.rules[u];if("string"==typeof d)f+=d;else if(d){var m=Pi(d,e,t,n),p=Array.isArray(m)?m.join(""):m;c=mi(c,p+u),f+=p}}if(f){var h=di(c>>>0);if(!t.hasNameForId(r,h)){var g=n(f,"."+h,void 0,r);t.insertRules(r,h,g)}a.push(h)}}return a.join(" ")},e}(),bi=/^\s*\/\/.*$/gm,yi=[":","[",".","#"];var vi=e.createContext();vi.Consumer;var xi=e.createContext(),ki=(xi.Consumer,new ci),wi=function(){var e,t,n,r,a=Ma,i=a.options,o=void 0===i?Ma:i,s=a.plugins,l=void 0===s?Da:s,c=new ua(o),f=[],u=function(e){function t(t){if(t)try{e(t+"}")}catch(n){}}return function(n,r,a,i,o,s,l,c,f,u){switch(n){case 1:if(0===f&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(a[0]+r),"";default:return r+(0===u?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){f.push(e)})),d=function(n,a,i){return 0===a&&-1!==yi.indexOf(i[t.length])||i.match(r)?n:"."+e};function m(a,i,o,s){void 0===s&&(s="&");var l=a.replace(bi,""),f=i&&o?o+" "+i+" { "+l+" }":l;return e=s,t=i,n=new RegExp("\\"+t+"\\b","g"),r=new RegExp("(\\"+t+"\\b){2,}"),c(o||!i?"":i,f)}return c.use([].concat(l,[function(e,r,a){2===e&&a.length&&a[0].lastIndexOf(t)>0&&(a[0]=a[0].replace(n,d))},u,function(e){if(-2===e){var t=f;return f=[],t}}])),m.hash=l.length?l.reduce((function(e,t){return t.name||Ya(15),mi(e,t.name)}),5381).toString():"",m}();var Si=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=wi);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return Ya(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=wi),this.name+e.hash},e}(),Ai=/([A-Z])/,Ci=/([A-Z])/g,Ni=/^ms-/,Oi=function(e){return"-"+e.toLowerCase()};function Ei(e){return Ai.test(e)?e.replace(Ci,Oi).replace(Ni,"-ms-"):e}var Ti=function(e){return null==e||!1===e||""===e};function Pi(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,s=e.length;o<s;o+=1)""!==(a=Pi(e[o],t,n,r))&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}return Ti(e)?"":Ua(e)?"."+e.styledComponentId:Fa(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:Pi(e(t),t,n,r):e instanceof Si?n?(e.inject(n,r),e.getName(r)):e:za(e)?function e(t,n){var r,a,i=[];for(var o in t)t.hasOwnProperty(o)&&!Ti(t[o])&&(Array.isArray(t[o])&&t[o].isCss||Fa(t[o])?i.push(Ei(o)+":",t[o],";"):za(t[o])?i.push.apply(i,e(t[o],o)):i.push(Ei(o)+": "+(r=o,(null==(a=t[o])||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||r in da||r.startsWith("--")?String(a).trim():a+"px")+";")));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString();var l}var Li=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ii(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Fa(e)||za(e)?Li(Pi(_a(Da,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Li(Pi(_a(e,n)))}var ji=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ri=/(^-|-$)/g;function _i(e){return e.replace(ji,"-").replace(Ri,"")}function zi(e){return"string"==typeof e&&"production"===ja.env.NODE_ENV}var Di=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Mi=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Fi(e,t,n){var r=e[n];Di(t)&&Di(r)?$i(r,t):e[n]=t}function $i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(Di(o))for(var s in o)Mi(s)&&Fi(e,o[s],s)}return e}var Ui=e.createContext();Ui.Consumer;var Hi={};function Wi(t,n,r){var a,i=Ua(t),o=!zi(t),s=n.attrs,l=void 0===s?Da:s,c=n.componentId,f=void 0===c?function(e,t){var n="string"!=typeof e?"sc":_i(e);Hi[n]=(Hi[n]||0)+1;var r=n+"-"+function(e){return di(pi(e)>>>0)}("5.3.11"+n+Hi[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):c,u=n.displayName,d=void 0===u?zi(a=t)?"styled."+a:"Styled("+$a(a)+")":u,m=n.displayName&&n.componentId?_i(n.displayName)+"-"+n.componentId:n.componentId||f,p=i&&t.attrs?Array.prototype.concat(t.attrs,l).filter(Boolean):l,h=n.shouldForwardProp;i&&t.shouldForwardProp&&(h=n.shouldForwardProp?function(e,r,a){return t.shouldForwardProp(e,r,a)&&n.shouldForwardProp(e,r,a)}:t.shouldForwardProp);var g,b=new gi(r,m,i?t.componentStyle:void 0),y=b.isStatic&&0===l.length,v=function(t,n){return function(t,n,r,a){var i,o,s,l,c,f=t.attrs,u=t.componentStyle,d=t.defaultProps,m=t.foldedComponentIds,p=t.shouldForwardProp,h=t.styledComponentId,g=t.target,b=function(e,t,n){void 0===e&&(e=Ma);var r=Ra({},t,{theme:e}),a={};return n.forEach((function(e){var t,n,i,o=e;for(t in Fa(o)&&(o=o(r)),o)r[t]=a[t]="className"===t?(n=a[t],i=o[t],n&&i?n+" "+i:n||i):o[t]})),[r,a]}(function(e,t,n){return void 0===n&&(n=Ma),e.theme!==n.theme&&e.theme||t||n.theme}(n,e.useContext(Ui),d)||Ma,n,f),y=b[0],v=b[1],x=(i=u,o=a,s=y,l=e.useContext(vi)||ki,c=e.useContext(xi)||wi,o?i.generateAndInjectStyles(Ma,l,c):i.generateAndInjectStyles(s,l,c)),k=r,w=v.$as||n.$as||v.as||n.as||g,S=zi(w),A=v!==n?Ra({},n,{},v):n,C={};for(var N in A)"$"!==N[0]&&"as"!==N&&("forwardedAs"===N?C.as=A[N]:(p?p(N,ga,w):!S||ga(N))&&(C[N]=A[N]));return n.style&&v.style!==n.style&&(C.style=Ra({},n.style,{},v.style)),C.className=Array.prototype.concat(m,h,x!==h?x:null,n.className,v.className).filter(Boolean).join(" "),C.ref=k,e.createElement(w,C)}(g,t,n,y)};return v.displayName=d,(g=e.forwardRef(v)).attrs=p,g.componentStyle=b,g.displayName=d,g.shouldForwardProp=h,g.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Da,g.styledComponentId=m,g.target=i?t.target:t,g.withComponent=function(e){var t=n.componentId,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["componentId"]),i=t&&t+"-"+(zi(e)?e:_i($a(e)));return Wi(e,Ra({},a,{attrs:p,componentId:i}),r)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?$i({},t.defaultProps,e):e}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&Ia(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Bi=function(e){return function e(t,n,r){if(void 0===r&&(r=Ma),!fa.isValidElementType(n))return Ya(1,String(n));var a=function(){return t(n,r,Ii.apply(void 0,arguments))};return a.withConfig=function(a){return e(t,n,Ra({},r,{},a))},a.attrs=function(a){return e(t,n,Ra({},r,{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},a}(Wi,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Bi[e]=Bi(e)}));const Yi=Bi.div`
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
`,Gi=Bi.div`
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
`,qi={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar"},Xi=()=>{const{loggedIn:e,userName:t,logoutLink:n,loginLink:r,onLoginClick:a,onLogoutClick:i,breakpoint:s}=ia();return o.jsx(Gi,{className:"nav-link login-status",breakpoint:s,children:e?o.jsxs(o.Fragment,{children:[t?o.jsx("span",{className:"name","data-testid":"user-name",children:t}):"",o.jsx("a",{className:"signout",href:n,onClick:e=>{Vr({...qi,text:"sign out"}),null==i||i(e)},children:"Sign Out"})]}):o.jsx("a",{href:r,onClick:e=>{Vr({...qi,text:"sign in"}),null==a||a(e)},children:"Sign In"})})},Vi=Bi.form`
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
`,Ki={event:"search",action:"type",name:"onenter",type:"main search",region:"navbar",section:"topbar"},Zi=()=>{const{breakpoint:t,searchUrl:n,site:r}=ia(),a=oa(t),i=e.useRef(null),[s,l]=e.useState(!1);e.useEffect((()=>{s&&i.current.focus()}),[s]);const f=()=>{l((e=>{const t=!e;return Vr({...Ki,event:"link",action:"click",name:"onclick",text:t?"search icon":"close search icon"}),t}))};return o.jsxs(Vi,{breakpoint:t,action:n,onSubmit:e=>{const t=e.target;e.preventDefault(),Vr({...Ki,text:e.target.elements.q.value}),setTimeout((()=>{t.submit()}),100)},method:"get",name:"gs",className:s?"open-search":"","data-testid":"universal-nav-search-form",children:[a?o.jsxs("label",{children:[o.jsx(Hn,{icon:c}),o.jsx("input",{ref:i,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0,onChange:e=>Vr({...Ki,text:e.target.value})})]}):o.jsxs(o.Fragment,{children:[o.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:f,className:"search-button","data-testid":"search-button",children:o.jsx(Hn,{icon:c})}),s&&o.jsxs(o.Fragment,{children:[o.jsx("input",{ref:i,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0}),o.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:f,className:"close-search","data-testid":"close-search",children:o.jsx(Hn,{icon:u})})]})]}),o.jsx("input",{name:"url_host",value:r,type:"hidden"}),o.jsx("input",{name:"site",value:"default_collection",type:"hidden"}),o.jsx("input",{name:"sort",value:"date:D:L:d1",type:"hidden"}),o.jsx("input",{name:"output",value:"xml_no_dtd",type:"hidden"}),o.jsx("input",{name:"ie",value:"UTF-8",type:"hidden"}),o.jsx("input",{name:"oe",value:"UTF-8",type:"hidden"}),o.jsx("input",{name:"client",value:"asu_frontend",type:"hidden"}),o.jsx("input",{name:"proxystylesheet",value:"asu_frontend",type:"hidden"})]})},Ji={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar",text:""},Qi=()=>{const{breakpoint:e}=ia();const t=[{className:"nav-link visually-hidden-focusable",href:"#skip-to-content",text:"Skip to main content"},{className:"nav-link visually-hidden-focusable",href:`https://accessibility.asu.edu/report?a11yref=${function(){try{return window.location.href}catch(e){return console.error(e),""}}()}`,text:"Report an accessibility problem"},{className:"nav-link",href:"https://asu.edu",text:"ASU Home"},{className:"nav-link",href:"https://my.asu.edu",text:"My ASU"},{className:"nav-link",href:"https://www.asu.edu/academics/colleges-schools",text:"Colleges and Schools"}];return o.jsx(Yi,{breakpoint:e,className:"universal-nav","data-testid":"universal-navbar","data-elastic-exclude":"data-elastic-exclude",children:o.jsx("div",{className:"container-xl",children:o.jsx("div",{className:"header-top",children:o.jsxs("nav",{className:"nav","aria-label":"ASU Global",children:[o.jsxs("div",{className:"links-container",children:[t.map((e=>o.jsx("a",{className:e.className,href:e.href,onClick:()=>Vr({...Ji,text:e.text}),children:e.text},e.href))),o.jsx(Xi,{})]}),o.jsx(Zi,{})]})})})})},eo=Bi.div`
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
`,to=Bi.a`
  display: unset;
  padding: 0;
  margin: 0;
  font-size: unset;
  line-height: unset;
  white-space: unset;
`,no=Xr(),ro=`${no}/assets/img/arizona-state-university-logo-vertical.png`,ao=`${no}/assets/img/arizona-state-university-logo.png`,io=()=>{const{logo:e}=ia();return o.jsxs(to,{href:(null==e?void 0:e.brandLink)??"https://asu.edu",className:"navbar-brand","data-testid":"logo",onClick:()=>Vr({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"asu logo"}),children:[o.jsx("img",{className:"vert",src:(null==e?void 0:e.src)??ro,alt:(null==e?void 0:e.alt)??"Arizona State University",title:(null==e?void 0:e.title)??"ASU home page",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),o.jsx("img",{className:"horiz",src:(null==e?void 0:e.mobileSrc)??ao,alt:(null==e?void 0:e.alt)??"Arizona State University",title:(null==e?void 0:e.title)??"ASU home page",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})},oo=Bi.a`
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
`,so=({href:e,color:t,text:n,classes:r,onClick:a})=>o.jsx(oo,{href:e,...e?{}:{tabIndex:0},className:`button-${t} ${r??""}`,onClick:a,children:n});so.propTypes={...Qr};const lo=Bi.nav`
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
`,co=Bi.div`
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
`,fo={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},uo=({text:e})=>o.jsx("h3",{className:"ul-heading",children:e});uo.propTypes={text:En.string};const mo=({link:e,dropdownName:t,handleLinkEvent:n})=>o.jsx("li",{className:"nav-button",children:o.jsx(so,{text:e.text,color:e.color||"dark",href:e.href,onClick:t=>n(t,e),onKeyDown:n,onFocus:()=>Vr({text:e.text,component:t}),"data-testid":"submenu-item"})});mo.propTypes={link:En.shape({text:En.string,color:En.string,href:En.string}),dropdownName:En.string,handleLinkEvent:En.func};const po=({link:e,dropdownName:t,handleLinkEvent:n})=>o.jsx("li",{className:"nav-link",children:o.jsx("a",{...e.href?{}:{tabIndex:0},href:e.href,onClick:t=>n(t,e),onKeyDown:t=>n(t,e),onFocus:()=>Vr({text:e.text,component:t}),"data-testid":"submenu-item",children:e.text})});po.propTypes={link:En.shape({text:En.string,href:En.string}),dropdownName:En.string,handleLinkEvent:En.func};const ho=({dropdownName:t,items:n,buttons:r,classes:a,listId:i,setItemOpened:s,parentLink:l})=>{const{breakpoint:c}=ia(),f=(null==n?void 0:n.length)>2,u=e.useRef(null),[d,m]=e.useState(!1),p=(null==n?void 0:n.length)>1;e.useEffect((()=>{if(window&&u.current){const e=u.current.getBoundingClientRect().left,t=.55*window.innerWidth;m(e>t)}}),[]);const h=e=>e.stopPropagation(),g=(e,t)=>{var n;const{key:r,type:a,target:i}=e,{parentElement:o}=i;h(e),"ArrowDown"===r?(e.preventDefault(),(()=>{var e;const t=null==(e=o.nextElementSibling)?void 0:e.firstChild;t&&t.focus()})()):"ArrowUp"===r?(e.preventDefault(),(()=>{var e;const t=null==(e=o.previousElementSibling)?void 0:e.firstChild;t&&t.focus()})()):"Escape"===r?(s(),l&&l.focus()):"Enter"!==r&&" "!==r&&"click"!==a||(null==(n=null==t?void 0:t.onClick)||n.call(t,e),Vr({...fo,text:t.text}))};return o.jsxs(co,{ref:u,className:`${a}${d?" aligned-right":""}${f?" mega":""}`,breakpoint:c,children:[o.jsx("div",{id:p?i:null,className:"dropdown-container",children:null==n?void 0:n.map(((e,n)=>{const r=qr(`dropdown-item-${n}-`).next().value;return o.jsx("ul",{id:p?`${i}-${r}`:i,children:e.map(((e,n)=>((e,n)=>{const r=`${e.text}-${e.href||n}`;return"heading"===e.type?o.jsx(uo,{text:e.text},r):"button"===e.type?o.jsx(mo,{link:e,dropdownName:t,handleLinkEvent:g},r):o.jsx(po,{link:e,dropdownName:t,handleLinkEvent:g},r)})(e,n)))},r)}))}),r&&o.jsx("div",{className:"dropdown-button-container",children:o.jsx("div",{children:r.map(((e,t)=>o.jsx(so,{color:e.color,text:e.text,href:e.href,onClick:h},`${e.text}-${e.href||t}`)))})})]})};ho.propTypes={dropdownName:En.string,items:En.arrayOf(En.arrayOf(En.shape({text:En.string,selected:En.bool,onClick:En.func,href:En.string}))),buttons:En.arrayOf(En.shape(Qr)),classes:En.string,listId:En.string,setItemOpened:En.func,parentLink:En.shape({focus:En.func})};const go=Bi.li`
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
`,bo={event:"collapse",type:"click"},yo={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},vo=({children:e})=>o.jsxs(o.Fragment,{children:[o.jsx(Hn,{icon:l,className:"icon-nav-item",alt:""}),o.jsx("span",{className:"mobile-only",children:e})]});vo.propTypes={children:En.node};const xo=({link:t,setItemOpened:n,itemOpened:r})=>{const a=e.useRef(null),i=e.useRef(null),s=t.id===r,{breakpoint:l,expandOnHover:c,title:u}=ia(),d=oa(l);e.useEffect((()=>{const e=e=>{var t;s&&!(null==(t=null==a?void 0:a.current)?void 0:t.contains(e.target))&&n()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[s]);const m=e.useMemo((()=>{var e;return"icon-home"===t.type?o.jsx(vo,{children:t.text}):o.jsxs("span",{children:[t.text,!!(null==(e=t.items)?void 0:e.length)&&o.jsx(Hn,{icon:f,className:"chevron-icon "+(s?"open":""),alt:""})]})}),[t]),p=()=>{var e;const n=!!(null==(e=t.items)?void 0:e.length),r=s?"close":"open",{text:a}=t;Vr(n?{...yo,...bo,action:r,text:a}:{...yo,text:"icon-home"===t.type?"home button":a})},h=e=>{var r,a;if(!t.items&&t.href)return void Vr({...yo,text:t.text});const{key:i}=e;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"," ","Escape","Click"].includes(i)){if(e.preventDefault(),"Escape"===i&&s)return void n();if("Enter"!==i&&" "!==i||(t.items&&(c||d?d&&n():n()),p(),null==(r=t.onClick)||r.call(t,e)),("ArrowDown"===i||"ArrowRight"===i)&&s){const e=document.querySelectorAll(`.header-dropdown-${t.id} li.nav-link a`);e.length&&e[0].focus()}}else"click"===e.type&&t.items?(e.preventDefault(),p(),n()):"click"===e.type&&(p(),null==(a=t.onClick)||a.call(t,e))},g=()=>{c&&!d&&(n(),p())};return o.jsxs(go,{breakpoint:l,ref:a,onMouseEnter:g,onMouseLeave:g,children:[o.jsx("a",{onKeyDown:h,onClick:h,href:t.href,...t.items?{"aria-expanded":s}:{},...t.href?{}:{tabIndex:0},"aria-owns":t.items?`dropdown-${t.id}`:null,className:`${t.class?t.class:""}${t.selected?" nav-item-selected":""}${s?" open-link":""}`,"data-testid":"nav-item",title:"icon-home"===t.type&&u?`${u} home page`:t.text,ref:i,children:m}),t.items&&o.jsx(ho,{items:t.items,buttons:t.buttons,dropdownName:t.text,classes:`header-dropdown-${t.id} ${s?"opened":""}`,listId:`dropdown-${t.id}`,setItemOpened:n,parentLink:null==i?void 0:i.current})]})};xo.propTypes={link:ea,setItemOpened:En.func,itemOpened:En.number};const ko=()=>{const{navTree:t,mobileNavTree:n,buttons:r,breakpoint:a}=ia(),i=oa(a),[s,l]=e.useState(void 0),c=(e,t)=>{const n={...e,id:t},r=qr(`${e.text}-${t}-`).next().value;return o.jsx(xo,{link:n,setItemOpened:()=>{return e=t,void l((t=>s===e?void 0:e));var e},itemOpened:s},r)};return o.jsxs(lo,{breakpoint:a,"data-testid":"navigation","aria-label":"Site",children:[((null==t?void 0:t.length)||(null==n?void 0:n.length)||(null==r?void 0:r.length))&&o.jsxs("div",{className:"content-container",children:[((null==t?void 0:t.length)||(null==n?void 0:n.length))&&o.jsx("ul",{className:"nav-list",children:(null==n?void 0:n.length)&&i?null==n?void 0:n.map(((e,t)=>c(e,t))):null==t?void 0:t.map(((e,t)=>c(e,t)))}),!!(null==r?void 0:r.length)&&o.jsx("form",{className:"buttons-container","data-testid":"buttons-container",children:null==r?void 0:r.map((t=>e.createElement(so,{...t,key:t.text,onClick:()=>Vr({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:t.text})})))})]}),i&&o.jsx(Qi,{})]})},wo=Bi.div`
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
`,So=Xr(),Ao=`${So}/assets/img/arizona-state-university-logo-vertical.png`,Co=`${So}/assets/img/arizona-state-university-logo.png`,No=`${So}/assets/img/asu-starbucks.png`,Oo=()=>{const{partnerLogo:e,logo:t,breakpoint:n}=ia();return o.jsxs(wo,{breakpoint:n,"data-testid":"partner",children:[o.jsx("a",{href:(null==e?void 0:e.brandLink)??"https://starbucks.asu.edu/",onClick:()=>Vr({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"partner logo"}),children:o.jsx("img",{src:(null==e?void 0:e.src)??No,alt:(null==e?void 0:e.alt)??"ASU Starbucks logo",width:"232",height:"81",decoding:"async",fetchpriority:"high"})}),o.jsxs("a",{href:(null==t?void 0:t.brandLink)??"https://asu.edu",onClick:()=>Vr({text:"asu logo"}),children:[o.jsx("img",{className:"vert",src:(null==t?void 0:t.src)??Ao,alt:(null==t?void 0:t.alt)??"Arizona State University",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),o.jsx("img",{className:"horiz",src:(null==t?void 0:t.mobileSrc)??Co,alt:(null==t?void 0:t.alt)??"Arizona State University",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})]})},Eo=e=>{const t=new Date,n=e||window.location.hostname,r=localStorage.getItem("title_loaded"),a=t.getTime()>parseInt(r,10),i="localhost"===n,o=document.referrer.includes(n);if(i||!o&&(!r||a)){const e=((e,t)=>{const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n})(t,10).getTime();return localStorage.setItem("title_loaded",e.toString()),!0}return!1},To={"992px":"993px","1260px":"1261px"},Po=Bi.div`
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

  @media (min-width: ${({breakpoint:e})=>To[e]}) {
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
`,Lo=()=>{const[t,n]=e.useState(!1),{title:r,parentOrg:a,parentOrgUrl:i,baseUrl:s,breakpoint:l,animateTitle:c}=ia();return e.useEffect((()=>{if(!1!==c){let e="/"===s?window.location.hostname:s;e.includes(window.location.hostname)||0!==e.indexOf("/")||(e=window.location.hostname+e),Eo(e)&&n(!0)}}),[t,c,s]),a?o.jsxs(Po,{breakpoint:l,className:"title","data-testid":"title",children:[o.jsx("a",{className:"unit-name",href:i,onClick:()=>Vr({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:a}),title:`${a} home page`,children:a}),o.jsx("a",{className:"subunit-name "+(t?"active":""),href:s,onClick:()=>Vr({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:r}),title:`${r} home page`,children:r})]}):o.jsx(Po,{breakpoint:l,className:"title","data-testid":"title",children:o.jsx("a",{className:"title-subunit-name "+(t?"active":""),href:s,onClick:()=>Vr({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:r}),title:`${r} home page`,children:r})})};Lo.propTypes={...Zr};const Io=()=>{const{breakpoint:t,isPartner:n,hasNavigation:r}=ia(),[a,i]=e.useState(!1),l=oa(t);return o.jsxs(o.Fragment,{children:[!l&&o.jsx(Qi,{}),o.jsx(eo,{breakpoint:t,children:o.jsx("div",{className:"container-xl",children:o.jsx("div",{className:"header-main",children:o.jsxs("div",{className:"navbar navbar-expand-xl "+(n?"partner":""),children:[!n&&o.jsx(io,{}),o.jsx("button",{className:"navbar-toggler"+(a?"":" collapsed"),type:"button",onClick:()=>{i((e=>!e)),Vr({event:"collapse",action:a?"close":"open",type:"click",text:"menu button tablet"})},"aria-label":"Toggle navigation",children:o.jsx(Hn,{icon:a?u:s,alt:""})}),o.jsxs("div",{className:`${n?"":"expand-title"}${r?"":" no-navigation"}`,children:[n?o.jsx(Oo,{}):o.jsx(Lo,{}),!l&&o.jsx(ko,{})]}),a&&l&&o.jsx(ko,{})]})})})})]})},jo=e=>{if(!Array.isArray(e)||0===e.length)return e;if((e=>null==e?void 0:e.find((e=>e.selected)))(e))return e;let t="";if((null==window?void 0:window.location)&&(t=window.location.pathname+window.location.search),!t)return e;const n=((e,t)=>null==e?void 0:e.findIndex((e=>{var n;return(null==e?void 0:e.href)===t||Array.isArray(e.items)&&(null==(n=e.items)?void 0:n.flat().find((({href:e})=>e===t)))})))(e,t);if(-1===n)return e;const r=[...e];return r[n].selected=!0,r},Ro={Lg:"992px",Xl:"1260px"},_o=Bi.header`
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
  @media (min-width: ${({breakpoint:e})=>Ro[e]}) {
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
`,zo=Bi.div`
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
  @media (min-width: ${({breakpoint:e})=>Ro[e]}) {
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
`,Do=({isPartner:t,navTree:n,title:r,baseUrl:a,parentOrg:i,parentOrgUrl:s,partnerLogo:l,logo:c,loggedIn:f,userName:u,loginLink:d,onLoginClick:m,logoutLink:p,onLogoutClick:h,buttons:g,breakpoint:b,animateTitle:y,expandOnHover:v,mobileNavTree:x,searchUrl:k,site:w,renderDiv:S="false"})=>{const A=jo(n),C=jo(x),N=e.useRef(null),O=()=>{window.scrollY>N.current.getBoundingClientRect().top?N.current.classList.add("scrolled"):N.current.classList.remove("scrolled")};e.useEffect((()=>{"undefined"!=typeof window&&function({packageName:e="",component:t="",type:n="",configuration:r={}}){e&&t?(window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}):console.error("trackReactComponent: Missing required arguments.")}({packageName:"component-header",component:"Component Header",type:"NA",configuration:{site:w,isPartner:t,searchUrl:k,navTree:A,parentOrg:i,buttons:g,mobileNavTree:C}})}),[]),e.useEffect((()=>(null==window||window.addEventListener("scroll",O),()=>window.removeEventListener("scroll",O))),[]);return o.jsx(aa,{initialValue:{isPartner:t,navTree:A,title:r,baseUrl:a,parentOrg:i,parentOrgUrl:s,partnerLogo:l,logo:c,loggedIn:f,userName:u,loginLink:d,onLoginClick:m,logoutLink:p,onLogoutClick:h,buttons:g,breakpoint:b,animateTitle:y,expandOnHover:v,mobileNavTree:C,hasNavigation:!!(null==A?void 0:A.length)||!!(null==C?void 0:C.length),searchUrl:k,site:w},children:(()=>{const e="true"===S?zo:_o;return o.jsx(e,{id:"asuHeader",ref:N,breakpoint:b,children:o.jsx(Io,{})})})()})};var Mo;Do.propTypes={...ta},Do.defaultProps={isPartner:!1,baseUrl:"/",breakpoint:"Xl",expandOnHover:!1};var Fo=t;Mo=Fo.createRoot,Fo.hydrateRoot;exports.ASUHeader=Do,exports.initGlobalHeader=({targetSelector:t,props:n})=>{((t,n,r)=>{Mo(r).render(e.createElement(t,n))})(Do,n,document.querySelector(t))};
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
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
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
