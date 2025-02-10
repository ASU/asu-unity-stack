import{j as f}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{d as b}from"./Layout-Bte-rkYZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";function $(){const h=["January","February","March","April","May","June","July","August","September","October","November","December"],g=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["Su","M","Tu","W","Th","F","Sa"],e={month:new Date().getMonth(),year:new Date().getFullYear()},y=(o,a)=>{const d=new Date,s=[],c=new Date(o,a).getDay(),C=new Date(o,a+1,0).getDate(),D=new Date(o,a,0).getDate();for(let t=1;t<=c;t++){const n=D-c+t,l=new Date(e.year,e.month-1,n).toLocaleString();s.push({key:l,date:n,monthClass:"prev"})}for(let t=1;t<=C;t++){const n=new Date(e.year,e.month,t).toLocaleString();t===d.getDate()&&e.month===d.getMonth()&&e.year===d.getFullYear()?s.push({key:n,date:t,monthClass:"current",todayClass:"today"}):s.push({key:n,date:t,monthClass:"current"})}if(s.length<42){const t=42-s.length;for(let n=1;n<=t;n++){const l=new Date(e.year,e.month+1,n).toLocaleString();s.push({key:l,date:n,monthClass:"next"})}}return s},v=()=>{const o=document.getElementById("calendar");o.innerHTML=`
      <h2><span class="highlight-black">${h[e.month]} ${e.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${g.map(a=>`<p>${a}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${u.map(a=>`<p>${a}</p>`).join("")}
        </div>
        <div class="body">
          ${y(e.year,e.month).map(a=>`<h3 id="${a.key}" class="calendar-item ${a.monthClass}" ${a.todayClass?`aria-label="${a.todayClass[0].toUpperCase()}${a.todayClass.slice(1)}"`:""}>
                  <span class="${a.todayClass?a.todayClass:""}">${a.date}</span>
                </h3>`).join("")}
        </div>
      </div>
      <div class="calendar-nav">
        <button
          id="prev-month"
          aria-label="Previous month"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="carousel"
          data-ga-region="main content"
          data-ga-section="calendar"
          data-ga="left chevron"
        >
          <span class="fas fa-angle-left"></span>
        </button>
        <button
          id="next-month"
          aria-label="Next month"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="carousel"
          data-ga-region="main content"
          data-ga-section="calendar"
          data-ga="right chevron"
        >
          <span class="fas fa-angle-right"></span>
        </button>
      </div>
  `};(o=>{var a=new Date(e.year,e.month+o);e.year=a.getFullYear(),e.month=a.getMonth(),v()})(0)}const T={title:"Molecules/Calendar/Templates",decorators:[b],parameters:{initFunc:{code:$,disable:!1},controls:{disable:!0}}},r=()=>f.jsx("div",{id:"calendar"});r.__docgenInfo={description:"",methods:[],displayName:"CalendarComponent"};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:'() => <div id="calendar"></div>',...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const _=["CalendarComponent"];export{r as CalendarComponent,_ as __namedExportsOrder,T as default};
