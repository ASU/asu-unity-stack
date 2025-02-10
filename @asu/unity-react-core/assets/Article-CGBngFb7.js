import{j as o}from"./jsx-runtime-BXONz2zb.js";import{c as j}from"./index-DbSsuYgj.js";import{P as l}from"./index-Cqy-YfF9.js";import{R as b,r as H}from"./index-mEo-t6td.js";import{s as _}from"./html-utils-v5abHA4p.js";import"./googleAnalytics-BohoIYAK.js";import{B as C}from"./Button-DXDwVTgi.js";import{q as D}from"./styled-components.browser.esm-heMRbImm.js";var q=function(){return q=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},q.apply(this,arguments)},Q=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function k(e){var r=function(t){var n=t.bgStyle,a=t.borderRadius,i=t.iconFillColor,d=t.round,c=t.size,f=Q(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return b.createElement("svg",q({viewBox:"0 0 64 64",width:c,height:c},f),d?b.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):b.createElement("rect",{width:"64",height:"64",rx:a,ry:a,fill:e.color,style:n}),b.createElement("path",{d:e.path,fill:i}))};return r.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},r}var ee=k({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"});function N(e){var r=Object.entries(e).filter(function(t){var n=t[1];return n!=null}).map(function(t){var n=t[0],a=t[1];return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(String(a)))});return r.length>0?"?".concat(r.join("&")):""}var te=function(){var e=function(r,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])},e(r,t)};return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),v=function(){return v=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},v.apply(this,arguments)},re=function(e,r,t,n){function a(i){return i instanceof t?i:new t(function(d){d(i)})}return new(t||(t=Promise))(function(i,d){function c(u){try{s(n.next(u))}catch(h){d(h)}}function f(u){try{s(n.throw(u))}catch(h){d(h)}}function s(u){u.done?i(u.value):a(u.value).then(c,f)}s((n=n.apply(e,r||[])).next())})},ne=function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,d;return d={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function c(s){return function(u){return f([s,u])}}function f(s){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,a&&(i=s[0]&2?a.return:s[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;switch(a=0,i&&(s=[s[0]&2,i.value]),s[0]){case 0:case 1:i=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,a=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1],i=s;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(s);break}i[2]&&t.ops.pop(),t.trys.pop();continue}s=r.call(e,t)}catch(u){s=[6,u],a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},F=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t},ae=function(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"},ie=function(e,r){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-r/2}},oe=function(e,r){return{top:(window.screen.height-r)/2,left:(window.screen.width-e)/2}};function se(e,r,t){var n=r.height,a=r.width,i=F(r,["height","width"]),d=v({height:n,width:a,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(e,"",Object.keys(d).map(function(s){return"".concat(s,"=").concat(d[s])}).join(", "));if(t)var f=window.setInterval(function(){try{(c===null||c.closed)&&(window.clearInterval(f),t(c))}catch(s){console.error(s)}},1e3);return c}var le=function(e){te(r,e);function r(){var t=e!==null&&e.apply(this,arguments)||this;return t.openShareDialog=function(n){var a=t.props,i=a.onShareWindowClose,d=a.windowHeight,c=d===void 0?400:d,f=a.windowPosition,s=f===void 0?"windowCenter":f,u=a.windowWidth,h=u===void 0?550:u,m=v({height:c,width:h},s==="windowCenter"?ie(h,c):oe(h,c));se(n,m,i)},t.handleClick=function(n){return re(t,void 0,void 0,function(){var a,i,d,c,f,s,u,h,m,p;return ne(this,function(g){switch(g.label){case 0:return a=this.props,i=a.beforeOnClick,d=a.disabled,c=a.networkLink,f=a.onClick,s=a.url,u=a.openShareDialogOnClick,h=a.opts,m=c(s,h),d?[2]:(n.preventDefault(),i?(p=i(),ae(p)?[4,p]:[3,2]):[3,2]);case 1:g.sent(),g.label=2;case 2:return u&&this.openShareDialog(m),f&&f(n,m),[2]}})})},t}return r.prototype.render=function(){var t=this.props;t.beforeOnClick;var n=t.children,a=t.className,i=t.disabled,d=t.disabledStyle,c=t.forwardedRef;t.networkLink;var f=t.networkName;t.onShareWindowClose,t.openShareDialogOnClick,t.opts;var s=t.resetButtonStyle,u=t.style;t.url,t.windowHeight,t.windowPosition,t.windowWidth;var h=F(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"]),m=j("react-share__ShareButton",{"react-share__ShareButton--disabled":!!i,disabled:!!i},a),p=v(v(s?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),i&&d);return b.createElement("button",v({},h,{"aria-label":h["aria-label"]||f,className:m,onClick:this.handleClick,ref:c,style:p}),n)},r.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},r}(H.Component),O=function(){return O=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},O.apply(this,arguments)};function S(e,r,t,n){function a(i,d){var c=t(i),f=O({},i),s=Object.keys(c);return s.forEach(function(u){delete f[u]}),b.createElement(le,O({},n,f,{forwardedRef:d,networkName:e,networkLink:r,opts:t(i)}))}return a.displayName="ShareButton-".concat(e),H.forwardRef(a)}function ce(e,r){var t=r.subject,n=r.body,a=r.separator;return"mailto:"+N({subject:t,body:n?n+a+e:e})}var de=S("email",ce,function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}},{openShareDialogOnClick:!1,onClick:function(e,r){window.location.href=r}}),I=k({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"}),ue=function(){var e=function(r,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])},e(r,t)};return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),fe=function(e){ue(r,e);function r(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return r}(Error);function x(e,r){if(!e)throw new fe(r)}function he(e,r){var t=r.quote,n=r.hashtag;return x(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+N({u:e,quote:t,hashtag:n})}var A=S("facebook",he,function(e){return{quote:e.quote,hashtag:e.hashtag}},{windowWidth:550,windowHeight:400}),M=k({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});function me(e,r){var t=r.title,n=r.summary,a=r.source;return x(e,"linkedin.url"),"https://linkedin.com/shareArticle"+N({url:e,mini:"true",title:t,summary:n,source:a})}var V=S("linkedin",me,function(e){var r=e.title,t=e.summary,n=e.source;return{title:r,summary:t,source:n}},{windowWidth:750,windowHeight:600}),$=k({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});function pe(e,r){var t=r.title,n=r.via,a=r.hashtags,i=a===void 0?[]:a,d=r.related,c=d===void 0?[]:d;return x(e,"twitter.url"),x(Array.isArray(i),"twitter.hashtags is not an array"),x(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+N({url:e,text:t,via:n,hashtags:i.length>0?i.join(","):void 0,related:c.length>0?c.join(","):void 0})}var W=S("twitter",pe,function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}},{windowWidth:550,windowHeight:400});function P(e){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},P(e)}var ge;function T(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ge;return r?e.split(" ").map(function(t){return r[t]||t}).join(" "):e}var ve=(typeof window>"u"?"undefined":P(window))==="object"&&window.Element||function(){};function be(e,r,t){if(!(e[r]instanceof ve))return new Error("Invalid prop `"+r+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")}l.oneOfType([l.string,l.func,be,l.shape({current:l.any})]);var E=l.oneOfType([l.func,l.string,l.shape({$$typeof:l.symbol,render:l.func}),l.arrayOf(l.oneOfType([l.func,l.string,l.shape({$$typeof:l.symbol,render:l.func})]))]),ye=["className","listClassName","cssModule","children","tag","listTag","aria-label"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},R.apply(this,arguments)}function we(e,r){if(e==null)return{};var t=xe(e,r),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function xe(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}var je={"aria-label":l.string,children:l.node,className:l.string,cssModule:l.object,listClassName:l.string,listTag:E,tag:E};function Z(e){var r=e.className,t=e.listClassName,n=e.cssModule,a=e.children,i=e.tag,d=i===void 0?"nav":i,c=e.listTag,f=c===void 0?"ol":c,s=e["aria-label"],u=s===void 0?"breadcrumb":s,h=we(e,ye),m=T(j(r),n),p=T(j("breadcrumb",t),n);return b.createElement(d,R({},h,{className:m,"aria-label":u}),b.createElement(f,{className:p},a))}Z.propTypes=je;var Oe=["className","cssModule","active","tag"];function z(){return z=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},z.apply(this,arguments)}function ke(e,r){if(e==null)return{};var t=Ne(e,r),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function Ne(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}var Se={active:l.bool,className:l.string,cssModule:l.object,tag:E};function B(e){var r=e.className,t=e.cssModule,n=e.active,a=e.tag,i=a===void 0?"li":a,d=ke(e,Oe),c=T(j(r,n?"active":!1,"breadcrumb-item"),t);return b.createElement(i,z({},d,{className:c,"aria-current":n?"page":void 0}))}B.propTypes=Se;const _e=D.div`
  &.news-container h2 {
    font-size: 48px;
  }

  &.event-container h2 {
    font-size: 40px;
  }

  &.news-container img,
  &.event-container img {
    width: 100%;
    max-width: fit-content;
  }

  &.wrapper-container h4 {
    margin-top: 0;
  }

  &.wrapper-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10%;
  }

  &.event-container.wrapper-container {
    max-width: 1500px;
  }

  &.news-container {
    background: #fff;
  }

  ol.breadcrumb {
    padding: 0;
    margin: 0;
  }

  ol.breadcrumb > li {
    margin-bottom: 0;
  }

  .article-social-media {
    margin-bottom: 24px;
  }

  .react-share__ShareButton {
    margin-right: 12px;
  }

  i.news-date {
    display: inline-block;
    margin-bottom: 24px;
  }

  .highlight-gold {
    box-shadow: -0.15em 0 0 #ffc627, 0.15em 0 0 #ffc627;
    background: #ffc627;
  }

  .author {
    display: inline-block;
    margin-top: 30px;
    margin-left: -7px;
    padding: 0 6px;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .icon-bg {
    display: inline-block;
    position: relative;
    padding: 1px 3.5px;
    background-color: maroon;
    margin-right: 4px;
    border-radius: 4px;
    color: white;
    font-size: 0.65rem;
  }

  .uds-button {
    margin-top: 17px;
    padding: 0;
  }

  .author-title {
    max-width: 250px;
    margin-top: 10px;
    margin-bottom: 11px;
    font-size: 16px;
  }

  .author-contact {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  ol.breadcrumb a {
    text-decoration: none;
  }

  i.fa-calendar,
  i.fa-map-marker-alt {
    font-size: 1.17rem;
    margin-right: 8px;
  }

  .event-author {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .event-author-title {
    margin-top: 4px;
  }

  .event-author-info {
    margin-top: 24px;
  }
`,Ce=D.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`,L=({type:e,articleUrl:r,publicationDate:t,title:n,body:a,authorEmail:i,authorName:d,authorPhone:c,authorTitle:f,breadcrumbs:s,calendarUrl:u,eventLocation:h,eventTime:m,headerImageUrl:p,registrationUrl:g,zoomUrl:y})=>{const G=j("col","col-12",{"col-lg-8":e==="event"&&(g||y||u)}),X=()=>g?o.jsx("div",{className:"card-button uds-button",children:o.jsx(C,{color:"maroon",href:g,label:"Register"})}):o.jsx("div",{className:"card-button uds-button",children:o.jsx(C,{color:"maroon",href:y,label:"Attend on Zoom"})}),J=()=>o.jsx("div",{className:"row pb-2","data-testid":"author-info",children:o.jsxs("div",{className:"col col-12",children:[o.jsx("div",{className:"author highlight-gold",children:d}),f&&o.jsx("div",{className:"author-title",children:f}),i&&o.jsxs("div",{className:"author-contact",children:[o.jsx("span",{className:"icon-bg",children:o.jsx("i",{className:"fas fa-envelope"})}),o.jsx("a",{href:`mailto: ${i}`,children:i})]}),c&&o.jsxs("div",{className:"author-contact",children:[o.jsx("span",{className:"icon-bg",children:o.jsx("i",{className:"fas fa-phone"})}),o.jsx("a",{href:`tel: ${c}`,children:c})]})]})}),K=()=>o.jsxs(Ce,{className:"row row-spaced mt-3 pt-6 pb-2 event-info","data-testid":"event-info",children:[o.jsxs("div",{className:"col col-lg-4 col-md-6 col-12",children:[o.jsx("h4",{children:"For more information contact:"}),o.jsx("div",{className:"event-author",children:d}),o.jsx("div",{className:"event-author-title",children:f}),(i||c)&&o.jsxs("div",{className:"event-author-info",children:[i&&o.jsx("div",{children:o.jsx("a",{href:`mailto: ${i}`,children:i})}),c&&o.jsx("div",{children:o.jsx("a",{href:`tel: ${c}`,children:c})})]})]}),o.jsxs("div",{className:"col col-lg-4 col-md-6 col-12",children:[o.jsx("h4",{children:"Share this event:"}),o.jsxs("div",{className:"article-social-media",children:[o.jsx(A,{url:r,quote:n,children:o.jsx(I,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})}),o.jsx(W,{url:r,quote:n,children:o.jsx($,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})}),o.jsx(de,{url:i,quote:n,children:o.jsx(ee,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})}),o.jsx(V,{url:r,quote:n,children:o.jsx(M,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})})]})]})]}),U=()=>o.jsxs("div",{className:"col col-12 col-lg-4 col-md-6",children:[o.jsxs("h4",{children:[o.jsx("i",{className:"fas fa-map-marker-alt"}),"Location:"]}),o.jsx("div",{dangerouslySetInnerHTML:_(h)}),g&&y&&o.jsx("a",{href:y,children:"Attend on Zoom"})]}),Y=w=>o.jsx(B,{active:w.active,tag:"li",className:"breadcrumb-item",children:o.jsx(B,{tag:"a",href:w.url,children:w.title})},w.title);return o.jsxs(o.Fragment,{children:[p&&e!=="event"&&o.jsx("div",{"data-testid":"uds-hero",className:"uds-hero uds-hero-md",style:{backgroundImage:`linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${p})`}}),o.jsxs(_e,{className:`container ${e}-container wrapper-container`,children:[s&&o.jsx("div",{className:"row pt-4","data-testid":"breadcrumbs",children:o.jsx("div",{className:"col col-12",children:o.jsx(Z,{listClassName:"breadcrumb",children:s.map(w=>Y(w))})})}),o.jsxs("div",{className:"row pb-2 pt-3",children:[o.jsx("div",{className:G,children:o.jsx("h2",{"data-testid":"title",children:n})}),e==="event"&&o.jsxs("div",{className:"col col-lg-4 col-xs-12",children:[(g||y)&&X(),u&&o.jsx("div",{className:"card-button uds-button",children:o.jsx(C,{color:"gray",size:"small",href:u,label:"Add to calendar"})})]})]}),e==="event"?o.jsxs("div",{className:"row row-spaced pt-3 mb-2",children:[m&&o.jsxs("div",{className:"col col-lg-4 col-md-6 col-sm-12",children:[o.jsxs("h4",{children:[o.jsx("i",{className:"far fa-calendar"}),"Date and time:"]}),o.jsx("div",{dangerouslySetInnerHTML:_(m)})]}),(g&&y||h)&&U()]}):o.jsx("div",{className:"row row-spaced pt-2",children:o.jsxs("div",{className:"col col-12",children:[o.jsxs("div",{className:"article-social-media",children:[o.jsx(A,{url:r,quote:n,children:o.jsx(I,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})}),o.jsx(W,{url:r,quote:n,children:o.jsx($,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})}),o.jsx(V,{url:r,quote:n,children:o.jsx(M,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})})]}),t&&o.jsx("i",{className:"news-date",children:t})]})}),o.jsx("div",{className:"row",children:o.jsx("div",{className:"col col-12",dangerouslySetInnerHTML:_(a),"data-testid":"body"})}),e==="news"&&J(),e==="event"&&K()]})]})};L.propTypes={type:l.oneOf(["event","news"]),articleUrl:l.string.isRequired,publicationDate:l.string.isRequired,title:l.string.isRequired,body:l.string.isRequired,authorEmail:l.string,authorName:l.string.isRequired,authorPhone:l.string,authorTitle:l.string,breadcrumbs:l.arrayOf(l.shape({title:l.string,url:l.string,active:l.bool})),calendarUrl:l.string,headerImageUrl:l.string,eventLocation:l.string,eventTime:l.string,registrationUrl:l.string,zoomUrl:l.string};L.defaultProps={type:"news",authorEmail:void 0,authorPhone:void 0,authorTitle:void 0,breadcrumbs:void 0,calendarUrl:void 0,headerImageUrl:void 0,eventLocation:void 0,eventTime:void 0,registrationUrl:void 0,zoomUrl:void 0};L.__docgenInfo={description:`@param {ArticleProps} props
@returns {JSX.Element}`,methods:[],displayName:"Article",props:{type:{defaultValue:{value:'"news"',computed:!1},description:"Type of article",type:{name:"enum",value:[{value:'"event"',computed:!1},{value:'"news"',computed:!1}]},required:!1},authorEmail:{defaultValue:{value:"undefined",computed:!0},description:"Article author email",type:{name:"string"},required:!1},authorPhone:{defaultValue:{value:"undefined",computed:!0},description:"Article author phone number",type:{name:"string"},required:!1},authorTitle:{defaultValue:{value:"undefined",computed:!0},description:"Article author title",type:{name:"string"},required:!1},breadcrumbs:{defaultValue:{value:"undefined",computed:!0},description:"Breadcrumbs array",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},url:{name:"string",required:!1},active:{name:"bool",required:!1}}}},required:!1},calendarUrl:{defaultValue:{value:"undefined",computed:!0},description:'URL for an "add to calendar" button',type:{name:"string"},required:!1},headerImageUrl:{defaultValue:{value:"undefined",computed:!0},description:"Article image",type:{name:"string"},required:!1},eventLocation:{defaultValue:{value:"undefined",computed:!0},description:"Event location",type:{name:"string"},required:!1},eventTime:{defaultValue:{value:"undefined",computed:!0},description:"Event time",type:{name:"string"},required:!1},registrationUrl:{defaultValue:{value:"undefined",computed:!0},description:"URL for a registation button",type:{name:"string"},required:!1},zoomUrl:{defaultValue:{value:"undefined",computed:!0},description:"URL for a Zoom button",type:{name:"string"},required:!1},articleUrl:{description:"This is the relative or absolute url to the full-page article",type:{name:"string"},required:!0},publicationDate:{description:"Date for the article",type:{name:"string"},required:!0},title:{description:"Title",type:{name:"string"},required:!0},body:{description:"Body content for the article",type:{name:"string"},required:!0},authorName:{description:"Article author full name",type:{name:"string"},required:!0}}};export{L as A};
