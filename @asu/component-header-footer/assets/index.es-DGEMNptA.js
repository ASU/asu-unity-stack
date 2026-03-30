import{a as ei,g as Xa,R as mt,r as Kt}from"./iframe-NXifgO_t.js";var pn={exports:{}},yt={};var Ur;function ti(){if(Ur)return yt;Ur=1;var e=ei(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(l,u,f){var p,v={},T=null,N=null;f!==void 0&&(T=""+f),u.key!==void 0&&(T=""+u.key),u.ref!==void 0&&(N=u.ref);for(p in u)r.call(u,p)&&!o.hasOwnProperty(p)&&(v[p]=u[p]);if(l&&l.defaultProps)for(p in u=l.defaultProps,u)v[p]===void 0&&(v[p]=u[p]);return{$$typeof:t,type:l,key:T,ref:N,props:v,_owner:a.current}}return yt.Fragment=n,yt.jsx=i,yt.jsxs=i,yt}var jr;function ni(){return jr||(jr=1,pn.exports=ti()),pn.exports}var Ot=ni();const{entries:qa,setPrototypeOf:$r,isFrozen:ri,getPrototypeOf:ai,getOwnPropertyDescriptor:oi}=Object;let{freeze:pe,seal:Oe,create:Gt}=Object,{apply:Fn,construct:zn}=typeof Reflect<"u"&&Reflect;pe||(pe=function(t){return t});Oe||(Oe=function(t){return t});Fn||(Fn=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return t.apply(n,a)});zn||(zn=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return new t(...r)});const zt=he(Array.prototype.forEach),ii=he(Array.prototype.lastIndexOf),Hr=he(Array.prototype.pop),bt=he(Array.prototype.push),si=he(Array.prototype.splice),Bt=he(String.prototype.toLowerCase),hn=he(String.prototype.toString),gn=he(String.prototype.match),vt=he(String.prototype.replace),li=he(String.prototype.indexOf),ci=he(String.prototype.trim),Te=he(Object.prototype.hasOwnProperty),me=he(RegExp.prototype.test),At=fi(TypeError);function he(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return Fn(e,t,r)}}function fi(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return zn(e,n)}}function z(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Bt;$r&&$r(e,null);let r=t.length;for(;r--;){let a=t[r];if(typeof a=="string"){const o=n(a);o!==a&&(ri(t)||(t[r]=o),a=o)}e[a]=!0}return e}function ui(e){for(let t=0;t<e.length;t++)Te(e,t)||(e[t]=null);return e}function Ie(e){const t=Gt(null);for(const[n,r]of qa(e))Te(e,n)&&(Array.isArray(r)?t[n]=ui(r):r&&typeof r=="object"&&r.constructor===Object?t[n]=Ie(r):t[n]=r);return t}function St(e,t){for(;e!==null;){const r=oi(e,t);if(r){if(r.get)return he(r.get);if(typeof r.value=="function")return he(r.value)}e=ai(e)}function n(){return null}return n}const Yr=pe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),yn=pe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),bn=pe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),di=pe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),vn=pe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),mi=pe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Wr=pe(["#text"]),Gr=pe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),An=pe(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Br=pe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ut=pe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),pi=Oe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),hi=Oe(/<%[\w\W]*|[\w\W]*%>/gm),gi=Oe(/\$\{[\w\W]*/gm),yi=Oe(/^data-[\-\w.\u00B7-\uFFFF]+$/),bi=Oe(/^aria-[\-\w]+$/),Va=Oe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),vi=Oe(/^(?:\w+script|data):/i),Ai=Oe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ka=Oe(/^html$/i),Si=Oe(/^[a-z][.\w]*(-[.\w]+)+$/i);var Xr=Object.freeze({__proto__:null,ARIA_ATTR:bi,ATTR_WHITESPACE:Ai,CUSTOM_ELEMENT:Si,DATA_ATTR:yi,DOCTYPE_NAME:Ka,ERB_EXPR:hi,IS_ALLOWED_URI:Va,IS_SCRIPT_OR_DATA:vi,MUSTACHE_EXPR:pi,TMPLIT_EXPR:gi});const Tt={element:1,text:3,progressingInstruction:7,comment:8,document:9},Ti=function(){return typeof window>"u"?null:window},Ei=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const a="data-tt-policy-suffix";n&&n.hasAttribute(a)&&(r=n.getAttribute(a));const o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},qr=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Za(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ti();const t=I=>Za(I);if(t.version="3.3.2",t.removed=[],!e||!e.document||e.document.nodeType!==Tt.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const r=n,a=r.currentScript,{DocumentFragment:o,HTMLTemplateElement:i,Node:l,Element:u,NodeFilter:f,NamedNodeMap:p=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:v,DOMParser:T,trustedTypes:N}=e,S=u.prototype,d=St(S,"cloneNode"),E=St(S,"remove"),L=St(S,"nextSibling"),x=St(S,"childNodes"),P=St(S,"parentNode");if(typeof i=="function"){const I=n.createElement("template");I.content&&I.content.ownerDocument&&(n=I.content.ownerDocument)}let R,m="";const{implementation:B,createNodeIterator:ge,createDocumentFragment:oe,getElementsByTagName:_e}=n,{importNode:Ce}=r;let Q=qr();t.isSupported=typeof qa=="function"&&typeof P=="function"&&B&&B.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ie,ERB_EXPR:ue,TMPLIT_EXPR:ye,DATA_ATTR:le,ARIA_ATTR:Ke,IS_SCRIPT_OR_DATA:Ae,ATTR_WHITESPACE:de,CUSTOM_ELEMENT:Ze}=Xr;let{IS_ALLOWED_URI:De}=Xr,V=null;const C=z({},[...Yr,...yn,...bn,...vn,...Wr]);let A=null;const w=z({},[...Gr,...An,...Br,...Ut]);let _=Object.seal(Gt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),c=null,U=null;const b=Object.seal(Gt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let X=!0,j=!0,H=!1,D=!0,K=!1,re=!0,F=!1,te=!1,$=!1,Z=!1,ke=!1,ee=!1,Je=!0,We=!1;const Se="user-content-";let M=!0,G=!1,Pe={},be=null;const xe=z({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let _r=null;const xr=z({},["audio","video","img","source","image","track"]);let ln=null;const wr=z({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Lt="http://www.w3.org/1998/Math/MathML",Mt="http://www.w3.org/2000/svg",Fe="http://www.w3.org/1999/xhtml";let rt=Fe,cn=!1,fn=null;const Xo=z({},[Lt,Mt,Fe],hn);let Dt=z({},["mi","mo","mn","ms","mtext"]),Ft=z({},["annotation-xml"]);const qo=z({},["title","style","font","a","script"]);let gt=null;const Vo=["application/xhtml+xml","text/html"],Ko="text/html";let ae=null,at=null;const Zo=n.createElement("form"),Or=function(s){return s instanceof RegExp||s instanceof Function},un=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(at&&at===s)){if((!s||typeof s!="object")&&(s={}),s=Ie(s),gt=Vo.indexOf(s.PARSER_MEDIA_TYPE)===-1?Ko:s.PARSER_MEDIA_TYPE,ae=gt==="application/xhtml+xml"?hn:Bt,V=Te(s,"ALLOWED_TAGS")?z({},s.ALLOWED_TAGS,ae):C,A=Te(s,"ALLOWED_ATTR")?z({},s.ALLOWED_ATTR,ae):w,fn=Te(s,"ALLOWED_NAMESPACES")?z({},s.ALLOWED_NAMESPACES,hn):Xo,ln=Te(s,"ADD_URI_SAFE_ATTR")?z(Ie(wr),s.ADD_URI_SAFE_ATTR,ae):wr,_r=Te(s,"ADD_DATA_URI_TAGS")?z(Ie(xr),s.ADD_DATA_URI_TAGS,ae):xr,be=Te(s,"FORBID_CONTENTS")?z({},s.FORBID_CONTENTS,ae):xe,c=Te(s,"FORBID_TAGS")?z({},s.FORBID_TAGS,ae):Ie({}),U=Te(s,"FORBID_ATTR")?z({},s.FORBID_ATTR,ae):Ie({}),Pe=Te(s,"USE_PROFILES")?s.USE_PROFILES:!1,X=s.ALLOW_ARIA_ATTR!==!1,j=s.ALLOW_DATA_ATTR!==!1,H=s.ALLOW_UNKNOWN_PROTOCOLS||!1,D=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,K=s.SAFE_FOR_TEMPLATES||!1,re=s.SAFE_FOR_XML!==!1,F=s.WHOLE_DOCUMENT||!1,Z=s.RETURN_DOM||!1,ke=s.RETURN_DOM_FRAGMENT||!1,ee=s.RETURN_TRUSTED_TYPE||!1,$=s.FORCE_BODY||!1,Je=s.SANITIZE_DOM!==!1,We=s.SANITIZE_NAMED_PROPS||!1,M=s.KEEP_CONTENT!==!1,G=s.IN_PLACE||!1,De=s.ALLOWED_URI_REGEXP||Va,rt=s.NAMESPACE||Fe,Dt=s.MATHML_TEXT_INTEGRATION_POINTS||Dt,Ft=s.HTML_INTEGRATION_POINTS||Ft,_=s.CUSTOM_ELEMENT_HANDLING||{},s.CUSTOM_ELEMENT_HANDLING&&Or(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(_.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&Or(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(_.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(_.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),K&&(j=!1),ke&&(Z=!0),Pe&&(V=z({},Wr),A=Gt(null),Pe.html===!0&&(z(V,Yr),z(A,Gr)),Pe.svg===!0&&(z(V,yn),z(A,An),z(A,Ut)),Pe.svgFilters===!0&&(z(V,bn),z(A,An),z(A,Ut)),Pe.mathMl===!0&&(z(V,vn),z(A,Br),z(A,Ut))),Te(s,"ADD_TAGS")||(b.tagCheck=null),Te(s,"ADD_ATTR")||(b.attributeCheck=null),s.ADD_TAGS&&(typeof s.ADD_TAGS=="function"?b.tagCheck=s.ADD_TAGS:(V===C&&(V=Ie(V)),z(V,s.ADD_TAGS,ae))),s.ADD_ATTR&&(typeof s.ADD_ATTR=="function"?b.attributeCheck=s.ADD_ATTR:(A===w&&(A=Ie(A)),z(A,s.ADD_ATTR,ae))),s.ADD_URI_SAFE_ATTR&&z(ln,s.ADD_URI_SAFE_ATTR,ae),s.FORBID_CONTENTS&&(be===xe&&(be=Ie(be)),z(be,s.FORBID_CONTENTS,ae)),s.ADD_FORBID_CONTENTS&&(be===xe&&(be=Ie(be)),z(be,s.ADD_FORBID_CONTENTS,ae)),M&&(V["#text"]=!0),F&&z(V,["html","head","body"]),V.table&&(z(V,["tbody"]),delete c.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw At('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw At('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');R=s.TRUSTED_TYPES_POLICY,m=R.createHTML("")}else R===void 0&&(R=Ei(N,a)),R!==null&&typeof m=="string"&&(m=R.createHTML(""));pe&&pe(s),at=s}},Cr=z({},[...yn,...bn,...di]),kr=z({},[...vn,...mi]),Jo=function(s){let y=P(s);(!y||!y.tagName)&&(y={namespaceURI:rt,tagName:"template"});const O=Bt(s.tagName),J=Bt(y.tagName);return fn[s.namespaceURI]?s.namespaceURI===Mt?y.namespaceURI===Fe?O==="svg":y.namespaceURI===Lt?O==="svg"&&(J==="annotation-xml"||Dt[J]):!!Cr[O]:s.namespaceURI===Lt?y.namespaceURI===Fe?O==="math":y.namespaceURI===Mt?O==="math"&&Ft[J]:!!kr[O]:s.namespaceURI===Fe?y.namespaceURI===Mt&&!Ft[J]||y.namespaceURI===Lt&&!Dt[J]?!1:!kr[O]&&(qo[O]||!Cr[O]):!!(gt==="application/xhtml+xml"&&fn[s.namespaceURI]):!1},Re=function(s){bt(t.removed,{element:s});try{P(s).removeChild(s)}catch{E(s)}},Qe=function(s,y){try{bt(t.removed,{attribute:y.getAttributeNode(s),from:y})}catch{bt(t.removed,{attribute:null,from:y})}if(y.removeAttribute(s),s==="is")if(Z||ke)try{Re(y)}catch{}else try{y.setAttribute(s,"")}catch{}},Pr=function(s){let y=null,O=null;if($)s="<remove></remove>"+s;else{const ne=gn(s,/^[\r\n\t ]+/);O=ne&&ne[0]}gt==="application/xhtml+xml"&&rt===Fe&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const J=R?R.createHTML(s):s;if(rt===Fe)try{y=new T().parseFromString(J,gt)}catch{}if(!y||!y.documentElement){y=B.createDocument(rt,"template",null);try{y.documentElement.innerHTML=cn?m:J}catch{}}const ce=y.body||y.documentElement;return s&&O&&ce.insertBefore(n.createTextNode(O),ce.childNodes[0]||null),rt===Fe?_e.call(y,F?"html":"body")[0]:F?y.documentElement:ce},Rr=function(s){return ge.call(s.ownerDocument||s,s,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},dn=function(s){return s instanceof v&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof p)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},Ir=function(s){return typeof l=="function"&&s instanceof l};function ze(I,s,y){zt(I,O=>{O.call(t,s,y,at)})}const Nr=function(s){let y=null;if(ze(Q.beforeSanitizeElements,s,null),dn(s))return Re(s),!0;const O=ae(s.nodeName);if(ze(Q.uponSanitizeElement,s,{tagName:O,allowedTags:V}),re&&s.hasChildNodes()&&!Ir(s.firstElementChild)&&me(/<[/\w!]/g,s.innerHTML)&&me(/<[/\w!]/g,s.textContent)||s.nodeType===Tt.progressingInstruction||re&&s.nodeType===Tt.comment&&me(/<[/\w]/g,s.data))return Re(s),!0;if(!(b.tagCheck instanceof Function&&b.tagCheck(O))&&(!V[O]||c[O])){if(!c[O]&&Mr(O)&&(_.tagNameCheck instanceof RegExp&&me(_.tagNameCheck,O)||_.tagNameCheck instanceof Function&&_.tagNameCheck(O)))return!1;if(M&&!be[O]){const J=P(s)||s.parentNode,ce=x(s)||s.childNodes;if(ce&&J){const ne=ce.length;for(let ve=ne-1;ve>=0;--ve){const Ue=d(ce[ve],!0);Ue.__removalCount=(s.__removalCount||0)+1,J.insertBefore(Ue,L(s))}}}return Re(s),!0}return s instanceof u&&!Jo(s)||(O==="noscript"||O==="noembed"||O==="noframes")&&me(/<\/no(script|embed|frames)/i,s.innerHTML)?(Re(s),!0):(K&&s.nodeType===Tt.text&&(y=s.textContent,zt([ie,ue,ye],J=>{y=vt(y,J," ")}),s.textContent!==y&&(bt(t.removed,{element:s.cloneNode()}),s.textContent=y)),ze(Q.afterSanitizeElements,s,null),!1)},Lr=function(s,y,O){if(U[y]||Je&&(y==="id"||y==="name")&&(O in n||O in Zo))return!1;if(!(j&&!U[y]&&me(le,y))){if(!(X&&me(Ke,y))){if(!(b.attributeCheck instanceof Function&&b.attributeCheck(y,s))){if(!A[y]||U[y]){if(!(Mr(s)&&(_.tagNameCheck instanceof RegExp&&me(_.tagNameCheck,s)||_.tagNameCheck instanceof Function&&_.tagNameCheck(s))&&(_.attributeNameCheck instanceof RegExp&&me(_.attributeNameCheck,y)||_.attributeNameCheck instanceof Function&&_.attributeNameCheck(y,s))||y==="is"&&_.allowCustomizedBuiltInElements&&(_.tagNameCheck instanceof RegExp&&me(_.tagNameCheck,O)||_.tagNameCheck instanceof Function&&_.tagNameCheck(O))))return!1}else if(!ln[y]){if(!me(De,vt(O,de,""))){if(!((y==="src"||y==="xlink:href"||y==="href")&&s!=="script"&&li(O,"data:")===0&&_r[s])){if(!(H&&!me(Ae,vt(O,de,"")))){if(O)return!1}}}}}}}return!0},Mr=function(s){return s!=="annotation-xml"&&gn(s,Ze)},Dr=function(s){ze(Q.beforeSanitizeAttributes,s,null);const{attributes:y}=s;if(!y||dn(s))return;const O={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:A,forceKeepAttr:void 0};let J=y.length;for(;J--;){const ce=y[J],{name:ne,namespaceURI:ve,value:Ue}=ce,ot=ae(ne),mn=Ue;let se=ne==="value"?mn:ci(mn);if(O.attrName=ot,O.attrValue=se,O.keepAttr=!0,O.forceKeepAttr=void 0,ze(Q.uponSanitizeAttribute,s,O),se=O.attrValue,We&&(ot==="id"||ot==="name")&&(Qe(ne,s),se=Se+se),re&&me(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,se)){Qe(ne,s);continue}if(ot==="attributename"&&gn(se,"href")){Qe(ne,s);continue}if(O.forceKeepAttr)continue;if(!O.keepAttr){Qe(ne,s);continue}if(!D&&me(/\/>/i,se)){Qe(ne,s);continue}K&&zt([ie,ue,ye],zr=>{se=vt(se,zr," ")});const Fr=ae(s.nodeName);if(!Lr(Fr,ot,se)){Qe(ne,s);continue}if(R&&typeof N=="object"&&typeof N.getAttributeType=="function"&&!ve)switch(N.getAttributeType(Fr,ot)){case"TrustedHTML":{se=R.createHTML(se);break}case"TrustedScriptURL":{se=R.createScriptURL(se);break}}if(se!==mn)try{ve?s.setAttributeNS(ve,ne,se):s.setAttribute(ne,se),dn(s)?Re(s):Hr(t.removed)}catch{Qe(ne,s)}}ze(Q.afterSanitizeAttributes,s,null)},Qo=function I(s){let y=null;const O=Rr(s);for(ze(Q.beforeSanitizeShadowDOM,s,null);y=O.nextNode();)ze(Q.uponSanitizeShadowNode,y,null),Nr(y),Dr(y),y.content instanceof o&&I(y.content);ze(Q.afterSanitizeShadowDOM,s,null)};return t.sanitize=function(I){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=null,O=null,J=null,ce=null;if(cn=!I,cn&&(I="<!-->"),typeof I!="string"&&!Ir(I))if(typeof I.toString=="function"){if(I=I.toString(),typeof I!="string")throw At("dirty is not a string, aborting")}else throw At("toString is not a function");if(!t.isSupported)return I;if(te||un(s),t.removed=[],typeof I=="string"&&(G=!1),G){if(I.nodeName){const Ue=ae(I.nodeName);if(!V[Ue]||c[Ue])throw At("root node is forbidden and cannot be sanitized in-place")}}else if(I instanceof l)y=Pr("<!---->"),O=y.ownerDocument.importNode(I,!0),O.nodeType===Tt.element&&O.nodeName==="BODY"||O.nodeName==="HTML"?y=O:y.appendChild(O);else{if(!Z&&!K&&!F&&I.indexOf("<")===-1)return R&&ee?R.createHTML(I):I;if(y=Pr(I),!y)return Z?null:ee?m:""}y&&$&&Re(y.firstChild);const ne=Rr(G?I:y);for(;J=ne.nextNode();)Nr(J),Dr(J),J.content instanceof o&&Qo(J.content);if(G)return I;if(Z){if(ke)for(ce=oe.call(y.ownerDocument);y.firstChild;)ce.appendChild(y.firstChild);else ce=y;return(A.shadowroot||A.shadowrootmode)&&(ce=Ce.call(r,ce,!0)),ce}let ve=F?y.outerHTML:y.innerHTML;return F&&V["!doctype"]&&y.ownerDocument&&y.ownerDocument.doctype&&y.ownerDocument.doctype.name&&me(Ka,y.ownerDocument.doctype.name)&&(ve="<!DOCTYPE "+y.ownerDocument.doctype.name+`>
`+ve),K&&zt([ie,ue,ye],Ue=>{ve=vt(ve,Ue," ")}),R&&ee?R.createHTML(ve):ve},t.setConfig=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};un(I),te=!0},t.clearConfig=function(){at=null,te=!1},t.isValidAttribute=function(I,s,y){at||un({});const O=ae(I),J=ae(s);return Lr(O,J,y)},t.addHook=function(I,s){typeof s=="function"&&bt(Q[I],s)},t.removeHook=function(I,s){if(s!==void 0){const y=ii(Q[I],s);return y===-1?void 0:si(Q[I],y,1)[0]}return Hr(Q[I])},t.removeHooks=function(I){Q[I]=[]},t.removeAllHooks=function(){Q=qr()},t}Za();var Sn={exports:{}},Tn,Vr;function _i(){if(Vr)return Tn;Vr=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Tn=e,Tn}var En,Kr;function xi(){if(Kr)return En;Kr=1;var e=_i();function t(){}function n(){}return n.resetWarningCache=t,En=function(){function r(i,l,u,f,p,v){if(v!==e){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}r.isRequired=r;function a(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o},En}var Zr;function wi(){return Zr||(Zr=1,Sn.exports=xi()()),Sn.exports}var Oi=wi();const h=Xa(Oi);h.shape({event:h.string,action:h.string,name:h.string,region:h.string,section:h.string,component:h.string,type:h.string,text:h.string});const Yc=({event:e="",action:t="",name:n="",type:r="",section:a="",text:o="",region:i="",component:l=""})=>{const{dataLayer:u}=window,f={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:i.toLowerCase(),section:a.toLowerCase(),text:o.toLowerCase(),component:l.toLowerCase()};u&&u.push(f)},pt=({children:e})=>Ot.jsx(Ot.Fragment,{children:e});pt.propTypes={children:h.oneOfType([h.arrayOf(h.node),h.node,h.string])};pt.__docgenInfo={description:"",methods:[],displayName:"Base",props:{children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"},{name:"string"}]},required:!1}}};var _n={exports:{}};var Jr;function Ci(){return Jr||(Jr=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(o=a(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var i="";for(var l in o)t.call(o,l)&&o[l]&&(i=a(i,l));return i}function a(o,i){return i?o?o+" "+i:o+i:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(_n)),_n.exports}Ci();({...pt.propTypes});const cr=({children:e,className:t="container",...n})=>Ot.jsx("div",{className:t,...n,children:Ot.jsx("div",{className:"row",children:e})});cr.propTypes={children:pt.propTypes.children};({...cr.propTypes});pt.propTypes.children,h.oneOf(["0","3","4","6","8","9","12"]);pt.propTypes.children;cr.__docgenInfo={description:"",methods:[],displayName:"Container",props:{className:{defaultValue:{value:'"container"',computed:!1},required:!1},children:{description:"",type:{name:"custom",raw:"Base.propTypes.children"},required:!1}}};function Wc({packageName:e="",component:t="",type:n="",configuration:r={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}}const Qr={alt:h.string,title:h.string,src:h.string,mobileSrc:h.string,brandLink:h.string},xn={baseUrl:h.string,parentOrg:h.string,parentOrgUrl:h.string,animate:h.bool},jt={loggedIn:h.bool,loginLink:h.string,logoutLink:h.string,userName:h.string},fr={text:h.string.isRequired,color:h.oneOf(["gold","maroon","light","dark"]),href:h.string,classes:h.string,onClick:h.func,onFocus:h.func},ea=h.shape({id:h.number,href:h.string,text:h.string,type:h.string,selected:h.bool,items:h.arrayOf(h.arrayOf(h.object)),buttons:h.arrayOf(h.shape(fr)),class:h.string}),Gc={isPartner:h.bool,navTree:h.arrayOf(ea),partnerLogo:h.shape(Qr),logo:h.shape(Qr),title:h.string,parentOrg:xn.parentOrg,parentOrgUrl:xn.parentOrgUrl,baseUrl:xn.baseUrl,loggedIn:jt.loggedIn,userName:jt.userName,loginLink:jt.loginLink,onLoginClick:h.func,logoutLink:jt.logoutLink,onLogoutClick:h.func,buttons:h.arrayOf(h.shape(fr)),breakpoint:h.oneOf(["Lg","Xl"]),animateTitle:h.bool,expandOnHover:h.bool,mobileNavTree:h.arrayOf(ea),hasNavigation:h.bool,searchUrl:h.string,site:h.string,renderDiv:h.oneOf(["true","false"])};var wn={exports:{}},W={};var ta;function ki(){if(ta)return W;ta=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),N=Symbol.for("react.client.reference");function S(d){if(typeof d=="object"&&d!==null){var E=d.$$typeof;switch(E){case e:switch(d=d.type,d){case n:case a:case r:case u:case f:return d;default:switch(d=d&&d.$$typeof,d){case i:case l:case v:case p:return d;case o:return d;default:return E}}case t:return E}}}return W.ContextConsumer=o,W.ContextProvider=i,W.Element=e,W.ForwardRef=l,W.Fragment=n,W.Lazy=v,W.Memo=p,W.Portal=t,W.Profiler=a,W.StrictMode=r,W.Suspense=u,W.SuspenseList=f,W.isContextConsumer=function(d){return S(d)===o},W.isContextProvider=function(d){return S(d)===i},W.isElement=function(d){return typeof d=="object"&&d!==null&&d.$$typeof===e},W.isForwardRef=function(d){return S(d)===l},W.isFragment=function(d){return S(d)===n},W.isLazy=function(d){return S(d)===v},W.isMemo=function(d){return S(d)===p},W.isPortal=function(d){return S(d)===t},W.isProfiler=function(d){return S(d)===a},W.isStrictMode=function(d){return S(d)===r},W.isSuspense=function(d){return S(d)===u},W.isSuspenseList=function(d){return S(d)===f},W.isValidElementType=function(d){return typeof d=="string"||typeof d=="function"||d===n||d===a||d===r||d===u||d===f||d===T||typeof d=="object"&&d!==null&&(d.$$typeof===v||d.$$typeof===p||d.$$typeof===i||d.$$typeof===o||d.$$typeof===l||d.$$typeof===N||d.getModuleId!==void 0)},W.typeOf=S,W}var na;function Pi(){return na||(na=1,wn.exports=ki()),wn.exports}var Ja=Pi();function Ri(e){function t(C,A,w,_,c){for(var U=0,b=0,X=0,j=0,H,D,K=0,re=0,F,te=F=H=0,$=0,Z=0,ke=0,ee=0,Je=w.length,We=Je-1,Se,M="",G="",Pe="",be="",xe;$<Je;){if(D=w.charCodeAt($),$===We&&b+j+X+U!==0&&(b!==0&&(D=b===47?10:47),j=X=U=0,Je++,We++),b+j+X+U===0){if($===We&&(0<Z&&(M=M.replace(T,"")),0<M.trim().length)){switch(D){case 32:case 9:case 59:case 13:case 10:break;default:M+=w.charAt($)}D=59}switch(D){case 123:for(M=M.trim(),H=M.charCodeAt(0),F=1,ee=++$;$<Je;){switch(D=w.charCodeAt($)){case 123:F++;break;case 125:F--;break;case 47:switch(D=w.charCodeAt($+1)){case 42:case 47:e:{for(te=$+1;te<We;++te)switch(w.charCodeAt(te)){case 47:if(D===42&&w.charCodeAt(te-1)===42&&$+2!==te){$=te+1;break e}break;case 10:if(D===47){$=te+1;break e}}$=te}}break;case 91:D++;case 40:D++;case 34:case 39:for(;$++<We&&w.charCodeAt($)!==D;);}if(F===0)break;$++}switch(F=w.substring(ee,$),H===0&&(H=(M=M.replace(v,"").trim()).charCodeAt(0)),H){case 64:switch(0<Z&&(M=M.replace(T,"")),D=M.charCodeAt(1),D){case 100:case 109:case 115:case 45:Z=A;break;default:Z=Ke}if(F=t(A,Z,F,D,c+1),ee=F.length,0<de&&(Z=n(Ke,M,ke),xe=l(3,F,Z,A,ue,ie,ee,D,c,_),M=Z.join(""),xe!==void 0&&(ee=(F=xe.trim()).length)===0&&(D=0,F="")),0<ee)switch(D){case 115:M=M.replace(B,i);case 100:case 109:case 45:F=M+"{"+F+"}";break;case 107:M=M.replace(x,"$1 $2"),F=M+"{"+F+"}",F=le===1||le===2&&o("@"+F,3)?"@-webkit-"+F+"@"+F:"@"+F;break;default:F=M+F,_===112&&(F=(G+=F,""))}else F="";break;default:F=t(A,n(A,M,ke),F,_,c+1)}Pe+=F,F=ke=Z=te=H=0,M="",D=w.charCodeAt(++$);break;case 125:case 59:if(M=(0<Z?M.replace(T,""):M).trim(),1<(ee=M.length))switch(te===0&&(H=M.charCodeAt(0),H===45||96<H&&123>H)&&(ee=(M=M.replace(" ",":")).length),0<de&&(xe=l(1,M,A,C,ue,ie,G.length,_,c,_))!==void 0&&(ee=(M=xe.trim()).length)===0&&(M="\0\0"),H=M.charCodeAt(0),D=M.charCodeAt(1),H){case 0:break;case 64:if(D===105||D===99){be+=M+w.charAt($);break}default:M.charCodeAt(ee-1)!==58&&(G+=a(M,H,D,M.charCodeAt(2)))}ke=Z=te=H=0,M="",D=w.charCodeAt(++$)}}switch(D){case 13:case 10:b===47?b=0:1+H===0&&_!==107&&0<M.length&&(Z=1,M+="\0"),0<de*De&&l(0,M,A,C,ue,ie,G.length,_,c,_),ie=1,ue++;break;case 59:case 125:if(b+j+X+U===0){ie++;break}default:switch(ie++,Se=w.charAt($),D){case 9:case 32:if(j+U+b===0)switch(K){case 44:case 58:case 9:case 32:Se="";break;default:D!==32&&(Se=" ")}break;case 0:Se="\\0";break;case 12:Se="\\f";break;case 11:Se="\\v";break;case 38:j+b+U===0&&(Z=ke=1,Se="\f"+Se);break;case 108:if(j+b+U+ye===0&&0<te)switch($-te){case 2:K===112&&w.charCodeAt($-3)===58&&(ye=K);case 8:re===111&&(ye=re)}break;case 58:j+b+U===0&&(te=$);break;case 44:b+X+j+U===0&&(Z=1,Se+="\r");break;case 34:case 39:b===0&&(j=j===D?0:j===0?D:j);break;case 91:j+b+X===0&&U++;break;case 93:j+b+X===0&&U--;break;case 41:j+b+U===0&&X--;break;case 40:if(j+b+U===0){if(H===0)switch(2*K+3*re){case 533:break;default:H=1}X++}break;case 64:b+X+j+U+te+F===0&&(F=1);break;case 42:case 47:if(!(0<j+U+X))switch(b){case 0:switch(2*D+3*w.charCodeAt($+1)){case 235:b=47;break;case 220:ee=$,b=42}break;case 42:D===47&&K===42&&ee+2!==$&&(w.charCodeAt(ee+2)===33&&(G+=w.substring(ee,$+1)),Se="",b=0)}}b===0&&(M+=Se)}re=K,K=D,$++}if(ee=G.length,0<ee){if(Z=A,0<de&&(xe=l(2,G,Z,C,ue,ie,ee,_,c,_),xe!==void 0&&(G=xe).length===0))return be+G+Pe;if(G=Z.join(",")+"{"+G+"}",le*ye!==0){switch(le!==2||o(G,2)||(ye=0),ye){case 111:G=G.replace(R,":-moz-$1")+G;break;case 112:G=G.replace(P,"::-webkit-input-$1")+G.replace(P,"::-moz-$1")+G.replace(P,":-ms-input-$1")+G}ye=0}}return be+G+Pe}function n(C,A,w){var _=A.trim().split(E);A=_;var c=_.length,U=C.length;switch(U){case 0:case 1:var b=0;for(C=U===0?"":C[0]+" ";b<c;++b)A[b]=r(C,A[b],w).trim();break;default:var X=b=0;for(A=[];b<c;++b)for(var j=0;j<U;++j)A[X++]=r(C[j]+" ",_[b],w).trim()}return A}function r(C,A,w){var _=A.charCodeAt(0);switch(33>_&&(_=(A=A.trim()).charCodeAt(0)),_){case 38:return A.replace(L,"$1"+C.trim());case 58:return C.trim()+A.replace(L,"$1"+C.trim());default:if(0<1*w&&0<A.indexOf("\f"))return A.replace(L,(C.charCodeAt(0)===58?"":"$1")+C.trim())}return C+A}function a(C,A,w,_){var c=C+";",U=2*A+3*w+4*_;if(U===944){C=c.indexOf(":",9)+1;var b=c.substring(C,c.length-1).trim();return b=c.substring(0,C).trim()+b+";",le===1||le===2&&o(b,1)?"-webkit-"+b+b:b}if(le===0||le===2&&!o(c,1))return c;switch(U){case 1015:return c.charCodeAt(10)===97?"-webkit-"+c+c:c;case 951:return c.charCodeAt(3)===116?"-webkit-"+c+c:c;case 963:return c.charCodeAt(5)===110?"-webkit-"+c+c:c;case 1009:if(c.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+c+c;case 978:return"-webkit-"+c+"-moz-"+c+c;case 1019:case 983:return"-webkit-"+c+"-moz-"+c+"-ms-"+c+c;case 883:if(c.charCodeAt(8)===45)return"-webkit-"+c+c;if(0<c.indexOf("image-set(",11))return c.replace(Q,"$1-webkit-$2")+c;break;case 932:if(c.charCodeAt(4)===45)switch(c.charCodeAt(5)){case 103:return"-webkit-box-"+c.replace("-grow","")+"-webkit-"+c+"-ms-"+c.replace("grow","positive")+c;case 115:return"-webkit-"+c+"-ms-"+c.replace("shrink","negative")+c;case 98:return"-webkit-"+c+"-ms-"+c.replace("basis","preferred-size")+c}return"-webkit-"+c+"-ms-"+c+c;case 964:return"-webkit-"+c+"-ms-flex-"+c+c;case 1023:if(c.charCodeAt(8)!==99)break;return b=c.substring(c.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+b+"-webkit-"+c+"-ms-flex-pack"+b+c;case 1005:return S.test(c)?c.replace(N,":-webkit-")+c.replace(N,":-moz-")+c:c;case 1e3:switch(b=c.substring(13).trim(),A=b.indexOf("-")+1,b.charCodeAt(0)+b.charCodeAt(A)){case 226:b=c.replace(m,"tb");break;case 232:b=c.replace(m,"tb-rl");break;case 220:b=c.replace(m,"lr");break;default:return c}return"-webkit-"+c+"-ms-"+b+c;case 1017:if(c.indexOf("sticky",9)===-1)break;case 975:switch(A=(c=C).length-10,b=(c.charCodeAt(A)===33?c.substring(0,A):c).substring(C.indexOf(":",7)+1).trim(),U=b.charCodeAt(0)+(b.charCodeAt(7)|0)){case 203:if(111>b.charCodeAt(8))break;case 115:c=c.replace(b,"-webkit-"+b)+";"+c;break;case 207:case 102:c=c.replace(b,"-webkit-"+(102<U?"inline-":"")+"box")+";"+c.replace(b,"-webkit-"+b)+";"+c.replace(b,"-ms-"+b+"box")+";"+c}return c+";";case 938:if(c.charCodeAt(5)===45)switch(c.charCodeAt(6)){case 105:return b=c.replace("-items",""),"-webkit-"+c+"-webkit-box-"+b+"-ms-flex-"+b+c;case 115:return"-webkit-"+c+"-ms-flex-item-"+c.replace(oe,"")+c;default:return"-webkit-"+c+"-ms-flex-line-pack"+c.replace("align-content","").replace(oe,"")+c}break;case 973:case 989:if(c.charCodeAt(3)!==45||c.charCodeAt(4)===122)break;case 931:case 953:if(Ce.test(C)===!0)return(b=C.substring(C.indexOf(":")+1)).charCodeAt(0)===115?a(C.replace("stretch","fill-available"),A,w,_).replace(":fill-available",":stretch"):c.replace(b,"-webkit-"+b)+c.replace(b,"-moz-"+b.replace("fill-",""))+c;break;case 962:if(c="-webkit-"+c+(c.charCodeAt(5)===102?"-ms-"+c:"")+c,w+_===211&&c.charCodeAt(13)===105&&0<c.indexOf("transform",10))return c.substring(0,c.indexOf(";",27)+1).replace(d,"$1-webkit-$2")+c}return c}function o(C,A){var w=C.indexOf(A===1?":":"{"),_=C.substring(0,A!==3?w:10);return w=C.substring(w+1,C.length-1),Ze(A!==2?_:_.replace(_e,"$1"),w,A)}function i(C,A){var w=a(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return w!==A+";"?w.replace(ge," or ($1)").substring(4):"("+A+")"}function l(C,A,w,_,c,U,b,X,j,H){for(var D=0,K=A,re;D<de;++D)switch(re=Ae[D].call(p,C,K,w,_,c,U,b,X,j,H)){case void 0:case!1:case!0:case null:break;default:K=re}if(K!==A)return K}function u(C){switch(C){case void 0:case null:de=Ae.length=0;break;default:if(typeof C=="function")Ae[de++]=C;else if(typeof C=="object")for(var A=0,w=C.length;A<w;++A)u(C[A]);else De=!!C|0}return u}function f(C){return C=C.prefix,C!==void 0&&(Ze=null,C?typeof C!="function"?le=1:(le=2,Ze=C):le=0),f}function p(C,A){var w=C;if(33>w.charCodeAt(0)&&(w=w.trim()),V=w,w=[V],0<de){var _=l(-1,A,w,w,ue,ie,0,0,0,0);_!==void 0&&typeof _=="string"&&(A=_)}var c=t(Ke,w,A,0,0);return 0<de&&(_=l(-2,c,w,w,ue,ie,c.length,0,0,0),_!==void 0&&(c=_)),V="",ye=0,ie=ue=1,c}var v=/^\0+/g,T=/[\0\r\f]/g,N=/: */g,S=/zoo|gra/,d=/([,: ])(transform)/g,E=/,\r+?/g,L=/([\t\r\n ])*\f?&/g,x=/@(k\w+)\s*(\S*)\s*/,P=/::(place)/g,R=/:(read-only)/g,m=/[svh]\w+-[tblr]{2}/,B=/\(\s*(.*)\s*\)/g,ge=/([\s\S]*?);/g,oe=/-self|flex-/g,_e=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Ce=/stretch|:\s*\w+\-(?:conte|avail)/,Q=/([^-])(image-set\()/,ie=1,ue=1,ye=0,le=1,Ke=[],Ae=[],de=0,Ze=null,De=0,V="";return p.use=u,p.set=f,e!==void 0&&f(e),p}var Ii={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ni(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Li=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ra=Ni(function(e){return Li.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),On={exports:{}},Y={};var aa;function Mi(){if(aa)return Y;aa=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,T=e?Symbol.for("react.suspense_list"):60120,N=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,d=e?Symbol.for("react.block"):60121,E=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,x=e?Symbol.for("react.scope"):60119;function P(m){if(typeof m=="object"&&m!==null){var B=m.$$typeof;switch(B){case t:switch(m=m.type,m){case u:case f:case r:case o:case a:case v:return m;default:switch(m=m&&m.$$typeof,m){case l:case p:case S:case N:case i:return m;default:return B}}case n:return B}}}function R(m){return P(m)===f}return Y.AsyncMode=u,Y.ConcurrentMode=f,Y.ContextConsumer=l,Y.ContextProvider=i,Y.Element=t,Y.ForwardRef=p,Y.Fragment=r,Y.Lazy=S,Y.Memo=N,Y.Portal=n,Y.Profiler=o,Y.StrictMode=a,Y.Suspense=v,Y.isAsyncMode=function(m){return R(m)||P(m)===u},Y.isConcurrentMode=R,Y.isContextConsumer=function(m){return P(m)===l},Y.isContextProvider=function(m){return P(m)===i},Y.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===t},Y.isForwardRef=function(m){return P(m)===p},Y.isFragment=function(m){return P(m)===r},Y.isLazy=function(m){return P(m)===S},Y.isMemo=function(m){return P(m)===N},Y.isPortal=function(m){return P(m)===n},Y.isProfiler=function(m){return P(m)===o},Y.isStrictMode=function(m){return P(m)===a},Y.isSuspense=function(m){return P(m)===v},Y.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===r||m===f||m===o||m===a||m===v||m===T||typeof m=="object"&&m!==null&&(m.$$typeof===S||m.$$typeof===N||m.$$typeof===i||m.$$typeof===l||m.$$typeof===p||m.$$typeof===E||m.$$typeof===L||m.$$typeof===x||m.$$typeof===d)},Y.typeOf=P,Y}var oa;function Di(){return oa||(oa=1,On.exports=Mi()),On.exports}var Cn,ia;function Fi(){if(ia)return Cn;ia=1;var e=Di(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=r,o[e.Memo]=a;function i(S){return e.isMemo(S)?a:o[S.$$typeof]||t}var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,T=Object.prototype;function N(S,d,E){if(typeof d!="string"){if(T){var L=v(d);L&&L!==T&&N(S,L,E)}var x=u(d);f&&(x=x.concat(f(d)));for(var P=i(S),R=i(d),m=0;m<x.length;++m){var B=x[m];if(!n[B]&&!(E&&E[B])&&!(R&&R[B])&&!(P&&P[B])){var ge=p(d,B);try{l(S,B,ge)}catch{}}}}return S}return Cn=N,Cn}var zi=Fi();const Ui=Xa(zi);var Qa={},we={};function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var sa=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},Un=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ja.typeOf(e)},Zt=Object.freeze([]),Be=Object.freeze({});function Ct(e){return typeof e=="function"}function la(e){return e.displayName||e.name||"Component"}function ur(e){return e&&typeof e.styledComponentId=="string"}var ft=typeof Qa<"u"&&we!==void 0&&(we.REACT_APP_SC_ATTR||we.SC_ATTR)||"data-styled",dr=typeof window<"u"&&"HTMLElement"in window,ji=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof Qa<"u"&&we!==void 0&&(we.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&we.REACT_APP_SC_DISABLE_SPEEDY!==""?we.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&we.REACT_APP_SC_DISABLE_SPEEDY:we.SC_DISABLE_SPEEDY!==void 0&&we.SC_DISABLE_SPEEDY!==""&&we.SC_DISABLE_SPEEDY!=="false"&&we.SC_DISABLE_SPEEDY));function Rt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var $i=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,i=o;n>=i;)(i<<=1)<0&&Rt(16,""+n);this.groupSizes=new Uint32Array(i),this.groupSizes.set(a),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),f=0,p=r.length;f<p;f++)this.tag.insertRule(u,r[f])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),o=a+r;this.groupSizes[n]=0;for(var i=a;i<o;i++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],o=this.indexOfGroup(n),i=o+a,l=o;l<i;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Xt=new Map,Jt=new Map,_t=1,$t=function(e){if(Xt.has(e))return Xt.get(e);for(;Jt.has(_t);)_t++;var t=_t++;return Xt.set(e,t),Jt.set(t,e),t},Hi=function(e){return Jt.get(e)},Yi=function(e,t){t>=_t&&(_t=t+1),Xt.set(e,t),Jt.set(t,e)},Wi="style["+ft+'][data-styled-version="5.3.11"]',Gi=new RegExp("^"+ft+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Bi=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},Xi=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,o=n.length;a<o;a++){var i=n[a].trim();if(i){var l=i.match(Gi);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(Yi(f,u),Bi(e,f,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},qi=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},eo=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){for(var u=l.childNodes,f=u.length;f>=0;f--){var p=u[f];if(p&&p.nodeType===1&&p.hasAttribute(ft))return p}}(n),o=a!==void 0?a.nextSibling:null;r.setAttribute(ft,"active"),r.setAttribute("data-styled-version","5.3.11");var i=qi();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},Vi=function(){function e(n){var r=this.element=eo(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var o=document.styleSheets,i=0,l=o.length;i<l;i++){var u=o[i];if(u.ownerNode===a)return u}Rt(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Ki=function(){function e(n){var r=this.element=eo(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(a,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Zi=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ca=dr,Ji={isServer:!dr,useCSSOMInjection:!ji},to=function(){function e(n,r,a){n===void 0&&(n=Be),r===void 0&&(r={}),this.options=je({},Ji,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&dr&&ca&&(ca=!1,function(o){for(var i=document.querySelectorAll(Wi),l=0,u=i.length;l<u;l++){var f=i[l];f&&f.getAttribute(ft)!=="active"&&(Xi(o,f),f.parentNode&&f.parentNode.removeChild(f))}}(this))}e.registerId=function(n){return $t(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(je({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,o=r.useCSSOMInjection,i=r.target,n=a?new Zi(i):o?new Vi(i):new Ki(i),new $i(n)));var n,r,a,o,i},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if($t(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules($t(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup($t(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,o="",i=0;i<a;i++){var l=Hi(i);if(l!==void 0){var u=n.names.get(l),f=r.getGroup(i);if(u&&f&&u.size){var p=ft+".g"+i+'[id="'+l+'"]',v="";u!==void 0&&u.forEach(function(T){T.length>0&&(v+=T+",")}),o+=""+f+p+'{content:"'+v+`"}/*!sc*/
`}}}return o}(this)},e}(),Qi=/(a)(d)/gi,fa=function(e){return String.fromCharCode(e+(e>25?39:97))};function jn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=fa(t%52)+n;return(fa(t%52)+n).replace(Qi,"$1-$2")}var it=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},no=function(e){return it(5381,e)};function es(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ct(n)&&!ur(n))return!1}return!0}var ts=no("5.3.11"),ns=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&es(t),this.componentId=n,this.baseHash=it(ts,n),this.baseStyle=r,to.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))o.push(this.staticRulesId);else{var i=ut(this.rules,t,n,r).join(""),l=jn(it(this.baseHash,i)>>>0);if(!n.hasNameForId(a,l)){var u=r(i,"."+l,void 0,a);n.insertRules(a,l,u)}o.push(l),this.staticRulesId=l}else{for(var f=this.rules.length,p=it(this.baseHash,r.hash),v="",T=0;T<f;T++){var N=this.rules[T];if(typeof N=="string")v+=N;else if(N){var S=ut(N,t,n,r),d=Array.isArray(S)?S.join(""):S;p=it(p,d+T),v+=d}}if(v){var E=jn(p>>>0);if(!n.hasNameForId(a,E)){var L=r(v,"."+E,void 0,a);n.insertRules(a,E,L)}o.push(E)}}return o.join(" ")},e}(),rs=/^\s*\/\/.*$/gm,as=[":","[",".","#"];function os(e){var t,n,r,a,o=Be,i=o.options,l=i===void 0?Be:i,u=o.plugins,f=u===void 0?Zt:u,p=new Ri(l),v=[],T=function(d){function E(L){if(L)try{d(L+"}")}catch{}}return function(L,x,P,R,m,B,ge,oe,_e,Ce){switch(L){case 1:if(_e===0&&x.charCodeAt(0)===64)return d(x+";"),"";break;case 2:if(oe===0)return x+"/*|*/";break;case 3:switch(oe){case 102:case 112:return d(P[0]+x),"";default:return x+(Ce===0?"/*|*/":"")}case-2:x.split("/*|*/}").forEach(E)}}}(function(d){v.push(d)}),N=function(d,E,L){return E===0&&as.indexOf(L[n.length])!==-1||L.match(a)?d:"."+t};function S(d,E,L,x){x===void 0&&(x="&");var P=d.replace(rs,""),R=E&&L?L+" "+E+" { "+P+" }":P;return t=x,n=E,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),p(L||!E?"":E,R)}return p.use([].concat(f,[function(d,E,L){d===2&&L.length&&L[0].lastIndexOf(n)>0&&(L[0]=L[0].replace(r,N))},T,function(d){if(d===-2){var E=v;return v=[],E}}])),S.hash=f.length?f.reduce(function(d,E){return E.name||Rt(15),it(d,E.name)},5381).toString():"",S}var ro=mt.createContext();ro.Consumer;var ao=mt.createContext(),is=(ao.Consumer,new to),$n=os();function ss(){return Kt.useContext(ro)||is}function ls(){return Kt.useContext(ao)||$n}var cs=function(){function e(t,n){var r=this;this.inject=function(a,o){o===void 0&&(o=$n);var i=r.name+o.hash;a.hasNameForId(r.id,i)||a.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.toString=function(){return Rt(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=$n),this.name+t.hash},e}(),fs=/([A-Z])/,us=/([A-Z])/g,ds=/^ms-/,ms=function(e){return"-"+e.toLowerCase()};function ua(e){return fs.test(e)?e.replace(us,ms).replace(ds,"-ms-"):e}var da=function(e){return e==null||e===!1||e===""};function ut(e,t,n,r){if(Array.isArray(e)){for(var a,o=[],i=0,l=e.length;i<l;i+=1)(a=ut(e[i],t,n,r))!==""&&(Array.isArray(a)?o.push.apply(o,a):o.push(a));return o}if(da(e))return"";if(ur(e))return"."+e.styledComponentId;if(Ct(e)){if(typeof(f=e)!="function"||f.prototype&&f.prototype.isReactComponent||!t)return e;var u=e(t);return ut(u,t,n,r)}var f;return e instanceof cs?n?(e.inject(n,r),e.getName(r)):e:Un(e)?function p(v,T){var N,S,d=[];for(var E in v)v.hasOwnProperty(E)&&!da(v[E])&&(Array.isArray(v[E])&&v[E].isCss||Ct(v[E])?d.push(ua(E)+":",v[E],";"):Un(v[E])?d.push.apply(d,p(v[E],E)):d.push(ua(E)+": "+(N=E,(S=v[E])==null||typeof S=="boolean"||S===""?"":typeof S!="number"||S===0||N in Ii||N.startsWith("--")?String(S).trim():S+"px")+";"));return T?[T+" {"].concat(d,["}"]):d}(e):e.toString()}var ma=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ps(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ct(e)||Un(e)?ma(ut(sa(Zt,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ma(ut(sa(e,n)))}var hs=function(e,t,n){return n===void 0&&(n=Be),e.theme!==n.theme&&e.theme||t||n.theme},gs=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ys=/(^-|-$)/g;function kn(e){return e.replace(gs,"-").replace(ys,"")}var bs=function(e){return jn(no(e)>>>0)};function Ht(e){return typeof e=="string"&&!0}var Hn=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},vs=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function As(e,t,n){var r=e[n];Hn(t)&&Hn(r)?oo(r,t):e[n]=t}function oo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,o=n;a<o.length;a++){var i=o[a];if(Hn(i))for(var l in i)vs(l)&&As(e,i[l],l)}return e}var io=mt.createContext();io.Consumer;var Pn={};function so(e,t,n){var r=ur(e),a=!Ht(e),o=t.attrs,i=o===void 0?Zt:o,l=t.componentId,u=l===void 0?function(x,P){var R=typeof x!="string"?"sc":kn(x);Pn[R]=(Pn[R]||0)+1;var m=R+"-"+bs("5.3.11"+R+Pn[R]);return P?P+"-"+m:m}(t.displayName,t.parentComponentId):l,f=t.displayName,p=f===void 0?function(x){return Ht(x)?"styled."+x:"Styled("+la(x)+")"}(e):f,v=t.displayName&&t.componentId?kn(t.displayName)+"-"+t.componentId:t.componentId||u,T=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,N=t.shouldForwardProp;r&&e.shouldForwardProp&&(N=t.shouldForwardProp?function(x,P,R){return e.shouldForwardProp(x,P,R)&&t.shouldForwardProp(x,P,R)}:e.shouldForwardProp);var S,d=new ns(n,v,r?e.componentStyle:void 0),E=d.isStatic&&i.length===0,L=function(x,P){return function(R,m,B,ge){var oe=R.attrs,_e=R.componentStyle,Ce=R.defaultProps,Q=R.foldedComponentIds,ie=R.shouldForwardProp,ue=R.styledComponentId,ye=R.target,le=function(_,c,U){_===void 0&&(_=Be);var b=je({},c,{theme:_}),X={};return U.forEach(function(j){var H,D,K,re=j;for(H in Ct(re)&&(re=re(b)),re)b[H]=X[H]=H==="className"?(D=X[H],K=re[H],D&&K?D+" "+K:D||K):re[H]}),[b,X]}(hs(m,Kt.useContext(io),Ce)||Be,m,oe),Ke=le[0],Ae=le[1],de=function(_,c,U,b){var X=ss(),j=ls(),H=c?_.generateAndInjectStyles(Be,X,j):_.generateAndInjectStyles(U,X,j);return H}(_e,ge,Ke),Ze=B,De=Ae.$as||m.$as||Ae.as||m.as||ye,V=Ht(De),C=Ae!==m?je({},m,{},Ae):m,A={};for(var w in C)w[0]!=="$"&&w!=="as"&&(w==="forwardedAs"?A.as=C[w]:(ie?ie(w,ra,De):!V||ra(w))&&(A[w]=C[w]));return m.style&&Ae.style!==m.style&&(A.style=je({},m.style,{},Ae.style)),A.className=Array.prototype.concat(Q,ue,de!==ue?de:null,m.className,Ae.className).filter(Boolean).join(" "),A.ref=Ze,Kt.createElement(De,A)}(S,x,P,E)};return L.displayName=p,(S=mt.forwardRef(L)).attrs=T,S.componentStyle=d,S.displayName=p,S.shouldForwardProp=N,S.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Zt,S.styledComponentId=v,S.target=r?e.target:e,S.withComponent=function(x){var P=t.componentId,R=function(B,ge){if(B==null)return{};var oe,_e,Ce={},Q=Object.keys(B);for(_e=0;_e<Q.length;_e++)oe=Q[_e],ge.indexOf(oe)>=0||(Ce[oe]=B[oe]);return Ce}(t,["componentId"]),m=P&&P+"-"+(Ht(x)?x:kn(la(x)));return so(x,je({},R,{attrs:T,componentId:m}),n)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?oo({},e.defaultProps,x):x}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),a&&Ui(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var Yn=function(e){return function t(n,r,a){if(a===void 0&&(a=Be),!Ja.isValidElementType(r))return Rt(1,String(r));var o=function(){return n(r,a,ps.apply(void 0,arguments))};return o.withConfig=function(i){return t(n,r,je({},a,{},i))},o.attrs=function(i){return t(n,r,je({},a,{attrs:Array.prototype.concat(a.attrs,i).filter(Boolean)}))},o}(so,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Yn[e]=Yn(e)});const Ss="#8c1d40",Ts="#ffc627",pa="#ffffff",ha="#000000",ga="#191919",Bc="#BFBFBF",Xc="#d0d0d0",qc="#e8e8e8",Es="#bfbfbf",Vc="#495057",_s=Yn.a`
  font-family:
    Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif;
  color: ${ga};
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
    background-color: ${Es} !important;
    color: ${ha} !important;
  }
  &.button-gold {
    background-color: ${Ts} !important;
    color: ${ha} !important;
  }
  &.button-dark {
    background-color: ${ga} !important;
    color: ${pa} !important;
  }
  &.button-maroon {
    background-color: ${Ss} !important;
    color: ${pa} !important;
  }
`,lo=({href:e,color:t,text:n,classes:r,onClick:a,onFocus:o,as:i,...l})=>Ot.jsx(_s,{href:e,className:`button-${t} ${r??""}`,onClick:a?u=>a(u):void 0,onFocus:o?u=>o(u):void 0,as:i,...l,children:n});lo.propTypes={...fr};lo.__docgenInfo={description:`A reusable button component that renders a ButtonWrapper with customizable properties.

@param {Object} props - The component props
@param {string} [props.href] - The URL to navigate to when the button is clicked (for link buttons)
@param {string} props.color - The color variant for the button styling
@param {string} props.text - The text content to display inside the button
@param {string} [props.classes] - Additional CSS classes to apply to the button
@param {function} [props.onClick] - Event handler function called when the button is clicked
@param {function} [props.onFocus] - Event handler function called when the button receives focus
@param {string|React.Component} [props.as] - The element type or component to render as
@returns {JSX.Element} The rendered button component`,methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!1},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},onFocus:{description:"",type:{name:"func"},required:!1}}};const xs={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Kc=xs,ws={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Zc=ws,Jc={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Os={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Qc=Os;function Cs(e,t,n){return(t=Ps(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ya(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ya(Object(n),!0).forEach(function(r){Cs(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ya(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ks(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ps(e){var t=ks(e,"string");return typeof t=="symbol"?t:t+""}const ba=()=>{};let mr={},co={},fo=null,uo={mark:ba,measure:ba};try{typeof window<"u"&&(mr=window),typeof document<"u"&&(co=document),typeof MutationObserver<"u"&&(fo=MutationObserver),typeof performance<"u"&&(uo=performance)}catch{}const{userAgent:va=""}=mr.navigator||{},Xe=mr,q=co,Aa=fo,Yt=uo;Xe.document;const Ye=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",mo=~va.indexOf("MSIE")||~va.indexOf("Trident/");var Rs=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Is=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,po={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ns={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ho=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],fe="classic",nn="duotone",Ls="sharp",Ms="sharp-duotone",go=[fe,nn,Ls,Ms],Ds={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Fs={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},zs=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Us={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},js=["fak","fa-kit","fakd","fa-kit-duotone"],Sa={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},$s=["kit"],Hs={kit:{"fa-kit":"fak"}},Ys=["fak","fakd"],Ws={kit:{fak:"fa-kit"}},Ta={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Wt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gs=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Bs=["fak","fa-kit","fakd","fa-kit-duotone"],Xs={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},qs={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Vs={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Wn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ks=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Gn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Gs,...Ks],Zs=["solid","regular","light","thin","duotone","brands"],yo=[1,2,3,4,5,6,7,8,9,10],Js=yo.concat([11,12,13,14,15,16,17,18,19,20]),Qs=[...Object.keys(Vs),...Zs,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Wt.GROUP,Wt.SWAP_OPACITY,Wt.PRIMARY,Wt.SECONDARY].concat(yo.map(e=>"".concat(e,"x"))).concat(Js.map(e=>"w-".concat(e))),el={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const $e="___FONT_AWESOME___",Bn=16,bo="fa",vo="svg-inline--fa",tt="data-fa-i2svg",Xn="data-fa-pseudo-element",tl="data-fa-pseudo-element-pending",pr="data-prefix",hr="data-icon",Ea="fontawesome-i2svg",nl="async",rl=["HTML","HEAD","STYLE","SCRIPT"],Ao=(()=>{try{return!0}catch{return!1}})();function It(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[fe]}})}const So=g({},po);So[fe]=g(g(g(g({},{"fa-duotone":"duotone"}),po[fe]),Sa.kit),Sa["kit-duotone"]);const al=It(So),qn=g({},Us);qn[fe]=g(g(g(g({},{duotone:"fad"}),qn[fe]),Ta.kit),Ta["kit-duotone"]);const _a=It(qn),Vn=g({},Wn);Vn[fe]=g(g({},Vn[fe]),Ws.kit);const gr=It(Vn),Kn=g({},qs);Kn[fe]=g(g({},Kn[fe]),Hs.kit);It(Kn);const ol=Rs,To="fa-layers-text",il=Is,sl=g({},Ds);It(sl);const ll=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rn=Ns,cl=[...$s,...Qs],xt=Xe.FontAwesomeConfig||{};function fl(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ul(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}q&&typeof q.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=ul(fl(n));a!=null&&(xt[r]=a)});const Eo={styleDefault:"solid",familyDefault:fe,cssPrefix:bo,replacementClass:vo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xt.familyPrefix&&(xt.cssPrefix=xt.familyPrefix);const dt=g(g({},Eo),xt);dt.autoReplaceSvg||(dt.observeMutations=!1);const k={};Object.keys(Eo).forEach(e=>{Object.defineProperty(k,e,{enumerable:!0,set:function(t){dt[e]=t,wt.forEach(n=>n(k))},get:function(){return dt[e]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(e){dt.cssPrefix=e,wt.forEach(t=>t(k))},get:function(){return dt.cssPrefix}});Xe.FontAwesomeConfig=k;const wt=[];function dl(e){return wt.push(e),()=>{wt.splice(wt.indexOf(e),1)}}const Ge=Bn,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ml(e){if(!e||!Ye)return;const t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=q.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return q.head.insertBefore(t,r),e}const pl="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kt(){let e=12,t="";for(;e-- >0;)t+=pl[Math.random()*62|0];return t}function ht(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function yr(e){return e.classList?ht(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function _o(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hl(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(_o(e[n]),'" '),"").trim()}function rn(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function br(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function gl(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(o," ").concat(i," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:u,path:f}}function yl(e){let{transform:t,width:n=Bn,height:r=Bn,startCentered:a=!1}=e,o="";return a&&mo?o+="translate(".concat(t.x/Ge-n/2,"em, ").concat(t.y/Ge-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/Ge,"em), calc(-50% + ").concat(t.y/Ge,"em)) "):o+="translate(".concat(t.x/Ge,"em, ").concat(t.y/Ge,"em) "),o+="scale(".concat(t.size/Ge*(t.flipX?-1:1),", ").concat(t.size/Ge*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var bl=`:root, :host {
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
}`;function xo(){const e=bo,t=vo,n=k.cssPrefix,r=k.replacementClass;let a=bl;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(r))}return a}let xa=!1;function In(){k.autoAddCss&&!xa&&(ml(xo()),xa=!0)}var vl={mixout(){return{dom:{css:xo,insertCss:In}}},hooks(){return{beforeDOMElementCreation(){In()},beforeI2svg(){In()}}}};const He=Xe||{};He[$e]||(He[$e]={});He[$e].styles||(He[$e].styles={});He[$e].hooks||(He[$e].hooks={});He[$e].shims||(He[$e].shims=[]);var Me=He[$e];const wo=[],Oo=function(){q.removeEventListener("DOMContentLoaded",Oo),Qt=1,wo.map(e=>e())};let Qt=!1;Ye&&(Qt=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Qt||q.addEventListener("DOMContentLoaded",Oo));function Al(e){Ye&&(Qt?setTimeout(e,0):wo.push(e))}function Nt(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?_o(e):"<".concat(t," ").concat(hl(n),">").concat(r.map(Nt).join(""),"</").concat(t,">")}function wa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Nn=function(t,n,r,a){var o=Object.keys(t),i=o.length,l=n,u,f,p;for(r===void 0?(u=1,p=t[o[0]]):(u=0,p=r);u<i;u++)f=o[u],p=l(p,t[f],f,t);return p};function Sl(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Zn(e){const t=Sl(e);return t.length===1?t[0].toString(16):null}function Tl(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Oa(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Jn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Oa(t);typeof Me.hooks.addPack=="function"&&!r?Me.hooks.addPack(e,Oa(t)):Me.styles[e]=g(g({},Me.styles[e]||{}),a),e==="fas"&&Jn("fa",t)}const{styles:Pt,shims:El}=Me,Co=Object.keys(gr),_l=Co.reduce((e,t)=>(e[t]=Object.keys(gr[t]),e),{});let vr=null,ko={},Po={},Ro={},Io={},No={};function xl(e){return~cl.indexOf(e)}function wl(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!xl(a)?a:null}const Lo=()=>{const e=r=>Nn(Pt,(a,o,i)=>(a[i]=Nn(o,r,{}),a),{});ko=e((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),Po=e((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),No=e((r,a,o)=>{const i=a[2];return r[o]=o,i.forEach(l=>{r[l]=o}),r});const t="far"in Pt||k.autoFetchSvg,n=Nn(El,(r,a)=>{const o=a[0];let i=a[1];const l=a[2];return i==="far"&&!t&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:l}),r},{names:{},unicodes:{}});Ro=n.names,Io=n.unicodes,vr=an(k.styleDefault,{family:k.familyDefault})};dl(e=>{vr=an(e.styleDefault,{family:k.familyDefault})});Lo();function Ar(e,t){return(ko[e]||{})[t]}function Ol(e,t){return(Po[e]||{})[t]}function et(e,t){return(No[e]||{})[t]}function Mo(e){return Ro[e]||{prefix:null,iconName:null}}function Cl(e){const t=Io[e],n=Ar("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qe(){return vr}const Do=()=>({prefix:null,iconName:null,rest:[]});function kl(e){let t=fe;const n=Co.reduce((r,a)=>(r[a]="".concat(k.cssPrefix,"-").concat(a),r),{});return go.forEach(r=>{(e.includes(n[r])||e.some(a=>_l[r].includes(a)))&&(t=r)}),t}function an(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=fe}=t,r=al[n][e];if(n===nn&&!e)return"fad";const a=_a[n][e]||_a[n][r],o=e in Me.styles?e:null;return a||o||null}function Pl(e){let t=[],n=null;return e.forEach(r=>{const a=wl(k.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function Ca(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function on(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=Gn.concat(Bs),o=Ca(e.filter(v=>a.includes(v))),i=Ca(e.filter(v=>!Gn.includes(v))),l=o.filter(v=>(r=v,!ho.includes(v))),[u=null]=l,f=kl(o),p=g(g({},Pl(i)),{},{prefix:an(u,{family:f})});return g(g(g({},p),Ll({values:e,family:f,styles:Pt,config:k,canonical:p,givenPrefix:r})),Rl(n,r,p))}function Rl(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const o=t==="fa"?Mo(a):{},i=et(r,a);return a=o.iconName||i||a,r=o.prefix||r,r==="far"&&!Pt.far&&Pt.fas&&!k.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const Il=go.filter(e=>e!==fe||e!==nn),Nl=Object.keys(Wn).filter(e=>e!==fe).map(e=>Object.keys(Wn[e])).flat();function Ll(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:o={},config:i={}}=e,l=n===nn,u=t.includes("fa-duotone")||t.includes("fad"),f=i.familyDefault==="duotone",p=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(u||f||p)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Il.includes(n)&&(Object.keys(o).find(T=>Nl.includes(T))||i.autoFetchSvg)){const T=zs.get(n).defaultShortPrefixId;r.prefix=T,r.iconName=et(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=qe()||"fas"),r}class Ml{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=g(g({},this.definitions[o]||{}),a[o]),Jn(o,a[o]);const i=gr[fe][o];i&&Jn(i,a[o]),Lo()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:i,icon:l}=r[a],u=l[2];t[o]||(t[o]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(t[o][f]=l)}),t[o][i]=l}),t}}let ka=[],st={};const ct={},Dl=Object.keys(ct);function Fl(e,t){let{mixoutsTo:n}=t;return ka=e,st={},Object.keys(ct).forEach(r=>{Dl.indexOf(r)===-1&&delete ct[r]}),ka.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(i=>{st[i]||(st[i]=[]),st[i].push(o[i])})}r.provides&&r.provides(ct)}),n}function Qn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(st[e]||[]).forEach(i=>{t=i.apply(null,[t,...r])}),t}function nt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(st[e]||[]).forEach(o=>{o.apply(null,n)})}function Ve(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ct[e]?ct[e].apply(null,t):void 0}function er(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||qe();if(t)return t=et(n,t)||t,wa(Fo.definitions,n,t)||wa(Me.styles,n,t)}const Fo=new Ml,zl=()=>{k.autoReplaceSvg=!1,k.observeMutations=!1,nt("noAuto")},Ul={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(nt("beforeI2svg",e),Ve("pseudoElements2svg",e),Ve("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,Al(()=>{$l({autoReplaceSvgRoot:t}),nt("watch",e)})}},jl={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:et(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=an(e[0]);return{prefix:n,iconName:et(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(k.cssPrefix,"-"))>-1||e.match(ol))){const t=on(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||qe(),iconName:et(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=qe();return{prefix:t,iconName:et(t,e)||e}}}},Ee={noAuto:zl,config:k,dom:Ul,parse:jl,library:Fo,findIconDefinition:er,toHtml:Nt},$l=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=q}=e;(Object.keys(Me.styles).length>0||k.autoFetchSvg)&&Ye&&k.autoReplaceSvg&&Ee.dom.i2svg({node:t})};function sn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Nt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Ye)return;const n=q.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Hl(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:i}=e;if(br(i)&&n.found&&!r.found){const{width:l,height:u}=n,f={x:l/u/2,y:.5};a.style=rn(g(g({},o),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Yl(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;const i=o===!0?"".concat(t,"-").concat(k.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},a),{},{id:i}),children:r}]}]}function Sr(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:l,maskId:u,titleId:f,extra:p,watchable:v=!1}=e,{width:T,height:N}=n.found?n:t,S=Ys.includes(r),d=[k.replacementClass,a?"".concat(k.cssPrefix,"-").concat(a):""].filter(m=>p.classes.indexOf(m)===-1).filter(m=>m!==""||!!m).concat(p.classes).join(" ");let E={children:[],attributes:g(g({},p.attributes),{},{"data-prefix":r,"data-icon":a,class:d,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(N)})};const L=S&&!~p.classes.indexOf("fa-fw")?{width:"".concat(T/N*16*.0625,"em")}:{};v&&(E.attributes[tt]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(f||kt())},children:[l]}),delete E.attributes.title);const x=g(g({},E),{},{prefix:r,iconName:a,main:t,mask:n,maskId:u,transform:o,symbol:i,styles:g(g({},L),p.styles)}),{children:P,attributes:R}=n.found&&t.found?Ve("generateAbstractMask",x)||{children:[],attributes:{}}:Ve("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=P,x.attributes=R,i?Yl(x):Hl(x)}function Pa(e){const{content:t,width:n,height:r,transform:a,title:o,extra:i,watchable:l=!1}=e,u=g(g(g({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(u[tt]="");const f=g({},i.styles);br(a)&&(f.transform=yl({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);const p=rn(f);p.length>0&&(u.style=p);const v=[];return v.push({tag:"span",attributes:u,children:[t]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function Wl(e){const{content:t,title:n,extra:r}=e,a=g(g(g({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=rn(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Ln}=Me;function tr(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(Rn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(Rn.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(Rn.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Gl={found:!1,width:512,height:512};function Bl(e,t){!Ao&&!k.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function nr(e,t){let n=t;return t==="fa"&&k.styleDefault!==null&&(t=qe()),new Promise((r,a)=>{if(n==="fa"){const o=Mo(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Ln[t]&&Ln[t][e]){const o=Ln[t][e];return r(tr(o))}Bl(e,t),r(g(g({},Gl),{},{icon:k.showMissingIcons&&e?Ve("missingIconAbstract")||{}:{}}))})}const Ra=()=>{},rr=k.measurePerformance&&Yt&&Yt.mark&&Yt.measure?Yt:{mark:Ra,measure:Ra},Et='FA "6.7.2"',Xl=e=>(rr.mark("".concat(Et," ").concat(e," begins")),()=>zo(e)),zo=e=>{rr.mark("".concat(Et," ").concat(e," ends")),rr.measure("".concat(Et," ").concat(e),"".concat(Et," ").concat(e," begins"),"".concat(Et," ").concat(e," ends"))};var Tr={begin:Xl,end:zo};const qt=()=>{};function Ia(e){return typeof(e.getAttribute?e.getAttribute(tt):null)=="string"}function ql(e){const t=e.getAttribute?e.getAttribute(pr):null,n=e.getAttribute?e.getAttribute(hr):null;return t&&n}function Vl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(k.replacementClass)}function Kl(){return k.autoReplaceSvg===!0?Vt.replace:Vt[k.autoReplaceSvg]||Vt.replace}function Zl(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function Jl(e){return q.createElement(e)}function Uo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Zl:Jl}=t;if(typeof e=="string")return q.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Uo(o,{ceFn:n}))}),r}function Ql(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Vt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Uo(n),t)}),t.getAttribute(tt)===null&&k.keepOriginalSource){let n=q.createComment(Ql(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~yr(t).indexOf(k.replacementClass))return Vt.replace(e);const r=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,l)=>(l===k.replacementClass||l.match(r)?i.toSvg.push(l):i.toNode.push(l),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>Nt(o)).join(`
`);t.setAttribute(tt,""),t.innerHTML=a}};function Na(e){e()}function jo(e,t){const n=typeof t=="function"?t:qt;if(e.length===0)n();else{let r=Na;k.mutateApproach===nl&&(r=Xe.requestAnimationFrame||Na),r(()=>{const a=Kl(),o=Tr.begin("mutate");e.map(a),o(),n()})}}let Er=!1;function $o(){Er=!0}function ar(){Er=!1}let en=null;function La(e){if(!Aa||!k.observeMutations)return;const{treeCallback:t=qt,nodeCallback:n=qt,pseudoElementsCallback:r=qt,observeMutationsRoot:a=q}=e;en=new Aa(o=>{if(Er)return;const i=qe();ht(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Ia(l.addedNodes[0])&&(k.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&k.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Ia(l.target)&&~ll.indexOf(l.attributeName))if(l.attributeName==="class"&&ql(l.target)){const{prefix:u,iconName:f}=on(yr(l.target));l.target.setAttribute(pr,u||i),f&&l.target.setAttribute(hr,f)}else Vl(l.target)&&n(l.target)})}),Ye&&en.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ec(){en&&en.disconnect()}function tc(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const o=a.split(":"),i=o[0],l=o.slice(1);return i&&l.length>0&&(r[i]=l.join(":").trim()),r},{})),n}function nc(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=on(yr(e));return a.prefix||(a.prefix=qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ol(a.prefix,e.innerText)||Ar(a.prefix,Zn(e.innerText))),!a.iconName&&k.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function rc(e){const t=ht(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return k.autoA11y&&(n?t["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(r||kt()):(t["aria-hidden"]="true",t.focusable="false")),t}function ac(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ma(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=nc(e),o=rc(e),i=Qn("parseNodeAttributes",{},e);let l=t.styleParser?tc(e):[];return g({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},i)}const{styles:oc}=Me;function Ho(e){const t=k.autoReplaceSvg==="nest"?Ma(e,{styleParser:!1}):Ma(e);return~t.extra.classes.indexOf(To)?Ve("generateLayersText",e,t):Ve("generateSvgReplacementMutation",e,t)}function ic(){return[...js,...Gn]}function Da(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();const n=q.documentElement.classList,r=p=>n.add("".concat(Ea,"-").concat(p)),a=p=>n.remove("".concat(Ea,"-").concat(p)),o=k.autoFetchSvg?ic():ho.concat(Object.keys(oc));o.includes("fa")||o.push("fa");const i=[".".concat(To,":not([").concat(tt,"])")].concat(o.map(p=>".".concat(p,":not([").concat(tt,"])"))).join(", ");if(i.length===0)return Promise.resolve();let l=[];try{l=ht(e.querySelectorAll(i))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();const u=Tr.begin("onTree"),f=l.reduce((p,v)=>{try{const T=Ho(v);T&&p.push(T)}catch(T){Ao||T.name==="MissingIcon"&&console.error(T)}return p},[]);return new Promise((p,v)=>{Promise.all(f).then(T=>{jo(T,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),u(),p()})}).catch(T=>{u(),v(T)})})}function sc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ho(e).then(n=>{n&&jo([n],t)})}function lc(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:er(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:er(a||{})),e(r,g(g({},n),{},{mask:a}))}}const cc=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Le,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:l=null,classes:u=[],attributes:f={},styles:p={}}=t;if(!e)return;const{prefix:v,iconName:T,icon:N}=e;return sn(g({type:"icon"},e),()=>(nt("beforeDOMElementCreation",{iconDefinition:e,params:t}),k.autoA11y&&(i?f["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(l||kt()):(f["aria-hidden"]="true",f.focusable="false")),Sr({icons:{main:tr(N),mask:a?tr(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:T,transform:g(g({},Le),n),symbol:r,title:i,maskId:o,titleId:l,extra:{attributes:f,styles:p,classes:u}})))};var fc={mixout(){return{icon:lc(cc)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Da,e.nodeCallback=sc,e}}},provides(e){e.i2svg=function(t){const{node:n=q,callback:r=()=>{}}=t;return Da(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:o,prefix:i,transform:l,symbol:u,mask:f,maskId:p,extra:v}=n;return new Promise((T,N)=>{Promise.all([nr(r,i),f.iconName?nr(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[d,E]=S;T([t,Sr({icons:{main:d,mask:E},prefix:i,iconName:r,transform:l,symbol:u,maskId:p,title:a,titleId:o,extra:v,watchable:!0})])}).catch(N)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:o,styles:i}=t;const l=rn(i);l.length>0&&(r.style=l);let u;return br(o)&&(u=Ve("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(u||a.icon),{children:n,attributes:r}}}},uc={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return sn({type:"layer"},()=>{nt("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},dc={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return sn({type:"counter",content:e},()=>(nt("beforeDOMElementCreation",{content:e,params:t}),Wl({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(k.cssPrefix,"-layers-counter"),...r]}})))}}}},mc={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Le,title:r=null,classes:a=[],attributes:o={},styles:i={}}=t;return sn({type:"text",content:e},()=>(nt("beforeDOMElementCreation",{content:e,params:t}),Pa({content:e,transform:g(g({},Le),n),title:r,extra:{attributes:o,styles:i,classes:["".concat(k.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:o}=n;let i=null,l=null;if(mo){const u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/u,l=f.height/u}return k.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Pa({content:t.innerHTML,width:i,height:l,transform:a,title:r,extra:o,watchable:!0})])}}};const pc=new RegExp('"',"ug"),Fa=[1105920,1112319],za=g(g(g(g({},{FontAwesome:{normal:"fas",400:"fas"}}),Fs),el),Xs),or=Object.keys(za).reduce((e,t)=>(e[t.toLowerCase()]=za[t],e),{}),hc=Object.keys(or).reduce((e,t)=>{const n=or[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function gc(e){const t=e.replace(pc,""),n=Tl(t,0),r=n>=Fa[0]&&n<=Fa[1],a=t.length===2?t[0]===t[1]:!1;return{value:Zn(a?t[0]:t),isSecondary:r||a}}function yc(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(or[n]||{})[a]||hc[n]}function Ua(e,t){const n="".concat(tl).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const i=ht(e.children).filter(T=>T.getAttribute(Xn)===t)[0],l=Xe.getComputedStyle(e,t),u=l.getPropertyValue("font-family"),f=u.match(il),p=l.getPropertyValue("font-weight"),v=l.getPropertyValue("content");if(i&&!f)return e.removeChild(i),r();if(f&&v!=="none"&&v!==""){const T=l.getPropertyValue("content");let N=yc(u,p);const{value:S,isSecondary:d}=gc(T),E=f[0].startsWith("FontAwesome");let L=Ar(N,S),x=L;if(E){const P=Cl(S);P.iconName&&P.prefix&&(L=P.iconName,N=P.prefix)}if(L&&!d&&(!i||i.getAttribute(pr)!==N||i.getAttribute(hr)!==x)){e.setAttribute(n,x),i&&e.removeChild(i);const P=ac(),{extra:R}=P;R.attributes[Xn]=t,nr(L,N).then(m=>{const B=Sr(g(g({},P),{},{icons:{main:m,mask:Do()},prefix:N,iconName:x,extra:R,watchable:!0})),ge=q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=B.map(oe=>Nt(oe)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function bc(e){return Promise.all([Ua(e,"::before"),Ua(e,"::after")])}function vc(e){return e.parentNode!==document.head&&!~rl.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ja(e){if(Ye)return new Promise((t,n)=>{const r=ht(e.querySelectorAll("*")).filter(vc).map(bc),a=Tr.begin("searchPseudoElements");$o(),Promise.all(r).then(()=>{a(),ar(),t()}).catch(()=>{a(),ar(),n()})})}var Ac={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=ja,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=q}=t;k.searchPseudoElements&&ja(n)}}};let $a=!1;var Sc={mixout(){return{dom:{unwatch(){$o(),$a=!0}}}},hooks(){return{bootstrap(){La(Qn("mutationObserverCallbacks",{}))},noAuto(){ec()},watch(e){const{observeMutationsRoot:t}=e;$a?ar():La(Qn("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Ha=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var Tc={mixout(){return{parse:{transform:e=>Ha(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Ha(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:o}=t;const i={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(l," ").concat(u," ").concat(f)},v={transform:"translate(".concat(o/2*-1," -256)")},T={outer:i,inner:p,path:v};return{tag:"g",attributes:g({},T.outer),children:[{tag:"g",attributes:g({},T.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:g(g({},n.icon.attributes),T.path)}]}]}}}};const Mn={x:0,y:0,width:"100%",height:"100%"};function Ya(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ec(e){return e.tag==="g"?e.children:[e]}var _c={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?on(n.split(" ").map(a=>a.trim())):Do();return r.prefix||(r.prefix=qe()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:l}=t;const{width:u,icon:f}=a,{width:p,icon:v}=o,T=gl({transform:l,containerWidth:p,iconWidth:u}),N={tag:"rect",attributes:g(g({},Mn),{},{fill:"white"})},S=f.children?{children:f.children.map(Ya)}:{},d={tag:"g",attributes:g({},T.inner),children:[Ya(g({tag:f.tag,attributes:g(g({},f.attributes),T.path)},S))]},E={tag:"g",attributes:g({},T.outer),children:[d]},L="mask-".concat(i||kt()),x="clip-".concat(i||kt()),P={tag:"mask",attributes:g(g({},Mn),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,E]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Ec(v)},P]};return n.push(R,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(L,")")},Mn)}),{children:n,attributes:r}}}},xc={provides(e){let t=!1;Xe.matchMedia&&(t=Xe.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:g(g({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=g(g({},a),{},{attributeName:"opacity"}),i={tag:"circle",attributes:g(g({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:g(g({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:g(g({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:g(g({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:g(g({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},wc={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Oc=[vl,fc,uc,dc,mc,Ac,Sc,Tc,_c,xc,wc];Fl(Oc,{mixoutsTo:Ee});Ee.noAuto;Ee.config;Ee.library;Ee.dom;const ir=Ee.parse;Ee.findIconDefinition;Ee.toHtml;const Cc=Ee.icon;Ee.layer;Ee.text;Ee.counter;function Wa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wa(Object(n),!0).forEach(function(r){lt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tn(e){"@babel/helpers - typeof";return tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tn(e)}function lt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kc(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Pc(e,t){if(e==null)return{};var n=kc(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sr(e){return Rc(e)||Ic(e)||Nc(e)||Lc()}function Rc(e){if(Array.isArray(e))return lr(e)}function Ic(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Nc(e,t){if(e){if(typeof e=="string")return lr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lr(e,t)}}function lr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Lc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mc(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,l=e.flash,u=e.spin,f=e.spinPulse,p=e.spinReverse,v=e.pulse,T=e.fixedWidth,N=e.inverse,S=e.border,d=e.listItem,E=e.flip,L=e.size,x=e.rotation,P=e.pull,R=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":p,"fa-spin-pulse":f,"fa-pulse":v,"fa-fw":T,"fa-inverse":N,"fa-border":S,"fa-li":d,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},lt(t,"fa-".concat(L),typeof L<"u"&&L!==null),lt(t,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),lt(t,"fa-pull-".concat(P),typeof P<"u"&&P!==null),lt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(R).map(function(m){return R[m]?m:null}).filter(function(m){return m})}function Dc(e){return e=e-0,e===e}function Yo(e){return Dc(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Fc=["style"];function zc(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Uc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Yo(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?t[zc(a)]=o:t[a]=o,t},{})}function Wo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return Wo(e,u)}),a=Object.keys(t.attributes||{}).reduce(function(u,f){var p=t.attributes[f];switch(f){case"class":u.attrs.className=p,delete t.attributes.class;break;case"style":u.attrs.style=Uc(p);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=p:u.attrs[Yo(f)]=p}return u},{attrs:{}}),o=n.style,i=o===void 0?{}:o,l=Pc(n,Fc);return a.attrs.style=Ne(Ne({},a.attrs.style),i),e.apply(void 0,[t.tag,Ne(Ne({},a.attrs),l)].concat(sr(r)))}var Go=!1;try{Go=!0}catch{}function jc(){if(!Go&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ga(e){if(e&&tn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ir.icon)return ir.icon(e);if(e===null)return null;if(e&&tn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Dn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?lt({},e,t):{}}var Ba={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Bo=mt.forwardRef(function(e,t){var n=Ne(Ne({},Ba),e),r=n.icon,a=n.mask,o=n.symbol,i=n.className,l=n.title,u=n.titleId,f=n.maskId,p=Ga(r),v=Dn("classes",[].concat(sr(Mc(n)),sr((i||"").split(" ")))),T=Dn("transform",typeof n.transform=="string"?ir.transform(n.transform):n.transform),N=Dn("mask",Ga(a)),S=Cc(p,Ne(Ne(Ne(Ne({},v),T),N),{},{symbol:o,title:l,titleId:u,maskId:f}));if(!S)return jc("Could not find icon",p),null;var d=S.abstract,E={ref:t};return Object.keys(n).forEach(function(L){Ba.hasOwnProperty(L)||(E[L]=n[L])}),$c(d[0],E)});Bo.displayName="FontAwesomeIcon";Bo.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};var $c=Wo.bind(null,mt.createElement);export{ps as A,lo as B,Bo as F,Gc as H,ea as N,h as P,xn as T,Wc as a,qc as b,ga as c,Xc as d,pa as e,Jc as f,Vc as g,Ss as h,Zc as i,Ot as j,Bc as k,fr as l,Ts as m,Kc as n,Qc as o,Oi as p,Yn as q,Yc as t};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*! @license DOMPurify 3.3.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.2/LICENSE */
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
