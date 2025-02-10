import{j as n}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{i as y}from"./index-CwXpTYmw.js";import{d as v}from"./Layout-Bte-rkYZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";const _=()=>{const f=()=>{document.querySelectorAll(".parallax-container").forEach(e=>{const t=e.querySelector("img"),i=e.offsetHeight-t.height*1.2,c=t.dataset.parallaxType==="scroll-to"?window.innerHeight:window.innerHeight+e.offsetHeight,o=e.getBoundingClientRect().top,a=(window.innerHeight-o)/c;if(a<0)t.style.top=i+"px";else if(a>1)t.style.top="0";else{const s=i*(1-a);t.style.top=s+"px"}})},d=e=>{const t=e.parentNode,i=e.width,c=e.height;let o=t.offsetWidth/i,r=0,a=c*o,s=i*o;const m=+e.dataset.parallaxFactor||1.2;!e.dataset.noScale&&a<t.offsetHeight*m&&(o=t.offsetHeight*m/a,a*=o,s*=o,r=(s-t.offsetWidth)/2*-1),e.style.height=a+"px",e.style.left=r+"px"},h=()=>{document.querySelectorAll(".parallax-container img").forEach((e,t)=>{e.complete?d(e):e.onload=()=>d(e)})},x=e=>{const{dataLayer:t}=window,i={event:"link",action:"click",name:"onclick",type:"internal link",region:"main content",...e};t&&t.push(i)};document.querySelectorAll("[data-ga-image-parallax]").forEach(e=>e.addEventListener("focus",()=>{const t={section:e.getAttribute("data-ga-image-parallax-section").toLowerCase(),text:e.getAttribute("data-ga-image-parallax").toLowerCase()};x(t)})),window.addEventListener("DOMContentLoaded",function(){h()}),window.addEventListener("resize",function(){h()}),window.addEventListener("scroll",f)},b={title:"Molecules/Image Parallax/Examples",decorators:[v],parameters:{initFunc:{code:_,disable:!1},controls:{disable:!0}}},l=()=>n.jsxs("div",{children:[n.jsx("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"500px"},children:"Section 1"}),n.jsx("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"500px"},children:"Section 2"}),n.jsx("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"500px"},children:"Section 3"}),n.jsx("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"500px"},children:"Section 4"}),n.jsxs("section",{className:"parallax-container carve-your-path",children:[n.jsx("img",{src:y.hero02,alt:"Img alt text",width:"1200",height:"900",loading:"lazy",decoding:"async",fetchpriority:"high"}),n.jsxs("div",{className:"parallax-container-content",children:[n.jsx("h2",{children:"Carve your path"}),n.jsx("p",{children:"At Arizona State University, you'll join a community that will help you explore your interests and learn new skills. Through quality academics, enrichment opportunities, and support from friends and faculty, you'll graduate prepared to accomplish your goals throughout your life."}),n.jsx("button",{type:"button",className:"btn btn-maroon","data-ga-image-parallax-section":"carve your path","data-ga-image-parallax":"visit asu",children:"Visit ASU"})]})]}),n.jsx("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"500px"},children:"Section 6"}),n.jsx("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"500px"},children:"Section 7"}),n.jsx("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"500px"},children:"Section 8"})]});l.__docgenInfo={description:"",methods:[],displayName:"twoImagesWithContentInPageOfSections"};var p,u,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{
    height: "500px"
  }}>
        Section 1
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{
    height: "500px"
  }}>
        Section 2
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{
    height: "500px"
  }}>
        Section 3
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{
    height: "500px"
  }}>
        Section 4
      </div>
      <section className="parallax-container carve-your-path">
        <img src={imageName.hero02} alt="Img alt text" width="1200" height="900" loading="lazy" decoding="async" fetchpriority="high" />
        <div className="parallax-container-content">
          <h2>Carve your path</h2>
          <p>
            At Arizona State University, you'll join a community that will help
            you explore your interests and learn new skills. Through quality
            academics, enrichment opportunities, and support from friends and
            faculty, you'll graduate prepared to accomplish your goals
            throughout your life.
          </p>
          <button type="button" className="btn btn-maroon" data-ga-image-parallax-section="carve your path" data-ga-image-parallax="visit asu">
            Visit ASU
          </button>
        </div>
      </section>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{
    height: "500px"
  }}>
        Section 6
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{
    height: "500px"
  }}>
        Section 7
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{
    height: "500px"
  }}>
        Section 8
      </div>
    </div>`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const E=["twoImagesWithContentInPageOfSections"];export{E as __namedExportsOrder,b as default,l as twoImagesWithContentInPageOfSections};
