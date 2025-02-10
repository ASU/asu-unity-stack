import{r as B,R as Nt}from"./index-B2SEcK1p.js";import{g as fo}from"./_commonjsHelpers-B3tUAs5q.js";var po={exports:{}},Cn={};var zs=B,Us=Symbol.for("react.element"),$s=Symbol.for("react.fragment"),qs=Object.prototype.hasOwnProperty,Hs=zs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ws={key:!0,ref:!0,__self:!0,__source:!0};function mo(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)qs.call(t,r)&&!Ws.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Us,type:e,key:i,ref:o,props:a,_owner:Hs.current}}Cn.Fragment=$s;Cn.jsx=mo;Cn.jsxs=mo;po.exports=Cn;var p=po.exports,ho={exports:{}},Bs="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Gs=Bs,Ys=Gs;function go(){}function vo(){}vo.resetWarningCache=go;var Xs=function(){function e(r,a,i,o,s,u){if(u!==Ys){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:vo,resetWarningCache:go};return n.PropTypes=n,n};ho.exports=Xs();var Vs=ho.exports;const d=fo(Vs),Da={alt:d.string,title:d.string,src:d.string,mobileSrc:d.string,brandLink:d.string},gn={baseUrl:d.string,parentOrg:d.string,parentOrgUrl:d.string,animate:d.bool},un={loggedIn:d.bool,loginLink:d.string,logoutLink:d.string,userName:d.string},On={text:d.string.isRequired,color:d.oneOf(["gold","maroon","light","dark"]),href:d.string.isRequired,classes:d.string,onClick:d.func},Sr=d.shape({id:d.number,href:d.string,text:d.string,type:d.string,selected:d.bool,items:d.arrayOf(d.arrayOf(d.object)),buttons:d.arrayOf(d.shape(On)),class:d.string}),yo={isPartner:d.bool,navTree:d.arrayOf(Sr),partnerLogo:d.shape(Da),logo:d.shape(Da),title:d.string,parentOrg:gn.parentOrg,parentOrgUrl:gn.parentOrgUrl,baseUrl:gn.baseUrl,loggedIn:un.loggedIn,userName:un.userName,loginLink:un.loginLink,onLoginClick:d.func,logoutLink:un.logoutLink,onLogoutClick:d.func,buttons:d.arrayOf(d.shape(On)),breakpoint:d.oneOf(["Lg","Xl"]),animateTitle:d.bool,expandOnHover:d.bool,mobileNavTree:d.arrayOf(Sr),hasNavigation:d.bool,searchUrl:d.string,site:d.string,renderDiv:d.oneOf(["true","false"])};var bo={exports:{}},G={};var Vr=Symbol.for("react.transitional.element"),Kr=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),Pn=Symbol.for("react.strict_mode"),Ln=Symbol.for("react.profiler"),In=Symbol.for("react.consumer"),Rn=Symbol.for("react.context"),Mn=Symbol.for("react.forward_ref"),Dn=Symbol.for("react.suspense"),Fn=Symbol.for("react.suspense_list"),jn=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),Ks=Symbol.for("react.offscreen"),Zs=Symbol.for("react.client.reference");function Re(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Vr:switch(e=e.type,e){case Nn:case Ln:case Pn:case Dn:case Fn:return e;default:switch(e=e&&e.$$typeof,e){case Rn:case Mn:case zn:case jn:return e;case In:return e;default:return t}}case Kr:return t}}}G.ContextConsumer=In;G.ContextProvider=Rn;G.Element=Vr;G.ForwardRef=Mn;G.Fragment=Nn;G.Lazy=zn;G.Memo=jn;G.Portal=Kr;G.Profiler=Ln;G.StrictMode=Pn;G.Suspense=Dn;G.SuspenseList=Fn;G.isContextConsumer=function(e){return Re(e)===In};G.isContextProvider=function(e){return Re(e)===Rn};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr};G.isForwardRef=function(e){return Re(e)===Mn};G.isFragment=function(e){return Re(e)===Nn};G.isLazy=function(e){return Re(e)===zn};G.isMemo=function(e){return Re(e)===jn};G.isPortal=function(e){return Re(e)===Kr};G.isProfiler=function(e){return Re(e)===Ln};G.isStrictMode=function(e){return Re(e)===Pn};G.isSuspense=function(e){return Re(e)===Dn};G.isSuspenseList=function(e){return Re(e)===Fn};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Nn||e===Ln||e===Pn||e===Dn||e===Fn||e===Ks||typeof e=="object"&&e!==null&&(e.$$typeof===zn||e.$$typeof===jn||e.$$typeof===Rn||e.$$typeof===In||e.$$typeof===Mn||e.$$typeof===Zs||e.getModuleId!==void 0)};G.typeOf=Re;bo.exports=G;var xo=bo.exports;function Qs(e){function t(C,v,E,O,f){for(var L=0,y=0,Y=0,$=0,q,F,oe=0,ae=0,z,Z=z=q=0,U=0,ie=0,Oe=0,ne=0,Ye=E.length,tt=Ye-1,Ae,M="",X="",Xe="",je="",ve;U<Ye;){if(F=E.charCodeAt(U),U===tt&&y+$+Y+L!==0&&(y!==0&&(F=y===47?10:47),$=Y=L=0,Ye++,tt++),y+$+Y+L===0){if(U===tt&&(0<ie&&(M=M.replace(k,"")),0<M.trim().length)){switch(F){case 32:case 9:case 59:case 13:case 10:break;default:M+=E.charAt(U)}F=59}switch(F){case 123:for(M=M.trim(),q=M.charCodeAt(0),z=1,ne=++U;U<Ye;){switch(F=E.charCodeAt(U)){case 123:z++;break;case 125:z--;break;case 47:switch(F=E.charCodeAt(U+1)){case 42:case 47:e:{for(Z=U+1;Z<tt;++Z)switch(E.charCodeAt(Z)){case 47:if(F===42&&E.charCodeAt(Z-1)===42&&U+2!==Z){U=Z+1;break e}break;case 10:if(F===47){U=Z+1;break e}}U=Z}}break;case 91:F++;case 40:F++;case 34:case 39:for(;U++<tt&&E.charCodeAt(U)!==F;);}if(z===0)break;U++}switch(z=E.substring(ne,U),q===0&&(q=(M=M.replace(A,"").trim()).charCodeAt(0)),q){case 64:switch(0<ie&&(M=M.replace(k,"")),F=M.charCodeAt(1),F){case 100:case 109:case 115:case 45:ie=v;break;default:ie=Be}if(z=t(v,ie,z,F,f+1),ne=z.length,0<we&&(ie=n(Be,M,Oe),ve=s(3,z,ie,v,te,he,ne,F,f,O),M=ie.join(""),ve!==void 0&&(ne=(z=ve.trim()).length)===0&&(F=0,z="")),0<ne)switch(F){case 115:M=M.replace(J,o);case 100:case 109:case 45:z=M+"{"+z+"}";break;case 107:M=M.replace(w,"$1 $2"),z=M+"{"+z+"}",z=ue===1||ue===2&&i("@"+z,3)?"@-webkit-"+z+"@"+z:"@"+z;break;default:z=M+z,O===112&&(z=(X+=z,""))}else z="";break;default:z=t(v,n(v,M,Oe),z,O,f+1)}Xe+=z,z=Oe=ie=Z=q=0,M="",F=E.charCodeAt(++U);break;case 125:case 59:if(M=(0<ie?M.replace(k,""):M).trim(),1<(ne=M.length))switch(Z===0&&(q=M.charCodeAt(0),q===45||96<q&&123>q)&&(ne=(M=M.replace(" ",":")).length),0<we&&(ve=s(1,M,v,C,te,he,X.length,O,f,O))!==void 0&&(ne=(M=ve.trim()).length)===0&&(M="\0\0"),q=M.charCodeAt(0),F=M.charCodeAt(1),q){case 0:break;case 64:if(F===105||F===99){je+=M+E.charAt(U);break}default:M.charCodeAt(ne-1)!==58&&(X+=a(M,q,F,M.charCodeAt(2)))}Oe=ie=Z=q=0,M="",F=E.charCodeAt(++U)}}switch(F){case 13:case 10:y===47?y=0:1+q===0&&O!==107&&0<M.length&&(ie=1,M+="\0"),0<we*Ge&&s(0,M,v,C,te,he,X.length,O,f,O),he=1,te++;break;case 59:case 125:if(y+$+Y+L===0){he++;break}default:switch(he++,Ae=E.charAt(U),F){case 9:case 32:if($+L+y===0)switch(oe){case 44:case 58:case 9:case 32:Ae="";break;default:F!==32&&(Ae=" ")}break;case 0:Ae="\\0";break;case 12:Ae="\\f";break;case 11:Ae="\\v";break;case 38:$+y+L===0&&(ie=Oe=1,Ae="\f"+Ae);break;case 108:if($+y+L+xe===0&&0<Z)switch(U-Z){case 2:oe===112&&E.charCodeAt(U-3)===58&&(xe=oe);case 8:ae===111&&(xe=ae)}break;case 58:$+y+L===0&&(Z=U);break;case 44:y+Y+$+L===0&&(ie=1,Ae+="\r");break;case 34:case 39:y===0&&($=$===F?0:$===0?F:$);break;case 91:$+y+Y===0&&L++;break;case 93:$+y+Y===0&&L--;break;case 41:$+y+L===0&&Y--;break;case 40:if($+y+L===0){if(q===0)switch(2*oe+3*ae){case 533:break;default:q=1}Y++}break;case 64:y+Y+$+L+Z+z===0&&(z=1);break;case 42:case 47:if(!(0<$+L+Y))switch(y){case 0:switch(2*F+3*E.charCodeAt(U+1)){case 235:y=47;break;case 220:ne=U,y=42}break;case 42:F===47&&oe===42&&ne+2!==U&&(E.charCodeAt(ne+2)===33&&(X+=E.substring(ne,U+1)),Ae="",y=0)}}y===0&&(M+=Ae)}ae=oe,oe=F,U++}if(ne=X.length,0<ne){if(ie=v,0<we&&(ve=s(2,X,ie,C,te,he,ne,O,f,O),ve!==void 0&&(X=ve).length===0))return je+X+Xe;if(X=ie.join(",")+"{"+X+"}",ue*xe!==0){switch(ue!==2||i(X,2)||(xe=0),xe){case 111:X=X.replace(P,":-moz-$1")+X;break;case 112:X=X.replace(R,"::-webkit-input-$1")+X.replace(R,"::-moz-$1")+X.replace(R,":-ms-input-$1")+X}xe=0}}return je+X+Xe}function n(C,v,E){var O=v.trim().split(h);v=O;var f=O.length,L=C.length;switch(L){case 0:case 1:var y=0;for(C=L===0?"":C[0]+" ";y<f;++y)v[y]=r(C,v[y],E).trim();break;default:var Y=y=0;for(v=[];y<f;++y)for(var $=0;$<L;++$)v[Y++]=r(C[$]+" ",O[y],E).trim()}return v}function r(C,v,E){var O=v.charCodeAt(0);switch(33>O&&(O=(v=v.trim()).charCodeAt(0)),O){case 38:return v.replace(S,"$1"+C.trim());case 58:return C.trim()+v.replace(S,"$1"+C.trim());default:if(0<1*E&&0<v.indexOf("\f"))return v.replace(S,(C.charCodeAt(0)===58?"":"$1")+C.trim())}return C+v}function a(C,v,E,O){var f=C+";",L=2*v+3*E+4*O;if(L===944){C=f.indexOf(":",9)+1;var y=f.substring(C,f.length-1).trim();return y=f.substring(0,C).trim()+y+";",ue===1||ue===2&&i(y,1)?"-webkit-"+y+y:y}if(ue===0||ue===2&&!i(f,1))return f;switch(L){case 1015:return f.charCodeAt(10)===97?"-webkit-"+f+f:f;case 951:return f.charCodeAt(3)===116?"-webkit-"+f+f:f;case 963:return f.charCodeAt(5)===110?"-webkit-"+f+f:f;case 1009:if(f.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+f+f;case 978:return"-webkit-"+f+"-moz-"+f+f;case 1019:case 983:return"-webkit-"+f+"-moz-"+f+"-ms-"+f+f;case 883:if(f.charCodeAt(8)===45)return"-webkit-"+f+f;if(0<f.indexOf("image-set(",11))return f.replace(Me,"$1-webkit-$2")+f;break;case 932:if(f.charCodeAt(4)===45)switch(f.charCodeAt(5)){case 103:return"-webkit-box-"+f.replace("-grow","")+"-webkit-"+f+"-ms-"+f.replace("grow","positive")+f;case 115:return"-webkit-"+f+"-ms-"+f.replace("shrink","negative")+f;case 98:return"-webkit-"+f+"-ms-"+f.replace("basis","preferred-size")+f}return"-webkit-"+f+"-ms-"+f+f;case 964:return"-webkit-"+f+"-ms-flex-"+f+f;case 1023:if(f.charCodeAt(8)!==99)break;return y=f.substring(f.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+y+"-webkit-"+f+"-ms-flex-pack"+y+f;case 1005:return x.test(f)?f.replace(I,":-webkit-")+f.replace(I,":-moz-")+f:f;case 1e3:switch(y=f.substring(13).trim(),v=y.indexOf("-")+1,y.charCodeAt(0)+y.charCodeAt(v)){case 226:y=f.replace(D,"tb");break;case 232:y=f.replace(D,"tb-rl");break;case 220:y=f.replace(D,"lr");break;default:return f}return"-webkit-"+f+"-ms-"+y+f;case 1017:if(f.indexOf("sticky",9)===-1)break;case 975:switch(v=(f=C).length-10,y=(f.charCodeAt(v)===33?f.substring(0,v):f).substring(C.indexOf(":",7)+1).trim(),L=y.charCodeAt(0)+(y.charCodeAt(7)|0)){case 203:if(111>y.charCodeAt(8))break;case 115:f=f.replace(y,"-webkit-"+y)+";"+f;break;case 207:case 102:f=f.replace(y,"-webkit-"+(102<L?"inline-":"")+"box")+";"+f.replace(y,"-webkit-"+y)+";"+f.replace(y,"-ms-"+y+"box")+";"+f}return f+";";case 938:if(f.charCodeAt(5)===45)switch(f.charCodeAt(6)){case 105:return y=f.replace("-items",""),"-webkit-"+f+"-webkit-box-"+y+"-ms-flex-"+y+f;case 115:return"-webkit-"+f+"-ms-flex-item-"+f.replace(K,"")+f;default:return"-webkit-"+f+"-ms-flex-line-pack"+f.replace("align-content","").replace(K,"")+f}break;case 973:case 989:if(f.charCodeAt(3)!==45||f.charCodeAt(4)===122)break;case 931:case 953:if(ce.test(C)===!0)return(y=C.substring(C.indexOf(":")+1)).charCodeAt(0)===115?a(C.replace("stretch","fill-available"),v,E,O).replace(":fill-available",":stretch"):f.replace(y,"-webkit-"+y)+f.replace(y,"-moz-"+y.replace("fill-",""))+f;break;case 962:if(f="-webkit-"+f+(f.charCodeAt(5)===102?"-ms-"+f:"")+f,E+O===211&&f.charCodeAt(13)===105&&0<f.indexOf("transform",10))return f.substring(0,f.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+f}return f}function i(C,v){var E=C.indexOf(v===1?":":"{"),O=C.substring(0,v!==3?E:10);return E=C.substring(E+1,C.length-1),ut(v!==2?O:O.replace(re,"$1"),E,v)}function o(C,v){var E=a(v,v.charCodeAt(0),v.charCodeAt(1),v.charCodeAt(2));return E!==v+";"?E.replace(ee," or ($1)").substring(4):"("+v+")"}function s(C,v,E,O,f,L,y,Y,$,q){for(var F=0,oe=v,ae;F<we;++F)switch(ae=ke[F].call(m,C,oe,E,O,f,L,y,Y,$,q)){case void 0:case!1:case!0:case null:break;default:oe=ae}if(oe!==v)return oe}function u(C){switch(C){case void 0:case null:we=ke.length=0;break;default:if(typeof C=="function")ke[we++]=C;else if(typeof C=="object")for(var v=0,E=C.length;v<E;++v)u(C[v]);else Ge=!!C|0}return u}function c(C){return C=C.prefix,C!==void 0&&(ut=null,C?typeof C!="function"?ue=1:(ue=2,ut=C):ue=0),c}function m(C,v){var E=C;if(33>E.charCodeAt(0)&&(E=E.trim()),ft=E,E=[ft],0<we){var O=s(-1,v,E,E,te,he,0,0,0,0);O!==void 0&&typeof O=="string"&&(v=O)}var f=t(Be,E,v,0,0);return 0<we&&(O=s(-2,f,E,E,te,he,f.length,0,0,0),O!==void 0&&(f=O)),ft="",xe=0,he=te=1,f}var A=/^\0+/g,k=/[\0\r\f]/g,I=/: */g,x=/zoo|gra/,_=/([,: ])(transform)/g,h=/,\r+?/g,S=/([\t\r\n ])*\f?&/g,w=/@(k\w+)\s*(\S*)\s*/,R=/::(place)/g,P=/:(read-only)/g,D=/[svh]\w+-[tblr]{2}/,J=/\(\s*(.*)\s*\)/g,ee=/([\s\S]*?);/g,K=/-self|flex-/g,re=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ce=/stretch|:\s*\w+\-(?:conte|avail)/,Me=/([^-])(image-set\()/,he=1,te=1,xe=0,ue=1,Be=[],ke=[],we=0,ut=null,Ge=0,ft="";return m.use=u,m.set=c,e!==void 0&&c(e),m}var Js={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function el(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var tl=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Fa=el(function(e){return tl.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),wo={exports:{}},W={};var de=typeof Symbol=="function"&&Symbol.for,Zr=de?Symbol.for("react.element"):60103,Qr=de?Symbol.for("react.portal"):60106,Un=de?Symbol.for("react.fragment"):60107,$n=de?Symbol.for("react.strict_mode"):60108,qn=de?Symbol.for("react.profiler"):60114,Hn=de?Symbol.for("react.provider"):60109,Wn=de?Symbol.for("react.context"):60110,Jr=de?Symbol.for("react.async_mode"):60111,Bn=de?Symbol.for("react.concurrent_mode"):60111,Gn=de?Symbol.for("react.forward_ref"):60112,Yn=de?Symbol.for("react.suspense"):60113,nl=de?Symbol.for("react.suspense_list"):60120,Xn=de?Symbol.for("react.memo"):60115,Vn=de?Symbol.for("react.lazy"):60116,rl=de?Symbol.for("react.block"):60121,al=de?Symbol.for("react.fundamental"):60117,il=de?Symbol.for("react.responder"):60118,ol=de?Symbol.for("react.scope"):60119;function _e(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Zr:switch(e=e.type,e){case Jr:case Bn:case Un:case qn:case $n:case Yn:return e;default:switch(e=e&&e.$$typeof,e){case Wn:case Gn:case Vn:case Xn:case Hn:return e;default:return t}}case Qr:return t}}}function Ao(e){return _e(e)===Bn}W.AsyncMode=Jr;W.ConcurrentMode=Bn;W.ContextConsumer=Wn;W.ContextProvider=Hn;W.Element=Zr;W.ForwardRef=Gn;W.Fragment=Un;W.Lazy=Vn;W.Memo=Xn;W.Portal=Qr;W.Profiler=qn;W.StrictMode=$n;W.Suspense=Yn;W.isAsyncMode=function(e){return Ao(e)||_e(e)===Jr};W.isConcurrentMode=Ao;W.isContextConsumer=function(e){return _e(e)===Wn};W.isContextProvider=function(e){return _e(e)===Hn};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zr};W.isForwardRef=function(e){return _e(e)===Gn};W.isFragment=function(e){return _e(e)===Un};W.isLazy=function(e){return _e(e)===Vn};W.isMemo=function(e){return _e(e)===Xn};W.isPortal=function(e){return _e(e)===Qr};W.isProfiler=function(e){return _e(e)===qn};W.isStrictMode=function(e){return _e(e)===$n};W.isSuspense=function(e){return _e(e)===Yn};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Un||e===Bn||e===qn||e===$n||e===Yn||e===nl||typeof e=="object"&&e!==null&&(e.$$typeof===Vn||e.$$typeof===Xn||e.$$typeof===Hn||e.$$typeof===Wn||e.$$typeof===Gn||e.$$typeof===al||e.$$typeof===il||e.$$typeof===ol||e.$$typeof===rl)};W.typeOf=_e;wo.exports=W;var sl=wo.exports,ea=sl,ll={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cl={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ul={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},So={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ta={};ta[ea.ForwardRef]=ul;ta[ea.Memo]=So;function ja(e){return ea.isMemo(e)?So:ta[e.$$typeof]||ll}var fl=Object.defineProperty,dl=Object.getOwnPropertyNames,za=Object.getOwnPropertySymbols,pl=Object.getOwnPropertyDescriptor,ml=Object.getPrototypeOf,Ua=Object.prototype;function ko(e,t,n){if(typeof t!="string"){if(Ua){var r=ml(t);r&&r!==Ua&&ko(e,r,n)}var a=dl(t);za&&(a=a.concat(za(t)));for(var i=ja(e),o=ja(t),s=0;s<a.length;++s){var u=a[s];if(!cl[u]&&!(n&&n[u])&&!(o&&o[u])&&!(i&&i[u])){var c=pl(t,u);try{fl(e,u,c)}catch{}}}}return e}var hl=ko;const gl=fo(hl);var To={env:{NODE_ENV:"production"}},Pe={};function Ze(){return(Ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var $a=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},kr=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!xo.typeOf(e)},An=Object.freeze([]),it=Object.freeze({});function Qt(e){return typeof e=="function"}function qa(e){return e.displayName||e.name||"Component"}function na(e){return e&&typeof e.styledComponentId=="string"}var Et=typeof To<"u"&&Pe!==void 0&&(Pe.REACT_APP_SC_ATTR||Pe.SC_ATTR)||"data-styled",ra=typeof window<"u"&&"HTMLElement"in window,vl=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof To<"u"&&Pe!==void 0&&(Pe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pe.REACT_APP_SC_DISABLE_SPEEDY!==""?Pe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pe.REACT_APP_SC_DISABLE_SPEEDY:Pe.SC_DISABLE_SPEEDY!==void 0&&Pe.SC_DISABLE_SPEEDY!==""&&Pe.SC_DISABLE_SPEEDY!=="false"&&Pe.SC_DISABLE_SPEEDY));function tn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var yl=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,i=a.length,o=i;n>=o;)(o<<=1)<0&&tn(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(a),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var u=this.indexOfGroup(n+1),c=0,m=r.length;c<m;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),i=a+r;this.groupSizes[n]=0;for(var o=a;o<i;o++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],i=this.indexOfGroup(n),o=i+a,s=i;s<o;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),vn=new Map,Sn=new Map,Vt=1,fn=function(e){if(vn.has(e))return vn.get(e);for(;Sn.has(Vt);)Vt++;var t=Vt++;return vn.set(e,t),Sn.set(t,e),t},bl=function(e){return Sn.get(e)},xl=function(e,t){t>=Vt&&(Vt=t+1),vn.set(e,t),Sn.set(t,e)},wl="style["+Et+'][data-styled-version="5.3.11"]',Al=new RegExp("^"+Et+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Sl=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},kl=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var s=o.match(Al);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(xl(c,u),Sl(e,c,s[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},Tl=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Eo=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(s){for(var u=s.childNodes,c=u.length;c>=0;c--){var m=u[c];if(m&&m.nodeType===1&&m.hasAttribute(Et))return m}}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(Et,"active"),r.setAttribute("data-styled-version","5.3.11");var o=Tl();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},El=function(){function e(n){var r=this.element=Eo(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var i=document.styleSheets,o=0,s=i.length;o<s;o++){var u=i[o];if(u.ownerNode===a)return u}tn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),_l=function(){function e(n){var r=this.element=Eo(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(a,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Cl=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Ha=ra,Ol={isServer:!ra,useCSSOMInjection:!vl},_o=function(){function e(n,r,a){n===void 0&&(n=it),r===void 0&&(r={}),this.options=Ze({},Ol,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&ra&&Ha&&(Ha=!1,function(i){for(var o=document.querySelectorAll(wl),s=0,u=o.length;s<u;s++){var c=o[s];c&&c.getAttribute(Et)!=="active"&&(kl(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return fn(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ze({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,i=r.useCSSOMInjection,o=r.target,n=a?new Cl(o):i?new El(o):new _l(o),new yl(n)));var n,r,a,i,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(fn(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(fn(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(fn(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,i="",o=0;o<a;o++){var s=bl(o);if(s!==void 0){var u=n.names.get(s),c=r.getGroup(o);if(u&&c&&u.size){var m=Et+".g"+o+'[id="'+s+'"]',A="";u!==void 0&&u.forEach(function(k){k.length>0&&(A+=k+",")}),i+=""+c+m+'{content:"'+A+`"}/*!sc*/
`}}}return i}(this)},e}(),Nl=/(a)(d)/gi,Wa=function(e){return String.fromCharCode(e+(e>25?39:97))};function Tr(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Wa(t%52)+n;return(Wa(t%52)+n).replace(Nl,"$1-$2")}var At=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Co=function(e){return At(5381,e)};function Pl(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Qt(n)&&!na(n))return!1}return!0}var Ll=Co("5.3.11"),Il=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Pl(t),this.componentId=n,this.baseHash=At(Ll,n),this.baseStyle=r,_o.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))i.push(this.staticRulesId);else{var o=_t(this.rules,t,n,r).join(""),s=Tr(At(this.baseHash,o)>>>0);if(!n.hasNameForId(a,s)){var u=r(o,"."+s,void 0,a);n.insertRules(a,s,u)}i.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,m=At(this.baseHash,r.hash),A="",k=0;k<c;k++){var I=this.rules[k];if(typeof I=="string")A+=I;else if(I){var x=_t(I,t,n,r),_=Array.isArray(x)?x.join(""):x;m=At(m,_+k),A+=_}}if(A){var h=Tr(m>>>0);if(!n.hasNameForId(a,h)){var S=r(A,"."+h,void 0,a);n.insertRules(a,h,S)}i.push(h)}}return i.join(" ")},e}(),Rl=/^\s*\/\/.*$/gm,Ml=[":","[",".","#"];function Dl(e){var t,n,r,a,i=it,o=i.options,s=o===void 0?it:o,u=i.plugins,c=u===void 0?An:u,m=new Qs(s),A=[],k=function(_){function h(S){if(S)try{_(S+"}")}catch{}}return function(S,w,R,P,D,J,ee,K,re,ce){switch(S){case 1:if(re===0&&w.charCodeAt(0)===64)return _(w+";"),"";break;case 2:if(K===0)return w+"/*|*/";break;case 3:switch(K){case 102:case 112:return _(R[0]+w),"";default:return w+(ce===0?"/*|*/":"")}case-2:w.split("/*|*/}").forEach(h)}}}(function(_){A.push(_)}),I=function(_,h,S){return h===0&&Ml.indexOf(S[n.length])!==-1||S.match(a)?_:"."+t};function x(_,h,S,w){w===void 0&&(w="&");var R=_.replace(Rl,""),P=h&&S?S+" "+h+" { "+R+" }":R;return t=w,n=h,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),m(S||!h?"":h,P)}return m.use([].concat(c,[function(_,h,S){_===2&&S.length&&S[0].lastIndexOf(n)>0&&(S[0]=S[0].replace(r,I))},k,function(_){if(_===-2){var h=A;return A=[],h}}])),x.hash=c.length?c.reduce(function(_,h){return h.name||tn(15),At(_,h.name)},5381).toString():"",x}var Oo=Nt.createContext();Oo.Consumer;var No=Nt.createContext(),Fl=(No.Consumer,new _o),Er=Dl();function jl(){return B.useContext(Oo)||Fl}function zl(){return B.useContext(No)||Er}var Ul=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=Er);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.toString=function(){return tn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Er),this.name+t.hash},e}(),$l=/([A-Z])/,ql=/([A-Z])/g,Hl=/^ms-/,Wl=function(e){return"-"+e.toLowerCase()};function Ba(e){return $l.test(e)?e.replace(ql,Wl).replace(Hl,"-ms-"):e}var Ga=function(e){return e==null||e===!1||e===""};function _t(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,s=e.length;o<s;o+=1)(a=_t(e[o],t,n,r))!==""&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}if(Ga(e))return"";if(na(e))return"."+e.styledComponentId;if(Qt(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return _t(u,t,n,r)}var c;return e instanceof Ul?n?(e.inject(n,r),e.getName(r)):e:kr(e)?function m(A,k){var I,x,_=[];for(var h in A)A.hasOwnProperty(h)&&!Ga(A[h])&&(Array.isArray(A[h])&&A[h].isCss||Qt(A[h])?_.push(Ba(h)+":",A[h],";"):kr(A[h])?_.push.apply(_,m(A[h],h)):_.push(Ba(h)+": "+(I=h,(x=A[h])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||I in Js||I.startsWith("--")?String(x).trim():x+"px")+";"));return k?[k+" {"].concat(_,["}"]):_}(e):e.toString()}var Ya=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Bl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Qt(e)||kr(e)?Ya(_t($a(An,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Ya(_t($a(e,n)))}var Gl=function(e,t,n){return n===void 0&&(n=it),e.theme!==n.theme&&e.theme||t||n.theme},Yl=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xl=/(^-|-$)/g;function sr(e){return e.replace(Yl,"-").replace(Xl,"")}var Vl=function(e){return Tr(Co(e)>>>0)};function dn(e){return typeof e=="string"&&!0}var _r=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Kl=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Zl(e,t,n){var r=e[n];_r(t)&&_r(r)?Po(r,t):e[n]=t}function Po(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(_r(o))for(var s in o)Kl(s)&&Zl(e,o[s],s)}return e}var Lo=Nt.createContext();Lo.Consumer;var lr={};function Io(e,t,n){var r=na(e),a=!dn(e),i=t.attrs,o=i===void 0?An:i,s=t.componentId,u=s===void 0?function(w,R){var P=typeof w!="string"?"sc":sr(w);lr[P]=(lr[P]||0)+1;var D=P+"-"+Vl("5.3.11"+P+lr[P]);return R?R+"-"+D:D}(t.displayName,t.parentComponentId):s,c=t.displayName,m=c===void 0?function(w){return dn(w)?"styled."+w:"Styled("+qa(w)+")"}(e):c,A=t.displayName&&t.componentId?sr(t.displayName)+"-"+t.componentId:t.componentId||u,k=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,I=t.shouldForwardProp;r&&e.shouldForwardProp&&(I=t.shouldForwardProp?function(w,R,P){return e.shouldForwardProp(w,R,P)&&t.shouldForwardProp(w,R,P)}:e.shouldForwardProp);var x,_=new Il(n,A,r?e.componentStyle:void 0),h=_.isStatic&&o.length===0,S=function(w,R){return function(P,D,J,ee){var K=P.attrs,re=P.componentStyle,ce=P.defaultProps,Me=P.foldedComponentIds,he=P.shouldForwardProp,te=P.styledComponentId,xe=P.target,ue=function(O,f,L){O===void 0&&(O=it);var y=Ze({},f,{theme:O}),Y={};return L.forEach(function($){var q,F,oe,ae=$;for(q in Qt(ae)&&(ae=ae(y)),ae)y[q]=Y[q]=q==="className"?(F=Y[q],oe=ae[q],F&&oe?F+" "+oe:F||oe):ae[q]}),[y,Y]}(Gl(D,B.useContext(Lo),ce)||it,D,K),Be=ue[0],ke=ue[1],we=function(O,f,L,y){var Y=jl(),$=zl(),q=f?O.generateAndInjectStyles(it,Y,$):O.generateAndInjectStyles(L,Y,$);return q}(re,ee,Be),ut=J,Ge=ke.$as||D.$as||ke.as||D.as||xe,ft=dn(Ge),C=ke!==D?Ze({},D,{},ke):D,v={};for(var E in C)E[0]!=="$"&&E!=="as"&&(E==="forwardedAs"?v.as=C[E]:(he?he(E,Fa,Ge):!ft||Fa(E))&&(v[E]=C[E]));return D.style&&ke.style!==D.style&&(v.style=Ze({},D.style,{},ke.style)),v.className=Array.prototype.concat(Me,te,we!==te?we:null,D.className,ke.className).filter(Boolean).join(" "),v.ref=ut,B.createElement(Ge,v)}(x,w,R,h)};return S.displayName=m,(x=Nt.forwardRef(S)).attrs=k,x.componentStyle=_,x.displayName=m,x.shouldForwardProp=I,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):An,x.styledComponentId=A,x.target=r?e.target:e,x.withComponent=function(w){var R=t.componentId,P=function(J,ee){if(J==null)return{};var K,re,ce={},Me=Object.keys(J);for(re=0;re<Me.length;re++)K=Me[re],ee.indexOf(K)>=0||(ce[K]=J[K]);return ce}(t,["componentId"]),D=R&&R+"-"+(dn(w)?w:sr(qa(w)));return Io(w,Ze({},P,{attrs:k,componentId:D}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?Po({},e.defaultProps,w):w}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),a&&gl(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var ye=function(e){return function t(n,r,a){if(a===void 0&&(a=it),!xo.isValidElementType(r))return tn(1,String(r));var i=function(){return n(r,a,Bl.apply(void 0,arguments))};return i.withConfig=function(o){return t(n,r,Ze({},a,{},o))},i.attrs=function(o){return t(n,r,Ze({},a,{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)}))},i}(Io,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ye[e]=ye(e)});const Ql=ye.a`
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
`,Pt=({href:e,color:t,text:n,classes:r,onClick:a})=>p.jsx(Ql,{href:e,...e?{}:{tabIndex:0},className:`button-${t} ${r??""}`,onClick:a,children:n});Pt.propTypes={...On};Pt.__docgenInfo={description:`@param {ButtonProps} props
@returns {JSX.Element}`,methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!0},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1}}};const nn=[{href:"/",text:"Home",type:"icon-home",selected:!0,class:"test-class"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu",text:"Sublink 2"},{href:"https://campus.asu.edu",text:"Sublink 3"},{href:"https://campus.asu.edu",text:"Sublink 4"},{href:"https://asuonline.asu.edu/",text:"Sublink 5"},{href:"https://havasu.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 3",href:"#"},{text:"Link option 4",href:"#"},{text:"Link option 5",href:"#"},{text:"Link option 6",href:"#",onClick:()=>{alert("On Click Callback")}},{text:"Link option 7",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 8",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]}],Jl=[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",selected:!0},{text:"Link option 3",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu/",text:"Sublink 2"},{href:"https://campus.asu.edu/",text:"Sublink 3"},{href:"https://campus.asu.edu/",text:"Sublink 4"},{href:"https://campus.asu.edu/",text:"Sublink 5"},{href:"https://asuonline.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 4",href:"#"}],Ro=[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#"},{text:"Link option 2",href:"/",items:[[{href:"https://www.asu.edu/",text:"A test navigation item"},{href:"https://www.asu.edu/",text:"Mauris viverra, sem nec"},{href:"https://www.asu.edu/?feature=athletics",text:"Massa nunc dictum nam venenatis"},{href:"https://www.asu.edu/?feature=alumni",text:"Alumni"},{href:"https://www.asu.edu/?feature=giving",text:"Giving"},{href:"https://www.asu.edu/?feature=president",text:"President"},{href:"https://www.asu.edu/about",text:"About ASU"}]]},{text:"Link option 3",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 4",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column one"},{href:"https://havasu.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Phasellus egestas nec est "},{href:"https://campus.asu.edu/tempe/",text:"Pellentesque et mollis"},{href:"https://campus.asu.edu/west/",text:"Cras congue"},{href:"https://campus.asu.edu/polytechnic/",text:"Cras ut malesuada nisl"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Map"},{href:"https://campus.asu.edu/tempe/",text:"Tempe"},{href:"https://campus.asu.edu/west/",text:"West"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 5",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"Lake Havasu"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 6",href:"#",buttons:[{text:"CTA One",href:"https://asu.edu",color:"maroon"},{text:"CTA Two",href:"https://asu.edu",color:"gold"}],items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"The Lake Havasu Campus"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Call to Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column Five"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Buildings and directory"},{href:"https://campus.asu.edu/tempe/",text:"Some good news"},{href:"https://campus.asu.edu/west/",selected:!0,text:"Directory Admin Tools"}]]}],ec=[{href:"/",text:"This",type:"icon-home",class:"home",selected:!0},{text:"Link option 1",href:"https://webapp4.asu.edu/myasu/"},{text:"Link option 2",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column Two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"}]]}];function tc({packageName:e="",component:t="",type:n="",configuration:r={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}}const nc={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},rc={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},ac=rc,ic={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Xa=ic,oc={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},sc={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Mo=sc,Va=()=>{};let aa={},Do={},Fo=null,jo={mark:Va,measure:Va};try{typeof window<"u"&&(aa=window),typeof document<"u"&&(Do=document),typeof MutationObserver<"u"&&(Fo=MutationObserver),typeof performance<"u"&&(jo=performance)}catch{}const{userAgent:Ka=""}=aa.navigator||{},st=aa,V=Do,Za=Fo,pn=jo;st.document;const et=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",zo=~Ka.indexOf("MSIE")||~Ka.indexOf("Trident/");var Q="classic",Uo="duotone",Te="sharp",Ee="sharp-duotone",lc=[Q,Uo,Te,Ee],cc={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Qa={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},uc=["kit"],fc=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,dc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,pc={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},mc={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},hc={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},gc={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},vc={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},yc={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},$o={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},bc=["solid","regular","light","thin","duotone","brands"],qo=[1,2,3,4,5,6,7,8,9,10],xc=qo.concat([11,12,13,14,15,16,17,18,19,20]),Dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wc=[...Object.keys(gc),...bc,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Dt.GROUP,Dt.SWAP_OPACITY,Dt.PRIMARY,Dt.SECONDARY].concat(qo.map(e=>"".concat(e,"x"))).concat(xc.map(e=>"w-".concat(e))),Ac={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Sc={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},kc={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ja={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Qe="___FONT_AWESOME___",Cr=16,Ho="fa",Wo="svg-inline--fa",yt="data-fa-i2svg",Or="data-fa-pseudo-element",Tc="data-fa-pseudo-element-pending",ia="data-prefix",oa="data-icon",ei="fontawesome-i2svg",Ec="async",_c=["HTML","HEAD","STYLE","SCRIPT"],Bo=(()=>{try{return!0}catch{return!1}})(),Go=[Q,Te,Ee];function rn(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[Q]}})}const Yo={...$o};Yo[Q]={...$o[Q],...Qa.kit,...Qa["kit-duotone"]};const gt=rn(Yo),Nr={...yc};Nr[Q]={...Nr[Q],...Ja.kit,...Ja["kit-duotone"]};const Jt=rn(Nr),Pr={...vc};Pr[Q]={...Pr[Q],...kc.kit};const vt=rn(Pr),Lr={...hc};Lr[Q]={...Lr[Q],...Sc.kit};const Cc=rn(Lr),Oc=fc,Xo="fa-layers-text",Nc=dc,Pc={...cc};rn(Pc);const Lc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],cr=Dt,Ct=new Set;Object.keys(Jt[Q]).map(Ct.add.bind(Ct));Object.keys(Jt[Te]).map(Ct.add.bind(Ct));Object.keys(Jt[Ee]).map(Ct.add.bind(Ct));const Ic=[...uc,...wc],Kt=st.FontAwesomeConfig||{};function Rc(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Mc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}V&&typeof V.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=Mc(Rc(n));a!=null&&(Kt[r]=a)});const Vo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ho,replacementClass:Wo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Kt.familyPrefix&&(Kt.cssPrefix=Kt.familyPrefix);const Ot={...Vo,...Kt};Ot.autoReplaceSvg||(Ot.observeMutations=!1);const T={};Object.keys(Vo).forEach(e=>{Object.defineProperty(T,e,{enumerable:!0,set:function(t){Ot[e]=t,Zt.forEach(n=>n(T))},get:function(){return Ot[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(e){Ot.cssPrefix=e,Zt.forEach(t=>t(T))},get:function(){return Ot.cssPrefix}});st.FontAwesomeConfig=T;const Zt=[];function Dc(e){return Zt.push(e),()=>{Zt.splice(Zt.indexOf(e),1)}}const nt=Cr,Ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fc(e){if(!e||!et)return;const t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=V.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(t,r),e}const jc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function en(){let e=12,t="";for(;e-- >0;)t+=jc[Math.random()*62|0];return t}function Lt(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function sa(e){return e.classList?Lt(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Ko(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zc(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Ko(e[n]),'" '),"").trim()}function Kn(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function la(e){return e.size!==Ue.size||e.x!==Ue.x||e.y!==Ue.y||e.rotate!==Ue.rotate||e.flipX||e.flipY}function Uc(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:u,path:c}}function $c(e){let{transform:t,width:n=Cr,height:r=Cr,startCentered:a=!1}=e,i="";return a&&zo?i+="translate(".concat(t.x/nt-n/2,"em, ").concat(t.y/nt-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(t.x/nt,"em), calc(-50% + ").concat(t.y/nt,"em)) "):i+="translate(".concat(t.x/nt,"em, ").concat(t.y/nt,"em) "),i+="scale(".concat(t.size/nt*(t.flipX?-1:1),", ").concat(t.size/nt*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var qc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
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
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Zo(){const e=Ho,t=Wo,n=T.cssPrefix,r=T.replacementClass;let a=qc;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let ti=!1;function ur(){T.autoAddCss&&!ti&&(Fc(Zo()),ti=!0)}var Hc={mixout(){return{dom:{css:Zo,insertCss:ur}}},hooks(){return{beforeDOMElementCreation(){ur()},beforeI2svg(){ur()}}}};const Je=st||{};Je[Qe]||(Je[Qe]={});Je[Qe].styles||(Je[Qe].styles={});Je[Qe].hooks||(Je[Qe].hooks={});Je[Qe].shims||(Je[Qe].shims=[]);var $e=Je[Qe];const Qo=[],Jo=function(){V.removeEventListener("DOMContentLoaded",Jo),kn=1,Qo.map(e=>e())};let kn=!1;et&&(kn=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),kn||V.addEventListener("DOMContentLoaded",Jo));function Wc(e){et&&(kn?setTimeout(e,0):Qo.push(e))}function an(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Ko(e):"<".concat(t," ").concat(zc(n),">").concat(r.map(an).join(""),"</").concat(t,">")}function ni(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var fr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,u,c,m;for(r===void 0?(u=1,m=t[i[0]]):(u=0,m=r);u<o;u++)c=i[u],m=s(m,t[c],c,t);return m};function Bc(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ir(e){const t=Bc(e);return t.length===1?t[0].toString(16):null}function Gc(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ri(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Rr(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=ri(t);typeof $e.hooks.addPack=="function"&&!r?$e.hooks.addPack(e,ri(t)):$e.styles[e]={...$e.styles[e]||{},...a},e==="fas"&&Rr("fa",t)}const{styles:ht,shims:Yc}=$e,Xc={[Q]:Object.values(vt[Q]),[Te]:Object.values(vt[Te]),[Ee]:Object.values(vt[Ee])};let ca=null,es={},ts={},ns={},rs={},as={};const Vc={[Q]:Object.keys(gt[Q]),[Te]:Object.keys(gt[Te]),[Ee]:Object.keys(gt[Ee])};function Kc(e){return~Ic.indexOf(e)}function Zc(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Kc(a)?a:null}const is=()=>{const e=r=>fr(ht,(a,i,o)=>(a[o]=fr(i,r,{}),a),{});es=e((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=i}),r)),ts=e((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=i}),r)),as=e((r,a,i)=>{const o=a[2];return r[i]=i,o.forEach(s=>{r[s]=i}),r});const t="far"in ht||T.autoFetchSvg,n=fr(Yc,(r,a)=>{const i=a[0];let o=a[1];const s=a[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});ns=n.names,rs=n.unicodes,ca=Zn(T.styleDefault,{family:T.familyDefault})};Dc(e=>{ca=Zn(e.styleDefault,{family:T.familyDefault})});is();function ua(e,t){return(es[e]||{})[t]}function Qc(e,t){return(ts[e]||{})[t]}function at(e,t){return(as[e]||{})[t]}function os(e){return ns[e]||{prefix:null,iconName:null}}function Jc(e){const t=rs[e],n=ua("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function lt(){return ca}const fa=()=>({prefix:null,iconName:null,rest:[]});function Zn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Q}=t,r=gt[n][e],a=Jt[n][e]||Jt[n][r],i=e in $e.styles?e:null;return a||i||null}const eu={[Q]:Object.keys(vt[Q]),[Te]:Object.keys(vt[Te]),[Ee]:Object.keys(vt[Ee])};function Qn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[Q]:"".concat(T.cssPrefix,"-").concat(Q),[Te]:"".concat(T.cssPrefix,"-").concat(Te),[Ee]:"".concat(T.cssPrefix,"-").concat(Ee)};let a=null,i=Q;const o=lc.filter(u=>u!==Uo);o.forEach(u=>{(e.includes(r[u])||e.some(c=>eu[u].includes(c)))&&(i=u)});const s=e.reduce((u,c)=>{const m=Zc(T.cssPrefix,c);if(ht[c]?(c=Xc[i].includes(c)?Cc[i][c]:c,a=c,u.prefix=c):Vc[i].indexOf(c)>-1?(a=c,u.prefix=Zn(c,{family:i})):m?u.iconName=m:c!==T.replacementClass&&!o.some(A=>c===r[A])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const A=a==="fa"?os(u.iconName):{},k=at(u.prefix,u.iconName);A.prefix&&(a=null),u.iconName=A.iconName||k||u.iconName,u.prefix=A.prefix||u.prefix,u.prefix==="far"&&!ht.far&&ht.fas&&!T.autoFetchSvg&&(u.prefix="fas")}return u},fa());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===Te&&(ht.fass||T.autoFetchSvg)&&(s.prefix="fass",s.iconName=at(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===Ee&&(ht.fasds||T.autoFetchSvg)&&(s.prefix="fasds",s.iconName=at(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=lt()||"fas"),s}class tu{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...a[i]},Rr(i,a[i]);const o=vt[Q][i];o&&Rr(o,a[i]),is()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:o,icon:s}=r[a],u=s[2];t[i]||(t[i]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(t[i][c]=s)}),t[i][o]=s}),t}}let ai=[],St={};const Tt={},nu=Object.keys(Tt);function ru(e,t){let{mixoutsTo:n}=t;return ai=e,St={},Object.keys(Tt).forEach(r=>{nu.indexOf(r)===-1&&delete Tt[r]}),ai.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{St[o]||(St[o]=[]),St[o].push(i[o])})}r.provides&&r.provides(Tt)}),n}function Mr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(St[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function bt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(St[e]||[]).forEach(i=>{i.apply(null,n)})}function ct(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Tt[e]?Tt[e].apply(null,t):void 0}function Dr(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||lt();if(t)return t=at(n,t)||t,ni(ss.definitions,n,t)||ni($e.styles,n,t)}const ss=new tu,au=()=>{T.autoReplaceSvg=!1,T.observeMutations=!1,bt("noAuto")},iu={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return et?(bt("beforeI2svg",e),ct("pseudoElements2svg",e),ct("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Wc(()=>{su({autoReplaceSvgRoot:t}),bt("watch",e)})}},ou={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:at(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Zn(e[0]);return{prefix:n,iconName:at(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(T.cssPrefix,"-"))>-1||e.match(Oc))){const t=Qn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||lt(),iconName:at(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=lt();return{prefix:t,iconName:at(t,e)||e}}}},Ce={noAuto:au,config:T,dom:iu,parse:ou,library:ss,findIconDefinition:Dr,toHtml:an},su=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=V}=e;(Object.keys($e.styles).length>0||T.autoFetchSvg)&&et&&T.autoReplaceSvg&&Ce.dom.i2svg({node:t})};function Jn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>an(n))}}),Object.defineProperty(e,"node",{get:function(){if(!et)return;const n=V.createElement("div");return n.innerHTML=e.html,n.children}}),e}function lu(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(la(o)&&n.found&&!r.found){const{width:s,height:u}=n,c={x:s/u/2,y:.5};a.style=Kn({...i,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:a,children:t}]}function cu(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:o},children:r}]}]}function da(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:s,maskId:u,titleId:c,extra:m,watchable:A=!1}=e,{width:k,height:I}=n.found?n:t,x=r==="fak",_=[T.replacementClass,a?"".concat(T.cssPrefix,"-").concat(a):""].filter(D=>m.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(m.classes).join(" ");let h={children:[],attributes:{...m.attributes,"data-prefix":r,"data-icon":a,class:_,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(I)}};const S=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(k/I*16*.0625,"em")}:{};A&&(h.attributes[yt]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||en())},children:[s]}),delete h.attributes.title);const w={...h,prefix:r,iconName:a,main:t,mask:n,maskId:u,transform:i,symbol:o,styles:{...S,...m.styles}},{children:R,attributes:P}=n.found&&t.found?ct("generateAbstractMask",w)||{children:[],attributes:{}}:ct("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=R,w.attributes=P,o?cu(w):lu(w)}function ii(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:s=!1}=e,u={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};s&&(u[yt]="");const c={...o.styles};la(a)&&(c.transform=$c({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const m=Kn(c);m.length>0&&(u.style=m);const A=[];return A.push({tag:"span",attributes:u,children:[t]}),i&&A.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),A}function uu(e){const{content:t,title:n,extra:r}=e,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=Kn(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:dr}=$e;function Fr(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(cr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(cr.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(cr.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const fu={found:!1,width:512,height:512};function du(e,t){!Bo&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function jr(e,t){let n=t;return t==="fa"&&T.styleDefault!==null&&(t=lt()),new Promise((r,a)=>{if(n==="fa"){const i=os(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&dr[t]&&dr[t][e]){const i=dr[t][e];return r(Fr(i))}du(e,t),r({...fu,icon:T.showMissingIcons&&e?ct("missingIconAbstract")||{}:{}})})}const oi=()=>{},zr=T.measurePerformance&&pn&&pn.mark&&pn.measure?pn:{mark:oi,measure:oi},Ft='FA "6.6.0"',pu=e=>(zr.mark("".concat(Ft," ").concat(e," begins")),()=>ls(e)),ls=e=>{zr.mark("".concat(Ft," ").concat(e," ends")),zr.measure("".concat(Ft," ").concat(e),"".concat(Ft," ").concat(e," begins"),"".concat(Ft," ").concat(e," ends"))};var pa={begin:pu,end:ls};const yn=()=>{};function si(e){return typeof(e.getAttribute?e.getAttribute(yt):null)=="string"}function mu(e){const t=e.getAttribute?e.getAttribute(ia):null,n=e.getAttribute?e.getAttribute(oa):null;return t&&n}function hu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function gu(){return T.autoReplaceSvg===!0?bn.replace:bn[T.autoReplaceSvg]||bn.replace}function vu(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function yu(e){return V.createElement(e)}function cs(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?vu:yu}=t;if(typeof e=="string")return V.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(cs(i,{ceFn:n}))}),r}function bu(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const bn={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(cs(n),t)}),t.getAttribute(yt)===null&&T.keepOriginalSource){let n=V.createComment(bu(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~sa(t).indexOf(T.replacementClass))return bn.replace(e);const r=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===T.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>an(i)).join(`
`);t.setAttribute(yt,""),t.innerHTML=a}};function li(e){e()}function us(e,t){const n=typeof t=="function"?t:yn;if(e.length===0)n();else{let r=li;T.mutateApproach===Ec&&(r=st.requestAnimationFrame||li),r(()=>{const a=gu(),i=pa.begin("mutate");e.map(a),i(),n()})}}let ma=!1;function fs(){ma=!0}function Ur(){ma=!1}let Tn=null;function ci(e){if(!Za||!T.observeMutations)return;const{treeCallback:t=yn,nodeCallback:n=yn,pseudoElementsCallback:r=yn,observeMutationsRoot:a=V}=e;Tn=new Za(i=>{if(ma)return;const o=lt();Lt(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!si(s.addedNodes[0])&&(T.searchPseudoElements&&r(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&T.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&si(s.target)&&~Lc.indexOf(s.attributeName))if(s.attributeName==="class"&&mu(s.target)){const{prefix:u,iconName:c}=Qn(sa(s.target));s.target.setAttribute(ia,u||o),c&&s.target.setAttribute(oa,c)}else hu(s.target)&&n(s.target)})}),et&&Tn.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function xu(){Tn&&Tn.disconnect()}function wu(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Au(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=Qn(sa(e));return a.prefix||(a.prefix=lt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Qc(a.prefix,e.innerText)||ua(a.prefix,Ir(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Su(e){const t=Lt(e.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||en()):(t["aria-hidden"]="true",t.focusable="false")),t}function ku(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ui(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Au(e),i=Su(e),o=Mr("parseNodeAttributes",{},e);let s=t.styleParser?wu(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i},...o}}const{styles:Tu}=$e;function ds(e){const t=T.autoReplaceSvg==="nest"?ui(e,{styleParser:!1}):ui(e);return~t.extra.classes.indexOf(Xo)?ct("generateLayersText",e,t):ct("generateSvgReplacementMutation",e,t)}let qe=new Set;Go.map(e=>{qe.add("fa-".concat(e))});Object.keys(gt[Q]).map(qe.add.bind(qe));Object.keys(gt[Te]).map(qe.add.bind(qe));Object.keys(gt[Ee]).map(qe.add.bind(qe));qe=[...qe];function fi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!et)return Promise.resolve();const n=V.documentElement.classList,r=m=>n.add("".concat(ei,"-").concat(m)),a=m=>n.remove("".concat(ei,"-").concat(m)),i=T.autoFetchSvg?qe:Go.map(m=>"fa-".concat(m)).concat(Object.keys(Tu));i.includes("fa")||i.push("fa");const o=[".".concat(Xo,":not([").concat(yt,"])")].concat(i.map(m=>".".concat(m,":not([").concat(yt,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=Lt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const u=pa.begin("onTree"),c=s.reduce((m,A)=>{try{const k=ds(A);k&&m.push(k)}catch(k){Bo||k.name==="MissingIcon"&&console.error(k)}return m},[]);return new Promise((m,A)=>{Promise.all(c).then(k=>{us(k,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),u(),m()})}).catch(k=>{u(),A(k)})})}function Eu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ds(e).then(n=>{n&&us([n],t)})}function _u(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Dr(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Dr(a||{})),e(r,{...n,mask:a})}}const Cu=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ue,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:u=[],attributes:c={},styles:m={}}=t;if(!e)return;const{prefix:A,iconName:k,icon:I}=e;return Jn({type:"icon",...e},()=>(bt("beforeDOMElementCreation",{iconDefinition:e,params:t}),T.autoA11y&&(o?c["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(s||en()):(c["aria-hidden"]="true",c.focusable="false")),da({icons:{main:Fr(I),mask:a?Fr(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:k,transform:{...Ue,...n},symbol:r,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:m,classes:u}})))};var Ou={mixout(){return{icon:_u(Cu)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=fi,e.nodeCallback=Eu,e}}},provides(e){e.i2svg=function(t){const{node:n=V,callback:r=()=>{}}=t;return fi(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:i,prefix:o,transform:s,symbol:u,mask:c,maskId:m,extra:A}=n;return new Promise((k,I)=>{Promise.all([jr(r,o),c.iconName?jr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[_,h]=x;k([t,da({icons:{main:_,mask:h},prefix:o,iconName:r,transform:s,symbol:u,maskId:m,title:a,titleId:i,extra:A,watchable:!0})])}).catch(I)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:i,styles:o}=t;const s=Kn(o);s.length>0&&(r.style=s);let u;return la(i)&&(u=ct("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(u||a.icon),{children:n,attributes:r}}}},Nu={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Jn({type:"layer"},()=>{bt("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Pu={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return Jn({type:"counter",content:e},()=>(bt("beforeDOMElementCreation",{content:e,params:t}),uu({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(T.cssPrefix,"-layers-counter"),...r]}})))}}}},Lu={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ue,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return Jn({type:"text",content:e},()=>(bt("beforeDOMElementCreation",{content:e,params:t}),ii({content:e,transform:{...Ue,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(T.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:i}=n;let o=null,s=null;if(zo){const u=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/u,s=c.height/u}return T.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,ii({content:t.innerHTML,width:o,height:s,transform:a,title:r,extra:i,watchable:!0})])}}};const Iu=new RegExp('"',"ug"),di=[1105920,1112319],pi={FontAwesome:{normal:"fas",400:"fas"},...mc,...pc,...Ac},$r=Object.keys(pi).reduce((e,t)=>(e[t.toLowerCase()]=pi[t],e),{}),Ru=Object.keys($r).reduce((e,t)=>{const n=$r[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Mu(e){const t=e.replace(Iu,""),n=Gc(t,0),r=n>=di[0]&&n<=di[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ir(a?t[0]:t),isSecondary:r||a}}function Du(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return($r[n]||{})[a]||Ru[n]}function mi(e,t){const n="".concat(Tc).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const o=Lt(e.children).filter(k=>k.getAttribute(Or)===t)[0],s=st.getComputedStyle(e,t),u=s.getPropertyValue("font-family"),c=u.match(Nc),m=s.getPropertyValue("font-weight"),A=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&A!=="none"&&A!==""){const k=s.getPropertyValue("content");let I=Du(u,m);const{value:x,isSecondary:_}=Mu(k),h=c[0].startsWith("FontAwesome");let S=ua(I,x),w=S;if(h){const R=Jc(x);R.iconName&&R.prefix&&(S=R.iconName,I=R.prefix)}if(S&&!_&&(!o||o.getAttribute(ia)!==I||o.getAttribute(oa)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);const R=ku(),{extra:P}=R;P.attributes[Or]=t,jr(S,I).then(D=>{const J=da({...R,icons:{main:D,mask:fa()},prefix:I,iconName:w,extra:P,watchable:!0}),ee=V.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ee,e.firstChild):e.appendChild(ee),ee.outerHTML=J.map(K=>an(K)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Fu(e){return Promise.all([mi(e,"::before"),mi(e,"::after")])}function ju(e){return e.parentNode!==document.head&&!~_c.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Or)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function hi(e){if(et)return new Promise((t,n)=>{const r=Lt(e.querySelectorAll("*")).filter(ju).map(Fu),a=pa.begin("searchPseudoElements");fs(),Promise.all(r).then(()=>{a(),Ur(),t()}).catch(()=>{a(),Ur(),n()})})}var zu={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=hi,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=V}=t;T.searchPseudoElements&&hi(n)}}};let gi=!1;var Uu={mixout(){return{dom:{unwatch(){fs(),gi=!0}}}},hooks(){return{bootstrap(){ci(Mr("mutationObserverCallbacks",{}))},noAuto(){xu()},watch(e){const{observeMutationsRoot:t}=e;gi?Ur():ci(Mr("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const vi=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var $u={mixout(){return{parse:{transform:e=>vi(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=vi(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:i}=t;const o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(s," ").concat(u," ").concat(c)},A={transform:"translate(".concat(i/2*-1," -256)")},k={outer:o,inner:m,path:A};return{tag:"g",attributes:{...k.outer},children:[{tag:"g",attributes:{...k.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...k.path}}]}]}}}};const pr={x:0,y:0,width:"100%",height:"100%"};function yi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qu(e){return e.tag==="g"?e.children:[e]}var Hu={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Qn(n.split(" ").map(a=>a.trim())):fa();return r.prefix||(r.prefix=lt()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:i,maskId:o,transform:s}=t;const{width:u,icon:c}=a,{width:m,icon:A}=i,k=Uc({transform:s,containerWidth:m,iconWidth:u}),I={tag:"rect",attributes:{...pr,fill:"white"}},x=c.children?{children:c.children.map(yi)}:{},_={tag:"g",attributes:{...k.inner},children:[yi({tag:c.tag,attributes:{...c.attributes,...k.path},...x})]},h={tag:"g",attributes:{...k.outer},children:[_]},S="mask-".concat(o||en()),w="clip-".concat(o||en()),R={tag:"mask",attributes:{...pr,id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[I,h]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:qu(A)},R]};return n.push(P,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(S,")"),...pr}}),{children:n,attributes:r}}}},Wu={provides(e){let t=!1;st.matchMedia&&(t=st.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...a,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Bu={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Gu=[Hc,Ou,Nu,Pu,Lu,zu,Uu,$u,Hu,Wu,Bu];ru(Gu,{mixoutsTo:Ce});Ce.noAuto;Ce.config;Ce.library;Ce.dom;const qr=Ce.parse;Ce.findIconDefinition;Ce.toHtml;const Yu=Ce.icon;Ce.layer;Ce.text;Ce.counter;function bi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bi(Object(n),!0).forEach(function(r){kt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function En(e){"@babel/helpers - typeof";return En=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},En(e)}function kt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Vu(e,t){if(e==null)return{};var n=Xu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Hr(e){return Ku(e)||Zu(e)||Qu(e)||Ju()}function Ku(e){if(Array.isArray(e))return Wr(e)}function Zu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qu(e,t){if(e){if(typeof e=="string")return Wr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wr(e,t)}}function Wr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ju(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ef(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,u=e.spin,c=e.spinPulse,m=e.spinReverse,A=e.pulse,k=e.fixedWidth,I=e.inverse,x=e.border,_=e.listItem,h=e.flip,S=e.size,w=e.rotation,R=e.pull,P=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":u,"fa-spin-reverse":m,"fa-spin-pulse":c,"fa-pulse":A,"fa-fw":k,"fa-inverse":I,"fa-border":x,"fa-li":_,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},kt(t,"fa-".concat(S),typeof S<"u"&&S!==null),kt(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),kt(t,"fa-pull-".concat(R),typeof R<"u"&&R!==null),kt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(P).map(function(D){return P[D]?D:null}).filter(function(D){return D})}function tf(e){return e=e-0,e===e}function ps(e){return tf(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var nf=["style"];function rf(e){return e.charAt(0).toUpperCase()+e.slice(1)}function af(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ps(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[rf(a)]=i:t[a]=i,t},{})}function ms(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return ms(e,u)}),a=Object.keys(t.attributes||{}).reduce(function(u,c){var m=t.attributes[c];switch(c){case"class":u.attrs.className=m,delete t.attributes.class;break;case"style":u.attrs.style=af(m);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=m:u.attrs[ps(c)]=m}return u},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Vu(n,nf);return a.attrs.style=ze(ze({},a.attrs.style),o),e.apply(void 0,[t.tag,ze(ze({},a.attrs),s)].concat(Hr(r)))}var hs=!1;try{hs=!0}catch{}function of(){if(!hs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xi(e){if(e&&En(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(qr.icon)return qr.icon(e);if(e===null)return null;if(e&&En(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function mr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?kt({},e,t):{}}var wi={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ot=Nt.forwardRef(function(e,t){var n=ze(ze({},wi),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,u=n.titleId,c=n.maskId,m=xi(r),A=mr("classes",[].concat(Hr(ef(n)),Hr((o||"").split(" ")))),k=mr("transform",typeof n.transform=="string"?qr.transform(n.transform):n.transform),I=mr("mask",xi(a)),x=Yu(m,ze(ze(ze(ze({},A),k),I),{},{symbol:i,title:s,titleId:u,maskId:c}));if(!x)return of("Could not find icon",m),null;var _=x.abstract,h={ref:t};return Object.keys(n).forEach(function(S){wi.hasOwnProperty(S)||(h[S]=n[S])}),sf(_[0],h)});ot.displayName="FontAwesomeIcon";ot.propTypes={beat:d.bool,border:d.bool,beatFade:d.bool,bounce:d.bool,className:d.string,fade:d.bool,flash:d.bool,mask:d.oneOfType([d.object,d.array,d.string]),maskId:d.string,fixedWidth:d.bool,inverse:d.bool,flip:d.oneOf([!0,!1,"horizontal","vertical","both"]),icon:d.oneOfType([d.object,d.array,d.string]),listItem:d.bool,pull:d.oneOf(["right","left"]),pulse:d.bool,rotation:d.oneOf([0,90,180,270]),shake:d.bool,size:d.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d.bool,spinPulse:d.bool,spinReverse:d.bool,symbol:d.oneOfType([d.bool,d.string]),title:d.string,titleId:d.string,transform:d.oneOfType([d.string,d.object]),swapOpacity:d.bool};var sf=ms.bind(null,Nt.createElement);function rt(e){"@babel/helpers - typeof";return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(e)}function Br(e,t){return Br=Object.setPrototypeOf||function(r,a){return r.__proto__=a,r},Br(e,t)}function lf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xn(e,t,n){return lf()?xn=Reflect.construct:xn=function(a,i,o){var s=[null];s.push.apply(s,i);var u=Function.bind.apply(a,s),c=new u;return o&&Br(c,o.prototype),c},xn.apply(null,arguments)}function Fe(e){return cf(e)||uf(e)||ff(e)||df()}function cf(e){if(Array.isArray(e))return Gr(e)}function uf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ff(e,t){if(e){if(typeof e=="string")return Gr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gr(e,t)}}function Gr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function df(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var pf=Object.hasOwnProperty,Ai=Object.setPrototypeOf,mf=Object.isFrozen,hf=Object.getPrototypeOf,gf=Object.getOwnPropertyDescriptor,be=Object.freeze,Le=Object.seal,vf=Object.create,gs=typeof Reflect<"u"&&Reflect,_n=gs.apply,Yr=gs.construct;_n||(_n=function(t,n,r){return t.apply(n,r)});be||(be=function(t){return t});Le||(Le=function(t){return t});Yr||(Yr=function(t,n){return xn(t,Fe(n))});var yf=Ie(Array.prototype.forEach),Si=Ie(Array.prototype.pop),Mt=Ie(Array.prototype.push),wn=Ie(String.prototype.toLowerCase),hr=Ie(String.prototype.toString),ki=Ie(String.prototype.match),De=Ie(String.prototype.replace),bf=Ie(String.prototype.indexOf),xf=Ie(String.prototype.trim),me=Ie(RegExp.prototype.test),gr=wf(TypeError);function Ie(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return _n(e,t,r)}}function wf(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Yr(e,n)}}function j(e,t,n){var r;n=(r=n)!==null&&r!==void 0?r:wn,Ai&&Ai(e,null);for(var a=t.length;a--;){var i=t[a];if(typeof i=="string"){var o=n(i);o!==i&&(mf(t)||(t[a]=o),i=o)}e[i]=!0}return e}function mt(e){var t=vf(null),n;for(n in e)_n(pf,e,[n])===!0&&(t[n]=e[n]);return t}function mn(e,t){for(;e!==null;){var n=gf(e,t);if(n){if(n.get)return Ie(n.get);if(typeof n.value=="function")return Ie(n.value)}e=hf(e)}function r(a){return console.warn("fallback value for",a),null}return r}var Ti=be(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),vr=be(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),yr=be(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Af=be(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),br=be(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Sf=be(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ei=be(["#text"]),_i=be(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),xr=be(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ci=be(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),hn=be(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),kf=Le(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Tf=Le(/<%[\w\W]*|[\w\W]*%>/gm),Ef=Le(/\${[\w\W]*}/gm),_f=Le(/^data-[\-\w.\u00B7-\uFFFF]/),Cf=Le(/^aria-[\-\w]+$/),Of=Le(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Nf=Le(/^(?:\w+script|data):/i),Pf=Le(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Lf=Le(/^html$/i),If=Le(/^[a-z][.\w]*(-[.\w]+)+$/i),Rf=function(){return typeof window>"u"?null:window},Mf=function(t,n){if(rt(t)!=="object"||typeof t.createPolicy!="function")return null;var r=null,a="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(a)&&(r=n.currentScript.getAttribute(a));var i="dompurify"+(r?"#"+r:"");try{return t.createPolicy(i,{createHTML:function(s){return s},createScriptURL:function(s){return s}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function vs(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Rf(),t=function(l){return vs(l)};if(t.version="2.5.7",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;var n=e.document,r=e.document,a=e.DocumentFragment,i=e.HTMLTemplateElement,o=e.Node,s=e.Element,u=e.NodeFilter,c=e.NamedNodeMap,m=c===void 0?e.NamedNodeMap||e.MozNamedAttrMap:c,A=e.HTMLFormElement,k=e.DOMParser,I=e.trustedTypes,x=s.prototype,_=mn(x,"cloneNode"),h=mn(x,"nextSibling"),S=mn(x,"childNodes"),w=mn(x,"parentNode");if(typeof i=="function"){var R=r.createElement("template");R.content&&R.content.ownerDocument&&(r=R.content.ownerDocument)}var P=Mf(I,n),D=P?P.createHTML(""):"",J=r,ee=J.implementation,K=J.createNodeIterator,re=J.createDocumentFragment,ce=J.getElementsByTagName,Me=n.importNode,he={};try{he=mt(r).documentMode?r.documentMode:{}}catch{}var te={};t.isSupported=typeof w=="function"&&ee&&ee.createHTMLDocument!==void 0&&he!==9;var xe=kf,ue=Tf,Be=Ef,ke=_f,we=Cf,ut=Nf,Ge=Pf,ft=If,C=Of,v=null,E=j({},[].concat(Fe(Ti),Fe(vr),Fe(yr),Fe(br),Fe(Ei))),O=null,f=j({},[].concat(Fe(_i),Fe(xr),Fe(Ci),Fe(hn))),L=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),y=null,Y=null,$=!0,q=!0,F=!1,oe=!0,ae=!1,z=!0,Z=!1,U=!1,ie=!1,Oe=!1,ne=!1,Ye=!1,tt=!0,Ae=!1,M="user-content-",X=!0,Xe=!1,je={},ve=null,wa=j({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Aa=null,Sa=j({},["audio","video","img","source","image","track"]),tr=null,ka=j({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),on="http://www.w3.org/1998/Math/MathML",sn="http://www.w3.org/2000/svg",Ve="http://www.w3.org/1999/xhtml",xt=Ve,nr=!1,rr=null,Ls=j({},[on,sn,Ve],hr),dt,Is=["application/xhtml+xml","text/html"],Rs="text/html",fe,wt=null,Ms=r.createElement("form"),Ta=function(l){return l instanceof RegExp||l instanceof Function},ar=function(l){wt&&wt===l||((!l||rt(l)!=="object")&&(l={}),l=mt(l),dt=Is.indexOf(l.PARSER_MEDIA_TYPE)===-1?dt=Rs:dt=l.PARSER_MEDIA_TYPE,fe=dt==="application/xhtml+xml"?hr:wn,v="ALLOWED_TAGS"in l?j({},l.ALLOWED_TAGS,fe):E,O="ALLOWED_ATTR"in l?j({},l.ALLOWED_ATTR,fe):f,rr="ALLOWED_NAMESPACES"in l?j({},l.ALLOWED_NAMESPACES,hr):Ls,tr="ADD_URI_SAFE_ATTR"in l?j(mt(ka),l.ADD_URI_SAFE_ATTR,fe):ka,Aa="ADD_DATA_URI_TAGS"in l?j(mt(Sa),l.ADD_DATA_URI_TAGS,fe):Sa,ve="FORBID_CONTENTS"in l?j({},l.FORBID_CONTENTS,fe):wa,y="FORBID_TAGS"in l?j({},l.FORBID_TAGS,fe):{},Y="FORBID_ATTR"in l?j({},l.FORBID_ATTR,fe):{},je="USE_PROFILES"in l?l.USE_PROFILES:!1,$=l.ALLOW_ARIA_ATTR!==!1,q=l.ALLOW_DATA_ATTR!==!1,F=l.ALLOW_UNKNOWN_PROTOCOLS||!1,oe=l.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ae=l.SAFE_FOR_TEMPLATES||!1,z=l.SAFE_FOR_XML!==!1,Z=l.WHOLE_DOCUMENT||!1,Oe=l.RETURN_DOM||!1,ne=l.RETURN_DOM_FRAGMENT||!1,Ye=l.RETURN_TRUSTED_TYPE||!1,ie=l.FORCE_BODY||!1,tt=l.SANITIZE_DOM!==!1,Ae=l.SANITIZE_NAMED_PROPS||!1,X=l.KEEP_CONTENT!==!1,Xe=l.IN_PLACE||!1,C=l.ALLOWED_URI_REGEXP||C,xt=l.NAMESPACE||Ve,L=l.CUSTOM_ELEMENT_HANDLING||{},l.CUSTOM_ELEMENT_HANDLING&&Ta(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(L.tagNameCheck=l.CUSTOM_ELEMENT_HANDLING.tagNameCheck),l.CUSTOM_ELEMENT_HANDLING&&Ta(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(L.attributeNameCheck=l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),l.CUSTOM_ELEMENT_HANDLING&&typeof l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(L.allowCustomizedBuiltInElements=l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ae&&(q=!1),ne&&(Oe=!0),je&&(v=j({},Fe(Ei)),O=[],je.html===!0&&(j(v,Ti),j(O,_i)),je.svg===!0&&(j(v,vr),j(O,xr),j(O,hn)),je.svgFilters===!0&&(j(v,yr),j(O,xr),j(O,hn)),je.mathMl===!0&&(j(v,br),j(O,Ci),j(O,hn))),l.ADD_TAGS&&(v===E&&(v=mt(v)),j(v,l.ADD_TAGS,fe)),l.ADD_ATTR&&(O===f&&(O=mt(O)),j(O,l.ADD_ATTR,fe)),l.ADD_URI_SAFE_ATTR&&j(tr,l.ADD_URI_SAFE_ATTR,fe),l.FORBID_CONTENTS&&(ve===wa&&(ve=mt(ve)),j(ve,l.FORBID_CONTENTS,fe)),X&&(v["#text"]=!0),Z&&j(v,["html","head","body"]),v.table&&(j(v,["tbody"]),delete y.tbody),be&&be(l),wt=l)},Ea=j({},["mi","mo","mn","ms","mtext"]),_a=j({},["annotation-xml"]),Ds=j({},["title","style","font","a","script"]),ln=j({},vr);j(ln,yr),j(ln,Af);var ir=j({},br);j(ir,Sf);var Fs=function(l){var g=w(l);(!g||!g.tagName)&&(g={namespaceURI:xt,tagName:"template"});var b=wn(l.tagName),H=wn(g.tagName);return rr[l.namespaceURI]?l.namespaceURI===sn?g.namespaceURI===Ve?b==="svg":g.namespaceURI===on?b==="svg"&&(H==="annotation-xml"||Ea[H]):!!ln[b]:l.namespaceURI===on?g.namespaceURI===Ve?b==="math":g.namespaceURI===sn?b==="math"&&_a[H]:!!ir[b]:l.namespaceURI===Ve?g.namespaceURI===sn&&!_a[H]||g.namespaceURI===on&&!Ea[H]?!1:!ir[b]&&(Ds[b]||!ln[b]):!!(dt==="application/xhtml+xml"&&rr[l.namespaceURI]):!1},Ne=function(l){Mt(t.removed,{element:l});try{l.parentNode.removeChild(l)}catch{try{l.outerHTML=D}catch{l.remove()}}},cn=function(l,g){try{Mt(t.removed,{attribute:g.getAttributeNode(l),from:g})}catch{Mt(t.removed,{attribute:null,from:g})}if(g.removeAttribute(l),l==="is"&&!O[l])if(Oe||ne)try{Ne(g)}catch{}else try{g.setAttribute(l,"")}catch{}},Ca=function(l){var g,b;if(ie)l="<remove></remove>"+l;else{var H=ki(l,/^[\r\n\t ]+/);b=H&&H[0]}dt==="application/xhtml+xml"&&xt===Ve&&(l='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+l+"</body></html>");var Se=P?P.createHTML(l):l;if(xt===Ve)try{g=new k().parseFromString(Se,dt)}catch{}if(!g||!g.documentElement){g=ee.createDocument(xt,"template",null);try{g.documentElement.innerHTML=nr?D:Se}catch{}}var ge=g.body||g.documentElement;return l&&b&&ge.insertBefore(r.createTextNode(b),ge.childNodes[0]||null),xt===Ve?ce.call(g,Z?"html":"body")[0]:Z?g.documentElement:ge},Oa=function(l){return K.call(l.ownerDocument||l,l,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null,!1)},Na=function(l){return l instanceof A&&(typeof l.nodeName!="string"||typeof l.textContent!="string"||typeof l.removeChild!="function"||!(l.attributes instanceof m)||typeof l.removeAttribute!="function"||typeof l.setAttribute!="function"||typeof l.namespaceURI!="string"||typeof l.insertBefore!="function"||typeof l.hasChildNodes!="function")},Rt=function(l){return rt(o)==="object"?l instanceof o:l&&rt(l)==="object"&&typeof l.nodeType=="number"&&typeof l.nodeName=="string"},Ke=function(l,g,b){te[l]&&yf(te[l],function(H){H.call(t,g,b,wt)})},Pa=function(l){var g;if(Ke("beforeSanitizeElements",l,null),Na(l)||me(/[\u0080-\uFFFF]/,l.nodeName))return Ne(l),!0;var b=fe(l.nodeName);if(Ke("uponSanitizeElement",l,{tagName:b,allowedTags:v}),l.hasChildNodes()&&!Rt(l.firstElementChild)&&(!Rt(l.content)||!Rt(l.content.firstElementChild))&&me(/<[/\w]/g,l.innerHTML)&&me(/<[/\w]/g,l.textContent)||b==="select"&&me(/<template/i,l.innerHTML)||l.nodeType===7||z&&l.nodeType===8&&me(/<[/\w]/g,l.data))return Ne(l),!0;if(!v[b]||y[b]){if(!y[b]&&Ia(b)&&(L.tagNameCheck instanceof RegExp&&me(L.tagNameCheck,b)||L.tagNameCheck instanceof Function&&L.tagNameCheck(b)))return!1;if(X&&!ve[b]){var H=w(l)||l.parentNode,Se=S(l)||l.childNodes;if(Se&&H)for(var ge=Se.length,pe=ge-1;pe>=0;--pe){var pt=_(Se[pe],!0);pt.__removalCount=(l.__removalCount||0)+1,H.insertBefore(pt,h(l))}}return Ne(l),!0}return l instanceof s&&!Fs(l)||(b==="noscript"||b==="noembed"||b==="noframes")&&me(/<\/no(script|embed|frames)/i,l.innerHTML)?(Ne(l),!0):(ae&&l.nodeType===3&&(g=l.textContent,g=De(g,xe," "),g=De(g,ue," "),g=De(g,Be," "),l.textContent!==g&&(Mt(t.removed,{element:l.cloneNode()}),l.textContent=g)),Ke("afterSanitizeElements",l,null),!1)},La=function(l,g,b){if(tt&&(g==="id"||g==="name")&&(b in r||b in Ms))return!1;if(!(q&&!Y[g]&&me(ke,g))){if(!($&&me(we,g))){if(!O[g]||Y[g]){if(!(Ia(l)&&(L.tagNameCheck instanceof RegExp&&me(L.tagNameCheck,l)||L.tagNameCheck instanceof Function&&L.tagNameCheck(l))&&(L.attributeNameCheck instanceof RegExp&&me(L.attributeNameCheck,g)||L.attributeNameCheck instanceof Function&&L.attributeNameCheck(g))||g==="is"&&L.allowCustomizedBuiltInElements&&(L.tagNameCheck instanceof RegExp&&me(L.tagNameCheck,b)||L.tagNameCheck instanceof Function&&L.tagNameCheck(b))))return!1}else if(!tr[g]){if(!me(C,De(b,Ge,""))){if(!((g==="src"||g==="xlink:href"||g==="href")&&l!=="script"&&bf(b,"data:")===0&&Aa[l])){if(!(F&&!me(ut,De(b,Ge,"")))){if(b)return!1}}}}}}return!0},Ia=function(l){return l!=="annotation-xml"&&ki(l,ft)},Ra=function(l){var g,b,H,Se;Ke("beforeSanitizeAttributes",l,null);var ge=l.attributes;if(ge){var pe={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:O};for(Se=ge.length;Se--;){g=ge[Se];var pt=g,se=pt.name,or=pt.namespaceURI;if(b=se==="value"?g.value:xf(g.value),H=fe(se),pe.attrName=H,pe.attrValue=b,pe.keepAttr=!0,pe.forceKeepAttr=void 0,Ke("uponSanitizeAttribute",l,pe),b=pe.attrValue,!pe.forceKeepAttr&&(cn(se,l),!!pe.keepAttr)){if(!oe&&me(/\/>/i,b)){cn(se,l);continue}ae&&(b=De(b,xe," "),b=De(b,ue," "),b=De(b,Be," "));var Ma=fe(l.nodeName);if(La(Ma,H,b)){if(Ae&&(H==="id"||H==="name")&&(cn(se,l),b=M+b),z&&me(/((--!?|])>)|<\/(style|title)/i,b)){cn(se,l);continue}if(P&&rt(I)==="object"&&typeof I.getAttributeType=="function"&&!or)switch(I.getAttributeType(Ma,H)){case"TrustedHTML":{b=P.createHTML(b);break}case"TrustedScriptURL":{b=P.createScriptURL(b);break}}try{or?l.setAttributeNS(or,se,b):l.setAttribute(se,b),Na(l)?Ne(l):Si(t.removed)}catch{}}}}Ke("afterSanitizeAttributes",l,null)}},js=function N(l){var g,b=Oa(l);for(Ke("beforeSanitizeShadowDOM",l,null);g=b.nextNode();)Ke("uponSanitizeShadowNode",g,null),!Pa(g)&&(g.content instanceof a&&N(g.content),Ra(g));Ke("afterSanitizeShadowDOM",l,null)};return t.sanitize=function(N){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g,b,H,Se,ge;if(nr=!N,nr&&(N="<!-->"),typeof N!="string"&&!Rt(N))if(typeof N.toString=="function"){if(N=N.toString(),typeof N!="string")throw gr("dirty is not a string, aborting")}else throw gr("toString is not a function");if(!t.isSupported){if(rt(e.toStaticHTML)==="object"||typeof e.toStaticHTML=="function"){if(typeof N=="string")return e.toStaticHTML(N);if(Rt(N))return e.toStaticHTML(N.outerHTML)}return N}if(U||ar(l),t.removed=[],typeof N=="string"&&(Xe=!1),Xe){if(N.nodeName){var pe=fe(N.nodeName);if(!v[pe]||y[pe])throw gr("root node is forbidden and cannot be sanitized in-place")}}else if(N instanceof o)g=Ca("<!---->"),b=g.ownerDocument.importNode(N,!0),b.nodeType===1&&b.nodeName==="BODY"||b.nodeName==="HTML"?g=b:g.appendChild(b);else{if(!Oe&&!ae&&!Z&&N.indexOf("<")===-1)return P&&Ye?P.createHTML(N):N;if(g=Ca(N),!g)return Oe?null:Ye?D:""}g&&ie&&Ne(g.firstChild);for(var pt=Oa(Xe?N:g);H=pt.nextNode();)H.nodeType===3&&H===Se||Pa(H)||(H.content instanceof a&&js(H.content),Ra(H),Se=H);if(Se=null,Xe)return N;if(Oe){if(ne)for(ge=re.call(g.ownerDocument);g.firstChild;)ge.appendChild(g.firstChild);else ge=g;return(O.shadowroot||O.shadowrootmod)&&(ge=Me.call(n,ge,!0)),ge}var se=Z?g.outerHTML:g.innerHTML;return Z&&v["!doctype"]&&g.ownerDocument&&g.ownerDocument.doctype&&g.ownerDocument.doctype.name&&me(Lf,g.ownerDocument.doctype.name)&&(se="<!DOCTYPE "+g.ownerDocument.doctype.name+`>
`+se),ae&&(se=De(se,xe," "),se=De(se,ue," "),se=De(se,Be," ")),P&&Ye?P.createHTML(se):se},t.setConfig=function(N){ar(N),U=!0},t.clearConfig=function(){wt=null,U=!1},t.isValidAttribute=function(N,l,g){wt||ar({});var b=fe(N),H=fe(l);return La(b,H,g)},t.addHook=function(N,l){typeof l=="function"&&(te[N]=te[N]||[],Mt(te[N],l))},t.removeHook=function(N){if(te[N])return Si(te[N])},t.removeHooks=function(N){te[N]&&(te[N]=[])},t.removeAllHooks=function(){te={}},t}vs();function*ys(e="id-",t=0){let n=t;for(;;)n+=1,yield e+n}function bs(){const e=(document.currentScript&&document.currentScript.src||"").match(/(.*\/)/);return e&&e.length>0?e[0].substr(0,e[0].length-1):"/"}d.shape({event:d.string,action:d.string,name:d.string,region:d.string,section:d.string,component:d.string,type:d.string,text:d.string});const le=({event:e="",action:t="",name:n="",type:r="",section:a="",text:i="",region:o="",component:s=""})=>{const{dataLayer:u}=window,c={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:o.toLowerCase(),section:a.toLowerCase(),text:i.toLowerCase(),component:s.toLowerCase()};u&&u.push(c)},Df={Lg:"992px",Xl:"1260px"},xs=B.createContext(),ha=({initialValue:e,children:t})=>{const n={...e,breakpoint:Df[e.breakpoint]};return p.jsx(xs.Provider,{value:n,children:t})};ha.propTypes={initialValue:d.shape(yo).isRequired,children:d.node.isRequired};const He=()=>{const e=B.useContext(xs);if(e===void 0)throw new Error("useAppContext must be used within a AppContextProvider");return e};ha.__docgenInfo={description:"",methods:[],displayName:"AppContextProvider",props:{initialValue:{description:"",type:{name:"shape",value:{isPartner:{name:"bool",required:!1},navTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},partnerLogo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},logo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},title:{name:"string",required:!1},parentOrg:{name:"custom",raw:"TitlePropTypes.parentOrg",required:!1},parentOrgUrl:{name:"custom",raw:"TitlePropTypes.parentOrgUrl",required:!1},baseUrl:{name:"custom",raw:"TitlePropTypes.baseUrl",required:!1},loggedIn:{name:"custom",raw:"LoginPropTypes.loggedIn",required:!1},userName:{name:"custom",raw:"LoginPropTypes.userName",required:!1},loginLink:{name:"custom",raw:"LoginPropTypes.loginLink",required:!1},onLoginClick:{name:"func",required:!1},logoutLink:{name:"custom",raw:"LoginPropTypes.logoutLink",required:!1},onLogoutClick:{name:"func",required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},breakpoint:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}],required:!1},animateTitle:{name:"bool",required:!1},expandOnHover:{name:"bool",required:!1},mobileNavTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},hasNavigation:{name:"bool",required:!1},searchUrl:{name:"string",required:!1},site:{name:"string",required:!1},renderDiv:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}],required:!1}}},required:!0},children:{description:"",type:{name:"node"},required:!0}}};const er=e=>{const t=window==null?void 0:window.matchMedia(`(max-width: ${e})`),[n,r]=B.useState(t==null?void 0:t.matches),a=i=>{r(i.matches)};return B.useEffect(()=>(t.addEventListener("change",a),()=>t.removeEventListener("change",a)),[]),n},Ff=ye.div`
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
`,jf=ye.div`
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
`,Oi={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar"},ws=()=>{const{loggedIn:e,userName:t,logoutLink:n,loginLink:r,onLoginClick:a,onLogoutClick:i,breakpoint:o}=He();return p.jsx(jf,{className:"nav-link login-status",breakpoint:o,children:e?p.jsxs(p.Fragment,{children:[t?p.jsx("span",{className:"name","data-testid":"user-name",children:t}):"",p.jsx("a",{className:"signout",href:n,onClick:s=>{le({...Oi,text:"sign out"}),i==null||i(s)},children:"Sign Out"})]}):p.jsx("a",{href:r,onClick:s=>{le({...Oi,text:"sign in"}),a==null||a(s)},children:"Sign In"})})};ws.__docgenInfo={description:"",methods:[],displayName:"Login"};const zf=ye.form`
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
`,wr={event:"search",action:"type",name:"onenter",type:"main search",region:"navbar",section:"topbar"},As=()=>{const{breakpoint:e,searchUrl:t,site:n}=He(),r=er(e),a=B.useRef(null),[i,o]=B.useState(!1);B.useEffect(()=>{i&&a.current.focus()},[i]);const s=c=>{const m=c.target;c.preventDefault(),le({...wr,text:c.target.elements.q.value}),setTimeout(()=>{m.submit()},100)},u=()=>{o(c=>{const m=!c;return le({...wr,event:"link",action:"click",name:"onclick",text:m?"search icon":"close search icon"}),m})};return p.jsxs(zf,{breakpoint:e,action:t,onSubmit:s,method:"get",name:"gs",className:i?"open-search":"","data-testid":"universal-nav-search-form",children:[r?p.jsxs("label",{children:[p.jsx(ot,{icon:Xa}),p.jsx("input",{ref:a,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0,onChange:c=>le({...wr,text:c.target.value})})]}):p.jsxs(p.Fragment,{children:[p.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:u,className:"search-button","data-testid":"search-button",children:p.jsx(ot,{icon:Xa})}),i&&p.jsxs(p.Fragment,{children:[p.jsx("input",{ref:a,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0}),p.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:u,className:"close-search","data-testid":"close-search",children:p.jsx(ot,{icon:Mo})})]})]}),p.jsx("input",{name:"url_host",value:n,type:"hidden"}),p.jsx("input",{name:"site",value:"default_collection",type:"hidden"}),p.jsx("input",{name:"sort",value:"date:D:L:d1",type:"hidden"}),p.jsx("input",{name:"output",value:"xml_no_dtd",type:"hidden"}),p.jsx("input",{name:"ie",value:"UTF-8",type:"hidden"}),p.jsx("input",{name:"oe",value:"UTF-8",type:"hidden"}),p.jsx("input",{name:"client",value:"asu_frontend",type:"hidden"}),p.jsx("input",{name:"proxystylesheet",value:"asu_frontend",type:"hidden"})]})};As.__docgenInfo={description:"",methods:[],displayName:"Search"};const Uf={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar",text:""},ga=()=>{const{breakpoint:e}=He();function t(){try{return window.location.href}catch(r){return console.error(r),""}}const n=[{className:"nav-link visually-hidden-focusable",href:"#skip-to-content",text:"Skip to main content"},{className:"nav-link visually-hidden-focusable",href:`https://accessibility.asu.edu/report?a11yref=${t()}`,text:"Report an accessibility problem"},{className:"nav-link",href:"https://asu.edu",text:"ASU Home"},{className:"nav-link",href:"https://my.asu.edu",text:"My ASU"},{className:"nav-link",href:"https://www.asu.edu/academics/colleges-schools",text:"Colleges and Schools"}];return p.jsx(Ff,{breakpoint:e,className:"universal-nav","data-testid":"universal-navbar","data-elastic-exclude":"data-elastic-exclude",children:p.jsx("div",{className:"container-xl",children:p.jsx("div",{className:"header-top",children:p.jsxs("nav",{className:"nav","aria-label":"ASU Global",children:[p.jsxs("div",{className:"links-container",children:[n.map(r=>p.jsx("a",{className:r.className,href:r.href,onClick:()=>le({...Uf,text:r.text}),children:r.text},r.href)),p.jsx(ws,{})]}),p.jsx(As,{})]})})})})};ga.__docgenInfo={description:"",methods:[],displayName:"UniversalNavbar"};const $f=ye.div`
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
`,qf=ye.a`
  display: unset;
  padding: 0;
  margin: 0;
  font-size: unset;
  line-height: unset;
  white-space: unset;
`,Ss=bs(),Hf=`${Ss}/assets/img/arizona-state-university-logo-vertical.png`,Wf=`${Ss}/assets/img/arizona-state-university-logo.png`,ks=()=>{const{logo:e}=He();return p.jsxs(qf,{href:(e==null?void 0:e.brandLink)??"https://asu.edu",className:"navbar-brand","data-testid":"logo",onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"asu logo"}),children:[p.jsx("img",{className:"vert",src:(e==null?void 0:e.src)??Hf,alt:(e==null?void 0:e.alt)??"Arizona State University",title:(e==null?void 0:e.title)??"ASU home page",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),p.jsx("img",{className:"horiz",src:(e==null?void 0:e.mobileSrc)??Wf,alt:(e==null?void 0:e.alt)??"Arizona State University",title:(e==null?void 0:e.title)??"ASU home page",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})};ks.__docgenInfo={description:"",methods:[],displayName:"Logo"};const Bf=ye.nav`
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
`,Gf=ye.div`
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
`,Yf={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},Ts=({text:e})=>p.jsx("h3",{className:"ul-heading",children:e});Ts.propTypes={text:d.string};const Es=({link:e,dropdownName:t,handleLinkEvent:n})=>p.jsx("li",{className:"nav-button",children:p.jsx(Pt,{text:e.text,color:e.color||"dark",href:e.href,onClick:r=>n(r,e),onKeyDown:n,onFocus:()=>le({text:e.text,component:t}),"data-testid":"submenu-item"})});Es.propTypes={link:d.shape({text:d.string,color:d.string,href:d.string}),dropdownName:d.string,handleLinkEvent:d.func};const _s=({link:e,dropdownName:t,handleLinkEvent:n})=>p.jsx("li",{className:"nav-link",children:p.jsx("a",{...e.href?{}:{tabIndex:0},href:e.href,onClick:r=>n(r,e),onKeyDown:r=>n(r,e),onFocus:()=>le({text:e.text,component:t}),"data-testid":"submenu-item",children:e.text})});_s.propTypes={link:d.shape({text:d.string,href:d.string}),dropdownName:d.string,handleLinkEvent:d.func};const va=({dropdownName:e,items:t,buttons:n,classes:r,listId:a,setItemOpened:i,parentLink:o})=>{const{breakpoint:s}=He(),u=(t==null?void 0:t.length)>2,c=B.useRef(null),[m,A]=B.useState(!1),k=(t==null?void 0:t.length)>1;B.useEffect(()=>{if(window&&c.current){const h=c.current.getBoundingClientRect().left,S=window.innerWidth*.55;A(h>S)}},[]);const I=h=>h.stopPropagation(),x=(h,S)=>{var K;const{key:w,type:R,target:P}=h,{parentElement:D}=P,J=()=>{var ce;const re=(ce=D.nextElementSibling)==null?void 0:ce.firstChild;re&&re.focus()},ee=()=>{var ce;const re=(ce=D.previousElementSibling)==null?void 0:ce.firstChild;re&&re.focus()};I(h),w==="ArrowDown"?(h.preventDefault(),J()):w==="ArrowUp"?(h.preventDefault(),ee()):w==="Escape"?(i(),o&&o.focus()):(w==="Enter"||w===" "||R==="click")&&((K=S==null?void 0:S.onClick)==null||K.call(S,h),le({...Yf,text:S.text}))},_=(h,S)=>{const w=`${h.text}-${h.href||S}`;return h.type==="heading"?p.jsx(Ts,{text:h.text},w):h.type==="button"?p.jsx(Es,{link:h,dropdownName:e,handleLinkEvent:x},w):p.jsx(_s,{link:h,dropdownName:e,handleLinkEvent:x},w)};return p.jsxs(Gf,{ref:c,className:`${r}${m?" aligned-right":""}${u?" mega":""}`,breakpoint:s,children:[p.jsx("div",{id:k?a:null,className:"dropdown-container",children:t==null?void 0:t.map((h,S)=>{const R=ys(`dropdown-item-${S}-`).next().value;return p.jsx("ul",{id:k?`${a}-${R}`:a,children:h.map((P,D)=>_(P,D))},R)})}),n&&p.jsx("div",{className:"dropdown-button-container",children:p.jsx("div",{children:n.map((h,S)=>p.jsx(Pt,{color:h.color,text:h.text,href:h.href,onClick:I},`${h.text}-${h.href||S}`))})})]})};va.propTypes={dropdownName:d.string,items:d.arrayOf(d.arrayOf(d.shape({text:d.string,selected:d.bool,onClick:d.func,href:d.string}))),buttons:d.arrayOf(d.shape(On)),classes:d.string,listId:d.string,setItemOpened:d.func,parentLink:d.shape({focus:d.func})};va.__docgenInfo={description:`@param {DropdownItemProps} props
@returns {JSX.Element}`,methods:[],displayName:"DropdownItem",props:{dropdownName:{description:"",type:{name:"string"},required:!1},items:{description:"",type:{name:"arrayOf",value:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1},selected:{name:"bool",required:!1},onClick:{name:"func",required:!1},href:{name:"string",required:!1}}}}},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},classes:{description:"",type:{name:"string"},required:!1},listId:{description:"",type:{name:"string"},required:!1},setItemOpened:{description:"",type:{name:"func"},required:!1},parentLink:{description:"",type:{name:"shape",value:{focus:{name:"func",required:!1}}},required:!1}}};const Xf=ye.li`
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
`,Vf={event:"collapse",type:"click"},Ar={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},Cs=({children:e})=>p.jsxs(p.Fragment,{children:[p.jsx(ot,{icon:ac,className:"icon-nav-item",alt:""}),p.jsx("span",{className:"mobile-only",children:e})]});Cs.propTypes={children:d.node};const ya=({link:e,setItemOpened:t,itemOpened:n})=>{const r=B.useRef(null),a=B.useRef(null),i=e.id===n,{breakpoint:o,expandOnHover:s,title:u}=He(),c=er(o);B.useEffect(()=>{const x=_=>{var h;i&&!((h=r==null?void 0:r.current)!=null&&h.contains(_.target))&&t()};return document.addEventListener("click",x,!0),()=>{document.removeEventListener("click",x,!0)}},[i]);const m=B.useMemo(()=>{var x;return e.type==="icon-home"?p.jsx(Cs,{children:e.text}):p.jsxs("span",{children:[e.text,!!((x=e.items)!=null&&x.length)&&p.jsx(ot,{icon:oc,className:`chevron-icon ${i?"open":""}`,alt:""})]})},[e]),A=()=>{var S;const x=!!((S=e.items)!=null&&S.length),_=i?"close":"open",{text:h}=e;le(x?{...Ar,...Vf,action:_,text:h}:{...Ar,text:e.type==="icon-home"?"home button":h})},k=x=>{var S,w;if(!e.items&&e.href){le({...Ar,text:e.text});return}const{key:_}=x;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"," ","Escape","Click"].includes(_)){if(x.preventDefault(),_==="Escape"&&i){t();return}if((_==="Enter"||_===" ")&&(e.items&&(!s&&!c||c)&&t(),A(),(S=e.onClick)==null||S.call(e,x)),(_==="ArrowDown"||_==="ArrowRight")&&i){const R=document.querySelectorAll(`.header-dropdown-${e.id} li.nav-link a`);R.length&&R[0].focus()}}else x.type==="click"&&e.items?(x.preventDefault(),A(),t()):x.type==="click"&&(A(),(w=e.onClick)==null||w.call(e,x))},I=()=>{s&&!c&&(t(),A())};return p.jsxs(Xf,{breakpoint:o,ref:r,onMouseEnter:I,onMouseLeave:I,children:[p.jsx("a",{onKeyDown:k,onClick:k,href:e.href,...e.items?{"aria-expanded":i}:{},...e.href?{}:{tabIndex:0},"aria-owns":e.items?`dropdown-${e.id}`:null,className:`${e.class?e.class:""}${e.selected?" nav-item-selected":""}${i?" open-link":""}`,"data-testid":"nav-item",title:e.type==="icon-home"&&u?`${u} home page`:e.text,ref:a,children:m}),e.items&&p.jsx(va,{items:e.items,buttons:e.buttons,dropdownName:e.text,classes:`header-dropdown-${e.id} ${i?"opened":""}`,listId:`dropdown-${e.id}`,setItemOpened:t,parentLink:a==null?void 0:a.current})]})};ya.propTypes={link:Sr,setItemOpened:d.func,itemOpened:d.number};ya.__docgenInfo={description:`@param {{ link: NavTreeProps, setItemOpened: Function, itemOpened: number }} props
@returns {JSX.Element}`,methods:[],displayName:"NavItem",props:{link:{description:"",type:{name:"shape",value:{id:{name:"number",required:!1},href:{name:"string",required:!1},text:{name:"string",required:!1},type:{name:"string",required:!1},selected:{name:"bool",required:!1},items:{name:"arrayOf",value:{name:"arrayOf",value:{name:"object"}},required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},class:{name:"string",required:!1}}},required:!1},setItemOpened:{description:"",type:{name:"func"},required:!1},itemOpened:{description:"",type:{name:"number"},required:!1}}};const Xr=()=>{const{navTree:e,mobileNavTree:t,buttons:n,breakpoint:r}=He(),a=er(r),[i,o]=B.useState(void 0),s=c=>{o(m=>i===c?void 0:c)},u=(c,m)=>{const A={...c,id:m},I=ys(`${c.text}-${m}-`).next().value;return p.jsx(ya,{link:A,setItemOpened:()=>s(m),itemOpened:i},I)};return p.jsxs(Bf,{breakpoint:r,"data-testid":"navigation","aria-label":"Site",children:[((e==null?void 0:e.length)||(t==null?void 0:t.length)||(n==null?void 0:n.length))&&p.jsxs("div",{className:"content-container",children:[((e==null?void 0:e.length)||(t==null?void 0:t.length))&&p.jsx("ul",{className:"nav-list",children:t!=null&&t.length&&a?t==null?void 0:t.map((c,m)=>u(c,m)):e==null?void 0:e.map((c,m)=>u(c,m))}),!!(n!=null&&n.length)&&p.jsx("form",{className:"buttons-container","data-testid":"buttons-container",children:n==null?void 0:n.map(c=>B.createElement(Pt,{...c,key:c.text,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:c.text})}))})]}),a&&p.jsx(ga,{})]})};Xr.__docgenInfo={description:"",methods:[],displayName:"NavbarContainer"};const Kf=ye.div`
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
`,ba=bs(),Zf=`${ba}/assets/img/arizona-state-university-logo-vertical.png`,Qf=`${ba}/assets/img/arizona-state-university-logo.png`,Jf=`${ba}/assets/img/asu-starbucks.png`,Os=()=>{const{partnerLogo:e,logo:t,breakpoint:n}=He();return p.jsxs(Kf,{breakpoint:n,"data-testid":"partner",children:[p.jsx("a",{href:(e==null?void 0:e.brandLink)??"https://starbucks.asu.edu/",onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"partner logo"}),children:p.jsx("img",{src:(e==null?void 0:e.src)??Jf,alt:(e==null?void 0:e.alt)??"ASU Starbucks logo",width:"232",height:"81",decoding:"async",fetchpriority:"high"})}),p.jsxs("a",{href:(t==null?void 0:t.brandLink)??"https://asu.edu",onClick:()=>le({text:"asu logo"}),children:[p.jsx("img",{className:"vert",src:(t==null?void 0:t.src)??Zf,alt:(t==null?void 0:t.alt)??"Arizona State University",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),p.jsx("img",{className:"horiz",src:(t==null?void 0:t.mobileSrc)??Qf,alt:(t==null?void 0:t.alt)??"Arizona State University",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})]})};Os.__docgenInfo={description:"",methods:[],displayName:"Partner"};const ed=(e,t)=>{const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n},td=e=>{const t="localhost",n="title_loaded",r=new Date,a=e||window.location.hostname,i=localStorage.getItem("title_loaded"),o=r.getTime()>parseInt(i,10),s=a===t,u=document.referrer.includes(a);if(s||!u&&(!i||o)){const m=ed(r,10).getTime();return localStorage.setItem(n,m.toString()),!0}return!1},nd={"992px":"993px","1260px":"1261px"},Ni=ye.div`
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

  @media (min-width: ${({breakpoint:e})=>nd[e]}) {
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
`,xa=()=>{const[e,t]=B.useState(!1),{title:n,parentOrg:r,parentOrgUrl:a,baseUrl:i,breakpoint:o,animateTitle:s}=He();return B.useEffect(()=>{if(s!==!1){let u=i==="/"?window.location.hostname:i;!u.includes(window.location.hostname)&&u.indexOf("/")===0&&(u=window.location.hostname+u),td(u)&&t(!0)}},[e,s,i]),r?p.jsxs(Ni,{breakpoint:o,className:"title","data-testid":"title",children:[p.jsx("a",{className:"unit-name",href:a,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:r}),title:`${r} home page`,children:r}),p.jsx("a",{className:`subunit-name ${e?"active":""}`,href:i,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:n}),title:`${n} home page`,children:n})]}):p.jsx(Ni,{breakpoint:o,className:"title","data-testid":"title",children:p.jsx("a",{className:`title-subunit-name ${e?"active":""}`,href:i,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:n}),title:`${n} home page`,children:n})})};xa.propTypes={...gn};xa.__docgenInfo={description:"",methods:[],displayName:"Title",props:{baseUrl:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},animate:{description:"",type:{name:"bool"},required:!1}}};const Ns=()=>{const{breakpoint:e,isPartner:t,hasNavigation:n}=He(),[r,a]=B.useState(!1),i=er(e),o=()=>{a(u=>!u)},s=()=>{o(),le({event:"collapse",action:r?"close":"open",type:"click",text:"menu button tablet"})};return p.jsxs(p.Fragment,{children:[!i&&p.jsx(ga,{}),p.jsx($f,{breakpoint:e,children:p.jsx("div",{className:"container-xl",children:p.jsx("div",{className:"header-main",children:p.jsxs("div",{className:`navbar navbar-expand-xl ${t?"partner":""}`,children:[!t&&p.jsx(ks,{}),p.jsx("button",{className:`navbar-toggler${r?"":" collapsed"}`,type:"button",onClick:s,"aria-label":"Toggle navigation",children:p.jsx(ot,{icon:r?Mo:nc,alt:""})}),p.jsxs("div",{className:`${t?"":"expand-title"}${n?"":" no-navigation"}`,children:[t?p.jsx(Os,{}):p.jsx(xa,{}),!i&&p.jsx(Xr,{})]}),r&&i&&p.jsx(Xr,{})]})})})})]})};Ns.__docgenInfo={description:"",methods:[],displayName:"HeaderMain"};const rd=(e,t)=>e==null?void 0:e.findIndex(n=>{var r;return(n==null?void 0:n.href)===t||Array.isArray(n.items)&&((r=n.items)==null?void 0:r.flat().find(({href:a})=>a===t))}),ad=e=>e==null?void 0:e.find(t=>t.selected),Pi=e=>{if(!Array.isArray(e)||e.length===0||ad(e))return e;let t="";if(window!=null&&window.location&&(t=window.location.pathname+window.location.search),!t)return e;const n=rd(e,t);if(n===-1)return e;const r=[...e];return r[n].selected=!0,r},Ps={Lg:"992px",Xl:"1260px"},id=ye.header`
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
  @media (min-width: ${({breakpoint:e})=>Ps[e]}) {
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
`,od=ye.div`
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
  @media (min-width: ${({breakpoint:e})=>Ps[e]}) {
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
`,It=({isPartner:e,navTree:t,title:n,baseUrl:r,parentOrg:a,parentOrgUrl:i,partnerLogo:o,logo:s,loggedIn:u,userName:c,loginLink:m,onLoginClick:A,logoutLink:k,onLogoutClick:I,buttons:x,breakpoint:_,animateTitle:h,expandOnHover:S,mobileNavTree:w,searchUrl:R,site:P,renderDiv:D="false"})=>{const J=Pi(t),ee=Pi(w),K=B.useRef(null),re=()=>{window.scrollY>K.current.getBoundingClientRect().top?K.current.classList.add("scrolled"):K.current.classList.remove("scrolled")};B.useEffect(()=>{typeof window<"u"&&tc({packageName:"component-header",component:"Component Header",type:"NA",configuration:{site:P,isPartner:e,searchUrl:R,navTree:J,parentOrg:a,buttons:x,mobileNavTree:ee}})},[]),B.useEffect(()=>(window==null||window.addEventListener("scroll",re),()=>window.removeEventListener("scroll",re)),[]);const ce=()=>{const Me=D==="true"?od:id;return p.jsx(Me,{id:"asuHeader",ref:K,breakpoint:_,children:p.jsx(Ns,{})})};return p.jsx(ha,{initialValue:{isPartner:e,navTree:J,title:n,baseUrl:r,parentOrg:a,parentOrgUrl:i,partnerLogo:o,logo:s,loggedIn:u,userName:c,loginLink:m,onLoginClick:A,logoutLink:k,onLogoutClick:I,buttons:x,breakpoint:_,animateTitle:h,expandOnHover:S,mobileNavTree:ee,hasNavigation:!!(J!=null&&J.length)||!!(ee!=null&&ee.length),searchUrl:R,site:P},children:ce()})};It.propTypes={...yo};It.defaultProps={isPartner:!1,baseUrl:"/",breakpoint:"Xl",expandOnHover:!1};It.__docgenInfo={description:`@param {HeaderProps} props
@returns {JSX.Element}`,methods:[],displayName:"ASUHeader",props:{renderDiv:{defaultValue:{value:'"false"',computed:!1},description:"",type:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}]},required:!1},isPartner:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},baseUrl:{defaultValue:{value:'"/"',computed:!1},description:"",type:{name:"string"},required:!1},breakpoint:{defaultValue:{value:'"Xl"',computed:!1},description:"",type:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}]},required:!1},expandOnHover:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},navTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},partnerLogo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},logo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},title:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1},userName:{description:"",type:{name:"string"},required:!1},loginLink:{description:"",type:{name:"string"},required:!1},onLoginClick:{description:"",type:{name:"func"},required:!1},logoutLink:{description:"",type:{name:"string"},required:!1},onLogoutClick:{description:"",type:{name:"func"},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},animateTitle:{description:"",type:{name:"bool"},required:!1},mobileNavTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},hasNavigation:{description:"",type:{name:"bool"},required:!1},searchUrl:{description:"",type:{name:"string"},required:!1},site:{description:"",type:{name:"string"},required:!1}}};const fd={title:"UDS/ASU Header",component:It,argTypes:{renderDiv:{control:"select",options:["true","false"],description:"Either 'true' or 'false'. If 'true', the header will be rendered as a div instead of a header element."}}},We=e=>p.jsxs(p.Fragment,{children:[p.jsx(It,{...e}),p.jsx("div",{style:{width:"100%",height:"200vh",background:"#f0f0f0",paddingTop:40,marginTop:140},children:p.jsx("h1",{style:{textAlign:"center",fontFamily:"Arial"},children:"Scroll section"})})]}),sd=e=>{const t=()=>{localStorage.getItem("title_loaded")&&localStorage.removeItem("title_loaded"),setTimeout(()=>{window.location.reload()},1e3)};return p.jsxs(p.Fragment,{children:[p.jsx(It,{...e,animateTitle:!0}),p.jsx("div",{style:{marginTop:200,textAlign:"center"},children:p.jsx(Pt,{text:"Animate Title",color:"dark",onClick:t})})]})},jt=We.bind({});jt.args={loggedIn:!1,userName:"",navTree:nn,title:"Subdomain name",breakpoint:"Lg",searchUrl:"https://search.asu.edu/search",site:"subdomain",renderDiv:"false"};const zt=We.bind({});zt.args={};const Ut=We.bind({});Ut.args={title:"Subdomain name",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const $t=We.bind({});$t.args={title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const qt=We.bind({});qt.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:nn,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ht=We.bind({});Ht.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:nn,mobileNavTree:ec,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Wt=We.bind({});Wt.args={navTree:Jl,title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold",classes:"custom-class"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Bt=We.bind({});Bt.args={navTree:Ro,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Gt=We.bind({});Gt.args={navTree:Ro,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",expandOnHover:!0,searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Yt=We.bind({});Yt.args={isPartner:!0,navTree:nn,loggedIn:!1,userName:"",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Xt=sd.bind({});Xt.args={title:"Subdomain name",navTree:nn,loggedIn:!1,logoutLink:"/caslogout",loginLink:"/cas",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};var Li,Ii,Ri;jt.parameters={...jt.parameters,docs:{...(Li=jt.parameters)==null?void 0:Li.docs,source:{originalSource:`args => <>
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
  </>`,...(Ri=(Ii=jt.parameters)==null?void 0:Ii.docs)==null?void 0:Ri.source}}};var Mi,Di,Fi;zt.parameters={...zt.parameters,docs:{...(Mi=zt.parameters)==null?void 0:Mi.docs,source:{originalSource:`args => <>
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
  </>`,...(Fi=(Di=zt.parameters)==null?void 0:Di.docs)==null?void 0:Fi.source}}};var ji,zi,Ui;Ut.parameters={...Ut.parameters,docs:{...(ji=Ut.parameters)==null?void 0:ji.docs,source:{originalSource:`args => <>
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
  </>`,...(Ui=(zi=Ut.parameters)==null?void 0:zi.docs)==null?void 0:Ui.source}}};var $i,qi,Hi;$t.parameters={...$t.parameters,docs:{...($i=$t.parameters)==null?void 0:$i.docs,source:{originalSource:`args => <>
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
  </>`,...(Hi=(qi=$t.parameters)==null?void 0:qi.docs)==null?void 0:Hi.source}}};var Wi,Bi,Gi;qt.parameters={...qt.parameters,docs:{...(Wi=qt.parameters)==null?void 0:Wi.docs,source:{originalSource:`args => <>
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
  </>`,...(Gi=(Bi=qt.parameters)==null?void 0:Bi.docs)==null?void 0:Gi.source}}};var Yi,Xi,Vi;Ht.parameters={...Ht.parameters,docs:{...(Yi=Ht.parameters)==null?void 0:Yi.docs,source:{originalSource:`args => <>
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
  </>`,...(Vi=(Xi=Ht.parameters)==null?void 0:Xi.docs)==null?void 0:Vi.source}}};var Ki,Zi,Qi;Wt.parameters={...Wt.parameters,docs:{...(Ki=Wt.parameters)==null?void 0:Ki.docs,source:{originalSource:`args => <>
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
  </>`,...(Qi=(Zi=Wt.parameters)==null?void 0:Zi.docs)==null?void 0:Qi.source}}};var Ji,eo,to;Bt.parameters={...Bt.parameters,docs:{...(Ji=Bt.parameters)==null?void 0:Ji.docs,source:{originalSource:`args => <>
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
  </>`,...(to=(eo=Bt.parameters)==null?void 0:eo.docs)==null?void 0:to.source}}};var no,ro,ao;Gt.parameters={...Gt.parameters,docs:{...(no=Gt.parameters)==null?void 0:no.docs,source:{originalSource:`args => <>
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
  </>`,...(ao=(ro=Gt.parameters)==null?void 0:ro.docs)==null?void 0:ao.source}}};var io,oo,so;Yt.parameters={...Yt.parameters,docs:{...(io=Yt.parameters)==null?void 0:io.docs,source:{originalSource:`args => <>
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
  </>`,...(so=(oo=Yt.parameters)==null?void 0:oo.docs)==null?void 0:so.source}}};var lo,co,uo;Xt.parameters={...Xt.parameters,docs:{...(lo=Xt.parameters)==null?void 0:lo.docs,source:{originalSource:`args => {
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
}`,...(uo=(co=Xt.parameters)==null?void 0:co.docs)==null?void 0:uo.source}}};const dd=["Default","Empty","NoNavigation","NoNavigationWithButtons","BreakpointXL","WithMobileNavTree","WithButtons","WithMenuColumns","ExpandOnHover","Partner","AnimatedTitle"];export{Xt as AnimatedTitle,qt as BreakpointXL,jt as Default,zt as Empty,Gt as ExpandOnHover,Ut as NoNavigation,$t as NoNavigationWithButtons,Yt as Partner,Wt as WithButtons,Bt as WithMenuColumns,Ht as WithMobileNavTree,dd as __namedExportsOrder,fd as default};
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
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
