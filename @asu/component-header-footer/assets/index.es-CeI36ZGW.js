import{a as ii,g as Ka,R as it,r as nt}from"./iframe-CTH7TaT7.js";var gn={exports:{}},vt={};var Hr;function si(){if(Hr)return vt;Hr=1;var e=ii(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(l,u,f){var d,b={},T=null,w=null;f!==void 0&&(T=""+f),u.key!==void 0&&(T=""+u.key),u.ref!==void 0&&(w=u.ref);for(d in u)r.call(u,d)&&!o.hasOwnProperty(d)&&(b[d]=u[d]);if(l&&l.defaultProps)for(d in u=l.defaultProps,u)b[d]===void 0&&(b[d]=u[d]);return{$$typeof:t,type:l,key:T,ref:w,props:b,_owner:a.current}}return vt.Fragment=n,vt.jsx=i,vt.jsxs=i,vt}var Yr;function li(){return Yr||(Yr=1,gn.exports=si()),gn.exports}var Pt=li();const{entries:Za,setPrototypeOf:Wr,isFrozen:ci,getPrototypeOf:fi,getOwnPropertyDescriptor:ui}=Object;let{freeze:he,seal:Oe,create:_t}=Object,{apply:Un,construct:jn}=typeof Reflect<"u"&&Reflect;he||(he=function(t){return t});Oe||(Oe=function(t){return t});Un||(Un=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return t.apply(n,a)});jn||(jn=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return new t(...r)});const At=ge(Array.prototype.forEach),di=ge(Array.prototype.lastIndexOf),Gr=ge(Array.prototype.pop),St=ge(Array.prototype.push),mi=ge(Array.prototype.splice),Xt=ge(String.prototype.toLowerCase),yn=ge(String.prototype.toString),bn=ge(String.prototype.match),ct=ge(String.prototype.replace),pi=ge(String.prototype.indexOf),hi=ge(String.prototype.trim),ke=ge(Object.prototype.hasOwnProperty),pe=ge(RegExp.prototype.test),Tt=gi(TypeError);function ge(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return Un(e,t,r)}}function gi(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return jn(e,n)}}function z(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Xt;Wr&&Wr(e,null);let r=t.length;for(;r--;){let a=t[r];if(typeof a=="string"){const o=n(a);o!==a&&(ci(t)||(t[r]=o),a=o)}e[a]=!0}return e}function yi(e){for(let t=0;t<e.length;t++)ke(e,t)||(e[t]=null);return e}function Le(e){const t=_t(null);for(const[n,r]of Za(e))ke(e,n)&&(Array.isArray(r)?t[n]=yi(r):r&&typeof r=="object"&&r.constructor===Object?t[n]=Le(r):t[n]=r);return t}function Et(e,t){for(;e!==null;){const r=ui(e,t);if(r){if(r.get)return ge(r.get);if(typeof r.value=="function")return ge(r.value)}e=fi(e)}function n(){return null}return n}const Br=he(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),vn=he(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),An=he(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),bi=he(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Sn=he(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),vi=he(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Xr=he(["#text"]),qr=he(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Tn=he(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Vr=he(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),$t=he(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ai=Oe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Si=Oe(/<%[\w\W]*|[\w\W]*%>/gm),Ti=Oe(/\$\{[\w\W]*/gm),Ei=Oe(/^data-[\-\w.\u00B7-\uFFFF]+$/),xi=Oe(/^aria-[\-\w]+$/),Ja=Oe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),_i=Oe(/^(?:\w+script|data):/i),wi=Oe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Qa=Oe(/^html$/i),Oi=Oe(/^[a-z][.\w]*(-[.\w]+)+$/i);var Kr=Object.freeze({__proto__:null,ARIA_ATTR:xi,ATTR_WHITESPACE:wi,CUSTOM_ELEMENT:Oi,DATA_ATTR:Ei,DOCTYPE_NAME:Qa,ERB_EXPR:Si,IS_ALLOWED_URI:Ja,IS_SCRIPT_OR_DATA:_i,MUSTACHE_EXPR:Ai,TMPLIT_EXPR:Ti});const xt={element:1,text:3,progressingInstruction:7,comment:8,document:9},Ci=function(){return typeof window>"u"?null:window},ki=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const a="data-tt-policy-suffix";n&&n.hasAttribute(a)&&(r=n.getAttribute(a));const o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},Zr=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function eo(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ci();const t=N=>eo(N);if(t.version="3.4.0",t.removed=[],!e||!e.document||e.document.nodeType!==xt.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const r=n,a=r.currentScript,{DocumentFragment:o,HTMLTemplateElement:i,Node:l,Element:u,NodeFilter:f,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:b,DOMParser:T,trustedTypes:w}=e,S=u.prototype,m=Et(S,"cloneNode"),E=Et(S,"remove"),L=Et(S,"nextSibling"),O=Et(S,"childNodes"),R=Et(S,"parentNode");if(typeof i=="function"){const N=n.createElement("template");N.content&&N.content.ownerDocument&&(n=N.content.ownerDocument)}let I,h="";const{implementation:B,createNodeIterator:ye,createDocumentFragment:ie,getElementsByTagName:xe}=n,{importNode:Pe}=r;let Q=Zr();t.isSupported=typeof Za=="function"&&typeof R=="function"&&B&&B.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:oe,ERB_EXPR:le,TMPLIT_EXPR:de,DATA_ATTR:ce,ARIA_ATTR:Ze,IS_SCRIPT_OR_DATA:Ae,ATTR_WHITESPACE:me,CUSTOM_ELEMENT:Je}=Kr;let{IS_ALLOWED_URI:Ue}=Kr,K=null;const k=z({},[...Br,...vn,...An,...Sn,...Xr]);let A=null;const C=z({},[...qr,...Tn,...Vr,...$t]);let x=Object.seal(_t(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),c=null,U=null;const v=Object.seal(_t(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let X=!0,j=!0,H=!1,D=!0,q=!1,te=!0,F=!1,ne=!1,$=!1,Z=!1,Re=!1,ee=!1,Qe=!0,We=!1;const Se="user-content-";let M=!0,G=!1,Ie={},be=null;const _e=z({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Or=null;const Cr=z({},["audio","video","img","source","image","track"]);let cn=null;const kr=z({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ft="http://www.w3.org/1998/Math/MathML",zt="http://www.w3.org/2000/svg",Ne="http://www.w3.org/1999/xhtml";let st=Ne,fn=!1,un=null;const ei=z({},[Ft,zt,Ne],yn);let Ut=z({},["mi","mo","mn","ms","mtext"]),jt=z({},["annotation-xml"]);const ti=z({},["title","style","font","a","script"]);let bt=null;const ni=["application/xhtml+xml","text/html"],ri="text/html";let ae=null,lt=null;const ai=n.createElement("form"),Pr=function(s){return s instanceof RegExp||s instanceof Function},dn=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(lt&&lt===s)){if((!s||typeof s!="object")&&(s={}),s=Le(s),bt=ni.indexOf(s.PARSER_MEDIA_TYPE)===-1?ri:s.PARSER_MEDIA_TYPE,ae=bt==="application/xhtml+xml"?yn:Xt,K=ke(s,"ALLOWED_TAGS")?z({},s.ALLOWED_TAGS,ae):k,A=ke(s,"ALLOWED_ATTR")?z({},s.ALLOWED_ATTR,ae):C,un=ke(s,"ALLOWED_NAMESPACES")?z({},s.ALLOWED_NAMESPACES,yn):ei,cn=ke(s,"ADD_URI_SAFE_ATTR")?z(Le(kr),s.ADD_URI_SAFE_ATTR,ae):kr,Or=ke(s,"ADD_DATA_URI_TAGS")?z(Le(Cr),s.ADD_DATA_URI_TAGS,ae):Cr,be=ke(s,"FORBID_CONTENTS")?z({},s.FORBID_CONTENTS,ae):_e,c=ke(s,"FORBID_TAGS")?z({},s.FORBID_TAGS,ae):Le({}),U=ke(s,"FORBID_ATTR")?z({},s.FORBID_ATTR,ae):Le({}),Ie=ke(s,"USE_PROFILES")?s.USE_PROFILES:!1,X=s.ALLOW_ARIA_ATTR!==!1,j=s.ALLOW_DATA_ATTR!==!1,H=s.ALLOW_UNKNOWN_PROTOCOLS||!1,D=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,q=s.SAFE_FOR_TEMPLATES||!1,te=s.SAFE_FOR_XML!==!1,F=s.WHOLE_DOCUMENT||!1,Z=s.RETURN_DOM||!1,Re=s.RETURN_DOM_FRAGMENT||!1,ee=s.RETURN_TRUSTED_TYPE||!1,$=s.FORCE_BODY||!1,Qe=s.SANITIZE_DOM!==!1,We=s.SANITIZE_NAMED_PROPS||!1,M=s.KEEP_CONTENT!==!1,G=s.IN_PLACE||!1,Ue=s.ALLOWED_URI_REGEXP||Ja,st=s.NAMESPACE||Ne,Ut=s.MATHML_TEXT_INTEGRATION_POINTS||Ut,jt=s.HTML_INTEGRATION_POINTS||jt,x=s.CUSTOM_ELEMENT_HANDLING||_t(null),s.CUSTOM_ELEMENT_HANDLING&&Pr(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(x.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&Pr(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(x.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(x.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),q&&(j=!1),Re&&(Z=!0),Ie&&(K=z({},Xr),A=_t(null),Ie.html===!0&&(z(K,Br),z(A,qr)),Ie.svg===!0&&(z(K,vn),z(A,Tn),z(A,$t)),Ie.svgFilters===!0&&(z(K,An),z(A,Tn),z(A,$t)),Ie.mathMl===!0&&(z(K,Sn),z(A,Vr),z(A,$t))),v.tagCheck=null,v.attributeCheck=null,s.ADD_TAGS&&(typeof s.ADD_TAGS=="function"?v.tagCheck=s.ADD_TAGS:(K===k&&(K=Le(K)),z(K,s.ADD_TAGS,ae))),s.ADD_ATTR&&(typeof s.ADD_ATTR=="function"?v.attributeCheck=s.ADD_ATTR:(A===C&&(A=Le(A)),z(A,s.ADD_ATTR,ae))),s.ADD_URI_SAFE_ATTR&&z(cn,s.ADD_URI_SAFE_ATTR,ae),s.FORBID_CONTENTS&&(be===_e&&(be=Le(be)),z(be,s.FORBID_CONTENTS,ae)),s.ADD_FORBID_CONTENTS&&(be===_e&&(be=Le(be)),z(be,s.ADD_FORBID_CONTENTS,ae)),M&&(K["#text"]=!0),F&&z(K,["html","head","body"]),K.table&&(z(K,["tbody"]),delete c.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw Tt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Tt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');I=s.TRUSTED_TYPES_POLICY,h=I.createHTML("")}else I===void 0&&(I=ki(w,a)),I!==null&&typeof h=="string"&&(h=I.createHTML(""));he&&he(s),lt=s}},Rr=z({},[...vn,...An,...bi]),Ir=z({},[...Sn,...vi]),oi=function(s){let g=R(s);(!g||!g.tagName)&&(g={namespaceURI:st,tagName:"template"});const _=Xt(s.tagName),J=Xt(g.tagName);return un[s.namespaceURI]?s.namespaceURI===zt?g.namespaceURI===Ne?_==="svg":g.namespaceURI===Ft?_==="svg"&&(J==="annotation-xml"||Ut[J]):!!Rr[_]:s.namespaceURI===Ft?g.namespaceURI===Ne?_==="math":g.namespaceURI===zt?_==="math"&&jt[J]:!!Ir[_]:s.namespaceURI===Ne?g.namespaceURI===zt&&!jt[J]||g.namespaceURI===Ft&&!Ut[J]?!1:!Ir[_]&&(ti[_]||!Rr[_]):!!(bt==="application/xhtml+xml"&&un[s.namespaceURI]):!1},Ce=function(s){St(t.removed,{element:s});try{R(s).removeChild(s)}catch{E(s)}},et=function(s,g){try{St(t.removed,{attribute:g.getAttributeNode(s),from:g})}catch{St(t.removed,{attribute:null,from:g})}if(g.removeAttribute(s),s==="is")if(Z||Re)try{Ce(g)}catch{}else try{g.setAttribute(s,"")}catch{}},Nr=function(s){let g=null,_=null;if($)s="<remove></remove>"+s;else{const re=bn(s,/^[\r\n\t ]+/);_=re&&re[0]}bt==="application/xhtml+xml"&&st===Ne&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const J=I?I.createHTML(s):s;if(st===Ne)try{g=new T().parseFromString(J,bt)}catch{}if(!g||!g.documentElement){g=B.createDocument(st,"template",null);try{g.documentElement.innerHTML=fn?h:J}catch{}}const fe=g.body||g.documentElement;return s&&_&&fe.insertBefore(n.createTextNode(_),fe.childNodes[0]||null),st===Ne?xe.call(g,F?"html":"body")[0]:F?g.documentElement:fe},Lr=function(s){return ye.call(s.ownerDocument||s,s,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},mn=function(s){return s instanceof b&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof d)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},pn=function(s){return typeof l=="function"&&s instanceof l};function je(N,s,g){At(N,_=>{_.call(t,s,g,lt)})}const Mr=function(s){let g=null;if(je(Q.beforeSanitizeElements,s,null),mn(s))return Ce(s),!0;const _=ae(s.nodeName);if(je(Q.uponSanitizeElement,s,{tagName:_,allowedTags:K}),te&&s.hasChildNodes()&&!pn(s.firstElementChild)&&pe(/<[/\w!]/g,s.innerHTML)&&pe(/<[/\w!]/g,s.textContent)||te&&s.namespaceURI===Ne&&_==="style"&&pn(s.firstElementChild)||s.nodeType===xt.progressingInstruction||te&&s.nodeType===xt.comment&&pe(/<[/\w]/g,s.data))return Ce(s),!0;if(c[_]||!(v.tagCheck instanceof Function&&v.tagCheck(_))&&!K[_]){if(!c[_]&&Fr(_)&&(x.tagNameCheck instanceof RegExp&&pe(x.tagNameCheck,_)||x.tagNameCheck instanceof Function&&x.tagNameCheck(_)))return!1;if(M&&!be[_]){const J=R(s)||s.parentNode,fe=O(s)||s.childNodes;if(fe&&J){const re=fe.length;for(let ve=re-1;ve>=0;--ve){const Te=m(fe[ve],!0);Te.__removalCount=(s.__removalCount||0)+1,J.insertBefore(Te,L(s))}}}return Ce(s),!0}return s instanceof u&&!oi(s)||(_==="noscript"||_==="noembed"||_==="noframes")&&pe(/<\/no(script|embed|frames)/i,s.innerHTML)?(Ce(s),!0):(q&&s.nodeType===xt.text&&(g=s.textContent,At([oe,le,de],J=>{g=ct(g,J," ")}),s.textContent!==g&&(St(t.removed,{element:s.cloneNode()}),s.textContent=g)),je(Q.afterSanitizeElements,s,null),!1)},Dr=function(s,g,_){if(U[g]||Qe&&(g==="id"||g==="name")&&(_ in n||_ in ai))return!1;if(!(j&&!U[g]&&pe(ce,g))){if(!(X&&pe(Ze,g))){if(!(v.attributeCheck instanceof Function&&v.attributeCheck(g,s))){if(!A[g]||U[g]){if(!(Fr(s)&&(x.tagNameCheck instanceof RegExp&&pe(x.tagNameCheck,s)||x.tagNameCheck instanceof Function&&x.tagNameCheck(s))&&(x.attributeNameCheck instanceof RegExp&&pe(x.attributeNameCheck,g)||x.attributeNameCheck instanceof Function&&x.attributeNameCheck(g,s))||g==="is"&&x.allowCustomizedBuiltInElements&&(x.tagNameCheck instanceof RegExp&&pe(x.tagNameCheck,_)||x.tagNameCheck instanceof Function&&x.tagNameCheck(_))))return!1}else if(!cn[g]){if(!pe(Ue,ct(_,me,""))){if(!((g==="src"||g==="xlink:href"||g==="href")&&s!=="script"&&pi(_,"data:")===0&&Or[s])){if(!(H&&!pe(Ae,ct(_,me,"")))){if(_)return!1}}}}}}}return!0},Fr=function(s){return s!=="annotation-xml"&&bn(s,Je)},zr=function(s){je(Q.beforeSanitizeAttributes,s,null);const{attributes:g}=s;if(!g||mn(s))return;const _={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:A,forceKeepAttr:void 0};let J=g.length;for(;J--;){const fe=g[J],{name:re,namespaceURI:ve,value:Te}=fe,Ge=ae(re),hn=Te;let se=re==="value"?hn:hi(hn);if(_.attrName=Ge,_.attrValue=se,_.keepAttr=!0,_.forceKeepAttr=void 0,je(Q.uponSanitizeAttribute,s,_),se=_.attrValue,We&&(Ge==="id"||Ge==="name")&&(et(re,s),se=Se+se),te&&pe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,se)){et(re,s);continue}if(Ge==="attributename"&&bn(se,"href")){et(re,s);continue}if(_.forceKeepAttr)continue;if(!_.keepAttr){et(re,s);continue}if(!D&&pe(/\/>/i,se)){et(re,s);continue}q&&At([oe,le,de],$r=>{se=ct(se,$r," ")});const jr=ae(s.nodeName);if(!Dr(jr,Ge,se)){et(re,s);continue}if(I&&typeof w=="object"&&typeof w.getAttributeType=="function"&&!ve)switch(w.getAttributeType(jr,Ge)){case"TrustedHTML":{se=I.createHTML(se);break}case"TrustedScriptURL":{se=I.createScriptURL(se);break}}if(se!==hn)try{ve?s.setAttributeNS(ve,re,se):s.setAttribute(re,se),mn(s)?Ce(s):Gr(t.removed)}catch{et(re,s)}}je(Q.afterSanitizeAttributes,s,null)},Ur=function(s){let g=null;const _=Lr(s);for(je(Q.beforeSanitizeShadowDOM,s,null);g=_.nextNode();)je(Q.uponSanitizeShadowNode,g,null),Mr(g),zr(g),g.content instanceof o&&Ur(g.content);je(Q.afterSanitizeShadowDOM,s,null)};return t.sanitize=function(N){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=null,_=null,J=null,fe=null;if(fn=!N,fn&&(N="<!-->"),typeof N!="string"&&!pn(N))if(typeof N.toString=="function"){if(N=N.toString(),typeof N!="string")throw Tt("dirty is not a string, aborting")}else throw Tt("toString is not a function");if(!t.isSupported)return N;if(ne||dn(s),t.removed=[],typeof N=="string"&&(G=!1),G){if(N.nodeName){const Te=ae(N.nodeName);if(!K[Te]||c[Te])throw Tt("root node is forbidden and cannot be sanitized in-place")}}else if(N instanceof l)g=Nr("<!---->"),_=g.ownerDocument.importNode(N,!0),_.nodeType===xt.element&&_.nodeName==="BODY"||_.nodeName==="HTML"?g=_:g.appendChild(_);else{if(!Z&&!q&&!F&&N.indexOf("<")===-1)return I&&ee?I.createHTML(N):N;if(g=Nr(N),!g)return Z?null:ee?h:""}g&&$&&Ce(g.firstChild);const re=Lr(G?N:g);for(;J=re.nextNode();)Mr(J),zr(J),J.content instanceof o&&Ur(J.content);if(G)return N;if(Z){if(q){g.normalize();let Te=g.innerHTML;At([oe,le,de],Ge=>{Te=ct(Te,Ge," ")}),g.innerHTML=Te}if(Re)for(fe=ie.call(g.ownerDocument);g.firstChild;)fe.appendChild(g.firstChild);else fe=g;return(A.shadowroot||A.shadowrootmode)&&(fe=Pe.call(r,fe,!0)),fe}let ve=F?g.outerHTML:g.innerHTML;return F&&K["!doctype"]&&g.ownerDocument&&g.ownerDocument.doctype&&g.ownerDocument.doctype.name&&pe(Qa,g.ownerDocument.doctype.name)&&(ve="<!DOCTYPE "+g.ownerDocument.doctype.name+`>
`+ve),q&&At([oe,le,de],Te=>{ve=ct(ve,Te," ")}),I&&ee?I.createHTML(ve):ve},t.setConfig=function(){let N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};dn(N),ne=!0},t.clearConfig=function(){lt=null,ne=!1},t.isValidAttribute=function(N,s,g){lt||dn({});const _=ae(N),J=ae(s);return Dr(_,J,g)},t.addHook=function(N,s){typeof s=="function"&&St(Q[N],s)},t.removeHook=function(N,s){if(s!==void 0){const g=di(Q[N],s);return g===-1?void 0:mi(Q[N],g,1)[0]}return Gr(Q[N])},t.removeHooks=function(N){Q[N]=[]},t.removeAllHooks=function(){Q=Zr()},t}eo();var En={exports:{}},xn,Jr;function Pi(){if(Jr)return xn;Jr=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return xn=e,xn}var _n,Qr;function Ri(){if(Qr)return _n;Qr=1;var e=Pi();function t(){}function n(){}return n.resetWarningCache=t,_n=function(){function r(i,l,u,f,d,b){if(b!==e){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}r.isRequired=r;function a(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o},_n}var ea;function Ii(){return ea||(ea=1,En.exports=Ri()()),En.exports}var Ni=Ii();const p=Ka(Ni);p.shape({event:p.string,action:p.string,name:p.string,region:p.string,section:p.string,component:p.string,type:p.string,text:p.string});const Bc=({event:e="",action:t="",name:n="",type:r="",section:a="",text:o="",region:i="",component:l=""})=>{const{dataLayer:u}=window,f={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:i.toLowerCase(),section:a.toLowerCase(),text:o.toLowerCase(),component:l.toLowerCase()};u&&u.push(f)},gt=({children:e})=>Pt.jsx(Pt.Fragment,{children:e});gt.propTypes={children:p.oneOfType([p.arrayOf(p.node),p.node,p.string])};gt.__docgenInfo={description:"",methods:[],displayName:"Base",props:{children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"},{name:"string"}]},required:!1}}};var wn={exports:{}};var ta;function Li(){return ta||(ta=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(o=a(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var i="";for(var l in o)t.call(o,l)&&o[l]&&(i=a(i,l));return i}function a(o,i){return i?o?o+" "+i:o+i:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(wn)),wn.exports}Li();({...gt.propTypes});const ur=({children:e,className:t="container",...n})=>Pt.jsx("div",{className:t,...n,children:Pt.jsx("div",{className:"row",children:e})});ur.propTypes={children:gt.propTypes.children};({...ur.propTypes});gt.propTypes.children,p.oneOf(["0","3","4","6","8","9","12"]);gt.propTypes.children;ur.__docgenInfo={description:"",methods:[],displayName:"Container",props:{className:{defaultValue:{value:'"container"',computed:!1},required:!1},children:{description:"",type:{name:"custom",raw:"Base.propTypes.children"},required:!1}}};function Xc({packageName:e="",component:t="",type:n="",configuration:r={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}}const na={alt:p.string,title:p.string,src:p.string,mobileSrc:p.string,brandLink:p.string},On={baseUrl:p.string,parentOrg:p.string,parentOrgUrl:p.string,animate:p.bool},Ht={loggedIn:p.bool,loginLink:p.string,logoutLink:p.string,userName:p.string},dr={text:p.string.isRequired,color:p.oneOf(["gold","maroon","light","dark"]),href:p.string,classes:p.string,onClick:p.func,onFocus:p.func},ra=p.shape({id:p.number,href:p.string,text:p.string,type:p.string,selected:p.bool,items:p.arrayOf(p.arrayOf(p.object)),buttons:p.arrayOf(p.shape(dr)),class:p.string}),Mi={isPartner:p.bool,navTree:p.arrayOf(ra),partnerLogo:p.shape(na),logo:p.shape(na),title:p.string,parentOrg:On.parentOrg,parentOrgUrl:On.parentOrgUrl,baseUrl:On.baseUrl,loggedIn:Ht.loggedIn,userName:Ht.userName,loginLink:Ht.loginLink,onLoginClick:p.func,logoutLink:Ht.logoutLink,onLogoutClick:p.func,buttons:p.arrayOf(p.shape(dr)),breakpoint:p.oneOf(["Lg","Xl"]),animateTitle:p.bool,expandOnHover:p.bool,mobileNavTree:p.arrayOf(ra),hasNavigation:p.bool,searchUrl:p.string,site:p.string,renderDiv:p.oneOf(["true","false"])},qc={...Mi,headerTop:p.number,headerHeight:p.number,itemOpened:p.number,setItemOpened:p.func,mobileMenuOpen:p.bool,setMobileMenuOpen:p.func,singlePageAppReset:p.func};var Cn={exports:{}},W={};var aa;function Di(){if(aa)return W;aa=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),w=Symbol.for("react.client.reference");function S(m){if(typeof m=="object"&&m!==null){var E=m.$$typeof;switch(E){case e:switch(m=m.type,m){case n:case a:case r:case u:case f:return m;default:switch(m=m&&m.$$typeof,m){case i:case l:case b:case d:return m;case o:return m;default:return E}}case t:return E}}}return W.ContextConsumer=o,W.ContextProvider=i,W.Element=e,W.ForwardRef=l,W.Fragment=n,W.Lazy=b,W.Memo=d,W.Portal=t,W.Profiler=a,W.StrictMode=r,W.Suspense=u,W.SuspenseList=f,W.isContextConsumer=function(m){return S(m)===o},W.isContextProvider=function(m){return S(m)===i},W.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},W.isForwardRef=function(m){return S(m)===l},W.isFragment=function(m){return S(m)===n},W.isLazy=function(m){return S(m)===b},W.isMemo=function(m){return S(m)===d},W.isPortal=function(m){return S(m)===t},W.isProfiler=function(m){return S(m)===a},W.isStrictMode=function(m){return S(m)===r},W.isSuspense=function(m){return S(m)===u},W.isSuspenseList=function(m){return S(m)===f},W.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===n||m===a||m===r||m===u||m===f||m===T||typeof m=="object"&&m!==null&&(m.$$typeof===b||m.$$typeof===d||m.$$typeof===i||m.$$typeof===o||m.$$typeof===l||m.$$typeof===w||m.getModuleId!==void 0)},W.typeOf=S,W}var oa;function Fi(){return oa||(oa=1,Cn.exports=Di()),Cn.exports}var to=Fi();function zi(e){function t(k,A,C,x,c){for(var U=0,v=0,X=0,j=0,H,D,q=0,te=0,F,ne=F=H=0,$=0,Z=0,Re=0,ee=0,Qe=C.length,We=Qe-1,Se,M="",G="",Ie="",be="",_e;$<Qe;){if(D=C.charCodeAt($),$===We&&v+j+X+U!==0&&(v!==0&&(D=v===47?10:47),j=X=U=0,Qe++,We++),v+j+X+U===0){if($===We&&(0<Z&&(M=M.replace(T,"")),0<M.trim().length)){switch(D){case 32:case 9:case 59:case 13:case 10:break;default:M+=C.charAt($)}D=59}switch(D){case 123:for(M=M.trim(),H=M.charCodeAt(0),F=1,ee=++$;$<Qe;){switch(D=C.charCodeAt($)){case 123:F++;break;case 125:F--;break;case 47:switch(D=C.charCodeAt($+1)){case 42:case 47:e:{for(ne=$+1;ne<We;++ne)switch(C.charCodeAt(ne)){case 47:if(D===42&&C.charCodeAt(ne-1)===42&&$+2!==ne){$=ne+1;break e}break;case 10:if(D===47){$=ne+1;break e}}$=ne}}break;case 91:D++;case 40:D++;case 34:case 39:for(;$++<We&&C.charCodeAt($)!==D;);}if(F===0)break;$++}switch(F=C.substring(ee,$),H===0&&(H=(M=M.replace(b,"").trim()).charCodeAt(0)),H){case 64:switch(0<Z&&(M=M.replace(T,"")),D=M.charCodeAt(1),D){case 100:case 109:case 115:case 45:Z=A;break;default:Z=Ze}if(F=t(A,Z,F,D,c+1),ee=F.length,0<me&&(Z=n(Ze,M,Re),_e=l(3,F,Z,A,le,oe,ee,D,c,x),M=Z.join(""),_e!==void 0&&(ee=(F=_e.trim()).length)===0&&(D=0,F="")),0<ee)switch(D){case 115:M=M.replace(B,i);case 100:case 109:case 45:F=M+"{"+F+"}";break;case 107:M=M.replace(O,"$1 $2"),F=M+"{"+F+"}",F=ce===1||ce===2&&o("@"+F,3)?"@-webkit-"+F+"@"+F:"@"+F;break;default:F=M+F,x===112&&(F=(G+=F,""))}else F="";break;default:F=t(A,n(A,M,Re),F,x,c+1)}Ie+=F,F=Re=Z=ne=H=0,M="",D=C.charCodeAt(++$);break;case 125:case 59:if(M=(0<Z?M.replace(T,""):M).trim(),1<(ee=M.length))switch(ne===0&&(H=M.charCodeAt(0),H===45||96<H&&123>H)&&(ee=(M=M.replace(" ",":")).length),0<me&&(_e=l(1,M,A,k,le,oe,G.length,x,c,x))!==void 0&&(ee=(M=_e.trim()).length)===0&&(M="\0\0"),H=M.charCodeAt(0),D=M.charCodeAt(1),H){case 0:break;case 64:if(D===105||D===99){be+=M+C.charAt($);break}default:M.charCodeAt(ee-1)!==58&&(G+=a(M,H,D,M.charCodeAt(2)))}Re=Z=ne=H=0,M="",D=C.charCodeAt(++$)}}switch(D){case 13:case 10:v===47?v=0:1+H===0&&x!==107&&0<M.length&&(Z=1,M+="\0"),0<me*Ue&&l(0,M,A,k,le,oe,G.length,x,c,x),oe=1,le++;break;case 59:case 125:if(v+j+X+U===0){oe++;break}default:switch(oe++,Se=C.charAt($),D){case 9:case 32:if(j+U+v===0)switch(q){case 44:case 58:case 9:case 32:Se="";break;default:D!==32&&(Se=" ")}break;case 0:Se="\\0";break;case 12:Se="\\f";break;case 11:Se="\\v";break;case 38:j+v+U===0&&(Z=Re=1,Se="\f"+Se);break;case 108:if(j+v+U+de===0&&0<ne)switch($-ne){case 2:q===112&&C.charCodeAt($-3)===58&&(de=q);case 8:te===111&&(de=te)}break;case 58:j+v+U===0&&(ne=$);break;case 44:v+X+j+U===0&&(Z=1,Se+="\r");break;case 34:case 39:v===0&&(j=j===D?0:j===0?D:j);break;case 91:j+v+X===0&&U++;break;case 93:j+v+X===0&&U--;break;case 41:j+v+U===0&&X--;break;case 40:if(j+v+U===0){if(H===0)switch(2*q+3*te){case 533:break;default:H=1}X++}break;case 64:v+X+j+U+ne+F===0&&(F=1);break;case 42:case 47:if(!(0<j+U+X))switch(v){case 0:switch(2*D+3*C.charCodeAt($+1)){case 235:v=47;break;case 220:ee=$,v=42}break;case 42:D===47&&q===42&&ee+2!==$&&(C.charCodeAt(ee+2)===33&&(G+=C.substring(ee,$+1)),Se="",v=0)}}v===0&&(M+=Se)}te=q,q=D,$++}if(ee=G.length,0<ee){if(Z=A,0<me&&(_e=l(2,G,Z,k,le,oe,ee,x,c,x),_e!==void 0&&(G=_e).length===0))return be+G+Ie;if(G=Z.join(",")+"{"+G+"}",ce*de!==0){switch(ce!==2||o(G,2)||(de=0),de){case 111:G=G.replace(I,":-moz-$1")+G;break;case 112:G=G.replace(R,"::-webkit-input-$1")+G.replace(R,"::-moz-$1")+G.replace(R,":-ms-input-$1")+G}de=0}}return be+G+Ie}function n(k,A,C){var x=A.trim().split(E);A=x;var c=x.length,U=k.length;switch(U){case 0:case 1:var v=0;for(k=U===0?"":k[0]+" ";v<c;++v)A[v]=r(k,A[v],C).trim();break;default:var X=v=0;for(A=[];v<c;++v)for(var j=0;j<U;++j)A[X++]=r(k[j]+" ",x[v],C).trim()}return A}function r(k,A,C){var x=A.charCodeAt(0);switch(33>x&&(x=(A=A.trim()).charCodeAt(0)),x){case 38:return A.replace(L,"$1"+k.trim());case 58:return k.trim()+A.replace(L,"$1"+k.trim());default:if(0<1*C&&0<A.indexOf("\f"))return A.replace(L,(k.charCodeAt(0)===58?"":"$1")+k.trim())}return k+A}function a(k,A,C,x){var c=k+";",U=2*A+3*C+4*x;if(U===944){k=c.indexOf(":",9)+1;var v=c.substring(k,c.length-1).trim();return v=c.substring(0,k).trim()+v+";",ce===1||ce===2&&o(v,1)?"-webkit-"+v+v:v}if(ce===0||ce===2&&!o(c,1))return c;switch(U){case 1015:return c.charCodeAt(10)===97?"-webkit-"+c+c:c;case 951:return c.charCodeAt(3)===116?"-webkit-"+c+c:c;case 963:return c.charCodeAt(5)===110?"-webkit-"+c+c:c;case 1009:if(c.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+c+c;case 978:return"-webkit-"+c+"-moz-"+c+c;case 1019:case 983:return"-webkit-"+c+"-moz-"+c+"-ms-"+c+c;case 883:if(c.charCodeAt(8)===45)return"-webkit-"+c+c;if(0<c.indexOf("image-set(",11))return c.replace(Q,"$1-webkit-$2")+c;break;case 932:if(c.charCodeAt(4)===45)switch(c.charCodeAt(5)){case 103:return"-webkit-box-"+c.replace("-grow","")+"-webkit-"+c+"-ms-"+c.replace("grow","positive")+c;case 115:return"-webkit-"+c+"-ms-"+c.replace("shrink","negative")+c;case 98:return"-webkit-"+c+"-ms-"+c.replace("basis","preferred-size")+c}return"-webkit-"+c+"-ms-"+c+c;case 964:return"-webkit-"+c+"-ms-flex-"+c+c;case 1023:if(c.charCodeAt(8)!==99)break;return v=c.substring(c.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+v+"-webkit-"+c+"-ms-flex-pack"+v+c;case 1005:return S.test(c)?c.replace(w,":-webkit-")+c.replace(w,":-moz-")+c:c;case 1e3:switch(v=c.substring(13).trim(),A=v.indexOf("-")+1,v.charCodeAt(0)+v.charCodeAt(A)){case 226:v=c.replace(h,"tb");break;case 232:v=c.replace(h,"tb-rl");break;case 220:v=c.replace(h,"lr");break;default:return c}return"-webkit-"+c+"-ms-"+v+c;case 1017:if(c.indexOf("sticky",9)===-1)break;case 975:switch(A=(c=k).length-10,v=(c.charCodeAt(A)===33?c.substring(0,A):c).substring(k.indexOf(":",7)+1).trim(),U=v.charCodeAt(0)+(v.charCodeAt(7)|0)){case 203:if(111>v.charCodeAt(8))break;case 115:c=c.replace(v,"-webkit-"+v)+";"+c;break;case 207:case 102:c=c.replace(v,"-webkit-"+(102<U?"inline-":"")+"box")+";"+c.replace(v,"-webkit-"+v)+";"+c.replace(v,"-ms-"+v+"box")+";"+c}return c+";";case 938:if(c.charCodeAt(5)===45)switch(c.charCodeAt(6)){case 105:return v=c.replace("-items",""),"-webkit-"+c+"-webkit-box-"+v+"-ms-flex-"+v+c;case 115:return"-webkit-"+c+"-ms-flex-item-"+c.replace(ie,"")+c;default:return"-webkit-"+c+"-ms-flex-line-pack"+c.replace("align-content","").replace(ie,"")+c}break;case 973:case 989:if(c.charCodeAt(3)!==45||c.charCodeAt(4)===122)break;case 931:case 953:if(Pe.test(k)===!0)return(v=k.substring(k.indexOf(":")+1)).charCodeAt(0)===115?a(k.replace("stretch","fill-available"),A,C,x).replace(":fill-available",":stretch"):c.replace(v,"-webkit-"+v)+c.replace(v,"-moz-"+v.replace("fill-",""))+c;break;case 962:if(c="-webkit-"+c+(c.charCodeAt(5)===102?"-ms-"+c:"")+c,C+x===211&&c.charCodeAt(13)===105&&0<c.indexOf("transform",10))return c.substring(0,c.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+c}return c}function o(k,A){var C=k.indexOf(A===1?":":"{"),x=k.substring(0,A!==3?C:10);return C=k.substring(C+1,k.length-1),Je(A!==2?x:x.replace(xe,"$1"),C,A)}function i(k,A){var C=a(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return C!==A+";"?C.replace(ye," or ($1)").substring(4):"("+A+")"}function l(k,A,C,x,c,U,v,X,j,H){for(var D=0,q=A,te;D<me;++D)switch(te=Ae[D].call(d,k,q,C,x,c,U,v,X,j,H)){case void 0:case!1:case!0:case null:break;default:q=te}if(q!==A)return q}function u(k){switch(k){case void 0:case null:me=Ae.length=0;break;default:if(typeof k=="function")Ae[me++]=k;else if(typeof k=="object")for(var A=0,C=k.length;A<C;++A)u(k[A]);else Ue=!!k|0}return u}function f(k){return k=k.prefix,k!==void 0&&(Je=null,k?typeof k!="function"?ce=1:(ce=2,Je=k):ce=0),f}function d(k,A){var C=k;if(33>C.charCodeAt(0)&&(C=C.trim()),K=C,C=[K],0<me){var x=l(-1,A,C,C,le,oe,0,0,0,0);x!==void 0&&typeof x=="string"&&(A=x)}var c=t(Ze,C,A,0,0);return 0<me&&(x=l(-2,c,C,C,le,oe,c.length,0,0,0),x!==void 0&&(c=x)),K="",de=0,oe=le=1,c}var b=/^\0+/g,T=/[\0\r\f]/g,w=/: */g,S=/zoo|gra/,m=/([,: ])(transform)/g,E=/,\r+?/g,L=/([\t\r\n ])*\f?&/g,O=/@(k\w+)\s*(\S*)\s*/,R=/::(place)/g,I=/:(read-only)/g,h=/[svh]\w+-[tblr]{2}/,B=/\(\s*(.*)\s*\)/g,ye=/([\s\S]*?);/g,ie=/-self|flex-/g,xe=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Pe=/stretch|:\s*\w+\-(?:conte|avail)/,Q=/([^-])(image-set\()/,oe=1,le=1,de=0,ce=1,Ze=[],Ae=[],me=0,Je=null,Ue=0,K="";return d.use=u,d.set=f,e!==void 0&&f(e),d}var Ui={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ji(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var $i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ia=ji(function(e){return $i.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),kn={exports:{}},Y={};var sa;function Hi(){if(sa)return Y;sa=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,b=e?Symbol.for("react.suspense"):60113,T=e?Symbol.for("react.suspense_list"):60120,w=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,E=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,O=e?Symbol.for("react.scope"):60119;function R(h){if(typeof h=="object"&&h!==null){var B=h.$$typeof;switch(B){case t:switch(h=h.type,h){case u:case f:case r:case o:case a:case b:return h;default:switch(h=h&&h.$$typeof,h){case l:case d:case S:case w:case i:return h;default:return B}}case n:return B}}}function I(h){return R(h)===f}return Y.AsyncMode=u,Y.ConcurrentMode=f,Y.ContextConsumer=l,Y.ContextProvider=i,Y.Element=t,Y.ForwardRef=d,Y.Fragment=r,Y.Lazy=S,Y.Memo=w,Y.Portal=n,Y.Profiler=o,Y.StrictMode=a,Y.Suspense=b,Y.isAsyncMode=function(h){return I(h)||R(h)===u},Y.isConcurrentMode=I,Y.isContextConsumer=function(h){return R(h)===l},Y.isContextProvider=function(h){return R(h)===i},Y.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===t},Y.isForwardRef=function(h){return R(h)===d},Y.isFragment=function(h){return R(h)===r},Y.isLazy=function(h){return R(h)===S},Y.isMemo=function(h){return R(h)===w},Y.isPortal=function(h){return R(h)===n},Y.isProfiler=function(h){return R(h)===o},Y.isStrictMode=function(h){return R(h)===a},Y.isSuspense=function(h){return R(h)===b},Y.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===r||h===f||h===o||h===a||h===b||h===T||typeof h=="object"&&h!==null&&(h.$$typeof===S||h.$$typeof===w||h.$$typeof===i||h.$$typeof===l||h.$$typeof===d||h.$$typeof===E||h.$$typeof===L||h.$$typeof===O||h.$$typeof===m)},Y.typeOf=R,Y}var la;function Yi(){return la||(la=1,kn.exports=Hi()),kn.exports}var Pn,ca;function Wi(){if(ca)return Pn;ca=1;var e=Yi(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=r,o[e.Memo]=a;function i(S){return e.isMemo(S)?a:o[S.$$typeof]||t}var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,T=Object.prototype;function w(S,m,E){if(typeof m!="string"){if(T){var L=b(m);L&&L!==T&&w(S,L,E)}var O=u(m);f&&(O=O.concat(f(m)));for(var R=i(S),I=i(m),h=0;h<O.length;++h){var B=O[h];if(!n[B]&&!(E&&E[B])&&!(I&&I[B])&&!(R&&R[B])){var ye=d(m,B);try{l(S,B,ye)}catch{}}}}return S}return Pn=w,Pn}var Gi=Wi();const Bi=Ka(Gi);var no={},we={};function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var fa=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},$n=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!to.typeOf(e)},Zt=Object.freeze([]),Xe=Object.freeze({});function Rt(e){return typeof e=="function"}function ua(e){return e.displayName||e.name||"Component"}function mr(e){return e&&typeof e.styledComponentId=="string"}var pt=typeof no<"u"&&we!==void 0&&(we.REACT_APP_SC_ATTR||we.SC_ATTR)||"data-styled",pr=typeof window<"u"&&"HTMLElement"in window,Xi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof no<"u"&&we!==void 0&&(we.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&we.REACT_APP_SC_DISABLE_SPEEDY!==""?we.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&we.REACT_APP_SC_DISABLE_SPEEDY:we.SC_DISABLE_SPEEDY!==void 0&&we.SC_DISABLE_SPEEDY!==""&&we.SC_DISABLE_SPEEDY!=="false"&&we.SC_DISABLE_SPEEDY)),qi={};function Lt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Vi=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,i=o;n>=i;)(i<<=1)<0&&Lt(16,""+n);this.groupSizes=new Uint32Array(i),this.groupSizes.set(a),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),f=0,d=r.length;f<d;f++)this.tag.insertRule(u,r[f])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),o=a+r;this.groupSizes[n]=0;for(var i=a;i<o;i++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],o=this.indexOfGroup(n),i=o+a,l=o;l<i;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),qt=new Map,Jt=new Map,Ot=1,Yt=function(e){if(qt.has(e))return qt.get(e);for(;Jt.has(Ot);)Ot++;var t=Ot++;return qt.set(e,t),Jt.set(t,e),t},Ki=function(e){return Jt.get(e)},Zi=function(e,t){t>=Ot&&(Ot=t+1),qt.set(e,t),Jt.set(t,e)},Ji="style["+pt+'][data-styled-version="5.3.11"]',Qi=new RegExp("^"+pt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),es=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},ts=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,o=n.length;a<o;a++){var i=n[a].trim();if(i){var l=i.match(Qi);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(Zi(f,u),es(e,f,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},ns=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},ro=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){for(var u=l.childNodes,f=u.length;f>=0;f--){var d=u[f];if(d&&d.nodeType===1&&d.hasAttribute(pt))return d}}(n),o=a!==void 0?a.nextSibling:null;r.setAttribute(pt,"active"),r.setAttribute("data-styled-version","5.3.11");var i=ns();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},rs=function(){function e(n){var r=this.element=ro(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var o=document.styleSheets,i=0,l=o.length;i<l;i++){var u=o[i];if(u.ownerNode===a)return u}Lt(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),as=function(){function e(n){var r=this.element=ro(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(a,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),os=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),da=pr,is={isServer:!pr,useCSSOMInjection:!Xi},Qt=function(){function e(n,r,a){n===void 0&&(n=Xe),r===void 0&&(r={}),this.options=De({},is,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&pr&&da&&(da=!1,function(o){for(var i=document.querySelectorAll(Ji),l=0,u=i.length;l<u;l++){var f=i[l];f&&f.getAttribute(pt)!=="active"&&(ts(o,f),f.parentNode&&f.parentNode.removeChild(f))}}(this))}e.registerId=function(n){return Yt(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(De({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,o=r.useCSSOMInjection,i=r.target,n=a?new os(i):o?new rs(i):new as(i),new Vi(n)));var n,r,a,o,i},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Yt(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(Yt(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Yt(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,o="",i=0;i<a;i++){var l=Ki(i);if(l!==void 0){var u=n.names.get(l),f=r.getGroup(i);if(u&&f&&u.size){var d=pt+".g"+i+'[id="'+l+'"]',b="";u!==void 0&&u.forEach(function(T){T.length>0&&(b+=T+",")}),o+=""+f+d+'{content:"'+b+`"}/*!sc*/
`}}}return o}(this)},e}(),ss=/(a)(d)/gi,ma=function(e){return String.fromCharCode(e+(e>25?39:97))};function Hn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ma(t%52)+n;return(ma(t%52)+n).replace(ss,"$1-$2")}var ft=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ao=function(e){return ft(5381,e)};function oo(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Rt(n)&&!mr(n))return!1}return!0}var ls=ao("5.3.11"),cs=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&oo(t),this.componentId=n,this.baseHash=ft(ls,n),this.baseStyle=r,Qt.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))o.push(this.staticRulesId);else{var i=rt(this.rules,t,n,r).join(""),l=Hn(ft(this.baseHash,i)>>>0);if(!n.hasNameForId(a,l)){var u=r(i,"."+l,void 0,a);n.insertRules(a,l,u)}o.push(l),this.staticRulesId=l}else{for(var f=this.rules.length,d=ft(this.baseHash,r.hash),b="",T=0;T<f;T++){var w=this.rules[T];if(typeof w=="string")b+=w;else if(w){var S=rt(w,t,n,r),m=Array.isArray(S)?S.join(""):S;d=ft(d,m+T),b+=m}}if(b){var E=Hn(d>>>0);if(!n.hasNameForId(a,E)){var L=r(b,"."+E,void 0,a);n.insertRules(a,E,L)}o.push(E)}}return o.join(" ")},e}(),fs=/^\s*\/\/.*$/gm,us=[":","[",".","#"];function ds(e){var t,n,r,a,o=Xe,i=o.options,l=i===void 0?Xe:i,u=o.plugins,f=u===void 0?Zt:u,d=new zi(l),b=[],T=function(m){function E(L){if(L)try{m(L+"}")}catch{}}return function(L,O,R,I,h,B,ye,ie,xe,Pe){switch(L){case 1:if(xe===0&&O.charCodeAt(0)===64)return m(O+";"),"";break;case 2:if(ie===0)return O+"/*|*/";break;case 3:switch(ie){case 102:case 112:return m(R[0]+O),"";default:return O+(Pe===0?"/*|*/":"")}case-2:O.split("/*|*/}").forEach(E)}}}(function(m){b.push(m)}),w=function(m,E,L){return E===0&&us.indexOf(L[n.length])!==-1||L.match(a)?m:"."+t};function S(m,E,L,O){O===void 0&&(O="&");var R=m.replace(fs,""),I=E&&L?L+" "+E+" { "+R+" }":R;return t=O,n=E,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),d(L||!E?"":E,I)}return d.use([].concat(f,[function(m,E,L){m===2&&L.length&&L[0].lastIndexOf(n)>0&&(L[0]=L[0].replace(r,w))},T,function(m){if(m===-2){var E=b;return b=[],E}}])),S.hash=f.length?f.reduce(function(m,E){return E.name||Lt(15),ft(m,E.name)},5381).toString():"",S}var io=it.createContext();io.Consumer;var so=it.createContext(),ms=(so.Consumer,new Qt),Yn=ds();function lo(){return nt.useContext(io)||ms}function co(){return nt.useContext(so)||Yn}var ps=function(){function e(t,n){var r=this;this.inject=function(a,o){o===void 0&&(o=Yn);var i=r.name+o.hash;a.hasNameForId(r.id,i)||a.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.toString=function(){return Lt(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Yn),this.name+t.hash},e}(),hs=/([A-Z])/,gs=/([A-Z])/g,ys=/^ms-/,bs=function(e){return"-"+e.toLowerCase()};function pa(e){return hs.test(e)?e.replace(gs,bs).replace(ys,"-ms-"):e}var ha=function(e){return e==null||e===!1||e===""};function rt(e,t,n,r){if(Array.isArray(e)){for(var a,o=[],i=0,l=e.length;i<l;i+=1)(a=rt(e[i],t,n,r))!==""&&(Array.isArray(a)?o.push.apply(o,a):o.push(a));return o}if(ha(e))return"";if(mr(e))return"."+e.styledComponentId;if(Rt(e)){if(typeof(f=e)!="function"||f.prototype&&f.prototype.isReactComponent||!t)return e;var u=e(t);return rt(u,t,n,r)}var f;return e instanceof ps?n?(e.inject(n,r),e.getName(r)):e:$n(e)?function d(b,T){var w,S,m=[];for(var E in b)b.hasOwnProperty(E)&&!ha(b[E])&&(Array.isArray(b[E])&&b[E].isCss||Rt(b[E])?m.push(pa(E)+":",b[E],";"):$n(b[E])?m.push.apply(m,d(b[E],E)):m.push(pa(E)+": "+(w=E,(S=b[E])==null||typeof S=="boolean"||S===""?"":typeof S!="number"||S===0||w in Ui||w.startsWith("--")?String(S).trim():S+"px")+";"));return T?[T+" {"].concat(m,["}"]):m}(e):e.toString()}var ga=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function fo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Rt(e)||$n(e)?ga(rt(fa(Zt,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ga(rt(fa(e,n)))}var uo=function(e,t,n){return n===void 0&&(n=Xe),e.theme!==n.theme&&e.theme||t||n.theme},vs=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,As=/(^-|-$)/g;function Rn(e){return e.replace(vs,"-").replace(As,"")}var mo=function(e){return Hn(ao(e)>>>0)};function Wt(e){return typeof e=="string"&&!0}var Wn=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ss=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ts(e,t,n){var r=e[n];Wn(t)&&Wn(r)?po(r,t):e[n]=t}function po(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,o=n;a<o.length;a++){var i=o[a];if(Wn(i))for(var l in i)Ss(l)&&Ts(e,i[l],l)}return e}var hr=it.createContext();hr.Consumer;var In={};function ho(e,t,n){var r=mr(e),a=!Wt(e),o=t.attrs,i=o===void 0?Zt:o,l=t.componentId,u=l===void 0?function(O,R){var I=typeof O!="string"?"sc":Rn(O);In[I]=(In[I]||0)+1;var h=I+"-"+mo("5.3.11"+I+In[I]);return R?R+"-"+h:h}(t.displayName,t.parentComponentId):l,f=t.displayName,d=f===void 0?function(O){return Wt(O)?"styled."+O:"Styled("+ua(O)+")"}(e):f,b=t.displayName&&t.componentId?Rn(t.displayName)+"-"+t.componentId:t.componentId||u,T=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(O,R,I){return e.shouldForwardProp(O,R,I)&&t.shouldForwardProp(O,R,I)}:e.shouldForwardProp);var S,m=new cs(n,b,r?e.componentStyle:void 0),E=m.isStatic&&i.length===0,L=function(O,R){return function(I,h,B,ye){var ie=I.attrs,xe=I.componentStyle,Pe=I.defaultProps,Q=I.foldedComponentIds,oe=I.shouldForwardProp,le=I.styledComponentId,de=I.target,ce=function(x,c,U){x===void 0&&(x=Xe);var v=De({},c,{theme:x}),X={};return U.forEach(function(j){var H,D,q,te=j;for(H in Rt(te)&&(te=te(v)),te)v[H]=X[H]=H==="className"?(D=X[H],q=te[H],D&&q?D+" "+q:D||q):te[H]}),[v,X]}(uo(h,nt.useContext(hr),Pe)||Xe,h,ie),Ze=ce[0],Ae=ce[1],me=function(x,c,U,v){var X=lo(),j=co(),H=c?x.generateAndInjectStyles(Xe,X,j):x.generateAndInjectStyles(U,X,j);return H}(xe,ye,Ze),Je=B,Ue=Ae.$as||h.$as||Ae.as||h.as||de,K=Wt(Ue),k=Ae!==h?De({},h,{},Ae):h,A={};for(var C in k)C[0]!=="$"&&C!=="as"&&(C==="forwardedAs"?A.as=k[C]:(oe?oe(C,ia,Ue):!K||ia(C))&&(A[C]=k[C]));return h.style&&Ae.style!==h.style&&(A.style=De({},h.style,{},Ae.style)),A.className=Array.prototype.concat(Q,le,me!==le?me:null,h.className,Ae.className).filter(Boolean).join(" "),A.ref=Je,nt.createElement(Ue,A)}(S,O,R,E)};return L.displayName=d,(S=it.forwardRef(L)).attrs=T,S.componentStyle=m,S.displayName=d,S.shouldForwardProp=w,S.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Zt,S.styledComponentId=b,S.target=r?e.target:e,S.withComponent=function(O){var R=t.componentId,I=function(B,ye){if(B==null)return{};var ie,xe,Pe={},Q=Object.keys(B);for(xe=0;xe<Q.length;xe++)ie=Q[xe],ye.indexOf(ie)>=0||(Pe[ie]=B[ie]);return Pe}(t,["componentId"]),h=R&&R+"-"+(Wt(O)?O:Rn(ua(O)));return ho(O,De({},I,{attrs:T,componentId:h}),n)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(O){this._foldedDefaultProps=r?po({},e.defaultProps,O):O}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),a&&Bi(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var Gn=function(e){return function t(n,r,a){if(a===void 0&&(a=Xe),!to.isValidElementType(r))return Lt(1,String(r));var o=function(){return n(r,a,fo.apply(void 0,arguments))};return o.withConfig=function(i){return t(n,r,De({},a,{},i))},o.attrs=function(i){return t(n,r,De({},a,{attrs:Array.prototype.concat(a.attrs,i).filter(Boolean)}))},o}(ho,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Gn[e]=Gn(e)});var Es=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=oo(n),Qt.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,a,o){var i=o(rt(this.rules,r,a,o).join(""),""),l=this.componentId+n;a.insertRules(l,l,i)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,a,o){n>2&&Qt.registerId(this.componentId+n),this.removeStyles(n,a),this.createStyles(n,r,a,o)},e}();function Vc(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=fo.apply(void 0,[e].concat(n)),o="sc-global-"+mo(JSON.stringify(a)),i=new Es(a,o);function l(f){var d=lo(),b=co(),T=nt.useContext(hr),w=nt.useRef(d.allocateGSInstance(o)).current;return d.server&&u(w,f,d,T,b),nt.useLayoutEffect(function(){if(!d.server)return u(w,f,d,T,b),function(){return i.removeStyles(w,d)}},[w,f,d,T,b]),null}function u(f,d,b,T,w){if(i.isStatic)i.renderStyles(f,qi,b,w);else{var S=De({},d,{theme:uo(d,T,l.defaultProps)});i.renderStyles(f,S,b,w)}}return it.memo(l)}const xs="#8c1d40",_s="#ffc627",ya="#ffffff",ba="#000000",va="#191919",Kc="#BFBFBF",Zc="#d0d0d0",Jc="#e8e8e8",ws="#bfbfbf",Qc="#495057",Os=Gn.a`
  font-family:
    Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif;
  color: ${va};
  padding: 0.5rem 1rem;
  border-radius: 400rem;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  transition: 0.03s ease-in-out;
  cursor: pointer;
  & + a {
    margin-left: 1rem;
  }
  &:hover {
    transform: scale(1.05);
  }
  &.button-light {
    background-color: ${ws} !important;
    color: ${ba} !important;
  }
  &.button-gold {
    background-color: ${_s} !important;
    color: ${ba} !important;
  }
  &.button-dark {
    background-color: ${va} !important;
    color: ${ya} !important;
  }
  &.button-maroon {
    background-color: ${xs} !important;
    color: ${ya} !important;
  }
`,go=({href:e,color:t,text:n,classes:r,onClick:a,onKeyDown:o,onFocus:i,as:l,...u})=>Pt.jsx(Os,{href:e,className:`button-${t} ${r??""}`,onClick:a,onKeyDown:o,onFocus:i,as:l,...u,children:n});go.propTypes={...dr};go.__docgenInfo={description:`A reusable button component that renders a ButtonWrapper with customizable properties.

@param {Object} props - The component props
@param {string} [props.href] - The URL to navigate to when the button is clicked (for link buttons)
@param {string} props.color - The color variant for the button styling
@param {string} props.text - The text content to display inside the button
@param {string} [props.classes] - Additional CSS classes to apply to the button
@param {function} [props.onClick] - Event handler function called when the button is clicked
@param {function} [props.onKeyDown] - Event handler function called when a key is pressed while the button is focused
@param {function} [props.onFocus] - Event handler function called when the button receives focus
@param {string|React.Component} [props.as] - The element type or component to render as
@returns {JSX.Element} The rendered button component`,methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!1},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},onFocus:{description:"",type:{name:"func"},required:!1}}};const Cs={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},ef=Cs,ks={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},tf=ks,nf={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Ps={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},rf=Ps;function Rs(e,t,n){return(t=Ns(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Aa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Aa(Object(n),!0).forEach(function(r){Rs(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Aa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Is(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ns(e){var t=Is(e,"string");return typeof t=="symbol"?t:t+""}const Sa=()=>{};let gr={},yo={},bo=null,vo={mark:Sa,measure:Sa};try{typeof window<"u"&&(gr=window),typeof document<"u"&&(yo=document),typeof MutationObserver<"u"&&(bo=MutationObserver),typeof performance<"u"&&(vo=performance)}catch{}const{userAgent:Ta=""}=gr.navigator||{},qe=gr,V=yo,Ea=bo,Gt=vo;qe.document;const Ye=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",Ao=~Ta.indexOf("MSIE")||~Ta.indexOf("Trident/");var Ls=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ms=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,So={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ds={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},To=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ue="classic",rn="duotone",Fs="sharp",zs="sharp-duotone",Eo=[ue,rn,Fs,zs],Us={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},js={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},$s=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Hs={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ys=["fak","fa-kit","fakd","fa-kit-duotone"],xa={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ws=["kit"],Gs={kit:{"fa-kit":"fak"}},Bs=["fak","fakd"],Xs={kit:{fak:"fa-kit"}},_a={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Bt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qs=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Vs=["fak","fa-kit","fakd","fa-kit-duotone"],Ks={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Zs={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Js={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Bn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Qs=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Xn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...qs,...Qs],el=["solid","regular","light","thin","duotone","brands"],xo=[1,2,3,4,5,6,7,8,9,10],tl=xo.concat([11,12,13,14,15,16,17,18,19,20]),nl=[...Object.keys(Js),...el,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Bt.GROUP,Bt.SWAP_OPACITY,Bt.PRIMARY,Bt.SECONDARY].concat(xo.map(e=>"".concat(e,"x"))).concat(tl.map(e=>"w-".concat(e))),rl={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const $e="___FONT_AWESOME___",qn=16,_o="fa",wo="svg-inline--fa",at="data-fa-i2svg",Vn="data-fa-pseudo-element",al="data-fa-pseudo-element-pending",yr="data-prefix",br="data-icon",wa="fontawesome-i2svg",ol="async",il=["HTML","HEAD","STYLE","SCRIPT"],Oo=(()=>{try{return!0}catch{return!1}})();function Mt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[ue]}})}const Co=y({},So);Co[ue]=y(y(y(y({},{"fa-duotone":"duotone"}),So[ue]),xa.kit),xa["kit-duotone"]);const sl=Mt(Co),Kn=y({},Hs);Kn[ue]=y(y(y(y({},{duotone:"fad"}),Kn[ue]),_a.kit),_a["kit-duotone"]);const Oa=Mt(Kn),Zn=y({},Bn);Zn[ue]=y(y({},Zn[ue]),Xs.kit);const vr=Mt(Zn),Jn=y({},Zs);Jn[ue]=y(y({},Jn[ue]),Gs.kit);Mt(Jn);const ll=Ls,ko="fa-layers-text",cl=Ms,fl=y({},Us);Mt(fl);const ul=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Nn=Ds,dl=[...Ws,...nl],Ct=qe.FontAwesomeConfig||{};function ml(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function pl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}V&&typeof V.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=pl(ml(n));a!=null&&(Ct[r]=a)});const Po={styleDefault:"solid",familyDefault:ue,cssPrefix:_o,replacementClass:wo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ct.familyPrefix&&(Ct.cssPrefix=Ct.familyPrefix);const ht=y(y({},Po),Ct);ht.autoReplaceSvg||(ht.observeMutations=!1);const P={};Object.keys(Po).forEach(e=>{Object.defineProperty(P,e,{enumerable:!0,set:function(t){ht[e]=t,kt.forEach(n=>n(P))},get:function(){return ht[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){ht.cssPrefix=e,kt.forEach(t=>t(P))},get:function(){return ht.cssPrefix}});qe.FontAwesomeConfig=P;const kt=[];function hl(e){return kt.push(e),()=>{kt.splice(kt.indexOf(e),1)}}const Be=qn,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gl(e){if(!e||!Ye)return;const t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=V.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return V.head.insertBefore(t,r),e}const yl="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function It(){let e=12,t="";for(;e-- >0;)t+=yl[Math.random()*62|0];return t}function yt(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ar(e){return e.classList?yt(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Ro(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bl(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Ro(e[n]),'" '),"").trim()}function an(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Sr(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function vl(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(o," ").concat(i," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:u,path:f}}function Al(e){let{transform:t,width:n=qn,height:r=qn,startCentered:a=!1}=e,o="";return a&&Ao?o+="translate(".concat(t.x/Be-n/2,"em, ").concat(t.y/Be-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/Be,"em), calc(-50% + ").concat(t.y/Be,"em)) "):o+="translate(".concat(t.x/Be,"em, ").concat(t.y/Be,"em) "),o+="scale(".concat(t.size/Be*(t.flipX?-1:1),", ").concat(t.size/Be*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Sl=`:root, :host {
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
}`;function Io(){const e=_o,t=wo,n=P.cssPrefix,r=P.replacementClass;let a=Sl;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(r))}return a}let Ca=!1;function Ln(){P.autoAddCss&&!Ca&&(gl(Io()),Ca=!0)}var Tl={mixout(){return{dom:{css:Io,insertCss:Ln}}},hooks(){return{beforeDOMElementCreation(){Ln()},beforeI2svg(){Ln()}}}};const He=qe||{};He[$e]||(He[$e]={});He[$e].styles||(He[$e].styles={});He[$e].hooks||(He[$e].hooks={});He[$e].shims||(He[$e].shims=[]);var ze=He[$e];const No=[],Lo=function(){V.removeEventListener("DOMContentLoaded",Lo),en=1,No.map(e=>e())};let en=!1;Ye&&(en=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),en||V.addEventListener("DOMContentLoaded",Lo));function El(e){Ye&&(en?setTimeout(e,0):No.push(e))}function Dt(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Ro(e):"<".concat(t," ").concat(bl(n),">").concat(r.map(Dt).join(""),"</").concat(t,">")}function ka(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Mn=function(t,n,r,a){var o=Object.keys(t),i=o.length,l=n,u,f,d;for(r===void 0?(u=1,d=t[o[0]]):(u=0,d=r);u<i;u++)f=o[u],d=l(d,t[f],f,t);return d};function xl(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Qn(e){const t=xl(e);return t.length===1?t[0].toString(16):null}function _l(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Pa(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function er(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Pa(t);typeof ze.hooks.addPack=="function"&&!r?ze.hooks.addPack(e,Pa(t)):ze.styles[e]=y(y({},ze.styles[e]||{}),a),e==="fas"&&er("fa",t)}const{styles:Nt,shims:wl}=ze,Mo=Object.keys(vr),Ol=Mo.reduce((e,t)=>(e[t]=Object.keys(vr[t]),e),{});let Tr=null,Do={},Fo={},zo={},Uo={},jo={};function Cl(e){return~dl.indexOf(e)}function kl(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Cl(a)?a:null}const $o=()=>{const e=r=>Mn(Nt,(a,o,i)=>(a[i]=Mn(o,r,{}),a),{});Do=e((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),Fo=e((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),jo=e((r,a,o)=>{const i=a[2];return r[o]=o,i.forEach(l=>{r[l]=o}),r});const t="far"in Nt||P.autoFetchSvg,n=Mn(wl,(r,a)=>{const o=a[0];let i=a[1];const l=a[2];return i==="far"&&!t&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:l}),r},{names:{},unicodes:{}});zo=n.names,Uo=n.unicodes,Tr=on(P.styleDefault,{family:P.familyDefault})};hl(e=>{Tr=on(e.styleDefault,{family:P.familyDefault})});$o();function Er(e,t){return(Do[e]||{})[t]}function Pl(e,t){return(Fo[e]||{})[t]}function tt(e,t){return(jo[e]||{})[t]}function Ho(e){return zo[e]||{prefix:null,iconName:null}}function Rl(e){const t=Uo[e],n=Er("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ve(){return Tr}const Yo=()=>({prefix:null,iconName:null,rest:[]});function Il(e){let t=ue;const n=Mo.reduce((r,a)=>(r[a]="".concat(P.cssPrefix,"-").concat(a),r),{});return Eo.forEach(r=>{(e.includes(n[r])||e.some(a=>Ol[r].includes(a)))&&(t=r)}),t}function on(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ue}=t,r=sl[n][e];if(n===rn&&!e)return"fad";const a=Oa[n][e]||Oa[n][r],o=e in ze.styles?e:null;return a||o||null}function Nl(e){let t=[],n=null;return e.forEach(r=>{const a=kl(P.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function Ra(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function sn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=Xn.concat(Vs),o=Ra(e.filter(b=>a.includes(b))),i=Ra(e.filter(b=>!Xn.includes(b))),l=o.filter(b=>(r=b,!To.includes(b))),[u=null]=l,f=Il(o),d=y(y({},Nl(i)),{},{prefix:on(u,{family:f})});return y(y(y({},d),Fl({values:e,family:f,styles:Nt,config:P,canonical:d,givenPrefix:r})),Ll(n,r,d))}function Ll(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const o=t==="fa"?Ho(a):{},i=tt(r,a);return a=o.iconName||i||a,r=o.prefix||r,r==="far"&&!Nt.far&&Nt.fas&&!P.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const Ml=Eo.filter(e=>e!==ue||e!==rn),Dl=Object.keys(Bn).filter(e=>e!==ue).map(e=>Object.keys(Bn[e])).flat();function Fl(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:o={},config:i={}}=e,l=n===rn,u=t.includes("fa-duotone")||t.includes("fad"),f=i.familyDefault==="duotone",d=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(u||f||d)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Ml.includes(n)&&(Object.keys(o).find(T=>Dl.includes(T))||i.autoFetchSvg)){const T=$s.get(n).defaultShortPrefixId;r.prefix=T,r.iconName=tt(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=Ve()||"fas"),r}class zl{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=y(y({},this.definitions[o]||{}),a[o]),er(o,a[o]);const i=vr[ue][o];i&&er(i,a[o]),$o()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:i,icon:l}=r[a],u=l[2];t[o]||(t[o]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(t[o][f]=l)}),t[o][i]=l}),t}}let Ia=[],ut={};const mt={},Ul=Object.keys(mt);function jl(e,t){let{mixoutsTo:n}=t;return Ia=e,ut={},Object.keys(mt).forEach(r=>{Ul.indexOf(r)===-1&&delete mt[r]}),Ia.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(i=>{ut[i]||(ut[i]=[]),ut[i].push(o[i])})}r.provides&&r.provides(mt)}),n}function tr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(ut[e]||[]).forEach(i=>{t=i.apply(null,[t,...r])}),t}function ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(ut[e]||[]).forEach(o=>{o.apply(null,n)})}function Ke(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return mt[e]?mt[e].apply(null,t):void 0}function nr(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Ve();if(t)return t=tt(n,t)||t,ka(Wo.definitions,n,t)||ka(ze.styles,n,t)}const Wo=new zl,$l=()=>{P.autoReplaceSvg=!1,P.observeMutations=!1,ot("noAuto")},Hl={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(ot("beforeI2svg",e),Ke("pseudoElements2svg",e),Ke("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,El(()=>{Wl({autoReplaceSvgRoot:t}),ot("watch",e)})}},Yl={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:tt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=on(e[0]);return{prefix:n,iconName:tt(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(ll))){const t=sn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Ve(),iconName:tt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Ve();return{prefix:t,iconName:tt(t,e)||e}}}},Ee={noAuto:$l,config:P,dom:Hl,parse:Yl,library:Wo,findIconDefinition:nr,toHtml:Dt},Wl=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=V}=e;(Object.keys(ze.styles).length>0||P.autoFetchSvg)&&Ye&&P.autoReplaceSvg&&Ee.dom.i2svg({node:t})};function ln(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Dt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Ye)return;const n=V.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Gl(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:i}=e;if(Sr(i)&&n.found&&!r.found){const{width:l,height:u}=n,f={x:l/u/2,y:.5};a.style=an(y(y({},o),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Bl(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;const i=o===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:y(y({},a),{},{id:i}),children:r}]}]}function xr(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:l,maskId:u,titleId:f,extra:d,watchable:b=!1}=e,{width:T,height:w}=n.found?n:t,S=Bs.includes(r),m=[P.replacementClass,a?"".concat(P.cssPrefix,"-").concat(a):""].filter(h=>d.classes.indexOf(h)===-1).filter(h=>h!==""||!!h).concat(d.classes).join(" ");let E={children:[],attributes:y(y({},d.attributes),{},{"data-prefix":r,"data-icon":a,class:m,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(w)})};const L=S&&!~d.classes.indexOf("fa-fw")?{width:"".concat(T/w*16*.0625,"em")}:{};b&&(E.attributes[at]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(f||It())},children:[l]}),delete E.attributes.title);const O=y(y({},E),{},{prefix:r,iconName:a,main:t,mask:n,maskId:u,transform:o,symbol:i,styles:y(y({},L),d.styles)}),{children:R,attributes:I}=n.found&&t.found?Ke("generateAbstractMask",O)||{children:[],attributes:{}}:Ke("generateAbstractIcon",O)||{children:[],attributes:{}};return O.children=R,O.attributes=I,i?Bl(O):Gl(O)}function Na(e){const{content:t,width:n,height:r,transform:a,title:o,extra:i,watchable:l=!1}=e,u=y(y(y({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(u[at]="");const f=y({},i.styles);Sr(a)&&(f.transform=Al({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);const d=an(f);d.length>0&&(u.style=d);const b=[];return b.push({tag:"span",attributes:u,children:[t]}),o&&b.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),b}function Xl(e){const{content:t,title:n,extra:r}=e,a=y(y(y({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=an(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Dn}=ze;function rr(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(Nn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(Nn.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(Nn.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const ql={found:!1,width:512,height:512};function Vl(e,t){!Oo&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ar(e,t){let n=t;return t==="fa"&&P.styleDefault!==null&&(t=Ve()),new Promise((r,a)=>{if(n==="fa"){const o=Ho(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Dn[t]&&Dn[t][e]){const o=Dn[t][e];return r(rr(o))}Vl(e,t),r(y(y({},ql),{},{icon:P.showMissingIcons&&e?Ke("missingIconAbstract")||{}:{}}))})}const La=()=>{},or=P.measurePerformance&&Gt&&Gt.mark&&Gt.measure?Gt:{mark:La,measure:La},wt='FA "6.7.2"',Kl=e=>(or.mark("".concat(wt," ").concat(e," begins")),()=>Go(e)),Go=e=>{or.mark("".concat(wt," ").concat(e," ends")),or.measure("".concat(wt," ").concat(e),"".concat(wt," ").concat(e," begins"),"".concat(wt," ").concat(e," ends"))};var _r={begin:Kl,end:Go};const Vt=()=>{};function Ma(e){return typeof(e.getAttribute?e.getAttribute(at):null)=="string"}function Zl(e){const t=e.getAttribute?e.getAttribute(yr):null,n=e.getAttribute?e.getAttribute(br):null;return t&&n}function Jl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Ql(){return P.autoReplaceSvg===!0?Kt.replace:Kt[P.autoReplaceSvg]||Kt.replace}function ec(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function tc(e){return V.createElement(e)}function Bo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?ec:tc}=t;if(typeof e=="string")return V.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Bo(o,{ceFn:n}))}),r}function nc(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Kt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Bo(n),t)}),t.getAttribute(at)===null&&P.keepOriginalSource){let n=V.createComment(nc(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Ar(t).indexOf(P.replacementClass))return Kt.replace(e);const r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,l)=>(l===P.replacementClass||l.match(r)?i.toSvg.push(l):i.toNode.push(l),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>Dt(o)).join(`
`);t.setAttribute(at,""),t.innerHTML=a}};function Da(e){e()}function Xo(e,t){const n=typeof t=="function"?t:Vt;if(e.length===0)n();else{let r=Da;P.mutateApproach===ol&&(r=qe.requestAnimationFrame||Da),r(()=>{const a=Ql(),o=_r.begin("mutate");e.map(a),o(),n()})}}let wr=!1;function qo(){wr=!0}function ir(){wr=!1}let tn=null;function Fa(e){if(!Ea||!P.observeMutations)return;const{treeCallback:t=Vt,nodeCallback:n=Vt,pseudoElementsCallback:r=Vt,observeMutationsRoot:a=V}=e;tn=new Ea(o=>{if(wr)return;const i=Ve();yt(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Ma(l.addedNodes[0])&&(P.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&P.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Ma(l.target)&&~ul.indexOf(l.attributeName))if(l.attributeName==="class"&&Zl(l.target)){const{prefix:u,iconName:f}=sn(Ar(l.target));l.target.setAttribute(yr,u||i),f&&l.target.setAttribute(br,f)}else Jl(l.target)&&n(l.target)})}),Ye&&tn.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function rc(){tn&&tn.disconnect()}function ac(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const o=a.split(":"),i=o[0],l=o.slice(1);return i&&l.length>0&&(r[i]=l.join(":").trim()),r},{})),n}function oc(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=sn(Ar(e));return a.prefix||(a.prefix=Ve()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Pl(a.prefix,e.innerText)||Er(a.prefix,Qn(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ic(e){const t=yt(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||It()):(t["aria-hidden"]="true",t.focusable="false")),t}function sc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function za(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=oc(e),o=ic(e),i=tr("parseNodeAttributes",{},e);let l=t.styleParser?ac(e):[];return y({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},i)}const{styles:lc}=ze;function Vo(e){const t=P.autoReplaceSvg==="nest"?za(e,{styleParser:!1}):za(e);return~t.extra.classes.indexOf(ko)?Ke("generateLayersText",e,t):Ke("generateSvgReplacementMutation",e,t)}function cc(){return[...Ys,...Xn]}function Ua(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();const n=V.documentElement.classList,r=d=>n.add("".concat(wa,"-").concat(d)),a=d=>n.remove("".concat(wa,"-").concat(d)),o=P.autoFetchSvg?cc():To.concat(Object.keys(lc));o.includes("fa")||o.push("fa");const i=[".".concat(ko,":not([").concat(at,"])")].concat(o.map(d=>".".concat(d,":not([").concat(at,"])"))).join(", ");if(i.length===0)return Promise.resolve();let l=[];try{l=yt(e.querySelectorAll(i))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();const u=_r.begin("onTree"),f=l.reduce((d,b)=>{try{const T=Vo(b);T&&d.push(T)}catch(T){Oo||T.name==="MissingIcon"&&console.error(T)}return d},[]);return new Promise((d,b)=>{Promise.all(f).then(T=>{Xo(T,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),u(),d()})}).catch(T=>{u(),b(T)})})}function fc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vo(e).then(n=>{n&&Xo([n],t)})}function uc(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:nr(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:nr(a||{})),e(r,y(y({},n),{},{mask:a}))}}const dc=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Fe,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:l=null,classes:u=[],attributes:f={},styles:d={}}=t;if(!e)return;const{prefix:b,iconName:T,icon:w}=e;return ln(y({type:"icon"},e),()=>(ot("beforeDOMElementCreation",{iconDefinition:e,params:t}),P.autoA11y&&(i?f["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(l||It()):(f["aria-hidden"]="true",f.focusable="false")),xr({icons:{main:rr(w),mask:a?rr(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:T,transform:y(y({},Fe),n),symbol:r,title:i,maskId:o,titleId:l,extra:{attributes:f,styles:d,classes:u}})))};var mc={mixout(){return{icon:uc(dc)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Ua,e.nodeCallback=fc,e}}},provides(e){e.i2svg=function(t){const{node:n=V,callback:r=()=>{}}=t;return Ua(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:o,prefix:i,transform:l,symbol:u,mask:f,maskId:d,extra:b}=n;return new Promise((T,w)=>{Promise.all([ar(r,i),f.iconName?ar(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[m,E]=S;T([t,xr({icons:{main:m,mask:E},prefix:i,iconName:r,transform:l,symbol:u,maskId:d,title:a,titleId:o,extra:b,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:o,styles:i}=t;const l=an(i);l.length>0&&(r.style=l);let u;return Sr(o)&&(u=Ke("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(u||a.icon),{children:n,attributes:r}}}},pc={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return ln({type:"layer"},()=>{ot("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},hc={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return ln({type:"counter",content:e},()=>(ot("beforeDOMElementCreation",{content:e,params:t}),Xl({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(P.cssPrefix,"-layers-counter"),...r]}})))}}}},gc={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Fe,title:r=null,classes:a=[],attributes:o={},styles:i={}}=t;return ln({type:"text",content:e},()=>(ot("beforeDOMElementCreation",{content:e,params:t}),Na({content:e,transform:y(y({},Fe),n),title:r,extra:{attributes:o,styles:i,classes:["".concat(P.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:o}=n;let i=null,l=null;if(Ao){const u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/u,l=f.height/u}return P.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Na({content:t.innerHTML,width:i,height:l,transform:a,title:r,extra:o,watchable:!0})])}}};const yc=new RegExp('"',"ug"),ja=[1105920,1112319],$a=y(y(y(y({},{FontAwesome:{normal:"fas",400:"fas"}}),js),rl),Ks),sr=Object.keys($a).reduce((e,t)=>(e[t.toLowerCase()]=$a[t],e),{}),bc=Object.keys(sr).reduce((e,t)=>{const n=sr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function vc(e){const t=e.replace(yc,""),n=_l(t,0),r=n>=ja[0]&&n<=ja[1],a=t.length===2?t[0]===t[1]:!1;return{value:Qn(a?t[0]:t),isSecondary:r||a}}function Ac(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(sr[n]||{})[a]||bc[n]}function Ha(e,t){const n="".concat(al).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const i=yt(e.children).filter(T=>T.getAttribute(Vn)===t)[0],l=qe.getComputedStyle(e,t),u=l.getPropertyValue("font-family"),f=u.match(cl),d=l.getPropertyValue("font-weight"),b=l.getPropertyValue("content");if(i&&!f)return e.removeChild(i),r();if(f&&b!=="none"&&b!==""){const T=l.getPropertyValue("content");let w=Ac(u,d);const{value:S,isSecondary:m}=vc(T),E=f[0].startsWith("FontAwesome");let L=Er(w,S),O=L;if(E){const R=Rl(S);R.iconName&&R.prefix&&(L=R.iconName,w=R.prefix)}if(L&&!m&&(!i||i.getAttribute(yr)!==w||i.getAttribute(br)!==O)){e.setAttribute(n,O),i&&e.removeChild(i);const R=sc(),{extra:I}=R;I.attributes[Vn]=t,ar(L,w).then(h=>{const B=xr(y(y({},R),{},{icons:{main:h,mask:Yo()},prefix:w,iconName:O,extra:I,watchable:!0})),ye=V.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ye,e.firstChild):e.appendChild(ye),ye.outerHTML=B.map(ie=>Dt(ie)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Sc(e){return Promise.all([Ha(e,"::before"),Ha(e,"::after")])}function Tc(e){return e.parentNode!==document.head&&!~il.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Vn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ya(e){if(Ye)return new Promise((t,n)=>{const r=yt(e.querySelectorAll("*")).filter(Tc).map(Sc),a=_r.begin("searchPseudoElements");qo(),Promise.all(r).then(()=>{a(),ir(),t()}).catch(()=>{a(),ir(),n()})})}var Ec={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Ya,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=V}=t;P.searchPseudoElements&&Ya(n)}}};let Wa=!1;var xc={mixout(){return{dom:{unwatch(){qo(),Wa=!0}}}},hooks(){return{bootstrap(){Fa(tr("mutationObserverCallbacks",{}))},noAuto(){rc()},watch(e){const{observeMutationsRoot:t}=e;Wa?ir():Fa(tr("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Ga=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var _c={mixout(){return{parse:{transform:e=>Ga(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Ga(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:o}=t;const i={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},b={transform:"translate(".concat(o/2*-1," -256)")},T={outer:i,inner:d,path:b};return{tag:"g",attributes:y({},T.outer),children:[{tag:"g",attributes:y({},T.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:y(y({},n.icon.attributes),T.path)}]}]}}}};const Fn={x:0,y:0,width:"100%",height:"100%"};function Ba(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function wc(e){return e.tag==="g"?e.children:[e]}var Oc={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?sn(n.split(" ").map(a=>a.trim())):Yo();return r.prefix||(r.prefix=Ve()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:l}=t;const{width:u,icon:f}=a,{width:d,icon:b}=o,T=vl({transform:l,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:y(y({},Fn),{},{fill:"white"})},S=f.children?{children:f.children.map(Ba)}:{},m={tag:"g",attributes:y({},T.inner),children:[Ba(y({tag:f.tag,attributes:y(y({},f.attributes),T.path)},S))]},E={tag:"g",attributes:y({},T.outer),children:[m]},L="mask-".concat(i||It()),O="clip-".concat(i||It()),R={tag:"mask",attributes:y(y({},Fn),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,E]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:wc(b)},R]};return n.push(I,{tag:"rect",attributes:y({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(L,")")},Fn)}),{children:n,attributes:r}}}},Cc={provides(e){let t=!1;qe.matchMedia&&(t=qe.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:y(y({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=y(y({},a),{},{attributeName:"opacity"}),i={tag:"circle",attributes:y(y({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:y(y({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:y(y({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:y(y({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:y(y({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:y(y({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:y(y({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},kc={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Pc=[Tl,mc,pc,hc,gc,Ec,xc,_c,Oc,Cc,kc];jl(Pc,{mixoutsTo:Ee});Ee.noAuto;Ee.config;Ee.library;Ee.dom;const lr=Ee.parse;Ee.findIconDefinition;Ee.toHtml;const Rc=Ee.icon;Ee.layer;Ee.text;Ee.counter;function Xa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xa(Object(n),!0).forEach(function(r){dt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nn(e){"@babel/helpers - typeof";return nn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nn(e)}function dt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ic(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Nc(e,t){if(e==null)return{};var n=Ic(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function cr(e){return Lc(e)||Mc(e)||Dc(e)||Fc()}function Lc(e){if(Array.isArray(e))return fr(e)}function Mc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Dc(e,t){if(e){if(typeof e=="string")return fr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fr(e,t)}}function fr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Fc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zc(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,l=e.flash,u=e.spin,f=e.spinPulse,d=e.spinReverse,b=e.pulse,T=e.fixedWidth,w=e.inverse,S=e.border,m=e.listItem,E=e.flip,L=e.size,O=e.rotation,R=e.pull,I=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":f,"fa-pulse":b,"fa-fw":T,"fa-inverse":w,"fa-border":S,"fa-li":m,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},dt(t,"fa-".concat(L),typeof L<"u"&&L!==null),dt(t,"fa-rotate-".concat(O),typeof O<"u"&&O!==null&&O!==0),dt(t,"fa-pull-".concat(R),typeof R<"u"&&R!==null),dt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(I).map(function(h){return I[h]?h:null}).filter(function(h){return h})}function Uc(e){return e=e-0,e===e}function Ko(e){return Uc(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var jc=["style"];function $c(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Hc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ko(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?t[$c(a)]=o:t[a]=o,t},{})}function Zo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return Zo(e,u)}),a=Object.keys(t.attributes||{}).reduce(function(u,f){var d=t.attributes[f];switch(f){case"class":u.attrs.className=d,delete t.attributes.class;break;case"style":u.attrs.style=Hc(d);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=d:u.attrs[Ko(f)]=d}return u},{attrs:{}}),o=n.style,i=o===void 0?{}:o,l=Nc(n,jc);return a.attrs.style=Me(Me({},a.attrs.style),i),e.apply(void 0,[t.tag,Me(Me({},a.attrs),l)].concat(cr(r)))}var Jo=!1;try{Jo=!0}catch{}function Yc(){if(!Jo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qa(e){if(e&&nn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(lr.icon)return lr.icon(e);if(e===null)return null;if(e&&nn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function zn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?dt({},e,t):{}}var Va={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Qo=it.forwardRef(function(e,t){var n=Me(Me({},Va),e),r=n.icon,a=n.mask,o=n.symbol,i=n.className,l=n.title,u=n.titleId,f=n.maskId,d=qa(r),b=zn("classes",[].concat(cr(zc(n)),cr((i||"").split(" ")))),T=zn("transform",typeof n.transform=="string"?lr.transform(n.transform):n.transform),w=zn("mask",qa(a)),S=Rc(d,Me(Me(Me(Me({},b),T),w),{},{symbol:o,title:l,titleId:u,maskId:f}));if(!S)return Yc("Could not find icon",d),null;var m=S.abstract,E={ref:t};return Object.keys(n).forEach(function(L){Va.hasOwnProperty(L)||(E[L]=n[L])}),Wc(m[0],E)});Qo.displayName="FontAwesomeIcon";Qo.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var Wc=Zo.bind(null,it.createElement);export{Vc as $,fo as A,go as B,Qo as F,qc as H,ra as N,p as P,On as T,Xc as a,Jc as b,va as c,Zc as d,ya as e,nf as f,Qc as g,xs as h,tf as i,Pt as j,Kc as k,dr as l,_s as m,ef as n,rf as o,Ni as p,Gn as q,Mi as r,Bc as t};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*! @license DOMPurify 3.4.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.0/LICENSE */
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
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
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
