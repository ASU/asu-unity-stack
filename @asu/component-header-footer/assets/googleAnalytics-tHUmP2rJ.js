import{r as Rt,R as Tt}from"./index-B2SEcK1p.js";import{g as Ja}from"./_commonjsHelpers-B3tUAs5q.js";var eo={exports:{}},sn={};var mi=Rt,pi=Symbol.for("react.element"),di=Symbol.for("react.fragment"),hi=Object.prototype.hasOwnProperty,gi=mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yi={key:!0,ref:!0,__self:!0,__source:!0};function to(e,t,n){var r,a={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)hi.call(t,r)&&!yi.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:pi,type:e,key:o,ref:i,props:a,_owner:gi.current}}sn.Fragment=di;sn.jsx=to;sn.jsxs=to;eo.exports=sn;var vi=eo.exports,no={exports:{}},bi="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ai=bi,Si=Ai;function ro(){}function ao(){}ao.resetWarningCache=ro;var Ei=function(){function e(r,a,o,i,l,f){if(f!==Si){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ao,resetWarningCache:ro};return n.PropTypes=n,n};no.exports=Ei();var Ti=no.exports;const m=Ja(Ti);function sf({packageName:e="",component:t="",type:n="",configuration:r={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}}const ia={alt:m.string,title:m.string,src:m.string,mobileSrc:m.string,brandLink:m.string},zn={baseUrl:m.string,parentOrg:m.string,parentOrgUrl:m.string,animate:m.bool},Wt={loggedIn:m.bool,loginLink:m.string,logoutLink:m.string,userName:m.string},xr={text:m.string.isRequired,color:m.oneOf(["gold","maroon","light","dark"]),href:m.string.isRequired,classes:m.string,onClick:m.func,onFocus:m.func},sa=m.shape({id:m.number,href:m.string,text:m.string,type:m.string,selected:m.bool,items:m.arrayOf(m.arrayOf(m.object)),buttons:m.arrayOf(m.shape(xr)),class:m.string}),lf={isPartner:m.bool,navTree:m.arrayOf(sa),partnerLogo:m.shape(ia),logo:m.shape(ia),title:m.string,parentOrg:zn.parentOrg,parentOrgUrl:zn.parentOrgUrl,baseUrl:zn.baseUrl,loggedIn:Wt.loggedIn,userName:Wt.userName,loginLink:Wt.loginLink,onLoginClick:m.func,logoutLink:Wt.logoutLink,onLogoutClick:m.func,buttons:m.arrayOf(m.shape(xr)),breakpoint:m.oneOf(["Lg","Xl"]),animateTitle:m.bool,expandOnHover:m.bool,mobileNavTree:m.arrayOf(sa),hasNavigation:m.bool,searchUrl:m.string,site:m.string,renderDiv:m.oneOf(["true","false"])};var oo={exports:{}},Y={};var _r=Symbol.for("react.transitional.element"),wr=Symbol.for("react.portal"),ln=Symbol.for("react.fragment"),cn=Symbol.for("react.strict_mode"),fn=Symbol.for("react.profiler"),un=Symbol.for("react.consumer"),mn=Symbol.for("react.context"),pn=Symbol.for("react.forward_ref"),dn=Symbol.for("react.suspense"),hn=Symbol.for("react.suspense_list"),gn=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),xi=Symbol.for("react.offscreen"),_i=Symbol.for("react.client.reference");function Ce(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _r:switch(e=e.type,e){case ln:case fn:case cn:case dn:case hn:return e;default:switch(e=e&&e.$$typeof,e){case mn:case pn:case yn:case gn:return e;case un:return e;default:return t}}case wr:return t}}}Y.ContextConsumer=un;Y.ContextProvider=mn;Y.Element=_r;Y.ForwardRef=pn;Y.Fragment=ln;Y.Lazy=yn;Y.Memo=gn;Y.Portal=wr;Y.Profiler=fn;Y.StrictMode=cn;Y.Suspense=dn;Y.SuspenseList=hn;Y.isContextConsumer=function(e){return Ce(e)===un};Y.isContextProvider=function(e){return Ce(e)===mn};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_r};Y.isForwardRef=function(e){return Ce(e)===pn};Y.isFragment=function(e){return Ce(e)===ln};Y.isLazy=function(e){return Ce(e)===yn};Y.isMemo=function(e){return Ce(e)===gn};Y.isPortal=function(e){return Ce(e)===wr};Y.isProfiler=function(e){return Ce(e)===fn};Y.isStrictMode=function(e){return Ce(e)===cn};Y.isSuspense=function(e){return Ce(e)===dn};Y.isSuspenseList=function(e){return Ce(e)===hn};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ln||e===fn||e===cn||e===dn||e===hn||e===xi||typeof e=="object"&&e!==null&&(e.$$typeof===yn||e.$$typeof===gn||e.$$typeof===mn||e.$$typeof===un||e.$$typeof===pn||e.$$typeof===_i||e.getModuleId!==void 0)};Y.typeOf=Ce;oo.exports=Y;var io=oo.exports;function wi(e){function t(E,d,A,T,c){for(var O=0,h=0,G=0,U=0,j,I,ee=0,Q=0,z,V=z=j=0,$=0,J=0,xe=0,Z=0,Ue=A.length,qe=Ue-1,ge,C="",B="",je="",Ie="",ue;$<Ue;){if(I=A.charCodeAt($),$===qe&&h+U+G+O!==0&&(h!==0&&(I=h===47?10:47),U=G=O=0,Ue++,qe++),h+U+G+O===0){if($===qe&&(0<J&&(C=C.replace(x,"")),0<C.trim().length)){switch(I){case 32:case 9:case 59:case 13:case 10:break;default:C+=A.charAt($)}I=59}switch(I){case 123:for(C=C.trim(),j=C.charCodeAt(0),z=1,Z=++$;$<Ue;){switch(I=A.charCodeAt($)){case 123:z++;break;case 125:z--;break;case 47:switch(I=A.charCodeAt($+1)){case 42:case 47:e:{for(V=$+1;V<qe;++V)switch(A.charCodeAt(V)){case 47:if(I===42&&A.charCodeAt(V-1)===42&&$+2!==V){$=V+1;break e}break;case 10:if(I===47){$=V+1;break e}}$=V}}break;case 91:I++;case 40:I++;case 34:case 39:for(;$++<qe&&A.charCodeAt($)!==I;);}if(z===0)break;$++}switch(z=A.substring(Z,$),j===0&&(j=(C=C.replace(S,"").trim()).charCodeAt(0)),j){case 64:switch(0<J&&(C=C.replace(x,"")),I=C.charCodeAt(1),I){case 100:case 109:case 115:case 45:J=d;break;default:J=ze}if(z=t(d,J,z,I,c+1),Z=z.length,0<he&&(J=n(ze,C,xe),ue=l(3,z,J,d,K,le,Z,I,c,T),C=J.join(""),ue!==void 0&&(Z=(z=ue.trim()).length)===0&&(I=0,z="")),0<Z)switch(I){case 115:C=C.replace(fe,i);case 100:case 109:case 45:z=C+"{"+z+"}";break;case 107:C=C.replace(_,"$1 $2"),z=C+"{"+z+"}",z=ne===1||ne===2&&o("@"+z,3)?"@-webkit-"+z+"@"+z:"@"+z;break;default:z=C+z,T===112&&(z=(B+=z,""))}else z="";break;default:z=t(d,n(d,C,xe),z,T,c+1)}je+=z,z=xe=J=V=j=0,C="",I=A.charCodeAt(++$);break;case 125:case 59:if(C=(0<J?C.replace(x,""):C).trim(),1<(Z=C.length))switch(V===0&&(j=C.charCodeAt(0),j===45||96<j&&123>j)&&(Z=(C=C.replace(" ",":")).length),0<he&&(ue=l(1,C,d,E,K,le,B.length,T,c,T))!==void 0&&(Z=(C=ue.trim()).length)===0&&(C="\0\0"),j=C.charCodeAt(0),I=C.charCodeAt(1),j){case 0:break;case 64:if(I===105||I===99){Ie+=C+A.charAt($);break}default:C.charCodeAt(Z-1)!==58&&(B+=a(C,j,I,C.charCodeAt(2)))}xe=J=V=j=0,C="",I=A.charCodeAt(++$)}}switch(I){case 13:case 10:h===47?h=0:1+j===0&&T!==107&&0<C.length&&(J=1,C+="\0"),0<he*$e&&l(0,C,d,E,K,le,B.length,T,c,T),le=1,K++;break;case 59:case 125:if(h+U+G+O===0){le++;break}default:switch(le++,ge=A.charAt($),I){case 9:case 32:if(U+O+h===0)switch(ee){case 44:case 58:case 9:case 32:ge="";break;default:I!==32&&(ge=" ")}break;case 0:ge="\\0";break;case 12:ge="\\f";break;case 11:ge="\\v";break;case 38:U+h+O===0&&(J=xe=1,ge="\f"+ge);break;case 108:if(U+h+O+de===0&&0<V)switch($-V){case 2:ee===112&&A.charCodeAt($-3)===58&&(de=ee);case 8:Q===111&&(de=Q)}break;case 58:U+h+O===0&&(V=$);break;case 44:h+G+U+O===0&&(J=1,ge+="\r");break;case 34:case 39:h===0&&(U=U===I?0:U===0?I:U);break;case 91:U+h+G===0&&O++;break;case 93:U+h+G===0&&O--;break;case 41:U+h+O===0&&G--;break;case 40:if(U+h+O===0){if(j===0)switch(2*ee+3*Q){case 533:break;default:j=1}G++}break;case 64:h+G+U+O+V+z===0&&(z=1);break;case 42:case 47:if(!(0<U+O+G))switch(h){case 0:switch(2*I+3*A.charCodeAt($+1)){case 235:h=47;break;case 220:Z=$,h=42}break;case 42:I===47&&ee===42&&Z+2!==$&&(A.charCodeAt(Z+2)===33&&(B+=A.substring(Z,$+1)),ge="",h=0)}}h===0&&(C+=ge)}Q=ee,ee=I,$++}if(Z=B.length,0<Z){if(J=d,0<he&&(ue=l(2,B,J,E,K,le,Z,T,c,T),ue!==void 0&&(B=ue).length===0))return Ie+B+je;if(B=J.join(",")+"{"+B+"}",ne*de!==0){switch(ne!==2||o(B,2)||(de=0),de){case 111:B=B.replace(N,":-moz-$1")+B;break;case 112:B=B.replace(D,"::-webkit-input-$1")+B.replace(D,"::-moz-$1")+B.replace(D,":-ms-input-$1")+B}de=0}}return Ie+B+je}function n(E,d,A){var T=d.trim().split(b);d=T;var c=T.length,O=E.length;switch(O){case 0:case 1:var h=0;for(E=O===0?"":E[0]+" ";h<c;++h)d[h]=r(E,d[h],A).trim();break;default:var G=h=0;for(d=[];h<c;++h)for(var U=0;U<O;++U)d[G++]=r(E[U]+" ",T[h],A).trim()}return d}function r(E,d,A){var T=d.charCodeAt(0);switch(33>T&&(T=(d=d.trim()).charCodeAt(0)),T){case 38:return d.replace(P,"$1"+E.trim());case 58:return E.trim()+d.replace(P,"$1"+E.trim());default:if(0<1*A&&0<d.indexOf("\f"))return d.replace(P,(E.charCodeAt(0)===58?"":"$1")+E.trim())}return E+d}function a(E,d,A,T){var c=E+";",O=2*d+3*A+4*T;if(O===944){E=c.indexOf(":",9)+1;var h=c.substring(E,c.length-1).trim();return h=c.substring(0,E).trim()+h+";",ne===1||ne===2&&o(h,1)?"-webkit-"+h+h:h}if(ne===0||ne===2&&!o(c,1))return c;switch(O){case 1015:return c.charCodeAt(10)===97?"-webkit-"+c+c:c;case 951:return c.charCodeAt(3)===116?"-webkit-"+c+c:c;case 963:return c.charCodeAt(5)===110?"-webkit-"+c+c:c;case 1009:if(c.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+c+c;case 978:return"-webkit-"+c+"-moz-"+c+c;case 1019:case 983:return"-webkit-"+c+"-moz-"+c+"-ms-"+c+c;case 883:if(c.charCodeAt(8)===45)return"-webkit-"+c+c;if(0<c.indexOf("image-set(",11))return c.replace(Ve,"$1-webkit-$2")+c;break;case 932:if(c.charCodeAt(4)===45)switch(c.charCodeAt(5)){case 103:return"-webkit-box-"+c.replace("-grow","")+"-webkit-"+c+"-ms-"+c.replace("grow","positive")+c;case 115:return"-webkit-"+c+"-ms-"+c.replace("shrink","negative")+c;case 98:return"-webkit-"+c+"-ms-"+c.replace("basis","preferred-size")+c}return"-webkit-"+c+"-ms-"+c+c;case 964:return"-webkit-"+c+"-ms-flex-"+c+c;case 1023:if(c.charCodeAt(8)!==99)break;return h=c.substring(c.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+h+"-webkit-"+c+"-ms-flex-pack"+h+c;case 1005:return k.test(c)?c.replace(L,":-webkit-")+c.replace(L,":-moz-")+c:c;case 1e3:switch(h=c.substring(13).trim(),d=h.indexOf("-")+1,h.charCodeAt(0)+h.charCodeAt(d)){case 226:h=c.replace(F,"tb");break;case 232:h=c.replace(F,"tb-rl");break;case 220:h=c.replace(F,"lr");break;default:return c}return"-webkit-"+c+"-ms-"+h+c;case 1017:if(c.indexOf("sticky",9)===-1)break;case 975:switch(d=(c=E).length-10,h=(c.charCodeAt(d)===33?c.substring(0,d):c).substring(E.indexOf(":",7)+1).trim(),O=h.charCodeAt(0)+(h.charCodeAt(7)|0)){case 203:if(111>h.charCodeAt(8))break;case 115:c=c.replace(h,"-webkit-"+h)+";"+c;break;case 207:case 102:c=c.replace(h,"-webkit-"+(102<O?"inline-":"")+"box")+";"+c.replace(h,"-webkit-"+h)+";"+c.replace(h,"-ms-"+h+"box")+";"+c}return c+";";case 938:if(c.charCodeAt(5)===45)switch(c.charCodeAt(6)){case 105:return h=c.replace("-items",""),"-webkit-"+c+"-webkit-box-"+h+"-ms-flex-"+h+c;case 115:return"-webkit-"+c+"-ms-flex-item-"+c.replace(se,"")+c;default:return"-webkit-"+c+"-ms-flex-line-pack"+c.replace("align-content","").replace(se,"")+c}break;case 973:case 989:if(c.charCodeAt(3)!==45||c.charCodeAt(4)===122)break;case 931:case 953:if(Re.test(E)===!0)return(h=E.substring(E.indexOf(":")+1)).charCodeAt(0)===115?a(E.replace("stretch","fill-available"),d,A,T).replace(":fill-available",":stretch"):c.replace(h,"-webkit-"+h)+c.replace(h,"-moz-"+h.replace("fill-",""))+c;break;case 962:if(c="-webkit-"+c+(c.charCodeAt(5)===102?"-ms-"+c:"")+c,A+T===211&&c.charCodeAt(13)===105&&0<c.indexOf("transform",10))return c.substring(0,c.indexOf(";",27)+1).replace(R,"$1-webkit-$2")+c}return c}function o(E,d){var A=E.indexOf(d===1?":":"{"),T=E.substring(0,d!==3?A:10);return A=E.substring(A+1,E.length-1),rt(d!==2?T:T.replace(Te,"$1"),A,d)}function i(E,d){var A=a(d,d.charCodeAt(0),d.charCodeAt(1),d.charCodeAt(2));return A!==d+";"?A.replace(pe," or ($1)").substring(4):"("+d+")"}function l(E,d,A,T,c,O,h,G,U,j){for(var I=0,ee=d,Q;I<he;++I)switch(Q=ve[I].call(g,E,ee,A,T,c,O,h,G,U,j)){case void 0:case!1:case!0:case null:break;default:ee=Q}if(ee!==d)return ee}function f(E){switch(E){case void 0:case null:he=ve.length=0;break;default:if(typeof E=="function")ve[he++]=E;else if(typeof E=="object")for(var d=0,A=E.length;d<A;++d)f(E[d]);else $e=!!E|0}return f}function u(E){return E=E.prefix,E!==void 0&&(rt=null,E?typeof E!="function"?ne=1:(ne=2,rt=E):ne=0),u}function g(E,d){var A=E;if(33>A.charCodeAt(0)&&(A=A.trim()),at=A,A=[at],0<he){var T=l(-1,d,A,A,K,le,0,0,0,0);T!==void 0&&typeof T=="string"&&(d=T)}var c=t(ze,A,d,0,0);return 0<he&&(T=l(-2,c,A,A,K,le,c.length,0,0,0),T!==void 0&&(c=T)),at="",de=0,le=K=1,c}var S=/^\0+/g,x=/[\0\r\f]/g,L=/: */g,k=/zoo|gra/,R=/([,: ])(transform)/g,b=/,\r+?/g,P=/([\t\r\n ])*\f?&/g,_=/@(k\w+)\s*(\S*)\s*/,D=/::(place)/g,N=/:(read-only)/g,F=/[svh]\w+-[tblr]{2}/,fe=/\(\s*(.*)\s*\)/g,pe=/([\s\S]*?);/g,se=/-self|flex-/g,Te=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Re=/stretch|:\s*\w+\-(?:conte|avail)/,Ve=/([^-])(image-set\()/,le=1,K=1,de=0,ne=1,ze=[],ve=[],he=0,rt=null,$e=0,at="";return g.use=f,g.set=u,e!==void 0&&u(e),g}var Oi={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ki(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ci=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,la=ki(function(e){return Ci.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),so={exports:{}},W={};var ae=typeof Symbol=="function"&&Symbol.for,Or=ae?Symbol.for("react.element"):60103,kr=ae?Symbol.for("react.portal"):60106,vn=ae?Symbol.for("react.fragment"):60107,bn=ae?Symbol.for("react.strict_mode"):60108,An=ae?Symbol.for("react.profiler"):60114,Sn=ae?Symbol.for("react.provider"):60109,En=ae?Symbol.for("react.context"):60110,Cr=ae?Symbol.for("react.async_mode"):60111,Tn=ae?Symbol.for("react.concurrent_mode"):60111,xn=ae?Symbol.for("react.forward_ref"):60112,_n=ae?Symbol.for("react.suspense"):60113,Pi=ae?Symbol.for("react.suspense_list"):60120,wn=ae?Symbol.for("react.memo"):60115,On=ae?Symbol.for("react.lazy"):60116,Ni=ae?Symbol.for("react.block"):60121,Ri=ae?Symbol.for("react.fundamental"):60117,Ii=ae?Symbol.for("react.responder"):60118,Li=ae?Symbol.for("react.scope"):60119;function Se(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Or:switch(e=e.type,e){case Cr:case Tn:case vn:case An:case bn:case _n:return e;default:switch(e=e&&e.$$typeof,e){case En:case xn:case On:case wn:case Sn:return e;default:return t}}case kr:return t}}}function lo(e){return Se(e)===Tn}W.AsyncMode=Cr;W.ConcurrentMode=Tn;W.ContextConsumer=En;W.ContextProvider=Sn;W.Element=Or;W.ForwardRef=xn;W.Fragment=vn;W.Lazy=On;W.Memo=wn;W.Portal=kr;W.Profiler=An;W.StrictMode=bn;W.Suspense=_n;W.isAsyncMode=function(e){return lo(e)||Se(e)===Cr};W.isConcurrentMode=lo;W.isContextConsumer=function(e){return Se(e)===En};W.isContextProvider=function(e){return Se(e)===Sn};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Or};W.isForwardRef=function(e){return Se(e)===xn};W.isFragment=function(e){return Se(e)===vn};W.isLazy=function(e){return Se(e)===On};W.isMemo=function(e){return Se(e)===wn};W.isPortal=function(e){return Se(e)===kr};W.isProfiler=function(e){return Se(e)===An};W.isStrictMode=function(e){return Se(e)===bn};W.isSuspense=function(e){return Se(e)===_n};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===vn||e===Tn||e===An||e===bn||e===_n||e===Pi||typeof e=="object"&&e!==null&&(e.$$typeof===On||e.$$typeof===wn||e.$$typeof===Sn||e.$$typeof===En||e.$$typeof===xn||e.$$typeof===Ri||e.$$typeof===Ii||e.$$typeof===Li||e.$$typeof===Ni)};W.typeOf=Se;so.exports=W;var Mi=so.exports,Pr=Mi,Di={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fi={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zi={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},co={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nr={};Nr[Pr.ForwardRef]=zi;Nr[Pr.Memo]=co;function ca(e){return Pr.isMemo(e)?co:Nr[e.$$typeof]||Di}var $i=Object.defineProperty,Ui=Object.getOwnPropertyNames,fa=Object.getOwnPropertySymbols,ji=Object.getOwnPropertyDescriptor,Hi=Object.getPrototypeOf,ua=Object.prototype;function fo(e,t,n){if(typeof t!="string"){if(ua){var r=Hi(t);r&&r!==ua&&fo(e,r,n)}var a=Ui(t);fa&&(a=a.concat(fa(t)));for(var o=ca(e),i=ca(t),l=0;l<a.length;++l){var f=a[l];if(!Fi[f]&&!(n&&n[f])&&!(i&&i[f])&&!(o&&o[f])){var u=ji(t,f);try{$i(e,f,u)}catch{}}}}return e}var Wi=fo;const Yi=Ja(Wi);var uo={env:{NODE_ENV:"production"}},we={};function Ye(){return(Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ma=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},Jn=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!io.typeOf(e)},en=Object.freeze([]),Je=Object.freeze({});function It(e){return typeof e=="function"}function pa(e){return e.displayName||e.name||"Component"}function Rr(e){return e&&typeof e.styledComponentId=="string"}var bt=typeof uo<"u"&&we!==void 0&&(we.REACT_APP_SC_ATTR||we.SC_ATTR)||"data-styled",Ir=typeof window<"u"&&"HTMLElement"in window,Gi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof uo<"u"&&we!==void 0&&(we.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&we.REACT_APP_SC_DISABLE_SPEEDY!==""?we.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&we.REACT_APP_SC_DISABLE_SPEEDY:we.SC_DISABLE_SPEEDY!==void 0&&we.SC_DISABLE_SPEEDY!==""&&we.SC_DISABLE_SPEEDY!=="false"&&we.SC_DISABLE_SPEEDY));function Dt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Bi=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,i=o;n>=i;)(i<<=1)<0&&Dt(16,""+n);this.groupSizes=new Uint32Array(i),this.groupSizes.set(a),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var f=this.indexOfGroup(n+1),u=0,g=r.length;u<g;u++)this.tag.insertRule(f,r[u])&&(this.groupSizes[n]++,f++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),o=a+r;this.groupSizes[n]=0;for(var i=a;i<o;i++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],o=this.indexOfGroup(n),i=o+a,l=o;l<i;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),qt=new Map,tn=new Map,Ct=1,Yt=function(e){if(qt.has(e))return qt.get(e);for(;tn.has(Ct);)Ct++;var t=Ct++;return qt.set(e,t),tn.set(t,e),t},Xi=function(e){return tn.get(e)},Vi=function(e,t){t>=Ct&&(Ct=t+1),qt.set(e,t),tn.set(t,e)},qi="style["+bt+'][data-styled-version="5.3.11"]',Ki=new RegExp("^"+bt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Zi=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},Qi=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,o=n.length;a<o;a++){var i=n[a].trim();if(i){var l=i.match(Ki);if(l){var f=0|parseInt(l[1],10),u=l[2];f!==0&&(Vi(u,f),Zi(e,u,l[3]),e.getTag().insertRules(f,r)),r.length=0}else r.push(i)}}},Ji=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},mo=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){for(var f=l.childNodes,u=f.length;u>=0;u--){var g=f[u];if(g&&g.nodeType===1&&g.hasAttribute(bt))return g}}(n),o=a!==void 0?a.nextSibling:null;r.setAttribute(bt,"active"),r.setAttribute("data-styled-version","5.3.11");var i=Ji();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},es=function(){function e(n){var r=this.element=mo(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var o=document.styleSheets,i=0,l=o.length;i<l;i++){var f=o[i];if(f.ownerNode===a)return f}Dt(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),ts=function(){function e(n){var r=this.element=mo(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(a,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),ns=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),da=Ir,rs={isServer:!Ir,useCSSOMInjection:!Gi},po=function(){function e(n,r,a){n===void 0&&(n=Je),r===void 0&&(r={}),this.options=Ye({},rs,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&Ir&&da&&(da=!1,function(o){for(var i=document.querySelectorAll(qi),l=0,f=i.length;l<f;l++){var u=i[l];u&&u.getAttribute(bt)!=="active"&&(Qi(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Yt(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ye({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,o=r.useCSSOMInjection,i=r.target,n=a?new ns(i):o?new es(i):new ts(i),new Bi(n)));var n,r,a,o,i},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Yt(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(Yt(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Yt(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,o="",i=0;i<a;i++){var l=Xi(i);if(l!==void 0){var f=n.names.get(l),u=r.getGroup(i);if(f&&u&&f.size){var g=bt+".g"+i+'[id="'+l+'"]',S="";f!==void 0&&f.forEach(function(x){x.length>0&&(S+=x+",")}),o+=""+u+g+'{content:"'+S+`"}/*!sc*/
`}}}return o}(this)},e}(),as=/(a)(d)/gi,ha=function(e){return String.fromCharCode(e+(e>25?39:97))};function er(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ha(t%52)+n;return(ha(t%52)+n).replace(as,"$1-$2")}var ht=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ho=function(e){return ht(5381,e)};function os(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(It(n)&&!Rr(n))return!1}return!0}var is=ho("5.3.11"),ss=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&os(t),this.componentId=n,this.baseHash=ht(is,n),this.baseStyle=r,po.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))o.push(this.staticRulesId);else{var i=At(this.rules,t,n,r).join(""),l=er(ht(this.baseHash,i)>>>0);if(!n.hasNameForId(a,l)){var f=r(i,"."+l,void 0,a);n.insertRules(a,l,f)}o.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,g=ht(this.baseHash,r.hash),S="",x=0;x<u;x++){var L=this.rules[x];if(typeof L=="string")S+=L;else if(L){var k=At(L,t,n,r),R=Array.isArray(k)?k.join(""):k;g=ht(g,R+x),S+=R}}if(S){var b=er(g>>>0);if(!n.hasNameForId(a,b)){var P=r(S,"."+b,void 0,a);n.insertRules(a,b,P)}o.push(b)}}return o.join(" ")},e}(),ls=/^\s*\/\/.*$/gm,cs=[":","[",".","#"];function fs(e){var t,n,r,a,o=Je,i=o.options,l=i===void 0?Je:i,f=o.plugins,u=f===void 0?en:f,g=new wi(l),S=[],x=function(R){function b(P){if(P)try{R(P+"}")}catch{}}return function(P,_,D,N,F,fe,pe,se,Te,Re){switch(P){case 1:if(Te===0&&_.charCodeAt(0)===64)return R(_+";"),"";break;case 2:if(se===0)return _+"/*|*/";break;case 3:switch(se){case 102:case 112:return R(D[0]+_),"";default:return _+(Re===0?"/*|*/":"")}case-2:_.split("/*|*/}").forEach(b)}}}(function(R){S.push(R)}),L=function(R,b,P){return b===0&&cs.indexOf(P[n.length])!==-1||P.match(a)?R:"."+t};function k(R,b,P,_){_===void 0&&(_="&");var D=R.replace(ls,""),N=b&&P?P+" "+b+" { "+D+" }":D;return t=_,n=b,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),g(P||!b?"":b,N)}return g.use([].concat(u,[function(R,b,P){R===2&&P.length&&P[0].lastIndexOf(n)>0&&(P[0]=P[0].replace(r,L))},x,function(R){if(R===-2){var b=S;return S=[],b}}])),k.hash=u.length?u.reduce(function(R,b){return b.name||Dt(15),ht(R,b.name)},5381).toString():"",k}var go=Tt.createContext();go.Consumer;var yo=Tt.createContext(),us=(yo.Consumer,new po),tr=fs();function ms(){return Rt.useContext(go)||us}function ps(){return Rt.useContext(yo)||tr}var ds=function(){function e(t,n){var r=this;this.inject=function(a,o){o===void 0&&(o=tr);var i=r.name+o.hash;a.hasNameForId(r.id,i)||a.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.toString=function(){return Dt(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=tr),this.name+t.hash},e}(),hs=/([A-Z])/,gs=/([A-Z])/g,ys=/^ms-/,vs=function(e){return"-"+e.toLowerCase()};function ga(e){return hs.test(e)?e.replace(gs,vs).replace(ys,"-ms-"):e}var ya=function(e){return e==null||e===!1||e===""};function At(e,t,n,r){if(Array.isArray(e)){for(var a,o=[],i=0,l=e.length;i<l;i+=1)(a=At(e[i],t,n,r))!==""&&(Array.isArray(a)?o.push.apply(o,a):o.push(a));return o}if(ya(e))return"";if(Rr(e))return"."+e.styledComponentId;if(It(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var f=e(t);return At(f,t,n,r)}var u;return e instanceof ds?n?(e.inject(n,r),e.getName(r)):e:Jn(e)?function g(S,x){var L,k,R=[];for(var b in S)S.hasOwnProperty(b)&&!ya(S[b])&&(Array.isArray(S[b])&&S[b].isCss||It(S[b])?R.push(ga(b)+":",S[b],";"):Jn(S[b])?R.push.apply(R,g(S[b],b)):R.push(ga(b)+": "+(L=b,(k=S[b])==null||typeof k=="boolean"||k===""?"":typeof k!="number"||k===0||L in Oi||L.startsWith("--")?String(k).trim():k+"px")+";"));return x?[x+" {"].concat(R,["}"]):R}(e):e.toString()}var va=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function bs(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return It(e)||Jn(e)?va(At(ma(en,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:va(At(ma(e,n)))}var As=function(e,t,n){return n===void 0&&(n=Je),e.theme!==n.theme&&e.theme||t||n.theme},Ss=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Es=/(^-|-$)/g;function $n(e){return e.replace(Ss,"-").replace(Es,"")}var Ts=function(e){return er(ho(e)>>>0)};function Gt(e){return typeof e=="string"&&!0}var nr=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},xs=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function _s(e,t,n){var r=e[n];nr(t)&&nr(r)?vo(r,t):e[n]=t}function vo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,o=n;a<o.length;a++){var i=o[a];if(nr(i))for(var l in i)xs(l)&&_s(e,i[l],l)}return e}var bo=Tt.createContext();bo.Consumer;var Un={};function Ao(e,t,n){var r=Rr(e),a=!Gt(e),o=t.attrs,i=o===void 0?en:o,l=t.componentId,f=l===void 0?function(_,D){var N=typeof _!="string"?"sc":$n(_);Un[N]=(Un[N]||0)+1;var F=N+"-"+Ts("5.3.11"+N+Un[N]);return D?D+"-"+F:F}(t.displayName,t.parentComponentId):l,u=t.displayName,g=u===void 0?function(_){return Gt(_)?"styled."+_:"Styled("+pa(_)+")"}(e):u,S=t.displayName&&t.componentId?$n(t.displayName)+"-"+t.componentId:t.componentId||f,x=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,L=t.shouldForwardProp;r&&e.shouldForwardProp&&(L=t.shouldForwardProp?function(_,D,N){return e.shouldForwardProp(_,D,N)&&t.shouldForwardProp(_,D,N)}:e.shouldForwardProp);var k,R=new ss(n,S,r?e.componentStyle:void 0),b=R.isStatic&&i.length===0,P=function(_,D){return function(N,F,fe,pe){var se=N.attrs,Te=N.componentStyle,Re=N.defaultProps,Ve=N.foldedComponentIds,le=N.shouldForwardProp,K=N.styledComponentId,de=N.target,ne=function(T,c,O){T===void 0&&(T=Je);var h=Ye({},c,{theme:T}),G={};return O.forEach(function(U){var j,I,ee,Q=U;for(j in It(Q)&&(Q=Q(h)),Q)h[j]=G[j]=j==="className"?(I=G[j],ee=Q[j],I&&ee?I+" "+ee:I||ee):Q[j]}),[h,G]}(As(F,Rt.useContext(bo),Re)||Je,F,se),ze=ne[0],ve=ne[1],he=function(T,c,O,h){var G=ms(),U=ps(),j=c?T.generateAndInjectStyles(Je,G,U):T.generateAndInjectStyles(O,G,U);return j}(Te,pe,ze),rt=fe,$e=ve.$as||F.$as||ve.as||F.as||de,at=Gt($e),E=ve!==F?Ye({},F,{},ve):F,d={};for(var A in E)A[0]!=="$"&&A!=="as"&&(A==="forwardedAs"?d.as=E[A]:(le?le(A,la,$e):!at||la(A))&&(d[A]=E[A]));return F.style&&ve.style!==F.style&&(d.style=Ye({},F.style,{},ve.style)),d.className=Array.prototype.concat(Ve,K,he!==K?he:null,F.className,ve.className).filter(Boolean).join(" "),d.ref=rt,Rt.createElement($e,d)}(k,_,D,b)};return P.displayName=g,(k=Tt.forwardRef(P)).attrs=x,k.componentStyle=R,k.displayName=g,k.shouldForwardProp=L,k.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):en,k.styledComponentId=S,k.target=r?e.target:e,k.withComponent=function(_){var D=t.componentId,N=function(fe,pe){if(fe==null)return{};var se,Te,Re={},Ve=Object.keys(fe);for(Te=0;Te<Ve.length;Te++)se=Ve[Te],pe.indexOf(se)>=0||(Re[se]=fe[se]);return Re}(t,["componentId"]),F=D&&D+"-"+(Gt(_)?_:$n(pa(_)));return Ao(_,Ye({},N,{attrs:x,componentId:F}),n)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=r?vo({},e.defaultProps,_):_}}),Object.defineProperty(k,"toString",{value:function(){return"."+k.styledComponentId}}),a&&Yi(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),k}var rr=function(e){return function t(n,r,a){if(a===void 0&&(a=Je),!io.isValidElementType(r))return Dt(1,String(r));var o=function(){return n(r,a,bs.apply(void 0,arguments))};return o.withConfig=function(i){return t(n,r,Ye({},a,{},i))},o.attrs=function(i){return t(n,r,Ye({},a,{attrs:Array.prototype.concat(a.attrs,i).filter(Boolean)}))},o}(Ao,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){rr[e]=rr(e)});const ws=rr.a`
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
`,So=({href:e,color:t,text:n,classes:r,onClick:a,onFocus:o})=>vi.jsx(ws,{href:e,className:`button-${t} ${r??""}`,onClick:a,onFocus:o,children:n});So.propTypes={...xr};So.__docgenInfo={description:`@param {ButtonProps} props
@returns {JSX.Element}`,methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!0},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},onFocus:{description:"",type:{name:"func"},required:!1}}};const cf={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Os={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},ff=Os,ks={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},uf=ks,mf={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Cs={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},pf=Cs,ba=()=>{};let Lr={},Eo={},To=null,xo={mark:ba,measure:ba};try{typeof window<"u"&&(Lr=window),typeof document<"u"&&(Eo=document),typeof MutationObserver<"u"&&(To=MutationObserver),typeof performance<"u"&&(xo=performance)}catch{}const{userAgent:Aa=""}=Lr.navigator||{},et=Lr,X=Eo,Sa=To,Bt=xo;et.document;const Xe=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",_o=~Aa.indexOf("MSIE")||~Aa.indexOf("Trident/");var q="classic",wo="duotone",be="sharp",Ae="sharp-duotone",Ps=[q,wo,be,Ae],Ns={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Ea={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Rs=["kit"],Is=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Ls=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ms={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ds={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Fs={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},zs={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},$s={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Us={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Oo={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},js=["solid","regular","light","thin","duotone","brands"],ko=[1,2,3,4,5,6,7,8,9,10],Hs=ko.concat([11,12,13,14,15,16,17,18,19,20]),Ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ws=[...Object.keys(zs),...js,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY].concat(ko.map(e=>"".concat(e,"x"))).concat(Hs.map(e=>"w-".concat(e))),Ys={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Gs={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Bs={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ta={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Ge="___FONT_AWESOME___",ar=16,Co="fa",Po="svg-inline--fa",ut="data-fa-i2svg",or="data-fa-pseudo-element",Xs="data-fa-pseudo-element-pending",Mr="data-prefix",Dr="data-icon",xa="fontawesome-i2svg",Vs="async",qs=["HTML","HEAD","STYLE","SCRIPT"],No=(()=>{try{return!0}catch{return!1}})(),Ro=[q,be,Ae];function Ft(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[q]}})}const Io={...Oo};Io[q]={...Oo[q],...Ea.kit,...Ea["kit-duotone"]};const ct=Ft(Io),ir={...Us};ir[q]={...ir[q],...Ta.kit,...Ta["kit-duotone"]};const Lt=Ft(ir),sr={...$s};sr[q]={...sr[q],...Bs.kit};const ft=Ft(sr),lr={...Fs};lr[q]={...lr[q],...Gs.kit};const Ks=Ft(lr),Zs=Is,Lo="fa-layers-text",Qs=Ls,Js={...Ns};Ft(Js);const el=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],jn=Ot,St=new Set;Object.keys(Lt[q]).map(St.add.bind(St));Object.keys(Lt[be]).map(St.add.bind(St));Object.keys(Lt[Ae]).map(St.add.bind(St));const tl=[...Rs,...Ws],Pt=et.FontAwesomeConfig||{};function nl(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function rl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}X&&typeof X.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=rl(nl(n));a!=null&&(Pt[r]=a)});const Mo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Co,replacementClass:Po,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pt.familyPrefix&&(Pt.cssPrefix=Pt.familyPrefix);const Et={...Mo,...Pt};Et.autoReplaceSvg||(Et.observeMutations=!1);const v={};Object.keys(Mo).forEach(e=>{Object.defineProperty(v,e,{enumerable:!0,set:function(t){Et[e]=t,Nt.forEach(n=>n(v))},get:function(){return Et[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(e){Et.cssPrefix=e,Nt.forEach(t=>t(v))},get:function(){return Et.cssPrefix}});et.FontAwesomeConfig=v;const Nt=[];function al(e){return Nt.push(e),()=>{Nt.splice(Nt.indexOf(e),1)}}const Ke=ar,Me={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ol(e){if(!e||!Xe)return;const t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=X.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return X.head.insertBefore(t,r),e}const il="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Mt(){let e=12,t="";for(;e-- >0;)t+=il[Math.random()*62|0];return t}function xt(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Fr(e){return e.classList?xt(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Do(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function sl(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Do(e[n]),'" '),"").trim()}function kn(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function zr(e){return e.size!==Me.size||e.x!==Me.x||e.y!==Me.y||e.rotate!==Me.rotate||e.flipX||e.flipY}function ll(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:f,path:u}}function cl(e){let{transform:t,width:n=ar,height:r=ar,startCentered:a=!1}=e,o="";return a&&_o?o+="translate(".concat(t.x/Ke-n/2,"em, ").concat(t.y/Ke-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):o+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),o+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var fl=`:root, :host {
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
}`;function Fo(){const e=Co,t=Po,n=v.cssPrefix,r=v.replacementClass;let a=fl;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(r))}return a}let _a=!1;function Hn(){v.autoAddCss&&!_a&&(ol(Fo()),_a=!0)}var ul={mixout(){return{dom:{css:Fo,insertCss:Hn}}},hooks(){return{beforeDOMElementCreation(){Hn()},beforeI2svg(){Hn()}}}};const Be=et||{};Be[Ge]||(Be[Ge]={});Be[Ge].styles||(Be[Ge].styles={});Be[Ge].hooks||(Be[Ge].hooks={});Be[Ge].shims||(Be[Ge].shims=[]);var De=Be[Ge];const zo=[],$o=function(){X.removeEventListener("DOMContentLoaded",$o),nn=1,zo.map(e=>e())};let nn=!1;Xe&&(nn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),nn||X.addEventListener("DOMContentLoaded",$o));function ml(e){Xe&&(nn?setTimeout(e,0):zo.push(e))}function zt(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Do(e):"<".concat(t," ").concat(sl(n),">").concat(r.map(zt).join(""),"</").concat(t,">")}function wa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Wn=function(t,n,r,a){var o=Object.keys(t),i=o.length,l=n,f,u,g;for(r===void 0?(f=1,g=t[o[0]]):(f=0,g=r);f<i;f++)u=o[f],g=l(g,t[u],u,t);return g};function pl(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function cr(e){const t=pl(e);return t.length===1?t[0].toString(16):null}function dl(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Oa(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function fr(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Oa(t);typeof De.hooks.addPack=="function"&&!r?De.hooks.addPack(e,Oa(t)):De.styles[e]={...De.styles[e]||{},...a},e==="fas"&&fr("fa",t)}const{styles:lt,shims:hl}=De,gl={[q]:Object.values(ft[q]),[be]:Object.values(ft[be]),[Ae]:Object.values(ft[Ae])};let $r=null,Uo={},jo={},Ho={},Wo={},Yo={};const yl={[q]:Object.keys(ct[q]),[be]:Object.keys(ct[be]),[Ae]:Object.keys(ct[Ae])};function vl(e){return~tl.indexOf(e)}function bl(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!vl(a)?a:null}const Go=()=>{const e=r=>Wn(lt,(a,o,i)=>(a[i]=Wn(o,r,{}),a),{});Uo=e((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),jo=e((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),Yo=e((r,a,o)=>{const i=a[2];return r[o]=o,i.forEach(l=>{r[l]=o}),r});const t="far"in lt||v.autoFetchSvg,n=Wn(hl,(r,a)=>{const o=a[0];let i=a[1];const l=a[2];return i==="far"&&!t&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:l}),r},{names:{},unicodes:{}});Ho=n.names,Wo=n.unicodes,$r=Cn(v.styleDefault,{family:v.familyDefault})};al(e=>{$r=Cn(e.styleDefault,{family:v.familyDefault})});Go();function Ur(e,t){return(Uo[e]||{})[t]}function Al(e,t){return(jo[e]||{})[t]}function Qe(e,t){return(Yo[e]||{})[t]}function Bo(e){return Ho[e]||{prefix:null,iconName:null}}function Sl(e){const t=Wo[e],n=Ur("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tt(){return $r}const jr=()=>({prefix:null,iconName:null,rest:[]});function Cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=q}=t,r=ct[n][e],a=Lt[n][e]||Lt[n][r],o=e in De.styles?e:null;return a||o||null}const El={[q]:Object.keys(ft[q]),[be]:Object.keys(ft[be]),[Ae]:Object.keys(ft[Ae])};function Pn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[q]:"".concat(v.cssPrefix,"-").concat(q),[be]:"".concat(v.cssPrefix,"-").concat(be),[Ae]:"".concat(v.cssPrefix,"-").concat(Ae)};let a=null,o=q;const i=Ps.filter(f=>f!==wo);i.forEach(f=>{(e.includes(r[f])||e.some(u=>El[f].includes(u)))&&(o=f)});const l=e.reduce((f,u)=>{const g=bl(v.cssPrefix,u);if(lt[u]?(u=gl[o].includes(u)?Ks[o][u]:u,a=u,f.prefix=u):yl[o].indexOf(u)>-1?(a=u,f.prefix=Cn(u,{family:o})):g?f.iconName=g:u!==v.replacementClass&&!i.some(S=>u===r[S])&&f.rest.push(u),!n&&f.prefix&&f.iconName){const S=a==="fa"?Bo(f.iconName):{},x=Qe(f.prefix,f.iconName);S.prefix&&(a=null),f.iconName=S.iconName||x||f.iconName,f.prefix=S.prefix||f.prefix,f.prefix==="far"&&!lt.far&&lt.fas&&!v.autoFetchSvg&&(f.prefix="fas")}return f},jr());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===be&&(lt.fass||v.autoFetchSvg)&&(l.prefix="fass",l.iconName=Qe(l.prefix,l.iconName)||l.iconName),!l.prefix&&o===Ae&&(lt.fasds||v.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Qe(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=tt()||"fas"),l}class Tl{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...a[o]},fr(o,a[o]);const i=ft[q][o];i&&fr(i,a[o]),Go()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:i,icon:l}=r[a],f=l[2];t[o]||(t[o]={}),f.length>0&&f.forEach(u=>{typeof u=="string"&&(t[o][u]=l)}),t[o][i]=l}),t}}let ka=[],gt={};const vt={},xl=Object.keys(vt);function _l(e,t){let{mixoutsTo:n}=t;return ka=e,gt={},Object.keys(vt).forEach(r=>{xl.indexOf(r)===-1&&delete vt[r]}),ka.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(i=>{gt[i]||(gt[i]=[]),gt[i].push(o[i])})}r.provides&&r.provides(vt)}),n}function ur(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(gt[e]||[]).forEach(i=>{t=i.apply(null,[t,...r])}),t}function mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(gt[e]||[]).forEach(o=>{o.apply(null,n)})}function nt(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return vt[e]?vt[e].apply(null,t):void 0}function mr(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||tt();if(t)return t=Qe(n,t)||t,wa(Xo.definitions,n,t)||wa(De.styles,n,t)}const Xo=new Tl,wl=()=>{v.autoReplaceSvg=!1,v.observeMutations=!1,mt("noAuto")},Ol={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xe?(mt("beforeI2svg",e),nt("pseudoElements2svg",e),nt("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,ml(()=>{Cl({autoReplaceSvgRoot:t}),mt("watch",e)})}},kl={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Qe(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Cn(e[0]);return{prefix:n,iconName:Qe(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(v.cssPrefix,"-"))>-1||e.match(Zs))){const t=Pn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||tt(),iconName:Qe(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=tt();return{prefix:t,iconName:Qe(t,e)||e}}}},Ee={noAuto:wl,config:v,dom:Ol,parse:kl,library:Xo,findIconDefinition:mr,toHtml:zt},Cl=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=X}=e;(Object.keys(De.styles).length>0||v.autoFetchSvg)&&Xe&&v.autoReplaceSvg&&Ee.dom.i2svg({node:t})};function Nn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>zt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Xe)return;const n=X.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Pl(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:i}=e;if(zr(i)&&n.found&&!r.found){const{width:l,height:f}=n,u={x:l/f/2,y:.5};a.style=kn({...o,"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")})}return[{tag:"svg",attributes:a,children:t}]}function Nl(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;const i=o===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:i},children:r}]}]}function Hr(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:l,maskId:f,titleId:u,extra:g,watchable:S=!1}=e,{width:x,height:L}=n.found?n:t,k=r==="fak",R=[v.replacementClass,a?"".concat(v.cssPrefix,"-").concat(a):""].filter(F=>g.classes.indexOf(F)===-1).filter(F=>F!==""||!!F).concat(g.classes).join(" ");let b={children:[],attributes:{...g.attributes,"data-prefix":r,"data-icon":a,class:R,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(L)}};const P=k&&!~g.classes.indexOf("fa-fw")?{width:"".concat(x/L*16*.0625,"em")}:{};S&&(b.attributes[ut]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(u||Mt())},children:[l]}),delete b.attributes.title);const _={...b,prefix:r,iconName:a,main:t,mask:n,maskId:f,transform:o,symbol:i,styles:{...P,...g.styles}},{children:D,attributes:N}=n.found&&t.found?nt("generateAbstractMask",_)||{children:[],attributes:{}}:nt("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=D,_.attributes=N,i?Nl(_):Pl(_)}function Ca(e){const{content:t,width:n,height:r,transform:a,title:o,extra:i,watchable:l=!1}=e,f={...i.attributes,...o?{title:o}:{},class:i.classes.join(" ")};l&&(f[ut]="");const u={...i.styles};zr(a)&&(u.transform=cl({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const g=kn(u);g.length>0&&(f.style=g);const S=[];return S.push({tag:"span",attributes:f,children:[t]}),o&&S.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),S}function Rl(e){const{content:t,title:n,extra:r}=e,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=kn(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Yn}=De;function pr(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(jn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(jn.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(jn.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Il={found:!1,width:512,height:512};function Ll(e,t){!No&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function dr(e,t){let n=t;return t==="fa"&&v.styleDefault!==null&&(t=tt()),new Promise((r,a)=>{if(n==="fa"){const o=Bo(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Yn[t]&&Yn[t][e]){const o=Yn[t][e];return r(pr(o))}Ll(e,t),r({...Il,icon:v.showMissingIcons&&e?nt("missingIconAbstract")||{}:{}})})}const Pa=()=>{},hr=v.measurePerformance&&Bt&&Bt.mark&&Bt.measure?Bt:{mark:Pa,measure:Pa},kt='FA "6.6.0"',Ml=e=>(hr.mark("".concat(kt," ").concat(e," begins")),()=>Vo(e)),Vo=e=>{hr.mark("".concat(kt," ").concat(e," ends")),hr.measure("".concat(kt," ").concat(e),"".concat(kt," ").concat(e," begins"),"".concat(kt," ").concat(e," ends"))};var Wr={begin:Ml,end:Vo};const Kt=()=>{};function Na(e){return typeof(e.getAttribute?e.getAttribute(ut):null)=="string"}function Dl(e){const t=e.getAttribute?e.getAttribute(Mr):null,n=e.getAttribute?e.getAttribute(Dr):null;return t&&n}function Fl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function zl(){return v.autoReplaceSvg===!0?Zt.replace:Zt[v.autoReplaceSvg]||Zt.replace}function $l(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Ul(e){return X.createElement(e)}function qo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?$l:Ul}=t;if(typeof e=="string")return X.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(qo(o,{ceFn:n}))}),r}function jl(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Zt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(qo(n),t)}),t.getAttribute(ut)===null&&v.keepOriginalSource){let n=X.createComment(jl(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Fr(t).indexOf(v.replacementClass))return Zt.replace(e);const r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,l)=>(l===v.replacementClass||l.match(r)?i.toSvg.push(l):i.toNode.push(l),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>zt(o)).join(`
`);t.setAttribute(ut,""),t.innerHTML=a}};function Ra(e){e()}function Ko(e,t){const n=typeof t=="function"?t:Kt;if(e.length===0)n();else{let r=Ra;v.mutateApproach===Vs&&(r=et.requestAnimationFrame||Ra),r(()=>{const a=zl(),o=Wr.begin("mutate");e.map(a),o(),n()})}}let Yr=!1;function Zo(){Yr=!0}function gr(){Yr=!1}let rn=null;function Ia(e){if(!Sa||!v.observeMutations)return;const{treeCallback:t=Kt,nodeCallback:n=Kt,pseudoElementsCallback:r=Kt,observeMutationsRoot:a=X}=e;rn=new Sa(o=>{if(Yr)return;const i=tt();xt(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Na(l.addedNodes[0])&&(v.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&v.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Na(l.target)&&~el.indexOf(l.attributeName))if(l.attributeName==="class"&&Dl(l.target)){const{prefix:f,iconName:u}=Pn(Fr(l.target));l.target.setAttribute(Mr,f||i),u&&l.target.setAttribute(Dr,u)}else Fl(l.target)&&n(l.target)})}),Xe&&rn.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Hl(){rn&&rn.disconnect()}function Wl(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const o=a.split(":"),i=o[0],l=o.slice(1);return i&&l.length>0&&(r[i]=l.join(":").trim()),r},{})),n}function Yl(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=Pn(Fr(e));return a.prefix||(a.prefix=tt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Al(a.prefix,e.innerText)||Ur(a.prefix,cr(e.innerText))),!a.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Gl(e){const t=xt(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return v.autoA11y&&(n?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(r||Mt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Bl(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Me,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function La(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Yl(e),o=Gl(e),i=ur("parseNodeAttributes",{},e);let l=t.styleParser?Wl(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Me,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o},...i}}const{styles:Xl}=De;function Qo(e){const t=v.autoReplaceSvg==="nest"?La(e,{styleParser:!1}):La(e);return~t.extra.classes.indexOf(Lo)?nt("generateLayersText",e,t):nt("generateSvgReplacementMutation",e,t)}let Fe=new Set;Ro.map(e=>{Fe.add("fa-".concat(e))});Object.keys(ct[q]).map(Fe.add.bind(Fe));Object.keys(ct[be]).map(Fe.add.bind(Fe));Object.keys(ct[Ae]).map(Fe.add.bind(Fe));Fe=[...Fe];function Ma(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xe)return Promise.resolve();const n=X.documentElement.classList,r=g=>n.add("".concat(xa,"-").concat(g)),a=g=>n.remove("".concat(xa,"-").concat(g)),o=v.autoFetchSvg?Fe:Ro.map(g=>"fa-".concat(g)).concat(Object.keys(Xl));o.includes("fa")||o.push("fa");const i=[".".concat(Lo,":not([").concat(ut,"])")].concat(o.map(g=>".".concat(g,":not([").concat(ut,"])"))).join(", ");if(i.length===0)return Promise.resolve();let l=[];try{l=xt(e.querySelectorAll(i))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();const f=Wr.begin("onTree"),u=l.reduce((g,S)=>{try{const x=Qo(S);x&&g.push(x)}catch(x){No||x.name==="MissingIcon"&&console.error(x)}return g},[]);return new Promise((g,S)=>{Promise.all(u).then(x=>{Ko(x,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),f(),g()})}).catch(x=>{f(),S(x)})})}function Vl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qo(e).then(n=>{n&&Ko([n],t)})}function ql(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:mr(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:mr(a||{})),e(r,{...n,mask:a})}}const Kl=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Me,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:l=null,classes:f=[],attributes:u={},styles:g={}}=t;if(!e)return;const{prefix:S,iconName:x,icon:L}=e;return Nn({type:"icon",...e},()=>(mt("beforeDOMElementCreation",{iconDefinition:e,params:t}),v.autoA11y&&(i?u["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(l||Mt()):(u["aria-hidden"]="true",u.focusable="false")),Hr({icons:{main:pr(L),mask:a?pr(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:x,transform:{...Me,...n},symbol:r,title:i,maskId:o,titleId:l,extra:{attributes:u,styles:g,classes:f}})))};var Zl={mixout(){return{icon:ql(Kl)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Ma,e.nodeCallback=Vl,e}}},provides(e){e.i2svg=function(t){const{node:n=X,callback:r=()=>{}}=t;return Ma(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:o,prefix:i,transform:l,symbol:f,mask:u,maskId:g,extra:S}=n;return new Promise((x,L)=>{Promise.all([dr(r,i),u.iconName?dr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[R,b]=k;x([t,Hr({icons:{main:R,mask:b},prefix:i,iconName:r,transform:l,symbol:f,maskId:g,title:a,titleId:o,extra:S,watchable:!0})])}).catch(L)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:o,styles:i}=t;const l=kn(i);l.length>0&&(r.style=l);let f;return zr(o)&&(f=nt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(f||a.icon),{children:n,attributes:r}}}},Ql={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Nn({type:"layer"},()=>{mt("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Jl={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return Nn({type:"counter",content:e},()=>(mt("beforeDOMElementCreation",{content:e,params:t}),Rl({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(v.cssPrefix,"-layers-counter"),...r]}})))}}}},ec={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Me,title:r=null,classes:a=[],attributes:o={},styles:i={}}=t;return Nn({type:"text",content:e},()=>(mt("beforeDOMElementCreation",{content:e,params:t}),Ca({content:e,transform:{...Me,...n},title:r,extra:{attributes:o,styles:i,classes:["".concat(v.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:o}=n;let i=null,l=null;if(_o){const f=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();i=u.width/f,l=u.height/f}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Ca({content:t.innerHTML,width:i,height:l,transform:a,title:r,extra:o,watchable:!0})])}}};const tc=new RegExp('"',"ug"),Da=[1105920,1112319],Fa={FontAwesome:{normal:"fas",400:"fas"},...Ds,...Ms,...Ys},yr=Object.keys(Fa).reduce((e,t)=>(e[t.toLowerCase()]=Fa[t],e),{}),nc=Object.keys(yr).reduce((e,t)=>{const n=yr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function rc(e){const t=e.replace(tc,""),n=dl(t,0),r=n>=Da[0]&&n<=Da[1],a=t.length===2?t[0]===t[1]:!1;return{value:cr(a?t[0]:t),isSecondary:r||a}}function ac(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(yr[n]||{})[a]||nc[n]}function za(e,t){const n="".concat(Xs).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const i=xt(e.children).filter(x=>x.getAttribute(or)===t)[0],l=et.getComputedStyle(e,t),f=l.getPropertyValue("font-family"),u=f.match(Qs),g=l.getPropertyValue("font-weight"),S=l.getPropertyValue("content");if(i&&!u)return e.removeChild(i),r();if(u&&S!=="none"&&S!==""){const x=l.getPropertyValue("content");let L=ac(f,g);const{value:k,isSecondary:R}=rc(x),b=u[0].startsWith("FontAwesome");let P=Ur(L,k),_=P;if(b){const D=Sl(k);D.iconName&&D.prefix&&(P=D.iconName,L=D.prefix)}if(P&&!R&&(!i||i.getAttribute(Mr)!==L||i.getAttribute(Dr)!==_)){e.setAttribute(n,_),i&&e.removeChild(i);const D=Bl(),{extra:N}=D;N.attributes[or]=t,dr(P,L).then(F=>{const fe=Hr({...D,icons:{main:F,mask:jr()},prefix:L,iconName:_,extra:N,watchable:!0}),pe=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(pe,e.firstChild):e.appendChild(pe),pe.outerHTML=fe.map(se=>zt(se)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function oc(e){return Promise.all([za(e,"::before"),za(e,"::after")])}function ic(e){return e.parentNode!==document.head&&!~qs.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(or)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function $a(e){if(Xe)return new Promise((t,n)=>{const r=xt(e.querySelectorAll("*")).filter(ic).map(oc),a=Wr.begin("searchPseudoElements");Zo(),Promise.all(r).then(()=>{a(),gr(),t()}).catch(()=>{a(),gr(),n()})})}var sc={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=$a,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=X}=t;v.searchPseudoElements&&$a(n)}}};let Ua=!1;var lc={mixout(){return{dom:{unwatch(){Zo(),Ua=!0}}}},hooks(){return{bootstrap(){Ia(ur("mutationObserverCallbacks",{}))},noAuto(){Hl()},watch(e){const{observeMutationsRoot:t}=e;Ua?gr():Ia(ur("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const ja=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var cc={mixout(){return{parse:{transform:e=>ja(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=ja(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:o}=t;const i={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),g={transform:"".concat(l," ").concat(f," ").concat(u)},S={transform:"translate(".concat(o/2*-1," -256)")},x={outer:i,inner:g,path:S};return{tag:"g",attributes:{...x.outer},children:[{tag:"g",attributes:{...x.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...x.path}}]}]}}}};const Gn={x:0,y:0,width:"100%",height:"100%"};function Ha(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function fc(e){return e.tag==="g"?e.children:[e]}var uc={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Pn(n.split(" ").map(a=>a.trim())):jr();return r.prefix||(r.prefix=tt()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:l}=t;const{width:f,icon:u}=a,{width:g,icon:S}=o,x=ll({transform:l,containerWidth:g,iconWidth:f}),L={tag:"rect",attributes:{...Gn,fill:"white"}},k=u.children?{children:u.children.map(Ha)}:{},R={tag:"g",attributes:{...x.inner},children:[Ha({tag:u.tag,attributes:{...u.attributes,...x.path},...k})]},b={tag:"g",attributes:{...x.outer},children:[R]},P="mask-".concat(i||Mt()),_="clip-".concat(i||Mt()),D={tag:"mask",attributes:{...Gn,id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[L,b]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:fc(S)},D]};return n.push(N,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(P,")"),...Gn}}),{children:n,attributes:r}}}},mc={provides(e){let t=!1;et.matchMedia&&(t=et.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...a,attributeName:"opacity"},i={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||i.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(i),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},pc={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},dc=[ul,Zl,Ql,Jl,ec,sc,lc,cc,uc,mc,pc];_l(dc,{mixoutsTo:Ee});Ee.noAuto;Ee.config;Ee.library;Ee.dom;const vr=Ee.parse;Ee.findIconDefinition;Ee.toHtml;const hc=Ee.icon;Ee.layer;Ee.text;Ee.counter;function Wa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wa(Object(n),!0).forEach(function(r){yt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function an(e){"@babel/helpers - typeof";return an=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},an(e)}function yt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gc(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function yc(e,t){if(e==null)return{};var n=gc(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function br(e){return vc(e)||bc(e)||Ac(e)||Sc()}function vc(e){if(Array.isArray(e))return Ar(e)}function bc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ac(e,t){if(e){if(typeof e=="string")return Ar(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ar(e,t)}}function Ar(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Sc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ec(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,l=e.flash,f=e.spin,u=e.spinPulse,g=e.spinReverse,S=e.pulse,x=e.fixedWidth,L=e.inverse,k=e.border,R=e.listItem,b=e.flip,P=e.size,_=e.rotation,D=e.pull,N=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":l,"fa-spin":f,"fa-spin-reverse":g,"fa-spin-pulse":u,"fa-pulse":S,"fa-fw":x,"fa-inverse":L,"fa-border":k,"fa-li":R,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},yt(t,"fa-".concat(P),typeof P<"u"&&P!==null),yt(t,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),yt(t,"fa-pull-".concat(D),typeof D<"u"&&D!==null),yt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(N).map(function(F){return N[F]?F:null}).filter(function(F){return F})}function Tc(e){return e=e-0,e===e}function Jo(e){return Tc(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var xc=["style"];function _c(e){return e.charAt(0).toUpperCase()+e.slice(1)}function wc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Jo(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?t[_c(a)]=o:t[a]=o,t},{})}function ei(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(f){return ei(e,f)}),a=Object.keys(t.attributes||{}).reduce(function(f,u){var g=t.attributes[u];switch(u){case"class":f.attrs.className=g,delete t.attributes.class;break;case"style":f.attrs.style=wc(g);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?f.attrs[u.toLowerCase()]=g:f.attrs[Jo(u)]=g}return f},{attrs:{}}),o=n.style,i=o===void 0?{}:o,l=yc(n,xc);return a.attrs.style=Le(Le({},a.attrs.style),i),e.apply(void 0,[t.tag,Le(Le({},a.attrs),l)].concat(br(r)))}var ti=!1;try{ti=!0}catch{}function Oc(){if(!ti&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ya(e){if(e&&an(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(vr.icon)return vr.icon(e);if(e===null)return null;if(e&&an(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Bn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?yt({},e,t):{}}var Ga={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ni=Tt.forwardRef(function(e,t){var n=Le(Le({},Ga),e),r=n.icon,a=n.mask,o=n.symbol,i=n.className,l=n.title,f=n.titleId,u=n.maskId,g=Ya(r),S=Bn("classes",[].concat(br(Ec(n)),br((i||"").split(" ")))),x=Bn("transform",typeof n.transform=="string"?vr.transform(n.transform):n.transform),L=Bn("mask",Ya(a)),k=hc(g,Le(Le(Le(Le({},S),x),L),{},{symbol:o,title:l,titleId:f,maskId:u}));if(!k)return Oc("Could not find icon",g),null;var R=k.abstract,b={ref:t};return Object.keys(n).forEach(function(P){Ga.hasOwnProperty(P)||(b[P]=n[P])}),kc(R[0],b)});ni.displayName="FontAwesomeIcon";ni.propTypes={beat:m.bool,border:m.bool,beatFade:m.bool,bounce:m.bool,className:m.string,fade:m.bool,flash:m.bool,mask:m.oneOfType([m.object,m.array,m.string]),maskId:m.string,fixedWidth:m.bool,inverse:m.bool,flip:m.oneOf([!0,!1,"horizontal","vertical","both"]),icon:m.oneOfType([m.object,m.array,m.string]),listItem:m.bool,pull:m.oneOf(["right","left"]),pulse:m.bool,rotation:m.oneOf([0,90,180,270]),shake:m.bool,size:m.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:m.bool,spinPulse:m.bool,spinReverse:m.bool,symbol:m.oneOfType([m.bool,m.string]),title:m.string,titleId:m.string,transform:m.oneOfType([m.string,m.object]),swapOpacity:m.bool};var kc=ei.bind(null,Tt.createElement);function Ze(e){"@babel/helpers - typeof";return Ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ze(e)}function Sr(e,t){return Sr=Object.setPrototypeOf||function(r,a){return r.__proto__=a,r},Sr(e,t)}function Cc(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Qt(e,t,n){return Cc()?Qt=Reflect.construct:Qt=function(a,o,i){var l=[null];l.push.apply(l,o);var f=Function.bind.apply(a,l),u=new f;return i&&Sr(u,i.prototype),u},Qt.apply(null,arguments)}function Ne(e){return Pc(e)||Nc(e)||Rc(e)||Ic()}function Pc(e){if(Array.isArray(e))return Er(e)}function Nc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rc(e,t){if(e){if(typeof e=="string")return Er(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Er(e,t)}}function Er(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ic(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Lc=Object.hasOwnProperty,Ba=Object.setPrototypeOf,Mc=Object.isFrozen,Dc=Object.getPrototypeOf,Fc=Object.getOwnPropertyDescriptor,me=Object.freeze,Oe=Object.seal,zc=Object.create,ri=typeof Reflect<"u"&&Reflect,on=ri.apply,Tr=ri.construct;on||(on=function(t,n,r){return t.apply(n,r)});me||(me=function(t){return t});Oe||(Oe=function(t){return t});Tr||(Tr=function(t,n){return Qt(t,Ne(n))});var $c=ke(Array.prototype.forEach),Xa=ke(Array.prototype.pop),wt=ke(Array.prototype.push),Jt=ke(String.prototype.toLowerCase),Xn=ke(String.prototype.toString),Va=ke(String.prototype.match),Pe=ke(String.prototype.replace),Uc=ke(String.prototype.indexOf),jc=ke(String.prototype.trim),ie=ke(RegExp.prototype.test),Vn=Hc(TypeError);function ke(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return on(e,t,r)}}function Hc(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Tr(e,n)}}function M(e,t,n){var r;n=(r=n)!==null&&r!==void 0?r:Jt,Ba&&Ba(e,null);for(var a=t.length;a--;){var o=t[a];if(typeof o=="string"){var i=n(o);i!==o&&(Mc(t)||(t[a]=i),o=i)}e[o]=!0}return e}function st(e){var t=zc(null),n;for(n in e)on(Lc,e,[n])===!0&&(t[n]=e[n]);return t}function Xt(e,t){for(;e!==null;){var n=Fc(e,t);if(n){if(n.get)return ke(n.get);if(typeof n.value=="function")return ke(n.value)}e=Dc(e)}function r(a){return console.warn("fallback value for",a),null}return r}var qa=me(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),qn=me(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Kn=me(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Wc=me(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Zn=me(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Yc=me(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ka=me(["#text"]),Za=me(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Qn=me(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Qa=me(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Vt=me(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Gc=Oe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Bc=Oe(/<%[\w\W]*|[\w\W]*%>/gm),Xc=Oe(/\${[\w\W]*}/gm),Vc=Oe(/^data-[\-\w.\u00B7-\uFFFF]/),qc=Oe(/^aria-[\-\w]+$/),Kc=Oe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Zc=Oe(/^(?:\w+script|data):/i),Qc=Oe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Jc=Oe(/^html$/i),ef=Oe(/^[a-z][.\w]*(-[.\w]+)+$/i),tf=function(){return typeof window>"u"?null:window},nf=function(t,n){if(Ze(t)!=="object"||typeof t.createPolicy!="function")return null;var r=null,a="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(a)&&(r=n.currentScript.getAttribute(a));var o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML:function(l){return l},createScriptURL:function(l){return l}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function ai(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:tf(),t=function(s){return ai(s)};if(t.version="2.5.7",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;var n=e.document,r=e.document,a=e.DocumentFragment,o=e.HTMLTemplateElement,i=e.Node,l=e.Element,f=e.NodeFilter,u=e.NamedNodeMap,g=u===void 0?e.NamedNodeMap||e.MozNamedAttrMap:u,S=e.HTMLFormElement,x=e.DOMParser,L=e.trustedTypes,k=l.prototype,R=Xt(k,"cloneNode"),b=Xt(k,"nextSibling"),P=Xt(k,"childNodes"),_=Xt(k,"parentNode");if(typeof o=="function"){var D=r.createElement("template");D.content&&D.content.ownerDocument&&(r=D.content.ownerDocument)}var N=nf(L,n),F=N?N.createHTML(""):"",fe=r,pe=fe.implementation,se=fe.createNodeIterator,Te=fe.createDocumentFragment,Re=fe.getElementsByTagName,Ve=n.importNode,le={};try{le=st(r).documentMode?r.documentMode:{}}catch{}var K={};t.isSupported=typeof _=="function"&&pe&&pe.createHTMLDocument!==void 0&&le!==9;var de=Gc,ne=Bc,ze=Xc,ve=Vc,he=qc,rt=Zc,$e=Qc,at=ef,E=Kc,d=null,A=M({},[].concat(Ne(qa),Ne(qn),Ne(Kn),Ne(Zn),Ne(Ka))),T=null,c=M({},[].concat(Ne(Za),Ne(Qn),Ne(Qa),Ne(Vt))),O=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),h=null,G=null,U=!0,j=!0,I=!1,ee=!0,Q=!1,z=!0,V=!1,$=!1,J=!1,xe=!1,Z=!1,Ue=!1,qe=!0,ge=!1,C="user-content-",B=!0,je=!1,Ie={},ue=null,Gr=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Br=null,Xr=M({},["audio","video","img","source","image","track"]),Rn=null,Vr=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),$t="http://www.w3.org/1998/Math/MathML",Ut="http://www.w3.org/2000/svg",He="http://www.w3.org/1999/xhtml",pt=He,In=!1,Ln=null,oi=M({},[$t,Ut,He],Xn),ot,ii=["application/xhtml+xml","text/html"],si="text/html",re,dt=null,li=r.createElement("form"),qr=function(s){return s instanceof RegExp||s instanceof Function},Mn=function(s){dt&&dt===s||((!s||Ze(s)!=="object")&&(s={}),s=st(s),ot=ii.indexOf(s.PARSER_MEDIA_TYPE)===-1?ot=si:ot=s.PARSER_MEDIA_TYPE,re=ot==="application/xhtml+xml"?Xn:Jt,d="ALLOWED_TAGS"in s?M({},s.ALLOWED_TAGS,re):A,T="ALLOWED_ATTR"in s?M({},s.ALLOWED_ATTR,re):c,Ln="ALLOWED_NAMESPACES"in s?M({},s.ALLOWED_NAMESPACES,Xn):oi,Rn="ADD_URI_SAFE_ATTR"in s?M(st(Vr),s.ADD_URI_SAFE_ATTR,re):Vr,Br="ADD_DATA_URI_TAGS"in s?M(st(Xr),s.ADD_DATA_URI_TAGS,re):Xr,ue="FORBID_CONTENTS"in s?M({},s.FORBID_CONTENTS,re):Gr,h="FORBID_TAGS"in s?M({},s.FORBID_TAGS,re):{},G="FORBID_ATTR"in s?M({},s.FORBID_ATTR,re):{},Ie="USE_PROFILES"in s?s.USE_PROFILES:!1,U=s.ALLOW_ARIA_ATTR!==!1,j=s.ALLOW_DATA_ATTR!==!1,I=s.ALLOW_UNKNOWN_PROTOCOLS||!1,ee=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Q=s.SAFE_FOR_TEMPLATES||!1,z=s.SAFE_FOR_XML!==!1,V=s.WHOLE_DOCUMENT||!1,xe=s.RETURN_DOM||!1,Z=s.RETURN_DOM_FRAGMENT||!1,Ue=s.RETURN_TRUSTED_TYPE||!1,J=s.FORCE_BODY||!1,qe=s.SANITIZE_DOM!==!1,ge=s.SANITIZE_NAMED_PROPS||!1,B=s.KEEP_CONTENT!==!1,je=s.IN_PLACE||!1,E=s.ALLOWED_URI_REGEXP||E,pt=s.NAMESPACE||He,O=s.CUSTOM_ELEMENT_HANDLING||{},s.CUSTOM_ELEMENT_HANDLING&&qr(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(O.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&qr(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(O.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(O.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Q&&(j=!1),Z&&(xe=!0),Ie&&(d=M({},Ne(Ka)),T=[],Ie.html===!0&&(M(d,qa),M(T,Za)),Ie.svg===!0&&(M(d,qn),M(T,Qn),M(T,Vt)),Ie.svgFilters===!0&&(M(d,Kn),M(T,Qn),M(T,Vt)),Ie.mathMl===!0&&(M(d,Zn),M(T,Qa),M(T,Vt))),s.ADD_TAGS&&(d===A&&(d=st(d)),M(d,s.ADD_TAGS,re)),s.ADD_ATTR&&(T===c&&(T=st(T)),M(T,s.ADD_ATTR,re)),s.ADD_URI_SAFE_ATTR&&M(Rn,s.ADD_URI_SAFE_ATTR,re),s.FORBID_CONTENTS&&(ue===Gr&&(ue=st(ue)),M(ue,s.FORBID_CONTENTS,re)),B&&(d["#text"]=!0),V&&M(d,["html","head","body"]),d.table&&(M(d,["tbody"]),delete h.tbody),me&&me(s),dt=s)},Kr=M({},["mi","mo","mn","ms","mtext"]),Zr=M({},["annotation-xml"]),ci=M({},["title","style","font","a","script"]),jt=M({},qn);M(jt,Kn),M(jt,Wc);var Dn=M({},Zn);M(Dn,Yc);var fi=function(s){var p=_(s);(!p||!p.tagName)&&(p={namespaceURI:pt,tagName:"template"});var y=Jt(s.tagName),H=Jt(p.tagName);return Ln[s.namespaceURI]?s.namespaceURI===Ut?p.namespaceURI===He?y==="svg":p.namespaceURI===$t?y==="svg"&&(H==="annotation-xml"||Kr[H]):!!jt[y]:s.namespaceURI===$t?p.namespaceURI===He?y==="math":p.namespaceURI===Ut?y==="math"&&Zr[H]:!!Dn[y]:s.namespaceURI===He?p.namespaceURI===Ut&&!Zr[H]||p.namespaceURI===$t&&!Kr[H]?!1:!Dn[y]&&(ci[y]||!jt[y]):!!(ot==="application/xhtml+xml"&&Ln[s.namespaceURI]):!1},_e=function(s){wt(t.removed,{element:s});try{s.parentNode.removeChild(s)}catch{try{s.outerHTML=F}catch{s.remove()}}},Ht=function(s,p){try{wt(t.removed,{attribute:p.getAttributeNode(s),from:p})}catch{wt(t.removed,{attribute:null,from:p})}if(p.removeAttribute(s),s==="is"&&!T[s])if(xe||Z)try{_e(p)}catch{}else try{p.setAttribute(s,"")}catch{}},Qr=function(s){var p,y;if(J)s="<remove></remove>"+s;else{var H=Va(s,/^[\r\n\t ]+/);y=H&&H[0]}ot==="application/xhtml+xml"&&pt===He&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");var ye=N?N.createHTML(s):s;if(pt===He)try{p=new x().parseFromString(ye,ot)}catch{}if(!p||!p.documentElement){p=pe.createDocument(pt,"template",null);try{p.documentElement.innerHTML=In?F:ye}catch{}}var ce=p.body||p.documentElement;return s&&y&&ce.insertBefore(r.createTextNode(y),ce.childNodes[0]||null),pt===He?Re.call(p,V?"html":"body")[0]:V?p.documentElement:ce},Jr=function(s){return se.call(s.ownerDocument||s,s,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null,!1)},ea=function(s){return s instanceof S&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof g)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},_t=function(s){return Ze(i)==="object"?s instanceof i:s&&Ze(s)==="object"&&typeof s.nodeType=="number"&&typeof s.nodeName=="string"},We=function(s,p,y){K[s]&&$c(K[s],function(H){H.call(t,p,y,dt)})},ta=function(s){var p;if(We("beforeSanitizeElements",s,null),ea(s)||ie(/[\u0080-\uFFFF]/,s.nodeName))return _e(s),!0;var y=re(s.nodeName);if(We("uponSanitizeElement",s,{tagName:y,allowedTags:d}),s.hasChildNodes()&&!_t(s.firstElementChild)&&(!_t(s.content)||!_t(s.content.firstElementChild))&&ie(/<[/\w]/g,s.innerHTML)&&ie(/<[/\w]/g,s.textContent)||y==="select"&&ie(/<template/i,s.innerHTML)||s.nodeType===7||z&&s.nodeType===8&&ie(/<[/\w]/g,s.data))return _e(s),!0;if(!d[y]||h[y]){if(!h[y]&&ra(y)&&(O.tagNameCheck instanceof RegExp&&ie(O.tagNameCheck,y)||O.tagNameCheck instanceof Function&&O.tagNameCheck(y)))return!1;if(B&&!ue[y]){var H=_(s)||s.parentNode,ye=P(s)||s.childNodes;if(ye&&H)for(var ce=ye.length,oe=ce-1;oe>=0;--oe){var it=R(ye[oe],!0);it.__removalCount=(s.__removalCount||0)+1,H.insertBefore(it,b(s))}}return _e(s),!0}return s instanceof l&&!fi(s)||(y==="noscript"||y==="noembed"||y==="noframes")&&ie(/<\/no(script|embed|frames)/i,s.innerHTML)?(_e(s),!0):(Q&&s.nodeType===3&&(p=s.textContent,p=Pe(p,de," "),p=Pe(p,ne," "),p=Pe(p,ze," "),s.textContent!==p&&(wt(t.removed,{element:s.cloneNode()}),s.textContent=p)),We("afterSanitizeElements",s,null),!1)},na=function(s,p,y){if(qe&&(p==="id"||p==="name")&&(y in r||y in li))return!1;if(!(j&&!G[p]&&ie(ve,p))){if(!(U&&ie(he,p))){if(!T[p]||G[p]){if(!(ra(s)&&(O.tagNameCheck instanceof RegExp&&ie(O.tagNameCheck,s)||O.tagNameCheck instanceof Function&&O.tagNameCheck(s))&&(O.attributeNameCheck instanceof RegExp&&ie(O.attributeNameCheck,p)||O.attributeNameCheck instanceof Function&&O.attributeNameCheck(p))||p==="is"&&O.allowCustomizedBuiltInElements&&(O.tagNameCheck instanceof RegExp&&ie(O.tagNameCheck,y)||O.tagNameCheck instanceof Function&&O.tagNameCheck(y))))return!1}else if(!Rn[p]){if(!ie(E,Pe(y,$e,""))){if(!((p==="src"||p==="xlink:href"||p==="href")&&s!=="script"&&Uc(y,"data:")===0&&Br[s])){if(!(I&&!ie(rt,Pe(y,$e,"")))){if(y)return!1}}}}}}return!0},ra=function(s){return s!=="annotation-xml"&&Va(s,at)},aa=function(s){var p,y,H,ye;We("beforeSanitizeAttributes",s,null);var ce=s.attributes;if(ce){var oe={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:T};for(ye=ce.length;ye--;){p=ce[ye];var it=p,te=it.name,Fn=it.namespaceURI;if(y=te==="value"?p.value:jc(p.value),H=re(te),oe.attrName=H,oe.attrValue=y,oe.keepAttr=!0,oe.forceKeepAttr=void 0,We("uponSanitizeAttribute",s,oe),y=oe.attrValue,!oe.forceKeepAttr&&(Ht(te,s),!!oe.keepAttr)){if(!ee&&ie(/\/>/i,y)){Ht(te,s);continue}Q&&(y=Pe(y,de," "),y=Pe(y,ne," "),y=Pe(y,ze," "));var oa=re(s.nodeName);if(na(oa,H,y)){if(ge&&(H==="id"||H==="name")&&(Ht(te,s),y=C+y),z&&ie(/((--!?|])>)|<\/(style|title)/i,y)){Ht(te,s);continue}if(N&&Ze(L)==="object"&&typeof L.getAttributeType=="function"&&!Fn)switch(L.getAttributeType(oa,H)){case"TrustedHTML":{y=N.createHTML(y);break}case"TrustedScriptURL":{y=N.createScriptURL(y);break}}try{Fn?s.setAttributeNS(Fn,te,y):s.setAttribute(te,y),ea(s)?_e(s):Xa(t.removed)}catch{}}}}We("afterSanitizeAttributes",s,null)}},ui=function w(s){var p,y=Jr(s);for(We("beforeSanitizeShadowDOM",s,null);p=y.nextNode();)We("uponSanitizeShadowNode",p,null),!ta(p)&&(p.content instanceof a&&w(p.content),aa(p));We("afterSanitizeShadowDOM",s,null)};return t.sanitize=function(w){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p,y,H,ye,ce;if(In=!w,In&&(w="<!-->"),typeof w!="string"&&!_t(w))if(typeof w.toString=="function"){if(w=w.toString(),typeof w!="string")throw Vn("dirty is not a string, aborting")}else throw Vn("toString is not a function");if(!t.isSupported){if(Ze(e.toStaticHTML)==="object"||typeof e.toStaticHTML=="function"){if(typeof w=="string")return e.toStaticHTML(w);if(_t(w))return e.toStaticHTML(w.outerHTML)}return w}if($||Mn(s),t.removed=[],typeof w=="string"&&(je=!1),je){if(w.nodeName){var oe=re(w.nodeName);if(!d[oe]||h[oe])throw Vn("root node is forbidden and cannot be sanitized in-place")}}else if(w instanceof i)p=Qr("<!---->"),y=p.ownerDocument.importNode(w,!0),y.nodeType===1&&y.nodeName==="BODY"||y.nodeName==="HTML"?p=y:p.appendChild(y);else{if(!xe&&!Q&&!V&&w.indexOf("<")===-1)return N&&Ue?N.createHTML(w):w;if(p=Qr(w),!p)return xe?null:Ue?F:""}p&&J&&_e(p.firstChild);for(var it=Jr(je?w:p);H=it.nextNode();)H.nodeType===3&&H===ye||ta(H)||(H.content instanceof a&&ui(H.content),aa(H),ye=H);if(ye=null,je)return w;if(xe){if(Z)for(ce=Te.call(p.ownerDocument);p.firstChild;)ce.appendChild(p.firstChild);else ce=p;return(T.shadowroot||T.shadowrootmod)&&(ce=Ve.call(n,ce,!0)),ce}var te=V?p.outerHTML:p.innerHTML;return V&&d["!doctype"]&&p.ownerDocument&&p.ownerDocument.doctype&&p.ownerDocument.doctype.name&&ie(Jc,p.ownerDocument.doctype.name)&&(te="<!DOCTYPE "+p.ownerDocument.doctype.name+`>
`+te),Q&&(te=Pe(te,de," "),te=Pe(te,ne," "),te=Pe(te,ze," ")),N&&Ue?N.createHTML(te):te},t.setConfig=function(w){Mn(w),$=!0},t.clearConfig=function(){dt=null,$=!1},t.isValidAttribute=function(w,s,p){dt||Mn({});var y=re(w),H=re(s);return na(y,H,p)},t.addHook=function(w,s){typeof s=="function"&&(K[w]=K[w]||[],wt(K[w],s))},t.removeHook=function(w){if(K[w])return Xa(K[w])},t.removeHooks=function(w){K[w]&&(K[w]=[])},t.removeAllHooks=function(){K={}},t}ai();m.shape({event:m.string,action:m.string,name:m.string,region:m.string,section:m.string,component:m.string,type:m.string,text:m.string});const df=({event:e="",action:t="",name:n="",type:r="",section:a="",text:o="",region:i="",component:l=""})=>{const{dataLayer:f}=window,u={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:i.toLowerCase(),section:a.toLowerCase(),text:o.toLowerCase(),component:l.toLowerCase()};f&&f.push(u)};export{bs as A,So as B,ni as F,lf as H,sa as N,m as P,zn as T,sf as a,uf as b,pf as c,xr as d,ff as e,mf as f,cf as g,vi as j,Ti as p,rr as q,df as t};
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
