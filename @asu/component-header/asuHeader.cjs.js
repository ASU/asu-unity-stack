"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react"),t=require("react-dom");function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r,a={exports:{}},i={};a.exports=function(){if(r)return i;r=1;var t=e,n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,i={},c=null,f=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(f=t.ref),t)o.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:f,props:i,_owner:s.current}}return i.Fragment=a,i.jsx=c,i.jsxs=c,i}();var o=a.exports;const{entries:s,setPrototypeOf:l,isFrozen:c,getPrototypeOf:f,getOwnPropertyDescriptor:u}=Object;let{freeze:d,seal:m,create:p}=Object,{apply:h,construct:g}="undefined"!=typeof Reflect&&Reflect;d||(d=function(e){return e}),m||(m=function(e){return e}),h||(h=function(e,t,n){return e.apply(t,n)}),g||(g=function(e,t){return new e(...t)});const b=I(Array.prototype.forEach),y=I(Array.prototype.lastIndexOf),v=I(Array.prototype.pop),x=I(Array.prototype.push),k=I(Array.prototype.splice),w=I(String.prototype.toLowerCase),S=I(String.prototype.toString),A=I(String.prototype.match),C=I(String.prototype.replace),N=I(String.prototype.indexOf),O=I(String.prototype.trim),E=I(Object.prototype.hasOwnProperty),T=I(RegExp.prototype.test),P=(j=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(j,t)});var j;function I(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return h(e,t,r)}}function L(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;l&&l(e,null);let r=t.length;for(;r--;){let a=t[r];if("string"==typeof a){const e=n(a);e!==a&&(c(t)||(t[r]=e),a=e)}e[a]=!0}return e}function R(e){for(let t=0;t<e.length;t++){E(e,t)||(e[t]=null)}return e}function _(e){const t=p(null);for(const[n,r]of s(e)){E(e,n)&&(Array.isArray(r)?t[n]=R(r):r&&"object"==typeof r&&r.constructor===Object?t[n]=_(r):t[n]=r)}return t}function z(e,t){for(;null!==e;){const n=u(e,t);if(n){if(n.get)return I(n.get);if("function"==typeof n.value)return I(n.value)}e=f(e)}return function(){return null}}const D=d(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),M=d(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),F=d(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),$=d(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),U=d(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),H=d(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),W=d(["#text"]),B=d(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Y=d(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),G=d(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),q=d(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),X=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),V=m(/<%[\w\W]*|[\w\W]*%>/gm),K=m(/\$\{[\w\W]*/gm),Z=m(/^data-[\-\w.\u00B7-\uFFFF]+$/),J=m(/^aria-[\-\w]+$/),Q=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=m(/^(?:\w+script|data):/i),te=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ne=m(/^html$/i),re=m(/^[a-z][.\w]*(-[.\w]+)+$/i);var ae=Object.freeze({__proto__:null,ARIA_ATTR:J,ATTR_WHITESPACE:te,CUSTOM_ELEMENT:re,DATA_ATTR:Z,DOCTYPE_NAME:ne,ERB_EXPR:V,IS_ALLOWED_URI:Q,IS_SCRIPT_OR_DATA:ee,MUSTACHE_EXPR:X,TMPLIT_EXPR:K});const ie=1,oe=3,se=7,le=8,ce=9;function*fe(e="id-",t=0){let n=t;for(;;)n+=1,yield e+n}function ue(){const e=(document.currentScript&&document.currentScript.src||"").match(/(.*\/)/);return e&&e.length>0?e[0].substr(0,e[0].length-1):"/"}!function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window;const n=t=>e(t);if(n.version="3.2.5",n.removed=[],!t||!t.document||t.document.nodeType!==ce||!t.Element)return n.isSupported=!1,n;let{document:r}=t;const a=r,i=a.currentScript,{DocumentFragment:o,HTMLTemplateElement:l,Node:c,Element:f,NodeFilter:u,NamedNodeMap:m=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:h,DOMParser:g,trustedTypes:j}=t,I=f.prototype,R=z(I,"cloneNode"),X=z(I,"remove"),V=z(I,"nextSibling"),K=z(I,"childNodes"),Z=z(I,"parentNode");if("function"==typeof l){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let J,ee="";const{implementation:te,createNodeIterator:re,createDocumentFragment:fe,getElementsByTagName:ue}=r,{importNode:de}=a;let me={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof s&&"function"==typeof Z&&te&&void 0!==te.createHTMLDocument;const{MUSTACHE_EXPR:pe,ERB_EXPR:he,TMPLIT_EXPR:ge,DATA_ATTR:be,ARIA_ATTR:ye,IS_SCRIPT_OR_DATA:ve,ATTR_WHITESPACE:xe,CUSTOM_ELEMENT:ke}=ae;let{IS_ALLOWED_URI:we}=ae,Se=null;const Ae=L({},[...D,...M,...F,...U,...W]);let Ce=null;const Ne=L({},[...B,...Y,...G,...q]);let Oe=Object.seal(p(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ee=null,Te=null,Pe=!0,je=!0,Ie=!1,Le=!0,Re=!1,_e=!0,ze=!1,De=!1,Me=!1,Fe=!1,$e=!1,Ue=!1,He=!0,We=!1,Be=!0,Ye=!1,Ge={},qe=null;const Xe=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Ve=null;const Ke=L({},["audio","video","img","source","image","track"]);let Ze=null;const Je=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Qe="http://www.w3.org/1998/Math/MathML",et="http://www.w3.org/2000/svg",tt="http://www.w3.org/1999/xhtml";let nt=tt,rt=!1,at=null;const it=L({},[Qe,et,tt],S);let ot=L({},["mi","mo","mn","ms","mtext"]),st=L({},["annotation-xml"]);const lt=L({},["title","style","font","a","script"]);let ct=null;const ft=["application/xhtml+xml","text/html"];let ut=null,dt=null;const mt=r.createElement("form"),pt=function(e){return e instanceof RegExp||e instanceof Function},ht=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!dt||dt!==e){if(e&&"object"==typeof e||(e={}),e=_(e),ct=-1===ft.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,ut="application/xhtml+xml"===ct?S:w,Se=E(e,"ALLOWED_TAGS")?L({},e.ALLOWED_TAGS,ut):Ae,Ce=E(e,"ALLOWED_ATTR")?L({},e.ALLOWED_ATTR,ut):Ne,at=E(e,"ALLOWED_NAMESPACES")?L({},e.ALLOWED_NAMESPACES,S):it,Ze=E(e,"ADD_URI_SAFE_ATTR")?L(_(Je),e.ADD_URI_SAFE_ATTR,ut):Je,Ve=E(e,"ADD_DATA_URI_TAGS")?L(_(Ke),e.ADD_DATA_URI_TAGS,ut):Ke,qe=E(e,"FORBID_CONTENTS")?L({},e.FORBID_CONTENTS,ut):Xe,Ee=E(e,"FORBID_TAGS")?L({},e.FORBID_TAGS,ut):{},Te=E(e,"FORBID_ATTR")?L({},e.FORBID_ATTR,ut):{},Ge=!!E(e,"USE_PROFILES")&&e.USE_PROFILES,Pe=!1!==e.ALLOW_ARIA_ATTR,je=!1!==e.ALLOW_DATA_ATTR,Ie=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Le=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Re=e.SAFE_FOR_TEMPLATES||!1,_e=!1!==e.SAFE_FOR_XML,ze=e.WHOLE_DOCUMENT||!1,Fe=e.RETURN_DOM||!1,$e=e.RETURN_DOM_FRAGMENT||!1,Ue=e.RETURN_TRUSTED_TYPE||!1,Me=e.FORCE_BODY||!1,He=!1!==e.SANITIZE_DOM,We=e.SANITIZE_NAMED_PROPS||!1,Be=!1!==e.KEEP_CONTENT,Ye=e.IN_PLACE||!1,we=e.ALLOWED_URI_REGEXP||Q,nt=e.NAMESPACE||tt,ot=e.MATHML_TEXT_INTEGRATION_POINTS||ot,st=e.HTML_INTEGRATION_POINTS||st,Oe=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&pt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Oe.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&pt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Oe.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Oe.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Re&&(je=!1),$e&&(Fe=!0),Ge&&(Se=L({},W),Ce=[],!0===Ge.html&&(L(Se,D),L(Ce,B)),!0===Ge.svg&&(L(Se,M),L(Ce,Y),L(Ce,q)),!0===Ge.svgFilters&&(L(Se,F),L(Ce,Y),L(Ce,q)),!0===Ge.mathMl&&(L(Se,U),L(Ce,G),L(Ce,q))),e.ADD_TAGS&&(Se===Ae&&(Se=_(Se)),L(Se,e.ADD_TAGS,ut)),e.ADD_ATTR&&(Ce===Ne&&(Ce=_(Ce)),L(Ce,e.ADD_ATTR,ut)),e.ADD_URI_SAFE_ATTR&&L(Ze,e.ADD_URI_SAFE_ATTR,ut),e.FORBID_CONTENTS&&(qe===Xe&&(qe=_(qe)),L(qe,e.FORBID_CONTENTS,ut)),Be&&(Se["#text"]=!0),ze&&L(Se,["html","head","body"]),Se.table&&(L(Se,["tbody"]),delete Ee.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw P('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw P('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');J=e.TRUSTED_TYPES_POLICY,ee=J.createHTML("")}else void 0===J&&(J=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML:e=>e,createScriptURL:e=>e})}catch(i){return console.warn("TrustedTypes policy "+a+" could not be created."),null}}(j,i)),null!==J&&"string"==typeof ee&&(ee=J.createHTML(""));d&&d(e),dt=e}},gt=L({},[...M,...F,...$]),bt=L({},[...U,...H]),yt=function(e){x(n.removed,{element:e});try{Z(e).removeChild(e)}catch(t){X(e)}},vt=function(e,t){try{x(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(r){x(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(Fe||$e)try{yt(t)}catch(r){}else try{t.setAttribute(e,"")}catch(r){}},xt=function(e){let t=null,n=null;if(Me)e="<remove></remove>"+e;else{const t=A(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===ct&&nt===tt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const a=J?J.createHTML(e):e;if(nt===tt)try{t=(new g).parseFromString(a,ct)}catch(o){}if(!t||!t.documentElement){t=te.createDocument(nt,"template",null);try{t.documentElement.innerHTML=rt?ee:a}catch(o){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(r.createTextNode(n),i.childNodes[0]||null),nt===tt?ue.call(t,ze?"html":"body")[0]:ze?t.documentElement:i},kt=function(e){return re.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},wt=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof m)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},St=function(e){return"function"==typeof c&&e instanceof c};function At(e,t,r){b(e,(e=>{e.call(n,t,r,dt)}))}const Ct=function(e){let t=null;if(At(me.beforeSanitizeElements,e,null),wt(e))return yt(e),!0;const r=ut(e.nodeName);if(At(me.uponSanitizeElement,e,{tagName:r,allowedTags:Se}),e.hasChildNodes()&&!St(e.firstElementChild)&&T(/<[/\w!]/g,e.innerHTML)&&T(/<[/\w!]/g,e.textContent))return yt(e),!0;if(e.nodeType===se)return yt(e),!0;if(_e&&e.nodeType===le&&T(/<[/\w]/g,e.data))return yt(e),!0;if(!Se[r]||Ee[r]){if(!Ee[r]&&Ot(r)){if(Oe.tagNameCheck instanceof RegExp&&T(Oe.tagNameCheck,r))return!1;if(Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(r))return!1}if(Be&&!qe[r]){const t=Z(e)||e.parentNode,n=K(e)||e.childNodes;if(n&&t){for(let r=n.length-1;r>=0;--r){const a=R(n[r],!0);a.__removalCount=(e.__removalCount||0)+1,t.insertBefore(a,V(e))}}}return yt(e),!0}return e instanceof f&&!function(e){let t=Z(e);t&&t.tagName||(t={namespaceURI:nt,tagName:"template"});const n=w(e.tagName),r=w(t.tagName);return!!at[e.namespaceURI]&&(e.namespaceURI===et?t.namespaceURI===tt?"svg"===n:t.namespaceURI===Qe?"svg"===n&&("annotation-xml"===r||ot[r]):Boolean(gt[n]):e.namespaceURI===Qe?t.namespaceURI===tt?"math"===n:t.namespaceURI===et?"math"===n&&st[r]:Boolean(bt[n]):e.namespaceURI===tt?!(t.namespaceURI===et&&!st[r])&&!(t.namespaceURI===Qe&&!ot[r])&&!bt[n]&&(lt[n]||!gt[n]):!("application/xhtml+xml"!==ct||!at[e.namespaceURI]))}(e)?(yt(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!T(/<\/no(script|embed|frames)/i,e.innerHTML)?(Re&&e.nodeType===oe&&(t=e.textContent,b([pe,he,ge],(e=>{t=C(t,e," ")})),e.textContent!==t&&(x(n.removed,{element:e.cloneNode()}),e.textContent=t)),At(me.afterSanitizeElements,e,null),!1):(yt(e),!0)},Nt=function(e,t,n){if(He&&("id"===t||"name"===t)&&(n in r||n in mt))return!1;if(je&&!Te[t]&&T(be,t));else if(Pe&&T(ye,t));else if(!Ce[t]||Te[t]){if(!(Ot(e)&&(Oe.tagNameCheck instanceof RegExp&&T(Oe.tagNameCheck,e)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(e))&&(Oe.attributeNameCheck instanceof RegExp&&T(Oe.attributeNameCheck,t)||Oe.attributeNameCheck instanceof Function&&Oe.attributeNameCheck(t))||"is"===t&&Oe.allowCustomizedBuiltInElements&&(Oe.tagNameCheck instanceof RegExp&&T(Oe.tagNameCheck,n)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(n))))return!1}else if(Ze[t]);else if(T(we,C(n,xe,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==N(n,"data:")||!Ve[e]){if(Ie&&!T(ve,C(n,xe,"")));else if(n)return!1}else;return!0},Ot=function(e){return"annotation-xml"!==e&&A(e,ke)},Et=function(e){At(me.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||wt(e))return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ce,forceKeepAttr:void 0};let a=t.length;for(;a--;){const o=t[a],{name:s,namespaceURI:l,value:c}=o,f=ut(s);let u="value"===s?c:O(c);if(r.attrName=f,r.attrValue=u,r.keepAttr=!0,r.forceKeepAttr=void 0,At(me.uponSanitizeAttribute,e,r),u=r.attrValue,!We||"id"!==f&&"name"!==f||(vt(s,e),u="user-content-"+u),_e&&T(/((--!?|])>)|<\/(style|title)/i,u)){vt(s,e);continue}if(r.forceKeepAttr)continue;if(vt(s,e),!r.keepAttr)continue;if(!Le&&T(/\/>/i,u)){vt(s,e);continue}Re&&b([pe,he,ge],(e=>{u=C(u,e," ")}));const d=ut(e.nodeName);if(Nt(d,f,u)){if(J&&"object"==typeof j&&"function"==typeof j.getAttributeType)if(l);else switch(j.getAttributeType(d,f)){case"TrustedHTML":u=J.createHTML(u);break;case"TrustedScriptURL":u=J.createScriptURL(u)}try{l?e.setAttributeNS(l,s,u):e.setAttribute(s,u),wt(e)?yt(e):v(n.removed)}catch(i){}}}At(me.afterSanitizeAttributes,e,null)},Tt=function e(t){let n=null;const r=kt(t);for(At(me.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)At(me.uponSanitizeShadowNode,n,null),Ct(n),Et(n),n.content instanceof o&&e(n.content);At(me.afterSanitizeShadowDOM,t,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null,i=null,s=null,l=null;if(rt=!e,rt&&(e="\x3c!--\x3e"),"string"!=typeof e&&!St(e)){if("function"!=typeof e.toString)throw P("toString is not a function");if("string"!=typeof(e=e.toString()))throw P("dirty is not a string, aborting")}if(!n.isSupported)return e;if(De||ht(t),n.removed=[],"string"==typeof e&&(Ye=!1),Ye){if(e.nodeName){const t=ut(e.nodeName);if(!Se[t]||Ee[t])throw P("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof c)r=xt("\x3c!----\x3e"),i=r.ownerDocument.importNode(e,!0),i.nodeType===ie&&"BODY"===i.nodeName||"HTML"===i.nodeName?r=i:r.appendChild(i);else{if(!Fe&&!Re&&!ze&&-1===e.indexOf("<"))return J&&Ue?J.createHTML(e):e;if(r=xt(e),!r)return Fe?null:Ue?ee:""}r&&Me&&yt(r.firstChild);const f=kt(Ye?e:r);for(;s=f.nextNode();)Ct(s),Et(s),s.content instanceof o&&Tt(s.content);if(Ye)return e;if(Fe){if($e)for(l=fe.call(r.ownerDocument);r.firstChild;)l.appendChild(r.firstChild);else l=r;return(Ce.shadowroot||Ce.shadowrootmode)&&(l=de.call(a,l,!0)),l}let u=ze?r.outerHTML:r.innerHTML;return ze&&Se["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&T(ne,r.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+u),Re&&b([pe,he,ge],(e=>{u=C(u,e," ")})),J&&Ue?J.createHTML(u):u},n.setConfig=function(){ht(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),De=!0},n.clearConfig=function(){dt=null,De=!1},n.isValidAttribute=function(e,t,n){dt||ht({});const r=ut(e),a=ut(t);return Nt(r,a,n)},n.addHook=function(e,t){"function"==typeof t&&x(me[e],t)},n.removeHook=function(e,t){if(void 0!==t){const n=y(me[e],t);return-1===n?void 0:k(me[e],n,1)[0]}return v(me[e])},n.removeHooks=function(e){me[e]=[]},n.removeAllHooks=function(){me={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}();var de,me,pe,he,ge={exports:{}};ge.exports=function(){if(he)return pe;he=1;var e=me?de:(me=1,de="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");function t(){}function n(){}return n.resetWarningCache=t,pe=function(){function r(t,n,r,a,i,o){if(o!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function a(){return r}r.isRequired=r;var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i}}()();const be=n(ge.exports);be.shape({event:be.string,action:be.string,name:be.string,region:be.string,section:be.string,component:be.string,type:be.string,text:be.string});const ye=({event:e="",action:t="",name:n="",type:r="",section:a="",text:i="",region:o="",component:s=""})=>{const{dataLayer:l}=window,c={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:o.toLowerCase(),section:a.toLowerCase(),text:i.toLowerCase(),component:s.toLowerCase()};l&&l.push(c)},ve=({children:e})=>o.jsx(o.Fragment,{children:e});ve.propTypes={children:be.oneOfType([be.arrayOf(be.node),be.node,be.string])};var xe;xe={exports:{}},function(){var e={}.hasOwnProperty;function t(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=r(e,n(a)))}return e}function n(n){if("string"==typeof n||"number"==typeof n)return n;if("object"!=typeof n)return"";if(Array.isArray(n))return t.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var a="";for(var i in n)e.call(n,i)&&n[i]&&(a=r(a,i));return a}function r(e,t){return t?e?e+" "+t:e+t:e}xe.exports?(t.default=t,xe.exports=t):window.classNames=t}();const ke=({children:e,className:t="container",...n})=>o.jsx("div",{className:t,...n,children:o.jsx("div",{className:"row",children:e})});ke.propTypes={children:ve.propTypes.children},ve.propTypes.children,be.oneOf(["0","3","4","6","8","9","12"]),ve.propTypes.children;const we={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Se={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Ae={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Ce={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Ne={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var Oe={NODE_ENV:"production"};function Ee(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(n),!0).forEach((function(t){Ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const je=()=>{};let Ie={},Le={},Re=null,_e={mark:je,measure:je};try{"undefined"!=typeof window&&(Ie=window),"undefined"!=typeof document&&(Le=document),"undefined"!=typeof MutationObserver&&(Re=MutationObserver),"undefined"!=typeof performance&&(_e=performance)}catch(Wo){}const{userAgent:ze=""}=Ie.navigator||{},De=Ie,Me=Le,Fe=Re,$e=_e;De.document;const Ue=!!Me.documentElement&&!!Me.head&&"function"==typeof Me.addEventListener&&"function"==typeof Me.createElement,He=~ze.indexOf("MSIE")||~ze.indexOf("Trident/");var We={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Be=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ye="classic",Ge="duotone",qe=[Ye,Ge,"sharp","sharp-duotone"],Xe=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ve=["fak","fa-kit","fakd","fa-kit-duotone"],Ke={fak:"kit","fa-kit":"kit"},Ze={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},Je=["fak","fakd"],Qe={kit:"fak"},et={"kit-duotone":"fakd"},tt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nt=["fak","fa-kit","fakd","fa-kit-duotone"],rt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},at=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],it=[1,2,3,4,5,6,7,8,9,10],ot=it.concat([11,12,13,14,15,16,17,18,19,20]),st=[...Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tt.GROUP,tt.SWAP_OPACITY,tt.PRIMARY,tt.SECONDARY].concat(it.map((e=>"".concat(e,"x")))).concat(ot.map((e=>"w-".concat(e))));const lt="___FONT_AWESOME___",ct=16,ft="svg-inline--fa",ut="data-fa-i2svg",dt="data-fa-pseudo-element",mt="data-prefix",pt="data-icon",ht="fontawesome-i2svg",gt=["HTML","HEAD","STYLE","SCRIPT"],bt=(()=>{try{return"production"===Oe.NODE_ENV}catch(e){return!1}})();function yt(e){return new Proxy(e,{get:(e,t)=>t in e?e[t]:e[Ye]})}const vt=Pe({},We);vt[Ye]=Pe(Pe(Pe(Pe({},{"fa-duotone":"duotone"}),We[Ye]),Ke),Ze);const xt=yt(vt),kt=Pe({},{classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}});kt[Ye]=Pe(Pe(Pe(Pe({},{duotone:"fad"}),kt[Ye]),Qe),et);const wt=yt(kt),St=Pe({},rt);St[Ye]=Pe(Pe({},St[Ye]),{fak:"fa-kit"});const At=yt(St),Ct=Pe({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}});Ct[Ye]=Pe(Pe({},Ct[Ye]),{"fa-kit":"fak"}),yt(Ct);const Nt=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ot="fa-layers-text",Et=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;yt(Pe({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}}));const Tt=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pt={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},jt=["kit",...st],It=De.FontAwesomeConfig||{};if(Me&&"function"==typeof Me.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((e=>{let[t,n]=e;const r=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=Me.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t));null!=r&&(It[n]=r)}))}const Lt={styleDefault:"solid",familyDefault:Ye,cssPrefix:"fa",replacementClass:ft,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};It.familyPrefix&&(It.cssPrefix=It.familyPrefix);const Rt=Pe(Pe({},Lt),It);Rt.autoReplaceSvg||(Rt.observeMutations=!1);const _t={};Object.keys(Lt).forEach((e=>{Object.defineProperty(_t,e,{enumerable:!0,set:function(t){Rt[e]=t,zt.forEach((e=>e(_t)))},get:function(){return Rt[e]}})})),Object.defineProperty(_t,"familyPrefix",{enumerable:!0,set:function(e){Rt.cssPrefix=e,zt.forEach((e=>e(_t)))},get:function(){return Rt.cssPrefix}}),De.FontAwesomeConfig=_t;const zt=[];const Dt=ct,Mt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ft(){let e=12,t="";for(;e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function $t(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ut(e){return e.classList?$t(e.classList):(e.getAttribute("class")||"").split(" ").filter((e=>e))}function Ht(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wt(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";")),"")}function Bt(e){return e.size!==Mt.size||e.x!==Mt.x||e.y!==Mt.y||e.rotate!==Mt.rotate||e.flipX||e.flipY}function Yt(){const e="fa",t=ft,n=_t.cssPrefix,r=_t.replacementClass;let a=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}';if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let Gt=!1;function qt(){_t.autoAddCss&&!Gt&&(!function(e){if(!e||!Ue)return;const t=Me.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=Me.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const e=n[a],t=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(r=e)}Me.head.insertBefore(t,r)}(Yt()),Gt=!0)}var Xt={mixout:()=>({dom:{css:Yt,insertCss:qt}}),hooks:()=>({beforeDOMElementCreation(){qt()},beforeI2svg(){qt()}})};const Vt=De||{};Vt[lt]||(Vt[lt]={}),Vt[lt].styles||(Vt[lt].styles={}),Vt[lt].hooks||(Vt[lt].hooks={}),Vt[lt].shims||(Vt[lt].shims=[]);var Kt=Vt[lt];const Zt=[],Jt=function(){Me.removeEventListener("DOMContentLoaded",Jt),Qt=1,Zt.map((e=>e()))};let Qt=!1;function en(e){const{tag:t,attributes:n={},children:r=[]}=e;return"string"==typeof e?Ht(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,'="').concat(Ht(e[n]),'" ')),"").trim()}(n),">").concat(r.map(en).join(""),"</").concat(t,">")}function tn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}Ue&&(Qt=(Me.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Me.readyState),Qt||Me.addEventListener("DOMContentLoaded",Jt));var nn=function(e,t,n,r){var a,i,o,s=Object.keys(e),l=s.length,c=t;for(void 0===n?(a=1,o=e[s[0]]):(a=0,o=n);a<l;a++)o=c(o,e[i=s[a]],i,e);return o};function rn(e){const t=function(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const r=e.charCodeAt(n++);56320==(64512&r)?t.push(((1023&a)<<10)+(1023&r)+65536):(t.push(a),n--)}else t.push(a)}return t}(e);return 1===t.length?t[0].toString(16):null}function an(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t}),{})}function on(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{skipHooks:r=!1}=n,a=an(t);"function"!=typeof Kt.hooks.addPack||r?Kt.styles[e]=Pe(Pe({},Kt.styles[e]||{}),a):Kt.hooks.addPack(e,an(t)),"fas"===e&&on("fa",t)}const{styles:sn,shims:ln}=Kt,cn=Object.keys(At),fn=cn.reduce(((e,t)=>(e[t]=Object.keys(At[t]),e)),{});let un=null,dn={},mn={},pn={},hn={},gn={};function bn(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r!==e||""===a||(i=a,~jt.indexOf(i))?null:a;var i}const yn=()=>{const e=e=>nn(sn,((t,n,r)=>(t[r]=nn(n,e,{}),t)),{});dn=e(((e,t,n)=>{if(t[3]&&(e[t[3]]=n),t[2]){t[2].filter((e=>"number"==typeof e)).forEach((t=>{e[t.toString(16)]=n}))}return e})),mn=e(((e,t,n)=>{if(e[n]=n,t[2]){t[2].filter((e=>"string"==typeof e)).forEach((t=>{e[t]=n}))}return e})),gn=e(((e,t,n)=>{const r=t[2];return e[n]=n,r.forEach((t=>{e[t]=n})),e}));const t="far"in sn||_t.autoFetchSvg,n=nn(ln,((e,n)=>{const r=n[0];let a=n[1];const i=n[2];return"far"!==a||t||(a="fas"),"string"==typeof r&&(e.names[r]={prefix:a,iconName:i}),"number"==typeof r&&(e.unicodes[r.toString(16)]={prefix:a,iconName:i}),e}),{names:{},unicodes:{}});pn=n.names,hn=n.unicodes,un=An(_t.styleDefault,{family:_t.familyDefault})};var vn;function xn(e,t){return(dn[e]||{})[t]}function kn(e,t){return(gn[e]||{})[t]}function wn(e){return pn[e]||{prefix:null,iconName:null}}function Sn(){return un}vn=e=>{un=An(e.styleDefault,{family:_t.familyDefault})},zt.push(vn),yn();function An(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{family:n=Ye}=t,r=xt[n][e];if(n===Ge&&!e)return"fad";const a=wt[n][e]||wt[n][r],i=e in Kt.styles?e:null;return a||i||null}function Cn(e){return e.sort().filter(((e,t,n)=>n.indexOf(e)===t))}function Nn(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=at.concat(nt),i=Cn(e.filter((e=>a.includes(e)))),o=Cn(e.filter((e=>!at.includes(e)))),s=i.filter((e=>(r=e,!Be.includes(e)))),[l=null]=s,c=function(e){let t=Ye;const n=cn.reduce(((e,t)=>(e[t]="".concat(_t.cssPrefix,"-").concat(t),e)),{});return qe.forEach((r=>{(e.includes(n[r])||e.some((e=>fn[r].includes(e))))&&(t=r)})),t}(i),f=Pe(Pe({},function(e){let t=[],n=null;return e.forEach((e=>{const r=bn(_t.cssPrefix,e);r?n=r:e&&t.push(e)})),{iconName:n,rest:t}}(o)),{},{prefix:An(l,{family:c})});return Pe(Pe(Pe({},f),function(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:i={},config:o={}}=e,s=n===Ge,l=t.includes("fa-duotone")||t.includes("fad"),c="duotone"===o.familyDefault,f="fad"===r.prefix||"fa-duotone"===r.prefix;!s&&(l||c||f)&&(r.prefix="fad");(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab");if(!r.prefix&&On.includes(n)){if(Object.keys(i).find((e=>En.includes(e)))||o.autoFetchSvg){const e=Xe.get(n).defaultShortPrefixId;r.prefix=e,r.iconName=kn(r.prefix,r.iconName)||r.iconName}}"fa"!==r.prefix&&"fa"!==a||(r.prefix=Sn()||"fas");return r}({values:e,family:c,styles:sn,config:_t,canonical:f,givenPrefix:r})),function(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const i="fa"===t?wn(a):{},o=kn(r,a);a=i.iconName||o||a,r=i.prefix||r,"far"!==r||sn.far||!sn.fas||_t.autoFetchSvg||(r="fas");return{prefix:r,iconName:a}}(n,r,f))}const On=qe.filter((e=>e!==Ye||e!==Ge)),En=Object.keys(rt).filter((e=>e!==Ye)).map((e=>Object.keys(rt[e]))).flat();let Tn=[],Pn={};const jn={},In=Object.keys(jn);function Ln(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(Pn[e]||[]).forEach((e=>{t=e.apply(null,[t,...r])})),t}function Rn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Pn[e]||[]).forEach((e=>{e.apply(null,n)}))}function _n(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return jn[e]?jn[e].apply(null,t):void 0}function zn(e){"fa"===e.prefix&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Sn();if(t)return t=kn(n,t)||t,tn(Dn.definitions,n,t)||tn(Kt.styles,n,t)}const Dn=new class{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach((e=>{this.definitions[e]=Pe(Pe({},this.definitions[e]||{}),r[e]),on(e,r[e]);const t=At[Ye][e];t&&on(t,r[e]),yn()}))}reset(){this.definitions={}}_pullDefinitions(e,t){const n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((t=>{const{prefix:r,iconName:a,icon:i}=n[t],o=i[2];e[r]||(e[r]={}),o.length>0&&o.forEach((t=>{"string"==typeof t&&(e[r][t]=i)})),e[r][a]=i})),e}},Mn={i2svg:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ue?(Rn("beforeI2svg",e),_n("pseudoElements2svg",e),_n("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;var n;!1===_t.autoReplaceSvg&&(_t.autoReplaceSvg=!0),_t.observeMutations=!0,n=()=>{$n({autoReplaceSvgRoot:t}),Rn("watch",e)},Ue&&(Qt?setTimeout(n,0):Zt.push(n))}},Fn={noAuto:()=>{_t.autoReplaceSvg=!1,_t.observeMutations=!1,Rn("noAuto")},config:_t,dom:Mn,parse:{icon:e=>{if(null===e)return null;if("object"==typeof e&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:kn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){const t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=An(e[0]);return{prefix:n,iconName:kn(n,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(_t.cssPrefix,"-"))>-1||e.match(Nt))){const t=Nn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Sn(),iconName:kn(t.prefix,t.iconName)||t.iconName}}if("string"==typeof e){const t=Sn();return{prefix:t,iconName:kn(t,e)||e}}}},library:Dn,findIconDefinition:zn,toHtml:en},$n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t=Me}=e;(Object.keys(Kt.styles).length>0||_t.autoFetchSvg)&&Ue&&_t.autoReplaceSvg&&Fn.dom.i2svg({node:t})};function Un(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((e=>en(e)))}}),Object.defineProperty(e,"node",{get:function(){if(!Ue)return;const t=Me.createElement("div");return t.innerHTML=e.html,t.children}}),e}function Hn(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:s,maskId:l,titleId:c,extra:f,watchable:u=!1}=e,{width:d,height:m}=n.found?n:t,p=Je.includes(r),h=[_t.replacementClass,a?"".concat(_t.cssPrefix,"-").concat(a):""].filter((e=>-1===f.classes.indexOf(e))).filter((e=>""!==e||!!e)).concat(f.classes).join(" ");let g={children:[],attributes:Pe(Pe({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(m)})};const b=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(d/m*16*.0625,"em")}:{};u&&(g.attributes[ut]=""),s&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Ft())},children:[s]}),delete g.attributes.title);const y=Pe(Pe({},g),{},{prefix:r,iconName:a,main:t,mask:n,maskId:l,transform:i,symbol:o,styles:Pe(Pe({},b),f.styles)}),{children:v,attributes:x}=n.found&&t.found?_n("generateAbstractMask",y)||{children:[],attributes:{}}:_n("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=v,y.attributes=x,o?function(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=!0===i?"".concat(t,"-").concat(_t.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Pe(Pe({},a),{},{id:o}),children:r}]}]}(y):function(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(Bt(o)&&n.found&&!r.found){const{width:e,height:t}=n,r={x:e/t/2,y:.5};a.style=Wt(Pe(Pe({},i),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(y)}function Wn(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:s=!1}=e,l=Pe(Pe(Pe({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(l[ut]="");const c=Pe({},o.styles);Bt(a)&&(c.transform=function(e){let{transform:t,width:n=ct,height:r=ct,startCentered:a=!1}=e,i="";return i+=a&&He?"translate(".concat(t.x/Dt-n/2,"em, ").concat(t.y/Dt-r/2,"em) "):a?"translate(calc(-50% + ".concat(t.x/Dt,"em), calc(-50% + ").concat(t.y/Dt,"em)) "):"translate(".concat(t.x/Dt,"em, ").concat(t.y/Dt,"em) "),i+="scale(".concat(t.size/Dt*(t.flipX?-1:1),", ").concat(t.size/Dt*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=Wt(c);f.length>0&&(l.style=f);const u=[];return u.push({tag:"span",attributes:l,children:[t]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}const{styles:Bn}=Kt;function Yn(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return a=Array.isArray(r)?{tag:"g",attributes:{class:"".concat(_t.cssPrefix,"-").concat(Pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_t.cssPrefix,"-").concat(Pt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(_t.cssPrefix,"-").concat(Pt.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Gn={found:!1,width:512,height:512};function qn(e,t){let n=t;return"fa"===t&&null!==_t.styleDefault&&(t=Sn()),new Promise(((r,a)=>{if("fa"===n){const n=wn(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&Bn[t]&&Bn[t][e]){return r(Yn(Bn[t][e]))}!function(e,t){bt||_t.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),r(Pe(Pe({},Gn),{},{icon:_t.showMissingIcons&&e&&_n("missingIconAbstract")||{}}))}))}const Xn=()=>{},Vn=_t.measurePerformance&&$e&&$e.mark&&$e.measure?$e:{mark:Xn,measure:Xn},Kn='FA "6.7.2"',Zn=e=>{Vn.mark("".concat(Kn," ").concat(e," ends")),Vn.measure("".concat(Kn," ").concat(e),"".concat(Kn," ").concat(e," begins"),"".concat(Kn," ").concat(e," ends"))};var Jn=e=>(Vn.mark("".concat(Kn," ").concat(e," begins")),()=>Zn(e));const Qn=()=>{};function er(e){return"string"==typeof(e.getAttribute?e.getAttribute(ut):null)}function tr(e){return Me.createElementNS("http://www.w3.org/2000/svg",e)}function nr(e){return Me.createElement(e)}function rr(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ceFn:n=("svg"===e.tag?tr:nr)}=t;if("string"==typeof e)return Me.createTextNode(e);const r=n(e.tag);Object.keys(e.attributes||[]).forEach((function(t){r.setAttribute(t,e.attributes[t])}));return(e.children||[]).forEach((function(e){r.appendChild(rr(e,{ceFn:n}))})),r}const ar={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach((e=>{t.parentNode.insertBefore(rr(e),t)})),null===t.getAttribute(ut)&&_t.keepOriginalSource){let e=Me.createComment(function(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Ut(t).indexOf(_t.replacementClass))return ar.replace(e);const r=new RegExp("".concat(_t.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const e=n[0].attributes.class.split(" ").reduce(((e,t)=>(t===_t.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e)),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(" "),0===e.toNode.length?t.removeAttribute("class"):t.setAttribute("class",e.toNode.join(" "))}const a=n.map((e=>en(e))).join("\n");t.setAttribute(ut,""),t.innerHTML=a}};function ir(e){e()}function or(e,t){const n="function"==typeof t?t:Qn;if(0===e.length)n();else{let t=ir;"async"===_t.mutateApproach&&(t=De.requestAnimationFrame||ir),t((()=>{const t=!0===_t.autoReplaceSvg?ar.replace:ar[_t.autoReplaceSvg]||ar.replace,r=Jn("mutate");e.map(t),r(),n()}))}}let sr=!1;function lr(){sr=!0}function cr(){sr=!1}let fr=null;function ur(e){if(!Fe)return;if(!_t.observeMutations)return;const{treeCallback:t=Qn,nodeCallback:n=Qn,pseudoElementsCallback:r=Qn,observeMutationsRoot:a=Me}=e;fr=new Fe((e=>{if(sr)return;const a=Sn();$t(e).forEach((e=>{if("childList"===e.type&&e.addedNodes.length>0&&!er(e.addedNodes[0])&&(_t.searchPseudoElements&&r(e.target),t(e.target)),"attributes"===e.type&&e.target.parentNode&&_t.searchPseudoElements&&r(e.target.parentNode),"attributes"===e.type&&er(e.target)&&~Tt.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){const t=e.getAttribute?e.getAttribute(mt):null,n=e.getAttribute?e.getAttribute(pt):null;return t&&n}(e.target)){const{prefix:t,iconName:n}=Nn(Ut(e.target));e.target.setAttribute(mt,t||a),n&&e.target.setAttribute(pt,n)}else(i=e.target)&&i.classList&&i.classList.contains&&i.classList.contains(_t.replacementClass)&&n(e.target);var i}))})),Ue&&fr.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function dr(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=void 0!==e.innerText?e.innerText.trim():"";let a=Nn(Ut(e));return a.prefix||(a.prefix=Sn()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=(i=a.prefix,o=e.innerText,(mn[i]||{})[o]||xn(a.prefix,rn(e.innerText)))),!a.iconName&&_t.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a;var i,o}function mr(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=dr(e),i=function(e){const t=$t(e.attributes).reduce(((e,t)=>("class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e)),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return _t.autoA11y&&(n?t["aria-labelledby"]="".concat(_t.replacementClass,"-title-").concat(r||Ft()):(t["aria-hidden"]="true",t.focusable="false")),t}(e),o=Ln("parseNodeAttributes",{},e);let s=t.styleParser?function(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce(((e,t)=>{const n=t.split(":"),r=n[0],a=n.slice(1);return r&&a.length>0&&(e[r]=a.join(":").trim()),e}),{})),n}(e):[];return Pe({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Mt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i}},o)}const{styles:pr}=Kt;function hr(e){const t="nest"===_t.autoReplaceSvg?mr(e,{styleParser:!1}):mr(e);return~t.extra.classes.indexOf(Ot)?_n("generateLayersText",e,t):_n("generateSvgReplacementMutation",e,t)}function gr(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!Ue)return Promise.resolve();const n=Me.documentElement.classList,r=e=>n.add("".concat(ht,"-").concat(e)),a=e=>n.remove("".concat(ht,"-").concat(e)),i=_t.autoFetchSvg?[...Ve,...at]:Be.concat(Object.keys(pr));i.includes("fa")||i.push("fa");const o=[".".concat(Ot,":not([").concat(ut,"])")].concat(i.map((e=>".".concat(e,":not([").concat(ut,"])")))).join(", ");if(0===o.length)return Promise.resolve();let s=[];try{s=$t(e.querySelectorAll(o))}catch(f){}if(!(s.length>0))return Promise.resolve();r("pending"),a("complete");const l=Jn("onTree"),c=s.reduce(((e,t)=>{try{const n=hr(t);n&&e.push(n)}catch(f){bt||"MissingIcon"===f.name&&console.error(f)}return e}),[]);return new Promise(((e,n)=>{Promise.all(c).then((n=>{or(n,(()=>{r("active"),r("complete"),a("pending"),"function"==typeof t&&t(),l(),e()}))})).catch((e=>{l(),n(e)}))}))}function br(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;hr(e).then((e=>{e&&or([e],t)}))}const yr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=Mt,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:l=[],attributes:c={},styles:f={}}=t;if(!e)return;const{prefix:u,iconName:d,icon:m}=e;return Un(Pe({type:"icon"},e),(()=>(Rn("beforeDOMElementCreation",{iconDefinition:e,params:t}),_t.autoA11y&&(o?c["aria-labelledby"]="".concat(_t.replacementClass,"-title-").concat(s||Ft()):(c["aria-hidden"]="true",c.focusable="false")),Hn({icons:{main:Yn(m),mask:a?Yn(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:d,transform:Pe(Pe({},Mt),n),symbol:r,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:f,classes:l}}))))};var vr={mixout(){return{icon:(e=yr,function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=(t||{}).icon?t:zn(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:zn(a||{})),e(r,Pe(Pe({},n),{},{mask:a}))})};var e},hooks:()=>({mutationObserverCallbacks:e=>(e.treeCallback=gr,e.nodeCallback=br,e)}),provides(e){e.i2svg=function(e){const{node:t=Me,callback:n=()=>{}}=e;return gr(t,n)},e.generateSvgReplacementMutation=function(e,t){const{iconName:n,title:r,titleId:a,prefix:i,transform:o,symbol:s,mask:l,maskId:c,extra:f}=t;return new Promise(((t,u)=>{Promise.all([qn(n,i),l.iconName?qn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((l=>{let[u,d]=l;t([e,Hn({icons:{main:u,mask:d},prefix:i,iconName:n,transform:o,symbol:s,maskId:c,title:r,titleId:a,extra:f,watchable:!0})])})).catch(u)}))},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:a,styles:i}=e;const o=Wt(i);let s;return o.length>0&&(n.style=o),Bt(a)&&(s=_n("generateAbstractTransformGrouping",{main:r,transform:a,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},xr={mixout:()=>({layer(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{classes:n=[]}=t;return Un({type:"layer"},(()=>{Rn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e((e=>{Array.isArray(e)?e.map((e=>{r=r.concat(e.abstract)})):r=r.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(_t.cssPrefix,"-layers"),...n].join(" ")},children:r}]}))}})},kr={mixout:()=>({counter(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return Un({type:"counter",content:e},(()=>(Rn("beforeDOMElementCreation",{content:e,params:t}),function(e){const{content:t,title:n,extra:r}=e,a=Pe(Pe(Pe({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Wt(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(_t.cssPrefix,"-layers-counter"),...r]}}))))}})},wr={mixout:()=>({text(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=Mt,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return Un({type:"text",content:e},(()=>(Rn("beforeDOMElementCreation",{content:e,params:t}),Wn({content:e,transform:Pe(Pe({},Mt),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(_t.cssPrefix,"-layers-text"),...a]}}))))}}),provides(e){e.generateLayersText=function(e,t){const{title:n,transform:r,extra:a}=t;let i=null,o=null;if(He){const t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();i=n.width/t,o=n.height/t}return _t.autoA11y&&!n&&(a.attributes["aria-hidden"]="true"),Promise.resolve([e,Wn({content:e.innerHTML,width:i,height:o,transform:r,title:n,extra:a,watchable:!0})])}}};const Sr=new RegExp('"',"ug"),Ar=[1105920,1112319],Cr=Pe(Pe(Pe(Pe({},{FontAwesome:{normal:"fas",400:"fas"}}),{"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}}),{"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}}),{"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}}),Nr=Object.keys(Cr).reduce(((e,t)=>(e[t.toLowerCase()]=Cr[t],e)),{}),Or=Object.keys(Nr).reduce(((e,t)=>{const n=Nr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e}),{});function Er(e,t){const n="".concat("data-fa-pseudo-element-pending").concat(t.replace(":","-"));return new Promise(((r,a)=>{if(null!==e.getAttribute(n))return r();const i=$t(e.children).filter((e=>e.getAttribute(dt)===t))[0],o=De.getComputedStyle(e,t),s=o.getPropertyValue("font-family"),l=s.match(Et),c=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(i&&!l)return e.removeChild(i),r();if(l&&"none"!==f&&""!==f){const f=o.getPropertyValue("content");let u=function(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(Nr[n]||{})[a]||Or[n]}(s,c);const{value:d,isSecondary:m}=function(e){const t=e.replace(Sr,""),n=function(e,t){const n=e.length;let r,a=e.charCodeAt(t);return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?1024*(a-55296)+r-56320+65536:a}(t,0),r=n>=Ar[0]&&n<=Ar[1],a=2===t.length&&t[0]===t[1];return{value:rn(a?t[0]:t),isSecondary:r||a}}(f),p=l[0].startsWith("FontAwesome");let h=xn(u,d),g=h;if(p){const e=function(e){const t=hn[e],n=xn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}(d);e.iconName&&e.prefix&&(h=e.iconName,u=e.prefix)}if(!h||m||i&&i.getAttribute(mt)===u&&i.getAttribute(pt)===g)r();else{e.setAttribute(n,g),i&&e.removeChild(i);const o={iconName:null,title:null,titleId:null,prefix:null,transform:Mt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},{extra:s}=o;s.attributes[dt]=t,qn(h,u).then((a=>{const i=Hn(Pe(Pe({},o),{},{icons:{main:a,mask:{prefix:null,iconName:null,rest:[]}},prefix:u,iconName:g,extra:s,watchable:!0})),l=Me.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(l,e.firstChild):e.appendChild(l),l.outerHTML=i.map((e=>en(e))).join("\n"),e.removeAttribute(n),r()})).catch(a)}}else r()}))}function Tr(e){return Promise.all([Er(e,"::before"),Er(e,"::after")])}function Pr(e){return!(e.parentNode===document.head||~gt.indexOf(e.tagName.toUpperCase())||e.getAttribute(dt)||e.parentNode&&"svg"===e.parentNode.tagName)}function jr(e){if(Ue)return new Promise(((t,n)=>{const r=$t(e.querySelectorAll("*")).filter(Pr).map(Tr),a=Jn("searchPseudoElements");lr(),Promise.all(r).then((()=>{a(),cr(),t()})).catch((()=>{a(),cr(),n()}))}))}let Ir=!1;const Lr=e=>e.toLowerCase().split(" ").reduce(((e,t)=>{const n=t.toLowerCase().split("-"),r=n[0];let a=n.slice(1).join("-");if(r&&"h"===a)return e.flipX=!0,e;if(r&&"v"===a)return e.flipY=!0,e;if(a=parseFloat(a),isNaN(a))return e;switch(r){case"grow":e.size=e.size+a;break;case"shrink":e.size=e.size-a;break;case"left":e.x=e.x-a;break;case"right":e.x=e.x+a;break;case"up":e.y=e.y-a;break;case"down":e.y=e.y+a;break;case"rotate":e.rotate=e.rotate+a}return e}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0});const Rr={x:0,y:0,width:"100%",height:"100%"};function _r(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}!function(e,t){let{mixoutsTo:n}=t;Tn=e,Pn={},Object.keys(jn).forEach((e=>{-1===In.indexOf(e)&&delete jn[e]})),Tn.forEach((e=>{const t=e.mixout?e.mixout():{};if(Object.keys(t).forEach((e=>{"function"==typeof t[e]&&(n[e]=t[e]),"object"==typeof t[e]&&Object.keys(t[e]).forEach((r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]}))})),e.hooks){const t=e.hooks();Object.keys(t).forEach((e=>{Pn[e]||(Pn[e]=[]),Pn[e].push(t[e])}))}e.provides&&e.provides(jn)}))}([Xt,vr,xr,kr,wr,{hooks:()=>({mutationObserverCallbacks:e=>(e.pseudoElementsCallback=jr,e)}),provides(e){e.pseudoElements2svg=function(e){const{node:t=Me}=e;_t.searchPseudoElements&&jr(t)}}},{mixout:()=>({dom:{unwatch(){lr(),Ir=!0}}}),hooks:()=>({bootstrap(){ur(Ln("mutationObserverCallbacks",{}))},noAuto(){fr&&fr.disconnect()},watch(e){const{observeMutationsRoot:t}=e;Ir?cr():ur(Ln("mutationObserverCallbacks",{observeMutationsRoot:t}))}})},{mixout:()=>({parse:{transform:e=>Lr(e)}}),hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Lr(n)),e}}),provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:a}=e;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(32*n.x,", ").concat(32*n.y,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),c={outer:i,inner:{transform:"".concat(o," ").concat(s," ").concat(l)},path:{transform:"translate(".concat(a/2*-1," -256)")}};return{tag:"g",attributes:Pe({},c.outer),children:[{tag:"g",attributes:Pe({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:Pe(Pe({},t.icon.attributes),c.path)}]}]}}}},{hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Nn(n.split(" ").map((e=>e.trim()))):{prefix:null,iconName:null,rest:[]};return r.prefix||(r.prefix=Sn()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}),provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:a,maskId:i,transform:o}=e;const{width:s,icon:l}=r,{width:c,icon:f}=a,u=function(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}({transform:o,containerWidth:c,iconWidth:s}),d={tag:"rect",attributes:Pe(Pe({},Rr),{},{fill:"white"})},m=l.children?{children:l.children.map(_r)}:{},p={tag:"g",attributes:Pe({},u.inner),children:[_r(Pe({tag:l.tag,attributes:Pe(Pe({},l.attributes),u.path)},m))]},h={tag:"g",attributes:Pe({},u.outer),children:[p]},g="mask-".concat(i||Ft()),b="clip-".concat(i||Ft()),y={tag:"mask",attributes:Pe(Pe({},Rr),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,h]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:(x=f,"g"===x.tag?x.children:[x])},y]};var x;return t.push(v,{tag:"rect",attributes:Pe({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")")},Rr)}),{children:t,attributes:n}}}},{provides(e){let t=!1;De.matchMedia&&(t=De.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:Pe(Pe({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const a=Pe(Pe({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:Pe(Pe({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:Pe(Pe({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Pe(Pe({},a),{},{values:"1;0;1;1;0;1;"})}),e.push(i),e.push({tag:"path",attributes:Pe(Pe({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Pe(Pe({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:Pe(Pe({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Pe(Pe({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return e.symbol=r,e}})}],{mixoutsTo:Fn});const zr=Fn.parse,Dr=Fn.icon;function Mr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Fr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Mr(Object(n),!0).forEach((function(t){Ur(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $r(e){return($r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ur(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hr(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Wr(e){return function(e){if(Array.isArray(e))return Br(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Br(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Br(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yr(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var Gr=["style"];var qr=!1;try{qr=!0}catch(Wo){}function Xr(e){return e&&"object"===$r(e)&&e.prefix&&e.iconName&&e.icon?e:zr.icon?zr.icon(e):null===e?null:e&&"object"===$r(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function Vr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ur({},e,t):{}}var Kr={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Zr=e.forwardRef((function(e,t){var n=Fr(Fr({},Kr),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,l=n.titleId,c=n.maskId,f=Xr(r),u=Vr("classes",[].concat(Wr(function(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,u=e.pulse,d=e.fixedWidth,m=e.inverse,p=e.border,h=e.listItem,g=e.flip,b=e.size,y=e.rotation,v=e.pull,x=(Ur(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":d,"fa-inverse":m,"fa-border":p,"fa-li":h,"fa-flip":!0===g,"fa-flip-horizontal":"horizontal"===g||"both"===g,"fa-flip-vertical":"vertical"===g||"both"===g},"fa-".concat(b),null!=b),Ur(t,"fa-rotate-".concat(y),null!=y&&0!==y),Ur(t,"fa-pull-".concat(v),null!=v),Ur(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map((function(e){return x[e]?e:null})).filter((function(e){return e}))}(n)),Wr((o||"").split(" ")))),d=Vr("transform","string"==typeof n.transform?zr.transform(n.transform):n.transform),m=Vr("mask",Xr(a)),p=Dr(f,Fr(Fr(Fr(Fr({},u),d),m),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!p)return function(){var e;!qr&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var h=p.abstract,g={ref:t};return Object.keys(n).forEach((function(e){Kr.hasOwnProperty(e)||(g[e]=n[e])})),Jr(h[0],g)}));Zr.displayName="FontAwesomeIcon",Zr.propTypes={beat:be.bool,border:be.bool,beatFade:be.bool,bounce:be.bool,className:be.string,fade:be.bool,flash:be.bool,mask:be.oneOfType([be.object,be.array,be.string]),maskId:be.string,fixedWidth:be.bool,inverse:be.bool,flip:be.oneOf([!0,!1,"horizontal","vertical","both"]),icon:be.oneOfType([be.object,be.array,be.string]),listItem:be.bool,pull:be.oneOf(["right","left"]),pulse:be.bool,rotation:be.oneOf([0,90,180,270]),shake:be.bool,size:be.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:be.bool,spinPulse:be.bool,spinReverse:be.bool,symbol:be.oneOfType([be.bool,be.string]),title:be.string,titleId:be.string,transform:be.oneOfType([be.string,be.object]),swapOpacity:be.bool};var Jr=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),i=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=r.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=Yr(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[a]=i,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[Yr(t)]=r}return e}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,l=Hr(r,Gr);return i.attrs.style=Fr(Fr({},i.attrs.style),s),t.apply(void 0,[n.tag,Fr(Fr({},i.attrs),l)].concat(Wr(a)))}.bind(null,e.createElement);const Qr={alt:be.string,title:be.string,src:be.string,mobileSrc:be.string,brandLink:be.string},ea={baseUrl:be.string,parentOrg:be.string,parentOrgUrl:be.string,animate:be.bool},ta={loggedIn:be.bool,loginLink:be.string,logoutLink:be.string,userName:be.string},na={text:be.string.isRequired,color:be.oneOf(["gold","maroon","light","dark"]),href:be.string.isRequired,classes:be.string,onClick:be.func},ra=be.shape({id:be.number,href:be.string,text:be.string,type:be.string,selected:be.bool,items:be.arrayOf(be.arrayOf(be.object)),buttons:be.arrayOf(be.shape(na)),class:be.string}),aa={isPartner:be.bool,navTree:be.arrayOf(ra),partnerLogo:be.shape(Qr),logo:be.shape(Qr),title:be.string,parentOrg:ea.parentOrg,parentOrgUrl:ea.parentOrgUrl,baseUrl:ea.baseUrl,loggedIn:ta.loggedIn,userName:ta.userName,loginLink:ta.loginLink,onLoginClick:be.func,logoutLink:ta.logoutLink,onLogoutClick:be.func,buttons:be.arrayOf(be.shape(na)),breakpoint:be.oneOf(["Lg","Xl"]),animateTitle:be.bool,expandOnHover:be.bool,mobileNavTree:be.arrayOf(ra),hasNavigation:be.bool,searchUrl:be.string,site:be.string,renderDiv:be.oneOf(["true","false"])},ia={Lg:"992px",Xl:"1260px"},oa=e.createContext(),sa=({initialValue:e,children:t})=>{const n={...e,breakpoint:ia[e.breakpoint]};return o.jsx(oa.Provider,{value:n,children:t})};sa.propTypes={initialValue:be.shape(aa).isRequired,children:be.node.isRequired};const la=()=>{const t=e.useContext(oa);if(void 0===t)throw new Error("useAppContext must be used within a AppContextProvider");return t},ca=t=>{const n=null==window?void 0:window.matchMedia(`(max-width: ${t})`),[r,a]=e.useState(null==n?void 0:n.matches),i=e=>{a(e.matches)};return e.useEffect((()=>(n.addEventListener("change",i),()=>n.removeEventListener("change",i))),[]),r};var fa,ua={exports:{}},da={};ua.exports=function(){if(fa)return da;fa=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),o=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),c=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),d=Symbol.for("react.offscreen"),m=Symbol.for("react.client.reference");function p(d){if("object"==typeof d&&null!==d){var m=d.$$typeof;switch(m){case e:switch(d=d.type){case n:case a:case r:case l:case c:return d;default:switch(d=d&&d.$$typeof){case o:case s:case u:case f:case i:return d;default:return m}}case t:return m}}}return da.ContextConsumer=i,da.ContextProvider=o,da.Element=e,da.ForwardRef=s,da.Fragment=n,da.Lazy=u,da.Memo=f,da.Portal=t,da.Profiler=a,da.StrictMode=r,da.Suspense=l,da.SuspenseList=c,da.isContextConsumer=function(e){return p(e)===i},da.isContextProvider=function(e){return p(e)===o},da.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===e},da.isForwardRef=function(e){return p(e)===s},da.isFragment=function(e){return p(e)===n},da.isLazy=function(e){return p(e)===u},da.isMemo=function(e){return p(e)===f},da.isPortal=function(e){return p(e)===t},da.isProfiler=function(e){return p(e)===a},da.isStrictMode=function(e){return p(e)===r},da.isSuspense=function(e){return p(e)===l},da.isSuspenseList=function(e){return p(e)===c},da.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===a||e===r||e===l||e===c||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===u||e.$$typeof===f||e.$$typeof===o||e.$$typeof===i||e.$$typeof===s||e.$$typeof===m||void 0!==e.getModuleId)},da.typeOf=p,da}();var ma=ua.exports;function pa(e){function t(e,r,l,c,d){for(var m,p,h,g,x,w=0,S=0,A=0,C=0,N=0,I=0,R=h=m=0,z=0,D=0,M=0,F=0,$=l.length,U=$-1,H="",W="",B="",Y="";z<$;){if(p=l.charCodeAt(z),z===U&&0!==S+C+A+w&&(0!==S&&(p=47===S?10:47),C=A=w=0,$++,U++),0===S+C+A+w){if(z===U&&(0<D&&(H=H.replace(u,"")),0<H.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:H+=l.charAt(z)}p=59}switch(p){case 123:for(m=(H=H.trim()).charCodeAt(0),h=1,F=++z;z<$;){switch(p=l.charCodeAt(z)){case 123:h++;break;case 125:h--;break;case 47:switch(p=l.charCodeAt(z+1)){case 42:case 47:e:{for(R=z+1;R<U;++R)switch(l.charCodeAt(R)){case 47:if(42===p&&42===l.charCodeAt(R-1)&&z+2!==R){z=R+1;break e}break;case 10:if(47===p){z=R+1;break e}}z=R}}break;case 91:p++;case 40:p++;case 34:case 39:for(;z++<U&&l.charCodeAt(z)!==p;);}if(0===h)break;z++}if(h=l.substring(F,z),0===m&&(m=(H=H.replace(f,"").trim()).charCodeAt(0)),64===m){switch(0<D&&(H=H.replace(u,"")),p=H.charCodeAt(1)){case 100:case 109:case 115:case 45:D=r;break;default:D=j}if(F=(h=t(r,D,h,p,d+1)).length,0<L&&(x=s(3,h,D=n(j,H,M),r,E,O,F,p,d,c),H=D.join(""),void 0!==x&&0===(F=(h=x.trim()).length)&&(p=0,h="")),0<F)switch(p){case 115:H=H.replace(k,o);case 100:case 109:case 45:h=H+"{"+h+"}";break;case 107:h=(H=H.replace(b,"$1 $2"))+"{"+h+"}",h=1===P||2===P&&i("@"+h,3)?"@-webkit-"+h+"@"+h:"@"+h;break;default:h=H+h,112===c&&(W+=h,h="")}else h=""}else h=t(r,n(r,H,M),h,c,d+1);B+=h,h=M=D=R=m=0,H="",p=l.charCodeAt(++z);break;case 125:case 59:if(1<(F=(H=(0<D?H.replace(u,""):H).trim()).length))switch(0===R&&(m=H.charCodeAt(0),45===m||96<m&&123>m)&&(F=(H=H.replace(" ",":")).length),0<L&&void 0!==(x=s(1,H,r,e,E,O,W.length,c,d,c))&&0===(F=(H=x.trim()).length)&&(H="\0\0"),m=H.charCodeAt(0),p=H.charCodeAt(1),m){case 0:break;case 64:if(105===p||99===p){Y+=H+l.charAt(z);break}default:58!==H.charCodeAt(F-1)&&(W+=a(H,m,p,H.charCodeAt(2)))}M=D=R=m=0,H="",p=l.charCodeAt(++z)}}switch(p){case 13:case 10:47===S?S=0:0===1+m&&107!==c&&0<H.length&&(D=1,H+="\0"),0<L*_&&s(0,H,r,e,E,O,W.length,c,d,c),O=1,E++;break;case 59:case 125:if(0===S+C+A+w){O++;break}default:switch(O++,g=l.charAt(z),p){case 9:case 32:if(0===C+w+S)switch(N){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===C+S+w&&(D=M=1,g="\f"+g);break;case 108:if(0===C+S+w+T&&0<R)switch(z-R){case 2:112===N&&58===l.charCodeAt(z-3)&&(T=N);case 8:111===I&&(T=I)}break;case 58:0===C+S+w&&(R=z);break;case 44:0===S+A+C+w&&(D=1,g+="\r");break;case 34:case 39:0===S&&(C=C===p?0:0===C?p:C);break;case 91:0===C+S+A&&w++;break;case 93:0===C+S+A&&w--;break;case 41:0===C+S+w&&A--;break;case 40:if(0===C+S+w){if(0===m)if(2*N+3*I==533);else m=1;A++}break;case 64:0===S+A+C+w+R+h&&(h=1);break;case 42:case 47:if(!(0<C+w+A))switch(S){case 0:switch(2*p+3*l.charCodeAt(z+1)){case 235:S=47;break;case 220:F=z,S=42}break;case 42:47===p&&42===N&&F+2!==z&&(33===l.charCodeAt(F+2)&&(W+=l.substring(F,z+1)),g="",S=0)}}0===S&&(H+=g)}I=N,N=p,z++}if(0<(F=W.length)){if(D=r,0<L&&(void 0!==(x=s(2,W,D,e,E,O,F,c,d,c))&&0===(W=x).length))return Y+W+B;if(W=D.join(",")+"{"+W+"}",0!=P*T){switch(2!==P||i(W,2)||(T=0),T){case 111:W=W.replace(v,":-moz-$1")+W;break;case 112:W=W.replace(y,"::-webkit-input-$1")+W.replace(y,"::-moz-$1")+W.replace(y,":-ms-input-$1")+W}T=0}}return Y+W+B}function n(e,t,n){var a=t.trim().split(h);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<i;++s)t[s]=r(e,t[s],n).trim();break;default:var l=s=0;for(t=[];s<i;++s)for(var c=0;c<o;++c)t[l++]=r(e[c]+" ",a[s],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,n,r){var o=e+";",s=2*t+3*n+4*r;if(944===s){e=o.indexOf(":",9)+1;var l=o.substring(e,o.length-1).trim();return l=o.substring(0,e).trim()+l+";",1===P||2===P&&i(l,1)?"-webkit-"+l+l:l}if(0===P||2===P&&!i(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(N,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(l=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+l+o;case 1005:return m.test(o)?o.replace(d,":-webkit-")+o.replace(d,":-moz-")+o:o;case 1e3:switch(t=(l=o.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=o.replace(x,"tb");break;case 232:l=o.replace(x,"tb-rl");break;case 220:l=o.replace(x,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+l+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(l=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:o=o.replace(l,"-webkit-"+l)+";"+o;break;case 207:case 102:o=o.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(l,"-webkit-"+l)+";"+o.replace(l,"-ms-"+l+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return l=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+l+"-ms-flex-"+l+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(S,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(S,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):o.replace(l,"-webkit-"+l)+o.replace(l,"-moz-"+l.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+r&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function i(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),R(2!==t?r:r.replace(A,"$1"),n,t)}function o(e,t){var n=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(w," or ($1)").substring(4):"("+t+")"}function s(e,t,n,r,a,i,o,s,l,f){for(var u,d=0,m=t;d<L;++d)switch(u=I[d].call(c,e,m,n,r,a,i,o,s,l,f)){case void 0:case!1:case!0:case null:break;default:m=u}if(m!==t)return m}function l(e){return void 0!==(e=e.prefix)&&(R=null,e?"function"!=typeof e?P=1:(P=2,R=e):P=0),l}function c(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<L){var a=s(-1,n,r,r,E,O,0,0,0,0);void 0!==a&&"string"==typeof a&&(n=a)}var i=t(j,r,n,0,0);return 0<L&&(void 0!==(a=s(-2,i,r,r,E,O,i.length,0,0,0))&&(i=a)),T=0,O=E=1,i}var f=/^\0+/g,u=/[\0\r\f]/g,d=/: */g,m=/zoo|gra/,p=/([,: ])(transform)/g,h=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,v=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,S=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,N=/([^-])(image-set\()/,O=1,E=1,T=0,P=1,j=[],I=[],L=0,R=null,_=0;return c.use=function e(t){switch(t){case void 0:case null:L=I.length=0;break;default:if("function"==typeof t)I[L++]=t;else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else _=0|!!t}return e},c.set=l,void 0!==e&&l(e),c}var ha={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ga(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var ba,ya=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,va=ga((function(e){return ya.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),xa={exports:{}},ka={};xa.exports=function(){if(ba)return ka;ba=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var d=e.$$typeof;switch(d){case t:switch(e=e.type){case l:case c:case r:case i:case a:case u:return e;default:switch(e=e&&e.$$typeof){case s:case f:case p:case m:case o:return e;default:return d}}case n:return d}}}function x(e){return v(e)===c}return ka.AsyncMode=l,ka.ConcurrentMode=c,ka.ContextConsumer=s,ka.ContextProvider=o,ka.Element=t,ka.ForwardRef=f,ka.Fragment=r,ka.Lazy=p,ka.Memo=m,ka.Portal=n,ka.Profiler=i,ka.StrictMode=a,ka.Suspense=u,ka.isAsyncMode=function(e){return x(e)||v(e)===l},ka.isConcurrentMode=x,ka.isContextConsumer=function(e){return v(e)===s},ka.isContextProvider=function(e){return v(e)===o},ka.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},ka.isForwardRef=function(e){return v(e)===f},ka.isFragment=function(e){return v(e)===r},ka.isLazy=function(e){return v(e)===p},ka.isMemo=function(e){return v(e)===m},ka.isPortal=function(e){return v(e)===n},ka.isProfiler=function(e){return v(e)===i},ka.isStrictMode=function(e){return v(e)===a},ka.isSuspense=function(e){return v(e)===u},ka.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===i||e===a||e===u||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===m||e.$$typeof===o||e.$$typeof===s||e.$$typeof===f||e.$$typeof===g||e.$$typeof===b||e.$$typeof===y||e.$$typeof===h)},ka.typeOf=v,ka}();var wa=xa.exports,Sa={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Aa={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ca={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Na={};function Oa(e){return wa.isMemo(e)?Ca:Na[e.$$typeof]||Sa}Na[wa.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Na[wa.Memo]=Ca;var Ea=Object.defineProperty,Ta=Object.getOwnPropertyNames,Pa=Object.getOwnPropertySymbols,ja=Object.getOwnPropertyDescriptor,Ia=Object.getPrototypeOf,La=Object.prototype;var Ra=function e(t,n,r){if("string"!=typeof n){if(La){var a=Ia(n);a&&a!==La&&e(t,a,r)}var i=Ta(n);Pa&&(i=i.concat(Pa(n)));for(var o=Oa(t),s=Oa(n),l=0;l<i.length;++l){var c=i[l];if(!(Aa[c]||r&&r[c]||s&&s[c]||o&&o[c])){var f=ja(n,c);try{Ea(t,c,f)}catch(Wo){}}}}return t};const _a=n(Ra);var za={env:{NODE_ENV:"production"}};function Da(){return(Da=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ma=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},Fa=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!ma.typeOf(e)},$a=Object.freeze([]),Ua=Object.freeze({});function Ha(e){return"function"==typeof e}function Wa(e){return e.displayName||e.name||"Component"}function Ba(e){return e&&"string"==typeof e.styledComponentId}var Ya=void 0!==za.env&&(za.env.REACT_APP_SC_ATTR||za.env.SC_ATTR)||"data-styled",Ga="undefined"!=typeof window&&"HTMLElement"in window,qa=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==za.env&&(void 0!==za.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==za.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==za.env.REACT_APP_SC_DISABLE_SPEEDY&&za.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==za.env.SC_DISABLE_SPEEDY&&""!==za.env.SC_DISABLE_SPEEDY?"false"!==za.env.SC_DISABLE_SPEEDY&&za.env.SC_DISABLE_SPEEDY:"production"!==za.env.NODE_ENV));function Xa(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Va=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)(a<<=1)<0&&Xa(16,""+e);this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),s=0,l=t.length;s<l;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),Ka=new Map,Za=new Map,Ja=1,Qa=function(e){if(Ka.has(e))return Ka.get(e);for(;Za.has(Ja);)Ja++;var t=Ja++;return Ka.set(e,t),Za.set(t,e),t},ei=function(e){return Za.get(e)},ti=function(e,t){t>=Ja&&(Ja=t+1),Ka.set(e,t),Za.set(t,e)},ni="style["+Ya+'][data-styled-version="5.3.11"]',ri=new RegExp("^"+Ya+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ai=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},ii=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var s=o.match(ri);if(s){var l=0|parseInt(s[1],10),c=s[2];0!==l&&(ti(c,l),ai(e,c,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},oi=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(Ya))return r}}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(Ya,"active"),r.setAttribute("data-styled-version","5.3.11");var o="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},si=function(){function e(e){var t=this.element=oi(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}Xa(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(n){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),li=function(){function e(e){var t=this.element=oi(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ci=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),fi=Ga,ui={isServer:!Ga,useCSSOMInjection:!qa},di=function(){function e(e,t,n){void 0===e&&(e=Ua),void 0===t&&(t={}),this.options=Da({},ui,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ga&&fi&&(fi=!1,function(e){for(var t=document.querySelectorAll(ni),n=0,r=t.length;n<r;n++){var a=t[n];a&&"active"!==a.getAttribute(Ya)&&(ii(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(e){return Qa(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Da({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,a=t.target,e=n?new ci(a):r?new si(a):new li(a),new Va(e)));var e,t,n,r,a},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(Qa(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Qa(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(Qa(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=0;a<n;a++){var i=ei(a);if(void 0!==i){var o=e.names.get(i),s=t.getGroup(a);if(o&&s&&o.size){var l=Ya+".g"+a+'[id="'+i+'"]',c="";void 0!==o&&o.forEach((function(e){e.length>0&&(c+=e+",")})),r+=""+s+l+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),mi=/(a)(d)/gi,pi=function(e){return String.fromCharCode(e+(e>25?39:97))};function hi(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=pi(t%52)+n;return(pi(t%52)+n).replace(mi,"$1-$2")}var gi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},bi=function(e){return gi(5381,e)};var yi=bi("5.3.11"),vi=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ha(n)&&!Ba(n))return!1}return!0}(e),this.componentId=t,this.baseHash=gi(yi,t),this.baseStyle=n,di.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))a.push(this.staticRulesId);else{var i=Li(this.rules,e,t,n).join(""),o=hi(gi(this.baseHash,i)>>>0);if(!t.hasNameForId(r,o)){var s=n(i,"."+o,void 0,r);t.insertRules(r,o,s)}a.push(o),this.staticRulesId=o}else{for(var l=this.rules.length,c=gi(this.baseHash,n.hash),f="",u=0;u<l;u++){var d=this.rules[u];if("string"==typeof d)f+=d;else if(d){var m=Li(d,e,t,n),p=Array.isArray(m)?m.join(""):m;c=gi(c,p+u),f+=p}}if(f){var h=hi(c>>>0);if(!t.hasNameForId(r,h)){var g=n(f,"."+h,void 0,r);t.insertRules(r,h,g)}a.push(h)}}return a.join(" ")},e}(),xi=/^\s*\/\/.*$/gm,ki=[":","[",".","#"];var wi=e.createContext();wi.Consumer;var Si=e.createContext(),Ai=(Si.Consumer,new di),Ci=function(){var e,t,n,r,a=Ua,i=a.options,o=void 0===i?Ua:i,s=a.plugins,l=void 0===s?$a:s,c=new pa(o),f=[],u=function(e){function t(t){if(t)try{e(t+"}")}catch(n){}}return function(n,r,a,i,o,s,l,c,f,u){switch(n){case 1:if(0===f&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(a[0]+r),"";default:return r+(0===u?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){f.push(e)})),d=function(n,a,i){return 0===a&&-1!==ki.indexOf(i[t.length])||i.match(r)?n:"."+e};function m(a,i,o,s){void 0===s&&(s="&");var l=a.replace(xi,""),f=i&&o?o+" "+i+" { "+l+" }":l;return e=s,t=i,n=new RegExp("\\"+t+"\\b","g"),r=new RegExp("(\\"+t+"\\b){2,}"),c(o||!i?"":i,f)}return c.use([].concat(l,[function(e,r,a){2===e&&a.length&&a[0].lastIndexOf(t)>0&&(a[0]=a[0].replace(n,d))},u,function(e){if(-2===e){var t=f;return f=[],t}}])),m.hash=l.length?l.reduce((function(e,t){return t.name||Xa(15),gi(e,t.name)}),5381).toString():"",m}();var Ni=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Ci);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return Xa(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=Ci),this.name+e.hash},e}(),Oi=/([A-Z])/,Ei=/([A-Z])/g,Ti=/^ms-/,Pi=function(e){return"-"+e.toLowerCase()};function ji(e){return Oi.test(e)?e.replace(Ei,Pi).replace(Ti,"-ms-"):e}var Ii=function(e){return null==e||!1===e||""===e};function Li(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,s=e.length;o<s;o+=1)""!==(a=Li(e[o],t,n,r))&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}return Ii(e)?"":Ba(e)?"."+e.styledComponentId:Ha(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:Li(e(t),t,n,r):e instanceof Ni?n?(e.inject(n,r),e.getName(r)):e:Fa(e)?function e(t,n){var r,a,i=[];for(var o in t)t.hasOwnProperty(o)&&!Ii(t[o])&&(Array.isArray(t[o])&&t[o].isCss||Ha(t[o])?i.push(ji(o)+":",t[o],";"):Fa(t[o])?i.push.apply(i,e(t[o],o)):i.push(ji(o)+": "+(r=o,(null==(a=t[o])||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||r in ha||r.startsWith("--")?String(a).trim():a+"px")+";")));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString();var l}var Ri=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function _i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ha(e)||Fa(e)?Ri(Li(Ma($a,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ri(Li(Ma(e,n)))}var zi=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Di=/(^-|-$)/g;function Mi(e){return e.replace(zi,"-").replace(Di,"")}function Fi(e){return"string"==typeof e&&"production"===za.env.NODE_ENV}var $i=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ui=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Hi(e,t,n){var r=e[n];$i(t)&&$i(r)?Wi(r,t):e[n]=t}function Wi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if($i(o))for(var s in o)Ui(s)&&Hi(e,o[s],s)}return e}var Bi=e.createContext();Bi.Consumer;var Yi={};function Gi(t,n,r){var a,i=Ba(t),o=!Fi(t),s=n.attrs,l=void 0===s?$a:s,c=n.componentId,f=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Mi(e);Yi[n]=(Yi[n]||0)+1;var r=n+"-"+function(e){return hi(bi(e)>>>0)}("5.3.11"+n+Yi[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):c,u=n.displayName,d=void 0===u?Fi(a=t)?"styled."+a:"Styled("+Wa(a)+")":u,m=n.displayName&&n.componentId?Mi(n.displayName)+"-"+n.componentId:n.componentId||f,p=i&&t.attrs?Array.prototype.concat(t.attrs,l).filter(Boolean):l,h=n.shouldForwardProp;i&&t.shouldForwardProp&&(h=n.shouldForwardProp?function(e,r,a){return t.shouldForwardProp(e,r,a)&&n.shouldForwardProp(e,r,a)}:t.shouldForwardProp);var g,b=new vi(r,m,i?t.componentStyle:void 0),y=b.isStatic&&0===l.length,v=function(t,n){return function(t,n,r,a){var i,o,s,l,c,f=t.attrs,u=t.componentStyle,d=t.defaultProps,m=t.foldedComponentIds,p=t.shouldForwardProp,h=t.styledComponentId,g=t.target,b=function(e,t,n){void 0===e&&(e=Ua);var r=Da({},t,{theme:e}),a={};return n.forEach((function(e){var t,n,i,o=e;for(t in Ha(o)&&(o=o(r)),o)r[t]=a[t]="className"===t?(n=a[t],i=o[t],n&&i?n+" "+i:n||i):o[t]})),[r,a]}(function(e,t,n){return void 0===n&&(n=Ua),e.theme!==n.theme&&e.theme||t||n.theme}(n,e.useContext(Bi),d)||Ua,n,f),y=b[0],v=b[1],x=(i=u,o=a,s=y,l=e.useContext(wi)||Ai,c=e.useContext(Si)||Ci,o?i.generateAndInjectStyles(Ua,l,c):i.generateAndInjectStyles(s,l,c)),k=r,w=v.$as||n.$as||v.as||n.as||g,S=Fi(w),A=v!==n?Da({},n,{},v):n,C={};for(var N in A)"$"!==N[0]&&"as"!==N&&("forwardedAs"===N?C.as=A[N]:(p?p(N,va,w):!S||va(N))&&(C[N]=A[N]));return n.style&&v.style!==n.style&&(C.style=Da({},n.style,{},v.style)),C.className=Array.prototype.concat(m,h,x!==h?x:null,n.className,v.className).filter(Boolean).join(" "),C.ref=k,e.createElement(w,C)}(g,t,n,y)};return v.displayName=d,(g=e.forwardRef(v)).attrs=p,g.componentStyle=b,g.displayName=d,g.shouldForwardProp=h,g.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):$a,g.styledComponentId=m,g.target=i?t.target:t,g.withComponent=function(e){var t=n.componentId,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["componentId"]),i=t&&t+"-"+(Fi(e)?e:Mi(Wa(e)));return Gi(e,Da({},a,{attrs:p,componentId:i}),r)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?Wi({},t.defaultProps,e):e}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&_a(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var qi=function(e){return function e(t,n,r){if(void 0===r&&(r=Ua),!ma.isValidElementType(n))return Xa(1,String(n));var a=function(){return t(n,r,_i.apply(void 0,arguments))};return a.withConfig=function(a){return e(t,n,Da({},r,{},a))},a.attrs=function(a){return e(t,n,Da({},r,{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},a}(Gi,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qi[e]=qi(e)}));const Xi=qi.div`
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
`,Vi=qi.div`
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
`,Ki={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar"},Zi=()=>{const{loggedIn:e,userName:t,logoutLink:n,loginLink:r,onLoginClick:a,onLogoutClick:i,breakpoint:s}=la();return o.jsx(Vi,{className:"nav-link login-status",breakpoint:s,children:e?o.jsxs(o.Fragment,{children:[t?o.jsx("span",{className:"name","data-testid":"user-name",children:t}):"",o.jsx("a",{className:"signout",href:n,onClick:e=>{ye({...Ki,text:"sign out"}),null==i||i(e)},children:"Sign Out"})]}):o.jsx("a",{href:r,onClick:e=>{ye({...Ki,text:"sign in"}),null==a||a(e)},children:"Sign In"})})},Ji=qi.form`
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
`,Qi={event:"search",action:"type",name:"onenter",type:"main search",region:"navbar",section:"topbar"},eo=()=>{const{breakpoint:t,searchUrl:n,site:r}=la(),a=ca(t),i=e.useRef(null),[s,l]=e.useState(!1);e.useEffect((()=>{s&&i.current.focus()}),[s]);const c=()=>{l((e=>{const t=!e;return ye({...Qi,event:"link",action:"click",name:"onclick",text:t?"search icon":"close search icon"}),t}))};return o.jsxs(Ji,{breakpoint:t,action:n,onSubmit:e=>{const t=e.target;e.preventDefault(),ye({...Qi,text:e.target.elements.q.value}),setTimeout((()=>{t.submit()}),100)},method:"get",name:"gs",className:s?"open-search":"","data-testid":"universal-nav-search-form",children:[a?o.jsxs("label",{children:[o.jsx(Zr,{icon:Ae}),o.jsx("input",{ref:i,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0,onChange:e=>ye({...Qi,text:e.target.value})})]}):o.jsxs(o.Fragment,{children:[o.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:c,className:"search-button","data-testid":"search-button",children:o.jsx(Zr,{icon:Ae})}),s&&o.jsxs(o.Fragment,{children:[o.jsx("input",{ref:i,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0}),o.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:c,className:"close-search","data-testid":"close-search",children:o.jsx(Zr,{icon:Ne})})]})]}),o.jsx("input",{name:"url_host",value:r,type:"hidden"}),o.jsx("input",{name:"site",value:"default_collection",type:"hidden"}),o.jsx("input",{name:"sort",value:"date:D:L:d1",type:"hidden"}),o.jsx("input",{name:"output",value:"xml_no_dtd",type:"hidden"}),o.jsx("input",{name:"ie",value:"UTF-8",type:"hidden"}),o.jsx("input",{name:"oe",value:"UTF-8",type:"hidden"}),o.jsx("input",{name:"client",value:"asu_frontend",type:"hidden"}),o.jsx("input",{name:"proxystylesheet",value:"asu_frontend",type:"hidden"})]})},to={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar",text:""},no=()=>{const{breakpoint:e}=la();const t=[{className:"nav-link visually-hidden-focusable",href:"#skip-to-content",text:"Skip to main content"},{className:"nav-link visually-hidden-focusable",href:`https://accessibility.asu.edu/report?a11yref=${function(){try{return window.location.href}catch(e){return console.error(e),""}}()}`,text:"Report an accessibility problem"},{className:"nav-link",href:"https://asu.edu",text:"ASU Home"},{className:"nav-link",href:"https://my.asu.edu",text:"My ASU"},{className:"nav-link",href:"https://www.asu.edu/academics/colleges-schools",text:"Colleges and Schools"}];return o.jsx(Xi,{breakpoint:e,className:"universal-nav","data-testid":"universal-navbar","data-elastic-exclude":"data-elastic-exclude",children:o.jsx("div",{className:"container-xl",children:o.jsx("div",{className:"header-top",children:o.jsxs("nav",{className:"nav","aria-label":"ASU Global",children:[o.jsxs("div",{className:"links-container",children:[t.map((e=>o.jsx("a",{className:e.className,href:e.href,onClick:()=>ye({...to,text:e.text}),children:e.text},e.href))),o.jsx(Zi,{})]}),o.jsx(eo,{})]})})})})},ro=qi.div`
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
`,ao=qi.a`
  display: unset;
  padding: 0;
  margin: 0;
  font-size: unset;
  line-height: unset;
  white-space: unset;
`,io=ue(),oo=`${io}/assets/img/arizona-state-university-logo-vertical.png`,so=`${io}/assets/img/arizona-state-university-logo.png`,lo=()=>{const{logo:e}=la();return o.jsxs(ao,{href:(null==e?void 0:e.brandLink)??"https://asu.edu",className:"navbar-brand","data-testid":"logo",onClick:()=>ye({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"asu logo"}),children:[o.jsx("img",{className:"vert",src:(null==e?void 0:e.src)??oo,alt:(null==e?void 0:e.alt)??"Arizona State University logo",title:(null==e?void 0:e.title)??"ASU homepage",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),o.jsx("img",{className:"horiz",src:(null==e?void 0:e.mobileSrc)??so,alt:(null==e?void 0:e.alt)??"Arizona State University logo",title:(null==e?void 0:e.title)??"ASU homepage",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})},co=qi.a`
  font-family:
    Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif;
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
`,fo=({href:e,color:t,text:n,classes:r,onClick:a})=>o.jsx(co,{href:e,...e?{}:{tabIndex:0},className:`button-${t} ${r??""}`,onClick:a,children:n});fo.propTypes={...na};const uo=qi.nav`
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
`,mo=qi.div`
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
`,po={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},ho=({text:e})=>o.jsx("h3",{className:"ul-heading",children:e});ho.propTypes={text:be.string};const go=({link:e,dropdownName:t,handleLinkEvent:n})=>o.jsx("li",{className:"nav-button",children:o.jsx(fo,{text:e.text,color:e.color||"dark",href:e.href,onClick:t=>n(t,e),onKeyDown:n,onFocus:()=>ye({text:e.text,component:t}),"data-testid":"submenu-item"})});go.propTypes={link:be.shape({text:be.string,color:be.string,href:be.string}),dropdownName:be.string,handleLinkEvent:be.func};const bo=({link:e,dropdownName:t,handleLinkEvent:n})=>o.jsx("li",{className:"nav-link",children:o.jsx("a",{...e.href?{}:{tabIndex:0},href:e.href,onClick:t=>n(t,e),onKeyDown:t=>n(t,e),onFocus:()=>ye({text:e.text,component:t}),"data-testid":"submenu-item",children:e.text})});bo.propTypes={link:be.shape({text:be.string,href:be.string}),dropdownName:be.string,handleLinkEvent:be.func};const yo=({dropdownName:t,items:n,buttons:r,classes:a,listId:i,setItemOpened:s,parentLink:l})=>{const{breakpoint:c}=la(),f=(null==n?void 0:n.length)>2,u=e.useRef(null),[d,m]=e.useState(!1),p=(null==n?void 0:n.length)>1;e.useEffect((()=>{if(window&&u.current){const e=u.current.getBoundingClientRect().left,t=.55*window.innerWidth;m(e>t)}}),[]);const h=e=>e.stopPropagation(),g=(e,t)=>{var n;const{key:r,type:a,target:i}=e,{parentElement:o}=i;h(e),"ArrowDown"===r?(e.preventDefault(),(()=>{var e;const t=null==(e=o.nextElementSibling)?void 0:e.firstChild;t&&t.focus()})()):"ArrowUp"===r?(e.preventDefault(),(()=>{var e;const t=null==(e=o.previousElementSibling)?void 0:e.firstChild;t&&t.focus()})()):"Escape"===r?(s(),l&&l.focus()):"Enter"!==r&&" "!==r&&"click"!==a||(null==(n=null==t?void 0:t.onClick)||n.call(t,e),ye({...po,text:t.text}))};return o.jsxs(mo,{ref:u,className:`${a}${d?" aligned-right":""}${f?" mega":""}`,breakpoint:c,children:[o.jsx("div",{id:p?i:null,className:"dropdown-container",children:null==n?void 0:n.map(((e,n)=>{const r=fe(`dropdown-item-${n}-`).next().value;return o.jsx("ul",{id:p?`${i}-${r}`:i,children:e.map(((e,n)=>((e,n)=>{const r=`${e.text}-${e.href||n}`;return"heading"===e.type?o.jsx(ho,{text:e.text},r):"button"===e.type?o.jsx(go,{link:e,dropdownName:t,handleLinkEvent:g},r):o.jsx(bo,{link:e,dropdownName:t,handleLinkEvent:g},r)})(e,n)))},r)}))}),r&&o.jsx("div",{className:"dropdown-button-container",children:o.jsx("div",{children:r.map(((e,t)=>o.jsx(fo,{color:e.color,text:e.text,href:e.href,onClick:h},`${e.text}-${e.href||t}`)))})})]})};yo.propTypes={dropdownName:be.string,items:be.arrayOf(be.arrayOf(be.shape({text:be.string,selected:be.bool,onClick:be.func,href:be.string}))),buttons:be.arrayOf(be.shape(na)),classes:be.string,listId:be.string,setItemOpened:be.func,parentLink:be.shape({focus:be.func})};const vo=qi.li`
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
`,xo={event:"collapse",type:"click"},ko={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},wo=({children:e})=>o.jsxs(o.Fragment,{children:[o.jsx(Zr,{icon:Se,className:"icon-nav-item",alt:""}),o.jsx("span",{className:"mobile-only",children:e})]});wo.propTypes={children:be.node};const So=({link:t,setItemOpened:n,itemOpened:r})=>{const a=e.useRef(null),i=e.useRef(null),s=t.id===r,{breakpoint:l,expandOnHover:c,title:f}=la(),u=ca(l);e.useEffect((()=>{const e=e=>{var t;s&&!(null==(t=null==a?void 0:a.current)?void 0:t.contains(e.target))&&n()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[s]);const d=e.useMemo((()=>{var e;return"icon-home"===t.type?o.jsx(wo,{children:t.text}):o.jsxs("span",{children:[t.text,!!(null==(e=t.items)?void 0:e.length)&&o.jsx(Zr,{icon:Ce,className:"chevron-icon "+(s?"open":""),alt:""})]})}),[t]),m=()=>{var e;const n=!!(null==(e=t.items)?void 0:e.length),r=s?"close":"open",{text:a}=t;ye(n?{...ko,...xo,action:r,text:a}:{...ko,text:"icon-home"===t.type?"home button":a})},p=e=>{var r,a;if(!t.items&&t.href)return void ye({...ko,text:t.text});const{key:i}=e;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"," ","Escape","Click"].includes(i)){if(e.preventDefault(),"Escape"===i&&s)return void n();if("Enter"!==i&&" "!==i||(t.items&&(c||u?u&&n():n()),m(),null==(r=t.onClick)||r.call(t,e)),("ArrowDown"===i||"ArrowRight"===i)&&s){const e=document.querySelectorAll(`.header-dropdown-${t.id} li.nav-link a`);e.length&&e[0].focus()}}else"click"===e.type&&t.items?(e.preventDefault(),m(),n()):"click"===e.type&&(m(),null==(a=t.onClick)||a.call(t,e))},h=()=>{c&&!u&&(n(),m())};return o.jsxs(vo,{breakpoint:l,ref:a,onMouseEnter:h,onMouseLeave:h,children:[o.jsx("a",{onKeyDown:p,onClick:p,href:t.href,...t.items?{"aria-expanded":s}:{},...t.href?{}:{tabIndex:0},"aria-owns":t.items?`dropdown-${t.id}`:null,className:`${t.class?t.class:""}${t.selected?" nav-item-selected":""}${s?" open-link":""}`,"data-testid":"nav-item",title:"icon-home"===t.type&&f?`${f} home page`:t.text,ref:i,children:d}),t.items&&o.jsx(yo,{items:t.items,buttons:t.buttons,dropdownName:t.text,classes:`header-dropdown-${t.id} ${s?"opened":""}`,listId:`dropdown-${t.id}`,setItemOpened:n,parentLink:null==i?void 0:i.current})]})};So.propTypes={link:ra,setItemOpened:be.func,itemOpened:be.number};const Ao=()=>{const{navTree:t,mobileNavTree:n,buttons:r,breakpoint:a}=la(),i=ca(a),[s,l]=e.useState(void 0),c=(e,t)=>{const n={...e,id:t},r=fe(`${e.text}-${t}-`).next().value;return o.jsx(So,{link:n,setItemOpened:()=>{return e=t,void l((t=>s===e?void 0:e));var e},itemOpened:s},r)};return o.jsxs(uo,{breakpoint:a,"data-testid":"navigation","aria-label":"Site",children:[((null==t?void 0:t.length)||(null==n?void 0:n.length)||(null==r?void 0:r.length))&&o.jsxs("div",{className:"content-container",children:[((null==t?void 0:t.length)||(null==n?void 0:n.length))&&o.jsx("ul",{className:"nav-list",children:(null==n?void 0:n.length)&&i?null==n?void 0:n.map(((e,t)=>c(e,t))):null==t?void 0:t.map(((e,t)=>c(e,t)))}),!!(null==r?void 0:r.length)&&o.jsx("form",{className:"buttons-container","data-testid":"buttons-container",children:null==r?void 0:r.map((t=>e.createElement(fo,{...t,key:t.text,onClick:()=>ye({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:t.text})})))})]}),i&&o.jsx(no,{})]})},Co=qi.div`
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
`,No=ue(),Oo=`${No}/assets/img/arizona-state-university-logo-vertical.png`,Eo=`${No}/assets/img/arizona-state-university-logo.png`,To=`${No}/assets/img/asu-starbucks.png`,Po=()=>{const{partnerLogo:e,logo:t,breakpoint:n}=la();return o.jsxs(Co,{breakpoint:n,"data-testid":"partner",children:[o.jsx("a",{href:(null==e?void 0:e.brandLink)??"https://starbucks.asu.edu/",onClick:()=>ye({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"partner logo"}),children:o.jsx("img",{src:(null==e?void 0:e.src)??To,alt:(null==e?void 0:e.alt)??"ASU Starbucks logo",width:"232",height:"81",decoding:"async",fetchpriority:"high"})}),o.jsxs("a",{href:(null==t?void 0:t.brandLink)??"https://asu.edu",onClick:()=>ye({text:"asu logo"}),children:[o.jsx("img",{className:"vert",src:(null==t?void 0:t.src)??Oo,alt:(null==t?void 0:t.alt)??"Arizona State University logo",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),o.jsx("img",{className:"horiz",src:(null==t?void 0:t.mobileSrc)??Eo,alt:(null==t?void 0:t.alt)??"Arizona State University logo",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})]})},jo=e=>{const t=new Date,n=e||window.location.hostname,r=localStorage.getItem("title_loaded"),a=t.getTime()>parseInt(r,10),i="localhost"===n,o=document.referrer.includes(n);if(i||!o&&(!r||a)){const e=((e,t)=>{const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n})(t,10).getTime();return localStorage.setItem("title_loaded",e.toString()),!0}return!1},Io={"992px":"993px","1260px":"1261px"},Lo=qi.div`
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

  @media (min-width: ${({breakpoint:e})=>Io[e]}) {
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
`,Ro=()=>{const[t,n]=e.useState(!1),{title:r,parentOrg:a,parentOrgUrl:i,baseUrl:s,breakpoint:l,animateTitle:c}=la();return e.useEffect((()=>{if(!1!==c){let e="/"===s?window.location.hostname:s;e.includes(window.location.hostname)||0!==e.indexOf("/")||(e=window.location.hostname+e),jo(e)&&n(!0)}}),[t,c,s]),a?o.jsxs(Lo,{breakpoint:l,className:"title","data-testid":"title",children:[o.jsx("a",{className:"unit-name",href:i,onClick:()=>ye({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:a}),title:`${a} home page`,children:a}),o.jsx("a",{className:"subunit-name "+(t?"active":""),href:s,onClick:()=>ye({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:r}),title:`${r} home page`,children:r})]}):o.jsx(Lo,{breakpoint:l,className:"title","data-testid":"title",children:o.jsx("a",{className:"title-subunit-name "+(t?"active":""),href:s,onClick:()=>ye({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:r}),title:`${r} home page`,children:r})})};Ro.propTypes={...ea};const _o=()=>{const{breakpoint:t,isPartner:n,hasNavigation:r}=la(),[a,i]=e.useState(!1),s=ca(t);return o.jsxs(o.Fragment,{children:[!s&&o.jsx(no,{}),o.jsx(ro,{breakpoint:t,children:o.jsx("div",{className:"container-xl",children:o.jsx("div",{className:"header-main",children:o.jsxs("div",{className:"navbar navbar-expand-xl "+(n?"partner":""),children:[!n&&o.jsx(lo,{}),o.jsx("button",{className:"navbar-toggler"+(a?"":" collapsed"),type:"button",onClick:()=>{i((e=>!e)),ye({event:"collapse",action:a?"close":"open",type:"click",text:"menu button tablet"})},"aria-label":"Toggle navigation",children:o.jsx(Zr,{icon:a?Ne:we,alt:""})}),o.jsxs("div",{className:`${n?"":"expand-title"}${r?"":" no-navigation"}`,children:[n?o.jsx(Po,{}):o.jsx(Ro,{}),!s&&o.jsx(Ao,{})]}),a&&s&&o.jsx(Ao,{})]})})})})]})},zo=e=>{if(!Array.isArray(e)||0===e.length)return e;if((e=>null==e?void 0:e.find((e=>e.selected)))(e))return e;let t="";if((null==window?void 0:window.location)&&(t=window.location.pathname+window.location.search),!t)return e;const n=((e,t)=>null==e?void 0:e.findIndex((e=>{var n;return(null==e?void 0:e.href)===t||Array.isArray(e.items)&&(null==(n=e.items)?void 0:n.flat().find((({href:e})=>e===t)))})))(e,t);if(-1===n)return e;const r=[...e];return r[n].selected=!0,r},Do={Lg:"992px",Xl:"1260px"},Mo=qi.header`
  font-family:
    Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif;
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
      box-shadow:
        0px 0px 0px 2px #ffffff,
        0px 0px 0px 4px #191919 !important;
    }
  }
  @media (min-width: ${({breakpoint:e})=>Do[e]}) {
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
`,Fo=qi.div`
  font-family:
    Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif;
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
      box-shadow:
        0px 0px 0px 2px #ffffff,
        0px 0px 0px 4px #191919 !important;
    }
  }
  @media (min-width: ${({breakpoint:e})=>Do[e]}) {
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
`,$o=({isPartner:t,navTree:n,title:r,baseUrl:a,parentOrg:i,parentOrgUrl:s,partnerLogo:l,logo:c,loggedIn:f,userName:u,loginLink:d,onLoginClick:m,logoutLink:p,onLogoutClick:h,buttons:g,breakpoint:b,animateTitle:y,expandOnHover:v,mobileNavTree:x,searchUrl:k,site:w,renderDiv:S="false"})=>{const A=zo(n),C=zo(x),N=e.useRef(null),O=()=>{window.scrollY>N.current.getBoundingClientRect().top?N.current.classList.add("scrolled"):N.current.classList.remove("scrolled")};e.useEffect((()=>{"undefined"!=typeof window&&function({packageName:e="",component:t="",type:n="",configuration:r={}}){e&&t?(window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}):console.error("trackReactComponent: Missing required arguments.")}({packageName:"component-header",component:"Component Header",type:"NA",configuration:{site:w,isPartner:t,searchUrl:k,navTree:A,parentOrg:i,buttons:g,mobileNavTree:C}})}),[]),e.useEffect((()=>(null==window||window.addEventListener("scroll",O),()=>window.removeEventListener("scroll",O))),[]);return o.jsx(sa,{initialValue:{isPartner:t,navTree:A,title:r,baseUrl:a,parentOrg:i,parentOrgUrl:s,partnerLogo:l,logo:c,loggedIn:f,userName:u,loginLink:d,onLoginClick:m,logoutLink:p,onLogoutClick:h,buttons:g,breakpoint:b,animateTitle:y,expandOnHover:v,mobileNavTree:C,hasNavigation:!!(null==A?void 0:A.length)||!!(null==C?void 0:C.length),searchUrl:k,site:w},children:(()=>{const e="true"===S?Fo:Mo;return o.jsx(e,{id:"asuHeader",ref:N,breakpoint:b,children:o.jsx(_o,{})})})()})};var Uo;$o.propTypes={...aa},$o.defaultProps={isPartner:!1,baseUrl:"/",breakpoint:"Xl",expandOnHover:!1};var Ho=t;Uo=Ho.createRoot,Ho.hydrateRoot;exports.ASUHeader=$o,exports.initGlobalHeader=({targetSelector:t,props:n})=>{((t,n,r)=>{Uo(r).render(e.createElement(t,n))})($o,n,document.querySelector(t))};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
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
