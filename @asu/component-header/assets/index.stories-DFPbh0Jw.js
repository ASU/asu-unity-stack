import{r as Y,R as wt}from"./index-B2SEcK1p.js";import{g as po}from"./_commonjsHelpers-B3tUAs5q.js";var mo={exports:{}},Tn={};var Bs=Y,Ys=Symbol.for("react.element"),Gs=Symbol.for("react.fragment"),Xs=Object.prototype.hasOwnProperty,Vs=Bs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ks={key:!0,ref:!0,__self:!0,__source:!0};function ho(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Xs.call(t,r)&&!Ks.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Ys,type:e,key:i,ref:o,props:a,_owner:Vs.current}}Tn.Fragment=Gs;Tn.jsx=ho;Tn.jsxs=ho;mo.exports=Tn;var p=mo.exports,go={exports:{}},Zs="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Qs=Zs,Js=Qs;function yo(){}function bo(){}bo.resetWarningCache=yo;var el=function(){function e(r,a,i,o,l,d){if(d!==Js){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:bo,resetWarningCache:yo};return n.PropTypes=n,n};go.exports=el();var tl=go.exports;const f=po(tl),Ia={alt:f.string,title:f.string,src:f.string,mobileSrc:f.string,brandLink:f.string},mn={baseUrl:f.string,parentOrg:f.string,parentOrgUrl:f.string,animate:f.bool},sn={loggedIn:f.bool,loginLink:f.string,logoutLink:f.string,userName:f.string},kn={text:f.string.isRequired,color:f.oneOf(["gold","maroon","light","dark"]),href:f.string.isRequired,classes:f.string,onClick:f.func},br=f.shape({id:f.number,href:f.string,text:f.string,type:f.string,selected:f.bool,items:f.arrayOf(f.arrayOf(f.object)),buttons:f.arrayOf(f.shape(kn)),class:f.string}),vo={isPartner:f.bool,navTree:f.arrayOf(br),partnerLogo:f.shape(Ia),logo:f.shape(Ia),title:f.string,parentOrg:mn.parentOrg,parentOrgUrl:mn.parentOrgUrl,baseUrl:mn.baseUrl,loggedIn:sn.loggedIn,userName:sn.userName,loginLink:sn.loginLink,onLoginClick:f.func,logoutLink:sn.logoutLink,onLogoutClick:f.func,buttons:f.arrayOf(f.shape(kn)),breakpoint:f.oneOf(["Lg","Xl"]),animateTitle:f.bool,expandOnHover:f.bool,mobileNavTree:f.arrayOf(br),hasNavigation:f.bool,searchUrl:f.string,site:f.string,renderDiv:f.oneOf(["true","false"])};var xo={exports:{}},G={};var Br=Symbol.for("react.transitional.element"),Yr=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),_n=Symbol.for("react.strict_mode"),Cn=Symbol.for("react.profiler"),On=Symbol.for("react.consumer"),Pn=Symbol.for("react.context"),Nn=Symbol.for("react.forward_ref"),In=Symbol.for("react.suspense"),Ln=Symbol.for("react.suspense_list"),Rn=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),nl=Symbol.for("react.offscreen"),rl=Symbol.for("react.client.reference");function Ie(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Br:switch(e=e.type,e){case En:case Cn:case _n:case In:case Ln:return e;default:switch(e=e&&e.$$typeof,e){case Pn:case Nn:case Mn:case Rn:return e;case On:return e;default:return t}}case Yr:return t}}}G.ContextConsumer=On;G.ContextProvider=Pn;G.Element=Br;G.ForwardRef=Nn;G.Fragment=En;G.Lazy=Mn;G.Memo=Rn;G.Portal=Yr;G.Profiler=Cn;G.StrictMode=_n;G.Suspense=In;G.SuspenseList=Ln;G.isContextConsumer=function(e){return Ie(e)===On};G.isContextProvider=function(e){return Ie(e)===Pn};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br};G.isForwardRef=function(e){return Ie(e)===Nn};G.isFragment=function(e){return Ie(e)===En};G.isLazy=function(e){return Ie(e)===Mn};G.isMemo=function(e){return Ie(e)===Rn};G.isPortal=function(e){return Ie(e)===Yr};G.isProfiler=function(e){return Ie(e)===Cn};G.isStrictMode=function(e){return Ie(e)===_n};G.isSuspense=function(e){return Ie(e)===In};G.isSuspenseList=function(e){return Ie(e)===Ln};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===En||e===Cn||e===_n||e===In||e===Ln||e===nl||typeof e=="object"&&e!==null&&(e.$$typeof===Mn||e.$$typeof===Rn||e.$$typeof===Pn||e.$$typeof===On||e.$$typeof===Nn||e.$$typeof===rl||e.getModuleId!==void 0)};G.typeOf=Ie;xo.exports=G;var wo=xo.exports;function al(e){function t(O,b,E,k,u){for(var $=0,v=0,X=0,q=0,H,D,ae=0,te=0,U,oe=U=H=0,j=0,ne=0,Me=0,se=0,it=E.length,ot=it-1,ve,M="",B="",De="",ft="",Le;j<it;){if(D=E.charCodeAt(j),j===ot&&v+q+X+$!==0&&(v!==0&&(D=v===47?10:47),q=X=$=0,it++,ot++),v+q+X+$===0){if(j===ot&&(0<ne&&(M=M.replace(T,"")),0<M.trim().length)){switch(D){case 32:case 9:case 59:case 13:case 10:break;default:M+=E.charAt(j)}D=59}switch(D){case 123:for(M=M.trim(),H=M.charCodeAt(0),U=1,se=++j;j<it;){switch(D=E.charCodeAt(j)){case 123:U++;break;case 125:U--;break;case 47:switch(D=E.charCodeAt(j+1)){case 42:case 47:e:{for(oe=j+1;oe<ot;++oe)switch(E.charCodeAt(oe)){case 47:if(D===42&&E.charCodeAt(oe-1)===42&&j+2!==oe){j=oe+1;break e}break;case 10:if(D===47){j=oe+1;break e}}j=oe}}break;case 91:D++;case 40:D++;case 34:case 39:for(;j++<ot&&E.charCodeAt(j)!==D;);}if(U===0)break;j++}switch(U=E.substring(se,j),H===0&&(H=(M=M.replace(x,"").trim()).charCodeAt(0)),H){case 64:switch(0<ne&&(M=M.replace(T,"")),D=M.charCodeAt(1),D){case 100:case 109:case 115:case 45:ne=b;break;default:ne=rt}if(U=t(b,ne,U,D,u+1),se=U.length,0<be&&(ne=n(rt,M,Me),Le=l(3,U,ne,b,ye,de,se,D,u,k),M=ne.join(""),Le!==void 0&&(se=(U=Le.trim()).length)===0&&(D=0,U="")),0<se)switch(D){case 115:M=M.replace(ee,o);case 100:case 109:case 45:U=M+"{"+U+"}";break;case 107:M=M.replace(S,"$1 $2"),U=M+"{"+U+"}",U=me===1||me===2&&i("@"+U,3)?"@-webkit-"+U+"@"+U:"@"+U;break;default:U=M+U,k===112&&(U=(B+=U,""))}else U="";break;default:U=t(b,n(b,M,Me),U,k,u+1)}De+=U,U=Me=ne=oe=H=0,M="",D=E.charCodeAt(++j);break;case 125:case 59:if(M=(0<ne?M.replace(T,""):M).trim(),1<(se=M.length))switch(oe===0&&(H=M.charCodeAt(0),H===45||96<H&&123>H)&&(se=(M=M.replace(" ",":")).length),0<be&&(Le=l(1,M,b,O,ye,de,B.length,k,u,k))!==void 0&&(se=(M=Le.trim()).length)===0&&(M="\0\0"),H=M.charCodeAt(0),D=M.charCodeAt(1),H){case 0:break;case 64:if(D===105||D===99){ft+=M+E.charAt(j);break}default:M.charCodeAt(se-1)!==58&&(B+=a(M,H,D,M.charCodeAt(2)))}Me=ne=oe=H=0,M="",D=E.charCodeAt(++j)}}switch(D){case 13:case 10:v===47?v=0:1+H===0&&k!==107&&0<M.length&&(ne=1,M+="\0"),0<be*We&&l(0,M,b,O,ye,de,B.length,k,u,k),de=1,ye++;break;case 59:case 125:if(v+q+X+$===0){de++;break}default:switch(de++,ve=E.charAt(j),D){case 9:case 32:if(q+$+v===0)switch(ae){case 44:case 58:case 9:case 32:ve="";break;default:D!==32&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:q+v+$===0&&(ne=Me=1,ve="\f"+ve);break;case 108:if(q+v+$+ke===0&&0<oe)switch(j-oe){case 2:ae===112&&E.charCodeAt(j-3)===58&&(ke=ae);case 8:te===111&&(ke=te)}break;case 58:q+v+$===0&&(oe=j);break;case 44:v+X+q+$===0&&(ne=1,ve+="\r");break;case 34:case 39:v===0&&(q=q===D?0:q===0?D:q);break;case 91:q+v+X===0&&$++;break;case 93:q+v+X===0&&$--;break;case 41:q+v+$===0&&X--;break;case 40:if(q+v+$===0){if(H===0)switch(2*ae+3*te){case 533:break;default:H=1}X++}break;case 64:v+X+q+$+oe+U===0&&(U=1);break;case 42:case 47:if(!(0<q+$+X))switch(v){case 0:switch(2*D+3*E.charCodeAt(j+1)){case 235:v=47;break;case 220:se=j,v=42}break;case 42:D===47&&ae===42&&se+2!==j&&(E.charCodeAt(se+2)===33&&(B+=E.substring(se,j+1)),ve="",v=0)}}v===0&&(M+=ve)}te=ae,ae=D,j++}if(se=B.length,0<se){if(ne=b,0<be&&(Le=l(2,B,ne,O,ye,de,se,k,u,k),Le!==void 0&&(B=Le).length===0))return ft+B+De;if(B=ne.join(",")+"{"+B+"}",me*ke!==0){switch(me!==2||i(B,2)||(ke=0),ke){case 111:B=B.replace(N,":-moz-$1")+B;break;case 112:B=B.replace(L,"::-webkit-input-$1")+B.replace(L,"::-moz-$1")+B.replace(L,":-ms-input-$1")+B}ke=0}}return ft+B+De}function n(O,b,E){var k=b.trim().split(h);b=k;var u=k.length,$=O.length;switch($){case 0:case 1:var v=0;for(O=$===0?"":O[0]+" ";v<u;++v)b[v]=r(O,b[v],E).trim();break;default:var X=v=0;for(b=[];v<u;++v)for(var q=0;q<$;++q)b[X++]=r(O[q]+" ",k[v],E).trim()}return b}function r(O,b,E){var k=b.charCodeAt(0);switch(33>k&&(k=(b=b.trim()).charCodeAt(0)),k){case 38:return b.replace(A,"$1"+O.trim());case 58:return O.trim()+b.replace(A,"$1"+O.trim());default:if(0<1*E&&0<b.indexOf("\f"))return b.replace(A,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+b}function a(O,b,E,k){var u=O+";",$=2*b+3*E+4*k;if($===944){O=u.indexOf(":",9)+1;var v=u.substring(O,u.length-1).trim();return v=u.substring(0,O).trim()+v+";",me===1||me===2&&i(v,1)?"-webkit-"+v+v:v}if(me===0||me===2&&!i(u,1))return u;switch($){case 1015:return u.charCodeAt(10)===97?"-webkit-"+u+u:u;case 951:return u.charCodeAt(3)===116?"-webkit-"+u+u:u;case 963:return u.charCodeAt(5)===110?"-webkit-"+u+u:u;case 1009:if(u.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+u+u;case 978:return"-webkit-"+u+"-moz-"+u+u;case 1019:case 983:return"-webkit-"+u+"-moz-"+u+"-ms-"+u+u;case 883:if(u.charCodeAt(8)===45)return"-webkit-"+u+u;if(0<u.indexOf("image-set(",11))return u.replace(V,"$1-webkit-$2")+u;break;case 932:if(u.charCodeAt(4)===45)switch(u.charCodeAt(5)){case 103:return"-webkit-box-"+u.replace("-grow","")+"-webkit-"+u+"-ms-"+u.replace("grow","positive")+u;case 115:return"-webkit-"+u+"-ms-"+u.replace("shrink","negative")+u;case 98:return"-webkit-"+u+"-ms-"+u.replace("basis","preferred-size")+u}return"-webkit-"+u+"-ms-"+u+u;case 964:return"-webkit-"+u+"-ms-flex-"+u+u;case 1023:if(u.charCodeAt(8)!==99)break;return v=u.substring(u.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+v+"-webkit-"+u+"-ms-flex-pack"+v+u;case 1005:return w.test(u)?u.replace(R,":-webkit-")+u.replace(R,":-moz-")+u:u;case 1e3:switch(v=u.substring(13).trim(),b=v.indexOf("-")+1,v.charCodeAt(0)+v.charCodeAt(b)){case 226:v=u.replace(F,"tb");break;case 232:v=u.replace(F,"tb-rl");break;case 220:v=u.replace(F,"lr");break;default:return u}return"-webkit-"+u+"-ms-"+v+u;case 1017:if(u.indexOf("sticky",9)===-1)break;case 975:switch(b=(u=O).length-10,v=(u.charCodeAt(b)===33?u.substring(0,b):u).substring(O.indexOf(":",7)+1).trim(),$=v.charCodeAt(0)+(v.charCodeAt(7)|0)){case 203:if(111>v.charCodeAt(8))break;case 115:u=u.replace(v,"-webkit-"+v)+";"+u;break;case 207:case 102:u=u.replace(v,"-webkit-"+(102<$?"inline-":"")+"box")+";"+u.replace(v,"-webkit-"+v)+";"+u.replace(v,"-ms-"+v+"box")+";"+u}return u+";";case 938:if(u.charCodeAt(5)===45)switch(u.charCodeAt(6)){case 105:return v=u.replace("-items",""),"-webkit-"+u+"-webkit-box-"+v+"-ms-flex-"+v+u;case 115:return"-webkit-"+u+"-ms-flex-item-"+u.replace(Z,"")+u;default:return"-webkit-"+u+"-ms-flex-line-pack"+u.replace("align-content","").replace(Z,"")+u}break;case 973:case 989:if(u.charCodeAt(3)!==45||u.charCodeAt(4)===122)break;case 931:case 953:if(ce.test(O)===!0)return(v=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?a(O.replace("stretch","fill-available"),b,E,k).replace(":fill-available",":stretch"):u.replace(v,"-webkit-"+v)+u.replace(v,"-moz-"+v.replace("fill-",""))+u;break;case 962:if(u="-webkit-"+u+(u.charCodeAt(5)===102?"-ms-"+u:"")+u,E+k===211&&u.charCodeAt(13)===105&&0<u.indexOf("transform",10))return u.substring(0,u.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+u}return u}function i(O,b){var E=O.indexOf(b===1?":":"{"),k=O.substring(0,b!==3?E:10);return E=O.substring(E+1,O.length-1),at(b!==2?k:k.replace(re,"$1"),E,b)}function o(O,b){var E=a(b,b.charCodeAt(0),b.charCodeAt(1),b.charCodeAt(2));return E!==b+";"?E.replace(ie," or ($1)").substring(4):"("+b+")"}function l(O,b,E,k,u,$,v,X,q,H){for(var D=0,ae=b,te;D<be;++D)switch(te=_e[D].call(m,O,ae,E,k,u,$,v,X,q,H)){case void 0:case!1:case!0:case null:break;default:ae=te}if(ae!==b)return ae}function d(O){switch(O){case void 0:case null:be=_e.length=0;break;default:if(typeof O=="function")_e[be++]=O;else if(typeof O=="object")for(var b=0,E=O.length;b<E;++b)d(O[b]);else We=!!O|0}return d}function c(O){return O=O.prefix,O!==void 0&&(at=null,O?typeof O!="function"?me=1:(me=2,at=O):me=0),c}function m(O,b){var E=O;if(33>E.charCodeAt(0)&&(E=E.trim()),Q=E,E=[Q],0<be){var k=l(-1,b,E,E,ye,de,0,0,0,0);k!==void 0&&typeof k=="string"&&(b=k)}var u=t(rt,E,b,0,0);return 0<be&&(k=l(-2,u,E,E,ye,de,u.length,0,0,0),k!==void 0&&(u=k)),Q="",ke=0,de=ye=1,u}var x=/^\0+/g,T=/[\0\r\f]/g,R=/: */g,w=/zoo|gra/,_=/([,: ])(transform)/g,h=/,\r+?/g,A=/([\t\r\n ])*\f?&/g,S=/@(k\w+)\s*(\S*)\s*/,L=/::(place)/g,N=/:(read-only)/g,F=/[svh]\w+-[tblr]{2}/,ee=/\(\s*(.*)\s*\)/g,ie=/([\s\S]*?);/g,Z=/-self|flex-/g,re=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ce=/stretch|:\s*\w+\-(?:conte|avail)/,V=/([^-])(image-set\()/,de=1,ye=1,ke=0,me=1,rt=[],_e=[],be=0,at=null,We=0,Q="";return m.use=d,m.set=c,e!==void 0&&c(e),m}var il={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ol(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var sl=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,La=ol(function(e){return sl.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),So={exports:{}},W={};var fe=typeof Symbol=="function"&&Symbol.for,Gr=fe?Symbol.for("react.element"):60103,Xr=fe?Symbol.for("react.portal"):60106,Dn=fe?Symbol.for("react.fragment"):60107,Fn=fe?Symbol.for("react.strict_mode"):60108,jn=fe?Symbol.for("react.profiler"):60114,zn=fe?Symbol.for("react.provider"):60109,Un=fe?Symbol.for("react.context"):60110,Vr=fe?Symbol.for("react.async_mode"):60111,$n=fe?Symbol.for("react.concurrent_mode"):60111,qn=fe?Symbol.for("react.forward_ref"):60112,Hn=fe?Symbol.for("react.suspense"):60113,ll=fe?Symbol.for("react.suspense_list"):60120,Wn=fe?Symbol.for("react.memo"):60115,Bn=fe?Symbol.for("react.lazy"):60116,cl=fe?Symbol.for("react.block"):60121,ul=fe?Symbol.for("react.fundamental"):60117,fl=fe?Symbol.for("react.responder"):60118,dl=fe?Symbol.for("react.scope"):60119;function Ce(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gr:switch(e=e.type,e){case Vr:case $n:case Dn:case jn:case Fn:case Hn:return e;default:switch(e=e&&e.$$typeof,e){case Un:case qn:case Bn:case Wn:case zn:return e;default:return t}}case Xr:return t}}}function Ao(e){return Ce(e)===$n}W.AsyncMode=Vr;W.ConcurrentMode=$n;W.ContextConsumer=Un;W.ContextProvider=zn;W.Element=Gr;W.ForwardRef=qn;W.Fragment=Dn;W.Lazy=Bn;W.Memo=Wn;W.Portal=Xr;W.Profiler=jn;W.StrictMode=Fn;W.Suspense=Hn;W.isAsyncMode=function(e){return Ao(e)||Ce(e)===Vr};W.isConcurrentMode=Ao;W.isContextConsumer=function(e){return Ce(e)===Un};W.isContextProvider=function(e){return Ce(e)===zn};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gr};W.isForwardRef=function(e){return Ce(e)===qn};W.isFragment=function(e){return Ce(e)===Dn};W.isLazy=function(e){return Ce(e)===Bn};W.isMemo=function(e){return Ce(e)===Wn};W.isPortal=function(e){return Ce(e)===Xr};W.isProfiler=function(e){return Ce(e)===jn};W.isStrictMode=function(e){return Ce(e)===Fn};W.isSuspense=function(e){return Ce(e)===Hn};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Dn||e===$n||e===jn||e===Fn||e===Hn||e===ll||typeof e=="object"&&e!==null&&(e.$$typeof===Bn||e.$$typeof===Wn||e.$$typeof===zn||e.$$typeof===Un||e.$$typeof===qn||e.$$typeof===ul||e.$$typeof===fl||e.$$typeof===dl||e.$$typeof===cl)};W.typeOf=Ce;So.exports=W;var pl=So.exports,Kr=pl,ml={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},hl={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gl={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},To={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zr={};Zr[Kr.ForwardRef]=gl;Zr[Kr.Memo]=To;function Ra(e){return Kr.isMemo(e)?To:Zr[e.$$typeof]||ml}var yl=Object.defineProperty,bl=Object.getOwnPropertyNames,Ma=Object.getOwnPropertySymbols,vl=Object.getOwnPropertyDescriptor,xl=Object.getPrototypeOf,Da=Object.prototype;function ko(e,t,n){if(typeof t!="string"){if(Da){var r=xl(t);r&&r!==Da&&ko(e,r,n)}var a=bl(t);Ma&&(a=a.concat(Ma(t)));for(var i=Ra(e),o=Ra(t),l=0;l<a.length;++l){var d=a[l];if(!hl[d]&&!(n&&n[d])&&!(o&&o[d])&&!(i&&i[d])){var c=vl(t,d);try{yl(e,d,c)}catch{}}}}return e}var wl=ko;const Sl=po(wl);var Eo={},Pe={};function Ge(){return(Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Fa=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},vr=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!wo.typeOf(e)},vn=Object.freeze([]),Qe=Object.freeze({});function Xt(e){return typeof e=="function"}function ja(e){return e.displayName||e.name||"Component"}function Qr(e){return e&&typeof e.styledComponentId=="string"}var bt=typeof Eo<"u"&&Pe!==void 0&&(Pe.REACT_APP_SC_ATTR||Pe.SC_ATTR)||"data-styled",Jr=typeof window<"u"&&"HTMLElement"in window,Al=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof Eo<"u"&&Pe!==void 0&&(Pe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pe.REACT_APP_SC_DISABLE_SPEEDY!==""?Pe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pe.REACT_APP_SC_DISABLE_SPEEDY:Pe.SC_DISABLE_SPEEDY!==void 0&&Pe.SC_DISABLE_SPEEDY!==""&&Pe.SC_DISABLE_SPEEDY!=="false"&&Pe.SC_DISABLE_SPEEDY));function Zt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Tl=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,i=a.length,o=i;n>=o;)(o<<=1)<0&&Zt(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(a),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(n+1),c=0,m=r.length;c<m;c++)this.tag.insertRule(d,r[c])&&(this.groupSizes[n]++,d++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),i=a+r;this.groupSizes[n]=0;for(var o=a;o<i;o++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],i=this.indexOfGroup(n),o=i+a,l=i;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),hn=new Map,xn=new Map,Bt=1,ln=function(e){if(hn.has(e))return hn.get(e);for(;xn.has(Bt);)Bt++;var t=Bt++;return hn.set(e,t),xn.set(t,e),t},kl=function(e){return xn.get(e)},El=function(e,t){t>=Bt&&(Bt=t+1),hn.set(e,t),xn.set(t,e)},_l="style["+bt+'][data-styled-version="5.3.11"]',Cl=new RegExp("^"+bt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ol=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},Pl=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var l=o.match(Cl);if(l){var d=0|parseInt(l[1],10),c=l[2];d!==0&&(El(c,d),Ol(e,c,l[3]),e.getTag().insertRules(d,r)),r.length=0}else r.push(o)}}},Nl=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},_o=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){for(var d=l.childNodes,c=d.length;c>=0;c--){var m=d[c];if(m&&m.nodeType===1&&m.hasAttribute(bt))return m}}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(bt,"active"),r.setAttribute("data-styled-version","5.3.11");var o=Nl();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},Il=function(){function e(n){var r=this.element=_o(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var d=i[o];if(d.ownerNode===a)return d}Zt(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Ll=function(){function e(n){var r=this.element=_o(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(a,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Rl=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),za=Jr,Ml={isServer:!Jr,useCSSOMInjection:!Al},Co=function(){function e(n,r,a){n===void 0&&(n=Qe),r===void 0&&(r={}),this.options=Ge({},Ml,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&Jr&&za&&(za=!1,function(i){for(var o=document.querySelectorAll(_l),l=0,d=o.length;l<d;l++){var c=o[l];c&&c.getAttribute(bt)!=="active"&&(Pl(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return ln(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ge({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,i=r.useCSSOMInjection,o=r.target,n=a?new Rl(o):i?new Il(o):new Ll(o),new Tl(n)));var n,r,a,i,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ln(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(ln(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ln(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,i="",o=0;o<a;o++){var l=kl(o);if(l!==void 0){var d=n.names.get(l),c=r.getGroup(o);if(d&&c&&d.size){var m=bt+".g"+o+'[id="'+l+'"]',x="";d!==void 0&&d.forEach(function(T){T.length>0&&(x+=T+",")}),i+=""+c+m+'{content:"'+x+`"}/*!sc*/
`}}}return i}(this)},e}(),Dl=/(a)(d)/gi,Ua=function(e){return String.fromCharCode(e+(e>25?39:97))};function xr(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ua(t%52)+n;return(Ua(t%52)+n).replace(Dl,"$1-$2")}var mt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Oo=function(e){return mt(5381,e)};function Fl(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xt(n)&&!Qr(n))return!1}return!0}var jl=Oo("5.3.11"),zl=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Fl(t),this.componentId=n,this.baseHash=mt(jl,n),this.baseStyle=r,Co.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))i.push(this.staticRulesId);else{var o=vt(this.rules,t,n,r).join(""),l=xr(mt(this.baseHash,o)>>>0);if(!n.hasNameForId(a,l)){var d=r(o,"."+l,void 0,a);n.insertRules(a,l,d)}i.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,m=mt(this.baseHash,r.hash),x="",T=0;T<c;T++){var R=this.rules[T];if(typeof R=="string")x+=R;else if(R){var w=vt(R,t,n,r),_=Array.isArray(w)?w.join(""):w;m=mt(m,_+T),x+=_}}if(x){var h=xr(m>>>0);if(!n.hasNameForId(a,h)){var A=r(x,"."+h,void 0,a);n.insertRules(a,h,A)}i.push(h)}}return i.join(" ")},e}(),Ul=/^\s*\/\/.*$/gm,$l=[":","[",".","#"];function ql(e){var t,n,r,a,i=Qe,o=i.options,l=o===void 0?Qe:o,d=i.plugins,c=d===void 0?vn:d,m=new al(l),x=[],T=function(_){function h(A){if(A)try{_(A+"}")}catch{}}return function(A,S,L,N,F,ee,ie,Z,re,ce){switch(A){case 1:if(re===0&&S.charCodeAt(0)===64)return _(S+";"),"";break;case 2:if(Z===0)return S+"/*|*/";break;case 3:switch(Z){case 102:case 112:return _(L[0]+S),"";default:return S+(ce===0?"/*|*/":"")}case-2:S.split("/*|*/}").forEach(h)}}}(function(_){x.push(_)}),R=function(_,h,A){return h===0&&$l.indexOf(A[n.length])!==-1||A.match(a)?_:"."+t};function w(_,h,A,S){S===void 0&&(S="&");var L=_.replace(Ul,""),N=h&&A?A+" "+h+" { "+L+" }":L;return t=S,n=h,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),m(A||!h?"":h,N)}return m.use([].concat(c,[function(_,h,A){_===2&&A.length&&A[0].lastIndexOf(n)>0&&(A[0]=A[0].replace(r,R))},T,function(_){if(_===-2){var h=x;return x=[],h}}])),w.hash=c.length?c.reduce(function(_,h){return h.name||Zt(15),mt(_,h.name)},5381).toString():"",w}var Po=wt.createContext();Po.Consumer;var No=wt.createContext(),Hl=(No.Consumer,new Co),wr=ql();function Wl(){return Y.useContext(Po)||Hl}function Bl(){return Y.useContext(No)||wr}var Yl=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=wr);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.toString=function(){return Zt(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=wr),this.name+t.hash},e}(),Gl=/([A-Z])/,Xl=/([A-Z])/g,Vl=/^ms-/,Kl=function(e){return"-"+e.toLowerCase()};function $a(e){return Gl.test(e)?e.replace(Xl,Kl).replace(Vl,"-ms-"):e}var qa=function(e){return e==null||e===!1||e===""};function vt(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,l=e.length;o<l;o+=1)(a=vt(e[o],t,n,r))!==""&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}if(qa(e))return"";if(Qr(e))return"."+e.styledComponentId;if(Xt(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var d=e(t);return vt(d,t,n,r)}var c;return e instanceof Yl?n?(e.inject(n,r),e.getName(r)):e:vr(e)?function m(x,T){var R,w,_=[];for(var h in x)x.hasOwnProperty(h)&&!qa(x[h])&&(Array.isArray(x[h])&&x[h].isCss||Xt(x[h])?_.push($a(h)+":",x[h],";"):vr(x[h])?_.push.apply(_,m(x[h],h)):_.push($a(h)+": "+(R=h,(w=x[h])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||R in il||R.startsWith("--")?String(w).trim():w+"px")+";"));return T?[T+" {"].concat(_,["}"]):_}(e):e.toString()}var Ha=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Zl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Xt(e)||vr(e)?Ha(vt(Fa(vn,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Ha(vt(Fa(e,n)))}var Ql=function(e,t,n){return n===void 0&&(n=Qe),e.theme!==n.theme&&e.theme||t||n.theme},Jl=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ec=/(^-|-$)/g;function rr(e){return e.replace(Jl,"-").replace(ec,"")}var tc=function(e){return xr(Oo(e)>>>0)};function cn(e){return typeof e=="string"&&!0}var Sr=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},nc=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function rc(e,t,n){var r=e[n];Sr(t)&&Sr(r)?Io(r,t):e[n]=t}function Io(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(Sr(o))for(var l in o)nc(l)&&rc(e,o[l],l)}return e}var Lo=wt.createContext();Lo.Consumer;var ar={};function Ro(e,t,n){var r=Qr(e),a=!cn(e),i=t.attrs,o=i===void 0?vn:i,l=t.componentId,d=l===void 0?function(S,L){var N=typeof S!="string"?"sc":rr(S);ar[N]=(ar[N]||0)+1;var F=N+"-"+tc("5.3.11"+N+ar[N]);return L?L+"-"+F:F}(t.displayName,t.parentComponentId):l,c=t.displayName,m=c===void 0?function(S){return cn(S)?"styled."+S:"Styled("+ja(S)+")"}(e):c,x=t.displayName&&t.componentId?rr(t.displayName)+"-"+t.componentId:t.componentId||d,T=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,R=t.shouldForwardProp;r&&e.shouldForwardProp&&(R=t.shouldForwardProp?function(S,L,N){return e.shouldForwardProp(S,L,N)&&t.shouldForwardProp(S,L,N)}:e.shouldForwardProp);var w,_=new zl(n,x,r?e.componentStyle:void 0),h=_.isStatic&&o.length===0,A=function(S,L){return function(N,F,ee,ie){var Z=N.attrs,re=N.componentStyle,ce=N.defaultProps,V=N.foldedComponentIds,de=N.shouldForwardProp,ye=N.styledComponentId,ke=N.target,me=function(k,u,$){k===void 0&&(k=Qe);var v=Ge({},u,{theme:k}),X={};return $.forEach(function(q){var H,D,ae,te=q;for(H in Xt(te)&&(te=te(v)),te)v[H]=X[H]=H==="className"?(D=X[H],ae=te[H],D&&ae?D+" "+ae:D||ae):te[H]}),[v,X]}(Ql(F,Y.useContext(Lo),ce)||Qe,F,Z),rt=me[0],_e=me[1],be=function(k,u,$,v){var X=Wl(),q=Bl(),H=u?k.generateAndInjectStyles(Qe,X,q):k.generateAndInjectStyles($,X,q);return H}(re,ie,rt),at=ee,We=_e.$as||F.$as||_e.as||F.as||ke,Q=cn(We),O=_e!==F?Ge({},F,{},_e):F,b={};for(var E in O)E[0]!=="$"&&E!=="as"&&(E==="forwardedAs"?b.as=O[E]:(de?de(E,La,We):!Q||La(E))&&(b[E]=O[E]));return F.style&&_e.style!==F.style&&(b.style=Ge({},F.style,{},_e.style)),b.className=Array.prototype.concat(V,ye,be!==ye?be:null,F.className,_e.className).filter(Boolean).join(" "),b.ref=at,Y.createElement(We,b)}(w,S,L,h)};return A.displayName=m,(w=wt.forwardRef(A)).attrs=T,w.componentStyle=_,w.displayName=m,w.shouldForwardProp=R,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):vn,w.styledComponentId=x,w.target=r?e.target:e,w.withComponent=function(S){var L=t.componentId,N=function(ee,ie){if(ee==null)return{};var Z,re,ce={},V=Object.keys(ee);for(re=0;re<V.length;re++)Z=V[re],ie.indexOf(Z)>=0||(ce[Z]=ee[Z]);return ce}(t,["componentId"]),F=L&&L+"-"+(cn(S)?S:rr(ja(S)));return Ro(S,Ge({},N,{attrs:T,componentId:F}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?Io({},e.defaultProps,S):S}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),a&&Sl(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Se=function(e){return function t(n,r,a){if(a===void 0&&(a=Qe),!wo.isValidElementType(r))return Zt(1,String(r));var i=function(){return n(r,a,Zl.apply(void 0,arguments))};return i.withConfig=function(o){return t(n,r,Ge({},a,{},o))},i.attrs=function(o){return t(n,r,Ge({},a,{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)}))},i}(Ro,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Se[e]=Se(e)});const ac=Se.a`
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
`,St=({href:e,color:t,text:n,classes:r,onClick:a})=>p.jsx(ac,{href:e,...e?{}:{tabIndex:0},className:`button-${t} ${r??""}`,onClick:a,children:n});St.propTypes={...kn};St.__docgenInfo={description:`@param {ButtonProps} props
@returns {JSX.Element}`,methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!0},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1}}};const Qt=[{href:"/",text:"Home",type:"icon-home",selected:!0,class:"test-class"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu",text:"Sublink 2"},{href:"https://campus.asu.edu",text:"Sublink 3"},{href:"https://campus.asu.edu",text:"Sublink 4"},{href:"https://asuonline.asu.edu/",text:"Sublink 5"},{href:"https://havasu.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 3",href:"#"},{text:"Link option 4",href:"#"},{text:"Link option 5",href:"#"},{text:"Link option 6",href:"#",onClick:()=>{alert("On Click Callback")}},{text:"Link option 7",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 8",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]}],ic=[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",selected:!0},{text:"Link option 3",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu/",text:"Sublink 2"},{href:"https://campus.asu.edu/",text:"Sublink 3"},{href:"https://campus.asu.edu/",text:"Sublink 4"},{href:"https://campus.asu.edu/",text:"Sublink 5"},{href:"https://asuonline.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 4",href:"#"}],Mo=[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#"},{text:"Link option 2",href:"/",items:[[{href:"https://www.asu.edu/",text:"A test navigation item"},{href:"https://www.asu.edu/",text:"Mauris viverra, sem nec"},{href:"https://www.asu.edu/?feature=athletics",text:"Massa nunc dictum nam venenatis"},{href:"https://www.asu.edu/?feature=alumni",text:"Alumni"},{href:"https://www.asu.edu/?feature=giving",text:"Giving"},{href:"https://www.asu.edu/?feature=president",text:"President"},{href:"https://www.asu.edu/about",text:"About ASU"}]]},{text:"Link option 3",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 4",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column one"},{href:"https://havasu.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Phasellus egestas nec est "},{href:"https://campus.asu.edu/tempe/",text:"Pellentesque et mollis"},{href:"https://campus.asu.edu/west/",text:"Cras congue"},{href:"https://campus.asu.edu/polytechnic/",text:"Cras ut malesuada nisl"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Map"},{href:"https://campus.asu.edu/tempe/",text:"Tempe"},{href:"https://campus.asu.edu/west/",text:"West"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 5",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"Lake Havasu"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 6",href:"#",buttons:[{text:"CTA One",href:"https://asu.edu",color:"maroon"},{text:"CTA Two",href:"https://asu.edu",color:"gold"}],items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"The Lake Havasu Campus"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Call to Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column Five"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Buildings and directory"},{href:"https://campus.asu.edu/tempe/",text:"Some good news"},{href:"https://campus.asu.edu/west/",selected:!0,text:"Directory Admin Tools"}]]}],oc=[{href:"/",text:"This",type:"icon-home",class:"home",selected:!0},{text:"Link option 1",href:"https://webapp4.asu.edu/myasu/"},{text:"Link option 2",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column Two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"}]]}];const{entries:Do,setPrototypeOf:Wa,isFrozen:sc,getPrototypeOf:lc,getOwnPropertyDescriptor:cc}=Object;let{freeze:Ae,seal:Ne,create:Fo}=Object,{apply:Ar,construct:Tr}=typeof Reflect<"u"&&Reflect;Ae||(Ae=function(t){return t});Ne||(Ne=function(t){return t});Ar||(Ar=function(t,n,r){return t.apply(n,r)});Tr||(Tr=function(t,n){return new t(...n)});const un=Te(Array.prototype.forEach),uc=Te(Array.prototype.lastIndexOf),Ba=Te(Array.prototype.pop),Ct=Te(Array.prototype.push),fc=Te(Array.prototype.splice),gn=Te(String.prototype.toLowerCase),ir=Te(String.prototype.toString),Ya=Te(String.prototype.match),Ot=Te(String.prototype.replace),dc=Te(String.prototype.indexOf),pc=Te(String.prototype.trim),Re=Te(Object.prototype.hasOwnProperty),we=Te(RegExp.prototype.test),Pt=mc(TypeError);function Te(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return Ar(e,t,r)}}function mc(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Tr(e,n)}}function z(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:gn;Wa&&Wa(e,null);let r=t.length;for(;r--;){let a=t[r];if(typeof a=="string"){const i=n(a);i!==a&&(sc(t)||(t[r]=i),a=i)}e[a]=!0}return e}function hc(e){for(let t=0;t<e.length;t++)Re(e,t)||(e[t]=null);return e}function st(e){const t=Fo(null);for(const[n,r]of Do(e))Re(e,n)&&(Array.isArray(r)?t[n]=hc(r):r&&typeof r=="object"&&r.constructor===Object?t[n]=st(r):t[n]=r);return t}function Nt(e,t){for(;e!==null;){const r=cc(e,t);if(r){if(r.get)return Te(r.get);if(typeof r.value=="function")return Te(r.value)}e=lc(e)}function n(){return null}return n}const Ga=Ae(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),or=Ae(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),sr=Ae(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),gc=Ae(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),lr=Ae(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),yc=Ae(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Xa=Ae(["#text"]),Va=Ae(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),cr=Ae(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ka=Ae(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),fn=Ae(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),bc=Ne(/\{\{[\w\W]*|[\w\W]*\}\}/gm),vc=Ne(/<%[\w\W]*|[\w\W]*%>/gm),xc=Ne(/\$\{[\w\W]*/gm),wc=Ne(/^data-[\-\w.\u00B7-\uFFFF]+$/),Sc=Ne(/^aria-[\-\w]+$/),jo=Ne(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ac=Ne(/^(?:\w+script|data):/i),Tc=Ne(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),zo=Ne(/^html$/i),kc=Ne(/^[a-z][.\w]*(-[.\w]+)+$/i);var Za=Object.freeze({__proto__:null,ARIA_ATTR:Sc,ATTR_WHITESPACE:Tc,CUSTOM_ELEMENT:kc,DATA_ATTR:wc,DOCTYPE_NAME:zo,ERB_EXPR:vc,IS_ALLOWED_URI:jo,IS_SCRIPT_OR_DATA:Ac,MUSTACHE_EXPR:bc,TMPLIT_EXPR:xc});const It={element:1,text:3,progressingInstruction:7,comment:8,document:9},Ec=function(){return typeof window>"u"?null:window},_c=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const a="data-tt-policy-suffix";n&&n.hasAttribute(a)&&(r=n.getAttribute(a));const i="dompurify"+(r?"#"+r:"");try{return t.createPolicy(i,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Qa=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Uo(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ec();const t=I=>Uo(I);if(t.version="3.2.5",t.removed=[],!e||!e.document||e.document.nodeType!==It.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const r=n,a=r.currentScript,{DocumentFragment:i,HTMLTemplateElement:o,Node:l,Element:d,NodeFilter:c,NamedNodeMap:m=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:x,DOMParser:T,trustedTypes:R}=e,w=d.prototype,_=Nt(w,"cloneNode"),h=Nt(w,"remove"),A=Nt(w,"nextSibling"),S=Nt(w,"childNodes"),L=Nt(w,"parentNode");if(typeof o=="function"){const I=n.createElement("template");I.content&&I.content.ownerDocument&&(n=I.content.ownerDocument)}let N,F="";const{implementation:ee,createNodeIterator:ie,createDocumentFragment:Z,getElementsByTagName:re}=n,{importNode:ce}=r;let V=Qa();t.isSupported=typeof Do=="function"&&typeof L=="function"&&ee&&ee.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:de,ERB_EXPR:ye,TMPLIT_EXPR:ke,DATA_ATTR:me,ARIA_ATTR:rt,IS_SCRIPT_OR_DATA:_e,ATTR_WHITESPACE:be,CUSTOM_ELEMENT:at}=Za;let{IS_ALLOWED_URI:We}=Za,Q=null;const O=z({},[...Ga,...or,...sr,...lr,...Xa]);let b=null;const E=z({},[...Va,...cr,...Ka,...fn]);let k=Object.seal(Fo(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),u=null,$=null,v=!0,X=!0,q=!1,H=!0,D=!1,ae=!0,te=!1,U=!1,oe=!1,j=!1,ne=!1,Me=!1,se=!0,it=!1;const ot="user-content-";let ve=!0,M=!1,B={},De=null;const ft=z({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Le=null;const ba=z({},["audio","video","img","source","image","track"]);let Qn=null;const va=z({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),tn="http://www.w3.org/1998/Math/MathML",nn="http://www.w3.org/2000/svg",Be="http://www.w3.org/1999/xhtml";let dt=Be,Jn=!1,er=null;const js=z({},[tn,nn,Be],ir);let rn=z({},["mi","mo","mn","ms","mtext"]),an=z({},["annotation-xml"]);const zs=z({},["title","style","font","a","script"]);let Et=null;const Us=["application/xhtml+xml","text/html"],$s="text/html";let ue=null,pt=null;const qs=n.createElement("form"),xa=function(s){return s instanceof RegExp||s instanceof Function},tr=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(pt&&pt===s)){if((!s||typeof s!="object")&&(s={}),s=st(s),Et=Us.indexOf(s.PARSER_MEDIA_TYPE)===-1?$s:s.PARSER_MEDIA_TYPE,ue=Et==="application/xhtml+xml"?ir:gn,Q=Re(s,"ALLOWED_TAGS")?z({},s.ALLOWED_TAGS,ue):O,b=Re(s,"ALLOWED_ATTR")?z({},s.ALLOWED_ATTR,ue):E,er=Re(s,"ALLOWED_NAMESPACES")?z({},s.ALLOWED_NAMESPACES,ir):js,Qn=Re(s,"ADD_URI_SAFE_ATTR")?z(st(va),s.ADD_URI_SAFE_ATTR,ue):va,Le=Re(s,"ADD_DATA_URI_TAGS")?z(st(ba),s.ADD_DATA_URI_TAGS,ue):ba,De=Re(s,"FORBID_CONTENTS")?z({},s.FORBID_CONTENTS,ue):ft,u=Re(s,"FORBID_TAGS")?z({},s.FORBID_TAGS,ue):{},$=Re(s,"FORBID_ATTR")?z({},s.FORBID_ATTR,ue):{},B=Re(s,"USE_PROFILES")?s.USE_PROFILES:!1,v=s.ALLOW_ARIA_ATTR!==!1,X=s.ALLOW_DATA_ATTR!==!1,q=s.ALLOW_UNKNOWN_PROTOCOLS||!1,H=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,D=s.SAFE_FOR_TEMPLATES||!1,ae=s.SAFE_FOR_XML!==!1,te=s.WHOLE_DOCUMENT||!1,j=s.RETURN_DOM||!1,ne=s.RETURN_DOM_FRAGMENT||!1,Me=s.RETURN_TRUSTED_TYPE||!1,oe=s.FORCE_BODY||!1,se=s.SANITIZE_DOM!==!1,it=s.SANITIZE_NAMED_PROPS||!1,ve=s.KEEP_CONTENT!==!1,M=s.IN_PLACE||!1,We=s.ALLOWED_URI_REGEXP||jo,dt=s.NAMESPACE||Be,rn=s.MATHML_TEXT_INTEGRATION_POINTS||rn,an=s.HTML_INTEGRATION_POINTS||an,k=s.CUSTOM_ELEMENT_HANDLING||{},s.CUSTOM_ELEMENT_HANDLING&&xa(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(k.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&xa(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(k.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(k.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),D&&(X=!1),ne&&(j=!0),B&&(Q=z({},Xa),b=[],B.html===!0&&(z(Q,Ga),z(b,Va)),B.svg===!0&&(z(Q,or),z(b,cr),z(b,fn)),B.svgFilters===!0&&(z(Q,sr),z(b,cr),z(b,fn)),B.mathMl===!0&&(z(Q,lr),z(b,Ka),z(b,fn))),s.ADD_TAGS&&(Q===O&&(Q=st(Q)),z(Q,s.ADD_TAGS,ue)),s.ADD_ATTR&&(b===E&&(b=st(b)),z(b,s.ADD_ATTR,ue)),s.ADD_URI_SAFE_ATTR&&z(Qn,s.ADD_URI_SAFE_ATTR,ue),s.FORBID_CONTENTS&&(De===ft&&(De=st(De)),z(De,s.FORBID_CONTENTS,ue)),ve&&(Q["#text"]=!0),te&&z(Q,["html","head","body"]),Q.table&&(z(Q,["tbody"]),delete u.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw Pt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Pt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');N=s.TRUSTED_TYPES_POLICY,F=N.createHTML("")}else N===void 0&&(N=_c(R,a)),N!==null&&typeof F=="string"&&(F=N.createHTML(""));Ae&&Ae(s),pt=s}},wa=z({},[...or,...sr,...gc]),Sa=z({},[...lr,...yc]),Hs=function(s){let y=L(s);(!y||!y.tagName)&&(y={namespaceURI:dt,tagName:"template"});const C=gn(s.tagName),J=gn(y.tagName);return er[s.namespaceURI]?s.namespaceURI===nn?y.namespaceURI===Be?C==="svg":y.namespaceURI===tn?C==="svg"&&(J==="annotation-xml"||rn[J]):!!wa[C]:s.namespaceURI===tn?y.namespaceURI===Be?C==="math":y.namespaceURI===nn?C==="math"&&an[J]:!!Sa[C]:s.namespaceURI===Be?y.namespaceURI===nn&&!an[J]||y.namespaceURI===tn&&!rn[J]?!1:!Sa[C]&&(zs[C]||!wa[C]):!!(Et==="application/xhtml+xml"&&er[s.namespaceURI]):!1},Fe=function(s){Ct(t.removed,{element:s});try{L(s).removeChild(s)}catch{h(s)}},on=function(s,y){try{Ct(t.removed,{attribute:y.getAttributeNode(s),from:y})}catch{Ct(t.removed,{attribute:null,from:y})}if(y.removeAttribute(s),s==="is")if(j||ne)try{Fe(y)}catch{}else try{y.setAttribute(s,"")}catch{}},Aa=function(s){let y=null,C=null;if(oe)s="<remove></remove>"+s;else{const pe=Ya(s,/^[\r\n\t ]+/);C=pe&&pe[0]}Et==="application/xhtml+xml"&&dt===Be&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const J=N?N.createHTML(s):s;if(dt===Be)try{y=new T().parseFromString(J,Et)}catch{}if(!y||!y.documentElement){y=ee.createDocument(dt,"template",null);try{y.documentElement.innerHTML=Jn?F:J}catch{}}const he=y.body||y.documentElement;return s&&C&&he.insertBefore(n.createTextNode(C),he.childNodes[0]||null),dt===Be?re.call(y,te?"html":"body")[0]:te?y.documentElement:he},Ta=function(s){return ie.call(s.ownerDocument||s,s,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},nr=function(s){return s instanceof x&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof m)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},ka=function(s){return typeof l=="function"&&s instanceof l};function Ye(I,s,y){un(I,C=>{C.call(t,s,y,pt)})}const Ea=function(s){let y=null;if(Ye(V.beforeSanitizeElements,s,null),nr(s))return Fe(s),!0;const C=ue(s.nodeName);if(Ye(V.uponSanitizeElement,s,{tagName:C,allowedTags:Q}),s.hasChildNodes()&&!ka(s.firstElementChild)&&we(/<[/\w!]/g,s.innerHTML)&&we(/<[/\w!]/g,s.textContent)||s.nodeType===It.progressingInstruction||ae&&s.nodeType===It.comment&&we(/<[/\w]/g,s.data))return Fe(s),!0;if(!Q[C]||u[C]){if(!u[C]&&Ca(C)&&(k.tagNameCheck instanceof RegExp&&we(k.tagNameCheck,C)||k.tagNameCheck instanceof Function&&k.tagNameCheck(C)))return!1;if(ve&&!De[C]){const J=L(s)||s.parentNode,he=S(s)||s.childNodes;if(he&&J){const pe=he.length;for(let Ee=pe-1;Ee>=0;--Ee){const je=_(he[Ee],!0);je.__removalCount=(s.__removalCount||0)+1,J.insertBefore(je,A(s))}}}return Fe(s),!0}return s instanceof d&&!Hs(s)||(C==="noscript"||C==="noembed"||C==="noframes")&&we(/<\/no(script|embed|frames)/i,s.innerHTML)?(Fe(s),!0):(D&&s.nodeType===It.text&&(y=s.textContent,un([de,ye,ke],J=>{y=Ot(y,J," ")}),s.textContent!==y&&(Ct(t.removed,{element:s.cloneNode()}),s.textContent=y)),Ye(V.afterSanitizeElements,s,null),!1)},_a=function(s,y,C){if(se&&(y==="id"||y==="name")&&(C in n||C in qs))return!1;if(!(X&&!$[y]&&we(me,y))){if(!(v&&we(rt,y))){if(!b[y]||$[y]){if(!(Ca(s)&&(k.tagNameCheck instanceof RegExp&&we(k.tagNameCheck,s)||k.tagNameCheck instanceof Function&&k.tagNameCheck(s))&&(k.attributeNameCheck instanceof RegExp&&we(k.attributeNameCheck,y)||k.attributeNameCheck instanceof Function&&k.attributeNameCheck(y))||y==="is"&&k.allowCustomizedBuiltInElements&&(k.tagNameCheck instanceof RegExp&&we(k.tagNameCheck,C)||k.tagNameCheck instanceof Function&&k.tagNameCheck(C))))return!1}else if(!Qn[y]){if(!we(We,Ot(C,be,""))){if(!((y==="src"||y==="xlink:href"||y==="href")&&s!=="script"&&dc(C,"data:")===0&&Le[s])){if(!(q&&!we(_e,Ot(C,be,"")))){if(C)return!1}}}}}}return!0},Ca=function(s){return s!=="annotation-xml"&&Ya(s,at)},Oa=function(s){Ye(V.beforeSanitizeAttributes,s,null);const{attributes:y}=s;if(!y||nr(s))return;const C={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:b,forceKeepAttr:void 0};let J=y.length;for(;J--;){const he=y[J],{name:pe,namespaceURI:Ee,value:je}=he,_t=ue(pe);let xe=pe==="value"?je:pc(je);if(C.attrName=_t,C.attrValue=xe,C.keepAttr=!0,C.forceKeepAttr=void 0,Ye(V.uponSanitizeAttribute,s,C),xe=C.attrValue,it&&(_t==="id"||_t==="name")&&(on(pe,s),xe=ot+xe),ae&&we(/((--!?|])>)|<\/(style|title)/i,xe)){on(pe,s);continue}if(C.forceKeepAttr||(on(pe,s),!C.keepAttr))continue;if(!H&&we(/\/>/i,xe)){on(pe,s);continue}D&&un([de,ye,ke],Na=>{xe=Ot(xe,Na," ")});const Pa=ue(s.nodeName);if(_a(Pa,_t,xe)){if(N&&typeof R=="object"&&typeof R.getAttributeType=="function"&&!Ee)switch(R.getAttributeType(Pa,_t)){case"TrustedHTML":{xe=N.createHTML(xe);break}case"TrustedScriptURL":{xe=N.createScriptURL(xe);break}}try{Ee?s.setAttributeNS(Ee,pe,xe):s.setAttribute(pe,xe),nr(s)?Fe(s):Ba(t.removed)}catch{}}}Ye(V.afterSanitizeAttributes,s,null)},Ws=function I(s){let y=null;const C=Ta(s);for(Ye(V.beforeSanitizeShadowDOM,s,null);y=C.nextNode();)Ye(V.uponSanitizeShadowNode,y,null),Ea(y),Oa(y),y.content instanceof i&&I(y.content);Ye(V.afterSanitizeShadowDOM,s,null)};return t.sanitize=function(I){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=null,C=null,J=null,he=null;if(Jn=!I,Jn&&(I="<!-->"),typeof I!="string"&&!ka(I))if(typeof I.toString=="function"){if(I=I.toString(),typeof I!="string")throw Pt("dirty is not a string, aborting")}else throw Pt("toString is not a function");if(!t.isSupported)return I;if(U||tr(s),t.removed=[],typeof I=="string"&&(M=!1),M){if(I.nodeName){const je=ue(I.nodeName);if(!Q[je]||u[je])throw Pt("root node is forbidden and cannot be sanitized in-place")}}else if(I instanceof l)y=Aa("<!---->"),C=y.ownerDocument.importNode(I,!0),C.nodeType===It.element&&C.nodeName==="BODY"||C.nodeName==="HTML"?y=C:y.appendChild(C);else{if(!j&&!D&&!te&&I.indexOf("<")===-1)return N&&Me?N.createHTML(I):I;if(y=Aa(I),!y)return j?null:Me?F:""}y&&oe&&Fe(y.firstChild);const pe=Ta(M?I:y);for(;J=pe.nextNode();)Ea(J),Oa(J),J.content instanceof i&&Ws(J.content);if(M)return I;if(j){if(ne)for(he=Z.call(y.ownerDocument);y.firstChild;)he.appendChild(y.firstChild);else he=y;return(b.shadowroot||b.shadowrootmode)&&(he=ce.call(r,he,!0)),he}let Ee=te?y.outerHTML:y.innerHTML;return te&&Q["!doctype"]&&y.ownerDocument&&y.ownerDocument.doctype&&y.ownerDocument.doctype.name&&we(zo,y.ownerDocument.doctype.name)&&(Ee="<!DOCTYPE "+y.ownerDocument.doctype.name+`>
`+Ee),D&&un([de,ye,ke],je=>{Ee=Ot(Ee,je," ")}),N&&Me?N.createHTML(Ee):Ee},t.setConfig=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};tr(I),U=!0},t.clearConfig=function(){pt=null,U=!1},t.isValidAttribute=function(I,s,y){pt||tr({});const C=ue(I),J=ue(s);return _a(C,J,y)},t.addHook=function(I,s){typeof s=="function"&&Ct(V[I],s)},t.removeHook=function(I,s){if(s!==void 0){const y=uc(V[I],s);return y===-1?void 0:fc(V[I],y,1)[0]}return Ba(V[I])},t.removeHooks=function(I){V[I]=[]},t.removeAllHooks=function(){V=Qa()},t}Uo();function*$o(e="id-",t=0){let n=t;for(;;)n+=1,yield e+n}function qo(){const e=(document.currentScript&&document.currentScript.src||"").match(/(.*\/)/);return e&&e.length>0?e[0].substr(0,e[0].length-1):"/"}f.shape({event:f.string,action:f.string,name:f.string,region:f.string,section:f.string,component:f.string,type:f.string,text:f.string});const le=({event:e="",action:t="",name:n="",type:r="",section:a="",text:i="",region:o="",component:l=""})=>{const{dataLayer:d}=window,c={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:o.toLowerCase(),section:a.toLowerCase(),text:i.toLowerCase(),component:l.toLowerCase()};d&&d.push(c)},At=({children:e})=>p.jsx(p.Fragment,{children:e});At.propTypes={children:f.oneOfType([f.arrayOf(f.node),f.node,f.string])};At.__docgenInfo={description:"",methods:[],displayName:"Base",props:{children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"},{name:"string"}]},required:!1}}};var Cc={exports:{}};(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(i=a(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var l in i)t.call(i,l)&&i[l]&&(o=a(o,l));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Cc);({...At.propTypes});const ea=({children:e,className:t="container",...n})=>p.jsx("div",{className:t,...n,children:p.jsx("div",{className:"row",children:e})});ea.propTypes={children:At.propTypes.children};({...ea.propTypes});At.propTypes.children,f.oneOf(["0","3","4","6","8","9","12"]);At.propTypes.children;ea.__docgenInfo={description:"",methods:[],displayName:"Container",props:{className:{defaultValue:{value:'"container"',computed:!1},required:!1},children:{description:"",type:{name:"custom",raw:"Base.propTypes.children"},required:!1}}};function Oc({packageName:e="",component:t="",type:n="",configuration:r={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}}const Pc={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Nc={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Ic=Nc,Lc={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Ja=Lc,Rc={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Mc={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ho=Mc;function Dc(e,t,n){return(t=jc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ei(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ei(Object(n),!0).forEach(function(r){Dc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ei(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fc(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jc(e){var t=Fc(e,"string");return typeof t=="symbol"?t:t+""}const ti=()=>{};let ta={},Wo={},Bo=null,Yo={mark:ti,measure:ti};try{typeof window<"u"&&(ta=window),typeof document<"u"&&(Wo=document),typeof MutationObserver<"u"&&(Bo=MutationObserver),typeof performance<"u"&&(Yo=performance)}catch{}const{userAgent:ni=""}=ta.navigator||{},et=ta,K=Wo,ri=Bo,dn=Yo;et.document;const Ke=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",Go=~ni.indexOf("MSIE")||~ni.indexOf("Trident/");var zc=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Uc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Xo={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},$c={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Vo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ge="classic",Yn="duotone",qc="sharp",Hc="sharp-duotone",Ko=[ge,Yn,qc,Hc],Wc={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Bc={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Yc=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Gc={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Xc=["fak","fa-kit","fakd","fa-kit-duotone"],ai={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Vc=["kit"],Kc={kit:{"fa-kit":"fak"}},Zc=["fak","fakd"],Qc={kit:{fak:"fa-kit"}},ii={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},pn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Jc=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],eu=["fak","fa-kit","fakd","fa-kit-duotone"],tu={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},nu={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ru={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},kr={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},au=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Er=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Jc,...au],iu=["solid","regular","light","thin","duotone","brands"],Zo=[1,2,3,4,5,6,7,8,9,10],ou=Zo.concat([11,12,13,14,15,16,17,18,19,20]),su=[...Object.keys(ru),...iu,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pn.GROUP,pn.SWAP_OPACITY,pn.PRIMARY,pn.SECONDARY].concat(Zo.map(e=>"".concat(e,"x"))).concat(ou.map(e=>"w-".concat(e))),lu={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Xe="___FONT_AWESOME___",_r=16,Qo="fa",Jo="svg-inline--fa",ct="data-fa-i2svg",Cr="data-fa-pseudo-element",cu="data-fa-pseudo-element-pending",na="data-prefix",ra="data-icon",oi="fontawesome-i2svg",uu="async",fu=["HTML","HEAD","STYLE","SCRIPT"],es=(()=>{try{return!0}catch{return!1}})();function Jt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[ge]}})}const ts=g({},Xo);ts[ge]=g(g(g(g({},{"fa-duotone":"duotone"}),Xo[ge]),ai.kit),ai["kit-duotone"]);const du=Jt(ts),Or=g({},Gc);Or[ge]=g(g(g(g({},{duotone:"fad"}),Or[ge]),ii.kit),ii["kit-duotone"]);const si=Jt(Or),Pr=g({},kr);Pr[ge]=g(g({},Pr[ge]),Qc.kit);const aa=Jt(Pr),Nr=g({},nu);Nr[ge]=g(g({},Nr[ge]),Kc.kit);Jt(Nr);const pu=zc,ns="fa-layers-text",mu=Uc,hu=g({},Wc);Jt(hu);const gu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ur=$c,yu=[...Vc,...su],Yt=et.FontAwesomeConfig||{};function bu(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}K&&typeof K.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=vu(bu(n));a!=null&&(Yt[r]=a)});const rs={styleDefault:"solid",familyDefault:ge,cssPrefix:Qo,replacementClass:Jo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yt.familyPrefix&&(Yt.cssPrefix=Yt.familyPrefix);const xt=g(g({},rs),Yt);xt.autoReplaceSvg||(xt.observeMutations=!1);const P={};Object.keys(rs).forEach(e=>{Object.defineProperty(P,e,{enumerable:!0,set:function(t){xt[e]=t,Gt.forEach(n=>n(P))},get:function(){return xt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){xt.cssPrefix=e,Gt.forEach(t=>t(P))},get:function(){return xt.cssPrefix}});et.FontAwesomeConfig=P;const Gt=[];function xu(e){return Gt.push(e),()=>{Gt.splice(Gt.indexOf(e),1)}}const Ze=_r,Ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wu(e){if(!e||!Ke)return;const t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=K.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return K.head.insertBefore(t,r),e}const Su="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vt(){let e=12,t="";for(;e-- >0;)t+=Su[Math.random()*62|0];return t}function Tt(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ia(e){return e.classList?Tt(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function as(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Au(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(as(e[n]),'" '),"").trim()}function Gn(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function oa(e){return e.size!==Ue.size||e.x!==Ue.x||e.y!==Ue.y||e.rotate!==Ue.rotate||e.flipX||e.flipY}function Tu(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(i," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:d,path:c}}function ku(e){let{transform:t,width:n=_r,height:r=_r,startCentered:a=!1}=e,i="";return a&&Go?i+="translate(".concat(t.x/Ze-n/2,"em, ").concat(t.y/Ze-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(t.x/Ze,"em), calc(-50% + ").concat(t.y/Ze,"em)) "):i+="translate(".concat(t.x/Ze,"em, ").concat(t.y/Ze,"em) "),i+="scale(".concat(t.size/Ze*(t.flipX?-1:1),", ").concat(t.size/Ze*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var Eu=`:root, :host {
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
}`;function is(){const e=Qo,t=Jo,n=P.cssPrefix,r=P.replacementClass;let a=Eu;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}let li=!1;function fr(){P.autoAddCss&&!li&&(wu(is()),li=!0)}var _u={mixout(){return{dom:{css:is,insertCss:fr}}},hooks(){return{beforeDOMElementCreation(){fr()},beforeI2svg(){fr()}}}};const Ve=et||{};Ve[Xe]||(Ve[Xe]={});Ve[Xe].styles||(Ve[Xe].styles={});Ve[Xe].hooks||(Ve[Xe].hooks={});Ve[Xe].shims||(Ve[Xe].shims=[]);var $e=Ve[Xe];const os=[],ss=function(){K.removeEventListener("DOMContentLoaded",ss),wn=1,os.map(e=>e())};let wn=!1;Ke&&(wn=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),wn||K.addEventListener("DOMContentLoaded",ss));function Cu(e){Ke&&(wn?setTimeout(e,0):os.push(e))}function en(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?as(e):"<".concat(t," ").concat(Au(n),">").concat(r.map(en).join(""),"</").concat(t,">")}function ci(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var dr=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=n,d,c,m;for(r===void 0?(d=1,m=t[i[0]]):(d=0,m=r);d<o;d++)c=i[d],m=l(m,t[c],c,t);return m};function Ou(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ir(e){const t=Ou(e);return t.length===1?t[0].toString(16):null}function Pu(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ui(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Lr(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=ui(t);typeof $e.hooks.addPack=="function"&&!r?$e.hooks.addPack(e,ui(t)):$e.styles[e]=g(g({},$e.styles[e]||{}),a),e==="fas"&&Lr("fa",t)}const{styles:Kt,shims:Nu}=$e,ls=Object.keys(aa),Iu=ls.reduce((e,t)=>(e[t]=Object.keys(aa[t]),e),{});let sa=null,cs={},us={},fs={},ds={},ps={};function Lu(e){return~yu.indexOf(e)}function Ru(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Lu(a)?a:null}const ms=()=>{const e=r=>dr(Kt,(a,i,o)=>(a[o]=dr(i,r,{}),a),{});cs=e((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=i}),r)),us=e((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=i}),r)),ps=e((r,a,i)=>{const o=a[2];return r[i]=i,o.forEach(l=>{r[l]=i}),r});const t="far"in Kt||P.autoFetchSvg,n=dr(Nu,(r,a)=>{const i=a[0];let o=a[1];const l=a[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});fs=n.names,ds=n.unicodes,sa=Xn(P.styleDefault,{family:P.familyDefault})};xu(e=>{sa=Xn(e.styleDefault,{family:P.familyDefault})});ms();function la(e,t){return(cs[e]||{})[t]}function Mu(e,t){return(us[e]||{})[t]}function lt(e,t){return(ps[e]||{})[t]}function hs(e){return fs[e]||{prefix:null,iconName:null}}function Du(e){const t=ds[e],n=la("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tt(){return sa}const gs=()=>({prefix:null,iconName:null,rest:[]});function Fu(e){let t=ge;const n=ls.reduce((r,a)=>(r[a]="".concat(P.cssPrefix,"-").concat(a),r),{});return Ko.forEach(r=>{(e.includes(n[r])||e.some(a=>Iu[r].includes(a)))&&(t=r)}),t}function Xn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ge}=t,r=du[n][e];if(n===Yn&&!e)return"fad";const a=si[n][e]||si[n][r],i=e in $e.styles?e:null;return a||i||null}function ju(e){let t=[],n=null;return e.forEach(r=>{const a=Ru(P.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function fi(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function Vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=Er.concat(eu),i=fi(e.filter(x=>a.includes(x))),o=fi(e.filter(x=>!Er.includes(x))),l=i.filter(x=>(r=x,!Vo.includes(x))),[d=null]=l,c=Fu(i),m=g(g({},ju(o)),{},{prefix:Xn(d,{family:c})});return g(g(g({},m),qu({values:e,family:c,styles:Kt,config:P,canonical:m,givenPrefix:r})),zu(n,r,m))}function zu(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const i=t==="fa"?hs(a):{},o=lt(r,a);return a=i.iconName||o||a,r=i.prefix||r,r==="far"&&!Kt.far&&Kt.fas&&!P.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const Uu=Ko.filter(e=>e!==ge||e!==Yn),$u=Object.keys(kr).filter(e=>e!==ge).map(e=>Object.keys(kr[e])).flat();function qu(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:i={},config:o={}}=e,l=n===Yn,d=t.includes("fa-duotone")||t.includes("fad"),c=o.familyDefault==="duotone",m=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(d||c||m)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Uu.includes(n)&&(Object.keys(i).find(T=>$u.includes(T))||o.autoFetchSvg)){const T=Yc.get(n).defaultShortPrefixId;r.prefix=T,r.iconName=lt(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=tt()||"fas"),r}class Hu{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=g(g({},this.definitions[i]||{}),a[i]),Lr(i,a[i]);const o=aa[ge][i];o&&Lr(o,a[i]),ms()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:o,icon:l}=r[a],d=l[2];t[i]||(t[i]={}),d.length>0&&d.forEach(c=>{typeof c=="string"&&(t[i][c]=l)}),t[i][o]=l}),t}}let di=[],ht={};const yt={},Wu=Object.keys(yt);function Bu(e,t){let{mixoutsTo:n}=t;return di=e,ht={},Object.keys(yt).forEach(r=>{Wu.indexOf(r)===-1&&delete yt[r]}),di.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{ht[o]||(ht[o]=[]),ht[o].push(i[o])})}r.provides&&r.provides(yt)}),n}function Rr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(ht[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function ut(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(ht[e]||[]).forEach(i=>{i.apply(null,n)})}function nt(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return yt[e]?yt[e].apply(null,t):void 0}function Mr(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||tt();if(t)return t=lt(n,t)||t,ci(ys.definitions,n,t)||ci($e.styles,n,t)}const ys=new Hu,Yu=()=>{P.autoReplaceSvg=!1,P.observeMutations=!1,ut("noAuto")},Gu={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ke?(ut("beforeI2svg",e),nt("pseudoElements2svg",e),nt("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Cu(()=>{Vu({autoReplaceSvgRoot:t}),ut("watch",e)})}},Xu={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:lt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Xn(e[0]);return{prefix:n,iconName:lt(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(pu))){const t=Vn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||tt(),iconName:lt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=tt();return{prefix:t,iconName:lt(t,e)||e}}}},Oe={noAuto:Yu,config:P,dom:Gu,parse:Xu,library:ys,findIconDefinition:Mr,toHtml:en},Vu=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=K}=e;(Object.keys($e.styles).length>0||P.autoFetchSvg)&&Ke&&P.autoReplaceSvg&&Oe.dom.i2svg({node:t})};function Kn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>en(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Ke)return;const n=K.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Ku(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(oa(o)&&n.found&&!r.found){const{width:l,height:d}=n,c={x:l/d/2,y:.5};a.style=Gn(g(g({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Zu(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},a),{},{id:o}),children:r}]}]}function ca(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:l,maskId:d,titleId:c,extra:m,watchable:x=!1}=e,{width:T,height:R}=n.found?n:t,w=Zc.includes(r),_=[P.replacementClass,a?"".concat(P.cssPrefix,"-").concat(a):""].filter(F=>m.classes.indexOf(F)===-1).filter(F=>F!==""||!!F).concat(m.classes).join(" ");let h={children:[],attributes:g(g({},m.attributes),{},{"data-prefix":r,"data-icon":a,class:_,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(R)})};const A=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/R*16*.0625,"em")}:{};x&&(h.attributes[ct]=""),l&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||Vt())},children:[l]}),delete h.attributes.title);const S=g(g({},h),{},{prefix:r,iconName:a,main:t,mask:n,maskId:d,transform:i,symbol:o,styles:g(g({},A),m.styles)}),{children:L,attributes:N}=n.found&&t.found?nt("generateAbstractMask",S)||{children:[],attributes:{}}:nt("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=L,S.attributes=N,o?Zu(S):Ku(S)}function pi(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:l=!1}=e,d=g(g(g({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(d[ct]="");const c=g({},o.styles);oa(a)&&(c.transform=ku({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const m=Gn(c);m.length>0&&(d.style=m);const x=[];return x.push({tag:"span",attributes:d,children:[t]}),i&&x.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),x}function Qu(e){const{content:t,title:n,extra:r}=e,a=g(g(g({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Gn(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:pr}=$e;function Dr(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(ur.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ur.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ur.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Ju={found:!1,width:512,height:512};function ef(e,t){!es&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Fr(e,t){let n=t;return t==="fa"&&P.styleDefault!==null&&(t=tt()),new Promise((r,a)=>{if(n==="fa"){const i=hs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&pr[t]&&pr[t][e]){const i=pr[t][e];return r(Dr(i))}ef(e,t),r(g(g({},Ju),{},{icon:P.showMissingIcons&&e?nt("missingIconAbstract")||{}:{}}))})}const mi=()=>{},jr=P.measurePerformance&&dn&&dn.mark&&dn.measure?dn:{mark:mi,measure:mi},Lt='FA "6.7.2"',tf=e=>(jr.mark("".concat(Lt," ").concat(e," begins")),()=>bs(e)),bs=e=>{jr.mark("".concat(Lt," ").concat(e," ends")),jr.measure("".concat(Lt," ").concat(e),"".concat(Lt," ").concat(e," begins"),"".concat(Lt," ").concat(e," ends"))};var ua={begin:tf,end:bs};const yn=()=>{};function hi(e){return typeof(e.getAttribute?e.getAttribute(ct):null)=="string"}function nf(e){const t=e.getAttribute?e.getAttribute(na):null,n=e.getAttribute?e.getAttribute(ra):null;return t&&n}function rf(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function af(){return P.autoReplaceSvg===!0?bn.replace:bn[P.autoReplaceSvg]||bn.replace}function of(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function sf(e){return K.createElement(e)}function vs(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?of:sf}=t;if(typeof e=="string")return K.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(vs(i,{ceFn:n}))}),r}function lf(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const bn={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(vs(n),t)}),t.getAttribute(ct)===null&&P.keepOriginalSource){let n=K.createComment(lf(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~ia(t).indexOf(P.replacementClass))return bn.replace(e);const r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===P.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>en(i)).join(`
`);t.setAttribute(ct,""),t.innerHTML=a}};function gi(e){e()}function xs(e,t){const n=typeof t=="function"?t:yn;if(e.length===0)n();else{let r=gi;P.mutateApproach===uu&&(r=et.requestAnimationFrame||gi),r(()=>{const a=af(),i=ua.begin("mutate");e.map(a),i(),n()})}}let fa=!1;function ws(){fa=!0}function zr(){fa=!1}let Sn=null;function yi(e){if(!ri||!P.observeMutations)return;const{treeCallback:t=yn,nodeCallback:n=yn,pseudoElementsCallback:r=yn,observeMutationsRoot:a=K}=e;Sn=new ri(i=>{if(fa)return;const o=tt();Tt(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!hi(l.addedNodes[0])&&(P.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&P.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&hi(l.target)&&~gu.indexOf(l.attributeName))if(l.attributeName==="class"&&nf(l.target)){const{prefix:d,iconName:c}=Vn(ia(l.target));l.target.setAttribute(na,d||o),c&&l.target.setAttribute(ra,c)}else rf(l.target)&&n(l.target)})}),Ke&&Sn.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function cf(){Sn&&Sn.disconnect()}function uf(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function ff(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=Vn(ia(e));return a.prefix||(a.prefix=tt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Mu(a.prefix,e.innerText)||la(a.prefix,Ir(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function df(e){const t=Tt(e.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Vt()):(t["aria-hidden"]="true",t.focusable="false")),t}function pf(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=ff(e),i=df(e),o=Rr("parseNodeAttributes",{},e);let l=t.styleParser?uf(e):[];return g({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:i}},o)}const{styles:mf}=$e;function Ss(e){const t=P.autoReplaceSvg==="nest"?bi(e,{styleParser:!1}):bi(e);return~t.extra.classes.indexOf(ns)?nt("generateLayersText",e,t):nt("generateSvgReplacementMutation",e,t)}function hf(){return[...Xc,...Er]}function vi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ke)return Promise.resolve();const n=K.documentElement.classList,r=m=>n.add("".concat(oi,"-").concat(m)),a=m=>n.remove("".concat(oi,"-").concat(m)),i=P.autoFetchSvg?hf():Vo.concat(Object.keys(mf));i.includes("fa")||i.push("fa");const o=[".".concat(ns,":not([").concat(ct,"])")].concat(i.map(m=>".".concat(m,":not([").concat(ct,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Tt(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();const d=ua.begin("onTree"),c=l.reduce((m,x)=>{try{const T=Ss(x);T&&m.push(T)}catch(T){es||T.name==="MissingIcon"&&console.error(T)}return m},[]);return new Promise((m,x)=>{Promise.all(c).then(T=>{xs(T,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),d(),m()})}).catch(T=>{d(),x(T)})})}function gf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ss(e).then(n=>{n&&xs([n],t)})}function yf(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Mr(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Mr(a||{})),e(r,g(g({},n),{},{mask:a}))}}const bf=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ue,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:l=null,classes:d=[],attributes:c={},styles:m={}}=t;if(!e)return;const{prefix:x,iconName:T,icon:R}=e;return Kn(g({type:"icon"},e),()=>(ut("beforeDOMElementCreation",{iconDefinition:e,params:t}),P.autoA11y&&(o?c["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(l||Vt()):(c["aria-hidden"]="true",c.focusable="false")),ca({icons:{main:Dr(R),mask:a?Dr(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:T,transform:g(g({},Ue),n),symbol:r,title:o,maskId:i,titleId:l,extra:{attributes:c,styles:m,classes:d}})))};var vf={mixout(){return{icon:yf(bf)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=vi,e.nodeCallback=gf,e}}},provides(e){e.i2svg=function(t){const{node:n=K,callback:r=()=>{}}=t;return vi(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:i,prefix:o,transform:l,symbol:d,mask:c,maskId:m,extra:x}=n;return new Promise((T,R)=>{Promise.all([Fr(r,o),c.iconName?Fr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[_,h]=w;T([t,ca({icons:{main:_,mask:h},prefix:o,iconName:r,transform:l,symbol:d,maskId:m,title:a,titleId:i,extra:x,watchable:!0})])}).catch(R)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:i,styles:o}=t;const l=Gn(o);l.length>0&&(r.style=l);let d;return oa(i)&&(d=nt("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(d||a.icon),{children:n,attributes:r}}}},xf={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Kn({type:"layer"},()=>{ut("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},wf={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return Kn({type:"counter",content:e},()=>(ut("beforeDOMElementCreation",{content:e,params:t}),Qu({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(P.cssPrefix,"-layers-counter"),...r]}})))}}}},Sf={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ue,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return Kn({type:"text",content:e},()=>(ut("beforeDOMElementCreation",{content:e,params:t}),pi({content:e,transform:g(g({},Ue),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(P.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:i}=n;let o=null,l=null;if(Go){const d=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/d,l=c.height/d}return P.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,pi({content:t.innerHTML,width:o,height:l,transform:a,title:r,extra:i,watchable:!0})])}}};const Af=new RegExp('"',"ug"),xi=[1105920,1112319],wi=g(g(g(g({},{FontAwesome:{normal:"fas",400:"fas"}}),Bc),lu),tu),Ur=Object.keys(wi).reduce((e,t)=>(e[t.toLowerCase()]=wi[t],e),{}),Tf=Object.keys(Ur).reduce((e,t)=>{const n=Ur[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function kf(e){const t=e.replace(Af,""),n=Pu(t,0),r=n>=xi[0]&&n<=xi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ir(a?t[0]:t),isSecondary:r||a}}function Ef(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(Ur[n]||{})[a]||Tf[n]}function Si(e,t){const n="".concat(cu).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const o=Tt(e.children).filter(T=>T.getAttribute(Cr)===t)[0],l=et.getComputedStyle(e,t),d=l.getPropertyValue("font-family"),c=d.match(mu),m=l.getPropertyValue("font-weight"),x=l.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&x!=="none"&&x!==""){const T=l.getPropertyValue("content");let R=Ef(d,m);const{value:w,isSecondary:_}=kf(T),h=c[0].startsWith("FontAwesome");let A=la(R,w),S=A;if(h){const L=Du(w);L.iconName&&L.prefix&&(A=L.iconName,R=L.prefix)}if(A&&!_&&(!o||o.getAttribute(na)!==R||o.getAttribute(ra)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);const L=pf(),{extra:N}=L;N.attributes[Cr]=t,Fr(A,R).then(F=>{const ee=ca(g(g({},L),{},{icons:{main:F,mask:gs()},prefix:R,iconName:S,extra:N,watchable:!0})),ie=K.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ie,e.firstChild):e.appendChild(ie),ie.outerHTML=ee.map(Z=>en(Z)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function _f(e){return Promise.all([Si(e,"::before"),Si(e,"::after")])}function Cf(e){return e.parentNode!==document.head&&!~fu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ai(e){if(Ke)return new Promise((t,n)=>{const r=Tt(e.querySelectorAll("*")).filter(Cf).map(_f),a=ua.begin("searchPseudoElements");ws(),Promise.all(r).then(()=>{a(),zr(),t()}).catch(()=>{a(),zr(),n()})})}var Of={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Ai,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=K}=t;P.searchPseudoElements&&Ai(n)}}};let Ti=!1;var Pf={mixout(){return{dom:{unwatch(){ws(),Ti=!0}}}},hooks(){return{bootstrap(){yi(Rr("mutationObserverCallbacks",{}))},noAuto(){cf()},watch(e){const{observeMutationsRoot:t}=e;Ti?zr():yi(Rr("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const ki=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var Nf={mixout(){return{parse:{transform:e=>ki(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=ki(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:i}=t;const o={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(d," ").concat(c)},x={transform:"translate(".concat(i/2*-1," -256)")},T={outer:o,inner:m,path:x};return{tag:"g",attributes:g({},T.outer),children:[{tag:"g",attributes:g({},T.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:g(g({},n.icon.attributes),T.path)}]}]}}}};const mr={x:0,y:0,width:"100%",height:"100%"};function Ei(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function If(e){return e.tag==="g"?e.children:[e]}var Lf={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Vn(n.split(" ").map(a=>a.trim())):gs();return r.prefix||(r.prefix=tt()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:i,maskId:o,transform:l}=t;const{width:d,icon:c}=a,{width:m,icon:x}=i,T=Tu({transform:l,containerWidth:m,iconWidth:d}),R={tag:"rect",attributes:g(g({},mr),{},{fill:"white"})},w=c.children?{children:c.children.map(Ei)}:{},_={tag:"g",attributes:g({},T.inner),children:[Ei(g({tag:c.tag,attributes:g(g({},c.attributes),T.path)},w))]},h={tag:"g",attributes:g({},T.outer),children:[_]},A="mask-".concat(o||Vt()),S="clip-".concat(o||Vt()),L={tag:"mask",attributes:g(g({},mr),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,h]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:If(x)},L]};return n.push(N,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(A,")")},mr)}),{children:n,attributes:r}}}},Rf={provides(e){let t=!1;et.matchMedia&&(t=et.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:g(g({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=g(g({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:g(g({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:g(g({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:g(g({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:g(g({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:g(g({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Mf={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Df=[_u,vf,xf,wf,Sf,Of,Pf,Nf,Lf,Rf,Mf];Bu(Df,{mixoutsTo:Oe});Oe.noAuto;Oe.config;Oe.library;Oe.dom;const $r=Oe.parse;Oe.findIconDefinition;Oe.toHtml;const Ff=Oe.icon;Oe.layer;Oe.text;Oe.counter;function _i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_i(Object(n),!0).forEach(function(r){gt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_i(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function An(e){"@babel/helpers - typeof";return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},An(e)}function gt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jf(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function zf(e,t){if(e==null)return{};var n=jf(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function qr(e){return Uf(e)||$f(e)||qf(e)||Hf()}function Uf(e){if(Array.isArray(e))return Hr(e)}function $f(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qf(e,t){if(e){if(typeof e=="string")return Hr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hr(e,t)}}function Hr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Hf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wf(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,d=e.spin,c=e.spinPulse,m=e.spinReverse,x=e.pulse,T=e.fixedWidth,R=e.inverse,w=e.border,_=e.listItem,h=e.flip,A=e.size,S=e.rotation,L=e.pull,N=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":d,"fa-spin-reverse":m,"fa-spin-pulse":c,"fa-pulse":x,"fa-fw":T,"fa-inverse":R,"fa-border":w,"fa-li":_,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},gt(t,"fa-".concat(A),typeof A<"u"&&A!==null),gt(t,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),gt(t,"fa-pull-".concat(L),typeof L<"u"&&L!==null),gt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(N).map(function(F){return N[F]?F:null}).filter(function(F){return F})}function Bf(e){return e=e-0,e===e}function As(e){return Bf(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Yf=["style"];function Gf(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Xf(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=As(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Gf(a)]=i:t[a]=i,t},{})}function Ts(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(d){return Ts(e,d)}),a=Object.keys(t.attributes||{}).reduce(function(d,c){var m=t.attributes[c];switch(c){case"class":d.attrs.className=m,delete t.attributes.class;break;case"style":d.attrs.style=Xf(m);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?d.attrs[c.toLowerCase()]=m:d.attrs[As(c)]=m}return d},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=zf(n,Yf);return a.attrs.style=ze(ze({},a.attrs.style),o),e.apply(void 0,[t.tag,ze(ze({},a.attrs),l)].concat(qr(r)))}var ks=!1;try{ks=!0}catch{}function Vf(){if(!ks&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ci(e){if(e&&An(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if($r.icon)return $r.icon(e);if(e===null)return null;if(e&&An(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function hr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?gt({},e,t):{}}var Oi={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Je=wt.forwardRef(function(e,t){var n=ze(ze({},Oi),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,l=n.title,d=n.titleId,c=n.maskId,m=Ci(r),x=hr("classes",[].concat(qr(Wf(n)),qr((o||"").split(" ")))),T=hr("transform",typeof n.transform=="string"?$r.transform(n.transform):n.transform),R=hr("mask",Ci(a)),w=Ff(m,ze(ze(ze(ze({},x),T),R),{},{symbol:i,title:l,titleId:d,maskId:c}));if(!w)return Vf("Could not find icon",m),null;var _=w.abstract,h={ref:t};return Object.keys(n).forEach(function(A){Oi.hasOwnProperty(A)||(h[A]=n[A])}),Kf(_[0],h)});Je.displayName="FontAwesomeIcon";Je.propTypes={beat:f.bool,border:f.bool,beatFade:f.bool,bounce:f.bool,className:f.string,fade:f.bool,flash:f.bool,mask:f.oneOfType([f.object,f.array,f.string]),maskId:f.string,fixedWidth:f.bool,inverse:f.bool,flip:f.oneOf([!0,!1,"horizontal","vertical","both"]),icon:f.oneOfType([f.object,f.array,f.string]),listItem:f.bool,pull:f.oneOf(["right","left"]),pulse:f.bool,rotation:f.oneOf([0,90,180,270]),shake:f.bool,size:f.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:f.bool,spinPulse:f.bool,spinReverse:f.bool,symbol:f.oneOfType([f.bool,f.string]),title:f.string,titleId:f.string,transform:f.oneOfType([f.string,f.object]),swapOpacity:f.bool};var Kf=Ts.bind(null,wt.createElement);const Zf={Lg:"992px",Xl:"1260px"},Es=Y.createContext(),da=({initialValue:e,children:t})=>{const n={...e,breakpoint:Zf[e.breakpoint]};return p.jsx(Es.Provider,{value:n,children:t})};da.propTypes={initialValue:f.shape(vo).isRequired,children:f.node.isRequired};const qe=()=>{const e=Y.useContext(Es);if(e===void 0)throw new Error("useAppContext must be used within a AppContextProvider");return e};da.__docgenInfo={description:"",methods:[],displayName:"AppContextProvider",props:{initialValue:{description:"",type:{name:"shape",value:{isPartner:{name:"bool",required:!1},navTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},partnerLogo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},logo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},title:{name:"string",required:!1},parentOrg:{name:"custom",raw:"TitlePropTypes.parentOrg",required:!1},parentOrgUrl:{name:"custom",raw:"TitlePropTypes.parentOrgUrl",required:!1},baseUrl:{name:"custom",raw:"TitlePropTypes.baseUrl",required:!1},loggedIn:{name:"custom",raw:"LoginPropTypes.loggedIn",required:!1},userName:{name:"custom",raw:"LoginPropTypes.userName",required:!1},loginLink:{name:"custom",raw:"LoginPropTypes.loginLink",required:!1},onLoginClick:{name:"func",required:!1},logoutLink:{name:"custom",raw:"LoginPropTypes.logoutLink",required:!1},onLogoutClick:{name:"func",required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},breakpoint:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}],required:!1},animateTitle:{name:"bool",required:!1},expandOnHover:{name:"bool",required:!1},mobileNavTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},hasNavigation:{name:"bool",required:!1},searchUrl:{name:"string",required:!1},site:{name:"string",required:!1},renderDiv:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}],required:!1}}},required:!0},children:{description:"",type:{name:"node"},required:!0}}};const Zn=e=>{const t=window==null?void 0:window.matchMedia(`(max-width: ${e})`),[n,r]=Y.useState(t==null?void 0:t.matches),a=i=>{r(i.matches)};return Y.useEffect(()=>(t.addEventListener("change",a),()=>t.removeEventListener("change",a)),[]),n},Qf=Se.div`
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
`,Jf=Se.div`
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
`,Pi={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar"},_s=()=>{const{loggedIn:e,userName:t,logoutLink:n,loginLink:r,onLoginClick:a,onLogoutClick:i,breakpoint:o}=qe();return p.jsx(Jf,{className:"nav-link login-status",breakpoint:o,children:e?p.jsxs(p.Fragment,{children:[t?p.jsx("span",{className:"name","data-testid":"user-name",children:t}):"",p.jsx("a",{className:"signout",href:n,onClick:l=>{le({...Pi,text:"sign out"}),i==null||i(l)},children:"Sign Out"})]}):p.jsx("a",{href:r,onClick:l=>{le({...Pi,text:"sign in"}),a==null||a(l)},children:"Sign In"})})};_s.__docgenInfo={description:"",methods:[],displayName:"Login"};const ed=Se.form`
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
`,gr={event:"search",action:"type",name:"onenter",type:"main search",region:"navbar",section:"topbar"},Cs=()=>{const{breakpoint:e,searchUrl:t,site:n}=qe(),r=Zn(e),a=Y.useRef(null),[i,o]=Y.useState(!1);Y.useEffect(()=>{i&&a.current.focus()},[i]);const l=c=>{const m=c.target;c.preventDefault(),le({...gr,text:c.target.elements.q.value}),setTimeout(()=>{m.submit()},100)},d=()=>{o(c=>{const m=!c;return le({...gr,event:"link",action:"click",name:"onclick",text:m?"search icon":"close search icon"}),m})};return p.jsxs(ed,{breakpoint:e,action:t,onSubmit:l,method:"get",name:"gs",className:i?"open-search":"","data-testid":"universal-nav-search-form",children:[r?p.jsxs("label",{children:[p.jsx(Je,{icon:Ja}),p.jsx("input",{ref:a,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0,onChange:c=>le({...gr,text:c.target.value})})]}):p.jsxs(p.Fragment,{children:[p.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:d,className:"search-button","data-testid":"search-button",children:p.jsx(Je,{icon:Ja})}),i&&p.jsxs(p.Fragment,{children:[p.jsx("input",{ref:a,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0}),p.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:d,className:"close-search","data-testid":"close-search",children:p.jsx(Je,{icon:Ho})})]})]}),p.jsx("input",{name:"url_host",value:n,type:"hidden"}),p.jsx("input",{name:"site",value:"default_collection",type:"hidden"}),p.jsx("input",{name:"sort",value:"date:D:L:d1",type:"hidden"}),p.jsx("input",{name:"output",value:"xml_no_dtd",type:"hidden"}),p.jsx("input",{name:"ie",value:"UTF-8",type:"hidden"}),p.jsx("input",{name:"oe",value:"UTF-8",type:"hidden"}),p.jsx("input",{name:"client",value:"asu_frontend",type:"hidden"}),p.jsx("input",{name:"proxystylesheet",value:"asu_frontend",type:"hidden"})]})};Cs.__docgenInfo={description:"",methods:[],displayName:"Search"};const td={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar",text:""},pa=()=>{const{breakpoint:e}=qe();function t(){try{return window.location.href}catch(r){return console.error(r),""}}const n=[{className:"nav-link visually-hidden-focusable",href:"#skip-to-content",text:"Skip to main content"},{className:"nav-link visually-hidden-focusable",href:`https://accessibility.asu.edu/report?a11yref=${t()}`,text:"Report an accessibility problem"},{className:"nav-link",href:"https://asu.edu",text:"ASU Home"},{className:"nav-link",href:"https://my.asu.edu",text:"My ASU"},{className:"nav-link",href:"https://www.asu.edu/academics/colleges-schools",text:"Colleges and Schools"}];return p.jsx(Qf,{breakpoint:e,className:"universal-nav","data-testid":"universal-navbar","data-elastic-exclude":"data-elastic-exclude",children:p.jsx("div",{className:"container-xl",children:p.jsx("div",{className:"header-top",children:p.jsxs("nav",{className:"nav","aria-label":"ASU Global",children:[p.jsxs("div",{className:"links-container",children:[n.map(r=>p.jsx("a",{className:r.className,href:r.href,onClick:()=>le({...td,text:r.text}),children:r.text},r.href)),p.jsx(_s,{})]}),p.jsx(Cs,{})]})})})})};pa.__docgenInfo={description:"",methods:[],displayName:"UniversalNavbar"};const nd=Se.div`
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
`,rd=Se.a`
  display: unset;
  padding: 0;
  margin: 0;
  font-size: unset;
  line-height: unset;
  white-space: unset;
`,Os=qo(),ad=`${Os}/assets/img/arizona-state-university-logo-vertical.png`,id=`${Os}/assets/img/arizona-state-university-logo.png`,Ps=()=>{const{logo:e}=qe();return p.jsxs(rd,{href:(e==null?void 0:e.brandLink)??"https://asu.edu",className:"navbar-brand","data-testid":"logo",onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"asu logo"}),children:[p.jsx("img",{className:"vert",src:(e==null?void 0:e.src)??ad,alt:(e==null?void 0:e.alt)??"Arizona State University logo",title:(e==null?void 0:e.title)??"ASU homepage",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),p.jsx("img",{className:"horiz",src:(e==null?void 0:e.mobileSrc)??id,alt:(e==null?void 0:e.alt)??"Arizona State University logo",title:(e==null?void 0:e.title)??"ASU homepage",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})};Ps.__docgenInfo={description:"",methods:[],displayName:"Logo"};const od=Se.nav`
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
`,sd=Se.div`
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
`,ld={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},Ns=({text:e})=>p.jsx("h3",{className:"ul-heading",children:e});Ns.propTypes={text:f.string};const Is=({link:e,dropdownName:t,handleLinkEvent:n})=>p.jsx("li",{className:"nav-button",children:p.jsx(St,{text:e.text,color:e.color||"dark",href:e.href,onClick:r=>n(r,e),onKeyDown:n,onFocus:()=>le({text:e.text,component:t}),"data-testid":"submenu-item"})});Is.propTypes={link:f.shape({text:f.string,color:f.string,href:f.string}),dropdownName:f.string,handleLinkEvent:f.func};const Ls=({link:e,dropdownName:t,handleLinkEvent:n})=>p.jsx("li",{className:"nav-link",children:p.jsx("a",{...e.href?{}:{tabIndex:0},href:e.href,onClick:r=>n(r,e),onKeyDown:r=>n(r,e),onFocus:()=>le({text:e.text,component:t}),"data-testid":"submenu-item",children:e.text})});Ls.propTypes={link:f.shape({text:f.string,href:f.string}),dropdownName:f.string,handleLinkEvent:f.func};const ma=({dropdownName:e,items:t,buttons:n,classes:r,listId:a,setItemOpened:i,parentLink:o})=>{const{breakpoint:l}=qe(),d=(t==null?void 0:t.length)>2,c=Y.useRef(null),[m,x]=Y.useState(!1),T=(t==null?void 0:t.length)>1;Y.useEffect(()=>{if(window&&c.current){const h=c.current.getBoundingClientRect().left,A=window.innerWidth*.55;x(h>A)}},[]);const R=h=>h.stopPropagation(),w=(h,A)=>{var Z;const{key:S,type:L,target:N}=h,{parentElement:F}=N,ee=()=>{var ce;const re=(ce=F.nextElementSibling)==null?void 0:ce.firstChild;re&&re.focus()},ie=()=>{var ce;const re=(ce=F.previousElementSibling)==null?void 0:ce.firstChild;re&&re.focus()};R(h),S==="ArrowDown"?(h.preventDefault(),ee()):S==="ArrowUp"?(h.preventDefault(),ie()):S==="Escape"?(i(),o&&o.focus()):(S==="Enter"||S===" "||L==="click")&&((Z=A==null?void 0:A.onClick)==null||Z.call(A,h),le({...ld,text:A.text}))},_=(h,A)=>{const S=`${h.text}-${h.href||A}`;return h.type==="heading"?p.jsx(Ns,{text:h.text},S):h.type==="button"?p.jsx(Is,{link:h,dropdownName:e,handleLinkEvent:w},S):p.jsx(Ls,{link:h,dropdownName:e,handleLinkEvent:w},S)};return p.jsxs(sd,{ref:c,className:`${r}${m?" aligned-right":""}${d?" mega":""}`,breakpoint:l,children:[p.jsx("div",{id:T?a:null,className:"dropdown-container",children:t==null?void 0:t.map((h,A)=>{const L=$o(`dropdown-item-${A}-`).next().value;return p.jsx("ul",{id:T?`${a}-${L}`:a,children:h.map((N,F)=>_(N,F))},L)})}),n&&p.jsx("div",{className:"dropdown-button-container",children:p.jsx("div",{children:n.map((h,A)=>p.jsx(St,{color:h.color,text:h.text,href:h.href,onClick:R},`${h.text}-${h.href||A}`))})})]})};ma.propTypes={dropdownName:f.string,items:f.arrayOf(f.arrayOf(f.shape({text:f.string,selected:f.bool,onClick:f.func,href:f.string}))),buttons:f.arrayOf(f.shape(kn)),classes:f.string,listId:f.string,setItemOpened:f.func,parentLink:f.shape({focus:f.func})};ma.__docgenInfo={description:`@param {DropdownItemProps} props
@returns {JSX.Element}`,methods:[],displayName:"DropdownItem",props:{dropdownName:{description:"",type:{name:"string"},required:!1},items:{description:"",type:{name:"arrayOf",value:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1},selected:{name:"bool",required:!1},onClick:{name:"func",required:!1},href:{name:"string",required:!1}}}}},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},classes:{description:"",type:{name:"string"},required:!1},listId:{description:"",type:{name:"string"},required:!1},setItemOpened:{description:"",type:{name:"func"},required:!1},parentLink:{description:"",type:{name:"shape",value:{focus:{name:"func",required:!1}}},required:!1}}};const cd=Se.li`
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
`,ud={event:"collapse",type:"click"},yr={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},Rs=({children:e})=>p.jsxs(p.Fragment,{children:[p.jsx(Je,{icon:Ic,className:"icon-nav-item",alt:""}),p.jsx("span",{className:"mobile-only",children:e})]});Rs.propTypes={children:f.node};const ha=({link:e,setItemOpened:t,itemOpened:n})=>{const r=Y.useRef(null),a=Y.useRef(null),i=e.id===n,{breakpoint:o,expandOnHover:l,title:d}=qe(),c=Zn(o);Y.useEffect(()=>{const w=_=>{var h;i&&!((h=r==null?void 0:r.current)!=null&&h.contains(_.target))&&t()};return document.addEventListener("click",w,!0),()=>{document.removeEventListener("click",w,!0)}},[i]);const m=Y.useMemo(()=>{var w;return e.type==="icon-home"?p.jsx(Rs,{children:e.text}):p.jsxs("span",{children:[e.text,!!((w=e.items)!=null&&w.length)&&p.jsx(Je,{icon:Rc,className:`chevron-icon ${i?"open":""}`,alt:""})]})},[e]),x=()=>{var A;const w=!!((A=e.items)!=null&&A.length),_=i?"close":"open",{text:h}=e;le(w?{...yr,...ud,action:_,text:h}:{...yr,text:e.type==="icon-home"?"home button":h})},T=w=>{var A,S;if(!e.items&&e.href){le({...yr,text:e.text});return}const{key:_}=w;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"," ","Escape","Click"].includes(_)){if(w.preventDefault(),_==="Escape"&&i){t();return}if((_==="Enter"||_===" ")&&(e.items&&(!l&&!c||c)&&t(),x(),(A=e.onClick)==null||A.call(e,w)),(_==="ArrowDown"||_==="ArrowRight")&&i){const L=document.querySelectorAll(`.header-dropdown-${e.id} li.nav-link a`);L.length&&L[0].focus()}}else w.type==="click"&&e.items?(w.preventDefault(),x(),t()):w.type==="click"&&(x(),(S=e.onClick)==null||S.call(e,w))},R=()=>{l&&!c&&(t(),x())};return p.jsxs(cd,{breakpoint:o,ref:r,onMouseEnter:R,onMouseLeave:R,children:[p.jsx("a",{onKeyDown:T,onClick:T,href:e.href,...e.items?{"aria-expanded":i}:{},...e.href?{}:{tabIndex:0},"aria-owns":e.items?`dropdown-${e.id}`:null,className:`${e.class?e.class:""}${e.selected?" nav-item-selected":""}${i?" open-link":""}`,"data-testid":"nav-item",title:e.type==="icon-home"&&d?`${d} home page`:e.text,ref:a,children:m}),e.items&&p.jsx(ma,{items:e.items,buttons:e.buttons,dropdownName:e.text,classes:`header-dropdown-${e.id} ${i?"opened":""}`,listId:`dropdown-${e.id}`,setItemOpened:t,parentLink:a==null?void 0:a.current})]})};ha.propTypes={link:br,setItemOpened:f.func,itemOpened:f.number};ha.__docgenInfo={description:`@param {{ link: NavTreeProps, setItemOpened: Function, itemOpened: number }} props
@returns {JSX.Element}`,methods:[],displayName:"NavItem",props:{link:{description:"",type:{name:"shape",value:{id:{name:"number",required:!1},href:{name:"string",required:!1},text:{name:"string",required:!1},type:{name:"string",required:!1},selected:{name:"bool",required:!1},items:{name:"arrayOf",value:{name:"arrayOf",value:{name:"object"}},required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},class:{name:"string",required:!1}}},required:!1},setItemOpened:{description:"",type:{name:"func"},required:!1},itemOpened:{description:"",type:{name:"number"},required:!1}}};const Wr=()=>{const{navTree:e,mobileNavTree:t,buttons:n,breakpoint:r}=qe(),a=Zn(r),[i,o]=Y.useState(void 0),l=c=>{o(m=>i===c?void 0:c)},d=(c,m)=>{const x={...c,id:m},R=$o(`${c.text}-${m}-`).next().value;return p.jsx(ha,{link:x,setItemOpened:()=>l(m),itemOpened:i},R)};return p.jsxs(od,{breakpoint:r,"data-testid":"navigation","aria-label":"Site",children:[((e==null?void 0:e.length)||(t==null?void 0:t.length)||(n==null?void 0:n.length))&&p.jsxs("div",{className:"content-container",children:[((e==null?void 0:e.length)||(t==null?void 0:t.length))&&p.jsx("ul",{className:"nav-list",children:t!=null&&t.length&&a?t==null?void 0:t.map((c,m)=>d(c,m)):e==null?void 0:e.map((c,m)=>d(c,m))}),!!(n!=null&&n.length)&&p.jsx("form",{className:"buttons-container","data-testid":"buttons-container",children:n==null?void 0:n.map(c=>Y.createElement(St,{...c,key:c.text,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:c.text})}))})]}),a&&p.jsx(pa,{})]})};Wr.__docgenInfo={description:"",methods:[],displayName:"NavbarContainer"};const fd=Se.div`
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
`,ga=qo(),dd=`${ga}/assets/img/arizona-state-university-logo-vertical.png`,pd=`${ga}/assets/img/arizona-state-university-logo.png`,md=`${ga}/assets/img/asu-starbucks.png`,Ms=()=>{const{partnerLogo:e,logo:t,breakpoint:n}=qe();return p.jsxs(fd,{breakpoint:n,"data-testid":"partner",children:[p.jsx("a",{href:(e==null?void 0:e.brandLink)??"https://starbucks.asu.edu/",onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"partner logo"}),children:p.jsx("img",{src:(e==null?void 0:e.src)??md,alt:(e==null?void 0:e.alt)??"ASU Starbucks logo",width:"232",height:"81",decoding:"async",fetchpriority:"high"})}),p.jsxs("a",{href:(t==null?void 0:t.brandLink)??"https://asu.edu",onClick:()=>le({text:"asu logo"}),children:[p.jsx("img",{className:"vert",src:(t==null?void 0:t.src)??dd,alt:(t==null?void 0:t.alt)??"Arizona State University logo",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),p.jsx("img",{className:"horiz",src:(t==null?void 0:t.mobileSrc)??pd,alt:(t==null?void 0:t.alt)??"Arizona State University logo",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})]})};Ms.__docgenInfo={description:"",methods:[],displayName:"Partner"};const hd=(e,t)=>{const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n},gd=e=>{const t="localhost",n="title_loaded",r=new Date,a=e||window.location.hostname,i=localStorage.getItem("title_loaded"),o=r.getTime()>parseInt(i,10),l=a===t,d=document.referrer.includes(a);if(l||!d&&(!i||o)){const m=hd(r,10).getTime();return localStorage.setItem(n,m.toString()),!0}return!1},yd={"992px":"993px","1260px":"1261px"},Ni=Se.div`
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

  @media (min-width: ${({breakpoint:e})=>yd[e]}) {
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
`,ya=()=>{const[e,t]=Y.useState(!1),{title:n,parentOrg:r,parentOrgUrl:a,baseUrl:i,breakpoint:o,animateTitle:l}=qe();return Y.useEffect(()=>{if(l!==!1){let d=i==="/"?window.location.hostname:i;!d.includes(window.location.hostname)&&d.indexOf("/")===0&&(d=window.location.hostname+d),gd(d)&&t(!0)}},[e,l,i]),r?p.jsxs(Ni,{breakpoint:o,className:"title","data-testid":"title",children:[p.jsx("a",{className:"unit-name",href:a,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:r}),title:`${r} home page`,children:r}),p.jsx("a",{className:`subunit-name ${e?"active":""}`,href:i,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:n}),title:`${n} home page`,children:n})]}):p.jsx(Ni,{breakpoint:o,className:"title","data-testid":"title",children:p.jsx("a",{className:`title-subunit-name ${e?"active":""}`,href:i,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:n}),title:`${n} home page`,children:n})})};ya.propTypes={...mn};ya.__docgenInfo={description:"",methods:[],displayName:"Title",props:{baseUrl:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},animate:{description:"",type:{name:"bool"},required:!1}}};const Ds=()=>{const{breakpoint:e,isPartner:t,hasNavigation:n}=qe(),[r,a]=Y.useState(!1),i=Zn(e),o=()=>{a(d=>!d)},l=()=>{o(),le({event:"collapse",action:r?"close":"open",type:"click",text:"menu button tablet"})};return p.jsxs(p.Fragment,{children:[!i&&p.jsx(pa,{}),p.jsx(nd,{breakpoint:e,children:p.jsx("div",{className:"container-xl",children:p.jsx("div",{className:"header-main",children:p.jsxs("div",{className:`navbar navbar-expand-xl ${t?"partner":""}`,children:[!t&&p.jsx(Ps,{}),p.jsx("button",{className:`navbar-toggler${r?"":" collapsed"}`,type:"button",onClick:l,"aria-label":"Toggle navigation",children:p.jsx(Je,{icon:r?Ho:Pc,alt:""})}),p.jsxs("div",{className:`${t?"":"expand-title"}${n?"":" no-navigation"}`,children:[t?p.jsx(Ms,{}):p.jsx(ya,{}),!i&&p.jsx(Wr,{})]}),r&&i&&p.jsx(Wr,{})]})})})})]})};Ds.__docgenInfo={description:"",methods:[],displayName:"HeaderMain"};const bd=(e,t)=>e==null?void 0:e.findIndex(n=>{var r;return(n==null?void 0:n.href)===t||Array.isArray(n.items)&&((r=n.items)==null?void 0:r.flat().find(({href:a})=>a===t))}),vd=e=>e==null?void 0:e.find(t=>t.selected),Ii=e=>{if(!Array.isArray(e)||e.length===0||vd(e))return e;let t="";if(window!=null&&window.location&&(t=window.location.pathname+window.location.search),!t)return e;const n=bd(e,t);if(n===-1)return e;const r=[...e];return r[n].selected=!0,r},Fs={Lg:"992px",Xl:"1260px"},xd=Se.header`
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
  @media (min-width: ${({breakpoint:e})=>Fs[e]}) {
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
`,wd=Se.div`
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
  @media (min-width: ${({breakpoint:e})=>Fs[e]}) {
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
`,kt=({isPartner:e,navTree:t,title:n,baseUrl:r,parentOrg:a,parentOrgUrl:i,partnerLogo:o,logo:l,loggedIn:d,userName:c,loginLink:m,onLoginClick:x,logoutLink:T,onLogoutClick:R,buttons:w,breakpoint:_,animateTitle:h,expandOnHover:A,mobileNavTree:S,searchUrl:L,site:N,renderDiv:F="false"})=>{const ee=Ii(t),ie=Ii(S),Z=Y.useRef(null),re=()=>{window.scrollY>Z.current.getBoundingClientRect().top?Z.current.classList.add("scrolled"):Z.current.classList.remove("scrolled")};Y.useEffect(()=>{typeof window<"u"&&Oc({packageName:"component-header",component:"Component Header",type:"NA",configuration:{site:N,isPartner:e,searchUrl:L,navTree:ee,parentOrg:a,buttons:w,mobileNavTree:ie}})},[]),Y.useEffect(()=>(window==null||window.addEventListener("scroll",re),()=>window.removeEventListener("scroll",re)),[]);const ce=()=>{const V=F==="true"?wd:xd;return p.jsx(V,{id:"asuHeader",ref:Z,breakpoint:_,children:p.jsx(Ds,{})})};return p.jsx(da,{initialValue:{isPartner:e,navTree:ee,title:n,baseUrl:r,parentOrg:a,parentOrgUrl:i,partnerLogo:o,logo:l,loggedIn:d,userName:c,loginLink:m,onLoginClick:x,logoutLink:T,onLogoutClick:R,buttons:w,breakpoint:_,animateTitle:h,expandOnHover:A,mobileNavTree:ie,hasNavigation:!!(ee!=null&&ee.length)||!!(ie!=null&&ie.length),searchUrl:L,site:N},children:ce()})};kt.propTypes={...vo};kt.defaultProps={isPartner:!1,baseUrl:"/",breakpoint:"Xl",expandOnHover:!1};kt.__docgenInfo={description:`@param {HeaderProps} props
@returns {JSX.Element}`,methods:[],displayName:"ASUHeader",props:{renderDiv:{defaultValue:{value:'"false"',computed:!1},description:"",type:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}]},required:!1},isPartner:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},baseUrl:{defaultValue:{value:'"/"',computed:!1},description:"",type:{name:"string"},required:!1},breakpoint:{defaultValue:{value:'"Xl"',computed:!1},description:"",type:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}]},required:!1},expandOnHover:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},navTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},partnerLogo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},logo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},title:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1},userName:{description:"",type:{name:"string"},required:!1},loginLink:{description:"",type:{name:"string"},required:!1},onLoginClick:{description:"",type:{name:"func"},required:!1},logoutLink:{description:"",type:{name:"string"},required:!1},onLogoutClick:{description:"",type:{name:"func"},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},animateTitle:{description:"",type:{name:"bool"},required:!1},mobileNavTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},hasNavigation:{description:"",type:{name:"bool"},required:!1},searchUrl:{description:"",type:{name:"string"},required:!1},site:{description:"",type:{name:"string"},required:!1}}};const kd={title:"UDS/ASU Header",component:kt,argTypes:{renderDiv:{control:"select",options:["true","false"],description:"Either 'true' or 'false'. If 'true', the header will be rendered as a div instead of a header element."}}},He=e=>p.jsxs(p.Fragment,{children:[p.jsx(kt,{...e}),p.jsx("div",{style:{width:"100%",height:"200vh",background:"#f0f0f0",paddingTop:40,marginTop:140},children:p.jsx("h1",{style:{textAlign:"center",fontFamily:"Arial"},children:"Scroll section"})})]}),Sd=e=>{const t=()=>{localStorage.getItem("title_loaded")&&localStorage.removeItem("title_loaded"),setTimeout(()=>{window.location.reload()},1e3)};return p.jsxs(p.Fragment,{children:[p.jsx(kt,{...e,animateTitle:!0}),p.jsx("div",{style:{marginTop:200,textAlign:"center"},children:p.jsx(St,{text:"Animate Title",color:"dark",onClick:t})})]})},Rt=He.bind({});Rt.args={loggedIn:!1,userName:"",navTree:Qt,title:"Subdomain name",breakpoint:"Lg",searchUrl:"https://search.asu.edu/search",site:"subdomain",renderDiv:"false"};const Mt=He.bind({});Mt.args={};const Dt=He.bind({});Dt.args={title:"Subdomain name",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ft=He.bind({});Ft.args={title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const jt=He.bind({});jt.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:Qt,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const zt=He.bind({});zt.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:Qt,mobileNavTree:oc,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ut=He.bind({});Ut.args={navTree:ic,title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold",classes:"custom-class"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const $t=He.bind({});$t.args={navTree:Mo,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const qt=He.bind({});qt.args={navTree:Mo,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",expandOnHover:!0,searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ht=He.bind({});Ht.args={isPartner:!0,navTree:Qt,loggedIn:!1,userName:"",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Wt=Sd.bind({});Wt.args={title:"Subdomain name",navTree:Qt,loggedIn:!1,logoutLink:"/caslogout",loginLink:"/cas",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};var Li,Ri,Mi;Rt.parameters={...Rt.parameters,docs:{...(Li=Rt.parameters)==null?void 0:Li.docs,source:{originalSource:`args => <>
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
  </>`,...(Mi=(Ri=Rt.parameters)==null?void 0:Ri.docs)==null?void 0:Mi.source}}};var Di,Fi,ji;Mt.parameters={...Mt.parameters,docs:{...(Di=Mt.parameters)==null?void 0:Di.docs,source:{originalSource:`args => <>
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
  </>`,...(ji=(Fi=Mt.parameters)==null?void 0:Fi.docs)==null?void 0:ji.source}}};var zi,Ui,$i;Dt.parameters={...Dt.parameters,docs:{...(zi=Dt.parameters)==null?void 0:zi.docs,source:{originalSource:`args => <>
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
  </>`,...($i=(Ui=Dt.parameters)==null?void 0:Ui.docs)==null?void 0:$i.source}}};var qi,Hi,Wi;Ft.parameters={...Ft.parameters,docs:{...(qi=Ft.parameters)==null?void 0:qi.docs,source:{originalSource:`args => <>
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
  </>`,...(Wi=(Hi=Ft.parameters)==null?void 0:Hi.docs)==null?void 0:Wi.source}}};var Bi,Yi,Gi;jt.parameters={...jt.parameters,docs:{...(Bi=jt.parameters)==null?void 0:Bi.docs,source:{originalSource:`args => <>
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
  </>`,...(Gi=(Yi=jt.parameters)==null?void 0:Yi.docs)==null?void 0:Gi.source}}};var Xi,Vi,Ki;zt.parameters={...zt.parameters,docs:{...(Xi=zt.parameters)==null?void 0:Xi.docs,source:{originalSource:`args => <>
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
  </>`,...(Ki=(Vi=zt.parameters)==null?void 0:Vi.docs)==null?void 0:Ki.source}}};var Zi,Qi,Ji;Ut.parameters={...Ut.parameters,docs:{...(Zi=Ut.parameters)==null?void 0:Zi.docs,source:{originalSource:`args => <>
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
  </>`,...(Ji=(Qi=Ut.parameters)==null?void 0:Qi.docs)==null?void 0:Ji.source}}};var eo,to,no;$t.parameters={...$t.parameters,docs:{...(eo=$t.parameters)==null?void 0:eo.docs,source:{originalSource:`args => <>
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
  </>`,...(no=(to=$t.parameters)==null?void 0:to.docs)==null?void 0:no.source}}};var ro,ao,io;qt.parameters={...qt.parameters,docs:{...(ro=qt.parameters)==null?void 0:ro.docs,source:{originalSource:`args => <>
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
  </>`,...(io=(ao=qt.parameters)==null?void 0:ao.docs)==null?void 0:io.source}}};var oo,so,lo;Ht.parameters={...Ht.parameters,docs:{...(oo=Ht.parameters)==null?void 0:oo.docs,source:{originalSource:`args => <>
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
  </>`,...(lo=(so=Ht.parameters)==null?void 0:so.docs)==null?void 0:lo.source}}};var co,uo,fo;Wt.parameters={...Wt.parameters,docs:{...(co=Wt.parameters)==null?void 0:co.docs,source:{originalSource:`args => {
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
}`,...(fo=(uo=Wt.parameters)==null?void 0:uo.docs)==null?void 0:fo.source}}};const Ed=["Default","Empty","NoNavigation","NoNavigationWithButtons","BreakpointXL","WithMobileNavTree","WithButtons","WithMenuColumns","ExpandOnHover","Partner","AnimatedTitle"];export{Wt as AnimatedTitle,jt as BreakpointXL,Rt as Default,Mt as Empty,qt as ExpandOnHover,Dt as NoNavigation,Ft as NoNavigationWithButtons,Ht as Partner,Ut as WithButtons,$t as WithMenuColumns,zt as WithMobileNavTree,Ed as __namedExportsOrder,kd as default};
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
