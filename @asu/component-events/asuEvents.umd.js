!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define("AsuEvents",["React","ReactDOM"],t):"object"==typeof exports?exports.AsuEvents=t(require("React"),require("ReactDOM")):e.AsuEvents=t(e.React,e.ReactDOM)}(self,((e,t)=>(()=>{"use strict";var n,r={372:(e,t,n)=>{n.r(t),n.d(t,{CardsGridEvents:()=>U,CardsListEvents:()=>A,initCardsGridEventsComponent:()=>P,initCardsListEventsComponent:()=>q});var r=n(883),a=n.n(r);const o=function(e){var t=e.packageName,n=void 0===t?"":t,r=e.component,a=void 0===r?"":r,o=e.type,i=void 0===o?"":o,c=e.configuration,d=void 0===c?{}:c;n&&a?(window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[n]={component:a,type:i,configuration:d}):console.error("trackReactComponent: Missing required arguments.")};var i=n(958),c=n(598),d=n.n(c),s=d().shape({color:d().oneOf(["white","dark"]),text:d().string}),l=d().shape({color:d().oneOf(["gold","maroon","gray","dark"]),text:d().string}),u=(d().shape({color:d().oneOf(["gold","maroon","gray","dark"]),text:d().string,size:d().string}),d().shape({url:d().string,filters:d().string})),p=(d().shape({header:s,ctaButton:l,dataSource:u,maxItems:d().number}),{header:{color:"dark",text:"Events list"},ctaButton:{color:"gold",text:"Click to see more events",url:"https://asuevents.asu.edu/"},dataSource:{url:"https://asuevents.asu.edu/feed-json/"}}),m=["eventTopics","eventUnits","interests","audiences","eventTypes","collegeUnit"],v=function(e){return e.toLowerCase().split(" ").join("_")},f=function(e,t){if(!t)return!0;for(var n=t.split(","),r=0;r<n.length;r+=1)for(var a=v(n[r]),o=0;o<m.length;o+=1){if(v(e[m[o]]||"").includes(a))return!0}return!1},g=function(e){return{id:e.node.nid,title:e.node.title,imageUrl:e.node.image_url,location:(e.node.campus||"").trim(),interests:e.node.interests,startDate:e.node.very_start_date,endDate:e.node.very_end_date,alias:e.node.alias,audiences:e.node.audiences,eventUnits:e.node.event_units,eventTopics:e.node.event_topics,eventTypes:e.node.event_types,collegeUnit:e.node.college_unit,eventButtonUrl:e.node.ticketing_rsvp_url,eventButtonText:e.node.ticketing_rsvp_txt}},h=function(e){var t=e.children,n=e.header,r=e.ctaButton,o=e.dataSource,c=e.maxItems;return a().createElement(i.Pb,{renderHeader:n&&r?a().createElement(i._Q,{header:n,ctaButton:r,defaultProps:p}):null,renderBody:a().createElement(i.TR,null,t),dataTransformer:g,dataFilter:f,dataSource:o,defaultProps:p,noFeedText:"No events to show.",maxItems:c})};h.propTypes={header:s,ctaButton:l,dataSource:u,maxItems:d().number,children:d().element};var x,y,w={header:d().shape({color:d().oneOf(["white","dark"]),text:d().string}),ctaButton:d().shape({color:d().oneOf(["gold","maroon","gray","dark"]),text:d().string,url:d().string}),dataSource:d().shape({url:d().string.isRequired,filters:d().string}).isRequired,maxItems:d().number},E=function(e){return e.toLocaleDateString("en-US",{timeZone:"UTC",weekday:"long",month:"long",day:"numeric"})},k=function(e){return e.toLocaleString("en-US",{timeZone:"UTC"})},b=function(e){var t=e.split("T");return t=t.length>1?t.join("T"):"".concat(t[0].split(":")[0],"T00:00:00Z")},O=function(e){var t=e.getHours(),n=e.getMinutes(),r=t>=12?"p.m.":"a.m.";return t=(t%=12)||12,n=n<10?"0".concat(n):n,"".concat(t,":").concat(n," ").concat(r)},S=function(e,t){var n=b(e),r=b(t),a=k(new Date(n)),o=k(new Date(r));return a=O(new Date(a)),o=O(new Date(o)),e===t?a:"".concat(a," - ").concat(o)},T=function(e,t){var n=b(e);return{ISO:n.split("T")[0],COMPLETE:E(new Date(n))}[t]},D=n(972),C=n(254),B=C.Ay.ul(x||(x=(0,D.A)(["\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: grid;\n  column-gap: 24px;\n  row-gap: 24px;\n  grid-template-columns: repeat(3, 1fr);\n  li {\n    .card-img-top {\n      border-radius: 0 !important;\n    }\n  }\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    .card-event-details {\n      flex-direction: column;\n      .card-event-icons {\n        width: 100%;\n        &:nth-child(1) {\n          margin-bottom: 24px;\n        }\n      }\n    }\n  }\n"]))),_=function(){var e=(0,r.useContext)(i.Ur).feeds;return a().createElement(B,{"data-testid":"grid-view-container"},null==e?void 0:e.map((function(e){return a().createElement("li",{key:e.id},a().createElement(i.Zp,{type:"event",eventFormat:"inline",eventTime:"<span>\n                ".concat(T(e.startDate,"COMPLETE")," <br /> ").concat(S(e.startDate,e.endDate),"\n              </span>"),eventLocation:e.location,clickable:!!e.alias,cardLink:"".concat(e.alias,"/?eventDate=").concat(T(e.startDate,"ISO")),title:e.title,image:e.imageUrl,imageAltText:e.title,linkLabel:e.eventButtonText,linkUrl:e.eventButtonUrl}))})))},U=function(e){var t=e.header,n=e.ctaButton,i=e.dataSource,c=e.maxItems;return(0,r.useEffect)((function(){"undefined"!=typeof window&&o({packageName:"component-events",component:"CardsGridEvents",type:"NA",configuration:{header:t,ctaButton:n,dataSource:i,maxItems:c}})}),[]),a().createElement(h,{header:t,ctaButton:n,dataSource:i,maxItems:c},a().createElement(_,null))};U.propTypes=w;var L=C.Ay.ul(y||(y=(0,D.A)(["\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  row-gap: 24px;\n  li {\n    max-width: 100%;\n    width: 100%;\n  }\n  .card {\n    height: 235px;\n    .card-img-top {\n      width: 235px;\n      height: auto;\n      border-radius: 0 !important;\n    }\n    .card-event-icons {\n      &:nth-child(1) {\n        width: 58%;\n      }\n      &:nth-child(2) {\n        width: 42%;\n      }\n    }\n  }\n  @media (max-width: 992px) {\n    .card {\n      height: 100%;\n      .card-event-details {\n        flex-direction: column;\n        .card-event-icons {\n          width: 100%;\n          &:nth-child(1) {\n            margin-bottom: 24px;\n          }\n        }\n      }\n      .card-img-top {\n        height: auto;\n        width: auto;\n      }\n    }\n  }\n"]))),I=function(){var e=(0,r.useContext)(i.Ur).feeds;return a().createElement(L,{"data-testid":"list-view-container"},null==e?void 0:e.map((function(e){return a().createElement("li",{key:e.id},a().createElement(i.Zp,{type:"event",eventFormat:"inline",horizontal:!0,eventTime:"<span>\n                ".concat(T(e.startDate,"COMPLETE")," <br /> ").concat(S(e.startDate,e.endDate),"\n              </span>"),eventLocation:e.location,clickable:!!e.alias,cardLink:"".concat(e.alias,"/?eventDate=").concat(T(e.startDate,"ISO")),title:e.title,image:e.imageUrl,imageAltText:e.title,linkLabel:e.eventButtonText,linkUrl:e.eventButtonUrl}))})))},A=function(e){var t=e.header,n=e.ctaButton,i=e.dataSource,c=e.maxItems;return(0,r.useEffect)((function(){"undefined"!=typeof window&&o({packageName:"component-events",component:"CardsListEvents",type:"NA",configuration:{header:t,ctaButton:n,dataSource:i,maxItems:c}})}),[]),a().createElement(h,{header:t,ctaButton:n,dataSource:i,maxItems:c},a().createElement(I,null))};A.propTypes=w;var j=n(845),M=n.n(j),R=function(e,t,n){M().render(a().createElement(e,t),n)},P=function(e){var t=e.targetSelector,n=e.props;R(U,n,document.querySelector(t))},q=function(e){var t=e.targetSelector,n=e.props;R(A,n,document.querySelector(t))}},883:t=>{t.exports=e},845:e=>{e.exports=t}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,n=[],o.O=(e,t,r,a)=>{if(!t){var i=1/0;for(l=0;l<n.length;l++){for(var[t,r,a]=n[l],c=!0,d=0;d<t.length;d++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](t[d])))?t.splice(d--,1):(c=!1,a<i&&(i=a));if(c){n.splice(l--,1);var s=r();void 0!==s&&(e=s)}}return e}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[t,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={643:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,c,d]=n,s=0;if(i.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(d)var l=d(o)}for(t&&t(n);s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(l)},n=self.webpackChunkAsuEvents=self.webpackChunkAsuEvents||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0;var i=o.O(void 0,[121],(()=>o(372)));return i=o.O(i)})()));