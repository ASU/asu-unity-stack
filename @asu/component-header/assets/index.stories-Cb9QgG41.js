import{r as G,R as kt}from"./index-B2SEcK1p.js";import{g as fo}from"./_commonjsHelpers-B3tUAs5q.js";var po={exports:{}},An={};var $s=G,qs=Symbol.for("react.element"),Hs=Symbol.for("react.fragment"),Ws=Object.prototype.hasOwnProperty,Bs=$s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gs={key:!0,ref:!0,__self:!0,__source:!0};function mo(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ws.call(t,r)&&!Gs.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:qs,type:e,key:i,ref:o,props:a,_owner:Bs.current}}An.Fragment=Hs;An.jsx=mo;An.jsxs=mo;po.exports=An;var p=po.exports,ho={exports:{}},Ys="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Xs=Ys,Vs=Xs;function go(){}function yo(){}yo.resetWarningCache=go;var Ks=function(){function e(r,a,i,o,l,f){if(f!==Vs){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:yo,resetWarningCache:go};return n.PropTypes=n,n};ho.exports=Ks();var Zs=ho.exports;const d=fo(Zs),Ia={alt:d.string,title:d.string,src:d.string,mobileSrc:d.string,brandLink:d.string},un={baseUrl:d.string,parentOrg:d.string,parentOrgUrl:d.string,animate:d.bool},nn={loggedIn:d.bool,loginLink:d.string,logoutLink:d.string,userName:d.string},Sn={text:d.string.isRequired,color:d.oneOf(["gold","maroon","light","dark"]),href:d.string.isRequired,classes:d.string,onClick:d.func},br=d.shape({id:d.number,href:d.string,text:d.string,type:d.string,selected:d.bool,items:d.arrayOf(d.arrayOf(d.object)),buttons:d.arrayOf(d.shape(Sn)),class:d.string}),vo={isPartner:d.bool,navTree:d.arrayOf(br),partnerLogo:d.shape(Ia),logo:d.shape(Ia),title:d.string,parentOrg:un.parentOrg,parentOrgUrl:un.parentOrgUrl,baseUrl:un.baseUrl,loggedIn:nn.loggedIn,userName:nn.userName,loginLink:nn.loginLink,onLoginClick:d.func,logoutLink:nn.logoutLink,onLogoutClick:d.func,buttons:d.arrayOf(d.shape(Sn)),breakpoint:d.oneOf(["Lg","Xl"]),animateTitle:d.bool,expandOnHover:d.bool,mobileNavTree:d.arrayOf(br),hasNavigation:d.bool,searchUrl:d.string,site:d.string,renderDiv:d.oneOf(["true","false"])};var bo={exports:{}},Y={};var Yr=Symbol.for("react.transitional.element"),Xr=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),Tn=Symbol.for("react.strict_mode"),En=Symbol.for("react.profiler"),_n=Symbol.for("react.consumer"),Cn=Symbol.for("react.context"),On=Symbol.for("react.forward_ref"),Pn=Symbol.for("react.suspense"),Nn=Symbol.for("react.suspense_list"),Ln=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),Qs=Symbol.for("react.offscreen"),Js=Symbol.for("react.client.reference");function Ie(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Yr:switch(e=e.type,e){case kn:case En:case Tn:case Pn:case Nn:return e;default:switch(e=e&&e.$$typeof,e){case Cn:case On:case In:case Ln:return e;case _n:return e;default:return t}}case Xr:return t}}}Y.ContextConsumer=_n;Y.ContextProvider=Cn;Y.Element=Yr;Y.ForwardRef=On;Y.Fragment=kn;Y.Lazy=In;Y.Memo=Ln;Y.Portal=Xr;Y.Profiler=En;Y.StrictMode=Tn;Y.Suspense=Pn;Y.SuspenseList=Nn;Y.isContextConsumer=function(e){return Ie(e)===_n};Y.isContextProvider=function(e){return Ie(e)===Cn};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr};Y.isForwardRef=function(e){return Ie(e)===On};Y.isFragment=function(e){return Ie(e)===kn};Y.isLazy=function(e){return Ie(e)===In};Y.isMemo=function(e){return Ie(e)===Ln};Y.isPortal=function(e){return Ie(e)===Xr};Y.isProfiler=function(e){return Ie(e)===En};Y.isStrictMode=function(e){return Ie(e)===Tn};Y.isSuspense=function(e){return Ie(e)===Pn};Y.isSuspenseList=function(e){return Ie(e)===Nn};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===kn||e===En||e===Tn||e===Pn||e===Nn||e===Qs||typeof e=="object"&&e!==null&&(e.$$typeof===In||e.$$typeof===Ln||e.$$typeof===Cn||e.$$typeof===_n||e.$$typeof===On||e.$$typeof===Js||e.getModuleId!==void 0)};Y.typeOf=Ie;bo.exports=Y;var xo=bo.exports;function el(e){function t(C,v,E,O,u){for(var I=0,b=0,X=0,q=0,H,j,oe=0,ae=0,U,Q=U=H=0,$=0,ie=0,Ce=0,ne=0,Be=E.length,Je=Be-1,Se,D="",V="",Ge="",Fe="",ve;$<Be;){if(j=E.charCodeAt($),$===Je&&b+q+X+I!==0&&(b!==0&&(j=b===47?10:47),q=X=I=0,Be++,Je++),b+q+X+I===0){if($===Je&&(0<ie&&(D=D.replace(T,"")),0<D.trim().length)){switch(j){case 32:case 9:case 59:case 13:case 10:break;default:D+=E.charAt($)}j=59}switch(j){case 123:for(D=D.trim(),H=D.charCodeAt(0),U=1,ne=++$;$<Be;){switch(j=E.charCodeAt($)){case 123:U++;break;case 125:U--;break;case 47:switch(j=E.charCodeAt($+1)){case 42:case 47:e:{for(Q=$+1;Q<Je;++Q)switch(E.charCodeAt(Q)){case 47:if(j===42&&E.charCodeAt(Q-1)===42&&$+2!==Q){$=Q+1;break e}break;case 10:if(j===47){$=Q+1;break e}}$=Q}}break;case 91:j++;case 40:j++;case 34:case 39:for(;$++<Je&&E.charCodeAt($)!==j;);}if(U===0)break;$++}switch(U=E.substring(ne,$),H===0&&(H=(D=D.replace(w,"").trim()).charCodeAt(0)),H){case 64:switch(0<ie&&(D=D.replace(T,"")),j=D.charCodeAt(1),j){case 100:case 109:case 115:case 45:ie=v;break;default:ie=He}if(U=t(v,ie,U,j,u+1),ne=U.length,0<Ae&&(ie=n(He,D,Ce),ve=l(3,U,ie,v,te,he,ne,j,u,O),D=ie.join(""),ve!==void 0&&(ne=(U=ve.trim()).length)===0&&(j=0,U="")),0<ne)switch(j){case 115:D=D.replace(J,o);case 100:case 109:case 45:U=D+"{"+U+"}";break;case 107:D=D.replace(S,"$1 $2"),U=D+"{"+U+"}",U=ue===1||ue===2&&i("@"+U,3)?"@-webkit-"+U+"@"+U:"@"+U;break;default:U=D+U,O===112&&(U=(V+=U,""))}else U="";break;default:U=t(v,n(v,D,Ce),U,O,u+1)}Ge+=U,U=Ce=ie=Q=H=0,D="",j=E.charCodeAt(++$);break;case 125:case 59:if(D=(0<ie?D.replace(T,""):D).trim(),1<(ne=D.length))switch(Q===0&&(H=D.charCodeAt(0),H===45||96<H&&123>H)&&(ne=(D=D.replace(" ",":")).length),0<Ae&&(ve=l(1,D,v,C,te,he,V.length,O,u,O))!==void 0&&(ne=(D=ve.trim()).length)===0&&(D="\0\0"),H=D.charCodeAt(0),j=D.charCodeAt(1),H){case 0:break;case 64:if(j===105||j===99){Fe+=D+E.charAt($);break}default:D.charCodeAt(ne-1)!==58&&(V+=a(D,H,j,D.charCodeAt(2)))}Ce=ie=Q=H=0,D="",j=E.charCodeAt(++$)}}switch(j){case 13:case 10:b===47?b=0:1+H===0&&O!==107&&0<D.length&&(ie=1,D+="\0"),0<Ae*We&&l(0,D,v,C,te,he,V.length,O,u,O),he=1,te++;break;case 59:case 125:if(b+q+X+I===0){he++;break}default:switch(he++,Se=E.charAt($),j){case 9:case 32:if(q+I+b===0)switch(oe){case 44:case 58:case 9:case 32:Se="";break;default:j!==32&&(Se=" ")}break;case 0:Se="\\0";break;case 12:Se="\\f";break;case 11:Se="\\v";break;case 38:q+b+I===0&&(ie=Ce=1,Se="\f"+Se);break;case 108:if(q+b+I+we===0&&0<Q)switch($-Q){case 2:oe===112&&E.charCodeAt($-3)===58&&(we=oe);case 8:ae===111&&(we=ae)}break;case 58:q+b+I===0&&(Q=$);break;case 44:b+X+q+I===0&&(ie=1,Se+="\r");break;case 34:case 39:b===0&&(q=q===j?0:q===0?j:q);break;case 91:q+b+X===0&&I++;break;case 93:q+b+X===0&&I--;break;case 41:q+b+I===0&&X--;break;case 40:if(q+b+I===0){if(H===0)switch(2*oe+3*ae){case 533:break;default:H=1}X++}break;case 64:b+X+q+I+Q+U===0&&(U=1);break;case 42:case 47:if(!(0<q+I+X))switch(b){case 0:switch(2*j+3*E.charCodeAt($+1)){case 235:b=47;break;case 220:ne=$,b=42}break;case 42:j===47&&oe===42&&ne+2!==$&&(E.charCodeAt(ne+2)===33&&(V+=E.substring(ne,$+1)),Se="",b=0)}}b===0&&(D+=Se)}ae=oe,oe=j,$++}if(ne=V.length,0<ne){if(ie=v,0<Ae&&(ve=l(2,V,ie,C,te,he,ne,O,u,O),ve!==void 0&&(V=ve).length===0))return Fe+V+Ge;if(V=ie.join(",")+"{"+V+"}",ue*we!==0){switch(ue!==2||i(V,2)||(we=0),we){case 111:V=V.replace(L,":-moz-$1")+V;break;case 112:V=V.replace(M,"::-webkit-input-$1")+V.replace(M,"::-moz-$1")+V.replace(M,":-ms-input-$1")+V}we=0}}return Fe+V+Ge}function n(C,v,E){var O=v.trim().split(h);v=O;var u=O.length,I=C.length;switch(I){case 0:case 1:var b=0;for(C=I===0?"":C[0]+" ";b<u;++b)v[b]=r(C,v[b],E).trim();break;default:var X=b=0;for(v=[];b<u;++b)for(var q=0;q<I;++q)v[X++]=r(C[q]+" ",O[b],E).trim()}return v}function r(C,v,E){var O=v.charCodeAt(0);switch(33>O&&(O=(v=v.trim()).charCodeAt(0)),O){case 38:return v.replace(k,"$1"+C.trim());case 58:return C.trim()+v.replace(k,"$1"+C.trim());default:if(0<1*E&&0<v.indexOf("\f"))return v.replace(k,(C.charCodeAt(0)===58?"":"$1")+C.trim())}return C+v}function a(C,v,E,O){var u=C+";",I=2*v+3*E+4*O;if(I===944){C=u.indexOf(":",9)+1;var b=u.substring(C,u.length-1).trim();return b=u.substring(0,C).trim()+b+";",ue===1||ue===2&&i(b,1)?"-webkit-"+b+b:b}if(ue===0||ue===2&&!i(u,1))return u;switch(I){case 1015:return u.charCodeAt(10)===97?"-webkit-"+u+u:u;case 951:return u.charCodeAt(3)===116?"-webkit-"+u+u:u;case 963:return u.charCodeAt(5)===110?"-webkit-"+u+u:u;case 1009:if(u.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+u+u;case 978:return"-webkit-"+u+"-moz-"+u+u;case 1019:case 983:return"-webkit-"+u+"-moz-"+u+"-ms-"+u+u;case 883:if(u.charCodeAt(8)===45)return"-webkit-"+u+u;if(0<u.indexOf("image-set(",11))return u.replace(Re,"$1-webkit-$2")+u;break;case 932:if(u.charCodeAt(4)===45)switch(u.charCodeAt(5)){case 103:return"-webkit-box-"+u.replace("-grow","")+"-webkit-"+u+"-ms-"+u.replace("grow","positive")+u;case 115:return"-webkit-"+u+"-ms-"+u.replace("shrink","negative")+u;case 98:return"-webkit-"+u+"-ms-"+u.replace("basis","preferred-size")+u}return"-webkit-"+u+"-ms-"+u+u;case 964:return"-webkit-"+u+"-ms-flex-"+u+u;case 1023:if(u.charCodeAt(8)!==99)break;return b=u.substring(u.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+b+"-webkit-"+u+"-ms-flex-pack"+b+u;case 1005:return A.test(u)?u.replace(R,":-webkit-")+u.replace(R,":-moz-")+u:u;case 1e3:switch(b=u.substring(13).trim(),v=b.indexOf("-")+1,b.charCodeAt(0)+b.charCodeAt(v)){case 226:b=u.replace(F,"tb");break;case 232:b=u.replace(F,"tb-rl");break;case 220:b=u.replace(F,"lr");break;default:return u}return"-webkit-"+u+"-ms-"+b+u;case 1017:if(u.indexOf("sticky",9)===-1)break;case 975:switch(v=(u=C).length-10,b=(u.charCodeAt(v)===33?u.substring(0,v):u).substring(C.indexOf(":",7)+1).trim(),I=b.charCodeAt(0)+(b.charCodeAt(7)|0)){case 203:if(111>b.charCodeAt(8))break;case 115:u=u.replace(b,"-webkit-"+b)+";"+u;break;case 207:case 102:u=u.replace(b,"-webkit-"+(102<I?"inline-":"")+"box")+";"+u.replace(b,"-webkit-"+b)+";"+u.replace(b,"-ms-"+b+"box")+";"+u}return u+";";case 938:if(u.charCodeAt(5)===45)switch(u.charCodeAt(6)){case 105:return b=u.replace("-items",""),"-webkit-"+u+"-webkit-box-"+b+"-ms-flex-"+b+u;case 115:return"-webkit-"+u+"-ms-flex-item-"+u.replace(Z,"")+u;default:return"-webkit-"+u+"-ms-flex-line-pack"+u.replace("align-content","").replace(Z,"")+u}break;case 973:case 989:if(u.charCodeAt(3)!==45||u.charCodeAt(4)===122)break;case 931:case 953:if(ce.test(C)===!0)return(b=C.substring(C.indexOf(":")+1)).charCodeAt(0)===115?a(C.replace("stretch","fill-available"),v,E,O).replace(":fill-available",":stretch"):u.replace(b,"-webkit-"+b)+u.replace(b,"-moz-"+b.replace("fill-",""))+u;break;case 962:if(u="-webkit-"+u+(u.charCodeAt(5)===102?"-ms-"+u:"")+u,E+O===211&&u.charCodeAt(13)===105&&0<u.indexOf("transform",10))return u.substring(0,u.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+u}return u}function i(C,v){var E=C.indexOf(v===1?":":"{"),O=C.substring(0,v!==3?E:10);return E=C.substring(E+1,C.length-1),st(v!==2?O:O.replace(re,"$1"),E,v)}function o(C,v){var E=a(v,v.charCodeAt(0),v.charCodeAt(1),v.charCodeAt(2));return E!==v+";"?E.replace(ee," or ($1)").substring(4):"("+v+")"}function l(C,v,E,O,u,I,b,X,q,H){for(var j=0,oe=v,ae;j<Ae;++j)switch(ae=Te[j].call(m,C,oe,E,O,u,I,b,X,q,H)){case void 0:case!1:case!0:case null:break;default:oe=ae}if(oe!==v)return oe}function f(C){switch(C){case void 0:case null:Ae=Te.length=0;break;default:if(typeof C=="function")Te[Ae++]=C;else if(typeof C=="object")for(var v=0,E=C.length;v<E;++v)f(C[v]);else We=!!C|0}return f}function c(C){return C=C.prefix,C!==void 0&&(st=null,C?typeof C!="function"?ue=1:(ue=2,st=C):ue=0),c}function m(C,v){var E=C;if(33>E.charCodeAt(0)&&(E=E.trim()),lt=E,E=[lt],0<Ae){var O=l(-1,v,E,E,te,he,0,0,0,0);O!==void 0&&typeof O=="string"&&(v=O)}var u=t(He,E,v,0,0);return 0<Ae&&(O=l(-2,u,E,E,te,he,u.length,0,0,0),O!==void 0&&(u=O)),lt="",we=0,he=te=1,u}var w=/^\0+/g,T=/[\0\r\f]/g,R=/: */g,A=/zoo|gra/,_=/([,: ])(transform)/g,h=/,\r+?/g,k=/([\t\r\n ])*\f?&/g,S=/@(k\w+)\s*(\S*)\s*/,M=/::(place)/g,L=/:(read-only)/g,F=/[svh]\w+-[tblr]{2}/,J=/\(\s*(.*)\s*\)/g,ee=/([\s\S]*?);/g,Z=/-self|flex-/g,re=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ce=/stretch|:\s*\w+\-(?:conte|avail)/,Re=/([^-])(image-set\()/,he=1,te=1,we=0,ue=1,He=[],Te=[],Ae=0,st=null,We=0,lt="";return m.use=f,m.set=c,e!==void 0&&c(e),m}var tl={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function nl(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var rl=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ra=nl(function(e){return rl.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),wo={exports:{}},B={};var de=typeof Symbol=="function"&&Symbol.for,Vr=de?Symbol.for("react.element"):60103,Kr=de?Symbol.for("react.portal"):60106,Rn=de?Symbol.for("react.fragment"):60107,Mn=de?Symbol.for("react.strict_mode"):60108,Dn=de?Symbol.for("react.profiler"):60114,Fn=de?Symbol.for("react.provider"):60109,jn=de?Symbol.for("react.context"):60110,Zr=de?Symbol.for("react.async_mode"):60111,zn=de?Symbol.for("react.concurrent_mode"):60111,Un=de?Symbol.for("react.forward_ref"):60112,$n=de?Symbol.for("react.suspense"):60113,al=de?Symbol.for("react.suspense_list"):60120,qn=de?Symbol.for("react.memo"):60115,Hn=de?Symbol.for("react.lazy"):60116,il=de?Symbol.for("react.block"):60121,ol=de?Symbol.for("react.fundamental"):60117,sl=de?Symbol.for("react.responder"):60118,ll=de?Symbol.for("react.scope"):60119;function Ee(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Vr:switch(e=e.type,e){case Zr:case zn:case Rn:case Dn:case Mn:case $n:return e;default:switch(e=e&&e.$$typeof,e){case jn:case Un:case Hn:case qn:case Fn:return e;default:return t}}case Kr:return t}}}function Ao(e){return Ee(e)===zn}B.AsyncMode=Zr;B.ConcurrentMode=zn;B.ContextConsumer=jn;B.ContextProvider=Fn;B.Element=Vr;B.ForwardRef=Un;B.Fragment=Rn;B.Lazy=Hn;B.Memo=qn;B.Portal=Kr;B.Profiler=Dn;B.StrictMode=Mn;B.Suspense=$n;B.isAsyncMode=function(e){return Ao(e)||Ee(e)===Zr};B.isConcurrentMode=Ao;B.isContextConsumer=function(e){return Ee(e)===jn};B.isContextProvider=function(e){return Ee(e)===Fn};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr};B.isForwardRef=function(e){return Ee(e)===Un};B.isFragment=function(e){return Ee(e)===Rn};B.isLazy=function(e){return Ee(e)===Hn};B.isMemo=function(e){return Ee(e)===qn};B.isPortal=function(e){return Ee(e)===Kr};B.isProfiler=function(e){return Ee(e)===Dn};B.isStrictMode=function(e){return Ee(e)===Mn};B.isSuspense=function(e){return Ee(e)===$n};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Rn||e===zn||e===Dn||e===Mn||e===$n||e===al||typeof e=="object"&&e!==null&&(e.$$typeof===Hn||e.$$typeof===qn||e.$$typeof===Fn||e.$$typeof===jn||e.$$typeof===Un||e.$$typeof===ol||e.$$typeof===sl||e.$$typeof===ll||e.$$typeof===il)};B.typeOf=Ee;wo.exports=B;var cl=wo.exports,Qr=cl,ul={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fl={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dl={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},So={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jr={};Jr[Qr.ForwardRef]=dl;Jr[Qr.Memo]=So;function Ma(e){return Qr.isMemo(e)?So:Jr[e.$$typeof]||ul}var pl=Object.defineProperty,ml=Object.getOwnPropertyNames,Da=Object.getOwnPropertySymbols,hl=Object.getOwnPropertyDescriptor,gl=Object.getPrototypeOf,Fa=Object.prototype;function ko(e,t,n){if(typeof t!="string"){if(Fa){var r=gl(t);r&&r!==Fa&&ko(e,r,n)}var a=ml(t);Da&&(a=a.concat(Da(t)));for(var i=Ma(e),o=Ma(t),l=0;l<a.length;++l){var f=a[l];if(!fl[f]&&!(n&&n[f])&&!(o&&o[f])&&!(i&&i[f])){var c=hl(t,f);try{pl(e,f,c)}catch{}}}}return e}var yl=ko;const vl=fo(yl);var To={},Pe={};function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ja=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},xr=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!xo.typeOf(e)},gn=Object.freeze([]),nt=Object.freeze({});function Bt(e){return typeof e=="function"}function za(e){return e.displayName||e.name||"Component"}function ea(e){return e&&typeof e.styledComponentId=="string"}var wt=typeof To<"u"&&Pe!==void 0&&(Pe.REACT_APP_SC_ATTR||Pe.SC_ATTR)||"data-styled",ta=typeof window<"u"&&"HTMLElement"in window,bl=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof To<"u"&&Pe!==void 0&&(Pe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pe.REACT_APP_SC_DISABLE_SPEEDY!==""?Pe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pe.REACT_APP_SC_DISABLE_SPEEDY:Pe.SC_DISABLE_SPEEDY!==void 0&&Pe.SC_DISABLE_SPEEDY!==""&&Pe.SC_DISABLE_SPEEDY!=="false"&&Pe.SC_DISABLE_SPEEDY));function Xt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var xl=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,i=a.length,o=i;n>=o;)(o<<=1)<0&&Xt(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(a),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var f=this.indexOfGroup(n+1),c=0,m=r.length;c<m;c++)this.tag.insertRule(f,r[c])&&(this.groupSizes[n]++,f++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),i=a+r;this.groupSizes[n]=0;for(var o=a;o<i;o++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],i=this.indexOfGroup(n),o=i+a,l=i;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),fn=new Map,yn=new Map,qt=1,rn=function(e){if(fn.has(e))return fn.get(e);for(;yn.has(qt);)qt++;var t=qt++;return fn.set(e,t),yn.set(t,e),t},wl=function(e){return yn.get(e)},Al=function(e,t){t>=qt&&(qt=t+1),fn.set(e,t),yn.set(t,e)},Sl="style["+wt+'][data-styled-version="5.3.11"]',kl=new RegExp("^"+wt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Tl=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},El=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var l=o.match(kl);if(l){var f=0|parseInt(l[1],10),c=l[2];f!==0&&(Al(c,f),Tl(e,c,l[3]),e.getTag().insertRules(f,r)),r.length=0}else r.push(o)}}},_l=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Eo=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){for(var f=l.childNodes,c=f.length;c>=0;c--){var m=f[c];if(m&&m.nodeType===1&&m.hasAttribute(wt))return m}}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(wt,"active"),r.setAttribute("data-styled-version","5.3.11");var o=_l();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},Cl=function(){function e(n){var r=this.element=Eo(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var f=i[o];if(f.ownerNode===a)return f}Xt(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Ol=function(){function e(n){var r=this.element=Eo(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(a,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Pl=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Ua=ta,Nl={isServer:!ta,useCSSOMInjection:!bl},_o=function(){function e(n,r,a){n===void 0&&(n=nt),r===void 0&&(r={}),this.options=Ve({},Nl,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&ta&&Ua&&(Ua=!1,function(i){for(var o=document.querySelectorAll(Sl),l=0,f=o.length;l<f;l++){var c=o[l];c&&c.getAttribute(wt)!=="active"&&(El(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return rn(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ve({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,i=r.useCSSOMInjection,o=r.target,n=a?new Pl(o):i?new Cl(o):new Ol(o),new xl(n)));var n,r,a,i,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(rn(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(rn(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(rn(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,i="",o=0;o<a;o++){var l=wl(o);if(l!==void 0){var f=n.names.get(l),c=r.getGroup(o);if(f&&c&&f.size){var m=wt+".g"+o+'[id="'+l+'"]',w="";f!==void 0&&f.forEach(function(T){T.length>0&&(w+=T+",")}),i+=""+c+m+'{content:"'+w+`"}/*!sc*/
`}}}return i}(this)},e}(),Ll=/(a)(d)/gi,$a=function(e){return String.fromCharCode(e+(e>25?39:97))};function wr(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$a(t%52)+n;return($a(t%52)+n).replace(Ll,"$1-$2")}var yt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Co=function(e){return yt(5381,e)};function Il(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Bt(n)&&!ea(n))return!1}return!0}var Rl=Co("5.3.11"),Ml=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Il(t),this.componentId=n,this.baseHash=yt(Rl,n),this.baseStyle=r,_o.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))i.push(this.staticRulesId);else{var o=At(this.rules,t,n,r).join(""),l=wr(yt(this.baseHash,o)>>>0);if(!n.hasNameForId(a,l)){var f=r(o,"."+l,void 0,a);n.insertRules(a,l,f)}i.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,m=yt(this.baseHash,r.hash),w="",T=0;T<c;T++){var R=this.rules[T];if(typeof R=="string")w+=R;else if(R){var A=At(R,t,n,r),_=Array.isArray(A)?A.join(""):A;m=yt(m,_+T),w+=_}}if(w){var h=wr(m>>>0);if(!n.hasNameForId(a,h)){var k=r(w,"."+h,void 0,a);n.insertRules(a,h,k)}i.push(h)}}return i.join(" ")},e}(),Dl=/^\s*\/\/.*$/gm,Fl=[":","[",".","#"];function jl(e){var t,n,r,a,i=nt,o=i.options,l=o===void 0?nt:o,f=i.plugins,c=f===void 0?gn:f,m=new el(l),w=[],T=function(_){function h(k){if(k)try{_(k+"}")}catch{}}return function(k,S,M,L,F,J,ee,Z,re,ce){switch(k){case 1:if(re===0&&S.charCodeAt(0)===64)return _(S+";"),"";break;case 2:if(Z===0)return S+"/*|*/";break;case 3:switch(Z){case 102:case 112:return _(M[0]+S),"";default:return S+(ce===0?"/*|*/":"")}case-2:S.split("/*|*/}").forEach(h)}}}(function(_){w.push(_)}),R=function(_,h,k){return h===0&&Fl.indexOf(k[n.length])!==-1||k.match(a)?_:"."+t};function A(_,h,k,S){S===void 0&&(S="&");var M=_.replace(Dl,""),L=h&&k?k+" "+h+" { "+M+" }":M;return t=S,n=h,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),m(k||!h?"":h,L)}return m.use([].concat(c,[function(_,h,k){_===2&&k.length&&k[0].lastIndexOf(n)>0&&(k[0]=k[0].replace(r,R))},T,function(_){if(_===-2){var h=w;return w=[],h}}])),A.hash=c.length?c.reduce(function(_,h){return h.name||Xt(15),yt(_,h.name)},5381).toString():"",A}var Oo=kt.createContext();Oo.Consumer;var Po=kt.createContext(),zl=(Po.Consumer,new _o),Ar=jl();function Ul(){return G.useContext(Oo)||zl}function $l(){return G.useContext(Po)||Ar}var ql=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=Ar);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.toString=function(){return Xt(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ar),this.name+t.hash},e}(),Hl=/([A-Z])/,Wl=/([A-Z])/g,Bl=/^ms-/,Gl=function(e){return"-"+e.toLowerCase()};function qa(e){return Hl.test(e)?e.replace(Wl,Gl).replace(Bl,"-ms-"):e}var Ha=function(e){return e==null||e===!1||e===""};function At(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,l=e.length;o<l;o+=1)(a=At(e[o],t,n,r))!==""&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}if(Ha(e))return"";if(ea(e))return"."+e.styledComponentId;if(Bt(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var f=e(t);return At(f,t,n,r)}var c;return e instanceof ql?n?(e.inject(n,r),e.getName(r)):e:xr(e)?function m(w,T){var R,A,_=[];for(var h in w)w.hasOwnProperty(h)&&!Ha(w[h])&&(Array.isArray(w[h])&&w[h].isCss||Bt(w[h])?_.push(qa(h)+":",w[h],";"):xr(w[h])?_.push.apply(_,m(w[h],h)):_.push(qa(h)+": "+(R=h,(A=w[h])==null||typeof A=="boolean"||A===""?"":typeof A!="number"||A===0||R in tl||R.startsWith("--")?String(A).trim():A+"px")+";"));return T?[T+" {"].concat(_,["}"]):_}(e):e.toString()}var Wa=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Yl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Bt(e)||xr(e)?Wa(At(ja(gn,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Wa(At(ja(e,n)))}var Xl=function(e,t,n){return n===void 0&&(n=nt),e.theme!==n.theme&&e.theme||t||n.theme},Vl=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kl=/(^-|-$)/g;function rr(e){return e.replace(Vl,"-").replace(Kl,"")}var Zl=function(e){return wr(Co(e)>>>0)};function an(e){return typeof e=="string"&&!0}var Sr=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ql=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Jl(e,t,n){var r=e[n];Sr(t)&&Sr(r)?No(r,t):e[n]=t}function No(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(Sr(o))for(var l in o)Ql(l)&&Jl(e,o[l],l)}return e}var Lo=kt.createContext();Lo.Consumer;var ar={};function Io(e,t,n){var r=ea(e),a=!an(e),i=t.attrs,o=i===void 0?gn:i,l=t.componentId,f=l===void 0?function(S,M){var L=typeof S!="string"?"sc":rr(S);ar[L]=(ar[L]||0)+1;var F=L+"-"+Zl("5.3.11"+L+ar[L]);return M?M+"-"+F:F}(t.displayName,t.parentComponentId):l,c=t.displayName,m=c===void 0?function(S){return an(S)?"styled."+S:"Styled("+za(S)+")"}(e):c,w=t.displayName&&t.componentId?rr(t.displayName)+"-"+t.componentId:t.componentId||f,T=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,R=t.shouldForwardProp;r&&e.shouldForwardProp&&(R=t.shouldForwardProp?function(S,M,L){return e.shouldForwardProp(S,M,L)&&t.shouldForwardProp(S,M,L)}:e.shouldForwardProp);var A,_=new Ml(n,w,r?e.componentStyle:void 0),h=_.isStatic&&o.length===0,k=function(S,M){return function(L,F,J,ee){var Z=L.attrs,re=L.componentStyle,ce=L.defaultProps,Re=L.foldedComponentIds,he=L.shouldForwardProp,te=L.styledComponentId,we=L.target,ue=function(O,u,I){O===void 0&&(O=nt);var b=Ve({},u,{theme:O}),X={};return I.forEach(function(q){var H,j,oe,ae=q;for(H in Bt(ae)&&(ae=ae(b)),ae)b[H]=X[H]=H==="className"?(j=X[H],oe=ae[H],j&&oe?j+" "+oe:j||oe):ae[H]}),[b,X]}(Xl(F,G.useContext(Lo),ce)||nt,F,Z),He=ue[0],Te=ue[1],Ae=function(O,u,I,b){var X=Ul(),q=$l(),H=u?O.generateAndInjectStyles(nt,X,q):O.generateAndInjectStyles(I,X,q);return H}(re,ee,He),st=J,We=Te.$as||F.$as||Te.as||F.as||we,lt=an(We),C=Te!==F?Ve({},F,{},Te):F,v={};for(var E in C)E[0]!=="$"&&E!=="as"&&(E==="forwardedAs"?v.as=C[E]:(he?he(E,Ra,We):!lt||Ra(E))&&(v[E]=C[E]));return F.style&&Te.style!==F.style&&(v.style=Ve({},F.style,{},Te.style)),v.className=Array.prototype.concat(Re,te,Ae!==te?Ae:null,F.className,Te.className).filter(Boolean).join(" "),v.ref=st,G.createElement(We,v)}(A,S,M,h)};return k.displayName=m,(A=kt.forwardRef(k)).attrs=T,A.componentStyle=_,A.displayName=m,A.shouldForwardProp=R,A.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):gn,A.styledComponentId=w,A.target=r?e.target:e,A.withComponent=function(S){var M=t.componentId,L=function(J,ee){if(J==null)return{};var Z,re,ce={},Re=Object.keys(J);for(re=0;re<Re.length;re++)Z=Re[re],ee.indexOf(Z)>=0||(ce[Z]=J[Z]);return ce}(t,["componentId"]),F=M&&M+"-"+(an(S)?S:rr(za(S)));return Io(S,Ve({},L,{attrs:T,componentId:F}),n)},Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?No({},e.defaultProps,S):S}}),Object.defineProperty(A,"toString",{value:function(){return"."+A.styledComponentId}}),a&&vl(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),A}var be=function(e){return function t(n,r,a){if(a===void 0&&(a=nt),!xo.isValidElementType(r))return Xt(1,String(r));var i=function(){return n(r,a,Yl.apply(void 0,arguments))};return i.withConfig=function(o){return t(n,r,Ve({},a,{},o))},i.attrs=function(o){return t(n,r,Ve({},a,{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)}))},i}(Io,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){be[e]=be(e)});const ec=be.a`
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
`,Tt=({href:e,color:t,text:n,classes:r,onClick:a})=>p.jsx(ec,{href:e,...e?{}:{tabIndex:0},className:`button-${t} ${r??""}`,onClick:a,children:n});Tt.propTypes={...Sn};Tt.__docgenInfo={description:`@param {ButtonProps} props
@returns {JSX.Element}`,methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!0},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1}}};const Vt=[{href:"/",text:"Home",type:"icon-home",selected:!0,class:"test-class"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu",text:"Sublink 2"},{href:"https://campus.asu.edu",text:"Sublink 3"},{href:"https://campus.asu.edu",text:"Sublink 4"},{href:"https://asuonline.asu.edu/",text:"Sublink 5"},{href:"https://havasu.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 3",href:"#"},{text:"Link option 4",href:"#"},{text:"Link option 5",href:"#"},{text:"Link option 6",href:"#",onClick:()=>{alert("On Click Callback")}},{text:"Link option 7",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 8",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]}],tc=[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",selected:!0},{text:"Link option 3",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu/",text:"Sublink 2"},{href:"https://campus.asu.edu/",text:"Sublink 3"},{href:"https://campus.asu.edu/",text:"Sublink 4"},{href:"https://campus.asu.edu/",text:"Sublink 5"},{href:"https://asuonline.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 4",href:"#"}],Ro=[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#"},{text:"Link option 2",href:"/",items:[[{href:"https://www.asu.edu/",text:"A test navigation item"},{href:"https://www.asu.edu/",text:"Mauris viverra, sem nec"},{href:"https://www.asu.edu/?feature=athletics",text:"Massa nunc dictum nam venenatis"},{href:"https://www.asu.edu/?feature=alumni",text:"Alumni"},{href:"https://www.asu.edu/?feature=giving",text:"Giving"},{href:"https://www.asu.edu/?feature=president",text:"President"},{href:"https://www.asu.edu/about",text:"About ASU"}]]},{text:"Link option 3",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 4",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column one"},{href:"https://havasu.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Phasellus egestas nec est "},{href:"https://campus.asu.edu/tempe/",text:"Pellentesque et mollis"},{href:"https://campus.asu.edu/west/",text:"Cras congue"},{href:"https://campus.asu.edu/polytechnic/",text:"Cras ut malesuada nisl"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Map"},{href:"https://campus.asu.edu/tempe/",text:"Tempe"},{href:"https://campus.asu.edu/west/",text:"West"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 5",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"Lake Havasu"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 6",href:"#",buttons:[{text:"CTA One",href:"https://asu.edu",color:"maroon"},{text:"CTA Two",href:"https://asu.edu",color:"gold"}],items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"The Lake Havasu Campus"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Call to Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column Five"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Buildings and directory"},{href:"https://campus.asu.edu/tempe/",text:"Some good news"},{href:"https://campus.asu.edu/west/",selected:!0,text:"Directory Admin Tools"}]]}],nc=[{href:"/",text:"This",type:"icon-home",class:"home",selected:!0},{text:"Link option 1",href:"https://webapp4.asu.edu/myasu/"},{text:"Link option 2",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column Two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"}]]}];function rc({packageName:e="",component:t="",type:n="",configuration:r={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}}const ac={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},ic={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},oc=ic,sc={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Ba=sc,lc={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},cc={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Mo=cc;function uc(e,t,n){return(t=dc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ga(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ga(Object(n),!0).forEach(function(r){uc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ga(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fc(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function dc(e){var t=fc(e,"string");return typeof t=="symbol"?t:t+""}const Ya=()=>{};let na={},Do={},Fo=null,jo={mark:Ya,measure:Ya};try{typeof window<"u"&&(na=window),typeof document<"u"&&(Do=document),typeof MutationObserver<"u"&&(Fo=MutationObserver),typeof performance<"u"&&(jo=performance)}catch{}const{userAgent:Xa=""}=na.navigator||{},at=na,K=Do,Va=Fo,on=jo;at.document;const Qe=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",zo=~Xa.indexOf("MSIE")||~Xa.indexOf("Trident/");var pc=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,mc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Uo={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},hc={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},$o=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ye="classic",Wn="duotone",gc="sharp",yc="sharp-duotone",qo=[ye,Wn,gc,yc],vc={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},bc={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},xc=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),wc={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ac=["fak","fa-kit","fakd","fa-kit-duotone"],Ka={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Sc=["kit"],kc={kit:{"fa-kit":"fak"}},Tc=["fak","fakd"],Ec={kit:{fak:"fa-kit"}},Za={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},sn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_c=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Cc=["fak","fa-kit","fakd","fa-kit-duotone"],Oc={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Pc={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Nc={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},kr={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Lc=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Tr=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",..._c,...Lc],Ic=["solid","regular","light","thin","duotone","brands"],Ho=[1,2,3,4,5,6,7,8,9,10],Rc=Ho.concat([11,12,13,14,15,16,17,18,19,20]),Mc=[...Object.keys(Nc),...Ic,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",sn.GROUP,sn.SWAP_OPACITY,sn.PRIMARY,sn.SECONDARY].concat(Ho.map(e=>"".concat(e,"x"))).concat(Rc.map(e=>"w-".concat(e))),Dc={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Ke="___FONT_AWESOME___",Er=16,Wo="fa",Bo="svg-inline--fa",pt="data-fa-i2svg",_r="data-fa-pseudo-element",Fc="data-fa-pseudo-element-pending",ra="data-prefix",aa="data-icon",Qa="fontawesome-i2svg",jc="async",zc=["HTML","HEAD","STYLE","SCRIPT"],Go=(()=>{try{return!0}catch{return!1}})();function Kt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[ye]}})}const Yo=g({},Uo);Yo[ye]=g(g(g(g({},{"fa-duotone":"duotone"}),Uo[ye]),Ka.kit),Ka["kit-duotone"]);const Uc=Kt(Yo),Cr=g({},wc);Cr[ye]=g(g(g(g({},{duotone:"fad"}),Cr[ye]),Za.kit),Za["kit-duotone"]);const Ja=Kt(Cr),Or=g({},kr);Or[ye]=g(g({},Or[ye]),Ec.kit);const ia=Kt(Or),Pr=g({},Pc);Pr[ye]=g(g({},Pr[ye]),kc.kit);Kt(Pr);const $c=pc,Xo="fa-layers-text",qc=mc,Hc=g({},vc);Kt(Hc);const Wc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ir=hc,Bc=[...Sc,...Mc],Ht=at.FontAwesomeConfig||{};function Gc(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Yc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}K&&typeof K.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=Yc(Gc(n));a!=null&&(Ht[r]=a)});const Vo={styleDefault:"solid",familyDefault:ye,cssPrefix:Wo,replacementClass:Bo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ht.familyPrefix&&(Ht.cssPrefix=Ht.familyPrefix);const St=g(g({},Vo),Ht);St.autoReplaceSvg||(St.observeMutations=!1);const P={};Object.keys(Vo).forEach(e=>{Object.defineProperty(P,e,{enumerable:!0,set:function(t){St[e]=t,Wt.forEach(n=>n(P))},get:function(){return St[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){St.cssPrefix=e,Wt.forEach(t=>t(P))},get:function(){return St.cssPrefix}});at.FontAwesomeConfig=P;const Wt=[];function Xc(e){return Wt.push(e),()=>{Wt.splice(Wt.indexOf(e),1)}}const et=Er,ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vc(e){if(!e||!Qe)return;const t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=K.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return K.head.insertBefore(t,r),e}const Kc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Gt(){let e=12,t="";for(;e-- >0;)t+=Kc[Math.random()*62|0];return t}function Et(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function oa(e){return e.classList?Et(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Ko(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zc(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Ko(e[n]),'" '),"").trim()}function Bn(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function sa(e){return e.size!==ze.size||e.x!==ze.x||e.y!==ze.y||e.rotate!==ze.rotate||e.flipX||e.flipY}function Qc(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:f,path:c}}function Jc(e){let{transform:t,width:n=Er,height:r=Er,startCentered:a=!1}=e,i="";return a&&zo?i+="translate(".concat(t.x/et-n/2,"em, ").concat(t.y/et-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(t.x/et,"em), calc(-50% + ").concat(t.y/et,"em)) "):i+="translate(".concat(t.x/et,"em, ").concat(t.y/et,"em) "),i+="scale(".concat(t.size/et*(t.flipX?-1:1),", ").concat(t.size/et*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var eu=`:root, :host {
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
}`;function Zo(){const e=Wo,t=Bo,n=P.cssPrefix,r=P.replacementClass;let a=eu;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}let ei=!1;function or(){P.autoAddCss&&!ei&&(Vc(Zo()),ei=!0)}var tu={mixout(){return{dom:{css:Zo,insertCss:or}}},hooks(){return{beforeDOMElementCreation(){or()},beforeI2svg(){or()}}}};const Ze=at||{};Ze[Ke]||(Ze[Ke]={});Ze[Ke].styles||(Ze[Ke].styles={});Ze[Ke].hooks||(Ze[Ke].hooks={});Ze[Ke].shims||(Ze[Ke].shims=[]);var Ue=Ze[Ke];const Qo=[],Jo=function(){K.removeEventListener("DOMContentLoaded",Jo),vn=1,Qo.map(e=>e())};let vn=!1;Qe&&(vn=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),vn||K.addEventListener("DOMContentLoaded",Jo));function nu(e){Qe&&(vn?setTimeout(e,0):Qo.push(e))}function Zt(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Ko(e):"<".concat(t," ").concat(Zc(n),">").concat(r.map(Zt).join(""),"</").concat(t,">")}function ti(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var sr=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=n,f,c,m;for(r===void 0?(f=1,m=t[i[0]]):(f=0,m=r);f<o;f++)c=i[f],m=l(m,t[c],c,t);return m};function ru(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Nr(e){const t=ru(e);return t.length===1?t[0].toString(16):null}function au(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ni(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Lr(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=ni(t);typeof Ue.hooks.addPack=="function"&&!r?Ue.hooks.addPack(e,ni(t)):Ue.styles[e]=g(g({},Ue.styles[e]||{}),a),e==="fas"&&Lr("fa",t)}const{styles:Yt,shims:iu}=Ue,es=Object.keys(ia),ou=es.reduce((e,t)=>(e[t]=Object.keys(ia[t]),e),{});let la=null,ts={},ns={},rs={},as={},is={};function su(e){return~Bc.indexOf(e)}function lu(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!su(a)?a:null}const os=()=>{const e=r=>sr(Yt,(a,i,o)=>(a[o]=sr(i,r,{}),a),{});ts=e((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=i}),r)),ns=e((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=i}),r)),is=e((r,a,i)=>{const o=a[2];return r[i]=i,o.forEach(l=>{r[l]=i}),r});const t="far"in Yt||P.autoFetchSvg,n=sr(iu,(r,a)=>{const i=a[0];let o=a[1];const l=a[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});rs=n.names,as=n.unicodes,la=Gn(P.styleDefault,{family:P.familyDefault})};Xc(e=>{la=Gn(e.styleDefault,{family:P.familyDefault})});os();function ca(e,t){return(ts[e]||{})[t]}function cu(e,t){return(ns[e]||{})[t]}function dt(e,t){return(is[e]||{})[t]}function ss(e){return rs[e]||{prefix:null,iconName:null}}function uu(e){const t=as[e],n=ca("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function it(){return la}const ls=()=>({prefix:null,iconName:null,rest:[]});function fu(e){let t=ye;const n=es.reduce((r,a)=>(r[a]="".concat(P.cssPrefix,"-").concat(a),r),{});return qo.forEach(r=>{(e.includes(n[r])||e.some(a=>ou[r].includes(a)))&&(t=r)}),t}function Gn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ye}=t,r=Uc[n][e];if(n===Wn&&!e)return"fad";const a=Ja[n][e]||Ja[n][r],i=e in Ue.styles?e:null;return a||i||null}function du(e){let t=[],n=null;return e.forEach(r=>{const a=lu(P.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function ri(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function Yn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=Tr.concat(Cc),i=ri(e.filter(w=>a.includes(w))),o=ri(e.filter(w=>!Tr.includes(w))),l=i.filter(w=>(r=w,!$o.includes(w))),[f=null]=l,c=fu(i),m=g(g({},du(o)),{},{prefix:Gn(f,{family:c})});return g(g(g({},m),gu({values:e,family:c,styles:Yt,config:P,canonical:m,givenPrefix:r})),pu(n,r,m))}function pu(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const i=t==="fa"?ss(a):{},o=dt(r,a);return a=i.iconName||o||a,r=i.prefix||r,r==="far"&&!Yt.far&&Yt.fas&&!P.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const mu=qo.filter(e=>e!==ye||e!==Wn),hu=Object.keys(kr).filter(e=>e!==ye).map(e=>Object.keys(kr[e])).flat();function gu(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:i={},config:o={}}=e,l=n===Wn,f=t.includes("fa-duotone")||t.includes("fad"),c=o.familyDefault==="duotone",m=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(f||c||m)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&mu.includes(n)&&(Object.keys(i).find(T=>hu.includes(T))||o.autoFetchSvg)){const T=xc.get(n).defaultShortPrefixId;r.prefix=T,r.iconName=dt(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=it()||"fas"),r}class yu{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=g(g({},this.definitions[i]||{}),a[i]),Lr(i,a[i]);const o=ia[ye][i];o&&Lr(o,a[i]),os()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:o,icon:l}=r[a],f=l[2];t[i]||(t[i]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(t[i][c]=l)}),t[i][o]=l}),t}}let ai=[],vt={};const xt={},vu=Object.keys(xt);function bu(e,t){let{mixoutsTo:n}=t;return ai=e,vt={},Object.keys(xt).forEach(r=>{vu.indexOf(r)===-1&&delete xt[r]}),ai.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{vt[o]||(vt[o]=[]),vt[o].push(i[o])})}r.provides&&r.provides(xt)}),n}function Ir(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(vt[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(vt[e]||[]).forEach(i=>{i.apply(null,n)})}function ot(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xt[e]?xt[e].apply(null,t):void 0}function Rr(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||it();if(t)return t=dt(n,t)||t,ti(cs.definitions,n,t)||ti(Ue.styles,n,t)}const cs=new yu,xu=()=>{P.autoReplaceSvg=!1,P.observeMutations=!1,mt("noAuto")},wu={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(mt("beforeI2svg",e),ot("pseudoElements2svg",e),ot("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,nu(()=>{Su({autoReplaceSvgRoot:t}),mt("watch",e)})}},Au={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:dt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Gn(e[0]);return{prefix:n,iconName:dt(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match($c))){const t=Yn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||it(),iconName:dt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=it();return{prefix:t,iconName:dt(t,e)||e}}}},_e={noAuto:xu,config:P,dom:wu,parse:Au,library:cs,findIconDefinition:Rr,toHtml:Zt},Su=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=K}=e;(Object.keys(Ue.styles).length>0||P.autoFetchSvg)&&Qe&&P.autoReplaceSvg&&_e.dom.i2svg({node:t})};function Xn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Zt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Qe)return;const n=K.createElement("div");return n.innerHTML=e.html,n.children}}),e}function ku(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(sa(o)&&n.found&&!r.found){const{width:l,height:f}=n,c={x:l/f/2,y:.5};a.style=Bn(g(g({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Tu(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},a),{},{id:o}),children:r}]}]}function ua(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:l,maskId:f,titleId:c,extra:m,watchable:w=!1}=e,{width:T,height:R}=n.found?n:t,A=Tc.includes(r),_=[P.replacementClass,a?"".concat(P.cssPrefix,"-").concat(a):""].filter(F=>m.classes.indexOf(F)===-1).filter(F=>F!==""||!!F).concat(m.classes).join(" ");let h={children:[],attributes:g(g({},m.attributes),{},{"data-prefix":r,"data-icon":a,class:_,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(R)})};const k=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/R*16*.0625,"em")}:{};w&&(h.attributes[pt]=""),l&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||Gt())},children:[l]}),delete h.attributes.title);const S=g(g({},h),{},{prefix:r,iconName:a,main:t,mask:n,maskId:f,transform:i,symbol:o,styles:g(g({},k),m.styles)}),{children:M,attributes:L}=n.found&&t.found?ot("generateAbstractMask",S)||{children:[],attributes:{}}:ot("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=M,S.attributes=L,o?Tu(S):ku(S)}function ii(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:l=!1}=e,f=g(g(g({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[pt]="");const c=g({},o.styles);sa(a)&&(c.transform=Jc({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const m=Bn(c);m.length>0&&(f.style=m);const w=[];return w.push({tag:"span",attributes:f,children:[t]}),i&&w.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),w}function Eu(e){const{content:t,title:n,extra:r}=e,a=g(g(g({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Bn(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:lr}=Ue;function Mr(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(ir.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ir.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ir.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const _u={found:!1,width:512,height:512};function Cu(e,t){!Go&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Dr(e,t){let n=t;return t==="fa"&&P.styleDefault!==null&&(t=it()),new Promise((r,a)=>{if(n==="fa"){const i=ss(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&lr[t]&&lr[t][e]){const i=lr[t][e];return r(Mr(i))}Cu(e,t),r(g(g({},_u),{},{icon:P.showMissingIcons&&e?ot("missingIconAbstract")||{}:{}}))})}const oi=()=>{},Fr=P.measurePerformance&&on&&on.mark&&on.measure?on:{mark:oi,measure:oi},Pt='FA "6.7.2"',Ou=e=>(Fr.mark("".concat(Pt," ").concat(e," begins")),()=>us(e)),us=e=>{Fr.mark("".concat(Pt," ").concat(e," ends")),Fr.measure("".concat(Pt," ").concat(e),"".concat(Pt," ").concat(e," begins"),"".concat(Pt," ").concat(e," ends"))};var fa={begin:Ou,end:us};const dn=()=>{};function si(e){return typeof(e.getAttribute?e.getAttribute(pt):null)=="string"}function Pu(e){const t=e.getAttribute?e.getAttribute(ra):null,n=e.getAttribute?e.getAttribute(aa):null;return t&&n}function Nu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Lu(){return P.autoReplaceSvg===!0?pn.replace:pn[P.autoReplaceSvg]||pn.replace}function Iu(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function Ru(e){return K.createElement(e)}function fs(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Iu:Ru}=t;if(typeof e=="string")return K.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(fs(i,{ceFn:n}))}),r}function Mu(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const pn={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(fs(n),t)}),t.getAttribute(pt)===null&&P.keepOriginalSource){let n=K.createComment(Mu(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~oa(t).indexOf(P.replacementClass))return pn.replace(e);const r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===P.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>Zt(i)).join(`
`);t.setAttribute(pt,""),t.innerHTML=a}};function li(e){e()}function ds(e,t){const n=typeof t=="function"?t:dn;if(e.length===0)n();else{let r=li;P.mutateApproach===jc&&(r=at.requestAnimationFrame||li),r(()=>{const a=Lu(),i=fa.begin("mutate");e.map(a),i(),n()})}}let da=!1;function ps(){da=!0}function jr(){da=!1}let bn=null;function ci(e){if(!Va||!P.observeMutations)return;const{treeCallback:t=dn,nodeCallback:n=dn,pseudoElementsCallback:r=dn,observeMutationsRoot:a=K}=e;bn=new Va(i=>{if(da)return;const o=it();Et(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!si(l.addedNodes[0])&&(P.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&P.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&si(l.target)&&~Wc.indexOf(l.attributeName))if(l.attributeName==="class"&&Pu(l.target)){const{prefix:f,iconName:c}=Yn(oa(l.target));l.target.setAttribute(ra,f||o),c&&l.target.setAttribute(aa,c)}else Nu(l.target)&&n(l.target)})}),Qe&&bn.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Du(){bn&&bn.disconnect()}function Fu(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function ju(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=Yn(oa(e));return a.prefix||(a.prefix=it()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=cu(a.prefix,e.innerText)||ca(a.prefix,Nr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function zu(e){const t=Et(e.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Gt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Uu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ui(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=ju(e),i=zu(e),o=Ir("parseNodeAttributes",{},e);let l=t.styleParser?Fu(e):[];return g({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:i}},o)}const{styles:$u}=Ue;function ms(e){const t=P.autoReplaceSvg==="nest"?ui(e,{styleParser:!1}):ui(e);return~t.extra.classes.indexOf(Xo)?ot("generateLayersText",e,t):ot("generateSvgReplacementMutation",e,t)}function qu(){return[...Ac,...Tr]}function fi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();const n=K.documentElement.classList,r=m=>n.add("".concat(Qa,"-").concat(m)),a=m=>n.remove("".concat(Qa,"-").concat(m)),i=P.autoFetchSvg?qu():$o.concat(Object.keys($u));i.includes("fa")||i.push("fa");const o=[".".concat(Xo,":not([").concat(pt,"])")].concat(i.map(m=>".".concat(m,":not([").concat(pt,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Et(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();const f=fa.begin("onTree"),c=l.reduce((m,w)=>{try{const T=ms(w);T&&m.push(T)}catch(T){Go||T.name==="MissingIcon"&&console.error(T)}return m},[]);return new Promise((m,w)=>{Promise.all(c).then(T=>{ds(T,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),f(),m()})}).catch(T=>{f(),w(T)})})}function Hu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ms(e).then(n=>{n&&ds([n],t)})}function Wu(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Rr(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Rr(a||{})),e(r,g(g({},n),{},{mask:a}))}}const Bu=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ze,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:l=null,classes:f=[],attributes:c={},styles:m={}}=t;if(!e)return;const{prefix:w,iconName:T,icon:R}=e;return Xn(g({type:"icon"},e),()=>(mt("beforeDOMElementCreation",{iconDefinition:e,params:t}),P.autoA11y&&(o?c["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(l||Gt()):(c["aria-hidden"]="true",c.focusable="false")),ua({icons:{main:Mr(R),mask:a?Mr(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:T,transform:g(g({},ze),n),symbol:r,title:o,maskId:i,titleId:l,extra:{attributes:c,styles:m,classes:f}})))};var Gu={mixout(){return{icon:Wu(Bu)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=fi,e.nodeCallback=Hu,e}}},provides(e){e.i2svg=function(t){const{node:n=K,callback:r=()=>{}}=t;return fi(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:i,prefix:o,transform:l,symbol:f,mask:c,maskId:m,extra:w}=n;return new Promise((T,R)=>{Promise.all([Dr(r,o),c.iconName?Dr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[_,h]=A;T([t,ua({icons:{main:_,mask:h},prefix:o,iconName:r,transform:l,symbol:f,maskId:m,title:a,titleId:i,extra:w,watchable:!0})])}).catch(R)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:i,styles:o}=t;const l=Bn(o);l.length>0&&(r.style=l);let f;return sa(i)&&(f=ot("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(f||a.icon),{children:n,attributes:r}}}},Yu={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Xn({type:"layer"},()=>{mt("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Xu={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return Xn({type:"counter",content:e},()=>(mt("beforeDOMElementCreation",{content:e,params:t}),Eu({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(P.cssPrefix,"-layers-counter"),...r]}})))}}}},Vu={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ze,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return Xn({type:"text",content:e},()=>(mt("beforeDOMElementCreation",{content:e,params:t}),ii({content:e,transform:g(g({},ze),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(P.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:i}=n;let o=null,l=null;if(zo){const f=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/f,l=c.height/f}return P.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,ii({content:t.innerHTML,width:o,height:l,transform:a,title:r,extra:i,watchable:!0})])}}};const Ku=new RegExp('"',"ug"),di=[1105920,1112319],pi=g(g(g(g({},{FontAwesome:{normal:"fas",400:"fas"}}),bc),Dc),Oc),zr=Object.keys(pi).reduce((e,t)=>(e[t.toLowerCase()]=pi[t],e),{}),Zu=Object.keys(zr).reduce((e,t)=>{const n=zr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Qu(e){const t=e.replace(Ku,""),n=au(t,0),r=n>=di[0]&&n<=di[1],a=t.length===2?t[0]===t[1]:!1;return{value:Nr(a?t[0]:t),isSecondary:r||a}}function Ju(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(zr[n]||{})[a]||Zu[n]}function mi(e,t){const n="".concat(Fc).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const o=Et(e.children).filter(T=>T.getAttribute(_r)===t)[0],l=at.getComputedStyle(e,t),f=l.getPropertyValue("font-family"),c=f.match(qc),m=l.getPropertyValue("font-weight"),w=l.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&w!=="none"&&w!==""){const T=l.getPropertyValue("content");let R=Ju(f,m);const{value:A,isSecondary:_}=Qu(T),h=c[0].startsWith("FontAwesome");let k=ca(R,A),S=k;if(h){const M=uu(A);M.iconName&&M.prefix&&(k=M.iconName,R=M.prefix)}if(k&&!_&&(!o||o.getAttribute(ra)!==R||o.getAttribute(aa)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);const M=Uu(),{extra:L}=M;L.attributes[_r]=t,Dr(k,R).then(F=>{const J=ua(g(g({},M),{},{icons:{main:F,mask:ls()},prefix:R,iconName:S,extra:L,watchable:!0})),ee=K.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ee,e.firstChild):e.appendChild(ee),ee.outerHTML=J.map(Z=>Zt(Z)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ef(e){return Promise.all([mi(e,"::before"),mi(e,"::after")])}function tf(e){return e.parentNode!==document.head&&!~zc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(_r)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function hi(e){if(Qe)return new Promise((t,n)=>{const r=Et(e.querySelectorAll("*")).filter(tf).map(ef),a=fa.begin("searchPseudoElements");ps(),Promise.all(r).then(()=>{a(),jr(),t()}).catch(()=>{a(),jr(),n()})})}var nf={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=hi,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=K}=t;P.searchPseudoElements&&hi(n)}}};let gi=!1;var rf={mixout(){return{dom:{unwatch(){ps(),gi=!0}}}},hooks(){return{bootstrap(){ci(Ir("mutationObserverCallbacks",{}))},noAuto(){Du()},watch(e){const{observeMutationsRoot:t}=e;gi?jr():ci(Ir("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const yi=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var af={mixout(){return{parse:{transform:e=>yi(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=yi(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:i}=t;const o={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},w={transform:"translate(".concat(i/2*-1," -256)")},T={outer:o,inner:m,path:w};return{tag:"g",attributes:g({},T.outer),children:[{tag:"g",attributes:g({},T.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:g(g({},n.icon.attributes),T.path)}]}]}}}};const cr={x:0,y:0,width:"100%",height:"100%"};function vi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function of(e){return e.tag==="g"?e.children:[e]}var sf={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Yn(n.split(" ").map(a=>a.trim())):ls();return r.prefix||(r.prefix=it()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:i,maskId:o,transform:l}=t;const{width:f,icon:c}=a,{width:m,icon:w}=i,T=Qc({transform:l,containerWidth:m,iconWidth:f}),R={tag:"rect",attributes:g(g({},cr),{},{fill:"white"})},A=c.children?{children:c.children.map(vi)}:{},_={tag:"g",attributes:g({},T.inner),children:[vi(g({tag:c.tag,attributes:g(g({},c.attributes),T.path)},A))]},h={tag:"g",attributes:g({},T.outer),children:[_]},k="mask-".concat(o||Gt()),S="clip-".concat(o||Gt()),M={tag:"mask",attributes:g(g({},cr),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,h]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:of(w)},M]};return n.push(L,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(k,")")},cr)}),{children:n,attributes:r}}}},lf={provides(e){let t=!1;at.matchMedia&&(t=at.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:g(g({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=g(g({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:g(g({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:g(g({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:g(g({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:g(g({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:g(g({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},cf={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},uf=[tu,Gu,Yu,Xu,Vu,nf,rf,af,sf,lf,cf];bu(uf,{mixoutsTo:_e});_e.noAuto;_e.config;_e.library;_e.dom;const Ur=_e.parse;_e.findIconDefinition;_e.toHtml;const ff=_e.icon;_e.layer;_e.text;_e.counter;function bi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bi(Object(n),!0).forEach(function(r){bt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xn(e){"@babel/helpers - typeof";return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xn(e)}function bt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function df(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function pf(e,t){if(e==null)return{};var n=df(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $r(e){return mf(e)||hf(e)||gf(e)||yf()}function mf(e){if(Array.isArray(e))return qr(e)}function hf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gf(e,t){if(e){if(typeof e=="string")return qr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qr(e,t)}}function qr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vf(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,f=e.spin,c=e.spinPulse,m=e.spinReverse,w=e.pulse,T=e.fixedWidth,R=e.inverse,A=e.border,_=e.listItem,h=e.flip,k=e.size,S=e.rotation,M=e.pull,L=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":f,"fa-spin-reverse":m,"fa-spin-pulse":c,"fa-pulse":w,"fa-fw":T,"fa-inverse":R,"fa-border":A,"fa-li":_,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},bt(t,"fa-".concat(k),typeof k<"u"&&k!==null),bt(t,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),bt(t,"fa-pull-".concat(M),typeof M<"u"&&M!==null),bt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(L).map(function(F){return L[F]?F:null}).filter(function(F){return F})}function bf(e){return e=e-0,e===e}function hs(e){return bf(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var xf=["style"];function wf(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Af(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=hs(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[wf(a)]=i:t[a]=i,t},{})}function gs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(f){return gs(e,f)}),a=Object.keys(t.attributes||{}).reduce(function(f,c){var m=t.attributes[c];switch(c){case"class":f.attrs.className=m,delete t.attributes.class;break;case"style":f.attrs.style=Af(m);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=m:f.attrs[hs(c)]=m}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=pf(n,xf);return a.attrs.style=je(je({},a.attrs.style),o),e.apply(void 0,[t.tag,je(je({},a.attrs),l)].concat($r(r)))}var ys=!1;try{ys=!0}catch{}function Sf(){if(!ys&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xi(e){if(e&&xn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ur.icon)return Ur.icon(e);if(e===null)return null;if(e&&xn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ur(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?bt({},e,t):{}}var wi={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},rt=kt.forwardRef(function(e,t){var n=je(je({},wi),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,l=n.title,f=n.titleId,c=n.maskId,m=xi(r),w=ur("classes",[].concat($r(vf(n)),$r((o||"").split(" ")))),T=ur("transform",typeof n.transform=="string"?Ur.transform(n.transform):n.transform),R=ur("mask",xi(a)),A=ff(m,je(je(je(je({},w),T),R),{},{symbol:i,title:l,titleId:f,maskId:c}));if(!A)return Sf("Could not find icon",m),null;var _=A.abstract,h={ref:t};return Object.keys(n).forEach(function(k){wi.hasOwnProperty(k)||(h[k]=n[k])}),kf(_[0],h)});rt.displayName="FontAwesomeIcon";rt.propTypes={beat:d.bool,border:d.bool,beatFade:d.bool,bounce:d.bool,className:d.string,fade:d.bool,flash:d.bool,mask:d.oneOfType([d.object,d.array,d.string]),maskId:d.string,fixedWidth:d.bool,inverse:d.bool,flip:d.oneOf([!0,!1,"horizontal","vertical","both"]),icon:d.oneOfType([d.object,d.array,d.string]),listItem:d.bool,pull:d.oneOf(["right","left"]),pulse:d.bool,rotation:d.oneOf([0,90,180,270]),shake:d.bool,size:d.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d.bool,spinPulse:d.bool,spinReverse:d.bool,symbol:d.oneOfType([d.bool,d.string]),title:d.string,titleId:d.string,transform:d.oneOfType([d.string,d.object]),swapOpacity:d.bool};var kf=gs.bind(null,kt.createElement);function tt(e){"@babel/helpers - typeof";return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tt(e)}function Hr(e,t){return Hr=Object.setPrototypeOf||function(r,a){return r.__proto__=a,r},Hr(e,t)}function Tf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function mn(e,t,n){return Tf()?mn=Reflect.construct:mn=function(a,i,o){var l=[null];l.push.apply(l,i);var f=Function.bind.apply(a,l),c=new f;return o&&Hr(c,o.prototype),c},mn.apply(null,arguments)}function De(e){return Ef(e)||_f(e)||Cf(e)||Of()}function Ef(e){if(Array.isArray(e))return Wr(e)}function _f(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cf(e,t){if(e){if(typeof e=="string")return Wr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wr(e,t)}}function Wr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Of(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Pf=Object.hasOwnProperty,Ai=Object.setPrototypeOf,Nf=Object.isFrozen,Lf=Object.getPrototypeOf,If=Object.getOwnPropertyDescriptor,xe=Object.freeze,Ne=Object.seal,Rf=Object.create,vs=typeof Reflect<"u"&&Reflect,wn=vs.apply,Br=vs.construct;wn||(wn=function(t,n,r){return t.apply(n,r)});xe||(xe=function(t){return t});Ne||(Ne=function(t){return t});Br||(Br=function(t,n){return mn(t,De(n))});var Mf=Le(Array.prototype.forEach),Si=Le(Array.prototype.pop),Ot=Le(Array.prototype.push),hn=Le(String.prototype.toLowerCase),fr=Le(String.prototype.toString),ki=Le(String.prototype.match),Me=Le(String.prototype.replace),Df=Le(String.prototype.indexOf),Ff=Le(String.prototype.trim),me=Le(RegExp.prototype.test),dr=jf(TypeError);function Le(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return wn(e,t,r)}}function jf(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Br(e,n)}}function z(e,t,n){var r;n=(r=n)!==null&&r!==void 0?r:hn,Ai&&Ai(e,null);for(var a=t.length;a--;){var i=t[a];if(typeof i=="string"){var o=n(i);o!==i&&(Nf(t)||(t[a]=o),i=o)}e[i]=!0}return e}function ft(e){var t=Rf(null),n;for(n in e)wn(Pf,e,[n])===!0&&(t[n]=e[n]);return t}function ln(e,t){for(;e!==null;){var n=If(e,t);if(n){if(n.get)return Le(n.get);if(typeof n.value=="function")return Le(n.value)}e=Lf(e)}function r(a){return console.warn("fallback value for",a),null}return r}var Ti=xe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),pr=xe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),mr=xe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),zf=xe(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),hr=xe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Uf=xe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ei=xe(["#text"]),_i=xe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),gr=xe(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ci=xe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),cn=xe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),$f=Ne(/\{\{[\w\W]*|[\w\W]*\}\}/gm),qf=Ne(/<%[\w\W]*|[\w\W]*%>/gm),Hf=Ne(/\${[\w\W]*}/gm),Wf=Ne(/^data-[\-\w.\u00B7-\uFFFF]+$/),Bf=Ne(/^aria-[\-\w]+$/),Gf=Ne(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Yf=Ne(/^(?:\w+script|data):/i),Xf=Ne(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Vf=Ne(/^html$/i),Kf=Ne(/^[a-z][.\w]*(-[.\w]+)+$/i),Zf=function(){return typeof window>"u"?null:window},Qf=function(t,n){if(tt(t)!=="object"||typeof t.createPolicy!="function")return null;var r=null,a="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(a)&&(r=n.currentScript.getAttribute(a));var i="dompurify"+(r?"#"+r:"");try{return t.createPolicy(i,{createHTML:function(l){return l},createScriptURL:function(l){return l}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function bs(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Zf(),t=function(s){return bs(s)};if(t.version="2.5.8",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;var n=e.document,r=e.document,a=e.DocumentFragment,i=e.HTMLTemplateElement,o=e.Node,l=e.Element,f=e.NodeFilter,c=e.NamedNodeMap,m=c===void 0?e.NamedNodeMap||e.MozNamedAttrMap:c,w=e.HTMLFormElement,T=e.DOMParser,R=e.trustedTypes,A=l.prototype,_=ln(A,"cloneNode"),h=ln(A,"nextSibling"),k=ln(A,"childNodes"),S=ln(A,"parentNode");if(typeof i=="function"){var M=r.createElement("template");M.content&&M.content.ownerDocument&&(r=M.content.ownerDocument)}var L=Qf(R,n),F=L?L.createHTML(""):"",J=r,ee=J.implementation,Z=J.createNodeIterator,re=J.createDocumentFragment,ce=J.getElementsByTagName,Re=n.importNode,he={};try{he=ft(r).documentMode?r.documentMode:{}}catch{}var te={};t.isSupported=typeof S=="function"&&ee&&ee.createHTMLDocument!==void 0&&he!==9;var we=$f,ue=qf,He=Hf,Te=Wf,Ae=Bf,st=Yf,We=Xf,lt=Kf,C=Gf,v=null,E=z({},[].concat(De(Ti),De(pr),De(mr),De(hr),De(Ei))),O=null,u=z({},[].concat(De(_i),De(gr),De(Ci),De(cn))),I=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),b=null,X=null,q=!0,H=!0,j=!1,oe=!0,ae=!1,U=!0,Q=!1,$=!1,ie=!1,Ce=!1,ne=!1,Be=!1,Je=!0,Se=!1,D="user-content-",V=!0,Ge=!1,Fe={},ve=null,ba=z({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),xa=null,wa=z({},["audio","video","img","source","image","track"]),Kn=null,Aa=z({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Qt="http://www.w3.org/1998/Math/MathML",Jt="http://www.w3.org/2000/svg",Ye="http://www.w3.org/1999/xhtml",ht=Ye,Zn=!1,Qn=null,Rs=z({},[Qt,Jt,Ye],fr),ct,Ms=["application/xhtml+xml","text/html"],Ds="text/html",fe,gt=null,Fs=r.createElement("form"),Sa=function(s){return s instanceof RegExp||s instanceof Function},Jn=function(s){gt&&gt===s||((!s||tt(s)!=="object")&&(s={}),s=ft(s),ct=Ms.indexOf(s.PARSER_MEDIA_TYPE)===-1?ct=Ds:ct=s.PARSER_MEDIA_TYPE,fe=ct==="application/xhtml+xml"?fr:hn,v="ALLOWED_TAGS"in s?z({},s.ALLOWED_TAGS,fe):E,O="ALLOWED_ATTR"in s?z({},s.ALLOWED_ATTR,fe):u,Qn="ALLOWED_NAMESPACES"in s?z({},s.ALLOWED_NAMESPACES,fr):Rs,Kn="ADD_URI_SAFE_ATTR"in s?z(ft(Aa),s.ADD_URI_SAFE_ATTR,fe):Aa,xa="ADD_DATA_URI_TAGS"in s?z(ft(wa),s.ADD_DATA_URI_TAGS,fe):wa,ve="FORBID_CONTENTS"in s?z({},s.FORBID_CONTENTS,fe):ba,b="FORBID_TAGS"in s?z({},s.FORBID_TAGS,fe):{},X="FORBID_ATTR"in s?z({},s.FORBID_ATTR,fe):{},Fe="USE_PROFILES"in s?s.USE_PROFILES:!1,q=s.ALLOW_ARIA_ATTR!==!1,H=s.ALLOW_DATA_ATTR!==!1,j=s.ALLOW_UNKNOWN_PROTOCOLS||!1,oe=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ae=s.SAFE_FOR_TEMPLATES||!1,U=s.SAFE_FOR_XML!==!1,Q=s.WHOLE_DOCUMENT||!1,Ce=s.RETURN_DOM||!1,ne=s.RETURN_DOM_FRAGMENT||!1,Be=s.RETURN_TRUSTED_TYPE||!1,ie=s.FORCE_BODY||!1,Je=s.SANITIZE_DOM!==!1,Se=s.SANITIZE_NAMED_PROPS||!1,V=s.KEEP_CONTENT!==!1,Ge=s.IN_PLACE||!1,C=s.ALLOWED_URI_REGEXP||C,ht=s.NAMESPACE||Ye,I=s.CUSTOM_ELEMENT_HANDLING||{},s.CUSTOM_ELEMENT_HANDLING&&Sa(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(I.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&Sa(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(I.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(I.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ae&&(H=!1),ne&&(Ce=!0),Fe&&(v=z({},De(Ei)),O=[],Fe.html===!0&&(z(v,Ti),z(O,_i)),Fe.svg===!0&&(z(v,pr),z(O,gr),z(O,cn)),Fe.svgFilters===!0&&(z(v,mr),z(O,gr),z(O,cn)),Fe.mathMl===!0&&(z(v,hr),z(O,Ci),z(O,cn))),s.ADD_TAGS&&(v===E&&(v=ft(v)),z(v,s.ADD_TAGS,fe)),s.ADD_ATTR&&(O===u&&(O=ft(O)),z(O,s.ADD_ATTR,fe)),s.ADD_URI_SAFE_ATTR&&z(Kn,s.ADD_URI_SAFE_ATTR,fe),s.FORBID_CONTENTS&&(ve===ba&&(ve=ft(ve)),z(ve,s.FORBID_CONTENTS,fe)),V&&(v["#text"]=!0),Q&&z(v,["html","head","body"]),v.table&&(z(v,["tbody"]),delete b.tbody),xe&&xe(s),gt=s)},ka=z({},["mi","mo","mn","ms","mtext"]),Ta=z({},["annotation-xml"]),js=z({},["title","style","font","a","script"]),en=z({},pr);z(en,mr),z(en,zf);var er=z({},hr);z(er,Uf);var zs=function(s){var y=S(s);(!y||!y.tagName)&&(y={namespaceURI:ht,tagName:"template"});var x=hn(s.tagName),W=hn(y.tagName);return Qn[s.namespaceURI]?s.namespaceURI===Jt?y.namespaceURI===Ye?x==="svg":y.namespaceURI===Qt?x==="svg"&&(W==="annotation-xml"||ka[W]):!!en[x]:s.namespaceURI===Qt?y.namespaceURI===Ye?x==="math":y.namespaceURI===Jt?x==="math"&&Ta[W]:!!er[x]:s.namespaceURI===Ye?y.namespaceURI===Jt&&!Ta[W]||y.namespaceURI===Qt&&!ka[W]?!1:!er[x]&&(js[x]||!en[x]):!!(ct==="application/xhtml+xml"&&Qn[s.namespaceURI]):!1},Oe=function(s){Ot(t.removed,{element:s});try{s.parentNode.removeChild(s)}catch{try{s.outerHTML=F}catch{s.remove()}}},tn=function(s,y){try{Ot(t.removed,{attribute:y.getAttributeNode(s),from:y})}catch{Ot(t.removed,{attribute:null,from:y})}if(y.removeAttribute(s),s==="is"&&!O[s])if(Ce||ne)try{Oe(y)}catch{}else try{y.setAttribute(s,"")}catch{}},Ea=function(s){var y,x;if(ie)s="<remove></remove>"+s;else{var W=ki(s,/^[\r\n\t ]+/);x=W&&W[0]}ct==="application/xhtml+xml"&&ht===Ye&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");var ke=L?L.createHTML(s):s;if(ht===Ye)try{y=new T().parseFromString(ke,ct)}catch{}if(!y||!y.documentElement){y=ee.createDocument(ht,"template",null);try{y.documentElement.innerHTML=Zn?F:ke}catch{}}var ge=y.body||y.documentElement;return s&&x&&ge.insertBefore(r.createTextNode(x),ge.childNodes[0]||null),ht===Ye?ce.call(y,Q?"html":"body")[0]:Q?y.documentElement:ge},_a=function(s){return Z.call(s.ownerDocument||s,s,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null,!1)},tr=function(s){return s instanceof w&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof m)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},Ct=function(s){return tt(o)==="object"?s instanceof o:s&&tt(s)==="object"&&typeof s.nodeType=="number"&&typeof s.nodeName=="string"},Xe=function(s,y,x){te[s]&&Mf(te[s],function(W){W.call(t,y,x,gt)})},Ca=function(s){var y;if(Xe("beforeSanitizeElements",s,null),tr(s)||me(/[\u0080-\uFFFF]/,s.nodeName))return Oe(s),!0;var x=fe(s.nodeName);if(Xe("uponSanitizeElement",s,{tagName:x,allowedTags:v}),s.hasChildNodes()&&!Ct(s.firstElementChild)&&(!Ct(s.content)||!Ct(s.content.firstElementChild))&&me(/<[/\w]/g,s.innerHTML)&&me(/<[/\w]/g,s.textContent)||x==="select"&&me(/<template/i,s.innerHTML)||s.nodeType===7||U&&s.nodeType===8&&me(/<[/\w]/g,s.data))return Oe(s),!0;if(!v[x]||b[x]){if(!b[x]&&Pa(x)&&(I.tagNameCheck instanceof RegExp&&me(I.tagNameCheck,x)||I.tagNameCheck instanceof Function&&I.tagNameCheck(x)))return!1;if(V&&!ve[x]){var W=S(s)||s.parentNode,ke=k(s)||s.childNodes;if(ke&&W)for(var ge=ke.length,pe=ge-1;pe>=0;--pe){var ut=_(ke[pe],!0);ut.__removalCount=(s.__removalCount||0)+1,W.insertBefore(ut,h(s))}}return Oe(s),!0}return s instanceof l&&!zs(s)||(x==="noscript"||x==="noembed"||x==="noframes")&&me(/<\/no(script|embed|frames)/i,s.innerHTML)?(Oe(s),!0):(ae&&s.nodeType===3&&(y=s.textContent,y=Me(y,we," "),y=Me(y,ue," "),y=Me(y,He," "),s.textContent!==y&&(Ot(t.removed,{element:s.cloneNode()}),s.textContent=y)),Xe("afterSanitizeElements",s,null),!1)},Oa=function(s,y,x){if(Je&&(y==="id"||y==="name")&&(x in r||x in Fs))return!1;if(!(H&&!X[y]&&me(Te,y))){if(!(q&&me(Ae,y))){if(!O[y]||X[y]){if(!(Pa(s)&&(I.tagNameCheck instanceof RegExp&&me(I.tagNameCheck,s)||I.tagNameCheck instanceof Function&&I.tagNameCheck(s))&&(I.attributeNameCheck instanceof RegExp&&me(I.attributeNameCheck,y)||I.attributeNameCheck instanceof Function&&I.attributeNameCheck(y))||y==="is"&&I.allowCustomizedBuiltInElements&&(I.tagNameCheck instanceof RegExp&&me(I.tagNameCheck,x)||I.tagNameCheck instanceof Function&&I.tagNameCheck(x))))return!1}else if(!Kn[y]){if(!me(C,Me(x,We,""))){if(!((y==="src"||y==="xlink:href"||y==="href")&&s!=="script"&&Df(x,"data:")===0&&xa[s])){if(!(j&&!me(st,Me(x,We,"")))){if(x)return!1}}}}}}return!0},Pa=function(s){return s!=="annotation-xml"&&ki(s,lt)},Na=function(s){var y,x,W,ke;Xe("beforeSanitizeAttributes",s,null);var ge=s.attributes;if(!(!ge||tr(s))){var pe={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:O};for(ke=ge.length;ke--;){y=ge[ke];var ut=y,se=ut.name,nr=ut.namespaceURI;if(x=se==="value"?y.value:Ff(y.value),W=fe(se),pe.attrName=W,pe.attrValue=x,pe.keepAttr=!0,pe.forceKeepAttr=void 0,Xe("uponSanitizeAttribute",s,pe),x=pe.attrValue,!pe.forceKeepAttr&&(tn(se,s),!!pe.keepAttr)){if(!oe&&me(/\/>/i,x)){tn(se,s);continue}ae&&(x=Me(x,we," "),x=Me(x,ue," "),x=Me(x,He," "));var La=fe(s.nodeName);if(Oa(La,W,x)){if(Se&&(W==="id"||W==="name")&&(tn(se,s),x=D+x),U&&me(/((--!?|])>)|<\/(style|title)/i,x)){tn(se,s);continue}if(L&&tt(R)==="object"&&typeof R.getAttributeType=="function"&&!nr)switch(R.getAttributeType(La,W)){case"TrustedHTML":{x=L.createHTML(x);break}case"TrustedScriptURL":{x=L.createScriptURL(x);break}}try{nr?s.setAttributeNS(nr,se,x):s.setAttribute(se,x),tr(s)?Oe(s):Si(t.removed)}catch{}}}}Xe("afterSanitizeAttributes",s,null)}},Us=function N(s){var y,x=_a(s);for(Xe("beforeSanitizeShadowDOM",s,null);y=x.nextNode();)Xe("uponSanitizeShadowNode",y,null),Ca(y),Na(y),y.content instanceof a&&N(y.content);Xe("afterSanitizeShadowDOM",s,null)};return t.sanitize=function(N){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y,x,W,ke,ge;if(Zn=!N,Zn&&(N="<!-->"),typeof N!="string"&&!Ct(N))if(typeof N.toString=="function"){if(N=N.toString(),typeof N!="string")throw dr("dirty is not a string, aborting")}else throw dr("toString is not a function");if(!t.isSupported){if(tt(e.toStaticHTML)==="object"||typeof e.toStaticHTML=="function"){if(typeof N=="string")return e.toStaticHTML(N);if(Ct(N))return e.toStaticHTML(N.outerHTML)}return N}if($||Jn(s),t.removed=[],typeof N=="string"&&(Ge=!1),Ge){if(N.nodeName){var pe=fe(N.nodeName);if(!v[pe]||b[pe])throw dr("root node is forbidden and cannot be sanitized in-place")}}else if(N instanceof o)y=Ea("<!---->"),x=y.ownerDocument.importNode(N,!0),x.nodeType===1&&x.nodeName==="BODY"||x.nodeName==="HTML"?y=x:y.appendChild(x);else{if(!Ce&&!ae&&!Q&&N.indexOf("<")===-1)return L&&Be?L.createHTML(N):N;if(y=Ea(N),!y)return Ce?null:Be?F:""}y&&ie&&Oe(y.firstChild);for(var ut=_a(Ge?N:y);W=ut.nextNode();)W.nodeType===3&&W===ke||(Ca(W),Na(W),W.content instanceof a&&Us(W.content),ke=W);if(ke=null,Ge)return N;if(Ce){if(ne)for(ge=re.call(y.ownerDocument);y.firstChild;)ge.appendChild(y.firstChild);else ge=y;return(O.shadowroot||O.shadowrootmod)&&(ge=Re.call(n,ge,!0)),ge}var se=Q?y.outerHTML:y.innerHTML;return Q&&v["!doctype"]&&y.ownerDocument&&y.ownerDocument.doctype&&y.ownerDocument.doctype.name&&me(Vf,y.ownerDocument.doctype.name)&&(se="<!DOCTYPE "+y.ownerDocument.doctype.name+`>
`+se),ae&&(se=Me(se,we," "),se=Me(se,ue," "),se=Me(se,He," ")),L&&Be?L.createHTML(se):se},t.setConfig=function(N){Jn(N),$=!0},t.clearConfig=function(){gt=null,$=!1},t.isValidAttribute=function(N,s,y){gt||Jn({});var x=fe(N),W=fe(s);return Oa(x,W,y)},t.addHook=function(N,s){typeof s=="function"&&(te[N]=te[N]||[],Ot(te[N],s))},t.removeHook=function(N){if(te[N])return Si(te[N])},t.removeHooks=function(N){te[N]&&(te[N]=[])},t.removeAllHooks=function(){te={}},t}bs();function*xs(e="id-",t=0){let n=t;for(;;)n+=1,yield e+n}function ws(){const e=(document.currentScript&&document.currentScript.src||"").match(/(.*\/)/);return e&&e.length>0?e[0].substr(0,e[0].length-1):"/"}d.shape({event:d.string,action:d.string,name:d.string,region:d.string,section:d.string,component:d.string,type:d.string,text:d.string});const le=({event:e="",action:t="",name:n="",type:r="",section:a="",text:i="",region:o="",component:l=""})=>{const{dataLayer:f}=window,c={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:o.toLowerCase(),section:a.toLowerCase(),text:i.toLowerCase(),component:l.toLowerCase()};f&&f.push(c)},Jf={Lg:"992px",Xl:"1260px"},As=G.createContext(),pa=({initialValue:e,children:t})=>{const n={...e,breakpoint:Jf[e.breakpoint]};return p.jsx(As.Provider,{value:n,children:t})};pa.propTypes={initialValue:d.shape(vo).isRequired,children:d.node.isRequired};const $e=()=>{const e=G.useContext(As);if(e===void 0)throw new Error("useAppContext must be used within a AppContextProvider");return e};pa.__docgenInfo={description:"",methods:[],displayName:"AppContextProvider",props:{initialValue:{description:"",type:{name:"shape",value:{isPartner:{name:"bool",required:!1},navTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},partnerLogo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},logo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},title:{name:"string",required:!1},parentOrg:{name:"custom",raw:"TitlePropTypes.parentOrg",required:!1},parentOrgUrl:{name:"custom",raw:"TitlePropTypes.parentOrgUrl",required:!1},baseUrl:{name:"custom",raw:"TitlePropTypes.baseUrl",required:!1},loggedIn:{name:"custom",raw:"LoginPropTypes.loggedIn",required:!1},userName:{name:"custom",raw:"LoginPropTypes.userName",required:!1},loginLink:{name:"custom",raw:"LoginPropTypes.loginLink",required:!1},onLoginClick:{name:"func",required:!1},logoutLink:{name:"custom",raw:"LoginPropTypes.logoutLink",required:!1},onLogoutClick:{name:"func",required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},breakpoint:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}],required:!1},animateTitle:{name:"bool",required:!1},expandOnHover:{name:"bool",required:!1},mobileNavTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},hasNavigation:{name:"bool",required:!1},searchUrl:{name:"string",required:!1},site:{name:"string",required:!1},renderDiv:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}],required:!1}}},required:!0},children:{description:"",type:{name:"node"},required:!0}}};const Vn=e=>{const t=window==null?void 0:window.matchMedia(`(max-width: ${e})`),[n,r]=G.useState(t==null?void 0:t.matches),a=i=>{r(i.matches)};return G.useEffect(()=>(t.addEventListener("change",a),()=>t.removeEventListener("change",a)),[]),n},ed=be.div`
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
`,td=be.div`
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
`,Oi={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar"},Ss=()=>{const{loggedIn:e,userName:t,logoutLink:n,loginLink:r,onLoginClick:a,onLogoutClick:i,breakpoint:o}=$e();return p.jsx(td,{className:"nav-link login-status",breakpoint:o,children:e?p.jsxs(p.Fragment,{children:[t?p.jsx("span",{className:"name","data-testid":"user-name",children:t}):"",p.jsx("a",{className:"signout",href:n,onClick:l=>{le({...Oi,text:"sign out"}),i==null||i(l)},children:"Sign Out"})]}):p.jsx("a",{href:r,onClick:l=>{le({...Oi,text:"sign in"}),a==null||a(l)},children:"Sign In"})})};Ss.__docgenInfo={description:"",methods:[],displayName:"Login"};const nd=be.form`
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
`,yr={event:"search",action:"type",name:"onenter",type:"main search",region:"navbar",section:"topbar"},ks=()=>{const{breakpoint:e,searchUrl:t,site:n}=$e(),r=Vn(e),a=G.useRef(null),[i,o]=G.useState(!1);G.useEffect(()=>{i&&a.current.focus()},[i]);const l=c=>{const m=c.target;c.preventDefault(),le({...yr,text:c.target.elements.q.value}),setTimeout(()=>{m.submit()},100)},f=()=>{o(c=>{const m=!c;return le({...yr,event:"link",action:"click",name:"onclick",text:m?"search icon":"close search icon"}),m})};return p.jsxs(nd,{breakpoint:e,action:t,onSubmit:l,method:"get",name:"gs",className:i?"open-search":"","data-testid":"universal-nav-search-form",children:[r?p.jsxs("label",{children:[p.jsx(rt,{icon:Ba}),p.jsx("input",{ref:a,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0,onChange:c=>le({...yr,text:c.target.value})})]}):p.jsxs(p.Fragment,{children:[p.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:f,className:"search-button","data-testid":"search-button",children:p.jsx(rt,{icon:Ba})}),i&&p.jsxs(p.Fragment,{children:[p.jsx("input",{ref:a,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0}),p.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:f,className:"close-search","data-testid":"close-search",children:p.jsx(rt,{icon:Mo})})]})]}),p.jsx("input",{name:"url_host",value:n,type:"hidden"}),p.jsx("input",{name:"site",value:"default_collection",type:"hidden"}),p.jsx("input",{name:"sort",value:"date:D:L:d1",type:"hidden"}),p.jsx("input",{name:"output",value:"xml_no_dtd",type:"hidden"}),p.jsx("input",{name:"ie",value:"UTF-8",type:"hidden"}),p.jsx("input",{name:"oe",value:"UTF-8",type:"hidden"}),p.jsx("input",{name:"client",value:"asu_frontend",type:"hidden"}),p.jsx("input",{name:"proxystylesheet",value:"asu_frontend",type:"hidden"})]})};ks.__docgenInfo={description:"",methods:[],displayName:"Search"};const rd={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar",text:""},ma=()=>{const{breakpoint:e}=$e();function t(){try{return window.location.href}catch(r){return console.error(r),""}}const n=[{className:"nav-link visually-hidden-focusable",href:"#skip-to-content",text:"Skip to main content"},{className:"nav-link visually-hidden-focusable",href:`https://accessibility.asu.edu/report?a11yref=${t()}`,text:"Report an accessibility problem"},{className:"nav-link",href:"https://asu.edu",text:"ASU Home"},{className:"nav-link",href:"https://my.asu.edu",text:"My ASU"},{className:"nav-link",href:"https://www.asu.edu/academics/colleges-schools",text:"Colleges and Schools"}];return p.jsx(ed,{breakpoint:e,className:"universal-nav","data-testid":"universal-navbar","data-elastic-exclude":"data-elastic-exclude",children:p.jsx("div",{className:"container-xl",children:p.jsx("div",{className:"header-top",children:p.jsxs("nav",{className:"nav","aria-label":"ASU Global",children:[p.jsxs("div",{className:"links-container",children:[n.map(r=>p.jsx("a",{className:r.className,href:r.href,onClick:()=>le({...rd,text:r.text}),children:r.text},r.href)),p.jsx(Ss,{})]}),p.jsx(ks,{})]})})})})};ma.__docgenInfo={description:"",methods:[],displayName:"UniversalNavbar"};const ad=be.div`
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
`,id=be.a`
  display: unset;
  padding: 0;
  margin: 0;
  font-size: unset;
  line-height: unset;
  white-space: unset;
`,Ts=ws(),od=`${Ts}/assets/img/arizona-state-university-logo-vertical.png`,sd=`${Ts}/assets/img/arizona-state-university-logo.png`,Es=()=>{const{logo:e}=$e();return p.jsxs(id,{href:(e==null?void 0:e.brandLink)??"https://asu.edu",className:"navbar-brand","data-testid":"logo",onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"asu logo"}),children:[p.jsx("img",{className:"vert",src:(e==null?void 0:e.src)??od,alt:(e==null?void 0:e.alt)??"Arizona State University",title:(e==null?void 0:e.title)??"ASU home page",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),p.jsx("img",{className:"horiz",src:(e==null?void 0:e.mobileSrc)??sd,alt:(e==null?void 0:e.alt)??"Arizona State University",title:(e==null?void 0:e.title)??"ASU home page",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})};Es.__docgenInfo={description:"",methods:[],displayName:"Logo"};const ld=be.nav`
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
`,cd=be.div`
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
`,ud={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},_s=({text:e})=>p.jsx("h3",{className:"ul-heading",children:e});_s.propTypes={text:d.string};const Cs=({link:e,dropdownName:t,handleLinkEvent:n})=>p.jsx("li",{className:"nav-button",children:p.jsx(Tt,{text:e.text,color:e.color||"dark",href:e.href,onClick:r=>n(r,e),onKeyDown:n,onFocus:()=>le({text:e.text,component:t}),"data-testid":"submenu-item"})});Cs.propTypes={link:d.shape({text:d.string,color:d.string,href:d.string}),dropdownName:d.string,handleLinkEvent:d.func};const Os=({link:e,dropdownName:t,handleLinkEvent:n})=>p.jsx("li",{className:"nav-link",children:p.jsx("a",{...e.href?{}:{tabIndex:0},href:e.href,onClick:r=>n(r,e),onKeyDown:r=>n(r,e),onFocus:()=>le({text:e.text,component:t}),"data-testid":"submenu-item",children:e.text})});Os.propTypes={link:d.shape({text:d.string,href:d.string}),dropdownName:d.string,handleLinkEvent:d.func};const ha=({dropdownName:e,items:t,buttons:n,classes:r,listId:a,setItemOpened:i,parentLink:o})=>{const{breakpoint:l}=$e(),f=(t==null?void 0:t.length)>2,c=G.useRef(null),[m,w]=G.useState(!1),T=(t==null?void 0:t.length)>1;G.useEffect(()=>{if(window&&c.current){const h=c.current.getBoundingClientRect().left,k=window.innerWidth*.55;w(h>k)}},[]);const R=h=>h.stopPropagation(),A=(h,k)=>{var Z;const{key:S,type:M,target:L}=h,{parentElement:F}=L,J=()=>{var ce;const re=(ce=F.nextElementSibling)==null?void 0:ce.firstChild;re&&re.focus()},ee=()=>{var ce;const re=(ce=F.previousElementSibling)==null?void 0:ce.firstChild;re&&re.focus()};R(h),S==="ArrowDown"?(h.preventDefault(),J()):S==="ArrowUp"?(h.preventDefault(),ee()):S==="Escape"?(i(),o&&o.focus()):(S==="Enter"||S===" "||M==="click")&&((Z=k==null?void 0:k.onClick)==null||Z.call(k,h),le({...ud,text:k.text}))},_=(h,k)=>{const S=`${h.text}-${h.href||k}`;return h.type==="heading"?p.jsx(_s,{text:h.text},S):h.type==="button"?p.jsx(Cs,{link:h,dropdownName:e,handleLinkEvent:A},S):p.jsx(Os,{link:h,dropdownName:e,handleLinkEvent:A},S)};return p.jsxs(cd,{ref:c,className:`${r}${m?" aligned-right":""}${f?" mega":""}`,breakpoint:l,children:[p.jsx("div",{id:T?a:null,className:"dropdown-container",children:t==null?void 0:t.map((h,k)=>{const M=xs(`dropdown-item-${k}-`).next().value;return p.jsx("ul",{id:T?`${a}-${M}`:a,children:h.map((L,F)=>_(L,F))},M)})}),n&&p.jsx("div",{className:"dropdown-button-container",children:p.jsx("div",{children:n.map((h,k)=>p.jsx(Tt,{color:h.color,text:h.text,href:h.href,onClick:R},`${h.text}-${h.href||k}`))})})]})};ha.propTypes={dropdownName:d.string,items:d.arrayOf(d.arrayOf(d.shape({text:d.string,selected:d.bool,onClick:d.func,href:d.string}))),buttons:d.arrayOf(d.shape(Sn)),classes:d.string,listId:d.string,setItemOpened:d.func,parentLink:d.shape({focus:d.func})};ha.__docgenInfo={description:`@param {DropdownItemProps} props
@returns {JSX.Element}`,methods:[],displayName:"DropdownItem",props:{dropdownName:{description:"",type:{name:"string"},required:!1},items:{description:"",type:{name:"arrayOf",value:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1},selected:{name:"bool",required:!1},onClick:{name:"func",required:!1},href:{name:"string",required:!1}}}}},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},classes:{description:"",type:{name:"string"},required:!1},listId:{description:"",type:{name:"string"},required:!1},setItemOpened:{description:"",type:{name:"func"},required:!1},parentLink:{description:"",type:{name:"shape",value:{focus:{name:"func",required:!1}}},required:!1}}};const fd=be.li`
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
`,dd={event:"collapse",type:"click"},vr={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},Ps=({children:e})=>p.jsxs(p.Fragment,{children:[p.jsx(rt,{icon:oc,className:"icon-nav-item",alt:""}),p.jsx("span",{className:"mobile-only",children:e})]});Ps.propTypes={children:d.node};const ga=({link:e,setItemOpened:t,itemOpened:n})=>{const r=G.useRef(null),a=G.useRef(null),i=e.id===n,{breakpoint:o,expandOnHover:l,title:f}=$e(),c=Vn(o);G.useEffect(()=>{const A=_=>{var h;i&&!((h=r==null?void 0:r.current)!=null&&h.contains(_.target))&&t()};return document.addEventListener("click",A,!0),()=>{document.removeEventListener("click",A,!0)}},[i]);const m=G.useMemo(()=>{var A;return e.type==="icon-home"?p.jsx(Ps,{children:e.text}):p.jsxs("span",{children:[e.text,!!((A=e.items)!=null&&A.length)&&p.jsx(rt,{icon:lc,className:`chevron-icon ${i?"open":""}`,alt:""})]})},[e]),w=()=>{var k;const A=!!((k=e.items)!=null&&k.length),_=i?"close":"open",{text:h}=e;le(A?{...vr,...dd,action:_,text:h}:{...vr,text:e.type==="icon-home"?"home button":h})},T=A=>{var k,S;if(!e.items&&e.href){le({...vr,text:e.text});return}const{key:_}=A;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"," ","Escape","Click"].includes(_)){if(A.preventDefault(),_==="Escape"&&i){t();return}if((_==="Enter"||_===" ")&&(e.items&&(!l&&!c||c)&&t(),w(),(k=e.onClick)==null||k.call(e,A)),(_==="ArrowDown"||_==="ArrowRight")&&i){const M=document.querySelectorAll(`.header-dropdown-${e.id} li.nav-link a`);M.length&&M[0].focus()}}else A.type==="click"&&e.items?(A.preventDefault(),w(),t()):A.type==="click"&&(w(),(S=e.onClick)==null||S.call(e,A))},R=()=>{l&&!c&&(t(),w())};return p.jsxs(fd,{breakpoint:o,ref:r,onMouseEnter:R,onMouseLeave:R,children:[p.jsx("a",{onKeyDown:T,onClick:T,href:e.href,...e.items?{"aria-expanded":i}:{},...e.href?{}:{tabIndex:0},"aria-owns":e.items?`dropdown-${e.id}`:null,className:`${e.class?e.class:""}${e.selected?" nav-item-selected":""}${i?" open-link":""}`,"data-testid":"nav-item",title:e.type==="icon-home"&&f?`${f} home page`:e.text,ref:a,children:m}),e.items&&p.jsx(ha,{items:e.items,buttons:e.buttons,dropdownName:e.text,classes:`header-dropdown-${e.id} ${i?"opened":""}`,listId:`dropdown-${e.id}`,setItemOpened:t,parentLink:a==null?void 0:a.current})]})};ga.propTypes={link:br,setItemOpened:d.func,itemOpened:d.number};ga.__docgenInfo={description:`@param {{ link: NavTreeProps, setItemOpened: Function, itemOpened: number }} props
@returns {JSX.Element}`,methods:[],displayName:"NavItem",props:{link:{description:"",type:{name:"shape",value:{id:{name:"number",required:!1},href:{name:"string",required:!1},text:{name:"string",required:!1},type:{name:"string",required:!1},selected:{name:"bool",required:!1},items:{name:"arrayOf",value:{name:"arrayOf",value:{name:"object"}},required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},class:{name:"string",required:!1}}},required:!1},setItemOpened:{description:"",type:{name:"func"},required:!1},itemOpened:{description:"",type:{name:"number"},required:!1}}};const Gr=()=>{const{navTree:e,mobileNavTree:t,buttons:n,breakpoint:r}=$e(),a=Vn(r),[i,o]=G.useState(void 0),l=c=>{o(m=>i===c?void 0:c)},f=(c,m)=>{const w={...c,id:m},R=xs(`${c.text}-${m}-`).next().value;return p.jsx(ga,{link:w,setItemOpened:()=>l(m),itemOpened:i},R)};return p.jsxs(ld,{breakpoint:r,"data-testid":"navigation","aria-label":"Site",children:[((e==null?void 0:e.length)||(t==null?void 0:t.length)||(n==null?void 0:n.length))&&p.jsxs("div",{className:"content-container",children:[((e==null?void 0:e.length)||(t==null?void 0:t.length))&&p.jsx("ul",{className:"nav-list",children:t!=null&&t.length&&a?t==null?void 0:t.map((c,m)=>f(c,m)):e==null?void 0:e.map((c,m)=>f(c,m))}),!!(n!=null&&n.length)&&p.jsx("form",{className:"buttons-container","data-testid":"buttons-container",children:n==null?void 0:n.map(c=>G.createElement(Tt,{...c,key:c.text,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:c.text})}))})]}),a&&p.jsx(ma,{})]})};Gr.__docgenInfo={description:"",methods:[],displayName:"NavbarContainer"};const pd=be.div`
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
`,ya=ws(),md=`${ya}/assets/img/arizona-state-university-logo-vertical.png`,hd=`${ya}/assets/img/arizona-state-university-logo.png`,gd=`${ya}/assets/img/asu-starbucks.png`,Ns=()=>{const{partnerLogo:e,logo:t,breakpoint:n}=$e();return p.jsxs(pd,{breakpoint:n,"data-testid":"partner",children:[p.jsx("a",{href:(e==null?void 0:e.brandLink)??"https://starbucks.asu.edu/",onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"partner logo"}),children:p.jsx("img",{src:(e==null?void 0:e.src)??gd,alt:(e==null?void 0:e.alt)??"ASU Starbucks logo",width:"232",height:"81",decoding:"async",fetchpriority:"high"})}),p.jsxs("a",{href:(t==null?void 0:t.brandLink)??"https://asu.edu",onClick:()=>le({text:"asu logo"}),children:[p.jsx("img",{className:"vert",src:(t==null?void 0:t.src)??md,alt:(t==null?void 0:t.alt)??"Arizona State University",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),p.jsx("img",{className:"horiz",src:(t==null?void 0:t.mobileSrc)??hd,alt:(t==null?void 0:t.alt)??"Arizona State University",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})]})};Ns.__docgenInfo={description:"",methods:[],displayName:"Partner"};const yd=(e,t)=>{const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n},vd=e=>{const t="localhost",n="title_loaded",r=new Date,a=e||window.location.hostname,i=localStorage.getItem("title_loaded"),o=r.getTime()>parseInt(i,10),l=a===t,f=document.referrer.includes(a);if(l||!f&&(!i||o)){const m=yd(r,10).getTime();return localStorage.setItem(n,m.toString()),!0}return!1},bd={"992px":"993px","1260px":"1261px"},Pi=be.div`
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

  @media (min-width: ${({breakpoint:e})=>bd[e]}) {
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
`,va=()=>{const[e,t]=G.useState(!1),{title:n,parentOrg:r,parentOrgUrl:a,baseUrl:i,breakpoint:o,animateTitle:l}=$e();return G.useEffect(()=>{if(l!==!1){let f=i==="/"?window.location.hostname:i;!f.includes(window.location.hostname)&&f.indexOf("/")===0&&(f=window.location.hostname+f),vd(f)&&t(!0)}},[e,l,i]),r?p.jsxs(Pi,{breakpoint:o,className:"title","data-testid":"title",children:[p.jsx("a",{className:"unit-name",href:a,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:r}),title:`${r} home page`,children:r}),p.jsx("a",{className:`subunit-name ${e?"active":""}`,href:i,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:n}),title:`${n} home page`,children:n})]}):p.jsx(Pi,{breakpoint:o,className:"title","data-testid":"title",children:p.jsx("a",{className:`title-subunit-name ${e?"active":""}`,href:i,onClick:()=>le({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:n}),title:`${n} home page`,children:n})})};va.propTypes={...un};va.__docgenInfo={description:"",methods:[],displayName:"Title",props:{baseUrl:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},animate:{description:"",type:{name:"bool"},required:!1}}};const Ls=()=>{const{breakpoint:e,isPartner:t,hasNavigation:n}=$e(),[r,a]=G.useState(!1),i=Vn(e),o=()=>{a(f=>!f)},l=()=>{o(),le({event:"collapse",action:r?"close":"open",type:"click",text:"menu button tablet"})};return p.jsxs(p.Fragment,{children:[!i&&p.jsx(ma,{}),p.jsx(ad,{breakpoint:e,children:p.jsx("div",{className:"container-xl",children:p.jsx("div",{className:"header-main",children:p.jsxs("div",{className:`navbar navbar-expand-xl ${t?"partner":""}`,children:[!t&&p.jsx(Es,{}),p.jsx("button",{className:`navbar-toggler${r?"":" collapsed"}`,type:"button",onClick:l,"aria-label":"Toggle navigation",children:p.jsx(rt,{icon:r?Mo:ac,alt:""})}),p.jsxs("div",{className:`${t?"":"expand-title"}${n?"":" no-navigation"}`,children:[t?p.jsx(Ns,{}):p.jsx(va,{}),!i&&p.jsx(Gr,{})]}),r&&i&&p.jsx(Gr,{})]})})})})]})};Ls.__docgenInfo={description:"",methods:[],displayName:"HeaderMain"};const xd=(e,t)=>e==null?void 0:e.findIndex(n=>{var r;return(n==null?void 0:n.href)===t||Array.isArray(n.items)&&((r=n.items)==null?void 0:r.flat().find(({href:a})=>a===t))}),wd=e=>e==null?void 0:e.find(t=>t.selected),Ni=e=>{if(!Array.isArray(e)||e.length===0||wd(e))return e;let t="";if(window!=null&&window.location&&(t=window.location.pathname+window.location.search),!t)return e;const n=xd(e,t);if(n===-1)return e;const r=[...e];return r[n].selected=!0,r},Is={Lg:"992px",Xl:"1260px"},Ad=be.header`
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
  @media (min-width: ${({breakpoint:e})=>Is[e]}) {
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
`,Sd=be.div`
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
  @media (min-width: ${({breakpoint:e})=>Is[e]}) {
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
`,_t=({isPartner:e,navTree:t,title:n,baseUrl:r,parentOrg:a,parentOrgUrl:i,partnerLogo:o,logo:l,loggedIn:f,userName:c,loginLink:m,onLoginClick:w,logoutLink:T,onLogoutClick:R,buttons:A,breakpoint:_,animateTitle:h,expandOnHover:k,mobileNavTree:S,searchUrl:M,site:L,renderDiv:F="false"})=>{const J=Ni(t),ee=Ni(S),Z=G.useRef(null),re=()=>{window.scrollY>Z.current.getBoundingClientRect().top?Z.current.classList.add("scrolled"):Z.current.classList.remove("scrolled")};G.useEffect(()=>{typeof window<"u"&&rc({packageName:"component-header",component:"Component Header",type:"NA",configuration:{site:L,isPartner:e,searchUrl:M,navTree:J,parentOrg:a,buttons:A,mobileNavTree:ee}})},[]),G.useEffect(()=>(window==null||window.addEventListener("scroll",re),()=>window.removeEventListener("scroll",re)),[]);const ce=()=>{const Re=F==="true"?Sd:Ad;return p.jsx(Re,{id:"asuHeader",ref:Z,breakpoint:_,children:p.jsx(Ls,{})})};return p.jsx(pa,{initialValue:{isPartner:e,navTree:J,title:n,baseUrl:r,parentOrg:a,parentOrgUrl:i,partnerLogo:o,logo:l,loggedIn:f,userName:c,loginLink:m,onLoginClick:w,logoutLink:T,onLogoutClick:R,buttons:A,breakpoint:_,animateTitle:h,expandOnHover:k,mobileNavTree:ee,hasNavigation:!!(J!=null&&J.length)||!!(ee!=null&&ee.length),searchUrl:M,site:L},children:ce()})};_t.propTypes={...vo};_t.defaultProps={isPartner:!1,baseUrl:"/",breakpoint:"Xl",expandOnHover:!1};_t.__docgenInfo={description:`@param {HeaderProps} props
@returns {JSX.Element}`,methods:[],displayName:"ASUHeader",props:{renderDiv:{defaultValue:{value:'"false"',computed:!1},description:"",type:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}]},required:!1},isPartner:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},baseUrl:{defaultValue:{value:'"/"',computed:!1},description:"",type:{name:"string"},required:!1},breakpoint:{defaultValue:{value:'"Xl"',computed:!1},description:"",type:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}]},required:!1},expandOnHover:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},navTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},partnerLogo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},logo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},title:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1},userName:{description:"",type:{name:"string"},required:!1},loginLink:{description:"",type:{name:"string"},required:!1},onLoginClick:{description:"",type:{name:"func"},required:!1},logoutLink:{description:"",type:{name:"string"},required:!1},onLogoutClick:{description:"",type:{name:"func"},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},animateTitle:{description:"",type:{name:"bool"},required:!1},mobileNavTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},hasNavigation:{description:"",type:{name:"bool"},required:!1},searchUrl:{description:"",type:{name:"string"},required:!1},site:{description:"",type:{name:"string"},required:!1}}};const Cd={title:"UDS/ASU Header",component:_t,argTypes:{renderDiv:{control:"select",options:["true","false"],description:"Either 'true' or 'false'. If 'true', the header will be rendered as a div instead of a header element."}}},qe=e=>p.jsxs(p.Fragment,{children:[p.jsx(_t,{...e}),p.jsx("div",{style:{width:"100%",height:"200vh",background:"#f0f0f0",paddingTop:40,marginTop:140},children:p.jsx("h1",{style:{textAlign:"center",fontFamily:"Arial"},children:"Scroll section"})})]}),kd=e=>{const t=()=>{localStorage.getItem("title_loaded")&&localStorage.removeItem("title_loaded"),setTimeout(()=>{window.location.reload()},1e3)};return p.jsxs(p.Fragment,{children:[p.jsx(_t,{...e,animateTitle:!0}),p.jsx("div",{style:{marginTop:200,textAlign:"center"},children:p.jsx(Tt,{text:"Animate Title",color:"dark",onClick:t})})]})},Nt=qe.bind({});Nt.args={loggedIn:!1,userName:"",navTree:Vt,title:"Subdomain name",breakpoint:"Lg",searchUrl:"https://search.asu.edu/search",site:"subdomain",renderDiv:"false"};const Lt=qe.bind({});Lt.args={};const It=qe.bind({});It.args={title:"Subdomain name",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Rt=qe.bind({});Rt.args={title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Mt=qe.bind({});Mt.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:Vt,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Dt=qe.bind({});Dt.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:Vt,mobileNavTree:nc,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ft=qe.bind({});Ft.args={navTree:tc,title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold",classes:"custom-class"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const jt=qe.bind({});jt.args={navTree:Ro,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const zt=qe.bind({});zt.args={navTree:Ro,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",expandOnHover:!0,searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ut=qe.bind({});Ut.args={isPartner:!0,navTree:Vt,loggedIn:!1,userName:"",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const $t=kd.bind({});$t.args={title:"Subdomain name",navTree:Vt,loggedIn:!1,logoutLink:"/caslogout",loginLink:"/cas",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};var Li,Ii,Ri;Nt.parameters={...Nt.parameters,docs:{...(Li=Nt.parameters)==null?void 0:Li.docs,source:{originalSource:`args => <>
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
  </>`,...(Ri=(Ii=Nt.parameters)==null?void 0:Ii.docs)==null?void 0:Ri.source}}};var Mi,Di,Fi;Lt.parameters={...Lt.parameters,docs:{...(Mi=Lt.parameters)==null?void 0:Mi.docs,source:{originalSource:`args => <>
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
  </>`,...(Fi=(Di=Lt.parameters)==null?void 0:Di.docs)==null?void 0:Fi.source}}};var ji,zi,Ui;It.parameters={...It.parameters,docs:{...(ji=It.parameters)==null?void 0:ji.docs,source:{originalSource:`args => <>
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
  </>`,...(Ui=(zi=It.parameters)==null?void 0:zi.docs)==null?void 0:Ui.source}}};var $i,qi,Hi;Rt.parameters={...Rt.parameters,docs:{...($i=Rt.parameters)==null?void 0:$i.docs,source:{originalSource:`args => <>
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
  </>`,...(Hi=(qi=Rt.parameters)==null?void 0:qi.docs)==null?void 0:Hi.source}}};var Wi,Bi,Gi;Mt.parameters={...Mt.parameters,docs:{...(Wi=Mt.parameters)==null?void 0:Wi.docs,source:{originalSource:`args => <>
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
  </>`,...(Gi=(Bi=Mt.parameters)==null?void 0:Bi.docs)==null?void 0:Gi.source}}};var Yi,Xi,Vi;Dt.parameters={...Dt.parameters,docs:{...(Yi=Dt.parameters)==null?void 0:Yi.docs,source:{originalSource:`args => <>
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
  </>`,...(Vi=(Xi=Dt.parameters)==null?void 0:Xi.docs)==null?void 0:Vi.source}}};var Ki,Zi,Qi;Ft.parameters={...Ft.parameters,docs:{...(Ki=Ft.parameters)==null?void 0:Ki.docs,source:{originalSource:`args => <>
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
  </>`,...(Qi=(Zi=Ft.parameters)==null?void 0:Zi.docs)==null?void 0:Qi.source}}};var Ji,eo,to;jt.parameters={...jt.parameters,docs:{...(Ji=jt.parameters)==null?void 0:Ji.docs,source:{originalSource:`args => <>
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
  </>`,...(to=(eo=jt.parameters)==null?void 0:eo.docs)==null?void 0:to.source}}};var no,ro,ao;zt.parameters={...zt.parameters,docs:{...(no=zt.parameters)==null?void 0:no.docs,source:{originalSource:`args => <>
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
  </>`,...(ao=(ro=zt.parameters)==null?void 0:ro.docs)==null?void 0:ao.source}}};var io,oo,so;Ut.parameters={...Ut.parameters,docs:{...(io=Ut.parameters)==null?void 0:io.docs,source:{originalSource:`args => <>
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
  </>`,...(so=(oo=Ut.parameters)==null?void 0:oo.docs)==null?void 0:so.source}}};var lo,co,uo;$t.parameters={...$t.parameters,docs:{...(lo=$t.parameters)==null?void 0:lo.docs,source:{originalSource:`args => {
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
}`,...(uo=(co=$t.parameters)==null?void 0:co.docs)==null?void 0:uo.source}}};const Od=["Default","Empty","NoNavigation","NoNavigationWithButtons","BreakpointXL","WithMobileNavTree","WithButtons","WithMenuColumns","ExpandOnHover","Partner","AnimatedTitle"];export{$t as AnimatedTitle,Mt as BreakpointXL,Nt as Default,Lt as Empty,zt as ExpandOnHover,It as NoNavigation,Rt as NoNavigationWithButtons,Ut as Partner,Ft as WithButtons,jt as WithMenuColumns,Dt as WithMobileNavTree,Od as __namedExportsOrder,Cd as default};
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
