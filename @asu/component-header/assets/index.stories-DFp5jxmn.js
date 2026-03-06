import{r as Y,R as St}from"./index-B2SEcK1p.js";import{g as go}from"./_commonjsHelpers-B3tUAs5q.js";var yo={exports:{}},kn={};var Gs=Y,Xs=Symbol.for("react.element"),Vs=Symbol.for("react.fragment"),Ks=Object.prototype.hasOwnProperty,Zs=Gs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qs={key:!0,ref:!0,__self:!0,__source:!0};function bo(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ks.call(t,r)&&!Qs.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Xs,type:e,key:i,ref:o,props:a,_owner:Zs.current}}kn.Fragment=Vs;kn.jsx=bo;kn.jsxs=bo;yo.exports=kn;var p=yo.exports,vo={exports:{}},Js="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",el=Js,tl=el;function xo(){}function wo(){}wo.resetWarningCache=xo;var nl=function(){function e(r,a,i,o,l,d){if(d!==tl){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:wo,resetWarningCache:xo};return n.PropTypes=n,n};vo.exports=nl();var rl=vo.exports;const f=go(rl),Ma={alt:f.string,title:f.string,src:f.string,mobileSrc:f.string,brandLink:f.string},mn={baseUrl:f.string,parentOrg:f.string,parentOrgUrl:f.string,animate:f.bool},sn={loggedIn:f.bool,loginLink:f.string,logoutLink:f.string,userName:f.string},En={text:f.string.isRequired,color:f.oneOf(["gold","maroon","light","dark"]),href:f.string.isRequired,classes:f.string,onClick:f.func},wr=f.shape({id:f.number,href:f.string,text:f.string,type:f.string,selected:f.bool,items:f.arrayOf(f.arrayOf(f.object)),buttons:f.arrayOf(f.shape(En)),class:f.string}),Ao={isPartner:f.bool,navTree:f.arrayOf(wr),partnerLogo:f.shape(Ma),logo:f.shape(Ma),title:f.string,parentOrg:mn.parentOrg,parentOrgUrl:mn.parentOrgUrl,baseUrl:mn.baseUrl,loggedIn:sn.loggedIn,userName:sn.userName,loginLink:sn.loginLink,onLoginClick:f.func,logoutLink:sn.logoutLink,onLogoutClick:f.func,buttons:f.arrayOf(f.shape(En)),breakpoint:f.oneOf(["Lg","Xl"]),animateTitle:f.bool,expandOnHover:f.bool,mobileNavTree:f.arrayOf(wr),hasNavigation:f.bool,searchUrl:f.string,site:f.string,renderDiv:f.oneOf(["true","false"])};var So={exports:{}},G={};var Xr=Symbol.for("react.transitional.element"),Vr=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),Cn=Symbol.for("react.strict_mode"),On=Symbol.for("react.profiler"),Pn=Symbol.for("react.consumer"),Nn=Symbol.for("react.context"),In=Symbol.for("react.forward_ref"),Ln=Symbol.for("react.suspense"),Rn=Symbol.for("react.suspense_list"),Dn=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),al=Symbol.for("react.offscreen"),il=Symbol.for("react.client.reference");function De(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xr:switch(e=e.type,e){case _n:case On:case Cn:case Ln:case Rn:return e;default:switch(e=e&&e.$$typeof,e){case Nn:case In:case Mn:case Dn:return e;case Pn:return e;default:return t}}case Vr:return t}}}G.ContextConsumer=Pn;G.ContextProvider=Nn;G.Element=Xr;G.ForwardRef=In;G.Fragment=_n;G.Lazy=Mn;G.Memo=Dn;G.Portal=Vr;G.Profiler=On;G.StrictMode=Cn;G.Suspense=Ln;G.SuspenseList=Rn;G.isContextConsumer=function(e){return De(e)===Pn};G.isContextProvider=function(e){return De(e)===Nn};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr};G.isForwardRef=function(e){return De(e)===In};G.isFragment=function(e){return De(e)===_n};G.isLazy=function(e){return De(e)===Mn};G.isMemo=function(e){return De(e)===Dn};G.isPortal=function(e){return De(e)===Vr};G.isProfiler=function(e){return De(e)===On};G.isStrictMode=function(e){return De(e)===Cn};G.isSuspense=function(e){return De(e)===Ln};G.isSuspenseList=function(e){return De(e)===Rn};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===_n||e===On||e===Cn||e===Ln||e===Rn||e===al||typeof e=="object"&&e!==null&&(e.$$typeof===Mn||e.$$typeof===Dn||e.$$typeof===Nn||e.$$typeof===Pn||e.$$typeof===In||e.$$typeof===il||e.getModuleId!==void 0)};G.typeOf=De;So.exports=G;var To=So.exports;function ol(e){function t(O,v,E,k,u){for(var U=0,b=0,V=0,$=0,H,F,J=0,le=0,j,oe=j=H=0,q=0,ee=0,Me=0,re=0,lt=E.length,Je=lt-1,Ce,D="",B="",Fe="",ke="",Ie;q<lt;){if(F=E.charCodeAt(q),q===Je&&b+$+V+U!==0&&(b!==0&&(F=b===47?10:47),$=V=U=0,lt++,Je++),b+$+V+U===0){if(q===Je&&(0<ee&&(D=D.replace(T,"")),0<D.trim().length)){switch(F){case 32:case 9:case 59:case 13:case 10:break;default:D+=E.charAt(q)}F=59}switch(F){case 123:for(D=D.trim(),H=D.charCodeAt(0),j=1,re=++q;q<lt;){switch(F=E.charCodeAt(q)){case 123:j++;break;case 125:j--;break;case 47:switch(F=E.charCodeAt(q+1)){case 42:case 47:e:{for(oe=q+1;oe<Je;++oe)switch(E.charCodeAt(oe)){case 47:if(F===42&&E.charCodeAt(oe-1)===42&&q+2!==oe){q=oe+1;break e}break;case 10:if(F===47){q=oe+1;break e}}q=oe}}break;case 91:F++;case 40:F++;case 34:case 39:for(;q++<Je&&E.charCodeAt(q)!==F;);}if(j===0)break;q++}switch(j=E.substring(re,q),H===0&&(H=(D=D.replace(x,"").trim()).charCodeAt(0)),H){case 64:switch(0<ee&&(D=D.replace(T,"")),F=D.charCodeAt(1),F){case 100:case 109:case 115:case 45:ee=v;break;default:ee=ot}if(j=t(v,ee,j,F,u+1),re=j.length,0<ve&&(ee=n(ot,D,Me),Ie=l(3,j,ee,v,be,pe,re,F,u,k),D=ee.join(""),Ie!==void 0&&(re=(j=Ie.trim()).length)===0&&(F=0,j="")),0<re)switch(F){case 115:D=D.replace(ne,o);case 100:case 109:case 45:j=D+"{"+j+"}";break;case 107:D=D.replace(A,"$1 $2"),j=D+"{"+j+"}",j=he===1||he===2&&i("@"+j,3)?"@-webkit-"+j+"@"+j:"@"+j;break;default:j=D+j,k===112&&(j=(B+=j,""))}else j="";break;default:j=t(v,n(v,D,Me),j,k,u+1)}Fe+=j,j=Me=ee=oe=H=0,D="",F=E.charCodeAt(++q);break;case 125:case 59:if(D=(0<ee?D.replace(T,""):D).trim(),1<(re=D.length))switch(oe===0&&(H=D.charCodeAt(0),H===45||96<H&&123>H)&&(re=(D=D.replace(" ",":")).length),0<ve&&(Ie=l(1,D,v,O,be,pe,B.length,k,u,k))!==void 0&&(re=(D=Ie.trim()).length)===0&&(D="\0\0"),H=D.charCodeAt(0),F=D.charCodeAt(1),H){case 0:break;case 64:if(F===105||F===99){ke+=D+E.charAt(q);break}default:D.charCodeAt(re-1)!==58&&(B+=a(D,H,F,D.charCodeAt(2)))}Me=ee=oe=H=0,D="",F=E.charCodeAt(++q)}}switch(F){case 13:case 10:b===47?b=0:1+H===0&&k!==107&&0<D.length&&(ee=1,D+="\0"),0<ve*Be&&l(0,D,v,O,be,pe,B.length,k,u,k),pe=1,be++;break;case 59:case 125:if(b+$+V+U===0){pe++;break}default:switch(pe++,Ce=E.charAt(q),F){case 9:case 32:if($+U+b===0)switch(J){case 44:case 58:case 9:case 32:Ce="";break;default:F!==32&&(Ce=" ")}break;case 0:Ce="\\0";break;case 12:Ce="\\f";break;case 11:Ce="\\v";break;case 38:$+b+U===0&&(ee=Me=1,Ce="\f"+Ce);break;case 108:if($+b+U+Te===0&&0<oe)switch(q-oe){case 2:J===112&&E.charCodeAt(q-3)===58&&(Te=J);case 8:le===111&&(Te=le)}break;case 58:$+b+U===0&&(oe=q);break;case 44:b+V+$+U===0&&(ee=1,Ce+="\r");break;case 34:case 39:b===0&&($=$===F?0:$===0?F:$);break;case 91:$+b+V===0&&U++;break;case 93:$+b+V===0&&U--;break;case 41:$+b+U===0&&V--;break;case 40:if($+b+U===0){if(H===0)switch(2*J+3*le){case 533:break;default:H=1}V++}break;case 64:b+V+$+U+oe+j===0&&(j=1);break;case 42:case 47:if(!(0<$+U+V))switch(b){case 0:switch(2*F+3*E.charCodeAt(q+1)){case 235:b=47;break;case 220:re=q,b=42}break;case 42:F===47&&J===42&&re+2!==q&&(E.charCodeAt(re+2)===33&&(B+=E.substring(re,q+1)),Ce="",b=0)}}b===0&&(D+=Ce)}le=J,J=F,q++}if(re=B.length,0<re){if(ee=v,0<ve&&(Ie=l(2,B,ee,O,be,pe,re,k,u,k),Ie!==void 0&&(B=Ie).length===0))return ke+B+Fe;if(B=ee.join(",")+"{"+B+"}",he*Te!==0){switch(he!==2||i(B,2)||(Te=0),Te){case 111:B=B.replace(N,":-moz-$1")+B;break;case 112:B=B.replace(L,"::-webkit-input-$1")+B.replace(L,"::-moz-$1")+B.replace(L,":-ms-input-$1")+B}Te=0}}return ke+B+Fe}function n(O,v,E){var k=v.trim().split(h);v=k;var u=k.length,U=O.length;switch(U){case 0:case 1:var b=0;for(O=U===0?"":O[0]+" ";b<u;++b)v[b]=r(O,v[b],E).trim();break;default:var V=b=0;for(v=[];b<u;++b)for(var $=0;$<U;++$)v[V++]=r(O[$]+" ",k[b],E).trim()}return v}function r(O,v,E){var k=v.charCodeAt(0);switch(33>k&&(k=(v=v.trim()).charCodeAt(0)),k){case 38:return v.replace(S,"$1"+O.trim());case 58:return O.trim()+v.replace(S,"$1"+O.trim());default:if(0<1*E&&0<v.indexOf("\f"))return v.replace(S,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+v}function a(O,v,E,k){var u=O+";",U=2*v+3*E+4*k;if(U===944){O=u.indexOf(":",9)+1;var b=u.substring(O,u.length-1).trim();return b=u.substring(0,O).trim()+b+";",he===1||he===2&&i(b,1)?"-webkit-"+b+b:b}if(he===0||he===2&&!i(u,1))return u;switch(U){case 1015:return u.charCodeAt(10)===97?"-webkit-"+u+u:u;case 951:return u.charCodeAt(3)===116?"-webkit-"+u+u:u;case 963:return u.charCodeAt(5)===110?"-webkit-"+u+u:u;case 1009:if(u.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+u+u;case 978:return"-webkit-"+u+"-moz-"+u+u;case 1019:case 983:return"-webkit-"+u+"-moz-"+u+"-ms-"+u+u;case 883:if(u.charCodeAt(8)===45)return"-webkit-"+u+u;if(0<u.indexOf("image-set(",11))return u.replace(X,"$1-webkit-$2")+u;break;case 932:if(u.charCodeAt(4)===45)switch(u.charCodeAt(5)){case 103:return"-webkit-box-"+u.replace("-grow","")+"-webkit-"+u+"-ms-"+u.replace("grow","positive")+u;case 115:return"-webkit-"+u+"-ms-"+u.replace("shrink","negative")+u;case 98:return"-webkit-"+u+"-ms-"+u.replace("basis","preferred-size")+u}return"-webkit-"+u+"-ms-"+u+u;case 964:return"-webkit-"+u+"-ms-flex-"+u+u;case 1023:if(u.charCodeAt(8)!==99)break;return b=u.substring(u.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+b+"-webkit-"+u+"-ms-flex-pack"+b+u;case 1005:return w.test(u)?u.replace(R,":-webkit-")+u.replace(R,":-moz-")+u:u;case 1e3:switch(b=u.substring(13).trim(),v=b.indexOf("-")+1,b.charCodeAt(0)+b.charCodeAt(v)){case 226:b=u.replace(M,"tb");break;case 232:b=u.replace(M,"tb-rl");break;case 220:b=u.replace(M,"lr");break;default:return u}return"-webkit-"+u+"-ms-"+b+u;case 1017:if(u.indexOf("sticky",9)===-1)break;case 975:switch(v=(u=O).length-10,b=(u.charCodeAt(v)===33?u.substring(0,v):u).substring(O.indexOf(":",7)+1).trim(),U=b.charCodeAt(0)+(b.charCodeAt(7)|0)){case 203:if(111>b.charCodeAt(8))break;case 115:u=u.replace(b,"-webkit-"+b)+";"+u;break;case 207:case 102:u=u.replace(b,"-webkit-"+(102<U?"inline-":"")+"box")+";"+u.replace(b,"-webkit-"+b)+";"+u.replace(b,"-ms-"+b+"box")+";"+u}return u+";";case 938:if(u.charCodeAt(5)===45)switch(u.charCodeAt(6)){case 105:return b=u.replace("-items",""),"-webkit-"+u+"-webkit-box-"+b+"-ms-flex-"+b+u;case 115:return"-webkit-"+u+"-ms-flex-item-"+u.replace(Z,"")+u;default:return"-webkit-"+u+"-ms-flex-line-pack"+u.replace("align-content","").replace(Z,"")+u}break;case 973:case 989:if(u.charCodeAt(3)!==45||u.charCodeAt(4)===122)break;case 931:case 953:if(fe.test(O)===!0)return(b=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?a(O.replace("stretch","fill-available"),v,E,k).replace(":fill-available",":stretch"):u.replace(b,"-webkit-"+b)+u.replace(b,"-moz-"+b.replace("fill-",""))+u;break;case 962:if(u="-webkit-"+u+(u.charCodeAt(5)===102?"-ms-"+u:"")+u,E+k===211&&u.charCodeAt(13)===105&&0<u.indexOf("transform",10))return u.substring(0,u.indexOf(";",27)+1).replace(C,"$1-webkit-$2")+u}return u}function i(O,v){var E=O.indexOf(v===1?":":"{"),k=O.substring(0,v!==3?E:10);return E=O.substring(E+1,O.length-1),st(v!==2?k:k.replace(ae,"$1"),E,v)}function o(O,v){var E=a(v,v.charCodeAt(0),v.charCodeAt(1),v.charCodeAt(2));return E!==v+";"?E.replace(ie," or ($1)").substring(4):"("+v+")"}function l(O,v,E,k,u,U,b,V,$,H){for(var F=0,J=v,le;F<ve;++F)switch(le=_e[F].call(m,O,J,E,k,u,U,b,V,$,H)){case void 0:case!1:case!0:case null:break;default:J=le}if(J!==v)return J}function d(O){switch(O){case void 0:case null:ve=_e.length=0;break;default:if(typeof O=="function")_e[ve++]=O;else if(typeof O=="object")for(var v=0,E=O.length;v<E;++v)d(O[v]);else Be=!!O|0}return d}function c(O){return O=O.prefix,O!==void 0&&(st=null,O?typeof O!="function"?he=1:(he=2,st=O):he=0),c}function m(O,v){var E=O;if(33>E.charCodeAt(0)&&(E=E.trim()),Q=E,E=[Q],0<ve){var k=l(-1,v,E,E,be,pe,0,0,0,0);k!==void 0&&typeof k=="string"&&(v=k)}var u=t(ot,E,v,0,0);return 0<ve&&(k=l(-2,u,E,E,be,pe,u.length,0,0,0),k!==void 0&&(u=k)),Q="",Te=0,pe=be=1,u}var x=/^\0+/g,T=/[\0\r\f]/g,R=/: */g,w=/zoo|gra/,C=/([,: ])(transform)/g,h=/,\r+?/g,S=/([\t\r\n ])*\f?&/g,A=/@(k\w+)\s*(\S*)\s*/,L=/::(place)/g,N=/:(read-only)/g,M=/[svh]\w+-[tblr]{2}/,ne=/\(\s*(.*)\s*\)/g,ie=/([\s\S]*?);/g,Z=/-self|flex-/g,ae=/[^]*?(:[rp][el]a[\w-]+)[^]*/,fe=/stretch|:\s*\w+\-(?:conte|avail)/,X=/([^-])(image-set\()/,pe=1,be=1,Te=0,he=1,ot=[],_e=[],ve=0,st=null,Be=0,Q="";return m.use=d,m.set=c,e!==void 0&&c(e),m}var sl={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ll(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var cl=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Fa=ll(function(e){return cl.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ko={exports:{}},W={};var de=typeof Symbol=="function"&&Symbol.for,Kr=de?Symbol.for("react.element"):60103,Zr=de?Symbol.for("react.portal"):60106,Fn=de?Symbol.for("react.fragment"):60107,jn=de?Symbol.for("react.strict_mode"):60108,zn=de?Symbol.for("react.profiler"):60114,Un=de?Symbol.for("react.provider"):60109,$n=de?Symbol.for("react.context"):60110,Qr=de?Symbol.for("react.async_mode"):60111,qn=de?Symbol.for("react.concurrent_mode"):60111,Hn=de?Symbol.for("react.forward_ref"):60112,Wn=de?Symbol.for("react.suspense"):60113,ul=de?Symbol.for("react.suspense_list"):60120,Bn=de?Symbol.for("react.memo"):60115,Yn=de?Symbol.for("react.lazy"):60116,fl=de?Symbol.for("react.block"):60121,dl=de?Symbol.for("react.fundamental"):60117,pl=de?Symbol.for("react.responder"):60118,ml=de?Symbol.for("react.scope"):60119;function Pe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Kr:switch(e=e.type,e){case Qr:case qn:case Fn:case zn:case jn:case Wn:return e;default:switch(e=e&&e.$$typeof,e){case $n:case Hn:case Yn:case Bn:case Un:return e;default:return t}}case Zr:return t}}}function Eo(e){return Pe(e)===qn}W.AsyncMode=Qr;W.ConcurrentMode=qn;W.ContextConsumer=$n;W.ContextProvider=Un;W.Element=Kr;W.ForwardRef=Hn;W.Fragment=Fn;W.Lazy=Yn;W.Memo=Bn;W.Portal=Zr;W.Profiler=zn;W.StrictMode=jn;W.Suspense=Wn;W.isAsyncMode=function(e){return Eo(e)||Pe(e)===Qr};W.isConcurrentMode=Eo;W.isContextConsumer=function(e){return Pe(e)===$n};W.isContextProvider=function(e){return Pe(e)===Un};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kr};W.isForwardRef=function(e){return Pe(e)===Hn};W.isFragment=function(e){return Pe(e)===Fn};W.isLazy=function(e){return Pe(e)===Yn};W.isMemo=function(e){return Pe(e)===Bn};W.isPortal=function(e){return Pe(e)===Zr};W.isProfiler=function(e){return Pe(e)===zn};W.isStrictMode=function(e){return Pe(e)===jn};W.isSuspense=function(e){return Pe(e)===Wn};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fn||e===qn||e===zn||e===jn||e===Wn||e===ul||typeof e=="object"&&e!==null&&(e.$$typeof===Yn||e.$$typeof===Bn||e.$$typeof===Un||e.$$typeof===$n||e.$$typeof===Hn||e.$$typeof===dl||e.$$typeof===pl||e.$$typeof===ml||e.$$typeof===fl)};W.typeOf=Pe;ko.exports=W;var hl=ko.exports,Jr=hl,gl={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yl={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bl={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ea={};ea[Jr.ForwardRef]=bl;ea[Jr.Memo]=_o;function ja(e){return Jr.isMemo(e)?_o:ea[e.$$typeof]||gl}var vl=Object.defineProperty,xl=Object.getOwnPropertyNames,za=Object.getOwnPropertySymbols,wl=Object.getOwnPropertyDescriptor,Al=Object.getPrototypeOf,Ua=Object.prototype;function Co(e,t,n){if(typeof t!="string"){if(Ua){var r=Al(t);r&&r!==Ua&&Co(e,r,n)}var a=xl(t);za&&(a=a.concat(za(t)));for(var i=ja(e),o=ja(t),l=0;l<a.length;++l){var d=a[l];if(!yl[d]&&!(n&&n[d])&&!(o&&o[d])&&!(i&&i[d])){var c=wl(t,d);try{vl(e,d,c)}catch{}}}}return e}var Sl=Co;const Tl=go(Sl);var Oo={},Le={};function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var $a=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},Ar=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!To.typeOf(e)},xn=Object.freeze([]),tt=Object.freeze({});function Xt(e){return typeof e=="function"}function qa(e){return e.displayName||e.name||"Component"}function ta(e){return e&&typeof e.styledComponentId=="string"}var xt=typeof Oo<"u"&&Le!==void 0&&(Le.REACT_APP_SC_ATTR||Le.SC_ATTR)||"data-styled",na=typeof window<"u"&&"HTMLElement"in window,kl=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof Oo<"u"&&Le!==void 0&&(Le.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Le.REACT_APP_SC_DISABLE_SPEEDY!==""?Le.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Le.REACT_APP_SC_DISABLE_SPEEDY:Le.SC_DISABLE_SPEEDY!==void 0&&Le.SC_DISABLE_SPEEDY!==""&&Le.SC_DISABLE_SPEEDY!=="false"&&Le.SC_DISABLE_SPEEDY));function Zt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var El=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,i=a.length,o=i;n>=o;)(o<<=1)<0&&Zt(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(a),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(n+1),c=0,m=r.length;c<m;c++)this.tag.insertRule(d,r[c])&&(this.groupSizes[n]++,d++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),i=a+r;this.groupSizes[n]=0;for(var o=a;o<i;o++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],i=this.indexOfGroup(n),o=i+a,l=i;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),hn=new Map,wn=new Map,Bt=1,ln=function(e){if(hn.has(e))return hn.get(e);for(;wn.has(Bt);)Bt++;var t=Bt++;return hn.set(e,t),wn.set(t,e),t},_l=function(e){return wn.get(e)},Cl=function(e,t){t>=Bt&&(Bt=t+1),hn.set(e,t),wn.set(t,e)},Ol="style["+xt+'][data-styled-version="5.3.11"]',Pl=new RegExp("^"+xt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Nl=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},Il=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var l=o.match(Pl);if(l){var d=0|parseInt(l[1],10),c=l[2];d!==0&&(Cl(c,d),Nl(e,c,l[3]),e.getTag().insertRules(d,r)),r.length=0}else r.push(o)}}},Ll=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Po=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){for(var d=l.childNodes,c=d.length;c>=0;c--){var m=d[c];if(m&&m.nodeType===1&&m.hasAttribute(xt))return m}}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(xt,"active"),r.setAttribute("data-styled-version","5.3.11");var o=Ll();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},Rl=function(){function e(n){var r=this.element=Po(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var d=i[o];if(d.ownerNode===a)return d}Zt(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Dl=function(){function e(n){var r=this.element=Po(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(a,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Ml=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Ha=na,Fl={isServer:!na,useCSSOMInjection:!kl},No=function(){function e(n,r,a){n===void 0&&(n=tt),r===void 0&&(r={}),this.options=Ve({},Fl,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&na&&Ha&&(Ha=!1,function(i){for(var o=document.querySelectorAll(Ol),l=0,d=o.length;l<d;l++){var c=o[l];c&&c.getAttribute(xt)!=="active"&&(Il(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return ln(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ve({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,i=r.useCSSOMInjection,o=r.target,n=a?new Ml(o):i?new Rl(o):new Dl(o),new El(n)));var n,r,a,i,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ln(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(ln(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ln(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,i="",o=0;o<a;o++){var l=_l(o);if(l!==void 0){var d=n.names.get(l),c=r.getGroup(o);if(d&&c&&d.size){var m=xt+".g"+o+'[id="'+l+'"]',x="";d!==void 0&&d.forEach(function(T){T.length>0&&(x+=T+",")}),i+=""+c+m+'{content:"'+x+`"}/*!sc*/
`}}}return i}(this)},e}(),jl=/(a)(d)/gi,Wa=function(e){return String.fromCharCode(e+(e>25?39:97))};function Sr(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Wa(t%52)+n;return(Wa(t%52)+n).replace(jl,"$1-$2")}var gt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Io=function(e){return gt(5381,e)};function zl(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xt(n)&&!ta(n))return!1}return!0}var Ul=Io("5.3.11"),$l=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&zl(t),this.componentId=n,this.baseHash=gt(Ul,n),this.baseStyle=r,No.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))i.push(this.staticRulesId);else{var o=wt(this.rules,t,n,r).join(""),l=Sr(gt(this.baseHash,o)>>>0);if(!n.hasNameForId(a,l)){var d=r(o,"."+l,void 0,a);n.insertRules(a,l,d)}i.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,m=gt(this.baseHash,r.hash),x="",T=0;T<c;T++){var R=this.rules[T];if(typeof R=="string")x+=R;else if(R){var w=wt(R,t,n,r),C=Array.isArray(w)?w.join(""):w;m=gt(m,C+T),x+=C}}if(x){var h=Sr(m>>>0);if(!n.hasNameForId(a,h)){var S=r(x,"."+h,void 0,a);n.insertRules(a,h,S)}i.push(h)}}return i.join(" ")},e}(),ql=/^\s*\/\/.*$/gm,Hl=[":","[",".","#"];function Wl(e){var t,n,r,a,i=tt,o=i.options,l=o===void 0?tt:o,d=i.plugins,c=d===void 0?xn:d,m=new ol(l),x=[],T=function(C){function h(S){if(S)try{C(S+"}")}catch{}}return function(S,A,L,N,M,ne,ie,Z,ae,fe){switch(S){case 1:if(ae===0&&A.charCodeAt(0)===64)return C(A+";"),"";break;case 2:if(Z===0)return A+"/*|*/";break;case 3:switch(Z){case 102:case 112:return C(L[0]+A),"";default:return A+(fe===0?"/*|*/":"")}case-2:A.split("/*|*/}").forEach(h)}}}(function(C){x.push(C)}),R=function(C,h,S){return h===0&&Hl.indexOf(S[n.length])!==-1||S.match(a)?C:"."+t};function w(C,h,S,A){A===void 0&&(A="&");var L=C.replace(ql,""),N=h&&S?S+" "+h+" { "+L+" }":L;return t=A,n=h,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),m(S||!h?"":h,N)}return m.use([].concat(c,[function(C,h,S){C===2&&S.length&&S[0].lastIndexOf(n)>0&&(S[0]=S[0].replace(r,R))},T,function(C){if(C===-2){var h=x;return x=[],h}}])),w.hash=c.length?c.reduce(function(C,h){return h.name||Zt(15),gt(C,h.name)},5381).toString():"",w}var Lo=St.createContext();Lo.Consumer;var Ro=St.createContext(),Bl=(Ro.Consumer,new No),Tr=Wl();function Yl(){return Y.useContext(Lo)||Bl}function Gl(){return Y.useContext(Ro)||Tr}var Xl=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=Tr);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.toString=function(){return Zt(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Tr),this.name+t.hash},e}(),Vl=/([A-Z])/,Kl=/([A-Z])/g,Zl=/^ms-/,Ql=function(e){return"-"+e.toLowerCase()};function Ba(e){return Vl.test(e)?e.replace(Kl,Ql).replace(Zl,"-ms-"):e}var Ya=function(e){return e==null||e===!1||e===""};function wt(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,l=e.length;o<l;o+=1)(a=wt(e[o],t,n,r))!==""&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}if(Ya(e))return"";if(ta(e))return"."+e.styledComponentId;if(Xt(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var d=e(t);return wt(d,t,n,r)}var c;return e instanceof Xl?n?(e.inject(n,r),e.getName(r)):e:Ar(e)?function m(x,T){var R,w,C=[];for(var h in x)x.hasOwnProperty(h)&&!Ya(x[h])&&(Array.isArray(x[h])&&x[h].isCss||Xt(x[h])?C.push(Ba(h)+":",x[h],";"):Ar(x[h])?C.push.apply(C,m(x[h],h)):C.push(Ba(h)+": "+(R=h,(w=x[h])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||R in sl||R.startsWith("--")?String(w).trim():w+"px")+";"));return T?[T+" {"].concat(C,["}"]):C}(e):e.toString()}var Ga=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Jl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Xt(e)||Ar(e)?Ga(wt($a(xn,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Ga(wt($a(e,n)))}var ec=function(e,t,n){return n===void 0&&(n=tt),e.theme!==n.theme&&e.theme||t||n.theme},tc=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nc=/(^-|-$)/g;function ir(e){return e.replace(tc,"-").replace(nc,"")}var rc=function(e){return Sr(Io(e)>>>0)};function cn(e){return typeof e=="string"&&!0}var kr=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},ac=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ic(e,t,n){var r=e[n];kr(t)&&kr(r)?Do(r,t):e[n]=t}function Do(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(kr(o))for(var l in o)ac(l)&&ic(e,o[l],l)}return e}var Mo=St.createContext();Mo.Consumer;var or={};function Fo(e,t,n){var r=ta(e),a=!cn(e),i=t.attrs,o=i===void 0?xn:i,l=t.componentId,d=l===void 0?function(A,L){var N=typeof A!="string"?"sc":ir(A);or[N]=(or[N]||0)+1;var M=N+"-"+rc("5.3.11"+N+or[N]);return L?L+"-"+M:M}(t.displayName,t.parentComponentId):l,c=t.displayName,m=c===void 0?function(A){return cn(A)?"styled."+A:"Styled("+qa(A)+")"}(e):c,x=t.displayName&&t.componentId?ir(t.displayName)+"-"+t.componentId:t.componentId||d,T=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,R=t.shouldForwardProp;r&&e.shouldForwardProp&&(R=t.shouldForwardProp?function(A,L,N){return e.shouldForwardProp(A,L,N)&&t.shouldForwardProp(A,L,N)}:e.shouldForwardProp);var w,C=new $l(n,x,r?e.componentStyle:void 0),h=C.isStatic&&o.length===0,S=function(A,L){return function(N,M,ne,ie){var Z=N.attrs,ae=N.componentStyle,fe=N.defaultProps,X=N.foldedComponentIds,pe=N.shouldForwardProp,be=N.styledComponentId,Te=N.target,he=function(k,u,U){k===void 0&&(k=tt);var b=Ve({},u,{theme:k}),V={};return U.forEach(function($){var H,F,J,le=$;for(H in Xt(le)&&(le=le(b)),le)b[H]=V[H]=H==="className"?(F=V[H],J=le[H],F&&J?F+" "+J:F||J):le[H]}),[b,V]}(ec(M,Y.useContext(Mo),fe)||tt,M,Z),ot=he[0],_e=he[1],ve=function(k,u,U,b){var V=Yl(),$=Gl(),H=u?k.generateAndInjectStyles(tt,V,$):k.generateAndInjectStyles(U,V,$);return H}(ae,ie,ot),st=ne,Be=_e.$as||M.$as||_e.as||M.as||Te,Q=cn(Be),O=_e!==M?Ve({},M,{},_e):M,v={};for(var E in O)E[0]!=="$"&&E!=="as"&&(E==="forwardedAs"?v.as=O[E]:(pe?pe(E,Fa,Be):!Q||Fa(E))&&(v[E]=O[E]));return M.style&&_e.style!==M.style&&(v.style=Ve({},M.style,{},_e.style)),v.className=Array.prototype.concat(X,be,ve!==be?ve:null,M.className,_e.className).filter(Boolean).join(" "),v.ref=st,Y.createElement(Be,v)}(w,A,L,h)};return S.displayName=m,(w=St.forwardRef(S)).attrs=T,w.componentStyle=C,w.displayName=m,w.shouldForwardProp=R,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):xn,w.styledComponentId=x,w.target=r?e.target:e,w.withComponent=function(A){var L=t.componentId,N=function(ne,ie){if(ne==null)return{};var Z,ae,fe={},X=Object.keys(ne);for(ae=0;ae<X.length;ae++)Z=X[ae],ie.indexOf(Z)>=0||(fe[Z]=ne[Z]);return fe}(t,["componentId"]),M=L&&L+"-"+(cn(A)?A:ir(qa(A)));return Fo(A,Ve({},N,{attrs:T,componentId:M}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=r?Do({},e.defaultProps,A):A}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),a&&Tl(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var we=function(e){return function t(n,r,a){if(a===void 0&&(a=tt),!To.isValidElementType(r))return Zt(1,String(r));var i=function(){return n(r,a,Jl.apply(void 0,arguments))};return i.withConfig=function(o){return t(n,r,Ve({},a,{},o))},i.attrs=function(o){return t(n,r,Ve({},a,{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)}))},i}(Fo,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){we[e]=we(e)});const oc=we.a`
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
`,Tt=({href:e,color:t,text:n,classes:r,onClick:a})=>p.jsx(oc,{href:e,...e?{}:{tabIndex:0},className:`button-${t} ${r??""}`,onClick:a,children:n});Tt.propTypes={...En};Tt.__docgenInfo={description:`@param {ButtonProps} props
@returns {JSX.Element}`,methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!0},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1}}};const Qt=[{href:"/",text:"Home",type:"icon-home",selected:!0,class:"test-class"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu",text:"Sublink 2"},{href:"https://campus.asu.edu",text:"Sublink 3"},{href:"https://campus.asu.edu",text:"Sublink 4"},{href:"https://asuonline.asu.edu/",text:"Sublink 5"},{href:"https://havasu.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 3",href:"#"},{text:"Link option 4",href:"#"},{text:"Link option 5",href:"#"},{text:"Link option 6",href:"#",onClick:()=>{alert("On Click Callback")}},{text:"Link option 7",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 8",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]}],sc=[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",selected:!0},{text:"Link option 3",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu/",text:"Sublink 2"},{href:"https://campus.asu.edu/",text:"Sublink 3"},{href:"https://campus.asu.edu/",text:"Sublink 4"},{href:"https://campus.asu.edu/",text:"Sublink 5"},{href:"https://asuonline.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 4",href:"#"}],jo=[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#"},{text:"Link option 2",href:"/",items:[[{href:"https://www.asu.edu/",text:"A test navigation item"},{href:"https://www.asu.edu/",text:"Mauris viverra, sem nec"},{href:"https://www.asu.edu/?feature=athletics",text:"Massa nunc dictum nam venenatis"},{href:"https://www.asu.edu/?feature=alumni",text:"Alumni"},{href:"https://www.asu.edu/?feature=giving",text:"Giving"},{href:"https://www.asu.edu/?feature=president",text:"President"},{href:"https://www.asu.edu/about",text:"About ASU"}]]},{text:"Link option 3",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 4",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column one"},{href:"https://havasu.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Phasellus egestas nec est "},{href:"https://campus.asu.edu/tempe/",text:"Pellentesque et mollis"},{href:"https://campus.asu.edu/west/",text:"Cras congue"},{href:"https://campus.asu.edu/polytechnic/",text:"Cras ut malesuada nisl"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Map"},{href:"https://campus.asu.edu/tempe/",text:"Tempe"},{href:"https://campus.asu.edu/west/",text:"West"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 5",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"Lake Havasu"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 6",href:"#",buttons:[{text:"CTA One",href:"https://asu.edu",color:"maroon"},{text:"CTA Two",href:"https://asu.edu",color:"gold"}],items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"The Lake Havasu Campus"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Call to Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column Five"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Buildings and directory"},{href:"https://campus.asu.edu/tempe/",text:"Some good news"},{href:"https://campus.asu.edu/west/",selected:!0,text:"Directory Admin Tools"}]]}],lc=[{href:"/",text:"This",type:"icon-home",class:"home",selected:!0},{text:"Link option 1",href:"https://webapp4.asu.edu/myasu/"},{text:"Link option 2",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column Two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"}]]}];const{entries:zo,setPrototypeOf:Xa,isFrozen:cc,getPrototypeOf:uc,getOwnPropertyDescriptor:fc}=Object;let{freeze:Ae,seal:Re,create:gn}=Object,{apply:Er,construct:_r}=typeof Reflect<"u"&&Reflect;Ae||(Ae=function(t){return t});Re||(Re=function(t){return t});Er||(Er=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];return t.apply(n,a)});_r||(_r=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return new t(...r)});const un=Se(Array.prototype.forEach),dc=Se(Array.prototype.lastIndexOf),Va=Se(Array.prototype.pop),Ct=Se(Array.prototype.push),pc=Se(Array.prototype.splice),yn=Se(String.prototype.toLowerCase),sr=Se(String.prototype.toString),lr=Se(String.prototype.match),Ot=Se(String.prototype.replace),mc=Se(String.prototype.indexOf),hc=Se(String.prototype.trim),Oe=Se(Object.prototype.hasOwnProperty),xe=Se(RegExp.prototype.test),Pt=gc(TypeError);function Se(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return Er(e,t,r)}}function gc(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _r(e,n)}}function z(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:yn;Xa&&Xa(e,null);let r=t.length;for(;r--;){let a=t[r];if(typeof a=="string"){const i=n(a);i!==a&&(cc(t)||(t[r]=i),a=i)}e[a]=!0}return e}function yc(e){for(let t=0;t<e.length;t++)Oe(e,t)||(e[t]=null);return e}function ze(e){const t=gn(null);for(const[n,r]of zo(e))Oe(e,n)&&(Array.isArray(r)?t[n]=yc(r):r&&typeof r=="object"&&r.constructor===Object?t[n]=ze(r):t[n]=r);return t}function Nt(e,t){for(;e!==null;){const r=fc(e,t);if(r){if(r.get)return Se(r.get);if(typeof r.value=="function")return Se(r.value)}e=uc(e)}function n(){return null}return n}const Ka=Ae(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),cr=Ae(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ur=Ae(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),bc=Ae(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),fr=Ae(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),vc=Ae(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Za=Ae(["#text"]),Qa=Ae(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),dr=Ae(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ja=Ae(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),fn=Ae(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),xc=Re(/\{\{[\w\W]*|[\w\W]*\}\}/gm),wc=Re(/<%[\w\W]*|[\w\W]*%>/gm),Ac=Re(/\$\{[\w\W]*/gm),Sc=Re(/^data-[\-\w.\u00B7-\uFFFF]+$/),Tc=Re(/^aria-[\-\w]+$/),Uo=Re(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),kc=Re(/^(?:\w+script|data):/i),Ec=Re(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),$o=Re(/^html$/i),_c=Re(/^[a-z][.\w]*(-[.\w]+)+$/i);var ei=Object.freeze({__proto__:null,ARIA_ATTR:Tc,ATTR_WHITESPACE:Ec,CUSTOM_ELEMENT:_c,DATA_ATTR:Sc,DOCTYPE_NAME:$o,ERB_EXPR:wc,IS_ALLOWED_URI:Uo,IS_SCRIPT_OR_DATA:kc,MUSTACHE_EXPR:xc,TMPLIT_EXPR:Ac});const It={element:1,text:3,progressingInstruction:7,comment:8,document:9},Cc=function(){return typeof window>"u"?null:window},Oc=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const a="data-tt-policy-suffix";n&&n.hasAttribute(a)&&(r=n.getAttribute(a));const i="dompurify"+(r?"#"+r:"");try{return t.createPolicy(i,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},ti=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function qo(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Cc();const t=I=>qo(I);if(t.version="3.3.2",t.removed=[],!e||!e.document||e.document.nodeType!==It.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const r=n,a=r.currentScript,{DocumentFragment:i,HTMLTemplateElement:o,Node:l,Element:d,NodeFilter:c,NamedNodeMap:m=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:x,DOMParser:T,trustedTypes:R}=e,w=d.prototype,C=Nt(w,"cloneNode"),h=Nt(w,"remove"),S=Nt(w,"nextSibling"),A=Nt(w,"childNodes"),L=Nt(w,"parentNode");if(typeof o=="function"){const I=n.createElement("template");I.content&&I.content.ownerDocument&&(n=I.content.ownerDocument)}let N,M="";const{implementation:ne,createNodeIterator:ie,createDocumentFragment:Z,getElementsByTagName:ae}=n,{importNode:fe}=r;let X=ti();t.isSupported=typeof zo=="function"&&typeof L=="function"&&ne&&ne.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:pe,ERB_EXPR:be,TMPLIT_EXPR:Te,DATA_ATTR:he,ARIA_ATTR:ot,IS_SCRIPT_OR_DATA:_e,ATTR_WHITESPACE:ve,CUSTOM_ELEMENT:st}=ei;let{IS_ALLOWED_URI:Be}=ei,Q=null;const O=z({},[...Ka,...cr,...ur,...fr,...Za]);let v=null;const E=z({},[...Qa,...dr,...Ja,...fn]);let k=Object.seal(gn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),u=null,U=null;const b=Object.seal(gn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let V=!0,$=!0,H=!1,F=!0,J=!1,le=!0,j=!1,oe=!1,q=!1,ee=!1,Me=!1,re=!1,lt=!0,Je=!1;const Ce="user-content-";let D=!0,B=!1,Fe={},ke=null;const Ie=z({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let wa=null;const Aa=z({},["audio","video","img","source","image","track"]);let Jn=null;const Sa=z({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),nn="http://www.w3.org/1998/Math/MathML",rn="http://www.w3.org/2000/svg",Ye="http://www.w3.org/1999/xhtml";let pt=Ye,er=!1,tr=null;const Us=z({},[nn,rn,Ye],sr);let an=z({},["mi","mo","mn","ms","mtext"]),on=z({},["annotation-xml"]);const $s=z({},["title","style","font","a","script"]);let _t=null;const qs=["application/xhtml+xml","text/html"],Hs="text/html";let ce=null,mt=null;const Ws=n.createElement("form"),Ta=function(s){return s instanceof RegExp||s instanceof Function},nr=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(mt&&mt===s)){if((!s||typeof s!="object")&&(s={}),s=ze(s),_t=qs.indexOf(s.PARSER_MEDIA_TYPE)===-1?Hs:s.PARSER_MEDIA_TYPE,ce=_t==="application/xhtml+xml"?sr:yn,Q=Oe(s,"ALLOWED_TAGS")?z({},s.ALLOWED_TAGS,ce):O,v=Oe(s,"ALLOWED_ATTR")?z({},s.ALLOWED_ATTR,ce):E,tr=Oe(s,"ALLOWED_NAMESPACES")?z({},s.ALLOWED_NAMESPACES,sr):Us,Jn=Oe(s,"ADD_URI_SAFE_ATTR")?z(ze(Sa),s.ADD_URI_SAFE_ATTR,ce):Sa,wa=Oe(s,"ADD_DATA_URI_TAGS")?z(ze(Aa),s.ADD_DATA_URI_TAGS,ce):Aa,ke=Oe(s,"FORBID_CONTENTS")?z({},s.FORBID_CONTENTS,ce):Ie,u=Oe(s,"FORBID_TAGS")?z({},s.FORBID_TAGS,ce):ze({}),U=Oe(s,"FORBID_ATTR")?z({},s.FORBID_ATTR,ce):ze({}),Fe=Oe(s,"USE_PROFILES")?s.USE_PROFILES:!1,V=s.ALLOW_ARIA_ATTR!==!1,$=s.ALLOW_DATA_ATTR!==!1,H=s.ALLOW_UNKNOWN_PROTOCOLS||!1,F=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,J=s.SAFE_FOR_TEMPLATES||!1,le=s.SAFE_FOR_XML!==!1,j=s.WHOLE_DOCUMENT||!1,ee=s.RETURN_DOM||!1,Me=s.RETURN_DOM_FRAGMENT||!1,re=s.RETURN_TRUSTED_TYPE||!1,q=s.FORCE_BODY||!1,lt=s.SANITIZE_DOM!==!1,Je=s.SANITIZE_NAMED_PROPS||!1,D=s.KEEP_CONTENT!==!1,B=s.IN_PLACE||!1,Be=s.ALLOWED_URI_REGEXP||Uo,pt=s.NAMESPACE||Ye,an=s.MATHML_TEXT_INTEGRATION_POINTS||an,on=s.HTML_INTEGRATION_POINTS||on,k=s.CUSTOM_ELEMENT_HANDLING||{},s.CUSTOM_ELEMENT_HANDLING&&Ta(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(k.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&Ta(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(k.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(k.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),J&&($=!1),Me&&(ee=!0),Fe&&(Q=z({},Za),v=gn(null),Fe.html===!0&&(z(Q,Ka),z(v,Qa)),Fe.svg===!0&&(z(Q,cr),z(v,dr),z(v,fn)),Fe.svgFilters===!0&&(z(Q,ur),z(v,dr),z(v,fn)),Fe.mathMl===!0&&(z(Q,fr),z(v,Ja),z(v,fn))),Oe(s,"ADD_TAGS")||(b.tagCheck=null),Oe(s,"ADD_ATTR")||(b.attributeCheck=null),s.ADD_TAGS&&(typeof s.ADD_TAGS=="function"?b.tagCheck=s.ADD_TAGS:(Q===O&&(Q=ze(Q)),z(Q,s.ADD_TAGS,ce))),s.ADD_ATTR&&(typeof s.ADD_ATTR=="function"?b.attributeCheck=s.ADD_ATTR:(v===E&&(v=ze(v)),z(v,s.ADD_ATTR,ce))),s.ADD_URI_SAFE_ATTR&&z(Jn,s.ADD_URI_SAFE_ATTR,ce),s.FORBID_CONTENTS&&(ke===Ie&&(ke=ze(ke)),z(ke,s.FORBID_CONTENTS,ce)),s.ADD_FORBID_CONTENTS&&(ke===Ie&&(ke=ze(ke)),z(ke,s.ADD_FORBID_CONTENTS,ce)),D&&(Q["#text"]=!0),j&&z(Q,["html","head","body"]),Q.table&&(z(Q,["tbody"]),delete u.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw Pt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Pt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');N=s.TRUSTED_TYPES_POLICY,M=N.createHTML("")}else N===void 0&&(N=Oc(R,a)),N!==null&&typeof M=="string"&&(M=N.createHTML(""));Ae&&Ae(s),mt=s}},ka=z({},[...cr,...ur,...bc]),Ea=z({},[...fr,...vc]),Bs=function(s){let y=L(s);(!y||!y.tagName)&&(y={namespaceURI:pt,tagName:"template"});const _=yn(s.tagName),te=yn(y.tagName);return tr[s.namespaceURI]?s.namespaceURI===rn?y.namespaceURI===Ye?_==="svg":y.namespaceURI===nn?_==="svg"&&(te==="annotation-xml"||an[te]):!!ka[_]:s.namespaceURI===nn?y.namespaceURI===Ye?_==="math":y.namespaceURI===rn?_==="math"&&on[te]:!!Ea[_]:s.namespaceURI===Ye?y.namespaceURI===rn&&!on[te]||y.namespaceURI===nn&&!an[te]?!1:!Ea[_]&&($s[_]||!ka[_]):!!(_t==="application/xhtml+xml"&&tr[s.namespaceURI]):!1},je=function(s){Ct(t.removed,{element:s});try{L(s).removeChild(s)}catch{h(s)}},ct=function(s,y){try{Ct(t.removed,{attribute:y.getAttributeNode(s),from:y})}catch{Ct(t.removed,{attribute:null,from:y})}if(y.removeAttribute(s),s==="is")if(ee||Me)try{je(y)}catch{}else try{y.setAttribute(s,"")}catch{}},_a=function(s){let y=null,_=null;if(q)s="<remove></remove>"+s;else{const se=lr(s,/^[\r\n\t ]+/);_=se&&se[0]}_t==="application/xhtml+xml"&&pt===Ye&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const te=N?N.createHTML(s):s;if(pt===Ye)try{y=new T().parseFromString(te,_t)}catch{}if(!y||!y.documentElement){y=ne.createDocument(pt,"template",null);try{y.documentElement.innerHTML=er?M:te}catch{}}const ge=y.body||y.documentElement;return s&&_&&ge.insertBefore(n.createTextNode(_),ge.childNodes[0]||null),pt===Ye?ae.call(y,j?"html":"body")[0]:j?y.documentElement:ge},Ca=function(s){return ie.call(s.ownerDocument||s,s,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},rr=function(s){return s instanceof x&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof m)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},Oa=function(s){return typeof l=="function"&&s instanceof l};function Ge(I,s,y){un(I,_=>{_.call(t,s,y,mt)})}const Pa=function(s){let y=null;if(Ge(X.beforeSanitizeElements,s,null),rr(s))return je(s),!0;const _=ce(s.nodeName);if(Ge(X.uponSanitizeElement,s,{tagName:_,allowedTags:Q}),le&&s.hasChildNodes()&&!Oa(s.firstElementChild)&&xe(/<[/\w!]/g,s.innerHTML)&&xe(/<[/\w!]/g,s.textContent)||s.nodeType===It.progressingInstruction||le&&s.nodeType===It.comment&&xe(/<[/\w]/g,s.data))return je(s),!0;if(!(b.tagCheck instanceof Function&&b.tagCheck(_))&&(!Q[_]||u[_])){if(!u[_]&&Ia(_)&&(k.tagNameCheck instanceof RegExp&&xe(k.tagNameCheck,_)||k.tagNameCheck instanceof Function&&k.tagNameCheck(_)))return!1;if(D&&!ke[_]){const te=L(s)||s.parentNode,ge=A(s)||s.childNodes;if(ge&&te){const se=ge.length;for(let Ee=se-1;Ee>=0;--Ee){const Xe=C(ge[Ee],!0);Xe.__removalCount=(s.__removalCount||0)+1,te.insertBefore(Xe,S(s))}}}return je(s),!0}return s instanceof d&&!Bs(s)||(_==="noscript"||_==="noembed"||_==="noframes")&&xe(/<\/no(script|embed|frames)/i,s.innerHTML)?(je(s),!0):(J&&s.nodeType===It.text&&(y=s.textContent,un([pe,be,Te],te=>{y=Ot(y,te," ")}),s.textContent!==y&&(Ct(t.removed,{element:s.cloneNode()}),s.textContent=y)),Ge(X.afterSanitizeElements,s,null),!1)},Na=function(s,y,_){if(U[y]||lt&&(y==="id"||y==="name")&&(_ in n||_ in Ws))return!1;if(!($&&!U[y]&&xe(he,y))){if(!(V&&xe(ot,y))){if(!(b.attributeCheck instanceof Function&&b.attributeCheck(y,s))){if(!v[y]||U[y]){if(!(Ia(s)&&(k.tagNameCheck instanceof RegExp&&xe(k.tagNameCheck,s)||k.tagNameCheck instanceof Function&&k.tagNameCheck(s))&&(k.attributeNameCheck instanceof RegExp&&xe(k.attributeNameCheck,y)||k.attributeNameCheck instanceof Function&&k.attributeNameCheck(y,s))||y==="is"&&k.allowCustomizedBuiltInElements&&(k.tagNameCheck instanceof RegExp&&xe(k.tagNameCheck,_)||k.tagNameCheck instanceof Function&&k.tagNameCheck(_))))return!1}else if(!Jn[y]){if(!xe(Be,Ot(_,ve,""))){if(!((y==="src"||y==="xlink:href"||y==="href")&&s!=="script"&&mc(_,"data:")===0&&wa[s])){if(!(H&&!xe(_e,Ot(_,ve,"")))){if(_)return!1}}}}}}}return!0},Ia=function(s){return s!=="annotation-xml"&&lr(s,st)},La=function(s){Ge(X.beforeSanitizeAttributes,s,null);const{attributes:y}=s;if(!y||rr(s))return;const _={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:v,forceKeepAttr:void 0};let te=y.length;for(;te--;){const ge=y[te],{name:se,namespaceURI:Ee,value:Xe}=ge,ht=ce(se),ar=Xe;let me=se==="value"?ar:hc(ar);if(_.attrName=ht,_.attrValue=me,_.keepAttr=!0,_.forceKeepAttr=void 0,Ge(X.uponSanitizeAttribute,s,_),me=_.attrValue,Je&&(ht==="id"||ht==="name")&&(ct(se,s),me=Ce+me),le&&xe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,me)){ct(se,s);continue}if(ht==="attributename"&&lr(me,"href")){ct(se,s);continue}if(_.forceKeepAttr)continue;if(!_.keepAttr){ct(se,s);continue}if(!F&&xe(/\/>/i,me)){ct(se,s);continue}J&&un([pe,be,Te],Da=>{me=Ot(me,Da," ")});const Ra=ce(s.nodeName);if(!Na(Ra,ht,me)){ct(se,s);continue}if(N&&typeof R=="object"&&typeof R.getAttributeType=="function"&&!Ee)switch(R.getAttributeType(Ra,ht)){case"TrustedHTML":{me=N.createHTML(me);break}case"TrustedScriptURL":{me=N.createScriptURL(me);break}}if(me!==ar)try{Ee?s.setAttributeNS(Ee,se,me):s.setAttribute(se,me),rr(s)?je(s):Va(t.removed)}catch{ct(se,s)}}Ge(X.afterSanitizeAttributes,s,null)},Ys=function I(s){let y=null;const _=Ca(s);for(Ge(X.beforeSanitizeShadowDOM,s,null);y=_.nextNode();)Ge(X.uponSanitizeShadowNode,y,null),Pa(y),La(y),y.content instanceof i&&I(y.content);Ge(X.afterSanitizeShadowDOM,s,null)};return t.sanitize=function(I){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=null,_=null,te=null,ge=null;if(er=!I,er&&(I="<!-->"),typeof I!="string"&&!Oa(I))if(typeof I.toString=="function"){if(I=I.toString(),typeof I!="string")throw Pt("dirty is not a string, aborting")}else throw Pt("toString is not a function");if(!t.isSupported)return I;if(oe||nr(s),t.removed=[],typeof I=="string"&&(B=!1),B){if(I.nodeName){const Xe=ce(I.nodeName);if(!Q[Xe]||u[Xe])throw Pt("root node is forbidden and cannot be sanitized in-place")}}else if(I instanceof l)y=_a("<!---->"),_=y.ownerDocument.importNode(I,!0),_.nodeType===It.element&&_.nodeName==="BODY"||_.nodeName==="HTML"?y=_:y.appendChild(_);else{if(!ee&&!J&&!j&&I.indexOf("<")===-1)return N&&re?N.createHTML(I):I;if(y=_a(I),!y)return ee?null:re?M:""}y&&q&&je(y.firstChild);const se=Ca(B?I:y);for(;te=se.nextNode();)Pa(te),La(te),te.content instanceof i&&Ys(te.content);if(B)return I;if(ee){if(Me)for(ge=Z.call(y.ownerDocument);y.firstChild;)ge.appendChild(y.firstChild);else ge=y;return(v.shadowroot||v.shadowrootmode)&&(ge=fe.call(r,ge,!0)),ge}let Ee=j?y.outerHTML:y.innerHTML;return j&&Q["!doctype"]&&y.ownerDocument&&y.ownerDocument.doctype&&y.ownerDocument.doctype.name&&xe($o,y.ownerDocument.doctype.name)&&(Ee="<!DOCTYPE "+y.ownerDocument.doctype.name+`>
`+Ee),J&&un([pe,be,Te],Xe=>{Ee=Ot(Ee,Xe," ")}),N&&re?N.createHTML(Ee):Ee},t.setConfig=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};nr(I),oe=!0},t.clearConfig=function(){mt=null,oe=!1},t.isValidAttribute=function(I,s,y){mt||nr({});const _=ce(I),te=ce(s);return Na(_,te,y)},t.addHook=function(I,s){typeof s=="function"&&Ct(X[I],s)},t.removeHook=function(I,s){if(s!==void 0){const y=dc(X[I],s);return y===-1?void 0:pc(X[I],y,1)[0]}return Va(X[I])},t.removeHooks=function(I){X[I]=[]},t.removeAllHooks=function(){X=ti()},t}qo();function*Ho(e="id-",t=0){let n=t;for(;;)n+=1,yield e+n}function Wo(){const e=(document.currentScript&&document.currentScript.src||"").match(/(.*\/)/);return e&&e.length>0?e[0].substr(0,e[0].length-1):"/"}f.shape({event:f.string,action:f.string,name:f.string,region:f.string,section:f.string,component:f.string,type:f.string,text:f.string});const ue=({event:e="",action:t="",name:n="",type:r="",section:a="",text:i="",region:o="",component:l=""})=>{const{dataLayer:d}=window,c={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:o.toLowerCase(),section:a.toLowerCase(),text:i.toLowerCase(),component:l.toLowerCase()};d&&d.push(c)},kt=({children:e})=>p.jsx(p.Fragment,{children:e});kt.propTypes={children:f.oneOfType([f.arrayOf(f.node),f.node,f.string])};kt.__docgenInfo={description:"",methods:[],displayName:"Base",props:{children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"},{name:"string"}]},required:!1}}};var Pc={exports:{}};(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(i=a(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var l in i)t.call(i,l)&&i[l]&&(o=a(o,l));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Pc);({...kt.propTypes});const ra=({children:e,className:t="container",...n})=>p.jsx("div",{className:t,...n,children:p.jsx("div",{className:"row",children:e})});ra.propTypes={children:kt.propTypes.children};({...ra.propTypes});kt.propTypes.children,f.oneOf(["0","3","4","6","8","9","12"]);kt.propTypes.children;ra.__docgenInfo={description:"",methods:[],displayName:"Container",props:{className:{defaultValue:{value:'"container"',computed:!1},required:!1},children:{description:"",type:{name:"custom",raw:"Base.propTypes.children"},required:!1}}};function Nc({packageName:e="",component:t="",type:n="",configuration:r={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}}const Ic={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Lc={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Rc=Lc,Dc={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},ni=Dc,Mc={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Fc={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Bo=Fc;function jc(e,t,n){return(t=Uc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ri(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ri(Object(n),!0).forEach(function(r){jc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ri(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zc(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Uc(e){var t=zc(e,"string");return typeof t=="symbol"?t:t+""}const ai=()=>{};let aa={},Yo={},Go=null,Xo={mark:ai,measure:ai};try{typeof window<"u"&&(aa=window),typeof document<"u"&&(Yo=document),typeof MutationObserver<"u"&&(Go=MutationObserver),typeof performance<"u"&&(Xo=performance)}catch{}const{userAgent:ii=""}=aa.navigator||{},rt=aa,K=Yo,oi=Go,dn=Xo;rt.document;const Qe=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",Vo=~ii.indexOf("MSIE")||~ii.indexOf("Trident/");var $c=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,qc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ko={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Hc={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Zo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ye="classic",Gn="duotone",Wc="sharp",Bc="sharp-duotone",Qo=[ye,Gn,Wc,Bc],Yc={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Gc={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Xc=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Vc={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Kc=["fak","fa-kit","fakd","fa-kit-duotone"],si={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Zc=["kit"],Qc={kit:{"fa-kit":"fak"}},Jc=["fak","fakd"],eu={kit:{fak:"fa-kit"}},li={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},pn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tu=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],nu=["fak","fa-kit","fakd","fa-kit-duotone"],ru={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},au={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},iu={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Cr={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ou=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Or=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...tu,...ou],su=["solid","regular","light","thin","duotone","brands"],Jo=[1,2,3,4,5,6,7,8,9,10],lu=Jo.concat([11,12,13,14,15,16,17,18,19,20]),cu=[...Object.keys(iu),...su,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pn.GROUP,pn.SWAP_OPACITY,pn.PRIMARY,pn.SECONDARY].concat(Jo.map(e=>"".concat(e,"x"))).concat(lu.map(e=>"w-".concat(e))),uu={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Ke="___FONT_AWESOME___",Pr=16,es="fa",ts="svg-inline--fa",ft="data-fa-i2svg",Nr="data-fa-pseudo-element",fu="data-fa-pseudo-element-pending",ia="data-prefix",oa="data-icon",ci="fontawesome-i2svg",du="async",pu=["HTML","HEAD","STYLE","SCRIPT"],ns=(()=>{try{return!0}catch{return!1}})();function Jt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[ye]}})}const rs=g({},Ko);rs[ye]=g(g(g(g({},{"fa-duotone":"duotone"}),Ko[ye]),si.kit),si["kit-duotone"]);const mu=Jt(rs),Ir=g({},Vc);Ir[ye]=g(g(g(g({},{duotone:"fad"}),Ir[ye]),li.kit),li["kit-duotone"]);const ui=Jt(Ir),Lr=g({},Cr);Lr[ye]=g(g({},Lr[ye]),eu.kit);const sa=Jt(Lr),Rr=g({},au);Rr[ye]=g(g({},Rr[ye]),Qc.kit);Jt(Rr);const hu=$c,as="fa-layers-text",gu=qc,yu=g({},Yc);Jt(yu);const bu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pr=Hc,vu=[...Zc,...cu],Yt=rt.FontAwesomeConfig||{};function xu(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function wu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}K&&typeof K.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=wu(xu(n));a!=null&&(Yt[r]=a)});const is={styleDefault:"solid",familyDefault:ye,cssPrefix:es,replacementClass:ts,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yt.familyPrefix&&(Yt.cssPrefix=Yt.familyPrefix);const At=g(g({},is),Yt);At.autoReplaceSvg||(At.observeMutations=!1);const P={};Object.keys(is).forEach(e=>{Object.defineProperty(P,e,{enumerable:!0,set:function(t){At[e]=t,Gt.forEach(n=>n(P))},get:function(){return At[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){At.cssPrefix=e,Gt.forEach(t=>t(P))},get:function(){return At.cssPrefix}});rt.FontAwesomeConfig=P;const Gt=[];function Au(e){return Gt.push(e),()=>{Gt.splice(Gt.indexOf(e),1)}}const et=Pr,$e={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Su(e){if(!e||!Qe)return;const t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=K.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return K.head.insertBefore(t,r),e}const Tu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vt(){let e=12,t="";for(;e-- >0;)t+=Tu[Math.random()*62|0];return t}function Et(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function la(e){return e.classList?Et(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function os(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ku(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(os(e[n]),'" '),"").trim()}function Xn(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function ca(e){return e.size!==$e.size||e.x!==$e.x||e.y!==$e.y||e.rotate!==$e.rotate||e.flipX||e.flipY}function Eu(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(i," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:d,path:c}}function _u(e){let{transform:t,width:n=Pr,height:r=Pr,startCentered:a=!1}=e,i="";return a&&Vo?i+="translate(".concat(t.x/et-n/2,"em, ").concat(t.y/et-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(t.x/et,"em), calc(-50% + ").concat(t.y/et,"em)) "):i+="translate(".concat(t.x/et,"em, ").concat(t.y/et,"em) "),i+="scale(".concat(t.size/et*(t.flipX?-1:1),", ").concat(t.size/et*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var Cu=`:root, :host {
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
}`;function ss(){const e=es,t=ts,n=P.cssPrefix,r=P.replacementClass;let a=Cu;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}let fi=!1;function mr(){P.autoAddCss&&!fi&&(Su(ss()),fi=!0)}var Ou={mixout(){return{dom:{css:ss,insertCss:mr}}},hooks(){return{beforeDOMElementCreation(){mr()},beforeI2svg(){mr()}}}};const Ze=rt||{};Ze[Ke]||(Ze[Ke]={});Ze[Ke].styles||(Ze[Ke].styles={});Ze[Ke].hooks||(Ze[Ke].hooks={});Ze[Ke].shims||(Ze[Ke].shims=[]);var qe=Ze[Ke];const ls=[],cs=function(){K.removeEventListener("DOMContentLoaded",cs),An=1,ls.map(e=>e())};let An=!1;Qe&&(An=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),An||K.addEventListener("DOMContentLoaded",cs));function Pu(e){Qe&&(An?setTimeout(e,0):ls.push(e))}function en(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?os(e):"<".concat(t," ").concat(ku(n),">").concat(r.map(en).join(""),"</").concat(t,">")}function di(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var hr=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=n,d,c,m;for(r===void 0?(d=1,m=t[i[0]]):(d=0,m=r);d<o;d++)c=i[d],m=l(m,t[c],c,t);return m};function Nu(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Dr(e){const t=Nu(e);return t.length===1?t[0].toString(16):null}function Iu(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function pi(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Mr(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=pi(t);typeof qe.hooks.addPack=="function"&&!r?qe.hooks.addPack(e,pi(t)):qe.styles[e]=g(g({},qe.styles[e]||{}),a),e==="fas"&&Mr("fa",t)}const{styles:Kt,shims:Lu}=qe,us=Object.keys(sa),Ru=us.reduce((e,t)=>(e[t]=Object.keys(sa[t]),e),{});let ua=null,fs={},ds={},ps={},ms={},hs={};function Du(e){return~vu.indexOf(e)}function Mu(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Du(a)?a:null}const gs=()=>{const e=r=>hr(Kt,(a,i,o)=>(a[o]=hr(i,r,{}),a),{});fs=e((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=i}),r)),ds=e((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=i}),r)),hs=e((r,a,i)=>{const o=a[2];return r[i]=i,o.forEach(l=>{r[l]=i}),r});const t="far"in Kt||P.autoFetchSvg,n=hr(Lu,(r,a)=>{const i=a[0];let o=a[1];const l=a[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});ps=n.names,ms=n.unicodes,ua=Vn(P.styleDefault,{family:P.familyDefault})};Au(e=>{ua=Vn(e.styleDefault,{family:P.familyDefault})});gs();function fa(e,t){return(fs[e]||{})[t]}function Fu(e,t){return(ds[e]||{})[t]}function ut(e,t){return(hs[e]||{})[t]}function ys(e){return ps[e]||{prefix:null,iconName:null}}function ju(e){const t=ms[e],n=fa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function at(){return ua}const bs=()=>({prefix:null,iconName:null,rest:[]});function zu(e){let t=ye;const n=us.reduce((r,a)=>(r[a]="".concat(P.cssPrefix,"-").concat(a),r),{});return Qo.forEach(r=>{(e.includes(n[r])||e.some(a=>Ru[r].includes(a)))&&(t=r)}),t}function Vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ye}=t,r=mu[n][e];if(n===Gn&&!e)return"fad";const a=ui[n][e]||ui[n][r],i=e in qe.styles?e:null;return a||i||null}function Uu(e){let t=[],n=null;return e.forEach(r=>{const a=Mu(P.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function mi(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function Kn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=Or.concat(nu),i=mi(e.filter(x=>a.includes(x))),o=mi(e.filter(x=>!Or.includes(x))),l=i.filter(x=>(r=x,!Zo.includes(x))),[d=null]=l,c=zu(i),m=g(g({},Uu(o)),{},{prefix:Vn(d,{family:c})});return g(g(g({},m),Wu({values:e,family:c,styles:Kt,config:P,canonical:m,givenPrefix:r})),$u(n,r,m))}function $u(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const i=t==="fa"?ys(a):{},o=ut(r,a);return a=i.iconName||o||a,r=i.prefix||r,r==="far"&&!Kt.far&&Kt.fas&&!P.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const qu=Qo.filter(e=>e!==ye||e!==Gn),Hu=Object.keys(Cr).filter(e=>e!==ye).map(e=>Object.keys(Cr[e])).flat();function Wu(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:i={},config:o={}}=e,l=n===Gn,d=t.includes("fa-duotone")||t.includes("fad"),c=o.familyDefault==="duotone",m=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(d||c||m)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&qu.includes(n)&&(Object.keys(i).find(T=>Hu.includes(T))||o.autoFetchSvg)){const T=Xc.get(n).defaultShortPrefixId;r.prefix=T,r.iconName=ut(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=at()||"fas"),r}class Bu{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=g(g({},this.definitions[i]||{}),a[i]),Mr(i,a[i]);const o=sa[ye][i];o&&Mr(o,a[i]),gs()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:o,icon:l}=r[a],d=l[2];t[i]||(t[i]={}),d.length>0&&d.forEach(c=>{typeof c=="string"&&(t[i][c]=l)}),t[i][o]=l}),t}}let hi=[],yt={};const vt={},Yu=Object.keys(vt);function Gu(e,t){let{mixoutsTo:n}=t;return hi=e,yt={},Object.keys(vt).forEach(r=>{Yu.indexOf(r)===-1&&delete vt[r]}),hi.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{yt[o]||(yt[o]=[]),yt[o].push(i[o])})}r.provides&&r.provides(vt)}),n}function Fr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(yt[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function dt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(yt[e]||[]).forEach(i=>{i.apply(null,n)})}function it(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return vt[e]?vt[e].apply(null,t):void 0}function jr(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||at();if(t)return t=ut(n,t)||t,di(vs.definitions,n,t)||di(qe.styles,n,t)}const vs=new Bu,Xu=()=>{P.autoReplaceSvg=!1,P.observeMutations=!1,dt("noAuto")},Vu={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(dt("beforeI2svg",e),it("pseudoElements2svg",e),it("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Pu(()=>{Zu({autoReplaceSvgRoot:t}),dt("watch",e)})}},Ku={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ut(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Vn(e[0]);return{prefix:n,iconName:ut(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(hu))){const t=Kn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||at(),iconName:ut(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=at();return{prefix:t,iconName:ut(t,e)||e}}}},Ne={noAuto:Xu,config:P,dom:Vu,parse:Ku,library:vs,findIconDefinition:jr,toHtml:en},Zu=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=K}=e;(Object.keys(qe.styles).length>0||P.autoFetchSvg)&&Qe&&P.autoReplaceSvg&&Ne.dom.i2svg({node:t})};function Zn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>en(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Qe)return;const n=K.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Qu(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(ca(o)&&n.found&&!r.found){const{width:l,height:d}=n,c={x:l/d/2,y:.5};a.style=Xn(g(g({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ju(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},a),{},{id:o}),children:r}]}]}function da(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:l,maskId:d,titleId:c,extra:m,watchable:x=!1}=e,{width:T,height:R}=n.found?n:t,w=Jc.includes(r),C=[P.replacementClass,a?"".concat(P.cssPrefix,"-").concat(a):""].filter(M=>m.classes.indexOf(M)===-1).filter(M=>M!==""||!!M).concat(m.classes).join(" ");let h={children:[],attributes:g(g({},m.attributes),{},{"data-prefix":r,"data-icon":a,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(R)})};const S=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/R*16*.0625,"em")}:{};x&&(h.attributes[ft]=""),l&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||Vt())},children:[l]}),delete h.attributes.title);const A=g(g({},h),{},{prefix:r,iconName:a,main:t,mask:n,maskId:d,transform:i,symbol:o,styles:g(g({},S),m.styles)}),{children:L,attributes:N}=n.found&&t.found?it("generateAbstractMask",A)||{children:[],attributes:{}}:it("generateAbstractIcon",A)||{children:[],attributes:{}};return A.children=L,A.attributes=N,o?Ju(A):Qu(A)}function gi(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:l=!1}=e,d=g(g(g({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(d[ft]="");const c=g({},o.styles);ca(a)&&(c.transform=_u({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const m=Xn(c);m.length>0&&(d.style=m);const x=[];return x.push({tag:"span",attributes:d,children:[t]}),i&&x.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),x}function ef(e){const{content:t,title:n,extra:r}=e,a=g(g(g({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Xn(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:gr}=qe;function zr(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(pr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(pr.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(pr.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const tf={found:!1,width:512,height:512};function nf(e,t){!ns&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ur(e,t){let n=t;return t==="fa"&&P.styleDefault!==null&&(t=at()),new Promise((r,a)=>{if(n==="fa"){const i=ys(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&gr[t]&&gr[t][e]){const i=gr[t][e];return r(zr(i))}nf(e,t),r(g(g({},tf),{},{icon:P.showMissingIcons&&e?it("missingIconAbstract")||{}:{}}))})}const yi=()=>{},$r=P.measurePerformance&&dn&&dn.mark&&dn.measure?dn:{mark:yi,measure:yi},Lt='FA "6.7.2"',rf=e=>($r.mark("".concat(Lt," ").concat(e," begins")),()=>xs(e)),xs=e=>{$r.mark("".concat(Lt," ").concat(e," ends")),$r.measure("".concat(Lt," ").concat(e),"".concat(Lt," ").concat(e," begins"),"".concat(Lt," ").concat(e," ends"))};var pa={begin:rf,end:xs};const bn=()=>{};function bi(e){return typeof(e.getAttribute?e.getAttribute(ft):null)=="string"}function af(e){const t=e.getAttribute?e.getAttribute(ia):null,n=e.getAttribute?e.getAttribute(oa):null;return t&&n}function of(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function sf(){return P.autoReplaceSvg===!0?vn.replace:vn[P.autoReplaceSvg]||vn.replace}function lf(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function cf(e){return K.createElement(e)}function ws(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?lf:cf}=t;if(typeof e=="string")return K.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(ws(i,{ceFn:n}))}),r}function uf(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const vn={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(ws(n),t)}),t.getAttribute(ft)===null&&P.keepOriginalSource){let n=K.createComment(uf(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~la(t).indexOf(P.replacementClass))return vn.replace(e);const r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===P.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>en(i)).join(`
`);t.setAttribute(ft,""),t.innerHTML=a}};function vi(e){e()}function As(e,t){const n=typeof t=="function"?t:bn;if(e.length===0)n();else{let r=vi;P.mutateApproach===du&&(r=rt.requestAnimationFrame||vi),r(()=>{const a=sf(),i=pa.begin("mutate");e.map(a),i(),n()})}}let ma=!1;function Ss(){ma=!0}function qr(){ma=!1}let Sn=null;function xi(e){if(!oi||!P.observeMutations)return;const{treeCallback:t=bn,nodeCallback:n=bn,pseudoElementsCallback:r=bn,observeMutationsRoot:a=K}=e;Sn=new oi(i=>{if(ma)return;const o=at();Et(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!bi(l.addedNodes[0])&&(P.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&P.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&bi(l.target)&&~bu.indexOf(l.attributeName))if(l.attributeName==="class"&&af(l.target)){const{prefix:d,iconName:c}=Kn(la(l.target));l.target.setAttribute(ia,d||o),c&&l.target.setAttribute(oa,c)}else of(l.target)&&n(l.target)})}),Qe&&Sn.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ff(){Sn&&Sn.disconnect()}function df(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function pf(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=Kn(la(e));return a.prefix||(a.prefix=at()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Fu(a.prefix,e.innerText)||fa(a.prefix,Dr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function mf(e){const t=Et(e.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Vt()):(t["aria-hidden"]="true",t.focusable="false")),t}function hf(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$e,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=pf(e),i=mf(e),o=Fr("parseNodeAttributes",{},e);let l=t.styleParser?df(e):[];return g({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:$e,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:i}},o)}const{styles:gf}=qe;function Ts(e){const t=P.autoReplaceSvg==="nest"?wi(e,{styleParser:!1}):wi(e);return~t.extra.classes.indexOf(as)?it("generateLayersText",e,t):it("generateSvgReplacementMutation",e,t)}function yf(){return[...Kc,...Or]}function Ai(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();const n=K.documentElement.classList,r=m=>n.add("".concat(ci,"-").concat(m)),a=m=>n.remove("".concat(ci,"-").concat(m)),i=P.autoFetchSvg?yf():Zo.concat(Object.keys(gf));i.includes("fa")||i.push("fa");const o=[".".concat(as,":not([").concat(ft,"])")].concat(i.map(m=>".".concat(m,":not([").concat(ft,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Et(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();const d=pa.begin("onTree"),c=l.reduce((m,x)=>{try{const T=Ts(x);T&&m.push(T)}catch(T){ns||T.name==="MissingIcon"&&console.error(T)}return m},[]);return new Promise((m,x)=>{Promise.all(c).then(T=>{As(T,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),d(),m()})}).catch(T=>{d(),x(T)})})}function bf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ts(e).then(n=>{n&&As([n],t)})}function vf(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:jr(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:jr(a||{})),e(r,g(g({},n),{},{mask:a}))}}const xf=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=$e,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:l=null,classes:d=[],attributes:c={},styles:m={}}=t;if(!e)return;const{prefix:x,iconName:T,icon:R}=e;return Zn(g({type:"icon"},e),()=>(dt("beforeDOMElementCreation",{iconDefinition:e,params:t}),P.autoA11y&&(o?c["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(l||Vt()):(c["aria-hidden"]="true",c.focusable="false")),da({icons:{main:zr(R),mask:a?zr(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:T,transform:g(g({},$e),n),symbol:r,title:o,maskId:i,titleId:l,extra:{attributes:c,styles:m,classes:d}})))};var wf={mixout(){return{icon:vf(xf)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Ai,e.nodeCallback=bf,e}}},provides(e){e.i2svg=function(t){const{node:n=K,callback:r=()=>{}}=t;return Ai(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:i,prefix:o,transform:l,symbol:d,mask:c,maskId:m,extra:x}=n;return new Promise((T,R)=>{Promise.all([Ur(r,o),c.iconName?Ur(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[C,h]=w;T([t,da({icons:{main:C,mask:h},prefix:o,iconName:r,transform:l,symbol:d,maskId:m,title:a,titleId:i,extra:x,watchable:!0})])}).catch(R)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:i,styles:o}=t;const l=Xn(o);l.length>0&&(r.style=l);let d;return ca(i)&&(d=it("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(d||a.icon),{children:n,attributes:r}}}},Af={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Zn({type:"layer"},()=>{dt("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Sf={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return Zn({type:"counter",content:e},()=>(dt("beforeDOMElementCreation",{content:e,params:t}),ef({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(P.cssPrefix,"-layers-counter"),...r]}})))}}}},Tf={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=$e,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return Zn({type:"text",content:e},()=>(dt("beforeDOMElementCreation",{content:e,params:t}),gi({content:e,transform:g(g({},$e),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(P.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:i}=n;let o=null,l=null;if(Vo){const d=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/d,l=c.height/d}return P.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,gi({content:t.innerHTML,width:o,height:l,transform:a,title:r,extra:i,watchable:!0})])}}};const kf=new RegExp('"',"ug"),Si=[1105920,1112319],Ti=g(g(g(g({},{FontAwesome:{normal:"fas",400:"fas"}}),Gc),uu),ru),Hr=Object.keys(Ti).reduce((e,t)=>(e[t.toLowerCase()]=Ti[t],e),{}),Ef=Object.keys(Hr).reduce((e,t)=>{const n=Hr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function _f(e){const t=e.replace(kf,""),n=Iu(t,0),r=n>=Si[0]&&n<=Si[1],a=t.length===2?t[0]===t[1]:!1;return{value:Dr(a?t[0]:t),isSecondary:r||a}}function Cf(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(Hr[n]||{})[a]||Ef[n]}function ki(e,t){const n="".concat(fu).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const o=Et(e.children).filter(T=>T.getAttribute(Nr)===t)[0],l=rt.getComputedStyle(e,t),d=l.getPropertyValue("font-family"),c=d.match(gu),m=l.getPropertyValue("font-weight"),x=l.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&x!=="none"&&x!==""){const T=l.getPropertyValue("content");let R=Cf(d,m);const{value:w,isSecondary:C}=_f(T),h=c[0].startsWith("FontAwesome");let S=fa(R,w),A=S;if(h){const L=ju(w);L.iconName&&L.prefix&&(S=L.iconName,R=L.prefix)}if(S&&!C&&(!o||o.getAttribute(ia)!==R||o.getAttribute(oa)!==A)){e.setAttribute(n,A),o&&e.removeChild(o);const L=hf(),{extra:N}=L;N.attributes[Nr]=t,Ur(S,R).then(M=>{const ne=da(g(g({},L),{},{icons:{main:M,mask:bs()},prefix:R,iconName:A,extra:N,watchable:!0})),ie=K.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ie,e.firstChild):e.appendChild(ie),ie.outerHTML=ne.map(Z=>en(Z)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Of(e){return Promise.all([ki(e,"::before"),ki(e,"::after")])}function Pf(e){return e.parentNode!==document.head&&!~pu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Nr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ei(e){if(Qe)return new Promise((t,n)=>{const r=Et(e.querySelectorAll("*")).filter(Pf).map(Of),a=pa.begin("searchPseudoElements");Ss(),Promise.all(r).then(()=>{a(),qr(),t()}).catch(()=>{a(),qr(),n()})})}var Nf={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Ei,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=K}=t;P.searchPseudoElements&&Ei(n)}}};let _i=!1;var If={mixout(){return{dom:{unwatch(){Ss(),_i=!0}}}},hooks(){return{bootstrap(){xi(Fr("mutationObserverCallbacks",{}))},noAuto(){ff()},watch(e){const{observeMutationsRoot:t}=e;_i?qr():xi(Fr("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Ci=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var Lf={mixout(){return{parse:{transform:e=>Ci(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Ci(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:i}=t;const o={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(d," ").concat(c)},x={transform:"translate(".concat(i/2*-1," -256)")},T={outer:o,inner:m,path:x};return{tag:"g",attributes:g({},T.outer),children:[{tag:"g",attributes:g({},T.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:g(g({},n.icon.attributes),T.path)}]}]}}}};const yr={x:0,y:0,width:"100%",height:"100%"};function Oi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Rf(e){return e.tag==="g"?e.children:[e]}var Df={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Kn(n.split(" ").map(a=>a.trim())):bs();return r.prefix||(r.prefix=at()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:i,maskId:o,transform:l}=t;const{width:d,icon:c}=a,{width:m,icon:x}=i,T=Eu({transform:l,containerWidth:m,iconWidth:d}),R={tag:"rect",attributes:g(g({},yr),{},{fill:"white"})},w=c.children?{children:c.children.map(Oi)}:{},C={tag:"g",attributes:g({},T.inner),children:[Oi(g({tag:c.tag,attributes:g(g({},c.attributes),T.path)},w))]},h={tag:"g",attributes:g({},T.outer),children:[C]},S="mask-".concat(o||Vt()),A="clip-".concat(o||Vt()),L={tag:"mask",attributes:g(g({},yr),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,h]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Rf(x)},L]};return n.push(N,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(S,")")},yr)}),{children:n,attributes:r}}}},Mf={provides(e){let t=!1;rt.matchMedia&&(t=rt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:g(g({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=g(g({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:g(g({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:g(g({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:g(g({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:g(g({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:g(g({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ff={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},jf=[Ou,wf,Af,Sf,Tf,Nf,If,Lf,Df,Mf,Ff];Gu(jf,{mixoutsTo:Ne});Ne.noAuto;Ne.config;Ne.library;Ne.dom;const Wr=Ne.parse;Ne.findIconDefinition;Ne.toHtml;const zf=Ne.icon;Ne.layer;Ne.text;Ne.counter;function Pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pi(Object(n),!0).forEach(function(r){bt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Tn(e){"@babel/helpers - typeof";return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tn(e)}function bt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uf(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function $f(e,t){if(e==null)return{};var n=Uf(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Br(e){return qf(e)||Hf(e)||Wf(e)||Bf()}function qf(e){if(Array.isArray(e))return Yr(e)}function Hf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wf(e,t){if(e){if(typeof e=="string")return Yr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yr(e,t)}}function Yr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Bf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yf(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,d=e.spin,c=e.spinPulse,m=e.spinReverse,x=e.pulse,T=e.fixedWidth,R=e.inverse,w=e.border,C=e.listItem,h=e.flip,S=e.size,A=e.rotation,L=e.pull,N=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":d,"fa-spin-reverse":m,"fa-spin-pulse":c,"fa-pulse":x,"fa-fw":T,"fa-inverse":R,"fa-border":w,"fa-li":C,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},bt(t,"fa-".concat(S),typeof S<"u"&&S!==null),bt(t,"fa-rotate-".concat(A),typeof A<"u"&&A!==null&&A!==0),bt(t,"fa-pull-".concat(L),typeof L<"u"&&L!==null),bt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(N).map(function(M){return N[M]?M:null}).filter(function(M){return M})}function Gf(e){return e=e-0,e===e}function ks(e){return Gf(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Xf=["style"];function Vf(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Kf(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ks(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Vf(a)]=i:t[a]=i,t},{})}function Es(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(d){return Es(e,d)}),a=Object.keys(t.attributes||{}).reduce(function(d,c){var m=t.attributes[c];switch(c){case"class":d.attrs.className=m,delete t.attributes.class;break;case"style":d.attrs.style=Kf(m);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?d.attrs[c.toLowerCase()]=m:d.attrs[ks(c)]=m}return d},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=$f(n,Xf);return a.attrs.style=Ue(Ue({},a.attrs.style),o),e.apply(void 0,[t.tag,Ue(Ue({},a.attrs),l)].concat(Br(r)))}var _s=!1;try{_s=!0}catch{}function Zf(){if(!_s&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ni(e){if(e&&Tn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Wr.icon)return Wr.icon(e);if(e===null)return null;if(e&&Tn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function br(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?bt({},e,t):{}}var Ii={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},nt=St.forwardRef(function(e,t){var n=Ue(Ue({},Ii),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,l=n.title,d=n.titleId,c=n.maskId,m=Ni(r),x=br("classes",[].concat(Br(Yf(n)),Br((o||"").split(" ")))),T=br("transform",typeof n.transform=="string"?Wr.transform(n.transform):n.transform),R=br("mask",Ni(a)),w=zf(m,Ue(Ue(Ue(Ue({},x),T),R),{},{symbol:i,title:l,titleId:d,maskId:c}));if(!w)return Zf("Could not find icon",m),null;var C=w.abstract,h={ref:t};return Object.keys(n).forEach(function(S){Ii.hasOwnProperty(S)||(h[S]=n[S])}),Qf(C[0],h)});nt.displayName="FontAwesomeIcon";nt.propTypes={beat:f.bool,border:f.bool,beatFade:f.bool,bounce:f.bool,className:f.string,fade:f.bool,flash:f.bool,mask:f.oneOfType([f.object,f.array,f.string]),maskId:f.string,fixedWidth:f.bool,inverse:f.bool,flip:f.oneOf([!0,!1,"horizontal","vertical","both"]),icon:f.oneOfType([f.object,f.array,f.string]),listItem:f.bool,pull:f.oneOf(["right","left"]),pulse:f.bool,rotation:f.oneOf([0,90,180,270]),shake:f.bool,size:f.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:f.bool,spinPulse:f.bool,spinReverse:f.bool,symbol:f.oneOfType([f.bool,f.string]),title:f.string,titleId:f.string,transform:f.oneOfType([f.string,f.object]),swapOpacity:f.bool};var Qf=Es.bind(null,St.createElement);const Jf={Lg:"992px",Xl:"1260px"},Cs=Y.createContext(),ha=({initialValue:e,children:t})=>{const n={...e,breakpoint:Jf[e.breakpoint]};return p.jsx(Cs.Provider,{value:n,children:t})};ha.propTypes={initialValue:f.shape(Ao).isRequired,children:f.node.isRequired};const He=()=>{const e=Y.useContext(Cs);if(e===void 0)throw new Error("useAppContext must be used within a AppContextProvider");return e};ha.__docgenInfo={description:"",methods:[],displayName:"AppContextProvider",props:{initialValue:{description:"",type:{name:"shape",value:{isPartner:{name:"bool",required:!1},navTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},partnerLogo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},logo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},title:{name:"string",required:!1},parentOrg:{name:"custom",raw:"TitlePropTypes.parentOrg",required:!1},parentOrgUrl:{name:"custom",raw:"TitlePropTypes.parentOrgUrl",required:!1},baseUrl:{name:"custom",raw:"TitlePropTypes.baseUrl",required:!1},loggedIn:{name:"custom",raw:"LoginPropTypes.loggedIn",required:!1},userName:{name:"custom",raw:"LoginPropTypes.userName",required:!1},loginLink:{name:"custom",raw:"LoginPropTypes.loginLink",required:!1},onLoginClick:{name:"func",required:!1},logoutLink:{name:"custom",raw:"LoginPropTypes.logoutLink",required:!1},onLogoutClick:{name:"func",required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},breakpoint:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}],required:!1},animateTitle:{name:"bool",required:!1},expandOnHover:{name:"bool",required:!1},mobileNavTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},hasNavigation:{name:"bool",required:!1},searchUrl:{name:"string",required:!1},site:{name:"string",required:!1},renderDiv:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}],required:!1}}},required:!0},children:{description:"",type:{name:"node"},required:!0}}};const Qn=e=>{const t=window==null?void 0:window.matchMedia(`(max-width: ${e})`),[n,r]=Y.useState(t==null?void 0:t.matches),a=i=>{r(i.matches)};return Y.useEffect(()=>(t.addEventListener("change",a),()=>t.removeEventListener("change",a)),[]),n},ed=we.div`
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
`,td=we.div`
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
`,Li={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar"},Os=()=>{const{loggedIn:e,userName:t,logoutLink:n,loginLink:r,onLoginClick:a,onLogoutClick:i,breakpoint:o}=He();return p.jsx(td,{className:"nav-link login-status",breakpoint:o,children:e?p.jsxs(p.Fragment,{children:[t?p.jsx("span",{className:"name","data-testid":"user-name",children:t}):"",p.jsx("a",{className:"signout",href:n,onClick:l=>{ue({...Li,text:"sign out"}),i==null||i(l)},children:"Sign Out"})]}):p.jsx("a",{href:r,onClick:l=>{ue({...Li,text:"sign in"}),a==null||a(l)},children:"Sign In"})})};Os.__docgenInfo={description:"",methods:[],displayName:"Login"};const nd=we.form`
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
`,vr={event:"search",action:"type",name:"onenter",type:"main search",region:"navbar",section:"topbar"},Ps=()=>{const{breakpoint:e,searchUrl:t,site:n}=He(),r=Qn(e),a=Y.useRef(null),[i,o]=Y.useState(!1);Y.useEffect(()=>{i&&a.current.focus()},[i]);const l=c=>{const m=c.target;c.preventDefault(),ue({...vr,text:c.target.elements.q.value}),setTimeout(()=>{m.submit()},100)},d=()=>{o(c=>{const m=!c;return ue({...vr,event:"link",action:"click",name:"onclick",text:m?"search icon":"close search icon"}),m})};return p.jsxs(nd,{breakpoint:e,action:t,onSubmit:l,method:"get",name:"gs",className:i?"open-search":"","data-testid":"universal-nav-search-form",children:[r?p.jsxs("label",{children:[p.jsx(nt,{icon:ni}),p.jsx("input",{ref:a,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0,onChange:c=>ue({...vr,text:c.target.value})})]}):p.jsxs(p.Fragment,{children:[p.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:d,className:"search-button","data-testid":"search-button",children:p.jsx(nt,{icon:ni})}),i&&p.jsxs(p.Fragment,{children:[p.jsx("input",{ref:a,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0}),p.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:d,className:"close-search","data-testid":"close-search",children:p.jsx(nt,{icon:Bo})})]})]}),p.jsx("input",{name:"url_host",value:n,type:"hidden"}),p.jsx("input",{name:"site",value:"default_collection",type:"hidden"}),p.jsx("input",{name:"sort",value:"date:D:L:d1",type:"hidden"}),p.jsx("input",{name:"output",value:"xml_no_dtd",type:"hidden"}),p.jsx("input",{name:"ie",value:"UTF-8",type:"hidden"}),p.jsx("input",{name:"oe",value:"UTF-8",type:"hidden"}),p.jsx("input",{name:"client",value:"asu_frontend",type:"hidden"}),p.jsx("input",{name:"proxystylesheet",value:"asu_frontend",type:"hidden"})]})};Ps.__docgenInfo={description:"",methods:[],displayName:"Search"};const rd={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar",text:""},ga=()=>{const{breakpoint:e}=He();function t(){try{return window.location.href}catch(r){return console.error(r),""}}const n=[{className:"nav-link visually-hidden-focusable",href:"#skip-to-content",text:"Skip to main content"},{className:"nav-link visually-hidden-focusable",href:`https://accessibility.asu.edu/report?a11yref=${t()}`,text:"Report an accessibility problem"},{className:"nav-link",href:"https://asu.edu",text:"ASU Home"},{className:"nav-link",href:"https://my.asu.edu",text:"My ASU"},{className:"nav-link",href:"https://www.asu.edu/academics/colleges-schools",text:"Colleges and Schools"}];return p.jsx(ed,{breakpoint:e,className:"universal-nav","data-testid":"universal-navbar","data-elastic-exclude":"data-elastic-exclude",children:p.jsx("div",{className:"container-xl",children:p.jsx("div",{className:"header-top",children:p.jsxs("nav",{className:"nav","aria-label":"ASU Global",children:[p.jsxs("div",{className:"links-container",children:[n.map(r=>p.jsx("a",{className:r.className,href:r.href,onClick:()=>ue({...rd,text:r.text}),children:r.text},r.href)),p.jsx(Os,{})]}),p.jsx(Ps,{})]})})})})};ga.__docgenInfo={description:"",methods:[],displayName:"UniversalNavbar"};const ad=we.div`
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
`,id=we.a`
  display: unset;
  padding: 0;
  margin: 0;
  font-size: unset;
  line-height: unset;
  white-space: unset;
`,Ns=Wo(),od=`${Ns}/assets/img/arizona-state-university-logo-vertical.png`,sd=`${Ns}/assets/img/arizona-state-university-logo.png`,Is=()=>{const{logo:e}=He();return p.jsxs(id,{href:(e==null?void 0:e.brandLink)??"https://asu.edu",className:"navbar-brand","data-testid":"logo",onClick:()=>ue({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"asu logo"}),children:[p.jsx("img",{className:"vert",src:(e==null?void 0:e.src)??od,alt:(e==null?void 0:e.alt)??"Arizona State University logo",title:(e==null?void 0:e.title)??"ASU homepage",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),p.jsx("img",{className:"horiz",src:(e==null?void 0:e.mobileSrc)??sd,alt:(e==null?void 0:e.alt)??"Arizona State University logo",title:(e==null?void 0:e.title)??"ASU homepage",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})};Is.__docgenInfo={description:"",methods:[],displayName:"Logo"};const ld=we.nav`
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
`,cd=we.div`
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
`,ud={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},Ls=({text:e})=>p.jsx("h3",{className:"ul-heading",children:e});Ls.propTypes={text:f.string};const Rs=({link:e,dropdownName:t,handleLinkEvent:n})=>p.jsx("li",{className:"nav-button",children:p.jsx(Tt,{text:e.text,color:e.color||"dark",href:e.href,onClick:r=>n(r,e),onKeyDown:n,onFocus:()=>ue({text:e.text,component:t}),"data-testid":"submenu-item"})});Rs.propTypes={link:f.shape({text:f.string,color:f.string,href:f.string}),dropdownName:f.string,handleLinkEvent:f.func};const Ds=({link:e,dropdownName:t,handleLinkEvent:n})=>p.jsx("li",{className:"nav-link",children:p.jsx("a",{...e.href?{}:{tabIndex:0},href:e.href,onClick:r=>n(r,e),onKeyDown:r=>n(r,e),onFocus:()=>ue({text:e.text,component:t}),"data-testid":"submenu-item",children:e.text})});Ds.propTypes={link:f.shape({text:f.string,href:f.string}),dropdownName:f.string,handleLinkEvent:f.func};const ya=({dropdownName:e,items:t,buttons:n,classes:r,listId:a,setItemOpened:i,parentLink:o})=>{const{breakpoint:l}=He(),d=(t==null?void 0:t.length)>2,c=Y.useRef(null),[m,x]=Y.useState(!1),T=(t==null?void 0:t.length)>1;Y.useEffect(()=>{if(window&&c.current){const h=c.current.getBoundingClientRect().left,S=window.innerWidth*.55;x(h>S)}},[]);const R=h=>h.stopPropagation(),w=(h,S)=>{var Z;const{key:A,type:L,target:N}=h,{parentElement:M}=N,ne=()=>{var fe;const ae=(fe=M.nextElementSibling)==null?void 0:fe.firstChild;ae&&ae.focus()},ie=()=>{var fe;const ae=(fe=M.previousElementSibling)==null?void 0:fe.firstChild;ae&&ae.focus()};R(h),A==="ArrowDown"?(h.preventDefault(),ne()):A==="ArrowUp"?(h.preventDefault(),ie()):A==="Escape"?(i(),o&&o.focus()):(A==="Enter"||A===" "||L==="click")&&((Z=S==null?void 0:S.onClick)==null||Z.call(S,h),ue({...ud,text:S.text}))},C=(h,S)=>{const A=`${h.text}-${h.href||S}`;return h.type==="heading"?p.jsx(Ls,{text:h.text},A):h.type==="button"?p.jsx(Rs,{link:h,dropdownName:e,handleLinkEvent:w},A):p.jsx(Ds,{link:h,dropdownName:e,handleLinkEvent:w},A)};return p.jsxs(cd,{ref:c,className:`${r}${m?" aligned-right":""}${d?" mega":""}`,breakpoint:l,children:[p.jsx("div",{id:T?a:null,className:"dropdown-container",children:t==null?void 0:t.map((h,S)=>{const L=Ho(`dropdown-item-${S}-`).next().value;return p.jsx("ul",{id:T?`${a}-${L}`:a,children:h.map((N,M)=>C(N,M))},L)})}),n&&p.jsx("div",{className:"dropdown-button-container",children:p.jsx("div",{children:n.map((h,S)=>p.jsx(Tt,{color:h.color,text:h.text,href:h.href,onClick:R},`${h.text}-${h.href||S}`))})})]})};ya.propTypes={dropdownName:f.string,items:f.arrayOf(f.arrayOf(f.shape({text:f.string,selected:f.bool,onClick:f.func,href:f.string}))),buttons:f.arrayOf(f.shape(En)),classes:f.string,listId:f.string,setItemOpened:f.func,parentLink:f.shape({focus:f.func})};ya.__docgenInfo={description:`@param {DropdownItemProps} props
@returns {JSX.Element}`,methods:[],displayName:"DropdownItem",props:{dropdownName:{description:"",type:{name:"string"},required:!1},items:{description:"",type:{name:"arrayOf",value:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1},selected:{name:"bool",required:!1},onClick:{name:"func",required:!1},href:{name:"string",required:!1}}}}},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},classes:{description:"",type:{name:"string"},required:!1},listId:{description:"",type:{name:"string"},required:!1},setItemOpened:{description:"",type:{name:"func"},required:!1},parentLink:{description:"",type:{name:"shape",value:{focus:{name:"func",required:!1}}},required:!1}}};const fd=we.li`
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
`,dd={event:"collapse",type:"click"},xr={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},Ms=({children:e})=>p.jsxs(p.Fragment,{children:[p.jsx(nt,{icon:Rc,className:"icon-nav-item",alt:""}),p.jsx("span",{className:"mobile-only",children:e})]});Ms.propTypes={children:f.node};const ba=({link:e,setItemOpened:t,itemOpened:n})=>{const r=Y.useRef(null),a=Y.useRef(null),i=e.id===n,{breakpoint:o,expandOnHover:l,title:d}=He(),c=Qn(o);Y.useEffect(()=>{const w=C=>{var h;i&&!((h=r==null?void 0:r.current)!=null&&h.contains(C.target))&&t()};return document.addEventListener("click",w,!0),()=>{document.removeEventListener("click",w,!0)}},[i]);const m=Y.useMemo(()=>{var w;return e.type==="icon-home"?p.jsx(Ms,{children:e.text}):p.jsxs("span",{children:[e.text,!!((w=e.items)!=null&&w.length)&&p.jsx(nt,{icon:Mc,className:`chevron-icon ${i?"open":""}`,alt:""})]})},[e]),x=()=>{var S;const w=!!((S=e.items)!=null&&S.length),C=i?"close":"open",{text:h}=e;ue(w?{...xr,...dd,action:C,text:h}:{...xr,text:e.type==="icon-home"?"home button":h})},T=w=>{var S,A;if(!e.items&&e.href){ue({...xr,text:e.text});return}const{key:C}=w;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"," ","Escape","Click"].includes(C)){if(w.preventDefault(),C==="Escape"&&i){t();return}if((C==="Enter"||C===" ")&&(e.items&&(!l&&!c||c)&&t(),x(),(S=e.onClick)==null||S.call(e,w)),(C==="ArrowDown"||C==="ArrowRight")&&i){const L=document.querySelectorAll(`.header-dropdown-${e.id} li.nav-link a`);L.length&&L[0].focus()}}else w.type==="click"&&e.items?(w.preventDefault(),x(),t()):w.type==="click"&&(x(),(A=e.onClick)==null||A.call(e,w))},R=()=>{l&&!c&&(t(),x())};return p.jsxs(fd,{breakpoint:o,ref:r,onMouseEnter:R,onMouseLeave:R,children:[p.jsx("a",{onKeyDown:T,onClick:T,href:e.href,...e.items?{"aria-expanded":i}:{},...e.href?{}:{tabIndex:0},"aria-owns":e.items?`dropdown-${e.id}`:null,className:`${e.class?e.class:""}${e.selected?" nav-item-selected":""}${i?" open-link":""}`,"data-testid":"nav-item",title:e.type==="icon-home"&&d?`${d} home page`:e.text,ref:a,children:m}),e.items&&p.jsx(ya,{items:e.items,buttons:e.buttons,dropdownName:e.text,classes:`header-dropdown-${e.id} ${i?"opened":""}`,listId:`dropdown-${e.id}`,setItemOpened:t,parentLink:a==null?void 0:a.current})]})};ba.propTypes={link:wr,setItemOpened:f.func,itemOpened:f.number};ba.__docgenInfo={description:`@param {{ link: NavTreeProps, setItemOpened: Function, itemOpened: number }} props
@returns {JSX.Element}`,methods:[],displayName:"NavItem",props:{link:{description:"",type:{name:"shape",value:{id:{name:"number",required:!1},href:{name:"string",required:!1},text:{name:"string",required:!1},type:{name:"string",required:!1},selected:{name:"bool",required:!1},items:{name:"arrayOf",value:{name:"arrayOf",value:{name:"object"}},required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},class:{name:"string",required:!1}}},required:!1},setItemOpened:{description:"",type:{name:"func"},required:!1},itemOpened:{description:"",type:{name:"number"},required:!1}}};const Gr=()=>{const{navTree:e,mobileNavTree:t,buttons:n,breakpoint:r}=He(),a=Qn(r),[i,o]=Y.useState(void 0),l=c=>{o(m=>i===c?void 0:c)},d=(c,m)=>{const x={...c,id:m},R=Ho(`${c.text}-${m}-`).next().value;return p.jsx(ba,{link:x,setItemOpened:()=>l(m),itemOpened:i},R)};return p.jsxs(ld,{breakpoint:r,"data-testid":"navigation","aria-label":"Site",children:[((e==null?void 0:e.length)||(t==null?void 0:t.length)||(n==null?void 0:n.length))&&p.jsxs("div",{className:"content-container",children:[((e==null?void 0:e.length)||(t==null?void 0:t.length))&&p.jsx("ul",{className:"nav-list",children:t!=null&&t.length&&a?t==null?void 0:t.map((c,m)=>d(c,m)):e==null?void 0:e.map((c,m)=>d(c,m))}),!!(n!=null&&n.length)&&p.jsx("form",{className:"buttons-container","data-testid":"buttons-container",children:n==null?void 0:n.map(c=>Y.createElement(Tt,{...c,key:c.text,onClick:()=>ue({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:c.text})}))})]}),a&&p.jsx(ga,{})]})};Gr.__docgenInfo={description:"",methods:[],displayName:"NavbarContainer"};const pd=we.div`
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
`,va=Wo(),md=`${va}/assets/img/arizona-state-university-logo-vertical.png`,hd=`${va}/assets/img/arizona-state-university-logo.png`,gd=`${va}/assets/img/asu-starbucks.png`,Fs=()=>{const{partnerLogo:e,logo:t,breakpoint:n}=He();return p.jsxs(pd,{breakpoint:n,"data-testid":"partner",children:[p.jsx("a",{href:(e==null?void 0:e.brandLink)??"https://starbucks.asu.edu/",onClick:()=>ue({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"partner logo"}),children:p.jsx("img",{src:(e==null?void 0:e.src)??gd,alt:(e==null?void 0:e.alt)??"ASU Starbucks logo",width:"232",height:"81",decoding:"async",fetchpriority:"high"})}),p.jsxs("a",{href:(t==null?void 0:t.brandLink)??"https://asu.edu",onClick:()=>ue({text:"asu logo"}),children:[p.jsx("img",{className:"vert",src:(t==null?void 0:t.src)??md,alt:(t==null?void 0:t.alt)??"Arizona State University logo",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),p.jsx("img",{className:"horiz",src:(t==null?void 0:t.mobileSrc)??hd,alt:(t==null?void 0:t.alt)??"Arizona State University logo",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})]})};Fs.__docgenInfo={description:"",methods:[],displayName:"Partner"};const yd=(e,t)=>{const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n},bd=e=>{const t="localhost",n="title_loaded",r=new Date,a=e||window.location.hostname,i=localStorage.getItem("title_loaded"),o=r.getTime()>parseInt(i,10),l=a===t,d=document.referrer.includes(a);if(l||!d&&(!i||o)){const m=yd(r,10).getTime();return localStorage.setItem(n,m.toString()),!0}return!1},vd={"992px":"993px","1260px":"1261px"},Ri=we.div`
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

  @media (min-width: ${({breakpoint:e})=>vd[e]}) {
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
`,xa=()=>{const[e,t]=Y.useState(!1),{title:n,parentOrg:r,parentOrgUrl:a,baseUrl:i,breakpoint:o,animateTitle:l}=He();return Y.useEffect(()=>{if(l!==!1){let d=i==="/"?window.location.hostname:i;!d.includes(window.location.hostname)&&d.indexOf("/")===0&&(d=window.location.hostname+d),bd(d)&&t(!0)}},[e,l,i]),r?p.jsxs(Ri,{breakpoint:o,className:"title","data-testid":"title",children:[p.jsx("a",{className:"unit-name",href:a,onClick:()=>ue({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:r}),title:`${r} home page`,children:r}),p.jsx("a",{className:`subunit-name ${e?"active":""}`,href:i,onClick:()=>ue({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:n}),title:`${n} home page`,children:n})]}):p.jsx(Ri,{breakpoint:o,className:"title","data-testid":"title",children:p.jsx("a",{className:`title-subunit-name ${e?"active":""}`,href:i,onClick:()=>ue({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:n}),title:`${n} home page`,children:n})})};xa.propTypes={...mn};xa.__docgenInfo={description:"",methods:[],displayName:"Title",props:{baseUrl:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},animate:{description:"",type:{name:"bool"},required:!1}}};const js=()=>{const{breakpoint:e,isPartner:t,hasNavigation:n}=He(),[r,a]=Y.useState(!1),i=Qn(e),o=()=>{a(d=>!d)},l=()=>{o(),ue({event:"collapse",action:r?"close":"open",type:"click",text:"menu button tablet"})};return p.jsxs(p.Fragment,{children:[!i&&p.jsx(ga,{}),p.jsx(ad,{breakpoint:e,children:p.jsx("div",{className:"container-xl",children:p.jsx("div",{className:"header-main",children:p.jsxs("div",{className:`navbar navbar-expand-xl ${t?"partner":""}`,children:[!t&&p.jsx(Is,{}),p.jsx("button",{className:`navbar-toggler${r?"":" collapsed"}`,type:"button",onClick:l,"aria-label":"Toggle navigation",children:p.jsx(nt,{icon:r?Bo:Ic,alt:""})}),p.jsxs("div",{className:`${t?"":"expand-title"}${n?"":" no-navigation"}`,children:[t?p.jsx(Fs,{}):p.jsx(xa,{}),!i&&p.jsx(Gr,{})]}),r&&i&&p.jsx(Gr,{})]})})})})]})};js.__docgenInfo={description:"",methods:[],displayName:"HeaderMain"};const xd=(e,t)=>e==null?void 0:e.findIndex(n=>{var r;return(n==null?void 0:n.href)===t||Array.isArray(n.items)&&((r=n.items)==null?void 0:r.flat().find(({href:a})=>a===t))}),wd=e=>e==null?void 0:e.find(t=>t.selected),Di=e=>{if(!Array.isArray(e)||e.length===0||wd(e))return e;let t="";if(window!=null&&window.location&&(t=window.location.pathname+window.location.search),!t)return e;const n=xd(e,t);if(n===-1)return e;const r=[...e];return r[n].selected=!0,r},zs={Lg:"992px",Xl:"1260px"},Ad=we.header`
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
  @media (min-width: ${({breakpoint:e})=>zs[e]}) {
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
`,Sd=we.div`
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
  @media (min-width: ${({breakpoint:e})=>zs[e]}) {
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
`,tn=({isPartner:e=!1,navTree:t,title:n,baseUrl:r="/",parentOrg:a,parentOrgUrl:i,partnerLogo:o,logo:l,loggedIn:d,userName:c,loginLink:m,onLoginClick:x,logoutLink:T,onLogoutClick:R,buttons:w,breakpoint:C="Xl",animateTitle:h,expandOnHover:S=!1,mobileNavTree:A,searchUrl:L,site:N,renderDiv:M="false"})=>{const ne=Di(t),ie=Di(A),Z=Y.useRef(null),ae=()=>{window.scrollY>Z.current.getBoundingClientRect().top?Z.current.classList.add("scrolled"):Z.current.classList.remove("scrolled")};Y.useEffect(()=>{typeof window<"u"&&Nc({packageName:"component-header",component:"Component Header",type:"NA",configuration:{site:N,isPartner:e,searchUrl:L,navTree:ne,parentOrg:a,buttons:w,mobileNavTree:ie}})},[]),Y.useEffect(()=>(window==null||window.addEventListener("scroll",ae),()=>window.removeEventListener("scroll",ae)),[]);const fe=()=>{const X=M==="true"?Sd:Ad;return p.jsx(X,{id:"asuHeader",ref:Z,breakpoint:C,children:p.jsx(js,{})})};return p.jsx(ha,{initialValue:{isPartner:e,navTree:ne,title:n,baseUrl:r,parentOrg:a,parentOrgUrl:i,partnerLogo:o,logo:l,loggedIn:d,userName:c,loginLink:m,onLoginClick:x,logoutLink:T,onLogoutClick:R,buttons:w,breakpoint:C,animateTitle:h,expandOnHover:S,mobileNavTree:ie,hasNavigation:!!(ne!=null&&ne.length)||!!(ie!=null&&ie.length),searchUrl:L,site:N},children:fe()})};tn.propTypes={...Ao};tn.__docgenInfo={description:`@param {HeaderProps} props
@returns {JSX.Element}`,methods:[],displayName:"ASUHeader",props:{isPartner:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},baseUrl:{defaultValue:{value:'"/"',computed:!1},description:"",type:{name:"string"},required:!1},breakpoint:{defaultValue:{value:'"Xl"',computed:!1},description:"",type:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}]},required:!1},expandOnHover:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},renderDiv:{defaultValue:{value:'"false"',computed:!1},description:"",type:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}]},required:!1},navTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},partnerLogo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},logo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},title:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1},userName:{description:"",type:{name:"string"},required:!1},loginLink:{description:"",type:{name:"string"},required:!1},onLoginClick:{description:"",type:{name:"func"},required:!1},logoutLink:{description:"",type:{name:"string"},required:!1},onLogoutClick:{description:"",type:{name:"func"},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},animateTitle:{description:"",type:{name:"bool"},required:!1},mobileNavTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},hasNavigation:{description:"",type:{name:"bool"},required:!1},searchUrl:{description:"",type:{name:"string"},required:!1},site:{description:"",type:{name:"string"},required:!1}}};const _d={title:"UDS/ASU Header",component:tn,argTypes:{renderDiv:{control:"select",options:["true","false"],description:"Either 'true' or 'false'. If 'true', the header will be rendered as a div instead of a header element."}}},We=e=>p.jsxs(p.Fragment,{children:[p.jsx(tn,{...e}),p.jsx("div",{style:{width:"100%",height:"200vh",background:"#f0f0f0",paddingTop:40,marginTop:140},children:p.jsx("h1",{style:{textAlign:"center",fontFamily:"Arial"},children:"Scroll section"})})]}),Td=e=>{const t=()=>{localStorage.getItem("title_loaded")&&localStorage.removeItem("title_loaded"),setTimeout(()=>{window.location.reload()},1e3)};return p.jsxs(p.Fragment,{children:[p.jsx(tn,{...e,animateTitle:!0}),p.jsx("div",{style:{marginTop:200,textAlign:"center"},children:p.jsx(Tt,{text:"Animate Title",color:"dark",onClick:t})})]})},Rt=We.bind({});Rt.args={loggedIn:!1,userName:"",navTree:Qt,title:"Subdomain name",breakpoint:"Lg",searchUrl:"https://search.asu.edu/search",site:"subdomain",renderDiv:"false"};const Dt=We.bind({});Dt.args={};const Mt=We.bind({});Mt.args={title:"Subdomain name",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ft=We.bind({});Ft.args={title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const jt=We.bind({});jt.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:Qt,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const zt=We.bind({});zt.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:Qt,mobileNavTree:lc,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ut=We.bind({});Ut.args={navTree:sc,title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold",classes:"custom-class"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const $t=We.bind({});$t.args={navTree:jo,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const qt=We.bind({});qt.args={navTree:jo,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",expandOnHover:!0,searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ht=We.bind({});Ht.args={isPartner:!0,navTree:Qt,loggedIn:!1,userName:"",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Wt=Td.bind({});Wt.args={title:"Subdomain name",navTree:Qt,loggedIn:!1,logoutLink:"/caslogout",loginLink:"/cas",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};var Mi,Fi,ji;Rt.parameters={...Rt.parameters,docs:{...(Mi=Rt.parameters)==null?void 0:Mi.docs,source:{originalSource:`args => <>
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
  </>`,...(ji=(Fi=Rt.parameters)==null?void 0:Fi.docs)==null?void 0:ji.source}}};var zi,Ui,$i;Dt.parameters={...Dt.parameters,docs:{...(zi=Dt.parameters)==null?void 0:zi.docs,source:{originalSource:`args => <>
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
  </>`,...($i=(Ui=Dt.parameters)==null?void 0:Ui.docs)==null?void 0:$i.source}}};var qi,Hi,Wi;Mt.parameters={...Mt.parameters,docs:{...(qi=Mt.parameters)==null?void 0:qi.docs,source:{originalSource:`args => <>
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
  </>`,...(Wi=(Hi=Mt.parameters)==null?void 0:Hi.docs)==null?void 0:Wi.source}}};var Bi,Yi,Gi;Ft.parameters={...Ft.parameters,docs:{...(Bi=Ft.parameters)==null?void 0:Bi.docs,source:{originalSource:`args => <>
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
  </>`,...(Gi=(Yi=Ft.parameters)==null?void 0:Yi.docs)==null?void 0:Gi.source}}};var Xi,Vi,Ki;jt.parameters={...jt.parameters,docs:{...(Xi=jt.parameters)==null?void 0:Xi.docs,source:{originalSource:`args => <>
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
  </>`,...(Ki=(Vi=jt.parameters)==null?void 0:Vi.docs)==null?void 0:Ki.source}}};var Zi,Qi,Ji;zt.parameters={...zt.parameters,docs:{...(Zi=zt.parameters)==null?void 0:Zi.docs,source:{originalSource:`args => <>
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
  </>`,...(Ji=(Qi=zt.parameters)==null?void 0:Qi.docs)==null?void 0:Ji.source}}};var eo,to,no;Ut.parameters={...Ut.parameters,docs:{...(eo=Ut.parameters)==null?void 0:eo.docs,source:{originalSource:`args => <>
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
  </>`,...(no=(to=Ut.parameters)==null?void 0:to.docs)==null?void 0:no.source}}};var ro,ao,io;$t.parameters={...$t.parameters,docs:{...(ro=$t.parameters)==null?void 0:ro.docs,source:{originalSource:`args => <>
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
  </>`,...(io=(ao=$t.parameters)==null?void 0:ao.docs)==null?void 0:io.source}}};var oo,so,lo;qt.parameters={...qt.parameters,docs:{...(oo=qt.parameters)==null?void 0:oo.docs,source:{originalSource:`args => <>
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
  </>`,...(lo=(so=qt.parameters)==null?void 0:so.docs)==null?void 0:lo.source}}};var co,uo,fo;Ht.parameters={...Ht.parameters,docs:{...(co=Ht.parameters)==null?void 0:co.docs,source:{originalSource:`args => <>
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
  </>`,...(fo=(uo=Ht.parameters)==null?void 0:uo.docs)==null?void 0:fo.source}}};var po,mo,ho;Wt.parameters={...Wt.parameters,docs:{...(po=Wt.parameters)==null?void 0:po.docs,source:{originalSource:`args => {
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
}`,...(ho=(mo=Wt.parameters)==null?void 0:mo.docs)==null?void 0:ho.source}}};const Cd=["Default","Empty","NoNavigation","NoNavigationWithButtons","BreakpointXL","WithMobileNavTree","WithButtons","WithMenuColumns","ExpandOnHover","Partner","AnimatedTitle"];export{Wt as AnimatedTitle,jt as BreakpointXL,Rt as Default,Dt as Empty,qt as ExpandOnHover,Mt as NoNavigation,Ft as NoNavigationWithButtons,Ht as Partner,Ut as WithButtons,$t as WithMenuColumns,zt as WithMobileNavTree,Cd as __namedExportsOrder,_d as default};
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
/*! @license DOMPurify 3.3.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.2/LICENSE */
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
