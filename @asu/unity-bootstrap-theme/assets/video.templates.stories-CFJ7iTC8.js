import{j as e}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import{s as w}from"./stock-video-person-drawing-_VQ0zdLC.js";import"./_commonjsHelpers-BosuxZz1.js";function V(){const a="video",f=".uds-video-btn-play",E=".uds-video-overlay",d="click",b="ended",N="flex",p="none",n=document.querySelector(a),s=document.querySelector(E),l=document.querySelector(f);function c(t){t.style.display===p?t.style.display=N:t.style.display=p}function r(t){t.paused?t.play():t.pause()}function x(t){r(this),c(this.nextElementSibling)}function _(t){t.stopPropagation();const D=this.parentNode;c(D),r(n)}function j(t){c(this),r(n)}function k(t){c(s)}n==null||n.addEventListener(d,x),l==null||l.addEventListener(d,_),s==null||s.addEventListener(d,j),n==null||n.addEventListener(b,k)}const Y={title:"Atoms/Videos/Templates",args:{content:!1},argTypes:{content:{name:"Content",control:{type:"boolean"}}},parameters:{initFunc:{disable:!1,code:V}}},i=({content:a})=>e.jsxs("div",{className:`uds-video-container ${a?"uds-video-with-caption":""}`,children:[e.jsxs("div",{className:"uds-video-player",children:[e.jsxs("video",{caption:"Example video",children:[e.jsx("source",{src:w}),e.jsx("track",{src:"path/to/caption.vtt",kind:"captions",srclang:"en",label:"english_captions"})]}),e.jsx("div",{className:"uds-video-overlay",children:e.jsxs("button",{type:"button",className:"btn btn-circle btn-circle-large btn-circle-alt-white uds-video-btn-play","data-ga":"play button","data-ga-name":"onclick","data-ga-event":"link","data-ga-action":"click","data-ga-type":"internal link","data-ga-region":"main content","data-ga-section":"Example video",children:[e.jsx("i",{className:"fa fa-play"}),e.jsx("span",{className:"visually-hidden",children:"Play"})]})})]}),a&&e.jsx("figure",{children:e.jsx("figcaption",{children:"Photo by Dent/ASU Now"})})]}),o=({content:a})=>e.jsxs("div",{className:`uds-video-container ${a?"uds-video-with-caption":""}`,children:[e.jsx("div",{className:"uds-video-player youtube-video",children:e.jsx("iframe",{title:"Example video",src:"https://www.youtube.com/embed/YW2p0ctzK9c"})}),a&&e.jsx("figure",{children:e.jsx("figcaption",{children:"Photo by Dent/ASU Now"})})]});i.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"YoutubeVideo"};var u,m,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`({
  content
}) => <div className={\`uds-video-container \${content ? "uds-video-with-caption" : ""}\`}>
    <div className="uds-video-player">
      <video caption="Example video">
        <source src={stockVideo} />
        <track src="path/to/caption.vtt" kind="captions" srclang="en" label="english_captions" />
      </video>
      <div className="uds-video-overlay">
        <button type="button" className="btn btn-circle btn-circle-large btn-circle-alt-white uds-video-btn-play" data-ga="play button" data-ga-name="onclick" data-ga-event="link" data-ga-action="click" data-ga-type="internal link" data-ga-region="main content" data-ga-section="Example video">
          <i className="fa fa-play"></i>
          <span className="visually-hidden">Play</span>
        </button>
      </div>
    </div>
    {content && <figure>
        <figcaption>Photo by Dent/ASU Now</figcaption>
      </figure>}
  </div>`,...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,y,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`({
  content
}) => <div className={\`uds-video-container \${content ? "uds-video-with-caption" : ""}\`}>
    <div className="uds-video-player youtube-video">
      <iframe title="Example video" src="https://www.youtube.com/embed/YW2p0ctzK9c"></iframe>
    </div>
    {content && <figure>
        <figcaption>Photo by Dent/ASU Now</figcaption>
      </figure>}
  </div>`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const A=["Default","YoutubeVideo"];export{i as Default,o as YoutubeVideo,A as __namedExportsOrder,Y as default};
