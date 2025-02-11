import{r as wt,R as yt}from"./index-B2SEcK1p.js";import{g as Ja}from"./_commonjsHelpers-B3tUAs5q.js";var eo={exports:{}},en={};var pi=wt,hi=Symbol.for("react.element"),gi=Symbol.for("react.fragment"),yi=Object.prototype.hasOwnProperty,vi=pi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bi={key:!0,ref:!0,__self:!0,__source:!0};function to(e,t,n){var r,a={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)yi.call(t,r)&&!bi.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:hi,type:e,key:o,ref:i,props:a,_owner:vi.current}}en.Fragment=gi;en.jsx=to;en.jsxs=to;eo.exports=en;var Ai=eo.exports,no={exports:{}},Si="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ei=Si,Ti=Ei;function ro(){}function ao(){}ao.resetWarningCache=ro;var xi=function(){function e(r,a,o,i,l,u){if(u!==Ti){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ao,resetWarningCache:ro};return n.PropTypes=n,n};no.exports=xi();var wi=no.exports;const m=Ja(wi);function xf({packageName:e="",component:t="",type:n="",configuration:r={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}}const ra={alt:m.string,title:m.string,src:m.string,mobileSrc:m.string,brandLink:m.string},Ln={baseUrl:m.string,parentOrg:m.string,parentOrgUrl:m.string,animate:m.bool},Dt={loggedIn:m.bool,loginLink:m.string,logoutLink:m.string,userName:m.string},Er={text:m.string.isRequired,color:m.oneOf(["gold","maroon","light","dark"]),href:m.string.isRequired,classes:m.string,onClick:m.func,onFocus:m.func},aa=m.shape({id:m.number,href:m.string,text:m.string,type:m.string,selected:m.bool,items:m.arrayOf(m.arrayOf(m.object)),buttons:m.arrayOf(m.shape(Er)),class:m.string}),wf={isPartner:m.bool,navTree:m.arrayOf(aa),partnerLogo:m.shape(ra),logo:m.shape(ra),title:m.string,parentOrg:Ln.parentOrg,parentOrgUrl:Ln.parentOrgUrl,baseUrl:Ln.baseUrl,loggedIn:Dt.loggedIn,userName:Dt.userName,loginLink:Dt.loginLink,onLoginClick:m.func,logoutLink:Dt.logoutLink,onLogoutClick:m.func,buttons:m.arrayOf(m.shape(Er)),breakpoint:m.oneOf(["Lg","Xl"]),animateTitle:m.bool,expandOnHover:m.bool,mobileNavTree:m.arrayOf(aa),hasNavigation:m.bool,searchUrl:m.string,site:m.string,renderDiv:m.oneOf(["true","false"])};var oo={exports:{}},G={};var Tr=Symbol.for("react.transitional.element"),xr=Symbol.for("react.portal"),tn=Symbol.for("react.fragment"),nn=Symbol.for("react.strict_mode"),rn=Symbol.for("react.profiler"),an=Symbol.for("react.consumer"),on=Symbol.for("react.context"),sn=Symbol.for("react.forward_ref"),ln=Symbol.for("react.suspense"),cn=Symbol.for("react.suspense_list"),fn=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),_i=Symbol.for("react.offscreen"),Oi=Symbol.for("react.client.reference");function Ce(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Tr:switch(e=e.type,e){case tn:case rn:case nn:case ln:case cn:return e;default:switch(e=e&&e.$$typeof,e){case on:case sn:case un:case fn:return e;case an:return e;default:return t}}case xr:return t}}}G.ContextConsumer=an;G.ContextProvider=on;G.Element=Tr;G.ForwardRef=sn;G.Fragment=tn;G.Lazy=un;G.Memo=fn;G.Portal=xr;G.Profiler=rn;G.StrictMode=nn;G.Suspense=ln;G.SuspenseList=cn;G.isContextConsumer=function(e){return Ce(e)===an};G.isContextProvider=function(e){return Ce(e)===on};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tr};G.isForwardRef=function(e){return Ce(e)===sn};G.isFragment=function(e){return Ce(e)===tn};G.isLazy=function(e){return Ce(e)===un};G.isMemo=function(e){return Ce(e)===fn};G.isPortal=function(e){return Ce(e)===xr};G.isProfiler=function(e){return Ce(e)===rn};G.isStrictMode=function(e){return Ce(e)===nn};G.isSuspense=function(e){return Ce(e)===ln};G.isSuspenseList=function(e){return Ce(e)===cn};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===tn||e===rn||e===nn||e===ln||e===cn||e===_i||typeof e=="object"&&e!==null&&(e.$$typeof===un||e.$$typeof===fn||e.$$typeof===on||e.$$typeof===an||e.$$typeof===sn||e.$$typeof===Oi||e.getModuleId!==void 0)};G.typeOf=Ce;oo.exports=G;var io=oo.exports;function Ci(e){function t(E,g,S,T,c){for(var C=0,y=0,B=0,j=0,H,L,ee=0,Q=0,$,q=$=H=0,U=0,J=0,Te=0,Z=0,ze=S.length,Xe=ze-1,ye,P="",X="",$e="",Re="",me;U<ze;){if(L=S.charCodeAt(U),U===Xe&&y+j+B+C!==0&&(y!==0&&(L=y===47?10:47),j=B=C=0,ze++,Xe++),y+j+B+C===0){if(U===Xe&&(0<J&&(P=P.replace(x,"")),0<P.trim().length)){switch(L){case 32:case 9:case 59:case 13:case 10:break;default:P+=S.charAt(U)}L=59}switch(L){case 123:for(P=P.trim(),H=P.charCodeAt(0),$=1,Z=++U;U<ze;){switch(L=S.charCodeAt(U)){case 123:$++;break;case 125:$--;break;case 47:switch(L=S.charCodeAt(U+1)){case 42:case 47:e:{for(q=U+1;q<Xe;++q)switch(S.charCodeAt(q)){case 47:if(L===42&&S.charCodeAt(q-1)===42&&U+2!==q){U=q+1;break e}break;case 10:if(L===47){U=q+1;break e}}U=q}}break;case 91:L++;case 40:L++;case 34:case 39:for(;U++<Xe&&S.charCodeAt(U)!==L;);}if($===0)break;U++}switch($=S.substring(Z,U),H===0&&(H=(P=P.replace(b,"").trim()).charCodeAt(0)),H){case 64:switch(0<J&&(P=P.replace(x,"")),L=P.charCodeAt(1),L){case 100:case 109:case 115:case 45:J=g;break;default:J=De}if($=t(g,J,$,L,c+1),Z=$.length,0<ge&&(J=n(De,P,Te),me=l(3,$,J,g,K,le,Z,L,c,T),P=J.join(""),me!==void 0&&(Z=($=me.trim()).length)===0&&(L=0,$="")),0<Z)switch(L){case 115:P=P.replace(ue,i);case 100:case 109:case 45:$=P+"{"+$+"}";break;case 107:P=P.replace(_,"$1 $2"),$=P+"{"+$+"}",$=ne===1||ne===2&&o("@"+$,3)?"@-webkit-"+$+"@"+$:"@"+$;break;default:$=P+$,T===112&&($=(X+=$,""))}else $="";break;default:$=t(g,n(g,P,Te),$,T,c+1)}$e+=$,$=Te=J=q=H=0,P="",L=S.charCodeAt(++U);break;case 125:case 59:if(P=(0<J?P.replace(x,""):P).trim(),1<(Z=P.length))switch(q===0&&(H=P.charCodeAt(0),H===45||96<H&&123>H)&&(Z=(P=P.replace(" ",":")).length),0<ge&&(me=l(1,P,g,E,K,le,X.length,T,c,T))!==void 0&&(Z=(P=me.trim()).length)===0&&(P="\0\0"),H=P.charCodeAt(0),L=P.charCodeAt(1),H){case 0:break;case 64:if(L===105||L===99){Re+=P+S.charAt(U);break}default:P.charCodeAt(Z-1)!==58&&(X+=a(P,H,L,P.charCodeAt(2)))}Te=J=q=H=0,P="",L=S.charCodeAt(++U)}}switch(L){case 13:case 10:y===47?y=0:1+H===0&&T!==107&&0<P.length&&(J=1,P+="\0"),0<ge*Fe&&l(0,P,g,E,K,le,X.length,T,c,T),le=1,K++;break;case 59:case 125:if(y+j+B+C===0){le++;break}default:switch(le++,ye=S.charAt(U),L){case 9:case 32:if(j+C+y===0)switch(ee){case 44:case 58:case 9:case 32:ye="";break;default:L!==32&&(ye=" ")}break;case 0:ye="\\0";break;case 12:ye="\\f";break;case 11:ye="\\v";break;case 38:j+y+C===0&&(J=Te=1,ye="\f"+ye);break;case 108:if(j+y+C+he===0&&0<q)switch(U-q){case 2:ee===112&&S.charCodeAt(U-3)===58&&(he=ee);case 8:Q===111&&(he=Q)}break;case 58:j+y+C===0&&(q=U);break;case 44:y+B+j+C===0&&(J=1,ye+="\r");break;case 34:case 39:y===0&&(j=j===L?0:j===0?L:j);break;case 91:j+y+B===0&&C++;break;case 93:j+y+B===0&&C--;break;case 41:j+y+C===0&&B--;break;case 40:if(j+y+C===0){if(H===0)switch(2*ee+3*Q){case 533:break;default:H=1}B++}break;case 64:y+B+j+C+q+$===0&&($=1);break;case 42:case 47:if(!(0<j+C+B))switch(y){case 0:switch(2*L+3*S.charCodeAt(U+1)){case 235:y=47;break;case 220:Z=U,y=42}break;case 42:L===47&&ee===42&&Z+2!==U&&(S.charCodeAt(Z+2)===33&&(X+=S.substring(Z,U+1)),ye="",y=0)}}y===0&&(P+=ye)}Q=ee,ee=L,U++}if(Z=X.length,0<Z){if(J=g,0<ge&&(me=l(2,X,J,E,K,le,Z,T,c,T),me!==void 0&&(X=me).length===0))return Re+X+$e;if(X=J.join(",")+"{"+X+"}",ne*he!==0){switch(ne!==2||o(X,2)||(he=0),he){case 111:X=X.replace(R,":-moz-$1")+X;break;case 112:X=X.replace(F,"::-webkit-input-$1")+X.replace(F,"::-moz-$1")+X.replace(F,":-ms-input-$1")+X}he=0}}return Re+X+$e}function n(E,g,S){var T=g.trim().split(A);g=T;var c=T.length,C=E.length;switch(C){case 0:case 1:var y=0;for(E=C===0?"":E[0]+" ";y<c;++y)g[y]=r(E,g[y],S).trim();break;default:var B=y=0;for(g=[];y<c;++y)for(var j=0;j<C;++j)g[B++]=r(E[j]+" ",T[y],S).trim()}return g}function r(E,g,S){var T=g.charCodeAt(0);switch(33>T&&(T=(g=g.trim()).charCodeAt(0)),T){case 38:return g.replace(I,"$1"+E.trim());case 58:return E.trim()+g.replace(I,"$1"+E.trim());default:if(0<1*S&&0<g.indexOf("\f"))return g.replace(I,(E.charCodeAt(0)===58?"":"$1")+E.trim())}return E+g}function a(E,g,S,T){var c=E+";",C=2*g+3*S+4*T;if(C===944){E=c.indexOf(":",9)+1;var y=c.substring(E,c.length-1).trim();return y=c.substring(0,E).trim()+y+";",ne===1||ne===2&&o(y,1)?"-webkit-"+y+y:y}if(ne===0||ne===2&&!o(c,1))return c;switch(C){case 1015:return c.charCodeAt(10)===97?"-webkit-"+c+c:c;case 951:return c.charCodeAt(3)===116?"-webkit-"+c+c:c;case 963:return c.charCodeAt(5)===110?"-webkit-"+c+c:c;case 1009:if(c.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+c+c;case 978:return"-webkit-"+c+"-moz-"+c+c;case 1019:case 983:return"-webkit-"+c+"-moz-"+c+"-ms-"+c+c;case 883:if(c.charCodeAt(8)===45)return"-webkit-"+c+c;if(0<c.indexOf("image-set(",11))return c.replace(Be,"$1-webkit-$2")+c;break;case 932:if(c.charCodeAt(4)===45)switch(c.charCodeAt(5)){case 103:return"-webkit-box-"+c.replace("-grow","")+"-webkit-"+c+"-ms-"+c.replace("grow","positive")+c;case 115:return"-webkit-"+c+"-ms-"+c.replace("shrink","negative")+c;case 98:return"-webkit-"+c+"-ms-"+c.replace("basis","preferred-size")+c}return"-webkit-"+c+"-ms-"+c+c;case 964:return"-webkit-"+c+"-ms-flex-"+c+c;case 1023:if(c.charCodeAt(8)!==99)break;return y=c.substring(c.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+y+"-webkit-"+c+"-ms-flex-pack"+y+c;case 1005:return k.test(c)?c.replace(M,":-webkit-")+c.replace(M,":-moz-")+c:c;case 1e3:switch(y=c.substring(13).trim(),g=y.indexOf("-")+1,y.charCodeAt(0)+y.charCodeAt(g)){case 226:y=c.replace(z,"tb");break;case 232:y=c.replace(z,"tb-rl");break;case 220:y=c.replace(z,"lr");break;default:return c}return"-webkit-"+c+"-ms-"+y+c;case 1017:if(c.indexOf("sticky",9)===-1)break;case 975:switch(g=(c=E).length-10,y=(c.charCodeAt(g)===33?c.substring(0,g):c).substring(E.indexOf(":",7)+1).trim(),C=y.charCodeAt(0)+(y.charCodeAt(7)|0)){case 203:if(111>y.charCodeAt(8))break;case 115:c=c.replace(y,"-webkit-"+y)+";"+c;break;case 207:case 102:c=c.replace(y,"-webkit-"+(102<C?"inline-":"")+"box")+";"+c.replace(y,"-webkit-"+y)+";"+c.replace(y,"-ms-"+y+"box")+";"+c}return c+";";case 938:if(c.charCodeAt(5)===45)switch(c.charCodeAt(6)){case 105:return y=c.replace("-items",""),"-webkit-"+c+"-webkit-box-"+y+"-ms-flex-"+y+c;case 115:return"-webkit-"+c+"-ms-flex-item-"+c.replace(se,"")+c;default:return"-webkit-"+c+"-ms-flex-line-pack"+c.replace("align-content","").replace(se,"")+c}break;case 973:case 989:if(c.charCodeAt(3)!==45||c.charCodeAt(4)===122)break;case 931:case 953:if(Ie.test(E)===!0)return(y=E.substring(E.indexOf(":")+1)).charCodeAt(0)===115?a(E.replace("stretch","fill-available"),g,S,T).replace(":fill-available",":stretch"):c.replace(y,"-webkit-"+y)+c.replace(y,"-moz-"+y.replace("fill-",""))+c;break;case 962:if(c="-webkit-"+c+(c.charCodeAt(5)===102?"-ms-"+c:"")+c,S+T===211&&c.charCodeAt(13)===105&&0<c.indexOf("transform",10))return c.substring(0,c.indexOf(";",27)+1).replace(N,"$1-webkit-$2")+c}return c}function o(E,g){var S=E.indexOf(g===1?":":"{"),T=E.substring(0,g!==3?S:10);return S=E.substring(S+1,E.length-1),et(g!==2?T:T.replace(Ee,"$1"),S,g)}function i(E,g){var S=a(g,g.charCodeAt(0),g.charCodeAt(1),g.charCodeAt(2));return S!==g+";"?S.replace(pe," or ($1)").substring(4):"("+g+")"}function l(E,g,S,T,c,C,y,B,j,H){for(var L=0,ee=g,Q;L<ge;++L)switch(Q=be[L].call(h,E,ee,S,T,c,C,y,B,j,H)){case void 0:case!1:case!0:case null:break;default:ee=Q}if(ee!==g)return ee}function u(E){switch(E){case void 0:case null:ge=be.length=0;break;default:if(typeof E=="function")be[ge++]=E;else if(typeof E=="object")for(var g=0,S=E.length;g<S;++g)u(E[g]);else Fe=!!E|0}return u}function f(E){return E=E.prefix,E!==void 0&&(et=null,E?typeof E!="function"?ne=1:(ne=2,et=E):ne=0),f}function h(E,g){var S=E;if(33>S.charCodeAt(0)&&(S=S.trim()),tt=S,S=[tt],0<ge){var T=l(-1,g,S,S,K,le,0,0,0,0);T!==void 0&&typeof T=="string"&&(g=T)}var c=t(De,S,g,0,0);return 0<ge&&(T=l(-2,c,S,S,K,le,c.length,0,0,0),T!==void 0&&(c=T)),tt="",he=0,le=K=1,c}var b=/^\0+/g,x=/[\0\r\f]/g,M=/: */g,k=/zoo|gra/,N=/([,: ])(transform)/g,A=/,\r+?/g,I=/([\t\r\n ])*\f?&/g,_=/@(k\w+)\s*(\S*)\s*/,F=/::(place)/g,R=/:(read-only)/g,z=/[svh]\w+-[tblr]{2}/,ue=/\(\s*(.*)\s*\)/g,pe=/([\s\S]*?);/g,se=/-self|flex-/g,Ee=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Ie=/stretch|:\s*\w+\-(?:conte|avail)/,Be=/([^-])(image-set\()/,le=1,K=1,he=0,ne=1,De=[],be=[],ge=0,et=null,Fe=0,tt="";return h.use=u,h.set=f,e!==void 0&&f(e),h}var ki={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Pi(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ii=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,oa=Pi(function(e){return Ii.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),so={exports:{}},Y={};var ae=typeof Symbol=="function"&&Symbol.for,wr=ae?Symbol.for("react.element"):60103,_r=ae?Symbol.for("react.portal"):60106,mn=ae?Symbol.for("react.fragment"):60107,dn=ae?Symbol.for("react.strict_mode"):60108,pn=ae?Symbol.for("react.profiler"):60114,hn=ae?Symbol.for("react.provider"):60109,gn=ae?Symbol.for("react.context"):60110,Or=ae?Symbol.for("react.async_mode"):60111,yn=ae?Symbol.for("react.concurrent_mode"):60111,vn=ae?Symbol.for("react.forward_ref"):60112,bn=ae?Symbol.for("react.suspense"):60113,Ri=ae?Symbol.for("react.suspense_list"):60120,An=ae?Symbol.for("react.memo"):60115,Sn=ae?Symbol.for("react.lazy"):60116,Ni=ae?Symbol.for("react.block"):60121,Li=ae?Symbol.for("react.fundamental"):60117,Mi=ae?Symbol.for("react.responder"):60118,Di=ae?Symbol.for("react.scope"):60119;function Ae(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case wr:switch(e=e.type,e){case Or:case yn:case mn:case pn:case dn:case bn:return e;default:switch(e=e&&e.$$typeof,e){case gn:case vn:case Sn:case An:case hn:return e;default:return t}}case _r:return t}}}function lo(e){return Ae(e)===yn}Y.AsyncMode=Or;Y.ConcurrentMode=yn;Y.ContextConsumer=gn;Y.ContextProvider=hn;Y.Element=wr;Y.ForwardRef=vn;Y.Fragment=mn;Y.Lazy=Sn;Y.Memo=An;Y.Portal=_r;Y.Profiler=pn;Y.StrictMode=dn;Y.Suspense=bn;Y.isAsyncMode=function(e){return lo(e)||Ae(e)===Or};Y.isConcurrentMode=lo;Y.isContextConsumer=function(e){return Ae(e)===gn};Y.isContextProvider=function(e){return Ae(e)===hn};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr};Y.isForwardRef=function(e){return Ae(e)===vn};Y.isFragment=function(e){return Ae(e)===mn};Y.isLazy=function(e){return Ae(e)===Sn};Y.isMemo=function(e){return Ae(e)===An};Y.isPortal=function(e){return Ae(e)===_r};Y.isProfiler=function(e){return Ae(e)===pn};Y.isStrictMode=function(e){return Ae(e)===dn};Y.isSuspense=function(e){return Ae(e)===bn};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===mn||e===yn||e===pn||e===dn||e===bn||e===Ri||typeof e=="object"&&e!==null&&(e.$$typeof===Sn||e.$$typeof===An||e.$$typeof===hn||e.$$typeof===gn||e.$$typeof===vn||e.$$typeof===Li||e.$$typeof===Mi||e.$$typeof===Di||e.$$typeof===Ni)};Y.typeOf=Ae;so.exports=Y;var Fi=so.exports,Cr=Fi,zi={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ui={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},co={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kr={};kr[Cr.ForwardRef]=Ui;kr[Cr.Memo]=co;function ia(e){return Cr.isMemo(e)?co:kr[e.$$typeof]||zi}var ji=Object.defineProperty,Hi=Object.getOwnPropertyNames,sa=Object.getOwnPropertySymbols,Wi=Object.getOwnPropertyDescriptor,Yi=Object.getPrototypeOf,la=Object.prototype;function fo(e,t,n){if(typeof t!="string"){if(la){var r=Yi(t);r&&r!==la&&fo(e,r,n)}var a=Hi(t);sa&&(a=a.concat(sa(t)));for(var o=ia(e),i=ia(t),l=0;l<a.length;++l){var u=a[l];if(!$i[u]&&!(n&&n[u])&&!(i&&i[u])&&!(o&&o[u])){var f=Wi(t,u);try{ji(e,u,f)}catch{}}}}return e}var Gi=fo;const Bi=Ja(Gi);var uo={},we={};function He(){return(He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ca=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},qn=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!io.typeOf(e)},Vt=Object.freeze([]),Ke=Object.freeze({});function _t(e){return typeof e=="function"}function fa(e){return e.displayName||e.name||"Component"}function Pr(e){return e&&typeof e.styledComponentId=="string"}var pt=typeof uo<"u"&&we!==void 0&&(we.REACT_APP_SC_ATTR||we.SC_ATTR)||"data-styled",Ir=typeof window<"u"&&"HTMLElement"in window,Xi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof uo<"u"&&we!==void 0&&(we.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&we.REACT_APP_SC_DISABLE_SPEEDY!==""?we.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&we.REACT_APP_SC_DISABLE_SPEEDY:we.SC_DISABLE_SPEEDY!==void 0&&we.SC_DISABLE_SPEEDY!==""&&we.SC_DISABLE_SPEEDY!=="false"&&we.SC_DISABLE_SPEEDY));function kt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Vi=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,i=o;n>=i;)(i<<=1)<0&&kt(16,""+n);this.groupSizes=new Uint32Array(i),this.groupSizes.set(a),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),f=0,h=r.length;f<h;f++)this.tag.insertRule(u,r[f])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),o=a+r;this.groupSizes[n]=0;for(var i=a;i<o;i++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],o=this.indexOfGroup(n),i=o+a,l=o;l<i;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Wt=new Map,qt=new Map,Et=1,Ft=function(e){if(Wt.has(e))return Wt.get(e);for(;qt.has(Et);)Et++;var t=Et++;return Wt.set(e,t),qt.set(t,e),t},qi=function(e){return qt.get(e)},Ki=function(e,t){t>=Et&&(Et=t+1),Wt.set(e,t),qt.set(t,e)},Zi="style["+pt+'][data-styled-version="5.3.11"]',Qi=new RegExp("^"+pt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ji=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},es=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,o=n.length;a<o;a++){var i=n[a].trim();if(i){var l=i.match(Qi);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(Ki(f,u),Ji(e,f,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},ts=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},mo=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){for(var u=l.childNodes,f=u.length;f>=0;f--){var h=u[f];if(h&&h.nodeType===1&&h.hasAttribute(pt))return h}}(n),o=a!==void 0?a.nextSibling:null;r.setAttribute(pt,"active"),r.setAttribute("data-styled-version","5.3.11");var i=ts();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},ns=function(){function e(n){var r=this.element=mo(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var o=document.styleSheets,i=0,l=o.length;i<l;i++){var u=o[i];if(u.ownerNode===a)return u}kt(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),rs=function(){function e(n){var r=this.element=mo(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(a,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),as=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ua=Ir,os={isServer:!Ir,useCSSOMInjection:!Xi},po=function(){function e(n,r,a){n===void 0&&(n=Ke),r===void 0&&(r={}),this.options=He({},os,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&Ir&&ua&&(ua=!1,function(o){for(var i=document.querySelectorAll(Zi),l=0,u=i.length;l<u;l++){var f=i[l];f&&f.getAttribute(pt)!=="active"&&(es(o,f),f.parentNode&&f.parentNode.removeChild(f))}}(this))}e.registerId=function(n){return Ft(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(He({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,o=r.useCSSOMInjection,i=r.target,n=a?new as(i):o?new ns(i):new rs(i),new Vi(n)));var n,r,a,o,i},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ft(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(Ft(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ft(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,o="",i=0;i<a;i++){var l=qi(i);if(l!==void 0){var u=n.names.get(l),f=r.getGroup(i);if(u&&f&&u.size){var h=pt+".g"+i+'[id="'+l+'"]',b="";u!==void 0&&u.forEach(function(x){x.length>0&&(b+=x+",")}),o+=""+f+h+'{content:"'+b+`"}/*!sc*/
`}}}return o}(this)},e}(),is=/(a)(d)/gi,ma=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ma(t%52)+n;return(ma(t%52)+n).replace(is,"$1-$2")}var ft=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ho=function(e){return ft(5381,e)};function ss(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(_t(n)&&!Pr(n))return!1}return!0}var ls=ho("5.3.11"),cs=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ss(t),this.componentId=n,this.baseHash=ft(ls,n),this.baseStyle=r,po.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))o.push(this.staticRulesId);else{var i=ht(this.rules,t,n,r).join(""),l=Kn(ft(this.baseHash,i)>>>0);if(!n.hasNameForId(a,l)){var u=r(i,"."+l,void 0,a);n.insertRules(a,l,u)}o.push(l),this.staticRulesId=l}else{for(var f=this.rules.length,h=ft(this.baseHash,r.hash),b="",x=0;x<f;x++){var M=this.rules[x];if(typeof M=="string")b+=M;else if(M){var k=ht(M,t,n,r),N=Array.isArray(k)?k.join(""):k;h=ft(h,N+x),b+=N}}if(b){var A=Kn(h>>>0);if(!n.hasNameForId(a,A)){var I=r(b,"."+A,void 0,a);n.insertRules(a,A,I)}o.push(A)}}return o.join(" ")},e}(),fs=/^\s*\/\/.*$/gm,us=[":","[",".","#"];function ms(e){var t,n,r,a,o=Ke,i=o.options,l=i===void 0?Ke:i,u=o.plugins,f=u===void 0?Vt:u,h=new Ci(l),b=[],x=function(N){function A(I){if(I)try{N(I+"}")}catch{}}return function(I,_,F,R,z,ue,pe,se,Ee,Ie){switch(I){case 1:if(Ee===0&&_.charCodeAt(0)===64)return N(_+";"),"";break;case 2:if(se===0)return _+"/*|*/";break;case 3:switch(se){case 102:case 112:return N(F[0]+_),"";default:return _+(Ie===0?"/*|*/":"")}case-2:_.split("/*|*/}").forEach(A)}}}(function(N){b.push(N)}),M=function(N,A,I){return A===0&&us.indexOf(I[n.length])!==-1||I.match(a)?N:"."+t};function k(N,A,I,_){_===void 0&&(_="&");var F=N.replace(fs,""),R=A&&I?I+" "+A+" { "+F+" }":F;return t=_,n=A,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),h(I||!A?"":A,R)}return h.use([].concat(f,[function(N,A,I){N===2&&I.length&&I[0].lastIndexOf(n)>0&&(I[0]=I[0].replace(r,M))},x,function(N){if(N===-2){var A=b;return b=[],A}}])),k.hash=f.length?f.reduce(function(N,A){return A.name||kt(15),ft(N,A.name)},5381).toString():"",k}var go=yt.createContext();go.Consumer;var yo=yt.createContext(),ds=(yo.Consumer,new po),Zn=ms();function ps(){return wt.useContext(go)||ds}function hs(){return wt.useContext(yo)||Zn}var gs=function(){function e(t,n){var r=this;this.inject=function(a,o){o===void 0&&(o=Zn);var i=r.name+o.hash;a.hasNameForId(r.id,i)||a.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.toString=function(){return kt(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Zn),this.name+t.hash},e}(),ys=/([A-Z])/,vs=/([A-Z])/g,bs=/^ms-/,As=function(e){return"-"+e.toLowerCase()};function da(e){return ys.test(e)?e.replace(vs,As).replace(bs,"-ms-"):e}var pa=function(e){return e==null||e===!1||e===""};function ht(e,t,n,r){if(Array.isArray(e)){for(var a,o=[],i=0,l=e.length;i<l;i+=1)(a=ht(e[i],t,n,r))!==""&&(Array.isArray(a)?o.push.apply(o,a):o.push(a));return o}if(pa(e))return"";if(Pr(e))return"."+e.styledComponentId;if(_t(e)){if(typeof(f=e)!="function"||f.prototype&&f.prototype.isReactComponent||!t)return e;var u=e(t);return ht(u,t,n,r)}var f;return e instanceof gs?n?(e.inject(n,r),e.getName(r)):e:qn(e)?function h(b,x){var M,k,N=[];for(var A in b)b.hasOwnProperty(A)&&!pa(b[A])&&(Array.isArray(b[A])&&b[A].isCss||_t(b[A])?N.push(da(A)+":",b[A],";"):qn(b[A])?N.push.apply(N,h(b[A],A)):N.push(da(A)+": "+(M=A,(k=b[A])==null||typeof k=="boolean"||k===""?"":typeof k!="number"||k===0||M in ki||M.startsWith("--")?String(k).trim():k+"px")+";"));return x?[x+" {"].concat(N,["}"]):N}(e):e.toString()}var ha=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ss(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return _t(e)||qn(e)?ha(ht(ca(Vt,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ha(ht(ca(e,n)))}var Es=function(e,t,n){return n===void 0&&(n=Ke),e.theme!==n.theme&&e.theme||t||n.theme},Ts=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xs=/(^-|-$)/g;function Mn(e){return e.replace(Ts,"-").replace(xs,"")}var ws=function(e){return Kn(ho(e)>>>0)};function zt(e){return typeof e=="string"&&!0}var Qn=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},_s=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Os(e,t,n){var r=e[n];Qn(t)&&Qn(r)?vo(r,t):e[n]=t}function vo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,o=n;a<o.length;a++){var i=o[a];if(Qn(i))for(var l in i)_s(l)&&Os(e,i[l],l)}return e}var bo=yt.createContext();bo.Consumer;var Dn={};function Ao(e,t,n){var r=Pr(e),a=!zt(e),o=t.attrs,i=o===void 0?Vt:o,l=t.componentId,u=l===void 0?function(_,F){var R=typeof _!="string"?"sc":Mn(_);Dn[R]=(Dn[R]||0)+1;var z=R+"-"+ws("5.3.11"+R+Dn[R]);return F?F+"-"+z:z}(t.displayName,t.parentComponentId):l,f=t.displayName,h=f===void 0?function(_){return zt(_)?"styled."+_:"Styled("+fa(_)+")"}(e):f,b=t.displayName&&t.componentId?Mn(t.displayName)+"-"+t.componentId:t.componentId||u,x=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,M=t.shouldForwardProp;r&&e.shouldForwardProp&&(M=t.shouldForwardProp?function(_,F,R){return e.shouldForwardProp(_,F,R)&&t.shouldForwardProp(_,F,R)}:e.shouldForwardProp);var k,N=new cs(n,b,r?e.componentStyle:void 0),A=N.isStatic&&i.length===0,I=function(_,F){return function(R,z,ue,pe){var se=R.attrs,Ee=R.componentStyle,Ie=R.defaultProps,Be=R.foldedComponentIds,le=R.shouldForwardProp,K=R.styledComponentId,he=R.target,ne=function(T,c,C){T===void 0&&(T=Ke);var y=He({},c,{theme:T}),B={};return C.forEach(function(j){var H,L,ee,Q=j;for(H in _t(Q)&&(Q=Q(y)),Q)y[H]=B[H]=H==="className"?(L=B[H],ee=Q[H],L&&ee?L+" "+ee:L||ee):Q[H]}),[y,B]}(Es(z,wt.useContext(bo),Ie)||Ke,z,se),De=ne[0],be=ne[1],ge=function(T,c,C,y){var B=ps(),j=hs(),H=c?T.generateAndInjectStyles(Ke,B,j):T.generateAndInjectStyles(C,B,j);return H}(Ee,pe,De),et=ue,Fe=be.$as||z.$as||be.as||z.as||he,tt=zt(Fe),E=be!==z?He({},z,{},be):z,g={};for(var S in E)S[0]!=="$"&&S!=="as"&&(S==="forwardedAs"?g.as=E[S]:(le?le(S,oa,Fe):!tt||oa(S))&&(g[S]=E[S]));return z.style&&be.style!==z.style&&(g.style=He({},z.style,{},be.style)),g.className=Array.prototype.concat(Be,K,ge!==K?ge:null,z.className,be.className).filter(Boolean).join(" "),g.ref=et,wt.createElement(Fe,g)}(k,_,F,A)};return I.displayName=h,(k=yt.forwardRef(I)).attrs=x,k.componentStyle=N,k.displayName=h,k.shouldForwardProp=M,k.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Vt,k.styledComponentId=b,k.target=r?e.target:e,k.withComponent=function(_){var F=t.componentId,R=function(ue,pe){if(ue==null)return{};var se,Ee,Ie={},Be=Object.keys(ue);for(Ee=0;Ee<Be.length;Ee++)se=Be[Ee],pe.indexOf(se)>=0||(Ie[se]=ue[se]);return Ie}(t,["componentId"]),z=F&&F+"-"+(zt(_)?_:Mn(fa(_)));return Ao(_,He({},R,{attrs:x,componentId:z}),n)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=r?vo({},e.defaultProps,_):_}}),Object.defineProperty(k,"toString",{value:function(){return"."+k.styledComponentId}}),a&&Bi(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),k}var Jn=function(e){return function t(n,r,a){if(a===void 0&&(a=Ke),!io.isValidElementType(r))return kt(1,String(r));var o=function(){return n(r,a,Ss.apply(void 0,arguments))};return o.withConfig=function(i){return t(n,r,He({},a,{},i))},o.attrs=function(i){return t(n,r,He({},a,{attrs:Array.prototype.concat(a.attrs,i).filter(Boolean)}))},o}(Ao,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Jn[e]=Jn(e)});const Cs=Jn.a`
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
`,So=({href:e,color:t,text:n,classes:r,onClick:a,onFocus:o})=>Ai.jsx(Cs,{href:e,className:`button-${t} ${r??""}`,onClick:a,onFocus:o,children:n});So.propTypes={...Er};So.__docgenInfo={description:`@param {ButtonProps} props
@returns {JSX.Element}`,methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!0},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},onFocus:{description:"",type:{name:"func"},required:!1}}};const _f={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},ks={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Of=ks,Ps={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Cf=Ps,kf={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Is={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Pf=Is;function Rs(e,t,n){return(t=Ls(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ga(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ga(Object(n),!0).forEach(function(r){Rs(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ga(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ns(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ls(e){var t=Ns(e,"string");return typeof t=="symbol"?t:t+""}const ya=()=>{};let Rr={},Eo={},To=null,xo={mark:ya,measure:ya};try{typeof window<"u"&&(Rr=window),typeof document<"u"&&(Eo=document),typeof MutationObserver<"u"&&(To=MutationObserver),typeof performance<"u"&&(xo=performance)}catch{}const{userAgent:va=""}=Rr.navigator||{},Ze=Rr,V=Eo,ba=To,$t=xo;Ze.document;const Ge=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",wo=~va.indexOf("MSIE")||~va.indexOf("Trident/");var Ms=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ds=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,_o={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Fs={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Oo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],fe="classic",En="duotone",zs="sharp",$s="sharp-duotone",Co=[fe,En,zs,$s],Us={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},js={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Hs=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ws={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ys=["fak","fa-kit","fakd","fa-kit-duotone"],Aa={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Gs=["kit"],Bs={kit:{"fa-kit":"fak"}},Xs=["fak","fakd"],Vs={kit:{fak:"fa-kit"}},Sa={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ut={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qs=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ks=["fak","fa-kit","fakd","fa-kit-duotone"],Zs={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Qs={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Js={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},er={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},el=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],tr=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...qs,...el],tl=["solid","regular","light","thin","duotone","brands"],ko=[1,2,3,4,5,6,7,8,9,10],nl=ko.concat([11,12,13,14,15,16,17,18,19,20]),rl=[...Object.keys(Js),...tl,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ut.GROUP,Ut.SWAP_OPACITY,Ut.PRIMARY,Ut.SECONDARY].concat(ko.map(e=>"".concat(e,"x"))).concat(nl.map(e=>"w-".concat(e))),al={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const We="___FONT_AWESOME___",nr=16,Po="fa",Io="svg-inline--fa",it="data-fa-i2svg",rr="data-fa-pseudo-element",ol="data-fa-pseudo-element-pending",Nr="data-prefix",Lr="data-icon",Ea="fontawesome-i2svg",il="async",sl=["HTML","HEAD","STYLE","SCRIPT"],Ro=(()=>{try{return!0}catch{return!1}})();function Pt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[fe]}})}const No=d({},_o);No[fe]=d(d(d(d({},{"fa-duotone":"duotone"}),_o[fe]),Aa.kit),Aa["kit-duotone"]);const ll=Pt(No),ar=d({},Ws);ar[fe]=d(d(d(d({},{duotone:"fad"}),ar[fe]),Sa.kit),Sa["kit-duotone"]);const Ta=Pt(ar),or=d({},er);or[fe]=d(d({},or[fe]),Vs.kit);const Mr=Pt(or),ir=d({},Qs);ir[fe]=d(d({},ir[fe]),Bs.kit);Pt(ir);const cl=Ms,Lo="fa-layers-text",fl=Ds,ul=d({},Us);Pt(ul);const ml=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fn=Fs,dl=[...Gs,...rl],Tt=Ze.FontAwesomeConfig||{};function pl(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function hl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}V&&typeof V.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=hl(pl(n));a!=null&&(Tt[r]=a)});const Mo={styleDefault:"solid",familyDefault:fe,cssPrefix:Po,replacementClass:Io,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Tt.familyPrefix&&(Tt.cssPrefix=Tt.familyPrefix);const gt=d(d({},Mo),Tt);gt.autoReplaceSvg||(gt.observeMutations=!1);const w={};Object.keys(Mo).forEach(e=>{Object.defineProperty(w,e,{enumerable:!0,set:function(t){gt[e]=t,xt.forEach(n=>n(w))},get:function(){return gt[e]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(e){gt.cssPrefix=e,xt.forEach(t=>t(w))},get:function(){return gt.cssPrefix}});Ze.FontAwesomeConfig=w;const xt=[];function gl(e){return xt.push(e),()=>{xt.splice(xt.indexOf(e),1)}}const Ve=nr,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yl(e){if(!e||!Ge)return;const t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=V.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return V.head.insertBefore(t,r),e}const vl="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ot(){let e=12,t="";for(;e-- >0;)t+=vl[Math.random()*62|0];return t}function vt(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Dr(e){return e.classList?vt(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Do(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bl(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Do(e[n]),'" '),"").trim()}function Tn(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Fr(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function Al(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(o," ").concat(i," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:u,path:f}}function Sl(e){let{transform:t,width:n=nr,height:r=nr,startCentered:a=!1}=e,o="";return a&&wo?o+="translate(".concat(t.x/Ve-n/2,"em, ").concat(t.y/Ve-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/Ve,"em), calc(-50% + ").concat(t.y/Ve,"em)) "):o+="translate(".concat(t.x/Ve,"em, ").concat(t.y/Ve,"em) "),o+="scale(".concat(t.size/Ve*(t.flipX?-1:1),", ").concat(t.size/Ve*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var El=`:root, :host {
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
}`;function Fo(){const e=Po,t=Io,n=w.cssPrefix,r=w.replacementClass;let a=El;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(r))}return a}let xa=!1;function zn(){w.autoAddCss&&!xa&&(yl(Fo()),xa=!0)}var Tl={mixout(){return{dom:{css:Fo,insertCss:zn}}},hooks(){return{beforeDOMElementCreation(){zn()},beforeI2svg(){zn()}}}};const Ye=Ze||{};Ye[We]||(Ye[We]={});Ye[We].styles||(Ye[We].styles={});Ye[We].hooks||(Ye[We].hooks={});Ye[We].shims||(Ye[We].shims=[]);var Me=Ye[We];const zo=[],$o=function(){V.removeEventListener("DOMContentLoaded",$o),Kt=1,zo.map(e=>e())};let Kt=!1;Ge&&(Kt=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),Kt||V.addEventListener("DOMContentLoaded",$o));function xl(e){Ge&&(Kt?setTimeout(e,0):zo.push(e))}function It(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Do(e):"<".concat(t," ").concat(bl(n),">").concat(r.map(It).join(""),"</").concat(t,">")}function wa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var $n=function(t,n,r,a){var o=Object.keys(t),i=o.length,l=n,u,f,h;for(r===void 0?(u=1,h=t[o[0]]):(u=0,h=r);u<i;u++)f=o[u],h=l(h,t[f],f,t);return h};function wl(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function sr(e){const t=wl(e);return t.length===1?t[0].toString(16):null}function _l(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function _a(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function lr(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=_a(t);typeof Me.hooks.addPack=="function"&&!r?Me.hooks.addPack(e,_a(t)):Me.styles[e]=d(d({},Me.styles[e]||{}),a),e==="fas"&&lr("fa",t)}const{styles:Ct,shims:Ol}=Me,Uo=Object.keys(Mr),Cl=Uo.reduce((e,t)=>(e[t]=Object.keys(Mr[t]),e),{});let zr=null,jo={},Ho={},Wo={},Yo={},Go={};function kl(e){return~dl.indexOf(e)}function Pl(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!kl(a)?a:null}const Bo=()=>{const e=r=>$n(Ct,(a,o,i)=>(a[i]=$n(o,r,{}),a),{});jo=e((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),Ho=e((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),Go=e((r,a,o)=>{const i=a[2];return r[o]=o,i.forEach(l=>{r[l]=o}),r});const t="far"in Ct||w.autoFetchSvg,n=$n(Ol,(r,a)=>{const o=a[0];let i=a[1];const l=a[2];return i==="far"&&!t&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:l}),r},{names:{},unicodes:{}});Wo=n.names,Yo=n.unicodes,zr=xn(w.styleDefault,{family:w.familyDefault})};gl(e=>{zr=xn(e.styleDefault,{family:w.familyDefault})});Bo();function $r(e,t){return(jo[e]||{})[t]}function Il(e,t){return(Ho[e]||{})[t]}function ot(e,t){return(Go[e]||{})[t]}function Xo(e){return Wo[e]||{prefix:null,iconName:null}}function Rl(e){const t=Yo[e],n=$r("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qe(){return zr}const Vo=()=>({prefix:null,iconName:null,rest:[]});function Nl(e){let t=fe;const n=Uo.reduce((r,a)=>(r[a]="".concat(w.cssPrefix,"-").concat(a),r),{});return Co.forEach(r=>{(e.includes(n[r])||e.some(a=>Cl[r].includes(a)))&&(t=r)}),t}function xn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=fe}=t,r=ll[n][e];if(n===En&&!e)return"fad";const a=Ta[n][e]||Ta[n][r],o=e in Me.styles?e:null;return a||o||null}function Ll(e){let t=[],n=null;return e.forEach(r=>{const a=Pl(w.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function Oa(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function wn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=tr.concat(Ks),o=Oa(e.filter(b=>a.includes(b))),i=Oa(e.filter(b=>!tr.includes(b))),l=o.filter(b=>(r=b,!Oo.includes(b))),[u=null]=l,f=Nl(o),h=d(d({},Ll(i)),{},{prefix:xn(u,{family:f})});return d(d(d({},h),zl({values:e,family:f,styles:Ct,config:w,canonical:h,givenPrefix:r})),Ml(n,r,h))}function Ml(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const o=t==="fa"?Xo(a):{},i=ot(r,a);return a=o.iconName||i||a,r=o.prefix||r,r==="far"&&!Ct.far&&Ct.fas&&!w.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const Dl=Co.filter(e=>e!==fe||e!==En),Fl=Object.keys(er).filter(e=>e!==fe).map(e=>Object.keys(er[e])).flat();function zl(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:o={},config:i={}}=e,l=n===En,u=t.includes("fa-duotone")||t.includes("fad"),f=i.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(u||f||h)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Dl.includes(n)&&(Object.keys(o).find(x=>Fl.includes(x))||i.autoFetchSvg)){const x=Hs.get(n).defaultShortPrefixId;r.prefix=x,r.iconName=ot(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=Qe()||"fas"),r}class $l{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=d(d({},this.definitions[o]||{}),a[o]),lr(o,a[o]);const i=Mr[fe][o];i&&lr(i,a[o]),Bo()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:i,icon:l}=r[a],u=l[2];t[o]||(t[o]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(t[o][f]=l)}),t[o][i]=l}),t}}let Ca=[],ut={};const dt={},Ul=Object.keys(dt);function jl(e,t){let{mixoutsTo:n}=t;return Ca=e,ut={},Object.keys(dt).forEach(r=>{Ul.indexOf(r)===-1&&delete dt[r]}),Ca.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(i=>{ut[i]||(ut[i]=[]),ut[i].push(o[i])})}r.provides&&r.provides(dt)}),n}function cr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(ut[e]||[]).forEach(i=>{t=i.apply(null,[t,...r])}),t}function st(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(ut[e]||[]).forEach(o=>{o.apply(null,n)})}function Je(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return dt[e]?dt[e].apply(null,t):void 0}function fr(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Qe();if(t)return t=ot(n,t)||t,wa(qo.definitions,n,t)||wa(Me.styles,n,t)}const qo=new $l,Hl=()=>{w.autoReplaceSvg=!1,w.observeMutations=!1,st("noAuto")},Wl={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ge?(st("beforeI2svg",e),Je("pseudoElements2svg",e),Je("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,xl(()=>{Gl({autoReplaceSvgRoot:t}),st("watch",e)})}},Yl={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ot(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=xn(e[0]);return{prefix:n,iconName:ot(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(w.cssPrefix,"-"))>-1||e.match(cl))){const t=wn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Qe(),iconName:ot(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Qe();return{prefix:t,iconName:ot(t,e)||e}}}},Se={noAuto:Hl,config:w,dom:Wl,parse:Yl,library:qo,findIconDefinition:fr,toHtml:It},Gl=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=V}=e;(Object.keys(Me.styles).length>0||w.autoFetchSvg)&&Ge&&w.autoReplaceSvg&&Se.dom.i2svg({node:t})};function _n(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>It(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Ge)return;const n=V.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Bl(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:i}=e;if(Fr(i)&&n.found&&!r.found){const{width:l,height:u}=n,f={x:l/u/2,y:.5};a.style=Tn(d(d({},o),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Xl(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;const i=o===!0?"".concat(t,"-").concat(w.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},a),{},{id:i}),children:r}]}]}function Ur(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:l,maskId:u,titleId:f,extra:h,watchable:b=!1}=e,{width:x,height:M}=n.found?n:t,k=Xs.includes(r),N=[w.replacementClass,a?"".concat(w.cssPrefix,"-").concat(a):""].filter(z=>h.classes.indexOf(z)===-1).filter(z=>z!==""||!!z).concat(h.classes).join(" ");let A={children:[],attributes:d(d({},h.attributes),{},{"data-prefix":r,"data-icon":a,class:N,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(M)})};const I=k&&!~h.classes.indexOf("fa-fw")?{width:"".concat(x/M*16*.0625,"em")}:{};b&&(A.attributes[it]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||Ot())},children:[l]}),delete A.attributes.title);const _=d(d({},A),{},{prefix:r,iconName:a,main:t,mask:n,maskId:u,transform:o,symbol:i,styles:d(d({},I),h.styles)}),{children:F,attributes:R}=n.found&&t.found?Je("generateAbstractMask",_)||{children:[],attributes:{}}:Je("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=F,_.attributes=R,i?Xl(_):Bl(_)}function ka(e){const{content:t,width:n,height:r,transform:a,title:o,extra:i,watchable:l=!1}=e,u=d(d(d({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(u[it]="");const f=d({},i.styles);Fr(a)&&(f.transform=Sl({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);const h=Tn(f);h.length>0&&(u.style=h);const b=[];return b.push({tag:"span",attributes:u,children:[t]}),o&&b.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),b}function Vl(e){const{content:t,title:n,extra:r}=e,a=d(d(d({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Tn(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Un}=Me;function ur(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(Fn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(Fn.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(Fn.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const ql={found:!1,width:512,height:512};function Kl(e,t){!Ro&&!w.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function mr(e,t){let n=t;return t==="fa"&&w.styleDefault!==null&&(t=Qe()),new Promise((r,a)=>{if(n==="fa"){const o=Xo(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Un[t]&&Un[t][e]){const o=Un[t][e];return r(ur(o))}Kl(e,t),r(d(d({},ql),{},{icon:w.showMissingIcons&&e?Je("missingIconAbstract")||{}:{}}))})}const Pa=()=>{},dr=w.measurePerformance&&$t&&$t.mark&&$t.measure?$t:{mark:Pa,measure:Pa},St='FA "6.7.2"',Zl=e=>(dr.mark("".concat(St," ").concat(e," begins")),()=>Ko(e)),Ko=e=>{dr.mark("".concat(St," ").concat(e," ends")),dr.measure("".concat(St," ").concat(e),"".concat(St," ").concat(e," begins"),"".concat(St," ").concat(e," ends"))};var jr={begin:Zl,end:Ko};const Yt=()=>{};function Ia(e){return typeof(e.getAttribute?e.getAttribute(it):null)=="string"}function Ql(e){const t=e.getAttribute?e.getAttribute(Nr):null,n=e.getAttribute?e.getAttribute(Lr):null;return t&&n}function Jl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(w.replacementClass)}function ec(){return w.autoReplaceSvg===!0?Gt.replace:Gt[w.autoReplaceSvg]||Gt.replace}function tc(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function nc(e){return V.createElement(e)}function Zo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?tc:nc}=t;if(typeof e=="string")return V.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Zo(o,{ceFn:n}))}),r}function rc(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Gt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Zo(n),t)}),t.getAttribute(it)===null&&w.keepOriginalSource){let n=V.createComment(rc(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Dr(t).indexOf(w.replacementClass))return Gt.replace(e);const r=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,l)=>(l===w.replacementClass||l.match(r)?i.toSvg.push(l):i.toNode.push(l),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>It(o)).join(`
`);t.setAttribute(it,""),t.innerHTML=a}};function Ra(e){e()}function Qo(e,t){const n=typeof t=="function"?t:Yt;if(e.length===0)n();else{let r=Ra;w.mutateApproach===il&&(r=Ze.requestAnimationFrame||Ra),r(()=>{const a=ec(),o=jr.begin("mutate");e.map(a),o(),n()})}}let Hr=!1;function Jo(){Hr=!0}function pr(){Hr=!1}let Zt=null;function Na(e){if(!ba||!w.observeMutations)return;const{treeCallback:t=Yt,nodeCallback:n=Yt,pseudoElementsCallback:r=Yt,observeMutationsRoot:a=V}=e;Zt=new ba(o=>{if(Hr)return;const i=Qe();vt(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Ia(l.addedNodes[0])&&(w.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&w.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Ia(l.target)&&~ml.indexOf(l.attributeName))if(l.attributeName==="class"&&Ql(l.target)){const{prefix:u,iconName:f}=wn(Dr(l.target));l.target.setAttribute(Nr,u||i),f&&l.target.setAttribute(Lr,f)}else Jl(l.target)&&n(l.target)})}),Ge&&Zt.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ac(){Zt&&Zt.disconnect()}function oc(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const o=a.split(":"),i=o[0],l=o.slice(1);return i&&l.length>0&&(r[i]=l.join(":").trim()),r},{})),n}function ic(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=wn(Dr(e));return a.prefix||(a.prefix=Qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Il(a.prefix,e.innerText)||$r(a.prefix,sr(e.innerText))),!a.iconName&&w.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function sc(e){const t=vt(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return w.autoA11y&&(n?t["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(r||Ot()):(t["aria-hidden"]="true",t.focusable="false")),t}function lc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function La(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=ic(e),o=sc(e),i=cr("parseNodeAttributes",{},e);let l=t.styleParser?oc(e):[];return d({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},i)}const{styles:cc}=Me;function ei(e){const t=w.autoReplaceSvg==="nest"?La(e,{styleParser:!1}):La(e);return~t.extra.classes.indexOf(Lo)?Je("generateLayersText",e,t):Je("generateSvgReplacementMutation",e,t)}function fc(){return[...Ys,...tr]}function Ma(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ge)return Promise.resolve();const n=V.documentElement.classList,r=h=>n.add("".concat(Ea,"-").concat(h)),a=h=>n.remove("".concat(Ea,"-").concat(h)),o=w.autoFetchSvg?fc():Oo.concat(Object.keys(cc));o.includes("fa")||o.push("fa");const i=[".".concat(Lo,":not([").concat(it,"])")].concat(o.map(h=>".".concat(h,":not([").concat(it,"])"))).join(", ");if(i.length===0)return Promise.resolve();let l=[];try{l=vt(e.querySelectorAll(i))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();const u=jr.begin("onTree"),f=l.reduce((h,b)=>{try{const x=ei(b);x&&h.push(x)}catch(x){Ro||x.name==="MissingIcon"&&console.error(x)}return h},[]);return new Promise((h,b)=>{Promise.all(f).then(x=>{Qo(x,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),u(),h()})}).catch(x=>{u(),b(x)})})}function uc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ei(e).then(n=>{n&&Qo([n],t)})}function mc(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:fr(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:fr(a||{})),e(r,d(d({},n),{},{mask:a}))}}const dc=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Le,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:l=null,classes:u=[],attributes:f={},styles:h={}}=t;if(!e)return;const{prefix:b,iconName:x,icon:M}=e;return _n(d({type:"icon"},e),()=>(st("beforeDOMElementCreation",{iconDefinition:e,params:t}),w.autoA11y&&(i?f["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(l||Ot()):(f["aria-hidden"]="true",f.focusable="false")),Ur({icons:{main:ur(M),mask:a?ur(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:x,transform:d(d({},Le),n),symbol:r,title:i,maskId:o,titleId:l,extra:{attributes:f,styles:h,classes:u}})))};var pc={mixout(){return{icon:mc(dc)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Ma,e.nodeCallback=uc,e}}},provides(e){e.i2svg=function(t){const{node:n=V,callback:r=()=>{}}=t;return Ma(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:o,prefix:i,transform:l,symbol:u,mask:f,maskId:h,extra:b}=n;return new Promise((x,M)=>{Promise.all([mr(r,i),f.iconName?mr(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[N,A]=k;x([t,Ur({icons:{main:N,mask:A},prefix:i,iconName:r,transform:l,symbol:u,maskId:h,title:a,titleId:o,extra:b,watchable:!0})])}).catch(M)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:o,styles:i}=t;const l=Tn(i);l.length>0&&(r.style=l);let u;return Fr(o)&&(u=Je("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(u||a.icon),{children:n,attributes:r}}}},hc={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return _n({type:"layer"},()=>{st("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},gc={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return _n({type:"counter",content:e},()=>(st("beforeDOMElementCreation",{content:e,params:t}),Vl({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(w.cssPrefix,"-layers-counter"),...r]}})))}}}},yc={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Le,title:r=null,classes:a=[],attributes:o={},styles:i={}}=t;return _n({type:"text",content:e},()=>(st("beforeDOMElementCreation",{content:e,params:t}),ka({content:e,transform:d(d({},Le),n),title:r,extra:{attributes:o,styles:i,classes:["".concat(w.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:o}=n;let i=null,l=null;if(wo){const u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/u,l=f.height/u}return w.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,ka({content:t.innerHTML,width:i,height:l,transform:a,title:r,extra:o,watchable:!0})])}}};const vc=new RegExp('"',"ug"),Da=[1105920,1112319],Fa=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),js),al),Zs),hr=Object.keys(Fa).reduce((e,t)=>(e[t.toLowerCase()]=Fa[t],e),{}),bc=Object.keys(hr).reduce((e,t)=>{const n=hr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Ac(e){const t=e.replace(vc,""),n=_l(t,0),r=n>=Da[0]&&n<=Da[1],a=t.length===2?t[0]===t[1]:!1;return{value:sr(a?t[0]:t),isSecondary:r||a}}function Sc(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(hr[n]||{})[a]||bc[n]}function za(e,t){const n="".concat(ol).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const i=vt(e.children).filter(x=>x.getAttribute(rr)===t)[0],l=Ze.getComputedStyle(e,t),u=l.getPropertyValue("font-family"),f=u.match(fl),h=l.getPropertyValue("font-weight"),b=l.getPropertyValue("content");if(i&&!f)return e.removeChild(i),r();if(f&&b!=="none"&&b!==""){const x=l.getPropertyValue("content");let M=Sc(u,h);const{value:k,isSecondary:N}=Ac(x),A=f[0].startsWith("FontAwesome");let I=$r(M,k),_=I;if(A){const F=Rl(k);F.iconName&&F.prefix&&(I=F.iconName,M=F.prefix)}if(I&&!N&&(!i||i.getAttribute(Nr)!==M||i.getAttribute(Lr)!==_)){e.setAttribute(n,_),i&&e.removeChild(i);const F=lc(),{extra:R}=F;R.attributes[rr]=t,mr(I,M).then(z=>{const ue=Ur(d(d({},F),{},{icons:{main:z,mask:Vo()},prefix:M,iconName:_,extra:R,watchable:!0})),pe=V.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(pe,e.firstChild):e.appendChild(pe),pe.outerHTML=ue.map(se=>It(se)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ec(e){return Promise.all([za(e,"::before"),za(e,"::after")])}function Tc(e){return e.parentNode!==document.head&&!~sl.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(rr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function $a(e){if(Ge)return new Promise((t,n)=>{const r=vt(e.querySelectorAll("*")).filter(Tc).map(Ec),a=jr.begin("searchPseudoElements");Jo(),Promise.all(r).then(()=>{a(),pr(),t()}).catch(()=>{a(),pr(),n()})})}var xc={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=$a,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=V}=t;w.searchPseudoElements&&$a(n)}}};let Ua=!1;var wc={mixout(){return{dom:{unwatch(){Jo(),Ua=!0}}}},hooks(){return{bootstrap(){Na(cr("mutationObserverCallbacks",{}))},noAuto(){ac()},watch(e){const{observeMutationsRoot:t}=e;Ua?pr():Na(cr("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const ja=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var _c={mixout(){return{parse:{transform:e=>ja(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=ja(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:o}=t;const i={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(f)},b={transform:"translate(".concat(o/2*-1," -256)")},x={outer:i,inner:h,path:b};return{tag:"g",attributes:d({},x.outer),children:[{tag:"g",attributes:d({},x.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),x.path)}]}]}}}};const jn={x:0,y:0,width:"100%",height:"100%"};function Ha(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Oc(e){return e.tag==="g"?e.children:[e]}var Cc={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?wn(n.split(" ").map(a=>a.trim())):Vo();return r.prefix||(r.prefix=Qe()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:l}=t;const{width:u,icon:f}=a,{width:h,icon:b}=o,x=Al({transform:l,containerWidth:h,iconWidth:u}),M={tag:"rect",attributes:d(d({},jn),{},{fill:"white"})},k=f.children?{children:f.children.map(Ha)}:{},N={tag:"g",attributes:d({},x.inner),children:[Ha(d({tag:f.tag,attributes:d(d({},f.attributes),x.path)},k))]},A={tag:"g",attributes:d({},x.outer),children:[N]},I="mask-".concat(i||Ot()),_="clip-".concat(i||Ot()),F={tag:"mask",attributes:d(d({},jn),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,A]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:Oc(b)},F]};return n.push(R,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(I,")")},jn)}),{children:n,attributes:r}}}},kc={provides(e){let t=!1;Ze.matchMedia&&(t=Ze.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=d(d({},a),{},{attributeName:"opacity"}),i={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:d(d({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Pc={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Ic=[Tl,pc,hc,gc,yc,xc,wc,_c,Cc,kc,Pc];jl(Ic,{mixoutsTo:Se});Se.noAuto;Se.config;Se.library;Se.dom;const gr=Se.parse;Se.findIconDefinition;Se.toHtml;const Rc=Se.icon;Se.layer;Se.text;Se.counter;function Wa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wa(Object(n),!0).forEach(function(r){mt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qt(e){"@babel/helpers - typeof";return Qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qt(e)}function mt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nc(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Lc(e,t){if(e==null)return{};var n=Nc(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yr(e){return Mc(e)||Dc(e)||Fc(e)||zc()}function Mc(e){if(Array.isArray(e))return vr(e)}function Dc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fc(e,t){if(e){if(typeof e=="string")return vr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vr(e,t)}}function vr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $c(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,l=e.flash,u=e.spin,f=e.spinPulse,h=e.spinReverse,b=e.pulse,x=e.fixedWidth,M=e.inverse,k=e.border,N=e.listItem,A=e.flip,I=e.size,_=e.rotation,F=e.pull,R=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":h,"fa-spin-pulse":f,"fa-pulse":b,"fa-fw":x,"fa-inverse":M,"fa-border":k,"fa-li":N,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},mt(t,"fa-".concat(I),typeof I<"u"&&I!==null),mt(t,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),mt(t,"fa-pull-".concat(F),typeof F<"u"&&F!==null),mt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(R).map(function(z){return R[z]?z:null}).filter(function(z){return z})}function Uc(e){return e=e-0,e===e}function ti(e){return Uc(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var jc=["style"];function Hc(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Wc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ti(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?t[Hc(a)]=o:t[a]=o,t},{})}function ni(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return ni(e,u)}),a=Object.keys(t.attributes||{}).reduce(function(u,f){var h=t.attributes[f];switch(f){case"class":u.attrs.className=h,delete t.attributes.class;break;case"style":u.attrs.style=Wc(h);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=h:u.attrs[ti(f)]=h}return u},{attrs:{}}),o=n.style,i=o===void 0?{}:o,l=Lc(n,jc);return a.attrs.style=Ne(Ne({},a.attrs.style),i),e.apply(void 0,[t.tag,Ne(Ne({},a.attrs),l)].concat(yr(r)))}var ri=!1;try{ri=!0}catch{}function Yc(){if(!ri&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ya(e){if(e&&Qt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(gr.icon)return gr.icon(e);if(e===null)return null;if(e&&Qt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Hn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?mt({},e,t):{}}var Ga={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ai=yt.forwardRef(function(e,t){var n=Ne(Ne({},Ga),e),r=n.icon,a=n.mask,o=n.symbol,i=n.className,l=n.title,u=n.titleId,f=n.maskId,h=Ya(r),b=Hn("classes",[].concat(yr($c(n)),yr((i||"").split(" ")))),x=Hn("transform",typeof n.transform=="string"?gr.transform(n.transform):n.transform),M=Hn("mask",Ya(a)),k=Rc(h,Ne(Ne(Ne(Ne({},b),x),M),{},{symbol:o,title:l,titleId:u,maskId:f}));if(!k)return Yc("Could not find icon",h),null;var N=k.abstract,A={ref:t};return Object.keys(n).forEach(function(I){Ga.hasOwnProperty(I)||(A[I]=n[I])}),Gc(N[0],A)});ai.displayName="FontAwesomeIcon";ai.propTypes={beat:m.bool,border:m.bool,beatFade:m.bool,bounce:m.bool,className:m.string,fade:m.bool,flash:m.bool,mask:m.oneOfType([m.object,m.array,m.string]),maskId:m.string,fixedWidth:m.bool,inverse:m.bool,flip:m.oneOf([!0,!1,"horizontal","vertical","both"]),icon:m.oneOfType([m.object,m.array,m.string]),listItem:m.bool,pull:m.oneOf(["right","left"]),pulse:m.bool,rotation:m.oneOf([0,90,180,270]),shake:m.bool,size:m.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:m.bool,spinPulse:m.bool,spinReverse:m.bool,symbol:m.oneOfType([m.bool,m.string]),title:m.string,titleId:m.string,transform:m.oneOfType([m.string,m.object]),swapOpacity:m.bool};var Gc=ni.bind(null,yt.createElement);function qe(e){"@babel/helpers - typeof";return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qe(e)}function br(e,t){return br=Object.setPrototypeOf||function(r,a){return r.__proto__=a,r},br(e,t)}function Bc(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Bt(e,t,n){return Bc()?Bt=Reflect.construct:Bt=function(a,o,i){var l=[null];l.push.apply(l,o);var u=Function.bind.apply(a,l),f=new u;return i&&br(f,i.prototype),f},Bt.apply(null,arguments)}function Pe(e){return Xc(e)||Vc(e)||qc(e)||Kc()}function Xc(e){if(Array.isArray(e))return Ar(e)}function Vc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qc(e,t){if(e){if(typeof e=="string")return Ar(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ar(e,t)}}function Ar(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Kc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zc=Object.hasOwnProperty,Ba=Object.setPrototypeOf,Qc=Object.isFrozen,Jc=Object.getPrototypeOf,ef=Object.getOwnPropertyDescriptor,de=Object.freeze,_e=Object.seal,tf=Object.create,oi=typeof Reflect<"u"&&Reflect,Jt=oi.apply,Sr=oi.construct;Jt||(Jt=function(t,n,r){return t.apply(n,r)});de||(de=function(t){return t});_e||(_e=function(t){return t});Sr||(Sr=function(t,n){return Bt(t,Pe(n))});var nf=Oe(Array.prototype.forEach),Xa=Oe(Array.prototype.pop),At=Oe(Array.prototype.push),Xt=Oe(String.prototype.toLowerCase),Wn=Oe(String.prototype.toString),Va=Oe(String.prototype.match),ke=Oe(String.prototype.replace),rf=Oe(String.prototype.indexOf),af=Oe(String.prototype.trim),ie=Oe(RegExp.prototype.test),Yn=of(TypeError);function Oe(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return Jt(e,t,r)}}function of(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Sr(e,n)}}function D(e,t,n){var r;n=(r=n)!==null&&r!==void 0?r:Xt,Ba&&Ba(e,null);for(var a=t.length;a--;){var o=t[a];if(typeof o=="string"){var i=n(o);i!==o&&(Qc(t)||(t[a]=i),o=i)}e[o]=!0}return e}function at(e){var t=tf(null),n;for(n in e)Jt(Zc,e,[n])===!0&&(t[n]=e[n]);return t}function jt(e,t){for(;e!==null;){var n=ef(e,t);if(n){if(n.get)return Oe(n.get);if(typeof n.value=="function")return Oe(n.value)}e=Jc(e)}function r(a){return console.warn("fallback value for",a),null}return r}var qa=de(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Gn=de(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Bn=de(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),sf=de(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Xn=de(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),lf=de(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ka=de(["#text"]),Za=de(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Vn=de(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Qa=de(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ht=de(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),cf=_e(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ff=_e(/<%[\w\W]*|[\w\W]*%>/gm),uf=_e(/\${[\w\W]*}/gm),mf=_e(/^data-[\-\w.\u00B7-\uFFFF]+$/),df=_e(/^aria-[\-\w]+$/),pf=_e(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),hf=_e(/^(?:\w+script|data):/i),gf=_e(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),yf=_e(/^html$/i),vf=_e(/^[a-z][.\w]*(-[.\w]+)+$/i),bf=function(){return typeof window>"u"?null:window},Af=function(t,n){if(qe(t)!=="object"||typeof t.createPolicy!="function")return null;var r=null,a="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(a)&&(r=n.currentScript.getAttribute(a));var o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML:function(l){return l},createScriptURL:function(l){return l}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function ii(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:bf(),t=function(s){return ii(s)};if(t.version="2.5.8",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;var n=e.document,r=e.document,a=e.DocumentFragment,o=e.HTMLTemplateElement,i=e.Node,l=e.Element,u=e.NodeFilter,f=e.NamedNodeMap,h=f===void 0?e.NamedNodeMap||e.MozNamedAttrMap:f,b=e.HTMLFormElement,x=e.DOMParser,M=e.trustedTypes,k=l.prototype,N=jt(k,"cloneNode"),A=jt(k,"nextSibling"),I=jt(k,"childNodes"),_=jt(k,"parentNode");if(typeof o=="function"){var F=r.createElement("template");F.content&&F.content.ownerDocument&&(r=F.content.ownerDocument)}var R=Af(M,n),z=R?R.createHTML(""):"",ue=r,pe=ue.implementation,se=ue.createNodeIterator,Ee=ue.createDocumentFragment,Ie=ue.getElementsByTagName,Be=n.importNode,le={};try{le=at(r).documentMode?r.documentMode:{}}catch{}var K={};t.isSupported=typeof _=="function"&&pe&&pe.createHTMLDocument!==void 0&&le!==9;var he=cf,ne=ff,De=uf,be=mf,ge=df,et=hf,Fe=gf,tt=vf,E=pf,g=null,S=D({},[].concat(Pe(qa),Pe(Gn),Pe(Bn),Pe(Xn),Pe(Ka))),T=null,c=D({},[].concat(Pe(Za),Pe(Vn),Pe(Qa),Pe(Ht))),C=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),y=null,B=null,j=!0,H=!0,L=!1,ee=!0,Q=!1,$=!0,q=!1,U=!1,J=!1,Te=!1,Z=!1,ze=!1,Xe=!0,ye=!1,P="user-content-",X=!0,$e=!1,Re={},me=null,Wr=D({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Yr=null,Gr=D({},["audio","video","img","source","image","track"]),On=null,Br=D({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Rt="http://www.w3.org/1998/Math/MathML",Nt="http://www.w3.org/2000/svg",Ue="http://www.w3.org/1999/xhtml",lt=Ue,Cn=!1,kn=null,si=D({},[Rt,Nt,Ue],Wn),nt,li=["application/xhtml+xml","text/html"],ci="text/html",re,ct=null,fi=r.createElement("form"),Xr=function(s){return s instanceof RegExp||s instanceof Function},Pn=function(s){ct&&ct===s||((!s||qe(s)!=="object")&&(s={}),s=at(s),nt=li.indexOf(s.PARSER_MEDIA_TYPE)===-1?nt=ci:nt=s.PARSER_MEDIA_TYPE,re=nt==="application/xhtml+xml"?Wn:Xt,g="ALLOWED_TAGS"in s?D({},s.ALLOWED_TAGS,re):S,T="ALLOWED_ATTR"in s?D({},s.ALLOWED_ATTR,re):c,kn="ALLOWED_NAMESPACES"in s?D({},s.ALLOWED_NAMESPACES,Wn):si,On="ADD_URI_SAFE_ATTR"in s?D(at(Br),s.ADD_URI_SAFE_ATTR,re):Br,Yr="ADD_DATA_URI_TAGS"in s?D(at(Gr),s.ADD_DATA_URI_TAGS,re):Gr,me="FORBID_CONTENTS"in s?D({},s.FORBID_CONTENTS,re):Wr,y="FORBID_TAGS"in s?D({},s.FORBID_TAGS,re):{},B="FORBID_ATTR"in s?D({},s.FORBID_ATTR,re):{},Re="USE_PROFILES"in s?s.USE_PROFILES:!1,j=s.ALLOW_ARIA_ATTR!==!1,H=s.ALLOW_DATA_ATTR!==!1,L=s.ALLOW_UNKNOWN_PROTOCOLS||!1,ee=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Q=s.SAFE_FOR_TEMPLATES||!1,$=s.SAFE_FOR_XML!==!1,q=s.WHOLE_DOCUMENT||!1,Te=s.RETURN_DOM||!1,Z=s.RETURN_DOM_FRAGMENT||!1,ze=s.RETURN_TRUSTED_TYPE||!1,J=s.FORCE_BODY||!1,Xe=s.SANITIZE_DOM!==!1,ye=s.SANITIZE_NAMED_PROPS||!1,X=s.KEEP_CONTENT!==!1,$e=s.IN_PLACE||!1,E=s.ALLOWED_URI_REGEXP||E,lt=s.NAMESPACE||Ue,C=s.CUSTOM_ELEMENT_HANDLING||{},s.CUSTOM_ELEMENT_HANDLING&&Xr(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(C.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&Xr(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(C.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(C.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Q&&(H=!1),Z&&(Te=!0),Re&&(g=D({},Pe(Ka)),T=[],Re.html===!0&&(D(g,qa),D(T,Za)),Re.svg===!0&&(D(g,Gn),D(T,Vn),D(T,Ht)),Re.svgFilters===!0&&(D(g,Bn),D(T,Vn),D(T,Ht)),Re.mathMl===!0&&(D(g,Xn),D(T,Qa),D(T,Ht))),s.ADD_TAGS&&(g===S&&(g=at(g)),D(g,s.ADD_TAGS,re)),s.ADD_ATTR&&(T===c&&(T=at(T)),D(T,s.ADD_ATTR,re)),s.ADD_URI_SAFE_ATTR&&D(On,s.ADD_URI_SAFE_ATTR,re),s.FORBID_CONTENTS&&(me===Wr&&(me=at(me)),D(me,s.FORBID_CONTENTS,re)),X&&(g["#text"]=!0),q&&D(g,["html","head","body"]),g.table&&(D(g,["tbody"]),delete y.tbody),de&&de(s),ct=s)},Vr=D({},["mi","mo","mn","ms","mtext"]),qr=D({},["annotation-xml"]),ui=D({},["title","style","font","a","script"]),Lt=D({},Gn);D(Lt,Bn),D(Lt,sf);var In=D({},Xn);D(In,lf);var mi=function(s){var p=_(s);(!p||!p.tagName)&&(p={namespaceURI:lt,tagName:"template"});var v=Xt(s.tagName),W=Xt(p.tagName);return kn[s.namespaceURI]?s.namespaceURI===Nt?p.namespaceURI===Ue?v==="svg":p.namespaceURI===Rt?v==="svg"&&(W==="annotation-xml"||Vr[W]):!!Lt[v]:s.namespaceURI===Rt?p.namespaceURI===Ue?v==="math":p.namespaceURI===Nt?v==="math"&&qr[W]:!!In[v]:s.namespaceURI===Ue?p.namespaceURI===Nt&&!qr[W]||p.namespaceURI===Rt&&!Vr[W]?!1:!In[v]&&(ui[v]||!Lt[v]):!!(nt==="application/xhtml+xml"&&kn[s.namespaceURI]):!1},xe=function(s){At(t.removed,{element:s});try{s.parentNode.removeChild(s)}catch{try{s.outerHTML=z}catch{s.remove()}}},Mt=function(s,p){try{At(t.removed,{attribute:p.getAttributeNode(s),from:p})}catch{At(t.removed,{attribute:null,from:p})}if(p.removeAttribute(s),s==="is"&&!T[s])if(Te||Z)try{xe(p)}catch{}else try{p.setAttribute(s,"")}catch{}},Kr=function(s){var p,v;if(J)s="<remove></remove>"+s;else{var W=Va(s,/^[\r\n\t ]+/);v=W&&W[0]}nt==="application/xhtml+xml"&&lt===Ue&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");var ve=R?R.createHTML(s):s;if(lt===Ue)try{p=new x().parseFromString(ve,nt)}catch{}if(!p||!p.documentElement){p=pe.createDocument(lt,"template",null);try{p.documentElement.innerHTML=Cn?z:ve}catch{}}var ce=p.body||p.documentElement;return s&&v&&ce.insertBefore(r.createTextNode(v),ce.childNodes[0]||null),lt===Ue?Ie.call(p,q?"html":"body")[0]:q?p.documentElement:ce},Zr=function(s){return se.call(s.ownerDocument||s,s,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null,!1)},Rn=function(s){return s instanceof b&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof h)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},bt=function(s){return qe(i)==="object"?s instanceof i:s&&qe(s)==="object"&&typeof s.nodeType=="number"&&typeof s.nodeName=="string"},je=function(s,p,v){K[s]&&nf(K[s],function(W){W.call(t,p,v,ct)})},Qr=function(s){var p;if(je("beforeSanitizeElements",s,null),Rn(s)||ie(/[\u0080-\uFFFF]/,s.nodeName))return xe(s),!0;var v=re(s.nodeName);if(je("uponSanitizeElement",s,{tagName:v,allowedTags:g}),s.hasChildNodes()&&!bt(s.firstElementChild)&&(!bt(s.content)||!bt(s.content.firstElementChild))&&ie(/<[/\w]/g,s.innerHTML)&&ie(/<[/\w]/g,s.textContent)||v==="select"&&ie(/<template/i,s.innerHTML)||s.nodeType===7||$&&s.nodeType===8&&ie(/<[/\w]/g,s.data))return xe(s),!0;if(!g[v]||y[v]){if(!y[v]&&ea(v)&&(C.tagNameCheck instanceof RegExp&&ie(C.tagNameCheck,v)||C.tagNameCheck instanceof Function&&C.tagNameCheck(v)))return!1;if(X&&!me[v]){var W=_(s)||s.parentNode,ve=I(s)||s.childNodes;if(ve&&W)for(var ce=ve.length,oe=ce-1;oe>=0;--oe){var rt=N(ve[oe],!0);rt.__removalCount=(s.__removalCount||0)+1,W.insertBefore(rt,A(s))}}return xe(s),!0}return s instanceof l&&!mi(s)||(v==="noscript"||v==="noembed"||v==="noframes")&&ie(/<\/no(script|embed|frames)/i,s.innerHTML)?(xe(s),!0):(Q&&s.nodeType===3&&(p=s.textContent,p=ke(p,he," "),p=ke(p,ne," "),p=ke(p,De," "),s.textContent!==p&&(At(t.removed,{element:s.cloneNode()}),s.textContent=p)),je("afterSanitizeElements",s,null),!1)},Jr=function(s,p,v){if(Xe&&(p==="id"||p==="name")&&(v in r||v in fi))return!1;if(!(H&&!B[p]&&ie(be,p))){if(!(j&&ie(ge,p))){if(!T[p]||B[p]){if(!(ea(s)&&(C.tagNameCheck instanceof RegExp&&ie(C.tagNameCheck,s)||C.tagNameCheck instanceof Function&&C.tagNameCheck(s))&&(C.attributeNameCheck instanceof RegExp&&ie(C.attributeNameCheck,p)||C.attributeNameCheck instanceof Function&&C.attributeNameCheck(p))||p==="is"&&C.allowCustomizedBuiltInElements&&(C.tagNameCheck instanceof RegExp&&ie(C.tagNameCheck,v)||C.tagNameCheck instanceof Function&&C.tagNameCheck(v))))return!1}else if(!On[p]){if(!ie(E,ke(v,Fe,""))){if(!((p==="src"||p==="xlink:href"||p==="href")&&s!=="script"&&rf(v,"data:")===0&&Yr[s])){if(!(L&&!ie(et,ke(v,Fe,"")))){if(v)return!1}}}}}}return!0},ea=function(s){return s!=="annotation-xml"&&Va(s,tt)},ta=function(s){var p,v,W,ve;je("beforeSanitizeAttributes",s,null);var ce=s.attributes;if(!(!ce||Rn(s))){var oe={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:T};for(ve=ce.length;ve--;){p=ce[ve];var rt=p,te=rt.name,Nn=rt.namespaceURI;if(v=te==="value"?p.value:af(p.value),W=re(te),oe.attrName=W,oe.attrValue=v,oe.keepAttr=!0,oe.forceKeepAttr=void 0,je("uponSanitizeAttribute",s,oe),v=oe.attrValue,!oe.forceKeepAttr&&(Mt(te,s),!!oe.keepAttr)){if(!ee&&ie(/\/>/i,v)){Mt(te,s);continue}Q&&(v=ke(v,he," "),v=ke(v,ne," "),v=ke(v,De," "));var na=re(s.nodeName);if(Jr(na,W,v)){if(ye&&(W==="id"||W==="name")&&(Mt(te,s),v=P+v),$&&ie(/((--!?|])>)|<\/(style|title)/i,v)){Mt(te,s);continue}if(R&&qe(M)==="object"&&typeof M.getAttributeType=="function"&&!Nn)switch(M.getAttributeType(na,W)){case"TrustedHTML":{v=R.createHTML(v);break}case"TrustedScriptURL":{v=R.createScriptURL(v);break}}try{Nn?s.setAttributeNS(Nn,te,v):s.setAttribute(te,v),Rn(s)?xe(s):Xa(t.removed)}catch{}}}}je("afterSanitizeAttributes",s,null)}},di=function O(s){var p,v=Zr(s);for(je("beforeSanitizeShadowDOM",s,null);p=v.nextNode();)je("uponSanitizeShadowNode",p,null),Qr(p),ta(p),p.content instanceof a&&O(p.content);je("afterSanitizeShadowDOM",s,null)};return t.sanitize=function(O){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p,v,W,ve,ce;if(Cn=!O,Cn&&(O="<!-->"),typeof O!="string"&&!bt(O))if(typeof O.toString=="function"){if(O=O.toString(),typeof O!="string")throw Yn("dirty is not a string, aborting")}else throw Yn("toString is not a function");if(!t.isSupported){if(qe(e.toStaticHTML)==="object"||typeof e.toStaticHTML=="function"){if(typeof O=="string")return e.toStaticHTML(O);if(bt(O))return e.toStaticHTML(O.outerHTML)}return O}if(U||Pn(s),t.removed=[],typeof O=="string"&&($e=!1),$e){if(O.nodeName){var oe=re(O.nodeName);if(!g[oe]||y[oe])throw Yn("root node is forbidden and cannot be sanitized in-place")}}else if(O instanceof i)p=Kr("<!---->"),v=p.ownerDocument.importNode(O,!0),v.nodeType===1&&v.nodeName==="BODY"||v.nodeName==="HTML"?p=v:p.appendChild(v);else{if(!Te&&!Q&&!q&&O.indexOf("<")===-1)return R&&ze?R.createHTML(O):O;if(p=Kr(O),!p)return Te?null:ze?z:""}p&&J&&xe(p.firstChild);for(var rt=Zr($e?O:p);W=rt.nextNode();)W.nodeType===3&&W===ve||(Qr(W),ta(W),W.content instanceof a&&di(W.content),ve=W);if(ve=null,$e)return O;if(Te){if(Z)for(ce=Ee.call(p.ownerDocument);p.firstChild;)ce.appendChild(p.firstChild);else ce=p;return(T.shadowroot||T.shadowrootmod)&&(ce=Be.call(n,ce,!0)),ce}var te=q?p.outerHTML:p.innerHTML;return q&&g["!doctype"]&&p.ownerDocument&&p.ownerDocument.doctype&&p.ownerDocument.doctype.name&&ie(yf,p.ownerDocument.doctype.name)&&(te="<!DOCTYPE "+p.ownerDocument.doctype.name+`>
`+te),Q&&(te=ke(te,he," "),te=ke(te,ne," "),te=ke(te,De," ")),R&&ze?R.createHTML(te):te},t.setConfig=function(O){Pn(O),U=!0},t.clearConfig=function(){ct=null,U=!1},t.isValidAttribute=function(O,s,p){ct||Pn({});var v=re(O),W=re(s);return Jr(v,W,p)},t.addHook=function(O,s){typeof s=="function"&&(K[O]=K[O]||[],At(K[O],s))},t.removeHook=function(O){if(K[O])return Xa(K[O])},t.removeHooks=function(O){K[O]&&(K[O]=[])},t.removeAllHooks=function(){K={}},t}ii();m.shape({event:m.string,action:m.string,name:m.string,region:m.string,section:m.string,component:m.string,type:m.string,text:m.string});const If=({event:e="",action:t="",name:n="",type:r="",section:a="",text:o="",region:i="",component:l=""})=>{const{dataLayer:u}=window,f={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:i.toLowerCase(),section:a.toLowerCase(),text:o.toLowerCase(),component:l.toLowerCase()};u&&u.push(f)};export{Ss as A,So as B,ai as F,wf as H,aa as N,m as P,Ln as T,xf as a,Cf as b,Pf as c,Er as d,Of as e,kf as f,_f as g,Ai as j,wi as p,Jn as q,If as t};
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
/*! @license DOMPurify 2.5.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.8/LICENSE */
