import{j as a}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{i as H}from"./index-CwXpTYmw.js";import{h as A}from"./Layout-Bte-rkYZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";const I=require("bootstrap");function L(){const y=["asu-header","asuHeader"].find(t=>document.getElementById(t)),n=document.getElementById(y),e=document.getElementById("uds-anchor-menu"),N=e.parentNode,k=e.nextSibling,b=e.getElementsByClassName("nav-link"),r=new Map;let c=window.scrollY,i=!1;const x=document.body;let m=document.getElementById("toolbar-bar"),g=document.getElementById("toolbar-item-administration-tray"),S=m?m.offsetHeight:0,j=g?g.offsetHeight:0,w=S+j;const h=e.getBoundingClientRect().top+window.scrollY-w;for(let t of b){const s=t.getAttribute("href").replace("#",""),l=document.getElementById(s);r.set(t,l)}new I.ScrollSpy(x,{target:"#uds-anchor-menu nav",rootMargin:"20%"}),window.scrollY>h&&(n.appendChild(e),i=!0,e.classList.add("uds-anchor-menu-attached")),window.addEventListener("scroll",function(){const t=e.getBoundingClientRect().top,s=n.classList.contains("scrolled")?n.offsetHeight-32:n.offsetHeight;window.scrollY>c&&t>0&&t<s&&(i||(n.appendChild(e),i=!0,e.classList.add("uds-anchor-menu-attached")),c=window.scrollY),window.scrollY<c&&window.scrollY<=h&&i&&(N.insertBefore(e,k),i=!1,e.classList.remove("uds-anchor-menu-attached")),c=window.scrollY},{passive:!0});for(let[t,s]of r)t.addEventListener("click",function(l){l.preventDefault();let o=s.getBoundingClientRect().top-e.offsetHeight;window.scrollY===0&&(o+=65),e.classList.contains("uds-anchor-menu-sticky")||(window.scrollY>0&&(o+=24),o-=n.offsetHeight),window.scrollBy({top:o,behavior:"smooth"});const u=e.querySelector(".nav-link.active");u&&u.classList.remove("active"),l.target.classList.add("active")})}const M={title:"Atoms/Anchor Menu",parameters:{initFunc:{disable:!1,code:L},header:{forced:!0},controls:{disable:!0}},decorators:[A]},d=()=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"container-fluid",children:[a.jsxs("div",{className:"uds-hero-lg has-btn-row",children:[a.jsx("img",{className:"hero",src:H.hero02,alt:"Sample placeholder image.",width:"1920",height:"1000",loading:"lazy",decoding:"async",fetchpriority:"high"}),a.jsx("h1",{children:a.jsx("span",{className:"highlight-gold",children:"Gettysburg Address"})}),a.jsx("div",{className:"content",children:a.jsx("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}),a.jsx("div",{className:"btn-row",children:a.jsx("a",{href:"#",className:"btn btn-default btn-gold",children:"Read the 13th Amendment"})})]}),a.jsx("div",{id:"uds-anchor-menu",className:"uds-anchor-menu uds-anchor-menu-expanded-lg",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"uds-anchor-menu-wrapper",children:[a.jsxs("h2",{"data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample","data-ga-name":"onclick","data-ga-event":"collapse","data-ga-type":"click","data-ga":"On this page",children:["On This Page: ",a.jsx("span",{className:"fas fa-chevron-down"})]}),a.jsx("div",{id:"collapseExample",className:"card card-body collapse",children:a.jsxs("nav",{className:"nav","aria-label":"Same Page",children:[a.jsxs("a",{className:"nav-link",href:"#first","data-ga-name":"onclick","data-ga-event":"link","data-ga-action":"click","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"gettysburg address","data-ga":"Anchor item",children:[a.jsx("span",{className:"fas fa-link"}),"First item"]}),a.jsxs("a",{className:"nav-link",href:"#second","data-ga-name":"onclick","data-ga-event":"link","data-ga-action":"click","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"gettysburg address","data-ga":"Anchor item",children:[a.jsx("span",{className:"fas fa-link"}),"Second item"]}),a.jsxs("a",{className:"nav-link",href:"#third","data-ga-name":"onclick","data-ga-event":"link","data-ga-action":"click","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"gettysburg address","data-ga":"Anchor item",children:[a.jsx("span",{className:"fa fa-link"}),"Third item"]}),a.jsxs("a",{className:"nav-link",href:"#fourth","data-ga-name":"onclick","data-ga-event":"link","data-ga-action":"click","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"gettysburg address","data-ga":"Anchor item",children:[a.jsx("span",{className:"fa fa-link"}),"Fourth item"]}),a.jsxs("a",{className:"nav-link",href:"#fifth","data-ga-name":"onclick","data-ga-event":"link","data-ga-action":"click","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"gettysburg address","data-ga":"Anchor item",children:[a.jsx("span",{className:"fa fa-link"}),"Fifth item"]})]})})]})})})]}),a.jsx("div",{className:"container",children:a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col-md-12 pb-5",children:[a.jsx("div",{className:"py-2",style:{minHeight:"80vh"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis dictum ac elit at elementum. In sit amet hendrerit lacus."}),a.jsx("div",{id:"first",className:"py-2",style:{minHeight:"80vh"},children:"First. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis dictum ac elit at elementum. In sit amet hendrerit lacus."}),a.jsx("div",{id:"second",className:"py-2",style:{minHeight:"80vh"},children:"Second. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis dictum ac elit at elementum. In sit amet hendrerit lacus."}),a.jsx("div",{id:"third",className:"py-2",style:{minHeight:"80vh"},children:"Third. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis dictum ac elit at elementum. In sit amet hendrerit lacus."}),a.jsx("div",{id:"fourth",className:"py-2",style:{minHeight:"80vh"},children:"Fourth. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis dictum ac elit at elementum. In sit amet hendrerit lacus."}),a.jsx("div",{id:"fifth",className:"py-2",style:{minHeight:"80vh"},children:"Fifth. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis dictum ac elit at elementum. In sit amet hendrerit lacus."})]}),a.jsx("div",{className:"py-2"})]})}),a.jsx("div",{style:{height:"1000px"}})]});d.__docgenInfo={description:"",methods:[],displayName:"AnchorMenu"};var p,v,f;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <>
      <div className="container-fluid">
        <div className="uds-hero-lg has-btn-row">
          <img className="hero" src={imageName.hero02} alt="Sample placeholder image." width="1920" height="1000" loading="lazy" decoding="async" fetchpriority="high" />
          <h1>
            <span className="highlight-gold">Gettysburg Address</span>
          </h1>
          <div className="content">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="btn-row">
            <a href="#" className="btn btn-default btn-gold">
              Read the 13th Amendment
            </a>
          </div>
        </div>
        <div id="uds-anchor-menu" className="uds-anchor-menu uds-anchor-menu-expanded-lg">
          <div className="container">
            <div className="uds-anchor-menu-wrapper">
              <h2 data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" data-ga-name="onclick" data-ga-event="collapse" data-ga-type="click" data-ga="On this page">
                On This Page: <span className="fas fa-chevron-down"></span>
              </h2>
              <div id="collapseExample" className="card card-body collapse">
                <nav className="nav" aria-label="Same Page">
                  <a className="nav-link" href="#first" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="gettysburg address" data-ga="Anchor item">
                    <span className="fas fa-link"></span>First item
                  </a>
                  <a className="nav-link" href="#second" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="gettysburg address" data-ga="Anchor item">
                    <span className="fas fa-link"></span>Second item
                  </a>
                  <a className="nav-link" href="#third" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="gettysburg address" data-ga="Anchor item">
                    <span className="fa fa-link"></span>Third item
                  </a>
                  <a className="nav-link" href="#fourth" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="gettysburg address" data-ga="Anchor item">
                    <span className="fa fa-link"></span>Fourth item
                  </a>
                  <a className="nav-link" href="#fifth" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="gettysburg address" data-ga="Anchor item">
                    <span className="fa fa-link"></span>Fifth item
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 pb-5">
            <div className="py-2" style={{
            minHeight: "80vh"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
              dictum ac elit at elementum. In sit amet hendrerit lacus.
            </div>
            <div id="first" className="py-2" style={{
            minHeight: "80vh"
          }}>
              First. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
              dictum ac elit at elementum. In sit amet hendrerit lacus.
            </div>
            <div id="second" className="py-2" style={{
            minHeight: "80vh"
          }}>
              Second. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
              dictum ac elit at elementum. In sit amet hendrerit lacus.
            </div>
            <div id="third" className="py-2" style={{
            minHeight: "80vh"
          }}>
              Third. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
              dictum ac elit at elementum. In sit amet hendrerit lacus.
            </div>
            <div id="fourth" className="py-2" style={{
            minHeight: "80vh"
          }}>
              Fourth. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
              dictum ac elit at elementum. In sit amet hendrerit lacus.
            </div>
            <div id="fifth" className="py-2" style={{
            minHeight: "80vh"
          }}>
              Fifth. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat neque magna. Suspendisse potenti. Duis
              dictum ac elit at elementum. In sit amet hendrerit lacus.
            </div>
          </div>
          <div className="py-2">

          </div>
        </div>
      </div>
      <div style={{
      height: "1000px"
    }}></div>
    </>;
}`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const _=["AnchorMenu"];export{d as AnchorMenu,_ as __namedExportsOrder,M as default};
