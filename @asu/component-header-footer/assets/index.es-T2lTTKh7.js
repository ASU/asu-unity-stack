import{a as ii,g as Va,R as ot,r as tt}from"./iframe-Cs01pPSb.js";var hn={exports:{}},bt={};var $r;function si(){if($r)return bt;$r=1;var e=ii(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(l,u,f){var d,b={},T=null,x=null;f!==void 0&&(T=""+f),u.key!==void 0&&(T=""+u.key),u.ref!==void 0&&(x=u.ref);for(d in u)r.call(u,d)&&!o.hasOwnProperty(d)&&(b[d]=u[d]);if(l&&l.defaultProps)for(d in u=l.defaultProps,u)b[d]===void 0&&(b[d]=u[d]);return{$$typeof:t,type:l,key:T,ref:x,props:b,_owner:a.current}}return bt.Fragment=n,bt.jsx=i,bt.jsxs=i,bt}var Hr;function li(){return Hr||(Hr=1,hn.exports=si()),hn.exports}var Ct=li();const{entries:Ka,setPrototypeOf:Yr,isFrozen:ci,getPrototypeOf:fi,getOwnPropertyDescriptor:ui}=Object;let{freeze:pe,seal:Oe,create:Bt}=Object,{apply:zn,construct:Un}=typeof Reflect<"u"&&Reflect;pe||(pe=function(t){return t});Oe||(Oe=function(t){return t});zn||(zn=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return t.apply(n,a)});Un||(Un=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return new t(...r)});const Ut=he(Array.prototype.forEach),di=he(Array.prototype.lastIndexOf),Wr=he(Array.prototype.pop),vt=he(Array.prototype.push),mi=he(Array.prototype.splice),Xt=he(String.prototype.toLowerCase),gn=he(String.prototype.toString),yn=he(String.prototype.match),At=he(String.prototype.replace),pi=he(String.prototype.indexOf),hi=he(String.prototype.trim),Te=he(Object.prototype.hasOwnProperty),me=he(RegExp.prototype.test),St=gi(TypeError);function he(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return zn(e,t,r)}}function gi(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Un(e,n)}}function z(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Xt;Yr&&Yr(e,null);let r=t.length;for(;r--;){let a=t[r];if(typeof a=="string"){const o=n(a);o!==a&&(ci(t)||(t[r]=o),a=o)}e[a]=!0}return e}function yi(e){for(let t=0;t<e.length;t++)Te(e,t)||(e[t]=null);return e}function Ie(e){const t=Bt(null);for(const[n,r]of Ka(e))Te(e,n)&&(Array.isArray(r)?t[n]=yi(r):r&&typeof r=="object"&&r.constructor===Object?t[n]=Ie(r):t[n]=r);return t}function Tt(e,t){for(;e!==null;){const r=ui(e,t);if(r){if(r.get)return he(r.get);if(typeof r.value=="function")return he(r.value)}e=fi(e)}function n(){return null}return n}const Gr=pe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),bn=pe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),vn=pe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),bi=pe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),An=pe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),vi=pe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Br=pe(["#text"]),Xr=pe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Sn=pe(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),qr=pe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),jt=pe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ai=Oe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Si=Oe(/<%[\w\W]*|[\w\W]*%>/gm),Ti=Oe(/\$\{[\w\W]*/gm),Ei=Oe(/^data-[\-\w.\u00B7-\uFFFF]+$/),_i=Oe(/^aria-[\-\w]+$/),Za=Oe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),xi=Oe(/^(?:\w+script|data):/i),wi=Oe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ja=Oe(/^html$/i),Oi=Oe(/^[a-z][.\w]*(-[.\w]+)+$/i);var Vr=Object.freeze({__proto__:null,ARIA_ATTR:_i,ATTR_WHITESPACE:wi,CUSTOM_ELEMENT:Oi,DATA_ATTR:Ei,DOCTYPE_NAME:Ja,ERB_EXPR:Si,IS_ALLOWED_URI:Za,IS_SCRIPT_OR_DATA:xi,MUSTACHE_EXPR:Ai,TMPLIT_EXPR:Ti});const Et={element:1,text:3,progressingInstruction:7,comment:8,document:9},Ci=function(){return typeof window>"u"?null:window},ki=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const a="data-tt-policy-suffix";n&&n.hasAttribute(a)&&(r=n.getAttribute(a));const o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},Kr=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Qa(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ci();const t=N=>Qa(N);if(t.version="3.3.2",t.removed=[],!e||!e.document||e.document.nodeType!==Et.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const r=n,a=r.currentScript,{DocumentFragment:o,HTMLTemplateElement:i,Node:l,Element:u,NodeFilter:f,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:b,DOMParser:T,trustedTypes:x}=e,S=u.prototype,m=Tt(S,"cloneNode"),E=Tt(S,"remove"),L=Tt(S,"nextSibling"),w=Tt(S,"childNodes"),R=Tt(S,"parentNode");if(typeof i=="function"){const N=n.createElement("template");N.content&&N.content.ownerDocument&&(n=N.content.ownerDocument)}let I,h="";const{implementation:B,createNodeIterator:ge,createDocumentFragment:oe,getElementsByTagName:_e}=n,{importNode:Ce}=r;let Q=Kr();t.isSupported=typeof Ka=="function"&&typeof R=="function"&&B&&B.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ie,ERB_EXPR:ue,TMPLIT_EXPR:ye,DATA_ATTR:le,ARIA_ATTR:Ke,IS_SCRIPT_OR_DATA:Ae,ATTR_WHITESPACE:de,CUSTOM_ELEMENT:Ze}=Vr;let{IS_ALLOWED_URI:Fe}=Vr,V=null;const k=z({},[...Gr,...bn,...vn,...An,...Br]);let A=null;const O=z({},[...Xr,...Sn,...qr,...jt]);let _=Object.seal(Bt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),c=null,U=null;const v=Object.seal(Bt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let X=!0,j=!0,H=!1,D=!0,K=!1,re=!0,F=!1,te=!1,$=!1,Z=!1,ke=!1,ee=!1,Je=!0,We=!1;const Se="user-content-";let M=!0,G=!1,Pe={},be=null;const xe=z({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let wr=null;const Or=z({},["audio","video","img","source","image","track"]);let cn=null;const Cr=z({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Mt="http://www.w3.org/1998/Math/MathML",Dt="http://www.w3.org/2000/svg",ze="http://www.w3.org/1999/xhtml";let it=ze,fn=!1,un=null;const Qo=z({},[Mt,Dt,ze],gn);let Ft=z({},["mi","mo","mn","ms","mtext"]),zt=z({},["annotation-xml"]);const ei=z({},["title","style","font","a","script"]);let yt=null;const ti=["application/xhtml+xml","text/html"],ni="text/html";let ae=null,st=null;const ri=n.createElement("form"),kr=function(s){return s instanceof RegExp||s instanceof Function},dn=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(st&&st===s)){if((!s||typeof s!="object")&&(s={}),s=Ie(s),yt=ti.indexOf(s.PARSER_MEDIA_TYPE)===-1?ni:s.PARSER_MEDIA_TYPE,ae=yt==="application/xhtml+xml"?gn:Xt,V=Te(s,"ALLOWED_TAGS")?z({},s.ALLOWED_TAGS,ae):k,A=Te(s,"ALLOWED_ATTR")?z({},s.ALLOWED_ATTR,ae):O,un=Te(s,"ALLOWED_NAMESPACES")?z({},s.ALLOWED_NAMESPACES,gn):Qo,cn=Te(s,"ADD_URI_SAFE_ATTR")?z(Ie(Cr),s.ADD_URI_SAFE_ATTR,ae):Cr,wr=Te(s,"ADD_DATA_URI_TAGS")?z(Ie(Or),s.ADD_DATA_URI_TAGS,ae):Or,be=Te(s,"FORBID_CONTENTS")?z({},s.FORBID_CONTENTS,ae):xe,c=Te(s,"FORBID_TAGS")?z({},s.FORBID_TAGS,ae):Ie({}),U=Te(s,"FORBID_ATTR")?z({},s.FORBID_ATTR,ae):Ie({}),Pe=Te(s,"USE_PROFILES")?s.USE_PROFILES:!1,X=s.ALLOW_ARIA_ATTR!==!1,j=s.ALLOW_DATA_ATTR!==!1,H=s.ALLOW_UNKNOWN_PROTOCOLS||!1,D=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,K=s.SAFE_FOR_TEMPLATES||!1,re=s.SAFE_FOR_XML!==!1,F=s.WHOLE_DOCUMENT||!1,Z=s.RETURN_DOM||!1,ke=s.RETURN_DOM_FRAGMENT||!1,ee=s.RETURN_TRUSTED_TYPE||!1,$=s.FORCE_BODY||!1,Je=s.SANITIZE_DOM!==!1,We=s.SANITIZE_NAMED_PROPS||!1,M=s.KEEP_CONTENT!==!1,G=s.IN_PLACE||!1,Fe=s.ALLOWED_URI_REGEXP||Za,it=s.NAMESPACE||ze,Ft=s.MATHML_TEXT_INTEGRATION_POINTS||Ft,zt=s.HTML_INTEGRATION_POINTS||zt,_=s.CUSTOM_ELEMENT_HANDLING||{},s.CUSTOM_ELEMENT_HANDLING&&kr(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(_.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&kr(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(_.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(_.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),K&&(j=!1),ke&&(Z=!0),Pe&&(V=z({},Br),A=Bt(null),Pe.html===!0&&(z(V,Gr),z(A,Xr)),Pe.svg===!0&&(z(V,bn),z(A,Sn),z(A,jt)),Pe.svgFilters===!0&&(z(V,vn),z(A,Sn),z(A,jt)),Pe.mathMl===!0&&(z(V,An),z(A,qr),z(A,jt))),Te(s,"ADD_TAGS")||(v.tagCheck=null),Te(s,"ADD_ATTR")||(v.attributeCheck=null),s.ADD_TAGS&&(typeof s.ADD_TAGS=="function"?v.tagCheck=s.ADD_TAGS:(V===k&&(V=Ie(V)),z(V,s.ADD_TAGS,ae))),s.ADD_ATTR&&(typeof s.ADD_ATTR=="function"?v.attributeCheck=s.ADD_ATTR:(A===O&&(A=Ie(A)),z(A,s.ADD_ATTR,ae))),s.ADD_URI_SAFE_ATTR&&z(cn,s.ADD_URI_SAFE_ATTR,ae),s.FORBID_CONTENTS&&(be===xe&&(be=Ie(be)),z(be,s.FORBID_CONTENTS,ae)),s.ADD_FORBID_CONTENTS&&(be===xe&&(be=Ie(be)),z(be,s.ADD_FORBID_CONTENTS,ae)),M&&(V["#text"]=!0),F&&z(V,["html","head","body"]),V.table&&(z(V,["tbody"]),delete c.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw St('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw St('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');I=s.TRUSTED_TYPES_POLICY,h=I.createHTML("")}else I===void 0&&(I=ki(x,a)),I!==null&&typeof h=="string"&&(h=I.createHTML(""));pe&&pe(s),st=s}},Pr=z({},[...bn,...vn,...bi]),Rr=z({},[...An,...vi]),ai=function(s){let y=R(s);(!y||!y.tagName)&&(y={namespaceURI:it,tagName:"template"});const C=Xt(s.tagName),J=Xt(y.tagName);return un[s.namespaceURI]?s.namespaceURI===Dt?y.namespaceURI===ze?C==="svg":y.namespaceURI===Mt?C==="svg"&&(J==="annotation-xml"||Ft[J]):!!Pr[C]:s.namespaceURI===Mt?y.namespaceURI===ze?C==="math":y.namespaceURI===Dt?C==="math"&&zt[J]:!!Rr[C]:s.namespaceURI===ze?y.namespaceURI===Dt&&!zt[J]||y.namespaceURI===Mt&&!Ft[J]?!1:!Rr[C]&&(ei[C]||!Pr[C]):!!(yt==="application/xhtml+xml"&&un[s.namespaceURI]):!1},Re=function(s){vt(t.removed,{element:s});try{R(s).removeChild(s)}catch{E(s)}},Qe=function(s,y){try{vt(t.removed,{attribute:y.getAttributeNode(s),from:y})}catch{vt(t.removed,{attribute:null,from:y})}if(y.removeAttribute(s),s==="is")if(Z||ke)try{Re(y)}catch{}else try{y.setAttribute(s,"")}catch{}},Ir=function(s){let y=null,C=null;if($)s="<remove></remove>"+s;else{const ne=yn(s,/^[\r\n\t ]+/);C=ne&&ne[0]}yt==="application/xhtml+xml"&&it===ze&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const J=I?I.createHTML(s):s;if(it===ze)try{y=new T().parseFromString(J,yt)}catch{}if(!y||!y.documentElement){y=B.createDocument(it,"template",null);try{y.documentElement.innerHTML=fn?h:J}catch{}}const ce=y.body||y.documentElement;return s&&C&&ce.insertBefore(n.createTextNode(C),ce.childNodes[0]||null),it===ze?_e.call(y,F?"html":"body")[0]:F?y.documentElement:ce},Nr=function(s){return ge.call(s.ownerDocument||s,s,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},mn=function(s){return s instanceof b&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof d)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},Lr=function(s){return typeof l=="function"&&s instanceof l};function Ue(N,s,y){Ut(N,C=>{C.call(t,s,y,st)})}const Mr=function(s){let y=null;if(Ue(Q.beforeSanitizeElements,s,null),mn(s))return Re(s),!0;const C=ae(s.nodeName);if(Ue(Q.uponSanitizeElement,s,{tagName:C,allowedTags:V}),re&&s.hasChildNodes()&&!Lr(s.firstElementChild)&&me(/<[/\w!]/g,s.innerHTML)&&me(/<[/\w!]/g,s.textContent)||s.nodeType===Et.progressingInstruction||re&&s.nodeType===Et.comment&&me(/<[/\w]/g,s.data))return Re(s),!0;if(!(v.tagCheck instanceof Function&&v.tagCheck(C))&&(!V[C]||c[C])){if(!c[C]&&Fr(C)&&(_.tagNameCheck instanceof RegExp&&me(_.tagNameCheck,C)||_.tagNameCheck instanceof Function&&_.tagNameCheck(C)))return!1;if(M&&!be[C]){const J=R(s)||s.parentNode,ce=w(s)||s.childNodes;if(ce&&J){const ne=ce.length;for(let ve=ne-1;ve>=0;--ve){const je=m(ce[ve],!0);je.__removalCount=(s.__removalCount||0)+1,J.insertBefore(je,L(s))}}}return Re(s),!0}return s instanceof u&&!ai(s)||(C==="noscript"||C==="noembed"||C==="noframes")&&me(/<\/no(script|embed|frames)/i,s.innerHTML)?(Re(s),!0):(K&&s.nodeType===Et.text&&(y=s.textContent,Ut([ie,ue,ye],J=>{y=At(y,J," ")}),s.textContent!==y&&(vt(t.removed,{element:s.cloneNode()}),s.textContent=y)),Ue(Q.afterSanitizeElements,s,null),!1)},Dr=function(s,y,C){if(U[y]||Je&&(y==="id"||y==="name")&&(C in n||C in ri))return!1;if(!(j&&!U[y]&&me(le,y))){if(!(X&&me(Ke,y))){if(!(v.attributeCheck instanceof Function&&v.attributeCheck(y,s))){if(!A[y]||U[y]){if(!(Fr(s)&&(_.tagNameCheck instanceof RegExp&&me(_.tagNameCheck,s)||_.tagNameCheck instanceof Function&&_.tagNameCheck(s))&&(_.attributeNameCheck instanceof RegExp&&me(_.attributeNameCheck,y)||_.attributeNameCheck instanceof Function&&_.attributeNameCheck(y,s))||y==="is"&&_.allowCustomizedBuiltInElements&&(_.tagNameCheck instanceof RegExp&&me(_.tagNameCheck,C)||_.tagNameCheck instanceof Function&&_.tagNameCheck(C))))return!1}else if(!cn[y]){if(!me(Fe,At(C,de,""))){if(!((y==="src"||y==="xlink:href"||y==="href")&&s!=="script"&&pi(C,"data:")===0&&wr[s])){if(!(H&&!me(Ae,At(C,de,"")))){if(C)return!1}}}}}}}return!0},Fr=function(s){return s!=="annotation-xml"&&yn(s,Ze)},zr=function(s){Ue(Q.beforeSanitizeAttributes,s,null);const{attributes:y}=s;if(!y||mn(s))return;const C={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:A,forceKeepAttr:void 0};let J=y.length;for(;J--;){const ce=y[J],{name:ne,namespaceURI:ve,value:je}=ce,lt=ae(ne),pn=je;let se=ne==="value"?pn:hi(pn);if(C.attrName=lt,C.attrValue=se,C.keepAttr=!0,C.forceKeepAttr=void 0,Ue(Q.uponSanitizeAttribute,s,C),se=C.attrValue,We&&(lt==="id"||lt==="name")&&(Qe(ne,s),se=Se+se),re&&me(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,se)){Qe(ne,s);continue}if(lt==="attributename"&&yn(se,"href")){Qe(ne,s);continue}if(C.forceKeepAttr)continue;if(!C.keepAttr){Qe(ne,s);continue}if(!D&&me(/\/>/i,se)){Qe(ne,s);continue}K&&Ut([ie,ue,ye],jr=>{se=At(se,jr," ")});const Ur=ae(s.nodeName);if(!Dr(Ur,lt,se)){Qe(ne,s);continue}if(I&&typeof x=="object"&&typeof x.getAttributeType=="function"&&!ve)switch(x.getAttributeType(Ur,lt)){case"TrustedHTML":{se=I.createHTML(se);break}case"TrustedScriptURL":{se=I.createScriptURL(se);break}}if(se!==pn)try{ve?s.setAttributeNS(ve,ne,se):s.setAttribute(ne,se),mn(s)?Re(s):Wr(t.removed)}catch{Qe(ne,s)}}Ue(Q.afterSanitizeAttributes,s,null)},oi=function N(s){let y=null;const C=Nr(s);for(Ue(Q.beforeSanitizeShadowDOM,s,null);y=C.nextNode();)Ue(Q.uponSanitizeShadowNode,y,null),Mr(y),zr(y),y.content instanceof o&&N(y.content);Ue(Q.afterSanitizeShadowDOM,s,null)};return t.sanitize=function(N){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=null,C=null,J=null,ce=null;if(fn=!N,fn&&(N="<!-->"),typeof N!="string"&&!Lr(N))if(typeof N.toString=="function"){if(N=N.toString(),typeof N!="string")throw St("dirty is not a string, aborting")}else throw St("toString is not a function");if(!t.isSupported)return N;if(te||dn(s),t.removed=[],typeof N=="string"&&(G=!1),G){if(N.nodeName){const je=ae(N.nodeName);if(!V[je]||c[je])throw St("root node is forbidden and cannot be sanitized in-place")}}else if(N instanceof l)y=Ir("<!---->"),C=y.ownerDocument.importNode(N,!0),C.nodeType===Et.element&&C.nodeName==="BODY"||C.nodeName==="HTML"?y=C:y.appendChild(C);else{if(!Z&&!K&&!F&&N.indexOf("<")===-1)return I&&ee?I.createHTML(N):N;if(y=Ir(N),!y)return Z?null:ee?h:""}y&&$&&Re(y.firstChild);const ne=Nr(G?N:y);for(;J=ne.nextNode();)Mr(J),zr(J),J.content instanceof o&&oi(J.content);if(G)return N;if(Z){if(ke)for(ce=oe.call(y.ownerDocument);y.firstChild;)ce.appendChild(y.firstChild);else ce=y;return(A.shadowroot||A.shadowrootmode)&&(ce=Ce.call(r,ce,!0)),ce}let ve=F?y.outerHTML:y.innerHTML;return F&&V["!doctype"]&&y.ownerDocument&&y.ownerDocument.doctype&&y.ownerDocument.doctype.name&&me(Ja,y.ownerDocument.doctype.name)&&(ve="<!DOCTYPE "+y.ownerDocument.doctype.name+`>
`+ve),K&&Ut([ie,ue,ye],je=>{ve=At(ve,je," ")}),I&&ee?I.createHTML(ve):ve},t.setConfig=function(){let N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};dn(N),te=!0},t.clearConfig=function(){st=null,te=!1},t.isValidAttribute=function(N,s,y){st||dn({});const C=ae(N),J=ae(s);return Dr(C,J,y)},t.addHook=function(N,s){typeof s=="function"&&vt(Q[N],s)},t.removeHook=function(N,s){if(s!==void 0){const y=di(Q[N],s);return y===-1?void 0:mi(Q[N],y,1)[0]}return Wr(Q[N])},t.removeHooks=function(N){Q[N]=[]},t.removeAllHooks=function(){Q=Kr()},t}Qa();var Tn={exports:{}},En,Zr;function Pi(){if(Zr)return En;Zr=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return En=e,En}var _n,Jr;function Ri(){if(Jr)return _n;Jr=1;var e=Pi();function t(){}function n(){}return n.resetWarningCache=t,_n=function(){function r(i,l,u,f,d,b){if(b!==e){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}r.isRequired=r;function a(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o},_n}var Qr;function Ii(){return Qr||(Qr=1,Tn.exports=Ri()()),Tn.exports}var Ni=Ii();const p=Va(Ni);p.shape({event:p.string,action:p.string,name:p.string,region:p.string,section:p.string,component:p.string,type:p.string,text:p.string});const Bc=({event:e="",action:t="",name:n="",type:r="",section:a="",text:o="",region:i="",component:l=""})=>{const{dataLayer:u}=window,f={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:i.toLowerCase(),section:a.toLowerCase(),text:o.toLowerCase(),component:l.toLowerCase()};u&&u.push(f)},ht=({children:e})=>Ct.jsx(Ct.Fragment,{children:e});ht.propTypes={children:p.oneOfType([p.arrayOf(p.node),p.node,p.string])};ht.__docgenInfo={description:"",methods:[],displayName:"Base",props:{children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"},{name:"string"}]},required:!1}}};var xn={exports:{}};var ea;function Li(){return ea||(ea=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(o=a(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var i="";for(var l in o)t.call(o,l)&&o[l]&&(i=a(i,l));return i}function a(o,i){return i?o?o+" "+i:o+i:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(xn)),xn.exports}Li();({...ht.propTypes});const fr=({children:e,className:t="container",...n})=>Ct.jsx("div",{className:t,...n,children:Ct.jsx("div",{className:"row",children:e})});fr.propTypes={children:ht.propTypes.children};({...fr.propTypes});ht.propTypes.children,p.oneOf(["0","3","4","6","8","9","12"]);ht.propTypes.children;fr.__docgenInfo={description:"",methods:[],displayName:"Container",props:{className:{defaultValue:{value:'"container"',computed:!1},required:!1},children:{description:"",type:{name:"custom",raw:"Base.propTypes.children"},required:!1}}};function Xc({packageName:e="",component:t="",type:n="",configuration:r={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}}const ta={alt:p.string,title:p.string,src:p.string,mobileSrc:p.string,brandLink:p.string},wn={baseUrl:p.string,parentOrg:p.string,parentOrgUrl:p.string,animate:p.bool},$t={loggedIn:p.bool,loginLink:p.string,logoutLink:p.string,userName:p.string},ur={text:p.string.isRequired,color:p.oneOf(["gold","maroon","light","dark"]),href:p.string,classes:p.string,onClick:p.func,onFocus:p.func},na=p.shape({id:p.number,href:p.string,text:p.string,type:p.string,selected:p.bool,items:p.arrayOf(p.arrayOf(p.object)),buttons:p.arrayOf(p.shape(ur)),class:p.string}),Mi={isPartner:p.bool,navTree:p.arrayOf(na),partnerLogo:p.shape(ta),logo:p.shape(ta),title:p.string,parentOrg:wn.parentOrg,parentOrgUrl:wn.parentOrgUrl,baseUrl:wn.baseUrl,loggedIn:$t.loggedIn,userName:$t.userName,loginLink:$t.loginLink,onLoginClick:p.func,logoutLink:$t.logoutLink,onLogoutClick:p.func,buttons:p.arrayOf(p.shape(ur)),breakpoint:p.oneOf(["Lg","Xl"]),animateTitle:p.bool,expandOnHover:p.bool,mobileNavTree:p.arrayOf(na),hasNavigation:p.bool,searchUrl:p.string,site:p.string,renderDiv:p.oneOf(["true","false"])},qc={...Mi,headerTop:p.number,headerHeight:p.number,itemOpened:p.number,setItemOpened:p.func,mobileMenuOpen:p.bool,setMobileMenuOpen:p.func,singlePageAppReset:p.func};var On={exports:{}},W={};var ra;function Di(){if(ra)return W;ra=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),x=Symbol.for("react.client.reference");function S(m){if(typeof m=="object"&&m!==null){var E=m.$$typeof;switch(E){case e:switch(m=m.type,m){case n:case a:case r:case u:case f:return m;default:switch(m=m&&m.$$typeof,m){case i:case l:case b:case d:return m;case o:return m;default:return E}}case t:return E}}}return W.ContextConsumer=o,W.ContextProvider=i,W.Element=e,W.ForwardRef=l,W.Fragment=n,W.Lazy=b,W.Memo=d,W.Portal=t,W.Profiler=a,W.StrictMode=r,W.Suspense=u,W.SuspenseList=f,W.isContextConsumer=function(m){return S(m)===o},W.isContextProvider=function(m){return S(m)===i},W.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},W.isForwardRef=function(m){return S(m)===l},W.isFragment=function(m){return S(m)===n},W.isLazy=function(m){return S(m)===b},W.isMemo=function(m){return S(m)===d},W.isPortal=function(m){return S(m)===t},W.isProfiler=function(m){return S(m)===a},W.isStrictMode=function(m){return S(m)===r},W.isSuspense=function(m){return S(m)===u},W.isSuspenseList=function(m){return S(m)===f},W.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===n||m===a||m===r||m===u||m===f||m===T||typeof m=="object"&&m!==null&&(m.$$typeof===b||m.$$typeof===d||m.$$typeof===i||m.$$typeof===o||m.$$typeof===l||m.$$typeof===x||m.getModuleId!==void 0)},W.typeOf=S,W}var aa;function Fi(){return aa||(aa=1,On.exports=Di()),On.exports}var eo=Fi();function zi(e){function t(k,A,O,_,c){for(var U=0,v=0,X=0,j=0,H,D,K=0,re=0,F,te=F=H=0,$=0,Z=0,ke=0,ee=0,Je=O.length,We=Je-1,Se,M="",G="",Pe="",be="",xe;$<Je;){if(D=O.charCodeAt($),$===We&&v+j+X+U!==0&&(v!==0&&(D=v===47?10:47),j=X=U=0,Je++,We++),v+j+X+U===0){if($===We&&(0<Z&&(M=M.replace(T,"")),0<M.trim().length)){switch(D){case 32:case 9:case 59:case 13:case 10:break;default:M+=O.charAt($)}D=59}switch(D){case 123:for(M=M.trim(),H=M.charCodeAt(0),F=1,ee=++$;$<Je;){switch(D=O.charCodeAt($)){case 123:F++;break;case 125:F--;break;case 47:switch(D=O.charCodeAt($+1)){case 42:case 47:e:{for(te=$+1;te<We;++te)switch(O.charCodeAt(te)){case 47:if(D===42&&O.charCodeAt(te-1)===42&&$+2!==te){$=te+1;break e}break;case 10:if(D===47){$=te+1;break e}}$=te}}break;case 91:D++;case 40:D++;case 34:case 39:for(;$++<We&&O.charCodeAt($)!==D;);}if(F===0)break;$++}switch(F=O.substring(ee,$),H===0&&(H=(M=M.replace(b,"").trim()).charCodeAt(0)),H){case 64:switch(0<Z&&(M=M.replace(T,"")),D=M.charCodeAt(1),D){case 100:case 109:case 115:case 45:Z=A;break;default:Z=Ke}if(F=t(A,Z,F,D,c+1),ee=F.length,0<de&&(Z=n(Ke,M,ke),xe=l(3,F,Z,A,ue,ie,ee,D,c,_),M=Z.join(""),xe!==void 0&&(ee=(F=xe.trim()).length)===0&&(D=0,F="")),0<ee)switch(D){case 115:M=M.replace(B,i);case 100:case 109:case 45:F=M+"{"+F+"}";break;case 107:M=M.replace(w,"$1 $2"),F=M+"{"+F+"}",F=le===1||le===2&&o("@"+F,3)?"@-webkit-"+F+"@"+F:"@"+F;break;default:F=M+F,_===112&&(F=(G+=F,""))}else F="";break;default:F=t(A,n(A,M,ke),F,_,c+1)}Pe+=F,F=ke=Z=te=H=0,M="",D=O.charCodeAt(++$);break;case 125:case 59:if(M=(0<Z?M.replace(T,""):M).trim(),1<(ee=M.length))switch(te===0&&(H=M.charCodeAt(0),H===45||96<H&&123>H)&&(ee=(M=M.replace(" ",":")).length),0<de&&(xe=l(1,M,A,k,ue,ie,G.length,_,c,_))!==void 0&&(ee=(M=xe.trim()).length)===0&&(M="\0\0"),H=M.charCodeAt(0),D=M.charCodeAt(1),H){case 0:break;case 64:if(D===105||D===99){be+=M+O.charAt($);break}default:M.charCodeAt(ee-1)!==58&&(G+=a(M,H,D,M.charCodeAt(2)))}ke=Z=te=H=0,M="",D=O.charCodeAt(++$)}}switch(D){case 13:case 10:v===47?v=0:1+H===0&&_!==107&&0<M.length&&(Z=1,M+="\0"),0<de*Fe&&l(0,M,A,k,ue,ie,G.length,_,c,_),ie=1,ue++;break;case 59:case 125:if(v+j+X+U===0){ie++;break}default:switch(ie++,Se=O.charAt($),D){case 9:case 32:if(j+U+v===0)switch(K){case 44:case 58:case 9:case 32:Se="";break;default:D!==32&&(Se=" ")}break;case 0:Se="\\0";break;case 12:Se="\\f";break;case 11:Se="\\v";break;case 38:j+v+U===0&&(Z=ke=1,Se="\f"+Se);break;case 108:if(j+v+U+ye===0&&0<te)switch($-te){case 2:K===112&&O.charCodeAt($-3)===58&&(ye=K);case 8:re===111&&(ye=re)}break;case 58:j+v+U===0&&(te=$);break;case 44:v+X+j+U===0&&(Z=1,Se+="\r");break;case 34:case 39:v===0&&(j=j===D?0:j===0?D:j);break;case 91:j+v+X===0&&U++;break;case 93:j+v+X===0&&U--;break;case 41:j+v+U===0&&X--;break;case 40:if(j+v+U===0){if(H===0)switch(2*K+3*re){case 533:break;default:H=1}X++}break;case 64:v+X+j+U+te+F===0&&(F=1);break;case 42:case 47:if(!(0<j+U+X))switch(v){case 0:switch(2*D+3*O.charCodeAt($+1)){case 235:v=47;break;case 220:ee=$,v=42}break;case 42:D===47&&K===42&&ee+2!==$&&(O.charCodeAt(ee+2)===33&&(G+=O.substring(ee,$+1)),Se="",v=0)}}v===0&&(M+=Se)}re=K,K=D,$++}if(ee=G.length,0<ee){if(Z=A,0<de&&(xe=l(2,G,Z,k,ue,ie,ee,_,c,_),xe!==void 0&&(G=xe).length===0))return be+G+Pe;if(G=Z.join(",")+"{"+G+"}",le*ye!==0){switch(le!==2||o(G,2)||(ye=0),ye){case 111:G=G.replace(I,":-moz-$1")+G;break;case 112:G=G.replace(R,"::-webkit-input-$1")+G.replace(R,"::-moz-$1")+G.replace(R,":-ms-input-$1")+G}ye=0}}return be+G+Pe}function n(k,A,O){var _=A.trim().split(E);A=_;var c=_.length,U=k.length;switch(U){case 0:case 1:var v=0;for(k=U===0?"":k[0]+" ";v<c;++v)A[v]=r(k,A[v],O).trim();break;default:var X=v=0;for(A=[];v<c;++v)for(var j=0;j<U;++j)A[X++]=r(k[j]+" ",_[v],O).trim()}return A}function r(k,A,O){var _=A.charCodeAt(0);switch(33>_&&(_=(A=A.trim()).charCodeAt(0)),_){case 38:return A.replace(L,"$1"+k.trim());case 58:return k.trim()+A.replace(L,"$1"+k.trim());default:if(0<1*O&&0<A.indexOf("\f"))return A.replace(L,(k.charCodeAt(0)===58?"":"$1")+k.trim())}return k+A}function a(k,A,O,_){var c=k+";",U=2*A+3*O+4*_;if(U===944){k=c.indexOf(":",9)+1;var v=c.substring(k,c.length-1).trim();return v=c.substring(0,k).trim()+v+";",le===1||le===2&&o(v,1)?"-webkit-"+v+v:v}if(le===0||le===2&&!o(c,1))return c;switch(U){case 1015:return c.charCodeAt(10)===97?"-webkit-"+c+c:c;case 951:return c.charCodeAt(3)===116?"-webkit-"+c+c:c;case 963:return c.charCodeAt(5)===110?"-webkit-"+c+c:c;case 1009:if(c.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+c+c;case 978:return"-webkit-"+c+"-moz-"+c+c;case 1019:case 983:return"-webkit-"+c+"-moz-"+c+"-ms-"+c+c;case 883:if(c.charCodeAt(8)===45)return"-webkit-"+c+c;if(0<c.indexOf("image-set(",11))return c.replace(Q,"$1-webkit-$2")+c;break;case 932:if(c.charCodeAt(4)===45)switch(c.charCodeAt(5)){case 103:return"-webkit-box-"+c.replace("-grow","")+"-webkit-"+c+"-ms-"+c.replace("grow","positive")+c;case 115:return"-webkit-"+c+"-ms-"+c.replace("shrink","negative")+c;case 98:return"-webkit-"+c+"-ms-"+c.replace("basis","preferred-size")+c}return"-webkit-"+c+"-ms-"+c+c;case 964:return"-webkit-"+c+"-ms-flex-"+c+c;case 1023:if(c.charCodeAt(8)!==99)break;return v=c.substring(c.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+v+"-webkit-"+c+"-ms-flex-pack"+v+c;case 1005:return S.test(c)?c.replace(x,":-webkit-")+c.replace(x,":-moz-")+c:c;case 1e3:switch(v=c.substring(13).trim(),A=v.indexOf("-")+1,v.charCodeAt(0)+v.charCodeAt(A)){case 226:v=c.replace(h,"tb");break;case 232:v=c.replace(h,"tb-rl");break;case 220:v=c.replace(h,"lr");break;default:return c}return"-webkit-"+c+"-ms-"+v+c;case 1017:if(c.indexOf("sticky",9)===-1)break;case 975:switch(A=(c=k).length-10,v=(c.charCodeAt(A)===33?c.substring(0,A):c).substring(k.indexOf(":",7)+1).trim(),U=v.charCodeAt(0)+(v.charCodeAt(7)|0)){case 203:if(111>v.charCodeAt(8))break;case 115:c=c.replace(v,"-webkit-"+v)+";"+c;break;case 207:case 102:c=c.replace(v,"-webkit-"+(102<U?"inline-":"")+"box")+";"+c.replace(v,"-webkit-"+v)+";"+c.replace(v,"-ms-"+v+"box")+";"+c}return c+";";case 938:if(c.charCodeAt(5)===45)switch(c.charCodeAt(6)){case 105:return v=c.replace("-items",""),"-webkit-"+c+"-webkit-box-"+v+"-ms-flex-"+v+c;case 115:return"-webkit-"+c+"-ms-flex-item-"+c.replace(oe,"")+c;default:return"-webkit-"+c+"-ms-flex-line-pack"+c.replace("align-content","").replace(oe,"")+c}break;case 973:case 989:if(c.charCodeAt(3)!==45||c.charCodeAt(4)===122)break;case 931:case 953:if(Ce.test(k)===!0)return(v=k.substring(k.indexOf(":")+1)).charCodeAt(0)===115?a(k.replace("stretch","fill-available"),A,O,_).replace(":fill-available",":stretch"):c.replace(v,"-webkit-"+v)+c.replace(v,"-moz-"+v.replace("fill-",""))+c;break;case 962:if(c="-webkit-"+c+(c.charCodeAt(5)===102?"-ms-"+c:"")+c,O+_===211&&c.charCodeAt(13)===105&&0<c.indexOf("transform",10))return c.substring(0,c.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+c}return c}function o(k,A){var O=k.indexOf(A===1?":":"{"),_=k.substring(0,A!==3?O:10);return O=k.substring(O+1,k.length-1),Ze(A!==2?_:_.replace(_e,"$1"),O,A)}function i(k,A){var O=a(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return O!==A+";"?O.replace(ge," or ($1)").substring(4):"("+A+")"}function l(k,A,O,_,c,U,v,X,j,H){for(var D=0,K=A,re;D<de;++D)switch(re=Ae[D].call(d,k,K,O,_,c,U,v,X,j,H)){case void 0:case!1:case!0:case null:break;default:K=re}if(K!==A)return K}function u(k){switch(k){case void 0:case null:de=Ae.length=0;break;default:if(typeof k=="function")Ae[de++]=k;else if(typeof k=="object")for(var A=0,O=k.length;A<O;++A)u(k[A]);else Fe=!!k|0}return u}function f(k){return k=k.prefix,k!==void 0&&(Ze=null,k?typeof k!="function"?le=1:(le=2,Ze=k):le=0),f}function d(k,A){var O=k;if(33>O.charCodeAt(0)&&(O=O.trim()),V=O,O=[V],0<de){var _=l(-1,A,O,O,ue,ie,0,0,0,0);_!==void 0&&typeof _=="string"&&(A=_)}var c=t(Ke,O,A,0,0);return 0<de&&(_=l(-2,c,O,O,ue,ie,c.length,0,0,0),_!==void 0&&(c=_)),V="",ye=0,ie=ue=1,c}var b=/^\0+/g,T=/[\0\r\f]/g,x=/: */g,S=/zoo|gra/,m=/([,: ])(transform)/g,E=/,\r+?/g,L=/([\t\r\n ])*\f?&/g,w=/@(k\w+)\s*(\S*)\s*/,R=/::(place)/g,I=/:(read-only)/g,h=/[svh]\w+-[tblr]{2}/,B=/\(\s*(.*)\s*\)/g,ge=/([\s\S]*?);/g,oe=/-self|flex-/g,_e=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Ce=/stretch|:\s*\w+\-(?:conte|avail)/,Q=/([^-])(image-set\()/,ie=1,ue=1,ye=0,le=1,Ke=[],Ae=[],de=0,Ze=null,Fe=0,V="";return d.use=u,d.set=f,e!==void 0&&f(e),d}var Ui={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ji(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var $i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,oa=ji(function(e){return $i.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Cn={exports:{}},Y={};var ia;function Hi(){if(ia)return Y;ia=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,b=e?Symbol.for("react.suspense"):60113,T=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,E=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,w=e?Symbol.for("react.scope"):60119;function R(h){if(typeof h=="object"&&h!==null){var B=h.$$typeof;switch(B){case t:switch(h=h.type,h){case u:case f:case r:case o:case a:case b:return h;default:switch(h=h&&h.$$typeof,h){case l:case d:case S:case x:case i:return h;default:return B}}case n:return B}}}function I(h){return R(h)===f}return Y.AsyncMode=u,Y.ConcurrentMode=f,Y.ContextConsumer=l,Y.ContextProvider=i,Y.Element=t,Y.ForwardRef=d,Y.Fragment=r,Y.Lazy=S,Y.Memo=x,Y.Portal=n,Y.Profiler=o,Y.StrictMode=a,Y.Suspense=b,Y.isAsyncMode=function(h){return I(h)||R(h)===u},Y.isConcurrentMode=I,Y.isContextConsumer=function(h){return R(h)===l},Y.isContextProvider=function(h){return R(h)===i},Y.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===t},Y.isForwardRef=function(h){return R(h)===d},Y.isFragment=function(h){return R(h)===r},Y.isLazy=function(h){return R(h)===S},Y.isMemo=function(h){return R(h)===x},Y.isPortal=function(h){return R(h)===n},Y.isProfiler=function(h){return R(h)===o},Y.isStrictMode=function(h){return R(h)===a},Y.isSuspense=function(h){return R(h)===b},Y.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===r||h===f||h===o||h===a||h===b||h===T||typeof h=="object"&&h!==null&&(h.$$typeof===S||h.$$typeof===x||h.$$typeof===i||h.$$typeof===l||h.$$typeof===d||h.$$typeof===E||h.$$typeof===L||h.$$typeof===w||h.$$typeof===m)},Y.typeOf=R,Y}var sa;function Yi(){return sa||(sa=1,Cn.exports=Hi()),Cn.exports}var kn,la;function Wi(){if(la)return kn;la=1;var e=Yi(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=r,o[e.Memo]=a;function i(S){return e.isMemo(S)?a:o[S.$$typeof]||t}var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,T=Object.prototype;function x(S,m,E){if(typeof m!="string"){if(T){var L=b(m);L&&L!==T&&x(S,L,E)}var w=u(m);f&&(w=w.concat(f(m)));for(var R=i(S),I=i(m),h=0;h<w.length;++h){var B=w[h];if(!n[B]&&!(E&&E[B])&&!(I&&I[B])&&!(R&&R[B])){var ge=d(m,B);try{l(S,B,ge)}catch{}}}}return S}return kn=x,kn}var Gi=Wi();const Bi=Va(Gi);var to={},we={};function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ca=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},jn=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!eo.typeOf(e)},Zt=Object.freeze([]),Be=Object.freeze({});function kt(e){return typeof e=="function"}function fa(e){return e.displayName||e.name||"Component"}function dr(e){return e&&typeof e.styledComponentId=="string"}var mt=typeof to<"u"&&we!==void 0&&(we.REACT_APP_SC_ATTR||we.SC_ATTR)||"data-styled",mr=typeof window<"u"&&"HTMLElement"in window,Xi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof to<"u"&&we!==void 0&&(we.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&we.REACT_APP_SC_DISABLE_SPEEDY!==""?we.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&we.REACT_APP_SC_DISABLE_SPEEDY:we.SC_DISABLE_SPEEDY!==void 0&&we.SC_DISABLE_SPEEDY!==""&&we.SC_DISABLE_SPEEDY!=="false"&&we.SC_DISABLE_SPEEDY)),qi={};function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Vi=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,i=o;n>=i;)(i<<=1)<0&&It(16,""+n);this.groupSizes=new Uint32Array(i),this.groupSizes.set(a),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),f=0,d=r.length;f<d;f++)this.tag.insertRule(u,r[f])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),o=a+r;this.groupSizes[n]=0;for(var i=a;i<o;i++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],o=this.indexOfGroup(n),i=o+a,l=o;l<i;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),qt=new Map,Jt=new Map,xt=1,Ht=function(e){if(qt.has(e))return qt.get(e);for(;Jt.has(xt);)xt++;var t=xt++;return qt.set(e,t),Jt.set(t,e),t},Ki=function(e){return Jt.get(e)},Zi=function(e,t){t>=xt&&(xt=t+1),qt.set(e,t),Jt.set(t,e)},Ji="style["+mt+'][data-styled-version="5.3.11"]',Qi=new RegExp("^"+mt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),es=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},ts=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,o=n.length;a<o;a++){var i=n[a].trim();if(i){var l=i.match(Qi);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(Zi(f,u),es(e,f,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},ns=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},no=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){for(var u=l.childNodes,f=u.length;f>=0;f--){var d=u[f];if(d&&d.nodeType===1&&d.hasAttribute(mt))return d}}(n),o=a!==void 0?a.nextSibling:null;r.setAttribute(mt,"active"),r.setAttribute("data-styled-version","5.3.11");var i=ns();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},rs=function(){function e(n){var r=this.element=no(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var o=document.styleSheets,i=0,l=o.length;i<l;i++){var u=o[i];if(u.ownerNode===a)return u}It(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),as=function(){function e(n){var r=this.element=no(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(a,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),os=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ua=mr,is={isServer:!mr,useCSSOMInjection:!Xi},Qt=function(){function e(n,r,a){n===void 0&&(n=Be),r===void 0&&(r={}),this.options=Le({},is,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&mr&&ua&&(ua=!1,function(o){for(var i=document.querySelectorAll(Ji),l=0,u=i.length;l<u;l++){var f=i[l];f&&f.getAttribute(mt)!=="active"&&(ts(o,f),f.parentNode&&f.parentNode.removeChild(f))}}(this))}e.registerId=function(n){return Ht(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Le({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,o=r.useCSSOMInjection,i=r.target,n=a?new os(i):o?new rs(i):new as(i),new Vi(n)));var n,r,a,o,i},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ht(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(Ht(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ht(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,o="",i=0;i<a;i++){var l=Ki(i);if(l!==void 0){var u=n.names.get(l),f=r.getGroup(i);if(u&&f&&u.size){var d=mt+".g"+i+'[id="'+l+'"]',b="";u!==void 0&&u.forEach(function(T){T.length>0&&(b+=T+",")}),o+=""+f+d+'{content:"'+b+`"}/*!sc*/
`}}}return o}(this)},e}(),ss=/(a)(d)/gi,da=function(e){return String.fromCharCode(e+(e>25?39:97))};function $n(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=da(t%52)+n;return(da(t%52)+n).replace(ss,"$1-$2")}var ct=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ro=function(e){return ct(5381,e)};function ao(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(kt(n)&&!dr(n))return!1}return!0}var ls=ro("5.3.11"),cs=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ao(t),this.componentId=n,this.baseHash=ct(ls,n),this.baseStyle=r,Qt.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))o.push(this.staticRulesId);else{var i=nt(this.rules,t,n,r).join(""),l=$n(ct(this.baseHash,i)>>>0);if(!n.hasNameForId(a,l)){var u=r(i,"."+l,void 0,a);n.insertRules(a,l,u)}o.push(l),this.staticRulesId=l}else{for(var f=this.rules.length,d=ct(this.baseHash,r.hash),b="",T=0;T<f;T++){var x=this.rules[T];if(typeof x=="string")b+=x;else if(x){var S=nt(x,t,n,r),m=Array.isArray(S)?S.join(""):S;d=ct(d,m+T),b+=m}}if(b){var E=$n(d>>>0);if(!n.hasNameForId(a,E)){var L=r(b,"."+E,void 0,a);n.insertRules(a,E,L)}o.push(E)}}return o.join(" ")},e}(),fs=/^\s*\/\/.*$/gm,us=[":","[",".","#"];function ds(e){var t,n,r,a,o=Be,i=o.options,l=i===void 0?Be:i,u=o.plugins,f=u===void 0?Zt:u,d=new zi(l),b=[],T=function(m){function E(L){if(L)try{m(L+"}")}catch{}}return function(L,w,R,I,h,B,ge,oe,_e,Ce){switch(L){case 1:if(_e===0&&w.charCodeAt(0)===64)return m(w+";"),"";break;case 2:if(oe===0)return w+"/*|*/";break;case 3:switch(oe){case 102:case 112:return m(R[0]+w),"";default:return w+(Ce===0?"/*|*/":"")}case-2:w.split("/*|*/}").forEach(E)}}}(function(m){b.push(m)}),x=function(m,E,L){return E===0&&us.indexOf(L[n.length])!==-1||L.match(a)?m:"."+t};function S(m,E,L,w){w===void 0&&(w="&");var R=m.replace(fs,""),I=E&&L?L+" "+E+" { "+R+" }":R;return t=w,n=E,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),d(L||!E?"":E,I)}return d.use([].concat(f,[function(m,E,L){m===2&&L.length&&L[0].lastIndexOf(n)>0&&(L[0]=L[0].replace(r,x))},T,function(m){if(m===-2){var E=b;return b=[],E}}])),S.hash=f.length?f.reduce(function(m,E){return E.name||It(15),ct(m,E.name)},5381).toString():"",S}var oo=ot.createContext();oo.Consumer;var io=ot.createContext(),ms=(io.Consumer,new Qt),Hn=ds();function so(){return tt.useContext(oo)||ms}function lo(){return tt.useContext(io)||Hn}var ps=function(){function e(t,n){var r=this;this.inject=function(a,o){o===void 0&&(o=Hn);var i=r.name+o.hash;a.hasNameForId(r.id,i)||a.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.toString=function(){return It(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Hn),this.name+t.hash},e}(),hs=/([A-Z])/,gs=/([A-Z])/g,ys=/^ms-/,bs=function(e){return"-"+e.toLowerCase()};function ma(e){return hs.test(e)?e.replace(gs,bs).replace(ys,"-ms-"):e}var pa=function(e){return e==null||e===!1||e===""};function nt(e,t,n,r){if(Array.isArray(e)){for(var a,o=[],i=0,l=e.length;i<l;i+=1)(a=nt(e[i],t,n,r))!==""&&(Array.isArray(a)?o.push.apply(o,a):o.push(a));return o}if(pa(e))return"";if(dr(e))return"."+e.styledComponentId;if(kt(e)){if(typeof(f=e)!="function"||f.prototype&&f.prototype.isReactComponent||!t)return e;var u=e(t);return nt(u,t,n,r)}var f;return e instanceof ps?n?(e.inject(n,r),e.getName(r)):e:jn(e)?function d(b,T){var x,S,m=[];for(var E in b)b.hasOwnProperty(E)&&!pa(b[E])&&(Array.isArray(b[E])&&b[E].isCss||kt(b[E])?m.push(ma(E)+":",b[E],";"):jn(b[E])?m.push.apply(m,d(b[E],E)):m.push(ma(E)+": "+(x=E,(S=b[E])==null||typeof S=="boolean"||S===""?"":typeof S!="number"||S===0||x in Ui||x.startsWith("--")?String(S).trim():S+"px")+";"));return T?[T+" {"].concat(m,["}"]):m}(e):e.toString()}var ha=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function co(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return kt(e)||jn(e)?ha(nt(ca(Zt,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ha(nt(ca(e,n)))}var fo=function(e,t,n){return n===void 0&&(n=Be),e.theme!==n.theme&&e.theme||t||n.theme},vs=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,As=/(^-|-$)/g;function Pn(e){return e.replace(vs,"-").replace(As,"")}var uo=function(e){return $n(ro(e)>>>0)};function Yt(e){return typeof e=="string"&&!0}var Yn=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ss=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ts(e,t,n){var r=e[n];Yn(t)&&Yn(r)?mo(r,t):e[n]=t}function mo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,o=n;a<o.length;a++){var i=o[a];if(Yn(i))for(var l in i)Ss(l)&&Ts(e,i[l],l)}return e}var pr=ot.createContext();pr.Consumer;var Rn={};function po(e,t,n){var r=dr(e),a=!Yt(e),o=t.attrs,i=o===void 0?Zt:o,l=t.componentId,u=l===void 0?function(w,R){var I=typeof w!="string"?"sc":Pn(w);Rn[I]=(Rn[I]||0)+1;var h=I+"-"+uo("5.3.11"+I+Rn[I]);return R?R+"-"+h:h}(t.displayName,t.parentComponentId):l,f=t.displayName,d=f===void 0?function(w){return Yt(w)?"styled."+w:"Styled("+fa(w)+")"}(e):f,b=t.displayName&&t.componentId?Pn(t.displayName)+"-"+t.componentId:t.componentId||u,T=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,x=t.shouldForwardProp;r&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(w,R,I){return e.shouldForwardProp(w,R,I)&&t.shouldForwardProp(w,R,I)}:e.shouldForwardProp);var S,m=new cs(n,b,r?e.componentStyle:void 0),E=m.isStatic&&i.length===0,L=function(w,R){return function(I,h,B,ge){var oe=I.attrs,_e=I.componentStyle,Ce=I.defaultProps,Q=I.foldedComponentIds,ie=I.shouldForwardProp,ue=I.styledComponentId,ye=I.target,le=function(_,c,U){_===void 0&&(_=Be);var v=Le({},c,{theme:_}),X={};return U.forEach(function(j){var H,D,K,re=j;for(H in kt(re)&&(re=re(v)),re)v[H]=X[H]=H==="className"?(D=X[H],K=re[H],D&&K?D+" "+K:D||K):re[H]}),[v,X]}(fo(h,tt.useContext(pr),Ce)||Be,h,oe),Ke=le[0],Ae=le[1],de=function(_,c,U,v){var X=so(),j=lo(),H=c?_.generateAndInjectStyles(Be,X,j):_.generateAndInjectStyles(U,X,j);return H}(_e,ge,Ke),Ze=B,Fe=Ae.$as||h.$as||Ae.as||h.as||ye,V=Yt(Fe),k=Ae!==h?Le({},h,{},Ae):h,A={};for(var O in k)O[0]!=="$"&&O!=="as"&&(O==="forwardedAs"?A.as=k[O]:(ie?ie(O,oa,Fe):!V||oa(O))&&(A[O]=k[O]));return h.style&&Ae.style!==h.style&&(A.style=Le({},h.style,{},Ae.style)),A.className=Array.prototype.concat(Q,ue,de!==ue?de:null,h.className,Ae.className).filter(Boolean).join(" "),A.ref=Ze,tt.createElement(Fe,A)}(S,w,R,E)};return L.displayName=d,(S=ot.forwardRef(L)).attrs=T,S.componentStyle=m,S.displayName=d,S.shouldForwardProp=x,S.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Zt,S.styledComponentId=b,S.target=r?e.target:e,S.withComponent=function(w){var R=t.componentId,I=function(B,ge){if(B==null)return{};var oe,_e,Ce={},Q=Object.keys(B);for(_e=0;_e<Q.length;_e++)oe=Q[_e],ge.indexOf(oe)>=0||(Ce[oe]=B[oe]);return Ce}(t,["componentId"]),h=R&&R+"-"+(Yt(w)?w:Pn(fa(w)));return po(w,Le({},I,{attrs:T,componentId:h}),n)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?mo({},e.defaultProps,w):w}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),a&&Bi(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var Wn=function(e){return function t(n,r,a){if(a===void 0&&(a=Be),!eo.isValidElementType(r))return It(1,String(r));var o=function(){return n(r,a,co.apply(void 0,arguments))};return o.withConfig=function(i){return t(n,r,Le({},a,{},i))},o.attrs=function(i){return t(n,r,Le({},a,{attrs:Array.prototype.concat(a.attrs,i).filter(Boolean)}))},o}(po,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Wn[e]=Wn(e)});var Es=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=ao(n),Qt.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,a,o){var i=o(nt(this.rules,r,a,o).join(""),""),l=this.componentId+n;a.insertRules(l,l,i)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,a,o){n>2&&Qt.registerId(this.componentId+n),this.removeStyles(n,a),this.createStyles(n,r,a,o)},e}();function Vc(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=co.apply(void 0,[e].concat(n)),o="sc-global-"+uo(JSON.stringify(a)),i=new Es(a,o);function l(f){var d=so(),b=lo(),T=tt.useContext(pr),x=tt.useRef(d.allocateGSInstance(o)).current;return d.server&&u(x,f,d,T,b),tt.useLayoutEffect(function(){if(!d.server)return u(x,f,d,T,b),function(){return i.removeStyles(x,d)}},[x,f,d,T,b]),null}function u(f,d,b,T,x){if(i.isStatic)i.renderStyles(f,qi,b,x);else{var S=Le({},d,{theme:fo(d,T,l.defaultProps)});i.renderStyles(f,S,b,x)}}return ot.memo(l)}const _s="#8c1d40",xs="#ffc627",ga="#ffffff",ya="#000000",ba="#191919",Kc="#BFBFBF",Zc="#d0d0d0",Jc="#e8e8e8",ws="#bfbfbf",Qc="#495057",Os=Wn.a`
  font-family:
    Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif;
  color: ${ba};
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
    color: ${ya} !important;
  }
  &.button-gold {
    background-color: ${xs} !important;
    color: ${ya} !important;
  }
  &.button-dark {
    background-color: ${ba} !important;
    color: ${ga} !important;
  }
  &.button-maroon {
    background-color: ${_s} !important;
    color: ${ga} !important;
  }
`,ho=({href:e,color:t,text:n,classes:r,onClick:a,onKeyDown:o,onFocus:i,as:l,...u})=>Ct.jsx(Os,{href:e,className:`button-${t} ${r??""}`,onClick:a,onKeyDown:o,onFocus:i,as:l,...u,children:n});ho.propTypes={...ur};ho.__docgenInfo={description:`A reusable button component that renders a ButtonWrapper with customizable properties.

@param {Object} props - The component props
@param {string} [props.href] - The URL to navigate to when the button is clicked (for link buttons)
@param {string} props.color - The color variant for the button styling
@param {string} props.text - The text content to display inside the button
@param {string} [props.classes] - Additional CSS classes to apply to the button
@param {function} [props.onClick] - Event handler function called when the button is clicked
@param {function} [props.onKeyDown] - Event handler function called when a key is pressed while the button is focused
@param {function} [props.onFocus] - Event handler function called when the button receives focus
@param {string|React.Component} [props.as] - The element type or component to render as
@returns {JSX.Element} The rendered button component`,methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!1},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},onFocus:{description:"",type:{name:"func"},required:!1}}};const Cs={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},ef=Cs,ks={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},tf=ks,nf={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Ps={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},rf=Ps;function Rs(e,t,n){return(t=Ns(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?va(Object(n),!0).forEach(function(r){Rs(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):va(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Is(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ns(e){var t=Is(e,"string");return typeof t=="symbol"?t:t+""}const Aa=()=>{};let hr={},go={},yo=null,bo={mark:Aa,measure:Aa};try{typeof window<"u"&&(hr=window),typeof document<"u"&&(go=document),typeof MutationObserver<"u"&&(yo=MutationObserver),typeof performance<"u"&&(bo=performance)}catch{}const{userAgent:Sa=""}=hr.navigator||{},Xe=hr,q=go,Ta=yo,Wt=bo;Xe.document;const Ye=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",vo=~Sa.indexOf("MSIE")||~Sa.indexOf("Trident/");var Ls=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ms=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ao={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ds={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},So=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],fe="classic",rn="duotone",Fs="sharp",zs="sharp-duotone",To=[fe,rn,Fs,zs],Us={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},js={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},$s=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Hs={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ys=["fak","fa-kit","fakd","fa-kit-duotone"],Ea={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ws=["kit"],Gs={kit:{"fa-kit":"fak"}},Bs=["fak","fakd"],Xs={kit:{fak:"fa-kit"}},_a={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qs=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Vs=["fak","fa-kit","fakd","fa-kit-duotone"],Ks={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Zs={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Js={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Gn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Qs=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Bn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...qs,...Qs],el=["solid","regular","light","thin","duotone","brands"],Eo=[1,2,3,4,5,6,7,8,9,10],tl=Eo.concat([11,12,13,14,15,16,17,18,19,20]),nl=[...Object.keys(Js),...el,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gt.GROUP,Gt.SWAP_OPACITY,Gt.PRIMARY,Gt.SECONDARY].concat(Eo.map(e=>"".concat(e,"x"))).concat(tl.map(e=>"w-".concat(e))),rl={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const $e="___FONT_AWESOME___",Xn=16,_o="fa",xo="svg-inline--fa",rt="data-fa-i2svg",qn="data-fa-pseudo-element",al="data-fa-pseudo-element-pending",gr="data-prefix",yr="data-icon",xa="fontawesome-i2svg",ol="async",il=["HTML","HEAD","STYLE","SCRIPT"],wo=(()=>{try{return!0}catch{return!1}})();function Nt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[fe]}})}const Oo=g({},Ao);Oo[fe]=g(g(g(g({},{"fa-duotone":"duotone"}),Ao[fe]),Ea.kit),Ea["kit-duotone"]);const sl=Nt(Oo),Vn=g({},Hs);Vn[fe]=g(g(g(g({},{duotone:"fad"}),Vn[fe]),_a.kit),_a["kit-duotone"]);const wa=Nt(Vn),Kn=g({},Gn);Kn[fe]=g(g({},Kn[fe]),Xs.kit);const br=Nt(Kn),Zn=g({},Zs);Zn[fe]=g(g({},Zn[fe]),Gs.kit);Nt(Zn);const ll=Ls,Co="fa-layers-text",cl=Ms,fl=g({},Us);Nt(fl);const ul=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],In=Ds,dl=[...Ws,...nl],wt=Xe.FontAwesomeConfig||{};function ml(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function pl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}q&&typeof q.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=pl(ml(n));a!=null&&(wt[r]=a)});const ko={styleDefault:"solid",familyDefault:fe,cssPrefix:_o,replacementClass:xo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wt.familyPrefix&&(wt.cssPrefix=wt.familyPrefix);const pt=g(g({},ko),wt);pt.autoReplaceSvg||(pt.observeMutations=!1);const P={};Object.keys(ko).forEach(e=>{Object.defineProperty(P,e,{enumerable:!0,set:function(t){pt[e]=t,Ot.forEach(n=>n(P))},get:function(){return pt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){pt.cssPrefix=e,Ot.forEach(t=>t(P))},get:function(){return pt.cssPrefix}});Xe.FontAwesomeConfig=P;const Ot=[];function hl(e){return Ot.push(e),()=>{Ot.splice(Ot.indexOf(e),1)}}const Ge=Xn,Me={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gl(e){if(!e||!Ye)return;const t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=q.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return q.head.insertBefore(t,r),e}const yl="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pt(){let e=12,t="";for(;e-- >0;)t+=yl[Math.random()*62|0];return t}function gt(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function vr(e){return e.classList?gt(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Po(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bl(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Po(e[n]),'" '),"").trim()}function an(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Ar(e){return e.size!==Me.size||e.x!==Me.x||e.y!==Me.y||e.rotate!==Me.rotate||e.flipX||e.flipY}function vl(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(o," ").concat(i," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:u,path:f}}function Al(e){let{transform:t,width:n=Xn,height:r=Xn,startCentered:a=!1}=e,o="";return a&&vo?o+="translate(".concat(t.x/Ge-n/2,"em, ").concat(t.y/Ge-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/Ge,"em), calc(-50% + ").concat(t.y/Ge,"em)) "):o+="translate(".concat(t.x/Ge,"em, ").concat(t.y/Ge,"em) "),o+="scale(".concat(t.size/Ge*(t.flipX?-1:1),", ").concat(t.size/Ge*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Sl=`:root, :host {
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
}`;function Ro(){const e=_o,t=xo,n=P.cssPrefix,r=P.replacementClass;let a=Sl;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(r))}return a}let Oa=!1;function Nn(){P.autoAddCss&&!Oa&&(gl(Ro()),Oa=!0)}var Tl={mixout(){return{dom:{css:Ro,insertCss:Nn}}},hooks(){return{beforeDOMElementCreation(){Nn()},beforeI2svg(){Nn()}}}};const He=Xe||{};He[$e]||(He[$e]={});He[$e].styles||(He[$e].styles={});He[$e].hooks||(He[$e].hooks={});He[$e].shims||(He[$e].shims=[]);var De=He[$e];const Io=[],No=function(){q.removeEventListener("DOMContentLoaded",No),en=1,Io.map(e=>e())};let en=!1;Ye&&(en=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),en||q.addEventListener("DOMContentLoaded",No));function El(e){Ye&&(en?setTimeout(e,0):Io.push(e))}function Lt(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Po(e):"<".concat(t," ").concat(bl(n),">").concat(r.map(Lt).join(""),"</").concat(t,">")}function Ca(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ln=function(t,n,r,a){var o=Object.keys(t),i=o.length,l=n,u,f,d;for(r===void 0?(u=1,d=t[o[0]]):(u=0,d=r);u<i;u++)f=o[u],d=l(d,t[f],f,t);return d};function _l(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Jn(e){const t=_l(e);return t.length===1?t[0].toString(16):null}function xl(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ka(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Qn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=ka(t);typeof De.hooks.addPack=="function"&&!r?De.hooks.addPack(e,ka(t)):De.styles[e]=g(g({},De.styles[e]||{}),a),e==="fas"&&Qn("fa",t)}const{styles:Rt,shims:wl}=De,Lo=Object.keys(br),Ol=Lo.reduce((e,t)=>(e[t]=Object.keys(br[t]),e),{});let Sr=null,Mo={},Do={},Fo={},zo={},Uo={};function Cl(e){return~dl.indexOf(e)}function kl(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Cl(a)?a:null}const jo=()=>{const e=r=>Ln(Rt,(a,o,i)=>(a[i]=Ln(o,r,{}),a),{});Mo=e((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),Do=e((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),Uo=e((r,a,o)=>{const i=a[2];return r[o]=o,i.forEach(l=>{r[l]=o}),r});const t="far"in Rt||P.autoFetchSvg,n=Ln(wl,(r,a)=>{const o=a[0];let i=a[1];const l=a[2];return i==="far"&&!t&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:l}),r},{names:{},unicodes:{}});Fo=n.names,zo=n.unicodes,Sr=on(P.styleDefault,{family:P.familyDefault})};hl(e=>{Sr=on(e.styleDefault,{family:P.familyDefault})});jo();function Tr(e,t){return(Mo[e]||{})[t]}function Pl(e,t){return(Do[e]||{})[t]}function et(e,t){return(Uo[e]||{})[t]}function $o(e){return Fo[e]||{prefix:null,iconName:null}}function Rl(e){const t=zo[e],n=Tr("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qe(){return Sr}const Ho=()=>({prefix:null,iconName:null,rest:[]});function Il(e){let t=fe;const n=Lo.reduce((r,a)=>(r[a]="".concat(P.cssPrefix,"-").concat(a),r),{});return To.forEach(r=>{(e.includes(n[r])||e.some(a=>Ol[r].includes(a)))&&(t=r)}),t}function on(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=fe}=t,r=sl[n][e];if(n===rn&&!e)return"fad";const a=wa[n][e]||wa[n][r],o=e in De.styles?e:null;return a||o||null}function Nl(e){let t=[],n=null;return e.forEach(r=>{const a=kl(P.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function Pa(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function sn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=Bn.concat(Vs),o=Pa(e.filter(b=>a.includes(b))),i=Pa(e.filter(b=>!Bn.includes(b))),l=o.filter(b=>(r=b,!So.includes(b))),[u=null]=l,f=Il(o),d=g(g({},Nl(i)),{},{prefix:on(u,{family:f})});return g(g(g({},d),Fl({values:e,family:f,styles:Rt,config:P,canonical:d,givenPrefix:r})),Ll(n,r,d))}function Ll(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const o=t==="fa"?$o(a):{},i=et(r,a);return a=o.iconName||i||a,r=o.prefix||r,r==="far"&&!Rt.far&&Rt.fas&&!P.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const Ml=To.filter(e=>e!==fe||e!==rn),Dl=Object.keys(Gn).filter(e=>e!==fe).map(e=>Object.keys(Gn[e])).flat();function Fl(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:o={},config:i={}}=e,l=n===rn,u=t.includes("fa-duotone")||t.includes("fad"),f=i.familyDefault==="duotone",d=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(u||f||d)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Ml.includes(n)&&(Object.keys(o).find(T=>Dl.includes(T))||i.autoFetchSvg)){const T=$s.get(n).defaultShortPrefixId;r.prefix=T,r.iconName=et(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=qe()||"fas"),r}class zl{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=g(g({},this.definitions[o]||{}),a[o]),Qn(o,a[o]);const i=br[fe][o];i&&Qn(i,a[o]),jo()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:i,icon:l}=r[a],u=l[2];t[o]||(t[o]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(t[o][f]=l)}),t[o][i]=l}),t}}let Ra=[],ft={};const dt={},Ul=Object.keys(dt);function jl(e,t){let{mixoutsTo:n}=t;return Ra=e,ft={},Object.keys(dt).forEach(r=>{Ul.indexOf(r)===-1&&delete dt[r]}),Ra.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(i=>{ft[i]||(ft[i]=[]),ft[i].push(o[i])})}r.provides&&r.provides(dt)}),n}function er(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(ft[e]||[]).forEach(i=>{t=i.apply(null,[t,...r])}),t}function at(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(ft[e]||[]).forEach(o=>{o.apply(null,n)})}function Ve(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return dt[e]?dt[e].apply(null,t):void 0}function tr(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||qe();if(t)return t=et(n,t)||t,Ca(Yo.definitions,n,t)||Ca(De.styles,n,t)}const Yo=new zl,$l=()=>{P.autoReplaceSvg=!1,P.observeMutations=!1,at("noAuto")},Hl={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(at("beforeI2svg",e),Ve("pseudoElements2svg",e),Ve("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,El(()=>{Wl({autoReplaceSvgRoot:t}),at("watch",e)})}},Yl={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:et(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=on(e[0]);return{prefix:n,iconName:et(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(ll))){const t=sn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||qe(),iconName:et(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=qe();return{prefix:t,iconName:et(t,e)||e}}}},Ee={noAuto:$l,config:P,dom:Hl,parse:Yl,library:Yo,findIconDefinition:tr,toHtml:Lt},Wl=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=q}=e;(Object.keys(De.styles).length>0||P.autoFetchSvg)&&Ye&&P.autoReplaceSvg&&Ee.dom.i2svg({node:t})};function ln(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Lt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Ye)return;const n=q.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Gl(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:i}=e;if(Ar(i)&&n.found&&!r.found){const{width:l,height:u}=n,f={x:l/u/2,y:.5};a.style=an(g(g({},o),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Bl(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;const i=o===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},a),{},{id:i}),children:r}]}]}function Er(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:l,maskId:u,titleId:f,extra:d,watchable:b=!1}=e,{width:T,height:x}=n.found?n:t,S=Bs.includes(r),m=[P.replacementClass,a?"".concat(P.cssPrefix,"-").concat(a):""].filter(h=>d.classes.indexOf(h)===-1).filter(h=>h!==""||!!h).concat(d.classes).join(" ");let E={children:[],attributes:g(g({},d.attributes),{},{"data-prefix":r,"data-icon":a,class:m,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(x)})};const L=S&&!~d.classes.indexOf("fa-fw")?{width:"".concat(T/x*16*.0625,"em")}:{};b&&(E.attributes[rt]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(f||Pt())},children:[l]}),delete E.attributes.title);const w=g(g({},E),{},{prefix:r,iconName:a,main:t,mask:n,maskId:u,transform:o,symbol:i,styles:g(g({},L),d.styles)}),{children:R,attributes:I}=n.found&&t.found?Ve("generateAbstractMask",w)||{children:[],attributes:{}}:Ve("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=R,w.attributes=I,i?Bl(w):Gl(w)}function Ia(e){const{content:t,width:n,height:r,transform:a,title:o,extra:i,watchable:l=!1}=e,u=g(g(g({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(u[rt]="");const f=g({},i.styles);Ar(a)&&(f.transform=Al({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);const d=an(f);d.length>0&&(u.style=d);const b=[];return b.push({tag:"span",attributes:u,children:[t]}),o&&b.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),b}function Xl(e){const{content:t,title:n,extra:r}=e,a=g(g(g({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=an(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Mn}=De;function nr(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(In.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(In.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(In.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const ql={found:!1,width:512,height:512};function Vl(e,t){!wo&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function rr(e,t){let n=t;return t==="fa"&&P.styleDefault!==null&&(t=qe()),new Promise((r,a)=>{if(n==="fa"){const o=$o(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Mn[t]&&Mn[t][e]){const o=Mn[t][e];return r(nr(o))}Vl(e,t),r(g(g({},ql),{},{icon:P.showMissingIcons&&e?Ve("missingIconAbstract")||{}:{}}))})}const Na=()=>{},ar=P.measurePerformance&&Wt&&Wt.mark&&Wt.measure?Wt:{mark:Na,measure:Na},_t='FA "6.7.2"',Kl=e=>(ar.mark("".concat(_t," ").concat(e," begins")),()=>Wo(e)),Wo=e=>{ar.mark("".concat(_t," ").concat(e," ends")),ar.measure("".concat(_t," ").concat(e),"".concat(_t," ").concat(e," begins"),"".concat(_t," ").concat(e," ends"))};var _r={begin:Kl,end:Wo};const Vt=()=>{};function La(e){return typeof(e.getAttribute?e.getAttribute(rt):null)=="string"}function Zl(e){const t=e.getAttribute?e.getAttribute(gr):null,n=e.getAttribute?e.getAttribute(yr):null;return t&&n}function Jl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Ql(){return P.autoReplaceSvg===!0?Kt.replace:Kt[P.autoReplaceSvg]||Kt.replace}function ec(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function tc(e){return q.createElement(e)}function Go(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?ec:tc}=t;if(typeof e=="string")return q.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Go(o,{ceFn:n}))}),r}function nc(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Kt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Go(n),t)}),t.getAttribute(rt)===null&&P.keepOriginalSource){let n=q.createComment(nc(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~vr(t).indexOf(P.replacementClass))return Kt.replace(e);const r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,l)=>(l===P.replacementClass||l.match(r)?i.toSvg.push(l):i.toNode.push(l),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>Lt(o)).join(`
`);t.setAttribute(rt,""),t.innerHTML=a}};function Ma(e){e()}function Bo(e,t){const n=typeof t=="function"?t:Vt;if(e.length===0)n();else{let r=Ma;P.mutateApproach===ol&&(r=Xe.requestAnimationFrame||Ma),r(()=>{const a=Ql(),o=_r.begin("mutate");e.map(a),o(),n()})}}let xr=!1;function Xo(){xr=!0}function or(){xr=!1}let tn=null;function Da(e){if(!Ta||!P.observeMutations)return;const{treeCallback:t=Vt,nodeCallback:n=Vt,pseudoElementsCallback:r=Vt,observeMutationsRoot:a=q}=e;tn=new Ta(o=>{if(xr)return;const i=qe();gt(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!La(l.addedNodes[0])&&(P.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&P.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&La(l.target)&&~ul.indexOf(l.attributeName))if(l.attributeName==="class"&&Zl(l.target)){const{prefix:u,iconName:f}=sn(vr(l.target));l.target.setAttribute(gr,u||i),f&&l.target.setAttribute(yr,f)}else Jl(l.target)&&n(l.target)})}),Ye&&tn.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function rc(){tn&&tn.disconnect()}function ac(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const o=a.split(":"),i=o[0],l=o.slice(1);return i&&l.length>0&&(r[i]=l.join(":").trim()),r},{})),n}function oc(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=sn(vr(e));return a.prefix||(a.prefix=qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Pl(a.prefix,e.innerText)||Tr(a.prefix,Jn(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ic(e){const t=gt(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Pt()):(t["aria-hidden"]="true",t.focusable="false")),t}function sc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Me,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=oc(e),o=ic(e),i=er("parseNodeAttributes",{},e);let l=t.styleParser?ac(e):[];return g({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Me,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},i)}const{styles:lc}=De;function qo(e){const t=P.autoReplaceSvg==="nest"?Fa(e,{styleParser:!1}):Fa(e);return~t.extra.classes.indexOf(Co)?Ve("generateLayersText",e,t):Ve("generateSvgReplacementMutation",e,t)}function cc(){return[...Ys,...Bn]}function za(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();const n=q.documentElement.classList,r=d=>n.add("".concat(xa,"-").concat(d)),a=d=>n.remove("".concat(xa,"-").concat(d)),o=P.autoFetchSvg?cc():So.concat(Object.keys(lc));o.includes("fa")||o.push("fa");const i=[".".concat(Co,":not([").concat(rt,"])")].concat(o.map(d=>".".concat(d,":not([").concat(rt,"])"))).join(", ");if(i.length===0)return Promise.resolve();let l=[];try{l=gt(e.querySelectorAll(i))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();const u=_r.begin("onTree"),f=l.reduce((d,b)=>{try{const T=qo(b);T&&d.push(T)}catch(T){wo||T.name==="MissingIcon"&&console.error(T)}return d},[]);return new Promise((d,b)=>{Promise.all(f).then(T=>{Bo(T,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),u(),d()})}).catch(T=>{u(),b(T)})})}function fc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qo(e).then(n=>{n&&Bo([n],t)})}function uc(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:tr(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:tr(a||{})),e(r,g(g({},n),{},{mask:a}))}}const dc=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Me,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:l=null,classes:u=[],attributes:f={},styles:d={}}=t;if(!e)return;const{prefix:b,iconName:T,icon:x}=e;return ln(g({type:"icon"},e),()=>(at("beforeDOMElementCreation",{iconDefinition:e,params:t}),P.autoA11y&&(i?f["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(l||Pt()):(f["aria-hidden"]="true",f.focusable="false")),Er({icons:{main:nr(x),mask:a?nr(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:T,transform:g(g({},Me),n),symbol:r,title:i,maskId:o,titleId:l,extra:{attributes:f,styles:d,classes:u}})))};var mc={mixout(){return{icon:uc(dc)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=za,e.nodeCallback=fc,e}}},provides(e){e.i2svg=function(t){const{node:n=q,callback:r=()=>{}}=t;return za(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:o,prefix:i,transform:l,symbol:u,mask:f,maskId:d,extra:b}=n;return new Promise((T,x)=>{Promise.all([rr(r,i),f.iconName?rr(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[m,E]=S;T([t,Er({icons:{main:m,mask:E},prefix:i,iconName:r,transform:l,symbol:u,maskId:d,title:a,titleId:o,extra:b,watchable:!0})])}).catch(x)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:o,styles:i}=t;const l=an(i);l.length>0&&(r.style=l);let u;return Ar(o)&&(u=Ve("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(u||a.icon),{children:n,attributes:r}}}},pc={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return ln({type:"layer"},()=>{at("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},hc={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return ln({type:"counter",content:e},()=>(at("beforeDOMElementCreation",{content:e,params:t}),Xl({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(P.cssPrefix,"-layers-counter"),...r]}})))}}}},gc={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Me,title:r=null,classes:a=[],attributes:o={},styles:i={}}=t;return ln({type:"text",content:e},()=>(at("beforeDOMElementCreation",{content:e,params:t}),Ia({content:e,transform:g(g({},Me),n),title:r,extra:{attributes:o,styles:i,classes:["".concat(P.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:o}=n;let i=null,l=null;if(vo){const u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/u,l=f.height/u}return P.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Ia({content:t.innerHTML,width:i,height:l,transform:a,title:r,extra:o,watchable:!0})])}}};const yc=new RegExp('"',"ug"),Ua=[1105920,1112319],ja=g(g(g(g({},{FontAwesome:{normal:"fas",400:"fas"}}),js),rl),Ks),ir=Object.keys(ja).reduce((e,t)=>(e[t.toLowerCase()]=ja[t],e),{}),bc=Object.keys(ir).reduce((e,t)=>{const n=ir[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function vc(e){const t=e.replace(yc,""),n=xl(t,0),r=n>=Ua[0]&&n<=Ua[1],a=t.length===2?t[0]===t[1]:!1;return{value:Jn(a?t[0]:t),isSecondary:r||a}}function Ac(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(ir[n]||{})[a]||bc[n]}function $a(e,t){const n="".concat(al).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const i=gt(e.children).filter(T=>T.getAttribute(qn)===t)[0],l=Xe.getComputedStyle(e,t),u=l.getPropertyValue("font-family"),f=u.match(cl),d=l.getPropertyValue("font-weight"),b=l.getPropertyValue("content");if(i&&!f)return e.removeChild(i),r();if(f&&b!=="none"&&b!==""){const T=l.getPropertyValue("content");let x=Ac(u,d);const{value:S,isSecondary:m}=vc(T),E=f[0].startsWith("FontAwesome");let L=Tr(x,S),w=L;if(E){const R=Rl(S);R.iconName&&R.prefix&&(L=R.iconName,x=R.prefix)}if(L&&!m&&(!i||i.getAttribute(gr)!==x||i.getAttribute(yr)!==w)){e.setAttribute(n,w),i&&e.removeChild(i);const R=sc(),{extra:I}=R;I.attributes[qn]=t,rr(L,x).then(h=>{const B=Er(g(g({},R),{},{icons:{main:h,mask:Ho()},prefix:x,iconName:w,extra:I,watchable:!0})),ge=q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=B.map(oe=>Lt(oe)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Sc(e){return Promise.all([$a(e,"::before"),$a(e,"::after")])}function Tc(e){return e.parentNode!==document.head&&!~il.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(qn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ha(e){if(Ye)return new Promise((t,n)=>{const r=gt(e.querySelectorAll("*")).filter(Tc).map(Sc),a=_r.begin("searchPseudoElements");Xo(),Promise.all(r).then(()=>{a(),or(),t()}).catch(()=>{a(),or(),n()})})}var Ec={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Ha,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=q}=t;P.searchPseudoElements&&Ha(n)}}};let Ya=!1;var _c={mixout(){return{dom:{unwatch(){Xo(),Ya=!0}}}},hooks(){return{bootstrap(){Da(er("mutationObserverCallbacks",{}))},noAuto(){rc()},watch(e){const{observeMutationsRoot:t}=e;Ya?or():Da(er("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Wa=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var xc={mixout(){return{parse:{transform:e=>Wa(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Wa(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:o}=t;const i={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},b={transform:"translate(".concat(o/2*-1," -256)")},T={outer:i,inner:d,path:b};return{tag:"g",attributes:g({},T.outer),children:[{tag:"g",attributes:g({},T.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:g(g({},n.icon.attributes),T.path)}]}]}}}};const Dn={x:0,y:0,width:"100%",height:"100%"};function Ga(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function wc(e){return e.tag==="g"?e.children:[e]}var Oc={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?sn(n.split(" ").map(a=>a.trim())):Ho();return r.prefix||(r.prefix=qe()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:l}=t;const{width:u,icon:f}=a,{width:d,icon:b}=o,T=vl({transform:l,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:g(g({},Dn),{},{fill:"white"})},S=f.children?{children:f.children.map(Ga)}:{},m={tag:"g",attributes:g({},T.inner),children:[Ga(g({tag:f.tag,attributes:g(g({},f.attributes),T.path)},S))]},E={tag:"g",attributes:g({},T.outer),children:[m]},L="mask-".concat(i||Pt()),w="clip-".concat(i||Pt()),R={tag:"mask",attributes:g(g({},Dn),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,E]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:wc(b)},R]};return n.push(I,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(L,")")},Dn)}),{children:n,attributes:r}}}},Cc={provides(e){let t=!1;Xe.matchMedia&&(t=Xe.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:g(g({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=g(g({},a),{},{attributeName:"opacity"}),i={tag:"circle",attributes:g(g({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:g(g({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:g(g({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:g(g({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:g(g({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},kc={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Pc=[Tl,mc,pc,hc,gc,Ec,_c,xc,Oc,Cc,kc];jl(Pc,{mixoutsTo:Ee});Ee.noAuto;Ee.config;Ee.library;Ee.dom;const sr=Ee.parse;Ee.findIconDefinition;Ee.toHtml;const Rc=Ee.icon;Ee.layer;Ee.text;Ee.counter;function Ba(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ba(Object(n),!0).forEach(function(r){ut(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ba(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nn(e){"@babel/helpers - typeof";return nn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nn(e)}function ut(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ic(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Nc(e,t){if(e==null)return{};var n=Ic(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function lr(e){return Lc(e)||Mc(e)||Dc(e)||Fc()}function Lc(e){if(Array.isArray(e))return cr(e)}function Mc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Dc(e,t){if(e){if(typeof e=="string")return cr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cr(e,t)}}function cr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Fc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zc(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,l=e.flash,u=e.spin,f=e.spinPulse,d=e.spinReverse,b=e.pulse,T=e.fixedWidth,x=e.inverse,S=e.border,m=e.listItem,E=e.flip,L=e.size,w=e.rotation,R=e.pull,I=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":f,"fa-pulse":b,"fa-fw":T,"fa-inverse":x,"fa-border":S,"fa-li":m,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},ut(t,"fa-".concat(L),typeof L<"u"&&L!==null),ut(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),ut(t,"fa-pull-".concat(R),typeof R<"u"&&R!==null),ut(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(I).map(function(h){return I[h]?h:null}).filter(function(h){return h})}function Uc(e){return e=e-0,e===e}function Vo(e){return Uc(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var jc=["style"];function $c(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Hc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Vo(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?t[$c(a)]=o:t[a]=o,t},{})}function Ko(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return Ko(e,u)}),a=Object.keys(t.attributes||{}).reduce(function(u,f){var d=t.attributes[f];switch(f){case"class":u.attrs.className=d,delete t.attributes.class;break;case"style":u.attrs.style=Hc(d);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=d:u.attrs[Vo(f)]=d}return u},{attrs:{}}),o=n.style,i=o===void 0?{}:o,l=Nc(n,jc);return a.attrs.style=Ne(Ne({},a.attrs.style),i),e.apply(void 0,[t.tag,Ne(Ne({},a.attrs),l)].concat(lr(r)))}var Zo=!1;try{Zo=!0}catch{}function Yc(){if(!Zo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Xa(e){if(e&&nn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(sr.icon)return sr.icon(e);if(e===null)return null;if(e&&nn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Fn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ut({},e,t):{}}var qa={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Jo=ot.forwardRef(function(e,t){var n=Ne(Ne({},qa),e),r=n.icon,a=n.mask,o=n.symbol,i=n.className,l=n.title,u=n.titleId,f=n.maskId,d=Xa(r),b=Fn("classes",[].concat(lr(zc(n)),lr((i||"").split(" ")))),T=Fn("transform",typeof n.transform=="string"?sr.transform(n.transform):n.transform),x=Fn("mask",Xa(a)),S=Rc(d,Ne(Ne(Ne(Ne({},b),T),x),{},{symbol:o,title:l,titleId:u,maskId:f}));if(!S)return Yc("Could not find icon",d),null;var m=S.abstract,E={ref:t};return Object.keys(n).forEach(function(L){qa.hasOwnProperty(L)||(E[L]=n[L])}),Wc(m[0],E)});Jo.displayName="FontAwesomeIcon";Jo.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var Wc=Ko.bind(null,ot.createElement);export{Vc as $,co as A,ho as B,Jo as F,qc as H,na as N,p as P,wn as T,Xc as a,Jc as b,ba as c,Zc as d,ga as e,nf as f,Qc as g,_s as h,tf as i,Ct as j,Kc as k,ur as l,xs as m,ef as n,rf as o,Ni as p,Wn as q,Mi as r,Bc as t};
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
