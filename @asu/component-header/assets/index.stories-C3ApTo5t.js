import{r as B,R as wt}from"./index-B2SEcK1p.js";import{g as uo}from"./_commonjsHelpers-B3tUAs5q.js";var fo={exports:{}},Sn={};var Hs=B,Ws=Symbol.for("react.element"),Ys=Symbol.for("react.fragment"),Bs=Object.prototype.hasOwnProperty,Gs=Hs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xs={key:!0,ref:!0,__self:!0,__source:!0};function po(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Bs.call(t,r)&&!Xs.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Ws,type:e,key:i,ref:o,props:a,_owner:Gs.current}}Sn.Fragment=Ys;Sn.jsx=po;Sn.jsxs=po;fo.exports=Sn;var p=fo.exports,mo={exports:{}},Vs="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ks=Vs,Zs=Ks;function ho(){}function go(){}go.resetWarningCache=ho;var Qs=function(){function e(r,a,i,o,l,f){if(f!==Zs){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:go,resetWarningCache:ho};return n.PropTypes=n,n};mo.exports=Qs();var Js=mo.exports;const d=uo(Js),Pa={alt:d.string,title:d.string,src:d.string,mobileSrc:d.string,brandLink:d.string},pn={baseUrl:d.string,parentOrg:d.string,parentOrgUrl:d.string,animate:d.bool},on={loggedIn:d.bool,loginLink:d.string,logoutLink:d.string,userName:d.string},kn={text:d.string.isRequired,color:d.oneOf(["gold","maroon","light","dark"]),href:d.string.isRequired,classes:d.string,onClick:d.func},yr=d.shape({id:d.number,href:d.string,text:d.string,type:d.string,selected:d.bool,items:d.arrayOf(d.arrayOf(d.object)),buttons:d.arrayOf(d.shape(kn)),class:d.string}),yo={isPartner:d.bool,navTree:d.arrayOf(yr),partnerLogo:d.shape(Pa),logo:d.shape(Pa),title:d.string,parentOrg:pn.parentOrg,parentOrgUrl:pn.parentOrgUrl,baseUrl:pn.baseUrl,loggedIn:on.loggedIn,userName:on.userName,loginLink:on.loginLink,onLoginClick:d.func,logoutLink:on.logoutLink,onLogoutClick:d.func,buttons:d.arrayOf(d.shape(kn)),breakpoint:d.oneOf(["Lg","Xl"]),animateTitle:d.bool,expandOnHover:d.bool,mobileNavTree:d.arrayOf(yr),hasNavigation:d.bool,searchUrl:d.string,site:d.string,renderDiv:d.oneOf(["true","false"])};var bo={exports:{}},G={};var Wr=Symbol.for("react.transitional.element"),Yr=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),En=Symbol.for("react.strict_mode"),_n=Symbol.for("react.profiler"),Cn=Symbol.for("react.consumer"),On=Symbol.for("react.context"),Pn=Symbol.for("react.forward_ref"),Nn=Symbol.for("react.suspense"),In=Symbol.for("react.suspense_list"),Ln=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),el=Symbol.for("react.offscreen"),tl=Symbol.for("react.client.reference");function Ie(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Wr:switch(e=e.type,e){case Tn:case _n:case En:case Nn:case In:return e;default:switch(e=e&&e.$$typeof,e){case On:case Pn:case Rn:case Ln:return e;case Cn:return e;default:return t}}case Yr:return t}}}G.ContextConsumer=Cn;G.ContextProvider=On;G.Element=Wr;G.ForwardRef=Pn;G.Fragment=Tn;G.Lazy=Rn;G.Memo=Ln;G.Portal=Yr;G.Profiler=_n;G.StrictMode=En;G.Suspense=Nn;G.SuspenseList=In;G.isContextConsumer=function(e){return Ie(e)===Cn};G.isContextProvider=function(e){return Ie(e)===On};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wr};G.isForwardRef=function(e){return Ie(e)===Pn};G.isFragment=function(e){return Ie(e)===Tn};G.isLazy=function(e){return Ie(e)===Rn};G.isMemo=function(e){return Ie(e)===Ln};G.isPortal=function(e){return Ie(e)===Yr};G.isProfiler=function(e){return Ie(e)===_n};G.isStrictMode=function(e){return Ie(e)===En};G.isSuspense=function(e){return Ie(e)===Nn};G.isSuspenseList=function(e){return Ie(e)===In};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Tn||e===_n||e===En||e===Nn||e===In||e===el||typeof e=="object"&&e!==null&&(e.$$typeof===Rn||e.$$typeof===Ln||e.$$typeof===On||e.$$typeof===Cn||e.$$typeof===Pn||e.$$typeof===tl||e.getModuleId!==void 0)};G.typeOf=Ie;bo.exports=G;var vo=bo.exports;function nl(e){function t(O,b,E,T,u){for(var $=0,v=0,X=0,q=0,H,D,ae=0,te=0,U,oe=U=H=0,j=0,ne=0,Me=0,se=0,it=E.length,ot=it-1,ve,M="",Y="",De="",ft="",Le;j<it;){if(D=E.charCodeAt(j),j===ot&&v+q+X+$!==0&&(v!==0&&(D=v===47?10:47),q=X=$=0,it++,ot++),v+q+X+$===0){if(j===ot&&(0<ne&&(M=M.replace(k,"")),0<M.trim().length)){switch(D){case 32:case 9:case 59:case 13:case 10:break;default:M+=E.charAt(j)}D=59}switch(D){case 123:for(M=M.trim(),H=M.charCodeAt(0),U=1,se=++j;j<it;){switch(D=E.charCodeAt(j)){case 123:U++;break;case 125:U--;break;case 47:switch(D=E.charCodeAt(j+1)){case 42:case 47:e:{for(oe=j+1;oe<ot;++oe)switch(E.charCodeAt(oe)){case 47:if(D===42&&E.charCodeAt(oe-1)===42&&j+2!==oe){j=oe+1;break e}break;case 10:if(D===47){j=oe+1;break e}}j=oe}}break;case 91:D++;case 40:D++;case 34:case 39:for(;j++<ot&&E.charCodeAt(j)!==D;);}if(U===0)break;j++}switch(U=E.substring(se,j),H===0&&(H=(M=M.replace(x,"").trim()).charCodeAt(0)),H){case 64:switch(0<ne&&(M=M.replace(k,"")),D=M.charCodeAt(1),D){case 100:case 109:case 115:case 45:ne=b;break;default:ne=rt}if(U=t(b,ne,U,D,u+1),se=U.length,0<be&&(ne=n(rt,M,Me),Le=l(3,U,ne,b,ye,de,se,D,u,T),M=ne.join(""),Le!==void 0&&(se=(U=Le.trim()).length)===0&&(D=0,U="")),0<se)switch(D){case 115:M=M.replace(ee,o);case 100:case 109:case 45:U=M+"{"+U+"}";break;case 107:M=M.replace(A,"$1 $2"),U=M+"{"+U+"}",U=me===1||me===2&&i("@"+U,3)?"@-webkit-"+U+"@"+U:"@"+U;break;default:U=M+U,T===112&&(U=(Y+=U,""))}else U="";break;default:U=t(b,n(b,M,Me),U,T,u+1)}De+=U,U=Me=ne=oe=H=0,M="",D=E.charCodeAt(++j);break;case 125:case 59:if(M=(0<ne?M.replace(k,""):M).trim(),1<(se=M.length))switch(oe===0&&(H=M.charCodeAt(0),H===45||96<H&&123>H)&&(se=(M=M.replace(" ",":")).length),0<be&&(Le=l(1,M,b,O,ye,de,Y.length,T,u,T))!==void 0&&(se=(M=Le.trim()).length)===0&&(M="\0\0"),H=M.charCodeAt(0),D=M.charCodeAt(1),H){case 0:break;case 64:if(D===105||D===99){ft+=M+E.charAt(j);break}default:M.charCodeAt(se-1)!==58&&(Y+=a(M,H,D,M.charCodeAt(2)))}Me=ne=oe=H=0,M="",D=E.charCodeAt(++j)}}switch(D){case 13:case 10:v===47?v=0:1+H===0&&T!==107&&0<M.length&&(ne=1,M+="\0"),0<be*We&&l(0,M,b,O,ye,de,Y.length,T,u,T),de=1,ye++;break;case 59:case 125:if(v+q+X+$===0){de++;break}default:switch(de++,ve=E.charAt(j),D){case 9:case 32:if(q+$+v===0)switch(ae){case 44:case 58:case 9:case 32:ve="";break;default:D!==32&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:q+v+$===0&&(ne=Me=1,ve="\f"+ve);break;case 108:if(q+v+$+Te===0&&0<oe)switch(j-oe){case 2:ae===112&&E.charCodeAt(j-3)===58&&(Te=ae);case 8:te===111&&(Te=te)}break;case 58:q+v+$===0&&(oe=j);break;case 44:v+X+q+$===0&&(ne=1,ve+="\r");break;case 34:case 39:v===0&&(q=q===D?0:q===0?D:q);break;case 91:q+v+X===0&&$++;break;case 93:q+v+X===0&&$--;break;case 41:q+v+$===0&&X--;break;case 40:if(q+v+$===0){if(H===0)switch(2*ae+3*te){case 533:break;default:H=1}X++}break;case 64:v+X+q+$+oe+U===0&&(U=1);break;case 42:case 47:if(!(0<q+$+X))switch(v){case 0:switch(2*D+3*E.charCodeAt(j+1)){case 235:v=47;break;case 220:se=j,v=42}break;case 42:D===47&&ae===42&&se+2!==j&&(E.charCodeAt(se+2)===33&&(Y+=E.substring(se,j+1)),ve="",v=0)}}v===0&&(M+=ve)}te=ae,ae=D,j++}if(se=Y.length,0<se){if(ne=b,0<be&&(Le=l(2,Y,ne,O,ye,de,se,T,u,T),Le!==void 0&&(Y=Le).length===0))return ft+Y+De;if(Y=ne.join(",")+"{"+Y+"}",me*Te!==0){switch(me!==2||i(Y,2)||(Te=0),Te){case 111:Y=Y.replace(N,":-moz-$1")+Y;break;case 112:Y=Y.replace(L,"::-webkit-input-$1")+Y.replace(L,"::-moz-$1")+Y.replace(L,":-ms-input-$1")+Y}Te=0}}return ft+Y+De}function n(O,b,E){var T=b.trim().split(h);b=T;var u=T.length,$=O.length;switch($){case 0:case 1:var v=0;for(O=$===0?"":O[0]+" ";v<u;++v)b[v]=r(O,b[v],E).trim();break;default:var X=v=0;for(b=[];v<u;++v)for(var q=0;q<$;++q)b[X++]=r(O[q]+" ",T[v],E).trim()}return b}function r(O,b,E){var T=b.charCodeAt(0);switch(33>T&&(T=(b=b.trim()).charCodeAt(0)),T){case 38:return b.replace(S,"$1"+O.trim());case 58:return O.trim()+b.replace(S,"$1"+O.trim());default:if(0<1*E&&0<b.indexOf("\f"))return b.replace(S,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+b}function a(O,b,E,T){var u=O+";",$=2*b+3*E+4*T;if($===944){O=u.indexOf(":",9)+1;var v=u.substring(O,u.length-1).trim();return v=u.substring(0,O).trim()+v+";",me===1||me===2&&i(v,1)?"-webkit-"+v+v:v}if(me===0||me===2&&!i(u,1))return u;switch($){case 1015:return u.charCodeAt(10)===97?"-webkit-"+u+u:u;case 951:return u.charCodeAt(3)===116?"-webkit-"+u+u:u;case 963:return u.charCodeAt(5)===110?"-webkit-"+u+u:u;case 1009:if(u.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+u+u;case 978:return"-webkit-"+u+"-moz-"+u+u;case 1019:case 983:return"-webkit-"+u+"-moz-"+u+"-ms-"+u+u;case 883:if(u.charCodeAt(8)===45)return"-webkit-"+u+u;if(0<u.indexOf("image-set(",11))return u.replace(V,"$1-webkit-$2")+u;break;case 932:if(u.charCodeAt(4)===45)switch(u.charCodeAt(5)){case 103:return"-webkit-box-"+u.replace("-grow","")+"-webkit-"+u+"-ms-"+u.replace("grow","positive")+u;case 115:return"-webkit-"+u+"-ms-"+u.replace("shrink","negative")+u;case 98:return"-webkit-"+u+"-ms-"+u.replace("basis","preferred-size")+u}return"-webkit-"+u+"-ms-"+u+u;case 964:return"-webkit-"+u+"-ms-flex-"+u+u;case 1023:if(u.charCodeAt(8)!==99)break;return v=u.substring(u.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+v+"-webkit-"+u+"-ms-flex-pack"+v+u;case 1005:return w.test(u)?u.replace(R,":-webkit-")+u.replace(R,":-moz-")+u:u;case 1e3:switch(v=u.substring(13).trim(),b=v.indexOf("-")+1,v.charCodeAt(0)+v.charCodeAt(b)){case 226:v=u.replace(F,"tb");break;case 232:v=u.replace(F,"tb-rl");break;case 220:v=u.replace(F,"lr");break;default:return u}return"-webkit-"+u+"-ms-"+v+u;case 1017:if(u.indexOf("sticky",9)===-1)break;case 975:switch(b=(u=O).length-10,v=(u.charCodeAt(b)===33?u.substring(0,b):u).substring(O.indexOf(":",7)+1).trim(),$=v.charCodeAt(0)+(v.charCodeAt(7)|0)){case 203:if(111>v.charCodeAt(8))break;case 115:u=u.replace(v,"-webkit-"+v)+";"+u;break;case 207:case 102:u=u.replace(v,"-webkit-"+(102<$?"inline-":"")+"box")+";"+u.replace(v,"-webkit-"+v)+";"+u.replace(v,"-ms-"+v+"box")+";"+u}return u+";";case 938:if(u.charCodeAt(5)===45)switch(u.charCodeAt(6)){case 105:return v=u.replace("-items",""),"-webkit-"+u+"-webkit-box-"+v+"-ms-flex-"+v+u;case 115:return"-webkit-"+u+"-ms-flex-item-"+u.replace(Z,"")+u;default:return"-webkit-"+u+"-ms-flex-line-pack"+u.replace("align-content","").replace(Z,"")+u}break;case 973:case 989:if(u.charCodeAt(3)!==45||u.charCodeAt(4)===122)break;case 931:case 953:if(ce.test(O)===!0)return(v=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?a(O.replace("stretch","fill-available"),b,E,T).replace(":fill-available",":stretch"):u.replace(v,"-webkit-"+v)+u.replace(v,"-moz-"+v.replace("fill-",""))+u;break;case 962:if(u="-webkit-"+u+(u.charCodeAt(5)===102?"-ms-"+u:"")+u,E+T===211&&u.charCodeAt(13)===105&&0<u.indexOf("transform",10))return u.substring(0,u.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+u}return u}function i(O,b){var E=O.indexOf(b===1?":":"{"),T=O.substring(0,b!==3?E:10);return E=O.substring(E+1,O.length-1),at(b!==2?T:T.replace(re,"$1"),E,b)}function o(O,b){var E=a(b,b.charCodeAt(0),b.charCodeAt(1),b.charCodeAt(2));return E!==b+";"?E.replace(ie," or ($1)").substring(4):"("+b+")"}function l(O,b,E,T,u,$,v,X,q,H){for(var D=0,ae=b,te;D<be;++D)switch(te=_e[D].call(m,O,ae,E,T,u,$,v,X,q,H)){case void 0:case!1:case!0:case null:break;default:ae=te}if(ae!==b)return ae}function f(O){switch(O){case void 0:case null:be=_e.length=0;break;default:if(typeof O=="function")_e[be++]=O;else if(typeof O=="object")for(var b=0,E=O.length;b<E;++b)f(O[b]);else We=!!O|0}return f}function c(O){return O=O.prefix,O!==void 0&&(at=null,O?typeof O!="function"?me=1:(me=2,at=O):me=0),c}function m(O,b){var E=O;if(33>E.charCodeAt(0)&&(E=E.trim()),Q=E,E=[Q],0<be){var T=l(-1,b,E,E,ye,de,0,0,0,0);T!==void 0&&typeof T=="string"&&(b=T)}var u=t(rt,E,b,0,0);return 0<be&&(T=l(-2,u,E,E,ye,de,u.length,0,0,0),T!==void 0&&(u=T)),Q="",Te=0,de=ye=1,u}var x=/^\0+/g,k=/[\0\r\f]/g,R=/: */g,w=/zoo|gra/,_=/([,: ])(transform)/g,h=/,\r+?/g,S=/([\t\r\n ])*\f?&/g,A=/@(k\w+)\s*(\S*)\s*/,L=/::(place)/g,N=/:(read-only)/g,F=/[svh]\w+-[tblr]{2}/,ee=/\(\s*(.*)\s*\)/g,ie=/([\s\S]*?);/g,Z=/-self|flex-/g,re=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ce=/stretch|:\s*\w+\-(?:conte|avail)/,V=/([^-])(image-set\()/,de=1,ye=1,Te=0,me=1,rt=[],_e=[],be=0,at=null,We=0,Q="";return m.use=f,m.set=c,e!==void 0&&c(e),m}var rl={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function al(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var il=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Na=al(function(e){return il.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),xo={exports:{}},W={};var fe=typeof Symbol=="function"&&Symbol.for,Br=fe?Symbol.for("react.element"):60103,Gr=fe?Symbol.for("react.portal"):60106,Mn=fe?Symbol.for("react.fragment"):60107,Dn=fe?Symbol.for("react.strict_mode"):60108,Fn=fe?Symbol.for("react.profiler"):60114,jn=fe?Symbol.for("react.provider"):60109,zn=fe?Symbol.for("react.context"):60110,Xr=fe?Symbol.for("react.async_mode"):60111,Un=fe?Symbol.for("react.concurrent_mode"):60111,$n=fe?Symbol.for("react.forward_ref"):60112,qn=fe?Symbol.for("react.suspense"):60113,ol=fe?Symbol.for("react.suspense_list"):60120,Hn=fe?Symbol.for("react.memo"):60115,Wn=fe?Symbol.for("react.lazy"):60116,sl=fe?Symbol.for("react.block"):60121,ll=fe?Symbol.for("react.fundamental"):60117,cl=fe?Symbol.for("react.responder"):60118,ul=fe?Symbol.for("react.scope"):60119;function Ce(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Br:switch(e=e.type,e){case Xr:case Un:case Mn:case Fn:case Dn:case qn:return e;default:switch(e=e&&e.$$typeof,e){case zn:case $n:case Wn:case Hn:case jn:return e;default:return t}}case Gr:return t}}}function wo(e){return Ce(e)===Un}W.AsyncMode=Xr;W.ConcurrentMode=Un;W.ContextConsumer=zn;W.ContextProvider=jn;W.Element=Br;W.ForwardRef=$n;W.Fragment=Mn;W.Lazy=Wn;W.Memo=Hn;W.Portal=Gr;W.Profiler=Fn;W.StrictMode=Dn;W.Suspense=qn;W.isAsyncMode=function(e){return wo(e)||Ce(e)===Xr};W.isConcurrentMode=wo;W.isContextConsumer=function(e){return Ce(e)===zn};W.isContextProvider=function(e){return Ce(e)===jn};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br};W.isForwardRef=function(e){return Ce(e)===$n};W.isFragment=function(e){return Ce(e)===Mn};W.isLazy=function(e){return Ce(e)===Wn};W.isMemo=function(e){return Ce(e)===Hn};W.isPortal=function(e){return Ce(e)===Gr};W.isProfiler=function(e){return Ce(e)===Fn};W.isStrictMode=function(e){return Ce(e)===Dn};W.isSuspense=function(e){return Ce(e)===qn};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Mn||e===Un||e===Fn||e===Dn||e===qn||e===ol||typeof e=="object"&&e!==null&&(e.$$typeof===Wn||e.$$typeof===Hn||e.$$typeof===jn||e.$$typeof===zn||e.$$typeof===$n||e.$$typeof===ll||e.$$typeof===cl||e.$$typeof===ul||e.$$typeof===sl)};W.typeOf=Ce;xo.exports=W;var fl=xo.exports,Vr=fl,dl={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pl={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ml={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ao={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kr={};Kr[Vr.ForwardRef]=ml;Kr[Vr.Memo]=Ao;function Ia(e){return Vr.isMemo(e)?Ao:Kr[e.$$typeof]||dl}var hl=Object.defineProperty,gl=Object.getOwnPropertyNames,La=Object.getOwnPropertySymbols,yl=Object.getOwnPropertyDescriptor,bl=Object.getPrototypeOf,Ra=Object.prototype;function So(e,t,n){if(typeof t!="string"){if(Ra){var r=bl(t);r&&r!==Ra&&So(e,r,n)}var a=gl(t);La&&(a=a.concat(La(t)));for(var i=Ia(e),o=Ia(t),l=0;l<a.length;++l){var f=a[l];if(!pl[f]&&!(n&&n[f])&&!(o&&o[f])&&!(i&&i[f])){var c=yl(t,f);try{hl(e,f,c)}catch{}}}}return e}var vl=So;const xl=uo(vl);var ko={},Pe={};function Ge(){return(Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ma=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},br=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!vo.typeOf(e)},bn=Object.freeze([]),Qe=Object.freeze({});function Gt(e){return typeof e=="function"}function Da(e){return e.displayName||e.name||"Component"}function Zr(e){return e&&typeof e.styledComponentId=="string"}var bt=typeof ko<"u"&&Pe!==void 0&&(Pe.REACT_APP_SC_ATTR||Pe.SC_ATTR)||"data-styled",Qr=typeof window<"u"&&"HTMLElement"in window,wl=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof ko<"u"&&Pe!==void 0&&(Pe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pe.REACT_APP_SC_DISABLE_SPEEDY!==""?Pe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pe.REACT_APP_SC_DISABLE_SPEEDY:Pe.SC_DISABLE_SPEEDY!==void 0&&Pe.SC_DISABLE_SPEEDY!==""&&Pe.SC_DISABLE_SPEEDY!=="false"&&Pe.SC_DISABLE_SPEEDY));function Kt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Al=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,i=a.length,o=i;n>=o;)(o<<=1)<0&&Kt(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(a),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var f=this.indexOfGroup(n+1),c=0,m=r.length;c<m;c++)this.tag.insertRule(f,r[c])&&(this.groupSizes[n]++,f++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),i=a+r;this.groupSizes[n]=0;for(var o=a;o<i;o++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],i=this.indexOfGroup(n),o=i+a,l=i;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),mn=new Map,vn=new Map,Wt=1,sn=function(e){if(mn.has(e))return mn.get(e);for(;vn.has(Wt);)Wt++;var t=Wt++;return mn.set(e,t),vn.set(t,e),t},Sl=function(e){return vn.get(e)},kl=function(e,t){t>=Wt&&(Wt=t+1),mn.set(e,t),vn.set(t,e)},Tl="style["+bt+'][data-styled-version="5.3.11"]',El=new RegExp("^"+bt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),_l=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},Cl=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var l=o.match(El);if(l){var f=0|parseInt(l[1],10),c=l[2];f!==0&&(kl(c,f),_l(e,c,l[3]),e.getTag().insertRules(f,r)),r.length=0}else r.push(o)}}},Ol=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},To=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){for(var f=l.childNodes,c=f.length;c>=0;c--){var m=f[c];if(m&&m.nodeType===1&&m.hasAttribute(bt))return m}}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(bt,"active"),r.setAttribute("data-styled-version","5.3.11");var o=Ol();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},Pl=function(){function e(n){var r=this.element=To(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var f=i[o];if(f.ownerNode===a)return f}Kt(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Nl=function(){function e(n){var r=this.element=To(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(a,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Il=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Fa=Qr,Ll={isServer:!Qr,useCSSOMInjection:!wl},Eo=function(){function e(n,r,a){n===void 0&&(n=Qe),r===void 0&&(r={}),this.options=Ge({},Ll,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&Qr&&Fa&&(Fa=!1,function(i){for(var o=document.querySelectorAll(Tl),l=0,f=o.length;l<f;l++){var c=o[l];c&&c.getAttribute(bt)!=="active"&&(Cl(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return sn(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ge({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,i=r.useCSSOMInjection,o=r.target,n=a?new Il(o):i?new Pl(o):new Nl(o),new Al(n)));var n,r,a,i,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(sn(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(sn(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(sn(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,i="",o=0;o<a;o++){var l=Sl(o);if(l!==void 0){var f=n.names.get(l),c=r.getGroup(o);if(f&&c&&f.size){var m=bt+".g"+o+'[id="'+l+'"]',x="";f!==void 0&&f.forEach(function(k){k.length>0&&(x+=k+",")}),i+=""+c+m+'{content:"'+x+`"}/*!sc*/
`}}}return i}(this)},e}(),Rl=/(a)(d)/gi,ja=function(e){return String.fromCharCode(e+(e>25?39:97))};function vr(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ja(t%52)+n;return(ja(t%52)+n).replace(Rl,"$1-$2")}var mt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},_o=function(e){return mt(5381,e)};function Ml(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Gt(n)&&!Zr(n))return!1}return!0}var Dl=_o("5.3.11"),Fl=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ml(t),this.componentId=n,this.baseHash=mt(Dl,n),this.baseStyle=r,Eo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))i.push(this.staticRulesId);else{var o=vt(this.rules,t,n,r).join(""),l=vr(mt(this.baseHash,o)>>>0);if(!n.hasNameForId(a,l)){var f=r(o,"."+l,void 0,a);n.insertRules(a,l,f)}i.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,m=mt(this.baseHash,r.hash),x="",k=0;k<c;k++){var R=this.rules[k];if(typeof R=="string")x+=R;else if(R){var w=vt(R,t,n,r),_=Array.isArray(w)?w.join(""):w;m=mt(m,_+k),x+=_}}if(x){var h=vr(m>>>0);if(!n.hasNameForId(a,h)){var S=r(x,"."+h,void 0,a);n.insertRules(a,h,S)}i.push(h)}}return i.join(" ")},e}(),jl=/^\s*\/\/.*$/gm,zl=[":","[",".","#"];function Ul(e){var t,n,r,a,i=Qe,o=i.options,l=o===void 0?Qe:o,f=i.plugins,c=f===void 0?bn:f,m=new nl(l),x=[],k=function(_){function h(S){if(S)try{_(S+"}")}catch{}}return function(S,A,L,N,F,ee,ie,Z,re,ce){switch(S){case 1:if(re===0&&A.charCodeAt(0)===64)return _(A+";"),"";break;case 2:if(Z===0)return A+"/*|*/";break;case 3:switch(Z){case 102:case 112:return _(L[0]+A),"";default:return A+(ce===0?"/*|*/":"")}case-2:A.split("/*|*/}").forEach(h)}}}(function(_){x.push(_)}),R=function(_,h,S){return h===0&&zl.indexOf(S[n.length])!==-1||S.match(a)?_:"."+t};function w(_,h,S,A){A===void 0&&(A="&");var L=_.replace(jl,""),N=h&&S?S+" "+h+" { "+L+" }":L;return t=A,n=h,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),m(S||!h?"":h,N)}return m.use([].concat(c,[function(_,h,S){_===2&&S.length&&S[0].lastIndexOf(n)>0&&(S[0]=S[0].replace(r,R))},k,function(_){if(_===-2){var h=x;return x=[],h}}])),w.hash=c.length?c.reduce(function(_,h){return h.name||Kt(15),mt(_,h.name)},5381).toString():"",w}var Co=wt.createContext();Co.Consumer;var Oo=wt.createContext(),$l=(Oo.Consumer,new Eo),xr=Ul();function ql(){return B.useContext(Co)||$l}function Hl(){return B.useContext(Oo)||xr}var Wl=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=xr);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.toString=function(){return Kt(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=xr),this.name+t.hash},e}(),Yl=/([A-Z])/,Bl=/([A-Z])/g,Gl=/^ms-/,Xl=function(e){return"-"+e.toLowerCase()};function za(e){return Yl.test(e)?e.replace(Bl,Xl).replace(Gl,"-ms-"):e}var Ua=function(e){return e==null||e===!1||e===""};function vt(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,l=e.length;o<l;o+=1)(a=vt(e[o],t,n,r))!==""&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}if(Ua(e))return"";if(Zr(e))return"."+e.styledComponentId;if(Gt(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var f=e(t);return vt(f,t,n,r)}var c;return e instanceof Wl?n?(e.inject(n,r),e.getName(r)):e:br(e)?function m(x,k){var R,w,_=[];for(var h in x)x.hasOwnProperty(h)&&!Ua(x[h])&&(Array.isArray(x[h])&&x[h].isCss||Gt(x[h])?_.push(za(h)+":",x[h],";"):br(x[h])?_.push.apply(_,m(x[h],h)):_.push(za(h)+": "+(R=h,(w=x[h])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||R in rl||R.startsWith("--")?String(w).trim():w+"px")+";"));return k?[k+" {"].concat(_,["}"]):_}(e):e.toString()}var $a=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Vl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Gt(e)||br(e)?$a(vt(Ma(bn,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:$a(vt(Ma(e,n)))}var Kl=function(e,t,n){return n===void 0&&(n=Qe),e.theme!==n.theme&&e.theme||t||n.theme},Zl=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ql=/(^-|-$)/g;function nr(e){return e.replace(Zl,"-").replace(Ql,"")}var Jl=function(e){return vr(_o(e)>>>0)};function ln(e){return typeof e=="string"&&!0}var wr=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},ec=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function tc(e,t,n){var r=e[n];wr(t)&&wr(r)?Po(r,t):e[n]=t}function Po(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(wr(o))for(var l in o)ec(l)&&tc(e,o[l],l)}return e}var No=wt.createContext();No.Consumer;var rr={};function Io(e,t,n){var r=Zr(e),a=!ln(e),i=t.attrs,o=i===void 0?bn:i,l=t.componentId,f=l===void 0?function(A,L){var N=typeof A!="string"?"sc":nr(A);rr[N]=(rr[N]||0)+1;var F=N+"-"+Jl("5.3.11"+N+rr[N]);return L?L+"-"+F:F}(t.displayName,t.parentComponentId):l,c=t.displayName,m=c===void 0?function(A){return ln(A)?"styled."+A:"Styled("+Da(A)+")"}(e):c,x=t.displayName&&t.componentId?nr(t.displayName)+"-"+t.componentId:t.componentId||f,k=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,R=t.shouldForwardProp;r&&e.shouldForwardProp&&(R=t.shouldForwardProp?function(A,L,N){return e.shouldForwardProp(A,L,N)&&t.shouldForwardProp(A,L,N)}:e.shouldForwardProp);var w,_=new Fl(n,x,r?e.componentStyle:void 0),h=_.isStatic&&o.length===0,S=function(A,L){return function(N,F,ee,ie){var Z=N.attrs,re=N.componentStyle,ce=N.defaultProps,V=N.foldedComponentIds,de=N.shouldForwardProp,ye=N.styledComponentId,Te=N.target,me=function(T,u,$){T===void 0&&(T=Qe);var v=Ge({},u,{theme:T}),X={};return $.forEach(function(q){var H,D,ae,te=q;for(H in Gt(te)&&(te=te(v)),te)v[H]=X[H]=H==="className"?(D=X[H],ae=te[H],D&&ae?D+" "+ae:D||ae):te[H]}),[v,X]}(Kl(F,B.useContext(No),ce)||Qe,F,Z),rt=me[0],_e=me[1],be=function(T,u,$,v){var X=ql(),q=Hl(),H=u?T.generateAndInjectStyles(Qe,X,q):T.generateAndInjectStyles($,X,q);return H}(re,ie,rt),at=ee,We=_e.$as||F.$as||_e.as||F.as||Te,Q=ln(We),O=_e!==F?Ge({},F,{},_e):F,b={};for(var E in O)E[0]!=="$"&&E!=="as"&&(E==="forwardedAs"?b.as=O[E]:(de?de(E,Na,We):!Q||Na(E))&&(b[E]=O[E]));return F.style&&_e.style!==F.style&&(b.style=Ge({},F.style,{},_e.style)),b.className=Array.prototype.concat(V,ye,be!==ye?be:null,F.className,_e.className).filter(Boolean).join(" "),b.ref=at,B.createElement(We,b)}(w,A,L,h)};return S.displayName=m,(w=wt.forwardRef(S)).attrs=k,w.componentStyle=_,w.displayName=m,w.shouldForwardProp=R,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):bn,w.styledComponentId=x,w.target=r?e.target:e,w.withComponent=function(A){var L=t.componentId,N=function(ee,ie){if(ee==null)return{};var Z,re,ce={},V=Object.keys(ee);for(re=0;re<V.length;re++)Z=V[re],ie.indexOf(Z)>=0||(ce[Z]=ee[Z]);return ce}(t,["componentId"]),F=L&&L+"-"+(ln(A)?A:nr(Da(A)));return Io(A,Ge({},N,{attrs:k,componentId:F}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=r?Po({},e.defaultProps,A):A}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),a&&xl(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Ae=function(e){return function t(n,r,a){if(a===void 0&&(a=Qe),!vo.isValidElementType(r))return Kt(1,String(r));var i=function(){return n(r,a,Vl.apply(void 0,arguments))};return i.withConfig=function(o){return t(n,r,Ge({},a,{},o))},i.attrs=function(o){return t(n,r,Ge({},a,{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)}))},i}(Io,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ae[e]=Ae(e)});const nc=Ae.a`
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
`,At=({href:e,color:t,text:n,classes:r,onClick:a})=>p.jsx(nc,{href:e,...e?{}:{tabIndex:0},className:`button-${t} ${r??""}`,onClick:a,children:n});At.propTypes={...kn};At.__docgenInfo={description:`@param {ButtonProps} props
@returns {JSX.Element}`,methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!0},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1}}};const Zt=[{href:"/",text:"Home",type:"icon-home",selected:!0,class:"test-class"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu",text:"Sublink 2"},{href:"https://campus.asu.edu",text:"Sublink 3"},{href:"https://campus.asu.edu",text:"Sublink 4"},{href:"https://asuonline.asu.edu/",text:"Sublink 5"},{href:"https://havasu.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 3",href:"#"},{text:"Link option 4",href:"#"},{text:"Link option 5",href:"#"},{text:"Link option 6",href:"#",onClick:()=>{alert("On Click Callback")}},{text:"Link option 7",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 8",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]}],rc=[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",selected:!0},{text:"Link option 3",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu/",text:"Sublink 2"},{href:"https://campus.asu.edu/",text:"Sublink 3"},{href:"https://campus.asu.edu/",text:"Sublink 4"},{href:"https://campus.asu.edu/",text:"Sublink 5"},{href:"https://asuonline.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 4",href:"#"}],Lo=[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#"},{text:"Link option 2",href:"/",items:[[{href:"https://www.asu.edu/",text:"A test navigation item"},{href:"https://www.asu.edu/",text:"Mauris viverra, sem nec"},{href:"https://www.asu.edu/?feature=athletics",text:"Massa nunc dictum nam venenatis"},{href:"https://www.asu.edu/?feature=alumni",text:"Alumni"},{href:"https://www.asu.edu/?feature=giving",text:"Giving"},{href:"https://www.asu.edu/?feature=president",text:"President"},{href:"https://www.asu.edu/about",text:"About ASU"}]]},{text:"Link option 3",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 4",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column one"},{href:"https://havasu.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Phasellus egestas nec est "},{href:"https://campus.asu.edu/tempe/",text:"Pellentesque et mollis"},{href:"https://campus.asu.edu/west/",text:"Cras congue"},{href:"https://campus.asu.edu/polytechnic/",text:"Cras ut malesuada nisl"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Map"},{href:"https://campus.asu.edu/tempe/",text:"Tempe"},{href:"https://campus.asu.edu/west/",text:"West"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 5",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"Lake Havasu"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 6",href:"#",buttons:[{text:"CTA One",href:"https://asu.edu",color:"maroon"},{text:"CTA Two",href:"https://asu.edu",color:"gold"}],items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"The Lake Havasu Campus"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Call to Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column Five"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Buildings and directory"},{href:"https://campus.asu.edu/tempe/",text:"Some good news"},{href:"https://campus.asu.edu/west/",selected:!0,text:"Directory Admin Tools"}]]}],ac=[{href:"/",text:"This",type:"icon-home",class:"home",selected:!0},{text:"Link option 1",href:"https://webapp4.asu.edu/myasu/"},{text:"Link option 2",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column Two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"}]]}];function ic({packageName:e="",component:t="",type:n="",configuration:r={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}}const oc={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},sc={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},lc=sc,cc={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},qa=cc,uc={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},fc={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ro=fc;function dc(e,t,n){return(t=mc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ha(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ha(Object(n),!0).forEach(function(r){dc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ha(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pc(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mc(e){var t=pc(e,"string");return typeof t=="symbol"?t:t+""}const Wa=()=>{};let Jr={},Mo={},Do=null,Fo={mark:Wa,measure:Wa};try{typeof window<"u"&&(Jr=window),typeof document<"u"&&(Mo=document),typeof MutationObserver<"u"&&(Do=MutationObserver),typeof performance<"u"&&(Fo=performance)}catch{}const{userAgent:Ya=""}=Jr.navigator||{},et=Jr,K=Mo,Ba=Do,cn=Fo;et.document;const Ke=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",jo=~Ya.indexOf("MSIE")||~Ya.indexOf("Trident/");var hc=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,gc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,zo={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},yc={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Uo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ge="classic",Yn="duotone",bc="sharp",vc="sharp-duotone",$o=[ge,Yn,bc,vc],xc={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},wc={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Ac=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Sc={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},kc=["fak","fa-kit","fakd","fa-kit-duotone"],Ga={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Tc=["kit"],Ec={kit:{"fa-kit":"fak"}},_c=["fak","fakd"],Cc={kit:{fak:"fa-kit"}},Xa={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},un={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Oc=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Pc=["fak","fa-kit","fakd","fa-kit-duotone"],Nc={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ic={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Lc={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ar={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Rc=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Sr=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Oc,...Rc],Mc=["solid","regular","light","thin","duotone","brands"],qo=[1,2,3,4,5,6,7,8,9,10],Dc=qo.concat([11,12,13,14,15,16,17,18,19,20]),Fc=[...Object.keys(Lc),...Mc,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",un.GROUP,un.SWAP_OPACITY,un.PRIMARY,un.SECONDARY].concat(qo.map(e=>"".concat(e,"x"))).concat(Dc.map(e=>"w-".concat(e))),jc={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Xe="___FONT_AWESOME___",kr=16,Ho="fa",Wo="svg-inline--fa",ct="data-fa-i2svg",Tr="data-fa-pseudo-element",zc="data-fa-pseudo-element-pending",ea="data-prefix",ta="data-icon",Va="fontawesome-i2svg",Uc="async",$c=["HTML","HEAD","STYLE","SCRIPT"],Yo=(()=>{try{return!0}catch{return!1}})();function Qt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[ge]}})}const Bo=g({},zo);Bo[ge]=g(g(g(g({},{"fa-duotone":"duotone"}),zo[ge]),Ga.kit),Ga["kit-duotone"]);const qc=Qt(Bo),Er=g({},Sc);Er[ge]=g(g(g(g({},{duotone:"fad"}),Er[ge]),Xa.kit),Xa["kit-duotone"]);const Ka=Qt(Er),_r=g({},Ar);_r[ge]=g(g({},_r[ge]),Cc.kit);const na=Qt(_r),Cr=g({},Ic);Cr[ge]=g(g({},Cr[ge]),Ec.kit);Qt(Cr);const Hc=hc,Go="fa-layers-text",Wc=gc,Yc=g({},xc);Qt(Yc);const Bc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ar=yc,Gc=[...Tc,...Fc],Yt=et.FontAwesomeConfig||{};function Xc(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Vc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}K&&typeof K.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=Vc(Xc(n));a!=null&&(Yt[r]=a)});const Xo={styleDefault:"solid",familyDefault:ge,cssPrefix:Ho,replacementClass:Wo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yt.familyPrefix&&(Yt.cssPrefix=Yt.familyPrefix);const xt=g(g({},Xo),Yt);xt.autoReplaceSvg||(xt.observeMutations=!1);const P={};Object.keys(Xo).forEach(e=>{Object.defineProperty(P,e,{enumerable:!0,set:function(t){xt[e]=t,Bt.forEach(n=>n(P))},get:function(){return xt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){xt.cssPrefix=e,Bt.forEach(t=>t(P))},get:function(){return xt.cssPrefix}});et.FontAwesomeConfig=P;const Bt=[];function Kc(e){return Bt.push(e),()=>{Bt.splice(Bt.indexOf(e),1)}}const Ze=kr,Ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zc(e){if(!e||!Ke)return;const t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=K.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return K.head.insertBefore(t,r),e}const Qc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xt(){let e=12,t="";for(;e-- >0;)t+=Qc[Math.random()*62|0];return t}function St(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ra(e){return e.classList?St(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Vo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jc(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Vo(e[n]),'" '),"").trim()}function Bn(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function aa(e){return e.size!==Ue.size||e.x!==Ue.x||e.y!==Ue.y||e.rotate!==Ue.rotate||e.flipX||e.flipY}function eu(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:f,path:c}}function tu(e){let{transform:t,width:n=kr,height:r=kr,startCentered:a=!1}=e,i="";return a&&jo?i+="translate(".concat(t.x/Ze-n/2,"em, ").concat(t.y/Ze-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(t.x/Ze,"em), calc(-50% + ").concat(t.y/Ze,"em)) "):i+="translate(".concat(t.x/Ze,"em, ").concat(t.y/Ze,"em) "),i+="scale(".concat(t.size/Ze*(t.flipX?-1:1),", ").concat(t.size/Ze*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var nu=`:root, :host {
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
}`;function Ko(){const e=Ho,t=Wo,n=P.cssPrefix,r=P.replacementClass;let a=nu;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}let Za=!1;function ir(){P.autoAddCss&&!Za&&(Zc(Ko()),Za=!0)}var ru={mixout(){return{dom:{css:Ko,insertCss:ir}}},hooks(){return{beforeDOMElementCreation(){ir()},beforeI2svg(){ir()}}}};const Ve=et||{};Ve[Xe]||(Ve[Xe]={});Ve[Xe].styles||(Ve[Xe].styles={});Ve[Xe].hooks||(Ve[Xe].hooks={});Ve[Xe].shims||(Ve[Xe].shims=[]);var $e=Ve[Xe];const Zo=[],Qo=function(){K.removeEventListener("DOMContentLoaded",Qo),xn=1,Zo.map(e=>e())};let xn=!1;Ke&&(xn=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),xn||K.addEventListener("DOMContentLoaded",Qo));function au(e){Ke&&(xn?setTimeout(e,0):Zo.push(e))}function Jt(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Vo(e):"<".concat(t," ").concat(Jc(n),">").concat(r.map(Jt).join(""),"</").concat(t,">")}function Qa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var or=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=n,f,c,m;for(r===void 0?(f=1,m=t[i[0]]):(f=0,m=r);f<o;f++)c=i[f],m=l(m,t[c],c,t);return m};function iu(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Or(e){const t=iu(e);return t.length===1?t[0].toString(16):null}function ou(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ja(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Pr(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Ja(t);typeof $e.hooks.addPack=="function"&&!r?$e.hooks.addPack(e,Ja(t)):$e.styles[e]=g(g({},$e.styles[e]||{}),a),e==="fas"&&Pr("fa",t)}const{styles:Vt,shims:su}=$e,Jo=Object.keys(na),lu=Jo.reduce((e,t)=>(e[t]=Object.keys(na[t]),e),{});let ia=null,es={},ts={},ns={},rs={},as={};function cu(e){return~Gc.indexOf(e)}function uu(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!cu(a)?a:null}const is=()=>{const e=r=>or(Vt,(a,i,o)=>(a[o]=or(i,r,{}),a),{});es=e((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=i}),r)),ts=e((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=i}),r)),as=e((r,a,i)=>{const o=a[2];return r[i]=i,o.forEach(l=>{r[l]=i}),r});const t="far"in Vt||P.autoFetchSvg,n=or(su,(r,a)=>{const i=a[0];let o=a[1];const l=a[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});ns=n.names,rs=n.unicodes,ia=Gn(P.styleDefault,{family:P.familyDefault})};Kc(e=>{ia=Gn(e.styleDefault,{family:P.familyDefault})});is();function oa(e,t){return(es[e]||{})[t]}function fu(e,t){return(ts[e]||{})[t]}function lt(e,t){return(as[e]||{})[t]}function os(e){return ns[e]||{prefix:null,iconName:null}}function du(e){const t=rs[e],n=oa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tt(){return ia}const ss=()=>({prefix:null,iconName:null,rest:[]});function pu(e){let t=ge;const n=Jo.reduce((r,a)=>(r[a]="".concat(P.cssPrefix,"-").concat(a),r),{});return $o.forEach(r=>{(e.includes(n[r])||e.some(a=>lu[r].includes(a)))&&(t=r)}),t}function Gn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ge}=t,r=qc[n][e];if(n===Yn&&!e)return"fad";const a=Ka[n][e]||Ka[n][r],i=e in $e.styles?e:null;return a||i||null}function mu(e){let t=[],n=null;return e.forEach(r=>{const a=uu(P.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function ei(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function Xn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=Sr.concat(Pc),i=ei(e.filter(x=>a.includes(x))),o=ei(e.filter(x=>!Sr.includes(x))),l=i.filter(x=>(r=x,!Uo.includes(x))),[f=null]=l,c=pu(i),m=g(g({},mu(o)),{},{prefix:Gn(f,{family:c})});return g(g(g({},m),bu({values:e,family:c,styles:Vt,config:P,canonical:m,givenPrefix:r})),hu(n,r,m))}function hu(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const i=t==="fa"?os(a):{},o=lt(r,a);return a=i.iconName||o||a,r=i.prefix||r,r==="far"&&!Vt.far&&Vt.fas&&!P.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const gu=$o.filter(e=>e!==ge||e!==Yn),yu=Object.keys(Ar).filter(e=>e!==ge).map(e=>Object.keys(Ar[e])).flat();function bu(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:i={},config:o={}}=e,l=n===Yn,f=t.includes("fa-duotone")||t.includes("fad"),c=o.familyDefault==="duotone",m=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(f||c||m)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&gu.includes(n)&&(Object.keys(i).find(k=>yu.includes(k))||o.autoFetchSvg)){const k=Ac.get(n).defaultShortPrefixId;r.prefix=k,r.iconName=lt(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=tt()||"fas"),r}class vu{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=g(g({},this.definitions[i]||{}),a[i]),Pr(i,a[i]);const o=na[ge][i];o&&Pr(o,a[i]),is()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:o,icon:l}=r[a],f=l[2];t[i]||(t[i]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(t[i][c]=l)}),t[i][o]=l}),t}}let ti=[],ht={};const yt={},xu=Object.keys(yt);function wu(e,t){let{mixoutsTo:n}=t;return ti=e,ht={},Object.keys(yt).forEach(r=>{xu.indexOf(r)===-1&&delete yt[r]}),ti.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{ht[o]||(ht[o]=[]),ht[o].push(i[o])})}r.provides&&r.provides(yt)}),n}function Nr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(ht[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function ut(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(ht[e]||[]).forEach(i=>{i.apply(null,n)})}function nt(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return yt[e]?yt[e].apply(null,t):void 0}function Ir(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||tt();if(t)return t=lt(n,t)||t,Qa(ls.definitions,n,t)||Qa($e.styles,n,t)}const ls=new vu,Au=()=>{P.autoReplaceSvg=!1,P.observeMutations=!1,ut("noAuto")},Su={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ke?(ut("beforeI2svg",e),nt("pseudoElements2svg",e),nt("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,au(()=>{Tu({autoReplaceSvgRoot:t}),ut("watch",e)})}},ku={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:lt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Gn(e[0]);return{prefix:n,iconName:lt(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(Hc))){const t=Xn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||tt(),iconName:lt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=tt();return{prefix:t,iconName:lt(t,e)||e}}}},Oe={noAuto:Au,config:P,dom:Su,parse:ku,library:ls,findIconDefinition:Ir,toHtml:Jt},Tu=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=K}=e;(Object.keys($e.styles).length>0||P.autoFetchSvg)&&Ke&&P.autoReplaceSvg&&Oe.dom.i2svg({node:t})};function Vn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Jt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Ke)return;const n=K.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Eu(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(aa(o)&&n.found&&!r.found){const{width:l,height:f}=n,c={x:l/f/2,y:.5};a.style=Bn(g(g({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function _u(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},a),{},{id:o}),children:r}]}]}function sa(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:l,maskId:f,titleId:c,extra:m,watchable:x=!1}=e,{width:k,height:R}=n.found?n:t,w=_c.includes(r),_=[P.replacementClass,a?"".concat(P.cssPrefix,"-").concat(a):""].filter(F=>m.classes.indexOf(F)===-1).filter(F=>F!==""||!!F).concat(m.classes).join(" ");let h={children:[],attributes:g(g({},m.attributes),{},{"data-prefix":r,"data-icon":a,class:_,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(R)})};const S=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(k/R*16*.0625,"em")}:{};x&&(h.attributes[ct]=""),l&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||Xt())},children:[l]}),delete h.attributes.title);const A=g(g({},h),{},{prefix:r,iconName:a,main:t,mask:n,maskId:f,transform:i,symbol:o,styles:g(g({},S),m.styles)}),{children:L,attributes:N}=n.found&&t.found?nt("generateAbstractMask",A)||{children:[],attributes:{}}:nt("generateAbstractIcon",A)||{children:[],attributes:{}};return A.children=L,A.attributes=N,o?_u(A):Eu(A)}function ni(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:l=!1}=e,f=g(g(g({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[ct]="");const c=g({},o.styles);aa(a)&&(c.transform=tu({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const m=Bn(c);m.length>0&&(f.style=m);const x=[];return x.push({tag:"span",attributes:f,children:[t]}),i&&x.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),x}function Cu(e){const{content:t,title:n,extra:r}=e,a=g(g(g({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Bn(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:sr}=$e;function Lr(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(ar.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ar.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ar.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Ou={found:!1,width:512,height:512};function Pu(e,t){!Yo&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Rr(e,t){let n=t;return t==="fa"&&P.styleDefault!==null&&(t=tt()),new Promise((r,a)=>{if(n==="fa"){const i=os(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&sr[t]&&sr[t][e]){const i=sr[t][e];return r(Lr(i))}Pu(e,t),r(g(g({},Ou),{},{icon:P.showMissingIcons&&e?nt("missingIconAbstract")||{}:{}}))})}const ri=()=>{},Mr=P.measurePerformance&&cn&&cn.mark&&cn.measure?cn:{mark:ri,measure:ri},It='FA "6.7.2"',Nu=e=>(Mr.mark("".concat(It," ").concat(e," begins")),()=>cs(e)),cs=e=>{Mr.mark("".concat(It," ").concat(e," ends")),Mr.measure("".concat(It," ").concat(e),"".concat(It," ").concat(e," begins"),"".concat(It," ").concat(e," ends"))};var la={begin:Nu,end:cs};const hn=()=>{};function ai(e){return typeof(e.getAttribute?e.getAttribute(ct):null)=="string"}function Iu(e){const t=e.getAttribute?e.getAttribute(ea):null,n=e.getAttribute?e.getAttribute(ta):null;return t&&n}function Lu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Ru(){return P.autoReplaceSvg===!0?gn.replace:gn[P.autoReplaceSvg]||gn.replace}function Mu(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function Du(e){return K.createElement(e)}function us(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Mu:Du}=t;if(typeof e=="string")return K.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(us(i,{ceFn:n}))}),r}function Fu(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const gn={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(us(n),t)}),t.getAttribute(ct)===null&&P.keepOriginalSource){let n=K.createComment(Fu(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~ra(t).indexOf(P.replacementClass))return gn.replace(e);const r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===P.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>Jt(i)).join(`
`);t.setAttribute(ct,""),t.innerHTML=a}};function ii(e){e()}function fs(e,t){const n=typeof t=="function"?t:hn;if(e.length===0)n();else{let r=ii;P.mutateApproach===Uc&&(r=et.requestAnimationFrame||ii),r(()=>{const a=Ru(),i=la.begin("mutate");e.map(a),i(),n()})}}let ca=!1;function ds(){ca=!0}function Dr(){ca=!1}let wn=null;function oi(e){if(!Ba||!P.observeMutations)return;const{treeCallback:t=hn,nodeCallback:n=hn,pseudoElementsCallback:r=hn,observeMutationsRoot:a=K}=e;wn=new Ba(i=>{if(ca)return;const o=tt();St(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!ai(l.addedNodes[0])&&(P.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&P.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&ai(l.target)&&~Bc.indexOf(l.attributeName))if(l.attributeName==="class"&&Iu(l.target)){const{prefix:f,iconName:c}=Xn(ra(l.target));l.target.setAttribute(ea,f||o),c&&l.target.setAttribute(ta,c)}else Lu(l.target)&&n(l.target)})}),Ke&&wn.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ju(){wn&&wn.disconnect()}function zu(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Uu(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=Xn(ra(e));return a.prefix||(a.prefix=tt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=fu(a.prefix,e.innerText)||oa(a.prefix,Or(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function $u(e){const t=St(e.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Xt()):(t["aria-hidden"]="true",t.focusable="false")),t}function qu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function si(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Uu(e),i=$u(e),o=Nr("parseNodeAttributes",{},e);let l=t.styleParser?zu(e):[];return g({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:i}},o)}const{styles:Hu}=$e;function ps(e){const t=P.autoReplaceSvg==="nest"?si(e,{styleParser:!1}):si(e);return~t.extra.classes.indexOf(Go)?nt("generateLayersText",e,t):nt("generateSvgReplacementMutation",e,t)}function Wu(){return[...kc,...Sr]}function li(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ke)return Promise.resolve();const n=K.documentElement.classList,r=m=>n.add("".concat(Va,"-").concat(m)),a=m=>n.remove("".concat(Va,"-").concat(m)),i=P.autoFetchSvg?Wu():Uo.concat(Object.keys(Hu));i.includes("fa")||i.push("fa");const o=[".".concat(Go,":not([").concat(ct,"])")].concat(i.map(m=>".".concat(m,":not([").concat(ct,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=St(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();const f=la.begin("onTree"),c=l.reduce((m,x)=>{try{const k=ps(x);k&&m.push(k)}catch(k){Yo||k.name==="MissingIcon"&&console.error(k)}return m},[]);return new Promise((m,x)=>{Promise.all(c).then(k=>{fs(k,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),f(),m()})}).catch(k=>{f(),x(k)})})}function Yu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ps(e).then(n=>{n&&fs([n],t)})}function Bu(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Ir(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Ir(a||{})),e(r,g(g({},n),{},{mask:a}))}}const Gu=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ue,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:l=null,classes:f=[],attributes:c={},styles:m={}}=t;if(!e)return;const{prefix:x,iconName:k,icon:R}=e;return Vn(g({type:"icon"},e),()=>(ut("beforeDOMElementCreation",{iconDefinition:e,params:t}),P.autoA11y&&(o?c["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(l||Xt()):(c["aria-hidden"]="true",c.focusable="false")),sa({icons:{main:Lr(R),mask:a?Lr(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:k,transform:g(g({},Ue),n),symbol:r,title:o,maskId:i,titleId:l,extra:{attributes:c,styles:m,classes:f}})))};var Xu={mixout(){return{icon:Bu(Gu)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=li,e.nodeCallback=Yu,e}}},provides(e){e.i2svg=function(t){const{node:n=K,callback:r=()=>{}}=t;return li(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:i,prefix:o,transform:l,symbol:f,mask:c,maskId:m,extra:x}=n;return new Promise((k,R)=>{Promise.all([Rr(r,o),c.iconName?Rr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[_,h]=w;k([t,sa({icons:{main:_,mask:h},prefix:o,iconName:r,transform:l,symbol:f,maskId:m,title:a,titleId:i,extra:x,watchable:!0})])}).catch(R)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:i,styles:o}=t;const l=Bn(o);l.length>0&&(r.style=l);let f;return aa(i)&&(f=nt("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(f||a.icon),{children:n,attributes:r}}}},Vu={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Vn({type:"layer"},()=>{ut("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Ku={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return Vn({type:"counter",content:e},()=>(ut("beforeDOMElementCreation",{content:e,params:t}),Cu({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(P.cssPrefix,"-layers-counter"),...r]}})))}}}},Zu={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ue,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return Vn({type:"text",content:e},()=>(ut("beforeDOMElementCreation",{content:e,params:t}),ni({content:e,transform:g(g({},Ue),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(P.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:i}=n;let o=null,l=null;if(jo){const f=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/f,l=c.height/f}return P.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,ni({content:t.innerHTML,width:o,height:l,transform:a,title:r,extra:i,watchable:!0})])}}};const Qu=new RegExp('"',"ug"),ci=[1105920,1112319],ui=g(g(g(g({},{FontAwesome:{normal:"fas",400:"fas"}}),wc),jc),Nc),Fr=Object.keys(ui).reduce((e,t)=>(e[t.toLowerCase()]=ui[t],e),{}),Ju=Object.keys(Fr).reduce((e,t)=>{const n=Fr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function ef(e){const t=e.replace(Qu,""),n=ou(t,0),r=n>=ci[0]&&n<=ci[1],a=t.length===2?t[0]===t[1]:!1;return{value:Or(a?t[0]:t),isSecondary:r||a}}function tf(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(Fr[n]||{})[a]||Ju[n]}function fi(e,t){const n="".concat(zc).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const o=St(e.children).filter(k=>k.getAttribute(Tr)===t)[0],l=et.getComputedStyle(e,t),f=l.getPropertyValue("font-family"),c=f.match(Wc),m=l.getPropertyValue("font-weight"),x=l.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&x!=="none"&&x!==""){const k=l.getPropertyValue("content");let R=tf(f,m);const{value:w,isSecondary:_}=ef(k),h=c[0].startsWith("FontAwesome");let S=oa(R,w),A=S;if(h){const L=du(w);L.iconName&&L.prefix&&(S=L.iconName,R=L.prefix)}if(S&&!_&&(!o||o.getAttribute(ea)!==R||o.getAttribute(ta)!==A)){e.setAttribute(n,A),o&&e.removeChild(o);const L=qu(),{extra:N}=L;N.attributes[Tr]=t,Rr(S,R).then(F=>{const ee=sa(g(g({},L),{},{icons:{main:F,mask:ss()},prefix:R,iconName:A,extra:N,watchable:!0})),ie=K.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ie,e.firstChild):e.appendChild(ie),ie.outerHTML=ee.map(Z=>Jt(Z)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function nf(e){return Promise.all([fi(e,"::before"),fi(e,"::after")])}function rf(e){return e.parentNode!==document.head&&!~$c.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function di(e){if(Ke)return new Promise((t,n)=>{const r=St(e.querySelectorAll("*")).filter(rf).map(nf),a=la.begin("searchPseudoElements");ds(),Promise.all(r).then(()=>{a(),Dr(),t()}).catch(()=>{a(),Dr(),n()})})}var af={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=di,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=K}=t;P.searchPseudoElements&&di(n)}}};let pi=!1;var of={mixout(){return{dom:{unwatch(){ds(),pi=!0}}}},hooks(){return{bootstrap(){oi(Nr("mutationObserverCallbacks",{}))},noAuto(){ju()},watch(e){const{observeMutationsRoot:t}=e;pi?Dr():oi(Nr("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const mi=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var sf={mixout(){return{parse:{transform:e=>mi(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=mi(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:i}=t;const o={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},x={transform:"translate(".concat(i/2*-1," -256)")},k={outer:o,inner:m,path:x};return{tag:"g",attributes:g({},k.outer),children:[{tag:"g",attributes:g({},k.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:g(g({},n.icon.attributes),k.path)}]}]}}}};const lr={x:0,y:0,width:"100%",height:"100%"};function hi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function lf(e){return e.tag==="g"?e.children:[e]}var cf={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Xn(n.split(" ").map(a=>a.trim())):ss();return r.prefix||(r.prefix=tt()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:i,maskId:o,transform:l}=t;const{width:f,icon:c}=a,{width:m,icon:x}=i,k=eu({transform:l,containerWidth:m,iconWidth:f}),R={tag:"rect",attributes:g(g({},lr),{},{fill:"white"})},w=c.children?{children:c.children.map(hi)}:{},_={tag:"g",attributes:g({},k.inner),children:[hi(g({tag:c.tag,attributes:g(g({},c.attributes),k.path)},w))]},h={tag:"g",attributes:g({},k.outer),children:[_]},S="mask-".concat(o||Xt()),A="clip-".concat(o||Xt()),L={tag:"mask",attributes:g(g({},lr),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,h]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:lf(x)},L]};return n.push(N,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(S,")")},lr)}),{children:n,attributes:r}}}},uf={provides(e){let t=!1;et.matchMedia&&(t=et.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:g(g({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=g(g({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:g(g({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:g(g({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:g(g({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:g(g({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:g(g({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ff={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},df=[ru,Xu,Vu,Ku,Zu,af,of,sf,cf,uf,ff];wu(df,{mixoutsTo:Oe});Oe.noAuto;Oe.config;Oe.library;Oe.dom;const jr=Oe.parse;Oe.findIconDefinition;Oe.toHtml;const pf=Oe.icon;Oe.layer;Oe.text;Oe.counter;function gi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gi(Object(n),!0).forEach(function(r){gt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function An(e){"@babel/helpers - typeof";return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},An(e)}function gt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mf(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function hf(e,t){if(e==null)return{};var n=mf(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zr(e){return gf(e)||yf(e)||bf(e)||vf()}function gf(e){if(Array.isArray(e))return Ur(e)}function yf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bf(e,t){if(e){if(typeof e=="string")return Ur(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ur(e,t)}}function Ur(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xf(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,f=e.spin,c=e.spinPulse,m=e.spinReverse,x=e.pulse,k=e.fixedWidth,R=e.inverse,w=e.border,_=e.listItem,h=e.flip,S=e.size,A=e.rotation,L=e.pull,N=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":f,"fa-spin-reverse":m,"fa-spin-pulse":c,"fa-pulse":x,"fa-fw":k,"fa-inverse":R,"fa-border":w,"fa-li":_,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},gt(t,"fa-".concat(S),typeof S<"u"&&S!==null),gt(t,"fa-rotate-".concat(A),typeof A<"u"&&A!==null&&A!==0),gt(t,"fa-pull-".concat(L),typeof L<"u"&&L!==null),gt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(N).map(function(F){return N[F]?F:null}).filter(function(F){return F})}function wf(e){return e=e-0,e===e}function ms(e){return wf(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Af=["style"];function Sf(e){return e.charAt(0).toUpperCase()+e.slice(1)}function kf(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ms(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Sf(a)]=i:t[a]=i,t},{})}function hs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(f){return hs(e,f)}),a=Object.keys(t.attributes||{}).reduce(function(f,c){var m=t.attributes[c];switch(c){case"class":f.attrs.className=m,delete t.attributes.class;break;case"style":f.attrs.style=kf(m);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=m:f.attrs[ms(c)]=m}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=hf(n,Af);return a.attrs.style=ze(ze({},a.attrs.style),o),e.apply(void 0,[t.tag,ze(ze({},a.attrs),l)].concat(zr(r)))}var gs=!1;try{gs=!0}catch{}function Tf(){if(!gs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function yi(e){if(e&&An(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(jr.icon)return jr.icon(e);if(e===null)return null;if(e&&An(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function cr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?gt({},e,t):{}}var bi={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Je=wt.forwardRef(function(e,t){var n=ze(ze({},bi),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,l=n.title,f=n.titleId,c=n.maskId,m=yi(r),x=cr("classes",[].concat(zr(xf(n)),zr((o||"").split(" ")))),k=cr("transform",typeof n.transform=="string"?jr.transform(n.transform):n.transform),R=cr("mask",yi(a)),w=pf(m,ze(ze(ze(ze({},x),k),R),{},{symbol:i,title:l,titleId:f,maskId:c}));if(!w)return Tf("Could not find icon",m),null;var _=w.abstract,h={ref:t};return Object.keys(n).forEach(function(S){bi.hasOwnProperty(S)||(h[S]=n[S])}),Ef(_[0],h)});Je.displayName="FontAwesomeIcon";Je.propTypes={beat:d.bool,border:d.bool,beatFade:d.bool,bounce:d.bool,className:d.string,fade:d.bool,flash:d.bool,mask:d.oneOfType([d.object,d.array,d.string]),maskId:d.string,fixedWidth:d.bool,inverse:d.bool,flip:d.oneOf([!0,!1,"horizontal","vertical","both"]),icon:d.oneOfType([d.object,d.array,d.string]),listItem:d.bool,pull:d.oneOf(["right","left"]),pulse:d.bool,rotation:d.oneOf([0,90,180,270]),shake:d.bool,size:d.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d.bool,spinPulse:d.bool,spinReverse:d.bool,symbol:d.oneOfType([d.bool,d.string]),title:d.string,titleId:d.string,transform:d.oneOfType([d.string,d.object]),swapOpacity:d.bool};var Ef=hs.bind(null,wt.createElement);const{entries:ys,setPrototypeOf:vi,isFrozen:_f,getPrototypeOf:Cf,getOwnPropertyDescriptor:Of}=Object;let{freeze:Se,seal:Ne,create:bs}=Object,{apply:$r,construct:qr}=typeof Reflect<"u"&&Reflect;Se||(Se=function(t){return t});Ne||(Ne=function(t){return t});$r||($r=function(t,n,r){return t.apply(n,r)});qr||(qr=function(t,n){return new t(...n)});const fn=ke(Array.prototype.forEach),Pf=ke(Array.prototype.lastIndexOf),xi=ke(Array.prototype.pop),_t=ke(Array.prototype.push),Nf=ke(Array.prototype.splice),yn=ke(String.prototype.toLowerCase),ur=ke(String.prototype.toString),wi=ke(String.prototype.match),Ct=ke(String.prototype.replace),If=ke(String.prototype.indexOf),Lf=ke(String.prototype.trim),Re=ke(Object.prototype.hasOwnProperty),we=ke(RegExp.prototype.test),Ot=Rf(TypeError);function ke(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return $r(e,t,r)}}function Rf(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return qr(e,n)}}function z(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:yn;vi&&vi(e,null);let r=t.length;for(;r--;){let a=t[r];if(typeof a=="string"){const i=n(a);i!==a&&(_f(t)||(t[r]=i),a=i)}e[a]=!0}return e}function Mf(e){for(let t=0;t<e.length;t++)Re(e,t)||(e[t]=null);return e}function st(e){const t=bs(null);for(const[n,r]of ys(e))Re(e,n)&&(Array.isArray(r)?t[n]=Mf(r):r&&typeof r=="object"&&r.constructor===Object?t[n]=st(r):t[n]=r);return t}function Pt(e,t){for(;e!==null;){const r=Of(e,t);if(r){if(r.get)return ke(r.get);if(typeof r.value=="function")return ke(r.value)}e=Cf(e)}function n(){return null}return n}const Ai=Se(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),fr=Se(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),dr=Se(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Df=Se(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),pr=Se(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ff=Se(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Si=Se(["#text"]),ki=Se(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),mr=Se(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ti=Se(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),dn=Se(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),jf=Ne(/\{\{[\w\W]*|[\w\W]*\}\}/gm),zf=Ne(/<%[\w\W]*|[\w\W]*%>/gm),Uf=Ne(/\$\{[\w\W]*/gm),$f=Ne(/^data-[\-\w.\u00B7-\uFFFF]+$/),qf=Ne(/^aria-[\-\w]+$/),vs=Ne(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Hf=Ne(/^(?:\w+script|data):/i),Wf=Ne(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),xs=Ne(/^html$/i),Yf=Ne(/^[a-z][.\w]*(-[.\w]+)+$/i);var Ei=Object.freeze({__proto__:null,ARIA_ATTR:qf,ATTR_WHITESPACE:Wf,CUSTOM_ELEMENT:Yf,DATA_ATTR:$f,DOCTYPE_NAME:xs,ERB_EXPR:zf,IS_ALLOWED_URI:vs,IS_SCRIPT_OR_DATA:Hf,MUSTACHE_EXPR:jf,TMPLIT_EXPR:Uf});const Nt={element:1,text:3,progressingInstruction:7,comment:8,document:9},Bf=function(){return typeof window>"u"?null:window},Gf=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const a="data-tt-policy-suffix";n&&n.hasAttribute(a)&&(r=n.getAttribute(a));const i="dompurify"+(r?"#"+r:"");try{return t.createPolicy(i,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},_i=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function ws(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Bf();const t=I=>ws(I);if(t.version="3.2.4",t.removed=[],!e||!e.document||e.document.nodeType!==Nt.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const r=n,a=r.currentScript,{DocumentFragment:i,HTMLTemplateElement:o,Node:l,Element:f,NodeFilter:c,NamedNodeMap:m=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:x,DOMParser:k,trustedTypes:R}=e,w=f.prototype,_=Pt(w,"cloneNode"),h=Pt(w,"remove"),S=Pt(w,"nextSibling"),A=Pt(w,"childNodes"),L=Pt(w,"parentNode");if(typeof o=="function"){const I=n.createElement("template");I.content&&I.content.ownerDocument&&(n=I.content.ownerDocument)}let N,F="";const{implementation:ee,createNodeIterator:ie,createDocumentFragment:Z,getElementsByTagName:re}=n,{importNode:ce}=r;let V=_i();t.isSupported=typeof ys=="function"&&typeof L=="function"&&ee&&ee.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:de,ERB_EXPR:ye,TMPLIT_EXPR:Te,DATA_ATTR:me,ARIA_ATTR:rt,IS_SCRIPT_OR_DATA:_e,ATTR_WHITESPACE:be,CUSTOM_ELEMENT:at}=Ei;let{IS_ALLOWED_URI:We}=Ei,Q=null;const O=z({},[...Ai,...fr,...dr,...pr,...Si]);let b=null;const E=z({},[...ki,...mr,...Ti,...dn]);let T=Object.seal(bs(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),u=null,$=null,v=!0,X=!0,q=!1,H=!0,D=!1,ae=!0,te=!1,U=!1,oe=!1,j=!1,ne=!1,Me=!1,se=!0,it=!1;const ot="user-content-";let ve=!0,M=!1,Y={},De=null;const ft=z({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Le=null;const ga=z({},["audio","video","img","source","image","track"]);let Zn=null;const ya=z({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),en="http://www.w3.org/1998/Math/MathML",tn="http://www.w3.org/2000/svg",Ye="http://www.w3.org/1999/xhtml";let dt=Ye,Qn=!1,Jn=null;const Ds=z({},[en,tn,Ye],ur);let nn=z({},["mi","mo","mn","ms","mtext"]),rn=z({},["annotation-xml"]);const Fs=z({},["title","style","font","a","script"]);let Tt=null;const js=["application/xhtml+xml","text/html"],zs="text/html";let ue=null,pt=null;const Us=n.createElement("form"),ba=function(s){return s instanceof RegExp||s instanceof Function},er=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(pt&&pt===s)){if((!s||typeof s!="object")&&(s={}),s=st(s),Tt=js.indexOf(s.PARSER_MEDIA_TYPE)===-1?zs:s.PARSER_MEDIA_TYPE,ue=Tt==="application/xhtml+xml"?ur:yn,Q=Re(s,"ALLOWED_TAGS")?z({},s.ALLOWED_TAGS,ue):O,b=Re(s,"ALLOWED_ATTR")?z({},s.ALLOWED_ATTR,ue):E,Jn=Re(s,"ALLOWED_NAMESPACES")?z({},s.ALLOWED_NAMESPACES,ur):Ds,Zn=Re(s,"ADD_URI_SAFE_ATTR")?z(st(ya),s.ADD_URI_SAFE_ATTR,ue):ya,Le=Re(s,"ADD_DATA_URI_TAGS")?z(st(ga),s.ADD_DATA_URI_TAGS,ue):ga,De=Re(s,"FORBID_CONTENTS")?z({},s.FORBID_CONTENTS,ue):ft,u=Re(s,"FORBID_TAGS")?z({},s.FORBID_TAGS,ue):{},$=Re(s,"FORBID_ATTR")?z({},s.FORBID_ATTR,ue):{},Y=Re(s,"USE_PROFILES")?s.USE_PROFILES:!1,v=s.ALLOW_ARIA_ATTR!==!1,X=s.ALLOW_DATA_ATTR!==!1,q=s.ALLOW_UNKNOWN_PROTOCOLS||!1,H=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,D=s.SAFE_FOR_TEMPLATES||!1,ae=s.SAFE_FOR_XML!==!1,te=s.WHOLE_DOCUMENT||!1,j=s.RETURN_DOM||!1,ne=s.RETURN_DOM_FRAGMENT||!1,Me=s.RETURN_TRUSTED_TYPE||!1,oe=s.FORCE_BODY||!1,se=s.SANITIZE_DOM!==!1,it=s.SANITIZE_NAMED_PROPS||!1,ve=s.KEEP_CONTENT!==!1,M=s.IN_PLACE||!1,We=s.ALLOWED_URI_REGEXP||vs,dt=s.NAMESPACE||Ye,nn=s.MATHML_TEXT_INTEGRATION_POINTS||nn,rn=s.HTML_INTEGRATION_POINTS||rn,T=s.CUSTOM_ELEMENT_HANDLING||{},s.CUSTOM_ELEMENT_HANDLING&&ba(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(T.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&ba(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(T.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(T.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),D&&(X=!1),ne&&(j=!0),Y&&(Q=z({},Si),b=[],Y.html===!0&&(z(Q,Ai),z(b,ki)),Y.svg===!0&&(z(Q,fr),z(b,mr),z(b,dn)),Y.svgFilters===!0&&(z(Q,dr),z(b,mr),z(b,dn)),Y.mathMl===!0&&(z(Q,pr),z(b,Ti),z(b,dn))),s.ADD_TAGS&&(Q===O&&(Q=st(Q)),z(Q,s.ADD_TAGS,ue)),s.ADD_ATTR&&(b===E&&(b=st(b)),z(b,s.ADD_ATTR,ue)),s.ADD_URI_SAFE_ATTR&&z(Zn,s.ADD_URI_SAFE_ATTR,ue),s.FORBID_CONTENTS&&(De===ft&&(De=st(De)),z(De,s.FORBID_CONTENTS,ue)),ve&&(Q["#text"]=!0),te&&z(Q,["html","head","body"]),Q.table&&(z(Q,["tbody"]),delete u.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ot('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ot('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');N=s.TRUSTED_TYPES_POLICY,F=N.createHTML("")}else N===void 0&&(N=Gf(R,a)),N!==null&&typeof F=="string"&&(F=N.createHTML(""));Se&&Se(s),pt=s}},va=z({},[...fr,...dr,...Df]),xa=z({},[...pr,...Ff]),$s=function(s){let y=L(s);(!y||!y.tagName)&&(y={namespaceURI:dt,tagName:"template"});const C=yn(s.tagName),J=yn(y.tagName);return Jn[s.namespaceURI]?s.namespaceURI===tn?y.namespaceURI===Ye?C==="svg":y.namespaceURI===en?C==="svg"&&(J==="annotation-xml"||nn[J]):!!va[C]:s.namespaceURI===en?y.namespaceURI===Ye?C==="math":y.namespaceURI===tn?C==="math"&&rn[J]:!!xa[C]:s.namespaceURI===Ye?y.namespaceURI===tn&&!rn[J]||y.namespaceURI===en&&!nn[J]?!1:!xa[C]&&(Fs[C]||!va[C]):!!(Tt==="application/xhtml+xml"&&Jn[s.namespaceURI]):!1},Fe=function(s){_t(t.removed,{element:s});try{L(s).removeChild(s)}catch{h(s)}},an=function(s,y){try{_t(t.removed,{attribute:y.getAttributeNode(s),from:y})}catch{_t(t.removed,{attribute:null,from:y})}if(y.removeAttribute(s),s==="is")if(j||ne)try{Fe(y)}catch{}else try{y.setAttribute(s,"")}catch{}},wa=function(s){let y=null,C=null;if(oe)s="<remove></remove>"+s;else{const pe=wi(s,/^[\r\n\t ]+/);C=pe&&pe[0]}Tt==="application/xhtml+xml"&&dt===Ye&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const J=N?N.createHTML(s):s;if(dt===Ye)try{y=new k().parseFromString(J,Tt)}catch{}if(!y||!y.documentElement){y=ee.createDocument(dt,"template",null);try{y.documentElement.innerHTML=Qn?F:J}catch{}}const he=y.body||y.documentElement;return s&&C&&he.insertBefore(n.createTextNode(C),he.childNodes[0]||null),dt===Ye?re.call(y,te?"html":"body")[0]:te?y.documentElement:he},Aa=function(s){return ie.call(s.ownerDocument||s,s,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},tr=function(s){return s instanceof x&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof m)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},Sa=function(s){return typeof l=="function"&&s instanceof l};function Be(I,s,y){fn(I,C=>{C.call(t,s,y,pt)})}const ka=function(s){let y=null;if(Be(V.beforeSanitizeElements,s,null),tr(s))return Fe(s),!0;const C=ue(s.nodeName);if(Be(V.uponSanitizeElement,s,{tagName:C,allowedTags:Q}),s.hasChildNodes()&&!Sa(s.firstElementChild)&&we(/<[/\w]/g,s.innerHTML)&&we(/<[/\w]/g,s.textContent)||s.nodeType===Nt.progressingInstruction||ae&&s.nodeType===Nt.comment&&we(/<[/\w]/g,s.data))return Fe(s),!0;if(!Q[C]||u[C]){if(!u[C]&&Ea(C)&&(T.tagNameCheck instanceof RegExp&&we(T.tagNameCheck,C)||T.tagNameCheck instanceof Function&&T.tagNameCheck(C)))return!1;if(ve&&!De[C]){const J=L(s)||s.parentNode,he=A(s)||s.childNodes;if(he&&J){const pe=he.length;for(let Ee=pe-1;Ee>=0;--Ee){const je=_(he[Ee],!0);je.__removalCount=(s.__removalCount||0)+1,J.insertBefore(je,S(s))}}}return Fe(s),!0}return s instanceof f&&!$s(s)||(C==="noscript"||C==="noembed"||C==="noframes")&&we(/<\/no(script|embed|frames)/i,s.innerHTML)?(Fe(s),!0):(D&&s.nodeType===Nt.text&&(y=s.textContent,fn([de,ye,Te],J=>{y=Ct(y,J," ")}),s.textContent!==y&&(_t(t.removed,{element:s.cloneNode()}),s.textContent=y)),Be(V.afterSanitizeElements,s,null),!1)},Ta=function(s,y,C){if(se&&(y==="id"||y==="name")&&(C in n||C in Us))return!1;if(!(X&&!$[y]&&we(me,y))){if(!(v&&we(rt,y))){if(!b[y]||$[y]){if(!(Ea(s)&&(T.tagNameCheck instanceof RegExp&&we(T.tagNameCheck,s)||T.tagNameCheck instanceof Function&&T.tagNameCheck(s))&&(T.attributeNameCheck instanceof RegExp&&we(T.attributeNameCheck,y)||T.attributeNameCheck instanceof Function&&T.attributeNameCheck(y))||y==="is"&&T.allowCustomizedBuiltInElements&&(T.tagNameCheck instanceof RegExp&&we(T.tagNameCheck,C)||T.tagNameCheck instanceof Function&&T.tagNameCheck(C))))return!1}else if(!Zn[y]){if(!we(We,Ct(C,be,""))){if(!((y==="src"||y==="xlink:href"||y==="href")&&s!=="script"&&If(C,"data:")===0&&Le[s])){if(!(q&&!we(_e,Ct(C,be,"")))){if(C)return!1}}}}}}return!0},Ea=function(s){return s!=="annotation-xml"&&wi(s,at)},_a=function(s){Be(V.beforeSanitizeAttributes,s,null);const{attributes:y}=s;if(!y||tr(s))return;const C={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:b,forceKeepAttr:void 0};let J=y.length;for(;J--;){const he=y[J],{name:pe,namespaceURI:Ee,value:je}=he,Et=ue(pe);let xe=pe==="value"?je:Lf(je);if(C.attrName=Et,C.attrValue=xe,C.keepAttr=!0,C.forceKeepAttr=void 0,Be(V.uponSanitizeAttribute,s,C),xe=C.attrValue,it&&(Et==="id"||Et==="name")&&(an(pe,s),xe=ot+xe),ae&&we(/((--!?|])>)|<\/(style|title)/i,xe)){an(pe,s);continue}if(C.forceKeepAttr||(an(pe,s),!C.keepAttr))continue;if(!H&&we(/\/>/i,xe)){an(pe,s);continue}D&&fn([de,ye,Te],Oa=>{xe=Ct(xe,Oa," ")});const Ca=ue(s.nodeName);if(Ta(Ca,Et,xe)){if(N&&typeof R=="object"&&typeof R.getAttributeType=="function"&&!Ee)switch(R.getAttributeType(Ca,Et)){case"TrustedHTML":{xe=N.createHTML(xe);break}case"TrustedScriptURL":{xe=N.createScriptURL(xe);break}}try{Ee?s.setAttributeNS(Ee,pe,xe):s.setAttribute(pe,xe),tr(s)?Fe(s):xi(t.removed)}catch{}}}Be(V.afterSanitizeAttributes,s,null)},qs=function I(s){let y=null;const C=Aa(s);for(Be(V.beforeSanitizeShadowDOM,s,null);y=C.nextNode();)Be(V.uponSanitizeShadowNode,y,null),ka(y),_a(y),y.content instanceof i&&I(y.content);Be(V.afterSanitizeShadowDOM,s,null)};return t.sanitize=function(I){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=null,C=null,J=null,he=null;if(Qn=!I,Qn&&(I="<!-->"),typeof I!="string"&&!Sa(I))if(typeof I.toString=="function"){if(I=I.toString(),typeof I!="string")throw Ot("dirty is not a string, aborting")}else throw Ot("toString is not a function");if(!t.isSupported)return I;if(U||er(s),t.removed=[],typeof I=="string"&&(M=!1),M){if(I.nodeName){const je=ue(I.nodeName);if(!Q[je]||u[je])throw Ot("root node is forbidden and cannot be sanitized in-place")}}else if(I instanceof l)y=wa("<!---->"),C=y.ownerDocument.importNode(I,!0),C.nodeType===Nt.element&&C.nodeName==="BODY"||C.nodeName==="HTML"?y=C:y.appendChild(C);else{if(!j&&!D&&!te&&I.indexOf("<")===-1)return N&&Me?N.createHTML(I):I;if(y=wa(I),!y)return j?null:Me?F:""}y&&oe&&Fe(y.firstChild);const pe=Aa(M?I:y);for(;J=pe.nextNode();)ka(J),_a(J),J.content instanceof i&&qs(J.content);if(M)return I;if(j){if(ne)for(he=Z.call(y.ownerDocument);y.firstChild;)he.appendChild(y.firstChild);else he=y;return(b.shadowroot||b.shadowrootmode)&&(he=ce.call(r,he,!0)),he}let Ee=te?y.outerHTML:y.innerHTML;return te&&Q["!doctype"]&&y.ownerDocument&&y.ownerDocument.doctype&&y.ownerDocument.doctype.name&&we(xs,y.ownerDocument.doctype.name)&&(Ee="<!DOCTYPE "+y.ownerDocument.doctype.name+`>
`+Ee),D&&fn([de,ye,Te],je=>{Ee=Ct(Ee,je," ")}),N&&Me?N.createHTML(Ee):Ee},t.setConfig=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};er(I),U=!0},t.clearConfig=function(){pt=null,U=!1},t.isValidAttribute=function(I,s,y){pt||er({});const C=ue(I),J=ue(s);return Ta(C,J,y)},t.addHook=function(I,s){typeof s=="function"&&_t(V[I],s)},t.removeHook=function(I,s){if(s!==void 0){const y=Pf(V[I],s);return y===-1?void 0:Nf(V[I],y,1)[0]}return xi(V[I])},t.removeHooks=function(I){V[I]=[]},t.removeAllHooks=function(){V=_i()},t}ws();function*As(e="id-",t=0){let n=t;for(;;)n+=1,yield e+n}function Ss(){const e=(document.currentScript&&document.currentScript.src||"").match(/(.*\/)/);return e&&e.length>0?e[0].substr(0,e[0].length-1):"/"}d.shape({event:d.string,action:d.string,name:d.string,region:d.string,section:d.string,component:d.string,type:d.string,text:d.string});const le=({event:e="",action:t="",name:n="",type:r="",section:a="",text:i="",region:o="",component:l=""})=>{const{dataLayer:f}=window,c={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:o.toLowerCase(),section:a.toLowerCase(),text:i.toLowerCase(),component:l.toLowerCase()};f&&f.push(c)},Xf={Lg:"992px",Xl:"1260px"},ks=B.createContext(),ua=({initialValue:e,children:t})=>{const n={...e,breakpoint:Xf[e.breakpoint]};return p.jsx(ks.Provider,{value:n,children:t})};ua.propTypes={initialValue:d.shape(yo).isRequired,children:d.node.isRequired};const qe=()=>{const e=B.useContext(ks);if(e===void 0)throw new Error("useAppContext must be used within a AppContextProvider");return e};ua.__docgenInfo={description:"",methods:[],displayName:"AppContextProvider",props:{initialValue:{description:"",type:{name:"shape",value:{isPartner:{name:"bool",required:!1},navTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},partnerLogo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},logo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},title:{name:"string",required:!1},parentOrg:{name:"custom",raw:"TitlePropTypes.parentOrg",required:!1},parentOrgUrl:{name:"custom",raw:"TitlePropTypes.parentOrgUrl",required:!1},baseUrl:{name:"custom",raw:"TitlePropTypes.baseUrl",required:!1},loggedIn:{name:"custom",raw:"LoginPropTypes.loggedIn",required:!1},userName:{name:"custom",raw:"LoginPropTypes.userName",required:!1},loginLink:{name:"custom",raw:"LoginPropTypes.loginLink",required:!1},onLoginClick:{name:"func",required:!1},logoutLink:{name:"custom",raw:"LoginPropTypes.logoutLink",required:!1},onLogoutClick:{name:"func",required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},breakpoint:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}],required:!1},animateTitle:{name:"bool",required:!1},expandOnHover:{name:"bool",required:!1},mobileNavTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},hasNavigation:{name:"bool",required:!1},searchUrl:{name:"string",required:!1},site:{name:"string",required:!1},renderDiv:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}],required:!1}}},required:!0},children:{description:"",type:{name:"node"},required:!0}}};const Kn=e=>{const t=window==null?void 0:window.matchMedia(`(max-width: ${e})`),[n,r]=B.useState(t==null?void 0:t.matches),a=i=>{r(i.matches)};return B.useEffect(()=>(t.addEventListener("change",a),()=>t.removeEventListener("change",a)),[]),n},Vf=Ae.div`
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
`,Kf=Ae.div`
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
`,Ci={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar"},Ts=()=>{const{loggedIn:e,userName:t,logoutLink:n,loginLink:r,onLoginClick:a,onLogoutClick:i,breakpoint:o}=qe();return p.jsx(Kf,{className:"nav-link login-status",breakpoint:o,children:e?p.jsxs(p.Fragment,{children:[t?p.jsx("span",{className:"name","data-testid":"user-name",children:t}):"",p.jsx("a",{className:"signout",href:n,onClick:l=>{le({...Ci,text:"sign out"}),i==null||i(l)},children:"Sign Out"})]}):p.jsx("a",{href:r,onClick:l=>{le({...Ci,text:"sign in"}),a==null||a(l)},children:"Sign In"})})};Ts.__docgenInfo={description:"",methods:[],displayName:"Login"};const Zf=Ae.form`
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
`,hr={event:"search",action:"type",name:"onenter",type:"main search",region:"navbar",section:"topbar"},Es=()=>{const{breakpoint:e,searchUrl:t,site:n}=qe(),r=Kn(e),a=B.useRef(null),[i,o]=B.useState(!1);B.useEffect(()=>{i&&a.current.focus()},[i]);const l=c=>{const m=c.target;c.preventDefault(),le({...hr,text:c.target.elements.q.value}),setTimeout(()=>{m.submit()},100)},f=()=>{o(c=>{const m=!c;return le({...hr,event:"link",action:"click",name:"onclick",text:m?"search icon":"close search icon"}),m})};return p.jsxs(Zf,{breakpoint:e,action:t,onSubmit:l,method:"get",name:"gs",className:i?"open-search":"","data-testid":"universal-nav-search-form",children:[r?p.jsxs("label",{children:[p.jsx(Je,{icon:qa}),p.jsx("input",{ref:a,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0,onChange:c=>le({...hr,text:c.target.value})})]}):p.jsxs(p.Fragment,{children:[p.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:f,className:"search-button","data-testid":"search-button",children:p.jsx(Je,{icon:qa})}),i&&p.jsxs(p.Fragment,{children:[p.jsx("input",{ref:a,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0}),p.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:f,className:"close-search","data-testid":"close-search",children:p.jsx(Je,{icon:Ro})})]})]}),p.jsx("input",{name:"url_host",value:n,type:"hidden"}),p.jsx("input",{name:"site",value:"default_collection",type:"hidden"}),p.jsx("input",{name:"sort",value:"date:D:L:d1",type:"hidden"}),p.jsx("input",{name:"output",value:"xml_no_dtd",type:"hidden"}),p.jsx("input",{name:"ie",value:"UTF-8",type:"hidden"}),p.jsx("input",{name:"oe",value:"UTF-8",type:"hidden"}),p.jsx("input",{name:"client",value:"asu_frontend",type:"hidden"}),p.jsx("input",{name:"proxystylesheet",value:"asu_frontend",type:"hidden"})]})};Es.__docgenInfo={description:"",methods:[],displayName:"Search"};const Qf={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar",text:""},fa=()=>{const{breakpoint:e}=qe();function t(){try{return window.location.href}catch(r){return console.error(r),""}}const n=[{className:"nav-link visually-hidden-focusable",href:"#skip-to-content",text:"Skip to main content"},{className:"nav-link visually-hidden-focusable",href:`https://accessibility.asu.edu/report?a11yref=${t()}`,text:"Report an accessibility problem"},{className:"nav-link",href:"https://asu.edu",text:"ASU Home"},{className:"nav-link",href:"https://my.asu.edu",text:"My ASU"},{className:"nav-link",href:"https://www.asu.edu/academics/colleges-schools",text:"Colleges and Schools"}];return p.jsx(Vf,{breakpoint:e,className:"universal-nav","data-testid":"universal-navbar","data-elastic-exclude":"data-elastic-exclude",children:p.jsx("div",{className:"container-xl",children:p.jsx("div",{className:"header-top",children:p.jsxs("nav",{className:"nav","aria-label":"ASU Global",children:[p.jsxs("div",{className:"links-container",children:[n.map(r=>p.jsx("a",{className:r.className,href:r.href,onClick:()=>le({...Qf,text:r.text}),children:r.text},r.href)),p.jsx(Ts,{})]}),p.jsx(Es,{})]})})})})};fa.__docgenInfo={description:"",methods:[],displayName:"UniversalNavbar"};const Jf=Ae.div`
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
`,ed=Ae.a`
  display: unset;
  padding: 0;
  margin: 0;
  font-size: unset;
  line-height: unset;
  white-space: unset;
`,_s=Ss(),td=`${_s}/assets/img/arizona-state-university-logo-vertical.png`,nd=`${_s}/assets/img/arizona-state-university-logo.png`,Cs=()=>{const{logo:e}=qe();return p.jsxs(ed,{href:(e==null?void 0:e.brandLink)??"https://asu.edu",className:"navbar-brand","data-testid":"logo",onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"asu logo"}),children:[p.jsx("img",{className:"vert",src:(e==null?void 0:e.src)??td,alt:(e==null?void 0:e.alt)??"Arizona State University",title:(e==null?void 0:e.title)??"ASU home page",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),p.jsx("img",{className:"horiz",src:(e==null?void 0:e.mobileSrc)??nd,alt:(e==null?void 0:e.alt)??"Arizona State University",title:(e==null?void 0:e.title)??"ASU home page",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})};Cs.__docgenInfo={description:"",methods:[],displayName:"Logo"};const rd=Ae.nav`
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
`,ad=Ae.div`
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
`,id={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},Os=({text:e})=>p.jsx("h3",{className:"ul-heading",children:e});Os.propTypes={text:d.string};const Ps=({link:e,dropdownName:t,handleLinkEvent:n})=>p.jsx("li",{className:"nav-button",children:p.jsx(At,{text:e.text,color:e.color||"dark",href:e.href,onClick:r=>n(r,e),onKeyDown:n,onFocus:()=>le({text:e.text,component:t}),"data-testid":"submenu-item"})});Ps.propTypes={link:d.shape({text:d.string,color:d.string,href:d.string}),dropdownName:d.string,handleLinkEvent:d.func};const Ns=({link:e,dropdownName:t,handleLinkEvent:n})=>p.jsx("li",{className:"nav-link",children:p.jsx("a",{...e.href?{}:{tabIndex:0},href:e.href,onClick:r=>n(r,e),onKeyDown:r=>n(r,e),onFocus:()=>le({text:e.text,component:t}),"data-testid":"submenu-item",children:e.text})});Ns.propTypes={link:d.shape({text:d.string,href:d.string}),dropdownName:d.string,handleLinkEvent:d.func};const da=({dropdownName:e,items:t,buttons:n,classes:r,listId:a,setItemOpened:i,parentLink:o})=>{const{breakpoint:l}=qe(),f=(t==null?void 0:t.length)>2,c=B.useRef(null),[m,x]=B.useState(!1),k=(t==null?void 0:t.length)>1;B.useEffect(()=>{if(window&&c.current){const h=c.current.getBoundingClientRect().left,S=window.innerWidth*.55;x(h>S)}},[]);const R=h=>h.stopPropagation(),w=(h,S)=>{var Z;const{key:A,type:L,target:N}=h,{parentElement:F}=N,ee=()=>{var ce;const re=(ce=F.nextElementSibling)==null?void 0:ce.firstChild;re&&re.focus()},ie=()=>{var ce;const re=(ce=F.previousElementSibling)==null?void 0:ce.firstChild;re&&re.focus()};R(h),A==="ArrowDown"?(h.preventDefault(),ee()):A==="ArrowUp"?(h.preventDefault(),ie()):A==="Escape"?(i(),o&&o.focus()):(A==="Enter"||A===" "||L==="click")&&((Z=S==null?void 0:S.onClick)==null||Z.call(S,h),le({...id,text:S.text}))},_=(h,S)=>{const A=`${h.text}-${h.href||S}`;return h.type==="heading"?p.jsx(Os,{text:h.text},A):h.type==="button"?p.jsx(Ps,{link:h,dropdownName:e,handleLinkEvent:w},A):p.jsx(Ns,{link:h,dropdownName:e,handleLinkEvent:w},A)};return p.jsxs(ad,{ref:c,className:`${r}${m?" aligned-right":""}${f?" mega":""}`,breakpoint:l,children:[p.jsx("div",{id:k?a:null,className:"dropdown-container",children:t==null?void 0:t.map((h,S)=>{const L=As(`dropdown-item-${S}-`).next().value;return p.jsx("ul",{id:k?`${a}-${L}`:a,children:h.map((N,F)=>_(N,F))},L)})}),n&&p.jsx("div",{className:"dropdown-button-container",children:p.jsx("div",{children:n.map((h,S)=>p.jsx(At,{color:h.color,text:h.text,href:h.href,onClick:R},`${h.text}-${h.href||S}`))})})]})};da.propTypes={dropdownName:d.string,items:d.arrayOf(d.arrayOf(d.shape({text:d.string,selected:d.bool,onClick:d.func,href:d.string}))),buttons:d.arrayOf(d.shape(kn)),classes:d.string,listId:d.string,setItemOpened:d.func,parentLink:d.shape({focus:d.func})};da.__docgenInfo={description:`@param {DropdownItemProps} props
@returns {JSX.Element}`,methods:[],displayName:"DropdownItem",props:{dropdownName:{description:"",type:{name:"string"},required:!1},items:{description:"",type:{name:"arrayOf",value:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1},selected:{name:"bool",required:!1},onClick:{name:"func",required:!1},href:{name:"string",required:!1}}}}},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},classes:{description:"",type:{name:"string"},required:!1},listId:{description:"",type:{name:"string"},required:!1},setItemOpened:{description:"",type:{name:"func"},required:!1},parentLink:{description:"",type:{name:"shape",value:{focus:{name:"func",required:!1}}},required:!1}}};const od=Ae.li`
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
`,sd={event:"collapse",type:"click"},gr={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},Is=({children:e})=>p.jsxs(p.Fragment,{children:[p.jsx(Je,{icon:lc,className:"icon-nav-item",alt:""}),p.jsx("span",{className:"mobile-only",children:e})]});Is.propTypes={children:d.node};const pa=({link:e,setItemOpened:t,itemOpened:n})=>{const r=B.useRef(null),a=B.useRef(null),i=e.id===n,{breakpoint:o,expandOnHover:l,title:f}=qe(),c=Kn(o);B.useEffect(()=>{const w=_=>{var h;i&&!((h=r==null?void 0:r.current)!=null&&h.contains(_.target))&&t()};return document.addEventListener("click",w,!0),()=>{document.removeEventListener("click",w,!0)}},[i]);const m=B.useMemo(()=>{var w;return e.type==="icon-home"?p.jsx(Is,{children:e.text}):p.jsxs("span",{children:[e.text,!!((w=e.items)!=null&&w.length)&&p.jsx(Je,{icon:uc,className:`chevron-icon ${i?"open":""}`,alt:""})]})},[e]),x=()=>{var S;const w=!!((S=e.items)!=null&&S.length),_=i?"close":"open",{text:h}=e;le(w?{...gr,...sd,action:_,text:h}:{...gr,text:e.type==="icon-home"?"home button":h})},k=w=>{var S,A;if(!e.items&&e.href){le({...gr,text:e.text});return}const{key:_}=w;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"," ","Escape","Click"].includes(_)){if(w.preventDefault(),_==="Escape"&&i){t();return}if((_==="Enter"||_===" ")&&(e.items&&(!l&&!c||c)&&t(),x(),(S=e.onClick)==null||S.call(e,w)),(_==="ArrowDown"||_==="ArrowRight")&&i){const L=document.querySelectorAll(`.header-dropdown-${e.id} li.nav-link a`);L.length&&L[0].focus()}}else w.type==="click"&&e.items?(w.preventDefault(),x(),t()):w.type==="click"&&(x(),(A=e.onClick)==null||A.call(e,w))},R=()=>{l&&!c&&(t(),x())};return p.jsxs(od,{breakpoint:o,ref:r,onMouseEnter:R,onMouseLeave:R,children:[p.jsx("a",{onKeyDown:k,onClick:k,href:e.href,...e.items?{"aria-expanded":i}:{},...e.href?{}:{tabIndex:0},"aria-owns":e.items?`dropdown-${e.id}`:null,className:`${e.class?e.class:""}${e.selected?" nav-item-selected":""}${i?" open-link":""}`,"data-testid":"nav-item",title:e.type==="icon-home"&&f?`${f} home page`:e.text,ref:a,children:m}),e.items&&p.jsx(da,{items:e.items,buttons:e.buttons,dropdownName:e.text,classes:`header-dropdown-${e.id} ${i?"opened":""}`,listId:`dropdown-${e.id}`,setItemOpened:t,parentLink:a==null?void 0:a.current})]})};pa.propTypes={link:yr,setItemOpened:d.func,itemOpened:d.number};pa.__docgenInfo={description:`@param {{ link: NavTreeProps, setItemOpened: Function, itemOpened: number }} props
@returns {JSX.Element}`,methods:[],displayName:"NavItem",props:{link:{description:"",type:{name:"shape",value:{id:{name:"number",required:!1},href:{name:"string",required:!1},text:{name:"string",required:!1},type:{name:"string",required:!1},selected:{name:"bool",required:!1},items:{name:"arrayOf",value:{name:"arrayOf",value:{name:"object"}},required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},class:{name:"string",required:!1}}},required:!1},setItemOpened:{description:"",type:{name:"func"},required:!1},itemOpened:{description:"",type:{name:"number"},required:!1}}};const Hr=()=>{const{navTree:e,mobileNavTree:t,buttons:n,breakpoint:r}=qe(),a=Kn(r),[i,o]=B.useState(void 0),l=c=>{o(m=>i===c?void 0:c)},f=(c,m)=>{const x={...c,id:m},R=As(`${c.text}-${m}-`).next().value;return p.jsx(pa,{link:x,setItemOpened:()=>l(m),itemOpened:i},R)};return p.jsxs(rd,{breakpoint:r,"data-testid":"navigation","aria-label":"Site",children:[((e==null?void 0:e.length)||(t==null?void 0:t.length)||(n==null?void 0:n.length))&&p.jsxs("div",{className:"content-container",children:[((e==null?void 0:e.length)||(t==null?void 0:t.length))&&p.jsx("ul",{className:"nav-list",children:t!=null&&t.length&&a?t==null?void 0:t.map((c,m)=>f(c,m)):e==null?void 0:e.map((c,m)=>f(c,m))}),!!(n!=null&&n.length)&&p.jsx("form",{className:"buttons-container","data-testid":"buttons-container",children:n==null?void 0:n.map(c=>B.createElement(At,{...c,key:c.text,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:c.text})}))})]}),a&&p.jsx(fa,{})]})};Hr.__docgenInfo={description:"",methods:[],displayName:"NavbarContainer"};const ld=Ae.div`
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
`,ma=Ss(),cd=`${ma}/assets/img/arizona-state-university-logo-vertical.png`,ud=`${ma}/assets/img/arizona-state-university-logo.png`,fd=`${ma}/assets/img/asu-starbucks.png`,Ls=()=>{const{partnerLogo:e,logo:t,breakpoint:n}=qe();return p.jsxs(ld,{breakpoint:n,"data-testid":"partner",children:[p.jsx("a",{href:(e==null?void 0:e.brandLink)??"https://starbucks.asu.edu/",onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"partner logo"}),children:p.jsx("img",{src:(e==null?void 0:e.src)??fd,alt:(e==null?void 0:e.alt)??"ASU Starbucks logo",width:"232",height:"81",decoding:"async",fetchpriority:"high"})}),p.jsxs("a",{href:(t==null?void 0:t.brandLink)??"https://asu.edu",onClick:()=>le({text:"asu logo"}),children:[p.jsx("img",{className:"vert",src:(t==null?void 0:t.src)??cd,alt:(t==null?void 0:t.alt)??"Arizona State University",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),p.jsx("img",{className:"horiz",src:(t==null?void 0:t.mobileSrc)??ud,alt:(t==null?void 0:t.alt)??"Arizona State University",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})]})};Ls.__docgenInfo={description:"",methods:[],displayName:"Partner"};const dd=(e,t)=>{const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n},pd=e=>{const t="localhost",n="title_loaded",r=new Date,a=e||window.location.hostname,i=localStorage.getItem("title_loaded"),o=r.getTime()>parseInt(i,10),l=a===t,f=document.referrer.includes(a);if(l||!f&&(!i||o)){const m=dd(r,10).getTime();return localStorage.setItem(n,m.toString()),!0}return!1},md={"992px":"993px","1260px":"1261px"},Oi=Ae.div`
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

  @media (min-width: ${({breakpoint:e})=>md[e]}) {
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
`,ha=()=>{const[e,t]=B.useState(!1),{title:n,parentOrg:r,parentOrgUrl:a,baseUrl:i,breakpoint:o,animateTitle:l}=qe();return B.useEffect(()=>{if(l!==!1){let f=i==="/"?window.location.hostname:i;!f.includes(window.location.hostname)&&f.indexOf("/")===0&&(f=window.location.hostname+f),pd(f)&&t(!0)}},[e,l,i]),r?p.jsxs(Oi,{breakpoint:o,className:"title","data-testid":"title",children:[p.jsx("a",{className:"unit-name",href:a,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:r}),title:`${r} home page`,children:r}),p.jsx("a",{className:`subunit-name ${e?"active":""}`,href:i,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:n}),title:`${n} home page`,children:n})]}):p.jsx(Oi,{breakpoint:o,className:"title","data-testid":"title",children:p.jsx("a",{className:`title-subunit-name ${e?"active":""}`,href:i,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:n}),title:`${n} home page`,children:n})})};ha.propTypes={...pn};ha.__docgenInfo={description:"",methods:[],displayName:"Title",props:{baseUrl:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},animate:{description:"",type:{name:"bool"},required:!1}}};const Rs=()=>{const{breakpoint:e,isPartner:t,hasNavigation:n}=qe(),[r,a]=B.useState(!1),i=Kn(e),o=()=>{a(f=>!f)},l=()=>{o(),le({event:"collapse",action:r?"close":"open",type:"click",text:"menu button tablet"})};return p.jsxs(p.Fragment,{children:[!i&&p.jsx(fa,{}),p.jsx(Jf,{breakpoint:e,children:p.jsx("div",{className:"container-xl",children:p.jsx("div",{className:"header-main",children:p.jsxs("div",{className:`navbar navbar-expand-xl ${t?"partner":""}`,children:[!t&&p.jsx(Cs,{}),p.jsx("button",{className:`navbar-toggler${r?"":" collapsed"}`,type:"button",onClick:l,"aria-label":"Toggle navigation",children:p.jsx(Je,{icon:r?Ro:oc,alt:""})}),p.jsxs("div",{className:`${t?"":"expand-title"}${n?"":" no-navigation"}`,children:[t?p.jsx(Ls,{}):p.jsx(ha,{}),!i&&p.jsx(Hr,{})]}),r&&i&&p.jsx(Hr,{})]})})})})]})};Rs.__docgenInfo={description:"",methods:[],displayName:"HeaderMain"};const hd=(e,t)=>e==null?void 0:e.findIndex(n=>{var r;return(n==null?void 0:n.href)===t||Array.isArray(n.items)&&((r=n.items)==null?void 0:r.flat().find(({href:a})=>a===t))}),gd=e=>e==null?void 0:e.find(t=>t.selected),Pi=e=>{if(!Array.isArray(e)||e.length===0||gd(e))return e;let t="";if(window!=null&&window.location&&(t=window.location.pathname+window.location.search),!t)return e;const n=hd(e,t);if(n===-1)return e;const r=[...e];return r[n].selected=!0,r},Ms={Lg:"992px",Xl:"1260px"},yd=Ae.header`
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
  @media (min-width: ${({breakpoint:e})=>Ms[e]}) {
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
`,bd=Ae.div`
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
  @media (min-width: ${({breakpoint:e})=>Ms[e]}) {
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
`,kt=({isPartner:e,navTree:t,title:n,baseUrl:r,parentOrg:a,parentOrgUrl:i,partnerLogo:o,logo:l,loggedIn:f,userName:c,loginLink:m,onLoginClick:x,logoutLink:k,onLogoutClick:R,buttons:w,breakpoint:_,animateTitle:h,expandOnHover:S,mobileNavTree:A,searchUrl:L,site:N,renderDiv:F="false"})=>{const ee=Pi(t),ie=Pi(A),Z=B.useRef(null),re=()=>{window.scrollY>Z.current.getBoundingClientRect().top?Z.current.classList.add("scrolled"):Z.current.classList.remove("scrolled")};B.useEffect(()=>{typeof window<"u"&&ic({packageName:"component-header",component:"Component Header",type:"NA",configuration:{site:N,isPartner:e,searchUrl:L,navTree:ee,parentOrg:a,buttons:w,mobileNavTree:ie}})},[]),B.useEffect(()=>(window==null||window.addEventListener("scroll",re),()=>window.removeEventListener("scroll",re)),[]);const ce=()=>{const V=F==="true"?bd:yd;return p.jsx(V,{id:"asuHeader",ref:Z,breakpoint:_,children:p.jsx(Rs,{})})};return p.jsx(ua,{initialValue:{isPartner:e,navTree:ee,title:n,baseUrl:r,parentOrg:a,parentOrgUrl:i,partnerLogo:o,logo:l,loggedIn:f,userName:c,loginLink:m,onLoginClick:x,logoutLink:k,onLogoutClick:R,buttons:w,breakpoint:_,animateTitle:h,expandOnHover:S,mobileNavTree:ie,hasNavigation:!!(ee!=null&&ee.length)||!!(ie!=null&&ie.length),searchUrl:L,site:N},children:ce()})};kt.propTypes={...yo};kt.defaultProps={isPartner:!1,baseUrl:"/",breakpoint:"Xl",expandOnHover:!1};kt.__docgenInfo={description:`@param {HeaderProps} props
@returns {JSX.Element}`,methods:[],displayName:"ASUHeader",props:{renderDiv:{defaultValue:{value:'"false"',computed:!1},description:"",type:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}]},required:!1},isPartner:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},baseUrl:{defaultValue:{value:'"/"',computed:!1},description:"",type:{name:"string"},required:!1},breakpoint:{defaultValue:{value:'"Xl"',computed:!1},description:"",type:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}]},required:!1},expandOnHover:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},navTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},partnerLogo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},logo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},title:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1},userName:{description:"",type:{name:"string"},required:!1},loginLink:{description:"",type:{name:"string"},required:!1},onLoginClick:{description:"",type:{name:"func"},required:!1},logoutLink:{description:"",type:{name:"string"},required:!1},onLogoutClick:{description:"",type:{name:"func"},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},animateTitle:{description:"",type:{name:"bool"},required:!1},mobileNavTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},hasNavigation:{description:"",type:{name:"bool"},required:!1},searchUrl:{description:"",type:{name:"string"},required:!1},site:{description:"",type:{name:"string"},required:!1}}};const Ad={title:"UDS/ASU Header",component:kt,argTypes:{renderDiv:{control:"select",options:["true","false"],description:"Either 'true' or 'false'. If 'true', the header will be rendered as a div instead of a header element."}}},He=e=>p.jsxs(p.Fragment,{children:[p.jsx(kt,{...e}),p.jsx("div",{style:{width:"100%",height:"200vh",background:"#f0f0f0",paddingTop:40,marginTop:140},children:p.jsx("h1",{style:{textAlign:"center",fontFamily:"Arial"},children:"Scroll section"})})]}),vd=e=>{const t=()=>{localStorage.getItem("title_loaded")&&localStorage.removeItem("title_loaded"),setTimeout(()=>{window.location.reload()},1e3)};return p.jsxs(p.Fragment,{children:[p.jsx(kt,{...e,animateTitle:!0}),p.jsx("div",{style:{marginTop:200,textAlign:"center"},children:p.jsx(At,{text:"Animate Title",color:"dark",onClick:t})})]})},Lt=He.bind({});Lt.args={loggedIn:!1,userName:"",navTree:Zt,title:"Subdomain name",breakpoint:"Lg",searchUrl:"https://search.asu.edu/search",site:"subdomain",renderDiv:"false"};const Rt=He.bind({});Rt.args={};const Mt=He.bind({});Mt.args={title:"Subdomain name",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Dt=He.bind({});Dt.args={title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ft=He.bind({});Ft.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:Zt,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const jt=He.bind({});jt.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:Zt,mobileNavTree:ac,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const zt=He.bind({});zt.args={navTree:rc,title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold",classes:"custom-class"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ut=He.bind({});Ut.args={navTree:Lo,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const $t=He.bind({});$t.args={navTree:Lo,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",expandOnHover:!0,searchUrl:"https://search.asu.edu/search",site:"subdomain"};const qt=He.bind({});qt.args={isPartner:!0,navTree:Zt,loggedIn:!1,userName:"",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ht=vd.bind({});Ht.args={title:"Subdomain name",navTree:Zt,loggedIn:!1,logoutLink:"/caslogout",loginLink:"/cas",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};var Ni,Ii,Li;Lt.parameters={...Lt.parameters,docs:{...(Ni=Lt.parameters)==null?void 0:Ni.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(Li=(Ii=Lt.parameters)==null?void 0:Ii.docs)==null?void 0:Li.source}}};var Ri,Mi,Di;Rt.parameters={...Rt.parameters,docs:{...(Ri=Rt.parameters)==null?void 0:Ri.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(Di=(Mi=Rt.parameters)==null?void 0:Mi.docs)==null?void 0:Di.source}}};var Fi,ji,zi;Mt.parameters={...Mt.parameters,docs:{...(Fi=Mt.parameters)==null?void 0:Fi.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(zi=(ji=Mt.parameters)==null?void 0:ji.docs)==null?void 0:zi.source}}};var Ui,$i,qi;Dt.parameters={...Dt.parameters,docs:{...(Ui=Dt.parameters)==null?void 0:Ui.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(qi=($i=Dt.parameters)==null?void 0:$i.docs)==null?void 0:qi.source}}};var Hi,Wi,Yi;Ft.parameters={...Ft.parameters,docs:{...(Hi=Ft.parameters)==null?void 0:Hi.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(Yi=(Wi=Ft.parameters)==null?void 0:Wi.docs)==null?void 0:Yi.source}}};var Bi,Gi,Xi;jt.parameters={...jt.parameters,docs:{...(Bi=jt.parameters)==null?void 0:Bi.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(Xi=(Gi=jt.parameters)==null?void 0:Gi.docs)==null?void 0:Xi.source}}};var Vi,Ki,Zi;zt.parameters={...zt.parameters,docs:{...(Vi=zt.parameters)==null?void 0:Vi.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(Zi=(Ki=zt.parameters)==null?void 0:Ki.docs)==null?void 0:Zi.source}}};var Qi,Ji,eo;Ut.parameters={...Ut.parameters,docs:{...(Qi=Ut.parameters)==null?void 0:Qi.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(eo=(Ji=Ut.parameters)==null?void 0:Ji.docs)==null?void 0:eo.source}}};var to,no,ro;$t.parameters={...$t.parameters,docs:{...(to=$t.parameters)==null?void 0:to.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(ro=(no=$t.parameters)==null?void 0:no.docs)==null?void 0:ro.source}}};var ao,io,oo;qt.parameters={...qt.parameters,docs:{...(ao=qt.parameters)==null?void 0:ao.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(oo=(io=qt.parameters)==null?void 0:io.docs)==null?void 0:oo.source}}};var so,lo,co;Ht.parameters={...Ht.parameters,docs:{...(so=Ht.parameters)==null?void 0:so.docs,source:{originalSource:`args => {
  const handleClick = () => {
    // get curent local storage value
    const titleTimestamp = localStorage.getItem("title_loaded");
    if (titleTimestamp) {
      localStorage.removeItem("title_loaded");
    }
    setTimeout(() => {
      // reload the page with button
      window.location.reload();
    }, 1000);
  };
  return <>
      <ASUHeader {...{
      ...args,
      animateTitle: true
    }} />
      <div style={{
      marginTop: 200,
      textAlign: "center"
    }}>
        <Button text="Animate Title" color="dark" onClick={handleClick} />
      </div>
    </>;
}`,...(co=(lo=Ht.parameters)==null?void 0:lo.docs)==null?void 0:co.source}}};const Sd=["Default","Empty","NoNavigation","NoNavigationWithButtons","BreakpointXL","WithMobileNavTree","WithButtons","WithMenuColumns","ExpandOnHover","Partner","AnimatedTitle"];export{Ht as AnimatedTitle,Ft as BreakpointXL,Lt as Default,Rt as Empty,$t as ExpandOnHover,Mt as NoNavigation,Dt as NoNavigationWithButtons,qt as Partner,zt as WithButtons,Ut as WithMenuColumns,jt as WithMobileNavTree,Sd as __namedExportsOrder,Ad as default};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
