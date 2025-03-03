import{r as Ot,R as pt}from"./index-B2SEcK1p.js";import{g as Qa}from"./_commonjsHelpers-B3tUAs5q.js";var Ja={exports:{}},tn={};var gi=Ot,yi=Symbol.for("react.element"),bi=Symbol.for("react.fragment"),vi=Object.prototype.hasOwnProperty,Ai=gi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Si={key:!0,ref:!0,__self:!0,__source:!0};function eo(e,t,n){var r,a={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)vi.call(t,r)&&!Si.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:yi,type:e,key:o,ref:i,props:a,_owner:Ai.current}}tn.Fragment=bi;tn.jsx=eo;tn.jsxs=eo;Ja.exports=tn;var Ei=Ja.exports,to={exports:{}},Ti="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xi=Ti,_i=xi;function no(){}function ro(){}ro.resetWarningCache=no;var wi=function(){function e(r,a,o,i,l,u){if(u!==_i){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ro,resetWarningCache:no};return n.PropTypes=n,n};to.exports=wi();var Oi=to.exports;const m=Qa(Oi);function bf({packageName:e="",component:t="",type:n="",configuration:r={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}}const ea={alt:m.string,title:m.string,src:m.string,mobileSrc:m.string,brandLink:m.string},Nn={baseUrl:m.string,parentOrg:m.string,parentOrgUrl:m.string,animate:m.bool},Ut={loggedIn:m.bool,loginLink:m.string,logoutLink:m.string,userName:m.string},vr={text:m.string.isRequired,color:m.oneOf(["gold","maroon","light","dark"]),href:m.string.isRequired,classes:m.string,onClick:m.func,onFocus:m.func},ta=m.shape({id:m.number,href:m.string,text:m.string,type:m.string,selected:m.bool,items:m.arrayOf(m.arrayOf(m.object)),buttons:m.arrayOf(m.shape(vr)),class:m.string}),vf={isPartner:m.bool,navTree:m.arrayOf(ta),partnerLogo:m.shape(ea),logo:m.shape(ea),title:m.string,parentOrg:Nn.parentOrg,parentOrgUrl:Nn.parentOrgUrl,baseUrl:Nn.baseUrl,loggedIn:Ut.loggedIn,userName:Ut.userName,loginLink:Ut.loginLink,onLoginClick:m.func,logoutLink:Ut.logoutLink,onLogoutClick:m.func,buttons:m.arrayOf(m.shape(vr)),breakpoint:m.oneOf(["Lg","Xl"]),animateTitle:m.bool,expandOnHover:m.bool,mobileNavTree:m.arrayOf(ta),hasNavigation:m.bool,searchUrl:m.string,site:m.string,renderDiv:m.oneOf(["true","false"])};var ao={exports:{}},G={};var Ar=Symbol.for("react.transitional.element"),Sr=Symbol.for("react.portal"),nn=Symbol.for("react.fragment"),rn=Symbol.for("react.strict_mode"),an=Symbol.for("react.profiler"),on=Symbol.for("react.consumer"),sn=Symbol.for("react.context"),ln=Symbol.for("react.forward_ref"),cn=Symbol.for("react.suspense"),fn=Symbol.for("react.suspense_list"),un=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),Ci=Symbol.for("react.offscreen"),ki=Symbol.for("react.client.reference");function Oe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ar:switch(e=e.type,e){case nn:case an:case rn:case cn:case fn:return e;default:switch(e=e&&e.$$typeof,e){case sn:case ln:case mn:case un:return e;case on:return e;default:return t}}case Sr:return t}}}G.ContextConsumer=on;G.ContextProvider=sn;G.Element=Ar;G.ForwardRef=ln;G.Fragment=nn;G.Lazy=mn;G.Memo=un;G.Portal=Sr;G.Profiler=an;G.StrictMode=rn;G.Suspense=cn;G.SuspenseList=fn;G.isContextConsumer=function(e){return Oe(e)===on};G.isContextProvider=function(e){return Oe(e)===sn};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ar};G.isForwardRef=function(e){return Oe(e)===ln};G.isFragment=function(e){return Oe(e)===nn};G.isLazy=function(e){return Oe(e)===mn};G.isMemo=function(e){return Oe(e)===un};G.isPortal=function(e){return Oe(e)===Sr};G.isProfiler=function(e){return Oe(e)===an};G.isStrictMode=function(e){return Oe(e)===rn};G.isSuspense=function(e){return Oe(e)===cn};G.isSuspenseList=function(e){return Oe(e)===fn};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nn||e===an||e===rn||e===cn||e===fn||e===Ci||typeof e=="object"&&e!==null&&(e.$$typeof===mn||e.$$typeof===un||e.$$typeof===sn||e.$$typeof===on||e.$$typeof===ln||e.$$typeof===ki||e.getModuleId!==void 0)};G.typeOf=Oe;ao.exports=G;var oo=ao.exports;function Pi(e){function t(T,g,S,b,c){for(var j=0,y=0,B=0,$=0,H,I,J=0,Z=0,U,ee=U=H=0,F=0,Q=0,Ie=0,te=0,Qe=S.length,Je=Qe-1,me,k="",Y="",Re="",at="",Ce;F<Qe;){if(I=S.charCodeAt(F),F===Je&&y+$+B+j!==0&&(y!==0&&(I=y===47?10:47),$=B=j=0,Qe++,Je++),y+$+B+j===0){if(F===Je&&(0<Q&&(k=k.replace(x,"")),0<k.trim().length)){switch(I){case 32:case 9:case 59:case 13:case 10:break;default:k+=S.charAt(F)}I=59}switch(I){case 123:for(k=k.trim(),H=k.charCodeAt(0),U=1,te=++F;F<Qe;){switch(I=S.charCodeAt(F)){case 123:U++;break;case 125:U--;break;case 47:switch(I=S.charCodeAt(F+1)){case 42:case 47:e:{for(ee=F+1;ee<Je;++ee)switch(S.charCodeAt(ee)){case 47:if(I===42&&S.charCodeAt(ee-1)===42&&F+2!==ee){F=ee+1;break e}break;case 10:if(I===47){F=ee+1;break e}}F=ee}}break;case 91:I++;case 40:I++;case 34:case 39:for(;F++<Je&&S.charCodeAt(F)!==I;);}if(U===0)break;F++}switch(U=S.substring(te,F),H===0&&(H=(k=k.replace(v,"").trim()).charCodeAt(0)),H){case 64:switch(0<Q&&(k=k.replace(x,"")),I=k.charCodeAt(1),I){case 100:case 109:case 115:case 45:Q=g;break;default:Q=Ke}if(U=t(g,Q,U,I,c+1),te=U.length,0<ue&&(Q=n(Ke,k,Ie),Ce=l(3,U,Q,g,fe,ae,te,I,c,b),k=Q.join(""),Ce!==void 0&&(te=(U=Ce.trim()).length)===0&&(I=0,U="")),0<te)switch(I){case 115:k=k.replace(ye,i);case 100:case 109:case 45:U=k+"{"+U+"}";break;case 107:k=k.replace(O,"$1 $2"),U=k+"{"+U+"}",U=se===1||se===2&&o("@"+U,3)?"@-webkit-"+U+"@"+U:"@"+U;break;default:U=k+U,b===112&&(U=(Y+=U,""))}else U="";break;default:U=t(g,n(g,k,Ie),U,b,c+1)}Re+=U,U=Ie=Q=ee=H=0,k="",I=S.charCodeAt(++F);break;case 125:case 59:if(k=(0<Q?k.replace(x,""):k).trim(),1<(te=k.length))switch(ee===0&&(H=k.charCodeAt(0),H===45||96<H&&123>H)&&(te=(k=k.replace(" ",":")).length),0<ue&&(Ce=l(1,k,g,T,fe,ae,Y.length,b,c,b))!==void 0&&(te=(k=Ce.trim()).length)===0&&(k="\0\0"),H=k.charCodeAt(0),I=k.charCodeAt(1),H){case 0:break;case 64:if(I===105||I===99){at+=k+S.charAt(F);break}default:k.charCodeAt(te-1)!==58&&(Y+=a(k,H,I,k.charCodeAt(2)))}Ie=Q=ee=H=0,k="",I=S.charCodeAt(++F)}}switch(I){case 13:case 10:y===47?y=0:1+H===0&&b!==107&&0<k.length&&(Q=1,k+="\0"),0<ue*ze&&l(0,k,g,T,fe,ae,Y.length,b,c,b),ae=1,fe++;break;case 59:case 125:if(y+$+B+j===0){ae++;break}default:switch(ae++,me=S.charAt(F),I){case 9:case 32:if($+j+y===0)switch(J){case 44:case 58:case 9:case 32:me="";break;default:I!==32&&(me=" ")}break;case 0:me="\\0";break;case 12:me="\\f";break;case 11:me="\\v";break;case 38:$+y+j===0&&(Q=Ie=1,me="\f"+me);break;case 108:if($+y+j+be===0&&0<ee)switch(F-ee){case 2:J===112&&S.charCodeAt(F-3)===58&&(be=J);case 8:Z===111&&(be=Z)}break;case 58:$+y+j===0&&(ee=F);break;case 44:y+B+$+j===0&&(Q=1,me+="\r");break;case 34:case 39:y===0&&($=$===I?0:$===0?I:$);break;case 91:$+y+B===0&&j++;break;case 93:$+y+B===0&&j--;break;case 41:$+y+j===0&&B--;break;case 40:if($+y+j===0){if(H===0)switch(2*J+3*Z){case 533:break;default:H=1}B++}break;case 64:y+B+$+j+ee+U===0&&(U=1);break;case 42:case 47:if(!(0<$+j+B))switch(y){case 0:switch(2*I+3*S.charCodeAt(F+1)){case 235:y=47;break;case 220:te=F,y=42}break;case 42:I===47&&J===42&&te+2!==F&&(S.charCodeAt(te+2)===33&&(Y+=S.substring(te,F+1)),me="",y=0)}}y===0&&(k+=me)}Z=J,J=I,F++}if(te=Y.length,0<te){if(Q=g,0<ue&&(Ce=l(2,Y,Q,T,fe,ae,te,b,c,b),Ce!==void 0&&(Y=Ce).length===0))return at+Y+Re;if(Y=Q.join(",")+"{"+Y+"}",se*be!==0){switch(se!==2||o(Y,2)||(be=0),be){case 111:Y=Y.replace(P,":-moz-$1")+Y;break;case 112:Y=Y.replace(M,"::-webkit-input-$1")+Y.replace(M,"::-moz-$1")+Y.replace(M,":-ms-input-$1")+Y}be=0}}return at+Y+Re}function n(T,g,S){var b=g.trim().split(A);g=b;var c=b.length,j=T.length;switch(j){case 0:case 1:var y=0;for(T=j===0?"":T[0]+" ";y<c;++y)g[y]=r(T,g[y],S).trim();break;default:var B=y=0;for(g=[];y<c;++y)for(var $=0;$<j;++$)g[B++]=r(T[$]+" ",b[y],S).trim()}return g}function r(T,g,S){var b=g.charCodeAt(0);switch(33>b&&(b=(g=g.trim()).charCodeAt(0)),b){case 38:return g.replace(R,"$1"+T.trim());case 58:return T.trim()+g.replace(R,"$1"+T.trim());default:if(0<1*S&&0<g.indexOf("\f"))return g.replace(R,(T.charCodeAt(0)===58?"":"$1")+T.trim())}return T+g}function a(T,g,S,b){var c=T+";",j=2*g+3*S+4*b;if(j===944){T=c.indexOf(":",9)+1;var y=c.substring(T,c.length-1).trim();return y=c.substring(0,T).trim()+y+";",se===1||se===2&&o(y,1)?"-webkit-"+y+y:y}if(se===0||se===2&&!o(c,1))return c;switch(j){case 1015:return c.charCodeAt(10)===97?"-webkit-"+c+c:c;case 951:return c.charCodeAt(3)===116?"-webkit-"+c+c:c;case 963:return c.charCodeAt(5)===110?"-webkit-"+c+c:c;case 1009:if(c.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+c+c;case 978:return"-webkit-"+c+"-moz-"+c+c;case 1019:case 983:return"-webkit-"+c+"-moz-"+c+"-ms-"+c+c;case 883:if(c.charCodeAt(8)===45)return"-webkit-"+c+c;if(0<c.indexOf("image-set(",11))return c.replace(K,"$1-webkit-$2")+c;break;case 932:if(c.charCodeAt(4)===45)switch(c.charCodeAt(5)){case 103:return"-webkit-box-"+c.replace("-grow","")+"-webkit-"+c+"-ms-"+c.replace("grow","positive")+c;case 115:return"-webkit-"+c+"-ms-"+c.replace("shrink","negative")+c;case 98:return"-webkit-"+c+"-ms-"+c.replace("basis","preferred-size")+c}return"-webkit-"+c+"-ms-"+c+c;case 964:return"-webkit-"+c+"-ms-flex-"+c+c;case 1023:if(c.charCodeAt(8)!==99)break;return y=c.substring(c.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+y+"-webkit-"+c+"-ms-flex-pack"+y+c;case 1005:return C.test(c)?c.replace(L,":-webkit-")+c.replace(L,":-moz-")+c:c;case 1e3:switch(y=c.substring(13).trim(),g=y.indexOf("-")+1,y.charCodeAt(0)+y.charCodeAt(g)){case 226:y=c.replace(D,"tb");break;case 232:y=c.replace(D,"tb-rl");break;case 220:y=c.replace(D,"lr");break;default:return c}return"-webkit-"+c+"-ms-"+y+c;case 1017:if(c.indexOf("sticky",9)===-1)break;case 975:switch(g=(c=T).length-10,y=(c.charCodeAt(g)===33?c.substring(0,g):c).substring(T.indexOf(":",7)+1).trim(),j=y.charCodeAt(0)+(y.charCodeAt(7)|0)){case 203:if(111>y.charCodeAt(8))break;case 115:c=c.replace(y,"-webkit-"+y)+";"+c;break;case 207:case 102:c=c.replace(y,"-webkit-"+(102<j?"inline-":"")+"box")+";"+c.replace(y,"-webkit-"+y)+";"+c.replace(y,"-ms-"+y+"box")+";"+c}return c+";";case 938:if(c.charCodeAt(5)===45)switch(c.charCodeAt(6)){case 105:return y=c.replace("-items",""),"-webkit-"+c+"-webkit-box-"+y+"-ms-flex-"+y+c;case 115:return"-webkit-"+c+"-ms-flex-item-"+c.replace(ie,"")+c;default:return"-webkit-"+c+"-ms-flex-line-pack"+c.replace("align-content","").replace(ie,"")+c}break;case 973:case 989:if(c.charCodeAt(3)!==45||c.charCodeAt(4)===122)break;case 931:case 953:if(Pe.test(T)===!0)return(y=T.substring(T.indexOf(":")+1)).charCodeAt(0)===115?a(T.replace("stretch","fill-available"),g,S,b).replace(":fill-available",":stretch"):c.replace(y,"-webkit-"+y)+c.replace(y,"-moz-"+y.replace("fill-",""))+c;break;case 962:if(c="-webkit-"+c+(c.charCodeAt(5)===102?"-ms-"+c:"")+c,S+b===211&&c.charCodeAt(13)===105&&0<c.indexOf("transform",10))return c.substring(0,c.indexOf(";",27)+1).replace(N,"$1-webkit-$2")+c}return c}function o(T,g){var S=T.indexOf(g===1?":":"{"),b=T.substring(0,g!==3?S:10);return S=T.substring(S+1,T.length-1),Ze(g!==2?b:b.replace(xe,"$1"),S,g)}function i(T,g){var S=a(g,g.charCodeAt(0),g.charCodeAt(1),g.charCodeAt(2));return S!==g+";"?S.replace(Te," or ($1)").substring(4):"("+g+")"}function l(T,g,S,b,c,j,y,B,$,H){for(var I=0,J=g,Z;I<ue;++I)switch(Z=Ae[I].call(h,T,J,S,b,c,j,y,B,$,H)){case void 0:case!1:case!0:case null:break;default:J=Z}if(J!==g)return J}function u(T){switch(T){case void 0:case null:ue=Ae.length=0;break;default:if(typeof T=="function")Ae[ue++]=T;else if(typeof T=="object")for(var g=0,S=T.length;g<S;++g)u(T[g]);else ze=!!T|0}return u}function f(T){return T=T.prefix,T!==void 0&&(Ze=null,T?typeof T!="function"?se=1:(se=2,Ze=T):se=0),f}function h(T,g){var S=T;if(33>S.charCodeAt(0)&&(S=S.trim()),V=S,S=[V],0<ue){var b=l(-1,g,S,S,fe,ae,0,0,0,0);b!==void 0&&typeof b=="string"&&(g=b)}var c=t(Ke,S,g,0,0);return 0<ue&&(b=l(-2,c,S,S,fe,ae,c.length,0,0,0),b!==void 0&&(c=b)),V="",be=0,ae=fe=1,c}var v=/^\0+/g,x=/[\0\r\f]/g,L=/: */g,C=/zoo|gra/,N=/([,: ])(transform)/g,A=/,\r+?/g,R=/([\t\r\n ])*\f?&/g,O=/@(k\w+)\s*(\S*)\s*/,M=/::(place)/g,P=/:(read-only)/g,D=/[svh]\w+-[tblr]{2}/,ye=/\(\s*(.*)\s*\)/g,Te=/([\s\S]*?);/g,ie=/-self|flex-/g,xe=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Pe=/stretch|:\s*\w+\-(?:conte|avail)/,K=/([^-])(image-set\()/,ae=1,fe=1,be=0,se=1,Ke=[],Ae=[],ue=0,Ze=null,ze=0,V="";return h.use=u,h.set=f,e!==void 0&&f(e),h}var Ii={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ri(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ni=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,na=Ri(function(e){return Ni.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),io={exports:{}},W={};var re=typeof Symbol=="function"&&Symbol.for,Er=re?Symbol.for("react.element"):60103,Tr=re?Symbol.for("react.portal"):60106,dn=re?Symbol.for("react.fragment"):60107,pn=re?Symbol.for("react.strict_mode"):60108,hn=re?Symbol.for("react.profiler"):60114,gn=re?Symbol.for("react.provider"):60109,yn=re?Symbol.for("react.context"):60110,xr=re?Symbol.for("react.async_mode"):60111,bn=re?Symbol.for("react.concurrent_mode"):60111,vn=re?Symbol.for("react.forward_ref"):60112,An=re?Symbol.for("react.suspense"):60113,Li=re?Symbol.for("react.suspense_list"):60120,Sn=re?Symbol.for("react.memo"):60115,En=re?Symbol.for("react.lazy"):60116,Mi=re?Symbol.for("react.block"):60121,Di=re?Symbol.for("react.fundamental"):60117,Fi=re?Symbol.for("react.responder"):60118,zi=re?Symbol.for("react.scope"):60119;function Se(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Er:switch(e=e.type,e){case xr:case bn:case dn:case hn:case pn:case An:return e;default:switch(e=e&&e.$$typeof,e){case yn:case vn:case En:case Sn:case gn:return e;default:return t}}case Tr:return t}}}function so(e){return Se(e)===bn}W.AsyncMode=xr;W.ConcurrentMode=bn;W.ContextConsumer=yn;W.ContextProvider=gn;W.Element=Er;W.ForwardRef=vn;W.Fragment=dn;W.Lazy=En;W.Memo=Sn;W.Portal=Tr;W.Profiler=hn;W.StrictMode=pn;W.Suspense=An;W.isAsyncMode=function(e){return so(e)||Se(e)===xr};W.isConcurrentMode=so;W.isContextConsumer=function(e){return Se(e)===yn};W.isContextProvider=function(e){return Se(e)===gn};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Er};W.isForwardRef=function(e){return Se(e)===vn};W.isFragment=function(e){return Se(e)===dn};W.isLazy=function(e){return Se(e)===En};W.isMemo=function(e){return Se(e)===Sn};W.isPortal=function(e){return Se(e)===Tr};W.isProfiler=function(e){return Se(e)===hn};W.isStrictMode=function(e){return Se(e)===pn};W.isSuspense=function(e){return Se(e)===An};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===dn||e===bn||e===hn||e===pn||e===An||e===Li||typeof e=="object"&&e!==null&&(e.$$typeof===En||e.$$typeof===Sn||e.$$typeof===gn||e.$$typeof===yn||e.$$typeof===vn||e.$$typeof===Di||e.$$typeof===Fi||e.$$typeof===zi||e.$$typeof===Mi)};W.typeOf=Se;io.exports=W;var Ui=io.exports,_r=Ui,ji={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hi={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wr={};wr[_r.ForwardRef]=Hi;wr[_r.Memo]=lo;function ra(e){return _r.isMemo(e)?lo:wr[e.$$typeof]||ji}var Wi=Object.defineProperty,Yi=Object.getOwnPropertyNames,aa=Object.getOwnPropertySymbols,Gi=Object.getOwnPropertyDescriptor,Bi=Object.getPrototypeOf,oa=Object.prototype;function co(e,t,n){if(typeof t!="string"){if(oa){var r=Bi(t);r&&r!==oa&&co(e,r,n)}var a=Yi(t);aa&&(a=a.concat(aa(t)));for(var o=ra(e),i=ra(t),l=0;l<a.length;++l){var u=a[l];if(!$i[u]&&!(n&&n[u])&&!(i&&i[u])&&!(o&&o[u])){var f=Gi(t,u);try{Wi(e,u,f)}catch{}}}}return e}var Xi=co;const Vi=Qa(Xi);var fo={},_e={};function $e(){return($e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ia=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},Xn=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!oo.typeOf(e)},Kt=Object.freeze([]),Be=Object.freeze({});function Ct(e){return typeof e=="function"}function sa(e){return e.displayName||e.name||"Component"}function Or(e){return e&&typeof e.styledComponentId=="string"}var ut=typeof fo<"u"&&_e!==void 0&&(_e.REACT_APP_SC_ATTR||_e.SC_ATTR)||"data-styled",Cr=typeof window<"u"&&"HTMLElement"in window,qi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof fo<"u"&&_e!==void 0&&(_e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==""?_e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_e.REACT_APP_SC_DISABLE_SPEEDY:_e.SC_DISABLE_SPEEDY!==void 0&&_e.SC_DISABLE_SPEEDY!==""&&_e.SC_DISABLE_SPEEDY!=="false"&&_e.SC_DISABLE_SPEEDY));function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Ki=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,i=o;n>=i;)(i<<=1)<0&&It(16,""+n);this.groupSizes=new Uint32Array(i),this.groupSizes.set(a),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),f=0,h=r.length;f<h;f++)this.tag.insertRule(u,r[f])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),o=a+r;this.groupSizes[n]=0;for(var i=a;i<o;i++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],o=this.indexOfGroup(n),i=o+a,l=o;l<i;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Bt=new Map,Zt=new Map,xt=1,jt=function(e){if(Bt.has(e))return Bt.get(e);for(;Zt.has(xt);)xt++;var t=xt++;return Bt.set(e,t),Zt.set(t,e),t},Zi=function(e){return Zt.get(e)},Qi=function(e,t){t>=xt&&(xt=t+1),Bt.set(e,t),Zt.set(t,e)},Ji="style["+ut+'][data-styled-version="5.3.11"]',es=new RegExp("^"+ut+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ts=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},ns=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,o=n.length;a<o;a++){var i=n[a].trim();if(i){var l=i.match(es);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(Qi(f,u),ts(e,f,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},rs=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},uo=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){for(var u=l.childNodes,f=u.length;f>=0;f--){var h=u[f];if(h&&h.nodeType===1&&h.hasAttribute(ut))return h}}(n),o=a!==void 0?a.nextSibling:null;r.setAttribute(ut,"active"),r.setAttribute("data-styled-version","5.3.11");var i=rs();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},as=function(){function e(n){var r=this.element=uo(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var o=document.styleSheets,i=0,l=o.length;i<l;i++){var u=o[i];if(u.ownerNode===a)return u}It(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),os=function(){function e(n){var r=this.element=uo(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(a,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),is=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),la=Cr,ss={isServer:!Cr,useCSSOMInjection:!qi},mo=function(){function e(n,r,a){n===void 0&&(n=Be),r===void 0&&(r={}),this.options=$e({},ss,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&Cr&&la&&(la=!1,function(o){for(var i=document.querySelectorAll(Ji),l=0,u=i.length;l<u;l++){var f=i[l];f&&f.getAttribute(ut)!=="active"&&(ns(o,f),f.parentNode&&f.parentNode.removeChild(f))}}(this))}e.registerId=function(n){return jt(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e($e({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,o=r.useCSSOMInjection,i=r.target,n=a?new is(i):o?new as(i):new os(i),new Ki(n)));var n,r,a,o,i},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(jt(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(jt(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(jt(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,o="",i=0;i<a;i++){var l=Zi(i);if(l!==void 0){var u=n.names.get(l),f=r.getGroup(i);if(u&&f&&u.size){var h=ut+".g"+i+'[id="'+l+'"]',v="";u!==void 0&&u.forEach(function(x){x.length>0&&(v+=x+",")}),o+=""+f+h+'{content:"'+v+`"}/*!sc*/
`}}}return o}(this)},e}(),ls=/(a)(d)/gi,ca=function(e){return String.fromCharCode(e+(e>25?39:97))};function Vn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ca(t%52)+n;return(ca(t%52)+n).replace(ls,"$1-$2")}var st=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},po=function(e){return st(5381,e)};function cs(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ct(n)&&!Or(n))return!1}return!0}var fs=po("5.3.11"),us=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&cs(t),this.componentId=n,this.baseHash=st(fs,n),this.baseStyle=r,mo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))o.push(this.staticRulesId);else{var i=mt(this.rules,t,n,r).join(""),l=Vn(st(this.baseHash,i)>>>0);if(!n.hasNameForId(a,l)){var u=r(i,"."+l,void 0,a);n.insertRules(a,l,u)}o.push(l),this.staticRulesId=l}else{for(var f=this.rules.length,h=st(this.baseHash,r.hash),v="",x=0;x<f;x++){var L=this.rules[x];if(typeof L=="string")v+=L;else if(L){var C=mt(L,t,n,r),N=Array.isArray(C)?C.join(""):C;h=st(h,N+x),v+=N}}if(v){var A=Vn(h>>>0);if(!n.hasNameForId(a,A)){var R=r(v,"."+A,void 0,a);n.insertRules(a,A,R)}o.push(A)}}return o.join(" ")},e}(),ms=/^\s*\/\/.*$/gm,ds=[":","[",".","#"];function ps(e){var t,n,r,a,o=Be,i=o.options,l=i===void 0?Be:i,u=o.plugins,f=u===void 0?Kt:u,h=new Pi(l),v=[],x=function(N){function A(R){if(R)try{N(R+"}")}catch{}}return function(R,O,M,P,D,ye,Te,ie,xe,Pe){switch(R){case 1:if(xe===0&&O.charCodeAt(0)===64)return N(O+";"),"";break;case 2:if(ie===0)return O+"/*|*/";break;case 3:switch(ie){case 102:case 112:return N(M[0]+O),"";default:return O+(Pe===0?"/*|*/":"")}case-2:O.split("/*|*/}").forEach(A)}}}(function(N){v.push(N)}),L=function(N,A,R){return A===0&&ds.indexOf(R[n.length])!==-1||R.match(a)?N:"."+t};function C(N,A,R,O){O===void 0&&(O="&");var M=N.replace(ms,""),P=A&&R?R+" "+A+" { "+M+" }":M;return t=O,n=A,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),h(R||!A?"":A,P)}return h.use([].concat(f,[function(N,A,R){N===2&&R.length&&R[0].lastIndexOf(n)>0&&(R[0]=R[0].replace(r,L))},x,function(N){if(N===-2){var A=v;return v=[],A}}])),C.hash=f.length?f.reduce(function(N,A){return A.name||It(15),st(N,A.name)},5381).toString():"",C}var ho=pt.createContext();ho.Consumer;var go=pt.createContext(),hs=(go.Consumer,new mo),qn=ps();function gs(){return Ot.useContext(ho)||hs}function ys(){return Ot.useContext(go)||qn}var bs=function(){function e(t,n){var r=this;this.inject=function(a,o){o===void 0&&(o=qn);var i=r.name+o.hash;a.hasNameForId(r.id,i)||a.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.toString=function(){return It(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=qn),this.name+t.hash},e}(),vs=/([A-Z])/,As=/([A-Z])/g,Ss=/^ms-/,Es=function(e){return"-"+e.toLowerCase()};function fa(e){return vs.test(e)?e.replace(As,Es).replace(Ss,"-ms-"):e}var ua=function(e){return e==null||e===!1||e===""};function mt(e,t,n,r){if(Array.isArray(e)){for(var a,o=[],i=0,l=e.length;i<l;i+=1)(a=mt(e[i],t,n,r))!==""&&(Array.isArray(a)?o.push.apply(o,a):o.push(a));return o}if(ua(e))return"";if(Or(e))return"."+e.styledComponentId;if(Ct(e)){if(typeof(f=e)!="function"||f.prototype&&f.prototype.isReactComponent||!t)return e;var u=e(t);return mt(u,t,n,r)}var f;return e instanceof bs?n?(e.inject(n,r),e.getName(r)):e:Xn(e)?function h(v,x){var L,C,N=[];for(var A in v)v.hasOwnProperty(A)&&!ua(v[A])&&(Array.isArray(v[A])&&v[A].isCss||Ct(v[A])?N.push(fa(A)+":",v[A],";"):Xn(v[A])?N.push.apply(N,h(v[A],A)):N.push(fa(A)+": "+(L=A,(C=v[A])==null||typeof C=="boolean"||C===""?"":typeof C!="number"||C===0||L in Ii||L.startsWith("--")?String(C).trim():C+"px")+";"));return x?[x+" {"].concat(N,["}"]):N}(e):e.toString()}var ma=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ts(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ct(e)||Xn(e)?ma(mt(ia(Kt,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ma(mt(ia(e,n)))}var xs=function(e,t,n){return n===void 0&&(n=Be),e.theme!==n.theme&&e.theme||t||n.theme},_s=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ws=/(^-|-$)/g;function Ln(e){return e.replace(_s,"-").replace(ws,"")}var Os=function(e){return Vn(po(e)>>>0)};function $t(e){return typeof e=="string"&&!0}var Kn=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Cs=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ks(e,t,n){var r=e[n];Kn(t)&&Kn(r)?yo(r,t):e[n]=t}function yo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,o=n;a<o.length;a++){var i=o[a];if(Kn(i))for(var l in i)Cs(l)&&ks(e,i[l],l)}return e}var bo=pt.createContext();bo.Consumer;var Mn={};function vo(e,t,n){var r=Or(e),a=!$t(e),o=t.attrs,i=o===void 0?Kt:o,l=t.componentId,u=l===void 0?function(O,M){var P=typeof O!="string"?"sc":Ln(O);Mn[P]=(Mn[P]||0)+1;var D=P+"-"+Os("5.3.11"+P+Mn[P]);return M?M+"-"+D:D}(t.displayName,t.parentComponentId):l,f=t.displayName,h=f===void 0?function(O){return $t(O)?"styled."+O:"Styled("+sa(O)+")"}(e):f,v=t.displayName&&t.componentId?Ln(t.displayName)+"-"+t.componentId:t.componentId||u,x=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,L=t.shouldForwardProp;r&&e.shouldForwardProp&&(L=t.shouldForwardProp?function(O,M,P){return e.shouldForwardProp(O,M,P)&&t.shouldForwardProp(O,M,P)}:e.shouldForwardProp);var C,N=new us(n,v,r?e.componentStyle:void 0),A=N.isStatic&&i.length===0,R=function(O,M){return function(P,D,ye,Te){var ie=P.attrs,xe=P.componentStyle,Pe=P.defaultProps,K=P.foldedComponentIds,ae=P.shouldForwardProp,fe=P.styledComponentId,be=P.target,se=function(b,c,j){b===void 0&&(b=Be);var y=$e({},c,{theme:b}),B={};return j.forEach(function($){var H,I,J,Z=$;for(H in Ct(Z)&&(Z=Z(y)),Z)y[H]=B[H]=H==="className"?(I=B[H],J=Z[H],I&&J?I+" "+J:I||J):Z[H]}),[y,B]}(xs(D,Ot.useContext(bo),Pe)||Be,D,ie),Ke=se[0],Ae=se[1],ue=function(b,c,j,y){var B=gs(),$=ys(),H=c?b.generateAndInjectStyles(Be,B,$):b.generateAndInjectStyles(j,B,$);return H}(xe,Te,Ke),Ze=ye,ze=Ae.$as||D.$as||Ae.as||D.as||be,V=$t(ze),T=Ae!==D?$e({},D,{},Ae):D,g={};for(var S in T)S[0]!=="$"&&S!=="as"&&(S==="forwardedAs"?g.as=T[S]:(ae?ae(S,na,ze):!V||na(S))&&(g[S]=T[S]));return D.style&&Ae.style!==D.style&&(g.style=$e({},D.style,{},Ae.style)),g.className=Array.prototype.concat(K,fe,ue!==fe?ue:null,D.className,Ae.className).filter(Boolean).join(" "),g.ref=Ze,Ot.createElement(ze,g)}(C,O,M,A)};return R.displayName=h,(C=pt.forwardRef(R)).attrs=x,C.componentStyle=N,C.displayName=h,C.shouldForwardProp=L,C.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Kt,C.styledComponentId=v,C.target=r?e.target:e,C.withComponent=function(O){var M=t.componentId,P=function(ye,Te){if(ye==null)return{};var ie,xe,Pe={},K=Object.keys(ye);for(xe=0;xe<K.length;xe++)ie=K[xe],Te.indexOf(ie)>=0||(Pe[ie]=ye[ie]);return Pe}(t,["componentId"]),D=M&&M+"-"+($t(O)?O:Ln(sa(O)));return vo(O,$e({},P,{attrs:x,componentId:D}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(O){this._foldedDefaultProps=r?yo({},e.defaultProps,O):O}}),Object.defineProperty(C,"toString",{value:function(){return"."+C.styledComponentId}}),a&&Vi(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var Zn=function(e){return function t(n,r,a){if(a===void 0&&(a=Be),!oo.isValidElementType(r))return It(1,String(r));var o=function(){return n(r,a,Ts.apply(void 0,arguments))};return o.withConfig=function(i){return t(n,r,$e({},a,{},i))},o.attrs=function(i){return t(n,r,$e({},a,{attrs:Array.prototype.concat(a.attrs,i).filter(Boolean)}))},o}(vo,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Zn[e]=Zn(e)});const Ps=Zn.a`
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
`,Ao=({href:e,color:t,text:n,classes:r,onClick:a,onFocus:o})=>Ei.jsx(Ps,{href:e,className:`button-${t} ${r??""}`,onClick:a,onFocus:o,children:n});Ao.propTypes={...vr};Ao.__docgenInfo={description:`@param {ButtonProps} props
@returns {JSX.Element}`,methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!0},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},onFocus:{description:"",type:{name:"func"},required:!1}}};const Af={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Is={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Sf=Is,Rs={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Ef=Rs,Tf={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Ns={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},xf=Ns;function Ls(e,t,n){return(t=Ds(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function da(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?da(Object(n),!0).forEach(function(r){Ls(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):da(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ms(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ds(e){var t=Ms(e,"string");return typeof t=="symbol"?t:t+""}const pa=()=>{};let kr={},So={},Eo=null,To={mark:pa,measure:pa};try{typeof window<"u"&&(kr=window),typeof document<"u"&&(So=document),typeof MutationObserver<"u"&&(Eo=MutationObserver),typeof performance<"u"&&(To=performance)}catch{}const{userAgent:ha=""}=kr.navigator||{},Xe=kr,X=So,ga=Eo,Ht=To;Xe.document;const Ye=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",xo=~ha.indexOf("MSIE")||~ha.indexOf("Trident/");var Fs=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,zs=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,_o={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Us={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},wo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ce="classic",Tn="duotone",js="sharp",$s="sharp-duotone",Oo=[ce,Tn,js,$s],Hs={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Ws={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Ys=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Gs={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Bs=["fak","fa-kit","fakd","fa-kit-duotone"],ya={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Xs=["kit"],Vs={kit:{"fa-kit":"fak"}},qs=["fak","fakd"],Ks={kit:{fak:"fa-kit"}},ba={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Wt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zs=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Qs=["fak","fa-kit","fakd","fa-kit-duotone"],Js={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},el={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},tl={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Qn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},nl=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Jn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Zs,...nl],rl=["solid","regular","light","thin","duotone","brands"],Co=[1,2,3,4,5,6,7,8,9,10],al=Co.concat([11,12,13,14,15,16,17,18,19,20]),ol=[...Object.keys(tl),...rl,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Wt.GROUP,Wt.SWAP_OPACITY,Wt.PRIMARY,Wt.SECONDARY].concat(Co.map(e=>"".concat(e,"x"))).concat(al.map(e=>"w-".concat(e))),il={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const He="___FONT_AWESOME___",er=16,ko="fa",Po="svg-inline--fa",nt="data-fa-i2svg",tr="data-fa-pseudo-element",sl="data-fa-pseudo-element-pending",Pr="data-prefix",Ir="data-icon",va="fontawesome-i2svg",ll="async",cl=["HTML","HEAD","STYLE","SCRIPT"],Io=(()=>{try{return!0}catch{return!1}})();function Rt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[ce]}})}const Ro=d({},_o);Ro[ce]=d(d(d(d({},{"fa-duotone":"duotone"}),_o[ce]),ya.kit),ya["kit-duotone"]);const fl=Rt(Ro),nr=d({},Gs);nr[ce]=d(d(d(d({},{duotone:"fad"}),nr[ce]),ba.kit),ba["kit-duotone"]);const Aa=Rt(nr),rr=d({},Qn);rr[ce]=d(d({},rr[ce]),Ks.kit);const Rr=Rt(rr),ar=d({},el);ar[ce]=d(d({},ar[ce]),Vs.kit);Rt(ar);const ul=Fs,No="fa-layers-text",ml=zs,dl=d({},Hs);Rt(dl);const pl=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Dn=Us,hl=[...Xs,...ol],_t=Xe.FontAwesomeConfig||{};function gl(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function yl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}X&&typeof X.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=yl(gl(n));a!=null&&(_t[r]=a)});const Lo={styleDefault:"solid",familyDefault:ce,cssPrefix:ko,replacementClass:Po,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_t.familyPrefix&&(_t.cssPrefix=_t.familyPrefix);const dt=d(d({},Lo),_t);dt.autoReplaceSvg||(dt.observeMutations=!1);const _={};Object.keys(Lo).forEach(e=>{Object.defineProperty(_,e,{enumerable:!0,set:function(t){dt[e]=t,wt.forEach(n=>n(_))},get:function(){return dt[e]}})});Object.defineProperty(_,"familyPrefix",{enumerable:!0,set:function(e){dt.cssPrefix=e,wt.forEach(t=>t(_))},get:function(){return dt.cssPrefix}});Xe.FontAwesomeConfig=_;const wt=[];function bl(e){return wt.push(e),()=>{wt.splice(wt.indexOf(e),1)}}const Ge=er,De={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vl(e){if(!e||!Ye)return;const t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=X.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return X.head.insertBefore(t,r),e}const Al="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kt(){let e=12,t="";for(;e-- >0;)t+=Al[Math.random()*62|0];return t}function ht(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Nr(e){return e.classList?ht(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Mo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Sl(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Mo(e[n]),'" '),"").trim()}function xn(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Lr(e){return e.size!==De.size||e.x!==De.x||e.y!==De.y||e.rotate!==De.rotate||e.flipX||e.flipY}function El(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(o," ").concat(i," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:u,path:f}}function Tl(e){let{transform:t,width:n=er,height:r=er,startCentered:a=!1}=e,o="";return a&&xo?o+="translate(".concat(t.x/Ge-n/2,"em, ").concat(t.y/Ge-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/Ge,"em), calc(-50% + ").concat(t.y/Ge,"em)) "):o+="translate(".concat(t.x/Ge,"em, ").concat(t.y/Ge,"em) "),o+="scale(".concat(t.size/Ge*(t.flipX?-1:1),", ").concat(t.size/Ge*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var xl=`:root, :host {
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
}`;function Do(){const e=ko,t=Po,n=_.cssPrefix,r=_.replacementClass;let a=xl;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(r))}return a}let Sa=!1;function Fn(){_.autoAddCss&&!Sa&&(vl(Do()),Sa=!0)}var _l={mixout(){return{dom:{css:Do,insertCss:Fn}}},hooks(){return{beforeDOMElementCreation(){Fn()},beforeI2svg(){Fn()}}}};const We=Xe||{};We[He]||(We[He]={});We[He].styles||(We[He].styles={});We[He].hooks||(We[He].hooks={});We[He].shims||(We[He].shims=[]);var Fe=We[He];const Fo=[],zo=function(){X.removeEventListener("DOMContentLoaded",zo),Qt=1,Fo.map(e=>e())};let Qt=!1;Ye&&(Qt=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Qt||X.addEventListener("DOMContentLoaded",zo));function wl(e){Ye&&(Qt?setTimeout(e,0):Fo.push(e))}function Nt(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Mo(e):"<".concat(t," ").concat(Sl(n),">").concat(r.map(Nt).join(""),"</").concat(t,">")}function Ea(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var zn=function(t,n,r,a){var o=Object.keys(t),i=o.length,l=n,u,f,h;for(r===void 0?(u=1,h=t[o[0]]):(u=0,h=r);u<i;u++)f=o[u],h=l(h,t[f],f,t);return h};function Ol(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function or(e){const t=Ol(e);return t.length===1?t[0].toString(16):null}function Cl(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ta(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function ir(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Ta(t);typeof Fe.hooks.addPack=="function"&&!r?Fe.hooks.addPack(e,Ta(t)):Fe.styles[e]=d(d({},Fe.styles[e]||{}),a),e==="fas"&&ir("fa",t)}const{styles:Pt,shims:kl}=Fe,Uo=Object.keys(Rr),Pl=Uo.reduce((e,t)=>(e[t]=Object.keys(Rr[t]),e),{});let Mr=null,jo={},$o={},Ho={},Wo={},Yo={};function Il(e){return~hl.indexOf(e)}function Rl(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Il(a)?a:null}const Go=()=>{const e=r=>zn(Pt,(a,o,i)=>(a[i]=zn(o,r,{}),a),{});jo=e((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),$o=e((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),Yo=e((r,a,o)=>{const i=a[2];return r[o]=o,i.forEach(l=>{r[l]=o}),r});const t="far"in Pt||_.autoFetchSvg,n=zn(kl,(r,a)=>{const o=a[0];let i=a[1];const l=a[2];return i==="far"&&!t&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:l}),r},{names:{},unicodes:{}});Ho=n.names,Wo=n.unicodes,Mr=_n(_.styleDefault,{family:_.familyDefault})};bl(e=>{Mr=_n(e.styleDefault,{family:_.familyDefault})});Go();function Dr(e,t){return(jo[e]||{})[t]}function Nl(e,t){return($o[e]||{})[t]}function tt(e,t){return(Yo[e]||{})[t]}function Bo(e){return Ho[e]||{prefix:null,iconName:null}}function Ll(e){const t=Wo[e],n=Dr("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ve(){return Mr}const Xo=()=>({prefix:null,iconName:null,rest:[]});function Ml(e){let t=ce;const n=Uo.reduce((r,a)=>(r[a]="".concat(_.cssPrefix,"-").concat(a),r),{});return Oo.forEach(r=>{(e.includes(n[r])||e.some(a=>Pl[r].includes(a)))&&(t=r)}),t}function _n(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ce}=t,r=fl[n][e];if(n===Tn&&!e)return"fad";const a=Aa[n][e]||Aa[n][r],o=e in Fe.styles?e:null;return a||o||null}function Dl(e){let t=[],n=null;return e.forEach(r=>{const a=Rl(_.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function xa(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function wn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=Jn.concat(Qs),o=xa(e.filter(v=>a.includes(v))),i=xa(e.filter(v=>!Jn.includes(v))),l=o.filter(v=>(r=v,!wo.includes(v))),[u=null]=l,f=Ml(o),h=d(d({},Dl(i)),{},{prefix:_n(u,{family:f})});return d(d(d({},h),jl({values:e,family:f,styles:Pt,config:_,canonical:h,givenPrefix:r})),Fl(n,r,h))}function Fl(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const o=t==="fa"?Bo(a):{},i=tt(r,a);return a=o.iconName||i||a,r=o.prefix||r,r==="far"&&!Pt.far&&Pt.fas&&!_.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const zl=Oo.filter(e=>e!==ce||e!==Tn),Ul=Object.keys(Qn).filter(e=>e!==ce).map(e=>Object.keys(Qn[e])).flat();function jl(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:o={},config:i={}}=e,l=n===Tn,u=t.includes("fa-duotone")||t.includes("fad"),f=i.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(u||f||h)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&zl.includes(n)&&(Object.keys(o).find(x=>Ul.includes(x))||i.autoFetchSvg)){const x=Ys.get(n).defaultShortPrefixId;r.prefix=x,r.iconName=tt(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=Ve()||"fas"),r}class $l{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=d(d({},this.definitions[o]||{}),a[o]),ir(o,a[o]);const i=Rr[ce][o];i&&ir(i,a[o]),Go()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:i,icon:l}=r[a],u=l[2];t[o]||(t[o]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(t[o][f]=l)}),t[o][i]=l}),t}}let _a=[],lt={};const ft={},Hl=Object.keys(ft);function Wl(e,t){let{mixoutsTo:n}=t;return _a=e,lt={},Object.keys(ft).forEach(r=>{Hl.indexOf(r)===-1&&delete ft[r]}),_a.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(i=>{lt[i]||(lt[i]=[]),lt[i].push(o[i])})}r.provides&&r.provides(ft)}),n}function sr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(lt[e]||[]).forEach(i=>{t=i.apply(null,[t,...r])}),t}function rt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(lt[e]||[]).forEach(o=>{o.apply(null,n)})}function qe(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ft[e]?ft[e].apply(null,t):void 0}function lr(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Ve();if(t)return t=tt(n,t)||t,Ea(Vo.definitions,n,t)||Ea(Fe.styles,n,t)}const Vo=new $l,Yl=()=>{_.autoReplaceSvg=!1,_.observeMutations=!1,rt("noAuto")},Gl={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(rt("beforeI2svg",e),qe("pseudoElements2svg",e),qe("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;_.autoReplaceSvg===!1&&(_.autoReplaceSvg=!0),_.observeMutations=!0,wl(()=>{Xl({autoReplaceSvgRoot:t}),rt("watch",e)})}},Bl={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:tt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=_n(e[0]);return{prefix:n,iconName:tt(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(_.cssPrefix,"-"))>-1||e.match(ul))){const t=wn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Ve(),iconName:tt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Ve();return{prefix:t,iconName:tt(t,e)||e}}}},Ee={noAuto:Yl,config:_,dom:Gl,parse:Bl,library:Vo,findIconDefinition:lr,toHtml:Nt},Xl=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=X}=e;(Object.keys(Fe.styles).length>0||_.autoFetchSvg)&&Ye&&_.autoReplaceSvg&&Ee.dom.i2svg({node:t})};function On(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Nt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Ye)return;const n=X.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Vl(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:i}=e;if(Lr(i)&&n.found&&!r.found){const{width:l,height:u}=n,f={x:l/u/2,y:.5};a.style=xn(d(d({},o),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ql(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;const i=o===!0?"".concat(t,"-").concat(_.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},a),{},{id:i}),children:r}]}]}function Fr(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:l,maskId:u,titleId:f,extra:h,watchable:v=!1}=e,{width:x,height:L}=n.found?n:t,C=qs.includes(r),N=[_.replacementClass,a?"".concat(_.cssPrefix,"-").concat(a):""].filter(D=>h.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(h.classes).join(" ");let A={children:[],attributes:d(d({},h.attributes),{},{"data-prefix":r,"data-icon":a,class:N,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(L)})};const R=C&&!~h.classes.indexOf("fa-fw")?{width:"".concat(x/L*16*.0625,"em")}:{};v&&(A.attributes[nt]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||kt())},children:[l]}),delete A.attributes.title);const O=d(d({},A),{},{prefix:r,iconName:a,main:t,mask:n,maskId:u,transform:o,symbol:i,styles:d(d({},R),h.styles)}),{children:M,attributes:P}=n.found&&t.found?qe("generateAbstractMask",O)||{children:[],attributes:{}}:qe("generateAbstractIcon",O)||{children:[],attributes:{}};return O.children=M,O.attributes=P,i?ql(O):Vl(O)}function wa(e){const{content:t,width:n,height:r,transform:a,title:o,extra:i,watchable:l=!1}=e,u=d(d(d({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(u[nt]="");const f=d({},i.styles);Lr(a)&&(f.transform=Tl({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);const h=xn(f);h.length>0&&(u.style=h);const v=[];return v.push({tag:"span",attributes:u,children:[t]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function Kl(e){const{content:t,title:n,extra:r}=e,a=d(d(d({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=xn(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Un}=Fe;function cr(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(_.cssPrefix,"-").concat(Dn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(Dn.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(Dn.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Zl={found:!1,width:512,height:512};function Ql(e,t){!Io&&!_.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function fr(e,t){let n=t;return t==="fa"&&_.styleDefault!==null&&(t=Ve()),new Promise((r,a)=>{if(n==="fa"){const o=Bo(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Un[t]&&Un[t][e]){const o=Un[t][e];return r(cr(o))}Ql(e,t),r(d(d({},Zl),{},{icon:_.showMissingIcons&&e?qe("missingIconAbstract")||{}:{}}))})}const Oa=()=>{},ur=_.measurePerformance&&Ht&&Ht.mark&&Ht.measure?Ht:{mark:Oa,measure:Oa},Tt='FA "6.7.2"',Jl=e=>(ur.mark("".concat(Tt," ").concat(e," begins")),()=>qo(e)),qo=e=>{ur.mark("".concat(Tt," ").concat(e," ends")),ur.measure("".concat(Tt," ").concat(e),"".concat(Tt," ").concat(e," begins"),"".concat(Tt," ").concat(e," ends"))};var zr={begin:Jl,end:qo};const Xt=()=>{};function Ca(e){return typeof(e.getAttribute?e.getAttribute(nt):null)=="string"}function ec(e){const t=e.getAttribute?e.getAttribute(Pr):null,n=e.getAttribute?e.getAttribute(Ir):null;return t&&n}function tc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(_.replacementClass)}function nc(){return _.autoReplaceSvg===!0?Vt.replace:Vt[_.autoReplaceSvg]||Vt.replace}function rc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function ac(e){return X.createElement(e)}function Ko(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?rc:ac}=t;if(typeof e=="string")return X.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Ko(o,{ceFn:n}))}),r}function oc(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Vt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ko(n),t)}),t.getAttribute(nt)===null&&_.keepOriginalSource){let n=X.createComment(oc(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Nr(t).indexOf(_.replacementClass))return Vt.replace(e);const r=new RegExp("".concat(_.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,l)=>(l===_.replacementClass||l.match(r)?i.toSvg.push(l):i.toNode.push(l),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>Nt(o)).join(`
`);t.setAttribute(nt,""),t.innerHTML=a}};function ka(e){e()}function Zo(e,t){const n=typeof t=="function"?t:Xt;if(e.length===0)n();else{let r=ka;_.mutateApproach===ll&&(r=Xe.requestAnimationFrame||ka),r(()=>{const a=nc(),o=zr.begin("mutate");e.map(a),o(),n()})}}let Ur=!1;function Qo(){Ur=!0}function mr(){Ur=!1}let Jt=null;function Pa(e){if(!ga||!_.observeMutations)return;const{treeCallback:t=Xt,nodeCallback:n=Xt,pseudoElementsCallback:r=Xt,observeMutationsRoot:a=X}=e;Jt=new ga(o=>{if(Ur)return;const i=Ve();ht(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Ca(l.addedNodes[0])&&(_.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&_.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Ca(l.target)&&~pl.indexOf(l.attributeName))if(l.attributeName==="class"&&ec(l.target)){const{prefix:u,iconName:f}=wn(Nr(l.target));l.target.setAttribute(Pr,u||i),f&&l.target.setAttribute(Ir,f)}else tc(l.target)&&n(l.target)})}),Ye&&Jt.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ic(){Jt&&Jt.disconnect()}function sc(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const o=a.split(":"),i=o[0],l=o.slice(1);return i&&l.length>0&&(r[i]=l.join(":").trim()),r},{})),n}function lc(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=wn(Nr(e));return a.prefix||(a.prefix=Ve()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Nl(a.prefix,e.innerText)||Dr(a.prefix,or(e.innerText))),!a.iconName&&_.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function cc(e){const t=ht(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return _.autoA11y&&(n?t["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(r||kt()):(t["aria-hidden"]="true",t.focusable="false")),t}function fc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:De,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ia(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=lc(e),o=cc(e),i=sr("parseNodeAttributes",{},e);let l=t.styleParser?sc(e):[];return d({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:De,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},i)}const{styles:uc}=Fe;function Jo(e){const t=_.autoReplaceSvg==="nest"?Ia(e,{styleParser:!1}):Ia(e);return~t.extra.classes.indexOf(No)?qe("generateLayersText",e,t):qe("generateSvgReplacementMutation",e,t)}function mc(){return[...Bs,...Jn]}function Ra(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();const n=X.documentElement.classList,r=h=>n.add("".concat(va,"-").concat(h)),a=h=>n.remove("".concat(va,"-").concat(h)),o=_.autoFetchSvg?mc():wo.concat(Object.keys(uc));o.includes("fa")||o.push("fa");const i=[".".concat(No,":not([").concat(nt,"])")].concat(o.map(h=>".".concat(h,":not([").concat(nt,"])"))).join(", ");if(i.length===0)return Promise.resolve();let l=[];try{l=ht(e.querySelectorAll(i))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();const u=zr.begin("onTree"),f=l.reduce((h,v)=>{try{const x=Jo(v);x&&h.push(x)}catch(x){Io||x.name==="MissingIcon"&&console.error(x)}return h},[]);return new Promise((h,v)=>{Promise.all(f).then(x=>{Zo(x,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),u(),h()})}).catch(x=>{u(),v(x)})})}function dc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jo(e).then(n=>{n&&Zo([n],t)})}function pc(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:lr(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:lr(a||{})),e(r,d(d({},n),{},{mask:a}))}}const hc=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=De,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:l=null,classes:u=[],attributes:f={},styles:h={}}=t;if(!e)return;const{prefix:v,iconName:x,icon:L}=e;return On(d({type:"icon"},e),()=>(rt("beforeDOMElementCreation",{iconDefinition:e,params:t}),_.autoA11y&&(i?f["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(l||kt()):(f["aria-hidden"]="true",f.focusable="false")),Fr({icons:{main:cr(L),mask:a?cr(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:x,transform:d(d({},De),n),symbol:r,title:i,maskId:o,titleId:l,extra:{attributes:f,styles:h,classes:u}})))};var gc={mixout(){return{icon:pc(hc)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Ra,e.nodeCallback=dc,e}}},provides(e){e.i2svg=function(t){const{node:n=X,callback:r=()=>{}}=t;return Ra(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:o,prefix:i,transform:l,symbol:u,mask:f,maskId:h,extra:v}=n;return new Promise((x,L)=>{Promise.all([fr(r,i),f.iconName?fr(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(C=>{let[N,A]=C;x([t,Fr({icons:{main:N,mask:A},prefix:i,iconName:r,transform:l,symbol:u,maskId:h,title:a,titleId:o,extra:v,watchable:!0})])}).catch(L)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:o,styles:i}=t;const l=xn(i);l.length>0&&(r.style=l);let u;return Lr(o)&&(u=qe("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(u||a.icon),{children:n,attributes:r}}}},yc={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return On({type:"layer"},()=>{rt("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(_.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},bc={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return On({type:"counter",content:e},()=>(rt("beforeDOMElementCreation",{content:e,params:t}),Kl({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(_.cssPrefix,"-layers-counter"),...r]}})))}}}},vc={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=De,title:r=null,classes:a=[],attributes:o={},styles:i={}}=t;return On({type:"text",content:e},()=>(rt("beforeDOMElementCreation",{content:e,params:t}),wa({content:e,transform:d(d({},De),n),title:r,extra:{attributes:o,styles:i,classes:["".concat(_.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:o}=n;let i=null,l=null;if(xo){const u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/u,l=f.height/u}return _.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,wa({content:t.innerHTML,width:i,height:l,transform:a,title:r,extra:o,watchable:!0})])}}};const Ac=new RegExp('"',"ug"),Na=[1105920,1112319],La=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),Ws),il),Js),dr=Object.keys(La).reduce((e,t)=>(e[t.toLowerCase()]=La[t],e),{}),Sc=Object.keys(dr).reduce((e,t)=>{const n=dr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Ec(e){const t=e.replace(Ac,""),n=Cl(t,0),r=n>=Na[0]&&n<=Na[1],a=t.length===2?t[0]===t[1]:!1;return{value:or(a?t[0]:t),isSecondary:r||a}}function Tc(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(dr[n]||{})[a]||Sc[n]}function Ma(e,t){const n="".concat(sl).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const i=ht(e.children).filter(x=>x.getAttribute(tr)===t)[0],l=Xe.getComputedStyle(e,t),u=l.getPropertyValue("font-family"),f=u.match(ml),h=l.getPropertyValue("font-weight"),v=l.getPropertyValue("content");if(i&&!f)return e.removeChild(i),r();if(f&&v!=="none"&&v!==""){const x=l.getPropertyValue("content");let L=Tc(u,h);const{value:C,isSecondary:N}=Ec(x),A=f[0].startsWith("FontAwesome");let R=Dr(L,C),O=R;if(A){const M=Ll(C);M.iconName&&M.prefix&&(R=M.iconName,L=M.prefix)}if(R&&!N&&(!i||i.getAttribute(Pr)!==L||i.getAttribute(Ir)!==O)){e.setAttribute(n,O),i&&e.removeChild(i);const M=fc(),{extra:P}=M;P.attributes[tr]=t,fr(R,L).then(D=>{const ye=Fr(d(d({},M),{},{icons:{main:D,mask:Xo()},prefix:L,iconName:O,extra:P,watchable:!0})),Te=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Te,e.firstChild):e.appendChild(Te),Te.outerHTML=ye.map(ie=>Nt(ie)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function xc(e){return Promise.all([Ma(e,"::before"),Ma(e,"::after")])}function _c(e){return e.parentNode!==document.head&&!~cl.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(tr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Da(e){if(Ye)return new Promise((t,n)=>{const r=ht(e.querySelectorAll("*")).filter(_c).map(xc),a=zr.begin("searchPseudoElements");Qo(),Promise.all(r).then(()=>{a(),mr(),t()}).catch(()=>{a(),mr(),n()})})}var wc={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Da,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=X}=t;_.searchPseudoElements&&Da(n)}}};let Fa=!1;var Oc={mixout(){return{dom:{unwatch(){Qo(),Fa=!0}}}},hooks(){return{bootstrap(){Pa(sr("mutationObserverCallbacks",{}))},noAuto(){ic()},watch(e){const{observeMutationsRoot:t}=e;Fa?mr():Pa(sr("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const za=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var Cc={mixout(){return{parse:{transform:e=>za(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=za(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:o}=t;const i={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(f)},v={transform:"translate(".concat(o/2*-1," -256)")},x={outer:i,inner:h,path:v};return{tag:"g",attributes:d({},x.outer),children:[{tag:"g",attributes:d({},x.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),x.path)}]}]}}}};const jn={x:0,y:0,width:"100%",height:"100%"};function Ua(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function kc(e){return e.tag==="g"?e.children:[e]}var Pc={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?wn(n.split(" ").map(a=>a.trim())):Xo();return r.prefix||(r.prefix=Ve()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:l}=t;const{width:u,icon:f}=a,{width:h,icon:v}=o,x=El({transform:l,containerWidth:h,iconWidth:u}),L={tag:"rect",attributes:d(d({},jn),{},{fill:"white"})},C=f.children?{children:f.children.map(Ua)}:{},N={tag:"g",attributes:d({},x.inner),children:[Ua(d({tag:f.tag,attributes:d(d({},f.attributes),x.path)},C))]},A={tag:"g",attributes:d({},x.outer),children:[N]},R="mask-".concat(i||kt()),O="clip-".concat(i||kt()),M={tag:"mask",attributes:d(d({},jn),{},{id:R,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,A]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:kc(v)},M]};return n.push(P,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(R,")")},jn)}),{children:n,attributes:r}}}},Ic={provides(e){let t=!1;Xe.matchMedia&&(t=Xe.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=d(d({},a),{},{attributeName:"opacity"}),i={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:d(d({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Rc={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Nc=[_l,gc,yc,bc,vc,wc,Oc,Cc,Pc,Ic,Rc];Wl(Nc,{mixoutsTo:Ee});Ee.noAuto;Ee.config;Ee.library;Ee.dom;const pr=Ee.parse;Ee.findIconDefinition;Ee.toHtml;const Lc=Ee.icon;Ee.layer;Ee.text;Ee.counter;function ja(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ja(Object(n),!0).forEach(function(r){ct(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ja(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function en(e){"@babel/helpers - typeof";return en=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},en(e)}function ct(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mc(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Dc(e,t){if(e==null)return{};var n=Mc(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function hr(e){return Fc(e)||zc(e)||Uc(e)||jc()}function Fc(e){if(Array.isArray(e))return gr(e)}function zc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Uc(e,t){if(e){if(typeof e=="string")return gr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gr(e,t)}}function gr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $c(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,l=e.flash,u=e.spin,f=e.spinPulse,h=e.spinReverse,v=e.pulse,x=e.fixedWidth,L=e.inverse,C=e.border,N=e.listItem,A=e.flip,R=e.size,O=e.rotation,M=e.pull,P=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":h,"fa-spin-pulse":f,"fa-pulse":v,"fa-fw":x,"fa-inverse":L,"fa-border":C,"fa-li":N,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},ct(t,"fa-".concat(R),typeof R<"u"&&R!==null),ct(t,"fa-rotate-".concat(O),typeof O<"u"&&O!==null&&O!==0),ct(t,"fa-pull-".concat(M),typeof M<"u"&&M!==null),ct(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(P).map(function(D){return P[D]?D:null}).filter(function(D){return D})}function Hc(e){return e=e-0,e===e}function ei(e){return Hc(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Wc=["style"];function Yc(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Gc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ei(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?t[Yc(a)]=o:t[a]=o,t},{})}function ti(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return ti(e,u)}),a=Object.keys(t.attributes||{}).reduce(function(u,f){var h=t.attributes[f];switch(f){case"class":u.attrs.className=h,delete t.attributes.class;break;case"style":u.attrs.style=Gc(h);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=h:u.attrs[ei(f)]=h}return u},{attrs:{}}),o=n.style,i=o===void 0?{}:o,l=Dc(n,Wc);return a.attrs.style=Me(Me({},a.attrs.style),i),e.apply(void 0,[t.tag,Me(Me({},a.attrs),l)].concat(hr(r)))}var ni=!1;try{ni=!0}catch{}function Bc(){if(!ni&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function $a(e){if(e&&en(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(pr.icon)return pr.icon(e);if(e===null)return null;if(e&&en(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function $n(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ct({},e,t):{}}var Ha={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ri=pt.forwardRef(function(e,t){var n=Me(Me({},Ha),e),r=n.icon,a=n.mask,o=n.symbol,i=n.className,l=n.title,u=n.titleId,f=n.maskId,h=$a(r),v=$n("classes",[].concat(hr($c(n)),hr((i||"").split(" ")))),x=$n("transform",typeof n.transform=="string"?pr.transform(n.transform):n.transform),L=$n("mask",$a(a)),C=Lc(h,Me(Me(Me(Me({},v),x),L),{},{symbol:o,title:l,titleId:u,maskId:f}));if(!C)return Bc("Could not find icon",h),null;var N=C.abstract,A={ref:t};return Object.keys(n).forEach(function(R){Ha.hasOwnProperty(R)||(A[R]=n[R])}),Xc(N[0],A)});ri.displayName="FontAwesomeIcon";ri.propTypes={beat:m.bool,border:m.bool,beatFade:m.bool,bounce:m.bool,className:m.string,fade:m.bool,flash:m.bool,mask:m.oneOfType([m.object,m.array,m.string]),maskId:m.string,fixedWidth:m.bool,inverse:m.bool,flip:m.oneOf([!0,!1,"horizontal","vertical","both"]),icon:m.oneOfType([m.object,m.array,m.string]),listItem:m.bool,pull:m.oneOf(["right","left"]),pulse:m.bool,rotation:m.oneOf([0,90,180,270]),shake:m.bool,size:m.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:m.bool,spinPulse:m.bool,spinReverse:m.bool,symbol:m.oneOfType([m.bool,m.string]),title:m.string,titleId:m.string,transform:m.oneOfType([m.string,m.object]),swapOpacity:m.bool};var Xc=ti.bind(null,pt.createElement);const{entries:ai,setPrototypeOf:Wa,isFrozen:Vc,getPrototypeOf:qc,getOwnPropertyDescriptor:Kc}=Object;let{freeze:he,seal:we,create:oi}=Object,{apply:yr,construct:br}=typeof Reflect<"u"&&Reflect;he||(he=function(t){return t});we||(we=function(t){return t});yr||(yr=function(t,n,r){return t.apply(n,r)});br||(br=function(t,n){return new t(...n)});const Yt=ge(Array.prototype.forEach),Zc=ge(Array.prototype.lastIndexOf),Ya=ge(Array.prototype.pop),bt=ge(Array.prototype.push),Qc=ge(Array.prototype.splice),qt=ge(String.prototype.toLowerCase),Hn=ge(String.prototype.toString),Ga=ge(String.prototype.match),vt=ge(String.prototype.replace),Jc=ge(String.prototype.indexOf),ef=ge(String.prototype.trim),ke=ge(Object.prototype.hasOwnProperty),pe=ge(RegExp.prototype.test),At=tf(TypeError);function ge(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return yr(e,t,r)}}function tf(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return br(e,n)}}function z(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:qt;Wa&&Wa(e,null);let r=t.length;for(;r--;){let a=t[r];if(typeof a=="string"){const o=n(a);o!==a&&(Vc(t)||(t[r]=o),a=o)}e[a]=!0}return e}function nf(e){for(let t=0;t<e.length;t++)ke(e,t)||(e[t]=null);return e}function et(e){const t=oi(null);for(const[n,r]of ai(e))ke(e,n)&&(Array.isArray(r)?t[n]=nf(r):r&&typeof r=="object"&&r.constructor===Object?t[n]=et(r):t[n]=r);return t}function St(e,t){for(;e!==null;){const r=Kc(e,t);if(r){if(r.get)return ge(r.get);if(typeof r.value=="function")return ge(r.value)}e=qc(e)}function n(){return null}return n}const Ba=he(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Wn=he(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Yn=he(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),rf=he(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Gn=he(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),af=he(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Xa=he(["#text"]),Va=he(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Bn=he(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),qa=he(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Gt=he(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),of=we(/\{\{[\w\W]*|[\w\W]*\}\}/gm),sf=we(/<%[\w\W]*|[\w\W]*%>/gm),lf=we(/\$\{[\w\W]*/gm),cf=we(/^data-[\-\w.\u00B7-\uFFFF]+$/),ff=we(/^aria-[\-\w]+$/),ii=we(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),uf=we(/^(?:\w+script|data):/i),mf=we(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),si=we(/^html$/i),df=we(/^[a-z][.\w]*(-[.\w]+)+$/i);var Ka=Object.freeze({__proto__:null,ARIA_ATTR:ff,ATTR_WHITESPACE:mf,CUSTOM_ELEMENT:df,DATA_ATTR:cf,DOCTYPE_NAME:si,ERB_EXPR:sf,IS_ALLOWED_URI:ii,IS_SCRIPT_OR_DATA:uf,MUSTACHE_EXPR:of,TMPLIT_EXPR:lf});const Et={element:1,text:3,progressingInstruction:7,comment:8,document:9},pf=function(){return typeof window>"u"?null:window},hf=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const a="data-tt-policy-suffix";n&&n.hasAttribute(a)&&(r=n.getAttribute(a));const o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},Za=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function li(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:pf();const t=w=>li(w);if(t.version="3.2.4",t.removed=[],!e||!e.document||e.document.nodeType!==Et.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const r=n,a=r.currentScript,{DocumentFragment:o,HTMLTemplateElement:i,Node:l,Element:u,NodeFilter:f,NamedNodeMap:h=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:v,DOMParser:x,trustedTypes:L}=e,C=u.prototype,N=St(C,"cloneNode"),A=St(C,"remove"),R=St(C,"nextSibling"),O=St(C,"childNodes"),M=St(C,"parentNode");if(typeof i=="function"){const w=n.createElement("template");w.content&&w.content.ownerDocument&&(n=w.content.ownerDocument)}let P,D="";const{implementation:ye,createNodeIterator:Te,createDocumentFragment:ie,getElementsByTagName:xe}=n,{importNode:Pe}=r;let K=Za();t.isSupported=typeof ai=="function"&&typeof M=="function"&&ye&&ye.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ae,ERB_EXPR:fe,TMPLIT_EXPR:be,DATA_ATTR:se,ARIA_ATTR:Ke,IS_SCRIPT_OR_DATA:Ae,ATTR_WHITESPACE:ue,CUSTOM_ELEMENT:Ze}=Ka;let{IS_ALLOWED_URI:ze}=Ka,V=null;const T=z({},[...Ba,...Wn,...Yn,...Gn,...Xa]);let g=null;const S=z({},[...Va,...Bn,...qa,...Gt]);let b=Object.seal(oi(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),c=null,j=null,y=!0,B=!0,$=!1,H=!0,I=!1,J=!0,Z=!1,U=!1,ee=!1,F=!1,Q=!1,Ie=!1,te=!0,Qe=!1;const Je="user-content-";let me=!0,k=!1,Y={},Re=null;const at=z({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Ce=null;const jr=z({},["audio","video","img","source","image","track"]);let Cn=null;const $r=z({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Lt="http://www.w3.org/1998/Math/MathML",Mt="http://www.w3.org/2000/svg",Ue="http://www.w3.org/1999/xhtml";let ot=Ue,kn=!1,Pn=null;const ci=z({},[Lt,Mt,Ue],Hn);let Dt=z({},["mi","mo","mn","ms","mtext"]),Ft=z({},["annotation-xml"]);const fi=z({},["title","style","font","a","script"]);let gt=null;const ui=["application/xhtml+xml","text/html"],mi="text/html";let ne=null,it=null;const di=n.createElement("form"),Hr=function(s){return s instanceof RegExp||s instanceof Function},In=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(it&&it===s)){if((!s||typeof s!="object")&&(s={}),s=et(s),gt=ui.indexOf(s.PARSER_MEDIA_TYPE)===-1?mi:s.PARSER_MEDIA_TYPE,ne=gt==="application/xhtml+xml"?Hn:qt,V=ke(s,"ALLOWED_TAGS")?z({},s.ALLOWED_TAGS,ne):T,g=ke(s,"ALLOWED_ATTR")?z({},s.ALLOWED_ATTR,ne):S,Pn=ke(s,"ALLOWED_NAMESPACES")?z({},s.ALLOWED_NAMESPACES,Hn):ci,Cn=ke(s,"ADD_URI_SAFE_ATTR")?z(et($r),s.ADD_URI_SAFE_ATTR,ne):$r,Ce=ke(s,"ADD_DATA_URI_TAGS")?z(et(jr),s.ADD_DATA_URI_TAGS,ne):jr,Re=ke(s,"FORBID_CONTENTS")?z({},s.FORBID_CONTENTS,ne):at,c=ke(s,"FORBID_TAGS")?z({},s.FORBID_TAGS,ne):{},j=ke(s,"FORBID_ATTR")?z({},s.FORBID_ATTR,ne):{},Y=ke(s,"USE_PROFILES")?s.USE_PROFILES:!1,y=s.ALLOW_ARIA_ATTR!==!1,B=s.ALLOW_DATA_ATTR!==!1,$=s.ALLOW_UNKNOWN_PROTOCOLS||!1,H=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,I=s.SAFE_FOR_TEMPLATES||!1,J=s.SAFE_FOR_XML!==!1,Z=s.WHOLE_DOCUMENT||!1,F=s.RETURN_DOM||!1,Q=s.RETURN_DOM_FRAGMENT||!1,Ie=s.RETURN_TRUSTED_TYPE||!1,ee=s.FORCE_BODY||!1,te=s.SANITIZE_DOM!==!1,Qe=s.SANITIZE_NAMED_PROPS||!1,me=s.KEEP_CONTENT!==!1,k=s.IN_PLACE||!1,ze=s.ALLOWED_URI_REGEXP||ii,ot=s.NAMESPACE||Ue,Dt=s.MATHML_TEXT_INTEGRATION_POINTS||Dt,Ft=s.HTML_INTEGRATION_POINTS||Ft,b=s.CUSTOM_ELEMENT_HANDLING||{},s.CUSTOM_ELEMENT_HANDLING&&Hr(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(b.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&Hr(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(b.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(b.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),I&&(B=!1),Q&&(F=!0),Y&&(V=z({},Xa),g=[],Y.html===!0&&(z(V,Ba),z(g,Va)),Y.svg===!0&&(z(V,Wn),z(g,Bn),z(g,Gt)),Y.svgFilters===!0&&(z(V,Yn),z(g,Bn),z(g,Gt)),Y.mathMl===!0&&(z(V,Gn),z(g,qa),z(g,Gt))),s.ADD_TAGS&&(V===T&&(V=et(V)),z(V,s.ADD_TAGS,ne)),s.ADD_ATTR&&(g===S&&(g=et(g)),z(g,s.ADD_ATTR,ne)),s.ADD_URI_SAFE_ATTR&&z(Cn,s.ADD_URI_SAFE_ATTR,ne),s.FORBID_CONTENTS&&(Re===at&&(Re=et(Re)),z(Re,s.FORBID_CONTENTS,ne)),me&&(V["#text"]=!0),Z&&z(V,["html","head","body"]),V.table&&(z(V,["tbody"]),delete c.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw At('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw At('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');P=s.TRUSTED_TYPES_POLICY,D=P.createHTML("")}else P===void 0&&(P=hf(L,a)),P!==null&&typeof D=="string"&&(D=P.createHTML(""));he&&he(s),it=s}},Wr=z({},[...Wn,...Yn,...rf]),Yr=z({},[...Gn,...af]),pi=function(s){let p=M(s);(!p||!p.tagName)&&(p={namespaceURI:ot,tagName:"template"});const E=qt(s.tagName),q=qt(p.tagName);return Pn[s.namespaceURI]?s.namespaceURI===Mt?p.namespaceURI===Ue?E==="svg":p.namespaceURI===Lt?E==="svg"&&(q==="annotation-xml"||Dt[q]):!!Wr[E]:s.namespaceURI===Lt?p.namespaceURI===Ue?E==="math":p.namespaceURI===Mt?E==="math"&&Ft[q]:!!Yr[E]:s.namespaceURI===Ue?p.namespaceURI===Mt&&!Ft[q]||p.namespaceURI===Lt&&!Dt[q]?!1:!Yr[E]&&(fi[E]||!Wr[E]):!!(gt==="application/xhtml+xml"&&Pn[s.namespaceURI]):!1},Ne=function(s){bt(t.removed,{element:s});try{M(s).removeChild(s)}catch{A(s)}},zt=function(s,p){try{bt(t.removed,{attribute:p.getAttributeNode(s),from:p})}catch{bt(t.removed,{attribute:null,from:p})}if(p.removeAttribute(s),s==="is")if(F||Q)try{Ne(p)}catch{}else try{p.setAttribute(s,"")}catch{}},Gr=function(s){let p=null,E=null;if(ee)s="<remove></remove>"+s;else{const oe=Ga(s,/^[\r\n\t ]+/);E=oe&&oe[0]}gt==="application/xhtml+xml"&&ot===Ue&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const q=P?P.createHTML(s):s;if(ot===Ue)try{p=new x().parseFromString(q,gt)}catch{}if(!p||!p.documentElement){p=ye.createDocument(ot,"template",null);try{p.documentElement.innerHTML=kn?D:q}catch{}}const le=p.body||p.documentElement;return s&&E&&le.insertBefore(n.createTextNode(E),le.childNodes[0]||null),ot===Ue?xe.call(p,Z?"html":"body")[0]:Z?p.documentElement:le},Br=function(s){return Te.call(s.ownerDocument||s,s,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},Rn=function(s){return s instanceof v&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof h)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},Xr=function(s){return typeof l=="function"&&s instanceof l};function je(w,s,p){Yt(w,E=>{E.call(t,s,p,it)})}const Vr=function(s){let p=null;if(je(K.beforeSanitizeElements,s,null),Rn(s))return Ne(s),!0;const E=ne(s.nodeName);if(je(K.uponSanitizeElement,s,{tagName:E,allowedTags:V}),s.hasChildNodes()&&!Xr(s.firstElementChild)&&pe(/<[/\w]/g,s.innerHTML)&&pe(/<[/\w]/g,s.textContent)||s.nodeType===Et.progressingInstruction||J&&s.nodeType===Et.comment&&pe(/<[/\w]/g,s.data))return Ne(s),!0;if(!V[E]||c[E]){if(!c[E]&&Kr(E)&&(b.tagNameCheck instanceof RegExp&&pe(b.tagNameCheck,E)||b.tagNameCheck instanceof Function&&b.tagNameCheck(E)))return!1;if(me&&!Re[E]){const q=M(s)||s.parentNode,le=O(s)||s.childNodes;if(le&&q){const oe=le.length;for(let ve=oe-1;ve>=0;--ve){const Le=N(le[ve],!0);Le.__removalCount=(s.__removalCount||0)+1,q.insertBefore(Le,R(s))}}}return Ne(s),!0}return s instanceof u&&!pi(s)||(E==="noscript"||E==="noembed"||E==="noframes")&&pe(/<\/no(script|embed|frames)/i,s.innerHTML)?(Ne(s),!0):(I&&s.nodeType===Et.text&&(p=s.textContent,Yt([ae,fe,be],q=>{p=vt(p,q," ")}),s.textContent!==p&&(bt(t.removed,{element:s.cloneNode()}),s.textContent=p)),je(K.afterSanitizeElements,s,null),!1)},qr=function(s,p,E){if(te&&(p==="id"||p==="name")&&(E in n||E in di))return!1;if(!(B&&!j[p]&&pe(se,p))){if(!(y&&pe(Ke,p))){if(!g[p]||j[p]){if(!(Kr(s)&&(b.tagNameCheck instanceof RegExp&&pe(b.tagNameCheck,s)||b.tagNameCheck instanceof Function&&b.tagNameCheck(s))&&(b.attributeNameCheck instanceof RegExp&&pe(b.attributeNameCheck,p)||b.attributeNameCheck instanceof Function&&b.attributeNameCheck(p))||p==="is"&&b.allowCustomizedBuiltInElements&&(b.tagNameCheck instanceof RegExp&&pe(b.tagNameCheck,E)||b.tagNameCheck instanceof Function&&b.tagNameCheck(E))))return!1}else if(!Cn[p]){if(!pe(ze,vt(E,ue,""))){if(!((p==="src"||p==="xlink:href"||p==="href")&&s!=="script"&&Jc(E,"data:")===0&&Ce[s])){if(!($&&!pe(Ae,vt(E,ue,"")))){if(E)return!1}}}}}}return!0},Kr=function(s){return s!=="annotation-xml"&&Ga(s,Ze)},Zr=function(s){je(K.beforeSanitizeAttributes,s,null);const{attributes:p}=s;if(!p||Rn(s))return;const E={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:g,forceKeepAttr:void 0};let q=p.length;for(;q--;){const le=p[q],{name:oe,namespaceURI:ve,value:Le}=le,yt=ne(oe);let de=oe==="value"?Le:ef(Le);if(E.attrName=yt,E.attrValue=de,E.keepAttr=!0,E.forceKeepAttr=void 0,je(K.uponSanitizeAttribute,s,E),de=E.attrValue,Qe&&(yt==="id"||yt==="name")&&(zt(oe,s),de=Je+de),J&&pe(/((--!?|])>)|<\/(style|title)/i,de)){zt(oe,s);continue}if(E.forceKeepAttr||(zt(oe,s),!E.keepAttr))continue;if(!H&&pe(/\/>/i,de)){zt(oe,s);continue}I&&Yt([ae,fe,be],Jr=>{de=vt(de,Jr," ")});const Qr=ne(s.nodeName);if(qr(Qr,yt,de)){if(P&&typeof L=="object"&&typeof L.getAttributeType=="function"&&!ve)switch(L.getAttributeType(Qr,yt)){case"TrustedHTML":{de=P.createHTML(de);break}case"TrustedScriptURL":{de=P.createScriptURL(de);break}}try{ve?s.setAttributeNS(ve,oe,de):s.setAttribute(oe,de),Rn(s)?Ne(s):Ya(t.removed)}catch{}}}je(K.afterSanitizeAttributes,s,null)},hi=function w(s){let p=null;const E=Br(s);for(je(K.beforeSanitizeShadowDOM,s,null);p=E.nextNode();)je(K.uponSanitizeShadowNode,p,null),Vr(p),Zr(p),p.content instanceof o&&w(p.content);je(K.afterSanitizeShadowDOM,s,null)};return t.sanitize=function(w){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=null,E=null,q=null,le=null;if(kn=!w,kn&&(w="<!-->"),typeof w!="string"&&!Xr(w))if(typeof w.toString=="function"){if(w=w.toString(),typeof w!="string")throw At("dirty is not a string, aborting")}else throw At("toString is not a function");if(!t.isSupported)return w;if(U||In(s),t.removed=[],typeof w=="string"&&(k=!1),k){if(w.nodeName){const Le=ne(w.nodeName);if(!V[Le]||c[Le])throw At("root node is forbidden and cannot be sanitized in-place")}}else if(w instanceof l)p=Gr("<!---->"),E=p.ownerDocument.importNode(w,!0),E.nodeType===Et.element&&E.nodeName==="BODY"||E.nodeName==="HTML"?p=E:p.appendChild(E);else{if(!F&&!I&&!Z&&w.indexOf("<")===-1)return P&&Ie?P.createHTML(w):w;if(p=Gr(w),!p)return F?null:Ie?D:""}p&&ee&&Ne(p.firstChild);const oe=Br(k?w:p);for(;q=oe.nextNode();)Vr(q),Zr(q),q.content instanceof o&&hi(q.content);if(k)return w;if(F){if(Q)for(le=ie.call(p.ownerDocument);p.firstChild;)le.appendChild(p.firstChild);else le=p;return(g.shadowroot||g.shadowrootmode)&&(le=Pe.call(r,le,!0)),le}let ve=Z?p.outerHTML:p.innerHTML;return Z&&V["!doctype"]&&p.ownerDocument&&p.ownerDocument.doctype&&p.ownerDocument.doctype.name&&pe(si,p.ownerDocument.doctype.name)&&(ve="<!DOCTYPE "+p.ownerDocument.doctype.name+`>
`+ve),I&&Yt([ae,fe,be],Le=>{ve=vt(ve,Le," ")}),P&&Ie?P.createHTML(ve):ve},t.setConfig=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};In(w),U=!0},t.clearConfig=function(){it=null,U=!1},t.isValidAttribute=function(w,s,p){it||In({});const E=ne(w),q=ne(s);return qr(E,q,p)},t.addHook=function(w,s){typeof s=="function"&&bt(K[w],s)},t.removeHook=function(w,s){if(s!==void 0){const p=Zc(K[w],s);return p===-1?void 0:Qc(K[w],p,1)[0]}return Ya(K[w])},t.removeHooks=function(w){K[w]=[]},t.removeAllHooks=function(){K=Za()},t}li();m.shape({event:m.string,action:m.string,name:m.string,region:m.string,section:m.string,component:m.string,type:m.string,text:m.string});const _f=({event:e="",action:t="",name:n="",type:r="",section:a="",text:o="",region:i="",component:l=""})=>{const{dataLayer:u}=window,f={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:i.toLowerCase(),section:a.toLowerCase(),text:o.toLowerCase(),component:l.toLowerCase()};u&&u.push(f)};export{Ts as A,Ao as B,ri as F,vf as H,ta as N,m as P,Nn as T,bf as a,Ef as b,xf as c,vr as d,Sf as e,Tf as f,Af as g,Ei as j,Oi as p,Zn as q,_f as t};
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
